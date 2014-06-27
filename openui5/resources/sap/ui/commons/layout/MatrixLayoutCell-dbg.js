/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.MatrixLayoutCell.
jQuery.sap.declare("sap.ui.commons.layout.MatrixLayoutCell");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new layout/MatrixLayoutCell.
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
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.ui.commons.layout.BackgroundDesign (default: 'Transparent')</li>
 * <li>{@link #getColSpan colSpan} : int (default: 1)</li>
 * <li>{@link #getHAlign hAlign} : sap.ui.commons.layout.HAlign (default: 'Begin')</li>
 * <li>{@link #getPadding padding} : sap.ui.commons.layout.Padding (default: 'End')</li>
 * <li>{@link #getRowSpan rowSpan} : int (default: 1)</li>
 * <li>{@link #getSeparation separation} : sap.ui.commons.layout.Separation (default: 'None')</li>
 * <li>{@link #getVAlign vAlign} : sap.ui.commons.layout.VAlign (default: 'Middle')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
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
 * @name sap.ui.commons.layout.MatrixLayoutCell
 */
sap.ui.core.Element.extend("sap.ui.commons.layout.MatrixLayoutCell", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"addStyleClass", "removeStyleClass", "hasStyleClass"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	aggregatingType : "MatrixLayoutRow",
	properties : {
		"backgroundDesign" : {type : "sap.ui.commons.layout.BackgroundDesign", group : "", defaultValue : 'Transparent'},
		"colSpan" : {type : "int", group : "", defaultValue : 1},
		"hAlign" : {type : "sap.ui.commons.layout.HAlign", group : "", defaultValue : 'Begin'},
		"padding" : {type : "sap.ui.commons.layout.Padding", group : "", defaultValue : 'End'},
		"rowSpan" : {type : "int", group : "", defaultValue : 1},
		"separation" : {type : "sap.ui.commons.layout.Separation", group : "", defaultValue : 'None'},
		"vAlign" : {type : "sap.ui.commons.layout.VAlign", group : "", defaultValue : 'Middle'}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.layout.MatrixLayoutCell with name <code>sClassName</code> 
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
 * @name sap.ui.commons.layout.MatrixLayoutCell.extend
 * @function
 */


/**
 * Getter for property <code>backgroundDesign</code>.
 * 
 * Determines the matrix layout cell's background design.
 * 
 *
 * Default value is <code>'Transparent'</code>
 *
 * @return {sap.ui.commons.layout.BackgroundDesign} the value of property <code>backgroundDesign</code>
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#getBackgroundDesign
 * @function
 */

/**
 * Setter for property <code>backgroundDesign</code>.
 *
 * Default value is <code>'Transparent'</code> 
 *
 * @param {sap.ui.commons.layout.BackgroundDesign} oBackgroundDesign  new value for property <code>backgroundDesign</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#setBackgroundDesign
 * @function
 */


/**
 * Getter for property <code>colSpan</code>.
 * 
 * Determines how many columns of the underlying grid structure are occupied
 * by this matrix layout cell.
 * 
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>colSpan</code>
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#getColSpan
 * @function
 */

/**
 * Setter for property <code>colSpan</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iColSpan  new value for property <code>colSpan</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#setColSpan
 * @function
 */


/**
 * Getter for property <code>hAlign</code>.
 * 
 * Determines the horizontal alignment of the matrix layout cell's content
 * with the cell's borders.
 * 
 *
 * Default value is <code>'Begin'</code>
 *
 * @return {sap.ui.commons.layout.HAlign} the value of property <code>hAlign</code>
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#getHAlign
 * @function
 */

/**
 * Setter for property <code>hAlign</code>.
 *
 * Default value is <code>'Begin'</code> 
 *
 * @param {sap.ui.commons.layout.HAlign} oHAlign  new value for property <code>hAlign</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#setHAlign
 * @function
 */


/**
 * Getter for property <code>padding</code>.
 * 
 * Determines the padding of the matrix layout cell's content within the
 * cell's borders. The default value is appropriate for all cells in a
 * form-like layout. Consider to remove the padding on the outer layout in
 * case of nesting.
 * 
 *
 * Default value is <code>'End'</code>
 *
 * @return {sap.ui.commons.layout.Padding} the value of property <code>padding</code>
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#getPadding
 * @function
 */

/**
 * Setter for property <code>padding</code>.
 *
 * Default value is <code>'End'</code> 
 *
 * @param {sap.ui.commons.layout.Padding} oPadding  new value for property <code>padding</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#setPadding
 * @function
 */


/**
 * Getter for property <code>rowSpan</code>.
 * Determines how many rows of the underlying grid structure are occupied by this matrix layout cell.
 * In case a row-height is used, all rows affected by the RowSpan must have the same unit.
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>rowSpan</code>
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#getRowSpan
 * @function
 */

/**
 * Setter for property <code>rowSpan</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iRowSpan  new value for property <code>rowSpan</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#setRowSpan
 * @function
 */


/**
 * Getter for property <code>separation</code>.
 * 
 * Determines how a matrix layout cell is separated from its predecessor,
 * via a vertical gutter of variable width, with or without a vertical line.
 * 
 *
 * Default value is <code>'None'</code>
 *
 * @return {sap.ui.commons.layout.Separation} the value of property <code>separation</code>
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#getSeparation
 * @function
 */

/**
 * Setter for property <code>separation</code>.
 *
 * Default value is <code>'None'</code> 
 *
 * @param {sap.ui.commons.layout.Separation} oSeparation  new value for property <code>separation</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#setSeparation
 * @function
 */


/**
 * Getter for property <code>vAlign</code>.
 * 
 * Determines the vertical alignment of the matrix layout cell's content
 * with the cell's borders.
 * 
 *
 * Default value is <code>'Middle'</code>
 *
 * @return {sap.ui.commons.layout.VAlign} the value of property <code>vAlign</code>
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#getVAlign
 * @function
 */

/**
 * Setter for property <code>vAlign</code>.
 *
 * Default value is <code>'Middle'</code> 
 *
 * @param {sap.ui.commons.layout.VAlign} oVAlign  new value for property <code>vAlign</code>
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#setVAlign
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The matrix layout cell's content (arbitrary controls).
 * 
 * If the matrix row has a defined height and the matrix has layoutFixed = true, the controls inside of a cell should all use the same unit for its height property.
 * 
 * <strong>Note</strong>: this is the default aggregation for layout/MatrixLayoutCell.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#getContent
 * @function
 */


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#removeAllContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.commons.layout.MatrixLayoutCell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.MatrixLayoutCell#destroyContent
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
 * @name sap.ui.commons.layout.MatrixLayoutCell.prototype.addStyleClass
 * @function
 * @param {string} 
 *         sStyleClass
 *         the CSS class name to be added

 * @type sap.ui.commons.layout.MatrixLayoutCell
 * @public
 */


/**
 * Removes the given string from the list of custom style classes that have been set previously.
 * Regular style classes like "sapUiBtn" cannot be removed.
 * 
 * Returns <code>this</code> to allow method chaining
 *
 * @name sap.ui.commons.layout.MatrixLayoutCell.prototype.removeStyleClass
 * @function
 * @param {string} 
 *         sStyleClass
 *         the style to be removed

 * @type sap.ui.commons.layout.MatrixLayoutCell
 * @public
 */


/**
 * Returns true if the given style class string is valid and if this Element has this style class set via a previous call to addStyleClass().
 *
 * @name sap.ui.commons.layout.MatrixLayoutCell.prototype.hasStyleClass
 * @function
 * @param {string} 
 *         sStyleClass
 *         the style to check for

 * @type boolean
 * @public
 */


// Start of sap\ui\commons\layout\MatrixLayoutCell.js
jQuery.sap.require("sap.ui.core.CustomStyleClassSupport");
sap.ui.core.CustomStyleClassSupport.apply(sap.ui.commons.layout.MatrixLayoutCell.prototype);