/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.MatrixLayoutRow.
jQuery.sap.declare("sap.ui.commons.layout.MatrixLayoutRow");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new layout/MatrixLayoutRow.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCells cells} <strong>(default aggregation)</strong> : sap.ui.commons.layout.MatrixLayoutCell[]</li></ul>
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
 * 
 * Non-control element used as part of a matrix layout's inner structure.
 * 
 * @extends sap.ui.core.Element
 *
 * @author d029921 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutRow
 */
sap.ui.core.Element.extend("sap.ui.commons.layout.MatrixLayoutRow", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"addStyleClass", "removeStyleClass", "hasStyleClass"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	aggregatingType : "MatrixLayout",
	properties : {
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null}
	},
	defaultAggregation : "cells",
	aggregations : {
    	"cells" : {type : "sap.ui.commons.layout.MatrixLayoutCell", multiple : true, singularName : "cell"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.layout.MatrixLayoutRow with name <code>sClassName</code> 
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
 * @name sap.ui.commons.layout.MatrixLayoutRow.extend
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Height of the row.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutRow#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.layout.MatrixLayoutRow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutRow#setHeight
 * @function
 */


/**
 * Getter for aggregation <code>cells</code>.<br/>
 * 
 * The matrix layout row's individual cells.
 * 
 * 
 * <strong>Note</strong>: this is the default aggregation for layout/MatrixLayoutRow.
 * @return {sap.ui.commons.layout.MatrixLayoutCell[]}
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutRow#getCells
 * @function
 */


/**
 * Inserts a cell into the aggregation named <code>cells</code>.
 *
 * @param {sap.ui.commons.layout.MatrixLayoutCell}
 *          oCell the cell to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the cell should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the cell is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the cell is inserted at 
 *             the last position        
 * @return {sap.ui.commons.layout.MatrixLayoutRow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutRow#insertCell
 * @function
 */

/**
 * Adds some cell <code>oCell</code> 
 * to the aggregation named <code>cells</code>.
 *
 * @param {sap.ui.commons.layout.MatrixLayoutCell}
 *            oCell the cell to add; if empty, nothing is inserted
 * @return {sap.ui.commons.layout.MatrixLayoutRow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutRow#addCell
 * @function
 */

/**
 * Removes an cell from the aggregation named <code>cells</code>.
 *
 * @param {int | string | sap.ui.commons.layout.MatrixLayoutCell} vCell the cell to remove or its index or id
 * @return {sap.ui.commons.layout.MatrixLayoutCell} the removed cell or null
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutRow#removeCell
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>cells</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.layout.MatrixLayoutCell[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutRow#removeAllCells
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.layout.MatrixLayoutCell</code> in the aggregation named <code>cells</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.layout.MatrixLayoutCell}
 *            oCell the cell whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutRow#indexOfCell
 * @function
 */
	

/**
 * Destroys all the cells in the aggregation 
 * named <code>cells</code>.
 * @return {sap.ui.commons.layout.MatrixLayoutRow} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutRow#destroyCells
 * @function
 */


/**
 * The string given as "sStyleClass" will be added to the "class" attribute of this element's root HTML element.
 * 
 * This method is intended to be used to mark controls as being of a special type for which
 * special styling can be provided using CSS selectors that reference this style class name.
 * 
 * <pre>
 * Example:
 * myButton.addStyleClass("myRedTextButton"); // add a CSS class to one button instance
 * 
 * ...and in CSS:
 * .myRedTextButton {
 * color: red;
 * }
 * </pre>
 * 
 * This will add the CSS class "myRedTextButton" to the Button HTML and the CSS code above will then
 * make the text in this particular button red.
 * 
 * Only characters allowed inside HTML attributes are allowed.
 * Quotes are not allowed and this method will ignore any strings containing quotes.
 * Strings containing spaces are interpreted as ONE custom style class (even though CSS selectors interpret them
 * as different classes) and can only removed later by calling removeStyleClass() with exactly the
 * same (space-containing) string as parameter.
 * Multiple calls with the same sStyleClass will have no different effect than calling once.
 * If sStyleClass is null, the call is ignored.
 * 
 * Returns <code>this</code> to allow method chaining
 *
 * @name sap.ui.commons.layout.MatrixLayoutRow.prototype.addStyleClass
 * @function
 * @param {string} 
 *         sStyleClass
 *         the CSS class name to be added

 * @type sap.ui.commons.layout.MatrixLayoutRow
 * @public
 */


/**
 * Removes the given string from the list of custom style classes that have been set previously.
 * Regular style classes like "sapUiBtn" cannot be removed.
 * 
 * Returns <code>this</code> to allow method chaining
 *
 * @name sap.ui.commons.layout.MatrixLayoutRow.prototype.removeStyleClass
 * @function
 * @param {string} 
 *         sStyleClass
 *         the style to be removed

 * @type sap.ui.commons.layout.MatrixLayoutRow
 * @public
 */


/**
 * Returns true if the given style class string is valid and if this Element has this style class set via a previous call to addStyleClass().
 *
 * @name sap.ui.commons.layout.MatrixLayoutRow.prototype.hasStyleClass
 * @function
 * @param {string} 
 *         sStyleClass
 *         the style to check for

 * @type boolean
 * @public
 */


// Start of sap\ui\commons\layout\MatrixLayoutRow.js
jQuery.sap.require("sap.ui.core.CustomStyleClassSupport");
sap.ui.core.CustomStyleClassSupport.apply(sap.ui.commons.layout.MatrixLayoutRow.prototype);
