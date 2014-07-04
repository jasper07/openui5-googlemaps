/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.SelectRenderer");
jQuery.sap.require("sap.ui.core.ValueStateSupport");

/**
 * @class Select renderer.
 * @static
 */
sap.m.SelectRenderer = {};

/**
 * CSS class to be applied to the HTML root element of the Select control.
 *
 * @type {string}
 */
sap.m.SelectRenderer.CSS_CLASS = "sapMSlt";

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.m.Select} oSelect An object representation of the control that should be rendered.
 */
sap.m.SelectRenderer.render = function(oRm, oSelect) {
	var	oSelectedItem = oSelect.getSelectedItem(),
		sSelectedItemText = oSelectedItem ? oSelectedItem.getText() : "",
		sTooltip = sap.ui.core.ValueStateSupport.enrichTooltip(oSelect, oSelect.getTooltip_AsString()),
		sId = oSelect.getId() + "-nat",
		sType = oSelect.getType(),
		sIconURI = oSelect.getIcon(),
		bAutoAdjustWidth = oSelect.getAutoAdjustWidth(),
		bEnabled = oSelect.getEnabled(),
		CSS_CLASS = sap.m.SelectRenderer.CSS_CLASS;

	// suppress rendering if not visible
	if (!oSelect.getVisible()) {
		return;
	}

	oRm.write("<div");
	this.addStyleClass(oRm, oSelect);
	oRm.addClass(CSS_CLASS);

	oRm.addClass(CSS_CLASS + oSelect.getType());

	if (!bEnabled) {
		oRm.addClass(CSS_CLASS + "Disabled");
	}

	if (bAutoAdjustWidth) {
		oRm.addClass(CSS_CLASS + "AutoAdjustedWidth");
	} else {
		oRm.addStyle("width", oSelect.getWidth());
	}

	if (sIconURI) {
		oRm.addClass(CSS_CLASS + "WithIcon");
	}

	oRm.addClass(CSS_CLASS + "WithArrow");

	oRm.addStyle("max-width", oSelect.getMaxWidth());

	oRm.writeControlData(oSelect);

	oRm.writeStyles();
	oRm.writeClasses();

	if (sTooltip) {
		oRm.writeAttributeEscaped("title", sTooltip);
	}

	if (bEnabled) {
		oRm.writeAttribute("tabindex", "0");
	}

	oRm.write(">");

		switch (sType) {
			case sap.m.SelectType.Default:
				this._renderLabel(oRm, oSelect, sId, sSelectedItemText);
				this._renderArrow(oRm);
				break;

			case sap.m.SelectType.IconOnly:
				this._renderIcon(oRm, sIconURI);
				break;

			// no default
		}

		if (oSelect._isRequiredSelectElement()) {
			this._renderSelectElement(oRm, oSelect, sId, bEnabled, sSelectedItemText);
		}

	oRm.write("</div>");
};

/**
 * Renders the select's label, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.m.Select} oSelect An object representation of the control that should be rendered.
 * @param {string} sId
 * @param {string} sSelectedItemText
 * @private
 */
sap.m.SelectRenderer._renderLabel = function(oRm, oSelect, sId, sSelectedItemText) {
	oRm.write('<label class="' + sap.m.SelectRenderer.CSS_CLASS + 'Label"');
	oRm.writeAttribute("for", sId);

	oRm.write(">");
		oRm.writeEscaped(sSelectedItemText);
	oRm.write('</label>');
};

/**
 * Renders the select's arrow, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
 * @private
 */
sap.m.SelectRenderer._renderArrow = function(oRm) {
	oRm.write('<span class="' + sap.m.SelectRenderer.CSS_CLASS + 'Arrow"></span>');
};

/**
 * Renders the select's icon, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
 * @param {string} sIconURI
 * @private
 */
sap.m.SelectRenderer._renderIcon = function(oRm, sIconURI) {
	oRm.writeIcon(sIconURI, sap.m.SelectRenderer.CSS_CLASS + "Icon");
};

/**
 * Renders the HTMLSelectElement for the select control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.m.Select} oSelect An object representation of the select that should be rendered.
 * @param {string} sId
 * @param {boolean} bEnabled
 * @param {string} sSelectedItemText
 * @private
 */
sap.m.SelectRenderer._renderSelectElement = function(oRm, oSelect, sId, bEnabled, sSelectedItemText) {
	var sName = oSelect.getName();

	oRm.write("<select");
	oRm.writeAttribute("id", sId);

	if (sName) {
		oRm.writeAttributeEscaped("name", sName);
	}

	if (!bEnabled) {
		oRm.write(" disabled");
	}

	oRm.writeAttribute("tabindex", "-1");

	oRm.write(">");

		this._renderOptions(oRm, oSelect, sSelectedItemText);

	oRm.write("</select>");
};

/**
 * Renders the HTMLOptionElement(s) for the select control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.m.Select} oSelect An object representation of the select that should be rendered.
 * @param {string} sSelectedItemText
 * @private
 */
sap.m.SelectRenderer._renderOptions = function(oRm, oSelect, sSelectedItemText) {
	var aItems = oSelect.getItems(),
		aItemsLength = aItems.length,
		sSelectedItemId = oSelect.getAssociation("selectedItem"),
		i = 0;

	// rendering options
	for (; i < aItemsLength; i++) {
		oRm.write("<option");
			oRm.writeAttribute("id", aItems[i].getId());
			oRm.writeAttributeEscaped("value", (aItems[i].getKey() !== "") ? aItems[i].getKey() : aItems[i].getId());

			if (aItems[i].getId() === sSelectedItemId) {
				oRm.write(" selected");
			}

			if (!aItems[i].getEnabled()) {
				oRm.write(" disabled");
			}

			oRm.write(">");
			oRm.writeEscaped(aItems[i].getText());
		oRm.write("</option>");
	}

	if (aItemsLength === 0) {
		oRm.write("<option>" + sSelectedItemText + "</option>");
	}
};

/**
 * This method is reserved for derived class to add extra classes to the HTML root element of the control.
 *
 * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.ui.core.Control} oSelect An object representation of the control that should be rendered.
 * @protected
 */
sap.m.SelectRenderer.addStyleClass = function(oRm, oSelect) {};