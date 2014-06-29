/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.ToolbarSpacerRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class ToolbarSpacer renderer.
 * @static
 */
sap.m.ToolbarSpacerRenderer = {};

sap.m.ToolbarSpacerRenderer.render = function(rm, oControl) {
	rm.write("<div");
	rm.writeControlData(oControl);
	rm.addClass("sapMTBSpacer");

	var sWidth = oControl.getWidth();
	if (sWidth) {
		rm.addStyle("width", oControl.getWidth());
	} else {
		rm.addClass(sap.m.ToolbarSpacer.flexClass);
	}

	rm.writeStyles();
	rm.writeClasses();
	rm.write("></div>");
};