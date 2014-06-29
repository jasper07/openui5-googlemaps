/**
 * EXPERIMENTAL!  DO NOT USE!
 */

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the class sap.ui.ux3.ShellColorPicker
jQuery.sap.declare("sap.ui.ux3.ShellColorPicker");
jQuery.sap.require("sap.ui.base.EventProvider");
jQuery.sap.require("sap.ui.core.Popup");
jQuery.sap.require("sap.ui.commons.Button");



sap.ui.base.EventProvider.extend("sap.ui.ux3.ShellColorPicker", {
	constructor: function(id) {
		sap.ui.base.EventProvider.apply(this);
		this.id = id;
	}
});


/*  EVENT HANDLING */

sap.ui.ux3.ShellColorPicker.M_EVENTS = {liveChange: "liveChange"};

sap.ui.ux3.ShellColorPicker.prototype.attachLiveChange = function(fFunction, oListener) {
	this.attachEvent(sap.ui.ux3.ShellColorPicker.M_EVENTS.liveChange, fFunction, oListener);
};

sap.ui.ux3.ShellColorPicker.prototype.detachLiveChange = function(fFunction, oListener) {
	this.detachEvent(sap.ui.ux3.ShellColorPicker.M_EVENTS.liveChange, fFunction, oListener);
};

sap.ui.ux3.ShellColorPicker.prototype.fireLiveChange = function(oColor) {
	var mParameters = {cssColor:sap.ui.ux3.ShellColorPicker.hslToCss(oColor)};
	this.fireEvent(sap.ui.ux3.ShellColorPicker.M_EVENTS.liveChange, mParameters);
};



/* API METHODS */

/**
 * @public
 */
sap.ui.ux3.ShellColorPicker.prototype.isOpen = function() {
	return (this.oPopup && this.oPopup.isOpen());
};


/**
 *
 * @param oColor a hsl-based color object, as returned by parseCssRgbString()
 *
 * @public
 */
sap.ui.ux3.ShellColorPicker.prototype.open = function(oColor, iDuration, my, at, of, offset, collision) {
	if (this.oPopup && this.oPopup.isOpen()) {
		return;
	}

	this.oSlider = new sap.ui.commons.Slider({width: "225px",liveChange:[this.handleSlider, this]});
	this.oOkBtn = new sap.ui.commons.Button({text:"OK",press:[this.handleOk, this]});
	this.oCancelBtn = new sap.ui.commons.Button({text:"Cancel",press:[this.handleCancel, this]});

	this.oInitialColor = oColor;
	this.oCurrentColor = jQuery.extend({}, this.oInitialColor);

	this.oSlider.setValue(this.oCurrentColor.l);
	var rm = sap.ui.getCore().createRenderManager();
	var dummyDiv = document.createElement("div");
	var statArea = sap.ui.getCore().getStaticAreaRef();
	statArea.appendChild(dummyDiv);
	this.renderHtml(rm);
	rm.flush(dummyDiv);
	rm.destroy;
	this.oPopup = new sap.ui.core.Popup(dummyDiv.firstChild, false, true, true).attachClosed(this.handleClose, this);
	this.oPopup.setAutoCloseAreas([dummyDiv.firstChild]);
	this.oPopup.open(iDuration, my, at, of, offset, collision);
	statArea.removeChild(dummyDiv);
	dummyDiv = null;

	jQuery.sap.byId(this.id).bind("mousedown", jQuery.proxy(this.handleGeneralMouseDown, this));
	jQuery.sap.byId(this.id + "-img").bind("mousedown", jQuery.proxy(this.handleMouseDown, this));
	jQuery.sap.byId(this.id + "-marker").bind("mousedown", jQuery.proxy(this.handleMouseDown, this));
	this._imgOffset = jQuery.sap.byId(this.id + "-img").offset();

	this.adaptSliderBar(this.oCurrentColor);
	this.markColorOnImage(this.oCurrentColor);
	this.adaptPreview(this.oCurrentColor);
};


/**
 * Returns the oColor object (hsl-based) for the given CSS string that is built like this: "rgb(127,0,1)"
 * @param sRgbString
 */
