/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.BusyIndicator.
jQuery.sap.declare("sap.m.BusyIndicator");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new BusyIndicator.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: sap.ui.core.TextDirection.Inherit)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getCustomIcon customIcon} : sap.ui.core.URI</li>
 * <li>{@link #getCustomIconRotationSpeed customIconRotationSpeed} : int (default: 1000)</li>
 * <li>{@link #getCustomIconDensityAware customIconDensityAware} : boolean (default: true)</li>
 * <li>{@link #getCustomIconWidth customIconWidth} : sap.ui.core.CSSSize (default: "44px")</li>
 * <li>{@link #getCustomIconHeight customIconHeight} : sap.ui.core.CSSSize (default: "44px")</li>
 * <li>{@link #getSize size} : sap.ui.core.CSSSize</li>
 * <li>{@link #getDesign design} : string (default: 'auto')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Control to indicate that the system is busy with some task and the user has to wait. When no image or gif is provided, the control renders the platforms native indicator using css.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.BusyIndicator
 */
sap.ui.core.Control.extend("sap.m.BusyIndicator", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"text" : {type : "string", group : "Data", defaultValue : null},
		"textDirection" : {type : "sap.ui.core.TextDirection", group : "Appearance", defaultValue : sap.ui.core.TextDirection.Inherit},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"customIcon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"customIconRotationSpeed" : {type : "int", group : "Appearance", defaultValue : 1000},
		"customIconDensityAware" : {type : "boolean", group : "", defaultValue : true},
		"customIconWidth" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : "44px"},
		"customIconHeight" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : "44px"},
		"size" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"design" : {type : "string", group : "Appearance", defaultValue : 'auto'}
	},
	aggregations : {
    	"_iconImage" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
    	"_busyLabel" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}
	}
}});


/**
 * Creates a new subclass of class sap.m.BusyIndicator with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.m.BusyIndicator.extend
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * Defines the text displayed next to the busy indicator (optional)
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.m.BusyIndicator#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.BusyIndicator#setText
 * @function
 */


/**
 * Getter for property <code>textDirection</code>.
 * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
 *
 * Default value is <code>sap.ui.core.TextDirection.Inherit</code>
 *
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * @name sap.m.BusyIndicator#getTextDirection
 * @function
 */

/**
 * Setter for property <code>textDirection</code>.
 *
 * Default value is <code>sap.ui.core.TextDirection.Inherit</code> 
 *
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.BusyIndicator#setTextDirection
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Set to false to make the control invisible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.BusyIndicator#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.BusyIndicator#setVisible
 * @function
 */


/**
 * Getter for property <code>customIcon</code>.
 * Icon url if an icon is used as the busy indicator.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>customIcon</code>
 * @public
 * @name sap.m.BusyIndicator#getCustomIcon
 * @function
 */

/**
 * Setter for property <code>customIcon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sCustomIcon  new value for property <code>customIcon</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.BusyIndicator#setCustomIcon
 * @function
 */


/**
 * Getter for property <code>customIconRotationSpeed</code>.
 * Defines the rotation speed of the given image. If a .gif is used, the speed has to be set to 0. The unit is in ms.
 *
 * Default value is <code>1000</code>
 *
 * @return {int} the value of property <code>customIconRotationSpeed</code>
 * @public
 * @name sap.m.BusyIndicator#getCustomIconRotationSpeed
 * @function
 */

/**
 * Setter for property <code>customIconRotationSpeed</code>.
 *
 * Default value is <code>1000</code> 
 *
 * @param {int} iCustomIconRotationSpeed  new value for property <code>customIconRotationSpeed</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.BusyIndicator#setCustomIconRotationSpeed
 * @function
 */


/**
 * Getter for property <code>customIconDensityAware</code>.
 * If this is set to false, the src image will be loaded directly without attempting to fetch the density perfect image for high density device.
 * 
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * 
 * If bandwidth is the key for the application, set this value to false.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>customIconDensityAware</code>
 * @public
 * @name sap.m.BusyIndicator#getCustomIconDensityAware
 * @function
 */

/**
 * Setter for property <code>customIconDensityAware</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bCustomIconDensityAware  new value for property <code>customIconDensityAware</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.BusyIndicator#setCustomIconDensityAware
 * @function
 */


/**
 * Getter for property <code>customIconWidth</code>.
 * Width of the provided icon. By default 44px are used.
 *
 * Default value is <code>"44px"</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>customIconWidth</code>
 * @public
 * @name sap.m.BusyIndicator#getCustomIconWidth
 * @function
 */

