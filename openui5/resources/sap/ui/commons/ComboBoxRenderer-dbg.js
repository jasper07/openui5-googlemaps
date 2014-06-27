/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.commons.ComboBox
jQuery.sap.declare("sap.ui.commons.ComboBoxRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.ui.commons.TextFieldRenderer");

/**
 * @class Renderer for the sap.ui.commons.ComboBox
 * @static
 */
sap.ui.commons.ComboBoxRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.TextFieldRenderer);

/**
 * Renders the outer &lt;div&gt; for the ComboBox to the TextField
 *
 * @param {sap.ui.fw.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.fw.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.commons.ComboBoxRenderer.renderOuterAttributes = function(rm, oCmb) {
	rm.addClass("sapUiTfCombo");
	this.renderComboARIAInfo(rm, oCmb);
};

/**
 * Renders additional HTML for the ComboBox to the TextField before the INPUT element (sets the icon)
 *
 * @param {sap.ui.fw.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.fw.Control} oCmb an object representation of the control that should be rendered
 */
sap.ui.commons.ComboBoxRenderer.renderOuterContentBefore = function(rm, oCmb){

	this.renderExpander(rm, oCmb);
	this.renderSelectBox(rm, oCmb, '-1');

};

sap.ui.commons.ComboBoxRenderer.renderExpander = function(rm, oCmb){

	rm.write("<div");
	rm.writeAttributeEscaped('id', oCmb.getId() + '-icon');
	rm.writeAttribute('unselectable', 'on');
	if ( sap.ui.getCore().getConfiguration().getAccessibility()){
		rm.writeAttribute("role", "presentation");
	}
	rm.addClass("sapUiTfComboIcon");
	rm.writeClasses();
	rm.write(">&#9660;</div>");//Symbol for HCB Theme (Must be hidden in other themes)

};

sap.ui.commons.ComboBoxRenderer.renderSelectBox = function(rm, oCmb, sTabindex){

	if (oCmb.mobile) {
		// for mobile devices render SELECT box
		// it lays over the button but should be transparent. So a click on the button opens the select box
		rm.write("<select");
		rm.writeAttributeEscaped('id', oCmb.getId() + '-select');
		rm.writeAttribute('tabindex', sTabindex);
		if (!oCmb.getEnabled() || !oCmb.getEditable()) {
			rm.writeAttribute('disabled', 'disabled');
		}
		rm.write(">");
		for ( var i = 0; i < oCmb.getItems().length; i++) {
			var oItem = oCmb.getItems()[i];
			rm.write("<option");
			// combine comboBox ID with Item ID because items can be in more than one ComboBox vi the same List
			rm.writeAttributeEscaped('id', oCmb.getId()+"-"+oItem.getId());
			if (!oItem.getEnabled()) {
				rm.writeAttribute("disabled", "disabled");
			}
			rm.write(">"+oItem.getText()+"</option>");
		}
		rm.write("</select>");
	}

};

/**
 * Renders the inner &lt;div&gt; for the ComboBox to the TextField
 *
 * @param {sap.ui.fw.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.fw.Control} oCmb an object representation of the control that should be rendered
 */
sap.ui.commons.ComboBoxRenderer.renderInnerAttributes = function(rm, oCmb) {

	if (oCmb.mobile) {
		rm.writeAttribute('autocapitalize', 'off');
		rm.writeAttribute('autocorrect', 'off');
	}

};

/*
 * Renders ARIA information for the combobox (outer &lt;div&gt;)
 * @param {sap.ui.fw.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.fw.Control} oControl an object representation of the control that should be rendered
 * @private
 */
sap.ui.commons.ComboBoxRenderer.renderComboARIAInfo = function(rm, oCmb) {

	// to not force creation if internal ListBox do not use _getListBox()
	var sListBox = oCmb.getListBox();
	if (!sListBox && oCmb._oListBox) {
		sListBox = oCmb._oListBox.getId();
	}

	var mProps = {
		role: "combobox",
		owns: oCmb.getId() + "-input " + sListBox
		};

	if (!oCmb.getEnabled()) {
		mProps["disabled"] = true;
	}

	rm.writeAccessibilityState(null,  //null because otherwise automatic generated attributes will be rendered twice
		mProps);

};

/*
 * Renders ARIA information for the given input field (called from 'parent'-renderer, i.e. sap.ui.commons.TextFieldRenderer)
 * As the input tag has the focus all controls aria attributes should be here
 * @param {sap.ui.fw.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.fw.Control} oControl an object representation of the control that should be rendered
 * @private
 */
sap.ui.commons.ComboBoxRenderer.renderARIAInfo = function(rm, oCmb) {

	var iPosInSet = -1;
	if(oCmb.getSelectedItemId()){
		for ( var i = 0; i < oCmb.getItems().length; i++) {
			var oItem = oCmb.getItems()[i];
			if (oItem.getId() == oCmb.getSelectedItemId()) {
				iPosInSet =  i+1;
				break;
			}
		}
	}

	var mProps = {
			autocomplete: "inline",
			live: "polite",
			setsize: oCmb.getItems().length,
			posinset: (iPosInSet >= 0) ? iPosInSet : undefined
		};

	if (oCmb.getValueState() == sap.ui.core.ValueState.Error) {
		mProps["invalid"] = true;
	}

	rm.writeAccessibilityState(oCmb, mProps);

};