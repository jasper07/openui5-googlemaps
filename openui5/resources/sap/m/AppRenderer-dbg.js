/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.AppRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.NavContainerRenderer");

/**
 * @class App renderer. 
 * @static
 */
sap.m.AppRenderer = {
};

sap.m.AppRenderer = sap.ui.core.Renderer.extend(sap.m.NavContainerRenderer);

sap.m.AppRenderer.renderAttributes = function(rm, oControl) {
	sap.m.BackgroundHelper.addBackgroundColorStyles(rm, oControl.getBackgroundColor(),  oControl.getBackgroundImage());
};

sap.m.AppRenderer.renderBeforeContent = function(rm, oControl) {
	sap.m.BackgroundHelper.renderBackgroundImageTag(rm, oControl, "sapMAppBG",  oControl.getBackgroundImage(), oControl.getBackgroundRepeat(), oControl.getBackgroundOpacity());
};
