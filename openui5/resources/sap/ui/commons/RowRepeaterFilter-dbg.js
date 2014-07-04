/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.RowRepeaterFilter.
jQuery.sap.declare("sap.ui.commons.RowRepeaterFilter");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new RowRepeaterFilter.
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
 * <li>{@link #getIcon icon} : string</li>
 * <li>{@link #getFilters filters} : object</li></ul>
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
 * This element is used by the RowRepeater and allows to define a filter in this context along with the related data such as a text and an icon.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.RowRepeaterFilter
 */
sap.ui.core.Element.extend("sap.ui.commons.RowRepeaterFilter", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"text" : {type : "string", group : "Appearance", defaultValue : null},
		"icon" : {type : "string", group : "Appearance", defaultValue : null},
		"filters" : {type : "object", group : "Data", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.RowRepeaterFilter with name <code>sClassName</code> 
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
 * @name sap.ui.commons.RowRepeaterFilter.extend
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * The filter title if needed for display.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.commons.RowRepeaterFilter#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.RowRepeaterFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RowRepeaterFilter#setText
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * The filter icon if needed for display.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * @name sap.ui.commons.RowRepeaterFilter#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.commons.RowRepeaterFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RowRepeaterFilter#setIcon
 * @function
 */


/**
 * Getter for property <code>filters</code>.
 * The set of filter objects.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>filters</code>
 * @public
 * @name sap.ui.commons.RowRepeaterFilter#getFilters
 * @function
 */

/**
 * Setter for property <code>filters</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oFilters  new value for property <code>filters</code>
 * @return {sap.ui.commons.RowRepeaterFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RowRepeaterFilter#setFilters
 * @function
 */


// Start of sap\ui\commons\RowRepeaterFilter.js
///**
// * This file defines behavior for the control,
// */
//sap.ui.commons.RowRepeaterFilter.prototype.init = function(){
//   // do something for initialization...
//};