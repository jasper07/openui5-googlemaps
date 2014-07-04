/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.NavigationBar.
jQuery.sap.declare("sap.ui.ux3.NavigationBar");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new NavigationBar.
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
 * <li>{@link #getToplevelVariant toplevelVariant} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.ux3.NavigationItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedItem selectedItem} : string | sap.ui.ux3.NavigationItem</li>
 * <li>{@link #getAssociatedItems associatedItems} : string | sap.ui.ux3.NavigationItem</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.NavigationBar#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Provides enhanced navigation capabilities and is the parent control of NavigationItem. It is displayed in the form of a horizontal line
 * with switching markers depending on the currently selected item. The size of an item which is currently chosen by the user is enlarged. In the case
 * that a large number of items are defined for the bar, this is made transparent to the user by showing symbols for scrolling options (forwards and backwards)
 * to see the next or previous items.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.NavigationBar
 */
sap.ui.core.Control.extend("sap.ui.ux3.NavigationBar", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"setAssociatedItems", "isSelectedItemValid"
	],

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"toplevelVariant" : {type : "boolean", group : "Misc", defaultValue : false},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true}
	},
	defaultAggregation : "items",
	aggregations : {
    	"items" : {type : "sap.ui.ux3.NavigationItem", multiple : true, singularName : "item"}, 
    	"overflowMenu" : {type : "sap.ui.commons.Menu", multiple : false, visibility : "hidden"}
	},
	associations : {
		"selectedItem" : {type : "sap.ui.ux3.NavigationItem", multiple : false}, 
		"associatedItems" : {type : "sap.ui.ux3.NavigationItem", multiple : true, singularName : "associatedItem"}
	},
	events : {
		"select" : {allowPreventDefault : true}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.NavigationBar with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.NavigationBar.extend
 * @function
 */

sap.ui.ux3.NavigationBar.M_EVENTS = {'select':'select'};


/**
 * Getter for property <code>toplevelVariant</code>.
 * Defines whether the navigation bar shall have top-level appearance
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>toplevelVariant</code>
 * @public
 * @name sap.ui.ux3.NavigationBar#getToplevelVariant
 * @function
 */

/**
 * Setter for property <code>toplevelVariant</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bToplevelVariant  new value for property <code>toplevelVariant</code>
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NavigationBar#setToplevelVariant
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
 * @name sap.ui.ux3.NavigationBar#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NavigationBar#setVisible
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * If the navigation items need to have a different parent than the NavigationBar, alternatively the associatedItems association can be used.
 * The NavigationBar follows the approach to use the items aggregation. If this aggregation is empty, associatedItems is used.
 * 
 * <strong>Note</strong>: this is the default aggregation for NavigationBar.
 * @return {sap.ui.ux3.NavigationItem[]}
 * @public
 * @name sap.ui.ux3.NavigationBar#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NavigationBar#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NavigationBar#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.ux3.NavigationItem} vItem the item to remove or its index or id
 * @return {sap.ui.ux3.NavigationItem} the removed item or null
 * @public
 * @name sap.ui.ux3.NavigationBar#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.NavigationItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.NavigationBar#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.NavigationBar#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NavigationBar#destroyItems
 * @function
 */


/**
 * The selected NavigationItem.
 *
 * @return {string} Id of the element which is the current target of the <code>selectedItem</code> association, or null
 * @public
 * @name sap.ui.ux3.NavigationBar#getSelectedItem
 * @function
 */

/**
 * The selected NavigationItem.
 *
 * @param {string | sap.ui.ux3.NavigationItem} vSelectedItem 
 *    Id of an element which becomes the new target of this <code>selectedItem</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NavigationBar#setSelectedItem
 * @function
 */


	
/**
 * This association is ignored as long as the items aggregation is used; and supposed to be used alternatively when the items should be aggregated by other
 * entities.
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.ux3.NavigationBar#getAssociatedItems
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.ux3.NavigationItem} vAssociatedItem
 *    Id of a associatedItem which becomes an additional target of this <code>associatedItems</code> association.
 *    Alternatively, a associatedItem instance may be given. 
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NavigationBar#addAssociatedItem
 * @function
 */

/**
 * @param {int | string | sap.ui.ux3.NavigationItem} vAssociatedItem the associatedItem to remove or its index or id
 * @return {string} the id of the removed associatedItem or null
 * @public
 * @name sap.ui.ux3.NavigationBar#removeAssociatedItem
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.NavigationBar#removeAllAssociatedItems
 * @function
 */

	
/**
 * Event is fired when an item is selected by the user 
 *
 * @name sap.ui.ux3.NavigationBar#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.itemId The ID of the newly selected NavigationItem.
 * @param {sap.ui.ux3.NavigationItem} oControlEvent.getParameters.item The newly selected NavigationItem.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.ux3.NavigationBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.NavigationBar</code>.<br/> itself. 
 *  
 * Event is fired when an item is selected by the user 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.NavigationBar</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NavigationBar#attachSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.ux3.NavigationBar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.NavigationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NavigationBar#detachSelect
 * @function
 */

/**
 * Fire event select to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'itemId' of type <code>string</code> The ID of the newly selected NavigationItem.</li>
 * <li>'item' of type <code>sap.ui.ux3.NavigationItem</code> The newly selected NavigationItem.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.ux3.NavigationBar#fireSelect
 * @function
 */


/**
 * Replaces the currently associated items with the ones in the given array
 *
 * @name sap.ui.ux3.NavigationBar.prototype.setAssociatedItems
 * @function
 * @param {sap.ui.ux3.NavigationItem[]} 
 *         aItems
 *         The items to associate

 * @type sap.ui.ux3.NavigationBar
 * @public
 */


/**
 * Returns whether there is a selectedItem set which is actually present in the items aggregation; or, if the aggregation is empty, in the associatedItems association.
 *
 * @name sap.ui.ux3.NavigationBar.prototype.isSelectedItemValid
 * @function

 * @type boolean
 * @public
 */


// Start of sap\ui\ux3\NavigationBar.js
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
jQuery.sap.require("jquery.sap.dom");

sap.ui.ux3.NavigationBar.SCROLL_STEP = 250; // how many pixels to scroll with every overflow arrow click
//sap.ui.ux3.NavigationBar._MAX_ITEM_WIDTH = 300;

sap.ui.ux3.NavigationBar.prototype.init = function() {
	this._bPreviousScrollForward = false; // remember the item overflow state
	this._bPreviousScrollBack = false;
	this._iLastArrowPos = -100; // this property is always read and applied as "left"/"right" depending on RTL configuration
	this._bRtl = sap.ui.getCore().getConfiguration().getRTL();

	this.allowTextSelection(false);


	this.startScrollX = 0;
	this.startTouchX = 0;
	var that = this;

	// Initialize the ItemNavigation
	this._oItemNavigation = new sap.ui.core.delegate.ItemNavigation().setCycling(false);
	this.addDelegate(this._oItemNavigation);

	if (jQuery.sap.touchEventMode === "ON") {
		var fnTouchStart = function(evt) {
			evt.preventDefault();

			// stop any inertia scrolling
			if (that._iInertiaIntervalId) {
				window.clearInterval(that._iInertiaIntervalId);
			}

			that.startScrollX = that.getDomRef("list").scrollLeft;
			that.startTouchX = evt.touches[0].pageX;
			that._bTouchNotMoved = true;
			that._lastMoveTime = new Date().getTime();
		};

		var fnTouchMove = function(evt) {
			var dx = evt.touches[0].pageX - that.startTouchX;

			var oListRef = that.getDomRef("list");
			var oldScrollLeft = oListRef.scrollLeft;
			var newScrollLeft = that.startScrollX - dx;
			oListRef.scrollLeft = newScrollLeft;
			that._bTouchNotMoved = false;

			// inertia scrolling: prepare continuation even after touchend by calculating the current velocity
			var dt = new Date().getTime() - that._lastMoveTime;
			that._lastMoveTime = new Date().getTime();
			if (dt > 0) {
				that._velocity = (newScrollLeft - oldScrollLeft) / dt;
			}

			evt.preventDefault();
		};

		var fnTouchEnd = function(evt) {
			if (that._bTouchNotMoved === false) { // swiping ends now
				evt.preventDefault();

				// add some inertia... continue scrolling with decreasing velocity
				var oListRef = that.getDomRef("list");
				var dt = 50;
				var endVelocity = Math.abs(that._velocity / 10); // continue scrolling until the speed has decreased to a fraction (v/10 means 11 iterations with slowing-down factor 0.8)
				that._iInertiaIntervalId = window.setInterval(function(){
					that._velocity = that._velocity * 0.80;
					var dx = that._velocity * dt;
					oListRef.scrollLeft = oListRef.scrollLeft + dx;
					if (Math.abs(that._velocity) < endVelocity) {
						window.clearInterval(that._iInertiaIntervalId);
						that._iInertiaIntervalId = undefined;
					}
				}, dt);

			} else if (that._bTouchNotMoved === true) { //touchstart and touchend without move is a click; trigger it directly to avoid the usual delay
				that.onclick(evt);
				evt.preventDefault();
			} else {
				// touchend without corresponding start
				// do nothing special
			}
			that._bTouchNotMoved = undefined;
			that._lastMoveTime = undefined;
		};

		this.ontouchstart = fnTouchStart;
		this.ontouchend = fnTouchEnd;
		this.ontouchmove = fnTouchMove;
	}

};

sap.ui.ux3.NavigationBar.prototype.exit = function () {
	if (this._oItemNavigation) {
		this.removeDelegate(this._oItemNavigation);
		this._oItemNavigation.destroy();
		delete this._oItemNavigation;
	}

	// no super.exit() to call
};


sap.ui.ux3.NavigationBar.prototype.onBeforeRendering = function() {
	// stop the periodic overflow checker
	if (this._checkOverflowIntervalId) {
		jQuery.sap.clearIntervalCall(this._checkOverflowIntervalId);
		this._checkOverflowIntervalId = null;
	}

	if (!!sap.ui.Device.browser.firefox) { // TODO: feature detection... not used yet because of performance implications (may involve creating elements)
		this.$().unbind("DOMMouseScroll", this._handleScroll);
	} else {
		this.$().unbind("mousewheel", this._handleScroll);
	}

	var arrow = this.getDomRef("arrow");
	this._iLastArrowPos = arrow ? parseInt(this._bRtl ? arrow.style.right : arrow.style.left, 10) : -100;
};

/**
 * Calculates the (initial) position of the indicator-arrow and the overflow-arrows
 * 
 * @private
 */
sap.ui.ux3.NavigationBar.prototype._calculatePositions = function() {
	var oDomRef = this.getDomRef();

	var oListDomRef = oDomRef.firstChild;
	var of_back = this.getDomRef("ofb");
	var of_fw = this.getDomRef("off");

	// re-initialize display of scroll arrows
	this._bPreviousScrollForward = false;
	this._bPreviousScrollBack = false;
	this._checkOverflow(this.getDomRef().firstChild, this.getDomRef("ofb"), this.getDomRef("off"));

	// paint selection arrow in the right place
	var selItem = sap.ui.getCore().byId(this.getSelectedItem());
	if (selItem) {
		this._checkOverflow(oListDomRef, of_back, of_fw);
		var $Arrow = this.$("arrow");
		var arrowWidth = $Arrow.outerWidth();
		var targetPos = sap.ui.ux3.NavigationBar._getArrowTargetPos(selItem.getId(), arrowWidth, this._bRtl);
		if (!this._bRtl) {
			$Arrow[0].style.left = targetPos+"px";
		} else {
			$Arrow[0].style.right = targetPos+"px";
		}
	}
};

/**
 * Attaches to a themechange and recalculates the positions of the arrows in the NavigationBar
 */
sap.ui.ux3.NavigationBar.prototype.onThemeChanged = function() {
	if (this.getDomRef()) {
		this._calculatePositions();
	}
};


sap.ui.ux3.NavigationBar.prototype.onAfterRendering = function() {
	var oDomRef = this.getDomRef();

	// start the periodic checking for overflow of the item area
	var oListDomRef = oDomRef.firstChild;
	var of_back = this.getDomRef("ofb");
	var of_fw = this.getDomRef("off");
	this._checkOverflowIntervalId = jQuery.sap.intervalCall(350, this, "_checkOverflow", [oListDomRef,of_back,of_fw]);

	// bind a scroll handler to the workset item area
	if (!!sap.ui.Device.browser.firefox) { // TODO: feature detection... not used yet because of performance implications (may involve creating elements)
		jQuery(oDomRef).bind("DOMMouseScroll", jQuery.proxy(this._handleScroll, this));
	} else {
		jQuery(oDomRef).bind("mousewheel", jQuery.proxy(this._handleScroll, this));
	}

	this._calculatePositions();
	
	this._updateItemNavigation();
	
	// Workaround for sporadic weird scrolling behavior in NavigationBar when there is 
	// mobile content in the Shell.
	// TODO: We should get to the bottom of why this happens, but after 6 hours of debugging, I give up.
	// See for example CSS 0120061532 0002361191 2013 - HPAs had the same problems
	// This happens in the BC as well as GC theme
	var $NavBar = this.$();
	$NavBar.on("scroll", function() {
		$NavBar.children().scrollTop(0);
		$NavBar.scrollTop(0);
	});
};


sap.ui.ux3.NavigationBar.prototype._updateItemNavigation = function() {
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		// reinitialize the ItemNavigation after rendering
		var iSelectedDomIndex = -1;
		var sSelectedId = this.getSelectedItem();

		var $ItemRefs = jQuery(oDomRef).children().children("li").children().not(".sapUiUx3NavBarDummyItem");
		$ItemRefs.each(function(index, element) {
			if (element.id == sSelectedId) {
				iSelectedDomIndex = index;
			}
		});

		this._oItemNavigation.setRootDomRef(oDomRef);
		this._oItemNavigation.setItemDomRefs($ItemRefs.toArray());
		this._oItemNavigation.setSelectedIndex(iSelectedDomIndex);
	}
};


