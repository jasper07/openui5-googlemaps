/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.HorizontalDivider.
jQuery.sap.declare("sap.ui.commons.HorizontalDivider");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new HorizontalDivider.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getType type} : sap.ui.commons.HorizontalDividerType (default: sap.ui.commons.HorizontalDividerType.Area)</li>
 * <li>{@link #getHeight height} : sap.ui.commons.HorizontalDividerHeight (default: sap.ui.commons.HorizontalDividerHeight.Medium)</li></ul>
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
 * Divides the screen in visual areas.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.HorizontalDivider
 */
sap.ui.core.Control.extend("sap.ui.commons.HorizontalDivider", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : '100%'},
		"type" : {type : "sap.ui.commons.HorizontalDividerType", group : "Appearance", defaultValue : sap.ui.commons.HorizontalDividerType.Area},
		"height" : {type : "sap.ui.commons.HorizontalDividerHeight", group : "Appearance", defaultValue : sap.ui.commons.HorizontalDividerHeight.Medium}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.HorizontalDivider with name <code>sClassName</code> 
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
 * @name sap.ui.commons.HorizontalDivider.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible dividers are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.HorizontalDivider#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.HorizontalDivider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.HorizontalDivider#setVisible
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Defines the width of the divider.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.HorizontalDivider#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.HorizontalDivider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.HorizontalDivider#setWidth
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Defines the type of the divider.
 *
 * Default value is <code>Area</code>
 *
 * @return {sap.ui.commons.HorizontalDividerType} the value of property <code>type</code>
 * @public
 * @name sap.ui.commons.HorizontalDivider#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>Area</code> 
 *
 * @param {sap.ui.commons.HorizontalDividerType} oType  new value for property <code>type</code>
 * @return {sap.ui.commons.HorizontalDivider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.HorizontalDivider#setType
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Defines the height of the divider.
 *
 * Default value is <code>Medium</code>
 *
 * @return {sap.ui.commons.HorizontalDividerHeight} the value of property <code>height</code>
 * @public
 * @name sap.ui.commons.HorizontalDivider#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>Medium</code> 
 *
 * @param {sap.ui.commons.HorizontalDividerHeight} oHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.HorizontalDivider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.HorizontalDivider#setHeight
 * @function
 */


// Start of sap\ui\commons\HorizontalDivider.js
// No Behaviour