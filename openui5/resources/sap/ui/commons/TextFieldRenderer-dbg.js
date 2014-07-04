/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.commons.TextField
jQuery.sap.declare("sap.ui.commons.TextFieldRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.ui.core.ValueStateSupport");

/**
 * TextField Renderer
 * @class
 * @static
 * @author SAP
 * @version 1.20.7
 * @since 0.9.0
 */
sap.ui.commons.TextFieldRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.ui.commons.TextField}
 *            oTextField The TextField control that should be rendered.
 */
sap.ui.commons.TextFieldRenderer.render = function(oRenderManager, oTextField) {

	var rm = oRenderManager,
		r  = sap.ui.commons.TextFieldRenderer;

	// Return immediately if control is invisible
	if (!oTextField.getVisible()) {
		return;
	}

	var sWidth = oTextField.getWidth();
	var tooltip = sap.ui.core.ValueStateSupport.enrichTooltip(oTextField, oTextField.getTooltip_AsString());
	var bRenderOuter = oTextField._getRenderOuter();

// In case of Combobox, F4-help, DatePicker: Render outer element.
// The details of the outer element are rendered in the hook implemented in the corresponding control.
	if (bRenderOuter) {
		rm.write("<div");
		rm.writeControlData(oTextField);
		rm.addClass("sapUiTfBack");
		this.renderStyles(rm, oTextField);

		if(tooltip) {
			rm.writeAttributeEscaped('title', tooltip);
		}

		var sSpanStyle;
		if(sWidth && sWidth != '') {
			sSpanStyle= 'width: '+ sWidth+';';
		}

		if(this.renderOuterAttributes){
			this.renderOuterAttributes(rm, oTextField);
		}

		if (sSpanStyle) {
			rm.writeAttribute('style', sSpanStyle);
		}
		rm.writeStyles();
		rm.writeClasses();
		rm.write(">");

		// Outer hook
		if (this.renderOuterContentBefore) {
			this.renderOuterContentBefore(rm, oTextField);
		}
	}

// Inner tag / pure TextField
	if (this.getInnerTagName){
		rm.write('<'+this.getInnerTagName());
	}else{
		rm.write("<input");
	}
	rm.addClass("sapUiTf");

	if (!bRenderOuter) {
		// Stand-alone TextField
		rm.writeControlData(oTextField);
		rm.addClass("sapUiTfBack");
		this.renderStyles(rm, oTextField);

		if(sWidth && sWidth != '') {
			rm.addStyle("width", sWidth);
		}
	}else{
		rm.writeAttribute('id', oTextField.getId() + '-input');
		rm.addClass("sapUiTfInner");
		rm.addStyle("width", '100%');
	}

	if(tooltip) {
		// render title always on INPUT tag (even it's in outer DIV too)
		// because screenreader ignores it on outer DIV 
		rm.writeAttributeEscaped('title', tooltip);
	}

	if (oTextField.getName()) {
		rm.writeAttributeEscaped('name', oTextField.getName());
	}

	if(!oTextField.getEditable()){
		rm.writeAttribute('readonly', 'readonly');
	}
	if(this.renderTextFieldEnabled){
		this.renderTextFieldEnabled(rm, oTextField);
	}else if(!oTextField.getEnabled()){
		rm.writeAttribute('disabled', 'disabled');
		rm.writeAttribute('tabindex', '-1');
	}else if(!oTextField.getEditable()){
		rm.writeAttribute('tabindex', '0');
	}else{
		rm.writeAttribute('tabindex', '0');
	}

	// Appearance
	var sTextDir = oTextField.getTextDirection();
	if (sTextDir) {
		rm.addStyle("direction", sTextDir.toLowerCase());
	}

	var oTextAlign = oTextField.getTextAlign();
	if(oTextAlign) {
		rm.addStyle("text-align", r.getTextAlign(oTextAlign, sTextDir));
	}

	switch (oTextField.getImeMode()) {
	case sap.ui.core.ImeMode.Inactive:
		rm.addStyle('ime-mode','inactive');
		break;
	case sap.ui.core.ImeMode.Active:
		rm.addStyle('ime-mode','active');
		break;
	case sap.ui.core.ImeMode.Disabled:
		rm.addStyle('ime-mode','disabled');
		break;
	}

	if(oTextField.getDesign() == sap.ui.core.Design.Monospace){
		rm.addClass('sapUiTfMono');
	}

	if (oTextField.getMaxLength()) {
		rm.writeAttribute("maxLength", oTextField.getMaxLength());
	}

	// Add additional attributes, styles and so on (TextArea)
	if (this.renderInnerAttributes) {
		this.renderInnerAttributes(rm, oTextField);
	}

	// ARIA
	if(this.renderARIAInfo){
		this.renderARIAInfo(rm, oTextField);
	}

	var sPlaceholder = oTextField.getPlaceholder();
	if (sPlaceholder) {
		if (this.convertPlaceholder) {
			sPlaceholder = this.convertPlaceholder(oTextField);
		}
		if (sap.ui.Device.support.input.placeholder) {
			rm.writeAttributeEscaped('placeholder', sPlaceholder);
		}
	}

	rm.writeStyles();
	rm.writeClasses();

	if (this.getInnerTagName){
		rm.write(">");
	}else{
		rm.write(" value=\"");
		if (!sap.ui.Device.support.input.placeholder && sPlaceholder && !oTextField.getValue()) {
			rm.writeEscaped(sPlaceholder);
		} else {
			rm.writeEscaped(oTextField.getValue());
		}
		rm.write("\"");
		rm.write("/>");
	}

	if (this.getInnerTagName){
		// Inner hook
		if (this.renderInnerContent) {
			this.renderInnerContent(rm, oTextField);
		}

		rm.write('</'+this.getInnerTagName()+'>');
	}

	if (bRenderOuter) {
		// Outer hook
		if (this.renderOuterContent) {
			this.renderOuterContent(rm, oTextField);
		}

		rm.write("</div>");
	}

};