sap.ui.ux3.NavigationBar.prototype.onsapspace = function(oEvent) {
	this._handleActivation(oEvent);
};

sap.ui.ux3.NavigationBar.prototype.onclick = function(oEvent) {
	this._handleActivation(oEvent);
};


sap.ui.ux3.NavigationBar.prototype._handleActivation = function(oEvent) {
	var sTargetId = oEvent.target.id;

	if (sTargetId) {
		var sId = this.getId();
		
		// For items: do not navigate away! Stay on the page and handle the click in-place. Right-click + "Open in new Tab" still works.
		// For scroll buttons: Prevent IE from firing beforeunload event -> see CSN 4378288 2012
		oEvent.preventDefault(); 

		if (sTargetId == sId + "-ofb") {
			// scroll back/left button
			this._scroll(-sap.ui.ux3.NavigationBar.SCROLL_STEP, 500);

		} else if (sTargetId == sId + "-off") {
			// scroll forward/right button
			this._scroll(sap.ui.ux3.NavigationBar.SCROLL_STEP, 500);
		} else if (sTargetId == sId + "-oflt" || sTargetId == sId + "-ofl") {
			// Overflow Button has been activated
			this._showOverflowMenu();
		} else {
			// should be one of the items - select it
			
			var item = sap.ui.getCore().byId(sTargetId);
			if (item
					&& (sTargetId != this.getSelectedItem())
					&& (sap.ui.getCore().byId(sTargetId) instanceof sap.ui.ux3.NavigationItem)) {
				// select the item and fire the event
				if (this.fireSelect({item:item,itemId:sTargetId})) {
					this.setAssociation("selectedItem", item, true); // avoid rerendering, animate
					this._updateSelection(sTargetId);
				}
			}
		}
	}
};


