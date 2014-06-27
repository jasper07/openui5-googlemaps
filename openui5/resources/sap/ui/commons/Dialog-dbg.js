/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Dialog.
jQuery.sap.declare("sap.ui.commons.Dialog");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Dialog.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getScrollLeft scrollLeft} : int (default: 0)</li>
 * <li>{@link #getScrollTop scrollTop} : int (default: 0)</li>
 * <li>{@link #getTitle title} : string (default: '')</li>
 * <li>{@link #getApplyContentPadding applyContentPadding} : boolean (default: true)</li>
 * <li>{@link #getShowCloseButton showCloseButton} : boolean (default: true)</li>
 * <li>{@link #getResizable resizable} : boolean (default: true)</li>
 * <li>{@link #getMinWidth minWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMinHeight minHeight} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxWidth maxWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxHeight maxHeight} : sap.ui.core.CSSSize</li>
 * <li>{@link #getContentBorderDesign contentBorderDesign} : sap.ui.commons.enums.BorderDesign (default: sap.ui.commons.enums.BorderDesign.None)</li>
 * <li>{@link #getModal modal} : boolean (default: false)</li>
 * <li>{@link #getAccessibleRole accessibleRole} : sap.ui.core.AccessibleRole (default: sap.ui.core.AccessibleRole.Dialog)</li>
 * <li>{@link #getKeepInWindow keepInWindow} : boolean (default: false)</li>
 * <li>{@link #getAutoClose autoClose} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getButtons buttons} : sap.ui.core.Control[]</li>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getDefaultButton defaultButton} : string | sap.ui.commons.Button</li>
 * <li>{@link #getInitialFocus initialFocus} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.Dialog#event:closed closed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * An interactive window appearing on request displaying information to the user. The API supports features such as popups with fixed sizes, popups with unlimited width, scrolling bars for large windows, and control nesting (for example, a drop-down list can be included in the window).
 * @extends sap.ui.core.Control
 * @implements sap.ui.core.PopupInterface
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.Dialog
 */
sap.ui.core.Control.extend("sap.ui.commons.Dialog", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.ui.core.PopupInterface"
	],
	publicMethods : [
		// methods
		"open", "close", "isOpen", "getOpenState"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"scrollLeft" : {type : "int", group : "Behavior", defaultValue : 0},
		"scrollTop" : {type : "int", group : "Behavior", defaultValue : 0},
		"title" : {type : "string", group : "Misc", defaultValue : ''},
		"applyContentPadding" : {type : "boolean", group : "Appearance", defaultValue : true},
		"showCloseButton" : {type : "boolean", group : "Behavior", defaultValue : true},
		"resizable" : {type : "boolean", group : "Behavior", defaultValue : true},
		"minWidth" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"minHeight" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"maxWidth" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"maxHeight" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"contentBorderDesign" : {type : "sap.ui.commons.enums.BorderDesign", group : "Appearance", defaultValue : sap.ui.commons.enums.BorderDesign.None},
		"modal" : {type : "boolean", group : "Misc", defaultValue : false},
		"accessibleRole" : {type : "sap.ui.core.AccessibleRole", group : "Accessibility", defaultValue : sap.ui.core.AccessibleRole.Dialog},
		"keepInWindow" : {type : "boolean", group : "Behavior", defaultValue : false},
		"autoClose" : {type : "boolean", group : "Misc", defaultValue : false}
	},
	defaultAggregation : "content",
	aggregations : {
    	"buttons" : {type : "sap.ui.core.Control", multiple : true, singularName : "button"}, 
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	},
	associations : {
		"defaultButton" : {type : "sap.ui.commons.Button", multiple : false}, 
		"initialFocus" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"closed" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Dialog with name <code>sClassName</code> 
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
 * @name sap.ui.commons.Dialog.extend
 * @function
 */

sap.ui.commons.Dialog.M_EVENTS = {'closed':'closed'};


/**
 * Getter for property <code>width</code>.
 * 
 * Outer width of dialog window. When not set and not constrained by one of the width parameters (minWidth/maxWidth), the window size is automatically adapted to the content.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.Dialog#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * 
 * Outer height of dialog window. When not set and not constrained by one of the height parameters (minHeight/maxHeight), the window size is automatically adapted to the content.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.commons.Dialog#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setHeight
 * @function
 */


/**
 * Getter for property <code>scrollLeft</code>.
 * 
 * Scroll position from left to right. "0" means leftmost position.
 * 
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>scrollLeft</code>
 * @public
 * @name sap.ui.commons.Dialog#getScrollLeft
 * @function
 */

/**
 * Setter for property <code>scrollLeft</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iScrollLeft  new value for property <code>scrollLeft</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setScrollLeft
 * @function
 */


/**
 * Getter for property <code>scrollTop</code>.
 * 
 * Scroll position from top to buttom. "0" means topmost position.
 * 
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>scrollTop</code>
 * @public
 * @name sap.ui.commons.Dialog#getScrollTop
 * @function
 */

/**
 * Setter for property <code>scrollTop</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iScrollTop  new value for property <code>scrollTop</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setScrollTop
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * 
 * Dialog title displayed in the header.
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ui.commons.Dialog#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setTitle
 * @function
 */


/**
 * Getter for property <code>applyContentPadding</code>.
 * 
 * Padding is theme-dependent. When set to "false", the content extends to the dialog borders.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>applyContentPadding</code>
 * @public
 * @name sap.ui.commons.Dialog#getApplyContentPadding
 * @function
 */

/**
 * Setter for property <code>applyContentPadding</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bApplyContentPadding  new value for property <code>applyContentPadding</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setApplyContentPadding
 * @function
 */


/**
 * Getter for property <code>showCloseButton</code>.
 * 
 * Displays a close button in the title bar.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showCloseButton</code>
 * @public
 * @name sap.ui.commons.Dialog#getShowCloseButton
 * @function
 */

/**
 * Setter for property <code>showCloseButton</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowCloseButton  new value for property <code>showCloseButton</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setShowCloseButton
 * @function
 */


/**
 * Getter for property <code>resizable</code>.
 * 
 * Specifies whether the dialog window can be resized by the user. The dialog frame contains the visual symbol.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>resizable</code>
 * @public
 * @name sap.ui.commons.Dialog#getResizable
 * @function
 */

/**
 * Setter for property <code>resizable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bResizable  new value for property <code>resizable</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setResizable
 * @function
 */


/**
 * Getter for property <code>minWidth</code>.
 * 
 * Minimum outer width of the dialog window. When set, neither the user nor some layout settings can make the window smaller.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>minWidth</code>
 * @public
 * @name sap.ui.commons.Dialog#getMinWidth
 * @function
 */

/**
 * Setter for property <code>minWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMinWidth  new value for property <code>minWidth</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setMinWidth
 * @function
 */


/**
 * Getter for property <code>minHeight</code>.
 * 
 * Minimum outer height of the dialog window. When set, neither the user nor some layout settings can make the window smaller.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>minHeight</code>
 * @public
 * @name sap.ui.commons.Dialog#getMinHeight
 * @function
 */

/**
 * Setter for property <code>minHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMinHeight  new value for property <code>minHeight</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setMinHeight
 * @function
 */


/**
 * Getter for property <code>maxWidth</code>.
 * 
 * Maximum outer width of the dialog window. If set, neither the user nor some layout settings can make the window larger.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>maxWidth</code>
 * @public
 * @name sap.ui.commons.Dialog#getMaxWidth
 * @function
 */

/**
 * Setter for property <code>maxWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMaxWidth  new value for property <code>maxWidth</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setMaxWidth
 * @function
 */


/**
 * Getter for property <code>maxHeight</code>.
 * 
 * Maximum outer height of the dialog window. If set, neither the user nor some layout settings can make the window larger.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>maxHeight</code>
 * @public
 * @name sap.ui.commons.Dialog#getMaxHeight
 * @function
 */

/**
 * Setter for property <code>maxHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMaxHeight  new value for property <code>maxHeight</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setMaxHeight
 * @function
 */


/**
 * Getter for property <code>contentBorderDesign</code>.
 * 
 * Border design is theme-dependent.
 * 
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.commons.enums.BorderDesign} the value of property <code>contentBorderDesign</code>
 * @public
 * @name sap.ui.commons.Dialog#getContentBorderDesign
 * @function
 */

/**
 * Setter for property <code>contentBorderDesign</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.commons.enums.BorderDesign} oContentBorderDesign  new value for property <code>contentBorderDesign</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setContentBorderDesign
 * @function
 */


/**
 * Getter for property <code>modal</code>.
 * Specify whether the dialog should be modal, or not. In case of <code>true</code> the focus is kept inside the dialog.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>modal</code>
 * @public
 * @name sap.ui.commons.Dialog#getModal
 * @function
 */

/**
 * Setter for property <code>modal</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bModal  new value for property <code>modal</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setModal
 * @function
 */


/**
 * Getter for property <code>accessibleRole</code>.
 * The ARIA role for the control. E.g. for alert-style Dialogs this can be set to "AlertDialog".
 *
 * Default value is <code>Dialog</code>
 *
 * @return {sap.ui.core.AccessibleRole} the value of property <code>accessibleRole</code>
 * @public
 * @name sap.ui.commons.Dialog#getAccessibleRole
 * @function
 */

/**
 * Setter for property <code>accessibleRole</code>.
 *
 * Default value is <code>Dialog</code> 
 *
 * @param {sap.ui.core.AccessibleRole} oAccessibleRole  new value for property <code>accessibleRole</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setAccessibleRole
 * @function
 */


/**
 * Getter for property <code>keepInWindow</code>.
 * Whether Dialog movement should be restricted to the visible area of the window. This only affects drag&drop movements by the user. This doesn't affect modal dialogs -> modal dialogs always stay in the window.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>keepInWindow</code>
 * @public
 * @since 1.9.0
 * @name sap.ui.commons.Dialog#getKeepInWindow
 * @function
 */

/**
 * Setter for property <code>keepInWindow</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bKeepInWindow  new value for property <code>keepInWindow</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.0
 * @name sap.ui.commons.Dialog#setKeepInWindow
 * @function
 */


/**
 * Getter for property <code>autoClose</code>.
 * If this property is set to true the Dialog will close if the Dialog loses its focus
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>autoClose</code>
 * @public
 * @since 1.10
 * @name sap.ui.commons.Dialog#getAutoClose
 * @function
 */

/**
 * Setter for property <code>autoClose</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bAutoClose  new value for property <code>autoClose</code>
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.10
 * @name sap.ui.commons.Dialog#setAutoClose
 * @function
 */


/**
 * Getter for aggregation <code>buttons</code>.<br/>
 * Aggregating the buttons to display at the bottom of the dialog, for example OK and Cancel. Association defaultButton can be used for one of the defined buttons.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.commons.Dialog#getButtons
 * @function
 */


/**
 * Inserts a button into the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.core.Control}
 *          oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the button should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the button is inserted at 
 *             the last position        
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#insertButton
 * @function
 */

/**
 * Adds some button <code>oButton</code> 
 * to the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.core.Control}
 *            oButton the button to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#addButton
 * @function
 */

/**
 * Removes an button from the aggregation named <code>buttons</code>.
 *
 * @param {int | string | sap.ui.core.Control} vButton the button to remove or its index or id
 * @return {sap.ui.core.Control} the removed button or null
 * @public
 * @name sap.ui.commons.Dialog#removeButton
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>buttons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Dialog#removeAllButtons
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>buttons</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oButton the button whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.Dialog#indexOfButton
 * @function
 */
	

/**
 * Destroys all the buttons in the aggregation 
 * named <code>buttons</code>.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#destroyButtons
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Aggregating the content of the dialog (one or more controls).
 * 
 * Caveat: when content is added with width given as a percentage, the Dialog itself should have a width set.
 * 
 * <strong>Note</strong>: this is the default aggregation for Dialog.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.commons.Dialog#getContent
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
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.commons.Dialog#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Dialog#removeAllContent
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
 * @name sap.ui.commons.Dialog#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#destroyContent
 * @function
 */


/**
 * 
 * Defines one of the buttons that have been provided via button aggregation to be the default button. This default button is initially selected, if no control is set via the initialFocus association explicitly. The default button is activated when Enter is pressed in the context of the dialog and when the currently selected element does not handle the Enter event itself.
 *
 * @return {string} Id of the element which is the current target of the <code>defaultButton</code> association, or null
 * @public
 * @name sap.ui.commons.Dialog#getDefaultButton
 * @function
 */

/**
 * 
 * Defines one of the buttons that have been provided via button aggregation to be the default button. This default button is initially selected, if no control is set via the initialFocus association explicitly. The default button is activated when Enter is pressed in the context of the dialog and when the currently selected element does not handle the Enter event itself.
 *
 * @param {string | sap.ui.commons.Button} vDefaultButton 
 *    Id of an element which becomes the new target of this <code>defaultButton</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setDefaultButton
 * @function
 */


	
/**
 * 
 * Defines the control that shall get the focus when the dialog is opened.
 *
 * @return {string} Id of the element which is the current target of the <code>initialFocus</code> association, or null
 * @public
 * @name sap.ui.commons.Dialog#getInitialFocus
 * @function
 */

/**
 * 
 * Defines the control that shall get the focus when the dialog is opened.
 *
 * @param {string | sap.ui.core.Control} vInitialFocus 
 *    Id of an element which becomes the new target of this <code>initialFocus</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#setInitialFocus
 * @function
 */


	
/**
 * 
 * Event is fired when the user closes the dialog window. Event parameters provide information about last position and last size.
 *  
 *
 * @name sap.ui.commons.Dialog#closed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.width the width of the dialog when closed
 * @param {int} oControlEvent.getParameters.height the height of the dialog when closed
 * @param {int} oControlEvent.getParameters.top the top position of the dialog when closed
 * @param {int} oControlEvent.getParameters.left the left position of the dialog when closed
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'closed' event of this <code>sap.ui.commons.Dialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.Dialog</code>.<br/> itself. 
 *  
 * 
 * Event is fired when the user closes the dialog window. Event parameters provide information about last position and last size.
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Dialog</code>.<br/> itself.
 *
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#attachClosed
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'closed' event of this <code>sap.ui.commons.Dialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Dialog#detachClosed
 * @function
 */

/**
 * Fire event closed to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'width' of type <code>int</code> the width of the dialog when closed</li>
 * <li>'height' of type <code>int</code> the height of the dialog when closed</li>
 * <li>'top' of type <code>int</code> the top position of the dialog when closed</li>
 * <li>'left' of type <code>int</code> the left position of the dialog when closed</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Dialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.Dialog#fireClosed
 * @function
 */


/**
 * Opens the dialog control instance.
 *
 * @name sap.ui.commons.Dialog.prototype.open
 * @function

 * @type void
 * @public
 */


/**
 * Closes the dialog control instance.
 *
 * @name sap.ui.commons.Dialog.prototype.close
 * @function

 * @type void
 * @public
 */


/**
 * Returns whether the Dialog is open (this includes opening and closing animations). For more detailed information about the current state check Dialog.getOpenState().
 *
 * @name sap.ui.commons.Dialog.prototype.isOpen
 * @function

 * @type boolean
 * @public
 */


/**
 * Returns whether the Dialog is currently open, closed, or transitioning between these states.
 *
 * @name sap.ui.commons.Dialog.prototype.getOpenState
 * @function

 * @type sap.ui.core.OpenState
 * @public
 */


// Start of sap\ui\commons\Dialog.js
jQuery.sap.require("sap.ui.core.Popup");

/**
 * Initialization hook for the dialog.
 * It creates the instance of the Popup helper service and does some basic configuration for it.
 *
 * @private
 */
sap.ui.commons.Dialog.prototype.init = function() {
   // do something for initialization...
   this.oPopup = new sap.ui.core.Popup(this, true, true);
   var eDock = sap.ui.core.Popup.Dock;
   this.oPopup.setPosition(eDock.CenterCenter, eDock.CenterCenter, window);

   this._minWidth = 64; // the technical minWidth, not the one set via API; will be calculated after rendering
   this._minHeight = 48; // the technical minHeight, not the one set via API; will be calculated after rendering
   // TODO: re-calculate after theme switch?!!

   this.allowTextSelection(false);
};

sap.ui.commons.Dialog.prototype.setInitialFocus = function(sId) {
	if (sId != null && typeof(sId) != "string") {
		sId = sId.getId();
	}
	this.oPopup.setInitialFocusId(sId);
	this.setAssociation("initialFocus", sId, true);
};

/**
 * Required adaptations after rendering.
 * @private
 */
sap.ui.commons.Dialog.prototype.onAfterRendering = function() {
	var $content = this.$("cont");

	// if content has 100% width, but Dialog has no width, set content width to auto
	if (!sap.ui.commons.Dialog._isSizeSet(this.getWidth()) && !sap.ui.commons.Dialog._isSizeSet(this.getMaxWidth())) {
		$content.children().each(function(index, element) {
			if (jQuery.trim(this.style.width) == "100%") {
				this.style.width = "auto";
			}
		});
	}

	// IE9+10 fix where subpixel font rendering may lead to rounding errors in RTL mode when the content has a width of "xyz.5px"
	if (!!sap.ui.Device.browser.internet_explorer && (sap.ui.Device.browser.version == 9 || sap.ui.Device.browser.version == 10) && ($content.length > 0)) {
		var elm = $content[0];
		if (sap.ui.getCore().getConfiguration().getRTL() && !sap.ui.commons.Dialog._isSizeSet(this.getWidth())) {
			if (elm.ownerDocument && elm.ownerDocument.defaultView && elm.ownerDocument.defaultView.getComputedStyle) {
				var width = elm.ownerDocument.defaultView.getComputedStyle(elm).getPropertyValue("width");
				if (width) {
					var fWidth = parseFloat(width, 10);
					if (fWidth % 1 == 0.5) {
						$content[0].style.width = (fWidth + 0.01) + "px"; // if aaaalll these conditions are fulfilled, the Dialog must be a LITTLE bit wider to avoid rounding errors
					}
				}
			}
		}
	}
	
	// if height is not set, but min-height is set, the Dialog is in a mixed mode between fixed height and flexible height 
	// (denoted by sapUiDlgFlexHeight), where sometimes the content pushes the height (when it is tall enough) and sometimes
	// the Dialog needs to take care to push the button row to the bottom (when there is less content than what would fit into a Dialog
	// with min-height size).
	// Therefore we need to check which one of both cases is currently active.
	if (!sap.ui.commons.Dialog._isSizeSet(this.getHeight()) && sap.ui.commons.Dialog._isSizeSet(this.getMinHeight())) {
		// height is not set, so the content height should push the height - denoted by the CSS class "sapUiDlgFlexHeight" which applies a simple layout
		// where header, content, and footer are stacked on top of each other
		
		// however, when there is a minHeight set which is larger than the natural height, the footer would be not at the bottom, so let's check whether the Dialog
		// is now smaller than the min-height:
		var footer = this.getDomRef("footer");
		var footerBottom = footer.offsetTop + footer.offsetHeight;
		var dialogBottom = this.getDomRef().offsetHeight;
		if (footerBottom < dialogBottom) {
			this.$().removeClass("sapUiDlgFlexHeight");
		} else { 
			// normal case: Dialog content pushes its height to or beyond its minimum height - this works fine with "sapUiDlgFlexHeight"
		}
	}

	// Calculate min size
	var _minSize = this.getMinSize();
	this._minWidth = _minSize.width;
	this._minHeight = _minSize.height;
};

/**
 * Handle the click event happening on the dialog instance.
 *
 * TODO also raise some event when click on 'x'
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.Dialog.prototype.onclick = function(oEvent) {
	switch(oEvent.target.id) {
	case this.getId() + "-close":
		this.close();
		oEvent.preventDefault(); // avoid onbeforeunload event which happens at least in IE9 because of the javascript:void(0); link target
		break;
	};
	return false;
};

/**
 * Opens this instance of dialog
 * @public
 */
sap.ui.commons.Dialog.prototype.open = function() {

	if ( !this.oPopup ) {
		// TODO discuss behavior of destroyed controls in general
		jQuery.sap.log.fatal("This dialog instance has been destroyed already");
		return;
	}
	if ( this._bOpen ) {
		return;
	}

	// Save current focused element to restore the focus after closing the dialog
	this._oPreviousFocus = sap.ui.core.Popup.getCurrentFocusInfo();

	this.oPopup.attachEvent("opened", this.handleOpened, this);
	this.oPopup.attachEvent("closed", this.handleClosed, this);
	this.oPopup.setModal(this.getModal());
	this.oPopup.setAutoClose(this.getAutoClose());
	this.oPopup.open(400);
	this._bOpen = true;
};


/**
 * @private
 */
sap.ui.commons.Dialog.prototype._handleOpened = function() {
	var sInitFocus = this.getInitialFocus(),
	oFocusCtrl;
	if(sInitFocus && (oFocusCtrl = sap.ui.getCore().getControl(sInitFocus))){ // an additional previous check was  oFocusCtrl.getParent() === this  which prevented nested children from being focused
		oFocusCtrl.focus();
		this._bInitialFocusSet = true;
	} else {
		sInitFocus = this.getDefaultButton();
		if(sInitFocus && (oFocusCtrl = sap.ui.getCore().getControl(sInitFocus)) && oFocusCtrl.getParent() === this){
			oFocusCtrl.focus();
			this._bInitialFocusSet = true;
		} else if (this.getButtons().length > 0) {
			this.getButtons()[0].focus();// TODO is this wanted?
			this._bInitialFocusSet = true;
		} else if(this.getContent().length > 0){
			// let's at least focus something in the Dialog
			this.getContent()[0].focus();
			this._bInitialFocusSet = true;
		}
	}
};

sap.ui.commons.Dialog.prototype.handleOpened = function() {
	this.oPopup.detachEvent("opened", this.handleOpened, this);

	if (sap.ui.Device.browser.internet_explorer &&  sap.ui.Device.browser.version === 11) {
		// a delayed call is needed for IE11. Since it fires the opened event before all stuff
		// is visible. All stuff is added to the DOM though and all operations can be done
		// but a focus seems to work (there is no error) but the focus can't be set to something
		// that isn't really visible
		jQuery.sap.clearDelayedCall(this._delayedCallId);
		this._delayedCallId = jQuery.sap.delayedCall(0, this, this._handleOpened); 
	} else {
		this._handleOpened();
	}
};

/**
 * Closes this Dialog
 * @public
 */
sap.ui.commons.Dialog.prototype.close = function() {

	if ( !this._bOpen ) {
		return;
	}

	var oRect = this.$().rect();

	this._bOpen = false;
	this._bInitialFocusSet = false;
	this.oPopup.close(400);

	// do this delayed or it possibly won't work because of popup closing animations
	jQuery.sap.delayedCall(400, this, "restorePreviousFocus");

	jQuery.each(oRect, function(key, val){
		oRect[key] = parseInt(val, 10);
	});
	
	this._oRect = oRect;
};

sap.ui.commons.Dialog.prototype.handleClosed = function() {
	this.oPopup.detachEvent("closed", this.handleClosed, this);

	this.fireClosed(this._oRect);
	this.close();
};

/**
 * restore the focus when the dialog was closed to the control which opened the dialog.
 * This is independent of the dialogs modal state. The popup also restores focus when using modal popups/dialogs.
 * @private
 */
sap.ui.commons.Dialog.prototype.restorePreviousFocus = function() {
	sap.ui.core.Popup.applyFocusInfo(this._oPreviousFocus);
};


sap.ui.commons.Dialog.prototype.setTitle = function (sText) {
	this.setProperty("title", sText, true); // last parameter avoids invalidation
	this.$("lbl").text(sText);
	return this;
};

/**
 * Destroys this instance of dialog, called by Element#destroy()
 * @private
 */
sap.ui.commons.Dialog.prototype.exit = function() {
	// only fire the closed event if the dialog was open
	var bWasOpen = this.isOpen();
	this.close();

	// just to ensure that any attached event is being detached
	this.oPopup.detachEvent("opened", this.handleOpened, this);
	this.oPopup.detachEvent("closed", this.handleClosed, this);
	
	this.oPopup.destroy();
	if (bWasOpen) {
		this.fireClosed(this._oRect);
	}
	this.oPopup = null;
};

/**
 * Checks whether the given sCssSize is an explicit value, or not (e.g. auto, inherit).
 *
 * @param {string} sCssSize The CSS string to check for being explicit value.
 * @return {boolean} whether The given sCssSize is an explicit value, or not (e.g. auto, inherit).
 * @private
 */
sap.ui.commons.Dialog._isSizeSet = function(sCssSize) {
	return (sCssSize && !(sCssSize == "auto") && !(sCssSize == "inherit"));
};

/**
 * Handles the sapescape event, triggers closing of the window.
 * TODO also raise some event like with the click on 'x'
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.Dialog.prototype.onsapescape = function(oEvent) {
	this.close();

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Handles the sapenter event, triggers the default button of the dialog.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.Dialog.prototype.onsapenter = function(oEvent) {
	// See open-method
	var oFocusCtrl,
		sInitFocus = this.getDefaultButton();

	// trigger the default button if it exists and is inside the Dialog
	if(sInitFocus && (oFocusCtrl = sap.ui.getCore().byId(sInitFocus)) && jQuery.contains(this.getDomRef(), oFocusCtrl.getDomRef())) {
		// Okay, we have the control
		if (oFocusCtrl instanceof sap.ui.commons.Button) {
			oFocusCtrl.onclick(oEvent);
		} // FIXME is this really the way it should be?
	}

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Event handler for the focusin event.
 * If it occurs on the focus handler elements at the beginning of the dialog, the focus is set to the end, and vice versa.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.Dialog.prototype.onfocusin = function(oEvent){
	this.sLastRelevantNavigation = null;
	
	if (!this._bInitialFocusSet) {
		// since IE9 calls first "onfocusin" it has to be checked if the initial focus was set already
		return;
	}

	var sFirstFocusable = this.getId() + "-fhfe";
	var sLastFocusable = this.getId() + "-fhee";
	
	var oSourceDomRef = oEvent.target;
	var oFocusDomRef = undefined;
	var $FocusablesCont = jQuery(":sapFocusable", this.$("cont"));
	var $FocusablesFoot = jQuery(":sapFocusable", this.$("footer"));

	/*
	 * It's not needed to check if buttons are set since jQuery(":focusable", jQuery.sap.byId(this.getId() + "-fhfe")) 
	 * or jQuery(":sapFocusable", jQuery.sap.byId(this.getId() + "-fhfe")) returns an empty array. Therefore these
	 * elements won't be found via 'lastFocusableDomRef()'
	 */
	if (oSourceDomRef.id === sFirstFocusable) {
		// the FocusHandlingFirstElement was focused and thus the focus should move to the last element.
		if ($FocusablesFoot.length > 0) {
			oFocusDomRef = $FocusablesFoot[$FocusablesFoot.length-1];
		} else {
			oFocusDomRef = $FocusablesCont[$FocusablesCont.length-1];
		}
	} else if (oSourceDomRef.id === sLastFocusable) {
		// the FocusHandlingEndElement was focused and thus the focus should move to the first element.
		if ($FocusablesCont.length > 0) {
			oFocusDomRef = $FocusablesCont[0];
		} else {
			oFocusDomRef = $FocusablesFoot[0];
		}
	}
	
	if (oFocusDomRef) {
		/*
		 * This check especially for IE9 is needed because when IE9 is used together with JAWS the element that will be 
		 * focused isn't read when the focus happens too fast. Therefore a delay is added to JAWS can read the newly
		 * focused element. 
		 */
		var iDelay = sap.ui.Device.browser.msie &&  sap.ui.Device.browser.version === 9 ? 100 : 0;

		jQuery.sap.delayedCall(iDelay, this, function(){
			// if the element is a control the focus should be called via the control
			// especially if the control has an individual focus DOM-ref
			if (sap.ui.getCore().byId(oFocusDomRef.id) instanceof sap.ui.core.Control) {
				oFocusDomRef.focus(); 
			} else {
				jQuery.sap.focus(oFocusDomRef); 
			}
		});
	}
};

/**
 * Restores the focus in case it got lost beforehand e.g. by leaving the dialog or the whole window.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.Dialog.prototype.restoreFocus = function() {
	if (this.oRestoreFocusInfo && this.oPopup.bOpen) { // do not restore the focus if Dialog is no longer open  TODO: where is the focus going, then? The Toolbar testpage at least works fine.
		var oCtrl = sap.ui.getCore().getControl(this.oRestoreFocusInfo.sFocusId);
		if (oCtrl) {
			oCtrl.applyFocusInfo(this.oRestoreFocusInfo.oFocusInfo);
		}
	}
};

/**
 * Handles or cancels the selectstart event when occuring in parts of the dialog.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.Dialog.prototype.onselectstart = function(oEvent) {
	if (!jQuery.sap.containsOrEquals(this.getDomRef("cont"), oEvent.target)) {
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};

/**
 * Get minimal reasonable size of the dialog given its inner elements. Call is recommended after rendering.
 *
 * @return {Object} An object with inner structure {width:{int}, height:{int}}
 * @private
 */
sap.ui.commons.Dialog.prototype.getMinSize = function () {

	var oDialog = jQuery.sap.domById(this.sId), oTitle = jQuery.sap.domById(this.sId + "-hdr"), oFooter = jQuery.sap.domById(this.sId + "-footer"),
		heightTitle=0, widthFooter=0, heightFooter=0;

	var oFooterBtns = jQuery(oFooter).children("DIV").get(0);
	widthFooter = oFooterBtns.offsetWidth;

	var addValue = 0;
	// add border and padding of footer...not margin
	addValue += jQuery(oFooter).outerWidth(false) - jQuery(oFooter).width();
	// add border and padding of footer...not margin
	addValue += jQuery(oDialog).outerWidth(false) - jQuery(oDialog).width();

	// if there is a too small specific border value add +20 for certainty to avoid wrapping
	if (addValue <= 20) {
	 addValue = 20;
	}

	widthFooter += addValue;

	if (isNaN(widthFooter) || widthFooter < 100) {
		widthFooter = 100;
	}

	heightTitle = oTitle.offsetHeight;
	heightFooter = oFooter.offsetHeight;
	return {
		width: widthFooter,
		height: heightTitle + heightFooter + 36 /* min. height content */
	};
};


// Implementation of API method isOpen
sap.ui.commons.Dialog.prototype.isOpen = function(){
	return this.oPopup.isOpen();
};

// Implementation of API method isOpen
sap.ui.commons.Dialog.prototype.getOpenState = function(){
	return this.oPopup.getOpenState();
};

/**
 * Whether the dialog is currently enabled or not.
 * 
 * Applications can't control the enabled state via a property. A dialog is implicitly 
 * enabled depending on its <code>openState</code>. Descendant controls that honor the 
 * enabled state of their ancestors will appear disabled after the dialog is closed.
 * 
 * @experimental Whether a dialog is regarded as "enabled" during the state transitions 
 * (OPENING, CLOSING) is not fully decided. Currently, it is enabled during the OPENING phase 
 * and disabled during the CLOSING phase. The only potential change would be to treat the 
 * OPENING phase as disabled as well. Applications should be prepared to receive events from
 * "enabled" controls after they called open() on the dialog until close() is called on it.
 * If the mentioned potential change should happen, the dialog will become enabled only 
 * after the transition to OPEN. Events from "enabled" children then can still only arrive 
 * between open() and close(), so applications that obey the previous rule should continue 
 * to work. Only end users or code  that explicitly triggers pseudo user events will notice 
 * a difference. <br>
 * A second aspect that might change is the visual behavior of the content: during the CLOSING 
 * phase it 'looks' enabled but in fact it is already disabled. This avoids unnecessary redraws 
 * for content that becomes hidden soon. Should this show to be confusing for end users, it might 
 * be changed.
 * 
 * @return {boolean} whether the dialog is currently enabled or not.
 * @public
 */
sap.ui.commons.Dialog.prototype.getEnabled = function() {
  var eState = this.getOpenState();
  // TODO the check for state OPENING is a compromise. Without that, the content of the dialog will render 
  // in disabled state but will be enabled. As an alternative, the dialog could render again after OPEN is reached
  // and after switching to CLOSING (to properly reflect the changed enabled state in the descendants) 
  return eState === sap.ui.core.OpenState.OPENING || eState === sap.ui.core.OpenState.OPEN;
};

// **************************************************
// 'Legacy' Resize and Move handling including jQuery-UI parts for that would bring in 70k (uncompressed)
// **************************************************

/**
* Handles the dragstart event.
* In case of resize currently ongoing, this cancels the dragstart.
* @param {sap.ui.core.BroserEvent} oEvent The forwarded browser event
* @private
*/
sap.ui.commons.Dialog.prototype.ondragstart = function(oEvent){
	if(this.sDragMode == "resize" || this.sDragMode == "move") {
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};

/**
 * Initializes drag and move capabilities.

 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.Dialog.prototype.onmousedown = function (oEvent) {

	var oSource = oEvent.target,
		sId = this.getId();

	this._bRtlMode = sap.ui.getCore().getConfiguration().getRTL(); // remember the RTL mode for the starting resize operation

	if(jQuery.sap.containsOrEquals(this.getDomRef("hdr"), oSource)) {
		if (oSource.id != (sId + "-close")) {
			this.sDragMode = "move";
			this._RootWidth = this.getDomRef().offsetWidth;
			this._RootHeight = this.getDomRef().offsetHeight;
		}
	} else if(oSource.id == sId + "-grip") {
		this.sDragMode = "resize";

		// Now the dialog is fixed-width and fixed-height; write them to the element and adapt its classes to switch positioning
		var oDomRef = this.getDomRef();
		var sWidth = oDomRef.offsetWidth + "px";
		oDomRef.style.width = sWidth;
		var sHeight = oDomRef.offsetHeight + "px";
		oDomRef.style.height = sHeight;
		jQuery(oDomRef).removeClass("sapUiDlgFlexHeight sapUiDlgFlexWidth");
		// ...also remember the dimensions for the future (e.g. for after rerendering) - but do not cause rerendering now
		this.setProperty("width", sWidth, true);
		this.setProperty("height", sHeight, true);
	}

	if (this.sDragMode == null) {
		return;
	}

	// save current focused control for restoring later in restore focus
	var oActElement = document.activeElement;
	if (oActElement && oActElement.id){
		var oCtrl = jQuery.sap.byId(oActElement.id).control(0);
		if(oCtrl) {
			this.oRestoreFocusInfo = {sFocusId: oCtrl.getId(), oFocusInfo: oCtrl.getFocusInfo()};
		}
	}

	// Calculate event X,Y coordinates
	this.startDragX = oEvent.screenX;
	this.startDragY = oEvent.screenY;

	this.originalRectangle = this.$().rect();

	jQuery(window.document).bind("selectstart", jQuery.proxy(this.ondragstart, this));
	jQuery(window.document).bind("mousemove", jQuery.proxy(this.handleMove, this));
	jQuery(window.document).bind("mouseup", jQuery.proxy(this.handleMouseUp, this));

	var outerDoc = sap.ui.commons.Dialog._findSameDomainParentWinDoc();
	if (outerDoc) {
		jQuery(outerDoc).bind("selectstart", jQuery.proxy(this.ondragstart, this));
		jQuery(outerDoc).bind("mousemove", jQuery.proxy(this.handleMove, this));
		jQuery(outerDoc).bind("mouseup", jQuery.proxy(this.handleMouseUp, this));
	}

};


/**
 * Returns the document of the parent window which is highest up in the hierarchy of parent windows, but still belongs
 * to the same domain (so its document is accessible)
 *
 * @private
 */
sap.ui.commons.Dialog._findSameDomainParentWinDoc = function() {
	var outerDoc = null;
	try {
		var win = window;
		while (win.parent && (win.parent != win)) {
			if (win.parent.document) {
				outerDoc = win.parent.document;
				win = win.parent;
			}
		}
	} catch(e) {
		// parent is in a different domain, so we cannot listen to mouse events there
		// outerWindow is now either null or the highest possible parent window (!= the document's window) in the same domain
	}
	return outerDoc;
};


/**
 * Handles the move event taking the current dragMode into account.
 * @param {DOMEvent} event The event raised by the browser.
 * @private
 */
sap.ui.commons.Dialog.prototype.handleMove = function (event) {

	if (!this.sDragMode) {
		return;
	}

	event = event || window.event;

	if (this.sDragMode == "resize") {

		var deltaX = event.screenX - this.startDragX;
		var deltaY = event.screenY - this.startDragY;

		var w = (this._bRtlMode ? this.originalRectangle.width - deltaX : this.originalRectangle.width + deltaX);
		var h = this.originalRectangle.height + deltaY;

		w = Math.max(w, this._minWidth);
		h = Math.max(h, this._minHeight);

		// The dimension constraints set via API could be in any CSS unit, so just set the size and do checks
		// (min/max override what was set here)
		var oDomRef = this.getDomRef();
		oDomRef.style.width = w + "px";
		oDomRef.style.height = h + "px";

		// Now use the actual size of the dialog, which might have been constrained by min-*/max-* for resizing the popup and the shadow
		w = this.getDomRef().offsetWidth;
		h = this.getDomRef().offsetHeight;

		// In IE8, style.width/height will still have the old values - possibly outside this Dialog's size constraints.
		// The Dialog box itself will stay correctly constrained, but its child elements will be positioned as if the style.width/height
		// values were the actual size, so for this browser - and to be cleaner - explicitly set these sizes. This is an IE8 bug.
		oDomRef.style.width = w + "px";
		oDomRef.style.height = h + "px";

		// Also remember the dimensions for the future (e.g. for after rerendering) - but do not cause rerendering now
		this.setProperty("width", w+"px", true);
		this.setProperty("height", h+"px", true);

	} else if (this.sDragMode == "move") {

		var iLeft = this.originalRectangle.left + event.screenX - this.startDragX;
		var iTop = this.originalRectangle.top + event.screenY - this.startDragY;

		iTop = Math.max(iTop, 0); // should not move the Dialog beyond the top border - otherwise it cannot be moved back
		if (this._bRtlMode || this._keepInWindow()) {
			iLeft = Math.min(iLeft, document.documentElement.clientWidth - this._RootWidth); // in RTL mode, do not move beyond the right window border
		}
		if (!this._bRtlMode || this._keepInWindow()) {
			iLeft = Math.max(iLeft, 0); // in LTR mode do not move the Dialog beyond the left border
		}
		if (this._keepInWindow()) {
			iTop = Math.min(iTop, document.documentElement.clientHeight - this._RootHeight);
		}

		this.oPopup.setPosition(sap.ui.core.Popup.Dock.LeftTop, {left:iLeft, top:iTop});
	}

	event.cancelBubble = true;
	return false;
};

/**
 * This function checks if the "keepInWindow" property is set or if the Dialog is modal.
 * Modal Dialogs mustn't not leave the window also.
 * 
 * @returns {boolean} if the Dialog must leave the window area
 * @private
 */
sap.ui.commons.Dialog.prototype._keepInWindow = function () {
	return this.getKeepInWindow() || this.getModal();
};


/**
 * Handle mouseup event.
 * This does the cleanup after drag and move handling.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.Dialog.prototype.handleMouseUp = function (oEvent) {

	if (this.sDragMode == null) {
		return;
	}

	jQuery(window.document).unbind("selectstart", this.ondragstart);
	jQuery(window.document).unbind("mousemove", this.handleMove);
	jQuery(window.document).unbind("mouseup", this.handleMouseUp);

	var outerDoc = sap.ui.commons.Dialog._findSameDomainParentWinDoc();
	if (outerDoc) {
		jQuery(outerDoc).unbind("selectstart", this.ondragstart);
		jQuery(outerDoc).unbind("mousemove", this.handleMove);
		jQuery(outerDoc).unbind("mouseup", this.handleMouseUp);
	}

	if(!!sap.ui.Device.browser.webkit){
		//Force Webkit Browsers to do a repaint
		sap.ui.core.RenderManager.forceRepaint(this.getId());
	}

	// Set back focus to previously focused element
	this.restoreFocus();
	this.sDragMode = null;

};

sap.ui.commons.Dialog.setAutoClose = function(bAutoclose){
	this.oPopup.setAutoClose(bAutoclose);
};
sap.ui.commons.Dialog.getAutoClose = function(){
	this.oPopup.getAutoClose();
};
