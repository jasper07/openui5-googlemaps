/*
 * @copyright
 */
jQuery.sap.declare("sap.m.FacetFilterItemRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.ListItemBaseRenderer");sap.m.FacetFilterItemRenderer=sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);
sap.m.FacetFilterItemRenderer.renderLIContent=function(r,c){r.write("<div");r.addClass("sapMFFLITitle");r.writeClasses();r.write(">");r.writeEscaped(c.getText());r.write("</div>")};