/**
 * Return the overflow Menu, creates it if it does not exist. 
 * 
 * @returns {sap.ui.commons.Menu}
 */
sap.ui.ux3.NavigationBar.prototype._getOverflowMenu = function() {
	var oMenu = this.getAggregation("overflowMenu");
	if (!oMenu || this._menuInvalid) {
		// TODO: Check with new destroy-behavior: The Menu might not be there because it was already destroyed. In that case this might create a memory leak.
		if (oMenu) {
			oMenu.destroyAggregation("items", true);
		} else {
			oMenu = new sap.ui.commons.Menu();
		}

		var aItems = this._getCurrentItems();
		var that = this;
		var sSelectedId = this.getSelectedItem();
		
		for (var i = 0; i < aItems.length; ++i) {
			var oNavItem = aItems[i];
			
			var oMenuItem = new sap.ui.commons.MenuItem(oNavItem.getId() + "-overflowItem", {
				text : oNavItem.getText(),
				visible : oNavItem.getVisible(),
				// Like the normal NavigationBar Items, disabled items are shown and handled
				// like enabled items. The application can check the item for its 
				// enabled-property
				/* enabled : oNavItem.getEnabled(), */ 
				icon : sSelectedId == oNavItem.getId() ? "sap-icon://accept" : null,
				select : (function(oNavItem) { return function(oEvent) {
					that._handleActivation({ 
						target : { id : oNavItem.getId() },
						preventDefault : function() { /* Ignore */ }
					});
				};})(oNavItem)
			});
			oMenu.addAggregation("items", oMenuItem, true);
		}

		this.setAggregation("overflowMenu", oMenu, true);
		this._menuInvalid = false;
	}
	
	return oMenu;
};

