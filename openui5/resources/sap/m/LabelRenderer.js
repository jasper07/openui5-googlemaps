/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.LabelRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.m.LabelRenderer={};
sap.m.LabelRenderer.render=function(a,l){if(!l.getVisible()){return}var r=sap.m.LabelRenderer;a.write("<label");a.writeControlData(l);a.addClass("sapMLabel");if(l.getDesign()==sap.m.LabelDesign.Bold){a.addStyle("font-weight","bold")}if(l.getRequired()){a.addClass("sapMLabelRequired")}if(l.getLabelForRendering()){var f=sap.ui.getCore().byId(l.getLabelForRendering());a.write(" for=\"");if(f&&f.getIdForLabel){a.write(f.getIdForLabel())}else{a.write(l.getLabelForRendering())}a.write("\"")}var t=l.getTextDirection();if(t){a.addStyle("direction",t.toLowerCase())}var w=l.getWidth();if(w){a.addStyle("width",w)}else{a.addClass("sapMLabelMaxWidth")}var T=l.getTextAlign();if(T){var T=r.getTextAlign(T,t);if(T){a.addStyle("text-align",T)}}var L=l.getText();if(L==""){a.addClass("sapMLabelNoText")}a.writeStyles();a.writeClasses();var s=l.getTooltip_AsString();if(s){a.writeAttributeEscaped("title",s)}a.write(">");if(L){a.writeEscaped(L)}a.write("</label>")};
sap.m.LabelRenderer.getTextAlign=sap.ui.core.Renderer.getTextAlign;