/**
 * Setter for property <code>customIconWidth</code>.
 *
 * Default value is <code>"44px"</code> 
 *
 * @param {sap.ui.core.CSSSize} sCustomIconWidth  new value for property <code>customIconWidth</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.BusyIndicator#setCustomIconWidth
 * @function
 */


/**
 * Getter for property <code>customIconHeight</code>.
 * Height of the provided icon. By default 44px are used.
 *
 * Default value is <code>"44px"</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>customIconHeight</code>
 * @public
 * @name sap.m.BusyIndicator#getCustomIconHeight
 * @function
 */

/**
 * Setter for property <code>customIconHeight</code>.
 *
 * Default value is <code>"44px"</code> 
 *
 * @param {sap.ui.core.CSSSize} sCustomIconHeight  new value for property <code>customIconHeight</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.BusyIndicator#setCustomIconHeight
 * @function
 */


/**
 * Getter for property <code>size</code>.
 * Defines the size of the busy indicator.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>size</code>
 * @public
 * @name sap.m.BusyIndicator#getSize
 * @function
 */

/**
 * Setter for property <code>size</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sSize  new value for property <code>size</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.BusyIndicator#setSize
 * @function
 */


/**
 * Getter for property <code>design</code>.
 * The design defines how the BusyIndicator should look like. There are 3 possiblities:
 * auto: automatically sets the design according to the context
 * dark: dark theme, useful within a light context
 * light: light theme, useful within a dark context
 *
 * Default value is <code>auto</code>
 *
 * @return {string} the value of property <code>design</code>
 * @public
 * @name sap.m.BusyIndicator#getDesign
 * @function
 */

/**
 * Setter for property <code>design</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {string} sDesign  new value for property <code>design</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.BusyIndicator#setDesign
 * @function
 */


// Start of sap\m\BusyIndicator.js
jQuery.sap.require("sap.ui.core.theming.Parameters");

sap.m.BusyIndicator.prototype.init = function(){
	if(sap.ui.core.theming.Parameters.get("sapMPlatformDependent") != "true"){
		// Blue crystal design: rotating arc
		// bugs.webkit.org: id=82647, id=74801 dynamically created SVG does not animate
		// do not use SVG in ios and android < 4.2 
		if(sap.ui.Device.browser.chrome 
				|| sap.ui.Device.os.blackberry
				|| sap.ui.Device.os.android && sap.ui.Device.os.version > 4.1){
			// Browsers with correct SMIL animation show SVG (crisp rendering)
			this._bUseSvg = true;
		} else {
			// Fall-back for other browsers: show canvas animation (aliased rendering)
			this._bUseCanvas = true;
		}
	}
	this._bIosStyle = sap.ui.Device.os.ios;
	this._sBColor = sap.ui.core.theming.Parameters.get("sapUiPageBG") || "rgba(0, 0, 0, 0)";
};

sap.m.BusyIndicator.prototype.exit = function(){
	this._cancelAnimation();
};

// Request canvas animation
// @private 
if(window.requestAnimationFrame){
	sap.m.BusyIndicator.prototype._requestAnimation = function(fCallback){
		return window.requestAnimationFrame(fCallback);
	};
} else if(window.webkitRequestAnimationFrame){
	sap.m.BusyIndicator.prototype._requestAnimation = function(fCallback, oDOM){
		return window.webkitRequestAnimationFrame(fCallback, oDOM);
	};	
} else if(window.mozRequestAnimationFrame){
	sap.m.BusyIndicator.prototype._requestAnimation = function(fCallback){
		return window.mozRequestAnimationFrame(fCallback);
	};
} else {
	sap.m.BusyIndicator.prototype._requestAnimation = function(fCallback){
		return window.setTimeout(fCallback, 1000 / 60);
	};
};

// Stop canvas animation
// @private 
sap.m.BusyIndicator.prototype._cancelAnimation = function(){
	if(!this._animationId){ return;}
	
	if(window.cancelAnimationFrame){
		window.cancelAnimationFrame(this._animationId);
	} else if(window.webkitCancelAnimationFrame){
		window.webkitCancelAnimationFrame(this._animationId);
	} else if(window.mozCancelAnimationFrame){
		window.mozCancelAnimationFrame(this._animationId);
	} else{	
		window.clearTimeout(this._animationId); 
	};
	this._animationId = undefined;
};

