/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.demokit.CodeViewer
jQuery.sap.declare("sap.ui.demokit.CodeViewerRenderer");

/**
 * @class CodeViewer renderer. 
 * @static
 */
sap.ui.demokit.CodeViewerRenderer = function() {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.demokit.CodeViewerRenderer.render = function(oRM, oControl){
	
	if ( !oControl.getVisible() ) 
		return;
	
	// write the HTML into the render manager  
    oRM.write("<pre");
	oRM.writeControlData(oControl);
	if ( oControl.getEditable() ) {
		oRM.addClass("sapUiCodeViewer");
		oRM.addClass("editable");
		oRM.writeAttribute("contentEditable", "true");
	} else {
		oRM.addClass("prettyprint"); // this class acts as a 'TODO' for the pretty printer!
	}
		
	var sHeight = oControl.getHeight();
	if(sHeight) {
		oRM.addStyle("height", sHeight);
	}
	var sWidth = oControl.getWidth();
	if(sWidth) {
		oRM.addStyle("width", sWidth);
	}
	oRM.writeClasses();
	oRM.writeStyles();
	oRM.write(">");
	if ( oControl.getSource() ) {
		oRM.write(oControl.getSource().replace(/</g,'&lt;')); // this is fake escaping?
	}
    oRM.write("</pre>");
};
