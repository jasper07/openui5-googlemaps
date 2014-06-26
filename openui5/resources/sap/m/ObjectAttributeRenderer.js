/*
 * @copyright
 */
jQuery.sap.declare("sap.m.ObjectAttributeRenderer");sap.m.ObjectAttributeRenderer={};
sap.m.ObjectAttributeRenderer.render=function(r,o){if(o.getVisible()&&!o._isEmpty()){r.write("<div");r.writeControlData(o);r.addClass("sapMObjectAttributeDiv");if(o.getActive()){r.addClass("sapMObjectAttributeActive")}r.writeClasses();var t=o.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.write(">");r.write("<span>");var T=new sap.m.Text({text:o.getText()});T.setMaxLines(2);r.renderControl(T);r.write("</span>");r.write("</div>")}};
