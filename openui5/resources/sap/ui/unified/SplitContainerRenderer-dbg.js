/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.unified.SplitContainer
jQuery.sap.declare("sap.ui.unified.SplitContainerRenderer");

/**
 * @class SplitContainer renderer.
 * @static
 */
sap.ui.unified.SplitContainerRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oShell an object representation of the control that should be rendered
 */
sap.ui.unified.SplitContainerRenderer.render = function(rm, oControl){
	var sId = oControl.getId();

	rm.write("<div");
	rm.writeControlData(oControl);
	rm.addClass("sapUiUfdSpltCont");
	if(sap.ui.getCore().getConfiguration().getAnimation()){
		rm.addClass("sapUiUfdSpltContAnim");
	}

	if(!oControl.getShowSecondaryContent()){
		rm.addClass("sapUiUfdSpltContPaneHidden");
	}
	rm.writeClasses();
	rm.write(">");
	
	var sCanvasId = sId + "-canvas";

	rm.write("<section id='", sCanvasId, "' class='sapUiUfdSpltContCanvas'>");
	this.renderContent(rm, sCanvasId, oControl.getContent(), oControl._bRootContent);
	rm.write("</section>");
	
	var sSidePaneId = sId + "-pane";

	var sWidth = oControl.getShowSecondaryContent() ? oControl.getSecondaryContentWidth() : "0";
	rm.write("<aside id='", sSidePaneId, "' style='width:", sWidth, "'");
	rm.addClass("sapUiUfdSpltContPane");
	if(!oControl.getShowSecondaryContent()){
		rm.addClass("sapUiUfdSplitContSecondClosed");
	}
	rm.writeClasses();
	rm.write(">");
	this.renderContent(rm, sSidePaneId, oControl.getSecondaryContent(), oControl._bRootContent);
	rm.write("</aside>");

	rm.write("</div>");
};

sap.ui.unified.SplitContainerRenderer.renderContent = function (rm, sId, aContent, bRootContent) {
	rm.write("<div id='", sId, "cntnt' class='sapUiUfdSpltContCntnt'");
	if(bRootContent){
		rm.writeAttribute("data-sap-ui-root-content", "true"); // see e.g. sap.m.App#onAfterRendering
	}
	rm.write(">");
	for(var i=0; i<aContent.length; i++){
		rm.renderControl(aContent[i]);
	}
	rm.write("</div>");
};
