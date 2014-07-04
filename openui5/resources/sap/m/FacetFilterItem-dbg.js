/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.FacetFilterItem.
jQuery.sap.declare("sap.m.FacetFilterItem");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.ListItemBase");


/**
 * Constructor for a new FacetFilterItem.
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
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getCount count} : int</li></ul>
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
 * Represents a value for the FacetFilterList control.
 * @extends sap.m.ListItemBase
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.FacetFilterItem
 */
sap.m.ListItemBase.extend("sap.m.FacetFilterItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"key" : {type : "string", group : "Data", defaultValue : null},
		"text" : {type : "string", group : "Misc", defaultValue : null},
		"count" : {type : "int", group : "Misc", defaultValue : null, deprecated: true}
	}
}});


/**
 * Creates a new subclass of class sap.m.FacetFilterItem with name <code>sClassName</code> 
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
 * @name sap.m.FacetFilterItem.extend
 * @function
 */


/**
 * Getter for property <code>key</code>.
 * Can be used as input for subsequent actions.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>key</code>
 * @public
 * @name sap.m.FacetFilterItem#getKey
 * @function
 */

/**
 * Setter for property <code>key</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.m.FacetFilterItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterItem#setKey
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * The text to be displayed for the item.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.m.FacetFilterItem#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.FacetFilterItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterItem#setText
 * @function
 */


/**
 * Getter for property <code>count</code>.
 * Number of objects that match this item in the target data set.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>count</code>
 * @public
 * @deprecated Since version 7.20.0. 
 * Use setCounter instead.
 * @name sap.m.FacetFilterItem#getCount
 * @function
 */

/**
 * Setter for property <code>count</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iCount  new value for property <code>count</code>
 * @return {sap.m.FacetFilterItem} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 7.20.0. 
 * Use setCounter instead.
 * @name sap.m.FacetFilterItem#setCount
 * @function
 */


// Start of sap\m\FacetFilterItem.js

sap.m.FacetFilterItem.prototype.setCount = function(iCount) { 
	
	 // App dev can still call setCounter on ListItemBase, so we have redundancy here.
	this.setProperty("count", iCount);
	this.setProperty("counter", iCount);
};

sap.m.FacetFilterItem.prototype.setCounter = function(iCount) {
	
	this.setProperty("count", iCount);
	this.setProperty("counter", iCount);
};

/**
 * @private
 */
sap.m.FacetFilterItem.prototype.init = function() {
	
  sap.m.ListItemBase.prototype.init.apply(this);
  
  // This class must be added to the ListItemBase container element, not the FacetFilterItem container
  this.addStyleClass("sapMFFLI"); 
};

