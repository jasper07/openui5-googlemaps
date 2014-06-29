/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.GroupHeaderListItem.
jQuery.sap.declare("sap.m.GroupHeaderListItem");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.ListItemBase");


/**
 * Constructor for a new GroupHeaderListItem.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getCount count} : string</li>
 * <li>{@link #getUpperCase upperCase} : boolean (default: true)</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The group header list item is used to display the title of a group and act as separator between groups in Lists.
 * 
 * There are several API parts inherited from ListItemBase which do not apply here:
 * The properties "type", "unread", "selected" and "counter" are currently ignored.
 * Tap events will not be fired.
 * 
 * @extends sap.m.ListItemBase
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.m.GroupHeaderListItem
 */
sap.m.ListItemBase.extend("sap.m.GroupHeaderListItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"title" : {type : "string", group : "Data", defaultValue : null},
		"count" : {type : "string", group : "Data", defaultValue : null},
		"upperCase" : {type : "boolean", group : "Appearance", defaultValue : true}
	}
}});


/**
 * Creates a new subclass of class sap.m.GroupHeaderListItem with name <code>sClassName</code> 
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
 * @name sap.m.GroupHeaderListItem.extend
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * The title of the group header.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.GroupHeaderListItem#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.GroupHeaderListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.GroupHeaderListItem#setTitle
 * @function
 */


/**
 * Getter for property <code>count</code>.
 * A text to be displayed in the group header in brackets next to the group title. Usually the count of items in the group, but it could also be an amount which represents the sum of all amounts in the group.
 * Will not be displayed if not set.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>count</code>
 * @public
 * @name sap.m.GroupHeaderListItem#getCount
 * @function
 */

/**
 * Setter for property <code>count</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sCount  new value for property <code>count</code>
 * @return {sap.m.GroupHeaderListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.GroupHeaderListItem#setCount
 * @function
 */


/**
 * Getter for property <code>upperCase</code>.
 * Title will be put to capital letters by default, otherwise set this property to 'false'
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>upperCase</code>
 * @public
 * @since 1.13.2
 * @name sap.m.GroupHeaderListItem#getUpperCase
 * @function
 */

/**
 * Setter for property <code>upperCase</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bUpperCase  new value for property <code>upperCase</code>
 * @return {sap.m.GroupHeaderListItem} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.2
 * @name sap.m.GroupHeaderListItem#setUpperCase
 * @function
 */


// Start of sap\m\GroupHeaderListItem.js

// GroupHeaderListItem is not selectable
sap.m.GroupHeaderListItem.prototype.isSelectable = function() {
	return false;
};

sap.m.GroupHeaderListItem.prototype.shouldClearLastValue = function() {
	return true;
};

sap.m.GroupHeaderListItem.prototype.ontouchstart = function(oEvent) {
	oEvent.setMarked();
};

sap.m.GroupHeaderListItem.prototype.onBeforeRendering = function() {
	var oParent = this.getParent();
	if (oParent && sap.m.Table && oParent instanceof sap.m.Table) {
		// clear column last value to reset cell merging
		oParent.getColumns().forEach(function(oColumn) {
			oColumn.clearLastValue();
		});
	}
};