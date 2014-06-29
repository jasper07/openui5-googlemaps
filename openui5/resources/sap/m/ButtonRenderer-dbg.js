/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.ButtonRenderer");

/**
 * @class Button renderer.
 * @static
 */
sap.m.ButtonRenderer = {};

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.m.ButtonRenderer.render = function(rm, oButton) {

	// return immediately if control is invisible
	if (!oButton.getVisible()) {
		return;
	}

	// get control properties
	var sType = oButton.getType();
	var sWidth = oButton.getWidth();
	var bEnabled = oButton.getEnabled();
	var bExtraContentDiv = false;

	// start button tag
	rm.write("<button type=\"button\"");
	rm.writeControlData(oButton);

	// button style class
	if (sType !== sap.m.ButtonType.Unstyled) {
		rm.addClass("sapMBtn");
	}

	if (sap.ui.Device.system.desktop) {
		rm.addClass("sapMBtnDesktop");
	}

	// special for platform independent themes (like BlueCrystal)
	if (!oButton._isPlatformDependent) {

		// set padding depending on icons left or right or none
		if (!oButton.getIcon()) {
			if (sType != sap.m.ButtonType.Back && sType != sap.m.ButtonType.Up) {
				rm.addClass("sapMBtnPaddingLeft");
			}

			if (oButton.getText()) {
				rm.addClass("sapMBtnPaddingRight");
			}
		} else {
			if (oButton.getIcon() && oButton.getText() && oButton.getIconFirst()) {
				rm.addClass("sapMBtnPaddingRight");
			}

			if (oButton.getIcon() && oButton.getText() && !oButton.getIconFirst()) {
				rm.addClass("sapMBtnPaddingLeft");
			}
		}
	}

	if (oButton._isPlatformDependent) { //platform dependent themes (like MVI)

		// check if button is disabled
		if (!bEnabled) {
			if (sType == sap.m.ButtonType.Back || sType == sap.m.ButtonType.Up) {
				rm.addClass("sapMBtn" + jQuery.sap.escapeHTML(sType) + "Disabled");
			} else {
				if (sType != sap.m.ButtonType.Unstyled) {
					rm.addClass("sapMBtnDisabled");
				}
			}
		} else {
			if (sType != "" && sType != sap.m.ButtonType.Unstyled) {
				rm.addClass("sapMBtn" + jQuery.sap.escapeHTML(sType));
			}
		}
	} else if (sType !== sap.m.ButtonType.Unstyled) {

		// platform independent themes (like BlueCrystal)
		if (sType !== "") {
			rm.addClass("sapMBtn" + jQuery.sap.escapeHTML(sType));
		}

		// check if button is disabled
		if (!bEnabled) {
			rm.addClass("sapMBtnDisabled");
			rm.writeAttribute("tabindex", "-1");
		} else if( sap.ui.Device.system.desktop ) {
			rm.writeAttribute("tabindex", "0");

			// add classes for focus outline;
			rm.addClass("sapMFocusable");
			switch (sType) {
				case sap.m.ButtonType.Accept:
				case sap.m.ButtonType.Reject:
				case sap.m.ButtonType.Emphasized:
					rm.addClass("sapMBtnInverted");
			}
		}
	}

	// only for iOS buttons in bar control: if only an icon and no text is provided the button should be transparent and the active state is a background glow 
	if (oButton.getIcon() && !oButton.getText() && sType != sap.m.ButtonType.Back){
		if (!bEnabled) {
			rm.addClass("sapMBtnIconDisabled");
		} else {
			rm.addClass("sapMBtnIcon");
		}
	}

	// set user defined width
	if (sWidth != "" || sWidth.toLowerCase() == "auto") {
		bExtraContentDiv = false;
		rm.writeAttribute("style", "width:" + sWidth + ";");
	}

	// add all classes to button tag
	rm.writeClasses();

	var sTooltip = oButton.getTooltip_AsString();

	if (sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}

	// close start button tag
	rm.write(">");

	// hook for inheriting controls to add their HTML
	if (this.renderButtonContentBefore) {
		this.renderButtonContentBefore(rm, oButton);
	}

	// check if additional content-DIV needs to rendered
	if (sType === sap.m.ButtonType.Accept) {
		bExtraContentDiv = true;
	}

	if (sType === sap.m.ButtonType.Reject) {
		bExtraContentDiv = true;
	}

	if (sType === sap.m.ButtonType.Up) {
		bExtraContentDiv = true;
	}

	// special for platform independent themes (like BlueCrystal)
	if (!oButton._isPlatformDependent && sType === sap.m.ButtonType.Back) {
		bExtraContentDiv = true;
	}

	if (oButton.getIcon()) {
		bExtraContentDiv = true;
	}

	// render button content tag if image control is loaded	
	if (bExtraContentDiv) {
		rm.write("<div");
		if (sType != sap.m.ButtonType.Unstyled) {
			rm.addClass("sapMBtnContent");

			if(oButton.getIcon()) {
				rm.addClass("sapMBtnContentWithIcon");
			}

			rm.writeClasses();
		}
		rm.write(">");
	}

	// special for platform independent themes (like BlueCrystal)
	if (!oButton._isPlatformDependent) {

		// set image for internal image control (back)
		var sBackURI = sap.ui.core.IconPool.getIconURI("nav-back");
		this.writeInternalIconPoolHtml(rm, oButton, sType, sap.m.ButtonType.Back, sBackURI);
		this.writeInternalIconPoolHtml(rm, oButton, sType, sap.m.ButtonType.Up, sBackURI);
	} else {

		// special for non iOS
		if (!sap.ui.Device.os.ios) {

			// set image for internal image control (accept)
			var sAcceptURI = sap.ui.core.IconPool.getIconURI("accept");
			this.writeInternalIconPoolHtml(rm, oButton, sType, sap.m.ButtonType.Accept, sAcceptURI);
	
			// set image for internal image control (reject)
			var sRejectURI = sap.ui.core.IconPool.getIconURI("decline");
			this.writeInternalIconPoolHtml(rm, oButton, sType, sap.m.ButtonType.Reject, sRejectURI);

			// set image for internal image control (up)
			var sUpURI = sap.ui.core.IconPool.getIconURI("navigation-left-arrow");
			this.writeInternalIconPoolHtml(rm, oButton, sType, sap.m.ButtonType.Up, sUpURI);
		}
	}

	// write icon left
	if (oButton.getIcon() && oButton.getIconFirst()) {
		this.writeImgHtml(rm, oButton);
	}

	// write button text
	this.writeTextHtml(rm, oButton, bExtraContentDiv, sType);

	// write icon right
	if (oButton.getIcon() && !oButton.getIconFirst()) {
		this.writeImgHtml(rm, oButton);
	}

	// close button content tag
	if (bExtraContentDiv) {
		rm.write("</div>");
	}

	// hook for inheriting controls to add their HTML
	if(this.renderButtonContentAfter){
		this.renderButtonContentAfter(rm, oButton);
	}

	// end button tag
	rm.write("</button>");
};

