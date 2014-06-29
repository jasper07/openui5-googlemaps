/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.commons.MenuButton
jQuery.sap.declare("sap.ui.commons.MenuButtonRenderer");
jQuery.sap.require("sap.ui.commons.ButtonRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class MenuButton renderer.
 * @static
 * For a common look&feel, the MenuButton extends the Button control,
 * just like the TextField ComboBox works.
 */
sap.ui.commons.MenuButtonRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.ButtonRenderer);

/**
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager currently rendering this control
 * @param {sap.ui.commons.MenuButton}
 *            oControl the MenuButton that should be rendered
 * @private
 * P.S.: "renderButtonAttributes" is a reserved/hard-coded Button extending function!
 *       It is used to allow extensions to display content after the actual button content.
 */
sap.ui.commons.MenuButtonRenderer.renderButtonAttributes = function(rm, oControl) {
	//Add specific ARIA information for MenuButton
	if (sap.ui.getCore().getConfiguration().getAccessibility()){
		rm.writeAttribute("aria-haspopup", "true");
	}
};

/**
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager currently rendering this control
 * @param {sap.ui.commons.MenuButton}
 *            oControl the MenuButton that should be rendered
 * @private
 * P.S.: "renderButtonContentAfter" is a reserved/hard-coded Button extending function!
 *       It is used to allow extensions to display content after the actual button content.
 */
sap.ui.commons.MenuButtonRenderer.renderButtonContentAfter = function(rm, oControl) {
	rm.write("<span class=\"sapUiMenuButtonIco\"></span>");
};