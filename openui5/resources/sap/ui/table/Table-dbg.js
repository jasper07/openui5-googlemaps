/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.table.Table.
jQuery.sap.declare("sap.ui.table.Table");
jQuery.sap.require("sap.ui.table.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Table.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 'auto')</li>
 * <li>{@link #getRowHeight rowHeight} : int</li>
 * <li>{@link #getColumnHeaderHeight columnHeaderHeight} : int</li>
 * <li>{@link #getColumnHeaderVisible columnHeaderVisible} : boolean (default: true)</li>
 * <li>{@link #getVisibleRowCount visibleRowCount} : int (default: 10)</li>
 * <li>{@link #getFirstVisibleRow firstVisibleRow} : int (default: 0)</li>
 * <li>{@link #getSelectionMode selectionMode} : sap.ui.table.SelectionMode (default: sap.ui.table.SelectionMode.Multi)</li>
 * <li>{@link #getSelectionBehavior selectionBehavior} : sap.ui.table.SelectionBehavior (default: sap.ui.table.SelectionBehavior.RowSelector)</li>
 * <li>{@link #getSelectedIndex selectedIndex} : int (default: -1)</li>
 * <li>{@link #getAllowColumnReordering allowColumnReordering} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getNavigationMode navigationMode} : sap.ui.table.NavigationMode (default: sap.ui.table.NavigationMode.Scrollbar)</li>
 * <li>{@link #getThreshold threshold} : int (default: 100)</li>
 * <li>{@link #getEnableColumnReordering enableColumnReordering} : boolean (default: true)</li>
 * <li>{@link #getEnableGrouping enableGrouping} : boolean (default: false)</li>
 * <li>{@link #getShowColumnVisibilityMenu showColumnVisibilityMenu} : boolean (default: false)</li>
 * <li>{@link #getShowNoData showNoData} : boolean (default: true)</li>
 * <li>{@link #getVisibleRowCountMode visibleRowCountMode} : sap.ui.table.VisibleRowCountMode (default: sap.ui.table.VisibleRowCountMode.Fixed)</li>
 * <li>{@link #getFixedColumnCount fixedColumnCount} : int (default: 0)</li>
 * <li>{@link #getFixedRowCount fixedRowCount} : int (default: 0)</li>
 * <li>{@link #getMinAutoRowCount minAutoRowCount} : int (default: 5)</li>
 * <li>{@link #getFixedBottomRowCount fixedBottomRowCount} : int (default: 0)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTitle title} : sap.ui.core.Control|string</li>
 * <li>{@link #getFooter footer} : sap.ui.core.Control|string</li>
 * <li>{@link #getToolbar toolbar} : sap.ui.commons.Toolbar</li>
 * <li>{@link #getExtension extension} : sap.ui.core.Control[]</li>
 * <li>{@link #getColumns columns} <strong>(default aggregation)</strong> : sap.ui.table.Column[]</li>
 * <li>{@link #getRows rows} : sap.ui.table.Row[]</li>
 * <li>{@link #getNoData noData} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getGroupBy groupBy} : string | sap.ui.table.Column</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.table.Table#event:rowSelectionChange rowSelectionChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.table.Table#event:columnSelect columnSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.table.Table#event:columnResize columnResize} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.table.Table#event:columnMove columnMove} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.table.Table#event:sort sort} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.table.Table#event:filter filter} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.table.Table#event:group group} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.table.Table#event:columnVisibility columnVisibility} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The Table control provides a set of sophisticated and comfort functions for table design. For example, you can make settings for the number of visible rows. The first visible row can be explicitly set. For the selection of rows, a Multi, a Single, and a None mode are available.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.table.Table
 */
sap.ui.core.Control.extend("sap.ui.table.Table", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"getSelectedIndices", "addSelectionInterval", "setSelectionInterval", "removeSelectionInterval", "isIndexSelected", "clearSelection", "selectAll", "getContextByIndex", "sort", "filter"
	],

	// ---- control specific ----
	library : "sap.ui.table",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'},
		"rowHeight" : {type : "int", group : "Appearance", defaultValue : null},
		"columnHeaderHeight" : {type : "int", group : "Appearance", defaultValue : null},
		"columnHeaderVisible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"visibleRowCount" : {type : "int", group : "Appearance", defaultValue : 10},
		"firstVisibleRow" : {type : "int", group : "Appearance", defaultValue : 0},
		"selectionMode" : {type : "sap.ui.table.SelectionMode", group : "Behavior", defaultValue : sap.ui.table.SelectionMode.Multi},
		"selectionBehavior" : {type : "sap.ui.table.SelectionBehavior", group : "Behavior", defaultValue : sap.ui.table.SelectionBehavior.RowSelector},
		"selectedIndex" : {type : "int", group : "Appearance", defaultValue : -1},
		"allowColumnReordering" : {type : "boolean", group : "Behavior", defaultValue : true, deprecated: true},
		"editable" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"navigationMode" : {type : "sap.ui.table.NavigationMode", group : "Behavior", defaultValue : sap.ui.table.NavigationMode.Scrollbar},
		"threshold" : {type : "int", group : "Appearance", defaultValue : 100},
		"enableColumnReordering" : {type : "boolean", group : "Behavior", defaultValue : true},
		"enableGrouping" : {type : "boolean", group : "Behavior", defaultValue : false},
		"showColumnVisibilityMenu" : {type : "boolean", group : "Appearance", defaultValue : false},
		"showNoData" : {type : "boolean", group : "Appearance", defaultValue : true},
		"visibleRowCountMode" : {type : "sap.ui.table.VisibleRowCountMode", group : "Appearance", defaultValue : sap.ui.table.VisibleRowCountMode.Fixed},
		"fixedColumnCount" : {type : "int", group : "Appearance", defaultValue : 0},
		"fixedRowCount" : {type : "int", group : "Appearance", defaultValue : 0},
		"minAutoRowCount" : {type : "int", group : "Appearance", defaultValue : 5},
		"fixedBottomRowCount" : {type : "int", group : "Appearance", defaultValue : 0}
	},
	defaultAggregation : "columns",
	aggregations : {
    	"title" : {type : "sap.ui.core.Control", altTypes : ["string"], multiple : false}, 
    	"footer" : {type : "sap.ui.core.Control", altTypes : ["string"], multiple : false}, 
    	"toolbar" : {type : "sap.ui.commons.Toolbar", multiple : false}, 
    	"extension" : {type : "sap.ui.core.Control", multiple : true, singularName : "extension"}, 
    	"columns" : {type : "sap.ui.table.Column", multiple : true, singularName : "column", bindable : "bindable"}, 
    	"rows" : {type : "sap.ui.table.Row", multiple : true, singularName : "row", bindable : "bindable"}, 
    	"noData" : {type : "sap.ui.core.Control", multiple : false}
	},
	associations : {
		"groupBy" : {type : "sap.ui.table.Column", multiple : false}
	},
	events : {
		"rowSelectionChange" : {}, 
		"columnSelect" : {allowPreventDefault : true}, 
		"columnResize" : {allowPreventDefault : true}, 
		"columnMove" : {allowPreventDefault : true}, 
		"sort" : {allowPreventDefault : true}, 
		"filter" : {allowPreventDefault : true}, 
		"group" : {allowPreventDefault : true}, 
		"columnVisibility" : {allowPreventDefault : true}
	}
}});


/**
 * Creates a new subclass of class sap.ui.table.Table with name <code>sClassName</code> 
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
 * @name sap.ui.table.Table.extend
 * @function
 */

sap.ui.table.Table.M_EVENTS = {'rowSelectionChange':'rowSelectionChange','columnSelect':'columnSelect','columnResize':'columnResize','columnMove':'columnMove','sort':'sort','filter':'filter','group':'group','columnVisibility':'columnVisibility'};


/**
 * Getter for property <code>width</code>.
 * Width of the Table.
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.table.Table#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setWidth
 * @function
 */


/**
 * Getter for property <code>rowHeight</code>.
 * Height of a row of the Table in pixel.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>rowHeight</code>
 * @public
 * @name sap.ui.table.Table#getRowHeight
 * @function
 */

/**
 * Setter for property <code>rowHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iRowHeight  new value for property <code>rowHeight</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setRowHeight
 * @function
 */


/**
 * Getter for property <code>columnHeaderHeight</code>.
 * Height of the column header of the Table in pixel.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>columnHeaderHeight</code>
 * @public
 * @name sap.ui.table.Table#getColumnHeaderHeight
 * @function
 */

/**
 * Setter for property <code>columnHeaderHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iColumnHeaderHeight  new value for property <code>columnHeaderHeight</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setColumnHeaderHeight
 * @function
 */


/**
 * Getter for property <code>columnHeaderVisible</code>.
 * Flag whether the column header is visible or not.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>columnHeaderVisible</code>
 * @public
 * @name sap.ui.table.Table#getColumnHeaderVisible
 * @function
 */

/**
 * Setter for property <code>columnHeaderVisible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bColumnHeaderVisible  new value for property <code>columnHeaderVisible</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setColumnHeaderVisible
 * @function
 */


/**
 * Getter for property <code>visibleRowCount</code>.
 * Count of visible rows (will overwrite the height property).
 *
 * Default value is <code>10</code>
 *
 * @return {int} the value of property <code>visibleRowCount</code>
 * @public
 * @name sap.ui.table.Table#getVisibleRowCount
 * @function
 */

/**
 * Setter for property <code>visibleRowCount</code>.
 *
 * Default value is <code>10</code> 
 *
 * @param {int} iVisibleRowCount  new value for property <code>visibleRowCount</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setVisibleRowCount
 * @function
 */


/**
 * Getter for property <code>firstVisibleRow</code>.
 * First visible row.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>firstVisibleRow</code>
 * @public
 * @name sap.ui.table.Table#getFirstVisibleRow
 * @function
 */

/**
 * Setter for property <code>firstVisibleRow</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iFirstVisibleRow  new value for property <code>firstVisibleRow</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setFirstVisibleRow
 * @function
 */


/**
 * Getter for property <code>selectionMode</code>.
 * Selection mode of the Table.
 *
 * Default value is <code>Multi</code>
 *
 * @return {sap.ui.table.SelectionMode} the value of property <code>selectionMode</code>
 * @public
 * @name sap.ui.table.Table#getSelectionMode
 * @function
 */

/**
 * Setter for property <code>selectionMode</code>.
 *
 * Default value is <code>Multi</code> 
 *
 * @param {sap.ui.table.SelectionMode} oSelectionMode  new value for property <code>selectionMode</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setSelectionMode
 * @function
 */


/**
 * Getter for property <code>selectionBehavior</code>.
 * Selection behavior of the Table.
 *
 * Default value is <code>RowSelector</code>
 *
 * @return {sap.ui.table.SelectionBehavior} the value of property <code>selectionBehavior</code>
 * @public
 * @name sap.ui.table.Table#getSelectionBehavior
 * @function
 */

/**
 * Setter for property <code>selectionBehavior</code>.
 *
 * Default value is <code>RowSelector</code> 
 *
 * @param {sap.ui.table.SelectionBehavior} oSelectionBehavior  new value for property <code>selectionBehavior</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setSelectionBehavior
 * @function
 */


/**
 * Getter for property <code>selectedIndex</code>.
 * Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled and multiple items are selected, the method returns the lead selected item. Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.
 *
 * Default value is <code>-1</code>
 *
 * @return {int} the value of property <code>selectedIndex</code>
 * @public
 * @name sap.ui.table.Table#getSelectedIndex
 * @function
 */

/**
 * Setter for property <code>selectedIndex</code>.
 *
 * Default value is <code>-1</code> 
 *
 * @param {int} iSelectedIndex  new value for property <code>selectedIndex</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setSelectedIndex
 * @function
 */


/**
 * Getter for property <code>allowColumnReordering</code>.
 * Flag to enable or disable column reordering
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>allowColumnReordering</code>
 * @public
 * @deprecated Since version 1.5.2. 
 * Use the property enableColumnReordering instead.
 * @name sap.ui.table.Table#getAllowColumnReordering
 * @function
 */

/**
 * Setter for property <code>allowColumnReordering</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bAllowColumnReordering  new value for property <code>allowColumnReordering</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.5.2. 
 * Use the property enableColumnReordering instead.
 * @name sap.ui.table.Table#setAllowColumnReordering
 * @function
 */


/**
 * Getter for property <code>editable</code>.
 * Flag whether the controls of the Table are editable or not (currently this only controls the background color!)
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.ui.table.Table#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setEditable
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.table.Table#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setVisible
 * @function
 */


/**
 * Getter for property <code>navigationMode</code>.
 * Flag whether to use the scroll mode or paging mode.
 *
 * Default value is <code>Scrollbar</code>
 *
 * @return {sap.ui.table.NavigationMode} the value of property <code>navigationMode</code>
 * @public
 * @name sap.ui.table.Table#getNavigationMode
 * @function
 */

/**
 * Setter for property <code>navigationMode</code>.
 *
 * Default value is <code>Scrollbar</code> 
 *
 * @param {sap.ui.table.NavigationMode} oNavigationMode  new value for property <code>navigationMode</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setNavigationMode
 * @function
 */


/**
 * Getter for property <code>threshold</code>.
 * Threshold to fetch the next chunk of data. The minimal threshold can be the visible row count of the Table. If the value is 0 then the thresholding is disabled.
 *
 * Default value is <code>100</code>
 *
 * @return {int} the value of property <code>threshold</code>
 * @public
 * @name sap.ui.table.Table#getThreshold
 * @function
 */

/**
 * Setter for property <code>threshold</code>.
 *
 * Default value is <code>100</code> 
 *
 * @param {int} iThreshold  new value for property <code>threshold</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setThreshold
 * @function
 */


/**
 * Getter for property <code>enableColumnReordering</code>.
 * Flag to enable or disable column reordering
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableColumnReordering</code>
 * @public
 * @name sap.ui.table.Table#getEnableColumnReordering
 * @function
 */

/**
 * Setter for property <code>enableColumnReordering</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableColumnReordering  new value for property <code>enableColumnReordering</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setEnableColumnReordering
 * @function
 */


/**
 * Getter for property <code>enableGrouping</code>.
 * Flag to enable or disable column grouping. (experimental!)
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>enableGrouping</code>
 * @public
 * @name sap.ui.table.Table#getEnableGrouping
 * @function
 */

/**
 * Setter for property <code>enableGrouping</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEnableGrouping  new value for property <code>enableGrouping</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setEnableGrouping
 * @function
 */


/**
 * Getter for property <code>showColumnVisibilityMenu</code>.
 * Flag to show or hide the column visibility menu.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showColumnVisibilityMenu</code>
 * @public
 * @name sap.ui.table.Table#getShowColumnVisibilityMenu
 * @function
 */

/**
 * Setter for property <code>showColumnVisibilityMenu</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowColumnVisibilityMenu  new value for property <code>showColumnVisibilityMenu</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setShowColumnVisibilityMenu
 * @function
 */


/**
 * Getter for property <code>showNoData</code>.
 * Flag whether to show the no data overlay or not once the table is empty.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showNoData</code>
 * @public
 * @name sap.ui.table.Table#getShowNoData
 * @function
 */

/**
 * Setter for property <code>showNoData</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowNoData  new value for property <code>showNoData</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setShowNoData
 * @function
 */


/**
 * Getter for property <code>visibleRowCountMode</code>.
 * This defines how the table handles the visible rows in the table. The default behavior is, that a fixed row count is defined. If you change it to auto the visibleRowCount property is changed by the table automatically. It will then adjust its maximum row count to the space it is allowed to cover (limited by the surrounding container) and its minimum row count to the value of the property minAutoRowCount (default value : 5) In manual mode the user can change the visibleRowCount interactively.
 *
 * Default value is <code>Fixed</code>
 *
 * @return {sap.ui.table.VisibleRowCountMode} the value of property <code>visibleRowCountMode</code>
 * @public
 * @since 1.9.2
 * @name sap.ui.table.Table#getVisibleRowCountMode
 * @function
 */

/**
 * Setter for property <code>visibleRowCountMode</code>.
 *
 * Default value is <code>Fixed</code> 
 *
 * @param {sap.ui.table.VisibleRowCountMode} oVisibleRowCountMode  new value for property <code>visibleRowCountMode</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.2
 * @name sap.ui.table.Table#setVisibleRowCountMode
 * @function
 */


/**
 * Getter for property <code>fixedColumnCount</code>.
 * Number of columns that are fix on the left. When you use a horizontal scroll bar, only the columns which are not fixed, will scroll. Fixed columns need a defined width for the feature to work.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>fixedColumnCount</code>
 * @public
 * @name sap.ui.table.Table#getFixedColumnCount
 * @function
 */

/**
 * Setter for property <code>fixedColumnCount</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iFixedColumnCount  new value for property <code>fixedColumnCount</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setFixedColumnCount
 * @function
 */


/**
 * Getter for property <code>fixedRowCount</code>.
 * Number of rows that are fix on the top. When you use a vertical scroll bar, only the rows which are not fixed, will scroll.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>fixedRowCount</code>
 * @public
 * @name sap.ui.table.Table#getFixedRowCount
 * @function
 */

/**
 * Setter for property <code>fixedRowCount</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iFixedRowCount  new value for property <code>fixedRowCount</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setFixedRowCount
 * @function
 */


/**
 * Getter for property <code>minAutoRowCount</code>.
 * This property is used to set the minimum count of visible rows when the property visibleRowCountMode is set to Auto.
 * For any other visibleRowCountMode, it is ignored.
 *
 * Default value is <code>5</code>
 *
 * @return {int} the value of property <code>minAutoRowCount</code>
 * @public
 * @name sap.ui.table.Table#getMinAutoRowCount
 * @function
 */

/**
 * Setter for property <code>minAutoRowCount</code>.
 *
 * Default value is <code>5</code> 
 *
 * @param {int} iMinAutoRowCount  new value for property <code>minAutoRowCount</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setMinAutoRowCount
 * @function
 */


/**
 * Getter for property <code>fixedBottomRowCount</code>.
 * Number of rows that are fix on the bottom. When you use a vertical scroll bar, only the rows which are not fixed, will scroll. (experimental!)
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>fixedBottomRowCount</code>
 * @public
 * @since 1.18.7
 * @name sap.ui.table.Table#getFixedBottomRowCount
 * @function
 */

/**
 * Setter for property <code>fixedBottomRowCount</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iFixedBottomRowCount  new value for property <code>fixedBottomRowCount</code>
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @since 1.18.7
 * @name sap.ui.table.Table#setFixedBottomRowCount
 * @function
 */


/**
 * Getter for aggregation <code>title</code>.<br/>
 * Control or text of title section of the Table (if not set it will be hidden)
 * 
 * @return {sap.ui.core.Control|string}
 * @public
 * @name sap.ui.table.Table#getTitle
 * @function
 */


/**
 * Setter for the aggregated <code>title</code>.
 * @param {sap.ui.core.Control|string} oTitle
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setTitle
 * @function
 */
	

/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#destroyTitle
 * @function
 */


/**
 * Getter for aggregation <code>footer</code>.<br/>
 * Control or text of footer section of the Table (if not set it will be hidden)
 * 
 * @return {sap.ui.core.Control|string}
 * @public
 * @name sap.ui.table.Table#getFooter
 * @function
 */


/**
 * Setter for the aggregated <code>footer</code>.
 * @param {sap.ui.core.Control|string} oFooter
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setFooter
 * @function
 */
	

/**
 * Destroys the footer in the aggregation 
 * named <code>footer</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#destroyFooter
 * @function
 */


/**
 * Getter for aggregation <code>toolbar</code>.<br/>
 * Toolbar of the Table (if not set it will be hidden)
 * 
 * @return {sap.ui.commons.Toolbar}
 * @public
 * @name sap.ui.table.Table#getToolbar
 * @function
 */


/**
 * Setter for the aggregated <code>toolbar</code>.
 * @param {sap.ui.commons.Toolbar} oToolbar
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setToolbar
 * @function
 */
	

/**
 * Destroys the toolbar in the aggregation 
 * named <code>toolbar</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#destroyToolbar
 * @function
 */


/**
 * Getter for aggregation <code>extension</code>.<br/>
 * Extension section of the Table (if not set it will be hidden)
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.table.Table#getExtension
 * @function
 */


/**
 * Inserts a extension into the aggregation named <code>extension</code>.
 *
 * @param {sap.ui.core.Control}
 *          oExtension the extension to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the extension should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the extension is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the extension is inserted at 
 *             the last position        
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#insertExtension
 * @function
 */

/**
 * Adds some extension <code>oExtension</code> 
 * to the aggregation named <code>extension</code>.
 *
 * @param {sap.ui.core.Control}
 *            oExtension the extension to add; if empty, nothing is inserted
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#addExtension
 * @function
 */

/**
 * Removes an extension from the aggregation named <code>extension</code>.
 *
 * @param {int | string | sap.ui.core.Control} vExtension the extension to remove or its index or id
 * @return {sap.ui.core.Control} the removed extension or null
 * @public
 * @name sap.ui.table.Table#removeExtension
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>extension</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.table.Table#removeAllExtension
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>extension</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oExtension the extension whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.table.Table#indexOfExtension
 * @function
 */
	

/**
 * Destroys all the extension in the aggregation 
 * named <code>extension</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#destroyExtension
 * @function
 */


/**
 * Getter for aggregation <code>columns</code>.<br/>
 * Columns of the Table
 * 
 * <strong>Note</strong>: this is the default aggregation for Table.
 * @return {sap.ui.table.Column[]}
 * @public
 * @name sap.ui.table.Table#getColumns
 * @function
 */


/**
 * Inserts a column into the aggregation named <code>columns</code>.
 *
 * @param {sap.ui.table.Column}
 *          oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the column should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the column is inserted at 
 *             the last position        
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#insertColumn
 * @function
 */

/**
 * Adds some column <code>oColumn</code> 
 * to the aggregation named <code>columns</code>.
 *
 * @param {sap.ui.table.Column}
 *            oColumn the column to add; if empty, nothing is inserted
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#addColumn
 * @function
 */

/**
 * Removes an column from the aggregation named <code>columns</code>.
 *
 * @param {int | string | sap.ui.table.Column} vColumn the column to remove or its index or id
 * @return {sap.ui.table.Column} the removed column or null
 * @public
 * @name sap.ui.table.Table#removeColumn
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>columns</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.table.Column[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.table.Table#removeAllColumns
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.table.Column</code> in the aggregation named <code>columns</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.table.Column}
 *            oColumn the column whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.table.Table#indexOfColumn
 * @function
 */
	

/**
 * Destroys all the columns in the aggregation 
 * named <code>columns</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#destroyColumns
 * @function
 */


/**
 * Binder for aggregation <code>columns</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#bindColumns
 * @function
 */

/**
 * Unbinder for aggregation <code>columns</code>.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#unbindColumns
 * @function
 */


/**
 * Getter for aggregation <code>rows</code>.<br/>
 * Rows of the Table
 * 
 * @return {sap.ui.table.Row[]}
 * @public
 * @name sap.ui.table.Table#getRows
 * @function
 */


/**
 * Inserts a row into the aggregation named <code>rows</code>.
 *
 * @param {sap.ui.table.Row}
 *          oRow the row to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the row should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the row is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the row is inserted at 
 *             the last position        
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#insertRow
 * @function
 */

/**
 * Adds some row <code>oRow</code> 
 * to the aggregation named <code>rows</code>.
 *
 * @param {sap.ui.table.Row}
 *            oRow the row to add; if empty, nothing is inserted
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#addRow
 * @function
 */

/**
 * Removes an row from the aggregation named <code>rows</code>.
 *
 * @param {int | string | sap.ui.table.Row} vRow the row to remove or its index or id
 * @return {sap.ui.table.Row} the removed row or null
 * @public
 * @name sap.ui.table.Table#removeRow
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>rows</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.table.Row[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.table.Table#removeAllRows
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.table.Row</code> in the aggregation named <code>rows</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.table.Row}
 *            oRow the row whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.table.Table#indexOfRow
 * @function
 */
	

/**
 * Destroys all the rows in the aggregation 
 * named <code>rows</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#destroyRows
 * @function
 */


/**
 * Binder for aggregation <code>rows</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#bindRows
 * @function
 */

/**
 * Unbinder for aggregation <code>rows</code>.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#unbindRows
 * @function
 */


/**
 * Getter for aggregation <code>noData</code>.<br/>
 * This control is shown, in case there is no data available to be displayed in the Table.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.ui.table.Table#getNoData
 * @function
 */


/**
 * Setter for the aggregated <code>noData</code>.
 * @param {sap.ui.core.Control} oNoData
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setNoData
 * @function
 */
	

/**
 * Destroys the noData in the aggregation 
 * named <code>noData</code>.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#destroyNoData
 * @function
 */


/**
 * Group By Column (experimental!)
 *
 * @return {string} Id of the element which is the current target of the <code>groupBy</code> association, or null
 * @public
 * @name sap.ui.table.Table#getGroupBy
 * @function
 */

/**
 * Group By Column (experimental!)
 *
 * @param {string | sap.ui.table.Column} vGroupBy 
 *    Id of an element which becomes the new target of this <code>groupBy</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#setGroupBy
 * @function
 */


	
/**
 * fired when the row selection of the table has been changed (the event parameters can be used to determine selection changes - to find out the selected rows you should better use the table selection API) 
 *
 * @name sap.ui.table.Table#rowSelectionChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.rowIndex row index which has been clicked so that the selection has been changed (either selected or deselected)
 * @param {object} oControlEvent.getParameters.rowContext binding context of the row which has been clicked so that selection has been changed
 * @param {int[]} oControlEvent.getParameters.rowIndices array of row indices which selection has been changed (either selected or deselected)
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'rowSelectionChange' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 *  
 * fired when the row selection of the table has been changed (the event parameters can be used to determine selection changes - to find out the selected rows you should better use the table selection API) 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#attachRowSelectionChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'rowSelectionChange' event of this <code>sap.ui.table.Table</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#detachRowSelectionChange
 * @function
 */

/**
 * Fire event rowSelectionChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'rowIndex' of type <code>int</code> row index which has been clicked so that the selection has been changed (either selected or deselected)</li>
 * <li>'rowContext' of type <code>object</code> binding context of the row which has been clicked so that selection has been changed</li>
 * <li>'rowIndices' of type <code>int[]</code> array of row indices which selection has been changed (either selected or deselected)</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.table.Table#fireRowSelectionChange
 * @function
 */


/**
 * fired when a column of the table has been selected 
 *
 * @name sap.ui.table.Table#columnSelect
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.table.Column} oControlEvent.getParameters.column reference to the selected column
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'columnSelect' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 *  
 * fired when a column of the table has been selected 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#attachColumnSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'columnSelect' event of this <code>sap.ui.table.Table</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#detachColumnSelect
 * @function
 */

/**
 * Fire event columnSelect to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> reference to the selected column</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.table.Table#fireColumnSelect
 * @function
 */


/**
 * fired when a table column is resized. 
 *
 * @name sap.ui.table.Table#columnResize
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.table.Column} oControlEvent.getParameters.column resized column.
 * @param {int} oControlEvent.getParameters.width new width of the table in pixel.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'columnResize' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 *  
 * fired when a table column is resized. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#attachColumnResize
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'columnResize' event of this <code>sap.ui.table.Table</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#detachColumnResize
 * @function
 */

/**
 * Fire event columnResize to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> resized column.</li>
 * <li>'width' of type <code>int</code> new width of the table in pixel.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.table.Table#fireColumnResize
 * @function
 */


/**
 * fired when a table column is moved. 
 *
 * @name sap.ui.table.Table#columnMove
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.table.Column} oControlEvent.getParameters.column moved column.
 * @param {int} oControlEvent.getParameters.newPos new position of the column.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'columnMove' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 *  
 * fired when a table column is moved. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#attachColumnMove
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'columnMove' event of this <code>sap.ui.table.Table</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#detachColumnMove
 * @function
 */

/**
 * Fire event columnMove to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> moved column.</li>
 * <li>'newPos' of type <code>int</code> new position of the column.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.table.Table#fireColumnMove
 * @function
 */


/**
 * fired when the table is sorted. 
 *
 * @name sap.ui.table.Table#sort
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.table.Column} oControlEvent.getParameters.column sorted column.
 * @param {sap.ui.table.SortOrder} oControlEvent.getParameters.sortOrder Sort Order
 * @param {boolean} oControlEvent.getParameters.columnAdded If column was added to sorter this is true. If new sort is started this is set to false
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'sort' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 *  
 * fired when the table is sorted. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#attachSort
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'sort' event of this <code>sap.ui.table.Table</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#detachSort
 * @function
 */

/**
 * Fire event sort to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> sorted column.</li>
 * <li>'sortOrder' of type <code>sap.ui.table.SortOrder</code> Sort Order</li>
 * <li>'columnAdded' of type <code>boolean</code> If column was added to sorter this is true. If new sort is started this is set to false</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.table.Table#fireSort
 * @function
 */


/**
 * fired when the table is filtered. 
 *
 * @name sap.ui.table.Table#filter
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.table.Column} oControlEvent.getParameters.column filtered column.
 * @param {string} oControlEvent.getParameters.value filter value.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'filter' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 *  
 * fired when the table is filtered. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#attachFilter
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'filter' event of this <code>sap.ui.table.Table</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#detachFilter
 * @function
 */

/**
 * Fire event filter to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> filtered column.</li>
 * <li>'value' of type <code>string</code> filter value.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.table.Table#fireFilter
 * @function
 */


/**
 * fired when the table is grouped (experimental!). 
 *
 * @name sap.ui.table.Table#group
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.table.Column} oControlEvent.getParameters.column grouped column.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'group' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 *  
 * fired when the table is grouped (experimental!). 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#attachGroup
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'group' event of this <code>sap.ui.table.Table</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#detachGroup
 * @function
 */

/**
 * Fire event group to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> grouped column.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.table.Table#fireGroup
 * @function
 */


/**
 * fired when the visibility of a table column is changed. 
 *
 * @name sap.ui.table.Table#columnVisibility
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.table.Column} oControlEvent.getParameters.column affected column.
 * @param {boolean} oControlEvent.getParameters.visible new value of the visible property.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'columnVisibility' event of this <code>sap.ui.table.Table</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.table.Table</code>.<br/> itself. 
 *  
 * fired when the visibility of a table column is changed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code>.<br/> itself.
 *
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#attachColumnVisibility
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'columnVisibility' event of this <code>sap.ui.table.Table</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.table.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Table#detachColumnVisibility
 * @function
 */

/**
 * Fire event columnVisibility to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> affected column.</li>
 * <li>'visible' of type <code>boolean</code> new value of the visible property.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.table.Table#fireColumnVisibility
 * @function
 */


/**
 * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
 *
 * @name sap.ui.table.Table.prototype.getSelectedIndices
 * @function

 * @type int[]
 * @public
 */


/**
 * Adds the given selection interval to the selection. In case of single selection the "indexTo" value will be used for as selected index.
 *
 * @name sap.ui.table.Table.prototype.addSelectionInterval
 * @function
 * @param {int} 
 *         iIndexFrom
 *         Index from which .
 * @param {int} 
 *         iIndexTo
 *         Indices of the items that shall additionally be selected.

 * @type sap.ui.table.Table
 * @public
 */


/**
 * Sets the given selection interval as selection. In case of single selection the "indexTo" value will be used for as selected index.
 *
 * @name sap.ui.table.Table.prototype.setSelectionInterval
 * @function
 * @param {int} 
 *         iIndexFrom
 *         Index from which .
 * @param {int} 
 *         iIndexTo
 *         Indices of the items that shall additionally be selected.

 * @type sap.ui.table.Table
 * @public
 */


/**
 * Removes the given selection interval from the selection. In case of single selection this call removeSelectedIndex with the "indexTo" value.
 *
 * @name sap.ui.table.Table.prototype.removeSelectionInterval
 * @function
 * @param {int} 
 *         iIndexFrom
 *         Index from which .
 * @param {int} 
 *         iIndexTo
 *         Indices of the items that shall additionally be selected.

 * @type sap.ui.table.Table
 * @public
 */


/**
 * Returns whether the given index is selected.
 *
 * @name sap.ui.table.Table.prototype.isIndexSelected
 * @function
 * @param {int} 
 *         iIndex
 *         Index which is checked for selection state.

 * @type boolean
 * @public
 */


/**
 * Removes complete selection.
 *
 * @name sap.ui.table.Table.prototype.clearSelection
 * @function

 * @type sap.ui.table.Table
 * @public
 */


/**
 * Add all rows to the selection.
 *
 * @name sap.ui.table.Table.prototype.selectAll
 * @function

 * @type sap.ui.table.Table
 * @public
 */


/**
 * Returns the context of a row by its index.
 *
 * @name sap.ui.table.Table.prototype.getContextByIndex
 * @function
 * @param {int} 
 *         iIndex
 *         Index of the row to return the context from.

 * @type object
 * @public
 */


/**
 * sorts the given column ascending or descending
 *
 * @name sap.ui.table.Table.prototype.sort
 * @function
 * @param {sap.ui.table.Column} 
 *         oColumn
 *         column to be sorted
 * @param {sap.ui.table.SortOrder} 
 *         oSortOrder
 *         sort order of the column (if undefined the default will be ascending)

 * @type sap.ui.table.Table
 * @public
 */


/**
 * filter the given column by the given value
 *
 * @name sap.ui.table.Table.prototype.filter
 * @function
 * @param {sap.ui.table.Column} 
 *         oColumn
 *         column to be filtered
 * @param {string} 
 *         sValue
 *         filter value as string (will be converted)

 * @type sap.ui.table.Table
 * @public
 */


// Start of sap\ui\table\Table.js
jQuery.sap.require("sap.ui.model.SelectionModel");
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
jQuery.sap.require("sap.ui.core.theming.Parameters");
jQuery.sap.require("sap.ui.core.ScrollBar");
jQuery.sap.require("sap.ui.core.IntervalTrigger");
jQuery.sap.require("sap.ui.commons.TextView");
jQuery.sap.require("sap.ui.table.Row");

// =============================================================================
// BASIC CONTROL API
// =============================================================================

sap.ui.table.Table.ResizeTrigger = new sap.ui.core.IntervalTrigger(300);

/**
 * Initialization of the Table control
 * @private
 */
sap.ui.table.Table.prototype.init = function() {

	// create an information object which contains always required infos
	this._oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.table");
	this._bAccMode = sap.ui.getCore().getConfiguration().getAccessibility();
	this._bRtlMode = sap.ui.getCore().getConfiguration().getRTL();

	// basic selection model (by default the table uses multi selection)
	this._oSelection = new sap.ui.model.SelectionModel(sap.ui.model.SelectionModel.MULTI_SELECTION);
	this._oSelection.attachSelectionChanged(this._onSelectionChanged, this);

	// minimum width of a table column in pixel:
	// should at least be larger than the paddings for cols and cells!
	this._iColMinWidth = 20;

	// columns to cells map
	this._aIdxCols2Cells = [];

	// visible columns
	this._aVisibleColumns = [];

	// we add a delegate to enable to focus the scrollbar when clicking on them
	// to avoid that the table control grabs the focus and scrolls to the focus
	// element (hide the outline)
	var fnFocusIndex = {
		onAfterRendering: function(oEvent) {
			oEvent.srcControl.$("sb").attr("tabindex", "-1").css("outline", "none");
		}	
	};
	
	// vertical scrollbar
	this._oVSb = new sap.ui.core.ScrollBar(this.getId() + "-vsb", {size: "100%"});
	this._oVSb.attachScroll(this.onvscroll, this);
	this._oVSb.addDelegate(fnFocusIndex);

	// horizontal scrollbar (configure by default for the pixel mode)
	this._oHSb = new sap.ui.core.ScrollBar(this.getId() + "-hsb", {size: "100%", contentSize: "0px", vertical: false});
	this._oHSb.attachScroll(this.onhscroll, this);
	this._oHSb.addDelegate(fnFocusIndex);

	// action mode flag (for keyboard navigation)
	this._bActionMode = false;
	
	// column index of the last fixed column (to prevent column reordering!)
	this._iLastFixedColIndex = -1;
	
	// flag whether the editable property should be inherited or not
	this._bInheritEditableToControls = false;
	
	// text selection for column headers?
	this._bAllowColumnHeaderTextSelection = false;
	
	// flag, whether to call _updateTableCell on cell control or not?
	this._bCallUpdateTableCell = false;
	
	// timer delay in ms
	this._iTimerDelay = 250;
	
	// determine whether jQuery version is less than 1.8 (height and width behaves different!!)
	this._bjQueryLess18 = jQuery.sap.Version(jQuery.fn.jquery).compareTo("1.8") < 0;
	
};


/**
 * Termination of the Table control
 * @private
 */
sap.ui.table.Table.prototype.exit = function() {
	// destroy the child controls
	this._oVSb.destroy();
	this._oHSb.destroy();
	if (this._oPaginator) {
		this._oPaginator.destroy();
	}
	// destroy helpers
	this._destroyItemNavigation();
	// cleanup
	this._cleanUpTimers();
	this._detachEvents();
};


/**
 * theme changed
 * @private
 */
sap.ui.table.Table.prototype.onThemeChanged = function() {
	if (this.getDomRef()) {
		this.invalidate();
	}
};


/**
 * Rerendering handling
 * @private
 */
sap.ui.table.Table.prototype.onBeforeRendering = function() {
	this._cleanUpTimers();
	this._detachEvents();
};


/**
 * Rerendering handling
 * @private
 */
sap.ui.table.Table.prototype.onAfterRendering = function() {

	this._bOnAfterRendering = true;

	var $this = this.$();

	this._updateVSb();
	this._updateTableContent();
	this._handleResize();
	this._attachEvents();

	// restore the column icons
	var aCols = this.getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		if (aCols[i].getVisible()) {
			aCols[i]._restoreIcons();
		}
	}
	
	// enable/disable text selection for column headers
	if (!this._bAllowColumnHeaderTextSelection) {
		this._disableTextSelection($this.find(".sapUiTableColHdrCnt"));
	} 

	this._bOnAfterRendering = false;

	this._initItemNavigation();

};


/**
 * update the table content (scrollbar, no data overlay, selection, row header, ...)
 * @private
 */
sap.ui.table.Table.prototype._updateTableContent = function() {

	// show or hide the no data container
	this._updateNoData();
	
	// update the selection visualization
	this._updateSelection();
	
	// update the rows (TODO: generalize this for 1.6)
	if (this._modifyRow) {
		var that = this;
		jQuery.each(this.getRows(), function(iIndex, oRow) {
			that._modifyRow(iIndex + that.getFirstVisibleRow(), oRow.$());
			that._modifyRow(iIndex + that.getFirstVisibleRow(), oRow.$("fixed"));
		});
	}
	
	// update the row header (sync row heights)
	this._updateRowHeader();
	
	// hook for update table cell after rendering is complete 
	if (this._bOnAfterRendering && (this._bCallUpdateTableCell || typeof this._updateTableCell === "function")) {
		var that = this;
		var oBindingInfo = this.mBindingInfos["rows"];
		jQuery.each(this.getRows(), function(iIndex, oRow) {
			jQuery.each(oRow.getCells(), function(iIndex, oCell) {
				if (oCell._updateTableCell) {
					oCell._updateTableCell(oCell /* cell control */, 
					                       oCell.getBindingContext(oBindingInfo && oBindingInfo.model) /* cell context */, 
					                       oCell.$().closest("td") /* jQuery object for td */);
				}
				if (that._updateTableCell) {
					that._updateTableCell(oCell /* cell control */, 
					                       oCell.getBindingContext(oBindingInfo && oBindingInfo.model) /* cell context */, 
					                       oCell.$().closest("td") /* jQuery object for td */);
				}
			});
		});
	}
	
};


// =============================================================================
// ITEMNAVIGATION
// =============================================================================


/**
 * initialize ItemNavigation. Transfer relevant controls to ItemNavigation.
 * TabIndexes are set by ItemNavigation
 * @private
*/
sap.ui.table.Table.prototype._initItemNavigation = function() {

	var $this = this.$();
	var iColumnCount = this._getVisibleColumnCount();
	var iTotalColumnCount = iColumnCount;

	// initialization of item navigation for the Column Headers
	if (!this._oColHdrItemNav) {
		this._oColHdrItemNav = new sap.ui.core.delegate.ItemNavigation();
		this._oColHdrItemNav.setCycling(false);
		this.addDelegate(this._oColHdrItemNav);
	}

	// create the list of item dom refs
	var aItemDomRefs = [];
	if (this.getFixedColumnCount() == 0) {
		aItemDomRefs = $this.find(".sapUiTableCtrl td[tabindex]").get();
	} else {
		var $topLeft = this.$().find('.sapUiTableCtrlFixed.sapUiTableCtrlRowFixed');
		var $topRight = this.$().find('.sapUiTableCtrlScroll.sapUiTableCtrlRowFixed');
		var $middleLeft = this.$().find('.sapUiTableCtrlFixed.sapUiTableCtrlRowScroll');
		var $middleRight = this.$().find('.sapUiTableCtrlScroll.sapUiTableCtrlRowScroll');
		var $bottomLeft = this.$().find('.sapUiTableCtrlFixed.sapUiTableCtrlRowFixedBottom');
		var $bottomRight = this.$().find('.sapUiTableCtrlScroll.sapUiTableCtrlRowFixedBottom');
		for (var i = 0; i < this.getVisibleRowCount(); i++) {
			aItemDomRefs = aItemDomRefs.concat($topLeft.find('tr[data-sap-ui-rowindex="' + i +'"]').find('td[tabindex]').get());
			aItemDomRefs = aItemDomRefs.concat($topRight.find('tr[data-sap-ui-rowindex="' + i +'"]').find('td[tabindex]').get());
			aItemDomRefs = aItemDomRefs.concat($middleLeft.find('tr[data-sap-ui-rowindex="' + i +'"]').find('td[tabindex]').get());
			aItemDomRefs = aItemDomRefs.concat($middleRight.find('tr[data-sap-ui-rowindex="' + i +'"]').find('td[tabindex]').get());
			aItemDomRefs = aItemDomRefs.concat($bottomLeft.find('tr[data-sap-ui-rowindex="' + i +'"]').find('td[tabindex]').get());
			aItemDomRefs = aItemDomRefs.concat($bottomRight.find('tr[data-sap-ui-rowindex="' + i +'"]').find('td[tabindex]').get());
		}
	}
	
	// to later determine the position of the first TD in the aItemDomRefs we keep the
	// count of TDs => aCount - TDs = first TD (add the row headers to the TD count / except the first one!)
	var iTDCount = aItemDomRefs.length;
	
	// add the row header items (if visible)
	if (this.getSelectionMode() !== sap.ui.table.SelectionMode.None &&
			this.getSelectionBehavior() !== sap.ui.table.SelectionBehavior.RowOnly) {
		var aRowHdrDomRefs = $this.find(".sapUiTableRowHdr").get();
		for (var i = aRowHdrDomRefs.length - 1; i >= 0; i--) {
			aItemDomRefs.splice(i * iColumnCount, 0, aRowHdrDomRefs[i]);
			// we ignore the row headers
			iTDCount++;
		}
		// except the first row header
		iTDCount--; 
		// add the row header to the column count
		iTotalColumnCount++;
	}
	
	// add the column items
	if (this.getColumnHeaderVisible()) {
		aItemDomRefs = $this.find(".sapUiTableCol").get().concat(aItemDomRefs);
	}
	
	// add the select all item
	if (this.getSelectionMode() !== sap.ui.table.SelectionMode.None &&
			this.getSelectionBehavior() !== sap.ui.table.SelectionBehavior.RowOnly &&
			this.getColumnHeaderVisible()) {
		var aRowHdr = $this.find(".sapUiTableColRowHdr").get();
		for (var i = this._getHeaderRowCount() - 1; i >= 0; i--) {
			aItemDomRefs.splice(i * iColumnCount, 0, aRowHdr[0]);
		}
	}
	
	// initialization of item navigation for the Table control
	if (!this._oItemNavigation) {
		this._oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
		this._oItemNavigation.setTableMode(true);
		this._oItemNavigation.attachEvent(sap.ui.core.delegate.ItemNavigation.Events.BeforeFocus, function(oEvent) {
			this.$("ariadesc").text("");
		}, this);
		this.addDelegate(this._oItemNavigation);
	}

	// configure the item navigation
	this._oItemNavigation.setColumns(iTotalColumnCount);
	this._oItemNavigation.setRootDomRef($this.find(".sapUiTableCnt").get(0));
	this._oItemNavigation.setItemDomRefs(aItemDomRefs);
	this._oItemNavigation.setFocusedIndex(aItemDomRefs.length - iTDCount);

};

/**
 * destroys ItemNavigation
 * @private
*/
sap.ui.table.Table.prototype._destroyItemNavigation = function() {

	// destroy of item navigation for the Table control
	if (this._oItemNavigation) {
		this._oItemNavigation.destroy();
		this._oItemNavigation = undefined;
	}

};


/*
 * @see JSDoc generated by SAPUI5 control
 */
sap.ui.table.Table.prototype.getFocusInfo = function() {
	var sId = this.$().find(":focus").attr("id");
	if (sId) {
		return {customId: sId};
	} else {
		return sap.ui.core.Element.prototype.getFocusInfo.apply(this, arguments);
	}
};

/*
 * @see JSDoc generated by SAPUI5 control
 */
sap.ui.table.Table.prototype.applyFocusInfo = function(mFocusInfo) {
	if (mFocusInfo && mFocusInfo.customId) {
		this.$().find("#" + mFocusInfo.customId).focus();
	} else {
		sap.ui.core.Element.prototype.getFocusInfo.apply(this, arguments);
	}
	return this;
};


// =============================================================================
// PUBLIC TABLE API
// =============================================================================


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setTitle = function(vTitle) {
	var oTitle = vTitle;
	if (typeof (vTitle) === "string" || vTitle instanceof String) {
		oTitle = new sap.ui.commons.TextView({
			text: vTitle,
			wrapping: false,
			width: "100%"
		}).addStyleClass("sapUiTableHdrTitle");
	}
	this.setAggregation("title", oTitle);
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setFooter = function(vFooter) {
	var oFooter = vFooter;
	if (typeof (vFooter) === "string" || vFooter instanceof String) {
		oFooter = new sap.ui.commons.TextView({
			text: vFooter,
			wrapping: false,
			width: "100%"
		});
	}
	this.setAggregation("footer", oFooter);
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setSelectionMode = function(oSelectionMode) {
	this._oSelection.clearSelection();
	if (oSelectionMode === sap.ui.table.SelectionMode.Single) {
		this._oSelection.setSelectionMode(sap.ui.model.SelectionModel.SINGLE_SELECTION);
	} else {
		this._oSelection.setSelectionMode(sap.ui.model.SelectionModel.MULTI_SELECTION);
	}
	this.setProperty("selectionMode", oSelectionMode);
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setFirstVisibleRow = function(iRowIndex, bOnScroll) {
	// TODO: think about this optimization - for now it doesn't work since
	//       this API is used to update the rows afterwards
	//if (iRowIndex !== this.getFirstVisibleRow()) {
		// update the property
		this.setProperty("firstVisibleRow", iRowIndex, true);
		// update the bindings:
		//  - prevent the rerendering
		//  - use the databinding fwk to update the content of the rows
		if (this.getBinding("rows")) {
			this.updateRows();
		}
	//}
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.getAllowColumnReordering = function() {
	jQuery.sap.log.warning("getAllowColumnReordering is deprecated - please use getEnableColumnReordering!");
	return sap.ui.table.Table.prototype.getEnableColumnReordering.apply(this, arguments);
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setAllowColumnReordering = function() {
	jQuery.sap.log.warning("setAllowColumnReordering is deprecated - please use setEnableColumnReordering!");
	return sap.ui.table.Table.prototype.setEnableColumnReordering.apply(this, arguments);
};


// enable calling 'bindAggregation("rows")' without a factory
sap.ui.table.Table.getMetadata().getAllAggregations()["rows"]._doesNotRequireFactory = true;

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.bindRows = function(oBindingInfo, vTemplate, oSorter, aFilters) {
	// ensure old Table API compatibility (sPath, [oSorter], [aFilters])
	if (typeof oBindingInfo === "string" &&
		  (vTemplate instanceof sap.ui.model.Sorter || jQuery.isArray(oSorter) && oSorter[0] instanceof sap.ui.model.Filter) ) {
		aFilters = oSorter;
		oSorter = vTemplate;
		vTemplate = undefined;
	}

	return this.bindAggregation("rows", oBindingInfo, vTemplate, oSorter, aFilters);
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype._bindAggregation = function(sName, sPath, oTemplate, oSorter, aFilters) {
	sap.ui.core.Element.prototype._bindAggregation.apply(this, arguments);
	var oBinding = this.getBinding("rows");
	if (sName === "rows" && oBinding) {
		oBinding.attachChange(this._onBindingChange, this);
	}
	return this;
};

/**
 * handler for change events of the binding
 * @param {sap.ui.base.Event} oEvent change event
 * @private
 */
sap.ui.table.Table.prototype._onBindingChange = function(oEvent) {
	var sReason = typeof(oEvent) === "object" ? oEvent.getParameter("reason") : oEvent;
	if (sReason === "sort" || sReason === "filter") {
		this.clearSelection();
		this.setFirstVisibleRow(0);
	}
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.unbindAggregation = function(sName, bSuppressReset) {
	var oBinding = this.getBinding("rows");
	if (sName === "rows" && oBinding) {
		oBinding.detachChange(this._onBindingChange);
		//Reset needs to be resetted, else destroyRows is called, which is not allowed to be called
		bSuppressReset = true;
	}
	this.updateRows(); // TODO: shouldn't this be more a central feature?!
	return sap.ui.core.Element.prototype.unbindAggregation.apply(this, [sName, bSuppressReset]);
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setVisibleRowCountMode = function(oVisibleRowCountMode) {
	this.setProperty("visibleRowCountMode", oVisibleRowCountMode);
	this._handleRowCountMode();
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setVisibleRowCount = function(iVisibleRowCount) {
	iVisibleRowCount = this.validateProperty("visibleRowCount", iVisibleRowCount);
	if (this.getBinding("rows") && this.getBinding("rows").getLength() <= iVisibleRowCount) {
		this.setProperty("firstVisibleRow", 0);
	}
	this.setProperty("visibleRowCount", iVisibleRowCount);
	return this;
};

/**
 * refresh rows
 * @private
 */
sap.ui.table.Table.prototype.refreshRows = function(sReason) {
	//needs to be called here to reset the firstVisible row so that the correct data is fetched
	this._onBindingChange(sReason);
	this._updateBindingContexts(true);
};

/**
 * updates the rows - called internally by the updateAggregation function when
 * anything in the model has been changed.
 * @private
 */
sap.ui.table.Table.prototype.updateRows = function(sReason) {

	// by default the start index is the first visible row
	var iStartIndex = this.getFirstVisibleRow();

	// calculate the boundaries (at least 0 - max the row count - visible row count)
	iStartIndex = Math.max(iStartIndex, 0);
	if (this.getNavigationMode() === sap.ui.table.NavigationMode.Scrollbar && this._getRowCount() > 0) {
		iStartIndex = Math.min(iStartIndex, Math.max(this._getRowCount() - this.getVisibleRowCount(), 0));
	}
	this.setProperty("firstVisibleRow", iStartIndex, true);
	
	// when not scrolling we update also the scroll position of the scrollbar
	if (this._oVSb.getScrollPosition() !== iStartIndex) {
		this._oVSb.setScrollPosition(iStartIndex);
	} 
	
	// update the paginator
	if (this._oPaginator && this.getNavigationMode() === sap.ui.table.NavigationMode.Paginator) {
		// if iStartIndex is equal or greater than the number of total rows go back to page 1
		var iNewPage = 1;
		if (iStartIndex < this.getBinding("rows").getLength()) {
			iNewPage = Math.ceil((iStartIndex + 1) / this.getVisibleRowCount());
		}
		if (iNewPage !== this._oPaginator.getCurrentPage()) {
			this.setProperty("firstVisibleRow", (iNewPage - 1) * this.getVisibleRowCount(), true);
			this._oPaginator.setCurrentPage(iNewPage);
			if (this._oPaginator.getDomRef()) {
				this._oPaginator.rerender();
			}
		}
	}

	// update the bindings only once the table is rendered
	if (this.getDomRef()) {

		// update the bindings by using a delayed mechanism to avoid to many update
		// requests: by using the mechanism below it will trigger an update each 50ms
		this._sBindingTimer = this._sBindingTimer || jQuery.sap.delayedCall(50, this, function() {
			// update only if control not marked as destroyed (could happen because updateRows is called during destroying the table) 
			if(!this.bIsDestroyed) {
				this._determineVisibleCols();
				this._updateVSb(); // due to boundary check this needs to be done before the binding contexts are applied
				this._updateBindingContexts();
				this._updateTableContent();
				this._sBindingTimer = undefined;
				//Helper event for testing
				this.fireEvent("_rowsUpdated");
			}
		});
	}
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.insertRow = function() {
	jQuery.sap.log.error("The control manages the rows aggregation. The method \"insertRow\" cannot be used programmatically!");
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.addRow = function() {
	jQuery.sap.log.error("The control manages the rows aggregation. The method \"addRow\" cannot be used programmatically!");
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.removeRow = function() {
	jQuery.sap.log.error("The control manages the rows aggregation. The method \"removeRow\" cannot be used programmatically!");
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.removeAllRows = function() {
	jQuery.sap.log.error("The control manages the rows aggregation. The method \"removeAllRows\" cannot be used programmatically!");
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.destroyRows = function() {
	jQuery.sap.log.error("The control manages the rows aggregation. The method \"destroyRows\" cannot be used programmatically!");
};


// =============================================================================
// EVENT HANDLING & CLEANUP
// =============================================================================

/**
 * attaches the required native event handlers
 * @private
 */
sap.ui.table.Table.prototype._attachEvents = function() {

	var $this = this.$();

	// listen to the scroll events of the containers (for keyboard navigation)
	$this.find(".sapUiTableColHdrScr").scroll(jQuery.proxy(this._oncolscroll, this));
	$this.find(".sapUiTableCtrlScr").scroll(jQuery.proxy(this._oncntscroll, this));
	$this.find(".sapUiTableCtrlScrFixed").scroll(jQuery.proxy(this._oncntscroll, this));

	// sync row header > content (hover effect)
	$this.find(".sapUiTableRowHdr").hover(function() {
		jQuery(this).addClass("sapUiTableRowHvr");
		var iIndex = $this.find(".sapUiTableRowHdr").index(this);
		$this.find(".sapUiTableCtrlFixed > tbody > tr").filter(":eq(" + iIndex + ")").addClass("sapUiTableRowHvr");
		$this.find(".sapUiTableCtrlScroll > tbody > tr").filter(":eq(" + iIndex + ")").addClass("sapUiTableRowHvr");
	}, function() {
		jQuery(this).removeClass("sapUiTableRowHvr");
		$this.find(".sapUiTableCtrlFixed > tbody > tr").removeClass("sapUiTableRowHvr");
		$this.find(".sapUiTableCtrlScroll > tbody > tr").removeClass("sapUiTableRowHvr");
	});

	// sync content fixed > row header (hover effect)
	$this.find(".sapUiTableCtrlFixed > tbody > tr").hover(function() {
		jQuery(this).addClass("sapUiTableRowHvr");
		var iIndex = $this.find(".sapUiTableCtrlFixed > tbody > tr").index(this);
		$this.find(".sapUiTableRowHdr").filter(":eq(" + (iIndex) + ")").addClass("sapUiTableRowHvr");
		$this.find(".sapUiTableCtrlScroll > tbody > tr").filter(":eq(" + iIndex + ")").addClass("sapUiTableRowHvr");
	}, function() {
		jQuery(this).removeClass("sapUiTableRowHvr");
		$this.find(".sapUiTableRowHdr").removeClass("sapUiTableRowHvr");
		$this.find(".sapUiTableCtrlScroll > tbody > tr").removeClass("sapUiTableRowHvr");
	});

	// sync content scroll > row header (hover effect)
	$this.find(".sapUiTableCtrlScroll > tbody > tr").hover(function() {
		jQuery(this).addClass("sapUiTableRowHvr");
		var iIndex = $this.find(".sapUiTableCtrlScroll > tbody > tr").index(this);
		$this.find(".sapUiTableRowHdr").filter(":eq(" + iIndex + ")").addClass("sapUiTableRowHvr");
		$this.find(".sapUiTableCtrlFixed > tbody > tr").filter(":eq(" + iIndex + ")").addClass("sapUiTableRowHvr");
	}, function() {
		jQuery(this).removeClass("sapUiTableRowHvr");
		$this.find(".sapUiTableRowHdr").removeClass("sapUiTableRowHvr");
		$this.find(".sapUiTableCtrlFixed > tbody > tr").removeClass("sapUiTableRowHvr");
	});

	// listen to the resize handlers
	$this.find(".sapUiTableColRsz").mousedown(jQuery.proxy(this._onColumnResizeStart, this));

	sap.ui.table.Table.ResizeTrigger.addListener(this._checkTableSize, this);

	// the vertical scrollbar listens to the mousewheel on the content section
	this._oHSb.bind($this.find(".sapUiTableCtrlScr").get(0));
	this._oVSb.bind($this.find(".sapUiTableCtrlScr").get(0));
	this._oHSb.bind($this.find(".sapUiTableCtrlScrFixed").get(0));
	this._oVSb.bind($this.find(".sapUiTableCtrlScrFixed").get(0));
	
	
};


/**
 * detaches the required native event handlers
 * @private
 */
sap.ui.table.Table.prototype._detachEvents = function() {

	var $this = this.$();

	$this.find(".sapUiTableRowHdrScr").unbind();
	$this.find(".sapUiTableColHdrScr").unbind();

	$this.find(".sapUiTableCtrl > tbody > tr").unbind();
	$this.find(".sapUiTableRowHdr").unbind();

	sap.ui.table.Table.ResizeTrigger.removeListener(this._checkTableSize, this);

	$this.find(".sapUiTableColRsz").unbind();

	this._oHSb.unbind($this.find(".sapUiTableCtrlScr").get(0));
	this._oVSb.unbind($this.find(".sapUiTableCtrlScr").get(0));
	this._oHSb.unbind($this.find(".sapUiTableCtrlScrFixed").get(0));
	this._oVSb.unbind($this.find(".sapUiTableCtrlScrFixed").get(0));
	
};


/**
 * cleanup the timers when not required anymore
 * @private
 */
sap.ui.table.Table.prototype._cleanUpTimers = function() {

	if (this._sBindingTimer) {
		jQuery.sap.clearDelayedCall(this._sBindingTimer);
		this._sBindingTimer = undefined;
	}

	if (this._sDelayedMenuTimer) {
		jQuery.sap.clearDelayedCall(this._sDelayedMenuTimer);
		this._sDelayedMenuTimer = undefined;
	}

	if (this._sDelayedActionTimer) {
		jQuery.sap.clearDelayedCall(this._sDelayedActionTimer);
		this._sDelayedActionTimer = undefined;
	}

	if (this._sColHdrPosTimer) {
		jQuery.sap.clearDelayedCall(this._sColHdrPosTimer);
		this._sColHdrPosTimer = undefined;
	}

	if (this._visibleRowCountTimer) {
		jQuery.sap.clearDelayedCall(this._visibleRowCountTimer);
		this._visibleRowCountTimer = undefined;
	}

	sap.ui.table.Table.ResizeTrigger.removeListener(this._checkTableSize, this);
};


// =============================================================================
// PRIVATE TABLE STUFF
// =============================================================================


/**
 * creates the rows for the rows aggregation
 * @private
 */
sap.ui.table.Table.prototype._createRows = function(iStartIndex) {

	var iFirstVisibleRow = this.getFirstVisibleRow();
	var iVisibleRowCount = this.getVisibleRowCount();

	// by default the start index is the first visible row
	iStartIndex = iStartIndex === undefined ? iFirstVisibleRow : iStartIndex;

	// create the new template
	var oTemplate = new sap.ui.table.Row(this.getId() + "-rows");
	var aCols = this.getColumns();
	var iCellIndex = 0;
	for (var i = 0, l = aCols.length; i < l; i++) {
		if (aCols[i].getVisible()) {
			var oColTemplate = aCols[i].getTemplate();
			if (oColTemplate) {
				var oClone = oColTemplate.clone("col" + i);
				// inherit the editable property if required to the child controls
				if (this._bInheritEditableToControls && !this.getEditable() && oClone.setEditable) {
					oClone.setEditable(false);
				}
				oClone.data("sap-ui-colindex", i);
				oTemplate.addCell(oClone);
				this._aIdxCols2Cells[i] = iCellIndex++;
			}
		}
	}

	// initially called without iStartIndex and iLength
	this.destroyAggregation("rows");
	var aContexts = undefined;
	var oBinding = this.getBinding("rows");
	var oBindingInfo = this.mBindingInfos["rows"];
	if (oBinding && iVisibleRowCount > 0) {
		// if thresholding is 0 then it is disabled and we forward 0 to the binding
		var iThreshold = this.getThreshold() ? Math.max(this.getVisibleRowCount(), this.getThreshold()): 0;
		var iFixedBottomRowCount = this.getFixedBottomRowCount();
		aContexts = oBinding.getContexts(iStartIndex, iVisibleRowCount - iFixedBottomRowCount, iThreshold);
		if (iFixedBottomRowCount > 0 && (iVisibleRowCount - iFixedBottomRowCount) < oBinding.getLength()) {
			aContexts = aContexts.concat(oBinding.getContexts(oBinding.getLength() - iFixedBottomRowCount, iFixedBottomRowCount, 1));
		}
	}
	for (var i = 0; i < iVisibleRowCount; i++) {
		var oClone = oTemplate.clone("row" + i); // TODO: Isn't the following required! + "-" + this.getId());
		if (aContexts && aContexts[i]) {
			oClone.setBindingContext(aContexts[i], oBindingInfo.model);
			oClone._bHidden = false;
		} else {
			oClone._bHidden = true;
		}
		this.addAggregation("rows", oClone, true);
	}

	// destroy the template
	oTemplate.destroy();

};


/**
 * updates the horizontal scrollbar
 * @private
 */
sap.ui.table.Table.prototype._updateHSb = function() {

	// get the width of the container
	var $this = this.$();

	// apply the new content size
	var iColsWidth = $this.find(".sapUiTableCtrlScroll").width();
	if (!!sap.ui.Device.browser.safari) {
		iColsWidth = Math.max(iColsWidth, this._getColumnsWidth(this.getFixedColumnCount()));
	}
	// add the horizontal scrollbar
	if (iColsWidth > $this.find(".sapUiTableCtrlScr").width()) {
		// show the scrollbar
		if (!$this.hasClass("sapUiTableHScr")) {
			$this.addClass("sapUiTableHScr");
			if (!!sap.ui.Device.browser.safari) {
				// min-width on table elements does not work for safari
				if (this._bjQueryLess18) {
					$this.find(".sapUiTableCtrlScroll, .sapUiTableColHdrScr > .sapUiTableColHdr").width(iColsWidth);
				} else {
					$this.find(".sapUiTableCtrlScroll, .sapUiTableColHdrScr > .sapUiTableColHdr").outerWidth(iColsWidth);
				}
			}
		}
		var iScrollPadding = $this.find(".sapUiTableCtrlFixed").width();
		if ($this.find(".sapUiTableRowHdrScr:visible").length > 0) {
			iScrollPadding += $this.find(".sapUiTableRowHdrScr").width();
		}
		if (this._bRtlMode) {
			$this.find(".sapUiTableHSb").css('padding-right', iScrollPadding + 'px');
		} else {
			$this.find(".sapUiTableHSb").css('padding-left', iScrollPadding + 'px');
		}
		this._oHSb.setContentSize(iColsWidth + "px");
		if (this._oHSb.getDomRef()) {
			this._oHSb.rerender();
		}
	} else {
		// hide the scrollbar
		if ($this.hasClass("sapUiTableHScr")) {
			$this.removeClass("sapUiTableHScr");
			if (!!sap.ui.Device.browser.safari) {
				// min-width on table elements does not work for safari
				$this.find(".sapUiTableCtrlScroll, .sapUiTableColHdr").css("width", "");
			}
		}
	}

	this._syncHeaderAndContent();
	
};


/**
 * updates the vertical scrollbar
 * @private
 */
sap.ui.table.Table.prototype._updateVSb = function() {
	var $this = this.$();
	var bDoResize = false;
	var oBinding = this.getBinding("rows");
	if (oBinding) {
		var iSteps = Math.max(0, (oBinding.getLength() || 0) - this.getVisibleRowCount());
		// check for paging mode or scrollbar mode
		if (this._oPaginator && this.getNavigationMode() === sap.ui.table.NavigationMode.Paginator) {
			// update the paginator (set the first visible row property)
			var iNumberOfPages = Math.ceil((oBinding.getLength() || 0) / this.getVisibleRowCount());
			this._oPaginator.setNumberOfPages(iNumberOfPages);
			var iPage = Math.min(iNumberOfPages, Math.ceil((this.getFirstVisibleRow() + 1) / this.getVisibleRowCount()));
			this.setProperty("firstVisibleRow", (Math.max(iPage,1) - 1) * this.getVisibleRowCount(), true);
			this._oPaginator.setCurrentPage(iPage);
			if (this._oPaginator.getDomRef()) {
				this._oPaginator.rerender();
			}
			if ($this.hasClass("sapUiTableVScr")) {
				$this.removeClass("sapUiTableVScr");
			}
		} else {
			// in case of scrollbar mode show or hide the scrollbar dependening on the
			// calculated steps:
			if (iSteps > 0) {
				if (!$this.hasClass("sapUiTableVScr")) {
					$this.addClass("sapUiTableVScr");
					bDoResize = true;
				}
			} else {
				if ($this.hasClass("sapUiTableVScr")) {
					$this.removeClass("sapUiTableVScr");
					bDoResize = true;
				}
			}
		}
		// update the scrollbar only if it is required
		if (iSteps !== this._oVSb.getSteps() || this.getFirstVisibleRow() !== this._oVSb.getScrollPosition()) {
			this._oVSb.setSteps(iSteps);
			if (this._oVSb.getDomRef()) {
				this._oVSb.rerender();
			}
			this._oVSb.setScrollPosition(this.getFirstVisibleRow());
		}
	} else {
		// check for paging mode or scrollbar mode
		if (this._oPaginator && this.getNavigationMode() === sap.ui.table.NavigationMode.Paginator) {
			// update the paginator (set the first visible row property)
			this._oPaginator.setNumberOfPages(0);
			this._oPaginator.setCurrentPage(0);
			if (this._oPaginator.getDomRef()) {
				this._oPaginator.rerender();
			}
		} else {
			if ($this.hasClass("sapUiTableVScr")) {
				$this.removeClass("sapUiTableVScr");
				bDoResize = true;
			}
		}
	}
	if (bDoResize && !this._bOnAfterRendering) {
		this._handleResize();
	}
};


/**
 * updates the binding contexts of the currently visible controls
 * @private
 */
sap.ui.table.Table.prototype._updateBindingContexts = function(bSuppressUpdate) {

	var aRows = this.getRows(),
	    oBinding = this.getBinding("rows"),
	    oBindinginfo = this.mBindingInfos["rows"],
	    aFixedContexts = undefined,
	    aContexts = undefined,
	    aFixedBottomContexts = undefined,
	    iFixedRows = this.getFixedRowCount(),
	    iFixedBottomRows = this.getFixedBottomRowCount(),
	    iVisibleRowCount = this.getVisibleRowCount();

	// fetch the contexts from the binding
	if (oBinding) {
		var iThreshold; 
		if (iFixedRows > 0 || iFixedBottomRows > 0) {
			// thresholding is deactivated when value is 0
			var iTotalFixedRows = iFixedRows + iFixedBottomRows;
			iThreshold = this.getThreshold() ? Math.max((this.getVisibleRowCount() - iTotalFixedRows), this.getThreshold()) : 0;
			aContexts = oBinding.getContexts(this.getFirstVisibleRow() + iFixedRows, aRows.length - iTotalFixedRows, iThreshold);
			// static rows: we fetch the contexts without threshold to avoid loading
			// of unnecessary data. Make sure to fetch after the normal rows to avoid
			// outgoing double requests for the contexts. 
			if (iFixedRows > 0) {
				aFixedContexts = oBinding.getContexts(0, iFixedRows);
				aContexts = aFixedContexts.concat(aContexts);
			}
			if (iFixedBottomRows > 0 && (iVisibleRowCount - iFixedBottomRows) < oBinding.getLength()) {
				aFixedBottomContexts = oBinding.getContexts(oBinding.getLength() - iFixedBottomRows, iFixedBottomRows);
				aContexts = aContexts.concat(aFixedBottomContexts);
			}
		} else if (aRows.length > 0) {
			// thresholding is deactivated when value is 0
			iThreshold = this.getThreshold() ? Math.max(this.getVisibleRowCount(), this.getThreshold()) : 0;
			aContexts = oBinding.getContexts(this.getFirstVisibleRow(), aRows.length, iThreshold);
		}
	}

	// update the binding contexts only for the visible columns
	//for (var iIndex = 0, iLength = this.getRows().length; iIndex < iLength; iIndex++) {
	if (!bSuppressUpdate) {
		for (var iIndex = aRows.length - 1; iIndex >= 0; iIndex--) {
			var oContext = aContexts ? aContexts[iIndex] : undefined;
			var oRow = aRows[iIndex];
			if (oRow) {
				this._updateRowBindingContext(oRow, oContext, oBindinginfo && oBindinginfo.model);
			}
		}
	}

};

/**
 * updates the binding context a row
 * @param {sap.ui.table.Row} row to update
 * @param {sap.ui.model.Context} binding context of the row
 * @private
 */
sap.ui.table.Table.prototype._updateRowBindingContext = function(oRow, oContext, sModelName) {
	var aCells = oRow.getCells();
	var $row = oRow.$();
	var $fixedRow = oRow.$("fixed");
	var $rowHdr = this.$().find("div[data-sap-ui-rowindex='" + $row.attr("data-sap-ui-rowindex") + "']");
	// check for a context object (in case of grouping there could be custom context objects)
	if (oContext && oContext instanceof sap.ui.model.Context) {
		for (var i = 0, l = this._aVisibleColumns.length; i < l; i++) {
			var col = this._aIdxCols2Cells[this._aVisibleColumns[i]];
			if (aCells[col]) {
				this._updateCellBindingContext(aCells[col], oContext, sModelName);
			}
		}
		if ($row.hasClass("sapUiTableRowHidden")) {
			$row.removeClass("sapUiTableRowHidden");
			$fixedRow.removeClass("sapUiTableRowHidden");
			$rowHdr.removeClass("sapUiTableRowHidden");
		}
		oRow._bHidden = false;
	} else {
		if (!$row.hasClass("sapUiTableRowHidden")) {
			$row.addClass("sapUiTableRowHidden");
			$fixedRow.addClass("sapUiTableRowHidden");
			$rowHdr.addClass("sapUiTableRowHidden");
		}
		oRow._bHidden = true;
		for (var i = 0, l = this._aVisibleColumns.length; i < l; i++) {
			var col = this._aIdxCols2Cells[this._aVisibleColumns[i]];
			if (aCells[col]) {
				this._updateCellBindingContext(aCells[col], oContext, sModelName);
			}
		}
	}
};

/**
 * updates the binding context a cell
 * @param {sap.ui.core.Control} control of the cell
 * @param {sap.ui.model.Context} binding context of the cell
 * @private
 */
sap.ui.table.Table.prototype._updateCellBindingContext = function(oCell, oContext, sModelName) {
		oCell.setBindingContext(oContext, sModelName);
		if (this._bCallUpdateTableCell && oCell._updateTableCell) {
			oCell._updateTableCell(oCell /* cell control */, oContext /* cell context */, oCell.$().closest("td") /* jQuery object for td */);
		}
		if (typeof this._updateTableCell === "function") {
			this._updateTableCell(oCell /* cell control */, oContext /* cell context */, oCell.$().closest("td") /* jQuery object for td */);
		}
};


/**
 * show or hide the no data container
 * @private
 */
sap.ui.table.Table.prototype._updateNoData = function() {
	// no data?
	if (this.getShowNoData()) {
		var oBinding = this.getBinding("rows");
		if (!oBinding || (oBinding.getLength() || 0) === 0) {
			if (!this.$().hasClass("sapUiTableEmpty")) {
				this.$().addClass("sapUiTableEmpty");
			}
			// update the ARIA text for the row count
			this.$("ariacount").text(this._oResBundle.getText("TBL_DATA_ROWS", [0]));
		} else {
			if (this.$().hasClass("sapUiTableEmpty")) {
				this.$().removeClass("sapUiTableEmpty");
			}
			// update the ARIA text for the row count
			this.$("ariacount").text(this._oResBundle.getText("TBL_DATA_ROWS", [(oBinding.getLength() || 0)]));
		}
	}
};


/**
 * determines the currently visible columns (used for simply updating only the
 * controls of the visible columns instead of the complete row!)
 * @private
 */
sap.ui.table.Table.prototype._determineVisibleCols = function() {

	// determine the visible colums
	var $this = this.$(),
	    that = this;

	if ($this.hasClass("sapUiTableHScr")) {

		// calculate the view port
		var iScrollLeft = this._oHSb.getNativeScrollPosition();
		var iScrollRight = iScrollLeft + this._getScrollWidth();

		// has the view port changed?
		if (this._iOldScrollLeft !== iScrollLeft || this._iOldScrollRight !== iScrollRight || this._bForceVisibleColCalc) {

			// calculate the first and last visible column
			var bRtl = this._bRtlMode;
			var iLeft = bRtl ? $this.find(".sapUiTableCtrlScroll").width() : 0;
			this._aVisibleColumns = [];
			for (var i = 0, l = this.getFixedColumnCount(); i < l; i++) {
				this._aVisibleColumns.push(i);
			};
			var $ths = $this.find(".sapUiTableCtrl.sapUiTableCtrlScroll .sapUiTableCtrlFirstCol > th[data-sap-ui-headcolindex]");
			$ths.each(function(iIndex, oElement) {
				var iWidth = jQuery(oElement).width();
				if (bRtl) {
					iLeft -= iWidth;
				}
				if (iLeft + iWidth >= iScrollLeft && iLeft <= iScrollRight) {
					that._aVisibleColumns.push(parseInt(jQuery(oElement).data('sap-ui-headcolindex'),10));
				}
				if (!bRtl) {
					iLeft += iWidth;
				}
			});

			// keep the view port information (performance!!)
			this._iOldScrollLeft = iScrollLeft;
			this._iOldScrollRight = iScrollRight;
			this._bForceVisibleColCalc = false;
		}

	} else {
		this._aVisibleColumns = [];
		var aCols = this.getColumns();
		for (var i = 0, l = aCols.length; i < l; i++) {
			if (aCols[i].shouldRender()) {
				this._aVisibleColumns.push(i);
			}
		}
	}
	
};

sap.ui.table.Table.prototype.addColumn = function (oColumn) {
	var that = this;
	this.addAggregation('columns', oColumn);
	oColumn.attachEvent('_widthChanged', function(oEvent) {
		that._bForceVisibleColCalc = true;
	});
	
	return this;
};

sap.ui.table.Table.prototype.insertColumn = function (oColumn, iIndex) {
	var that = this;
	this.insertAggregation('columns', oColumn, iIndex);
	oColumn.attachEvent('_widthChanged', function() {
		that._bForceVisibleColCalc = true;
	});

	return this;
};

/**
 * returns the count of rows when bound or 0
 * @private
 */
sap.ui.table.Table.prototype._getRowCount = function() {
	var oBinding = this.getBinding("rows");
	return oBinding ? (oBinding.getLength() || 0) : 0;
};


/**
 * returns the current top scroll position of the scrollbar (row number)
 * @private
 */
sap.ui.table.Table.prototype._getScrollTop = function() {
	if (this.$().hasClass("sapUiTableVScr")) {
		return this._oVSb.getScrollPosition() || 0;
	} else {
		if (this.getNavigationMode() === sap.ui.table.NavigationMode.Paginator) {
			return (((this._oPaginator.getCurrentPage() || 1) - 1) * this.getVisibleRowCount());
		} else {
			return 0;
		}
	}
};

/**
 * returns the width of the table scroll container
 * @private
 */
sap.ui.table.Table.prototype._getScrollWidth = function() {
	return this.$().find(".sapUiTableCtrlScr").width();
};

/**
 * returns the height of the table scroll container
 * @private
 */
sap.ui.table.Table.prototype._getScrollHeight = function() {
	return this.$().find(".sapUiTableCtrlScr").height();
};

/**
 * returns the count of visible columns
 * @private
 */
sap.ui.table.Table.prototype._getVisibleColumns = function() {
	var aColumns = [];
	var aCols = this.getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		if (aCols[i].shouldRender()) {
			aColumns.push(aCols[i]);
		}
	}
	return aColumns;
};

/**
 * returns the count of visible columns
 * @private
 */
sap.ui.table.Table.prototype._getVisibleColumnCount = function() {
	return this._getVisibleColumns().length;
};

/**
 * returns the row count of headers
 * @private
 */
sap.ui.table.Table.prototype._getHeaderRowCount = function() {
	if (!this._useMultiHeader()) {
		return 1;
	}
	var iHeaderRows = 0;
	jQuery.each(this._getVisibleColumns(), function(iIndex, oColumn) {
		iHeaderRows = Math.max(iHeaderRows,  oColumn.getMultiLabels().length);
	});
	return iHeaderRows;
};

/**
 * returns if multi header beahviour is used or not
 * @private
 */
sap.ui.table.Table.prototype._useMultiHeader = function() {
	var useMultiLabels = false;
	jQuery.each(this._getVisibleColumns(), function(iIndex, oColumn) {
		if (oColumn.getMultiLabels().length > 0) {
			useMultiLabels = true;
			return false;
		}
	});
	return useMultiLabels;
};


/**
 * returns the min width of all columns
 * @private
 */
sap.ui.table.Table.prototype._getColumnsWidth = function(iStartColumn, iEndColumn) {

	// first calculate the min width of the table for all columns
	var aCols = this.getColumns();
	var iColsWidth = 0;

	if (iStartColumn !== 0 && !iStartColumn) {
		iStartColumn = 0;
	}
	if (iEndColumn !== 0 && !iEndColumn) {
		iEndColumn = aCols.length;
	}
	
	for (var i = iStartColumn, l = iEndColumn; i < l; i++) {
		if (aCols[i] && aCols[i].getVisible()) {
			var sWidth = aCols[i].getWidth();
			var iWidth = parseInt(sWidth, 10);
			if (jQuery.sap.endsWith(sWidth, "px")) {
				iColsWidth += iWidth;
			} else {
				// for unknown width we use the min width
				iColsWidth += /* aCols[i].getMinWidth() || */ this._iColMinWidth;
			}
		}
	}
	
	return iColsWidth;

};

/**
 * calculates the width of the columns by using the browsers calculation
 * mechanism and setting a fix width to the columns
 * @private
 */
sap.ui.table.Table.prototype._handleResize = function() {

	// when using the native resize handler then this function could be called
	// before the table has been rendered - therefore we interrupt this method
	if (!this.getDomRef()) {
		return;
	}
	
	// update the horizontal scrollbar
	this._updateHSb();

	// update the column header (sync column widths)
	this._updateColumnHeader();
	
	this._updateRowHeader();

	this._handleRowCountMode();
};

sap.ui.table.Table.prototype._checkTableSize = function() {
	if (!this.getDomRef()) return;
	
	var oParentDomRef = this.getDomRef().parentNode,
		iHeight = oParentDomRef.offsetHeight,
		iWidth = oParentDomRef.offsetWidth;
		
	if (oParentDomRef != this._lastParent || iHeight != this._lastParentHeight || iWidth != this._lastParentWidth) {
		this._handleResize();
		this._lastParent = oParentDomRef;
		this._lastParentHeight = iHeight;
		this._lastParentWidth = iWidth;
		
		// update the bindings
		if (this.getBinding("rows")) {
			this.updateRows();
		}
	}
};

sap.ui.table.Table.prototype._handleRowCountMode = function() {
	//if visibleRowCountMode is auto change the visibleRowCount according to the parents container height
	if (this.getVisibleRowCountMode() == sap.ui.table.VisibleRowCountMode.Auto) {
		var iCanvasHeight = this.$().parent().height();
		var iRows = this._calculateRowsToDisplay(iCanvasHeight);
		if (isNaN(iRows)) {
			return;
		}
		//Currently this needs to be executed in a timeout because invalidate is lost wenn method is called during onAfterRendering
		//This can be reverted when keeping the invalidate calls, that occur during onAfterRendering are kept
		var that = this;
		this._visibleRowCountTimer = setTimeout(function() {
	        that.setVisibleRowCount(iRows);
		}, 0);
	}
};

/**
 * updates the row headers
 * @private
 */
sap.ui.table.Table.prototype._updateRowHeader = function() {

	// we skip this expensive height and width calculation when not required!
	if (this.getFixedRowCount() >= 0 || this.getFixedColumnCount() >= 0 || this.getRowHeight() <= 0) {
		
		var $this = this.$();

		var $fixedRows = $this.find(".sapUiTableCtrlFixed > tbody > tr");
		var $scrollRows = $this.find(".sapUiTableCtrlScroll > tbody > tr");
		var $rowHeaders = $this.find(".sapUiTableRowHdr");

		if (this.getFixedColumnCount() > 0 && !this.getRowHeight()) {
			$fixedRows.css('height','');
			$scrollRows.css('height','');
		}

		for (var i = 0, l = $scrollRows.length; i < l; i++) {
			var iHeight = Math.max($fixedRows[i] ? ($fixedRows[i].getBoundingClientRect().bottom - $fixedRows[i].getBoundingClientRect().top) : 0, $scrollRows[i] ? ($scrollRows[i].getBoundingClientRect().bottom - $scrollRows[i].getBoundingClientRect().top) : 0);
			if (this._bjQueryLess18) {
				jQuery($rowHeaders[i]).height(iHeight);
				if (this.getFixedColumnCount() > 0 && !this.getRowHeight()) {
					jQuery($fixedRows[i]).height(iHeight);
					jQuery($scrollRows[i]).height(iHeight);
				}
			} else {
				jQuery($rowHeaders[i]).outerHeight(iHeight);
				if (this.getFixedColumnCount() > 0 && !this.getRowHeight()) {
					jQuery($fixedRows[i]).outerHeight(iHeight);
					jQuery($scrollRows[i]).outerHeight(iHeight);
				}
			}
		}

		var iFixedRows = this.getFixedRowCount();
		if (iFixedRows > 0) {
			var iOffsetTop = $this.find('.sapUiTableCtrl.sapUiTableCtrlRowScroll.sapUiTableCtrlScroll')[0].offsetTop;
			this.$().find('.sapUiTableVSb').css('top', (iOffsetTop - 1) + 'px');
		}

		var iFixedBottomRows = this.getFixedBottomRowCount();
		if (iFixedBottomRows > 0) {
			var iOffsetHeight = $this.find('.sapUiTableCtrl.sapUiTableCtrlRowScroll.sapUiTableCtrlScroll')[0].offsetHeight;
			this.$().find('.sapUiTableVSb').css('height', iOffsetHeight + 'px');
		}

	}
	
};

/**
 * updates the column headers (width and position of the resize handles)
 * @private
 */
sap.ui.table.Table.prototype._updateColumnHeader = function(bUpdateResizeHandlers) {
	if (this._sColHdrPosTimer) {
		jQuery.sap.clearDelayedCall(this._sColHdrPosTimer);
	}
	var bRtl = this._bRtlMode;
	var iLeftAway = this._bRtlMode ? "99000px" : "-99000px";
	
	var fnSyncColumnHeaders = function() {
		
		// resize the dependent columns 
		// (put the percentage width into relation th fixed widths)
		// TODO: reconsider this behavior: see snippix #98183 (initial display) and #98183 (resizing)
		this._resizeDependentColumns();
	
		// sync the width of the columns
		var that = this, $this = this.$();
		var $cols = $this.find(".sapUiTableColHdr .sapUiTableCol");
		var aCols = this._getVisibleColumns();
		//If no header items exist an emty th is rendered but aCols.length is 0
		//Because of that we don't have to do anything of aCols.length = 0
		if (aCols.length == 0) return;
		var iTableWidth = $this.width();
		var $ths = $this.find(".sapUiTableCtrlFirstCol > th");
		var bHasRowHeader = this.getSelectionMode() !== sap.ui.table.SelectionMode.None && this.getSelectionBehavior() !== sap.ui.table.SelectionBehavior.RowOnly;
		var iInvisibleColWidth = 0;
		if (bHasRowHeader) {
			var oHiddenElement = $ths.get(0);
			iInvisibleColWidth = oHiddenElement.getBoundingClientRect().right - oHiddenElement.getBoundingClientRect().left;
			$ths = $ths.not(":nth-child(1)");
		}
		$ths.each(function(iIndex, oElement) {
			if (aCols[iIndex]) {
				jQuery(oElement).css('width', aCols[iIndex].getWidth());
			}
		});
		$ths.each(function(iIndex, oElement) {
			// apply the width of the column
			var iWidth = (oElement.getBoundingClientRect().right - oElement.getBoundingClientRect().left); //get real width (with decimal values)

			//for the first column also calculate the width of the hidden column
			if (iIndex == 0) {
				iWidth += iInvisibleColWidth;
			}

			var $col = $cols.filter('[data-sap-ui-colindex=' + jQuery(oElement).data('sap-ui-headcolindex') + ']');
			if ($col.length > 0) {
				if (!bUpdateResizeHandlers) {
					// to avoid flickering we store the last real width of the column
					// and update the width of the column only when it has been changed
					var oCol = sap.ui.getCore().byId($col.first().attr("id"));
					//if (!oCol._iRealWidth || oCol._iRealWidth != iWidth) {
						if (that._bjQueryLess18) {
							$col.width(iWidth);
						} else {
							$col.outerWidth(iWidth);
						}
						oCol._iRealWidth = iWidth;
					//}
				}
				// the left position is calculated from the sapUiTableCnt element (therefore we need the offset!)
				var iLeft = $col.first().position().left + (bRtl ? -2 : iWidth - 3);
				// PERF-OPT: only positon the visible resize handlers
				var $colrsz = jQuery.sap.byId($col.first().attr("id") + "-rsz");
				if (iLeft >= 0 && iLeft <= iTableWidth) {
					$colrsz.css({
						"left": iLeft
					});
				} else if ($colrsz.css("left") !== iLeftAway) {
					$colrsz.css({
						"left": iLeftAway
					});
				}
			}
		});
		// we change the height of the cols, col header and the row header to auto to
		// find out whether to use the height of a cell or the min height of the col header 
		var bHasColHdrHeight = this.getColumnHeaderHeight() > 0;
		if (!bHasColHdrHeight && !bUpdateResizeHandlers) {
			var $jqColHdr = $this.find(".sapUiTableColHdr");
			var $jqColHdrCnt = $this.find(".sapUiTableColHdrCnt");
			var $jqColRowHdr = $this.find(".sapUiTableColRowHdr");
			var $jqo = $jqColRowHdr.add($jqColHdrCnt);
			$jqo.height("auto");
			$cols.height("auto");
			//Total height of the table header
			var iHeight = Math.max($jqColHdr.height(), $jqColHdrCnt.height());
			//Height of one row within the header
			var iRegularHeight = iHeight / this._getHeaderRowCount();
			if (this._bjQueryLess18) {
				$cols.height(iRegularHeight);
				$jqo.height(iHeight);
			} else {
				$cols.outerHeight(iRegularHeight);
				$jqo.outerHeight(iHeight);
			}
		}
	};
	
	// instantly execute the synchronization or delay it
	if (this._bOnAfterRendering) {
		fnSyncColumnHeaders.apply(this, arguments);
	} else {
		this._sColHdrPosTimer = jQuery.sap.delayedCall(150, this, fnSyncColumnHeaders);
	}
	
};

/**
 * disables text selection on the document (disabled fro Dnd)
 * @private
 */
sap.ui.table.Table.prototype._disableTextSelection = function (oElement) {
	// prevent text selection
	jQuery(oElement || document.body).
		attr("unselectable", "on").
		css({
			"-moz-user-select": "none",
			"-webkit-user-select": "none",
			"user-select": "none"
        }).
		bind("selectstart", function(oEvent) {
			oEvent.preventDefault();
			return false;
		});
};

/**
 * enables text selection on the document (disabled fro Dnd)
 * @private
 */
sap.ui.table.Table.prototype._enableTextSelection = function (oElement) {
	jQuery(oElement || document.body).
		attr("unselectable", "off").
		css({
			"-moz-user-select": "",
			"-webkit-user-select": "",
			"user-select": ""
        }).
		unbind("selectstart");
};

/**
 * clears the text selection on the document (disabled fro Dnd)
 * @private
 */
sap.ui.table.Table.prototype._clearTextSelection = function () {
	if (window.getSelection) {
	  if (window.getSelection().empty) {  // Chrome
	    window.getSelection().empty();
	  } else if (window.getSelection().removeAllRanges) {  // Firefox
	    window.getSelection().removeAllRanges();
	  }
	} else if (document.selection && document.selection.empty) {  // IE?
		try {
		    document.selection.empty();
		} catch (ex) {
		    // ignore error to as a workaround for bug in IE8
		}
	}
};

// =============================================================================
// CONTROL EVENT HANDLING
// =============================================================================

/**
 * will be called by the vertical scrollbar. updates the visualized data by
 * applying the first visible (scrollpos) row from the vertical scrollbar
 * @private
 */
sap.ui.table.Table.prototype.onvscroll = function(oEvent) {
	// do not scroll in action mode!
	this._leaveActionMode();
	// set the first visible row
	this.setFirstVisibleRow(this._getScrollTop(), true);
};

/**
 * sync the column header and content 
 * @private
 */
sap.ui.table.Table.prototype._syncHeaderAndContent = function() {
	if (!this._bSyncScrollLeft) {
		this._bSyncScrollLeft = true;
		// synchronize the scroll areas
		var $this = this.$();
		var iScrollLeft = this._oHSb.getNativeScrollPosition();
		$this.find(".sapUiTableCtrlScr").scrollLeft(iScrollLeft);
		if (!!sap.ui.Device.browser.webkit && this._bRtlMode) {
			var oScrollDomRef = $this.find(".sapUiTableColHdrScr").get(0);
			iScrollLeft = oScrollDomRef.scrollWidth - oScrollDomRef.clientWidth - this._oHSb.getScrollPosition();
		}
		$this.find(".sapUiTableColHdrScr").scrollLeft(iScrollLeft);
		this._bSyncScrollLeft = false;
	}

};

/**
 * will be called when the horizontal scrollbar is used. since the table does
 * not render/update the data of all columns (only the visible ones) in case
 * of scrolling horizontally we need to update the content of the columns which
 * became visible.
 * @private
 */
sap.ui.table.Table.prototype.onhscroll = function(oEvent) {

	if (!this._bOnAfterRendering) {

		// sync the column header and the content area
		this._syncHeaderAndContent();

		// update the column headers (resize handles)
		this._updateColumnHeader(true);

		// update the bindings
		if (this.getBinding("rows")) {
			this.updateRows();
		}

	}

};

/**
 * when navigating within the column header we need to synchronize the content
 * area with the position (scrollLeft) of the column header.
 * @private
 */
sap.ui.table.Table.prototype._oncolscroll = function(oEvent) {
	if (!this._bSyncScrollLeft) {
		var $cnt = this.$().find(".sapUiTableColHdrScr");
		if (!!sap.ui.Device.browser.webkit && this._bRtlMode) {
			var oScrollDomRef = this.$().find(".sapUiTableColHdrScr").get(0);
			this._oHSb.setScrollPosition(oScrollDomRef.scrollWidth - oScrollDomRef.clientWidth - $cnt.scrollLeft());
		} else {
			this._oHSb.setNativeScrollPosition($cnt.scrollLeft());
		}
	}
};

/**
 * when navigating within the content area we need to synchronize the column
 * header with the position (scrollLeft) of the content area.
 * @private
 */
sap.ui.table.Table.prototype._oncntscroll = function(oEvent) {
	if (!this._bSyncScrollLeft) {
		var $cnt = this.$().find(".sapUiTableCtrlScr");
		this._oHSb.setNativeScrollPosition($cnt.scrollLeft());
	}
};


/**
 * listens to the mousedown events for starting column drag & drop. therefore
 * we wait 200ms to make sure it is no click on the column to open the menu.
 * @private
 */
sap.ui.table.Table.prototype.onmousedown = function(oEvent) {

	// only move on left click!
	var bLeftButton = oEvent.button === (sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version <= 8 ? 1 : 0);
	if (bLeftButton) {

		var $target = jQuery(oEvent.target);
	
		var $splitter = this.$("sb");
		if (oEvent.target == $splitter[0]) {
	
			// Fix for IE text selection while dragging
			jQuery(document.body).bind("selectstart",jQuery.proxy(this._splitterSelectStart,this));
	
			var offset = $splitter.offset();
			var height = $splitter.height();
			var width = $splitter.width();
	
			jQuery(document.body).append(
					"<div id=\"" + this.getId() + "-ghost\" class=\"sapUiHSBGhost\" style =\" height:" + height + "px; width:"
					+ width + "px; left:" + offset.left + "px; top:" + offset.top + "px\" ></div>");
	
			// append overlay over splitter to enable correct functionality of moving the splitter
			$splitter.append(
					"<div id=\"" + this.getId() + "-overlay\" style =\"left: 0px;" +
							" right: 0px; bottom: 0px; top: 0px; position:absolute\" ></div>");
	
			jQuery(document).bind("mouseup", jQuery.proxy(this._onGhostMouseRelease, this));
			jQuery(document).bind("mousemove", jQuery.proxy(this._onGhostMouseMove, this));
			return;
		}
	
		var $col = $target.closest(".sapUiTableCol");
		if ($col.length === 1) {
	
			this._bShowMenu = true;
			this._sDelayedMenuTimer = jQuery.sap.delayedCall(200, this, function() {
				this._bShowMenu = false;
			});
					
			if (this.getEnableColumnReordering()) {
		
				var iIndex = parseInt($col.attr("data-sap-ui-colindex"), 10);
				if (iIndex > this._iLastFixedColIndex) {
				
					var oColumn = this.getColumns()[iIndex];
					
					this._sDelayedActionTimer = jQuery.sap.delayedCall(200, this, function() {
						this._onColumnMoveStart(oColumn);
					});
					
				}
	
			}
		}
	
		// in case of FireFox and CTRL+CLICK it selects the target TD 
		//   => prevent the default behavior only in this case (to still allow text selection)
		var bCtrl = !!(oEvent.metaKey || oEvent.ctrlKey);
		if (!!sap.ui.Device.browser.firefox && bCtrl) {
			oEvent.preventDefault();
		}
		
	}

};

/**
 * controls the action mode when clicking into the table control
 * @private
 */
sap.ui.table.Table.prototype.onmouseup = function(oEvent) {
	if (this.$().find(".sapUiTableCtrl td :focus").length > 0) {
		// when clicking into a focusable control we enter the action mode!
		this._enterActionMode(this.$().find(".sapUiTableCtrl td :focus"));
	} else {
		// when clicking anywhere else in the table we leave the action mode!
		this._leaveActionMode(oEvent);
	}
};

/**
 * handles the selection when clicking on the table
 * @private
 */
sap.ui.table.Table.prototype.onclick = function(oEvent) {
	// clean up the timer
	jQuery.sap.clearDelayedCall(this._sDelayedActionTimer);
	// forward the event
	this._onSelect(oEvent);
};

/**
 * handles the focus in to reposition the focus or prevent default handling for
 * column resizing
 * @private
 */
sap.ui.table.Table.prototype.onfocusin = function(oEvent) {
	var $target = jQuery(oEvent.target);
	// KEYBOARD HANDLING (_bIgnoreFocusIn is set in onsaptabXXX)
	if (!this._bIgnoreFocusIn && ($target.hasClass("sapUiTableCtrlBefore") || $target.hasClass("sapUiTableCtrlAfter"))) {
		// reset the aria description of the table that the table is announced the
		// first time the table grabs the focus
		this.$("ariadesc").text(this._oResBundle.getText("TBL_TABLE"));
		// when entering the before or after helper DOM elements we put the
		// focus on the current focus element of the item navigation and we
		// leave the action mode!
		this._leaveActionMode();
		// set the focus on the last focused dom ref of the item navigation or
		// in case if not set yet (tab previous into item nav) then we set the
		// focus to the root domref
		jQuery(this._oItemNavigation.getFocusedDomRef() || this._oItemNavigation.getRootDomRef()).focus();
	} else if (jQuery.sap.endsWith(oEvent.target.id, "-rsz")) {
		// prevent that the ItemNavigation grabs the focus!
		// only for the column resizing
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};


// =============================================================================
// SELECTION HANDLING
// =============================================================================

/**
 * handles the row selection and the column header menu
 * @private
 */
sap.ui.table.Table.prototype._onSelect = function(oEvent) {

	// trigger column menu
	var $target = jQuery(oEvent.target);

	// determine modifier keys
	var bShift = oEvent.shiftKey;
	var bCtrl = !!(oEvent.metaKey || oEvent.ctrlKey);

	// column header?
	var $col = $target.closest(".sapUiTableCol");
	if (this._bShowMenu && $col.length === 1) {
		var iIndex = parseInt($col.attr("data-sap-ui-colindex"), 10);
		var oColumn = this.getColumns()[iIndex];
		this._onColumnSelect(oColumn);
		return;
	}

	// row header?
	var $row = $target.closest(".sapUiTableRowHdr");
	if ($row.length === 1) {
		var iIndex = parseInt($row.attr("data-sap-ui-rowindex"), 10);
		this._onRowSelect(this.getFirstVisibleRow() + iIndex, bShift, bCtrl);
		return;
	}

	// table control? (only if the selection behavior is set to row)
	if (/*!this._bActionMode && */ (
	    this.getSelectionBehavior() === sap.ui.table.SelectionBehavior.Row ||
	    this.getSelectionBehavior() === sap.ui.table.SelectionBehavior.RowOnly)) {
		var $row = $target.closest(".sapUiTableCtrl > tbody > tr");
		if ($row.length === 1) {
			var iIndex = parseInt($row.attr("data-sap-ui-rowindex"), 10);
			this._onRowSelect(this.getFirstVisibleRow() + iIndex, bShift, bCtrl);
			return;
		}
	}

	// select all?
	if (jQuery.sap.containsOrEquals(this.getDomRef("selall"), oEvent.target)) {
		if (this._getRowCount() === this.getSelectedIndices().length) {
			this.clearSelection();
		} else {
			this.selectAll();
		}
		if (!!sap.ui.Device.browser.internet_explorer) {
			this.$("selall").focus();
		}
		return;
	}

};


// =============================================================================
// ROW EVENT HANDLING
// =============================================================================

/**
 * handles the row selection (depending on the mode)
 * @private
 */
sap.ui.table.Table.prototype._onRowSelect = function(iRowIndex, bShift, bCtrl) {

	// in case of IE and SHIFT we clear the text selection
	if (!!sap.ui.Device.browser.internet_explorer && bShift) {
		this._clearTextSelection();
	}

	// is the table bound?
	var oBinding = this.getBinding("rows");
	if (!oBinding) {
		return;
	}

	//var iRowIndex = Math.min(Math.max(0, iRowIndex), this.getBinding("rows").getLength() - 1);
	if (iRowIndex < 0 || iRowIndex >= (oBinding.getLength() || 0)) {
		return;
	}

	this._iSourceRowIndex = iRowIndex;

	var oSelMode = this.getSelectionMode();
	if (oSelMode !== sap.ui.table.SelectionMode.None) {
		if (oSelMode === sap.ui.table.SelectionMode.Single) {
			if (!this.isIndexSelected(iRowIndex)) {
				this.setSelectedIndex(iRowIndex);
			} else {
				this.clearSelection();
			}
		} else {
			// in case of multi toggle behavior a click on the row selection
			// header adds or removes the selected row and the previous seleciton
			// will not be removed
			if (oSelMode === sap.ui.table.SelectionMode.MultiToggle) {
				bCtrl = true;
			}
			if (bShift) {
				// If no row is selected getSelectedIndex returns -1 - then we simply 
				// select the clicked row:
				var iSelectedIndex = this.getSelectedIndex(); 
				if (iSelectedIndex >= 0) {
					this.addSelectionInterval(iSelectedIndex, iRowIndex);
				} else {
					this.setSelectedIndex(iRowIndex);
				}
			} else {
				if (!this.isIndexSelected(iRowIndex)) {
					if (bCtrl) {
						this.addSelectionInterval(iRowIndex, iRowIndex);
					} else {
						this.setSelectedIndex(iRowIndex);
					}
				} else {
					if (bCtrl) {
						this.removeSelectionInterval(iRowIndex, iRowIndex);
					} else {
						if (this.getSelectedIndices().length === 1) {
							this.clearSelection();
						} else {
							this.setSelectedIndex(iRowIndex);
						}
					}
				}
			}
		}
	}

	this._iSourceRowIndex = undefined;

};


// =============================================================================
// COLUMN EVENT HANDLING
// =============================================================================

/**
 * column select event => opens the column menu
 * @private
 */
sap.ui.table.Table.prototype._onColumnSelect = function(oColumn) {

	// forward the event
	var bExecuteDefault = this.fireColumnSelect({
		column: oColumn
	});

	// if the default behavior should be prevented we suppress to open
	// the column menu!
	if (bExecuteDefault) {
		oColumn._openMenu();
	}

};

/**
 * start column moveing
 * @private
 */
sap.ui.table.Table.prototype._onColumnMoveStart = function(oColumn) {

	this._disableTextSelection();

	var $col = oColumn.$();
	var iColIndex = parseInt($col.attr("data-sap-ui-colindex"), 10);
	
	if (iColIndex < this.getFixedColumnCount()) {
		return;
	}

	this._$colGhost = $col.clone().removeAttr("id");

	$col.css({
		"opacity": ".25"
	});

	this._$colGhost.addClass("sapUiTableColGhost").css({
		"left": -10000,
		"top": -10000,
		//Position is set to relative for columns later, if the moving is started a second time the position: relative overwrites
		//the absolut position set by the sapUiTableColGhost class, so we overrite the style attribute for position here to make
		//sure that the position is absolute
		"position": "absolute",
		"z-index": this.$().zIndex() + 10
	});

	// TODO: only for the visible columns!?
	this.$().find(".sapUiTableCol").each(function(iIndex, oElement) {

		var $col = jQuery(this);
		$col.css({position: "relative"});

		$col.data("pos", {
			left: $col.position().left,
			center: $col.position().left + $col.outerWidth() / 2,
			right:  $col.position().left + $col.outerWidth()
		});

	});

	this._$colGhost.appendTo(document.body);

	jQuery(document.body).
		mousemove(jQuery.proxy(this._onColumnMove, this)).
		mouseup(jQuery.proxy(this._onColumnMoved, this));
	

};

/**
 * move the column position the ghost
 * @private
 */
sap.ui.table.Table.prototype._onColumnMove = function(oEvent) {

	var $this = this.$();
	var bRtl = this._bRtlMode;
	var iRelX = oEvent.pageX - $this.offset().left;
	var iDnDColIndex = parseInt(this._$colGhost.attr("data-sap-ui-colindex"), 10);
	var $DnDCol = this.getColumns()[iDnDColIndex].$();

	// find out the new col position
	var iOldColPos = this._iNewColPos;
	this._iNewColPos = iDnDColIndex;
	var that = this;
	$this.find(".sapUiTableCol").each(function(iIndex, oCol) {

		var $col = jQuery(oCol);
		var iColIndex = parseInt($col.attr("data-sap-ui-colindex"), 10);

		if ($col.get(0) !== $DnDCol.get(0)) {

			var oPos = $col.data("pos");

			var bBefore = iRelX >= oPos.left && iRelX <= oPos.center;
			var bAfter = iRelX >= oPos.center && iRelX <= oPos.right;

			if (!bRtl) {
				that._iNewColPos = bBefore ? iColIndex : bAfter ? iColIndex + 1 : that._iNewColPos;
			} else {
				that._iNewColPos = bAfter ? iColIndex : bBefore ? iColIndex + 1 : that._iNewColPos;
			}

			if ((bBefore || bAfter) && iColIndex > iDnDColIndex) {
				that._iNewColPos--;
			}

		}

	});

	// prevent the reordering of the fixed columns
	if (this._iNewColPos <= this._iLastFixedColIndex) {
		this._iNewColPos = iOldColPos;
	}
	if (this._iNewColPos < this.getFixedColumnCount()) {
		this._iNewColPos = iOldColPos;
	}

	// animate the column move
	this._animateColumnMove(iDnDColIndex, iOldColPos, this._iNewColPos);

	// update the ghost position
	this._$colGhost.css({
		"left": oEvent.pageX + 5,
		"top": oEvent.pageY + 5
	});

};

/**
 * animates the column movement
 */
sap.ui.table.Table.prototype._animateColumnMove = function(iColIndex, iOldPos, iNewPos) {

	var bRtl = this._bRtlMode;
	var $DnDCol = this.getColumns()[iColIndex].$();

	// position has been changed => reorder
	if (iOldPos !== iNewPos) {

		for (var i = Math.min(iOldPos, iNewPos), l = Math.max(iOldPos, iNewPos); i <= l; i++) {
			var oCol = this.getColumns()[i];
			if (i !== iColIndex && oCol.getVisible()) {
				oCol.$().stop(true, true).animate({left: "0px"});
			}
		}

		var iOffsetLeft = 0;
		if (iNewPos < iColIndex) {
			for (var i = iNewPos; i < iColIndex; i++) {
				var oCol = this.getColumns()[i];
				if (oCol.getVisible()) {
					var $col = oCol.$();
					iOffsetLeft -= $col.outerWidth();
					$col.stop(true, true).animate({left: $DnDCol.outerWidth() * (bRtl ? -1 : 1) + "px"});
				}
			}
		} else {
			for (var i = iColIndex + 1, l = iNewPos + 1; i < l; i++) {
				var oCol = this.getColumns()[i];
				if (oCol.getVisible()) {
					var $col = oCol.$();
					iOffsetLeft += $col.outerWidth();
					$col.stop(true, true).animate({left: $DnDCol.outerWidth() * (bRtl ? 1 : -1) + "px"});
				}
			}
		}
		$DnDCol.stop(true, true).animate({left: iOffsetLeft * (bRtl ? -1 : 1) + "px"});

	}
	
};

/**
 * columns is moved => update!
 * @private
 */
sap.ui.table.Table.prototype._onColumnMoved = function(oEvent) {

	var iDnDColIndex = parseInt(this._$colGhost.attr("data-sap-ui-colindex"), 10);
	var oDnDCol = this.getColumns()[iDnDColIndex];

	jQuery(document.body).
		unbind("mousemove", this._onColumnMove).
		unbind("mouseup", this._onColumnMoved);

	this._$colGhost.remove();
	this._$colGhost = undefined;

	this._enableTextSelection();

	// forward the event
	var bExecuteDefault = this.fireColumnMove({
		column: oDnDCol,
		newPos: this._iNewColPos
	});

	if (bExecuteDefault && this._iNewColPos !== undefined && this._iNewColPos !== iDnDColIndex) {
		this.removeColumn(oDnDCol);
		this.insertColumn(oDnDCol, this._iNewColPos);
		this._oColHdrItemNav.setFocusedIndex(this._iNewColPos);
	} else {
		this._animateColumnMove(iDnDColIndex, this._iNewColPos, iDnDColIndex);
		oDnDCol.$().css({
			"backgroundColor": "",
			"backgroundImage": "",
			"opacity": ""
		});
	}
	delete this._iNewColPos;

};

/**
 * start the column resize
 * @private
 */
sap.ui.table.Table.prototype._onColumnResizeStart = function(oEvent) {
	
	// only resize on left click!
	var bLeftButton = oEvent.button === (sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version <= 8 ? 1 : 0);
	if (bLeftButton) {
	
		this._iColumnResizeStart = oEvent.pageX;
	
		this._disableTextSelection();
		this._$colResize = jQuery(oEvent.target);
	
		jQuery(document.body).
			mousemove(jQuery.proxy(this._onColumnResize, this)).
			mouseup(jQuery.proxy(this._onColumnResized, this));

	}
	
};

/**
 * resize the column
 * @private
 */
sap.ui.table.Table.prototype._onColumnResize = function(oEvent) {
	
	if (this._iColumnResizeStart && oEvent.pageX < this._iColumnResizeStart + 3 && oEvent.pageX > this._iColumnResizeStart - 3) {
		return;
	}
	
	this._$colResize.addClass("sapUiTableColRszActive");
	this._iColumnResizeStart = null;
	
	var $this = this.$();

	var bRtl = this._bRtlMode;
	var iColIndex = parseInt(this._$colResize.attr("data-sap-ui-colindex"), 10);
	var oColumn = this.getColumns()[iColIndex];
	var $col = oColumn.$();

	// find the total left offset from the document (required for pageX info)
	var iOffsetLeft = $this.find(".sapUiTableCnt").offset().left;

	// relative left position within the table scroll container
	var iRelLeft = oEvent.pageX - iOffsetLeft;

	// get the left position of the column to calculate the new width
	// relative to the parent container (sapUiTableCnt)!
	var iColLeft = $col.position().left;

	// calculate the new width
	var iPos = iRelLeft - iColLeft;

	// check the boundaries for the column width
	var iWidth = bRtl ? $col.outerWidth() - iPos : iPos;
	iWidth = Math.max(iWidth, /* oColumn.getMinWidth() || */ this._iColMinWidth);
	//iWidth = Math.min(iWidth, oColumn.getMaxWidth() || iWidth);

	// calculate and set the position of the resize handle
	var iRszLeft = iColLeft + (bRtl ? $col.outerWidth() - iWidth : iWidth);
	iRszLeft -= (this._$colResize.width() - 2) / 2;
	this._$colResize.css("left", iRszLeft);

	// store the width of the column to apply later
	oColumn._iNewWidth = iWidth;

};

/**
 * column is resized => update!
 * @private
 */
sap.ui.table.Table.prototype._onColumnResized = function(oEvent) {
	
	// ignore when no resize column is set
	if (!this._$colResize) {
		return;
	}

	// get the width of the new column
	var iColIndex = parseInt(this._$colResize.attr("data-sap-ui-colindex"), 10);
	var oColumn = this.getColumns()[iColIndex];

	// if the resize has started and we have a new width for the column
	// we apply it to the column object
	var bResized = false;
	if (!this._iColumnResizeStart && oColumn._iNewWidth) {
		var sWidth;
		var iAvailableSpace = this.$().find(".sapUiTableCtrl").width();
		if (!this._checkPercentageColumnWidth()) {
			sWidth = oColumn._iNewWidth + "px";
		} else {
			var iColumnWidth = Math.round(100 / iAvailableSpace * oColumn._iNewWidth);
			sWidth = iColumnWidth + "%";
		}
	
		this._updateColumnWidth(oColumn, sWidth);
		this._resizeDependentColumns(oColumn, sWidth);
	
		delete oColumn._iNewWidth;
		
		bResized = true;
	}

	// unbind the event handlers
	jQuery(document.body).
		unbind("mousemove", this._onColumnResize).
		unbind("mouseup", this._onColumnResized);

	// focus the column
	oColumn.focus();

	// hide the text selection
	this._$colResize.removeClass("sapUiTableColRszActive");
	this._$colResize = undefined;
	this._enableTextSelection();
	
	// rerender / ignore if nothing changed!
	if (bResized) {
		this.invalidate();
	}

};

sap.ui.table.Table.prototype._resizeDependentColumns = function(oColumn, sWidth) {

	//Adjust columns only if the columns have percentage values
	if (this._checkPercentageColumnWidth()) {
		var aVisibleColumns = this._getVisibleColumns();
		//var oLastVisibleColumn = aVisibleColumns[aVisibleColumns.length - 1]; // NOT USED!
		//var bAllFollowingColumnsFlexible = true; // NOT USED!

		var iColumnIndex = undefined;
		jQuery.each(aVisibleColumns, function(iIndex, oCurrentColumn) {
			if (oColumn === oCurrentColumn) {
				iColumnIndex = iIndex;
			//} else if (iColumnIndex !== undefined && !oCurrentColumn.getFlexible()) { // NOT REQUIRED?
				//bAllFollowingColumnsFlexible = false;
			}
		});

		var iOthersWidth = 0;
		var iLastIndex = aVisibleColumns.length - 1;
		var iTotalPercentage;
		if (iColumnIndex === undefined) {
			iTotalPercentage = 0;
		} else {
			iTotalPercentage = parseInt(sWidth,10);
		}
		var iPercentages = 0;
		var aOtherColumns = [];
		var that = this;

		jQuery.each(aVisibleColumns, function(iIndex, oCurrentColumn) {
			var iColumnPercentage = that._getColumnPercentageWidth(oCurrentColumn);
			if ((((iColumnIndex === iLastIndex && iIndex < iColumnIndex) || ((iColumnIndex !== iLastIndex) && iIndex > iColumnIndex)) && oCurrentColumn.getFlexible()) || iColumnIndex === undefined) {
				iOthersWidth += oCurrentColumn.$().outerWidth();
				iPercentages += iColumnPercentage;
				aOtherColumns.push(oCurrentColumn);
			} else if (iIndex !== iColumnIndex) {
				iTotalPercentage += iColumnPercentage;
			}
		});

		var iCalcPercentage = iTotalPercentage;
		jQuery.each(aOtherColumns, function(iIndex, oCurrentColumn){
			var iColumnPercentage = that._getColumnPercentageWidth(oCurrentColumn);
			var iNewWidth = Math.round((100 - iCalcPercentage) / iPercentages * iColumnPercentage);
			if (iIndex === aOtherColumns.length - 1) {
				iNewWidth = 100 - iTotalPercentage;
			} else {
				iTotalPercentage += iNewWidth;
			}
			that._updateColumnWidth(oCurrentColumn, iNewWidth + "%");
		});
	} else if (!this._hasOnlyFixColumnWidths()) {
		
		var aVisibleColumns = this._getVisibleColumns(),
			iAvailableSpace = this.$().find(".sapUiTableCtrl").width(),
			iColumnIndex,
			iRightColumns = 0,
			iLeftWidth = 0,
			iRightWidth = 0,
			iNonFixedColumns = 0;

		jQuery.each(aVisibleColumns, function(iIndex, oCurrentColumn) {
			//Check columns if they are fixed = they have a pixel width
			if (!jQuery.sap.endsWith(oCurrentColumn.getWidth(), "px")) {
				iNonFixedColumns++;
				return false;
			}
			//if iColumnIndex is defined we already found our column and all other columns are right of that one
			if (iColumnIndex != undefined) {
				iRightWidth += parseInt(oCurrentColumn.getWidth(),10);
				iRightColumns++;
			} else if (oColumn !== oCurrentColumn) {
				iLeftWidth += parseInt(oCurrentColumn.getWidth(),10);
			}
			if (oColumn === oCurrentColumn) {
				iColumnIndex = iIndex;
				//Use new width of column
				iLeftWidth += parseInt(sWidth,10);
			}
		});
		//If there are non fixed columns we don't do this
		if (iNonFixedColumns > 0 || (iLeftWidth + iRightWidth > iAvailableSpace)) {
			return;
		}
		//Available space is all space right of the modified columns
		iAvailableSpace -= iLeftWidth;
		for (var i=iColumnIndex+1;i<aVisibleColumns.length; i++) {
			//Calculate new column width based on previous percentage width
			var oColumn = aVisibleColumns[i],
				iColWidth = parseInt(oColumn.getWidth(),10),
				iPercent = iColWidth / iRightWidth * 100,
				iNewWidth = iAvailableSpace / 100 * iPercent;
			this._updateColumnWidth(oColumn, Math.round(iNewWidth)+'px');
		}
	}
};

sap.ui.table.Table.prototype._getColumnPercentageWidth = function(oColumn) {
	var sColumnWidth = oColumn.getWidth();
	var iColumnPercentage = parseInt(oColumn.getWidth(),10);
	var iTotalWidth = this.$().find(".sapUiTableCtrl").width();
	if (jQuery.sap.endsWith(sColumnWidth, "px")) {
		iColumnPercentage = Math.round(100 / iTotalWidth * iColumnPercentage);
	} else if (!jQuery.sap.endsWith(sColumnWidth, "%")) {
		iColumnPercentage = Math.round(100 / iTotalWidth * oColumn.$().width());
	}
	return iColumnPercentage;
};

sap.ui.table.Table.prototype._updateColumnWidth = function(oColumn, sWidth) {
	// forward the event
	var bExecuteDefault = this.fireColumnResize({
		column: oColumn,
		width: sWidth
	});

	// set the width of the column (when not cancelled)
	if (bExecuteDefault) {
		oColumn.setProperty("width", sWidth, true);
	}
};

/**
 * Check if at least one column has a percentage value
 */
sap.ui.table.Table.prototype._checkPercentageColumnWidth = function() {
	var aColumns = this.getColumns();
	var bHasPercentageColumns = false;
	jQuery.each(aColumns, function(iIndex, oColumn) {
		if (jQuery.sap.endsWith(oColumn.getWidth(), "%")) {
			bHasPercentageColumns = true;
			return false;
		}
	});
	return bHasPercentageColumns;
};

/**
 * Check if table has only non flexible columns with fixed widths and only then
 * the table adds a dummy column to fill the rest of the width instead of resizing
 * the columns to fit the complete table width
 */
sap.ui.table.Table.prototype._hasOnlyFixColumnWidths = function() {
	var bOnlyFixColumnWidths = true;
	jQuery.each(this.getColumns(), function(iIndex, oColumn) {
		var sWidth = oColumn.getWidth();
		if (oColumn.getFlexible() || !sWidth || sWidth.substr(-2) !== "px") {
			bOnlyFixColumnWidths = false;
			return false;
		}
	});
	return bOnlyFixColumnWidths;
};


// =============================================================================
// SORTING & FILTERING
// =============================================================================

sap.ui.table.Table.prototype.sort = function(oColumn, oSortOrder, bAdd) {
	if (jQuery.inArray(oColumn, this.getColumns()) >= 0) {
		oColumn.sort(oSortOrder === sap.ui.table.SortOrder.Descending, bAdd);
	}
};

sap.ui.table.Table.prototype.filter = function(oColumn, sValue) {
	if (jQuery.inArray(oColumn, this.getColumns()) >= 0) {
		oColumn.filter(sValue);
	}
};


// =============================================================================
// SELECTION HANDLING
// =============================================================================

/**
 * updates the visual selection in the HTML markup
 */
sap.ui.table.Table.prototype._updateSelection = function() {
	if (this.getSelectionMode() === sap.ui.table.SelectionMode.None) {
		return;
	}
	var $this = this.$();
	var iFirstRow = this.getFirstVisibleRow();
	var that = this;
	var oResBundle = this._oResBundle;
	var bMultiSelection = this._oSelection.getSelectedIndices().length > 1;
	// Only show "click to select"-tooltip on cell if it actually can be selected that way
	var bSelectOnCell = this.getSelectionBehavior() !== sap.ui.table.SelectionBehavior.RowSelector;
	var sRowSelect           = oResBundle.getText("TBL_ROW_SELECT");
	var sRowSelectKey        = oResBundle.getText("TBL_ROW_SELECT_KEY");
	var sRowDeSelect         = oResBundle.getText("TBL_ROW_DESELECT");
	var sRowDeSelectKey      = oResBundle.getText("TBL_ROW_DESELECT_KEY");
	var sRowSelectMulti      = oResBundle.getText("TBL_ROW_SELECT_MULTI");
	var sRowSelectMultiKey   = oResBundle.getText("TBL_ROW_SELECT_MULTI_KEY");
	var sRowDeSelectMulti    = oResBundle.getText("TBL_ROW_DESELECT_MULTI");
	var sRowDeSelectMultiKey = oResBundle.getText("TBL_ROW_DESELECT_MULTI_KEY");
	
	
	$this.find(".sapUiTableRowHdr").each(function(iIndex, oElement) {
		var $jqTR1 = jQuery($this.find(".sapUiTableCtrlFixed > tbody > tr").get(iIndex));
		var $jqTR2 = jQuery($this.find(".sapUiTableCtrlScroll > tbody > tr").get(iIndex));
		var $jqTR = $jqTR1.add($jqTR2);
		var $jqDIV = jQuery(this);
		var $jqRow = $jqDIV.add($jqTR);
		if (that.isIndexSelected(iFirstRow + iIndex)) {
			if (!jQuery(this).hasClass("sapUiTableRowSel")) {
				jQuery(this).addClass("sapUiTableRowSel");
				$jqTR.addClass("sapUiTableRowSel");
				$jqRow.attr("aria-selected", "true");
				$jqTR.children("td").attr("aria-selected", "true");
			}
			if (bMultiSelection) {
				$jqTR.find(".sapUiTableAriaRowSel").text(sRowDeSelectMultiKey);
				if (bSelectOnCell) {
					$jqRow.attr("title", sRowDeSelectMulti).
						attr("aria-label", sRowDeSelectMultiKey);
					$jqTR.children("td").attr('aria-describedby', that.getId() + "-toggleedit " + that.getId() + "-deselectrowmulti");
				}
			} else {
				$jqTR.find(".sapUiTableAriaRowSel").text(sRowDeSelectKey);
				if (bSelectOnCell) {
					$jqRow.attr("title", sRowDeSelect).
						attr("aria-label", sRowDeSelectKey);
					$jqTR.children("td").attr('aria-describedby', that.getId() + "-toggleedit " + that.getId() + "-deselectrow");
				}
			}
		} else {
			if (jQuery(this).hasClass("sapUiTableRowSel")) {
				jQuery(this).removeClass("sapUiTableRowSel");
				$jqTR.removeClass("sapUiTableRowSel");
				if (that.getSelectionMode()  === sap.ui.table.SelectionMode.Multi ||
				    that.getSelectionMode()  === sap.ui.table.SelectionMode.MultiToggle) {
					$jqRow.attr("aria-selected", "false");
					$jqTR.children("td").attr("aria-selected", "false");
				} else {
					$jqRow.removeAttr("aria-selected");
					$jqTR.children("td").removeAttr("aria-selected");
				}
			}
			if ((that.getSelectionMode() === sap.ui.table.SelectionMode.Multi ||
			    that.getSelectionMode()  === sap.ui.table.SelectionMode.MultiToggle) && that._oSelection.getSelectedIndices().length > 0) {
				$jqTR.find(".sapUiTableAriaRowSel").text(sRowSelectMulti);
				if (bSelectOnCell) {
					$jqRow.attr("title", sRowSelectMulti).
						attr("aria-label", sRowSelectMultiKey);
					$jqTR.children("td").attr('aria-describedby', that.getId() + "-toggleedit " + that.getId() + "-selectrowmulti");
				}
			} else {
				$jqTR.find(".sapUiTableAriaRowSel").text(sRowSelectKey);
				if (bSelectOnCell) {
					$jqRow.attr("title", sRowSelect).
						attr("aria-label", sRowSelectKey);
					$jqTR.children("td").attr('aria-describedby', that.getId() + "-toggleedit " + that.getId() + "-selectrow");
				}
			}
		}
	});
	// update internal property to reflect the correct index
	this.setProperty("selectedIndex", this.getSelectedIndex(), true); 
};


/**
 * notifies the selection listeners about the changed rows
 */
sap.ui.table.Table.prototype._onSelectionChanged = function(oEvent) {
	var aRowIndices = oEvent.getParameter("rowIndices");
	var iRowIndex = this._iSourceRowIndex !== undefined ? this._iSourceRowIndex : this.getSelectedIndex();
	this._updateSelection();
	var oSelMode = this.getSelectionMode();
	if (oSelMode == "Multi" || oSelMode == "MultiToggle") {
		this.$("selall").attr('title',this._oResBundle.getText("TBL_SELECT_ALL")).addClass("sapUiTableSelAll");
	}
	this.fireRowSelectionChange({
		rowIndex: iRowIndex,
		rowContext: this.getContextByIndex(iRowIndex),
		rowIndices: aRowIndices
	});
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.getContextByIndex = function(iIndex) {
	// TODO: ODataListBinding needs to make sure to prevent loading multiple times
	// index must not be smaller than 0! otherwise the ODataModel fails
	var oBinding = this.getBinding("rows");
	return iIndex >= 0 && oBinding ? oBinding.getContexts(iIndex, 1)[0] : null;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.getSelectedIndex = function() {
	return this._oSelection.getLeadSelectedIndex();
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setSelectedIndex = function(iIndex) {
	if (iIndex === -1) {
		//If Index eq -1 no item is selected, therefore clear selection is called
		//SelectionModel doesn't know that -1 means no selection
		this._oSelection.clearSelection();
	} else {
		this._oSelection.setSelectionInterval(iIndex, iIndex);
	}
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.clearSelection = function() {
	this._oSelection.clearSelection();
	var oSelMode = this.getSelectionMode();
	if (oSelMode == "Multi" || oSelMode == "MultiToggle") {
		this.$("selall").attr('title',this._oResBundle.getText("TBL_SELECT_ALL")).addClass("sapUiTableSelAll");
	}
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.selectAll = function() {
	var oSelMode = this.getSelectionMode();
	if (oSelMode != "Multi" && oSelMode != "MultiToggle") {
		return this;
	}
	var oBinding = this.getBinding("rows");
	if (oBinding) {
		this._oSelection.setSelectionInterval(0, (oBinding.getLength() || 0) - 1);
		this.$("selall").attr('title',this._oResBundle.getText("TBL_DESELECT_ALL")).removeClass("sapUiTableSelAll");
	}
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.getSelectedIndices = function() {
	return this._oSelection.getSelectedIndices();
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.addSelectionInterval = function(iIndexFrom, iIndexTo) {
	this._oSelection.addSelectionInterval(iIndexFrom, iIndexTo);
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.setSelectionInterval = function(iIndexFrom, iIndexTo) {
	this._oSelection.setSelectionInterval(iIndexFrom, iIndexTo);
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.removeSelectionInterval = function(iIndexFrom, iIndexTo) {
	this._oSelection.removeSelectionInterval(iIndexFrom, iIndexTo);
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Table.prototype.isIndexSelected = function(iIndex) {
	return this._oSelection.isSelectedIndex(iIndex);
};


// =============================================================================
// KEYBOARD HANDLING HELPERS
// =============================================================================

/**
 * scrolls down a single row
 * @private
 */
sap.ui.table.Table.prototype._scrollNext = function() {
	// we are at the end => scroll one down if possible
	if (this.getFirstVisibleRow() < this._getRowCount() - this.getVisibleRowCount()) {
		this.setFirstVisibleRow(Math.min(this.getFirstVisibleRow() + 1, this._getRowCount() - this.getVisibleRowCount()));
	}
};

/**
 * scrolls up a single row
 * @private
 */
sap.ui.table.Table.prototype._scrollPrevious = function() {
	// we are at the beginning => scroll one up if possible
	if (this.getFirstVisibleRow() > 0) {
		this.setFirstVisibleRow(Math.max(this.getFirstVisibleRow() - 1, 0));
	}
};

/**
 * scrolls down a up page
 * @private
 */
sap.ui.table.Table.prototype._scrollPageUp = function() {
	this.setFirstVisibleRow(Math.max(this.getFirstVisibleRow() - this.getVisibleRowCount(), 0));
};

/**
 * scrolls down a complete page
 * @private
 */
sap.ui.table.Table.prototype._scrollPageDown = function() {
	this.setFirstVisibleRow(Math.min(this.getFirstVisibleRow() + this.getVisibleRowCount(), this._getRowCount() - this.getVisibleRowCount()));
};

/**
 * checks if the current target domref is in the first row of the table
 * @private
 */
sap.ui.table.Table.prototype._isTopRow = function(oEvent) {
	var $target = jQuery(oEvent.target);
	var iRowIndex = parseInt($target.add($target.parent()).filter("[data-sap-ui-rowindex]").attr("data-sap-ui-rowindex"), 10);
	var iFixedRows = this.getFixedRowCount();
	if (iFixedRows > 0 && iRowIndex >= iFixedRows) {
		return iRowIndex === iFixedRows;
	}
	return iRowIndex === 0;
};

/**
 * checks if the current target domref is in the last row of the table
 * @private
 */
sap.ui.table.Table.prototype._isBottomRow = function(oEvent) {
	var $target = jQuery(oEvent.target);
	var iRowIndex = parseInt($target.add($target.parent()).filter("[data-sap-ui-rowindex]").attr("data-sap-ui-rowindex"), 10);
	var iFixedRows = this.getFixedBottomRowCount();
	if (iFixedRows > 0 && iRowIndex <= this.getVisibleRowCount() - 1 - iFixedRows) {
		return iRowIndex === this.getVisibleRowCount() - 1 - iFixedRows;
	}
	return iRowIndex === this.getVisibleRowCount() - 1;
};

/**
 * enters the action mode. in the action mode the user can navigate through the
 * interactive controls of the table by using the TAB & SHIFT-TAB. this table is
 * aligned with the official WAI-ARIA 1.0.
 * @private
 */
sap.ui.table.Table.prototype._enterActionMode = function($Focusable) {
	// only enter the action mode when not already in action mode and:
	if ($Focusable.length > 0 && !this._bActionMode) {

		//If cell has no tabbable element, we don't do anything
		if($Focusable.filter(":sapTabbable").length == 0) {
			return;
		}

		// in the action mode we need no item navigation
		this._bActionMode = true;
		this.removeDelegate(this._oItemNavigation);

		// remove the tab index from the item navigation
		jQuery(this._oItemNavigation.getFocusedDomRef()).attr("tabindex", "-1");

		// set the focus to the active control
		$Focusable.filter(":sapTabbable").eq(0).focus();
	}
};

/**
 * leaves the action mode and enters the navigation mode. in the navigation mode
 * the user can navigate through the cells of the table by using the arrow keys,
 * page up & down keys, home and end keys. this table is aligned with the
 * official WAI-ARIA 1.0.
 * @private
 */
sap.ui.table.Table.prototype._leaveActionMode = function(oEvent) {

 // TODO: update ItemNavigation position otherwise the position is strange!
 //        EDIT AN SCROLL!

	if (this._bActionMode) {

		// in the navigation mode we use the item navigation
		this._bActionMode = false;
		this.addDelegate(this._oItemNavigation);

		// reset the tabindex of the focused domref of the item navigation
		jQuery(this._oItemNavigation.getFocusedDomRef()).attr("tabindex", "0");

		// when we have an event which is responsible to leave the action mode
		// we search for the closest
		if (oEvent) {
			if (jQuery(oEvent.target).closest("td[tabindex='-1']").length > 0) {
				// triggered when clicking into a cell, then we focus the cell
				var iIndex = jQuery(this._oItemNavigation.aItemDomRefs).index(jQuery(oEvent.target).closest("td[tabindex='-1']").get(0));
				this._oItemNavigation.focusItem(iIndex, null);
			} else {
				// somewhere else means whe check if the click happend inside
				// the container, then we focus the last focused element
				// (DON'T KNOW IF THIS IS OK - but we don't know where the focus was!)
				if (jQuery.sap.containsOrEquals(this.$().find(".sapUiTableCCnt").get(0), oEvent.target)) {
					this._oItemNavigation.focusItem(this._oItemNavigation.getFocusedIndex(), null);
				}
			}
		} else {
			// when no event is given we just focus the last focused index
			this._oItemNavigation.focusItem(this._oItemNavigation.getFocusedIndex(), null);
		}
		
	}

};


// =============================================================================
// KEYBOARD HANDLING EVENTS
// =============================================================================

// FYI: two more relevant things are handled in the onclick and onfocusin event

/**
 * handle the row selection via SPACE or ENTER key
 * @private
 */
sap.ui.table.Table.prototype.onsapselectmodifiers = 
sap.ui.table.Table.prototype.onsapselect = function(oEvent) {
	if (oEvent.srcControl !== this && jQuery.inArray(oEvent.srcControl,this.getRows()) === -1 && jQuery.inArray(oEvent.srcControl,this.getColumns()) === -1) {
		return;
	}
	this._bShowMenu = true;
	this._onSelect(oEvent);
	this._bShowMenu = false;
	oEvent.preventDefault();
};

/**
 * handle the row selection via SPACE or ENTER key
 * @private
 */
sap.ui.table.Table.prototype.onkeydown = function(oEvent) {
	var $this = this.$();
	if (!this._bActionMode &&
		oEvent.keyCode == jQuery.sap.KeyCodes.F2 ||
		oEvent.keyCode == jQuery.sap.KeyCodes.ENTER) {
		if ($this.find(".sapUiTableCtrl td:focus").length > 0) {
			this._enterActionMode($this.find(".sapUiTableCtrl td:focus").find(":sapFocusable"));
			oEvent.preventDefault();
			oEvent.stopPropagation();
		}
	} else if (this._bActionMode &&
		oEvent.keyCode == jQuery.sap.KeyCodes.F2) {
		this._leaveActionMode(oEvent);
	} else if (oEvent.keyCode == jQuery.sap.KeyCodes.TAB && this._bActionMode) {
		//Set tabindex to second table if fixed columns are used
		if (this.getFixedColumnCount() > 0) {
			var $cell = jQuery(oEvent.target);
			if ($cell.is("td[role=gridcell]") == false) {
				$cell = $cell.parents("td[role=gridcell]");
			}
			var $row = $cell.parent("tr[data-sap-ui-rowindex]");
			var $table = $row.closest(".sapUiTableCtrl");
			var iRowIndex = parseInt($row.attr("data-sap-ui-rowindex"),10);
			var $cells = $row.find("td[role=gridcell]");
			var iColIndex = $cells.index($cell);
			var iTableCols = $cells.length;
			if (iColIndex === (iTableCols - 1)) {
				var $otherTable;
				if ($table.hasClass("sapUiTableCtrlFixed")) {
					$otherTable = $this.find(".sapUiTableCtrl.sapUiTableCtrlScroll");
				} else {
					$otherTable = $this.find(".sapUiTableCtrl.sapUiTableCtrlFixed");
					iRowIndex++;
					if (iRowIndex == this.getVisibleRowCount()) {
						iRowIndex = 0;
					}
				}
				var $otherRow = $otherTable.find("tr[data-sap-ui-rowindex='" + iRowIndex + "']");
				var $nextFocus = $otherRow.find("td :sapFocusable[tabindex='0']").first();
				if ($nextFocus.length > 0) {
					$nextFocus.focus();
					oEvent.preventDefault();
				}
			}
		}
	}
};

/**
 * handle the ESCAPE key to leave the action mode
 * @private
 */
sap.ui.table.Table.prototype.onsapescape = function(oEvent) {
	this._leaveActionMode(oEvent);
};

/**
 * handle the SHIFT-TAB key
 * <ul>
 *   <li>Navigation Mode: jump to the next focusable control before the table</li>
 *   <li>Action Mode: focus previous focusable control (wrap at the beginning)</li>
 * </ul>
 * @private
 */
sap.ui.table.Table.prototype.onsaptabprevious = function(oEvent) {
	var $this = this.$();
	if (this._bActionMode) {
		if ($this.find(".sapUiTableCtrlFixed").firstFocusableDomRef() === oEvent.target) {
			$this.find(".sapUiTableCtrlScroll").lastFocusableDomRef().focus();
			oEvent.preventDefault();
			oEvent.stopPropagation();
		}
	} else {
		// in case of having the focus in the row or column header we do not need to
		// place the focus to the div before the table control because there we do
		// not need to skip the table controls anymore.
		if (this._oItemNavigation.getFocusedDomRef() === oEvent.target &&
				jQuery.sap.containsOrEquals($this.find(".sapUiTableCCnt").get(0), oEvent.target)) {
			this._bIgnoreFocusIn = true;
			$this.find(".sapUiTableCtrlBefore").focus();
			this._bIgnoreFocusIn = false;
		}
	}
};

/**
 * handle the TAB key:
 * <ul>
 *   <li>Navigation Mode: jump to the next focusable control after the table</li>
 *   <li>Action Mode: focus next focusable control (wrap at the end)</li>
 * </ul>
 * @private
 */
sap.ui.table.Table.prototype.onsaptabnext = function(oEvent) {
	var $this = this.$();
	if (this._bActionMode) {
		if ($this.find(".sapUiTableCCnt").lastFocusableDomRef() === oEvent.target) {
			$this.find(".sapUiTableCCnt").firstFocusableDomRef().focus();
			oEvent.preventDefault();
			oEvent.stopPropagation();
		}
	} else {
		if (this._oItemNavigation.getFocusedDomRef() === oEvent.target) {
			this._bIgnoreFocusIn = true;
			$this.find(".sapUiTableCtrlAfter").focus();
			this._bIgnoreFocusIn = false;
		}
	}
};

/**
 * dynamic scrolling when reaching the bottom row with the ARROW DOWN key
 * @private
 */
sap.ui.table.Table.prototype.onsapdown = function(oEvent) {
	if (!this._bActionMode && this._isBottomRow(oEvent)) {
		if (this.getFirstVisibleRow() != this._getRowCount() - this.getVisibleRowCount() - this.getFixedBottomRowCount()) {
			oEvent.stopImmediatePropagation(true);
			if (this.getNavigationMode() === sap.ui.table.NavigationMode.Scrollbar) {
				this._scrollNext();
			} else {
				this._scrollPageDown();
			}
		}
	}
	oEvent.preventDefault();
};

/**
 * dynamic scrolling when reaching the top row with the ARROW UP key
 * @private
 */
sap.ui.table.Table.prototype.onsapup = function(oEvent) {
	if (!this._bActionMode && this._isTopRow(oEvent)) {
		if (this.getFirstVisibleRow() != 0) {
			oEvent.stopImmediatePropagation(true);
		}
		if (this.getNavigationMode() === sap.ui.table.NavigationMode.Scrollbar) {
			this._scrollPrevious();
		} else {
			this._scrollPageUp();
		}
	}
	oEvent.preventDefault();
};

/**
 * dynamic scrolling when reaching the bottom row with the PAGE DOWN key
 * @private
 */
sap.ui.table.Table.prototype.onsappagedown = function(oEvent) {
	if (!this._bActionMode && this._isBottomRow(oEvent)) {
		this._scrollPageDown();
	}
	oEvent.preventDefault();
};

/**
 * dynamic scrolling when reaching the top row with the PAGE UP key
 * @private
 */
sap.ui.table.Table.prototype.onsappageup = function(oEvent) {
	if (!this._bActionMode) {
		var oIN = this._oItemNavigation;
		var iIndex = this.getColumnHeaderVisible() ? oIN.iColumns : 0;
		// we need to make sure to move to the first row before switching into the column header
		if (oIN.iFocusedIndex >= iIndex && this.getFirstVisibleRow() != 0) {
			var iCol = oIN.iFocusedIndex % oIN.iColumns;
			oIN.focusItem(iIndex + iCol, oEvent);
			oEvent.stopImmediatePropagation(true);
		}
		if (this._isTopRow(oEvent)) {
			this._scrollPageUp();
		}
	}
	oEvent.preventDefault();
};

/**
 * dynamic scrolling when using CTRL + HOME key
 * @private
 */
sap.ui.table.Table.prototype.onsaphomemodifiers = function(oEvent) {
	if (oEvent.metaKey || oEvent.ctrlKey) {
		this.setFirstVisibleRow(0);
	}
};

/**
 * dynamic scrolling when using CTRL + END key
 * @private
 */
sap.ui.table.Table.prototype.onsapendmodifiers = function(oEvent) {
	if (oEvent.metaKey || oEvent.ctrlKey) {
		this.setFirstVisibleRow(this._getRowCount() - this.getVisibleRowCount());
	}
};


// =============================================================================
// GROUPING
// =============================================================================

/* 
 * overridden to hide the group by column when set
 */
sap.ui.table.Table.prototype.setGroupBy = function(vValue) {

	// determine the group by column
	var oGroupBy = vValue;
	if (typeof oGroupBy === "string") {
		oGroupBy = sap.ui.getCore().byId(oGroupBy);
	}

	// only for columns we do the full handling here - otherwise the method
	// setAssociation will fail below with a specific fwk error message
	var bReset = false;
	if (oGroupBy && oGroupBy instanceof sap.ui.table.Column) {
	
		// check for column being part of the columns aggregation
		if (jQuery.inArray(oGroupBy, this.getColumns()) === -1) {
			throw new Error("Column has to be part of the columns aggregation!");
		} 
	
		// fire the event (to allow to cancel the event)
		var bExecuteDefault = this.fireGroup({column: oGroupBy});
	
		// first we reset the grouping indicator of the old column (will show the column)
		var oOldGroupBy = sap.ui.getCore().byId(this.getGroupBy());
		if (oOldGroupBy) {
			oOldGroupBy.setGrouped(false);
			bReset = true; 
		}
	
		// then we set the grouping indicator of the new column (will hide the column)
		// ==> only if the default behavior is not prevented 
		if (bExecuteDefault && oGroupBy instanceof sap.ui.table.Column) {
			oGroupBy.setGrouped(true);
		}
		
	}
	
	// reset the binding when no value is given or the binding needs to be reseted
	// TODO: think about a better handling to recreate the group binding
	if (!oGroupBy || bReset) {
		var oBindingInfo = this.getBindingInfo("rows");
		delete oBindingInfo.binding;
		this._bindAggregation("rows", oBindingInfo);
	}

	// set the new group by column (TODO: undefined doesn't work!)
	return this.setAssociation("groupBy", oGroupBy);
};

/*
 * override the getBinding to inject the grouping information into the JSON model.
 *
 * !!EXPERIMENTAL FEATURE!!
 * 
 * TODO: 
 *   - Grouping is not really possible for models based on OData: 
 *     - it works when loading data from the beginning because in this case the
 *       model has the relevant information (distinct values) to determine the
 *       count of rows and add them properly in the scrollbar as well as adding
 *       the group information to the contexts array which is used by the 
 *       _modifyRow to display the group headers
 *     - it doesn't work when not knowing how many groups are available before
 *       and on which position the group header has to be added - e.g. when 
 *       displaying a snapshot in the middle of the model.
 *   - For OData it might be a server-side feature?
 */
sap.ui.table.Table.prototype.getBinding = function(sName) {

	// default binding is the "rows" binding
	sName = sName || "rows";
	var oBinding = sap.ui.core.Element.prototype.getBinding.call(this, sName);

	// we do all the extended stuff only when grouping is enabled
	if (this.getEnableGrouping()) {

		// require the binding types (think about loading them only if required)
		jQuery.sap.require("sap.ui.model.ClientListBinding");
	
		// check for grouping being supported or not (only for client ListBindings!!) 
		var oGroupBy = sap.ui.getCore().byId(this.getGroupBy());
		var bIsSupported = oGroupBy && oGroupBy.getGrouped() &&
		                   sName === "rows" && oBinding && 
		                   oBinding instanceof sap.ui.model.ClientListBinding;
	
		// only enhance the binding if it has not been done yet and supported!
		if (bIsSupported && !oBinding._modified) {
			
			// once the binding is modified we always return the modified binding
			// and don't wanna modifiy the binding once again
			oBinding._modified = true;
			 
			// hook into the row modification and add the grouping specifics
			this._modifyRow = function(iRowIndex, $row) {
	
				// we add the style override to display the row header
				this.$().find(".sapUiTableRowHdrScr").css("display", "block");

				// modify the rows
				var $rowHdr = this.$().find("div[data-sap-ui-rowindex='" + $row.attr("data-sap-ui-rowindex") + "']");
				if (oBinding.isGroupHeader(iRowIndex)) {
					$row.addClass("sapUiTableGroupHeader sapUiTableRowHidden");
					var sClass = oBinding.isExpanded(iRowIndex) ? "sapUiTableGroupIconOpen" : "sapUiTableGroupIconClosed";
					$rowHdr.html("<div class=\"sapUiTableGroupIcon " + sClass + "\" tabindex=\"-1\">" + oBinding.getTitle(iRowIndex) + "</div>");
					$rowHdr.addClass("sapUiTableGroupHeader").removeAttr("title");
				} else {
					$row.removeClass("sapUiTableGroupHeader");
					$rowHdr.html("");
					$rowHdr.removeClass("sapUiTableGroupHeader");
				}
				
			};
			
			this.onclick = function(oEvent) {
				if (jQuery(oEvent.target).hasClass("sapUiTableGroupIcon")) {
					var $parent = jQuery(oEvent.target).parents("[data-sap-ui-rowindex]");
					if ($parent.length > 0) {
						var iRowIndex = this.getFirstVisibleRow() + parseInt($parent.attr("data-sap-ui-rowindex"), 10);
						var oBinding = this.getBinding("rows");
						if (oBinding.isExpanded(iRowIndex)) {
							oBinding.collapse(iRowIndex);
							jQuery(oEvent.target).removeClass("sapUiTableGroupIconOpen").addClass("sapUiTableGroupIconClosed");
						} else {
							oBinding.expand(iRowIndex);
							jQuery(oEvent.target).removeClass("sapUiTableGroupIconClosed").addClass("sapUiTableGroupIconOpen");
						}
					}
				} else {
					if (sap.ui.table.Table.prototype.onclick) {
						sap.ui.table.Table.prototype.onclick.apply(this, arguments);
					}
				}
			};

			// we use sorting finally to sort the values and afterwards group them
			var sPropertyName = oGroupBy.getSortProperty();
			oBinding.sort(new sap.ui.model.Sorter(sPropertyName));

			// fetch the contexts from the original binding
			var iLength = oBinding.getLength(),
				aContexts = oBinding.getContexts(0, iLength);

			// add the context information for the group headers which are later on
			// used for displaying the grouping information of each group
			var sKey = undefined;
			var iCounter = 0;
			for (var i = iLength - 1; i >= 0; i--) {
				var sNewKey = aContexts[i].getProperty(sPropertyName); 
				if (!sKey) {
					sKey = sNewKey;
				}
				if (sKey !== sNewKey) {
					aContexts.splice(i + 1, 0, {
						oContext: aContexts[i + 1],
						name: sKey,
						count: iCounter,
						groupHeader: true,
						expanded: true
					});
					sKey = sNewKey;
					iCounter = 0;
				}
				iCounter++;
			}
			aContexts.splice(0, 0, {
				oContext: aContexts[0],
				name: sKey,
				count: iCounter,
				groupHeader: true,
				expanded: true
			});
		
			// extend the binding and hook into the relevant functions to provide
			// access to the grouping information for the _modifyRow function
			jQuery.extend(oBinding, {
				getLength: function() {
					return aContexts.length;
				},
				getContexts: function(iStartIndex, iLength) {
					return aContexts.slice(iStartIndex, iStartIndex + iLength);
				},
				isGroupHeader: function(iIndex) {
					var oContext = aContexts[iIndex];
					return oContext && !(oContext instanceof sap.ui.model.Context);
				},
				getTitle: function(iIndex) {
					var oContext = aContexts[iIndex];
					return oContext && !(oContext instanceof sap.ui.model.Context) && (oContext["name"] + " - " + oContext["count"]);
				},
				isExpanded: function(iIndex) {
					return this.isGroupHeader(iIndex) && aContexts[iIndex].expanded;
				},
				expand: function(iIndex) {
					if (this.isGroupHeader(iIndex) && !aContexts[iIndex].expanded) {
						for (var i = 0; i < aContexts[iIndex].childs.length; i++) {
							aContexts.splice(iIndex + 1 + i, 0, aContexts[iIndex].childs[i]);
						}
						delete aContexts[iIndex].childs;
						aContexts[iIndex].expanded = true;
						this._fireChange();
					}
				},
				collapse: function(iIndex) {
					if (this.isGroupHeader(iIndex) && aContexts[iIndex].expanded) {
						aContexts[iIndex].childs = aContexts.splice(iIndex + 1, aContexts[iIndex].count);
						aContexts[iIndex].expanded = false;
						this._fireChange();
					}
				}
				
			});
			
		}
		
	}

	return oBinding;

};

sap.ui.table.Table.prototype.resetGrouping = function() {

	// reset the group binding only when enhanced
	var oBinding = this.getBinding("rows");
	if (oBinding && oBinding._modified) {

		// we remove the style override to display the row header
		this.$().find(".sapUiTableRowHdrScr").css("display", "");

		// if the grouping is not supported we remove the hacks we did
		// and simply return the binding finally
		this.onclick = sap.ui.table.Table.prototype.onclick;
		this._modifyRow = undefined;
		
		// reset the binding
		var oBindingInfo = this.getBindingInfo("rows");
		this.unbindRows();
		this.bindRows(oBindingInfo);

	}

};

sap.ui.table.Table.prototype.setEnableGrouping = function(bEnableGrouping) {
	// set the property
	this.setProperty("enableGrouping", bEnableGrouping);
	// reset the grouping
	if (!bEnableGrouping) {
		this.resetGrouping();
	}
	// update the column headers
	var aCols = this.getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		if (aCols[i].getMenu()) {
			aCols[i].getMenu()._bInvalidated = true;
		}
	}
	return this;
}; 

sap.ui.table.Table.prototype.setShowColumnVisibilityMenu = function(bShowColumnVisibilityMenu) {
	this.setProperty("showColumnVisibilityMenu", bShowColumnVisibilityMenu);
	var aCols = this.getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		if (aCols[i].getMenu()) {
			aCols[i].getMenu()._bInvalidated = true;
		}
	}
	return this;
}; 

/**
 * The selectstart event triggered in IE to select the text.
 * @private
 * @param {event} oEvent The splitterselectstart event
 * @return {boolean} false
 */
sap.ui.table.Table.prototype._splitterSelectStart = function(oEvent){
	oEvent.preventDefault();
	oEvent.stopPropagation();
	return false;
};

/**
 * drops the splitter bar
 */
sap.ui.table.Table.prototype._onGhostMouseRelease = function(oEvent) {

	var splitterBarGhost = this.getDomRef("ghost");

	var iNewHeight = oEvent.pageY - this.$().offset().top;

    this.setVisibleRowCount(this._calculateRowsToDisplay(iNewHeight));

	jQuery(splitterBarGhost).remove();
	this.$("overlay").remove();

	jQuery(document.body).unbind("selectstart", this._splitterSelectStart);
	jQuery(document).unbind("mouseup", this._onGhostMouseRelease);
	jQuery(document).unbind("mousemove", this._onGhostMouseMove);

};

sap.ui.table.Table.prototype._onGhostMouseMove = function(oEvent) {
	var splitterBarGhost = this.getDomRef("ghost");

	var min = this.$().offset().top;
	if (oEvent.pageY > min) {
		jQuery(splitterBarGhost).css("top", oEvent.pageY + "px");
	}
};

sap.ui.table.Table.prototype._calculateRowsToDisplay = function(iHeight) {
	var $this = this.$();
	var iControlHeight = this.$().outerHeight();
	var iHeaderHeight = $this.find('.sapUiTableColHdrCnt').outerHeight();
	var iContentHeight = $this.find('.sapUiTableCCnt').outerHeight();
	var iMinRowCount = this.getMinAutoRowCount()||5; 

	var iRowHeight = $this.find(".sapUiTableCtrl tr[data-sap-ui-rowindex='0']").outerHeight();
	//No rows displayed when visible row count == 0, now row height can be determined, therefore we set standard row height
	if (iRowHeight == null) {
		var sRowHeightParamName = "sap.ui.table.Table:sapUiTableRowHeight";
		iRowHeight = parseInt(sap.ui.core.theming.Parameters.get(sRowHeightParamName), 10);
	}
	var iAvailableSpace = iHeight - (iControlHeight - iHeaderHeight - iContentHeight) - iHeaderHeight;

	return Math.max(iMinRowCount, Math.floor(iAvailableSpace/iRowHeight));
};

sap.ui.table.Table.prototype.setShowNoData = function(bShowNoData) {
	this.setProperty('showNoData', bShowNoData, true);
	bShowNoData = this.getProperty('showNoData');
	if (!bShowNoData) {
		this.$().removeClass("sapUiTableEmpty");
	} else {
		this._updateNoData();
	}
	return this;
};
