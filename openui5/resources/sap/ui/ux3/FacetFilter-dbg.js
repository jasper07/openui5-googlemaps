/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.FacetFilter.
jQuery.sap.declare("sap.ui.ux3.FacetFilter");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new FacetFilter.
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
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getVisibleItemCountMode visibleItemCountMode} : sap.ui.ux3.VisibleItemCountMode (default: sap.ui.ux3.VisibleItemCountMode.Fixed)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLists lists} : sap.ui.ux3.FacetFilterList[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * FacetFilter Control.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.FacetFilter
 */
sap.ui.core.Control.extend("sap.ui.ux3.FacetFilter", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"visible" : {type : "boolean", group : "", defaultValue : true},
		"visibleItemCountMode" : {type : "sap.ui.ux3.VisibleItemCountMode", group : "Appearance", defaultValue : sap.ui.ux3.VisibleItemCountMode.Fixed}
	},
	aggregations : {
    	"lists" : {type : "sap.ui.ux3.FacetFilterList", multiple : true, singularName : "list"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.FacetFilter with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.FacetFilter.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.ux3.FacetFilter#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.ux3.FacetFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FacetFilter#setVisible
 * @function
 */


/**
 * Getter for property <code>visibleItemCountMode</code>.
 * If the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default number of Facet Filter Items (5) is visible.
 *
 * Default value is <code>Fixed</code>
 *
 * @return {sap.ui.ux3.VisibleItemCountMode} the value of property <code>visibleItemCountMode</code>
 * @public
 * @name sap.ui.ux3.FacetFilter#getVisibleItemCountMode
 * @function
 */

/**
 * Setter for property <code>visibleItemCountMode</code>.
 *
 * Default value is <code>Fixed</code> 
 *
 * @param {sap.ui.ux3.VisibleItemCountMode} oVisibleItemCountMode  new value for property <code>visibleItemCountMode</code>
 * @return {sap.ui.ux3.FacetFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FacetFilter#setVisibleItemCountMode
 * @function
 */


/**
 * Getter for aggregation <code>lists</code>.<br/>
 * Facet Filter list represents the list of the filter values and the title of this list.
 * 
 * @return {sap.ui.ux3.FacetFilterList[]}
 * @public
 * @name sap.ui.ux3.FacetFilter#getLists
 * @function
 */


/**
 * Inserts a list into the aggregation named <code>lists</code>.
 *
 * @param {sap.ui.ux3.FacetFilterList}
 *          oList the list to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the list should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the list is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the list is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.FacetFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FacetFilter#insertList
 * @function
 */

/**
 * Adds some list <code>oList</code> 
 * to the aggregation named <code>lists</code>.
 *
 * @param {sap.ui.ux3.FacetFilterList}
 *            oList the list to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.FacetFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FacetFilter#addList
 * @function
 */

/**
 * Removes an list from the aggregation named <code>lists</code>.
 *
 * @param {int | string | sap.ui.ux3.FacetFilterList} vList the list to remove or its index or id
 * @return {sap.ui.ux3.FacetFilterList} the removed list or null
 * @public
 * @name sap.ui.ux3.FacetFilter#removeList
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>lists</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.FacetFilterList[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.FacetFilter#removeAllLists
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.FacetFilterList</code> in the aggregation named <code>lists</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.FacetFilterList}
 *            oList the list whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.FacetFilter#indexOfList
 * @function
 */
	

/**
 * Destroys all the lists in the aggregation 
 * named <code>lists</code>.
 * @return {sap.ui.ux3.FacetFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FacetFilter#destroyLists
 * @function
 */


// Start of sap\ui\ux3\FacetFilter.js
