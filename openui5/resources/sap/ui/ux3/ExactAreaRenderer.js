/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.ux3.ExactAreaRenderer");sap.ui.ux3.ExactAreaRenderer={};
sap.ui.ux3.ExactAreaRenderer.render=function(r,c){var a=r;if(!c.getVisible()){return}a.write("<div");a.writeControlData(c);a.addClass("sapUiUx3ExactArea");a.writeClasses();a.write(">");if(c.getToolbarVisible()){a.write("<div id=\""+c.getId()+"-tb\" class=\"sapUiTb sapUiTbDesignFlat sapUiTbStandalone\" role=\"toolbar\">");a.write("<div class=\"sapUiTbCont\"><div class=\"sapUiTbInner\">");var t=c.getToolbarItems();for(var i=0;i<t.length;i++){var T=t[i];if(T instanceof sap.ui.commons.ToolbarSeparator){sap.ui.commons.ToolbarRenderer.renderSeparator(a,T)}else if(T instanceof sap.ui.ux3.ExactAreaToolbarTitle){a.write("<div class=\"sapUiUx3ExactAreaTbTitle\">"+jQuery.sap.escapeHTML(T.getText())+"</div>")}else{a.renderControl(T)}}a.write("</div></div></div>")}a.write("<div id=\""+c.getId()+"-ct\" class=\"sapUiUx3ExactAreaCont\">");var C=c.getContent();for(var i=0;i<C.length;i++){a.renderControl(C[i])}a.write("</div>");a.write("</div>")};
