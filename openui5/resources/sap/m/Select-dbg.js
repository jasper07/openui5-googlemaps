/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Select.
jQuery.sap.declare("sap.m.Select");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Select.
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
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 'auto')</li>
 * <li>{@link #getMaxWidth maxWidth} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getSelectedKey selectedKey} : string</li>
 * <li>{@link #getSelectedItemId selectedItemId} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getType type} : sap.m.SelectType (default: sap.m.SelectType.Default)</li>
 * <li>{@link #getAutoAdjustWidth autoAdjustWidth} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.core.Item[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedItem selectedItem} : string | sap.ui.core.Item</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Select#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The select control provides a menu of predefined items that allows end users to choose options.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.Select
 */
sap.ui.core.Control.extend("sap.m.Select", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"isOpen", "open", "close", "getItemByKey", "getFirstItem", "getLastItem", "getItemAt"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"name" : {type : "string", group : "Misc", defaultValue : null},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'},
		"maxWidth" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"selectedKey" : {type : "string", group : "Data", defaultValue : null},
		"selectedItemId" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"type" : {type : "sap.m.SelectType", group : "Appearance", defaultValue : sap.m.SelectType.Default},
		"autoAdjustWidth" : {type : "boolean", group : "Appearance", defaultValue : false}
	},
	defaultAggregation : "items",
	aggregations : {
    	"items" : {type : "sap.ui.core.Item", multiple : true, singularName : "item", bindable : "bindable"}
	},
	associations : {
		"selectedItem" : {type : "sap.ui.core.Item", multiple : false}
	},
	events : {
		"change" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Select with name <code>sClassName</code> 
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
 * @name sap.m.Select.extend
 * @function
 */

sap.m.Select.M_EVENTS = {'change':'change'};


/**
 * Getter for property <code>name</code>.
 * The name to be used in the HTML code (e.g. for HTML forms that send data to the server via submit).
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.m.Select#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setName
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Determines whether the control is visible or not.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.Select#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setVisible
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Determines whether the user can change the selected value.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.Select#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setEnabled
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Defines the width of the select input. The default width of a select control depends on the width of the widest option/item in the list. This value can be provided in %, em, px… and all possible CSS measures.
 * Note: The width will be ignored if the "autoAdjustWidth" property is set to true.
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.Select#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setWidth
 * @function
 */


/**
 * Getter for property <code>maxWidth</code>.
 * Defines the maximum width of the select input. This value can be provided in %, em, px… and all valid CSS measures.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>maxWidth</code>
 * @public
 * @name sap.m.Select#getMaxWidth
 * @function
 */

/**
 * Setter for property <code>maxWidth</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sMaxWidth  new value for property <code>maxWidth</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setMaxWidth
 * @function
 */


/**
 * Getter for property <code>selectedKey</code>.
 * Key of the selected item. If the key has no corresponding aggregated item, no changes will apply. If duplicate keys exists the first item matching the key is used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>selectedKey</code>
 * @public
 * @since 1.11
 * @name sap.m.Select#getSelectedKey
 * @function
 */

/**
 * Setter for property <code>selectedKey</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSelectedKey  new value for property <code>selectedKey</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @since 1.11
 * @name sap.m.Select#setSelectedKey
 * @function
 */


/**
 * Getter for property <code>selectedItemId</code>.
 * Id of the selected item. If the id has no corresponding aggregated item, no changes will apply.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>selectedItemId</code>
 * @public
 * @since 1.12
 * @name sap.m.Select#getSelectedItemId
 * @function
 */

/**
 * Setter for property <code>selectedItemId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSelectedItemId  new value for property <code>selectedItemId</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @since 1.12
 * @name sap.m.Select#setSelectedItemId
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * The URI to the icon that will be displayed only when using the “IconOnly” type.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @since 1.16
 * @name sap.m.Select#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.Select#setIcon
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Type of a select. Possibles values "Default", "IconOnly".
 *
 * Default value is <code>Default</code>
 *
 * @return {sap.m.SelectType} the value of property <code>type</code>
 * @public
 * @since 1.16
 * @name sap.m.Select#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>Default</code> 
 *
 * @param {sap.m.SelectType} oType  new value for property <code>type</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.Select#setType
 * @function
 */


/**
 * Getter for property <code>autoAdjustWidth</code>.
 * If set to true, the width of the select input is determined by the selected item’s content.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>autoAdjustWidth</code>
 * @public
 * @since 1.16
 * @name sap.m.Select#getAutoAdjustWidth
 * @function
 */

/**
 * Setter for property <code>autoAdjustWidth</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bAutoAdjustWidth  new value for property <code>autoAdjustWidth</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.Select#setAutoAdjustWidth
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * Items of the Item control.
 * 
 * <strong>Note</strong>: this is the default aggregation for Select.
 * @return {sap.ui.core.Item[]}
 * @public
 * @name sap.m.Select#getItems
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
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Item}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.core.Item} vItem the item to remove or its index or id
 * @return {sap.ui.core.Item} the removed item or null
 * @public
 * @name sap.m.Select#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Select#removeAllItems
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
 * @name sap.m.Select#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#destroyItems
 * @function
 */


/**
 * Binder for aggregation <code>items</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#bindItems
 * @function
 */

/**
 * Unbinder for aggregation <code>items</code>.
 *
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#unbindItems
 * @function
 */


/**
 * Retrieves the selected item from the aggregation named <code>items</code>.
 *
 * @return {string} Id of the element which is the current target of the <code>selectedItem</code> association, or null
 * @public
 * @name sap.m.Select#getSelectedItem
 * @function
 */

/**
 * Retrieves the selected item from the aggregation named <code>items</code>.
 *
 * @param {string | sap.ui.core.Item} vSelectedItem 
 *    Id of an element which becomes the new target of this <code>selectedItem</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setSelectedItem
 * @function
 */


	
/**
 * This event will be triggered when the user changes the selected item. 
 *
 * @name sap.m.Select#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Item} oControlEvent.getParameters.selectedItem The selected item.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.m.Select</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Select</code>.<br/> itself. 
 *  
 * This event will be triggered when the user changes the selected item. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Select</code>.<br/> itself.
 *
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.m.Select</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedItem' of type <code>sap.ui.core.Item</code> The selected item.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Select#fireChange
 * @function
 */


/**
 * Checks if the select is open. It returns true when the select is currently open, this includes opening and closing animations, otherwise it returns false.
 *
 * @name sap.m.Select.prototype.isOpen
 * @function

 * @type boolean
 * @public
 * @since 1.16
 */


/**
 * Open the select.
 *
 * @name sap.m.Select.prototype.open
 * @function

 * @type sap.m.Select
 * @public
 * @since 1.16
 */


/**
 * Closes the select.
 *
 * @name sap.m.Select.prototype.close
 * @function

 * @type sap.m.Select
 * @public
 * @since 1.16
 */


/**
 * Retrieves the first item object from the aggregation named <code>items</code>, based on it's key.
 *
 * @name sap.m.Select.prototype.getItemByKey
 * @function
 * @param {string} 
 *         sSKey
 *         An item key that identifies the item to retrieve.

 * @type sap.ui.core.Item
 * @public
 * @since 1.16
 */


/**
 * Retrieves the first item from the aggregation named <code>items</code>.
 *
 * @name sap.m.Select.prototype.getFirstItem
 * @function

 * @type sap.ui.core.Item
 * @public
 * @since 1.16
 */


/**
 * Retrieves the last item from the aggregation named <code>items</code>.
 *
 * @name sap.m.Select.prototype.getLastItem
 * @function

 * @type sap.ui.core.Item
 * @public
 * @since 1.16
 */


/**
 * Retrieves the item from the aggregation named <code>items</code> at the given 0-based index.
 *
 * @name sap.m.Select.prototype.getItemAt
 * @function
 * @param {int} 
 *         iIIndex
 *         iIndex Index of the item to return

 * @type sap.ui.core.Item
 * @public
 * @since 1.16
 */


// Start of sap\m\Select.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
jQuery.sap.require("sap.m.SelectRenderer");
jQuery.sap.require("sap.m.Input");
jQuery.sap.require("sap.m.Bar");
jQuery.sap.require("sap.m.List");
jQuery.sap.require("sap.m.Popover");
jQuery.sap.require("sap.ui.core.IconPool");
sap.ui.core.IconPool.insertFontFaceStyle();
sap.ui.core.EnabledPropagator.apply(sap.m.Select.prototype, [true]);

/* =========================================================== */
/* Private methods and properties                              */
/* =========================================================== */

/* ----------------------------------------------------------- */
/* Private methods                                             */
/* ----------------------------------------------------------- */

/**
 * Cache DOM references.
 *
 * @private
 */
sap.m.Select.prototype._cacheDomRefs = function() {

	// jQuery DOM reference to the Select element
	this._$Select = this.$();

	// jQuery DOM reference to the label used to show the text of the current selected item
	this._$Label = this._$Select.children("." + sap.m.SelectRenderer.CSS_CLASS + "Label");
};

sap.m.Select.prototype._getParentPopup = function() {
	return (this._$Select && this._$Select.closest("[data-sap-ui-popup]")) || null;
};

/**
 * Synchronize selected item and key.
 *
 * @param {sap.ui.core.Item} oItem
 * @param {string} sKey
 * @param {array} [aItems]
 * @private
 */
sap.m.Select.prototype._synchronizeSelectedItemAndKey = function(oItem, sKey, aItems) {

	/*
	 *	functional dependencies:
	 *
	 *	selectedKey  -> selectedItem, selectedItemId
	 *	selectedItem -> selectedItemId, selectedKey
	 *
	 *	items        -> selectedItem, selectedItemId, selectedKey
	 */

	// no items
	if (!aItems.length) {

		// Update "selectedItem" association, "selectedItemId"
		// and "selectedKey" properties by setting its defaults values.
		this._setSelectedItem({
			item: null,
			id: "",
			key: "",
			suppressInvalidate: true
		});

		jQuery.sap.log.info("Info: _synchronizeSelectedItemAndKey() the select control does not contain any item on ", this);

		return;
	}

	// the "selectedKey" property is not synchronized
	if (sKey !== (oItem && oItem.getKey())) {

		oItem = this.getItemByKey("" + sKey);

		// if the "selectedKey" has no corresponding aggregated item, no changes will apply
		if (oItem) {

			// Update and synchronize "selectedItem" association and
			// "selectedKey" property.
			this.setAssociation("selectedItem", oItem, true);	// suppress re-rendering
			this.setProperty("selectedItemId", oItem.getId(), true);	// suppress re-rendering

			return;
		}

		// if "selectedKey" does not have the default value
		if (sKey !== "" && oItem) {

			jQuery.sap.log.warning('Warning: _synchronizeSelectedItemAndKey() the key "' + sKey + '" has no corresponding aggregated item on ', this);
		} else {	// the "sKey" have the default value
			oItem = this._findFirstEnabledItem();

			if (oItem) {

				this._setSelectedItem({
					item: oItem,
					id: oItem.getId(),
					key: oItem.getKey(),
					suppressInvalidate: true
				});
			}
		}

	} else if (aItems.indexOf(oItem) === -1) {	// validate if the selected item is aggregated
		jQuery.sap.log.warning('Warning: _synchronizeSelectedItemAndKey() the sap.ui.core.Item instance or sap.ui.core.Item id is not a valid aggregation on', this);
	}
};

/**
 * Retrieves the first enabled item from the aggregation named <code>items</code>.
 *
 * @param {array} [aItems]
 * @returns {sap.ui.core.Item | null}
 * @private
 */
sap.m.Select.prototype._findFirstEnabledItem = function(aItems) {
	var aItems = aItems || this.getItems();

	for (var i = 0; i < aItems.length; i++) {
		if (aItems[i].getEnabled()) {
			return aItems[i];
		}
	}

	return null;
};

/**
 * Retrieves the last enabled item from the aggregation named <code>items</code>.
 *
 * @param {array} [aItems]
 * @returns {sap.ui.core.Item | null}
 * @private
 */
sap.m.Select.prototype._findLastEnabledItem = function(aItems) {
	var aItems = aItems || this.getItems();

	return this._findFirstEnabledItem(aItems.reverse());
};

/**
 * Update and synchronize "selectedItem" association, "selectedItemId", "selectedKey" properties and
 * the "selectedItem" in the List.
 *
 * @param {sap.ui.core.Item | string | null} mOptions.item
 * @param {string} mOptions.id
 * @param {string} mOptions.key
 * @param {boolean} [mOptions.suppressInvalidate]
 * @param {boolean} [mOptions.listItemUpdated]
 * @param {boolean} [mOptions.fireChangeEvent]
 * @private
 */
sap.m.Select.prototype._setSelectedItem = function(mOptions) {
	var oItem = this.getSelectedItem();

	if (mOptions.item === oItem) {
		return;
	}

	this.setAssociation("selectedItem", mOptions.item, mOptions.suppressInvalidate);
	this.setProperty("selectedItemId", mOptions.id, mOptions.suppressInvalidate);
	this.setProperty("selectedKey", mOptions.key, mOptions.suppressInvalidate);

	oItem = this.getSelectedItem();
	this._setValue(oItem ? oItem.getText() : ((oItem = this._findFirstEnabledItem()) ? oItem.getText() : ""));

	if (mOptions.fireChangeEvent) {

		// fire the change event
		this.fireChange({ selectedItem: oItem });
	}

	if (!mOptions.listItemUpdated) {

		// set the selected item in the List
		this._setSelectedListItem(this._getSelectedListItem());
	}
};

/**
 * Sets the selected item in the List.
 *
 * note: if no list item is provided, the first item is selected.
 *
 * @param {sap.m.StandardListItem | null} oSelectedListItem
 * @private
 */
sap.m.Select.prototype._setSelectedListItem = function(oSelectedListItem) {

	if (!this._oList) {
		return;
	}

	oSelectedListItem = oSelectedListItem || this._oList.getItems()[0];

	if (oSelectedListItem) {

		// sets the selected item
		this._oList.setSelectedItem(oSelectedListItem, true);
	}
};

/**
 * Sets the selected item by its index.
 *
 * @param {int} iIndex
 * @private
 */
sap.m.Select.prototype._setSelectedItemByIndex = function(iIndex) {
	var aItems = this.getItems(),
		oItem;

	// constrain the new index
	iIndex = (iIndex > aItems.length - 1) ? aItems.length - 1 : Math.max(0, iIndex);

	oItem = aItems[iIndex];

	if (oItem) {

		this._setSelectedItem({
			item: oItem,
			id: oItem.getId(),
			key: oItem.getKey(),
			fireChangeEvent: true,
			suppressInvalidate: true
		});

		this._focusItem(this._getSelectedListItem());
	}
};

/**
 * Get the selected item in the List.
 *
 * @returns {sap.m.StandardListItem}
 * @private
 */
sap.m.Select.prototype._getSelectedListItem = function() {
	var oItem = this.getSelectedItem();
	return (oItem && oItem._oListItem) ? oItem._oListItem : null;
};

/**
 *
 *
 * @param {object} $DomRef
 * @private
 */
sap.m.Select.prototype._addFocusableParentPopup = function($DomRef) {
	sap.m.Select._publishEventToPopup({
		action: "add",
		child: this.getPopup(),
		parent: $DomRef
	});
};

/**
 *
 *
 * @param {object} $DomRef
 * @private
 */
sap.m.Select.prototype._removeFocusableParentPopup = function($DomRef) {
	sap.m.Select._publishEventToPopup({
		action: "remove",
		child: this.getPopup(),
		parent: $DomRef
	});
};

/**
 * Notify a focusable HTMLElement to <code>sap.ui.core.Popup</code>.
 *
 * @param {object} mOptions
 * @private
 */
sap.m.Select._publishEventToPopup = function(mOptions) {
	var sParentId, sEventId;

	if (!mOptions.parent || !mOptions.child) {
		return;
	}

	sParentId = mOptions.parent.attr("data-sap-ui-popup");
	sEventId = "sap.ui.core.Popup." + mOptions.action + "FocusableContent" + "-" + sParentId;

	sap.ui.getCore().getEventBus().publish("sap.ui", sEventId, {
		id : mOptions.child.getId()
	});
};

/**
 * Scrolls an item into the visual viewport.
 *
 * @private
 */
sap.m.Select.prototype._focusItem = function(oListItem) {

	if (!oListItem) {
		return;
	}

	// scrolls to the menu to the selected item
	oListItem.focus();

	// restore the focus to the select
	jQuery.sap.delayedCall(0, this, "focus");
};

/**
 * Sets the text value of the Select field.
 *
 * @param {string} sValue
 * @private
 */
sap.m.Select.prototype._setValue = function(sValue) {

	// change the label text
	if (this._$Label && this._$Label.length) {
		this._$Label.text(sValue);
	}
};

/**
 * Map an item type of sap.ui.core.Item to an item type of sap.m.StandardListItem.
 *
 * @param {sap.ui.core.Item} oItem
 * @returns {sap.m.StandardListItem}
 * @private
 */
sap.m.Select.prototype._mapItemToListItem = function(oItem) {
	var oListItem = new sap.m.StandardListItem();
	oListItem.setTitle(oItem.getText());
	oListItem.setType(oItem.getEnabled() ? sap.m.ListType.Active : sap.m.ListType.Inactive);
	oListItem.setTooltip(oItem.getTooltip());
	oItem._oListItem = oListItem;
	return oListItem;
};

/**
 * Given a item type of sap.m.StandardListItem, find the corresponding item type of sap.ui.core.Item.
 *
 * @param {sap.m.StandardListItem} oListItem
 * @param {array} [aItems]
 * @returns {sap.ui.core.Item | null}
 * @private
 */
sap.m.Select.prototype._findMappedItem = function(oListItem, aItems) {
	for (var i = 0, aItems = aItems || this.getItems(), aItemsLength = aItems.length; i < aItemsLength; i++) {
		if (aItems[i]._oListItem === oListItem) {
			return aItems[i];
		}
	}

	return null;
};

/**
 * Update and synchronize "selectedItem" association "setSelectedItemId"
 * and "selectedKey" properties.
 *
 * @param {sap.ui.core.Item} oNewSelectedItem
 * @private
 */
sap.m.Select.prototype._updateSelectedItem = function(oNewSelectedItem) {

	this._setSelectedItem({
		item: oNewSelectedItem,
		id: oNewSelectedItem.getId(),
		key: oNewSelectedItem.getKey(),
		fireChangeEvent: true,
		suppressInvalidate: true,
		listItemUpdated: true
	});
};

/**
 * Fill the list of items.
 *
 * @param {array} aItems An array with items type of sap.ui.core.Item.
 * @private
 */
sap.m.Select.prototype._fillList = function(aItems) {
	if (!aItems) {
		return;
	}

	for (var i = 0, oListItem, oSelectedItem = this.getSelectedItem(), aItemsLength = aItems.length; i < aItemsLength; i++) {

		// add a private property to the added item containing a reference
		// to the corresponding mapped item
		oListItem = this._mapItemToListItem(aItems[i]);

		// add the mapped item type of sap.m.StandardListItem to the list
		this._oList.addAggregation("items", oListItem, true);	// note: suppress re-rendering

		// add active state to the selected item
		if (aItems[i] === oSelectedItem) {
			this._oList.setSelectedItem(oListItem);
		}
	}
};

/**
 * Destroy the items in the List.
 *
 * @private
 */
sap.m.Select.prototype._clearList = function() {
	this._oList && this._oList.destroyAggregation("items", true);	// note: suppress re-rendering
};

/**
 * Popup Factory singleton.
 *
 * @param {string} sPopupType
 * @returns {sap.m.Popover|sap.m.Dialog}
 * @private
 * @function
 */
sap.m.Select.prototype._createPopupFactory = function(sPopupType) {
	if (!this.hasOwnProperty("_o" + sPopupType)) {
		return this["_create" + sPopupType]();
	}

	return this.getPopup();
};

/**
 * Whether the native HTML Select Element is required.
 *
 * @returns {boolean}
 * @private
 */
sap.m.Select.prototype._isRequiredSelectElement = function() {
	if (this.getAutoAdjustWidth()) {
		return false;
	} else if (this.getWidth() === "auto") {
		return true;
	}
};

/**
 * Add the active state.
 *
 * @private
 */
sap.m.Select.prototype._addActiveState = function() {
	this.addStyleClass(sap.m.SelectRenderer.CSS_CLASS + "Pressed");
};

/**
 * Remove the active state.
 *
 * @private
 */
sap.m.Select.prototype._removeActiveState = function() {
	this.removeStyleClass(sap.m.SelectRenderer.CSS_CLASS + "Pressed");
};

/**
 * Retrieves the first item from the aggregation named <code>items</code> whose first character match with the given <code>sChar</code>.
 *
 * @param {string} sChar
 * @returns {sap.ui.core.Item | undefined}
 * @private
 */
sap.m.Select.prototype._findItemByFirstCharacter = function(sChar) {
	for (var i = 0, aItems = this.getItems(); i < aItems.length; i++) {
		if (aItems[i].getText().charAt(0).toUpperCase() === sChar.toUpperCase()) {
			return aItems[i];
		}
	}
};

/* ----------------------------------------------------------- */
/* List                                                        */
/* ----------------------------------------------------------- */

/**
 * Create an instance type of <code>sap.m.List</code>.
 *
 * @returns {sap.m.List}
 * @private
 */
sap.m.Select.prototype._createList = function() {

	// list to use inside the pop-up
	this._oList = new sap.m.List({
		width: "100%",
		mode: sap.m.ListMode.SingleSelectMaster,
		rememberSelections: false	// select handles selection in itself, so list should not remember selection
	}).attachBrowserEvent("tap", function() {
		this.close();
	}, this);

	this._oList.attachSelectionChange(this._handleSelectionChangeEvent, this);
};

/* ----------------------------------------------------------- */
/* Popup                                                       */
/* ----------------------------------------------------------- */

/**
 * Popup initialization.
 *
 * @private
 */
sap.m.Select.prototype._initPopup = function() {
	var oPopup = this.getPopup();

	// initialize the pop-up (Popover or Dialog) lazily
	this._setPopup(this._createPopupFactory(this._getPopupType()));

	if (oPopup === this.getPopup()) {
		return;
	}

	this.getPopup().setHorizontalScrolling(false)
					.addStyleClass(sap.m.SelectRenderer.CSS_CLASS + "Popup")
					.attachBeforeOpen(this.onBeforeOpen, this)
					.attachAfterOpen(this.onAfterOpen, this)
					.attachBeforeClose(this.onBeforeClose, this)
					.attachAfterClose(this.onAfterClose, this)
					.addEventDelegate({
						onBeforeRendering: this.onBeforeRenderingPopup,
						onAfterRendering: this.onAfterRenderingPopup
					}, this);
};

/**
 * This event handler will be called before the Select Popup is opened.
 *
 * @private
 */
sap.m.Select.prototype.onBeforeOpen = function() {
	var oPopup = this.getPopup(),
		fnPopupTypeBeforeOpen = this["_onBeforeOpen" + this._getPopupType()];

	// add the active state to the Select HTMLDIVElement container
	this._addActiveState();

	oPopup.addContent(this._oList);

	this.addContent();

	fnPopupTypeBeforeOpen && fnPopupTypeBeforeOpen.call(this);
};

/**
 * This event handler will be called after the Select Popup is opened.
 *
 * @private
 */
sap.m.Select.prototype.onAfterOpen = function() {};

/**
 * This event handler will be called before the Popup is closed.
 *
 * @private
 */
sap.m.Select.prototype.onBeforeClose = function() {};

/**
 * This event handler will be called after the Popup is closed.
 *
 * @private
 */
sap.m.Select.prototype.onAfterClose = function() {

	// remove the active state of the Select HTMLDIVElement container
	this._removeActiveState();
};

/**
 * Setter for the pop-up.
 *
 * @param {sap.m.Dialog | sap.m.Popover} oPopup
 * @private
 */
sap.m.Select.prototype._setPopup = function(oPopup) {
	this._oPopup = oPopup;
};

/**
 * Setter for property <code>_sPopupType</code>.
 *
 * @private
 */
sap.m.Select.prototype._setPopupType = function(sPopupType) {
	this._sPopupType = sPopupType;
};

/**
 * Getter for property <code>_sPopupType</code>
 *
 * @returns {string}
 * @private
 */
sap.m.Select.prototype._getPopupType = function() {
	return this._sPopupType;
};

/* ----------------------------------------------------------- */
/* Popover                                                     */
/* ----------------------------------------------------------- */

/**
 * Creates an instance type of <code>sap.m.Popover</code>.
 *
 * @returns {sap.m.Popover}
 * @private
 */
sap.m.Select.prototype._createPopover = function() {

	// initialize Popover
	this._oPopover = new sap.m.Popover({
		showHeader: false,
		placement: sap.m.PlacementType.Vertical,
		offsetX: 0,
		offsetY: 0,
		initialFocus: this,
		bounce: false
	});

	this._decoratePopover(this._oPopover);

	return this._oPopover;
};

/**
 * Decorate a Popover instance by adding some private methods.
 *
 * @param {sap.m.Popover}
 * @private
 */
sap.m.Select.prototype._decoratePopover = function(oPopover) {
	var self = this;

	// adding additional capabilities to the Popover
	oPopover._removeArrow = function() {
		this._marginTop = 0;
		this._marginLeft = 0;
		this._marginRight = 0;
		this._marginBottom = 0;
		this._arrowOffset = 0;
		this._offsets = ["0 0", "0 0", "0 0", "0 0"];
	};

	oPopover._setPosition = function() {
		this._myPositions = ["begin bottom", "begin center", "begin top", "end center"];
		this._atPositions = ["begin top", "end center", "begin bottom", "begin center"];
	};

	oPopover._setArrowPosition = function() {};

	oPopover._setMinWidth = function(sWidth) {
		this.getDomRef().style.minWidth = sWidth;
	};

	oPopover._setWidth = function(sWidth) {
		var bAutoAdjustWidth = self.getAutoAdjustWidth(),
			bIconOnly = self.getType() === "IconOnly",
			oPopupContentDomRef;

		// set the width of the content
		if (sap.ui.Device.system.desktop || sap.ui.Device.system.tablet) {

			oPopupContentDomRef = this.getContent()[0];

			if (bAutoAdjustWidth) {
				oPopupContentDomRef.setWidth("auto");
				oPopupContentDomRef.getDomRef().style.minWidth = sWidth;
			} else {
				oPopupContentDomRef.setWidth(sWidth);
			}
		}

		if (!bIconOnly) {

			// set the width of the popover
			this.getDomRef().style.minWidth = sWidth;
		}
	};

	oPopover.open = function() {
		return this.openBy(self);
	};
};

/**
 * Required adaptations after rendering of the Popover.
 *
 * @private
 */
sap.m.Select.prototype._onAfterRenderingPopover = function() {
	var oPopover = this.getPopup(),
		sWidth = (this._$Select.outerWidth() / parseFloat(sap.m.BaseFontSize)) + "rem";

	// remove the Popover arrow
	oPopover._removeArrow();

	// position adaptations
	oPopover._setPosition();

	//
	if (sap.ui.Device.system.phone) {
		oPopover._setMinWidth("100%");
	} else {
		oPopover._setWidth(sWidth);
	}

	//
	if (!this._bHasParentBar && !this._bHasParentList) {
		oPopover.addStyleClass(sap.m.SelectRenderer.CSS_CLASS + "PopupStandalone");
	}
};

/* ----------------------------------------------------------- */
/* Dialog                                                      */
/* ----------------------------------------------------------- */

/**
 * Creates an instance type of <code>sap.m.Dialog</code>.
 *
 * @returns {sap.m.Dialog}
 * @private
 */
sap.m.Select.prototype._createDialog = function() {

	// initialize Dialog
	this._oDialog = new sap.m.Dialog({
		stretchOnPhone: true,
		customHeader: new sap.m.Bar({
			contentLeft: new sap.m.Input({
				value: this.getSelectedItem().getText(),
				width: "100%",
				editable: false
			})
		})
	});

	this._oDialog.getAggregation("customHeader").attachBrowserEvent("tap", function() {
		this._oDialog.close();
	}, this);

	return this._oDialog;
};

/**
 * Called before the Dialog is opened.
 *
 * @private
 */
sap.m.Select.prototype._onBeforeOpenDialog = function() {
	var oHeader = this.getPopup().getCustomHeader();

	oHeader.getContentLeft()[0].setValue(this.getSelectedItem().getText());
};

/* =========================================================== */
/* Lifecycle methods                                           */
/* =========================================================== */

/**
 * Initialization hook for the Select.
 *
 * @private
 */
sap.m.Select.prototype.init = function() {

	// initialize list
	this._createList();
};

/**
 * Required adaptations before rendering.
 *
 * @private
 */
sap.m.Select.prototype.onBeforeRendering = function() {
	var aItems = this.getItems(),
		oItem = this.getSelectedItem(),
		sKey = this.getSelectedKey();

	this._synchronizeSelectedItemAndKey(oItem, sKey, aItems);
	this._clearList();
	this._fillList(aItems);
};

/**
 * Required adaptations after rendering.
 *
 * @private
 */
sap.m.Select.prototype.onAfterRendering = function() {
	var $ParentBar,
		oPopup;

	this._cacheDomRefs();

	// whether the Select has a Bar or a List as a parent
	$ParentBar = this._$Select.closest(".sapMBar-CTX");

	// whether the Select has a Bar as parent
	this._bHasParentBar = !!$ParentBar.length;

	// whether the Select has a List as parent
	this._bHasParentList = !!this._$Select.closest(".sapMLIB-CTX").length;

	//
	this._sParentCTX = sap.m.SelectRenderer.CSS_CLASS + "Popup" + ($ParentBar.hasClass("sapMHeader-CTX") ? "Header-CTX" : "Footer-CTX");

	//
	this._setPopupType(sap.ui.Device.system.phone && !this._bHasParentBar ? "Dialog" : "Popover");

	oPopup = this.getPopup();

	// before re-render the pop-up, ensure that the DOM location could be determined
	if (oPopup && oPopup.getDomRef()) {

		if (this.isOpen()) {
			if (!this.hasContent()) {
				this.close();
			} else {

				// trigger an async re-rendering of the pop-up after the Select is rendered
				jQuery.sap.delayedCall(0, oPopup, "rerender");
			}
		}
	}
};

/**
 * Cleans up before destruction.
 *
 * @private
 */
sap.m.Select.prototype.exit = function() {
	var oPopup = this.getPopup();

	this._removeFocusableParentPopup(this._getParentPopup());

	this._$Select = null;
	this._$Label = null;

	if (this._oList) {
		this._oList.destroy();
		this._oList = null;
	}

	if (oPopup) {
		oPopup.destroy();
		this._oPopover = null;
		this._oDialog = null;
		this._oPopup = null;
	}
};

/* =========================================================== */
/* Event handlers                                              */
/* =========================================================== */

/**
 * Handle the touch start event on the Select.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Select.prototype.ontouchstart = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Select
	oEvent.setMarked();

	// add the active state to the Select HTMLDIVElement container
	this._addActiveState();

	if (!this.hasContent() || !this.getEnabled()) {
		return;
	}

	// initialize the pop-up lazily
	this._initPopup();
};

/**
 * Handle the touch end event on the Select.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Select.prototype.ontouchend = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Select
	oEvent.setMarked();

	if (!this.getEnabled()) {
		return;
	}

	if (!this.isOpen() || !this.hasContent()) {

		// remove the active state of the Select HTMLDIVElement container
		this._removeActiveState();
	}
};

/**
 * Handle the tap event on the Select.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Select.prototype.ontap = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Select
	oEvent.setMarked();

	var oPopup = this.getPopup();

	if (!oPopup || !this.getEnabled()) {
		return;
	}

	if (this.isOpen()) {
		this.close();
		this._removeActiveState();
		return;
	}

	if (this.hasContent()) {
		this.open(true);
	}

	if (this.isOpen()) {

		// add the active state to the Select HTMLDIVElement container
		this._addActiveState();
	}
};

/**
 * Handle the selection change event on the List.
 *
 * @param {sap.ui.base.Event} oControlEvent
 * @private
 */
sap.m.Select.prototype._handleSelectionChangeEvent = function(oControlEvent) {
	var oListItem = oControlEvent.getParameter("listItem"),
		oNewSelectedItem = this._findMappedItem(oListItem);

	if (oListItem.getType() === "Inactive") {	// workaround: this is needed because the List fires the "selectionChange" event on inactive items
		return;
	}

	// pre-assertion
	jQuery.sap.assert(oNewSelectedItem, "The corresponding mapped item was not found on " + this);

	this.close();

	if (!oNewSelectedItem) {
		return;
	}

	// update the selected item
	this._updateSelectedItem(oNewSelectedItem);
};

/* ----------------------------------------------------------- */
/* Keyboard handling                                           */
/* ----------------------------------------------------------- */

/**
 * Handle the keypress event.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onkeypress = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Select
	oEvent.setMarked();

	if (!this.getEnabled()) {
		return;
	}

	var oItem = this._findItemByFirstCharacter(String.fromCharCode(oEvent.which));	// jQuery oEvent.which normalizes oEvent.keyCode and oEvent.charCode

	if (oItem) {

		this._setSelectedItem({
			item: oItem,
			id: oItem.getId(),
			key: oItem.getKey(),
			fireChangeEvent: true,
			suppressInvalidate: true
		});

		this._focusItem(oItem._oListItem);
	}
};

/**
 * Handle when F4 or Alt + DOWN arrow are pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsapshow = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Select
	oEvent.setMarked();

	// note: prevent browser address bar to be open in ie9, when F4 is pressed
	if (oEvent.keyCode === jQuery.sap.KeyCodes.F4) {
		oEvent.preventDefault();
	}

	if (this.isOpen()) {
		this.close();
		return;
	}

	if (this.hasContent()) {
		this.open(true);
	}
};

/**
 * Handle when Alt + UP arrow are pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsaphide = sap.m.Select.prototype.onsapshow;

/**
 * Handle when escape is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsapescape = function(oEvent) {

	if (this.isOpen()) {

		// mark the event for components that needs to know if the event was handled by the Select
		oEvent.setMarked();

		this.close();
	}
};

/**
 * Handle when enter is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsapenter = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Select
	oEvent.setMarked();

	this.close();
};

/**
 * Handle when keyboard DOWN arrow is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsapdown = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Select
	oEvent.setMarked();

	// note: prevent document scrolling when arrow keys are pressed
	oEvent.preventDefault();

	var oItem,
		iIndexOfSelectedItem = this.indexOfItem(this.getSelectedItem());

	// if the current selected item it the last one, do nothing
	if (iIndexOfSelectedItem === this.indexOfItem(this._findLastEnabledItem())) {
		return;
	}

	oItem = this._findFirstEnabledItem(this.getItems().splice(iIndexOfSelectedItem + 1));

	if (oItem) {

		this._setSelectedItem({
			item: oItem,
			id: oItem.getId(),
			key: oItem.getKey(),
			fireChangeEvent: true,
			suppressInvalidate: true
		});

		this._focusItem(oItem._oListItem);
	}
};

/**
 * Handle when keyboard UP arrow is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsapup = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Select
	oEvent.setMarked();

	// note: prevent document scrolling when arrow keys are pressed
	oEvent.preventDefault();

	var oItem,
		iIndexOfSelectedItem = this.indexOfItem(this.getSelectedItem()),
		oFirstItem = this._findFirstEnabledItem();

	// if the current selected item it the first one, do nothing
	if (iIndexOfSelectedItem === this.indexOfItem(oFirstItem)) {
		return;
	}

	oItem = this._findLastEnabledItem(this.getItems().splice(0, iIndexOfSelectedItem));

	if (oItem) {

		this._setSelectedItem({
			item: oItem,
			id: oItem.getId(),
			key: oItem.getKey(),
			fireChangeEvent: true,
			suppressInvalidate: true
		});

		this._focusItem(this._getSelectedListItem());
	}
};

/**
 * Handle Home key pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsaphome = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Select
	oEvent.setMarked();

	// note: prevent document scrolling when Home key is pressed
	oEvent.preventDefault();

	var oItem = this._findFirstEnabledItem();

	if (oItem) {

		this._setSelectedItem({
			item: oItem,
			id: oItem.getId(),
			key: oItem.getKey(),
			fireChangeEvent: true,
			suppressInvalidate: true
		});

		this._focusItem(this._getSelectedListItem());
	}
};

/**
 * Handle End key pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsapend = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Select
	oEvent.setMarked();

	// note: prevent document scrolling when End key is pressed
	oEvent.preventDefault();

	var oItem = this._findLastEnabledItem(this.getItems());

	if (oItem) {

		this._setSelectedItem({
			item: oItem,
			id: oItem.getId(),
			key: oItem.getKey(),
			fireChangeEvent: true,
			suppressInvalidate: true
		});

		this._focusItem(this._getSelectedListItem());
	}
};

/**
 * Handle when page down key is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsappagedown = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Select
	oEvent.setMarked();

	// note: prevent document scrolling when page down key is pressed
	oEvent.preventDefault();

	this._setSelectedItemByIndex(this.indexOfItem(this.getSelectedItem()) + 20);
};

/**
 * Handle when page up key is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsappageup = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Select
	oEvent.setMarked();

	// note: prevent document scrolling when page up key is pressed
	oEvent.preventDefault();

	this._setSelectedItemByIndex(this.indexOfItem(this.getSelectedItem()) - 20);
};

/* =========================================================== */
/* API methods                                                 */
/* =========================================================== */

/* ----------------------------------------------------------- */
/* protected methods                                           */
/* ----------------------------------------------------------- */

/**
 * This hook method can be used to add additional content.
 *
 * @param {sap.m.Dialog | sap.m.Popover} [oPopup]
 * @protected
 * @name sap.m.Select#addContent
 */
sap.m.Select.prototype.addContent = function(oPopup) {};

/**
 * Getter for the Select Popup.
 *
 * @returns {sap.m.Dialog | sap.m.Popover | null}
 * @protected
 */
sap.m.Select.prototype.getPopup = function() {
	return this._oPopup || null;
};

/**
 * Determines whether the Select has content or not.
 *
 * @returns {boolean}
 * @protected
 */
sap.m.Select.prototype.hasContent = function() {
	return !!this.getItems().length;
};

/**
 * This hook method is called before the Select Popup is rendered.
 *
 * @protected
 * @name sap.m.Select#onBeforeRenderingPopup
 */
sap.m.Select.prototype.onBeforeRenderingPopup = function() {
	var fnOnBeforeRenderingPopupType = this["_onBeforeRendering" + this._getPopupType()];

	this._removeFocusableParentPopup(this._getParentPopup());

	fnOnBeforeRenderingPopupType && fnOnBeforeRenderingPopupType.call(this);
};

/**
 * This hook method is called after the Select Popup is rendered.
 *
 * @protected
 * @name sap.m.Select#onAfterRenderingPopup
 */
sap.m.Select.prototype.onAfterRenderingPopup = function() {
	var fnOnAfterRenderingPopupType = this["_onAfterRendering" + this._getPopupType()];

	this._addFocusableParentPopup(this._getParentPopup());

	fnOnAfterRenderingPopupType && fnOnAfterRenderingPopupType.call(this);
};

/**
 * Open the Select.
 *
 * @returns {sap.m.Select} <code>this</code> to allow method chaining.
 * @protected
 * @since 1.16
 * @name sap.m.Select#open
 * @function
 */
sap.m.Select.prototype.open = function(/* only for internal uses */ bSuppressScrollIntoView) {

	this.focus();

	// initialize the pop-up lazily
	this._initPopup();

	this.getPopup().open();

	return this;
};

/* ----------------------------------------------------------- */
/* public methods                                              */
/* ----------------------------------------------------------- */

/**
 * Setter for association <code>selectedItem</code>.
 *
 * @param {string | sap.ui.core.Item | null} vItem new value for association <code>selectedItem</code>
 *    Id of an sap.ui.core.Item which becomes the new target of this <code>selectedItem</code> association.
 *    Alternatively, an sap.ui.core.Item instance may be given or null.
 *    If the value of null is provided the first enabled item will be selected (if any).
 *
 * @returns {sap.m.Select} <code>this</code> to allow method chaining.
 * @public
 * @name sap.m.Select#setSelectedItem
 * @function
 */
sap.m.Select.prototype.setSelectedItem = function(vItem) {

	if (typeof vItem === "string") {
		vItem = sap.ui.getCore().byId(vItem);
	}

	if (!(vItem instanceof sap.ui.core.Item) && vItem !== null) {
		jQuery.sap.log.warning('Warning: setSelectedItem() "vItem" has to be an instance of sap.ui.core.Item, a valid sap.ui.core.Item id, or null on', this);
		return this;
	}

	if (!vItem) {
		vItem = this._findFirstEnabledItem();
	}

	// Update and synchronize "selectedItem" association,
	// "selectedKey" and "selectedItemId" properties.
	this._setSelectedItem({
		item: vItem || null,
		id: vItem ? vItem.getId() : "",
		key: vItem ? vItem.getKey() : "",
		suppressInvalidate: true
	});

	return this;
};

/**
 * Setter for property <code>selectedItemId</code>.
 *
 * Default value is an empty string <code>""</code> or <code>undefined</code>.
 * If the provided <code>vItem</code> has a default value,
 * the first enabled item will be selected (if any).
 *
 * @param {string | undefined} vItem new value for property <code>selectedItemId</code>.
 * @returns {sap.m.Select} <code>this</code> to allow method chaining.
 * @public
 * @since 1.12
 * @name sap.m.Select#setSelectedItemId
 * @function
 */
sap.m.Select.prototype.setSelectedItemId = function(vItem) {
	var oItem = sap.ui.getCore().byId(vItem);

	if (!(oItem instanceof sap.ui.core.Item) && vItem !== "" && vItem !== undefined) {
		jQuery.sap.log.warning('Warning: setSelectedItemId() "sItem" has to be a string id of an sap.ui.core.Item instance, an empty string or undefined on', this);
		return this;
	}

	if (!oItem) {
		oItem = this._findFirstEnabledItem();
	}

	// Update and synchronize "selectedItem" association,
	// "selectedKey" and "selectedItemId" properties.
	this._setSelectedItem({
		item: oItem || null,
		id: oItem ? oItem.getId() : "",
		key: oItem ? oItem.getKey() : "",
		suppressInvalidate: true
	});

	return this;
};

/**
 * Setter for property <code>selectedKey</code>.
 *
 * Default value is an empty string <code>""</code> or <code>undefined</code>.
 *
 * If the provided <code>sKey</code> has a default value,
 * the first enabled item will be selected (if any).
 * In the case that an item has the default key value, it will be selected instead.
 *
 * @param {string} sKey new value for property <code>selectedKey</code>.
 * @returns {sap.m.Select} <code>this</code> to allow method chaining.
 * @public
 * @since 1.11
 * @name sap.m.Select#setSelectedKey
 * @function
 */
sap.m.Select.prototype.setSelectedKey = function(sKey) {
	var sKey = this.validateProperty("selectedKey", sKey),
		oItem = this.getItemByKey(sKey);

	if (oItem || (sKey === "")) {

		// If the "sKey" value is an empty string "" or undefined,
		// the first enabled item will be selected (if any).
		// In the case that an item has a default key value, it will be selected instead.
		if (!oItem && sKey === "") {
			oItem = this._findFirstEnabledItem();
		}

		// Update and synchronize "selectedItem" association,
		// "selectedKey" and "selectedItemId" properties.
		this._setSelectedItem({
			item: oItem || null,
			id: oItem ? oItem.getId() : "",
			key: oItem ? oItem.getKey() : "",
			suppressInvalidate: true
		});

		return this;
	}

	// note: setSelectedKey() method sometimes is called
	// before the items are added, in this case the "selectedItem" association
	// and "selectedItemId" property need to be updated in onBeforeRendering()
	return this.setProperty("selectedKey", sKey);	// update "selectedKey" property, re-rendering is needed
};

/**
 * Retrieves the item from the aggregation named <code>items</code> at the given 0-based index.
 *
 * @param {int} iIndex Index of the item to return.
 * @returns {sap.ui.core.Item | null} Item at the given index, or null if none.
 * @public
 * @since 1.16
 * @name sap.m.Select#getItemAt
 * @function
 */
sap.m.Select.prototype.getItemAt = function(iIndex) {
	return this.getItems()[+iIndex] || null;
};

/**
 * Retrieves the selected item object from the aggregation named <code>items</code>.
 *
 * @returns {sap.ui.core.Item | null} The current target of the <code>selectedItem</code> association, or null.
 * @public
 * @name sap.m.Select#getSelectedItem
 * @function
 */
sap.m.Select.prototype.getSelectedItem = function() {
	var vSelectedItem = this.getAssociation("selectedItem");

	return (vSelectedItem === null) ? null : sap.ui.getCore().byId(vSelectedItem) || null;
};

/**
 * Retrieves the first item from the aggregation named <code>items</code>.
 *
 * @returns {sap.ui.core.Item | null} The first item, or null if there are no items.
 * @public
 * @since 1.16
 * @name sap.m.Select#getFirstItem
 * @function
 */
sap.m.Select.prototype.getFirstItem = function() {
	return this.getItems()[0] || null;
};

/**
 * Retrieves the last item from the aggregation named <code>items</code>.
 *
 * @returns {sap.ui.core.Item | null} The last item, or null if there are no items.
 * @public
 * @since 1.16
 * @name sap.m.Select#getLastItem
 * @function
 */
sap.m.Select.prototype.getLastItem = function() {
	var aItems = this.getItems();

	return aItems[aItems.length - 1] || null;
};

/**
 * Retrieves the first item object from the aggregation named <code>items</code>,
 * based on the item key value supplied.
 *
 * @param {string} sKey An item key that specifies the item to retrieve.
 * @returns {sap.ui.core.Item | null}
 * @public
 * @since 1.16
 * @name sap.m.Select#getItemByKey
 * @function
 */
sap.m.Select.prototype.getItemByKey = function(sKey) {
	for (var i = 0, aItems = this.getItems(); i < aItems.length; i++) {
		if (aItems[i].getKey() === sKey) {
			return aItems[i];
		}
	}

	return null;
};

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.core.Item} vItem the item to remove or its index or id.
 * @returns {sap.ui.core.Item} the removed item or null.
 * @public
 * @name sap.m.Select#removeItem
 * @function
 */
sap.m.Select.prototype.removeItem = function(vItem) {
	var oItem;

	// remove the item
	vItem = this.removeAggregation("items", vItem);

	// if the removed item is selected
	if (vItem && vItem.getId() === this.getAssociation("selectedItem")) {

		oItem = this._findFirstEnabledItem();

		if (oItem) {

			this._setSelectedItem({
				item: oItem,
				id: oItem.getId(),
				key: oItem.getKey()
			});
		}
	}

	return vItem;
};

/**
 * Checks if the Select is open. It returns true when the Select is currently open,
 * this includes opening and closing animations, otherwise it returns false.
 *
 * @returns {boolean} Determines whether the Select is currently open (this includes opening and closing animations).
 * @public
 * @since 1.16
 * @name sap.m.Select#isOpen
 * @function
 */
sap.m.Select.prototype.isOpen = function() {
	var oPopup = this.getPopup();

	return !!(oPopup && oPopup.isOpen());
};

/**
 * Closes the Select.
 *
 * @returns {sap.m.Select} <code>this</code> to allow method chaining.
 * @public
 * @since 1.16
 * @name sap.m.Select#close
 * @function
 */
sap.m.Select.prototype.close = function() {
	var oPopup = this.getPopup();

	oPopup && oPopup.close();

	return this;
};