/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */


jQuery.sap.declare("sap.m.LabelRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class Label renderer.
 * @static
 */
sap.m.LabelRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oLabel an object representation of the control that should be rendered
 */
sap.m.LabelRenderer.render = function(rm, oLabel){
	// return immediately if control is invisible
	if (!oLabel.getVisible()) {
		return;
	}

	// convenience variable
	var r = sap.m.LabelRenderer;

	// write the HTML into the render manager
	rm.write("<label");
	rm.writeControlData(oLabel);

	// Styles
	rm.addClass("sapMLabel");
	//set design to bold
	if (oLabel.getDesign() == sap.m.LabelDesign.Bold) {
		rm.addStyle("font-weight", "bold");
	}

	if (oLabel.getRequired()) {
		rm.addClass("sapMLabelRequired");
	}

	if (oLabel.getLabelForRendering()) {
		var oFor = sap.ui.getCore().byId(oLabel.getLabelForRendering());
		rm.write(" for=\"");
		// for some controls the label must point to a special HTML element, not the outer one.
		if ( oFor && oFor.getIdForLabel) {
			rm.write(oFor.getIdForLabel());
		} else{
			rm.write(oLabel.getLabelForRendering());
		}
		rm.write("\"");
	}

	// Text direction
	var sTextDir = oLabel.getTextDirection();
	if (sTextDir) {
		rm.addStyle("direction", sTextDir.toLowerCase());
	}

	// Style for width
	var sWidth = oLabel.getWidth();
	if (sWidth) {
		rm.addStyle("width", sWidth);
	} else {
		rm.addClass("sapMLabelMaxWidth");
	}

	// Style for text alignment
	var sTextAlign = oLabel.getTextAlign();
	if(sTextAlign) {
		var sTextAlign = r.getTextAlign(sTextAlign, sTextDir);
		if (sTextAlign) {
			rm.addStyle("text-align", sTextAlign);
		}
	}

	var sLabelText = oLabel.getText();
	if (sLabelText =="") {
		rm.addClass("sapMLabelNoText");
	}

	rm.writeStyles();
	rm.writeClasses();

	var sTooltip = oLabel.getTooltip_AsString();
	if (sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}

	rm.write(">");

	// Write the label text

	if (sLabelText) {
		rm.writeEscaped(sLabelText);
	}
	rm.write("</label>");
};

/**
 * Dummy inheritance of static methods/functions.
 * @see sap.ui.core.Renderer.getTextAlign
 * @private
 */
sap.m.LabelRenderer.getTextAlign = sap.ui.core.Renderer.getTextAlign;
