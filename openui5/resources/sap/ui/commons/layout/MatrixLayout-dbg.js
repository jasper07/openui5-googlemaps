/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.MatrixLayout.
jQuery.sap.declare("sap.ui.commons.layout.MatrixLayout");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new layout/MatrixLayout.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getLayoutFixed layoutFixed} : boolean (default: true)</li>
 * <li>{@link #getColumns columns} : int</li>
 * <li>{@link #getWidths widths} : sap.ui.core.CSSSize[]</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getRows rows} <strong>(default aggregation)</strong> : sap.ui.commons.layout.MatrixLayoutRow[]</li></ul>
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
 * 
 * <p>
 * A matrix layout arranges controls in a grid structure, using rows which
 * need not have the same number of cells.
 * </p>
 * 
 * <p>
 * It uses predefined cell classes that guarantee appropriate distances
 * between cells in the grid. The cell's <code>vGutter</code> property lets
 * you specify additional horizontal distances easily. You can set these
 * additional distances (known as gutters) with or without separators.
 * The distance for each cell is specified by assigning a specific
 * enumeration value of the class <code>LayoutCellSeparator</code> of the
 * matrix data object.
 * </p>
 * 
 * <p>
 * You should <b>avoid nesting</b> matrix layouts. You should only use a
 * matrix layout if you need to align controls horizontally across rows.
 * </p>
 * 
 * @extends sap.ui.core.Control
 *
 * @author d029921 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.layout.MatrixLayout
 */
sap.ui.core.Control.extend("sap.ui.commons.layout.MatrixLayout", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"createRow"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"layoutFixed" : {type : "boolean", group : "Appearance", defaultValue : true},
		"columns" : {type : "int", group : "Appearance", defaultValue : null},
		"widths" : {type : "sap.ui.core.CSSSize[]", group : "Appearance", defaultValue : null}
	},
	defaultAggregation : "rows",
	aggregations : {
    	"rows" : {type : "sap.ui.commons.layout.MatrixLayoutRow", multiple : true, singularName : "row"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.layout.MatrixLayout with name <code>sClassName</code> 
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
 * @name sap.ui.commons.layout.MatrixLayout.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * 
 * Determines whether the matrix layout, including all its content, is
 * visible. An invisible control will not be rendered.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#setVisible
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * CSS width of the matrix layout.
 * If the LayoutFixed = true a adequate width should be provided.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * 
 * CSS height of the matrix layout.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#setHeight
 * @function
 */


/**
 * Getter for property <code>layoutFixed</code>.
 * Sets the table layout. If fixed the width parameter of a column has priority, if not the width of the content of the colums has priority.
 * The default is "fixed".
 * If the fixed layout is used a adequate width of the MatrixLayout should be provided. Otherwise the column width displayed could be different than the given ones because of browser dependend optimazations.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>layoutFixed</code>
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#getLayoutFixed
 * @function
 */

/**
 * Setter for property <code>layoutFixed</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bLayoutFixed  new value for property <code>layoutFixed</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#setLayoutFixed
 * @function
 */


/**
 * Getter for property <code>columns</code>.
 * Number of columns. If not specified, the number of columns will be determined from the given cells.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>columns</code>
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#getColumns
 * @function
 */

/**
 * Setter for property <code>columns</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iColumns  new value for property <code>columns</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#setColumns
 * @function
 */


/**
 * Getter for property <code>widths</code>.
 * Widths of the columns. Use an array to define the widths of the columns.
 * If a column shall have an automatical sizing enter "auto" for this column width.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize[]} the value of property <code>widths</code>
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#getWidths
 * @function
 */

/**
 * Setter for property <code>widths</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize[]} aWidths  new value for property <code>widths</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#setWidths
 * @function
 */


/**
 * Getter for aggregation <code>rows</code>.<br/>
 * 
 * The matrix layout's individual rows.
 * 
 * 
 * <strong>Note</strong>: this is the default aggregation for layout/MatrixLayout.
 * @return {sap.ui.commons.layout.MatrixLayoutRow[]}
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#getRows
 * @function
 */


/**
 * Inserts a row into the aggregation named <code>rows</code>.
 *
 * @param {sap.ui.commons.layout.MatrixLayoutRow}
 *          oRow the row to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the row should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the row is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the row is inserted at 
 *             the last position        
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#insertRow
 * @function
 */

/**
 * Adds some row <code>oRow</code> 
 * to the aggregation named <code>rows</code>.
 *
 * @param {sap.ui.commons.layout.MatrixLayoutRow}
 *            oRow the row to add; if empty, nothing is inserted
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#addRow
 * @function
 */

/**
 * Removes an row from the aggregation named <code>rows</code>.
 *
 * @param {int | string | sap.ui.commons.layout.MatrixLayoutRow} vRow the row to remove or its index or id
 * @return {sap.ui.commons.layout.MatrixLayoutRow} the removed row or null
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#removeRow
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>rows</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.layout.MatrixLayoutRow[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#removeAllRows
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.layout.MatrixLayoutRow</code> in the aggregation named <code>rows</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.layout.MatrixLayoutRow}
 *            oRow the row whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#indexOfRow
 * @function
 */
	

/**
 * Destroys all the rows in the aggregation 
 * named <code>rows</code>.
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayout#destroyRows
 * @function
 */


/**
 * Creates a new matrix layout row and appends it to this matrix layout.
 *
 * @name sap.ui.commons.layout.MatrixLayout.prototype.createRow
 * @function
 * @param {sap.ui.core.Control} 
 *         oControls
 *         Each argument must be either a matrix layout cell, which is added to the row "as is", or an arbitrary content control, which is wrapped with a new (default) matrix layout cell first and then added to the row.
 * Supports a variable number of arguments!

 * @type sap.ui.commons.layout.MatrixLayout
 * @public
 */


// Start of sap\ui\commons\layout\MatrixLayout.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
jQuery.sap.require("sap.ui.commons.layout.MatrixLayoutCell");
jQuery.sap.require("sap.ui.commons.layout.MatrixLayoutRow");

sap.ui.core.EnabledPropagator.call(sap.ui.commons.layout.MatrixLayout.prototype, true, /* legacy mode */ true);

/**
 * Creates a new matrix layout row and appends it to this matrix layout.
 * Each argument must be either a matrix layout cell, which is added to the row
 * "as is", or an arbitrary content control, which is wrapped with a new
 * (default) matrix layout cell first and then added to the row.
 * @param {sap.ui.commons.layout.MatrixLayoutCell|sap.ui.core.Control|string} rowContent to add
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayout.prototype.createRow = function() {
	var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
	this.addRow(oRow);
	for (var i = 0; i < arguments.length; i++) {
		var oContent = arguments[i];
		var oCell;
		if (oContent instanceof sap.ui.commons.layout.MatrixLayoutCell) {
			// matrix layout cell given, use as is
			oCell = oContent;
		} else if (oContent instanceof sap.ui.core.Control) {
			// any control given, wrap with matrix layout cell first
			   oCell = new sap.ui.commons.layout.MatrixLayoutCell({content : oContent});
		} else if (oContent instanceof Object && oContent.height) {
			oRow.setHeight(oContent.height);
		} else {
			// any string(?) given, display it
			var sText = oContent ? oContent.toString() : "";
				oCell = new sap.ui.commons.layout.MatrixLayoutCell({
					content : new sap.ui.commons.TextView({text : sText})});
		}
			oRow.addCell(oCell);
	}
	return this;
};

/*
 * Overwrites Setter for property <code>widths</code>.
 * Sets the widths of the columns. The values must be stored in an array to be used in renderer.
 * to be compatible with previous version also allow list of values.
 * @param {sap.ui.core.CSSSize[]} aWidths new value for property <code>widths</code>
 * @return {sap.ui.commons.layout.MatrixLayout} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.layout.MatrixLayout.prototype.setWidths = function( aWidths ) {

	var aSetWidths;

	if(!jQuery.isArray(aWidths)){
		// a list of values is used instead of an array -> use this as array
		aSetWidths = jQuery.makeArray(arguments);
	}else{
		aSetWidths = aWidths;
	}

	// set "auto" for empty values
	for ( var i = 0; i < aSetWidths.length; i++) {
		if (aSetWidths[i] == "" || !aSetWidths[i]) {
			aSetWidths[i] = "auto";
		}
	}

	this.setProperty("widths", aSetWidths);

	return this;
};