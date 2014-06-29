/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.PanelRenderer");

/**
 * @class Panel renderer
 * @static
 */
sap.m.PanelRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.PanelRenderer.render = function(oRm, oControl) {
	// Return immediately if control is invisible
	if (!oControl.getVisible()) {
		return;
	}

	// start Panel
	oRm.write("<section");
	oRm.writeControlData(oControl);
	oRm.addClass("sapMPanel");
	oRm.addStyle("width", oControl.getWidth());
	oRm.addStyle("height", oControl.getHeight());
	oRm.writeClasses();
	oRm.writeStyles();
	oRm.write(">");

	// render header
	var sHeaderText = oControl.getHeaderText();
	var oHeaderTBar = oControl.getHeaderToolbar();
	if (oHeaderTBar) {
		oHeaderTBar.setDesign(sap.m.ToolbarDesign.Transparent, true);
		oRm.renderControl(oHeaderTBar);
	} else if (sHeaderText) {
		oRm.write("<div class='sapMPanelHdr'>");
		oRm.writeEscaped(sHeaderText);
		oRm.write("</div>");
	}

	// render info bar
	var oInfoTBar = oControl.getInfoToolbar();
	if (oInfoTBar) {
		oInfoTBar.setDesign(sap.m.ToolbarDesign.Info, true);
		oRm.renderControl(oInfoTBar);
	}

	// render content
	oRm.write("<div");
	oRm.addClass("sapMPanelContent");
	oRm.addClass("sapMPanelBG");
	oRm.writeClasses();
	oRm.write(">");
	var aChildren = oControl.getContent();
	var iLength = aChildren.length;
	for (var i = 0; i < iLength; i++) {
		oRm.renderControl(aChildren[i]);
	}
	oRm.write("</div>");
	oRm.write("</section>");
};