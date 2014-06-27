/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ResponsiveContainerRange.
jQuery.sap.declare("sap.ui.commons.ResponsiveContainerRange");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ResponsiveContainerRange.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '')</li>
 * <li>{@link #getKey key} : string (default: '')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getContent content} : string | sap.ui.core.Control</li></ul>
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
 * Defines a range for the ResponsiveContainer
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.ResponsiveContainerRange
 */
sap.ui.core.Control.extend("sap.ui.commons.ResponsiveContainerRange", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : ''},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : ''},
		"key" : {type : "string", group : "Misc", defaultValue : ''}
	},
	associations : {
		"content" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.ResponsiveContainerRange with name <code>sClassName</code> 
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
 * @name sap.ui.commons.ResponsiveContainerRange.extend
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The minimal width for this range to be displayed.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.ResponsiveContainerRange#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.ResponsiveContainerRange} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ResponsiveContainerRange#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * The minimal height for this range to be displayed.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.commons.ResponsiveContainerRange#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.ResponsiveContainerRange} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ResponsiveContainerRange#setHeight
 * @function
 */


/**
 * Getter for property <code>key</code>.
 * A key which can be used to identify the range (optional).
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>key</code>
 * @public
 * @name sap.ui.commons.ResponsiveContainerRange#getKey
 * @function
 */

/**
 * Setter for property <code>key</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.ui.commons.ResponsiveContainerRange} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ResponsiveContainerRange#setKey
 * @function
 */


/**
 * The content to show for this range (optional).
 *
 * @return {string} Id of the element which is the current target of the <code>content</code> association, or null
 * @public
 * @name sap.ui.commons.ResponsiveContainerRange#getContent
 * @function
 */

/**
 * The content to show for this range (optional).
 *
 * @param {string | sap.ui.core.Control} vContent 
 *    Id of an element which becomes the new target of this <code>content</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.commons.ResponsiveContainerRange} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ResponsiveContainerRange#setContent
 * @function
 */


	
// Start of sap\ui\commons\ResponsiveContainerRange.js