sap.ui.commons.TextFieldRenderer.renderStyles = function(rm, oTextField) {

	rm.addClass('sapUiTfBrd');

	if(oTextField.getEnabled()){
		if(!oTextField.getEditable()){
			rm.addClass("sapUiTfRo");
		}else{
			rm.addClass("sapUiTfStd");
		}
	}else{
		rm.addClass("sapUiTfDsbl");
	}

	switch (oTextField.getValueState()){
	case (sap.ui.core.ValueState.Error) :
		rm.addClass('sapUiTfErr');
	break;
	case (sap.ui.core.ValueState.Success) :
		rm.addClass('sapUiTfSucc');
	break;
	case (sap.ui.core.ValueState.Warning) :
		rm.addClass('sapUiTfWarn');
	break;
	}

	if(oTextField.getRequired()){
		rm.addClass('sapUiTfReq');
	}

	if (oTextField.getPlaceholder() && !sap.ui.Device.support.input.placeholder) {
		rm.addClass('sapUiTfPlace');
	}

};

sap.ui.commons.TextFieldRenderer.onfocus = function(oTextField) {
	var oTfRef = oTextField.$();
	oTfRef.addClass("sapUiTfFoc");

	if (!sap.ui.Device.support.input.placeholder && !oTextField.getValue() && oTextField.getPlaceholder()) {
		if(oTextField._getRenderOuter()){
			var oTfRefInput = oTextField.$("input");
		}else{
			var oTfRefInput = oTfRef;
		}

		oTfRef.removeClass("sapUiTfPlace");
		oTfRefInput.val("");
	}
};

sap.ui.commons.TextFieldRenderer.onblur = function(oTextField) {
	var oTfRef = oTextField.$();
	oTfRef.removeClass("sapUiTfFoc");

	var sPlaceholder = oTextField.getPlaceholder();
	if (!sap.ui.Device.support.input.placeholder) {
		if(oTextField._getRenderOuter()){
			var oTfRefInput = oTextField.$("input");
		}else{
			var oTfRefInput = oTfRef;
		}

		if (!oTfRefInput.val() && sPlaceholder) {
			oTfRef.addClass("sapUiTfPlace");
			if (this.convertPlaceholder) {
				sPlaceholder = this.convertPlaceholder(oTextField);
			}
			oTfRefInput.val(sPlaceholder);
		}
	}
};

sap.ui.commons.TextFieldRenderer.setValueState = function(oTextField, oldValueState, newValueState) {
	var oTfRef = oTextField.$();
	var bRenderOuter = oTextField._getRenderOuter();

	if(bRenderOuter){
	// aria attribute must be on inner tag
		var oTfRefInput = oTextField.$("input");
	}else{
		var oTfRefInput = oTfRef;
	}

	// Remove old value state
	switch (oldValueState){
	case (sap.ui.core.ValueState.Error) :
		oTfRef.removeClass('sapUiTfErr');
		oTfRefInput.removeAttr('aria-invalid');
		break;
	case (sap.ui.core.ValueState.Success) :
		oTfRef.removeClass('sapUiTfSucc');
		break;
	case (sap.ui.core.ValueState.Warning) :
		oTfRef.removeClass('sapUiTfWarn');
		break;
	}

	// Set new value state
	switch (newValueState){
	case (sap.ui.core.ValueState.Error) :
		oTfRef.addClass('sapUiTfErr');
		oTfRefInput.attr('aria-invalid',true);
		break;
	case (sap.ui.core.ValueState.Success) :
		oTfRef.addClass('sapUiTfSucc');
		break;
	case (sap.ui.core.ValueState.Warning) :
		oTfRef.addClass('sapUiTfWarn');
		break;
	}

	var tooltip = sap.ui.core.ValueStateSupport.enrichTooltip(oTextField, oTextField.getTooltip_AsString());
	if (tooltip) {
		oTfRef.attr('title', tooltip);
		if (bRenderOuter) {
			oTextField.$("input").attr('title', tooltip);
		}
	}else{
		oTfRef.removeAttr('title');
		if (bRenderOuter) {
			oTextField.$("input").removeAttr('title');
		}
	}

};

