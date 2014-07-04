/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.table.Column.
jQuery.sap.declare("sap.ui.table.Column");
jQuery.sap.require("sap.ui.table.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new Column.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getFlexible flexible} : boolean (default: true)</li>
 * <li>{@link #getResizable resizable} : boolean (default: true)</li>
 * <li>{@link #getHAlign hAlign} : sap.ui.commons.layout.HAlign (default: sap.ui.commons.layout.HAlign.Begin)</li>
 * <li>{@link #getSorted sorted} : boolean (default: false)</li>
 * <li>{@link #getSortOrder sortOrder} : sap.ui.table.SortOrder (default: sap.ui.table.SortOrder.Ascending)</li>
 * <li>{@link #getSortProperty sortProperty} : string</li>
 * <li>{@link #getFiltered filtered} : boolean (default: false)</li>
 * <li>{@link #getFilterProperty filterProperty} : string</li>
 * <li>{@link #getFilterValue filterValue} : string</li>
 * <li>{@link #getFilterOperator filterOperator} : string</li>
 * <li>{@link #getGrouped grouped} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getFilterType filterType} : any</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getShowFilterMenuEntry showFilterMenuEntry} : boolean (default: true)</li>
 * <li>{@link #getShowSortMenuEntry showSortMenuEntry} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLabel label} <strong>(default aggregation)</strong> : sap.ui.core.Control</li>
 * <li>{@link #getMultiLabels multiLabels} : sap.ui.core.Control[]</li>
 * <li>{@link #getTemplate template} : sap.ui.core.Control</li>
 * <li>{@link #getMenu menu} : sap.ui.commons.Menu</li></ul>
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
 * The column allows to define column specific properties that will be applied when rendering the table.
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.table.Column
 */
sap.ui.core.Element.extend("sap.ui.table.Column", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"sort", "toggleSort"
	],

	// ---- control specific ----
	library : "sap.ui.table",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"flexible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"resizable" : {type : "boolean", group : "Behavior", defaultValue : true},
		"hAlign" : {type : "sap.ui.commons.layout.HAlign", group : "Appearance", defaultValue : sap.ui.commons.layout.HAlign.Begin},
		"sorted" : {type : "boolean", group : "Appearance", defaultValue : false},
		"sortOrder" : {type : "sap.ui.table.SortOrder", group : "Appearance", defaultValue : sap.ui.table.SortOrder.Ascending},
		"sortProperty" : {type : "string", group : "Behavior", defaultValue : null},
		"filtered" : {type : "boolean", group : "Appearance", defaultValue : false},
		"filterProperty" : {type : "string", group : "Behavior", defaultValue : null},
		"filterValue" : {type : "string", group : "Behavior", defaultValue : null},
		"filterOperator" : {type : "string", group : "Behavior", defaultValue : null},
		"grouped" : {type : "boolean", group : "Appearance", defaultValue : false},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"filterType" : {type : "any", group : "Misc", defaultValue : null},
		"name" : {type : "string", group : "Appearance", defaultValue : null},
		"showFilterMenuEntry" : {type : "boolean", group : "Appearance", defaultValue : true},
		"showSortMenuEntry" : {type : "boolean", group : "Appearance", defaultValue : true}
	},
	defaultAggregation : "label",
	aggregations : {
    	"label" : {type : "sap.ui.core.Control", multiple : false}, 
    	"multiLabels" : {type : "sap.ui.core.Control", multiple : true, singularName : "multiLabel"}, 
    	"template" : {type : "sap.ui.core.Control", multiple : false}, 
    	"menu" : {type : "sap.ui.commons.Menu", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.table.Column with name <code>sClassName</code> 
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
 * @name sap.ui.table.Column.extend
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Width of the column.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.table.Column#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setWidth
 * @function
 */


/**
 * Getter for property <code>flexible</code>.
 * Is the width of the column flexible (grows on resize)?
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>flexible</code>
 * @public
 * @name sap.ui.table.Column#getFlexible
 * @function
 */

/**
 * Setter for property <code>flexible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFlexible  new value for property <code>flexible</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setFlexible
 * @function
 */


/**
 * Getter for property <code>resizable</code>.
 * Is the column resizable or not?
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>resizable</code>
 * @public
 * @name sap.ui.table.Column#getResizable
 * @function
 */

/**
 * Setter for property <code>resizable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bResizable  new value for property <code>resizable</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setResizable
 * @function
 */


/**
 * Getter for property <code>hAlign</code>.
 * Horizontal alignment of the column content. Controls with a text align do not inherit the horizontal alignment. You have to set the text align directly on the template.
 *
 * Default value is <code>Begin</code>
 *
 * @return {sap.ui.commons.layout.HAlign} the value of property <code>hAlign</code>
 * @public
 * @name sap.ui.table.Column#getHAlign
 * @function
 */

/**
 * Setter for property <code>hAlign</code>.
 *
 * Default value is <code>Begin</code> 
 *
 * @param {sap.ui.commons.layout.HAlign} oHAlign  new value for property <code>hAlign</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setHAlign
 * @function
 */


/**
 * Getter for property <code>sorted</code>.
 * flag, if the column is sorted or not (displays the sorting indicator, does not trigger the sort method!)
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>sorted</code>
 * @public
 * @name sap.ui.table.Column#getSorted
 * @function
 */

/**
 * Setter for property <code>sorted</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSorted  new value for property <code>sorted</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setSorted
 * @function
 */


/**
 * Getter for property <code>sortOrder</code>.
 * @see sap.ui.table.SortOrder (default value: "Ascending")
 *
 * Default value is <code>Ascending</code>
 *
 * @return {sap.ui.table.SortOrder} the value of property <code>sortOrder</code>
 * @public
 * @name sap.ui.table.Column#getSortOrder
 * @function
 */

/**
 * Setter for property <code>sortOrder</code>.
 *
 * Default value is <code>Ascending</code> 
 *
 * @param {sap.ui.table.SortOrder} oSortOrder  new value for property <code>sortOrder</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setSortOrder
 * @function
 */


/**
 * Getter for property <code>sortProperty</code>.
 * Specifies the binding property on which the column will sort.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>sortProperty</code>
 * @public
 * @name sap.ui.table.Column#getSortProperty
 * @function
 */

/**
 * Setter for property <code>sortProperty</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSortProperty  new value for property <code>sortProperty</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setSortProperty
 * @function
 */


/**
 * Getter for property <code>filtered</code>.
 * flag, if the column is filtered or not (displays the filter indicator, does not trigger the filter method!)
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>filtered</code>
 * @public
 * @name sap.ui.table.Column#getFiltered
 * @function
 */

/**
 * Setter for property <code>filtered</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFiltered  new value for property <code>filtered</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setFiltered
 * @function
 */


/**
 * Getter for property <code>filterProperty</code>.
 * Specifies the binding property on which the column will filter.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>filterProperty</code>
 * @public
 * @name sap.ui.table.Column#getFilterProperty
 * @function
 */

/**
 * Setter for property <code>filterProperty</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFilterProperty  new value for property <code>filterProperty</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setFilterProperty
 * @function
 */


/**
 * Getter for property <code>filterValue</code>.
 * Specifies the value of the filter as string (will be converted into the propert data type).
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>filterValue</code>
 * @public
 * @name sap.ui.table.Column#getFilterValue
 * @function
 */

/**
 * Setter for property <code>filterValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFilterValue  new value for property <code>filterValue</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setFilterValue
 * @function
 */


/**
 * Getter for property <code>filterOperator</code>.
 * @see sap.ui.model.FilterOperator (default value: "Contains")
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>filterOperator</code>
 * @public
 * @name sap.ui.table.Column#getFilterOperator
 * @function
 */

/**
 * Setter for property <code>filterOperator</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFilterOperator  new value for property <code>filterOperator</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setFilterOperator
 * @function
 */


/**
 * Getter for property <code>grouped</code>.
 * flag, if the column is grouped or not (hides the column!)
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>grouped</code>
 * @public
 * @name sap.ui.table.Column#getGrouped
 * @function
 */

/**
 * Setter for property <code>grouped</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bGrouped  new value for property <code>grouped</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setGrouped
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
 * @name sap.ui.table.Column#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setVisible
 * @function
 */


/**
 * Getter for property <code>filterType</code>.
 * Type of Filter. This is used to transform the search term to the specified type, to make sure that the right columns are displayed. This should be the same as defined in binding for this column. Alternativly, you can pass a function which does the conversion. The functions only parameter is the string to convert. By default the filter type is String.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>filterType</code>
 * @public
 * @since 1.9.2
 * @name sap.ui.table.Column#getFilterType
 * @function
 */

/**
 * Setter for property <code>filterType</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oFilterType  new value for property <code>filterType</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.2
 * @name sap.ui.table.Column#setFilterType
 * @function
 */


/**
 * Getter for property <code>name</code>.
 * The name of the column which is used in the column visibility menu item as text. If not set as fallback the column menu tries to get the text from the nested Label.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @since 1.11.1
 * @name sap.ui.table.Column#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.1
 * @name sap.ui.table.Column#setName
 * @function
 */


/**
 * Getter for property <code>showFilterMenuEntry</code>.
 * Define if the filter menu entry is displayed
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showFilterMenuEntry</code>
 * @public
 * @since 1.13.0
 * @name sap.ui.table.Column#getShowFilterMenuEntry
 * @function
 */

/**
 * Setter for property <code>showFilterMenuEntry</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowFilterMenuEntry  new value for property <code>showFilterMenuEntry</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.0
 * @name sap.ui.table.Column#setShowFilterMenuEntry
 * @function
 */


/**
 * Getter for property <code>showSortMenuEntry</code>.
 * Define if the sort menu entries are displayed
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showSortMenuEntry</code>
 * @public
 * @since 1.13.0
 * @name sap.ui.table.Column#getShowSortMenuEntry
 * @function
 */

/**
 * Setter for property <code>showSortMenuEntry</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowSortMenuEntry  new value for property <code>showSortMenuEntry</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.0
 * @name sap.ui.table.Column#setShowSortMenuEntry
 * @function
 */


/**
 * Getter for aggregation <code>label</code>.<br/>
 * Label (header renderer) of the column which is displayed in the column header. Define a control for each header row in the table. This aggregation is for the standard behaviour, if you only want to display one single row header.
 * 
 * <strong>Note</strong>: this is the default aggregation for Column.
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.ui.table.Column#getLabel
 * @function
 */


/**
 * Setter for the aggregated <code>label</code>.
 * @param {sap.ui.core.Control} oLabel
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setLabel
 * @function
 */
	

/**
 * Destroys the label in the aggregation 
 * named <code>label</code>.
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#destroyLabel
 * @function
 */


/**
 * Getter for aggregation <code>multiLabels</code>.<br/>
 * Labels (header renderer) of the column which are displayed in the column header. Define a control for each header row in the table. Use this aggregation, if you want to use multiple headers per column.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @since 1.13.1
 * @name sap.ui.table.Column#getMultiLabels
 * @function
 */


/**
 * Inserts a multiLabel into the aggregation named <code>multiLabels</code>.
 *
 * @param {sap.ui.core.Control}
 *          oMultiLabel the multiLabel to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the multiLabel should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the multiLabel is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the multiLabel is inserted at 
 *             the last position        
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.1
 * @name sap.ui.table.Column#insertMultiLabel
 * @function
 */

/**
 * Adds some multiLabel <code>oMultiLabel</code> 
 * to the aggregation named <code>multiLabels</code>.
 *
 * @param {sap.ui.core.Control}
 *            oMultiLabel the multiLabel to add; if empty, nothing is inserted
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.1
 * @name sap.ui.table.Column#addMultiLabel
 * @function
 */

/**
 * Removes an multiLabel from the aggregation named <code>multiLabels</code>.
 *
 * @param {int | string | sap.ui.core.Control} vMultiLabel the multiLabel to remove or its index or id
 * @return {sap.ui.core.Control} the removed multiLabel or null
 * @public
 * @since 1.13.1
 * @name sap.ui.table.Column#removeMultiLabel
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>multiLabels</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @since 1.13.1
 * @name sap.ui.table.Column#removeAllMultiLabels
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>multiLabels</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oMultiLabel the multiLabel whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @since 1.13.1
 * @name sap.ui.table.Column#indexOfMultiLabel
 * @function
 */
	

/**
 * Destroys all the multiLabels in the aggregation 
 * named <code>multiLabels</code>.
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.1
 * @name sap.ui.table.Column#destroyMultiLabels
 * @function
 */


/**
 * Getter for aggregation <code>template</code>.<br/>
 * Template (cell renderer) of this column. A template is decoupled from the column which means after changing the templates' properties or aggregations an explicit invalidation of the column or table is required. The default is: sap.ui.commons.TextView.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.ui.table.Column#getTemplate
 * @function
 */


/**
 * Setter for the aggregated <code>template</code>.
 * @param {sap.ui.core.Control} oTemplate
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setTemplate
 * @function
 */
	

/**
 * Destroys the template in the aggregation 
 * named <code>template</code>.
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#destroyTemplate
 * @function
 */


/**
 * Getter for aggregation <code>menu</code>.<br/>
 * The menu used by the column. By default the {@link sap.ui.table.ColumnMenu} is used.
 * 
 * @return {sap.ui.commons.Menu}
 * @public
 * @name sap.ui.table.Column#getMenu
 * @function
 */


/**
 * Setter for the aggregated <code>menu</code>.
 * @param {sap.ui.commons.Menu} oMenu
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#setMenu
 * @function
 */
	

/**
 * Destroys the menu in the aggregation 
 * named <code>menu</code>.
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.table.Column#destroyMenu
 * @function
 */


/**
 * sorts the current column ascending or descending
 *
 * @name sap.ui.table.Column.prototype.sort
 * @function
 * @param {boolean} 
 *         bDescending
 *         sort order of the column (if undefined the default will be ascending)

 * @type sap.ui.table.Column
 * @public
 * @deprecated Since version 1.5.1. 
 * Please use the function "sap.ui.Table.prototype.sort".
 */


/**
 * toggles the sort order of the column
 *
 * @name sap.ui.table.Column.prototype.toggleSort
 * @function

 * @type sap.ui.table.Column
 * @public
 * @deprecated Since version 1.5.1. 
 * Please use the function "sap.ui.Table.prototype.sort".
 */


// Start of sap\ui\table\Column.js
jQuery.sap.require("sap.ui.core.RenderManager");
jQuery.sap.require("sap.ui.model.Type");
jQuery.sap.require("sap.ui.model.Filter");
jQuery.sap.require("sap.ui.model.Sorter");
jQuery.sap.require("sap.ui.commons.Image");
jQuery.sap.require("sap.ui.commons.Label");
jQuery.sap.require("sap.ui.commons.TextField");
jQuery.sap.require("sap.ui.model.type.String");

/** default filter type for the columns */
sap.ui.table.Column._DEFAULT_FILTER_TYPE = new sap.ui.model.type.String();

/**
 * called when the column is initialized
 */
sap.ui.table.Column.prototype.init = function() {

	this.oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.table");
	this._oSorter = null;

};

/**
 * called when the column is destroyed
 */
sap.ui.table.Column.prototype.exit = function() {

	// destroy the sort image
	var oSortImage = sap.ui.getCore().byId(this.getId() + "-sortIcon");
	if (oSortImage) {
		oSortImage.destroy();
	}
	
	// destroy the filter image
	var oFilterImage = sap.ui.getCore().byId(this.getId() + "-filterIcon");
	if (oFilterImage) {
		oFilterImage.destroy();
	}
	
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Column.prototype.invalidate = function(oOrigin) {
	// prevent changes in the template (especially the databinding ones)
	//  - what about exchanging the template? => implemented in setTemplate
	//  - what about modifiying properties? => developer must call invalidate!
	// The problem is that we just need to prevent databinding changes. The
	// problem here is that the databinding bindings are created ones the template
	// is created and has its own model. If now changes are done in the model
	// this directly affects the template which invalidates the column invalidating
	// the complete Table.  
	/*
	 * PART1: When you create the Tooltip (deferred) then it establishes the
	 * connection to its data (also for the template of the column!) and this
	 * finally invalidates the Table which triggers the re-rendering. One
	 * option is to complete decouple the template from the Table by
	 * supressing the invalidate. But this finally also decouples the Table
	 * from any changes on the template after the template has been applied
	 * to the Column. But when re-rendering it would update the column cells.
	 * To notify the Table on proper changes one has to call the method
	 * invalidate on the Table.
	*/
	/* 
	 * PART2: we also suppress the re-rendering in case of the column menu is
	 * rerendered. This is a popup and we use the instance check because of the
	 * menu behind the getMenu function is lazy created when first accessed.
	 */
  if (oOrigin !== this.getTemplate() && !(oOrigin instanceof sap.ui.table.ColumnMenu)) {
  	// changes on the template require to call invalidate on the column or table
    sap.ui.core.Element.prototype.invalidate.apply(this, arguments);
  }
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Column.prototype.setVisible = function(bVisible) {
	var oTable = this.getParent();
	var bExecuteDefault = true;
	if (oTable) {	
		// forward the event
		bExecuteDefault = oTable.fireColumnVisibility({
			column: this,
			newVisible: bVisible
		});
	}
	if (bExecuteDefault) {
		this.setProperty("visible", bVisible);
	}
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Column.prototype.setLabel = function(vLabel) {
	var oLabel = vLabel;
	if (typeof (vLabel) === "string") {
		oLabel = new sap.ui.commons.Label({
			text : vLabel
		});
	}
	this.setAggregation("label", oLabel);
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Column.prototype.setTemplate = function(vTemplate) {
	var oTemplate = vTemplate;
	if (typeof (vTemplate) === "string") {
		oTemplate = new sap.ui.commons.TextView().bindText(vTemplate);
	}
	this.setAggregation("template", oTemplate);
	// manually invalidate the Column (because of the invalidate decoupling to 
	// prevent invalidations from the databinding part)
	this.invalidate();
	return this;
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Column.prototype.getMenu = function() {
	var oMenu = this.getAggregation("menu");
	if (!oMenu) {
		oMenu = this._createMenu();
		this.setMenu(oMenu);
	}
	return oMenu;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Column.prototype.setMenu = function(oMenu) {
	this.setAggregation("menu", oMenu, true);
	return this;
};

/*
 * Factory method. Creates the column menu.
 * 
 * @return {sap.ui.table.ColumnMenu} The created column menu.
 */
sap.ui.table.Column.prototype._createMenu = function() {
	jQuery.sap.require("sap.ui.table.ColumnMenu");
	return new sap.ui.table.ColumnMenu(this.getId() + "-menu");
};


/*
 * @see JSDoc generated by SAPUI5 control API generator
sap.ui.table.Column.prototype.setEditorTemplate = function(vTemplate) {
	var oTemplate = vTemplate;
	if (typeof (vTemplate) === "string") {
		oTemplate = new sap.ui.commons.TextField().bindValue(vTemplate);
	}
	this.setAggregation("editorTemplate", oTemplate);
	return this;
};
*/

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Column.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	this.fireEvent('_widthChanged', { newWidth: sWidth });
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Column.prototype.setSorted = function(bFlag) {
	this.setProperty("sorted", bFlag, true);
	this._renderSortIcon();
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Column.prototype.setSortOrder = function(tSortOrder) {
	this.setProperty("sortOrder", tSortOrder, true);
	this._renderSortIcon();
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Column.prototype.setFiltered = function(bFlag) {
	this.setProperty("filtered", bFlag, true);
	this._renderFilterIcon();
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Column.prototype.setFilterValue = function(sValue) {
	this.setProperty("filterValue", sValue, true);
	if (this.getMenu()) {
		this.getMenu()._setFilterValue(sValue);
	}
	return this;
};


/**
 * Function is called when mouse key is clicked down.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.table.Column.prototype.onmousedown = function(oEvent) {
	var oMenu = this.getAggregation("menu");
	this._bSkipOpen = oMenu && oMenu.bOpen;
};


/**
 * Function is called when mouse leaves the control.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.table.Column.prototype.onmouseout = function(oEvent) {
	if(this._bSkipOpen && jQuery.sap.checkMouseEnterOrLeave(oEvent, this.getDomRef())){
		this._bSkipOpen = false;
	}
};


sap.ui.table.Column.prototype._openMenu = function() {
	if(this._bSkipOpen){
		this._bSkipOpen = false;
		return;
	}
	var oMenu = this.getMenu();
	var eDock = sap.ui.core.Popup.Dock;
	oMenu.open(false, this.getFocusDomRef(), eDock.BeginTop, eDock.BeginBottom, this.getDomRef(), "none none");
};

sap.ui.table.Column.prototype.toggleSort = function() {
	// by default we sort ascending / only if already is sorted ascending then we toggle
	this.sort(this.getSorted() && this.getSortOrder() === sap.ui.table.SortOrder.Ascending);
};

sap.ui.table.Column.prototype.sort = function(bDescending, bAdd) {

	var oTable = this.getParent();
	if (oTable) {

		// get the sort order type
		var oNewSortOrder = bDescending ? sap.ui.table.SortOrder.Descending : sap.ui.table.SortOrder.Ascending;
	
		// notify the event listeners
		var bExecuteDefault = oTable.fireSort({
			column: this,
			sortOrder: oNewSortOrder,
			columnAdded: bAdd
		});

		if (bExecuteDefault) {
		
			// reset the sorting status of all columns
			var aSorters = [];
			var aCols = oTable.getColumns();
			if (bAdd) {
				for (var i = 0, l = aCols.length; i < l; i++) {
					if (aCols[i] == this) {
						// set the sort property of the current column
						this.setProperty("sorted", true, true);
						this.setProperty("sortOrder", oNewSortOrder, true);
						this._oSorter = new sap.ui.model.Sorter(this.getSortProperty(), this.getSortOrder() === sap.ui.table.SortOrder.Descending);
						aSorters.push(this._oSorter);
					} else {
						var oSorter = aCols[i]._oSorter;
						if (oSorter) {
							aSorters.push(oSorter);
						}
					}
				}
			} else {
				for (var i = 0, l = aCols.length; i < l; i++) {
					if (aCols[i] !== this) {
						aCols[i].setProperty("sorted", false, true);
						aCols[i].setProperty("sortOrder", sap.ui.table.SortOrder.Ascending, true);
						aCols[i]._renderSortIcon();
					}
				}
				// set the sort property of the current column
				this.setProperty("sorted", true, true);
				this.setProperty("sortOrder", oNewSortOrder, true);
				this._oSorter = new sap.ui.model.Sorter(this.getSortProperty(), this.getSortOrder() === sap.ui.table.SortOrder.Descending);
				aSorters.push(this._oSorter);
			}
			
			// set the sorted flag and sort the model
			if (oTable.isBound("rows")) {
				
				// sort the binding 
				oTable.getBinding("rows").sort(aSorters);
				
			}
			
			// update the sort icon
			this._renderSortIcon();
			
		}
		
	}
	
	return this;
	
};

sap.ui.table.Column.prototype._renderSortIcon = function() {

	var oTable = this.getParent();
	if (oTable && oTable.getDomRef()) {
		if (this.getSorted()) {
		
			// create the image for the sort order visualization
			var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
			var oImage = sap.ui.getCore().byId(this.getId() + "-sortIcon") || new sap.ui.commons.Image(this.getId() + "-sortIcon");
			oImage.addStyleClass("sapUiTableColIconsOrder");
			if (this.getSortOrder() === sap.ui.table.SortOrder.Ascending) {
				oImage.setSrc(sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_sort_asc.gif"));
			} else {
				oImage.setSrc(sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_sort_desc.gif"));
			}
			
			// apply the image and aria property to the column
			var oRenderManager = new sap.ui.core.RenderManager();
			var htmlImage = oRenderManager.getHTML(oImage);
			this.$().find(".sapUiTableColIconsOrder").remove();
			jQuery(htmlImage).prependTo(this.getDomRef("icons"));
			this.$().attr("aria-sort", this.getSortOrder() === sap.ui.table.SortOrder.Ascending ? "ascending" : "descending");
			
			this.$().find(".sapUiTableColCell").addClass("sapUiTableColSorted");
			
		} else {
		
			// remove the sort indicators
			this.$().find(".sapUiTableColIconsOrder").remove();
			this.$().removeAttr("aria-sort");

			this.$().find(".sapUiTableColCell").removeClass("sapUiTableColSorted");
			
		}
	}

};

sap.ui.table.Column.prototype._getFilter = function() {

	var oFilter = undefined,
	    sPath = this.getFilterProperty(),
	    sValue = this.getFilterValue(),
	    sOperator = this.getFilterOperator(),
	    sParsedValue,
	    sSecondaryParsedValue,
	    oType = this.getFilterType() || sap.ui.table.Column._DEFAULT_FILTER_TYPE,
	    bIsString = oType instanceof sap.ui.model.type.String,
	    aBetween;

	if (sValue) {
	
		// determine the operator 
		if (!sOperator) {
		
			aBetween = sValue.match(/(.*)\s*\.\.\s*(.*)/);
		
			// determine the filter operator depending on the
			if (sValue.indexOf("=") == 0) {
				sOperator = sap.ui.model.FilterOperator.EQ;
				sParsedValue = sValue.substr(1);
			} else if (sValue.indexOf("!=") == 0) {
				sOperator = sap.ui.model.FilterOperator.NE;
				sParsedValue = sValue.substr(2);
			} else if (sValue.indexOf("<=") == 0) {
				sOperator = sap.ui.model.FilterOperator.LE;
				sParsedValue = sValue.substr(2);
			} else if (sValue.indexOf("<") == 0) {
				sOperator = sap.ui.model.FilterOperator.LT;
				sParsedValue = sValue.substr(1);
			} else if (sValue.indexOf(">=") == 0) {
				sOperator = sap.ui.model.FilterOperator.GE;
				sParsedValue = sValue.substr(2);
			} else if (sValue.indexOf(">") == 0) {
				sOperator = sap.ui.model.FilterOperator.GT;
				sParsedValue = sValue.substr(1);
			} else if (aBetween) {
				if (aBetween[1] && aBetween[2]) {
					sOperator = sap.ui.model.FilterOperator.BT;
					sParsedValue = aBetween[1];
					sSecondaryParsedValue = aBetween[2];
				} else if (aBetween[1] && !aBetween[2]) {
					sOperator = sap.ui.model.FilterOperator.GE;
					sParsedValue = aBetween[1];
				} else {
					sOperator = sap.ui.model.FilterOperator.LE;
					sParsedValue = aBetween[2];
				}
			} else if (bIsString && sValue.indexOf("*") == 0 && sValue.lastIndexOf("*") == sValue.length - 1) {
				sOperator = sap.ui.model.FilterOperator.Contains;
				sParsedValue = sValue.substr(1, sValue.length - 2);
			} else if (bIsString && sValue.indexOf("*") == 0) {
				sOperator = sap.ui.model.FilterOperator.EndsWith;
				sParsedValue = sValue.substr(1);
			} else if (bIsString && sValue.lastIndexOf("*") == sValue.length - 1) {
				sOperator = sap.ui.model.FilterOperator.StartsWith;
				sParsedValue = sValue.substr(0, sValue.length - 1);
			} else {
				if (bIsString) {
					// Due to compatibility reason we need to use Contains for Strings instead of EQ as default!!
					sOperator = sap.ui.model.FilterOperator.Contains;
				} else {
					sOperator = sap.ui.model.FilterOperator.EQ;
				}
				sParsedValue = sValue.substr(0);
			}
			if (!sSecondaryParsedValue) {
				oFilter = new sap.ui.model.Filter(sPath, sOperator, this._parseFilterValue(sParsedValue));
			} else {
				oFilter = new sap.ui.model.Filter(sPath, sOperator, this._parseFilterValue(sParsedValue), this._parseFilterValue(sSecondaryParsedValue));
			}
		} else {
			oFilter = new sap.ui.model.Filter(sPath, sOperator, this._parseFilterValue(sValue));
		}

	}

	return oFilter;

};

sap.ui.table.Column.prototype.filter = function(sValue) {

	var oTable = this.getParent();
	if (oTable.isBound("rows")) {
	
		// notify the event listeners
		var bExecuteDefault = oTable.fireFilter({
			column: this,
			value: sValue
		});
		
		if (bExecuteDefault) {
		
			this.setProperty("filtered", !!sValue, true);
			this.setProperty("filterValue", sValue, true);
		
			var aFilters = [];
			var aCols = oTable.getColumns();
			for (var i = 0, l = aCols.length; i < l; i++) {
				var oCol = aCols[i],
					oMenu = oCol.getMenu(),
					oFilter;
				
				try {
					oFilter = oCol._getFilter();
				} catch (e) {
					if (oMenu._setFilterState) {
						oMenu._setFilterState(sap.ui.core.ValueState.Error);
					}
					continue;
				}
				if (oFilter) {
					aFilters.push(oFilter);
					if (oMenu._setFilterState) {
						oMenu._setFilterState(sap.ui.core.ValueState.None);
					}
				}
			}
			oTable.getBinding("rows").filter(aFilters, sap.ui.model.FilterType.Control);
			
			this._renderFilterIcon();
			
		}
		
	}

	return this;
	
};

sap.ui.table.Column.prototype._parseFilterValue = function(sValue) {
	var oFilterType = this.getFilterType();

	if (oFilterType) {
		if (jQuery.isFunction(oFilterType)) {
			sValue = oFilterType(sValue);
		} else {
			sValue = oFilterType.parseValue(sValue, "string");
		}
	}

	return sValue;
};

sap.ui.table.Column.prototype._renderFilterIcon = function() {
	var oTable = this.getParent();
	if (oTable && oTable.getDomRef()) {
		var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
		var oImage = sap.ui.getCore().byId(this.getId() + "-filterIcon") || new sap.ui.commons.Image(this.getId() + "-filterIcon");
		oImage.$().remove();
		oImage.addStyleClass("sapUiTableColIconsFilter");
		if (this.getFiltered()) {
			oImage.setSrc(sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_filter.gif"));
			var oRenderManager = new sap.ui.core.RenderManager();
			var htmlImage = oRenderManager.getHTML(oImage);
			jQuery(htmlImage).prependTo(this.getDomRef("icons"));
			this.$().find(".sapUiTableColCell").addClass("sapUiTableColFiltered");
		} else {
			this.$().find(".sapUiTableColCell").removeClass("sapUiTableColFiltered");
		}
	}
};

sap.ui.table.Column.prototype._restoreIcons = function() {

	if (this.getSorted()) {
		this._renderSortIcon();
	}

	if (this.getFiltered()) {
		this._renderFilterIcon();
	}

};

/**
 * Returns whether the column should be rendered or not. 
 * @return {boolean} true, if the column should be rendered
 * @protected 
 */
sap.ui.table.Column.prototype.shouldRender = function() {
	return this.getVisible() && !this.getGrouped();
};
