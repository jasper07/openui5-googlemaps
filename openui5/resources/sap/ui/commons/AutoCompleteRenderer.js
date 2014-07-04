/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.AutoCompleteRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.ui.commons.ComboBoxRenderer");sap.ui.commons.AutoCompleteRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.ComboBoxRenderer);
sap.ui.commons.AutoCompleteRenderer.renderExpander=function(r,c){if(!c.__sARIATXT){var a=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");c.__sARIATXT=a.getText("AUTOCOMPLETE_ARIA_SUGGEST")}r.write("<span id=\"",c.getId(),"-ariaLbl\" style=\"display:none;\">",c.__sARIATXT,"</span>")};
sap.ui.commons.AutoCompleteRenderer.renderOuterAttributes=function(r,c){r.addClass("sapUiTfAutoComp");sap.ui.commons.ComboBoxRenderer.renderOuterAttributes.apply(this,arguments)};
sap.ui.commons.AutoCompleteRenderer.renderComboARIAInfo=function(r,c){var p={role:"textbox",owns:c.getId()+"-input "+c._getListBox().getId()};if(!c.getEnabled()){p["disabled"]=true}r.writeAccessibilityState(null,p)};
sap.ui.commons.AutoCompleteRenderer.renderARIAInfo=function(r,c){var p={autocomplete:"list",live:"polite",relevant:"all",setsize:c._getListBox().getItems().length};if(c.getValueState()==sap.ui.core.ValueState.Error){p["invalid"]=true}r.writeAccessibilityState(c,p)};
