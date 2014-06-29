/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ListBox.
jQuery.sap.declare("sap.ui.commons.ListBox");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ListBox.
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
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getAllowMultiSelect allowMultiSelect} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getScrollTop scrollTop} : int (default: -1)</li>
 * <li>{@link #getDisplayIcons displayIcons} : boolean (default: false)</li>
 * <li>{@link #getDisplaySecondaryValues displaySecondaryValues} : boolean (default: false)</li>
 * <li>{@link #getValueTextAlign valueTextAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Begin)</li>
 * <li>{@link #getSecondaryValueTextAlign secondaryValueTextAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Begin)</li>
 * <li>{@link #getMinWidth minWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxWidth maxWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getVisibleItems visibleItems} : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.core.Item[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaDescribedBy ariaDescribedBy} : string | sap.ui.core.Control</li>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.ListBox#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Provides a list of items from which users can choose an item. For the design of the list box, features such as defining the list box height,
 * fixing the number of visible items, choosing one item to be the item that is marked by default when the list box is shown, or a scroll bar for large list boxes
 * are available.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.ListBox
 */
sap.ui.core.Control.extend("sap.ui.commons.ListBox", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"getSelectedIndex", "setSelectedIndex", "addSelectedIndex", "removeSelectedIndex", "getSelectedIndices", "setSelectedIndices", "addSelectedIndices", "isIndexSelected", "getSelectedItem", "getSelectedItems", "clearSelection", "scrollToIndex", "setItems", "setSelectedKeys", "getSelectedKeys"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"editable" : {type : "boolean", group : "Behavior", defaultValue : true},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"allowMultiSelect" : {type : "boolean", group : "Behavior", defaultValue : false},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"scrollTop" : {type : "int", group : "Behavior", defaultValue : -1},
		"displayIcons" : {type : "boolean", group : "Behavior", defaultValue : false},
		"displaySecondaryValues" : {type : "boolean", group : "Misc", defaultValue : false},
		"valueTextAlign" : {type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin},
		"secondaryValueTextAlign" : {type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin},
		"minWidth" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"maxWidth" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"visibleItems" : {type : "int", group : "Dimension", defaultValue : null}
	},
	defaultAggregation : "items",
	aggregations : {
    	"items" : {type : "sap.ui.core.Item", multiple : true, singularName : "item"}
	},
	associations : {
		"ariaDescribedBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaDescribedBy"}, 
		"ariaLabelledBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaLabelledBy"}
	},
	events : {
		"select" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.ListBox with name <code>sClassName</code> 
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
 * @name sap.ui.commons.ListBox.extend
 * @function
 */

sap.ui.commons.ListBox.M_EVENTS = {'select':'select'};


/**
 * Getter for property <code>editable</code>.
 * Value "true" makes the list box interactive.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.ui.commons.ListBox#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#setEditable
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Disabled controls have another color display depending on custom settings.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.commons.ListBox#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#setEnabled
 * @function
 */


/**
 * Getter for property <code>allowMultiSelect</code>.
 * Specifies whether multiple selection is allowed.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>allowMultiSelect</code>
 * @public
 * @name sap.ui.commons.ListBox#getAllowMultiSelect
 * @function
 */

/**
 * Setter for property <code>allowMultiSelect</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bAllowMultiSelect  new value for property <code>allowMultiSelect</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#setAllowMultiSelect
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
 * @name sap.ui.commons.ListBox#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#setVisible
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Control width as common CSS-size (px or % as unit, for example).
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.ListBox#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Control height as common CSS-size (px or % as unit, for example).
 * The setting overrides any definitions made for the setVisibleItems() method.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.commons.ListBox#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#setHeight
 * @function
 */


/**
 * Getter for property <code>scrollTop</code>.
 * Scroll bar position from the top. Setting the scrollTop property and calling scrollToIndex are two operations influencing the same "physical" property, so the last call "wins".
 *
 * Default value is <code>-1</code>
 *
 * @return {int} the value of property <code>scrollTop</code>
 * @public
 * @name sap.ui.commons.ListBox#getScrollTop
 * @function
 */

/**
 * Setter for property <code>scrollTop</code>.
 *
 * Default value is <code>-1</code> 
 *
 * @param {int} iScrollTop  new value for property <code>scrollTop</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#setScrollTop
 * @function
 */


/**
 * Getter for property <code>displayIcons</code>.
 * Defines whether the icons of the list items shall also be displayed. Enabling icons requires some space to be reserved for them. Displaying icons can also
 * influence the width and height of a single item, which affects the overall height of the ListBox when defined in number of items.
 * Note that the number of icons that can be displayed in the ListBox depends on the size of the icons themselves and of the total ListBox height.
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>displayIcons</code>
 * @public
 * @name sap.ui.commons.ListBox#getDisplayIcons
 * @function
 */

/**
 * Setter for property <code>displayIcons</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDisplayIcons  new value for property <code>displayIcons</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#setDisplayIcons
 * @function
 */


/**
 * Getter for property <code>displaySecondaryValues</code>.
 * Specifies whether the text values from the additionalText property (see sap.ui.core.ListItems) shall be displayed.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>displaySecondaryValues</code>
 * @public
 * @name sap.ui.commons.ListBox#getDisplaySecondaryValues
 * @function
 */

/**
 * Setter for property <code>displaySecondaryValues</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDisplaySecondaryValues  new value for property <code>displaySecondaryValues</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#setDisplaySecondaryValues
 * @function
 */


/**
 * Getter for property <code>valueTextAlign</code>.
 * The text alignment in the primary ListBox column.
 *
 * Default value is <code>Begin</code>
 *
 * @return {sap.ui.core.TextAlign} the value of property <code>valueTextAlign</code>
 * @public
 * @name sap.ui.commons.ListBox#getValueTextAlign
 * @function
 */

/**
 * Setter for property <code>valueTextAlign</code>.
 *
 * Default value is <code>Begin</code> 
 *
 * @param {sap.ui.core.TextAlign} oValueTextAlign  new value for property <code>valueTextAlign</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#setValueTextAlign
 * @function
 */


/**
 * Getter for property <code>secondaryValueTextAlign</code>.
 * The text alignment in the secondary ListBox text column (if available).
 *
 * Default value is <code>Begin</code>
 *
 * @return {sap.ui.core.TextAlign} the value of property <code>secondaryValueTextAlign</code>
 * @public
 * @name sap.ui.commons.ListBox#getSecondaryValueTextAlign
 * @function
 */

/**
 * Setter for property <code>secondaryValueTextAlign</code>.
 *
 * Default value is <code>Begin</code> 
 *
 * @param {sap.ui.core.TextAlign} oSecondaryValueTextAlign  new value for property <code>secondaryValueTextAlign</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#setSecondaryValueTextAlign
 * @function
 */


/**
 * Getter for property <code>minWidth</code>.
 * The minimum width of the ListBox. If not set, there is no minimum width.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>minWidth</code>
 * @public
 * @name sap.ui.commons.ListBox#getMinWidth
 * @function
 */

/**
 * Setter for property <code>minWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMinWidth  new value for property <code>minWidth</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#setMinWidth
 * @function
 */


/**
 * Getter for property <code>maxWidth</code>.
 * The maximum width of the ListBox. If not set, there is no maximum width.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>maxWidth</code>
 * @public
 * @name sap.ui.commons.ListBox#getMaxWidth
 * @function
 */

/**
 * Setter for property <code>maxWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMaxWidth  new value for property <code>maxWidth</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#setMaxWidth
 * @function
 */


/**
 * Getter for property <code>visibleItems</code>.
 * The ListBox height in number of items that are initially displayed without scrolling. This setting overwrites height
 * settings in terms of CSS size that have been made. When the items have different heights, the height of the first item is used for all
 * other item height calculations. Note that if there are one or more separators between the visible ListBox items, the displayed items
 * might not relate 1:1 to the initially specified number of items. When the value is retrieved, it equals the previously set value if it was set;
 * otherwise, it will be the number of items completely fitting into the ListBox without scrolling in the case the control was already rendered.
 * Note that if the control was not rendered, the behavior will be undefined, it may return -1 or any other number.
 *
 * Default value is <code></code>
 *
 * @return {int} the value of property <code>visibleItems</code>
 * @public
 * @name sap.ui.commons.ListBox#getVisibleItems
 * @function
 */

/**
 * Setter for property <code>visibleItems</code>.
 *
 * Default value is <code></code> 
 *
 * @param {int} iVisibleItems  new value for property <code>visibleItems</code>
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#setVisibleItems
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation of items to be displayed. Must be either of type sap.ui.core.ListItem or sap.ui.core.SeparatorItem.
 * 
 * <strong>Note</strong>: this is the default aggregation for ListBox.
 * @return {sap.ui.core.Item[]}
 * @public
 * @name sap.ui.commons.ListBox#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Item}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Item}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.core.Item} vItem the item to remove or its index or id
 * @return {sap.ui.core.Item} the removed item or null
 * @public
 * @name sap.ui.commons.ListBox#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.ListBox#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Item}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.ListBox#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#destroyItems
 * @function
 */


/**
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.ListBox#getAriaDescribedBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#addAriaDescribedBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * @name sap.ui.commons.ListBox#removeAriaDescribedBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.ListBox#removeAllAriaDescribedBy
 * @function
 */

	
/**
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.ListBox#getAriaLabelledBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#addAriaLabelledBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * @name sap.ui.commons.ListBox#removeAriaLabelledBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.ListBox#removeAllAriaLabelledBy
 * @function
 */

	
/**
 * Event is fired when selection is changed by user interaction. 
 *
 * @name sap.ui.commons.ListBox#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id ID of the ListBox which triggered the event.
 * @param {int} oControlEvent.getParameters.selectedIndex The currently selected index of the ListBox. In the case of multiple selection, this is exactly one of the selected indices - the one whose selection has triggered the selection change; to get all currently selected indices, use selectedIndices.
 * @param {sap.ui.core.Item} oControlEvent.getParameters.selectedItem The currently selected item of the ListBox. In the case of multiple selection, this is exactly one of the selected items - the one whose selection has triggered the selection change.
 * @param {int[]} oControlEvent.getParameters.selectedIndices Array containing the indices which are selected.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.commons.ListBox</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.ListBox</code>.<br/> itself. 
 *  
 * Event is fired when selection is changed by user interaction. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.ListBox</code>.<br/> itself.
 *
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#attachSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.commons.ListBox</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ListBox#detachSelect
 * @function
 */

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> ID of the ListBox which triggered the event.</li>
 * <li>'selectedIndex' of type <code>int</code> The currently selected index of the ListBox. In the case of multiple selection, this is exactly one of the selected indices - the one whose selection has triggered the selection change; to get all currently selected indices, use selectedIndices.</li>
 * <li>'selectedItem' of type <code>sap.ui.core.Item</code> The currently selected item of the ListBox. In the case of multiple selection, this is exactly one of the selected items - the one whose selection has triggered the selection change.</li>
 * <li>'selectedIndices' of type <code>int[]</code> Array containing the indices which are selected.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.ListBox#fireSelect
 * @function
 */


/**
 * Zero-based index of selected item. Index value for no selection is -1. When multiple selection is enabled and multiple items are selected, the method returns the first selected item.
 *
 * @name sap.ui.commons.ListBox.prototype.getSelectedIndex
 * @function

 * @type int
 * @public
 */


/**
 * Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.
 *
 * @name sap.ui.commons.ListBox.prototype.setSelectedIndex
 * @function
 * @param {int} 
 *         iIndex
 *         Index to be selected

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * Adds the given index to current selection. When multiple selection is disabled, this replaces the current selection. When the given index is invalid, the call is ignored.
 *
 * @name sap.ui.commons.ListBox.prototype.addSelectedIndex
 * @function
 * @param {int} 
 *         iIndex
 *         Index to add to selection.

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * Removes the given index from this selection. When the index is invalid or not selected, the call is ignored.
 *
 * @name sap.ui.commons.ListBox.prototype.removeSelectedIndex
 * @function
 * @param {int} 
 *         iIndex
 *         Index that shall be removed from selection.

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
 *
 * @name sap.ui.commons.ListBox.prototype.getSelectedIndices
 * @function

 * @type int[]
 * @public
 */


/**
 * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
 * When multiple selection is disabled and multiple items are given, the selection is set to the index of the first valid index in the given array.
 * Any invalid indices are ignored.
 * The previous selection is in any case replaced.
 *
 * @name sap.ui.commons.ListBox.prototype.setSelectedIndices
 * @function
 * @param {int[]} 
 *         aIndices
 *         Indices of the items to be selected.

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * Adds the given indices to selection. Any invalid indices are ignored.
 *
 * @name sap.ui.commons.ListBox.prototype.addSelectedIndices
 * @function
 * @param {int[]} 
 *         aIndices
 *         Indices of the items that shall additionally be selected.

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * Returns whether the given index is selected.
 *
 * @name sap.ui.commons.ListBox.prototype.isIndexSelected
 * @function
 * @param {int} 
 *         iIndex
 *         Index which is checked for selection state.

 * @type boolean
 * @public
 */


/**
 * Returns selected item. When no item is selected, "null" is returned. When multi-selection is enabled and multiple items are selected, only the first selected item is returned.
 *
 * @name sap.ui.commons.ListBox.prototype.getSelectedItem
 * @function

 * @type sap.ui.core.Item
 * @public
 */


/**
 * Returns an array containing the selected items. In the case of no selection, an empty array is returned.
 *
 * @name sap.ui.commons.ListBox.prototype.getSelectedItems
 * @function

 * @type sap.ui.core.Item[]
 * @public
 */


/**
 * Removes complete selection.
 *
 * @name sap.ui.commons.ListBox.prototype.clearSelection
 * @function

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * If the ListBox has a scroll bar because the number of items is larger than the number of visible items, this method scrolls to the item with the given index. If there are enough items, this item will then appear at the topmost visible position in the ListBox. If bLazy is true, it only scrolls as far as required to make the item visible.
 * Setting the scrollTop property and calling scrollToIndex are two operations influencing the same "physical" property, so the last call "wins".
 *
 * @name sap.ui.commons.ListBox.prototype.scrollToIndex
 * @function
 * @param {int} 
 *         iIndex
 *         The index to which the ListBox should scroll.
 * @param {boolean} 
 *         bLazy
 *         If set to true, the ListBox only scrolls if the item is not completely visible, and it scrolls for exactly the space to make it fully visible. If set to false, the item is scrolled to the top position (if possible).

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * Allows setting the list items as array for this instance of ListBox.
 *
 * @name sap.ui.commons.ListBox.prototype.setItems
 * @function
 * @param {sap.ui.core.ListItem[]} 
 *         aItems
 *         The items to set for this ListBox.
 * @param {boolean} 
 *         bDestroyItems
 *         Optional boolean parameter to indicate that the formerly set items should be destroyed, instead of just removed.

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * Keys of the items to be selected, wrapped in an array. An empty array means no selection. When multiple selection is disabled,
 * and multiple keys are given, the selection is set to the item with the first valid key in the given array. Any invalid keys are ignored.
 * The previous selection is replaced in any case.
 *
 * @name sap.ui.commons.ListBox.prototype.setSelectedKeys
 * @function
 * @param {string[]} 
 *         aKeys
 *         The keys of the items to be selected

 * @type sap.ui.commons.ListBox
 * @public
 */


/**
 * Returns the keys of the selected items in an array. If a selected item does not have a key, the respective array entry will be undefined.
 *
 * @name sap.ui.commons.ListBox.prototype.getSelectedKeys
 * @function

 * @type string[]
 * @public
 */


// Start of sap\ui\commons\ListBox.js
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
jQuery.sap.require("jquery.sap.strings");
jQuery.sap.require("sap.ui.core.IconPool");

/**
 * Initializes the ListBox control
 * @private
 */
sap.ui.commons.ListBox.prototype.init = function () {
	this.allowTextSelection(false);
	if (!this._bHeightInItems) { // otherwise setVisibleItems was already called by the JSON constructor
		this._bHeightInItems = false; // decides whether the height is set as CSS size (height is in height property then) or in multiples of an item height (height is in this._iVisibleItems then)
		this._iVisibleItems = -1;     // initially -1, this subsequently must be the number of items that are visible without scrolling; the value is either set directly if the height is given in items, or calculated in onAfterRendering
	}
	this._sTotalHeight = null;    // if height is set in items, this contains the
	if (sap.ui.commons.ListBox._fItemHeight === undefined) {
		sap.ui.commons.ListBox._fItemHeight = -1;
	}
	if (sap.ui.commons.ListBox._iBordersAndStuff === undefined) {
		sap.ui.commons.ListBox._iBordersAndStuff = -1;
	}

	this._aSelectionMap = [];
	this._iLastDirectlySelectedIndex = -1;

	//FIXME Mapping from activeItems index to the id of it for item navigation purposes
	this._aActiveItems = null;
	
	if(sap.ui.Device.support.touch){
		jQuery.sap.require("sap.ui.core.delegate.ScrollEnablement");
		this._oScroller = new sap.ui.core.delegate.ScrollEnablement(this, this.getId()+"-list", {
			   vertical: true,
			   zynga: true,
			   preventDefault: true
		});
	}
	
};


/**
 * Re-initializes the ListBox, so all sizes are fine after a theme switch
 * @private
 */
sap.ui.commons.ListBox.prototype.onThemeChanged = function () {
	sap.ui.commons.ListBox._fItemHeight = -1;
	sap.ui.commons.ListBox._iBordersAndStuff = -1;
	this._sTotalHeight = null;
	if (!this._bHeightInItems) {
		this._iVisibleItems = -1; // re-calculation only required for ItemNavigation - shouldn't change when explicitly set
	}
	this._skipStoreScrollTop = true; // Skip remembering the scrolltop in next onBeforeRendering due to theme change
	if (this.getDomRef()) {
		this.invalidate();
	}
};


/**
 * Called before rendering. Required for storing the scroll position.
 * @private
 */
sap.ui.commons.ListBox.prototype.onBeforeRendering = function () {
	if(this._skipStoreScrollTop){
		delete this._skipStoreScrollTop;
		return;
	}
	
	this.getScrollTop(); // store current ScrollTop
	// TODO: store focus??
};


/**
 * Called after rendering. Required for calculating and setting the correct heights.
 * @private
 */
sap.ui.commons.ListBox.prototype.onAfterRendering = function () {
	var oDomRef = this.getDomRef();

	// calculate item height
	if (sap.ui.commons.ListBox._fItemHeight <= 0) { // TODO: merge with width measurement which is currently in renderer
		
		// create dummy ListBox with dummy item
		var oStaticArea = sap.ui.getCore().getStaticAreaRef();
		var div = document.createElement("div");
		div.id = "sap-ui-commons-ListBox-sizeDummy";
		oStaticArea.appendChild(div);
		div.innerHTML = '<div class="sapUiLbx sapUiLbxFlexWidth sapUiLbxStd"><ul><li class="sapUiLbxI"><span class="sapUiLbxITxt">&nbsp;</span></li></ul></div>';
		var oItemDomRef = div.firstChild.firstChild.firstChild;
		sap.ui.commons.ListBox._fItemHeight = oItemDomRef.offsetHeight;

		// subpixel rendering strategy in IE >= 9 can lead to the total being larger than the sum of heights
		if (!!sap.ui.Device.browser.internet_explorer && (document.documentMode == 9 || document.documentMode == 10)) { // TODO: browser version check... not good...
			var cs = document.defaultView.getComputedStyle(oItemDomRef.firstChild, "");
			var h = parseFloat(cs.getPropertyValue("height").split("px")[0]);
			if (!(typeof h === "number") || !(h > 0)) { // sometimes cs.getPropertyValue("height") seems to return "auto"
				h = jQuery(oItemDomRef.firstChild).height();
			}
			var pt = parseFloat(cs.getPropertyValue("padding-top").split("px")[0]);
			var pb = parseFloat(cs.getPropertyValue("padding-bottom").split("px")[0]);
			var bt = parseFloat(cs.getPropertyValue("border-top-width").split("px")[0]);
			var bb = parseFloat(cs.getPropertyValue("border-bottom-width").split("px")[0]);
			sap.ui.commons.ListBox._fItemHeight = h + pt + pb + bt + bb;
		}

		// remove the dummy
		oStaticArea.removeChild(div);
	}

	// calculate height of ListBox borders and padding
	if (sap.ui.commons.ListBox._iBordersAndStuff == -1) {
		var $DomRef = jQuery(this.getDomRef());
		var outerHeight = $DomRef.outerHeight();
		var innerHeight = $DomRef.height();
		sap.ui.commons.ListBox._iBordersAndStuff = outerHeight - innerHeight;
	}

	// Height is set in number of visible items
	if (this._bHeightInItems) {
		if(this._sTotalHeight == null) {
			//...but the height needs to be calculated first
			this._calcTotalHeight(); // TODO: verify this._sTotalHeight is > 0

			// now set height
			oDomRef.style.height = this._sTotalHeight;
		} else {
			// height was already set in the renderer!
		}
	}

	// find out how many items are visible because the ItemNavigation needs to know
	if (this._iVisibleItems = -1) {
		this._updatePageSize();
	}

	// Collect items for ItemNavigation   TODO: make it cleaner
	var oFocusRef = this.getFocusDomRef(),
			aRows = oFocusRef.childNodes,
			aDomRefs = [],
			aItems = this.getItems();
	this._aActiveItems = [];
	var aActiveItems = this._aActiveItems;
	for (var i=0; i < aRows.length; i++) {
		if (!(aItems[i] instanceof sap.ui.core.SeparatorItem)) {
			aActiveItems[aDomRefs.length] = i;
			aDomRefs.push(aRows[i]);
		}
	}

	// init ItemNavigation
	if (!this.oItemNavigation) {
		var bNotInTabChain = (!this.getEnabled() || !this.getEditable());
		this.oItemNavigation = new sap.ui.core.delegate.ItemNavigation(null, null, bNotInTabChain);
		this.oItemNavigation.attachEvent(sap.ui.core.delegate.ItemNavigation.Events.AfterFocus, this._handleAfterFocus, this);
		this.addDelegate(this.oItemNavigation);
	}
	this.oItemNavigation.setRootDomRef(oFocusRef);
	this.oItemNavigation.setItemDomRefs(aDomRefs);
	this.oItemNavigation.setCycling(false);
	this.oItemNavigation.setSelectedIndex(this._getNavigationIndexForRealIndex(this.getSelectedIndex()));
	this.oItemNavigation.setPageSize(this._iVisibleItems); // Page down by number of visible items

	// Apply scrollTop


	// if scrolling to a certain item index is currently requested (but was not done because the control was not rendered before), do it now
	if (this.oScrollToIndexRequest) {
		this.scrollToIndex(this.oScrollToIndexRequest.iIndex, this.oScrollToIndexRequest.bLazy); // keep the oScrollToIndexRequest for the timeouted call
	} else {
		var scrollTop = this.getProperty("scrollTop");
		if (scrollTop > -1) {
			oDomRef.scrollTop = scrollTop;
		}
	}

	// sometimes this did not work, so repeat it after a timeout (consciously done twice, yes)
	var that = this;
	window.setTimeout(function() { // needs to be delayed because in Firefox sometimes the scrolling seems to come too early
		// if scrolling to a certain item index is currently requested (but was not done because the control was not rendered before), do it now
		if (that.oScrollToIndexRequest) {
			that.scrollToIndex(that.oScrollToIndexRequest.iIndex, that.oScrollToIndexRequest.bLazy);
			that.oScrollToIndexRequest = null;
		} else {
			var scrollTop = that.getProperty("scrollTop");
			if (scrollTop > -1) {
				oDomRef.scrollTop = scrollTop;
			}
		}
	}, 0);
};


/**
 * For the given iIndex, this method calculates the index of the respective item within the ItemNavigation set.
 * (if there are separators, the ItemNavigation does not know them)
 * Prerequisite: the iIndex points to an element which is NOT a Separator or disabled (= it must be known to the ItemNavigation)
 * @private
 */
sap.ui.commons.ListBox.prototype._getNavigationIndexForRealIndex = function(iIndex) {
	var aItems = this.getItems();
	var iNavIndex = iIndex;
	for (var i = 0; i < iIndex; i++) {
		if (aItems[i] instanceof sap.ui.core.SeparatorItem) {
			iNavIndex--;
		}
	}
	return iNavIndex;
};


/**
 * Calculates the number of visible items. Must happen after rendering and whenever the height is changed without rerendering.
 * @private
 */
sap.ui.commons.ListBox.prototype._updatePageSize = function() {
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		if (sap.ui.commons.ListBox._fItemHeight > 0) {
			this._iVisibleItems = Math.floor(oDomRef.clientHeight / sap.ui.commons.ListBox._fItemHeight);
		} else {
			// TODO: shouldn't happen
		}
	}
	// else: nothing to do, item navigation will be initialized after rendering
};

/*
 * Scrolls the item with the given index into view, preferably at the topmost position.
 */
sap.ui.commons.ListBox.prototype.scrollToIndex = function(iIndex, bLazy) {
	var oDomRef = this.getDomRef();
	if (oDomRef) { // only if already rendered
		var oItem = this.$("list").children("li[data-sap-ui-lbx-index=" + iIndex + "]");
		oItem = oItem.get(0);
		if (oItem) {
			var iScrollTop = oItem.offsetTop;
			if (!bLazy) {
				// scroll there without any conditions
				this.setScrollTop(iScrollTop);
			} else {
				// "lazy" means we should only scroll if required and as far as required
				var iCurrentScrollTop = oDomRef.scrollTop;
				var iViewPortHeight = jQuery(oDomRef).height();
				if (iCurrentScrollTop >= iScrollTop) {
					// if we have to scroll up, the behavior is fine already
					this.setScrollTop(iScrollTop);
				} else if ((iScrollTop + sap.ui.commons.ListBox._fItemHeight) > (iCurrentScrollTop + iViewPortHeight)) { // bottom Edge of item > bottom edge of viewport
					// the item is - at least partly - below the current viewport of the ListBox, so scroll down. But only as far as required
					this.setScrollTop(Math.ceil(iScrollTop + sap.ui.commons.ListBox._fItemHeight - iViewPortHeight)); // round because of _fItemHeight
				} else {
					// if the item is already fully visible, do nothing
				}
			}
		}
		// store the actual position
		this.getScrollTop();
	} else {
		// control not yet rendered, thus item height is unknown, so remember request for after rendering
		this.oScrollToIndexRequest = {iIndex:iIndex,bLazy:bLazy};
	}
	return this;
};

sap.ui.commons.ListBox.prototype.getVisibleItems = function() {
	return this._iVisibleItems;
};

/**
 * Makes the ListBox render with a height that allows it to display exactly the given number of items.
 *
 * @param {int} iItemCount the number of items that should fit into the ListBox without scrolling
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setVisibleItems = function(iItemCount) {
 /*
	*For the calculation, the size of the first item is used; if no item is present, an invisible dummy item
	* is rendered and instantly removed again.
	* Therefore, this method will not work for items with different heights and if actual items have a different
	* size than generic empty dummy items.
	*/
	// TODO: prevent values less than 1, or make them go back to CSS heights
	this.setProperty("visibleItems", iItemCount, true);

	this._iVisibleItems = iItemCount;
	if (iItemCount < 0) {
		this._bHeightInItems = false;
	} else {
		this._bHeightInItems = true;
	}

	// the actual height to set must be calculated now or later
	this._sTotalHeight = null;

	// if already rendered, calculate and set the height
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		if (this._bHeightInItems) {
			var oFirstItem = oDomRef.firstChild ? oDomRef.firstChild.firstChild : null;
			if (oFirstItem || ((sap.ui.commons.ListBox._fItemHeight > 0) && (sap.ui.commons.ListBox._iBordersAndStuff > 0))) {
				oDomRef.style.height = this._calcTotalHeight();
			} else {
				// already rendered, but no dummy item!
				this.invalidate();
			}
		} else {
			oDomRef.style.height = this.getHeight();
			this._updatePageSize();
			if (this.oItemNavigation) {
				this.oItemNavigation.setPageSize(this._iVisibleItems); // Page down by number of visible items
			}
		}
	}

	if (this._sTotalHeight == null) { // this is the "else" clause covering all cases where the height was not set above
		// called before rendering, so the calculation and setting of the actual CSS height to set must be done later
	}

	return this;
};


/**
 * Calculates the outer height of the ListBox from the known item height and number of items that should fit.
 * The result (a CSS size string) is returned as well as assigned to this._sTotalHeight.
 * Precondition: the control is rendered, this._iVisibleItems, sap.ui.commons.ListBox._iBordersAndStuff and
 * sap.ui.commons.ListBox._fItemHeight are initialized.
 *
 * @returns {string} the required outer height as CSS size
 * @private
 */
sap.ui.commons.ListBox.prototype._calcTotalHeight = function() {
	// TODO: check preconditions
	var desiredHeight = this._iVisibleItems * sap.ui.commons.ListBox._fItemHeight;
	this._sTotalHeight = (desiredHeight + sap.ui.commons.ListBox._iBordersAndStuff) + "px";
	return this._sTotalHeight;
};


/**
 * Sets the height of this ListBox in CSS units

 * @param {string} sHeight
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setHeight = function(sHeight) {
	this._bHeightInItems = false;
	this._iVisibleItems = -1;

	var oDomRef = this.getDomRef();
	if (oDomRef) {
		oDomRef.style.height = sHeight;
		this._updatePageSize();
		if (this.oItemNavigation) {
			this.oItemNavigation.setPageSize(this._iVisibleItems); // Page down by number of visible items
		}
	}

	this.setProperty("height", sHeight, true); // no re-rendering
	return this;
};

/**
 * Setter for property width.
 *
 * @param {string} sWidth
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setWidth = function(sWidth) {
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		oDomRef.style.width = sWidth;
	}
	this.setProperty("width", sWidth, true); // no re-rendering
	return this;
};

/**
 * Positions the ListBox contents that are scrolled-down by the given number of pixels
 *
 * @param {int} iScrollTip Vertical scroll position in pixels
 * @return {sap.ui.commons.ListBox} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ListBox.prototype.setScrollTop = function (iScrollTop) {
	var scrollDomRef = this.getDomRef();
	this.oScrollToIndexRequest = null; // delete any pending scroll request
	if (scrollDomRef) {
		scrollDomRef.scrollTop = iScrollTop;
	}
	this.setProperty("scrollTop", iScrollTop, true); // no rerendering
	return this;
};

/**
 * Returns how many pixels the ListBox contents are currently scrolled down
 *
 * @return {int} Vertical scroll position
 * @public
 */
sap.ui.commons.ListBox.prototype.getScrollTop = function () {
	var scrollDomRef = this.getDomRef();
	if (scrollDomRef) {
		var scrollTop = scrollDomRef.scrollTop;
		this.setProperty("scrollTop", scrollTop, true);
		return scrollTop;
	} else {
		return this.getProperty("scrollTop");
	}
};



/* --- user interaction handling methods --- */

sap.ui.commons.ListBox.prototype.onfocusin = function (oEvent) {
	if(!!sap.ui.Device.browser.internet_explorer && ((sap.ui.Device.browser.version == 7) || (sap.ui.Device.browser.version == 8)) /* =IE8! */ && (oEvent.target != this.getDomRef()) && (oEvent.target.className != "sapUiLbxI")) {
		var parent = oEvent.target.parentNode;

		if (jQuery(parent).hasClass("sapUiLbxI")) {
			parent.focus();
		}
	}
};

sap.ui.commons.ListBox.prototype.onmousedown = function(oEvent) {
	if (!!sap.ui.Device.browser.webkit && oEvent.target && oEvent.target.id === this.getId()) { // ListBox scrollbar has been clicked; webkit completely removes the focus, which breaks autoclose popups
		var idToFocus = document.activeElement ? document.activeElement.id : this.getId();
		var that = this;
		window.setTimeout(function(){
			var scrollPos = that.getDomRef().scrollTop; // yes, this scrollPosition is the right one to use. The one before setTimeout works for the scrollbar grip, but not for the arrows
			jQuery.sap.focus(jQuery.sap.domById(idToFocus)); // re-set the focus
			that.getDomRef().scrollTop = scrollPos; // re-apply the scroll position (otherwise the focus() call would scroll the focused element into view)
		},0);
	}
};

sap.ui.commons.ListBox.prototype.onclick = function (oEvent) {
	this._handleUserActivation(oEvent);
};

sap.ui.commons.ListBox.prototype.onsapspace = function (oEvent) {
	this._handleUserActivation(oEvent);
};

/*
 * Ensure the sapspace event with modifiers is also handled as well as the respective "enter" events
 */

sap.ui.commons.ListBox.prototype.onsapspacemodifiers = sap.ui.commons.ListBox.prototype.onsapspace;
sap.ui.commons.ListBox.prototype.onsapenter = sap.ui.commons.ListBox.prototype.onsapspace;
sap.ui.commons.ListBox.prototype.onsapentermodifiers = sap.ui.commons.ListBox.prototype.onsapspace;

/**
 * Internal method invoked when the user activates an item. Differentiates and dispatches according to modifier key
 * and current selection.
 *
 * @private
 */
sap.ui.commons.ListBox.prototype._handleUserActivation = function (oEvent) {
	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	var oSource = oEvent.target;
	if (oSource.id === "" || jQuery.sap.endsWith(oSource.id, "-txt")) {
		oSource = oSource.parentNode;
		if (oSource.id === "") { // could be the image inside the first cell
			oSource = oSource.parentNode;
		}
	}
	var attr = jQuery(oSource).attr("data-sap-ui-lbx-index");
	if (typeof attr == "string" && attr.length > 0) {
		var iIndex = parseInt(attr, 10); // Get the selected index from the HTML

		var aItems = this.getItems();
		var oItem = aItems[iIndex]; // oItem could be a separator, though!

		// It could be the case that the list of items changed during the click event handling. Ensure the item is still the one in
		if (aItems.length <= iIndex) {  // TODO: very questionable! Why set the index to the last position? And why allow removing items during the processing?  Remove!
			iIndex = aItems.length - 1;
		}

		if (iIndex >= 0 && iIndex < aItems.length) { // TODO: this should be known by now
			if (oItem.getEnabled() && !(oItem instanceof sap.ui.core.SeparatorItem)) {
				// Take care of selection and select event
				if (oEvent.ctrlKey || oEvent.metaKey) { // = CTRL
						this._handleUserActivationCtrl(iIndex, oItem);
				} else {
					if (oEvent.shiftKey) {
						this.setSelectedIndices(this._getUserSelectionRange(iIndex));
						this.fireSelect({
							id:this.getId(),
							selectedIndex:iIndex,
							selectedIndices:this.getSelectedIndices(), /* NEW (do not use hungarian prefixes!) */
							selectedItem:oItem,
							sId:this.getId(),
							aSelectedIndices:this.getSelectedIndices() /* OLD */
						});
						this._iLastDirectlySelectedIndex = iIndex;
					} else {
						this._handleUserActivationPlain(iIndex, oItem);
					}
				}
			}
		}
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};

/**
 * Called when the user triggers an item without holding a modifier key.
 * Changes the selection in the expected way.
 *
 * @private
 */
sap.ui.commons.ListBox.prototype._handleUserActivationPlain = function (iIndex, oItem) {
	this._iLastDirectlySelectedIndex = iIndex;
	this.oItemNavigation.setSelectedIndex(this._getNavigationIndexForRealIndex(iIndex));
	if (this.getSelectedIndex() != iIndex || this.getSelectedIndices().length > 1) {
		this.setSelectedIndex(iIndex); // Replace selection

		this.fireSelect({
			id:this.getId(),
			selectedIndex:iIndex,
			selectedIndices:this.getSelectedIndices(), /* NEW (do not use hungarian prefixes!) */
			selectedItem:oItem,
			sId:this.getId(),
			aSelectedIndices:this.getSelectedIndices() /* OLD */
		});
	}
};

/**
 * Called when the user triggers an item while pressing the Ctrl key.
 * Changes the selection in the expected way for the "Ctrl" case.
 *
 * @private
 */
sap.ui.commons.ListBox.prototype._handleUserActivationCtrl = function (iIndex, oItem) {
	this._iLastDirectlySelectedIndex = iIndex;
	this.oItemNavigation.setSelectedIndex(this._getNavigationIndexForRealIndex(iIndex));
	if (this.isIndexSelected(iIndex)) {
		this.removeSelectedIndex(iIndex); // Remove from multi-selection
	} else {
		this.addSelectedIndex(iIndex); // Add to multi-selection
	}

	this.fireSelect({
		id:this.getId(),
		selectedIndex:iIndex,
		selectedIndices:this.getSelectedIndices(), /* NEW (do not use hungarian prefixes!) */
		selectedItem:oItem,
		sId:this.getId(),
		aSelectedIndices:this.getSelectedIndices() /* OLD */
	});
};

/**
 * Calculates the list of indices ranging from the previously selected item to the
 * given index. Used internally for calculating the new selection range when the user holds the "shift" key
 * while clicking in the ListBox.
 *
 * @private
 */
sap.ui.commons.ListBox.prototype._getUserSelectionRange = function (iIndex) {
	if (this._iLastDirectlySelectedIndex == -1) {
		// TODO: Use focus and continue execution
		return [];
	}

	var aItems = this.getItems();
	var aRange = [];
	if (this._iLastDirectlySelectedIndex <= iIndex) {
		for (var i = this._iLastDirectlySelectedIndex; i <= iIndex; i++) {
			if ((i > -1) && (aItems[i].getEnabled() && !(aItems[i] instanceof sap.ui.core.SeparatorItem))) {
				aRange.push(i);
			}
		}
	} else {
		for (var i = iIndex; i <= this._iLastDirectlySelectedIndex; i++) {
			if ((i > -1) && (aItems[i].getEnabled() && !(aItems[i] instanceof sap.ui.core.SeparatorItem))) {
				aRange.push(i);
			}
		}
	}
	return aRange;
};



/* --- Overwritten setters and getters affecting the selection --- */

sap.ui.commons.ListBox.prototype.getSelectedIndex = function() {
	for (var i = 0; i < this._aSelectionMap.length; i++) {
		if (this._aSelectionMap[i]) {
			return i;
		}
	}
	return -1;
};

sap.ui.commons.ListBox.prototype.setSelectedIndex = function(iSelectedIndex) {
	if ((iSelectedIndex < -1) || (iSelectedIndex > this._aSelectionMap.length-1)) {
		return;
	} // Invalid index

	// do not select a disabled or separator item
	var aItems = this.getItems();
	if ((iSelectedIndex > -1) && (!aItems[iSelectedIndex].getEnabled() || (aItems[iSelectedIndex] instanceof sap.ui.core.SeparatorItem))) {
		return;
	}

	for (var i = 0; i < this._aSelectionMap.length; i++) {
		this._aSelectionMap[i] = false;
	}
	this._aSelectionMap[iSelectedIndex] = true;
	// And inform the itemNavigation about this, too
	if(this.oItemNavigation) {
		this.oItemNavigation.setSelectedIndex(this._getNavigationIndexForRealIndex(iSelectedIndex));
	}
	this.getRenderer().handleSelectionChanged(this);

	return this;
};

sap.ui.commons.ListBox.prototype.addSelectedIndex = function(iSelectedIndex) {
	if (!this.getAllowMultiSelect()) { // If multi-selection is not allowed, this call equals setSelectedIndex
		this.setSelectedIndex(iSelectedIndex);
	}

	// Multi-selectable case
	if ((iSelectedIndex < -1) || (iSelectedIndex > this._aSelectionMap.length-1)) {
		return;
	} // Invalid index

	// do not select a disabled or separator item
	var aItems = this.getItems();
	if ((iSelectedIndex > -1) && (!aItems[iSelectedIndex].getEnabled() || (aItems[iSelectedIndex] instanceof sap.ui.core.SeparatorItem))) {
		return;
	}

	if (this._aSelectionMap[iSelectedIndex]) {
		return;
	} // Selection does not change

	// Was not selected before
	this._aSelectionMap[iSelectedIndex] = true;
	this.getRenderer().handleSelectionChanged(this);

	return this;
};

sap.ui.commons.ListBox.prototype.removeSelectedIndex = function(iIndex) {
	if ((iIndex < 0) || (iIndex > this._aSelectionMap.length-1)) {
		return;
	} // Invalid index

	if (!this._aSelectionMap[iIndex]) {
		return;
	} // Selection does not change

	// Was selected before
	this._aSelectionMap[iIndex] = false;
	this.getRenderer().handleSelectionChanged(this);

	return this;
};

sap.ui.commons.ListBox.prototype.clearSelection = function() {
	for (var i = 0; i < this._aSelectionMap.length; i++) {
		if (this._aSelectionMap[i]) {
			this._aSelectionMap[i] = false;
		}
	}
	// More or less re-initialized
	this._iLastDirectlySelectedIndex = -1;
	// Reset the index also in ItemNavigation
	if(this.oItemNavigation) {
		this.oItemNavigation.setSelectedIndex(-1);
	}
	this.getRenderer().handleSelectionChanged(this);

	return this;
};



sap.ui.commons.ListBox.prototype.getSelectedIndices = function() {
	var aResult = [];
	for (var i = 0; i < this._aSelectionMap.length; i++) {
		if (this._aSelectionMap[i]) {
			aResult.push(i);
		}
	}
	return aResult;
};

sap.ui.commons.ListBox.prototype.setSelectedIndices = function(aSelectedIndices) {
	var indicesToSet = [];
	var aItems = this.getItems();
	for (var i = 0; i < aSelectedIndices.length; i++) {
		if ((aSelectedIndices[i] > -1) && (aSelectedIndices[i] < this._aSelectionMap.length)) {
			if (aItems[aSelectedIndices[i]].getEnabled() && !(aItems[aSelectedIndices[i]] instanceof sap.ui.core.SeparatorItem)) {
				indicesToSet.push(aSelectedIndices[i]);
			}
		}
	}

	if (indicesToSet.length > 0) { // TODO: Disable event listening to items??
		// With multi-selection disabled, use the first valid index only
		if (!this.getAllowMultiSelect()) {
			indicesToSet = [indicesToSet[0]];
		}
	}

	for (var i = 0; i < this._aSelectionMap.length; i++) {
		this._aSelectionMap[i] = false;
	}

	// O(n+m)
	for (var i = 0; i < indicesToSet.length; i++) {
		this._aSelectionMap[indicesToSet[i]] = true;
	}
	this.getRenderer().handleSelectionChanged(this);

	return this;
};

sap.ui.commons.ListBox.prototype.addSelectedIndices = function(aSelectedIndices) {
	var indicesToSet = [];
	var aItems = this.getItems();
	for (var i = 0; i < aSelectedIndices.length; i++) {
		if ((aSelectedIndices[i] > -1) && (aSelectedIndices[i] < this._aSelectionMap.length)) {
			// do not select a disabled or separator item
			if (aItems[aSelectedIndices[i]].getEnabled() && !(aItems[aSelectedIndices[i]] instanceof sap.ui.core.SeparatorItem)) {
				indicesToSet.push(aSelectedIndices[i]);
			}
		}
	}

	if (indicesToSet.length > 0) { // TODO: Disable event listening to items??
		// With multi-selection disabled, use the first valid index only
		if (!this.getAllowMultiSelect()) {
			indicesToSet = [indicesToSet[0]];
		}

		// O(n+m)
		for (var i = 0; i < indicesToSet.length; i++) {
			this._aSelectionMap[indicesToSet[i]] = true;
		}
		this.getRenderer().handleSelectionChanged(this);
	}
	return this;
};


sap.ui.commons.ListBox.prototype.isIndexSelected = function(iIndex) {
	if ((iIndex < -1) || (iIndex > this._aSelectionMap.length-1)) {
		return false; // Invalid index -> not selected
	}

	return this._aSelectionMap[iIndex];
};


sap.ui.commons.ListBox.prototype.setSelectedKeys = function(aSelectedKeys) {
	var aItems = this.getItems();

	var key;
	var mKeyMap = {};
	for (var i = 0; i < aSelectedKeys.length; i++) { // put the keys into a map to hopefully search faster below
		mKeyMap[aSelectedKeys[i]] = true;
	}

	var aIndices = [];
	for (var j = 0; j < aItems.length; j++) {
		if (mKeyMap[aItems[j].getKey()]) {
			aIndices.push(j);
		}
	}

	return this.setSelectedIndices(aIndices);
};

sap.ui.commons.ListBox.prototype.getSelectedKeys = function() {
	var aItems = this.getItems();
	var aResult = [];
	for (var i = 0; i < this._aSelectionMap.length; i++) {
		if (this._aSelectionMap[i]) {
			aResult.push(aItems[i].getKey());
		}
	}
	return aResult;
};


sap.ui.commons.ListBox.prototype.getSelectedItem = function() {
	var iIndex = this.getSelectedIndex();
	if ((iIndex < 0) || (iIndex >= this._aSelectionMap.length)) {
		return null;
	}
	return this.getItems()[iIndex];
};

sap.ui.commons.ListBox.prototype.getSelectedItems = function() {
	var aItems = this.getItems();
	var aResult = [];
	for (var i = 0; i < this._aSelectionMap.length; i++) {
		if (this._aSelectionMap[i]) {
			aResult.push(aItems[i]);
		}
	}
	return aResult;
};

sap.ui.commons.ListBox.prototype.setAllowMultiSelect = function(bAllowMultiSelect) {
	this.setProperty("allowMultiSelect", bAllowMultiSelect);
	var oneWasSelected = false;
	var twoWereSelected = false;
	if (!bAllowMultiSelect && this._aSelectionMap) {
		for (var i = 0; i < this._aSelectionMap.length; i++) {
			if (this._aSelectionMap[i]) {
				if (!oneWasSelected) {
					oneWasSelected = true;
				} else {
					this._aSelectionMap[i] = false;
					twoWereSelected = true;
				}
			}
		}
	}
	if (twoWereSelected) {
		this.getRenderer().handleSelectionChanged(this);
	}
	return this;
};


/**
 * Handles the event that gets fired by the {@link sap.ui.core.delegate.ItemNavigation} delegate.
 *
 * @param {sap.ui.base.Event} oControlEvent The event that gets fired by the {@link sap.ui.core.delegate.ItemNavigation} delegate.
 * @private
 */
sap.ui.commons.ListBox.prototype._handleAfterFocus = function(oControlEvent) {
	var iIndex = oControlEvent.getParameter("index");
	iIndex = ((iIndex !== undefined && iIndex >= 0) ? this._aActiveItems[iIndex] : 0);

	this.getRenderer().handleARIAActivedescendant(this, iIndex);
};

/* --- "items" aggregation methods, overwritten to update _aSelectionMap and allow filteredItems --- */

/*
 * Implementation of API method setItems.
 * Semantically belonging to "items" aggregation but not part of generated method set.
 * @param bNoItemsChanged not in official API, only needed in DropdownBox TypeAhead
 */
sap.ui.commons.ListBox.prototype.setItems = function(aItems, bDestroyItems, bNoItemsChanged) {
	this.bNoItemsChangeEvent = true;
	if(bDestroyItems) {
		this.destroyItems();
	} else {
		this.removeAllItems();
	}
	for(var i = 0, l = aItems.length; i < l; i++){
		this.addItem(aItems[i]);
	}
	this.bNoItemsChangeEvent = undefined;
	if (!bNoItemsChanged) {
		this.fireEvent("itemsChanged", {event: "setItems", items: aItems}); //private event used in DropdownBox
	}
	return this;
};

sap.ui.commons.ListBox.prototype.addItem = function(oItem) {
	this.bNoItemInvalidateEvent = true;
	this.addAggregation("items", oItem);
	this.bNoItemInvalidateEvent = false;
	if ( !this._aSelectionMap ) {
		this._aSelectionMap = [];
	}
	this._aSelectionMap.push(false);

	if (!this.bNoItemsChangeEvent) {
		this.fireEvent("itemsChanged", {event: "addItem", item: oItem}); //private event used in DropdownBox
	}

	oItem.attachEvent("_change", this._handleItemChanged, this);

	return this;
};

sap.ui.commons.ListBox.prototype.insertItem = function(oItem, iIndex) {
	if ((iIndex < 0) || (iIndex > this._aSelectionMap.length)) {
		return;
	} // Ignore invalid index TODO:: check behavior for iIndex=length
	// TODO: Negative indices might be used to count from end of array

	this.bNoItemInvalidateEvent = true;
	this.insertAggregation("items", oItem, iIndex);
	this.bNoItemInvalidateEvent = false;
	this._aSelectionMap.splice(iIndex, 0, false);

	this.invalidate();

	if (!this.bNoItemsChangeEvent) {
		this.fireEvent("itemsChanged", {event: "insertItems", item: oItem, index: iIndex}); //private event used in DropdownBox
	}

	oItem.attachEvent("_change", this._handleItemChanged, this);

	return this;
};

sap.ui.commons.ListBox.prototype.removeItem = function(vElement) {
	var iIndex = vElement;
	if (typeof(vElement) == "string") { // ID of the element is given
		vElement = sap.ui.getCore().byId(vElement);
	}
	if (typeof(vElement) == "object") { // the element itself is given or has just been retrieved
		iIndex = this.indexOfItem(vElement);
	}

	if ((iIndex < 0) || (iIndex > this._aSelectionMap.length-1)) {
		if (!this.bNoItemsChangeEvent) {
			this.fireEvent("itemsChanged", {event: "removeItem", item: vElement}); //private event used in DropdownBox
		}
		return;
	} // Ignore invalid index

	this.bNoItemInvalidateEvent = true;
	var oRemoved = this.removeAggregation("items", iIndex);
	this.bNoItemInvalidateEvent = false;
	this._aSelectionMap.splice(iIndex, 1);

	this.invalidate();

	if (!this.bNoItemsChangeEvent) {
		this.fireEvent("itemsChanged", {event: "removeItem", item: oRemoved}); //private event used in DropdownBox
	}

	oRemoved.detachEvent("_change", this._handleItemChanged, this);

	return oRemoved;
};

sap.ui.commons.ListBox.prototype.removeAllItems = function() {
	this.bNoItemInvalidateEvent = true;
	var oRemoved = this.removeAllAggregation("items");
	this.bNoItemInvalidateEvent = false;

	this._aSelectionMap = [];

	this.invalidate();

	if (!this.bNoItemsChangeEvent) {
		this.fireEvent("itemsChanged", {event: "removeAllItems"}); //private event used in DropdownBox
	}

	for ( var i = 0; i < oRemoved.length; i++) {
		oRemoved[i].detachEvent("_change", this._handleItemChanged, this);
	}

	return oRemoved;
};

sap.ui.commons.ListBox.prototype.destroyItems = function() {

	var aItems = this.getItems();
	for ( var i = 0; i < aItems.length; i++) {
		aItems[i].detachEvent("_change", this._handleItemChanged, this);
	}

	this.bNoItemInvalidateEvent = true;
	var destroyed = this.destroyAggregation("items");
	this.bNoItemInvalidateEvent = false;

	this._aSelectionMap = [];

	this.invalidate();

	if (!this.bNoItemsChangeEvent) {
		this.fireEvent("itemsChanged", {event: "destroyItems"}); //private event used in DropdownBox
	}

	return destroyed;
};

sap.ui.commons.ListBox.prototype.updateItems = function(){

	this.bNoItemsChangeEvent = true;

	this.updateAggregation("items");

	this.bNoItemsChangeEvent = undefined;

	this.fireEvent("itemsChanged", {event: "updateItems"}); //private event used in DropdownBox

};

/**
 * Does all the cleanup when the ListBox is to be destroyed.
 * Called from the element's destroy() method.
 * @private
 */
sap.ui.commons.ListBox.prototype.exit = function (){
	if (this.oItemNavigation) {
		this.removeDelegate(this.oItemNavigation);
		this.oItemNavigation.destroy();
		delete this.oItemNavigation;
	}
	
	if(this._oScroller){
		this._oScroller.destroy();
		this._oScroller = null;
	}

	// No super.exit() to call
};

/*
 * Overrides getFocusDomRef of base element class.
 * @public
 */
sap.ui.commons.ListBox.prototype.getFocusDomRef = function() {
	return this.getDomRef("list");
};

/*
 * Overwrites default implementation
 * the label must point to the UL element
 * @public
 */
sap.ui.commons.ListBox.prototype.getIdForLabel = function () {
	return this.getId()+'-list';
};

/*
 * inform ComboBox if an item has changed
*/
sap.ui.commons.ListBox.prototype._handleItemChanged = function(oEvent) {

	if (!this.bNoItemInvalidateEvent) {
		this.fireEvent("itemInvalidated", {item: oEvent.oSource}); //private event used in ComboBox
	}

};
