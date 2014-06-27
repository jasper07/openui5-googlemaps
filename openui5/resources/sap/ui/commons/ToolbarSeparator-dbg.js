/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ToolbarSeparator.
jQuery.sap.declare("sap.ui.commons.ToolbarSeparator");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new ToolbarSeparator.
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
 * <li>{@link #getDisplayVisualSeparator displayVisualSeparator} : boolean (default: true)</li>
 * <li>{@link #getDesign design} : sap.ui.commons.ToolbarSeparatorDesign</li></ul>
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
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A small vertical line that is generally added to the tool bar between the items to visually separate them.
 * @extends sap.ui.core.Element
 * @implements sap.ui.commons.ToolbarItem
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.ToolbarSeparator
 */
sap.ui.core.Element.extend("sap.ui.commons.ToolbarSeparator", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.ui.commons.ToolbarItem"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"displayVisualSeparator" : {type : "boolean", group : "Appearance", defaultValue : true},
		"design" : {type : "sap.ui.commons.ToolbarSeparatorDesign", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.ToolbarSeparator with name <code>sClassName</code> 
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
 * @name sap.ui.commons.ToolbarSeparator.extend
 * @function
 */


/**
 * Getter for property <code>displayVisualSeparator</code>.
 * When set to false, there is no visual indication of separation by a vertical line but by a wider space.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>displayVisualSeparator</code>
 * @public
 * @name sap.ui.commons.ToolbarSeparator#getDisplayVisualSeparator
 * @function
 */

/**
 * Setter for property <code>displayVisualSeparator</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bDisplayVisualSeparator  new value for property <code>displayVisualSeparator</code>
 * @return {sap.ui.commons.ToolbarSeparator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ToolbarSeparator#setDisplayVisualSeparator
 * @function
 */


/**
 * Getter for property <code>design</code>.
 * Design of the Separator.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.commons.ToolbarSeparatorDesign} the value of property <code>design</code>
 * @public
 * @name sap.ui.commons.ToolbarSeparator#getDesign
 * @function
 */

/**
 * Setter for property <code>design</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.commons.ToolbarSeparatorDesign} oDesign  new value for property <code>design</code>
 * @return {sap.ui.commons.ToolbarSeparator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ToolbarSeparator#setDesign
 * @function
 */


// Start of sap\ui\commons\ToolbarSeparator.js
sap.ui.commons.ToolbarSeparator.prototype.getFocusDomRef = function() {
	return undefined;
};