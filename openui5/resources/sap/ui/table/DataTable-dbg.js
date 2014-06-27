/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.table.DataTable.
jQuery.sap.declare("sap.ui.table.DataTable");
jQuery.sap.require("sap.ui.table.library");
jQuery.sap.require("sap.ui.table.TreeTable");


/**
 * Constructor for a new DataTable.
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
 * <li>{@link #getExpandedVisibleRowCount expandedVisibleRowCount} : int</li>
 * <li>{@link #getExpanded expanded} : boolean (default: false)</li>
 * <li>{@link #getHierarchical hierarchical} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.table.DataTable#event:rowSelect rowSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.table.TreeTable#constructor sap.ui.table.TreeTable}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The DataTable control provides a set of sophisticated and comfort functions for table design. For example, you can make settings for the number of visible rows and a number for the displayed rows in the case the user expands the table. The first visible row can be explicitly set. For the selection of columns and rows, a Multi, a Single, a None, and an All mode are available. Setting the Editable property to true lets the user make changes on the table cell entries.
 * @extends sap.ui.table.TreeTable
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @deprecated Since version 1.5.1. 
 * The DataTable has been replaced via the Table/TreeTable control.
 * @name sap.ui.table.DataTable
 */
sap.ui.table.TreeTable.extend("sap.ui.table.DataTable", { metadata : {

	// ---- object ----
	deprecated : true,

	// ---- control specific ----
	library : "sap.ui.table",
	properties : {
		"expandedVisibleRowCount" : {type : "int", group : "", defaultValue : null},
		"expanded" : {type : "boolean", group : "", defaultValue : false},
		"hierarchical" : {type : "boolean", group : "", defaultValue : false}
	},
	events : {
		"rowSelect" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.table.DataTable with name <code>sClassName</code> 
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
 * @name sap.ui.table.DataTable.extend
 * @function
 */

sap.ui.table.DataTable.M_EVENTS = {'rowSelect':'rowSelect'};


/**
 * Getter for property <code>expandedVisibleRowCount</code>.
 * Count of visible rows when expanded
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>expandedVisibleRowCount</code>
 * @public
 * @name sap.ui.table.DataTable#getExpandedVisibleRowCount
 * @function
 */

/**
 * Setter for property <code>expandedVisibleRowCount</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iExpandedVisibleRowCount  new value for property <code>expandedVisibleRowCount</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.DataTable#setExpandedVisibleRowCount
 * @function
 */


/**
 * Getter for property <code>expanded</code>.
 * Flag whether the Table is expanded or not
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * @name sap.ui.table.DataTable#getExpanded
 * @function
 */

/**
 * Setter for property <code>expanded</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.DataTable#setExpanded
 * @function
 */


/**
 * Getter for property <code>hierarchical</code>.
 * Flag, whether the table displays its content hierarchical or not (**experimental**!!)
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>hierarchical</code>
 * @public
 * @name sap.ui.table.DataTable#getHierarchical
 * @function
 */

/**
 * Setter for property <code>hierarchical</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bHierarchical  new value for property <code>hierarchical</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.DataTable#setHierarchical
 * @function
 */


/**
 * fired when the row selection of the table has been changed 
 *
 * @name sap.ui.table.DataTable#rowSelect
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.rowIndex row index which row has been selected or deselected
 * @param {object} oControlEvent.getParameters.rowContext binding context of the row index which row has been selected or deselected
 * @param {int[]} oControlEvent.getParameters.rowIndices array of row indices which selection has been changed (either selected or deselected)
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'rowSelect' event of this <code>sap.ui.table.DataTable</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.DataTable</code>.<br/> itself. 
 *  
 * fired when the row selection of the table has been changed 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.DataTable</code>.<br/> itself.
 *
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.DataTable#attachRowSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'rowSelect' event of this <code>sap.ui.table.DataTable</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.DataTable#detachRowSelect
 * @function
 */

/**
 * Fire event rowSelect to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'rowIndex' of type <code>int</code> row index which row has been selected or deselected</li>
 * <li>'rowContext' of type <code>object</code> binding context of the row index which row has been selected or deselected</li>
 * <li>'rowIndices' of type <code>int[]</code> array of row indices which selection has been changed (either selected or deselected)</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.table.DataTable#fireRowSelect
 * @function
 */


// Start of sap\ui\table\DataTable.js
/**
 * Initialization of the DataTable control
 * @private
 */
sap.ui.table.DataTable.prototype.init = function() {
	
	sap.ui.table.TreeTable.prototype.init.apply(this, arguments);
	
	this._bInheritEditableToControls = true;
	
	// default values for DataTable
	this.setEditable(false); 
	this.setSelectionBehavior(sap.ui.table.SelectionBehavior.Row);
	
	this.attachRowSelectionChange(function(oEvent) {
		this.fireRowSelect(oEvent.mParameters);
	});
	
	this._iLastFixedColIndex = -1;

};

sap.ui.table.DataTable.prototype.isTreeBinding = function(sName) {
	sName = sName || "rows";
	if (sName === "rows") {
		return this.getHierarchical();
	}
	return sap.ui.core.Element.prototype.isTreeBinding.apply(this, arguments);
};

sap.ui.table.DataTable.prototype.setHierarchical = function(bHierarchical) {
	this.setProperty("hierarchical", bHierarchical);
	this._iLastFixedColIndex = bHierarchical ? 0 : -1;
};

sap.ui.table.DataTable.prototype.setVisibleRowCount = function(iRowCount) {
	this._iVisibleRowCount = iRowCount;
	if (!this.getExpanded()) {
		sap.ui.table.Table.prototype.setVisibleRowCount.apply(this, arguments);
	}
};

sap.ui.table.DataTable.prototype.setExpandedVisibleRowCount = function(iRowCount) {
	this.setProperty("expandedVisibleRowCount", iRowCount, true);
	if (this.getExpanded()) {
		sap.ui.table.Table.prototype.setVisibleRowCount.apply(this, arguments);
	}
};

sap.ui.table.DataTable.prototype.setExpanded = function(bExpanded) {
	this.setProperty("expanded", bExpanded, true);
	if (this.getExpandedVisibleRowCount() > 0) {
		var iRowCount = bExpanded ? this.getExpandedVisibleRowCount() : this._iVisibleRowCount;
		sap.ui.table.Table.prototype.setVisibleRowCount.call(this, iRowCount);
	}
};
