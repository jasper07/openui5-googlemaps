/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.ObjectStatusRenderer");

/**
 * @class ObjectStatus renderer. 
 * @static
 */
sap.m.ObjectStatusRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.ObjectStatusRenderer.render = function(oRm, oObjStatus){
	// Return immediately if control is invisible
	if (!oObjStatus.getVisible()) {
		return;
	}
	
	if(!oObjStatus._isEmpty()) {
		oRm.write("<div");
		oRm.writeControlData(oObjStatus);
		
		var sTooltip = oObjStatus.getTooltip_AsString();
		if (sTooltip) {
			oRm.writeAttributeEscaped("title", sTooltip);
		}
		
		oRm.addClass("sapMObjStatus"); 
		oRm.addClass("sapMObjStatus" + oObjStatus.getState());
		oRm.writeClasses();
		oRm.write(">");
				
		if (oObjStatus.getIcon()) {
			oRm.write("<span");
			oRm.addClass("sapMObjStatusIcon");
			oRm.writeClasses();
			oRm.write(">");
			oRm.renderControl(oObjStatus._getImageControl());
			oRm.write("</span>");
		}

		if (oObjStatus.getText()) {
			oRm.write("<span");
			oRm.addClass("sapMObjStatusText");
			oRm.writeClasses();
			oRm.write(">");
			oRm.writeEscaped(oObjStatus.getText());
			oRm.write("</span>");
		}
		oRm.write("</div>");			
	}
};