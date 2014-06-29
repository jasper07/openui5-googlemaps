/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.SegmentedButtonRenderer");

/**
 * @class Segmented renderer. 
 * @static
 */
sap.m.SegmentedButtonRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.SegmentedButtonRenderer.render = function(rm, oControl){ 
	// return immediately if control is invisible
	if (!oControl.getVisible()) {
		return;
	}

	var aItems = oControl.getButtons(),
	aItemsLength = aItems.length;
	if(!oControl.getVisible()) {
		return;
	}
	// write the HTML into the render manager
	rm.write("<ul");
	rm.addClass("sapMSegB");
	rm.addClass("sapMSegBHide");
	rm.writeClasses();
	if (oControl.getWidth() && oControl.getWidth() !== '') {
		rm.addStyle('width', oControl.getWidth());
	}
	rm.writeStyles();
	rm.writeControlData(oControl);
	var sTooltip = oControl.getTooltip_AsString();
	if (sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}
	rm.write(">");
	
	if(!oControl.getSelectedButton()) {
		if(aItems.length > 0)
			oControl.setSelectedButton(aItems[0].getId(), true);
	}
	
	for (var i = 0; i < aItemsLength; i++) {
		var oItem = aItems[i];
		
		rm.write("<li");
		rm.writeControlData(oItem);
		rm.addClass("sapMSegBBtn");
		if(oControl.getSelectedButton() === oItem.getId()) {
			rm.addClass("sapMSegBBtnSel");
		}
		if(!oItem.getEnabled()) {
			rm.addClass("sapMSegBBtnDis");
		}
		var tooltip = oItem.getTooltip_AsString();
		if (tooltip) {
			rm.writeAttributeEscaped("title", tooltip);
		}
		rm.writeAttribute("tabindex", oItem.getEnabled() ? "0" : "-1");
		rm.writeClasses();
		var buttonWidth = oItem.getWidth();
		if(buttonWidth){
			rm.addStyle('width', buttonWidth);
			rm.writeStyles();
		}
		rm.write('>');
		if(oItem.getIcon() === '' && oItem.getText() !== '') {
			rm.writeEscaped(oItem.getText(), false);
		} else if (oItem.getIcon() !== '' && oItem.getText() === '') {
			var oImage = oItem._getImage((oItem.getId() + "-img"), oItem.getIcon());
			oImage.onload = function() {
				sap.m.Image.prototype.onload.call(oImage);
				window.setTimeout(function() {
					oControl._fCalcBtnWidth();
				},20);
			}
			rm.renderControl(oImage);	

		} else if(oItem.getIcon() !== '' && oItem.getText() !== '' ){
			jQuery.sap.log.error("SEGMENTED: "+oItem.getId()+": Icon and Label is not allowed");
		}
		rm.write("</li>");
	}
	rm.write("</ul>");
	
};
