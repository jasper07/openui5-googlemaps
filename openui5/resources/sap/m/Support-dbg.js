/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.Support");

/**
 * @class
 * <code>sap.m.Support</code> shows the technical information for SAPUI5 Mobile Applications.
 * This technical information includes
 *  * SAPUI5 Version
 *  * User Agent
 *  * Configurations (Bootstrap and Computed)
 *  * URI parameters
 *  * All loaded module names
 *
 * In order to show the device information, the user must follow the following gestures.
 * 	1 - Hold the device in "landscape" mode
 * 	2 - Tap on any element (possibly element which does not have touch event e.g text or header (because of the stopPropagation))
 * 	3 - Hold finger minimum 2 seconds, up to 5 seconds
 * 	4 - Change device rotation to "portrait" mode
 *  5 - Release finger
 *
 * NOTE: This class is internal and all its functions must not be used by an application
 *
 * As <code>sap.m.Support</code> is a static class, a <code>jQuery.sap.require("sap.m.Support");</code>
 * statement must be implicitly executed before the class is used.
 *
 * Enable Support:
 * <pre>
 * //import library
 * jQuery.sap.require("sap.m.Support");
 *
 * //By default after require, support is enabled but implicitly we can call
 * sap.m.Support.on();
 * </pre>
 *
 * Disable Support:
 * <pre>
 * sap.m.Support.off();
 * </pre>
 *
 * @author SAP AG
 * @since 1.11.0
 *
 * @static
 * @protected
 * @namespace
 * @name sap.m.Support
 */
sap.m.Support = (function($, document) {

	var dialog,
		startTime,
		isEventRegistered,
		timeMinLimit = 2000,
		timeMaxLimit = 5000,
		orientations = {
		    start : "landscape",
		    end : "portrait"
		};

	// copied from core
	function line(buffer, right, border, label, content) {
		buffer.push("<tr><td class='sapUiSupportTechInfoBorder'><label class='sapUiSupportLabel'>", jQuery.sap.escapeHTML(label), "</label><br>");
		var ctnt = content;
		if ($.isFunction(content)) {
			ctnt = content(buffer) || "";
		}
		buffer.push($.sap.escapeHTML(ctnt));
		buffer.push("</td></tr>");
	}

	// copied from core
	function multiline(buffer, right, border, label, content) {
		line(buffer, right, border, label, function(buffer) {
			buffer.push("<table border='0' cellspacing='5' cellpadding='5' width='100%'>");
			$.each(content, function(i, v) {
				var val = "";
				if (v) {
					if (typeof(v) == "string" || typeof(v) == "boolean" || ($.isArray(v) && v.length == 1)) {
						val = v;
					} else if(($.isArray(v) || $.isPlainObject(v)) && window.JSON) {
						val = window.JSON.stringify(v);
					}
				}
				line(buffer, false, false, i, "" + val);
			});
			buffer.push("</table>");
		});
	}

	// copied from core
	function getTechnicalContent() {
		var html,
			oConfig = sap.ui.getCore().getConfiguration(),
			oData = {
				version: sap.ui.version,
				build: sap.ui.buildinfo.buildtime,
				change: sap.ui.buildinfo.lastchange,
				useragent: navigator.userAgent,
				docmode: document.documentMode ||  "",
				debug: $.sap.debug(),
				bootconfig: window["sap-ui-config"] || {},
				modules: $.sap.getAllDeclaredModules(),
				uriparams: $.sap.getUriParameters().mParams,
				appurl: window.location.href,
				config: {
					theme: oConfig.getTheme(),
					language: oConfig.getLanguage(),
					formatLocale: oConfig.getFormatLocale(),
					accessibility: "" + oConfig.getAccessibility(),
					animation: "" + oConfig.getAnimation(),
					rtl: "" + oConfig.getRTL(),
					debug: "" + oConfig.getDebug(),
					inspect: "" + oConfig.getInspect(),
					originInfo: "" + oConfig.getOriginInfo(),
					noDuplicateIds: "" + oConfig.getNoDuplicateIds()
				}
			};

		html = ["<table border='0' cellspacing='5' cellpadding='5' width='100%'>"];
		line(html, true, true, "SAPUI5 Version", function(buffer) {
			buffer.push(oData.version, " (built at ", oData.build, ", last change ", oData.change, ")");
		});
		line(html, true, true, "User Agent", function(buffer) {
			buffer.push(oData.useragent, (oData.docmode ? ", Document Mode '" + oData.docmode + "'" : ""));
		});
		line(html, true, true, "Debug Sources", function(buffer) {
			buffer.push((oData.debug ? "ON" : "OFF") );
		});
		line(html, true, true, "Application", oData.appurl);
		multiline(html, true, true, "Configuration (bootstrap)", oData.bootconfig);
		multiline(html, true, true, "Configuration (computed)", oData.config);
		multiline(html, true, true, "URI Parameters", oData.uriparams);
		line(html, true, true, "Loaded Modules (" + oData.modules.length + ")", function(buffer) {
			buffer.push("<ul>");
			$.each(oData.modules.sort(), function(i, v) {
				if (v.indexOf("sap.ui.core.support") < 0) {
					buffer.push("<li>", v, "</li>");
				}
			});
			buffer.push("</ul>");
		});
		html.push("</table>");

		return new sap.ui.core.HTML({
			content : html.join("").replace(/\{/g, "&#123;").replace(/\}/g, "&#125;")
		});
	}

	// get or create dialog instance and return
	function getDialog() {
		if (dialog) {
			return dialog;
		}

		$.sap.require("sap.m.Dialog");
		$.sap.require("sap.m.Button");
		$.sap.require("sap.ui.core.HTML");

		dialog = new sap.m.Dialog({
			title : "Technical Information",
			horizontalScrolling: true,
			verticalScrolling: true,
			stretch: jQuery.device.is.phone,
			leftButton : new sap.m.Button({
				text : "Close",
				type : "Reject",
				press : function() {
					dialog.close();
				}
			}),
			afterOpen : function() {
				sap.m.Support.off();
			},
			afterClose : function() {
				sap.m.Support.on();
			}
		}).addStyleClass("sapMSupport");
		
		return dialog;
	}

	function onTouchStart() {
		var orientation = $.event.special.orientationchange.orientation();
		if (orientation == orientations.start) {
			startTime = Date.now();
			document.addEventListener('touchend', onTouchEnd);
		}
	}

	function onTouchEnd() {
		var timeDiff = Date.now() - startTime,
			orientation = $.event.special.orientationchange.orientation();
		
		document.removeEventListener('touchend', onTouchEnd);
		if (orientation == orientations.end && timeDiff > timeMinLimit && timeDiff < timeMaxLimit) {
			show();
		}
	}

	function show() {
		var container = getDialog();
		container.removeAllAggregation("content");
		container.addAggregation("content", getTechnicalContent());
		dialog.open();
	}

	return ({
		/**
		 * Enables support.
		 *
		 * @return {object} sap.m.Support
		 * @protected
		 * @name sap.m.Support.on
		 * @function
		 */
		on : function() {
			if (!isEventRegistered && "ontouchstart" in document) {
				isEventRegistered = true;
				document.addEventListener("touchstart", onTouchStart);
			}
			return this;
		},

		/**
		 * Disables support.
		 *
		 * @return {object} sap.m.Support
		 * @protected
		 * @name sap.m.Support.off
		 * @function
		 */
		off : function() {
			if (isEventRegistered) {
				isEventRegistered = false;
				document.removeEventListener("touchstart", onTouchStart);
			}
			return this;
		},
		
		open : function() {
			show();
		}
	}).on();

}(jQuery, document));