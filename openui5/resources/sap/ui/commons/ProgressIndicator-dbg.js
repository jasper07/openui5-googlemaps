/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ProgressIndicator.
jQuery.sap.declare("sap.ui.commons.ProgressIndicator");
jQuery.sap.require("sap.ui.commons.library");
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
 * <li>{@link #getBarColor barColor} : sap.ui.core.BarColor (default: sap.ui.core.BarColor.NEUTRAL)</li>
 * <li>{@link #getDisplayValue displayValue} : string (default: '0%')</li>
 * <li>{@link #getPercentValue percentValue} : int (default: 0)</li>
 * <li>{@link #getShowValue showValue} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li></ul>
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
 * Shows the progress of a process in a graphical way. The indicator can be displayed with or without numerical values.
 * The filling can be displayed in color only, or additionally with the percentage rate. The indicator status can be interactive.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.ProgressIndicator
 */
sap.ui.core.Control.extend("sap.ui.commons.ProgressIndicator", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"barColor" : {type : "sap.ui.core.BarColor", group : "Appearance", defaultValue : sap.ui.core.BarColor.NEUTRAL},
		"displayValue" : {type : "string", group : "Appearance", defaultValue : '0%'},
		"percentValue" : {type : "int", group : "Data", defaultValue : 0},
		"showValue" : {type : "boolean", group : "Appearance", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.ProgressIndicator with name <code>sClassName</code> 
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
 * @name sap.ui.commons.ProgressIndicator.extend
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
 * @name sap.ui.commons.ProgressIndicator#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ProgressIndicator#setVisible
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
 * @name sap.ui.commons.ProgressIndicator#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ProgressIndicator#setEnabled
 * @function
 */


/**
 * Getter for property <code>barColor</code>.
 * The color of the bar. Enumeration sap.ui.core.BarColor provides CRITICAL (yellow), NEGATIVE (red), POSITIVE (green), NEUTRAL (blue) (default value).
 *
 * Default value is <code>NEUTRAL</code>
 *
 * @return {sap.ui.core.BarColor} the value of property <code>barColor</code>
 * @public
 * @name sap.ui.commons.ProgressIndicator#getBarColor
 * @function
 */

/**
 * Setter for property <code>barColor</code>.
 *
 * Default value is <code>NEUTRAL</code> 
 *
 * @param {sap.ui.core.BarColor} oBarColor  new value for property <code>barColor</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ProgressIndicator#setBarColor
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
 * @name sap.ui.commons.ProgressIndicator#getDisplayValue
 * @function
 */

/**
 * Setter for property <code>displayValue</code>.
 *
 * Default value is <code>0%</code> 
 *
 * @param {string} sDisplayValue  new value for property <code>displayValue</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ProgressIndicator#setDisplayValue
 * @function
 */


/**
 * Getter for property <code>percentValue</code>.
 * The numerical value for the displayed length of the progress bar.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>percentValue</code>
 * @public
 * @name sap.ui.commons.ProgressIndicator#getPercentValue
 * @function
 */

/**
 * Setter for property <code>percentValue</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iPercentValue  new value for property <code>percentValue</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ProgressIndicator#setPercentValue
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
 * @name sap.ui.commons.ProgressIndicator#getShowValue
 * @function
 */

/**
 * Setter for property <code>showValue</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowValue  new value for property <code>showValue</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ProgressIndicator#setShowValue
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
 * @name sap.ui.commons.ProgressIndicator#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ProgressIndicator#setWidth
 * @function
 */


// Start of sap\ui\commons\ProgressIndicator.js
/**
 * Function is called when ProgressIndicator is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.ProgressIndicator.prototype.onclick = function(oEvent) {

	// Set focus to whole ProgressIndicator control
	this.focus();

};

sap.ui.commons.ProgressIndicator.prototype.setEndBar = function () {

	var widthBar = this.getPercentValue();
	var widthBorder;
	var sBarColor = this.getBarColor();
	var time;

	this.oBar  = this.getDomRef("bar");
	this.oEnd  = this.getDomRef("end");
	this.oBox  = this.getDomRef("box");

	jQuery(this.oEnd).removeClass('sapUiProgIndEndHidden');

	switch (sBarColor) {
		case "POSITIVE":
			jQuery(this.oEnd).addClass('sapUiProgIndPosEnd');
			break;
		case "NEGATIVE":
			jQuery(this.oEnd).addClass('sapUiProgIndNegEnd');
			break;
		case "CRITICAL":
			jQuery(this.oEnd).addClass('sapUiProgIndCritEnd');
			break;
		case "NEUTRAL":
			jQuery(this.oEnd).addClass('sapUiProgIndEnd');
			break;
		default:
			jQuery(this.oEnd).addClass('sapUiProgIndEnd');
			break;
	}

	if (widthBar > 100) {
		widthBorder = (10000 / widthBar) + '%';
	}
	else {
		widthBorder = '100%';
	}

	if (widthBar > 100) {
		time = (widthBar - 100) * 20;
	}
	else {
		time = (100 - widthBar) * 20;
	}

	jQuery(this.oBox).animate({width: widthBorder}, 0, 'linear');

	if(this.bRtl){
		jQuery(this.oEnd).animate({right: widthBorder}, time, 'linear');
	}
	else {
		jQuery(this.oEnd).animate({left: widthBorder}, time, 'linear');
	}

	jQuery(this.oBar).animate({width: widthBar + '%'}, time, 'linear');
	if(!this.oThis){
		this.oThis = this.$();
	}
	this.oThis.attr('aria-valuenow', widthBar + '%');

};

sap.ui.commons.ProgressIndicator.prototype.setEndBarGoesBack = function (iPercentValue) {

	var widthBar = this.getPercentValue();
	var widthBorder;
	var sBarColor = this.getBarColor();
	var time;

	this.oBar  = this.getDomRef("bar");
	this.oEnd  = this.getDomRef("end");
	this.oBox  = this.getDomRef("box");

	if (iPercentValue > 100) {
		widthBorder = (10000 / iPercentValue) + '%';
	}
	else {
		widthBorder = '100%';
	}

	switch (sBarColor) {
		case "POSITIVE":
			jQuery(this.oEnd).removeClass('sapUiProgIndPosEnd');
			break;
		case "NEGATIVE":
			jQuery(this.oEnd).removeClass('sapUiProgIndNegEnd');
			break;
		case "CRITICAL":
			jQuery(this.oEnd).removeClass('sapUiProgIndCritEnd');
			break;
		case "NEUTRAL":
			jQuery(this.oEnd).removeClass('sapUiProgIndEnd');
			break;
		default:
			jQuery(this.oEnd).removeClass('sapUiProgIndEnd');
			break;
	}

	jQuery(this.oEnd).addClass('sapUiProgIndEndHidden');

	if (widthBar > 100) {
		time = (widthBar - 100) * 20;
	}
	else {
		time = (100 - widthBar) * 20;
	}

	jQuery(this.oBox).animate({width: widthBorder}, 0, 'linear');

	if(this.bRtl){
		jQuery(this.oEnd).animate({right: widthBorder}, time, 'linear');
	}
	else {
		jQuery(this.oEnd).animate({left: widthBorder}, time, 'linear');
	}

	jQuery(this.oBar).animate({width: widthBar + '%'}, time, 'linear');
	if(!this.oThis){
		this.oThis = this.$();
	}
	this.oThis.attr('aria-valuenow', widthBar + '%');

};

/**
 * Property setter for the PercentValue
 * A new rendering is not necessary, only the bar has to be moved.
 *
 * @param iPercentValue
 * @return {sap.ui.commons.ProgressIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ProgressIndicator.prototype.setPercentValue = function(iPercentValue) {

	var widthBar = this.getPercentValue();
	var widthBorder;
	var sBarColor = this.getBarColor();

	this.oBar  = this.getDomRef("bar");
	this.oEnd  = this.getDomRef("end");
	this.oBox  = this.getDomRef("box");

	var that = this;
	var time;

	if (iPercentValue < 0) {
		iPercentValue = 0;
	}

	if (iPercentValue > 100) {
		widthBorder = (10000 / iPercentValue) + '%';
	}
	else {
		widthBorder = '100%';
	}

	if(!this.oBar){
		// Not already rendered -> return and render
		time = iPercentValue * 20;
		this.setProperty('percentValue', iPercentValue, true); // No re-rendering!
		jQuery(this.oBar).animate({width: iPercentValue + '%'}, time, 'linear');
		return this;
	}

	if (iPercentValue > 100 && widthBar <= 100) {
		time = (100 - widthBar) * 20;
		this.setProperty( 'percentValue', iPercentValue, true ); // Do not render complete control again
		jQuery(this.oBar).animate({width: '100%'}, time, 'linear', function() {
		that.setEndBar();
		});
	}
	else if (iPercentValue <= 100 && widthBar > 100) {
		time = (widthBar - 100) * 20;
		this.setProperty( 'percentValue', iPercentValue, true ); // Do not render complete control again
		jQuery(this.oBar).animate({width: '100%'}, time, 'linear', function() {
		that.setEndBarGoesBack();
		});
	}
	else if (iPercentValue > 100 && widthBar > 100) {
		if (iPercentValue > widthBar) {
			time = (iPercentValue - widthBar) * 20;
		}
		else {
			time = (widthBar - iPercentValue) * 20;
		}
		widthBorder = (10000 / iPercentValue) + '%';
		this.setProperty( 'percentValue', iPercentValue, true ); // Do not render complete control again
		jQuery(this.oBox).animate({width: widthBorder}, 0, 'linear');

		if(this.bRtl){
			jQuery(this.oEnd).animate({right: widthBorder}, time, 'linear');
		}
		else {
			jQuery(this.oEnd).animate({left: widthBorder}, time, 'linear');
		}

		jQuery(this.oBar).animate({width: iPercentValue + '%'}, time, 'linear', function() {
		});
		if(!this.oThis){
			this.oThis = this.$();
		}
		this.oThis.attr('aria-valuenow', iPercentValue + '%');
	}
	else {
		if (iPercentValue > widthBar) {
			time = (iPercentValue - widthBar) * 20;
		}
		else {
			time = (widthBar - iPercentValue) * 20;
		}
		this.setProperty( 'percentValue', iPercentValue, true ); // Do not render complete control again
		jQuery(this.oBar).animate({width: iPercentValue + '%'}, time, 'linear');
		if(!this.oThis){
			this.oThis = this.$();
		}
		this.oThis.attr('aria-valuenow', iPercentValue + '%');
	}

	return this;
};
