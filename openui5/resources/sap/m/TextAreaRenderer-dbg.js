/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.InputBaseRenderer");
jQuery.sap.declare("sap.m.TextAreaRenderer");

/**
 * @class TextArea renderer.
 * @static
 */
sap.m.TextAreaRenderer = {};


/**
 * @class Input renderer.
 * @static
 *
 * TextAreaRenderer extends the TextAreaRenderer
 */
sap.m.TextAreaRenderer = sap.ui.core.Renderer.extend(sap.m.InputBaseRenderer);

// Adds control specific class
sap.m.TextAreaRenderer.addOuterClasses = function(oRm, oControl) {
	oRm.addClass("sapMTextArea");
};

// Write the opening tag name of the TextArea
sap.m.TextAreaRenderer.openInputTag = function(oRm, oControl) {
	oRm.write("<textarea");
};

// Write the closing tag name of the TextArea
sap.m.TextAreaRenderer.closeInputTag = function(oRm, oControl) {
	oRm.write("</textarea>");
};

// TextArea does not have value property as HTML element, so overwrite base method
sap.m.TextAreaRenderer.writeInnerValue = function() {
};

// Write the value of the TextArea
sap.m.TextAreaRenderer.writeInnerContent = function(oRm, oControl) {
	oRm.writeEscaped(oControl.getValue());
};

// Add extra classes for TextArea element
sap.m.TextAreaRenderer.addInnerClasses = function(oRm, oControl) {
	oRm.addClass("sapMTextAreaInner");
};

// Add extra attributes to TextArea
sap.m.TextAreaRenderer.writeInnerAttributes = function(oRm, oControl) {
	if (oControl.getWrapping() && oControl.getWrapping() != "None") {
		oRm.writeAttribute("wrap", oControl.getWrapping());
	}
	oRm.writeAttribute("rows", oControl.getRows());
	oRm.writeAttribute("cols", oControl.getCols());
};

// Add extra styles to TextArea
sap.m.TextAreaRenderer.addInnerStyles = function(oRm, oControl) {
	oControl.getHeight() && oRm.addStyle("height", oControl.getHeight());
};