/**
 * Returns the items added to the items aggregation, or (if empty) the items that are
 * referred to in the associatedItems association.
 */
sap.ui.ux3.NavigationBar.prototype._getCurrentItems = function() {
	var aItems = this.getItems();
	if (aItems.length < 1) {
		aItems = this.getAssociatedItems();

		var oCore = sap.ui.getCore();
		for (var i = 0; i < aItems.length; ++i) {
			aItems[i] = oCore.byId(aItems[i]);
		}
	}
	
	return aItems;
};


/**
 * Shows the menu items that do not fit into the navigation bar. Or in the case of overflow being
 * set to MenuAndButtons: All items (since we cannot know what is currently scrolled into view).
 */
sap.ui.ux3.NavigationBar.prototype._showOverflowMenu = function() {
	var oMenu = this._getOverflowMenu();
	var oTarget = this.$("ofl").get(0);

	oMenu.open(
		true, // First item highlighted. Check whether this is the correct behavior
		oTarget,
		sap.ui.core.Popup.Dock.EndTop,
		sap.ui.core.Popup.Dock.CenterCenter,
		oTarget
	);
};


/**
 * Visually adapts the NavigationBar to the new selection, using animations instead of re-rendering.
 *
 * @param sItemId may be null, which means all selection is removed
 * @private
 */
