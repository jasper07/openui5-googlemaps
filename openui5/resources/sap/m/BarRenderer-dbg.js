/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.BarRenderer");

/**
 * @class Bar renderer.
 * @static
 */
sap.m.BarRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.BarRenderer.render = function(oRenderManager, oControl) { 
	var i = 0;

	//_context is set by the page control
	switch (oControl._context) {
	case 'header':
		//render header element 
		oRenderManager.write("<header");
		break;
	case 'footer':
		//render footer element 
		oRenderManager.write("<footer");
		oRenderManager.addClass("sapMFooter-CTX");
		break;
	default: 
		//render div element as default 
		oRenderManager.write("<div");
		break;
	}
	oRenderManager.writeControlData(oControl);
	oRenderManager.addClass("sapMBar");

	if (oControl.getTranslucent() && (sap.ui.Device.support.touch  || jQuery.sap.simulateMobileOnDesktop)) {
		oRenderManager.addClass("sapMBarTranslucent");
	}

	oRenderManager.addClass("sapMBar-CTX");
	oRenderManager.writeClasses();
	
	var sTooltip = oControl.getTooltip_AsString();
	if (sTooltip) {
		oRenderManager.writeAttributeEscaped("title", sTooltip);
	}
	
	oRenderManager.write(">"); 

	//left content area
	oRenderManager.write("<div id='"); 
	oRenderManager.write(oControl.getId());
	oRenderManager.write("-BarLeft' class='sapMBarLeft' >");
	var aLContent = oControl.getContentLeft();
	for(i=0; i< aLContent.length; i++){
		oRenderManager.renderControl(aLContent[i]);
	}
	oRenderManager.write("</div>");

	//middle content area 
	oRenderManager.write("<div id='"); 
	oRenderManager.write(oControl.getId());
	oRenderManager.write("-BarMiddle' class='sapMBarMiddle' >");
	if (oControl.getEnableFlexBox()){
		oControl._oflexBox = oControl._oflexBox || new sap.m.HBox(oControl.getId() + "-BarPH", {alignItems: "Center"}).addStyleClass("sapMBarPH").setParent(oControl, null, true);
		aMContent = oControl.getContentMiddle();
		for(i=0; i<aMContent.length; i++){
			oControl._oflexBox.addItem(aMContent[i]);
		}
		oRenderManager.renderControl(oControl._oflexBox);
	} else {
		oRenderManager.write("<div id='" + oControl.getId() + "-BarPH' class='sapMBarPH' >"); //place holder
		var aMContent = oControl.getContentMiddle();
		for(i=0; i<aMContent.length; i++){
			oRenderManager.renderControl(aMContent[i]);
		}
		oRenderManager.write("</div>");
	}
	oRenderManager.write("</div>");


	//right content area
	oRenderManager.write("<div id='" + oControl.getId() + "-BarRight'");
	oRenderManager.addClass('sapMBarRight');
	if(sap.ui.getCore().getConfiguration().getRTL()){
		oRenderManager.addClass("sapMRTL");
	}
	oRenderManager.writeClasses();
	oRenderManager.write(">");
	var aRContent = oControl.getContentRight();
	for(i=0; i<aRContent.length; i++){
		oRenderManager.renderControl(aRContent[i]);
	}
	oRenderManager.write("</div>");
	
	switch (oControl._context) {
	case 'header':
		oRenderManager.write("</header>");
		break;
	case 'footer':
		oRenderManager.write("</footer>");
		break;
	default: 
		oRenderManager.write("</div>");
		break;
	}
	
};