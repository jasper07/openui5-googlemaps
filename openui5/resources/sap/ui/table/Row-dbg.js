/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.table.Row.
jQuery.sap.declare("sap.ui.table.Row");
jQuery.sap.require("sap.ui.table.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new Row.
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
 * <li>{@link #getCells cells} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The row.
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.table.Row
 */
sap.ui.core.Element.extend("sap.ui.table.Row", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"getIndex"
	],

	// ---- control specific ----
	library : "sap.ui.table",
	defaultAggregation : "cells",
	aggregations : {
    	"cells" : {type : "sap.ui.core.Control", multiple : true, singularName : "cell"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.table.Row with name <code>sClassName</code> 
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
 * @name sap.ui.table.Row.extend
 * @function
 */


/**
 * Getter for aggregation <code>cells</code>.<br/>
 * The controls for the cells.
 * 
 * <strong>Note</strong>: this is the default aggregation for Row.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.table.Row#getCells
 * @function
 */


/**
 * Inserts a cell into the aggregation named <code>cells</code>.
 *
 * @param {sap.ui.core.Control}
 *          oCell the cell to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the cell should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the cell is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the cell is inserted at 
 *             the last position        
 * @return {sap.ui.table.Row} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Row#insertCell
 * @function
 */

/**
 * Adds some cell <code>oCell</code> 
 * to the aggregation named <code>cells</code>.
 *
 * @param {sap.ui.core.Control}
 *            oCell the cell to add; if empty, nothing is inserted
 * @return {sap.ui.table.Row} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Row#addCell
 * @function
 */

/**
 * Removes an cell from the aggregation named <code>cells</code>.
 *
 * @param {int | string | sap.ui.core.Control} vCell the cell to remove or its index or id
 * @return {sap.ui.core.Control} the removed cell or null
 * @public
 * @name sap.ui.table.Row#removeCell
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>cells</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.table.Row#removeAllCells
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>cells</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oCell the cell whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.table.Row#indexOfCell
 * @function
 */
	

/**
 * Destroys all the cells in the aggregation 
 * named <code>cells</code>.
 * @return {sap.ui.table.Row} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Row#destroyCells
 * @function
 */


/**
 * Returns the index of the row in the table or -1 if not added to a table.
 *
 * @name sap.ui.table.Row.prototype.getIndex
 * @function

 * @type int
 * @public
 */


// Start of sap\ui\table\Row.js
sap.ui.table.Row.prototype.getIndex = function() {
	var oTable = this.getParent();
	if (oTable) {
		var iFirstRow = oTable.getFirstVisibleRow();
		var iRowIndex = oTable.indexOfRow(this);
		return iFirstRow + iRowIndex;
	}
	return -1;
};