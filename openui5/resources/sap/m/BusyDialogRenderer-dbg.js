/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.BusyDialogRenderer");

/**
 * @class BusyDialog renderer. 
 * @static
 */
sap.m.BusyDialogRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.BusyDialogRenderer.render = function(oRm, oControl){ 
	// write the HTML into the render manager
	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass("sapMBusyDialog sapMCommonDialog");
	if(jQuery.device.is.iphone){
		oRm.addClass("sapMDialogHidden");
	}
	if(!oControl._isPlatformDependent) {
		if(!oControl.getText() && !oControl.getTitle() && !oControl.getShowCancelButton()) {
			oRm.addClass("sapMBusyDialogSimple");
		}
	}
	oRm.writeClasses();
	var sTooltip = oControl.getTooltip_AsString();
	if (sTooltip) {
		oRm.writeAttributeEscaped("title", sTooltip);
	}
	oRm.write(">");
	if(oControl.getTitle()) {
		oRm.write("<header class=\"sapMDialogTitle\">");
		oRm.writeEscaped(oControl.getTitle());
		oRm.write("</header>");
	}
	if(sap.ui.Device.os.ios || !oControl._isPlatformDependent) {
		oRm.renderControl(oControl._oLabel);
		oRm.renderControl(oControl._busyIndicator);
	} else {
		oRm.renderControl(oControl._busyIndicator);
		oRm.renderControl(oControl._oLabel);
	}
	
	if(oControl.getShowCancelButton()){
		oRm.write("<footer class='sapMBusyDialogFooter sapMFooter-CTX'>");
		oRm.renderControl(oControl._oButton);
		oRm.write("</footer>");
	}
	oRm.write("</div>");
};
