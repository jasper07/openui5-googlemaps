/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.ui.layout.form.SimpleFormRenderer");

/**
 * @class SimpleForm renderer.
 * @static
 */
sap.ui.layout.form.SimpleFormRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.layout.form.SimpleFormRenderer.render = function(oRm, oControl){

	// write the HTML into the render manager
	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass("sapUiSimpleForm");
	oRm.writeClasses();
	oRm.write(">"); // div element
	var oForm = oControl.getAggregation("form");
	oRm.renderControl(oForm);
	oRm.write("</div>");

};
