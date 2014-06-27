/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.InputBaseRenderer");
jQuery.sap.require("sap.ui.core.ValueStateSupport");

/**
 * @class Input renderer.
 * @static
 */
sap.m.InputBaseRenderer = {};

sap.m.InputBaseRenderer.render = function(rm, oControl) {
	if (!oControl.getVisible()) {
		return;
	}

	rm.write("<div");
	rm.writeControlData(oControl);

	// outer styles
	this.addOuterStyles(rm, oControl);
	oControl.getWidth() && rm.addStyle("width", oControl.getWidth());
	rm.writeStyles();

	// outer classes
	rm.addClass("sapMInputBase");
	this.addCursorClass(rm, oControl);
	this.addOuterClasses(rm, oControl);
	!oControl.getEnabled() && rm.addClass("sapMInputBaseDisabled");
	!oControl.getEditable() && rm.addClass("sapMInputBaseReadonly");
	oControl.getValueState() != "None" && rm.addClass("sapMInputBase" + oControl.getValueState());
	rm.writeClasses();

	// outer attributes
	this.writeOuterAttributes(rm, oControl);
	var sTooltip = sap.ui.core.ValueStateSupport.enrichTooltip(oControl, oControl.getTooltip_AsString());
	sTooltip && rm.writeAttributeEscaped("title", sTooltip);
	rm.write(">");

	// enable self-made placeholder
	if (oControl._bShowLabelAsPlaceholder) {
		rm.write("<label class='sapMInputBasePlaceholder'");
		rm.writeAttribute("id", oControl.getId() + "-placeholder");
		rm.writeAttribute("for", oControl.getId() + "-inner");
		rm.write(">");
		rm.writeEscaped(oControl.getPlaceholder());
		rm.write("</label>");
	}

	// start inner
	this.openInputTag(rm, oControl);

	// inner attributes
	rm.writeAttribute("id", oControl.getId() + "-inner");

	// write the name of input
	if (oControl.getName()) {
		rm.writeAttributeEscaped("name", oControl.getName());
	}

	// let the browser handle placeholder
	if (!oControl._bShowLabelAsPlaceholder && oControl.getPlaceholder()) {
		rm.writeAttributeEscaped("placeholder", oControl.getPlaceholder());
	}

	// check if there is a maxLength property
	if (oControl.getMaxLength && oControl.getMaxLength() > 0) {
		rm.writeAttribute("maxlength", oControl.getMaxLength());
	}

	// check disable and readonly
	if (!oControl.getEnabled()) {
		rm.writeAttribute("disabled", "disabled");
	} else  if (!oControl.getEditable()) {
		rm.writeAttribute("tabindex", "-1");
		rm.writeAttribute("readonly", "readonly");
		rm.addClass("sapMInputBaseReadonlyInner");
	}

	this.writeInnerValue(rm, oControl);
	this.writeInnerAttributes(rm, oControl);

	// inner classes
	rm.addClass("sapMInputBaseInner");
	this.addInnerClasses(rm, oControl);
	oControl.getValueState() != "None" && rm.addClass("sapMInputBase" + oControl.getValueState() + "Inner");
	rm.writeClasses();

	// inner styles
	this.addInnerStyles(rm, oControl);
	rm.writeStyles();
	rm.write(">");

	// finish inner
	this.writeInnerContent(rm, oControl);
	this.closeInputTag(rm, oControl);

	// finish outer
	rm.write("</div>");
};

/**
 * This function is reserved for derived class to add extra attributes to Input
 *
 * @deprecated sap.m.InputBaseRenderer#writeInnerAttributes should be called instead of this method
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputBaseRenderer.writeAttributes = function(oRm, oControl) {
	jQuery.sap.log.warning("Usage of deprecated function: sap.m.InputBaseRenderer#writeAttributes");
	this.writeInnerAttributes(oRm, oControl);
};

/**
 * Adds extra CSS class
 *
 * @deprecated sap.m.InputBaseRenderer#addOuterClasses should be called instead of this method
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputBaseRenderer.addClasses = function(oRm, oControl) {
	jQuery.sap.log.warning("Usage of deprecated function: sap.m.InputBaseRenderer#addClasses");
	this.addOuterClasses(oRm, oControl);
};


/**
 * Write the opening tag name of the input
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputBaseRenderer.openInputTag = function(oRm, oControl) {
	oRm.write("<input");
};

/**
 * Write the value of the input
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputBaseRenderer.writeInnerValue = function(oRm, oControl) {
	oRm.writeAttributeEscaped("value", oControl.getValue());
};


/**
 * Add cursor class to input container
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputBaseRenderer.addCursorClass = function(oRm, oControl) {
	if (oControl.getEnabled()) {
		oRm.addClass("sapMInputBaseCursor");
	}
};


/**
 * This function is reserved for derived class to add extra styles for input container
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputBaseRenderer.addOuterStyles = function(oRm, oControl) {
};

/**
 * This function is reserved for derived class to add extra classes for input container
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputBaseRenderer.addOuterClasses = function(oRm, oControl) {
};

/**
 * This function is reserved for derived class to add extra attributes for input container
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputBaseRenderer.writeOuterAttributes = function(oRm, oControl) {
};

/**
 * This function is reserved for derived class to add extra styles for input element
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputBaseRenderer.addInnerStyles = function(oRm, oControl) {
};

/**
 * This function is reserved for derived class to add extra classes for input element
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputBaseRenderer.addInnerClasses = function(oRm, oControl) {
};

/**
 * This function is reserved for derived class to add extra attributes for input element
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputBaseRenderer.writeInnerAttributes = function(oRm, oControl) {
};

/**
 * Write the value of the input
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputBaseRenderer.writeInnerContent = function(oRm, oControl) {
};

/**
 * Write the closing tag name of the input
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputBaseRenderer.closeInputTag = function(oRm, oControl) {
};