// Do the next animation step
// @private 
sap.m.BusyIndicator.prototype._animateCanvas = function(){
	if(!this.oCanvas){ return; }
	
	var clientWidth = this.oCanvas.clientWidth,
		clientHeight = this.oCanvas.clientHeight;
	
	if(!clientWidth || !clientHeight){
			// if the indicator becomes invisible, client width and height are set to 0. 
			// Stop animation
			this._animationId = undefined;
			return;  
	}
	
	// Adjust the canvas size to avoid aliasing artifacts
	// This is needed only once after first rendering and only for custom size
	if(clientWidth != this.oCanvas.width){ 
		this.oCanvas.setAttribute("width", clientWidth);
	}
	if(clientHeight != this.oCanvas.height){
		this.oCanvas.setAttribute("height", clientHeight);
	}
	
	var context = this.oCanvas.getContext("2d"),
		w = this.oCanvas.width,
		h = this.oCanvas.height,
		x = Math.round(w/2),
		y = Math.round(h/2),
		r = Math.round(x * 0.7),
		t = new Date(),
		startAngle = 0.9 * (t.getSeconds() + t.getMilliseconds() / 1000) * 2 * Math.PI,
		endAngle = startAngle + 1.25 * Math.PI, // 225 grad
		counterClock = false,
		strokeStyle = window.getComputedStyle(this.oCanvas).color,
		lineWidth = Math.round(w / 10) * 2;
	
	context.clearRect(0,0,w,h);
	
	// clearRect does not clear canvas in Android browser 4.1, 
	// workaround: draw a white circle underneath
	if(sap.ui.Device.os.android && sap.ui.Device.os.version == 4.1 && !sap.ui.Device.browser.chrome){
		context.strokeStyle = this._sBColor; 
		context.lineWidth = lineWidth + 2;
		context.beginPath();
		context.arc(x, y, r, 0, 2 * Math.PI);
		context.stroke();
	}
	
	context.strokeStyle = strokeStyle;
	context.lineWidth = lineWidth;
	context.beginPath();
	context.arc(x, y, r, startAngle, endAngle, counterClock);
	context.stroke();
	
	this._animationId = this._requestAnimation(this._fAnimateCallback, this.oCanvas);
};

// Start the canvas based animation
// @private 
sap.m.BusyIndicator.prototype._doCanvas = function(){
	this.oCanvas = this.getDomRef("canvas");
	this._fAnimateCallback = jQuery.proxy(this._animateCanvas, this);
	this._animationId = this._requestAnimation(this._fAnimateCallback, this.oCanvas);
};

// Create internal icon image
// @private 
sap.m.BusyIndicator.prototype._createCustomIcon = function(sName, sValue){
	var self = this;
	if(!this._iconImage) {
		this._iconImage = new sap.m.Image(this.getId() + "-icon", {
				width: "44px",
				height: "44px"
			}).addStyleClass('sapMBsyIndIcon');
		this._iconImage.addDelegate({onAfterRendering : function() {
				self._setRotationSpeed();
			}
		});
		this.setAggregation("_iconImage", this._iconImage, true);
	}
	this._iconImage[sName](sValue);
	this._setRotationSpeed();
};

// Create internal label
// @private 
sap.m.BusyIndicator.prototype._createLabel = function(sName, sValue){
	if (!this._oLabel) {
		this._oLabel = new sap.m.Label(this.getId() + "-label", {}).addStyleClass("sapMBsyIndLabel");
		this.setAggregation("_busyLabel", this._oLabel);
	}
	this._oLabel[sName](sValue);
};

// Do the "old style" css based platform dependent animation
// @private 
sap.m.BusyIndicator.prototype._doPlatformDependent = function(){
	var $_elem = this.$();
	
	var parentElement = this.getParent() ? this.getParent()._context : '';
	//Set the color to the first parents color which is not transparent. Skip this when inside Dialog or Bar.
	if(!this._bIosStyle) {
		if(!this.getCustomIcon() && this.$().parent('.sapMBusyDialog').length === 0 && parentElement !== 'header') {
			var bFoundCss = true;
			
			while( $_elem.css('background-color') === "rgba(0, 0, 0, 0)" ) {
				$_elem = $_elem.parent();
				
				//Do not ask '#document' for its css. this will cause trouble. Therefore
				//'$_elem.parent().length' is checked
				if($_elem.parent().length == 0) {
					bFoundCss = false;
					break;
				}
			}
			//This is the default color
			var sBColor = bFoundCss? $_elem.css('background-color') : this._sBColor;
			this.$().children().children('.sapMSpinBar3').children('.sapMSpinBar4').css('background-color', sBColor);
		}
	}
};

// Set the rotation speed of the image
// @private 
sap.m.BusyIndicator.prototype._setRotationSpeed = function(){

	if(!this._iconImage) return;

	if(jQuery.support.cssAnimations){
		var $icon = this._iconImage.$();
		var sRotationSpeed = this.getCustomIconRotationSpeed() + "ms";
		$icon.css("-webkit-animation-duration", sRotationSpeed)
			.css("animation-duration", sRotationSpeed);
		//Bug in Chrome: After changing height of image -> changing the rotationspeed will have no affect
		//chrome needs a rerendering of this element.
		$icon.css("display", "none");
		setTimeout(function() {
			$icon.css("display", "inline");
		}, 0);
	} else { // IE9
		this._rotateCustomIcon();
	}
};