/**
 * HTML for button text
 */
sap.m.ButtonRenderer.writeTextHtml = function(rm, oButton, bExtraContentDiv, sType) {
	if (oButton.getText()) {
		rm.write("<span");

		if (!bExtraContentDiv && sType !== sap.m.ButtonType.Unstyled) {
			rm.addClass("sapMBtnContent");
			rm.writeClasses();
		}

		if (oButton.getIcon() && oButton.getText()) {
			rm.addClass("sapMBtnContentSpan");
			rm.writeClasses();
		}

		rm.write(">");
		rm.writeEscaped(oButton.getText());
		rm.write("</span>");
	}
};

/**
 * HTML for image
 */
sap.m.ButtonRenderer.writeImgHtml = function(rm, oButton) {
	rm.renderControl(oButton._getImage((oButton.getId() + "-img"), oButton.getIcon(), oButton.getActiveIcon(), oButton.getIconDensityAware()));	
};

/**
 * HTML for internal image (icon pool)
 */
sap.m.ButtonRenderer.writeInternalIconPoolHtml = function(rm, oButton, sType, sCheckType, sURI) {
	if (sType === sCheckType) {

		if (oButton._imageBtn) {
			oButton._imageBtn.setSrc(sURI);
		} else {
			rm.renderControl(oButton._getInternalIconBtn((oButton.getId() + "-iconBtn"), sURI));
		}
	}
};
