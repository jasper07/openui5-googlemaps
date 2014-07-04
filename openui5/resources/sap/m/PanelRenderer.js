/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.PanelRenderer");sap.m.PanelRenderer={};
sap.m.PanelRenderer.render=function(r,c){if(!c.getVisible()){return}r.write("<section");r.writeControlData(c);r.addClass("sapMPanel");r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.writeClasses();r.writeStyles();r.write(">");var h=c.getHeaderText();var H=c.getHeaderToolbar();if(H){H.setDesign(sap.m.ToolbarDesign.Transparent,true);r.renderControl(H)}else if(h){r.write("<div class='sapMPanelHdr'>");r.writeEscaped(h);r.write("</div>")}var I=c.getInfoToolbar();if(I){I.setDesign(sap.m.ToolbarDesign.Info,true);r.renderControl(I)}r.write("<div");r.addClass("sapMPanelContent");r.addClass("sapMPanelBG");r.writeClasses();r.write(">");var C=c.getContent();var l=C.length;for(var i=0;i<l;i++){r.renderControl(C[i])}r.write("</div>");r.write("</section>")};
