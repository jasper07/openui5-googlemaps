/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.demokit.CodeSampleContainer
jQuery.sap.declare("sap.ui.demokit.CodeSampleContainerRenderer");

/**
 * @class CodeSampleContainer renderer. 
 * @static
 */
sap.ui.demokit.CodeSampleContainerRenderer = function() {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.demokit.CodeSampleContainerRenderer.render = function(oRenderManager, oControl){ 
    // convenience variable
	var rm = oRenderManager;
	
    rm.write("<div");
    rm.writeControlData(oControl);
    rm.write(" class='sapUiDKitCSample sapUiShd'");
	var sWidth = oControl.getWidth();
	if(sWidth) {
		rm.addStyle("width", sWidth);
	}
	rm.writeStyles();
    rm.write(">");

    rm.write("<div id='", jQuery.sap.escapeHTML(oControl.getUiAreaId()), "'");
    rm.write(" class='sapUiBody'");
    rm.write(">");
    var aContent = oControl._oUIArea.getContent();
    for(var i=0; i<aContent.length; i++) {
    	rm.renderControl(aContent[i]);
    }
    rm.write("</div>");
    
    rm.write("<div class='sapUiDKitCSampleBorder'>")
    rm.renderControl(oControl._oShowCodeLink);
    rm.write(" ");
    rm.renderControl(oControl._oApplyCodeLink);
    rm.write(" ");
    rm.renderControl(oControl._oCodeViewer);
    rm.write("</div>");
    
    rm.write("</div>");
    
};
