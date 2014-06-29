/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.layout.form.GridElementData.
jQuery.sap.declare("sap.ui.layout.form.GridElementData");
jQuery.sap.require("sap.ui.layout.library");
jQuery.sap.require("sap.ui.core.LayoutData");


/**
 * Constructor for a new form/GridElementData.
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
 * <li>{@link #getHCells hCells} : sap.ui.layout.form.GridElementCells (default: 'auto')</li>
 * <li>{@link #getVCells vCells} : int (default: 1)</li></ul>
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
 * The grid specific layout data for FormElement fields.
 * The width property of the elements is ignored since the width is defined by grid cells.
 * @extends sap.ui.core.LayoutData
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16.0
 * @name sap.ui.layout.form.GridElementData
 */
sap.ui.core.LayoutData.extend("sap.ui.layout.form.GridElementData", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.layout",
	properties : {
		"hCells" : {type : "sap.ui.layout.form.GridElementCells", group : "Appearance", defaultValue : 'auto'},
		"vCells" : {type : "int", group : "Appearance", defaultValue : 1}
	}
}});


/**
 * Creates a new subclass of class sap.ui.layout.form.GridElementData with name <code>sClassName</code> 
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
 * @name sap.ui.layout.form.GridElementData.extend
 * @function
 */


/**
 * Getter for property <code>hCells</code>.
 * Number of cells in horizontal direction.
 * If "auto" the size is determined by the number of fields and the available cells. For Labels the auto size is 3 cells.
 * If "full" only one field is allowed within the element. It gets the full width of the row and the label is displayed above. For Labels Full size has no effect.
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.layout.form.GridElementCells} the value of property <code>hCells</code>
 * @public
 * @name sap.ui.layout.form.GridElementData#getHCells
 * @function
 */

/**
 * Setter for property <code>hCells</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.layout.form.GridElementCells} sHCells  new value for property <code>hCells</code>
 * @return {sap.ui.layout.form.GridElementData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.GridElementData#setHCells
 * @function
 */


/**
 * Getter for property <code>vCells</code>.
 * Number of cells in vertical direction.
 * This property has no effect for labels.
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>vCells</code>
 * @public
 * @name sap.ui.layout.form.GridElementData#getVCells
 * @function
 */

/**
 * Setter for property <code>vCells</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iVCells  new value for property <code>vCells</code>
 * @return {sap.ui.layout.form.GridElementData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.GridElementData#setVCells
 * @function
 */


// Start of sap\ui\layout\form\GridElementData.js
///**
// * This file defines behavior for the control, 
// */
//sap.ui.commons.form.GridElementData.prototype.init = function(){
//   // do something for initialization...
//};
