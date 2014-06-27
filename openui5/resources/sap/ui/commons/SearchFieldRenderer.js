/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.SearchFieldRenderer");sap.ui.commons.SearchFieldRenderer={};
sap.ui.commons.SearchFieldRenderer.render=function(r,c){var a=r;if(!c.getVisible()){return}a.write("<div");a.writeControlData(c);a.addClass("sapUiSearchField");if(!c.getEditable()||!c.getEnabled()){a.addClass("sapUiSearchFieldDsbl")}if(!c.hasListExpander()){a.addClass("sapUiSearchFieldNoExp")}if(c.getEnableClear()){a.addClass("sapUiSearchFieldClear")}if(c.getWidth()){a.addStyle("width",c.getWidth())}if(c.getValue()){a.addClass("sapUiSearchFieldVal")}a.writeClasses();a.writeStyles();a.write(">");a.renderControl(c._ctrl);if(c.getShowExternalButton()){a.renderControl(c._btn)}a.write("</div>")};
