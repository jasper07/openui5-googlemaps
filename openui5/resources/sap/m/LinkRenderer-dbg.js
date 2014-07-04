/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

 jQuery.sap.declare("sap.m.LinkRenderer");

/**
 * @class Link renderer
 * @static
 */
sap.m.LinkRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.LinkRenderer.render = function(rm, oControl) {
	// Return immediately if control is invisible
	if (!oControl.getVisible()) {
		return;
	}

	// Link is rendered as a "<a>" element
	rm.write("<a");
	rm.writeControlData(oControl);

	rm.addClass("sapMLnk");
	if (!oControl.getEnabled()) {
		rm.addClass("sapMLnkDsbl");
		rm.writeAttribute("disabled", "true");
		rm.writeAttribute("tabIndex", "-1");
	} else {
		rm.writeAttribute("tabIndex", "0");
	}
	if (oControl.getWrapping()) {
		rm.addClass("sapMLnkWrapping");
	}

	if (oControl.getTooltip_AsString()) {
		rm.writeAttributeEscaped("title", oControl.getTooltip_AsString());
	}

	if (oControl.getHref()) {
		rm.writeAttributeEscaped("href", oControl.getHref());
	}	else {
		rm.writeAttribute("href", "javascript:void(0);");
	}

	if (oControl.getTarget()) {
		rm.writeAttributeEscaped("target", oControl.getTarget());
	}

	if (oControl.getWidth()) {
		rm.addStyle("width", oControl.getWidth());
	} else {
		rm.addClass("sapMLnkMaxWidth");
	}

	rm.writeClasses();
	rm.writeStyles();
	rm.write(">"); // opening <a> tag

	if (oControl.getText()) {
		rm.writeEscaped(oControl.getText());
	}

	rm.write("</a>");
};
