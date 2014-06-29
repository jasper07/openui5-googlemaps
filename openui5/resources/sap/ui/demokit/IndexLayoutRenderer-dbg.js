/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.demokit.IndexLayout
jQuery.sap.declare("sap.ui.demokit.IndexLayoutRenderer");

/**
 * @class IndexLayout renderer.
 * @static
 */
sap.ui.demokit.IndexLayoutRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oLyt an object representation of the control that should be rendered
 */
sap.ui.demokit.IndexLayoutRenderer.render = function(rm, oLyt){
	var id = oLyt.getId();

	rm.write("<div");
	rm.writeControlData(oLyt);
	rm.addClass("sapDkIdxLayout");
	rm.addClass("sapDkIdxLayoutHidden");
	if(oLyt.getEnableScaling()){
		rm.addClass("sapDkIdxLayoutScale");
	}
	rm.writeClasses();
	rm.write("><div id=\"", id, "-cntnt\">");
	
	var aContent = oLyt.getContent();
	for(var i=0; i<aContent.length; i++){
		rm.write("<div class=\"sapDkIdxLayoutItem\" style=\"width:", oLyt._scale(oLyt._itemWidth), "px;height:", oLyt._scale(oLyt._itemHeight), "px;\"><div>");
		rm.renderControl(aContent[i]);
		rm.write("</div></div>");
	}
	
	rm.write("</div></div>");
};