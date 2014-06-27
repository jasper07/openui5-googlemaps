/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.IconTabBarRenderer");
jQuery.sap.require("sap.ui.core.IconPool");
/**
 * @class HBox renderer.
 * @static
 */
sap.m.IconTabBarRenderer = {
};

/**
 * Array of all available icon color CSS classes
 * 
 * @private
 */
sap.m.IconTabBarRenderer._aAllIconColors = ['sapMITBFilterCritical', 'sapMITBFilterPositive', 'sapMITBFilterNegative', 'sapMITBFilterDefault'];


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.IconTabBarRenderer.render = function(oRM, oControl){
	
	// return immediately if control is not visible
	if (!oControl.getVisible()) {
		return;
	}
	
	var aItems = oControl.getItems();
	var bTextOnly = oControl._checkTextOnly(aItems);
	var bNoText = oControl._checkNoText(aItems);

	oRM.write("<div ");
	oRM.addClass("sapMITB sapMITBNotScrollable");
	oRM.writeControlData(oControl);
	oRM.writeClasses();
	oRM.write(">");
	oRM.renderControl(oControl._getScrollingArrow("left"));

	if (!sap.ui.Device.system.desktop || (sap.ui.Device.os.windows && sap.ui.Device.os.version === 8)) {
		oRM.write("<div id='" + oControl.getId() + "-scrollContainer' class='sapMITBScrollContainer'>");
	}

	oRM.write("<div id='" + oControl.getId() + "-head'");
	oRM.addClass("sapMITBHead");

	if (bTextOnly) {
		oRM.addClass("sapMITBTextOnly");
	}

	if (bNoText) {
		oRM.addClass("sapMITBNoText");
	}

	oRM.writeClasses();
	oRM.write(">");

	jQuery.each(aItems, function(iIndex, oItem) {
		if(!(oItem instanceof sap.m.IconTabSeparator) && !oItem.getVisible()) {
			return; // only render visible items
		}
		oRM.write("<div ");
		oRM.writeElementData(oItem);
		oRM.addClass("sapMITBItem");

		if (oItem instanceof sap.m.IconTabFilter) {

			if(oItem.getDesign() === sap.m.IconTabFilterDesign.Vertical) {
				oRM.addClass("sapMITBVertical");
			} else if (oItem.getDesign() === sap.m.IconTabFilterDesign.Horizontal) {
				oRM.addClass("sapMITBHorizontal");
			}

			if (oItem.getShowAll()) {
				oRM.addClass("sapMITBAll");
			} else {
				oRM.addClass("sapMITBFilter");
				oRM.addClass("sapMITBFilter" + oItem.getIconColor());
			}

			if (!oItem.getEnabled()) {
				oRM.addClass("sapMITBDisabled");
			}

			var sTooltip = oItem.getTooltip_AsString();
			if (sTooltip) {
				oRM.writeAttributeEscaped("title", sTooltip);
			}

			oRM.writeClasses();
			oRM.write(">");
			oRM.write("<div id='" + oItem.getId() + "-tab' class='sapMITBTab'>");

			if (!oItem.getShowAll() || !oItem.getIcon()) {
				oRM.renderControl(oItem._getImageControl(['sapMITBFilterIcon', 'sapMITBFilter' + oItem.getIconColor()], oControl, sap.m.IconTabBarRenderer._aAllIconColors));	
			}

			if (!oItem.getShowAll() && !oItem.getIcon() && !bTextOnly)  {
				oRM.write("<span class='sapMITBFilterNoIcon'> </span>");
			}

			if (oItem.getDesign() === sap.m.IconTabFilterDesign.Horizontal) {
				oRM.write("</div>");
				oRM.write("<div class='sapMITBHorizontalWrapper'>");
			}

			oRM.write("<span ");
			oRM.addClass("sapMITBCount");
			oRM.writeClasses();
			oRM.write(">");

			if ((oItem.getCount() === "") && (oItem.getDesign() === sap.m.IconTabFilterDesign.Horizontal)) {
				//this is needed for the correct placement of the text in the horizontal design
				oRM.write("&nbsp;");
			} else {
				oRM.writeEscaped(oItem.getCount());
			}

			oRM.write("</span>");

			if (oItem.getDesign() === sap.m.IconTabFilterDesign.Vertical) {
				oRM.write("</div>");
			}

			if (oItem.getText().length) {
				oRM.write("<div id='" + oItem.getId() + "-text' class=\"sapMITBText\">");
				oRM.writeEscaped(oItem.getText());
				oRM.write("</div>");
			}

			if (oItem.getDesign() === sap.m.IconTabFilterDesign.Horizontal) {
				oRM.write("</div>");
			}

		} else { // separator
			oRM.addClass("sapMITBSep");

			if (!oItem.getIcon()) {
				oRM.addClass("sapMITBSepLine");
			}
			oRM.writeClasses();
			oRM.write(">");
			
			if (oItem.getIcon()) {
				oRM.renderControl(oItem._getImageControl(['sapMITBSepIcon'], oControl));	
			}
		}
		oRM.write("</div>");
	});

	oRM.write("</div>");

	if (!sap.ui.Device.system.desktop || (sap.ui.Device.os.windows && sap.ui.Device.os.version === 8)) {
		oRM.write("</div>"); //scrollContainer
	}

		oRM.renderControl(oControl._getScrollingArrow("right"));

	var oContent = oControl.getContent();

	oRM.write("<div id=\"" + oControl.getId() + "-containerContent\" ");
	oRM.addClass("sapMITBContainerContent");

	if(!oControl.getExpanded()) { // add special styles  when closed
		oRM.addClass("sapMITBContentClosed");
	}

	oRM.writeClasses();
	oRM.write(">");

	// content arrow
	oRM.write("<div id=\"" + oControl.getId() + "-contentArrow\" ");
	oRM.addClass("sapMITBContentArrow");

	if(!oControl.getExpanded()) { // hide arrow when closed
		oRM.addClass("sapMITBNoContentArrow");
	}

	oRM.writeClasses();
	oRM.write("></div>");

	// inner content div
	oRM.write("<div id=\"" + oControl.getId() + "-content\" class=\"sapMITBContent\" ");
	if(!oControl.getExpanded()) { // hide content when closed
		oRM.write("style=\"display: none\"");
	}
	oRM.write(">");
		
	if (oControl.getExpanded()) {
		// content from selected item
		if (oControl.oSelectedItem && oControl.oSelectedItem.getContent()) {
			var oContentSelectedTab = oControl.oSelectedItem.getContent();
			if (oContentSelectedTab.length > 0) {
				oContent = oContentSelectedTab;
			}
		}
		// render the content
		if (oContent.length > 0) {
			for (var i = 0; i < oContent.length; i++) {
				oRM.renderControl(oContent[i]);
			}
		}
	}

	oRM.write("</div>");
	oRM.write("</div>");
	oRM.write("</div>");
};

