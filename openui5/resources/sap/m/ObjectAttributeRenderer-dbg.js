/*
 * @copyright
 */
jQuery.sap.declare("sap.m.ObjectAttributeRenderer");

/**
 * @class ObjectAttributeA renderer. 
 * @static
 */
sap.m.ObjectAttributeRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.ObjectAttributeRenderer.render = function(oRm, oOA) {

	// return immediately if control is invisible
	if(oOA.getVisible() && !oOA._isEmpty()) {
		oRm.write("<div");
		oRm.writeControlData(oOA);
		oRm.addClass("sapMObjectAttributeDiv"); 
		if(oOA.getActive()){
			oRm.addClass("sapMObjectAttributeActive");
		}
		oRm.writeClasses();
		
		var sTooltip = oOA.getTooltip_AsString();
		if (sTooltip) {
			oRm.writeAttributeEscaped("title", sTooltip);
		}		
		
		oRm.write(">");
		oRm.write("<span>");
		var oText = new sap.m.Text({text: oOA.getText()});
		oText.setMaxLines(2);
		oRm.renderControl(oText);
		oRm.write("</span>");
		oRm.write("</div>");
	}
};
