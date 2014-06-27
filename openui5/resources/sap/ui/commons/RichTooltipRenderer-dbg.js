/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.commons.RichTooltip
jQuery.sap.declare("sap.ui.commons.RichTooltipRenderer");
jQuery.sap.require("sap.ui.core.ValueStateSupport");

/**
 * @class RichToltip renderer.
 * @static
 */
sap.ui.commons.RichTooltipRenderer = {};

/**
 * Renders the HTML for the RichTooltip, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} rm The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.ui.core.Control} oRichTooltip An object representation of the control that should be rendered.
 */
sap.ui.commons.RichTooltipRenderer.render = function(rm, oRichTooltip){
	var sId = oRichTooltip.getId();

	// Header
	rm.write("<div ");
	rm.writeControlData(oRichTooltip);
	rm.addClass("sapUiRtt");
	rm.writeClasses();
	rm.write(" ><div><div>");
	rm.write("<div class='sapUiRttTopL'></div><div class='sapUiRttTopR'></div>");
	rm.write("<div class='sapUiRttCL'>");
	rm.write("<div class='sapUiRttCR'>");
	
	rm.write("<div class='sapUiRttContent'>");

	// Title
	var sTitle = oRichTooltip.getTitle();
	if (sTitle) {
		rm.write("<div id='" + sId +"-title' role='tooltip' class='sapUiRttTitle'>");
		rm.writeEscaped(sTitle);
		rm.write("</div>");
		// render a separator between title and rest of the RichTooltip
		rm.write("<div class='sapUiRttSep'></div>");
	}

	// if the parent element has a set ValueState render the corresponding text and image
	var valueStateText = sap.ui.core.ValueStateSupport.getAdditionalText(oRichTooltip.getParent());
	if (valueStateText) {
		var sValueState = oRichTooltip.getParent().getValueState();
		var sValueStateImage = sValueState !== sap.ui.core.ValueState.None ? "ValueState_" + sValueState + ".png" : "";

		rm.write('<div class="sapUiRttValueStateContainer">');
		
		// if there is a proper value state -> render corresponding image
		if (sValueStateImage !== "") {
			sValueStateImage = jQuery.sap.getModulePath("sap.ui.commons", '/')
			+ "themes/"
			+ sap.ui.getCore().getConfiguration().getTheme()
			+ "/img/richtooltip/" + sValueStateImage;
			
			rm.write('<img id="'+sId+'-valueStateImage" class="sapUiRttValueStateImage" src="');
			rm.writeEscaped(sValueStateImage);
			rm.write('"/>');
		}

		// render the individual ValueState text (if available) otherwise use the default text
		var sIndividualText = oRichTooltip.getAggregation("individualStateText");
		if (sIndividualText) {
			rm.renderControl(sIndividualText);
		} else {
			rm.write('<div id="'+sId+'-valueStateText" class="sapUiRttValueStateText">');
			rm.writeEscaped(valueStateText);
			rm.write('</div>');
		}
		rm.write('</div>');
		
		// render a separator between ValueState stuff and text of the RichTooltip
		rm.write("<div class='sapUiRttSep'></div>");
	}
	
	rm.write('<div class="sapUiRttContentContainer">');
	// render image that might be set
	var sImage = oRichTooltip.getImageSrc();
	if (sImage){
		var sAltText = oRichTooltip.getImageAltText();
		rm.write('<img id="' + sId + '-image" alt="' + sAltText + '" class="sapUiRttImage" src="');
		rm.writeEscaped(sImage);
		rm.write('"/>');
	}
	
	// render RichTooltip's text
	var oText = oRichTooltip.getAggregation("formattedText");
	if (oText){
		rm.renderControl(oText);
	}
	rm.write('</div>');

	// render footer
	rm.write("</div></div></div>");
	rm.write("<div class='sapUiRttBotL'></div>");
	rm.write("<div class='sapUiRttBotR'></div>");
	rm.write("</div></div></div>");
};