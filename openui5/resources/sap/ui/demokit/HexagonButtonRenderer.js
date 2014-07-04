/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.demokit.HexagonButtonRenderer");
sap.ui.demokit.HexagonButtonRenderer=function(){};
sap.ui.demokit.HexagonButtonRenderer.render=function(r,c){var a=r;a.write("<div ");a.writeControlData(c);a.addClass("sapUiHexBtn");a.addClass("sapUiHexBtn"+jQuery.sap.escapeHTML(c.getEnabled()?c.getColor():"Gray"));if(c.getEnabled()&&c.hasListeners('press'))a.addClass("sapUiHexBtnActive");a.writeClasses();a.write(" style='"+jQuery.sap.escapeHTML(c.getPosition())+"'");if(c.getTooltip_AsString()){a.writeAttributeEscaped("title",c.getTooltip_AsString())}a.write(">");if(c.getIcon()){a.write("<IMG ");a.writeAttributeEscaped("src",c.getIcon());var i=c.getImagePosition();if(i){a.write(" style='"+jQuery.sap.escapeHTML(i)+"'")}else{a.write(" style='position:relative;left:40px;top:45px;'")}a.write(" border='0'");a.write("/>")}a.write("</div>")};
