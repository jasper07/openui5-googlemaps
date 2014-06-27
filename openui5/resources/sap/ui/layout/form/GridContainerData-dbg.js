/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.layout.form.GridContainerData.
jQuery.sap.declare("sap.ui.layout.form.GridContainerData");
jQuery.sap.require("sap.ui.layout.library");
jQuery.sap.require("sap.ui.core.LayoutData");


/**
 * Constructor for a new form/GridContainerData.
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
 * <li>{@link #getHalfGrid halfGrid} : boolean (default: false)</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Grid layout specific properties for FormContainers.
 * The width and height properties of the elements are ignored since the witdh and heights are defined by the grid cells.
 * @extends sap.ui.core.LayoutData
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16.0
 * @name sap.ui.layout.form.GridContainerData
 */
sap.ui.core.LayoutData.extend("sap.ui.layout.form.GridContainerData", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.layout",
	properties : {
		"halfGrid" : {type : "boolean", group : "Misc", defaultValue : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.layout.form.GridContainerData with name <code>sClassName</code> 
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
 * @name sap.ui.layout.form.GridContainerData.extend
 * @function
 */


/**
 * Getter for property <code>halfGrid</code>.
 * If set the container takes half the width of the form (8cells), if not it's the full width (16 cells).
 * If the GridLayout is set to be singleColumn the full width of the Grid is only 8 cells. So containers are rendered only one per row.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>halfGrid</code>
 * @public
 * @name sap.ui.layout.form.GridContainerData#getHalfGrid
 * @function
 */

/**
 * Setter for property <code>halfGrid</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bHalfGrid  new value for property <code>halfGrid</code>
 * @return {sap.ui.layout.form.GridContainerData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.GridContainerData#setHalfGrid
 * @function
 */


// Start of sap\ui\layout\form\GridContainerData.js
///**
// * This file defines behavior for the control, 
// */
//sap.ui.commons.form.GridLayoutdata.prototype.init = function(){
//   // do something for initialization...
//};
