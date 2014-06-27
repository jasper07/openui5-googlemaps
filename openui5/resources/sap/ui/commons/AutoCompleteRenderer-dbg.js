/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.commons.AutoComplete
jQuery.sap.declare("sap.ui.commons.AutoCompleteRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.ui.commons.ComboBoxRenderer");

/**
 * @class Renderer for the sap.ui.commons.AutoComplete
 * @static
 */
sap.ui.commons.AutoCompleteRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.ComboBoxRenderer);

sap.ui.commons.AutoCompleteRenderer.renderExpander = function(rm, oCtrl){
	if(!oCtrl.__sARIATXT) {
		var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
		oCtrl.__sARIATXT = rb.getText("AUTOCOMPLETE_ARIA_SUGGEST");
	}
	
	rm.write("<span id=\"", oCtrl.getId(), "-ariaLbl\" style=\"display:none;\">", oCtrl.__sARIATXT, "</span>");
};

sap.ui.commons.AutoCompleteRenderer.renderOuterAttributes = function(rm, oCtrl) {
	rm.addClass("sapUiTfAutoComp");
	sap.ui.commons.ComboBoxRenderer.renderOuterAttributes.apply(this, arguments);
};

//@see sap.ui.commons.ComboBoxRenderer.renderComboARIAInfo
sap.ui.commons.AutoCompleteRenderer.renderComboARIAInfo = function(rm, oCtrl) {
	var mProps = {
		role: "textbox",
		owns: oCtrl.getId() + "-input " + oCtrl._getListBox().getId()
	};

	if (!oCtrl.getEnabled()) {
		mProps["disabled"] = true;
	}

	rm.writeAccessibilityState(null, mProps); //null because otherwise automatic generated attributes will be rendered twice
};


//@see sap.ui.commons.ComboBoxRenderer.renderARIAInfo
sap.ui.commons.AutoCompleteRenderer.renderARIAInfo = function(rm, oCtrl) {
	var mProps = {
		autocomplete: "list",
		live: "polite",
		relevant: "all",
		setsize: oCtrl._getListBox().getItems().length
	};

	if (oCtrl.getValueState() == sap.ui.core.ValueState.Error) {
		mProps["invalid"] = true;
	}

	rm.writeAccessibilityState(oCtrl, mProps);
};

