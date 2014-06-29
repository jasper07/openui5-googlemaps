/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.GrowingListRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ListRenderer");


/**
 * @class GrowingList renderer.
 * @static
 */
sap.m.GrowingListRenderer = sap.ui.core.Renderer.extend(sap.m.ListRenderer);

sap.m.GrowingListRenderer.render = function(rm, oControl) {
	/**
	 * For backwards compatibility we can't remove GrowingList control
	 * However, if the compatibility version is 1.16 or higher then
	 * we stop rendering to force using List control with growing feature
	 */
	if (oControl._isIncompatible()) {
		jQuery.sap.log.warning("Does not render sap.m.GrowingList#" + oControl.getId() + " when compatibility version is 1.16 or higher. Instead use sap.m.List/Table control with growing feature!");
	} else {
		sap.m.ListRenderer.render.call(this, rm, oControl);
	}
};