sap.ui.commons.TextFieldRenderer.setEditable = function(oTextField, bEditable) {

	if(!oTextField.getEnabled()){
		// if disabled -> nothing to do
		return;
	}

	var oTfRef = oTextField.$();

	if(oTextField._getRenderOuter()){
	// Readonly attribute must be on inner tag
		var oTfRefInput = oTextField.$("input");
	}else{
		var oTfRefInput = oTfRef;
	}


	if (bEditable) {
		oTfRef.removeClass('sapUiTfRo').addClass('sapUiTfStd');
		oTfRefInput.removeAttr('readonly');
	} else {
		oTfRef.removeClass('sapUiTfStd').addClass('sapUiTfRo');
		oTfRefInput.attr('readonly', 'readonly');
	}

	oTfRefInput.attr('aria-readonly', !bEditable);
};

sap.ui.commons.TextFieldRenderer.setEnabled = function(oTextField, bEnabled) {
	var oTfRef = oTextField.$();

	if(oTextField._getRenderOuter()){
	// Disabled attribute must be on inner tag
		var oTfRefInput = oTextField.$("input");
	}else{
		var oTfRefInput = oTfRef;
	}

	if (bEnabled) {
		if (oTextField.getEditable()) {
			oTfRef.removeClass('sapUiTfDsbl').addClass('sapUiTfStd').removeAttr('aria-disabled');
			oTfRefInput.removeAttr('disabled').removeAttr('aria-disabled').attr( 'tabindex', '0');
		} else {
			oTfRef.removeClass('sapUiTfDsbl').addClass('sapUiTfRo').removeAttr('aria-disabled');
			oTfRefInput.removeAttr('disabled').removeAttr('aria-disabled').attr( 'tabindex', '0').attr( 'readonly', 'readonly');
		}
	}else{
		if (oTextField.getEditable()) {
			oTfRef.removeClass('sapUiTfStd').addClass('sapUiTfDsbl').attr('aria-disabled', 'true');
			oTfRefInput.attr( 'disabled', 'disabled').attr('aria-disabled', 'true').attr( 'tabindex', '-1');
		} else {
			oTfRef.removeClass('sapUiTfRo').addClass('sapUiTfDsbl').attr('aria-disabled', 'true');
			oTfRefInput.removeAttr('readonly').attr( 'disabled', 'disabled').attr('aria-disabled', 'true').attr( 'tabindex', '-1');
		}
	}

};

sap.ui.commons.TextFieldRenderer.removeValidVisualization = function(oTextField) {
	var oTfRef = oTextField.$();
	if(oTfRef) {
		oTfRef.removeClass("sapUiTfSucc");
	}
	else {
		jQuery.sap.delayedCall(1000, sap.ui.commons.TextFieldRenderer, "removeValidVisualization", [oTextField]);
	}
};

sap.ui.commons.TextFieldRenderer.setDesign = function(oTextField, sDesign) {

	oTextField.$().toggleClass('sapUiTfMono', (sDesign == sap.ui.core.Design.Monospace));
};

sap.ui.commons.TextFieldRenderer.setRequired = function(oTextField, bRequired) {

	if(oTextField._getRenderOuter()){
	// aria attribute must be on inner tag
		var oTfRefInput = oTextField.$("input");
	}else{
		var oTfRefInput = oTextField.$();
	}

	oTextField.$().toggleClass('sapUiTfReq', bRequired);
	if (bRequired) {
		oTfRefInput.attr("aria-required", true);
	} else {
		oTfRefInput.removeAttr("aria-required");
	}

};

sap.ui.commons.TextFieldRenderer.renderARIAInfo = function(rm, oTextField) {

	var mProps= {
		role: oTextField.getAccessibleRole().toLowerCase(),
		multiline: false,
		autocomplete: 'none'};

	if (oTextField.getValueState() == sap.ui.core.ValueState.Error) {
		mProps["invalid"] = true;
	}

	rm.writeAccessibilityState(oTextField, mProps);

};

/**
 * Dummy inheritance of static methods/functions.
 * @see sap.ui.core.Renderer.getTextAlign
 * @private
 */
sap.ui.commons.TextFieldRenderer.getTextAlign = sap.ui.core.Renderer.getTextAlign;
