/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Toolbar.
jQuery.sap.declare("sap.ui.commons.Toolbar");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Toolbar.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 'auto')</li>
 * <li>{@link #getDesign design} : sap.ui.commons.ToolbarDesign (default: sap.ui.commons.ToolbarDesign.Flat)</li>
 * <li>{@link #getStandalone standalone} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.commons.ToolbarItem[]</li>
 * <li>{@link #getRightItems rightItems} : sap.ui.commons.ToolbarItem[]</li></ul>
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
 * A horizontal row of items where in many cases the single toolbar items are buttons containing icons. Note that all controls with the
 * sap.ui.commons.ToolbarItem interface can be used as item: Button, ComboBox, TextField.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.Toolbar
 */
sap.ui.core.Control.extend("sap.ui.commons.Toolbar", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'},
		"design" : {type : "sap.ui.commons.ToolbarDesign", group : "Appearance", defaultValue : sap.ui.commons.ToolbarDesign.Flat},
		"standalone" : {type : "boolean", group : "Appearance", defaultValue : true}
	},
	defaultAggregation : "items",
	aggregations : {
    	"items" : {type : "sap.ui.commons.ToolbarItem", multiple : true, singularName : "item"}, 
    	"rightItems" : {type : "sap.ui.commons.ToolbarItem", multiple : true, singularName : "rightItem"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Toolbar with name <code>sClassName</code> 
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
 * @name sap.ui.commons.Toolbar.extend
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
 * @name sap.ui.commons.Toolbar#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Toolbar#setVisible
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * When there is not enough space for the toolbar to display all items, the rightmost items are overflowing into a drop-down menu.
 * 
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.Toolbar#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Toolbar#setWidth
 * @function
 */


/**
 * Getter for property <code>design</code>.
 * Design settings are theme-dependent.
 *
 * Default value is <code>Flat</code>
 *
 * @return {sap.ui.commons.ToolbarDesign} the value of property <code>design</code>
 * @public
 * @name sap.ui.commons.Toolbar#getDesign
 * @function
 */

/**
 * Setter for property <code>design</code>.
 *
 * Default value is <code>Flat</code> 
 *
 * @param {sap.ui.commons.ToolbarDesign} oDesign  new value for property <code>design</code>
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Toolbar#setDesign
 * @function
 */


/**
 * Getter for property <code>standalone</code>.
 * Per default, tool bars have the stand alone status.
 * Alternatively, they can be nested in other controls and then inherit the design from their parent control.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>standalone</code>
 * @public
 * @name sap.ui.commons.Toolbar#getStandalone
 * @function
 */

/**
 * Setter for property <code>standalone</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bStandalone  new value for property <code>standalone</code>
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Toolbar#setStandalone
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregating the tool bar items.
 * 
 * <strong>Note</strong>: this is the default aggregation for Toolbar.
 * @return {sap.ui.commons.ToolbarItem[]}
 * @public
 * @name sap.ui.commons.Toolbar#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.commons.ToolbarItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Toolbar#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.commons.ToolbarItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Toolbar#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.commons.ToolbarItem} vItem the item to remove or its index or id
 * @return {sap.ui.commons.ToolbarItem} the removed item or null
 * @public
 * @name sap.ui.commons.Toolbar#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.ToolbarItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Toolbar#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.ToolbarItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.ToolbarItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.Toolbar#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Toolbar#destroyItems
 * @function
 */


/**
 * Getter for aggregation <code>rightItems</code>.<br/>
 * Aggregating the right side tool bar items.
 * 
 * @return {sap.ui.commons.ToolbarItem[]}
 * @public
 * @name sap.ui.commons.Toolbar#getRightItems
 * @function
 */


/**
 * Inserts a rightItem into the aggregation named <code>rightItems</code>.
 *
 * @param {sap.ui.commons.ToolbarItem}
 *          oRightItem the rightItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the rightItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the rightItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the rightItem is inserted at 
 *             the last position        
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Toolbar#insertRightItem
 * @function
 */

/**
 * Adds some rightItem <code>oRightItem</code> 
 * to the aggregation named <code>rightItems</code>.
 *
 * @param {sap.ui.commons.ToolbarItem}
 *            oRightItem the rightItem to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Toolbar#addRightItem
 * @function
 */

/**
 * Removes an rightItem from the aggregation named <code>rightItems</code>.
 *
 * @param {int | string | sap.ui.commons.ToolbarItem} vRightItem the rightItem to remove or its index or id
 * @return {sap.ui.commons.ToolbarItem} the removed rightItem or null
 * @public
 * @name sap.ui.commons.Toolbar#removeRightItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>rightItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.ToolbarItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Toolbar#removeAllRightItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.ToolbarItem</code> in the aggregation named <code>rightItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.ToolbarItem}
 *            oRightItem the rightItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.Toolbar#indexOfRightItem
 * @function
 */
	

/**
 * Destroys all the rightItems in the aggregation 
 * named <code>rightItems</code>.
 * @return {sap.ui.commons.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Toolbar#destroyRightItems
 * @function
 */


// Start of sap\ui\commons\Toolbar.js
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
jQuery.sap.require("sap.ui.core.Popup");

/**
 * Initialize this control.
 *
 * @private
 */
sap.ui.commons.Toolbar.prototype.init = function() {
	this.bOpen = false; // the overflow popup state

	// Buffer for performance, updated after rendering
	this.oDomRef = null;
	this.oInnerRef = null;
	this.oOverflowDomRef = null;
	this.bHasRightItems = false;

	this.bRtl = sap.ui.getCore().getConfiguration().getRTL();

	// for resize detection
	this._detectVisibleItemCountChangeTimer = null;

	// delegate function to recognize if item is (re)rendered
	var oThat = this;
	this.oItemDelegate = {
			onAfterRendering: jQuery.proxy(oThat._itemRendered, oThat)
	};
};

sap.ui.commons.Toolbar.prototype.onBeforeRendering = function() {
	sap.ui.commons.ToolbarRenderer.emptyOverflowPopup(this); // if rerendering happens while there are still items in the popup (and it is open), the items will be duplicated
	this.cleanup();

	this.$("mn").unbind("keyup", this._handleKeyUp);

	this.bFirstTime = true;
};

/**
 * Used for after-rendering initialization.
 *
 * @private
 */
sap.ui.commons.Toolbar.prototype.onAfterRendering = function() {

	this.oDomRef = this.getDomRef();
	this.oInnerRef = this.oDomRef.firstChild.firstChild;
	jQuery(this.oInnerRef).css("visibility", "visible");
	var sOverflowId = this.getId() + "-mn";
	this.oOverflowDomRef = jQuery.sap.domById(sOverflowId);

	// Initialize the ItemNavigation if required
	if (!this.oItemNavigation) {
		this.oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
		this.addDelegate(this.oItemNavigation);
	}

	// cannot use sapspace because this triggers onkeydown and sets the focus to the first button in the overflow popup
	// and the subsequent keyup will make the browser fire a click event on that button
	this.$("mn").bind("keyup", jQuery.proxy(this._handleKeyUp, this));

	this.sResizeListenerId = sap.ui.core.ResizeHandler.register(this.oDomRef, jQuery.proxy(this.ontoolbarresize, this));
	var iRightItemsLength =  this.getRightItems().length;
	this.bHasRightItems = iRightItemsLength > 0;
	if (this.bHasRightItems) {
		this.sRightSideResizeListenerId = sap.ui.core.ResizeHandler.register(this.oDomRef.lastChild, jQuery.proxy(this.onrightsideresize, this));
		// Re-initialize the ItemNavigation with changed DomRefs after rendering and set the overflow icon properly
		this.updateAfterResize(true);
		this._observeVisibleItemCountChange(40);
	} else {
		// Re-initialize the ItemNavigation with changed DomRefs after rendering and set the overflow icon properly
		this.updateAfterResize(true);
		this._observeVisibleItemCountChange(350);
	}
};


/**
 * Handle the space event on the menu open button.
 *
 * @param {jQuery.EventObject} oEvent The forwarded browser event
 * @private
 */
sap.ui.commons.Toolbar.prototype._handleKeyUp = function (oEvent) {
	if ((oEvent.keyCode == jQuery.sap.KeyCodes.SPACE)
			&& (oEvent.target.id === this.getId() + "-mn")) {
		this.handleOverflowButtonTriggered();
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};

/**
 * Does all the cleanup when the Toolbar is to be destroyed.
 * Called from the element's destroy() method.
 * @private
 */
sap.ui.commons.Toolbar.prototype.exit = function () {

	this.cleanup();

	// Remove the item navigation delegate
	if (this.oItemNavigation) {
		this.removeDelegate(this.oItemNavigation);
		this.oItemNavigation.destroy();
		delete this.oItemNavigation;
	}

	this.oItemDelegate = undefined;
	jQuery(window).unbind("resize", this.onwindowresize);

	// No super.exit() to call
};


/**
 * Called after rendering and after each actual change of visible items
 * in order to re-initialize item navigation
 * with the currently visible items. Update the visibility of the overflow button.
 *
 * @param bClearTabStops Whether the tab indices of all toolbar items should be set to -1
 * @private
 */
sap.ui.commons.Toolbar.prototype.updateAfterResize = function(bClearTabStops) {
	var visibleItemInfo = this.getVisibleItemInfo();

	// store to detect next change of visible items caused by resizing
	this._oLastVisibleItem = visibleItemInfo.oLastVisibleItem;
	this._oFirstInvisibleItem = visibleItemInfo.oFirstInvisibleItem;
	this._iLastVisibleItemTop = visibleItemInfo.iLastVisibleItemTop;

	// adapt the overflow and ItemNavigation
	this.updateItemNavigation(visibleItemInfo.iAllItemsBeforeBreak, bClearTabStops);
	this.updateOverflowIcon(visibleItemInfo.bOverflow);

	// no additional update needed
	if (this.sUpdateItemNavigationTimer) {
		jQuery.sap.clearDelayedCall(this.sUpdateItemNavigationTimer);
		this.sUpdateItemNavigationTimer = null;
	}
};


/**
 * Compares the current element positions with the last recorded ones to detect a change of visible items
 *
 * @private
 */
sap.ui.commons.Toolbar.prototype._detectVisibleItemCountChange = function() {
	// Stop the periodic overflow checker
	if (!this.getDomRef()) {
		if (this._detectVisibleItemCountChangeTimer) {
			jQuery.sap.clearDelayedCall(this._detectVisibleItemCountChangeTimer);
			this._detectVisibleItemCountChangeTimer = null;
		}
		return;
	}

	if (this._oLastVisibleItem && this._oFirstInvisibleItem) { // case 1: overflow was visible
		var lastLeft = this._oLastVisibleItem.offsetLeft;
		var firstLeft = this._oFirstInvisibleItem.offsetLeft;
		var lastTop = this._oLastVisibleItem.offsetTop;

		var bInvisibleHasMovedUp = this.bRtl ? (firstLeft < lastLeft) : (firstLeft > lastLeft);

		if ((lastTop != this._iLastVisibleItemTop)  // last visible item has moved into second line => less visible items
				|| (!this.bOpen && bInvisibleHasMovedUp)) { // first invisible item has moved to the right of the previously last visible one
			// (and there is no reason for it to move to the right when it is still in 2nd row or later
			// except for if the popup has just opened) so it is visible now
			// => more visible items
			if (this.bOpen) {
				this.closePopup(true);
			}
			this.updateAfterResize(false);
		}

	} else if (this._oLastVisibleItem && !this._oFirstInvisibleItem) { // case 2: overflow was NOT visible
		if (this._oLastVisibleItem.offsetTop != this._iLastVisibleItemTop) { // last visible item has moved into second line => less visible items
			// popup cannot be open, as there was no overflow, so there is no need to close it
			this.updateAfterResize(false);
		}

	} else if (!this._oLastVisibleItem && !this._oFirstInvisibleItem) { // case 3: no items at all
		// nothing to do

	} else {
		// should never happen, as there is always one visible item
		// don't log, as this is called several times per second...   jQuery.sap.log.warning("Toolbar " + this.getId() + ": illegal state");
	}

	this._observeVisibleItemCountChange(350);

	if (this.bFirstTime && this.bHasRightItems) {
		this.onrightsideresize();
		this.bFirstTime = false;
	}
};

sap.ui.commons.Toolbar.prototype._observeVisibleItemCountChange = function(i) {
	this._detectVisibleItemCountChangeTimer = jQuery.sap.delayedCall(i, this, "_detectVisibleItemCountChange");
};


/**
 * Initializes the ItemNavigation delegate with the visible items in the toolbar, so navigation
 * only happens among those. Optionally clears all tab stops, this is required to make the Tab key
 * navigate out of the Toolbar.
 *
 * ItemNavigation handles Tabindexes. But if TabStop is on now invisible item set it to last
 * visible one.
 *
 * @param iVisibleItems The number of currently visible toolbar items
 * @param bClearTabStops Whether the tab indices of all toolbar items should be set to -1
 * @private
 */
sap.ui.commons.Toolbar.prototype.updateItemNavigation = function(iAllItemsBeforeBreak, bClearTabStops) {
	this.oItemNavigation.setRootDomRef(this.oDomRef);
	var aItemDomRefs = [];

	var aLeftItems = this.getItems();
	for (var i = 0; i < iAllItemsBeforeBreak; i++) {
		var oDomRef = aLeftItems[i].getFocusDomRef();
		if (oDomRef) { // separators return null here
			aItemDomRefs.push(oDomRef);
		}
	}
	aItemDomRefs.push(this.oOverflowDomRef);
	
	this.iLeftItemDomRefCount = aItemDomRefs.length;
	
	var aRightItems = this.getRightItems();
	for (var i = 0; i < aRightItems.length; i++) {
		var oDomRef = aRightItems[i].getFocusDomRef();
		if (oDomRef) { // separators return null here
			aItemDomRefs.push(oDomRef);
		}
	}

	this.oItemNavigation.setItemDomRefs(aItemDomRefs);
	this.iItemDomRefCount = aItemDomRefs.length;

	// If called directly after rendering, also the remaining tabstops need to be cleared
	if (bClearTabStops) {
		for (var i = iAllItemsBeforeBreak; i < aLeftItems.length; i++) {
			var oDomRef = aLeftItems[i].getFocusDomRef();
			var $Item = jQuery(oDomRef);
			if (oDomRef && ($Item.attr("tabindex") == "0")) { // set tabindex to -1 only if already set to 0
				$Item.attr("tabIndex", -1);
			}
		}

		for (var i = 0; i < aRightItems.length; i++) {
			var oDomRef = aRightItems[i].getFocusDomRef();
			var $Item = jQuery(oDomRef);
			if (oDomRef && ($Item.attr("tabindex") == "0")) { // set tabindex to -1 only if already set to 0
				$Item.attr("tabIndex", -1);
			}
		}
	}
};


/**
 * Returns the number of toolbar items that are currently visible.
 * If the toolbar has not been rendered yet, value "0" is returned.
 * Requirement here is that every control has exactly one root HTML element.
 *
 * @return The number of toolbar items that are currently visible
 * @private
 */
sap.ui.commons.Toolbar.prototype.getVisibleItemInfo = function() {
	// Compute actual number of items currently hidden due to overflow
	var iVisibleItems = 0;
	if (this.oInnerRef) {
		var aElements = this.oInnerRef.childNodes;

		this.bRtl = sap.ui.getCore().getConfiguration().getRTL();

		/* Check for each item how far it is from the parent's left border:
		 * As long as the items are in the same row, this offset increases, but
		 * the first item with lower offset is the first item in the second row.
		 */
		var sOverflowMenuId = this.getId() + "-mn";
		var bLineBreak,
			oElement,
			currentOffsetWidth = 0,
			currentOffsetLeft,
			lastOffsetWidth,
			lastOffsetLeft = 0,
			oLastVisibleItem = null,
			oFirstInvisibleItem = null,
			iLastVisibleItemTop,
			iAllItemsBeforeBreak = 0,
			bOverflow = false; // default value is used when there are no items

		for (var i = 1,count = aElements.length; i < count; i++) {
			oElement = aElements[i];
			currentOffsetLeft = oElement.offsetLeft;

			// find out whether the current element is a line *below* the last element
			if (i == 1) {
				lastOffsetWidth = aElements[0].offsetWidth;
				lastOffsetLeft = aElements[0].offsetLeft;
			}
			if (this.bRtl) {
				currentOffsetWidth = oElement.offsetWidth;
				bLineBreak = (currentOffsetLeft + currentOffsetWidth >= lastOffsetLeft + lastOffsetWidth);
			} else {
				bLineBreak = (currentOffsetLeft <= lastOffsetLeft) && (oElement.offsetTop > aElements[0].offsetTop);
			}

			if (bLineBreak) {	

				// There was a line break, current i is the number of items that were in the first row
				iVisibleItems = i;
				
				// remember DomRefs and top distance of last visible item
				oLastVisibleItem = aElements[i-1];
				oFirstInvisibleItem = oElement;
				iLastVisibleItemTop = oLastVisibleItem.offsetTop;
				bOverflow = true;
				break;

			} else if (oElement.id == sOverflowMenuId) {
				// This is the overflow button, there was no line break
				iVisibleItems = i;
				// Therefore, iVisibleItems should be the total number of children minus 1 (the overflow menu)
				jQuery.sap.assert(iVisibleItems === (count-1), "visible items (" + iVisibleItems + ") must be one less than the items count (" + count + ")");
				oLastVisibleItem = aElements[i-1];
				oFirstInvisibleItem = null;
				iLastVisibleItemTop = oLastVisibleItem.offsetTop;
				bOverflow = false;
				break;

			} else {
				// Regular toolbar item, to the right of the last one, so just proceed
				lastOffsetLeft = currentOffsetLeft;
				lastOffsetWidth = currentOffsetWidth;
			}
		}

		// Get a real number of the all items that are not in the overflow incl.visible and hidden items
		var aLeftItems = this.getItems();
		var iLeftItemCount = aLeftItems.length;
		for (var i = 0; i < iLeftItemCount; i++) {
			if (aLeftItems[i].getDomRef() === oLastVisibleItem) {
				iAllItemsBeforeBreak = i + 1 ;
				break;
			}
		}
	}
	
	return {
		"count":iVisibleItems,
		"oLastVisibleItem": oLastVisibleItem,
		"oFirstInvisibleItem": oFirstInvisibleItem,
		"iLastVisibleItemTop": iLastVisibleItemTop,
		"iAllItemsBeforeBreak": iAllItemsBeforeBreak,
		"bOverflow": bOverflow
	};
};


/**
 * Modifies the visibility of the overflow button
 *
 * @param bOverflow whether the overflow button should be displayed
 * @private
 */
sap.ui.commons.Toolbar.prototype.updateOverflowIcon = function(bOverflow) {
	// set visibility of overflow button
	this.oOverflowDomRef.style.display = bOverflow || this.bOpen ? "block" : "none";
};


/**
 * Handle the click event on the menu open button.
 *
 * @param {jQuery.EventObject} oEvent The forwarded browser event
 * @private
 */
sap.ui.commons.Toolbar.prototype.onclick = function(oEvent) {
	if (oEvent.target.id === this.getId() + "-mn") {
		this.handleOverflowButtonTriggered();
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};


/**
 * Handle the arrow down event on the menu open button. This opens the popup, if closed.
 *
 * @param {jQuery.EventObject} oEvent The forwarded browser event
 * @private
 */
sap.ui.commons.Toolbar.prototype.onsapdown = function(oEvent) {
	if (oEvent.target.id === this.getId() + "-mn") {
		if(!this.bOpen) {
			this.handleOverflowButtonTriggered();
			oEvent.preventDefault();
			// Stop other events like sapnext to be processed afterwards
			oEvent.stopImmediatePropagation();
		}
	}
};


/**
 * Handle the arrow up event on the menu open button. This closes the popup, if open.
 *
 * @param {jQuery.EventObject} oEvent The forwarded browser event
 * @private
 */
sap.ui.commons.Toolbar.prototype.onsapup = function(oEvent) {
	if (oEvent.target.id === this.getId() + "-mn") {
		if(this.bOpen) {
			this.handleOverflowButtonTriggered();
			oEvent.preventDefault();
			oEvent.stopPropagation();
		}
	}
};


/**
 * Initializes (if required) and opens/closes the overflow popup.
 *
 * @private
 */
sap.ui.commons.Toolbar.prototype.handleOverflowButtonTriggered = function() {
	// Initialize the popup
	if (!this.bPopupInitialized) {
		this.popup = new sap.ui.core.Popup(new sap.ui.commons.ToolbarOverflowPopup(this), false, true, true);

		this.bPopupInitialized = true;
	}

	// Open/close the overflow popup
	if(this.bOpen) {
		this.closePopup(false);
	} else {
		this.openPopup();
	}
};



/* POPUP functionality */

/**
 * Opens the overflow popup.
 *
 * @private
 */
sap.ui.commons.Toolbar.prototype.openPopup = function() {
	this.getRenderer().setActive(this);

	sap.ui.commons.ToolbarRenderer.fillOverflowPopup(this);
	this.popup.attachEvent("opened", this.handlePopupOpened, this);
	this.popup.attachEvent("closed", this.handlePopupClosed, this);

	// Register for window resize event during the popup is opened, so that the popup will be closed if the window is resized.
	jQuery(window).bind("resize", jQuery.proxy(this.onwindowresize, this));

	//Open popup with a little delay in IE8 to avoid focus calls when the popup is not yet opened
	var iDuration = !!sap.ui.Device.browser.internet_explorer && (sap.ui.Device.browser.version == 7 || sap.ui.Device.browser.version == 8) ? 1 : 0;
	this.popup.open(iDuration, sap.ui.core.Popup.Dock.EndTop, sap.ui.core.Popup.Dock.EndBottom, this.$("mn"));
	this.bOpen = true;
};

sap.ui.commons.Toolbar.prototype.handlePopupOpened = function() {
	var aAllItems = this.getItems();
	var iItemCount = aAllItems.length;
	var iAllItemsBeforeBreak = this.getVisibleItemInfo().iAllItemsBeforeBreak;

	var aNavigableItems = [];
	for (var i = iAllItemsBeforeBreak; i < iItemCount; i++) {
		var oDomRef = aAllItems[i].getFocusDomRef();
		if (oDomRef) { // separators return null here
			aNavigableItems.push(oDomRef);
		}
	}

	// Init item navigation and set initial focus
	this.popup.getContent().initItemNavigation(aNavigableItems);
};

/**
 * Closes the overflow popup.
 *
 * @private
 */
sap.ui.commons.Toolbar.prototype.closePopup = function(bResetFocus) {
	this._bResetFocus = bResetFocus;
	this.popup.close();
	// We do not need to close the popup on window resize if it already closed
	jQuery(window).unbind("resize", this.onwindowresize);
};

sap.ui.commons.Toolbar.prototype.handlePopupClosed = function() {
	this.getRenderer().unsetActive(this);

	this.bOpen = false;
	sap.ui.commons.ToolbarRenderer.emptyOverflowPopup(this);

	// Cleanup tabindex again and re-initialize item navigation
	var iAllItemsBeforeBreak = this.getVisibleItemInfo().iAllItemsBeforeBreak;
	this.updateItemNavigation(iAllItemsBeforeBreak, true); // TODO: reinit only required if item navigation also used for popup
	if(this._bResetFocus) {
		this.oItemNavigation.focusItem(this.iLeftItemDomRefCount - 1);
	}
	this._bResetFocus = false;
};


// ****************************************************************
// Overwrite generated items handling
// ****************************************************************

/**
 * Prepares the given oCtrl for usage in a toolbar.
 * @param {sap.ui.core.Control} oCtrl The control instance whose focus info should be re-directed
 * @private
 */
sap.ui.commons.Toolbar.prototype.prepareFocusInfoRedirect = function(oCtrl) {
	//jQuery.sap.assert(oCtrl._orig_getFocusInfo === undefined);

	// Check if the toolbar item (Control) has already _orig_getFocusInfo and if yes, do not set it again
	if (oCtrl && !oCtrl._orig_getFocusInfo) {
		var sId = this.getId();

		oCtrl._orig_getFocusInfo = oCtrl.getFocusInfo;
		oCtrl.getFocusInfo = function() {
			return {id: sId, childInfo: this._orig_getFocusInfo()};
		};
		
		var that = this;
		oCtrl._orig_applyFocusInfo = oCtrl.applyFocusInfo;
		oCtrl.applyFocusInfo = function(oFocusInfo) {
			return that.applyFocusInfo(oFocusInfo.childInfo);
		};
	}
	return oCtrl;
};

/**
 * Cleans up the given oCtrl after usage in a toolbar. Will be used in remove* functions
 * @param {sap.ui.core.Control} oCtrl The control instance that should be reset to standard focus info
 * @private
 */
sap.ui.commons.Toolbar.prototype.cleanupFocusInfoRedirect = function(oCtrl) {
	//jQuery.sap.assert(oCtrl._orig_getFocusInfo !== undefined);
	//jQuery.sap.assert(typeof(oCtrl._orig_getFocusInfo) === "function");
	if (oCtrl) {
		oCtrl.getFocusInfo = oCtrl._orig_getFocusInfo;
		delete oCtrl._orig_getFocusInfo;
		delete oCtrl._orig_applyFocusInfo;
	}
	return oCtrl;
};

// Overwrite
sap.ui.commons.Toolbar.prototype.insertItem = function(oItem, iIndex) {
	this.insertAggregation("items", this.prepareFocusInfoRedirect(oItem), iIndex);

	oItem.addDelegate(this.oItemDelegate);

	return this;
};

// Overwrite
sap.ui.commons.Toolbar.prototype.addItem = function(oItem) {
	this.addAggregation("items", this.prepareFocusInfoRedirect(oItem));

	oItem.addDelegate(this.oItemDelegate);

	return this;
};

// Overwrite
sap.ui.commons.Toolbar.prototype.removeItem = function(vElement) {
	var tmp = this.removeAggregation("items", vElement);

	tmp.removeDelegate(this.oItemDelegate);

	return this.cleanupFocusInfoRedirect(tmp);
};

// Overwrite
sap.ui.commons.Toolbar.prototype.removeAllItems = function() {
	var aTmp = this.removeAllAggregation("items");
	for(var i = 0, iL = aTmp.length; i < iL; i++){
		aTmp[i] = this.cleanupFocusInfoRedirect(aTmp[i]);
		aTmp[i].removeDelegate(this.oItemDelegate);
	}
	return aTmp;
};

// Overwrite
sap.ui.commons.Toolbar.prototype.insertRightItem = function(oItem, iIndex) {
	this.insertAggregation("rightItems", this.prepareFocusInfoRedirect(oItem), iIndex);

	oItem.addDelegate(this.oItemDelegate);

	return this;
};

// Overwrite
sap.ui.commons.Toolbar.prototype.addRightItem = function(oItem) {
	this.addAggregation("rightItems", this.prepareFocusInfoRedirect(oItem));

	oItem.addDelegate(this.oItemDelegate);

	return this;
};

// Overwrite
sap.ui.commons.Toolbar.prototype.removeRightItem = function(vElement) {
	var tmp = this.removeAggregation("rightItems", vElement);

	tmp.removeDelegate(this.oItemDelegate);

	return this.cleanupFocusInfoRedirect(tmp);
};

// Overwrite
sap.ui.commons.Toolbar.prototype.removeAllRightItems = function() {
	var aTmp = this.removeAllAggregation("rightItems");
	for(var i = 0, iL = aTmp.length; i < iL; i++){
		aTmp[i] = this.cleanupFocusInfoRedirect(aTmp[i]);
		aTmp[i].removeDelegate(this.oItemDelegate);
	}
	return aTmp;
};

/**
 * Overwrite
 * @private
 */
sap.ui.commons.Toolbar.prototype.getFocusInfo = function () {
	var sId = this.getId();
	if(this.bOpen) {
		return {id: sId, childId: sId};
	}
	else {
		return {id: sId};
	}
};

/**
 * Overwrite
 * @private
 */
sap.ui.commons.Toolbar.prototype.applyFocusInfo = function (oFocusInfo) {
	if (oFocusInfo) {
		var sChildId = oFocusInfo.childId;
		if (this.bOpen && sChildId){
			if (sChildId === this.getId()) {
				return;
			}
			var oCtrl = sap.ui.getCore().getControl(sChildId);
			//else
			var oContent;
			if (oCtrl && this.popup && (oContent = this.popup.getContent()) &&
					jQuery.sap.containsOrEquals(oContent.getDomRef(), oCtrl.getDomRef())) {
				oContent.applyFocusInfo(oFocusInfo.childInfo);
				return;
			}
		}
	}
	this.focus();
};


//****************************************************************
//  ToolbarOverflowPopup
//****************************************************************

/**
 * ToolbarOverflowPopup is a slim element without metadata where the element is required for ItemNavigation
 * acting as dummy control. The control is required by Popup and wrapping the HTML rendered for the popup contents.
 *
 * @private
 * @name sap.ui.commons.ToolbarOverflowPopup
 * @function
 */
sap.ui.core.Element.extend("sap.ui.commons.ToolbarOverflowPopup", /** @lends sap.ui.commons.ToolbarOverflowPopup.prototype */ {

  constructor : function(oToolbar) {
  	this.oToolbar = oToolbar;
  	var sId = oToolbar.getId() + "-pu";

  	// Call super constructor
  	sap.ui.core.Element.call(this, sId);
  },

  /**
   * Initializes the ItemNavigation for this popup and focuses the first item
   *
   * @param aNavigableItems The DOM references of the toolbar items displayed in this popup
   * @private
   */
  initItemNavigation : function(aNavigableItems) {
  	// Initialize the ItemNavigation if required
  	if (!this.oItemNavigation) {
  		this.oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
  		this.addDelegate(this.oItemNavigation);
  	}

  	this.oItemNavigation.setRootDomRef(sap.ui.commons.ToolbarRenderer.getPopupArea(this.oToolbar));
  	this.oItemNavigation.setItemDomRefs(aNavigableItems);
  	this.oItemNavigation.focusItem(0);
  },

  /**
   * Called by the Popup, required to simulate a control inside the Popup when there is only some HTML.
   * The root of this HTML is returned here.
   *
   * @private
   */
  getDomRef : function() {
  	var oPu = sap.ui.commons.ToolbarRenderer.getPopupArea(this.oToolbar);
  	if (oPu) {
  		return oPu.parentNode;
  	} else {
  		return null;
  	}
  },

  /**
   * Called by the Popup.
   *
   * @private
   */
  isActive : function() {
  	return sap.ui.commons.ToolbarRenderer.getPopupArea(this.oToolbar) != null;
  },

  /**
   * Handle the onsapescape event on the overflow popup, this closes the popup
   *
   * @param {jQuery.EventObject} oEvent The forwarded browser event
   * @private
   */
  onsapescape : function(oEvent) {
  	this.oToolbar.closePopup(true);
  },

  /**
   * Handle the tab key event on the overflow popup, this closes the popup
   *
   * @param {jQuery.EventObject} oEvent the forwarded browser event
   * @private
   */
  // Should ideally advance to the next tab position but currently only focuses the overflow button again.
  onsaptabnext : function(oEvent) {
  	this.oToolbar.closePopup(true);
  	oEvent.preventDefault();
  	oEvent.stopPropagation();
  },

  /**
   * Handle the tab back key event on the overflow popup, this closes the popup
   *
   * @param {jQuery.EventObject} oEvent The forwarded browser event
   * @private
   */
    // Should ideally advance to the next tab position but currently only focuses the overflow button again.
  onsaptabprevious : function(oEvent) {
  	this.oToolbar.closePopup(true);
  	oEvent.preventDefault();
  	oEvent.stopPropagation();
  }

});

/**
 * Called if an item is rerendered to update the item navigation.
 *
 * @private
 */
sap.ui.commons.Toolbar.prototype._itemRendered = function() {
    if (this.oItemNavigation) {
          this.updateAfterResize(true);
    } else {
    	if (!this.sUpdateItemNavigationTimer) {
    		this.sUpdateItemNavigationTimer = jQuery.sap.delayedCall(0, this, "updateAfterResize", [true])
    	}
    }
};

/**
 * Handles the window resize event.
 *
 * @param {jQuery.Event}  oEvent Event object
 * @private
 */
sap.ui.commons.Toolbar.prototype.onwindowresize = function(oEvent) {
	if (this.bOpen) {
		this.closePopup(true);
	}
};

/**
 * Handles the window resize event.
 *
 * @param {jQuery.Event}  oEvent Event object
 * @private
 */
sap.ui.commons.Toolbar.prototype.ontoolbarresize = function(oEvent) {
	if (this.bOpen) {
		this.closePopup(true);
	}
};

/**
 * Handles the right side resize event.
 *
 * @param {jQuery.Event}  oEvent Event object
 * @private
 */
sap.ui.commons.Toolbar.prototype.onrightsideresize = function() {

	// Proove if the Dom referece exist, and if not - clean up the references.
	if (!this.getDomRef()) {
		this.cleanup();
		return;
	}

	if (this.getRightItems().length > 0){
		var oRightRef = this.oDomRef.lastChild;
		var iRightSideWidth = oRightRef.offsetWidth;
		if (this.bRtl) {
			jQuery(this.oInnerRef).css("margin-left", (iRightSideWidth + 10) + "px");
		}
		else {
			jQuery(this.oInnerRef).css("margin-right", (iRightSideWidth + 10) + "px");
		}
		var oFirstItem = this.oDomRef.firstChild.firstChild.firstChild;
		var iOverflowWidth = this.getDomRef("mn").offsetWidth;
		var iMinWidth = oFirstItem.offsetWidth + iRightSideWidth + iOverflowWidth + 20; // 20px is margin for overflow button and the last  visible item
		jQuery(this.oDomRef).css("min-width", iMinWidth + "px");
		jQuery(this.oInnerRef).css("visibility", "visible");
	}
};

/**
 * Clean up the control.
 *
 * @private
 */
sap.ui.commons.Toolbar.prototype.cleanup = function() {

	// stop the periodic overflow checker
	if (this._detectVisibleItemCountChangeTimer) {
		jQuery.sap.clearDelayedCall(this._detectVisibleItemCountChangeTimer);
		this._detectVisibleItemCountChangeTimer = null;
	}

	// stop the delay call of update itemNavigation because its updated onAfterRendering
	if (this.sUpdateItemNavigationTimer) {
		jQuery.sap.clearDelayedCall(this.sUpdateItemNavigationTimer);
		this.sUpdateItemNavigationTimer = null;
	}

	// Cleanup resize event registration before re-rendering
	if (this.sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
	
	if (this.sRightSideResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this.sRightSideResizeListenerId);
		this.sRightSideResizeListenerId = null;
	}

};

