/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.LocalBusyIndicator.
sap.ui.define(['./library','./Control','./theming/Parameters','./LocalBusyIndicatorRenderer'], function() {
	"use strict";


/**
 * Constructor for a new LocalBusyIndicator.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100px')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100px')</li></ul>
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
 * The LocalBusyIndicator is a special version of the
 * BusyIndicator. This one doesn't block the whole screen - it just
 * blocks the corresponding control and puts a local animation over the
 * control. To use the functionality of this control the corresponding
 * control needs to be enabled via the 'LocalBusyIndicatorSupport'
 * accordingly to the ListBox control (see the init-function of the
 * ListBox).
 * 
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.11.0
 * @deprecated Since version 1.14.2. 
 * The LocalBusyIndicator Control is not needed anymore by the new implementation of the LBI. Hence, it is not used anymore.
 * @name sap.ui.core.LocalBusyIndicator
 */
sap.ui.core.Control.extend("sap.ui.core.LocalBusyIndicator", { metadata : {

	// ---- object ----
	deprecated : true,

	// ---- control specific ----
	library : "sap.ui.core",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '100px'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '100px'}
	}
}});


/**
 * Creates a new subclass of class sap.ui.core.LocalBusyIndicator with name <code>sClassName</code> 
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
 * @name sap.ui.core.LocalBusyIndicator.extend
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * This property is the width of the control that has to
 * be covered. With this width the position of the animation can be
 * properly set.
 * 
 *
 * Default value is <code>100px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.core.LocalBusyIndicator#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100px</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.core.LocalBusyIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.LocalBusyIndicator#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * This property is the height of the control that has to
 * be covered. With this height the position of the animation can be
 * properly set.
 * 
 *
 * Default value is <code>100px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.core.LocalBusyIndicator#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100px</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.core.LocalBusyIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.LocalBusyIndicator#setHeight
 * @function
 */


// Start of sap/ui/core/LocalBusyIndicator.js

(function() {
	
	sap.ui.core.LocalBusyIndicator.prototype.init = function() {
		var sRoot = "sap.ui.core.LocalBusyIndicator:";

		var sParam = "sapUiLocalBusyIndicatorBoxSize";
		sParam = sap.ui.core.theming.Parameters.get(sRoot + sParam);
		// this._iBoxSize = parseInt(sParam, 10);
		this._iBoxSize = 8;

		sParam = "sapUiLocalBusyIndicatorBoxColor";
		this._sBoxColor = sap.ui.core.theming.Parameters.get(sRoot + sParam);

		sParam = "sapUiLocalBusyIndicatorBoxColorActive";
		this._sBoxColorActive = sap.ui.core.theming.Parameters.get(sRoot + sParam);

		this._animateProxy = jQuery.proxy(fnAnimate, this);
	};

	sap.ui.core.LocalBusyIndicator.prototype.exit = function() {
		jQuery.sap.clearDelayedCall(this._delayedCallId);
		delete this._delayedCallId;
	};

	sap.ui.core.LocalBusyIndicator.prototype.onThemeChanged = function(oEvent) {
		if (this.getDomRef()) {
			this.invalidate();
		}
	};

	sap.ui.core.LocalBusyIndicator.prototype.onAfterRendering = function() {
		var w = parseInt(this.getWidth(), 10);
		var h = parseInt(this.getHeight(), 10);

		var $this = this.$();
		$this.css("width", w + "px");
		$this.css("height", h + "px");

		var $animation = this.$("animation");

		var left = Math.floor(w / 2);
		left -= Math.floor((5 * this._iBoxSize) / 2);

		var top = Math.floor(h / 2) - Math.floor(this._iBoxSize / 2);

		$animation.css("left", left + "px");
		$animation.css("top", top + "px");

		if (!this._$left) {
			this._$left = this.$("leftBox");
		}
		if (!this._$middle) {
			this._$middle = this.$("middleBox");
		}
		if (!this._$right) {
			this._$right = this.$("rightBox");
		}

		this._delayedCallId = jQuery.sap.delayedCall(0, this, this._animateProxy);
	};

	var fnAnimate = function() {
		if (this.getDomRef()) {
			var oThis = this;
			var $left, $middle, $right;
			var color = "", colorActive = "";

			/*
			 * All this steps ensure that the control won't crash if during an
			 * animation the control was destroyed.
			 */
			if (oThis._$left) {
				$left = oThis._$left;
			} else {
				return;
			}
			if (oThis._$middle) {
				$middle = oThis._$middle;
			} else {
				return;
			}
			if (oThis._$right) {
				$right = oThis._$right;
			} else {
				return;
			}
			if (oThis._sBoxColor) {
				color = oThis._sBoxColor;
			} else {
				return;
			}
			if (oThis._sBoxColorActive) {
				colorActive = oThis._sBoxColorActive;
			} else {
				return;
			}

			$left.css("background-color", colorActive);

			setTimeout(function() {
				$left.css("background-color", color);

				$middle.css("background-color", colorActive);

				setTimeout(function() {
					$middle.css("background-color", color);

					$right.css("background-color", colorActive);

					setTimeout(function() {
						$right.css("background-color", color);
					}, 150);
				}, 150);
			}, 150);

			this._delayedCallId = jQuery.sap.delayedCall(1200, this, this._animateProxy);
		}
	};

}());

	return sap.ui.core.LocalBusyIndicator;

}, /* bExport = */ true);
