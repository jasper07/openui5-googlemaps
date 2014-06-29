/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.BusyIndicatorRenderer");

/**
 * @class BusyIndicator renderer. 
 * @static
 */
sap.m.BusyIndicatorRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.BusyIndicatorRenderer.render = function(oRm, oControl){ 

	var sSize = oControl.getSize();
	var iDesignClass = "";
	
	if(oControl.getDesign() == "auto") {
		iDesignClass = "sapMBusyIndicator";
	} else {
		iDesignClass = oControl.getDesign() == "dark" ? "sapMBusyIndicatorDark" : "sapMBusyIndicatorLight";
	}
	
	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass(iDesignClass);
	oRm.writeClasses();
	var sTooltip = oControl.getTooltip_AsString();
	if (sTooltip) {
		oRm.writeAttributeEscaped("title", sTooltip);
	}
	if(!oControl.getVisible()) {
		oRm.addStyle("visibility", "hidden");
		oRm.writeStyles();
	}
	oRm.write(">");
	
	if(oControl.getCustomIcon()){
		oRm.renderControl(oControl._iconImage);
	}else if (oControl._bUseSvg){
		this._renderSvg(oRm, oControl, sSize);
	}else if (oControl._bUseCanvas){
		this._renderCanvas(oRm, oControl, sSize);
	}else{
		this._renderNative(oRm, oControl, sSize);
	}
	
	if (oControl.getText()) {
		oRm.renderControl(oControl._oLabel);
	}
	
	oRm.write("</div>");
};

// SVG based loading indicator for blue crystal 
sap.m.BusyIndicatorRenderer._renderSvg = function(oRm, oControl, sSize){
	oRm.write('<svg');
	oRm.writeAttribute('id', oControl.getId() +  '-svg');
	oRm.writeAttribute('viewBox','0 0 100 100'); 
	oRm.writeAttribute('class','sapMBusySvg'); 
	if(sSize){
		oRm.addStyle('width', sSize);
		oRm.addStyle('height', sSize);
		oRm.writeStyles();
	}
	oRm.write('><g transform = translate(50,50)>');
	oRm.write('<path d="M0,-36A36,36 0 1,0 36,0" stroke-width="20%" fill="none" class="sapMSpinSvg">');
	oRm.write('<animateTransform attributeName="transform" attributeType="XML" type="rotate" ');
	oRm.write('from="0" to="360" dur="1.1s" repeatCount="indefinite" />');
	oRm.write('</path></g></svg>');
};

// Canvas based loading indicator for blue crystal 
sap.m.BusyIndicatorRenderer._renderCanvas = function(oRm, oControl, sSize){
	oRm.write('<canvas');
	oRm.writeAttribute("id", oControl.getId() +  "-canvas");
	oRm.writeAttribute("class","sapMSpinCanvas"); 
	oRm.writeAttribute("width","32"); // initially 2em * 16px
	oRm.writeAttribute("height","32");
	if(sSize){
		oRm.addStyle('width', sSize);
		oRm.addStyle('height', sSize);
		oRm.writeStyles();
	}
	oRm.write('></canvas>');
};

// "Native" ios and android style for mvi
sap.m.BusyIndicatorRenderer._renderNative = function(oRm, oControl, sSize){

	var iSpinBar = (oControl._bIosStyle) ? 13 :4;
	
	oRm.write("<div");
	oRm.writeAttribute("class","sapMSpinner"); 
	if(sSize){
		oRm.addStyle('width', sSize);
		oRm.addStyle('height', sSize);
		oRm.writeStyles();
	}
	oRm.write(">");

	for (var i=1; i<iSpinBar; i++) {
		var sBarClass = 'sapMSpinBar' + i;
		if(!oControl._bIosStyle) {
			if(i === 3) {
				var sBarClass1 = 'sapMSpinBar' + 4;
				oRm.write('<div class="'+ sBarClass + '"><div class="'+ sBarClass1 + '"></div></div>');
				break;
			}
		}
		oRm.write('<div class="'+ sBarClass + '"></div>');
	}
	oRm.write("</div>");
}; 
