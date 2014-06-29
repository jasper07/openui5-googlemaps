/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.IconTabBar.
jQuery.sap.declare("sap.m.IconTabBar");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new IconTabBar.
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
 * <li>{@link #getShowSelection showSelection} : boolean (default: true)</li>
 * <li>{@link #getExpandable expandable} : boolean (default: true)</li>
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * <li>{@link #getSelectedKey selectedKey} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.m.IconTab[]</li>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.IconTabBar#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.IconTabBar#event:expand expand} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A tab bar with large icons
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.IconTabBar
 */
sap.ui.core.Control.extend("sap.m.IconTabBar", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"showSelection" : {type : "boolean", group : "Misc", defaultValue : true, deprecated: true},
		"expandable" : {type : "boolean", group : "Misc", defaultValue : true},
		"expanded" : {type : "boolean", group : "Misc", defaultValue : true},
		"selectedKey" : {type : "string", group : "Data", defaultValue : null},
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true}
	},
	aggregations : {
    	"items" : {type : "sap.m.IconTab", multiple : true, singularName : "item"}, 
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	},
	events : {
		"select" : {}, 
		"expand" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.IconTabBar with name <code>sClassName</code> 
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
 * @name sap.m.IconTabBar.extend
 * @function
 */

sap.m.IconTabBar.M_EVENTS = {'select':'select','expand':'expand'};


/**
 * Getter for property <code>showSelection</code>.
 * Defines whether the current selection should be visualized
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showSelection</code>
 * @public
 * @deprecated Since version 1.15.0. 
 * Regarding to changes of this control this property is not needed anymore.
 * @name sap.m.IconTabBar#getShowSelection
 * @function
 */

/**
 * Setter for property <code>showSelection</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowSelection  new value for property <code>showSelection</code>
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.15.0. 
 * Regarding to changes of this control this property is not needed anymore.
 * @name sap.m.IconTabBar#setShowSelection
 * @function
 */


/**
 * Getter for property <code>expandable</code>.
 * Defines if the tabs can be collapsed and expanded
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>expandable</code>
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabBar#getExpandable
 * @function
 */

/**
 * Setter for property <code>expandable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bExpandable  new value for property <code>expandable</code>
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabBar#setExpandable
 * @function
 */


/**
 * Getter for property <code>expanded</code>.
 * Indicates if the actual tab is expanded or not
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabBar#getExpanded
 * @function
 */

/**
 * Setter for property <code>expanded</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabBar#setExpanded
 * @function
 */


/**
 * Getter for property <code>selectedKey</code>.
 * Key of the selected item.
 * 
 * If the key has no corresponding aggregated item, no changes will apply.
 * If duplicate keys exists the first item matching the key is used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>selectedKey</code>
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabBar#getSelectedKey
 * @function
 */

/**
 * Setter for property <code>selectedKey</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSelectedKey  new value for property <code>selectedKey</code>
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabBar#setSelectedKey
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabBar#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabBar#setVisible
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * The items displayed in the IconTabBar
 * 
 * @return {sap.m.IconTab[]}
 * @public
 * @name sap.m.IconTabBar#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.m.IconTab}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabBar#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.m.IconTab}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabBar#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.m.IconTab} vItem the item to remove or its index or id
 * @return {sap.m.IconTab} the removed item or null
 * @public
 * @name sap.m.IconTabBar#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.IconTab[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.IconTabBar#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.m.IconTab</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.IconTab}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.IconTabBar#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabBar#destroyItems
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The contents displayed below the IconTabBar.
 * If there are multiple contents, they are rendered after each other. The developer has to manage to display the right one or use the content aggregation inside the IconTabFilter (which will be displayed instead if it is set).
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.IconTabBar#getContent
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
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabBar#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabBar#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.m.IconTabBar#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.IconTabBar#removeAllContent
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
 * @name sap.m.IconTabBar#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabBar#destroyContent
 * @function
 */


/**
 * This event will be fired when an item is selected. 
 *
 * @name sap.m.IconTabBar#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.m.IconTabFilter} oControlEvent.getParameters.item The selected item.
 * @param {string} oControlEvent.getParameters.key The key of the selected item.
 * @param {sap.m.IconTabFilter} oControlEvent.getParameters.selectedItem This parameter is deprecated since 1.15.0! Please use parameter "item" instead.
 * @param {string} oControlEvent.getParameters.selectedKey This parameter is deprecated since 1.15.0! Please use parameter "key" instead.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.m.IconTabBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.IconTabBar</code>.<br/> itself. 
 *  
 * This event will be fired when an item is selected. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.IconTabBar</code>.<br/> itself.
 *
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabBar#attachSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.m.IconTabBar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabBar#detachSelect
 * @function
 */

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'item' of type <code>sap.m.IconTabFilter</code> The selected item.</li>
 * <li>'key' of type <code>string</code> The key of the selected item.</li>
 * <li>'selectedItem' of type <code>sap.m.IconTabFilter</code> This parameter is deprecated since 1.15.0! Please use parameter "item" instead.</li>
 * <li>'selectedKey' of type <code>string</code> This parameter is deprecated since 1.15.0! Please use parameter "key" instead.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.IconTabBar#fireSelect
 * @function
 */


/**
 * Indicates that the tab will expand or collapse 
 *
 * @name sap.m.IconTabBar#expand
 * @event
 * @since 1.15.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.expand If the tab will expand, this is true.
 * @param {boolean} oControlEvent.getParameters.collapse If the tab will collapse, this is true.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'expand' event of this <code>sap.m.IconTabBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.IconTabBar</code>.<br/> itself. 
 *  
 * Indicates that the tab will expand or collapse 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.IconTabBar</code>.<br/> itself.
 *
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabBar#attachExpand
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'expand' event of this <code>sap.m.IconTabBar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabBar#detachExpand
 * @function
 */

/**
 * Fire event expand to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'expand' of type <code>boolean</code> If the tab will expand, this is true.</li>
 * <li>'collapse' of type <code>boolean</code> If the tab will collapse, this is true.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.IconTabBar} <code>this</code> to allow method chaining
 * @protected
 * @since 1.15.0
 * @name sap.m.IconTabBar#fireExpand
 * @function
 */


// Start of sap\m\IconTabBar.js
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.ui.core.EnabledPropagator.apply(sap.m.IconTabBar.prototype, [true]);


sap.m.IconTabBar.SCROLL_STEP = 264; // how many pixels to scroll with every overflow arrow click

/**
 * Init
 */
sap.m.IconTabBar.prototype.init = function() {
	this._bPreviousScrollForward = false; // remember the item overflow state
	this._bPreviousScrollBack = false;
	this._iCurrentScrollLeft = 0;
	this._bRtl = sap.ui.getCore().getConfiguration().getRTL();
	
	this.startScrollX = 0;
	this.startTouchX = 0;
	this._scrollable = null;
	
	this._aTabKeys = [];

	// Initialize the ItemNavigation
	this._oItemNavigation = new sap.ui.core.delegate.ItemNavigation().setCycling(false);
	this.addDelegate(this._oItemNavigation);

	if (!sap.ui.Device.system.desktop || (sap.ui.Device.os.windows && sap.ui.Device.os.version === 8)) {
		jQuery.sap.require("sap.ui.core.delegate.ScrollEnablement");
		this._oScroller = new sap.ui.core.delegate.ScrollEnablement(this, this.getId() + "-head", {
			horizontal: true,
			vertical: false,
			zynga: false,
			iscroll: "force",
			preventDefault: false,
			nonTouchScrolling: "scrollbar"
		});
	}

};

/**
 * Exit
 */
sap.m.IconTabBar.prototype.exit = function() {
	if (this._oArrowLeft) {
		this._oArrowLeft.destroy();
	}
	if (this._oArrowRight) {
		this._oArrowRight.destroy();
	}

	if (this._oItemNavigation) {
		this.removeDelegate(this._oItemNavigation);
		this._oItemNavigation.destroy();
		delete this._oItemNavigation;
	}

	if (this._oScroller){
		this._oScroller.destroy();
		this._oScroller = null;
	}

	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
	if (this._aTabKeys) {
		this._aTabKeys = null;
	}
};

/**
 * Before Rendering
 */
sap.m.IconTabBar.prototype.onBeforeRendering = function() {
	var aItems = this.getItems(),
		sSelectedKey = this.getSelectedKey(),
		i = 0;

	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}

	if (aItems.length > 0) {
		if (!this.oSelectedItem || sSelectedKey && sSelectedKey !== this.oSelectedItem.getKey()) {
			if (sSelectedKey) {
				// selected key was specified by API: set oSelectedItem to the item specified by key
				for (; i < aItems.length; i++) {
					if (!(aItems[i] instanceof sap.m.IconTabSeparator) && aItems[i].getKey() === sSelectedKey) {
						this.oSelectedItem = aItems[i];
						break;
					}
				}
			}

			// no key and no item, we set the first visible item as selected if container is not explicitly set to collapsed
			if (!this.oSelectedItem && this.getExpanded()) {
				for (i = 0; i < aItems.length; i++) { // tab item
					if (!(aItems[i] instanceof sap.m.IconTabSeparator) && aItems[i].getVisible()) {
						this.oSelectedItem = aItems[i];
						break;
					}
				}
			}
		}

		//in case the selected tab is not visible anymore and the content is expanded, the selected tab will change to the first visible tab
		if (this.oSelectedItem && !this.oSelectedItem.getVisible() && this.getExpanded()) {
			for (i = 0; i < aItems.length; i++) { // tab item
				if (!(aItems[i] instanceof sap.m.IconTabSeparator) && aItems[i].getVisible()) {
					this.oSelectedItem = aItems[i];
					break;
				}
			}
		}

		if (this.oSelectedItem) {
			this.setProperty("selectedKey", this.oSelectedItem.getKey(), true);
		}
	}
};

/**
 * Sets the selected item based on key
 * @overwrite
 * @public
 * @param {string} sKey the key of the item to be selected
 * @return {sap.m.IconTabBar} this pointer for chaining
 */
sap.m.IconTabBar.prototype.setSelectedKey = function (sKey) {
	var aItems = this.getItems(),
		i = 0;

	// adjust UI and internal variables if already rendered (otherwise taken care by onBeforeRendering)
	if (this.$().length) {
		for (; i < aItems.length; i++) {
			if (!(aItems[i] instanceof sap.m.IconTabSeparator) && aItems[i].getKey() === sKey) {
				this.setSelectedItem(aItems[i], true);
				break;
			}
		}
	}

	// set internal property
	this.setProperty("selectedKey", sKey, true);
	return this;
};


/**
 * Sets the expanded flag and toggles the expand/collapse animation if the control is already rendered
 * @overwrite
 * @public
 * @param {boolean} bExpanded new parameter value
 * @return {sap.m.IconTabBar} this pointer for chaining
 */
sap.m.IconTabBar.prototype.setExpanded = function (bExpanded) {
	// set internal property
	this.setProperty("expanded", bExpanded, true);

	// toggle animation if control is already rendered
	if (this.$().length) {
		this._toggleExpandCollapse(bExpanded);
	}
	return this;
};

/**
 * Sets the expandable flag without rerendering
 * @overwrite
 * @public
 * @param {boolean} bExpandable new parameter value
 * @return {sap.m.IconTabBar} this pointer for chaining
 */
sap.m.IconTabBar.prototype.setExpandable = function (bExpandable) {
	// set internal property
	this.setProperty("expandable", bExpandable, true);
	return this;
};

/*
 * Sets the selected item, updates the UI, and fires the select event
 * @private
 * @param {sap.m.IconTabFilter} oItem the item to be selected
 * @return {sap.m.IconTabBar} this pointer for chaining
 */
sap.m.IconTabBar.prototype.setSelectedItem = function(oItem, bAPIchange) {

	if (!oItem || !oItem.getEnabled()) {
		return this;
	}
	var $content = this.$("content");
	
	if (this.oSelectedItem && this.oSelectedItem.getVisible() && (this.getExpandable() || this.oSelectedItem !== oItem )) {
		this.oSelectedItem.$().removeClass("sapMITBSelected");
	}

	if (oItem.getVisible()) {
		//click on already selected item leads to expanding/collapsing of the content (if expandable enabled)
		if (this.oSelectedItem === oItem) {
			//if content is not expandable nothing should happen otherwise content will be expanded/collapsed
			if (this.getExpandable()) {
				this._toggleExpandCollapse();
			}
		//click on other item leads to showing the right content of this item
		} else {
			// set new item
			this.oSelectedItem = oItem;
			this.setProperty("selectedKey", this.oSelectedItem.getKey(), true);

			// add selected styles
			this.oSelectedItem.$().addClass("sapMITBSelected");

			//if item has own content, this content is shown
			var oSelectedItemContent = this.oSelectedItem.getContent();
			if (oSelectedItemContent.length > 0) {
				this._rerenderContent(oSelectedItemContent);
			//if item has not own content, general content of the icontabbar is shown
			} else {
				this._rerenderContent(this.getContent());
			}
			//if content is not expanded, content will be expanded (first click on item always leads to expanding the right content)
			if (this.getExpandable() && this.getExpanded() === false) {
				this._toggleExpandCollapse(true);
			}
			this._adjustArrow();
		}

		// scroll to item if out of viewport
		if (this.oSelectedItem.$().length > 0) {
			this._scrollIntoView(oItem, 500);
		} else {
			this._scrollAfterRendering = true;
		}
	}

	var sSelectedKey = this.oSelectedItem.getKey();
	this.oSelectedItem = oItem;
	this.setProperty("selectedKey", sSelectedKey, true);

	if (!bAPIchange) {
		this.fireSelect({
			selectedItem: this.oSelectedItem,
			selectedKey: sSelectedKey,
			item: this.oSelectedItem,
			key: sSelectedKey
		});
	}
	return this;
};

/**
 * Rerenders only shown content of the IconTabBar.
 * @private
 * @param oContent content which should be rendered.
 */
sap.m.IconTabBar.prototype._rerenderContent = function(oContent) {
	var $content = this.$("content");
	if (oContent && ($content.length > 0)) {
		var rm = sap.ui.getCore().createRenderManager();
		for (var i = 0; i < oContent.length; i++) {
			rm.renderControl(oContent[i]);
		}
		rm.flush($content[0]);
		rm.destroy();
	}
};

/**
 * Adjusts the arrow position.
 * @private
 */
sap.m.IconTabBar.prototype._adjustArrow = function(){
	var $arrow = this.$("contentArrow"),
		$head = this.$("head"),
		$item;

	if (this.getExpanded() === false) {
		return this; // no need of an arrow in this case
	}

	if (this.oSelectedItem) {
		$item = this.oSelectedItem.$();
		if ($item.length > 0) {
			//for scrolling we need to check if the new position is possible, if not, we hide the arrow but still show the old content
				if (this._bRtl){
					var iPossibleLeft = $head[0].offsetLeft;
					var iPossibleRight = document.width - iPossibleLeft - $arrow.width() / 2;
					var iRight = 0;
					var oDomRef = this.getDomRef("head");
					var iScrollRight = jQuery(oDomRef).scrollRightRTL();
					if (this.oSelectedItem.getDesign() === sap.m.IconTabFilterDesign.Vertical) {
						iRight = $arrow.parent().width() - $item[0].offsetLeft - $arrow.width() / 2 - $item.outerWidth() / 2 - $head[0].offsetLeft - iScrollRight;
					} else { //horizontal layout needs different arrow calculation
						iRight = $arrow.parent().width() - $item[0].offsetLeft - $arrow.width() / 2 - $item.outerWidth() + this.oSelectedItem.$("tab").outerWidth() / 2 - $head[0].offsetLeft - iScrollRight;
					}
					if (this._oScroller) {
						iRight += this._oScroller.getScrollLeft();
					}
					var aItems = this.getItems();
					if (((this.$("head").hasClass("sapMITBNoText") || this.oSelectedItem.$().hasClass("sapMITBHorizontal")) && ((this.oSelectedItem === aItems[0])))) {
						//first tab has less padding arrow would not point to the middle
						iRight -= 8;
					}
					$arrow.css("right", iRight + "px");
					$arrow.toggleClass("sapMITBNoContentArrow", iRight < iPossibleLeft || iRight > iPossibleRight);
				} else {
					var iPossibleLeft = $head[0].offsetLeft;
					var iPossibleRight = document.width - iPossibleLeft - $arrow.width() / 2;
					var oDomRef = this.getDomRef("head");
					var iLeft = 0;
					var iScrollLeft = oDomRef.scrollLeft;
					if (this.oSelectedItem.getDesign() === sap.m.IconTabFilterDesign.Vertical) {
						iLeft = $item[0].offsetLeft + $item.outerWidth() / 2 - $arrow.width() / 2 + $head[0].offsetLeft - iScrollLeft;
					} else { //horizontal layout needs different arrow calculation
						iLeft = $item[0].offsetLeft + this.oSelectedItem.$("tab").outerWidth() / 2- $arrow.width() / 2 + $head[0].offsetLeft - iScrollLeft;
					}
					if (this._oScroller) {
						iLeft -= this._oScroller.getScrollLeft();
					}
					var aItems = this.getItems();
					var oFirstVisibleItem = this._getFirstVisibleItem(aItems);
					if (((this.$("head").hasClass("sapMITBNoText") || this.oSelectedItem.$().hasClass("sapMITBHorizontal")) && ((this.oSelectedItem === oFirstVisibleItem)))
							|| ((aItems.length > 0) && (this.oSelectedItem === aItems[aItems.length-1])) && (!sap.ui.Device.system.desktop || sap.ui.Device.os.windows && sap.ui.Device.os.version === 8) && !this.oSelectedItem.$().hasClass("sapMITBHorizontal")) {
						//first tab has less padding, last tab has more padding arrow would not point to the middle
						iLeft -= 8;
					}
					if (this.oSelectedItem.$().hasClass("sapMITBHorizontal")) {
						iLeft += 8;
					}
					if ( (!sap.ui.Device.system.desktop || sap.ui.Device.os.windows && sap.ui.Device.os.version === 8) && !this.$("head").hasClass("sapMITBNoText")) {
						if (this.oSelectedItem === aItems[0]) {
							iLeft -= 2;
						} else if (this.oSelectedItem === aItems[aItems.length-1]) {
							iLeft += 2;
						}
					}
					$arrow.css("left", iLeft + "px");
					$arrow.toggleClass("sapMITBNoContentArrow", iLeft < iPossibleLeft || iLeft > iPossibleRight);
				}
		}
	}
};

/**
 * return first visible item, which is needed for correct arrow calculation
 */
sap.m.IconTabBar.prototype._getFirstVisibleItem = function(aItems) {
	for (var i = 0; i < aItems.length; i++) {
		if (aItems[i].getVisible()) {
			return aItems[i];
		}
	}
	
	return null;
};

/**
 * afterRendering
 */
sap.m.IconTabBar.prototype.onAfterRendering = function() {
	var oHeadDomRef = this.getDomRef("head"),
		$bar = this.$();

	// initialize scrolling
	if (this._oScroller) {
		this._oScroller.setIconTabBar(this, jQuery.proxy(this._afterIscroll, this), jQuery.proxy(this._scrollPreparation, this));
	}

	if (this.oSelectedItem && this.getExpanded()) {
		this.oSelectedItem.$().addClass("sapMITBSelected");
	}

	if (!sap.ui.Device.system.desktop || (sap.ui.Device.os.windows && sap.ui.Device.os.version === 8)) {
		jQuery.sap.delayedCall(350, this, "_checkOverflow", [oHeadDomRef, $bar]);
	}

	// reset scroll state after re-rendering for non-touch devices (iScroll will handle this internally)
	if (this._iCurrentScrollLeft !== 0 && (sap.ui.Device.system.desktop && !(sap.ui.Device.os.windows && sap.ui.Device.os.version === 8))) {
		oHeadDomRef.scrollLeft = this._iCurrentScrollLeft;
	}

	// scroll to selected item if it is out of screen and we render the control the first time
	if (this.oSelectedItem) {
		if (!this._bDoThisOnlyOnce) {
			jQuery.sap.delayedCall(1000, this, "_scrollIntoView", [this.oSelectedItem, 0]); // needs some delay to have correct position info
			this._bDoThisOnlyOnce = true;
		} else if (this._scrollAfterRendering) {
			this._scrollIntoView(this.oSelectedItem, 500); 
			this._scrollAfterRendering = false;
		}
	}

	//use ItemNavigation for keyboardHandling
	var aItems = this.getItems();
	var aTabDomRefs = [];
	var iSelectedDomIndex = -1;
	var that = this;

	// find a collection of all tabs
	aItems.forEach(function(oItem) {
		if (oItem instanceof sap.m.IconTabFilter) {
			var oItemDomRef = that.getFocusDomRef(oItem);
			jQuery(oItemDomRef).attr("tabindex", "-1");
			aTabDomRefs.push(oItemDomRef);
			if (that === this.oSelectedItem) {
				iSelectedDomIndex = aTabDomRefs.indexOf(oItem);
			}
		}
	});

	//Initialize the ItemNavigation
	if (!this._oItemNavigation) {
		this._oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
		this.addDelegate(this._oItemNavigation);
	}

	//Reinitialize the ItemNavigation after rendering
	this._oItemNavigation.setRootDomRef(oHeadDomRef);
	this._oItemNavigation.setItemDomRefs(aTabDomRefs);
	this._oItemNavigation.setSelectedIndex(iSelectedDomIndex);


	//listen to resize
	this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(),  jQuery.proxy(this._fnResize, this));

	this._adjustArrow();
};

/**
 * Destroys the item aggregation.
 */
sap.m.IconTabBar.prototype.destroyItems = function() {
	this.oSelectedItem = null;
	this._aTabKeys = [];
	this.destroyAggregation("items");
};

sap.m.IconTabBar.prototype.addItem = function(oItem) {
	if (!(oItem instanceof sap.m.IconTabSeparator)) {
		var sKey = oItem.getKey();
		//check if key is a duplicate
		if(this._aTabKeys.indexOf(sKey) !== -1) {
			jQuery.sap.log.warning("sap.m.IconTabBar: duplicate key '" + sKey +"' inside the IconTabFilter. Please use unique keys.");
		}
		this._aTabKeys.push(sKey);
	}
	this.addAggregation("items", oItem);
};

sap.m.IconTabBar.prototype.insertItem = function(oItem, iIndex) {
	if (!(oItem instanceof sap.m.IconTabSeparator)) {
		var sKey = oItem.getKey();
		//check if key is a duplicate
		if(this._aTabKeys.indexOf(sKey) !== -1) {
			jQuery.sap.log.warning("sap.m.IconTabBar: duplicate key '" + sKey +"' inside the IconTabFilter. Please use unique keys.");
		}
		this._aTabKeys.push(sKey);
	}
	this.insertAggregation("items", oItem, iIndex);
};

sap.m.IconTabBar.prototype.removeAllItems = function() {
	this._aTabKeys = [];
	this.removeAllAggregation("items");
};

sap.m.IconTabBar.prototype.removeItem = function(oItem) {
	// Make sure we have the actual Item and not just an ID
	oItem = this.removeAggregation("items", oItem);
	
	if (oItem && !(oItem instanceof sap.m.IconTabSeparator)) {
		var sKey = oItem.getKey();
		this._aTabKeys.splice(this._aTabKeys.indexOf(sKey) , 1);
	}
	
	// Return the original value from removeAggregation
	return oItem;
};

/**
 * Called after the theme has been switched, required for new width calc
 * @private
 */
sap.m.IconTabBar.prototype.onThemeChanged = function(oEvent){
	this._adjustArrow();
};

/**
 * Function is executed when the expand/collapse animation is finished to adjust the UI 
 *
 * @param {boolean} bExpanded the new state of the container. Passed in 
 * @private
 * @return {sap.m.IconTabBar} this pointer for chaining
 */
sap.m.IconTabBar.prototype.onTransitionEnded = function(bExpanded) {
	var $content = this.$("content"),
		$container = this.$("containerContent"),
		$arrow = this.$("contentArrow");

	// if multiple animations are triggered, this function is executed multiple times in the end, so we need to ignore all except the last call
	if (this._iAnimationCounter === 1) {
		$container.toggleClass("sapMITBContentClosed", !bExpanded);
		if (bExpanded) { // expanding
			$arrow.show();
			$content.css("display", "block");
		} else { // collapsing
			$arrow.hide();
			$content.css("display", "none");
		}
	}
	// reduce animation counter
	this._iAnimationCounter = (this._iAnimationCounter > 0 ? --this._iAnimationCounter : 0);
};

/**
 * Opens and closes the content Container
 *
 * @param {boolean|undefined} bExpanded the new state of the container. If not specified, it will use the property expanded
 * @private
 * @return {sap.m.IconTabBar} this pointer for chaining
 */
sap.m.IconTabBar.prototype._toggleExpandCollapse = function(bExpanded) {
	var $content = this.$("content");

	// use inverted control state if not specified by parameter
	if (bExpanded === undefined) {
		bExpanded = !this.getExpanded();
	}

	// manage selection state
	if (this.oSelectedItem) {
		this.oSelectedItem.$().toggleClass("sapMITBSelected", bExpanded);
	}

	// show animation (keep track of active animations to avoid flickering of controls)
	this._iAnimationCounter = (this._iAnimationCounter === undefined ? 1 : ++this._iAnimationCounter);
	if (bExpanded) { // expanding
		if (this.oSelectedItem) {
			if (this.$("content").children().length === 0) { //content is not rendered yet
				//if item has own content, this content is shown
				var oSelectedItemContent = this.oSelectedItem.getContent();
				if (oSelectedItemContent.length > 0) {
					this._rerenderContent(oSelectedItemContent);
				//if item has not own content, general content of the icontabbar is shown
				} else {
					this._rerenderContent(this.getContent());
				}
			}
			$content.slideDown('400', jQuery.proxy(this.onTransitionEnded, this, bExpanded));
			this.$("containerContent").toggleClass("sapMITBContentClosed", !bExpanded);
		}
	} else { // collapsing
		this.$("contentArrow").hide();
		$content.slideUp('400', jQuery.proxy(this.onTransitionEnded, this, bExpanded));
	}

	// update property (if we have a selected item) and fire event
	if (!bExpanded || this.oSelectedItem) {
		this.setProperty("expanded", bExpanded, true);
	}
	this.fireExpand({
		expand: bExpanded,
		collapse: !bExpanded
	});

	return this;
};

/**
 * Checks if all tabs are textOnly version.
 * @private
 * @returns true if all tabs are textOnly version, otherwise false
 */
sap.m.IconTabBar.prototype._checkTextOnly = function(aItems) {
	if (aItems.length > 0) {
		for (var i = 0; i < aItems.length; i++) {
			if (!(aItems[i] instanceof sap.m.IconTabSeparator)) {
				if (aItems[i].getIcon()) {
					this._bTextOnly = false;
					return false;
				}
			}
		}
	}
	this._bTextOnly = true;
	return true;
};

/**
 * Checks if all tabs are noText version.
 * @private
 * @returns true if all tabs are noText version, otherwise false
 */
sap.m.IconTabBar.prototype._checkNoText = function(aItems) {
	if (aItems.length > 0) {
		for (var i = 0; i < aItems.length; i++) {
			if (!(aItems[i] instanceof sap.m.IconTabSeparator)) {
				if (aItems[i].getText().length > 0) {
					return false;
				}
			}
		}
	}
	return true;
};

/**
 * Checks if scrolling is needed.
 * @private
 * @returns true if scrolling is needed, otherwise false
 */
sap.m.IconTabBar.prototype._checkScrolling = function(oHead, $bar) {
	var bScrolling = false;

	if (!sap.ui.Device.system.desktop || (sap.ui.Device.os.windows && sap.ui.Device.os.version === 8)) { //iScroll is used, therefore we need other calculation then in desktop mode
		var domScrollCont = this.getDomRef("scrollContainer");
		var domHead = this.getDomRef("head");
		if (domHead.offsetWidth > domScrollCont.offsetWidth) {
			bScrolling = true;
		}
	} else { //desktop mode
		//check if there are more tabs as displayed
		if (oHead) {
			if (oHead.scrollWidth > oHead.clientWidth) {
				//scrolling possible
				bScrolling = true;
			}
		}
	}

	if (this._scrollable !== bScrolling) {
		$bar.toggleClass("sapMITBScrollable", bScrolling);
		$bar.toggleClass("sapMITBNotScrollable", !bScrolling);
		this._scrollable = bScrolling;
	}

	return bScrolling;
};

/**
 * Gets the icon of the requested arrow (left/right).
 * @private
 * @param sName left or right
 * @returns icon of the requested arrow
 */
sap.m.IconTabBar.prototype._getScrollingArrow = function(sName) {
	var mProperties = {
		src : "sap-icon://navigation-" + sName + "-arrow"
	};
	var aCssClassesToAddLeft = ["sapMITBArrowScroll", "sapMITBArrowScrollLeft"];
	var aCssClassesToAddRight = ["sapMITBArrowScroll", "sapMITBArrowScrollRight"];
	
	if (sName === "left") {
		if (!this._oArrowLeft) {
			this._oArrowLeft = sap.m.ImageHelper.getImageControl(this.getId() + "-arrowScrollLeft", this._oArrowLeft, this, mProperties, aCssClassesToAddLeft);
		}
		return this._oArrowLeft;
	}
	if (sName === "right") {
		if (!this._oArrowRight) {
			this._oArrowRight = sap.m.ImageHelper.getImageControl(this.getId() + "-arrowScrollRight", this._oArrowRight, this, mProperties, aCssClassesToAddRight);
		}
		return this._oArrowRight;
	}
};

/**
 * Changes the state of the scroll arrows depending on whether they are required due to overflow.
 *
 * @param oListDomRef the ul tag containing the items
 * @param of_back the backward scroll arrow
 * @param of_fw the forward scroll arrow
 * @private
 */
sap.m.IconTabBar.prototype._checkOverflow = function(oBarHead, $bar) {

	if (this._checkScrolling(oBarHead, $bar) && oBarHead) {
		// check whether scrolling to the left is possible
		var bScrollBack = false;
		var bScrollForward = false;

		if (!sap.ui.Device.system.desktop || (sap.ui.Device.os.windows && sap.ui.Device.os.version === 8)) { //iScroll is used, therefore we need other calculation then in desktop mode
			var domScrollCont = this.getDomRef("scrollContainer");
			var domHead = this.getDomRef("head");
			if (this._oScroller.getScrollLeft() > 0) {
				bScrollBack = true;
			}
			if ((this._oScroller.getScrollLeft() + domScrollCont.offsetWidth) < domHead.offsetWidth) {
				bScrollForward = true;
			}

		} else { //desktop mode
			var iScrollLeft = oBarHead.scrollLeft;
			var realWidth = oBarHead.scrollWidth;
			var availableWidth = oBarHead.clientWidth;

			if (Math.abs(realWidth-availableWidth) == 1){ // Avoid rounding issues see CSN 1316630 2013
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
				var $List = jQuery(oBarHead);
				if ($List.scrollLeftRTL() > 0) {
					bScrollForward = true;
				}
				if ($List.scrollRightRTL() > 0) {
					bScrollBack = true;
				}
			}
		}

		// only do DOM changes if the state changed to avoid periodic application of identical values
		if ((bScrollForward != this._bPreviousScrollForward) || (bScrollBack != this._bPreviousScrollBack)) {
			this._bPreviousScrollForward = bScrollForward;
			this._bPreviousScrollBack = bScrollBack;
			$bar.toggleClass("sapMITBScrollBack", bScrollBack);
			$bar.toggleClass("sapMITBNoScrollBack", !bScrollBack);
			$bar.toggleClass("sapMITBScrollForward", bScrollForward);
			$bar.toggleClass("sapMITBNoScrollForward", !bScrollForward);
		}
	}
};

/**
 * Handles the activation of the tabs and arrows.
 * @private
 */
sap.m.IconTabBar.prototype._handleActivation = function(oEvent) {
	var sTargetId = oEvent.target.id,
		oControl = oEvent.srcControl,
		sControlId;

	var $sTargetId = jQuery.sap.byId(sTargetId);
	if (jQuery.inArray(this.$("content")[0], $sTargetId.parents()) > -1) {
		//do nothing because element is inside content
	} else {
		if (sTargetId) {
			var sId = this.getId();

			// For items: do not navigate away! Stay on the page and handle the click in-place. Right-click + "Open in new Tab" still works.
			// For scroll buttons: Prevent IE from firing beforeunload event -> see CSN 4378288 2012
			oEvent.preventDefault();

			//on mobile devices click on arrows has no effect
			if (sTargetId == sId + "-arrowScrollLeft" && sap.ui.Device.system.desktop) {
				if (sap.ui.Device.os.windows && sap.ui.Device.os.version === 8) {
					//combi devices with windows 8 should also scroll on click on arrows
					//need to use iscroll
					var iScrollLeft = this._oScroller.getScrollLeft() - sap.m.IconTabBar.SCROLL_STEP;
					if (iScrollLeft < 0) {
						iScrollLeft = 0;
					}
					// execute manual scrolling with iScroll's scrollTo method (delayedCall 0 is needed for positioning glitch)
					this._scrollPreparation();
					jQuery.sap.delayedCall(0, this._oScroller, "scrollTo", [iScrollLeft, 0, 500]);
					jQuery.sap.delayedCall(500, this, "_afterIscroll");
				} else {
					// scroll back/left button
					this._scroll(-sap.m.IconTabBar.SCROLL_STEP, 500);
				}

			} else if (sTargetId == sId + "-arrowScrollRight" && sap.ui.Device.system.desktop) {
				if (sap.ui.Device.os.windows && sap.ui.Device.os.version === 8) {
					//combi devices with windows 8 should also scroll on click on arrows
					//need to use iscroll
					var iScrollLeft = this._oScroller.getScrollLeft() + sap.m.IconTabBar.SCROLL_STEP;
					var iContainerWidth = this.$("scrollContainer").width();
					var iHeadWidth = this.$("head").width();
					if (iScrollLeft > (iHeadWidth - iContainerWidth)) {
						iScrollLeft = iHeadWidth - iContainerWidth;
					}
					// execute manual scrolling with iScroll's scrollTo method (delayedCall 0 is needed for positioning glitch)
					this._scrollPreparation();
					jQuery.sap.delayedCall(0, this._oScroller, "scrollTo", [iScrollLeft, 0, 500]);
					jQuery.sap.delayedCall(500, this, "_afterIscroll");
				} else {
					// scroll forward/right button
					this._scroll(sap.m.IconTabBar.SCROLL_STEP, 500);
				}

			} else {
				// should be one of the items - select it
				if (oControl instanceof sap.ui.core.Icon) { 
					// click on icon: fetch filter instead
					sControlId = oEvent.srcControl.getId().replace("-icon", "");
					oControl = sap.ui.getCore().byId(sControlId);
					this.setSelectedItem(oControl);
				}
				// select item if it is an iconTab but not a separator
				else if (oControl.getMetadata().isInstanceOf("sap.m.IconTab") && !(oControl instanceof sap.m.IconTabSeparator)) {
					//for tabs with showAll property true, click on whole area leads to selection, for text only version only clicking on text itself (not count)
					if (oControl.getShowAll() || this._bTextOnly && sTargetId === oControl.getId() + "-text") {
						this.setSelectedItem(oControl);
					}
				}
			}
		}
	}
};

/*
 * Scrolls to the item passed as parameter if it is not (fully) visible
 * If the item is to the left of the viewport it will be put leftmost.
 * If the item is to the right of the viewport it will be put rightmost.
 * @param {sap.m.IconTabFilter} oItem The item to be scrolled into view
 * @param {int} iDuration The duration of the animation effect
 * @private
 * @return {sap.m.IconTabBar} this pointer for chaining
 */ 
sap.m.IconTabBar.prototype._scrollIntoView = function(oItem, iDuration) {
	var $item = oItem.$(),
	oHeadDomRef,
	iScrollLeft,
	iNewScrollLeft,
	iContainerWidth;

	if ($item.length > 0) {
		var iItemWidth = $item.outerWidth();
		var iItemPosLeft = $item.position().left;

		// switch based on scrolling mode
		if (!sap.ui.Device.system.desktop || (sap.ui.Device.os.windows && sap.ui.Device.os.version === 8)) { // iScroll
			iScrollLeft = this._oScroller.getScrollLeft();
			iContainerWidth = this.$("scrollContainer").width();
			iNewScrollLeft = 0;

			// check if item is outside of viewport
			if (iItemPosLeft - iScrollLeft < 0 || iItemPosLeft - iScrollLeft > iContainerWidth - iItemWidth) {		
				if (iItemPosLeft - iScrollLeft < 0) { // left side: make this the first item
					iNewScrollLeft += iItemPosLeft;
				} else { // right side: make this the last item
					iNewScrollLeft += iItemPosLeft + iItemWidth - iContainerWidth;
				}

				// execute manual scrolling with iScroll's scrollTo method (delayedCall 0 is needed for positioning glitch)
				this._scrollPreparation();
				jQuery.sap.delayedCall(0, this._oScroller, "scrollTo", [iNewScrollLeft, 0, iDuration]);
				jQuery.sap.delayedCall(iDuration, this, "_afterIscroll");
			}
		} else { // desktop scrolling with jQuery
			oHeadDomRef = this.getDomRef("head");
			iScrollLeft = oHeadDomRef.scrollLeft;
			iContainerWidth = $item.parent().width();
			iNewScrollLeft = iScrollLeft;		

			// check if item is outside of viewport
			if (iItemPosLeft < 0 || iItemPosLeft > iContainerWidth - iItemWidth) { 
				if (iItemPosLeft < 0) { // left side: make this the first item
					iNewScrollLeft += iItemPosLeft;
				} else { // right side: make this the last item
					iNewScrollLeft += iItemPosLeft + iItemWidth - iContainerWidth;
				}

				// execute scrolling
				this._scrollPreparation();
				jQuery(oHeadDomRef).stop(true, true).animate({scrollLeft: iNewScrollLeft}, iDuration, jQuery.proxy(this._adjustAndShowArrow, this));
			}
		}
		// store current scroll state to set it after rerendering
		this._iCurrentScrollLeft = iNewScrollLeft;
	}

	return this;
};

/*
 * Scrolls the items if possible, using an animation.
 *
 * @param iDelta how far to scroll
 * @param iDuration how long to scroll (ms)
 * @private
 */
sap.m.IconTabBar.prototype._scroll = function(iDelta, iDuration) {
	this._scrollPreparation();

	var oDomRef = this.getDomRef("head");
	var iScrollLeft = oDomRef.scrollLeft;
	if (!!!sap.ui.Device.browser.internet_explorer && this._bRtl) {
		iDelta = -iDelta;
	} // RTL lives in the negative space
	var iScrollTarget = iScrollLeft+iDelta;
	jQuery(oDomRef).stop(true, true).animate({scrollLeft: iScrollTarget}, iDuration, jQuery.proxy(this._adjustAndShowArrow, this));
	this._iCurrentScrollLeft = iScrollTarget;
};

/**
 * Adjusts the arrow position and shows the arrow.
 * @private
 */
sap.m.IconTabBar.prototype._adjustAndShowArrow = function() {
	this._adjustArrow();
	this._$bar && this._$bar.toggleClass("sapMITBScrolling", false);
	this._$bar = null;

	//update the arrows on desktop
	if (sap.ui.Device.system.desktop) {
		this._checkOverflow(this.getDomRef("head"), this.$());
	}
};

/**
 * Scroll preparation.
 * @private
 */
sap.m.IconTabBar.prototype._scrollPreparation = function() {
	if (!this._$bar){
		this._$bar = this.$().toggleClass("sapMITBScrolling", true);
	}
};

/**
 * After iscroll.
 * @private
*/
sap.m.IconTabBar.prototype._afterIscroll = function() {
	var oHead = this.getDomRef("head");
	this._checkOverflow(oHead, this.$());
	this._adjustAndShowArrow();
};

/**
 * Resize  handling.
 * @private
*/
sap.m.IconTabBar.prototype._fnResize = function() {
	var oHead = this.getDomRef("head");
	this._checkOverflow(oHead, this.$());
	this._adjustArrow();
};

/** 
 * @overwrite
 */
//overwritten method, returns for most cases the iconDomRef, if the given tab has no icon, the textDomRef is returned.
sap.m.IconTabBar.prototype.getFocusDomRef = function (oFocusTab) {
	
	var oTab = oFocusTab || this.oSelectedItem;

	if (!oTab) {
		return null;
	}

	if (!this._bTextOnly) {
		if (oTab.getShowAll()) {
			return oTab.getDomRef();
		}
		return oTab.getDomRef("icon");
	}
	return oTab.getDomRef("text");
};

sap.m.IconTabBar.prototype.applyFocusInfo = function (oFocusInfo) {
	//sets the focus depending on the used IconTabFilter
	if (oFocusInfo.focusDomRef) {
		jQuery(oFocusInfo.focusDomRef).focus();
	}
};

/* =========================================================== */
/*           begin: event handlers                             */
/* =========================================================== */

/**
 * Initializes scrolling on the IconTabBar. 
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.IconTabBar.prototype.ontouchstart = function(oEvent) {
	var oTargetTouch = oEvent.targetTouches[0];

	// store & init touch state
	this._iActiveTouch = oTargetTouch.identifier;
	this._iTouchStartPageX = oTargetTouch.pageX;
	this._iTouchDragX = 0;
};

/**
 * Sets an internal flag if horizontal drag was executed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.IconTabBar.prototype.ontouchmove = function(oEvent) {
	var oTouch = sap.m.touch.find(oEvent.changedTouches, this._iActiveTouch);

	// check for valid changes 
	if (!oTouch || oTouch.pageX === this._iTouchStartPageX) {
		return;
	}

	// sum up movement to determine in touchend event if selection should be executed
	this._iTouchDragX += Math.abs(this._iTouchStartPageX - oTouch.pageX); 
	this._iTouchStartPageX = oTouch.pageX;
};

/**
 * Handles touch end and events and trigger selection if bar was not dragged.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.IconTabBar.prototype.ontouchend = function(oEvent) {
	// suppress selection if there ware a drag (moved more than 20px)
	if (this._iTouchDragX > 20) {
		return;
	}
	// 
	this._handleActivation(oEvent);
};


/**
 * Handle the touch cancel event.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.IconTabBar.prototype.ontouchcancel = sap.m.IconTabBar.prototype.ontouchend;

/**
 * Keyboard navigation event when the user presses Enter or Space.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.IconTabBar.prototype.onsapselect = function(oEvent) {
	this._handleActivation(oEvent);
};


/* =========================================================== */
/*           end: event handlers                               */
/* =========================================================== */
