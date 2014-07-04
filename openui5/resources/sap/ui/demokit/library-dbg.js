/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.ui.demokit (1.20.7)
 */
jQuery.sap.declare("sap.ui.demokit.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAPUI5 library with non-public controls, used in the UI5 demokit (SDK)
 *
 * @namespace
 * @name sap.ui.demokit
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.commons.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.ui.demokit",
  dependencies : ["sap.ui.core","sap.ui.commons"],
  types: [
    "sap.ui.demokit.UI5EntityCueCardStyle"
  ],
  interfaces: [],
  controls: [
    "sap.ui.demokit.CodeSampleContainer",
    "sap.ui.demokit.CodeViewer",
    "sap.ui.demokit.FileUploadIntrospector",
    "sap.ui.demokit.HexagonButton",
    "sap.ui.demokit.HexagonButtonGroup",
    "sap.ui.demokit.IndexLayout",
    "sap.ui.demokit.TagCloud",
    "sap.ui.demokit.UI5EntityCueCard"
  ],
  elements: [
    "sap.ui.demokit.Tag",
    "sap.ui.demokit.UIAreaSubstitute"
  ],
  version: "1.20.7"});

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.demokit.UI5EntityCueCardStyle.
jQuery.sap.declare("sap.ui.demokit.UI5EntityCueCardStyle");


/**
 * @class different styles for an entity cue card.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.ui.demokit.UI5EntityCueCardStyle = {
  
    /**
     * default style (no special styling). 
     * @public
     */
    Standard : "Standard",

    /**
     * Demokit style 
     * @public
     */
    Demokit : "Demokit"

  };

// -----------------------------------------------------------------------------
// Begin of Library Initialization coding, copied from shared.js
// -----------------------------------------------------------------------------

jQuery.sap.require("sap.ui.demokit.js.highlight-query-terms");

sap.ui.lazyRequire("sap.ui.demokit.UI5EntityCueCard", "attachToContextMenu detachFromContextMenu");
sap.ui.lazyRequire("sap.ui.demokit.DemokitApp", "new getInstance");
sap.ui.lazyRequire("sap.ui.demokit.IndexPage");

sap.ui.getCore().attachInitEvent( function () {

	if ( jQuery("body").hasClass("sapUiDemokitBody") ) {
	
		// replace h1 headers with our title
		jQuery("h1").each(function() {
			var $=jQuery(this),
			sTitle = $.text(),
			sColor = "Gray",//$.attr('color'),
			sIcon  = $.attr('icon'),
			sIconPos = $.attr('iconPos') || 'left:40px;top:20px;',
			$title = jQuery("<div class='sapUiDemokitTitle'><span>" + sTitle + "</span></div>");
	
			// first attach new content to DOM
			$.replaceWith($title);
			// only then enrich it with a HexButton (otherwise placeAt() will not find the UIArea)
			if ( sColor || sIcon) {
				$title.prepend("<div id='sap-demokit-icon'></div>");
				new sap.ui.demokit.HexagonButton({color:sColor, imagePosition:'position: relative;' + sIconPos, icon:sIcon}).placeAt("sap-demokit-icon");
			}
	
		});
	
		var $h2 = jQuery("h2");
		var $settings = jQuery('h2[id="settings"]');
		var sControls = jQuery("html").attr('data-sap-ui-dk-controls');
		if ( $settings.size()===0 && $h2.size()>=2 && sControls) {
			jQuery($h2[1]).before(jQuery("<h2 id='settings'>Settings (Overview)</h2><div cue-card='" + sControls.split(',')[0] + "'></div>"));
			$h2 = jQuery("h2");
		}
		var $tln=jQuery("ul.sapDkTLN");
		if ( $h2.size() > 0 && $tln.size() == 0 ) {
			$h2.first().before($tln = jQuery("<ul class='sapDkTLN'></ul>"));
		}
		if ( true ) {
			$h2.each(function(idx) {
				var $ = jQuery(this);
				// Skip hidden sections. Can be used to suppress sections (e.g. settings) in a page
				if ( $.css('display') === 'none' ) {
					return;
				}
				if ( !$.attr('id') ) {
					$.attr('id', '__' + idx);
				}
				var a = jQuery("<a></a>").attr("href", "#" + $.attr('id')).text($.text()).addClass('sapDkLnk');
				var li = jQuery("<li></li>").append(a)
				$tln.append(li);
			});
		}
		
		// create CodeSampleContainers
		jQuery("[code-sample]").each(function() {
			var $=jQuery(this),
			sUiAreaId = $.attr('code-sample'),
			sScriptId = $.attr('script') || $.children('script').attr('id') || sUiAreaId + "-script";
			$.addClass("sapUiDemokitSampleCont");
			new sap.ui.demokit.CodeSampleContainer("code-sample-" + sUiAreaId, { scriptElementId : sScriptId, uiAreaId : sUiAreaId}).placeAt(this);
		});
	
		// create CueCards
		jQuery("[cue-card]").each(function() {
			var $=jQuery(this),
				sEntityName = $.attr('cue-card');
			
			new sap.ui.demokit.UI5EntityCueCard({ 
				entityName : sEntityName, 
				collapsible : false, 
				expanded : true, 
				style: 'Demokit',
				navigable: true,
				navigate: function(oEvent) {
					top.sap.ui.demokit.DemokitApp.getInstance().navigateToType(oEvent.getParameter("entityName"));
					oEvent.preventDefault();
				},
				title: 'Settings (Overview)'
			}).placeAt(this);
		});
	
	}
	
});


sap.ui.demokit._loadAllLibInfo = function(sAppRoot, sInfoType /*"_getDocuIndex", "_getThirdPartyInfo"*/, fnCallback) {
	jQuery.sap.require("sap.ui.core.util.LibraryInfo");
	var libInfo = new sap.ui.core.util.LibraryInfo();
	var sUrl = sAppRoot + "discovery/all_libs";
	
	jQuery.ajax({
		url : sUrl,
		dataType : "json",
		error : function(xhr, status, e) {
			jQuery.sap.log.error("failed to load library list from '" + sUrl + "': " + status + ", " + e); 
			fnCallback(null, null);
		},
		success : function(oData, sStatus, oXHR) { 
			var libs = oData["all_libs"];
			if(!libs){
				jQuery.sap.log.error("failed to load library list from '" + sUrl + "': " + sStatus + ", Data: " + libs);
				fnCallback(null, null);
				return;
			}
			
			var count = 0,
				len = libs.length,
				oLibInfos = {},
				aLibs = [],
				libName;
			for(var i=0; i<len; i++){
				libName = libs[i].entry.replace(/\//g, ".");
				aLibs.push(libName);
				libInfo[sInfoType](libName, function(oExtensionData){
					oLibInfos[oExtensionData.library] = oExtensionData;
					count++;
					if(count == len) {
						fnCallback(aLibs, oLibInfos);
					}
				});
			}
		}
	});
};
