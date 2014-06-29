/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.PageRenderer");

/**
 * @class Page renderer.
 * @static
 */
sap.m.PageRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.PageRenderer.render = function(rm, oPage) {
	var oHeader = null,
		oFooter = null,
		sEnableScrolling = oPage.getEnableScrolling() ? " sapMPageScrollEnabled" : "";

	if (oPage.getShowHeader()) {
		oHeader = oPage._getAnyHeader();
	}

	var oSubHeader = oPage.getSubHeader();
	
	if (oPage.getShowFooter()){
		oFooter = oPage.getFooter();
	}
	rm.write("<div");
	rm.writeControlData(oPage);
	rm.addClass("sapMPage");

	rm.addClass("sapMPageBg" + oPage.getBackgroundDesign());
	
	if (oHeader) {
		rm.addClass("sapMPageWithHeader");
	}

	if (oSubHeader) {
		rm.addClass("sapMPageWithSubHeader");
	}

	if (oFooter) {
		// it is used in the PopOver to remove additional margin bottom for page with footer
		rm.addClass("sapMPageWithFooter");
	}

	rm.writeClasses();

	var sTooltip = oPage.getTooltip_AsString();

	if (sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}

	rm.write(">");

	// render header
	if (oHeader) {
		rm.renderControl(oHeader);
	}

	if (oSubHeader) {
		oSubHeader._context = 'header';
		rm.renderControl(oSubHeader.addStyleClass("sapMSubHeader-CTX sapMPageSubHeader"));
	}

	// render child controls
	rm.write('<section id="' + oPage.getId() + '-cont">');
	rm.write('<div id="' + oPage.getId() + '-scroll" class="sapMPageScroll' + sEnableScrolling + '">');

	var aContent = oPage.getContent();
	var l = aContent.length;

	for (var i = 0; i < l; i++) {
		rm.renderControl(aContent[i]);
	}

	rm.write("</div>");

	rm.write("</section>");

	// render footer Element
	if (oFooter) {
		oFooter._context = 'footer';
		rm.renderControl(oFooter);
	}

	rm.write("</div>");
};