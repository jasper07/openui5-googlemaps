/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.ResponsiveFlowLayout.
jQuery.sap.declare("sap.ui.commons.layout.ResponsiveFlowLayout");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.layout.ResponsiveFlowLayout");


/**
 * Constructor for a new layout/ResponsiveFlowLayout.
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
 * In addition, all settings applicable to the base type {@link sap.ui.layout.ResponsiveFlowLayout#constructor sap.ui.layout.ResponsiveFlowLayout}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This is a layout where several controls can be added. These controls are blown up to fit a whole line. If the window resizes the controls are moved between the lines and resized again.
 * @extends sap.ui.layout.ResponsiveFlowLayout
 *
 * @author SAP 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.9.1
 * @deprecated Since version 1.16.0. 
 * moved to sap.ui.layout library. Please use this one.
 * @name sap.ui.commons.layout.ResponsiveFlowLayout
 */
sap.ui.layout.ResponsiveFlowLayout.extend("sap.ui.commons.layout.ResponsiveFlowLayout", { metadata : {

	// ---- object ----
	deprecated : true,

	// ---- control specific ----
	library : "sap.ui.commons"
}});


/**
 * Creates a new subclass of class sap.ui.commons.layout.ResponsiveFlowLayout with name <code>sClassName</code> 
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
 * @name sap.ui.commons.layout.ResponsiveFlowLayout.extend
 * @function
 */


// Start of sap\ui\commons\layout\ResponsiveFlowLayout.js