sap.ui.ux3.NavigationBar.prototype._updateSelection = function(sItemId) {
	this._menuInvalid = true;

	// update the css classes to make the selected item larger etc.
	var $newSel = jQuery.sap.byId(sItemId);
	$newSel.attr("tabindex", "0").attr("aria-checked", "true");
	$newSel.parent().addClass("sapUiUx3NavBarItemSel");
	$newSel.parent().parent().children().each(function(){
		var a = this.firstChild;
		if (a && (a.id != sItemId) && (a.className.indexOf("Dummy") == -1)) {
			jQuery(a).attr("tabindex", "-1"); // includes arrow and dummy, but does not hurt TODO?
			jQuery(a).parent().removeClass("sapUiUx3NavBarItemSel");
			jQuery(a).attr("aria-checked", "false");
		}
	});

	// let the ItemNavigation know about the new selection
	var iSelectedDomIndex = $newSel.parent().index();
	if (iSelectedDomIndex > 0) {
		iSelectedDomIndex--; // if a selected element is found, its index in the ItemNavigation is the DOM index minus the dummy element, which is the first sibling
	}
	this._oItemNavigation.setSelectedIndex(iSelectedDomIndex);

	// make the arrow slide to the selected item
	var $Arrow = this.$("arrow");
	var arrowWidth = $Arrow.outerWidth();
	var targetPos = sap.ui.ux3.NavigationBar._getArrowTargetPos(sItemId, arrowWidth, this._bRtl);
	$Arrow.stop(); // stop any ongoing animation
	var animation_1 = this._bRtl ? {right:targetPos+"px"} : {left:targetPos+"px"};
	$Arrow.animate(animation_1, 500, "linear");
	var that = this;
	window.setTimeout(function(){ // because the items resize (for 300ms), interrupt and adjust the animation in the middle
		targetPos = sap.ui.ux3.NavigationBar._getArrowTargetPos(sItemId, arrowWidth, that._bRtl);
		$Arrow.stop();
		var animation_2 = that._bRtl ? {right:targetPos+"px"} : {left:targetPos+"px"};
		$Arrow.animate(animation_2, 200, "linear", function(){
			var item = jQuery.sap.domById(sItemId);
			that._scrollItemIntoView(item);
		});
	}, 300);
};

