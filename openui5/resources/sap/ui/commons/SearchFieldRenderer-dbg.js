/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.commons.SearchField
jQuery.sap.declare("sap.ui.commons.SearchFieldRenderer");

/**
 * @class SearchField renderer.
 * @static
 */
sap.ui.commons.SearchFieldRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.commons.SearchFieldRenderer.render = function(oRenderManager, oControl){
    var rm = oRenderManager;

	if(!oControl.getVisible()){
		return;
	}

    rm.write("<div");
    rm.writeControlData(oControl);
    rm.addClass("sapUiSearchField");
    if(!oControl.getEditable() || !oControl.getEnabled()){
		rm.addClass("sapUiSearchFieldDsbl");
    }
    if(!oControl.hasListExpander()){
		rm.addClass("sapUiSearchFieldNoExp");
    }
    if(oControl.getEnableClear()){
		rm.addClass("sapUiSearchFieldClear");
    }
    if(oControl.getWidth()) {
		rm.addStyle("width", oControl.getWidth());
    }
    if(oControl.getValue()) {
    	rm.addClass("sapUiSearchFieldVal");
    }
    rm.writeClasses();
    rm.writeStyles();

	/*rm.writeAccessibilityState(null, {
		//role: "search",
		owns: oControl._ctrl.getId() + (oControl.getShowExternalButton() ? (" "+oControl._btn.getId()) : "")
	});*///CSN 1076183 2013: ARIA owns not required and leads to unexpected screen reader anouncements
    	
    rm.write(">");
    rm.renderControl(oControl._ctrl);
    if(oControl.getShowExternalButton()){
		rm.renderControl(oControl._btn);
    }
    rm.write("</div>");
};