sap.ui.ux3.ShellColorPicker.parseCssRgbString = function(sRgbString) {
	sRgbString = jQuery.trim(sRgbString.replace(/rgb\(/, "").replace(/\)/, ""));
	var aRgb = sRgbString.split(",");
	var oRgbColor = {r:parseInt(aRgb[0], 10), g:parseInt(aRgb[1], 10), b:parseInt(aRgb[2], 10)};
	return sap.ui.ux3.ShellColorPicker.rgbToHsl(oRgbColor);
};

/* INTERNALS */

sap.ui.ux3.ShellColorPicker.prototype.renderHtml = function(rm) {
	rm.write("<div id='" + this.id + "' class='sapUiUx3ShellColorPicker'>");
	rm.write("<img id='" + this.id + "-img' src='" + sap.ui.resource('sap.ui.ux3', 'img/colors-h.png') + "' />");
	rm.renderControl(this.oSlider);
	rm.write("<div id='" + this.id + "-grad' class='sapUiUx3ShellColorPickerGradient'></div>");
	rm.write("<div id='" + this.id + "-marker' class='sapUiUx3ShellColorPickerMarker'></div>");
	rm.write("<div id='" + this.id + "-preview' class='sapUiUx3ShellColorPickerPreview'></div>");
	rm.renderControl(this.oOkBtn);
	rm.renderControl(this.oCancelBtn);
	rm.write("</div>");
};// TODO: remove HTML on close

sap.ui.ux3.ShellColorPicker.prototype.markColorOnImage = function(oColor) {
	var x = oColor.h * 225;
	var y = (1-oColor.s) * 75;
	jQuery.sap.byId(this.id + "-marker").css("left", x + 10).css("top", y + 10);
};

sap.ui.ux3.ShellColorPicker.prototype.markColorOnSlider = function(oColor) {
	this.oSlider.setValue(oColor.l);
};

sap.ui.ux3.ShellColorPicker.prototype.adaptSliderBar = function(oColor) {
	var gradient = "";
	var oMediumColor = jQuery.extend({},oColor);
	oMediumColor.l = 50;
	var color = sap.ui.ux3.ShellColorPicker.hslToCss(oMediumColor);
	if (!!sap.ui.Device.browser.firefox) {
		gradient = "-moz-linear-gradient(left, black, " + color + ", white)";
	} else if (!!sap.ui.Device.browser.webkit) {
		gradient = "-webkit-gradient(linear, left center, right center, from(#000), color-stop(0.5, " + color + "), to(#FFF))";
	}
	jQuery.sap.byId(this.id + "-grad").css("background-image", gradient);
};

sap.ui.ux3.ShellColorPicker.prototype.adaptPreview = function(oColor) {
	jQuery.sap.byId(this.id + "-preview").css("background-color", sap.ui.ux3.ShellColorPicker.hslToCss(oColor));
};



sap.ui.ux3.ShellColorPicker.prototype.handleSlider = function(e) {
	var l = e.getParameter("value");
	this.oCurrentColor.l = l;
	this.adaptPreview(this.oCurrentColor);
	this.fireLiveChange(this.oCurrentColor);
};

sap.ui.ux3.ShellColorPicker.prototype.handleGeneralMouseDown = function(e) {
	e.preventDefault(); // no autoclose!
};

sap.ui.ux3.ShellColorPicker.prototype.handleMouseDown = function(e) {
	this.handleMousePos(e);
	e.preventDefault(); // no drag&drop of the color image!
	jQuery(document)
		.bind("mousemove", jQuery.proxy(this.handleMousePos, this))
		.bind("mouseup", jQuery.proxy(this.handleMouseUp, this));
};

sap.ui.ux3.ShellColorPicker.prototype.handleMouseUp = function(e) {
	this.handleMousePos(e);
	jQuery(document)
		.unbind("mousemove", this.handleMousePos)
		.unbind("mouseup", this.handleMouseUp);
};