sap.ui.ux3.NavigationBar.prototype._scrollItemIntoView = function(item) {
	if (!item) {
		return;
	}
	
	var li = jQuery(item.parentNode);
	var ul = li.parent();
	var targetPos = undefined;
	var bRtl = sap.ui.getCore().getConfiguration().getRTL();

	// special handling for first and last item to not only scroll them into view but to scroll to the very start/end
	var index = li.index() - 1; // -1 because of leading dummy item
	if (index == 0) {
		targetPos = bRtl ? (ul[0].scrollWidth - ul.innerWidth() + 20) : 0; // +20 to account for margins etc.
	} else if (index == li.siblings().length - 2) { // siblings() excludes the item itself, but (apart from the already subtracted dummy) also the arrow => -2
		targetPos = bRtl ? 0 : (ul[0].scrollWidth - ul.innerWidth() + 20); // +20 to account for margins etc.
	} else {
		var liLeft = li.position().left;
		var ulScrollLeft = bRtl ? ul.scrollLeftRTL() : ul.scrollLeft();
		
		if (liLeft < 0) {
			// item cut at the left => scroll right to make it left-aligned
			targetPos = ulScrollLeft + liLeft;
		} else {
			var rightDistance = ul.innerWidth() - (liLeft + li.outerWidth(true));  // the distance from the right item edge to the end of the ul; negative if the item is cut
			if (rightDistance < 0) {
				targetPos = ulScrollLeft - rightDistance; // rightDistance is negative, add its amount to the current scroll amount
				// but now it might be that we scroll so far to the left that the left part of the item is hidden, which may not happen!
				targetPos = Math.min(targetPos, ulScrollLeft + liLeft);
			}
		}
	}

	if (targetPos !== undefined) {
		if (bRtl) {
			targetPos = jQuery.sap.denormalizeScrollLeftRTL(targetPos, ul.get(0)); // fix browser differences*/
		}
		ul.stop(true, true).animate({scrollLeft: targetPos}); // should be a string like "-50px"
	}
};

/**
 * Calculates the required position of the selection arrow to highlight the item with the given ID.
 * If null is given, the position will be outside the visible area.
 *
 * If bRight is set, the distance to the *right* border will be returned (instead of the normal position from left),
 * this can be used for RTL mode.
 *
 * @static
 * @private
 */
