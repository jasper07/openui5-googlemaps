/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.DialogRenderer");
jQuery.sap.require("sap.m.BarRenderer");

/**
 * @class Dialog renderer. 
 * @static
 */
sap.m.DialogRenderer = {};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.DialogRenderer.render = function(oRm, oControl) {
	var id = oControl.getId(),
		bShowHeader = oControl.getShowHeader(),
		sType = oControl.getType(),
		oHeader = oControl._getAnyHeader(),
		oSubHeader = oControl.getSubHeader(),
		bMessage = (sType === sap.m.DialogType.Message),
		oLeftButton = oControl.getBeginButton(),
		oRightButton = oControl.getEndButton(),
		bHorizontalScrolling = oControl.getHorizontalScrolling(),
		bVerticalScrolling = oControl.getVerticalScrolling();
	
	if(oHeader){
		oHeader._context = "header";
	}
	
	if(oSubHeader){
		oSubHeader._context = "header";
	}

	// write the HTML into the render manager
	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass("sapMDialog");
	oRm.addClass("sapMDialog-CTX");
	oRm.addClass("sapMPopup-CTX");
	oRm.addClass(sap.m.Dialog._mStateClasses[oControl.getState()]);
	if(oControl._forceDisableScrolling){
		oRm.addClass("sapMDialogWithScrollCont");
	}
	
	if(oSubHeader){
		oRm.addClass("sapMDialogWithSubHeader");
	}
	
	if(bMessage){
		oRm.addClass("sapMMessageDialog");
	}
	
	if(!bVerticalScrolling) {
		oRm.addClass("sapMDialogVerScrollDisabled");
	}
	if(!bHorizontalScrolling) {
		oRm.addClass("sapMDialogHorScrollDisabled");
	}
	
	if(!sap.m.Dialog._bOneDesign){
		if(sap.ui.Device.os.ios && !oHeader){
			oRm.addClass("sapMDialogNoHeader");
		}
		
		if(bMessage){
			oRm.addClass("sapMCommonDialog");
		}else{
			if(jQuery.device.is.iphone){
				oRm.addClass("sapMDialogHidden sapMDialogIPhone");
			}
		}
	}else{
		if(sap.ui.Device.system.phone){
			oRm.addClass("sapMDialogPhone");
		}
	}
	
	oRm.writeClasses();
	
	var sTooltip = oControl.getTooltip_AsString();
	if (sTooltip) {
		oRm.writeAttributeEscaped("title", sTooltip);
	}

	oRm.writeAttribute("tabindex", "-1");

	oRm.write(">");
	if(sap.ui.Device.system.desktop) {
		//Invisible element which is used to determine when desktop keyboard navigation
		//has reached the first focusable element of a dialog and went beyond. In that case, the controller
		//will focus the last focusable element
		oRm.write("<span id='" + oControl.getId() + "-firstfe' tabindex='0'/>");
	}

	if(!sap.m.Dialog._bOneDesign){
		if(sap.ui.Device.os.ios) {
			if(bMessage){
				if(bShowHeader && oControl.getTitle()) {
					oRm.write("<header class=\"sapMDialogTitle\">");
					oRm.writeEscaped(oControl.getTitle());
					oRm.write("</header>");
				}
			}else{
				if(oHeader){
					oRm.renderControl(oHeader);
				}
			}
		} else {
			if(bShowHeader && (oControl.getIcon() || oControl.getTitle())){
				oRm.write("<header class=\"sapMDialogTitle\">");
				oRm.write("<h1>");
				if(oControl._iconImage){
					oRm.renderControl(oControl._iconImage);
				}
				oRm.write("<span>");
				oRm.renderControl(oControl._headerTitle);
				oRm.write("</span>");
				oRm.write("</h1>");
				oRm.write("</header>");
			}
		}
	}else{
		if(oHeader){
			oRm.renderControl(oHeader);
		}
	}
	
	if(oSubHeader){
		oRm.renderControl(oSubHeader.addStyleClass("sapMDialogSubHeader"));
	} 

	oRm.write("<section id='" + id + "-cont' style='width:" + oControl.getContentWidth() + "'>");
	oRm.write("<div id='" + id + "-scroll' class='sapMDialogScroll'>");
	oRm.write("<div id='" + id + "-scrollCont' class='sapMDialogScrollCont'>");
	var aContent = oControl.getContent();
	for(var i = 0; i < aContent.length; i++) {
		oRm.renderControl(aContent[i]);
	}
	oRm.write("</div>");
	oRm.write("</div>");
	oRm.write("</section>");
	
	if((sap.m.Dialog._bOneDesign || !sap.ui.Device.os.ios || bMessage) && (oLeftButton || oRightButton)) {
		
		oRm.write("<footer class='sapMDialogActions sapMBar-CTX sapMFooter-CTX'>");

		// Render actions
		if(oLeftButton){
			oRm.write("<div class='sapMDialogAction'>");
			oRm.renderControl(oLeftButton.addStyleClass("sapMDialogBtn", true));
			oRm.write("</div>");
		}
		if(oRightButton){
			oRm.write("<div class='sapMDialogAction'>");
			oRm.renderControl(oRightButton.addStyleClass("sapMDialogBtn", true));
			oRm.write("</div>");
		}
		
		oRm.write("</footer>");
	}
	if(sap.ui.Device.system.desktop) {
		//Invisible element which is used to determine when desktop keyboard navigation
		//has reached the last focusable element of a dialog and went beyond. In that case, the controller
		//will focus the first focusable element
		oRm.write("<span id='" + oControl.getId() + "-lastfe' tabindex='0'/>");
	}
	oRm.write("</div>");
};