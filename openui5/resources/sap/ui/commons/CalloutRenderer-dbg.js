/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.ui.commons.CalloutRenderer");
jQuery.sap.require("sap.ui.commons.CalloutBaseRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class Callout renderer.
 * @static
 */
sap.ui.commons.CalloutRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.CalloutBaseRenderer);

/**
 * Renders the HTML for content.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oCallout an object representation of the Callout that should be rendered
 */
sap.ui.commons.CalloutRenderer.renderContent = function(oRenderManager, oCallout){

	var rm = oRenderManager;
	var content = oCallout.getContent();

	// content
	for (var i = 0; i < content.length; i++) {
		rm.renderControl(content[i]);
	}
};

/**
 * Add the root CSS class to the Callout to redefine/extend CalloutBase
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ui.commons.CalloutRenderer.addRootClasses = function(oRenderManager, oControl) {
	oRenderManager.addClass("sapUiClt");
};

/**
 * Add the content CSS class to the Callout to redefine/extend CalloutBase
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ui.commons.CalloutRenderer.addContentClasses = function(oRenderManager, oControl) {
	oRenderManager.addClass("sapUiCltCont");
};

/**
 * Add the arrow/tip CSS class to the Callout to redefine/extend CalloutBase
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ui.commons.CalloutRenderer.addArrowClasses = function(oRenderManager, oControl) {
	oRenderManager.addClass("sapUiCltArr");
};
