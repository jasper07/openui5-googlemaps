/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ObjectStatus.
jQuery.sap.declare("sap.m.ObjectStatus");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ObjectStatus.
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
 * <li>{@link #getState state} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
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
 * Status information that may be either text with a value state, or an icon.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.ObjectStatus
 */
sap.ui.core.Control.extend("sap.m.ObjectStatus", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"text" : {type : "string", group : "Misc", defaultValue : null},
		"state" : {type : "sap.ui.core.ValueState", group : "Misc", defaultValue : sap.ui.core.ValueState.None},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"iconDensityAware" : {type : "boolean", group : "Appearance", defaultValue : true},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true}
	}
}});


/**
 * Creates a new subclass of class sap.m.ObjectStatus with name <code>sClassName</code> 
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
 * @name sap.m.ObjectStatus.extend
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * Text value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.m.ObjectStatus#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.ObjectStatus} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectStatus#setText
 * @function
 */


/**
 * Getter for property <code>state</code>.
 * Text value state.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>state</code>
 * @public
 * @name sap.m.ObjectStatus#getState
 * @function
 */

/**
 * Setter for property <code>state</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oState  new value for property <code>state</code>
 * @return {sap.m.ObjectStatus} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectStatus#setState
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Icon URI. This may be either an icon font or image path.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.m.ObjectStatus#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.ObjectStatus} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectStatus#setIcon
 * @function
 */


/**
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * 
 * If bandwidth is the key for the application, set this value to false.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * @name sap.m.ObjectStatus#getIconDensityAware
 * @function
 */

/**
 * Setter for property <code>iconDensityAware</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.ObjectStatus} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectStatus#setIconDensityAware
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Shows or hides the ObjectStatus instance
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.ObjectStatus#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.ObjectStatus} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectStatus#setVisible
 * @function
 */


// Start of sap\m\ObjectStatus.js
///**
// * This file defines behavior for the control
// */
jQuery.sap.require("sap.ui.core.IconPool");


/**
 * Called when the control is destroyed.
 * 
 * @private
 */
sap.m.ObjectStatus.prototype.exit = function() {
	if(this._oImageControl) {
		this._oImageControl.destroy();
		this._oImageControl = null;
	}
};

/**
 * Lazy load feed icon image.
 *
 * @private
 */
sap.m.ObjectStatus.prototype._getImageControl = function() {
	var sImgId = this.getId() + '-icon';
	var mProperties = { 
		src : this.getIcon(),
		densityAware : this.getIconDensityAware()
	};
	
	this._oImageControl = sap.m.ImageHelper.getImageControl(sImgId, this._oImageControl, this, mProperties);
	
	return this._oImageControl;
};

/**
 * @private
 * @returns {boolean}
 */
sap.m.ObjectStatus.prototype._isEmpty = function() {
	
	return !(this.getText().trim() || this.getIcon().trim());
};