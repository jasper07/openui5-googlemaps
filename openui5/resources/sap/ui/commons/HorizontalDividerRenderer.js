/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.HorizontalDividerRenderer");sap.ui.commons.HorizontalDividerRenderer={};
sap.ui.commons.HorizontalDividerRenderer.render=function(r,c){var a=r;if(!c.getVisible()){return}a.write("<hr");a.writeControlData(c);a.writeAttribute("role","separator");if(c.getWidth()){a.writeAttribute("style","width:"+c.getWidth()+";")}a.addClass("sapUiCommonsHoriDiv");a.addClass(c.getType()=="Page"?"sapUiCommonsHoriDivTypePage":"sapUiCommonsHoriDivTypeArea");switch(c.getHeight()){case"Ruleheight":a.addClass("sapUiCommonsHoriDivHeightR");break;case"Small":a.addClass("sapUiCommonsHoriDivHeightS");break;case"Large":a.addClass("sapUiCommonsHoriDivHeightL");break;default:a.addClass("sapUiCommonsHoriDivHeightM")}a.writeClasses();a.write("/>")};
