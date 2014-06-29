/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.form.FormElement.
jQuery.sap.declare("sap.ui.commons.form.FormElement");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.layout.form.FormElement");


/**
 * Constructor for a new form/FormElement.
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
 * In addition, all settings applicable to the base type {@link sap.ui.layout.form.FormElement#constructor sap.ui.layout.form.FormElement}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A form element is a combination of one label and different controls associated to this label.
 * @extends sap.ui.layout.form.FormElement
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.9.1
 * @deprecated Since version 1.16.0. 
 * moved to sap.ui.layout library. Please use this one.
 * @name sap.ui.commons.form.FormElement
 */
sap.ui.layout.form.FormElement.extend("sap.ui.commons.form.FormElement", { metadata : {

	// ---- object ----
	deprecated : true,

	// ---- control specific ----
	library : "sap.ui.commons"
}});


/**
 * Creates a new subclass of class sap.ui.commons.form.FormElement with name <code>sClassName</code> 
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
 * @name sap.ui.commons.form.FormElement.extend
 * @function
 */


// Start of sap\ui\commons\form\FormElement.js
/**
 * This file defines behavior for the control,
 */

/* Overwrite to have right "since" in there */

/**
* Getter for property <code>visible</code>.
* Invisible FormElements are not rendered.
*
* Default value is <code>true</code>
*
* @return {boolean} the value of property <code>visible</code>
* @public
* @since 1.12.0
* @name sap.ui.commons.form.FormElement#getVisible
* @function
*/
/**
* Setter for property <code>visible</code>.
*
* Default value is <code>true</code>
*
* @param {boolean} bVisible new value for property <code>visible</code>
* @return {sap.ui.commons.form.FormElement} <code>this</code> to allow method chaining
* @public
* @since 1.12.0
* @name sap.ui.commons.form.FormElement#setVisible
* @function
*/