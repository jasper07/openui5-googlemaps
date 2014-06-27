/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides class sap.ui.core.plugin.LessSupport
sap.ui.define('sap/ui/core/plugin/LessSupport', ['jquery.sap.global', 'sap/ui/core/Core'],
	function(jQuery, Core) {
	"use strict";

	/**
	 * FEATURE TO INCREASE DEVELOPMENT EXPERIENCE! NO PRODUCTIVE USAGE ALLOWED!
	 */
	
	/**
	 * Creates an instance of the class <code>sap.ui.core.plugin.LessSupport</code>
	 *
	 * @class Core plugin for the enabling less support for SAPUI5 which can be
	 *        used for development scenarios to avoid the generation of the CSS
	 *        files (increases the dev experience!). This is an experimental 
	 *        feature - DO NOT USE IN PRODUCTIVE SCENARIOS!!
	 *
	 * @author Peter Muessig
	 * @version 1.20.7
	 * @private
	 * @name sap.ui.core.plugin.LessSupport
	 */
	var LessSupport = function() {
	};

	/**
	 * Will be invoked by <code>sap.ui.core.Core</code> to notify the plugin to start.
	 *
	 * @param {sap.ui.core.Core} oCore reference to the Core
	 * @param {boolean} [bOnInit] whether the hook is called during core initialization
	 * @public
	 * @name sap.ui.core.plugin.LessSupport#startPlugin
	 * @function
	 */
	LessSupport.prototype.startPlugin = function(oCore, bOnInit) {
		
		jQuery.sap.log.info("Starting LessSupport plugin.");
		jQuery.sap.log.warning("  NOT FOR PRODUCTIVE USAGE! LessSupport is an experimental feature which might change in future!");

		// get the URI parameters
		var oUriParams = jQuery.sap.getUriParameters();
		var sNoLess = oUriParams.get("sap-ui-xx-noless");
		if (sNoLess) {
			sNoLess = sNoLess.toLowerCase();
		}

		// LessSupport is disabled for the testrunner
		if (sNoLess !== "false" && (window.top.JsUnit || (window.sap.ui.test && window.sap.ui.test.qunit))) {
			jQuery.sap.log.info("  LessSupport has been deactivated for JSUnit Testrunner or QUnit.");
			return;
		}
		
		// check the URI parameters to disable LessSupport
		if (sNoLess && sNoLess !== "false") {
			jQuery.sap.log.info("  LessSupport has been deactivated by URL parameter.");
			return;
		} else {
			jQuery.sap.log.info("  LessSupport can be deactivated by adding the following parameter to your URL: \"sap-ui-xx-noless=X\".");
		}
		
		// configure LESS (development mode + error handling)
		window.less = window.less || {
			env: "development",
			errorReporting: function(sMethod, ex, sRootHref) {
				if (sMethod === "add") {
					console.error("Failed to parse: " + sRootHref, ex);
				}
			}
		};
		
		// include LESS (AMD fix is done in jQuery.sap.global)
		jQuery.sap.require("sap.ui.thirdparty.less");
		
		this.oCore = oCore;
		this.bActive = true;

		// overwrite the toCSS method of the Color function to return "transparent" instead of rgba(0,0,0,0)
		var fnToCSS = window.less.tree.Color.prototype.toCSS;
		window.less.tree.Color.prototype.toCSS = function(){
			if(this.alpha == 0 && this.rgb[0] == 0 && this.rgb[1] == 0 && this.rgb[2] == 0){
				return "transparent";
			}
			return fnToCSS.apply(this, arguments);
		};
		
		// overwrite the includeLibraryTheme/applyTheme function to inject LESS
		this.oCore.includeLibraryTheme = jQuery.proxy(this.includeLibraryTheme, this);
		this.oCore.applyTheme = jQuery.proxy(this.applyTheme, this);

		// update the themes (only when LESS files are newer than the CSS files)
		var that = this, bUseLess = false;
		var aLibs = [];
		jQuery("link[id^=sap-ui-theme-]").each(function() {
			var _bUseLess = that.initLink(this);
			bUseLess = _bUseLess || bUseLess;
			if(_bUseLess){
				aLibs.push(this.id.substr(13));
			}
		});
		
		// refresh less styles or remove notifier
		this.refreshLess(bUseLess);
		
		// notify that the theme has been changed!
		
		var counter = 0;
		
		function checkThemeApplied(){
			var ok = true;
			var check;
			for(var i=0; i<aLibs.length; i++){
				check = sap.ui.core.ThemeCheck.checkStyle("less:"+aLibs[i], true);
				if(check){
					jQuery.sap.byId("sap-ui-theme-"+aLibs[i]).attr("sap-ui-ready", "true");
				}
				ok = ok && check;
			}
			
			counter++;
			if(counter > 100){
				ok = true;
				jQuery.sap.log.warning("LessSupport: Max theme check cycles reached.");
			}
			
			if(ok){
				sap.ui.core.ThemeCheck.themeLoaded = true;
				jQuery.sap.delayedCall(0, oCore, "fireThemeChanged", [{theme: oCore.sTheme}]); 
			}else{
				jQuery.sap.delayedCall(100, null, checkThemeApplied); 
			}
		}
		
		if (bUseLess) {
			jQuery.sap.delayedCall(100, null, checkThemeApplied); 
		}
		
	};

	/**
	 * Will be invoked by <code>sap.ui.core.Core</code> to notify the plugin to start
	 * @param {sap.ui.core.Core} oCore reference to the Core
	 * @public
	 * @name sap.ui.core.plugin.LessSupport#stopPlugin
	 * @function
	 */
	LessSupport.prototype.stopPlugin = function() {
		jQuery.sap.log.info("Stopping LessSupport plugin.");
		if (this.bActive) {
			// remove the content of the LESS style element 
			jQuery("link[id^=sap-ui-theme-]").each(function() {
				var sLibName = this.id.substr(13); // length of "sap-ui-theme-"
				jQuery.sap.byId("less:" + sLibName).remove();
			});
			// remove the hooks from the Core
			delete this.oCore.includeLibraryTheme;
			delete this.oCore.applyTheme;
			// release the Core
			this.oCore = null;
		}
	};
	
	/**
	 * initialize a link element by preparing the LESS style element directly
	 * after the link (to keep the order of the stylesheets how the rules are
	 * finally applied)
	 * @param oLink {LinkElement} ref to a link element
	 * @private
	 * @name sap.ui.core.plugin.LessSupport#initLink
	 * @function
	 */
	LessSupport.prototype.initLink = function(oLink) {
		
		var bUseLess = this.updateLink(oLink);
		
		// add the section for the generated CSS code
		jQuery("<style>").
			attr("id", "less:" + oLink.id.substr(13)).
			attr("type", "text/css").
			attr("media", this.media || "screen").
			insertAfter(oLink);
		
		return bUseLess;
		
	};
		
	/**
	 * updates a link element by quering the LESS and CSS file, checking which
	 * one is the latest version and updates the link with the most current
	 * LESS or CSS file.
	 * after the link (to keep the order of the stylesheets how the rules are
	 * finally applied)
	 * @param oLink {LinkElement} ref to a link element
	 * @private
	 * @name sap.ui.core.plugin.LessSupport#updateLink
	 * @function
	 */
	LessSupport.prototype.updateLink = function(oLink) {
		
		// modify style sheet URL to point to the new theme
		// be aware of custom css included with the colon (see includeLibraryTheme) // TODO: what is this??
		var sLibName = oLink.id.substr(13); // length of "sap-ui-theme-"
		var pos;
		if ((pos = sLibName.indexOf("-[")) > 0) { // assumes that "-[" does not occur as part of a library name
			sLibName = sLibName.substr(0, pos);
		}
		var sBaseUrl = this.oCore._getThemePath(sLibName, this.oCore.sTheme);
		var fileName = oLink.href.substring(oLink.href.lastIndexOf("/") + 1, oLink.href.lastIndexOf("."));
		
		// is it already less?
		var bLess = jQuery.sap.endsWith(oLink.href, ".less");
		
		// check if the less file is more up-to-date than the css file
		var iLessLastModified = this.getLastModified(sBaseUrl + fileName + ".less");
		var iCssLastModified = this.getLastModified(sBaseUrl + fileName + ".css");
		var bUseLess = iLessLastModified > iCssLastModified;
		
		// info log
		jQuery.sap.log.debug("LessSupport.updateLink: " + sBaseUrl + fileName + ": " + (bUseLess ? "LESS" : "CSS"));
		
		// use the CSS file when the CSS file is newer or equal!
		if (!bUseLess) {
			if (oLink.title) {
				delete oLink.title;
			}
			oLink.href = sBaseUrl + fileName + ".css";
			oLink.rel = "stylesheet";
			this.unregisterLink(oLink);
			return false;
		}
		
		// cleanup the local storage cache of less to avoid caching issues
		// INFO: necessary when running in production mode
		/*
		if (window.localStorage) {
			var sHref = oLink.href.replace(/.css$/i, ".less");
			delete window.localStorage[sHref];
			delete window.localStorage[sHref + ":timestamp"];
		}
		*/
		
		// use the LESS file!
		oLink.title = sLibName;
		oLink.href = sBaseUrl + fileName + ".less";
		oLink.rel = "stylesheet/less";
		this.registerLink(oLink);
		return true;
		
	};
	
	/**
	 * retrieves the last modified timestamp of the resource for the given url.
	 * @param sUrl {string} URL to a resource
	 * @return {number} timestamp
	 * @private
	 * @name sap.ui.core.plugin.LessSupport#getLastModified
	 * @function
	 */
	LessSupport.prototype.getLastModified = function(sUrl) {

		// HEAD request to retrieve the last modified header
		var sLastModified;
		jQuery.ajax({
			url: sUrl,
			type: "HEAD",
			complexResult: true,
			async: false,
			success : function(data, textStatus, xhr) {
				sLastModified = xhr.getResponseHeader("Last-Modified") || -1;
			},
			error : function(xhr, textStatus, error) {
				sLastModified = -1;
			}
		});
		// convert the string into a timestamp
		jQuery.sap.log.debug("CSS/LESS head-check: " + sUrl + "; last-modified: " + sLastModified);
		return Date.parse(sLastModified);
		
	};
	
	/**
	 * hook into the <code>Core.applyTheme</code> function to update the created
	 * links for the less support
	 * @param sThemeName {string} name of the theme
	 * @param sThemeBaseUrl {string} base URL of the theme
	 * @private
	 * @name sap.ui.core.plugin.LessSupport#applyTheme
	 * @function
	 */
	LessSupport.prototype.applyTheme = function(sThemeName, sThemeBaseUrl) {
		// execute the default behavior
		Core.prototype.applyTheme.apply(this.oCore, arguments);
		// update the created links for less support
		var that = this, bUseLess = false;
		jQuery("link[id^=sap-ui-theme-]").each(function() {
			bUseLess = that.updateLink(this) || bUseLess;
		});
		// refresh less styles or remove notifier
		this.refreshLess(bUseLess);
	};
		
	/**
	 * hook into the <code>Core.includeLibraryTheme</code> function to initialize 
	 * the created links for the less support. 
	 * @param sThemeName {string} name of the theme
	 * @param sThemeBaseUrl {string} base URL of the theme
	 * @private
	 * @name sap.ui.core.plugin.LessSupport#includeLibraryTheme
	 * @function
	 */
	LessSupport.prototype.includeLibraryTheme = function(sLibName) {
		// execute the default behavior
		Core.prototype.includeLibraryTheme.apply(this.oCore, arguments);
		// initialize the created link for less support
		var that = this, bUseLess = false;
		jQuery("link[id='sap-ui-theme-" + sLibName +"']").each(function() {
			bUseLess = that.initLink(this) || bUseLess;
		});
		// refresh less styles or remove notifier
		this.refreshLess(bUseLess);
	};

	/**
	 * registers a link element in less to be observed when calling refresh()
	 * @param oLink {LinkElement} ref to the link element  
	 * @private
	 * @name sap.ui.core.plugin.LessSupport#registerLink
	 * @function
	 */
	LessSupport.prototype.registerLink = function(oLink) {
		if (window.less && window.less.sheets) {
			var iIndex = jQuery.inArray(oLink, window.less.sheets);
			if (iIndex === -1) {
				window.less.sheets.push(oLink);
			}
		}
	};

	/**
	 * unregisters a link element in less
	 * @param oLink {LinkElement} ref to the link element  
	 * @private
	 * @name sap.ui.core.plugin.LessSupport#unregisterLink
	 * @function
	 */
	LessSupport.prototype.unregisterLink = function(oLink) {
		if (window.less && window.less.sheets) {
			var sLibName = oLink.id.substr(13);
			var iIndex = jQuery.inArray(oLink, window.less.sheets);
			if (iIndex >= 0) {
				window.less.sheets.splice(iIndex, 1);
				// clear the content of the LESS style element 
				jQuery.sap.byId("less:" + sLibName).html("");
			}
		}
	};

	/**
	 * refreshes the less files / generates the css and injects it into the 
	 * styles section which has been created in the <code>initLink</code>
	 * function.
	 * <br>
	 * additionally it shows or hides a notifier if the less mode is active
	 * @param bUseLess {boolean} flag whether less or css mode 
	 * @private 
	 * @name sap.ui.core.plugin.LessSupport#refreshLess
	 * @function
	 */
	LessSupport.prototype.refreshLess = function(bUseLess) {

		// add the less mode indicator
		if (bUseLess) {
			if (!document.getElementById("sap-ui-ide-less-mode")) {
				jQuery("<span>").
					attr("id", "sap-ui-ide-less-mode").
					attr("title", "Less mode is active. Click to hide this information.").
					css("position", "absolute").
					css("right", "10px").
					css("bottom", "10px").
					css("padding", "10px").
					css("border", "3px solid red").
					css("border-radius", "10px").
					css("opacity", "0.75").
					css("color", "black").
					css("background-color", "white").
					css("font-weight", "bold").
					css("z-index", "99999").
					css("cursor", "pointer").
					text("LESS MODE").
					bind("click", function(){jQuery(this).css("display", "none");}).
					appendTo(window.document.body);
			}
		} else {
			var oNotifier = document.getElementById("sap-ui-ide-less-mode");
			if (oNotifier) {
				jQuery(oNotifier).remove();
			}
		}
		
		if (window.less && window.less.refresh) {
			window.less.refresh();
		}
		
	};
	
	/**
	 * Create the <code>sap.ui.core.plugin.LessSupport</code> plugin and
	 * register it within the <code>sap.ui.core.Core</code>.
	 */
	var oThis = new LessSupport();
	sap.ui.getCore().registerPlugin(oThis);

	return LessSupport;

}, /* bExport= */ true);
