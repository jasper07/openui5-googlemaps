/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ViewSettingsFilterItem.
jQuery.sap.declare("sap.m.ViewSettingsFilterItem");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.ViewSettingsItem");


/**
 * Constructor for a new ViewSettingsFilterItem.
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
 * <li>{@link #getMultiSelect multiSelect} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.m.ViewSettingsItem[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.ViewSettingsItem#constructor sap.m.ViewSettingsItem}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A ViewSettingsFilterItem is used for modelling filter behaviour in the ViewSettingsDialog.
 * @extends sap.m.ViewSettingsItem
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16
 * @name sap.m.ViewSettingsFilterItem
 */
sap.m.ViewSettingsItem.extend("sap.m.ViewSettingsFilterItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"multiSelect" : {type : "boolean", group : "Behavior", defaultValue : true}
	},
	aggregations : {
    	"items" : {type : "sap.m.ViewSettingsItem", multiple : true, singularName : "item"}
	}
}});


/**
 * Creates a new subclass of class sap.m.ViewSettingsFilterItem with name <code>sClassName</code> 
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
 * @name sap.m.ViewSettingsFilterItem.extend
 * @function
 */


/**
 * Getter for property <code>multiSelect</code>.
 * If set to (true), multi selection will be allowed for the items aggregation.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>multiSelect</code>
 * @public
 * @name sap.m.ViewSettingsFilterItem#getMultiSelect
 * @function
 */

/**
 * Setter for property <code>multiSelect</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bMultiSelect  new value for property <code>multiSelect</code>
 * @return {sap.m.ViewSettingsFilterItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsFilterItem#setMultiSelect
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * Items that are logically grouped under this filter item. They are used to display filter details in the ViewSettingsDialog.
 * 
 * @return {sap.m.ViewSettingsItem[]}
 * @public
 * @name sap.m.ViewSettingsFilterItem#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.m.ViewSettingsItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.m.ViewSettingsFilterItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsFilterItem#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.m.ViewSettingsItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.m.ViewSettingsFilterItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsFilterItem#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.m.ViewSettingsItem} vItem the item to remove or its index or id
 * @return {sap.m.ViewSettingsItem} the removed item or null
 * @public
 * @name sap.m.ViewSettingsFilterItem#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.ViewSettingsItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.ViewSettingsFilterItem#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.m.ViewSettingsItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.ViewSettingsItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.ViewSettingsFilterItem#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.m.ViewSettingsFilterItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsFilterItem#destroyItems
 * @function
 */


// Start of sap\m\ViewSettingsFilterItem.js
