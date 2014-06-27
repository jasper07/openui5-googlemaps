/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.unified.ShellOverlay
jQuery.sap.declare("sap.ui.unified.ShellOverlayRenderer");

/**
 * @class ShellOverlay renderer.
 * @static
 */
sap.ui.unified.ShellOverlayRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oShell an object representation of the control that should be rendered
 */
sap.ui.unified.ShellOverlayRenderer.render = function(rm, oControl){
	rm.write("<div");
	rm.writeControlData(oControl);
	rm.addClass("sapUiUfdShellOvrly");
	if(oControl._opening){
		rm.addClass("sapUiUfdShellOvrlyCntntHidden");
		rm.addClass("sapUiUfdShellOvrlyOpening");
	}
	
	if(oControl._getAnimActive()){
		rm.addClass("sapUiUfdShellOvrlyAnim");
	}
	rm.writeClasses();
	rm.write("><div>");
	
	rm.write("<header class='sapUiUfdShellOvrlyHead'>");
	rm.write("<hr class='sapUiUfdShellOvrlyBrand'/>");
	rm.write("<div class='sapUiUfdShellOvrlyHeadCntnt'>");
	rm.write("<div id='"+oControl.getId()+"-hdr-center' class='sapUiUfdShellOvrlyHeadCenter'>");
	sap.ui.unified.ShellOverlayRenderer.renderSearch(rm, oControl);
	rm.write("</div>");
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.unified"),
		sCloseTxt = rb.getText("SHELL_OVERLAY_CLOSE");
	rm.write("<a tabindex='0' href='javascript:void(0);' id='"+oControl.getId()+"-close' class='sapUiUfdShellOvrlyHeadClose'");
	rm.writeAttributeEscaped("title", sCloseTxt);
	rm.write(">");
	rm.writeEscaped(sCloseTxt);
	rm.write("</a></div></header>");
	rm.write("<div id='"+oControl.getId()+"-cntnt' class='sapUiUfdShellOvrlyCntnt'>");
	sap.ui.unified.ShellOverlayRenderer.renderContent(rm, oControl);
	rm.write("</div>");
	
	rm.write("</div></div>");
};

sap.ui.unified.ShellOverlayRenderer.renderSearch = function(rm, oControl) {
	var iWidth = oControl._getSearchWidth();
	var sStyle = "";
	if(iWidth > 0 && oControl._opening){
		sStyle = "style='width:"+iWidth+"px'";
	}
	
	rm.write("<div id='"+oControl.getId()+"-search' class='sapUiUfdShellOvrlySearch' "+sStyle+">");
	var oSearch = oControl.getSearch();
	if(oSearch){
		rm.renderControl(oSearch);
	}
	rm.write("</div>");
};

sap.ui.unified.ShellOverlayRenderer.renderContent = function(rm, oControl) {
	rm.write("<div>");
	var aContent = oControl.getContent();
	for(var i=0; i<aContent.length; i++){
		rm.renderControl(aContent[i]);
	}
	rm.write("</div>");
};