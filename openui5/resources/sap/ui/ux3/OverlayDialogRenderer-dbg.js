/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for the sap.ui.ux3.OverlayDialog
jQuery.sap.declare("sap.ui.ux3.OverlayDialogRenderer");
jQuery.sap.require("sap.ui.ux3.OverlayRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
/**
 * @class OverlayDialog renderer.
 * @static
 */
sap.ui.ux3.OverlayDialogRenderer = sap.ui.core.Renderer.extend(sap.ui.ux3.OverlayRenderer);

/**
 * Renders the Overlay content
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ui.ux3.OverlayDialogRenderer.renderContent = function(oRenderManager, oControl) {
	var rm = oRenderManager;
	rm.write("<div role='Main' class='sapUiUx3ODContent' id='"+oControl.getId()+"-content'>");
	var content = oControl.getContent();
	for (var i = 0; i < content.length; i++) {
		var control = content[i];
		rm.renderControl(control);
	}
	rm.write("</div>");
};

/**
 * Add root class to Overlay
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ui.ux3.OverlayDialogRenderer.addRootClasses = function(oRenderManager, oControl) {
	var rm = oRenderManager;
	rm.addClass("sapUiUx3OD");
};

/**
 * Add class to Overlay
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ui.ux3.OverlayDialogRenderer.addOverlayClasses = function(oRenderManager, oControl) {
	var rm = oRenderManager;
	rm.addClass("sapUiUx3ODOverlay");
};
