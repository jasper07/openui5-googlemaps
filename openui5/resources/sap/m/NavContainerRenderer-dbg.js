/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.NavContainerRenderer");

/**
 * @class NavContainer renderer. 
 * @static
 */
sap.m.NavContainerRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.NavContainerRenderer.render = function(rm, oControl) { 
	// return immediately if control is invisible
	if (!oControl.getVisible()) {
		return;
	}
	
	rm.write("<div");
	rm.writeControlData(oControl);
	
	rm.addClass("sapMNav");
	rm.addStyle("width", oControl.getWidth());
	rm.addStyle("height", oControl.getHeight());

	if (this.renderAttributes) {
		this.renderAttributes(rm, oControl); // may be used by inheriting renderers, but DO NOT write class or style attributes! Instead, call addClass/addStyle.
	}
	
	rm.writeClasses();
	rm.writeStyles();
	
	var sTooltip = oControl.getTooltip_AsString();
	if (sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}
	rm.write(">"); // div element

	if (this.renderBeforeContent) {
		this.renderBeforeContent(rm, oControl); // may be used by inheriting renderers
	}
	
	var oContent = oControl.getCurrentPage();
	if (oContent) {
		rm.renderControl(oContent);
	}

	rm.write("</div>");
};
