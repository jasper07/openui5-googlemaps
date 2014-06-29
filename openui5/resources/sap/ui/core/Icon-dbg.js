/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.Icon.
sap.ui.define(['./library','./Control','./IconPool'], function() {
	"use strict";


/**
 * Constructor for a new Icon.
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
 * <li>{@link #getSrc src} : sap.ui.core.URI</li>
 * <li>{@link #getSize size} : sap.ui.core.CSSSize</li>
 * <li>{@link #getColor color} : sap.ui.core.CSSColor</li>
 * <li>{@link #getHoverColor hoverColor} : sap.ui.core.CSSColor</li>
 * <li>{@link #getActiveColor activeColor} : sap.ui.core.CSSColor</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getBackgroundColor backgroundColor} : sap.ui.core.CSSColor</li>
 * <li>{@link #getHoverBackgroundColor hoverBackgroundColor} : sap.ui.core.CSSColor</li>
 * <li>{@link #getActiveBackgroundColor activeBackgroundColor} : sap.ui.core.CSSColor</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getDecorative decorative} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.core.Icon#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Icon uses embeded font instead of pixel image. Comparing to image, Icon is easily scalable, color can be altered live and various effects can be added using css.
 * 
 * A set of built in Icons is available and they can be fetched by calling sap.ui.core.IconPool.getIconURI and set this value to the src property on the Icon.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.11.1
 * @name sap.ui.core.Icon
 */
sap.ui.core.Control.extend("sap.ui.core.Icon", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.core",
	properties : {
		"src" : {type : "sap.ui.core.URI", group : "Data", defaultValue : null},
		"size" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"color" : {type : "sap.ui.core.CSSColor", group : "Appearance", defaultValue : null},
		"hoverColor" : {type : "sap.ui.core.CSSColor", group : "Appearance", defaultValue : null},
		"activeColor" : {type : "sap.ui.core.CSSColor", group : "Appearance", defaultValue : null},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"backgroundColor" : {type : "sap.ui.core.CSSColor", group : "Appearance", defaultValue : null},
		"hoverBackgroundColor" : {type : "sap.ui.core.CSSColor", group : "Appearance", defaultValue : null},
		"activeBackgroundColor" : {type : "sap.ui.core.CSSColor", group : "Appearance", defaultValue : null},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"decorative" : {type : "boolean", group : "Accessibility", defaultValue : true}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.core.Icon with name <code>sClassName</code> 
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
 * @name sap.ui.core.Icon.extend
 * @function
 */

sap.ui.core.Icon.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>src</code>.
 * This property should be set by the return value of calling sap.ui.core.IconPool.getIconURI with a Icon name parameter and an optional collection parameter which is required when using application extended Icons. A list of standard FontIcon is available here.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>src</code>
 * @public
 * @name sap.ui.core.Icon#getSrc
 * @function
 */

/**
 * Setter for property <code>src</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sSrc  new value for property <code>src</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Icon#setSrc
 * @function
 */


/**
 * Getter for property <code>size</code>.
 * Since Icon uses font, this property will be applied to the css font-size property on the rendered DOM element.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>size</code>
 * @public
 * @name sap.ui.core.Icon#getSize
 * @function
 */

/**
 * Setter for property <code>size</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sSize  new value for property <code>size</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Icon#setSize
 * @function
 */


/**
 * Getter for property <code>color</code>.
 * The color of the Icon. If color is not defined here, the Icon inherits the color from its DOM parent.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSColor} the value of property <code>color</code>
 * @public
 * @name sap.ui.core.Icon#getColor
 * @function
 */

/**
 * Setter for property <code>color</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSColor} sColor  new value for property <code>color</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Icon#setColor
 * @function
 */


/**
 * Getter for property <code>hoverColor</code>.
 * This color is shown when icon is hovered. This property has no visual effect when run on mobile device.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSColor} the value of property <code>hoverColor</code>
 * @public
 * @name sap.ui.core.Icon#getHoverColor
 * @function
 */

/**
 * Setter for property <code>hoverColor</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSColor} sHoverColor  new value for property <code>hoverColor</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Icon#setHoverColor
 * @function
 */


/**
 * Getter for property <code>activeColor</code>.
 * This color is shown when icon is pressed/activated by the user.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSColor} the value of property <code>activeColor</code>
 * @public
 * @name sap.ui.core.Icon#getActiveColor
 * @function
 */

/**
 * Setter for property <code>activeColor</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSColor} sActiveColor  new value for property <code>activeColor</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Icon#setActiveColor
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * This is the width of the DOM element which contains the Icon. Setting this property doesn't affect the size of the font. If you want to make the font bigger, increase the size property.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.core.Icon#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Icon#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * This is the height of the DOM element which contains the Icon. Setting this property doesn't affect the size of the font. If you want to make the font bigger, increase the size property.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.core.Icon#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Icon#setHeight
 * @function
 */


/**
 * Getter for property <code>backgroundColor</code>.
 * Background color of the Icon in normal state.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSColor} the value of property <code>backgroundColor</code>
 * @public
 * @name sap.ui.core.Icon#getBackgroundColor
 * @function
 */

/**
 * Setter for property <code>backgroundColor</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSColor} sBackgroundColor  new value for property <code>backgroundColor</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Icon#setBackgroundColor
 * @function
 */


/**
 * Getter for property <code>hoverBackgroundColor</code>.
 * Background color for Icon in hover state. This property has no visual effect when run on mobile device.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSColor} the value of property <code>hoverBackgroundColor</code>
 * @public
 * @name sap.ui.core.Icon#getHoverBackgroundColor
 * @function
 */

/**
 * Setter for property <code>hoverBackgroundColor</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSColor} sHoverBackgroundColor  new value for property <code>hoverBackgroundColor</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Icon#setHoverBackgroundColor
 * @function
 */


/**
 * Getter for property <code>activeBackgroundColor</code>.
 * Background color for Icon in active state.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSColor} the value of property <code>activeBackgroundColor</code>
 * @public
 * @name sap.ui.core.Icon#getActiveBackgroundColor
 * @function
 */

/**
 * Setter for property <code>activeBackgroundColor</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSColor} sActiveBackgroundColor  new value for property <code>activeBackgroundColor</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Icon#setActiveBackgroundColor
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * An invisible icon is not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.core.Icon#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Icon#setVisible
 * @function
 */


/**
 * Getter for property <code>decorative</code>.
 * A decorative icon is included for design reasons. Accessibility tools will ignore decorative icons. Decorative icons don't have tab stop.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>decorative</code>
 * @public
 * @since 1.16.4
 * @name sap.ui.core.Icon#getDecorative
 * @function
 */

/**
 * Setter for property <code>decorative</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bDecorative  new value for property <code>decorative</code>
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.4
 * @name sap.ui.core.Icon#setDecorative
 * @function
 */


/**
 * This event is fired when icon is pressed/activated by the user. 
 *
 * @name sap.ui.core.Icon#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.core.Icon</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.core.Icon</code>.<br/> itself. 
 *  
 * This event is fired when icon is pressed/activated by the user. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.core.Icon</code>.<br/> itself.
 *
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Icon#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.core.Icon</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Icon#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.core.Icon} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.core.Icon#firePress
 * @function
 */


// Start of sap/ui/core/Icon.js

/* =========================================================== */
/* Lifecycle methods                                           */
/* =========================================================== */

/**
 * Required adaptations after rendering.
 *
 * @private
 */
sap.ui.core.Icon.prototype.onAfterRendering = function() {
	var $this = this.$();

	// When cursor CSS style is set via CSS class,
	// chrome doesn't return the set value by calling domNode.style.cursor,
	// therefore inline style has to be set here.
	if (sap.ui.Device.browser.chrome && this.hasListeners("press")) {
		$this.css("cursor", "pointer");
	}

	// This is to check if no cursor property inherited from parent DOM.
	// If the current value is auto, set it to default.
	// This is to fix the cursor: auto interpreted as text cursor in firefox and IE.
	if ($this.css("cursor") === "auto") {
		$this.css("cursor", "default");
	}
};

/* =========================================================== */
/* Event handlers                                              */
/* =========================================================== */

/**
 * Handle the mousedown event on the Icon.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.ui.core.Icon.prototype.onmousedown = function(oEvent) {

	this._bPressFired = false;

	if (oEvent.srcControl.mEventRegistry["press"] || oEvent.srcControl.mEventRegistry["tap"]) {

		// mark the event for components that needs to know if the event was handled by this component
		oEvent.setMarked();
	}

	var sActiveColor = this.getActiveColor(),
		sActiveBackgroundColor = this.getActiveBackgroundColor(),
		$this;

	if (sActiveColor || sActiveBackgroundColor) {

		// change the source only when the first finger is on the Icon, the following fingers doesn't affect
		if (!oEvent.targetTouches || (oEvent.targetTouches && oEvent.targetTouches.length === 1)) {
			$this = this.$();

			$this.addClass("sapUiIconActive");

			if (sActiveColor) {
				$this.css("color", sActiveColor);
			}

			if (sActiveBackgroundColor) {
				$this.css("background-color", sActiveBackgroundColor);
			}
		}
	}
};

/**
 * Handle the touchstart event on the Icon.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.ui.core.Icon.prototype.ontouchstart = sap.ui.core.Icon.prototype.onmousedown;

/**
 * Handle the mouseup event on the Icon.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.ui.core.Icon.prototype.onmouseup = function(oEvent) {

	// change the source back only when all fingers leave the icon
	if (!oEvent.targetTouches || (oEvent.targetTouches && oEvent.targetTouches.length === 0)) {

		this.$().removeClass("sapUiIconActive");
		this._restoreColors();
	}
};

/**
 * Handle the touchend event on the Icon.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.ui.core.Icon.prototype.ontouchend = sap.ui.core.Icon.prototype.onmouseup;

/**
 * Handle the touchcancel event on the Icon.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.ui.core.Icon.prototype.ontouchcancel = sap.ui.core.Icon.prototype.onmouseup;

/**
 * Handle the mouseover event on the Icon.
 *
 * @private
 */
sap.ui.core.Icon.prototype.onmouseover = function() {

	var sHoverColor = this.getHoverColor(),
		sHoverBackgroundColor = this.getHoverBackgroundColor(),
		$this = this.$();

	if (sHoverColor) {
		$this.css("color", sHoverColor);
	}

	if (sHoverBackgroundColor) {
		$this.css("background-color", sHoverBackgroundColor);
	}
};

/**
 * Handle the mouseout event on the Icon.
 *
 * @private
 */
sap.ui.core.Icon.prototype.onmouseout = function() {
	this._restoreColors();
};

/**
 * Handle the click or tap event on the Icon.
 *
 * @private
 */
sap.ui.core.Icon.prototype.onclick = function() {
	if (this._bPressFired) {
		return;
	}

	this.firePress({/* no parameters */});
	this._bPressFired = true;
};

sap.ui.core.Icon.prototype.ontap = sap.ui.core.Icon.prototype.onclick;

/* ----------------------------------------------------------- */
/* Keyboard handling                                           */
/* ----------------------------------------------------------- */

/**
 * Handle the key down event for SPACE and ENTER.
 *
 * @param {jQuery.Event} oEvent - the keyboard event.
 * @private
 */
sap.ui.core.Icon.prototype.onkeydown = function(oEvent) {

	if (oEvent.which === jQuery.sap.KeyCodes.SPACE || oEvent.which === jQuery.sap.KeyCodes.ENTER) {

		// note: prevent document scrolling
		oEvent.preventDefault();

		var $this = this.$(),
			sActiveColor = this.getActiveColor(),
			sActiveBackgroundColor = this.getActiveBackgroundColor();

		$this.addClass("sapUiIconActive");

		if (sActiveColor) {
			$this.css("color", sActiveColor);
		}

		if (sActiveBackgroundColor) {
			$this.css("background-color", sActiveBackgroundColor);
		}
	}
};

/**
 * Handle the key up event for SPACE and ENTER.
 *
 * @param {jQuery.Event} oEvent - the keyboard event.
 * @private
 */
sap.ui.core.Icon.prototype.onkeyup = function(oEvent) {

	if (oEvent.which === jQuery.sap.KeyCodes.SPACE || oEvent.which === jQuery.sap.KeyCodes.ENTER) {

		this.$().removeClass("sapUiIconActive");
		this._restoreColors();
		this.firePress({/* no parameters */});
	}
};

/* =========================================================== */
/* Private methods                                             */
/* =========================================================== */

sap.ui.core.Icon.prototype._restoreColors = function() {
	this.$().css({
		"color": this.getColor() || "",
		"background-color": this.getBackgroundColor() || ""
	});
};

/* =========================================================== */
/* API method                                                  */
/* =========================================================== */

sap.ui.core.Icon.prototype.setSrc = function(sSrc) {
	var oIconInfo = sap.ui.core.IconPool.getIconInfo(sSrc),
		bTextNeeded = (!!sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version < 9),
		$this = this.$();

	if (oIconInfo) {
		$this.css("font-family", oIconInfo.fontFamily);

		if (bTextNeeded) {
			$this.text(oIconInfo.content);
		} else {
			$this.attr("data-sap-ui-icon-content", oIconInfo.content);
		}

		$this.toggleClass("sapUiIconMirrorInRTL", !oIconInfo.suppressMirroring);
	}

	// when the given sSrc can't be found in IconPool, rerender the icon is needed.
	this.setProperty("src", sSrc, !!oIconInfo);

	return this;
};

sap.ui.core.Icon.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth, true);
	this.$().css("width", sWidth);

	return this;
};

sap.ui.core.Icon.prototype.setHeight = function(sHeight) {
	this.setProperty("height", sHeight, true);
	this.$().css({
		"height": sHeight,
		"line-height": sHeight
	});

	return this;
};

sap.ui.core.Icon.prototype.setSize = function(sSize) {
	this.setProperty("size", sSize, true);
	this.$().css("font-size", sSize);

	return this;
};

sap.ui.core.Icon.prototype.setColor = function(sColor) {
	this.setProperty("color", sColor, true);
	this.$().css("color", sColor);

	return this;
};

sap.ui.core.Icon.prototype.setActiveColor = function(sColor) {
	return this.setProperty("activeColor", sColor, true);
};

sap.ui.core.Icon.prototype.setHoverColor = function(sColor) {
	return this.setProperty("hoverColor", sColor, true);
};

sap.ui.core.Icon.prototype.setBackgroundColor = function(sColor) {
	this.setProperty("backgroundColor", sColor, true);
	this.$().css("background-color", sColor);

	return this;
};

sap.ui.core.Icon.prototype.setActiveBackgroundColor = function(sColor) {
	return this.setProperty("activeBackgroundColor", sColor, true);
};

sap.ui.core.Icon.prototype.setHoverBackgroundColor = function(sColor) {
	return this.setProperty("hoverBackgroundColor", sColor, true);
};

	return sap.ui.core.Icon;

}, /* bExport = */ true);
