/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.ToolbarRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class Toolbar renderer.
 * @static
 */
sap.m.ToolbarRenderer = {};

sap.m.ToolbarRenderer.render = function(rm, oToolbar) {
	if (oToolbar._isInvisible()) {
		return this.renderInvisible(rm, oToolbar);
	}

	rm.write("<div");
	rm.writeControlData(oToolbar);
	rm.addClass("sapMTB");

	if (!sap.m.Toolbar.hasFlexBoxSupport) {
		rm.addClass("sapMTBNoFlex");
	} else if (!sap.m.Toolbar.hasNewFlexBoxSupport) {
		rm.addClass("sapMTBOldFlex");
	} else {
		rm.addClass("sapMTBNewFlex");
	}

	if (oToolbar.getActive()) {
		rm.addClass("sapMTBActive");
		rm.writeAttribute("tabindex", "0");
	} else {
		rm.addClass("sapMTBInactive");
	}

	rm.addClass("sapMTB-" + oToolbar.getActiveDesign() + "-CTX");

	var sWidth = oToolbar.getWidth();
	var sHeight = oToolbar.getHeight();
	sWidth && rm.addStyle("width", sWidth);
	sHeight && rm.addStyle("height", sHeight);

	rm.writeClasses();
	rm.writeStyles();
	rm.write(">");

	oToolbar.getContent().forEach(function(oContent) {
		rm.renderControl(oContent);
	});

	rm.write("</div>");
};


// TODO: Add this functionality to more central place that every control can use
sap.m.ToolbarRenderer.renderInvisible = function(rm, oToolbar) {
	rm.write("<div");
	rm.writeControlData(oToolbar);
	rm.addStyle("display", "none");
	rm.writeStyles();
	rm.write("></div>");
};