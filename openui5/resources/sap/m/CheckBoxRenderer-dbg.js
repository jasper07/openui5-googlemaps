/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.CheckBoxRenderer");
jQuery.sap.require("sap.ui.core.ValueStateSupport");

/**
 * @class CheckBox renderer.
 * @static
 */
sap.m.CheckBoxRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oCheckBox an object representation of the control that should be rendered
 */
sap.m.CheckBoxRenderer.render = function(oRm, oCheckBox){
	// Return immediately if control is invisible
	if (!oCheckBox.getVisible()) {
		return;
	}

	// get control properties
	var bEnabled = oCheckBox.getEnabled();
	var iTabIndex = bEnabled ? 0 : -1;

	// CheckBox wrapper
	oRm.write("<div");
	oRm.addClass("sapMCb");
	if(bEnabled) {
		oRm.addClass("sapMPointer");
	}
	oRm.writeControlData(oCheckBox);
	oRm.writeClasses();

	var sTooltip = sap.ui.core.ValueStateSupport.enrichTooltip(oCheckBox, oCheckBox.getTooltip_AsString());
	if (sTooltip) {
		oRm.writeAttributeEscaped("title", sTooltip);
	}

	oRm.write(">");		// DIV element

	// write the HTML into the render manager
	oRm.write("<div id='");
	oRm.write(oCheckBox.getId() + "-CbBg'");

	// CheckBox style class
	oRm.addClass("sapMCbBg");

	if (!bEnabled) {
		oRm.addClass("sapMCbBgDis");
	} else if(sap.ui.Device.system.desktop) {
		oRm.addClass("sapMCbHoverable");
	}

	if (!oCheckBox.getActiveHandling()){
		oRm.addClass("sapMCbActiveStateOff");
	}
	oRm.writeAttribute("tabindex", oCheckBox.hasOwnProperty("_iTabIndex") ? oCheckBox._iTabIndex : iTabIndex);
	oRm.addClass("sapMCbMark"); // TODO: sapMCbMark is redundant, remove it and simplify CSS

	if (oCheckBox.getSelected()) {
		oRm.addClass("sapMCbMarkChecked");
	}
	oRm.writeClasses();

	oRm.write(">");		// DIV element

	oRm.write("<input type='CheckBox' tabindex='-1' id='");
	oRm.write(oCheckBox.getId() + "-CB'");

	if (oCheckBox.getSelected()) {
		oRm.writeAttribute("checked", "checked");
	}

	if (oCheckBox.getName()) {
		oRm.writeAttributeEscaped('name', oCheckBox.getName());
	}

	if (!bEnabled) {
		oRm.write(" disabled='disabled'");
	}

	oRm.write(" /></div>");
	oRm.renderControl(oCheckBox._oLabel);
	oRm.write("</div>");
};
