/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.ObjectStatusRenderer");sap.m.ObjectStatusRenderer={};
sap.m.ObjectStatusRenderer.render=function(r,o){if(!o.getVisible()){return}if(!o._isEmpty()){r.write("<div");r.writeControlData(o);var t=o.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.addClass("sapMObjStatus");r.addClass("sapMObjStatus"+o.getState());r.writeClasses();r.write(">");if(o.getIcon()){r.write("<span");r.addClass("sapMObjStatusIcon");r.writeClasses();r.write(">");r.renderControl(o._getImageControl());r.write("</span>")}if(o.getText()){r.write("<span");r.addClass("sapMObjStatusText");r.writeClasses();r.write(">");r.writeEscaped(o.getText());r.write("</span>")}r.write("</div>")}};
