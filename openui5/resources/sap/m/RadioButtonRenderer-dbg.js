/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.RadioButtonRenderer");
jQuery.sap.require("sap.ui.core.ValueStateSupport");

/**
 * @class RadioButton renderer.
 * @static
 */
sap.m.RadioButtonRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oRadioButton an object representation of the control that should be rendered
 */
sap.m.RadioButtonRenderer.render = function(oRm, oRadioButton){
	// Return immediately if control is invisible
	if (!oRadioButton.getVisible()) {
		return;
	}

	// get control properties
	var bEnabled = oRadioButton.getEnabled();
	var iTabIndex = bEnabled ? 0 : -1;
	var bReadOnly = false;

	// Radio Button style class
	oRm.addClass("sapMRb");

	if(bEnabled) {
		oRm.addClass("sapMPointer");
	}

	// write the HTML into the render manager
	oRm.write("<div");						// Control - DIV
	oRm.writeControlData(oRadioButton);

	// ARIA
	oRm.writeAccessibilityState(oRadioButton, {
		role: "radio",
		checked: oRadioButton.getSelected() === true,
		disabled: !bEnabled
	});

	// Add classes and properties depending on the state
	if (oRadioButton.getSelected()) {
		oRm.addClass("sapMRbSel");
	}

	if (!bEnabled) {
		bReadOnly = true;
		oRm.addClass("sapMRbDis");
	}

	oRm.writeClasses();
	oRm.writeAttribute("tabIndex", "-1");

	var sTooltip = sap.ui.core.ValueStateSupport.enrichTooltip(oRadioButton, oRadioButton.getTooltip_AsString());
	if (sTooltip) {
		oRm.writeAttributeEscaped("title", sTooltip);
	}

	oRm.write(">");		// DIV element

	oRm.write("<div class='sapMRbB'");

	//set an id on this this to be able to focus it, on ApplyFocusInfo (rerenderAllUiAreas)
	oRm.writeAttribute("id", oRadioButton.getId() + "-Button");

	oRm.writeAttribute("tabindex", oRadioButton.hasOwnProperty("_iTabIndex") ? oRadioButton._iTabIndex : iTabIndex);
	oRm.write(">");

	oRm.write("<div");
	oRm.addClass("sapMRbBOut");

	if(bEnabled && sap.ui.Device.system.desktop) {
		oRm.addClass("sapMRbHoverable");
	}

	oRm.writeAttribute("id", oRadioButton.getId() + "-out");
	oRm.writeAttribute("tabindex", oRadioButton.hasOwnProperty("_iTabIndex") ? oRadioButton._iTabIndex : iTabIndex);
	oRm.writeClasses();
	oRm.write(">");		// DIV element
	oRm.write("<div");
	oRm.addClass("sapMRbBInn");
	oRm.writeClasses();
	oRm.write(">");		// DIV element

	// Write the real - potentially hidden - HTML RadioButton element
	oRm.write("<input type='radio' tabindex='-1'");
	oRm.writeAttribute("id", oRadioButton.getId() + "-RB");
	oRm.writeAttributeEscaped("name", oRadioButton.getGroupName());
	if (oRadioButton.getSelected()) {
		oRm.writeAttribute("checked", "checked");
	}
	if (!bEnabled) {
		oRm.writeAttribute("disabled", "disabled");
	}
	//oRm.writeAttributeEscaped("title", oRadioButton.getTooltip_AsString());
	if(bReadOnly) {
		oRm.writeAttribute("readonly", "readonly");
		oRm.writeAttribute("disabled", "disabled");
	}
	oRm.write(" />");	// Close RadioButton-input-element
//	if(sap.ui.Device.os.android || sap.ui.Device.os.blackberry) {
		oRm.write("</div></div>");	// Control - DIVs close
//	}
	oRm.write("</div>");
	oRm.renderControl(oRadioButton._oLabel);
	oRm.write("</div>");	// Control - DIVs close
};
