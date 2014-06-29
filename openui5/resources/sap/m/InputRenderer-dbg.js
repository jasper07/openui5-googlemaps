/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.InputBaseRenderer");
jQuery.sap.declare("sap.m.InputRenderer");

/**
 * @class Input renderer.
 * @static
 *
 * InputRenderer extends the InputBaseRenderer
 */
sap.m.InputRenderer = sap.ui.core.Renderer.extend(sap.m.InputBaseRenderer);

/**
 * Adds control specific class
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputRenderer.addOuterClasses = function(oRm, oControl) {
	oRm.addClass("sapMInput");
	if(oControl.getShowValueHelp() && oControl.getEnabled() && oControl.getEditable()) {
		oRm.addClass("sapMInputVH");
	}
};

/**
 * add extra attributes to Input
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputRenderer.writeInnerAttributes = function(oRm, oControl) {
	oRm.writeAttribute("type", oControl.getType().toLowerCase());
	if ((!oControl.getEnabled() && oControl.getType() == "Password")
			|| (oControl.getShowSuggestion() && sap.ui.Device.system.phone)){
		// required for JAWS reader on password fields on desktop:
		oRm.writeAttribute("readonly", "readonly");
	}
};

/**
 * Adds inner css classes to the input field
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputRenderer.addInnerClasses = function(oRm, oControl) {
};

/**
 * add extra content to Input
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputRenderer.writeInnerContent = function(oRm, oControl) {
	 if(oControl.getShowValueHelp() && oControl.getEnabled() && oControl.getEditable()) {
		oRm.write('<div class="sapMInputValHelp">');
		oRm.renderControl(oControl._getValueHelpIcon());
		oRm.write("</div>");
	 }
};