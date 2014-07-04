/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.demokit.HexagonButton
jQuery.sap.declare("sap.ui.demokit.HexagonButtonRenderer");

/**
 * @class HexagonButton renderer. 
 * @static
 */
sap.ui.demokit.HexagonButtonRenderer = function() {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.demokit.HexagonButtonRenderer.render = function(oRenderManager, oControl){ 
    // convenience variable
	var rm = oRenderManager;
	
	// write the HTML into the render manager  
	rm.write("<div ");
	rm.writeControlData(oControl);
	rm.addClass("sapUiHexBtn");
	rm.addClass("sapUiHexBtn" + jQuery.sap.escapeHTML(oControl.getEnabled() ? oControl.getColor() : "Gray"));
	if ( oControl.getEnabled() && oControl.hasListeners('press') )
		rm.addClass("sapUiHexBtnActive");
	rm.writeClasses();
	rm.write(" style='" + jQuery.sap.escapeHTML(oControl.getPosition()) + "'");
	if(oControl.getTooltip_AsString()) {
		rm.writeAttributeEscaped("title", oControl.getTooltip_AsString());
	}	
	rm.write(">");
	if ( oControl.getIcon() ) {
		rm.write("<IMG ");
		rm.writeAttributeEscaped("src", oControl.getIcon());
		var sImagePosition = oControl.getImagePosition();
		if(sImagePosition){
			rm.write(" style='" + jQuery.sap.escapeHTML(sImagePosition) + "'");
		}else{
			rm.write(" style='position:relative;left:40px;top:45px;'");
		}
		rm.write(" border='0'");
		rm.write("/>");		
	}
	rm.write("</div>");
};
