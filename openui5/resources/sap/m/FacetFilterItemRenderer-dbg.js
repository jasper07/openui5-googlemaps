/*
 * @copyright
 */

jQuery.sap.declare("sap.m.FacetFilterItemRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ListItemBaseRenderer");

sap.m.FacetFilterItemRenderer = sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *          oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control}
 *          oControl an object representation of the control that should be rendered
 */
sap.m.FacetFilterItemRenderer.renderLIContent = function(oRm, oControl) {

	oRm.write("<div");
	oRm.addClass("sapMFFLITitle");
	oRm.writeClasses();
	oRm.write(">");
  oRm.writeEscaped(oControl.getText());
  oRm.write("</div>");
};
