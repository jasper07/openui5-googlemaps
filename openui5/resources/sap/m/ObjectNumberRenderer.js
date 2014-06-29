/*
 * @copyright
 */
jQuery.sap.declare("sap.m.ObjectNumberRenderer");sap.m.ObjectNumberRenderer={};
sap.m.ObjectNumberRenderer.render=function(r,o){if(!o.getVisible()){return}r.write("<div");r.writeControlData(o);r.addClass("sapMObjectNumber");if(o.getEmphasized()){r.addClass("sapMObjectNumberEmph")}r.addClass(o._sCSSPrefixObjNumberStatus+o.getState());r.writeClasses();r.write(">");r.write("<span");r.addClass("sapMObjectNumberText");r.writeClasses();r.write(">");r.writeEscaped(o.getNumber());r.write("</span>");r.write("<span");r.addClass("sapMObjectNumberUnit");r.writeClasses();r.write(">");var u=o.getUnit();if(!u){u=o.getNumberUnit()}r.writeEscaped(u);r.write("</span>");r.write("</div>")};
