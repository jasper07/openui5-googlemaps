/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.CustomTileRenderer");
jQuery.sap.require("sap.m.TileRenderer");
/**
 * @class CustomTile renderer. 
 * @static
 */
sap.m.CustomTileRenderer = sap.ui.core.Renderer.extend(sap.m.TileRenderer);

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *                oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control}
 *                oControl an object representation of the control that should be rendered
 */
 sap.m.CustomTileRenderer.render = function(rm, oControl) {
	rm.write("<div ");
	rm.writeControlData(oControl);
	rm.addClass("sapMCustomTile");
	rm.writeClasses();
	if(oControl._invisible){
		rm.addStyle("visibility", "hidden");
		rm.writeStyles();
	}
	rm.write(">");
	rm.write("<div id=\"" + oControl.getId() + "-remove\" class=\"sapMTCRemove\"></div>");
	rm.write("<div class=\"sapMCustomTileContent\">");
	this._renderContent(rm,oControl);
	rm.write("</div></div>");
};

sap.m.CustomTileRenderer._renderContent = function (rm, oTile) {
	rm.renderControl(oTile.getContent());
};