sap.ui.ux3.NavigationBar._getArrowTargetPos = function(sTargetItemId, arrowWidth, bRight) {
	var $Item = jQuery.sap.byId(sTargetItemId);
	if ($Item.length > 0) {
		var width = $Item.outerWidth(); //Math.min($Item.outerWidth(), sap.ui.ux3.NavigationBar._MAX_ITEM_WIDTH);
		var leftDistance = Math.round($Item[0].offsetLeft + (width/2) - (arrowWidth/2));
		if (!bRight) {
			return leftDistance;
		} else {
			return $Item.parent().parent().innerWidth() - leftDistance - arrowWidth;
		}
	} else {
		return -100;
	}
};


/**
 * Handles a mouse scroll event, scrolling the items if possible.
 *
 * @param oEvent
 * @private
 */
sap.ui.ux3.NavigationBar.prototype._handleScroll = function(oEvent) {
	if (oEvent.type == "DOMMouseScroll") { // Firefox
		var scrollAmount = oEvent.originalEvent.detail * 40; // in FF you get 3 ticks at once, *40 gives reasonable speed
		this._scroll(scrollAmount, 50);          // scroll fast to avoid temporal overlap
	} else { // other browsers
		var scrollAmount = -oEvent.originalEvent.wheelDelta; // in IE you get 120 as basic amount, direction is inverted
		this._scroll(scrollAmount, 50);          // scroll fast to avoid temporal overlap
	}
	oEvent.preventDefault(); // do not scroll the window (?)
};


/**
 * Scrolls the items if possible, using an animation.
 *
 * @param iDelta how far to scroll
 * @param iDuration how long to scroll (ms)
 * @private
 */
sap.ui.ux3.NavigationBar.prototype._scroll = function(iDelta, iDuration) {
	var oDomRef = this.$()[0].firstChild;
	var iScrollLeft = oDomRef.scrollLeft;
	if (!!!sap.ui.Device.browser.internet_explorer && this._bRtl) {
		iDelta = -iDelta;
	} // RTL lives in the negative space
	var iScrollTarget = iScrollLeft+iDelta;
	jQuery(oDomRef).stop(true, true).animate({scrollLeft: iScrollTarget}, iDuration);
};



/**
 * Changes the state of the scroll arrows depending on whether they are required due to overflow.
 *
 * @param oListDomRef the ul tag containing the items
 * @param of_back the backward scroll arrow
 * @param of_fw the forward scroll arrow
 * @private
 */
sap.ui.ux3.NavigationBar.prototype._checkOverflow = function(oListDomRef, of_back, of_fw) {
	if (oListDomRef) {
		var iScrollLeft = oListDomRef.scrollLeft;

		// check whether scrolling to the left is possible
		var bScrollBack = false;
		var bScrollForward = false;

		var realWidth = oListDomRef.scrollWidth;
		var availableWidth = oListDomRef.clientWidth;
		
		if(Math.abs(realWidth-availableWidth) == 1){ // Avoid rounding issues see CSN 1316630 2013
			realWidth = availableWidth;
		}

		if (!this._bRtl) {   // normal LTR mode
			if (iScrollLeft > 0) {
				bScrollBack = true;
			}
			if ((realWidth > availableWidth) && (iScrollLeft + availableWidth < realWidth)) {
				bScrollForward = true;
			}

		} else {  // RTL mode
			var $List = jQuery(oListDomRef);
			if ($List.scrollLeftRTL() > 0) {
				bScrollForward = true;
			}
			if ($List.scrollRightRTL() > 0) {
				bScrollBack = true;
			}
		}

		// only do DOM changes if the state changed to avoid periodic application of identical values
		if ((bScrollForward != this._bPreviousScrollForward) || (bScrollBack != this._bPreviousScrollBack)) {
			this._bPreviousScrollForward = bScrollForward;
			this._bPreviousScrollBack = bScrollBack;
			this.$().toggleClass("sapUiUx3NavBarScrollBack", bScrollBack)
					.toggleClass("sapUiUx3NavBarScrollForward", bScrollForward);
		}
	}
};




/* API methods */

/* overwritten association methods */

