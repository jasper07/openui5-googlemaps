/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.ResponsiveFlowLayoutData.
jQuery.sap.declare("sap.ui.commons.layout.ResponsiveFlowLayoutData");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.layout.ResponsiveFlowLayoutData");


/**
 * Constructor for a new layout/ResponsiveFlowLayoutData.
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
 * <ul></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.layout.ResponsiveFlowLayoutData#constructor sap.ui.layout.ResponsiveFlowLayoutData}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This is a LayoutData Element that can be added to a control if this control is used within a ResponsiveFlowLayout
 * @extends sap.ui.layout.ResponsiveFlowLayoutData
 *
 * @author SAP 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.9.1
 * @deprecated Since version 1.16.0. 
 * moved to sap.ui.layout library. Please use this one.
 * @name sap.ui.commons.layout.ResponsiveFlowLayoutData
 */
sap.ui.layout.ResponsiveFlowLayoutData.extend("sap.ui.commons.layout.ResponsiveFlowLayoutData", { metadata : {

	// ---- object ----
	deprecated : true,

	// ---- control specific ----
	library : "sap.ui.commons"
}});


/**
 * Creates a new subclass of class sap.ui.commons.layout.ResponsiveFlowLayoutData with name <code>sClassName</code> 
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
 * @name sap.ui.commons.layout.ResponsiveFlowLayoutData.extend
 * @function
 */


// Start of sap\ui\commons\layout\ResponsiveFlowLayoutData.js
/*!
 * @copyright@
 */

/* Overwrite to have right "since" in there */

/**
* Getter for property <code>margin</code>.
* This property prevents any margin of the element if set to false
*
* Default value is <code>true</code>
*
* @return {boolean} the value of property <code>margin</code>
* @public
* @since 1.11.0
* @name sap.ui.commons.layout.ResponsiveFlowLayoutData#getMargin
* @function
*/
/**
* Setter for property <code>margin</code>.
*
* Default value is <code>true</code>
*
* @param {boolean} bMargin new value for property <code>margin</code>
* @return {sap.ui.layout.ResponsiveFlowLayoutData} <code>this</code> to allow method chaining
* @public
* @since 1.11.0
* @name sap.ui.commons.layout.ResponsiveFlowLayoutData#setMargin
* @function
*/