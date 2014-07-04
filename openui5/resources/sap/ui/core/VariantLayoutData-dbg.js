/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.VariantLayoutData.
sap.ui.define(['./library','./LayoutData'], function() {
	"use strict";


/**
 * Constructor for a new VariantLayoutData.
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
 * <ul>
 * <li>{@link #getMultipleLayoutData multipleLayoutData} : sap.ui.core.LayoutData[]</li></ul>
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
 * Allows to add multiple LayoutData to one control in case that a easy switch of layouts (e.g. in a Form) is needed.
 * @extends sap.ui.core.LayoutData
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.9.2
 * @name sap.ui.core.VariantLayoutData
 */
sap.ui.core.LayoutData.extend("sap.ui.core.VariantLayoutData", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.core",
	aggregations : {
    	"multipleLayoutData" : {type : "sap.ui.core.LayoutData", multiple : true, singularName : "multipleLayoutData"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.core.VariantLayoutData with name <code>sClassName</code> 
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
 * @name sap.ui.core.VariantLayoutData.extend
 * @function
 */


/**
 * Getter for aggregation <code>multipleLayoutData</code>.<br/>
 * Allows multiple LayoutData.
 * 
 * @return {sap.ui.core.LayoutData[]}
 * @public
 * @name sap.ui.core.VariantLayoutData#getMultipleLayoutData
 * @function
 */


/**
 * Inserts a multipleLayoutData into the aggregation named <code>multipleLayoutData</code>.
 *
 * @param {sap.ui.core.LayoutData}
 *          oMultipleLayoutData the multipleLayoutData to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the multipleLayoutData should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the multipleLayoutData is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the multipleLayoutData is inserted at 
 *             the last position        
 * @return {sap.ui.core.VariantLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.VariantLayoutData#insertMultipleLayoutData
 * @function
 */

/**
 * Adds some multipleLayoutData <code>oMultipleLayoutData</code> 
 * to the aggregation named <code>multipleLayoutData</code>.
 *
 * @param {sap.ui.core.LayoutData}
 *            oMultipleLayoutData the multipleLayoutData to add; if empty, nothing is inserted
 * @return {sap.ui.core.VariantLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.VariantLayoutData#addMultipleLayoutData
 * @function
 */

/**
 * Removes an multipleLayoutData from the aggregation named <code>multipleLayoutData</code>.
 *
 * @param {int | string | sap.ui.core.LayoutData} vMultipleLayoutData the multipleLayoutData to remove or its index or id
 * @return {sap.ui.core.LayoutData} the removed multipleLayoutData or null
 * @public
 * @name sap.ui.core.VariantLayoutData#removeMultipleLayoutData
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>multipleLayoutData</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.LayoutData[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.core.VariantLayoutData#removeAllMultipleLayoutData
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.LayoutData</code> in the aggregation named <code>multipleLayoutData</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.LayoutData}
 *            oMultipleLayoutData the multipleLayoutData whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.core.VariantLayoutData#indexOfMultipleLayoutData
 * @function
 */
	

/**
 * Destroys all the multipleLayoutData in the aggregation 
 * named <code>multipleLayoutData</code>.
 * @return {sap.ui.core.VariantLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.VariantLayoutData#destroyMultipleLayoutData
 * @function
 */


// Start of sap/ui/core/VariantLayoutData.js

	return sap.ui.core.VariantLayoutData;

}, /* bExport = */ true);