sap.ui.ux3.NavigationBar.prototype.setSelectedItem = function(vItem) {
	this.setAssociation("selectedItem", vItem, true); // avoid rerendering
	if (this.getDomRef()) {
		var sItemId = (!vItem || (typeof(vItem) == "string")) ? vItem : vItem.getId();
		this._updateSelection(sItemId); // animate selection
	}
};


/* overridden aggregation items */

sap.ui.ux3.NavigationBar.prototype.addItem = function(oItem) {
	this._menuInvalid = true;
	return this.addAggregation("items", oItem);
};

sap.ui.ux3.NavigationBar.prototype.destroyItems = function() {
	this._menuInvalid = true;
	return this.destroyAggregation("items");
};

sap.ui.ux3.NavigationBar.prototype.insertItem = function(oItem, iIndex) {
	this._menuInvalid = true;
	return this.insertAggregation("items", oItem, iIndex);
};

sap.ui.ux3.NavigationBar.prototype.removeItem = function(oItem) {
	this._menuInvalid = true;
	return this.removeAggregation("items", oItem);
};

sap.ui.ux3.NavigationBar.prototype.removeAllItems = function() {
	this._menuInvalid = true;
	return this.removeAllAggregation("items");
};


/* overridden association associatedItems */

sap.ui.ux3.NavigationBar.prototype.addAssociatedItem = function(vItemOrId) {
	this._menuInvalid = true;
	return this.addAssociation("associatedItems", vItemOrId);
};

sap.ui.ux3.NavigationBar.prototype.removeAssociatedItem = function(vItemOrId) {
	this._menuInvalid = true;
	return this.removeAssociation("associatedItems", vItemOrId);
};

sap.ui.ux3.NavigationBar.prototype.removeAllAssociatedItems = function() {
	this._menuInvalid = true;
	return this.removeAllAssociation("associatedItems");
};


/* API method implementations */

sap.ui.ux3.NavigationBar.prototype.setAssociatedItems = function(aItems /* bResetArrowPosition */) { // second parameter is currently not in the public API
	jQuery.sap.assert(jQuery.isArray(aItems), "aItems must be an array");

	var oListDomRef = this.getDomRef("list");

	// remove old items
	this.removeAllAssociation("associatedItems", true);

	// add new items
	for (var i = 0; i < aItems.length; i++) {
		this.addAssociation("associatedItems", aItems[i], true);
	}

	// if already rendered, update the UI
	if (oListDomRef) {
		var $FocusRef = jQuery(oListDomRef).find(":focus");
		var focusId = ($FocusRef.length > 0) ? $FocusRef.attr("id") : null;

		if (arguments.length > 1 && typeof arguments[1] === "boolean") { // checking for the second, hidden parameter "bResetArrowPosition"
			this._iLastArrowPos = -100;
		} else {
			var arrow = this.getDomRef("arrow");
			this._iLastArrowPos = parseInt(this._bRtl ? arrow.style.right : arrow.style.left, 10);
		}
		
		oListDomRef.innerHTML = "";
		var rm = sap.ui.getCore().createRenderManager();
		
		sap.ui.ux3.NavigationBarRenderer.renderItems(rm, this);
		
		rm.flush(oListDomRef, true);
		rm.destroy();

		// restore focus
		var oNewFocusRef;
		if (focusId && (oNewFocusRef = jQuery.sap.domById(focusId))) {
			jQuery.sap.focus(oNewFocusRef);
		}

		this._updateSelection(this.getSelectedItem());

		// update the item navigation, as the item HTML has changed
		this._updateItemNavigation();
	}

	return this;
};


sap.ui.ux3.NavigationBar.prototype.isSelectedItemValid = function() {
	var selId = this.getSelectedItem();
	if (!selId) {
		return false;
	} // no selection means no selected item out of those which are present

	var items = this.getItems();
	if (!items || items.length == 0) {
		items = this.getAssociatedItems();
		for (var i = 0; i < items.length; i++) {
			if (items[i] == selId) {
				return true;
			}
		}
	} else {
		for (var i = 0; i < items.length; i++) {
			if (items[i].getId() == selId) {
				return true;
			}
		}
	}
	return false;
};
