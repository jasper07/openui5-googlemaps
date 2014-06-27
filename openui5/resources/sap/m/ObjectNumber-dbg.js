/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ObjectNumber.
jQuery.sap.declare("sap.m.ObjectNumber");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ObjectNumber.
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
 * <li>{@link #getNumber number} : string</li>
 * <li>{@link #getNumberUnit numberUnit} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEmphasized emphasized} : boolean (default: true)</li>
 * <li>{@link #getState state} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getUnit unit} : string</li></ul>
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
 * ObjectNumber displays number and number unit properties for an object. The number can be displayed using semantic colors to provide addition meaning about the object to the user.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.m.ObjectNumber
 */
sap.ui.core.Control.extend("sap.m.ObjectNumber", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"number" : {type : "string", group : "Misc", defaultValue : null},
		"numberUnit" : {type : "string", group : "Misc", defaultValue : null, deprecated: true},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"emphasized" : {type : "boolean", group : "Appearance", defaultValue : true},
		"state" : {type : "sap.ui.core.ValueState", group : "Misc", defaultValue : sap.ui.core.ValueState.None},
		"unit" : {type : "string", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.m.ObjectNumber with name <code>sClassName</code> 
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
 * @name sap.m.ObjectNumber.extend
 * @function
 */


/**
 * Getter for property <code>number</code>.
 * Number field of the object number
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>number</code>
 * @public
 * @name sap.m.ObjectNumber#getNumber
 * @function
 */

/**
 * Setter for property <code>number</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumber  new value for property <code>number</code>
 * @return {sap.m.ObjectNumber} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectNumber#setNumber
 * @function
 */


/**
 * Getter for property <code>numberUnit</code>.
 * Number units qualifier
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>numberUnit</code>
 * @public
 * @deprecated Since version 1.16.1. 
 * 
 * Replaced by unit property due to the number before unit is redundant.
 * @name sap.m.ObjectNumber#getNumberUnit
 * @function
 */

/**
 * Setter for property <code>numberUnit</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumberUnit  new value for property <code>numberUnit</code>
 * @return {sap.m.ObjectNumber} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.1. 
 * 
 * Replaced by unit property due to the number before unit is redundant.
 * @name sap.m.ObjectNumber#setNumberUnit
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Indicates if object number is visible. Invisible object number is not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.ObjectNumber#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.ObjectNumber} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectNumber#setVisible
 * @function
 */


/**
 * Getter for property <code>emphasized</code>.
 * Indicates if the object number should appear emphasized
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>emphasized</code>
 * @public
 * @name sap.m.ObjectNumber#getEmphasized
 * @function
 */

/**
 * Setter for property <code>emphasized</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEmphasized  new value for property <code>emphasized</code>
 * @return {sap.m.ObjectNumber} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectNumber#setEmphasized
 * @function
 */


/**
 * Getter for property <code>state</code>.
 * The object number's value state. Setting this state will cause the number to be rendered in state-specific colors (only blue-crystal theme).
 *
 * Default value is <code>sap.ui.core.ValueState.None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>state</code>
 * @public
 * @name sap.m.ObjectNumber#getState
 * @function
 */

/**
 * Setter for property <code>state</code>.
 *
 * Default value is <code>sap.ui.core.ValueState.None</code> 
 *
 * @param {sap.ui.core.ValueState} oState  new value for property <code>state</code>
 * @return {sap.m.ObjectNumber} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectNumber#setState
 * @function
 */


/**
 * Getter for property <code>unit</code>.
 * Number units qualifier. If numberUnit and unit are both set, the unit value is used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>unit</code>
 * @public
 * @since 1.16.1
 * @name sap.m.ObjectNumber#getUnit
 * @function
 */

/**
 * Setter for property <code>unit</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUnit  new value for property <code>unit</code>
 * @return {sap.m.ObjectNumber} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.1
 * @name sap.m.ObjectNumber#setUnit
 * @function
 */


// Start of sap\m\ObjectNumber.js
///**
// * This file defines behavior for the control,
// */

/**
 * String to prefix css class for number status to be used in
 * controler and renderer
 * @private 
 */
sap.m.ObjectNumber.prototype._sCSSPrefixObjNumberStatus = 'sapMObjectNumberStatus';

/**
 * API method to set the object number's value state
 *
 * @param sState the Object Number's value state
 * @public
 */
sap.m.ObjectNumber.prototype.setState = function(sState) {
	//remove the current value state css class
	this.$().removeClass(this._sCSSPrefixObjNumberStatus + this.getState());

	//do suppress rerendering
	this.setProperty("state", sState, true);

	//now set the new css state class
	this.$().addClass(this._sCSSPrefixObjNumberStatus + this.getState());

	return this;
};