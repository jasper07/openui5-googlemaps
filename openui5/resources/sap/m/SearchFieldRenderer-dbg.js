/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.SearchFieldRenderer");

/**
 * @class SearchField renderer.
 * @static
 */
sap.m.SearchFieldRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.SearchFieldRenderer.render = function(oRenderManager, oSF){
	// render nothing if control is invisible
	if (!oSF.getVisible()) {
		return;
	}

	var rm = oRenderManager;
	var bShowMagnifier = oSF.getShowMagnifier();
	var sPlaceholder = oSF.getPlaceholder();
	var sValue = oSF.getValue();
	var sWidth = oSF.getProperty("width");

	// container
	rm.write("<div");
	rm.writeControlData(oSF);
	if (sWidth) { rm.writeAttribute("style", "width:" + sWidth + ";"); }

	rm.addClass("sapMSF");
	if (bShowMagnifier) { rm.addClass("sapMSFM"); }
	if(sap.ui.Device.os.android && !(sap.ui.Device.browser.chrome)){
		if(sap.ui.Device.os.version < 3){
			rm.addClass("sapMSFA2"); // specific Android 2.+ rendering
		} else if (sap.ui.Device.os.version <= 4){
			rm.addClass("sapMSFA4"); // specific Android 4.0* rendering
		}
	}
	if(sValue){
		rm.addClass("sapMSFVal");
	}
	if (!oSF.getEnabled()){
		rm.addClass("sapMSFDisabled");
	}
	rm.writeClasses();
	var sTooltip = oSF.getTooltip_AsString();
	if (sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}
	rm.write(">");

	if(oSF._sDesign){
		this.renderBcd(rm, oSF, bShowMagnifier, sPlaceholder, sValue);
	} else {
		this.renderMvi(rm, oSF, bShowMagnifier, sPlaceholder, sValue);
	}

	rm.write("</div>");

};

/**
 * Render MVI style (platform dependent, magnifier to the left, no button)
 */
sap.m.SearchFieldRenderer.renderMvi = function(rm, oSF, bShowMagnifier, sPlaceholder, sValue){

	var sId = oSF.getId();

	// 1. magnifier icon
	if (bShowMagnifier) { rm.write('<div class="sapMSFMG"></div>'); }

	// 2. Input type="search".
	//    Enclose input into a <form> to show a correct keyboard
	//    method="post" to prevent unneeded "?" at the end of URL
	rm.write('<form method="post" action="javascript:void(0);">');

	// self-made placeholder
	if (!oSF._hasPlacehoder && sPlaceholder) {
		rm.write("<label ");
		rm.writeAttribute("id", sId + "-P");
		rm.writeAttribute("for", sId + "-I");

		rm.addClass("sapMSFPlaceholder");
		rm.writeClasses();
		rm.write(">");
		rm.writeEscaped(sPlaceholder);
		rm.write("</label>");
	}

	rm.write('<input type="search" autocorrect="off"');
	rm.writeAttribute("id", oSF.getId() + "-I");

	rm.addClass("sapMSFI");

	if (sap.ui.Device.os.ios && sap.ui.Device.os.version > 5) {
			rm.addClass("sapMSFIIos6"); // specific Ios6+ rendering
	}

	if (!oSF.getEnabled()){
		// hide the reset button even if value is not empty: user cannot press it
		rm.addClass("sapMSFIDisabled");
	}
	rm.writeClasses();

	if (!oSF.getEnabled()) { rm.writeAttribute("disabled","disabled"); }
	if (bShowMagnifier) { rm.writeAttribute("results", 0); }
	if (sPlaceholder) { rm.writeAttributeEscaped("placeholder", sPlaceholder); }
	if (oSF.getMaxLength()) { rm.writeAttribute("maxLength", oSF.getMaxLength()); }
	if (sValue) { rm.writeAttributeEscaped("value", sValue); }

	rm.write("></form>");

	// 3. Reset button (transparent, lies over "X" of input, reacts on touch correctly)
	// in sap_bluecrystal: x is placed on the reset button
	if (oSF.getEnabled()) {
		rm.write("<div");
		rm.writeAttribute("id", oSF.getId() + "-reset");
		rm.addClass("sapMSFR");
		rm.writeClasses();
		rm.write("></div>");
	}
}; // render MVI

/**
 * Render blue-crystal design (platform independent, magnifier to the right, with the button)
 */
sap.m.SearchFieldRenderer.renderBcd = function(rm, oSF, bShowMagnifier, sPlaceholder, sValue){

	var sId = oSF.getId();

	// 1. extra block around input form
	rm.write('<div');
	rm.addClass('sapMSFB');
	if(oSF.getShowRefreshButton() && !oSF.getValue()){
		rm.addClass('sapMSFReload');
	}
	if(oSF._bNoFlex){
		rm.addClass('sapMSFNoFlex');
	}
	rm.writeClasses();
	rm.write('>');

	// 2. Input type="search".
	//    Enclose input into a <form> to show a correct keyboard
	//    method="post" to prevent unneeded "?" at the end of URL
	rm.write('<form method="post" action="javascript:void(0);">');

	// self-made placeholder
	if (!oSF._hasPlacehoder && sPlaceholder) {
		rm.write("<label ");
		rm.writeAttribute("id", sId + "-P");
		rm.writeAttribute("for", sId + "-I");

		rm.addClass("sapMSFPlaceholder");
		rm.writeClasses();
		rm.write(">");
		rm.writeEscaped(sPlaceholder);
		rm.write("</label>");
	}

	rm.write('<input type="search" autocorrect="off"');
	rm.writeAttribute("id", oSF.getId() + "-I");

	rm.addClass("sapMSFI");

	if(sap.ui.Device.os.android && sap.ui.Device.os.version >= 4 && sap.ui.Device.os.version < 4.1 ){
		rm.addClass("sapMSFIA4"); // specific CSS layout for Android 4.0x
	}

	if (!oSF.getEnabled()){
		// hide the reset button even if value is not empty: user cannot press it
		rm.addClass("sapMSFIDisabled");
	}
	rm.writeClasses();

	if (!oSF.getEnabled()) { rm.writeAttribute("disabled","disabled"); }
	//if (bShowMagnifier) { rm.writeAttribute("results", 0); }
	if (sPlaceholder) { rm.writeAttributeEscaped("placeholder", sPlaceholder); }
	if (oSF.getMaxLength()) { rm.writeAttribute("maxLength", oSF.getMaxLength()); }
	if (sValue) { rm.writeAttributeEscaped("value", sValue); }
	rm.write(">");

	// 3. Reset button (transparent, lies over "X" of input, reacts on touch correctly)
	// in sap_bluecrystal: x is placed on the reset button
	if (oSF.getEnabled()) {
		rm.write("<div");
		rm.writeAttribute("id", oSF.getId() + "-reset");
		rm.addClass("sapMSFR");
		rm.writeClasses();
		rm.write("></div>");
	}

	rm.write("</form>");

	if(oSF._oButton){
		rm.renderControl(oSF._oButton);
	}

	rm.write("</div>"); // extra block
}; // render BC