sap.ui.ux3.ShellColorPicker.prototype.handleMousePos = function(e) {
	var x = e.pageX - this._imgOffset.left;
	var y = e.pageY - this._imgOffset.top;
	x = Math.min(Math.max(x, 0), 225);
	y = Math.min(Math.max(y, 0), 75);
	var hue = x/225; // TODO: hardcoded!
	var sat = 1 - y/75; // TODO: hardcoded!
	this.oCurrentColor.h = hue;
	this.oCurrentColor.s = sat;
	this.adaptSliderBar(this.oCurrentColor);
	this.markColorOnImage(this.oCurrentColor);
	this.adaptPreview(this.oCurrentColor);
	this.fireLiveChange(this.oCurrentColor);
};

sap.ui.ux3.ShellColorPicker.prototype.handleOk = function() {
	this.fireLiveChange(this.oCurrentColor);
	this.oPopup.close();
};

sap.ui.ux3.ShellColorPicker.prototype.handleCancel = function() {
	this.fireLiveChange(this.oInitialColor);
	this.oPopup.close();
};


sap.ui.ux3.ShellColorPicker.prototype.handleClose = function() {
	// clean up event handlers, DOM, child controls and popup
	jQuery.sap.byId(this.id + "-img")
		.unbind("mousedown", this.handleMouseDown);
	jQuery.sap.byId(this.id + "-marker")
		.unbind("mousedown", this.handleMouseDown);
	jQuery(document)
		.unbind("mousemove", this.handleMousePos)
		.unbind("mouseup", this.handleMouseUp);
	jQuery.sap.byId(this.id)
		.unbind("mousedown", this.handleGeneralMouseDown);

	this.oSlider.destroy();
	this.oSlider = null;
	this.oOkBtn.destroy();
	this.oOkBtn = null;
	this.oCancelBtn.destroy();
	this.oCancelBtn = null;

	var domRef = jQuery.sap.domById(this.id);
	domRef.parentNode.removeChild(domRef);

	this.oPopup.destroy();
	this.oPopup = null;
};


/**
 * rgb values are 0..255
 */
sap.ui.ux3.ShellColorPicker.rgbToHsl = function(oColor) {
	var r = oColor.r/255,
			g = oColor.g/255,
			b = oColor.b/255;
	var max = Math.max(r, g, b);
	var min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;

	if (max == min) {
		h = s = 0; // all colors equally strong -> no saturation
	} else {
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch(max){
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}
	return {h:h,s:s,l:l*100};
};

/**
 * hs values are 0..1, l is 0..100
 */
sap.ui.ux3.ShellColorPicker.hslToRgb = function(oColor) {
	var r, g, b;
	var l = oColor.l/100;

	if (oColor.s == 0) {
		r = g = b = l; // all colors equally strong -> all equal to lightness
	} else {
		var q = l < 0.5 ? l * (1 + oColor.s) : l + oColor.s - l * oColor.s;
		var p = 2 * l - q;
		r = sap.ui.ux3.ShellColorPicker.hueToRgb(p, q, oColor.h + 1/3);
		g = sap.ui.ux3.ShellColorPicker.hueToRgb(p, q, oColor.h);
		b = sap.ui.ux3.ShellColorPicker.hueToRgb(p, q, oColor.h - 1/3);
	}

	return [r * 255, g * 255, b * 255];
};

sap.ui.ux3.ShellColorPicker.hueToRgb = function(p, q, t) {
  if(t < 0) {
	t += 1;
  }
  if(t > 1) {
	t -= 1;
  }
  if(t < 1/6) {
	return p + (q - p) * 6 * t;
  }
  if(t < 1/2) {
	return q;
  }
  if(t < 2/3) {
	return p + (q - p) * (2/3 - t) * 6;
  }
  return p;
};

sap.ui.ux3.ShellColorPicker.hslToCss = function(oColor) {
	var rgbColor = sap.ui.ux3.ShellColorPicker.hslToRgb(oColor);
	return "rgb(" + Math.round(rgbColor[0]) + "," + Math.round(rgbColor[1]) + "," + Math.round(rgbColor[2]) + ")";
};