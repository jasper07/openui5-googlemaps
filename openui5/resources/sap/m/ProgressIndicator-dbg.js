/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ProgressIndicator.
jQuery.sap.declare("sap.m.ProgressIndicator");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ProgressIndicator.
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
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getState state} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getDisplayValue displayValue} : string (default: '0%')</li>
 * <li>{@link #getPercentValue percentValue} : float (default: 0)</li>
 * <li>{@link #getShowValue showValue} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '2.5rem')</li></ul>
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
 * Shows the progress of a process in a graphical way. To indicate the progress, the inside of the ProgressIndicator is filled with a color.
 * Additionally, a user defined string can be displayed on the ProgressIndicator.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.13.1
 * @name sap.m.ProgressIndicator
 */
sap.ui.core.Control.extend("sap.m.ProgressIndicator", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"state" : {type : "sap.ui.core.ValueState", group : "Appearance", defaultValue : sap.ui.core.ValueState.None},
		"displayValue" : {type : "string", group : "Appearance", defaultValue : '0%'},
		"percentValue" : {type : "float", group : "Data", defaultValue : 0},
		"showValue" : {type : "boolean", group : "Appearance", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '2.5rem'}
	}
}});


/**
 * Creates a new subclass of class sap.m.ProgressIndicator with name <code>sClassName</code> 
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
 * @name sap.m.ProgressIndicator.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.ProgressIndicator#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ProgressIndicator#setVisible
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.ProgressIndicator#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ProgressIndicator#setEnabled
 * @function
 */


/**
 * Getter for property <code>state</code>.
 * The state of the bar. Enumeration sap.ui.core.ValueState provides Error (red), Warning (yellow), Success (green), None (blue) (default value).
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>state</code>
 * @public
 * @name sap.m.ProgressIndicator#getState
 * @function
 */

/**
 * Setter for property <code>state</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oState  new value for property <code>state</code>
 * @return {sap.m.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ProgressIndicator#setState
 * @function
 */


/**
 * Getter for property <code>displayValue</code>.
 * The text value to be displayed in the bar.
 *
 * Default value is <code>0%</code>
 *
 * @return {string} the value of property <code>displayValue</code>
 * @public
 * @name sap.m.ProgressIndicator#getDisplayValue
 * @function
 */

/**
 * Setter for property <code>displayValue</code>.
 *
 * Default value is <code>0%</code> 
 *
 * @param {string} sDisplayValue  new value for property <code>displayValue</code>
 * @return {sap.m.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ProgressIndicator#setDisplayValue
 * @function
 */


/**
 * Getter for property <code>percentValue</code>.
 * The numerical value for the displayed length of the progress bar.
 *
 * Default value is <code>0</code>
 *
 * @return {float} the value of property <code>percentValue</code>
 * @public
 * @name sap.m.ProgressIndicator#getPercentValue
 * @function
 */

/**
 * Setter for property <code>percentValue</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {float} fPercentValue  new value for property <code>percentValue</code>
 * @return {sap.m.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ProgressIndicator#setPercentValue
 * @function
 */


/**
 * Getter for property <code>showValue</code>.
 * Specifies whether the current value shall be rendered inside the bar.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showValue</code>
 * @public
 * @name sap.m.ProgressIndicator#getShowValue
 * @function
 */

/**
 * Setter for property <code>showValue</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowValue  new value for property <code>showValue</code>
 * @return {sap.m.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ProgressIndicator#setShowValue
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The width of the control.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.ProgressIndicator#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ProgressIndicator#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * The height of the control.
 * Suggested size for normal use 2.5rem (40px). Suggested size for small size (like for use in ObjectHeader) 1.375rem (22px).
 *
 * Default value is <code>2.5rem</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @since 1.15.0
 * @name sap.m.ProgressIndicator#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>2.5rem</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.m.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.m.ProgressIndicator#setHeight
 * @function
 */


// Start of sap\m\ProgressIndicator.js
///**
// * This file defines behavior for the control,
// */
//sap.m.ProgressIndicator.prototype.init = function(){
//   // do something for initialization...
//};

sap.m.ProgressIndicator.prototype.onAfterRendering = function() {
	var lineHeightText = this.$().height();
	this.$("textRight").css("line-height", lineHeightText + "px");
	this.$("textLeft").css("line-height", lineHeightText + "px");
}

sap.m.ProgressIndicator.prototype.setPercentValue = function(fPercentValue) {

	var that = this;

	// validation of fPercentValue
	if (typeof (fPercentValue) == "number") {
		if (!((fPercentValue >= 0) && (fPercentValue <= 100))) {
			jQuery.sap.log.error(this + ": percentValue (" + fPercentValue + ") is not correct! It has to be between 0-100.");
			return this;
		}
	}

	if (that.getPercentValue() != fPercentValue) {
		// animation without rerendering
		this.$().addClass("sapMPIAnimate");
		var time = Math.abs(that.getPercentValue() - fPercentValue) * 20;
		this.setProperty("percentValue", fPercentValue, true);
		var $Bar = this.$("bar");
		$Bar.animate({
			width : fPercentValue + "%"
		}, time, "linear", function() {
			that._setText.apply(that);
			that.$().removeClass("sapMPIAnimate");
		});
	}

	return this;
};

sap.m.ProgressIndicator.prototype._setText = function() {

	this.$().toggleClass("sapMPIValueGreaterHalf", this.getPercentValue() > 50);

	return this;
};

sap.m.ProgressIndicator.prototype.setDisplayValue = function(sDisplayValue) {

	// change of value without rerendering
	this.setProperty("displayValue", sDisplayValue, true);
	var $textLeft = this.$("textLeft");
	var $textRight = this.$("textRight");
	$textLeft.text(sDisplayValue);
	$textRight.text(sDisplayValue);

	return this;
};