//Animate custom icon in IE9
//@private
sap.m.BusyIndicator.prototype._rotateCustomIcon = function(){

	if(!this._iconImage){
		return;
	}
	var $icon = this._iconImage.$();

	// stop if the custom icon is not available or hidden:
	if(!$icon[0] || !$icon[0].offsetWidth){
		return;
	}

	var iRotationSpeed = this.getCustomIconRotationSpeed();
	if(!iRotationSpeed) return;

	if(!this._fnRotateCustomIcon){
		this._fnRotateCustomIcon = jQuery.proxy(this._rotateCustomIcon, this);
	}
	var fnRotateCustomIcon = this._fnRotateCustomIcon;

	if(!this._$CustomRotator){
		this._$CustomRotator = jQuery({deg: 0});
	}
	var $rotator = this._$CustomRotator;

	if($rotator.running){
		return;
	}

	// restart animation
	$rotator[0].deg = 0;

	$rotator.animate({deg: 360}, {
		duration: iRotationSpeed,
		easing: "linear",
		step: function(now) {
			$rotator.running = true;
			$icon.css("-ms-transform", 'rotate(' + now + 'deg)');
		},
		complete: function(){
			$rotator.running = false;
			window.setTimeout(fnRotateCustomIcon, 10);
		}
	});
};

sap.m.BusyIndicator.prototype.onBeforeRendering = function(){
	this._cancelAnimation();
};

sap.m.BusyIndicator.prototype.onAfterRendering = function(){
	if(this._bUseSvg) {
		return; // do nothing, svg animates itself
	}else if(this._bUseCanvas) {
		this._doCanvas();
	} else {
		this._doPlatformDependent();
	};
	
};

sap.m.BusyIndicator.prototype.setText = function(sText){
	this.setProperty("text", sText, true);
	this._createLabel("setText", sText);
	return this;
};

sap.m.BusyIndicator.prototype.setTextDirection = function(sDirection){
	this.setProperty("textDirection", sDirection, true);
	this._createLabel("setTextDirection", sDirection);
	return this;
};

sap.m.BusyIndicator.prototype.setCustomIcon = function(iSrc){
	this.setProperty("customIcon", iSrc, false);
	this._createCustomIcon("setSrc", iSrc);
	return this;
};

sap.m.BusyIndicator.prototype.setCustomIconRotationSpeed = function(iSpeed){
	if(isNaN(iSpeed) || iSpeed < 0){
		iSpeed = 0;
	}
	if(iSpeed !== this.getCustomIconRotationSpeed()) {
		this.setProperty("customIconRotationSpeed", iSpeed, true);
		this._setRotationSpeed();
	}
	return this;
};

sap.m.BusyIndicator.prototype.setCustomIconDensityAware = function(bAware){
	this.setProperty("customIconDensityAware", bAware, true);
	this._createCustomIcon("setDensityAware", bAware);
	return this;
};

sap.m.BusyIndicator.prototype.setCustomIconWidth = function(sWidth){
	this.setProperty("customIconWidth", sWidth, true);
	this._createCustomIcon("setWidth", sWidth);
	return this;
};

sap.m.BusyIndicator.prototype.setCustomIconHeight = function(sHeight){
	this.setProperty("customIconHeight", sHeight, true);
	this._createCustomIcon("setHeight", sHeight);
	return this;
};

sap.m.BusyIndicator.prototype.setDesign = function(sDesign) {
	this.setProperty("design", sDesign, true);
	this.$().toggleClass("sapMBusyIndicatorLight", (this.getDesign() === "light"));
	this.$().toggleClass("sapMBusyIndicatorDark", (this.getDesign() === "dark"));
	return this;
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code>
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.BusyIndicator} <code>this</code> to allow method chaining
 * @public
 *
 * The MessageBar.API.js "setVisible" function is enhanced in order to
 * toggle the "visibility:hidden;" attribute over the control.
 */
sap.m.BusyIndicator.prototype.setVisible = function(bVisible){
	var oDomRef = this.getDomRef();
	//only suppress rerendering when it's already rendered
	this.setProperty("visible", bVisible, !!oDomRef);
	
	if(oDomRef){
		this.getDomRef().style.visibility = bVisible? "visible" : "hidden";
		if(bVisible && !this._animationId){
			this._animateCanvas();
		}
	}
	
	return this;
};
