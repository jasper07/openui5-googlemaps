/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.SwitchRenderer");

/**
 * @class Switch renderer.
 * @static
 */
sap.m.SwitchRenderer = {};

/**
 * CSS class to be applied to the HTML root element of the Switch control.
 *
 * @type {string}
 */
sap.m.SwitchRenderer.CSS_CLASS = "sapMSwt";

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the Render-Output-Buffer.
 * @param {sap.ui.core.Control} oSwitch An object representation of the control that should be rendered.
 */
sap.m.SwitchRenderer.render = function(oRm, oSwitch) {
	var bState = oSwitch.getState(),
		sState = bState ? oSwitch._sOn : oSwitch._sOff,
		sTooltip = oSwitch.getTooltip_AsString(),
		sType = oSwitch.getType(),
		bDefault = (sType === "Default"),
		bDisabled =  !oSwitch.getEnabled(),
		sName = oSwitch.getName(),
		CSS_CLASS = sap.m.SwitchRenderer.CSS_CLASS;

	// suppress rendering if not visible
	if (!oSwitch.getVisible()) {
		return;
	}

	oRm.write('<div');
	oRm.addClass(CSS_CLASS + "Cont");

	if (bDisabled) {
		oRm.addClass(CSS_CLASS + "ContDisabled");
	}

	oRm.writeClasses();
	oRm.writeStyles();
	oRm.writeControlData(oSwitch);

	if (sTooltip) {
		oRm.writeAttributeEscaped("title", sTooltip);
	}

	oRm.write(">");

		oRm.write("<div");
		oRm.addClass(CSS_CLASS);
		oRm.addClass(bState ? CSS_CLASS + "On" : CSS_CLASS + "Off");
		oRm.addClass(CSS_CLASS + sType);

		if (bDisabled) {
			oRm.addClass(CSS_CLASS + "Disabled");
		}

		oRm.writeClasses();
		oRm.write(">");
			oRm.write('<div class="' + CSS_CLASS + 'Inner">');

				// text
				this._renderText(oRm, oSwitch, bDefault);

				// handle
				this._renderHandle(oRm, oSwitch, sState, bDisabled);

			oRm.write("</div>");

		oRm.write("</div>");

		if (sName) {

			// checkbox
			this._renderCheckbox(oRm, oSwitch, sName, sState, bState, bDisabled);
		}

	oRm.write("</div>");
};

sap.m.SwitchRenderer._renderText = function(oRm, oSwitch, bDefault) {
	var CSS_CLASS = sap.m.SwitchRenderer.CSS_CLASS;

	// on
	oRm.write('<div class="' + CSS_CLASS + 'Text ' + CSS_CLASS + 'TextOn">');
		oRm.write("<span>");
			if (bDefault) {
				oRm.writeEscaped(oSwitch._sOn);
			}
		oRm.write("</span>");
	oRm.write("</div>");

	// off
	oRm.write('<div class="' + CSS_CLASS + 'Text ' + CSS_CLASS + 'TextOff">');
		oRm.write("<span>");
			if (bDefault) {
				oRm.writeEscaped(oSwitch._sOff);
			}
		oRm.write("</span>");
	oRm.write("</div>");
};

sap.m.SwitchRenderer._renderHandle = function(oRm, oSwitch, sState, bDisabled) {
	var CSS_CLASS = sap.m.SwitchRenderer.CSS_CLASS;

	oRm.write("<div");
	oRm.addClass(CSS_CLASS + "Handle");

	if (sap.ui.Device.browser.webkit && Number(sap.ui.Device.browser.webkitVersion).toFixed(2) === "537.35") {
		oRm.addClass(CSS_CLASS + "WebKit537-35");
	}

	oRm.writeClasses();

	if (!bDisabled) {
		oRm.writeAttribute("tabindex", "0");
	}

	oRm.writeAttributeEscaped("data-sap-ui-swt", sState);
	oRm.write(">");
	oRm.write("</div>");
};

sap.m.SwitchRenderer._renderCheckbox = function(oRm, oSwitch, sName, sState, bState, bDisabled) {
	oRm.write('<input type="checkbox"');

	oRm.writeAttributeEscaped("name", sName);

	oRm.writeAttribute("id", oSwitch.getId() + "-input");

	if (bState) {
		oRm.writeAttribute("checked", "checked");
	}

	if (bDisabled) {
		oRm.writeAttribute("disabled", "disabled");
	}

	oRm.writeAttributeEscaped("value", sState);

	oRm.write(">");
};