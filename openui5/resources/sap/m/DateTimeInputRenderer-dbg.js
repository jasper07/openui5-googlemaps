/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.InputBaseRenderer");
jQuery.sap.declare("sap.m.DateTimeInputRenderer");


/**
 * @class DateTimeInput renderer.
 * @static
 *
 * For a common look & feel,
 * DateTimeInputRenderer extends the InputRenderer
 */
sap.m.DateTimeInputRenderer = sap.ui.core.Renderer.extend(sap.m.InputBaseRenderer);

/**
 * Adds control specific class
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.DateTimeInputRenderer.addOuterClasses = function(oRm, oControl) {
	oRm.addClass("sapMDTI");
};

/**
 * Add pointer cursor to date-time input
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.DateTimeInputRenderer.addCursorClass = function(oRm, oControl) {
	if (oControl.getEnabled() && oControl.getEditable()) {
		oRm.addClass("sapMPointer");
	}
};