/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.commons.Link
jQuery.sap.declare("sap.ui.commons.LinkRenderer");

/**
 * @class
 *
 * @author SAP AG
 * @version 0.1
 * @static
 */
sap.ui.commons.LinkRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.ui.core.Control} oLink An object representation of the control that should be rendered.
 */
sap.ui.commons.LinkRenderer.render = function(rm, oLink) {

	// Return immediately if control is invisible
	if (!oLink.getVisible()) {
		return;
	}

	// Link is rendered as a "<a>" element
	rm.write("<a");
	rm.writeControlData(oLink);

	rm.writeAccessibilityState(oLink);

	if (!oLink.getEnabled()) {
		rm.addClass("sapUiLnkDsbl");
		rm.writeAttribute("disabled", "true");
	} else {
		rm.addClass("sapUiLnk");
	}
	rm.writeClasses();

	if (oLink.getTooltip_AsString()) {
		rm.writeAttributeEscaped("title", oLink.getTooltip_AsString());
	}

	if (oLink.getHref()) {
		rm.writeAttributeEscaped("href", oLink.getHref());
	}	else {
		rm.writeAttribute("href", "javascript:void(0);");
	}

	if (oLink.getTarget()) {
		rm.writeAttributeEscaped("target", oLink.getTarget());
	}

	if (!oLink.getEnabled()) {
		rm.writeAttribute("tabIndex", "-1");
	} else {
		rm.writeAttribute("tabIndex", "0");
	}

	if (oLink.getWidth()) {
		rm.addStyle("width", oLink.getWidth());
	}
	rm.writeStyles();

	// Close the opening tag
	rm.write(">");

	// Write the Link text
	if (oLink.getText()) {
		rm.writeEscaped(oLink.getText());
	}

	// Close the tag
	rm.write("</a>");

};
