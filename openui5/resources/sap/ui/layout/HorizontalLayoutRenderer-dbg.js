/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.ui.layout.HorizontalLayoutRenderer");

/**
 * @class HorizontalLayout renderer.
 * @static
 */
sap.ui.layout.HorizontalLayoutRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.layout.HorizontalLayoutRenderer.render = function(oRenderManager, oControl){
	// return immediately if control is invisible
	if (!oControl.getVisible()) {
		return;
	}

	// convenience variable
	var rm = oRenderManager;
	var bNoWrap = !oControl.getAllowWrapping();

	// write the HTML into the render manager
	rm.write("<div");
	rm.writeControlData(oControl);
	rm.addClass("sapUiHLayout");
	if (bNoWrap) {
		rm.addClass("sapUiHLayoutNoWrap");
	}
	rm.writeClasses();
	rm.write(">"); // div element

	var aChildren = oControl.getContent();
	for (var i = 0; i < aChildren.length; i++) {
		if (bNoWrap) {
			rm.write("<div class='sapUiHLayoutChildWrapper'>");
		}
		rm.renderControl(aChildren[i]);
		if (bNoWrap) {
			rm.write("</div>");
		}
	}

	rm.write("</div>");
};
