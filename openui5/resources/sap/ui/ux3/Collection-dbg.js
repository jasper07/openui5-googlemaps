/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.Collection.
jQuery.sap.declare("sap.ui.ux3.Collection");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new Collection.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getEditable editable} : boolean (default: false)</li>
 * <li>{@link #getMultiSelection multiSelection} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Item[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedItems selectedItems} : string | sap.ui.core.Item</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.Collection#event:selectionChanged selectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Collection#event:propertyChanged propertyChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Collection
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.9.0
 * @name sap.ui.ux3.Collection
 */
sap.ui.core.Element.extend("sap.ui.ux3.Collection", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"title" : {type : "string", group : "Appearance", defaultValue : null},
		"editable" : {type : "boolean", group : "Appearance", defaultValue : false},
		"multiSelection" : {type : "boolean", group : "Accessibility", defaultValue : false}
	},
	aggregations : {
    	"items" : {type : "sap.ui.core.Item", multiple : true, singularName : "item"}
	},
	associations : {
		"selectedItems" : {type : "sap.ui.core.Item", multiple : true, singularName : "selectedItem"}
	},
	events : {
		"selectionChanged" : {}, 
		"propertyChanged" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.Collection with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.Collection.extend
 * @function
 */

sap.ui.ux3.Collection.M_EVENTS = {'selectionChanged':'selectionChanged','propertyChanged':'propertyChanged'};


/**
 * Getter for property <code>title</code>.
 * Name for the collection
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ui.ux3.Collection#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Collection#setTitle
 * @function
 */


/**
 * Getter for property <code>editable</code>.
 * If a collection is editable an edit button will be displayed below the list of items
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.ui.ux3.Collection#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Collection#setEditable
 * @function
 */


/**
 * Getter for property <code>multiSelection</code>.
 * Allow multi selection of items in collection
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>multiSelection</code>
 * @public
 * @name sap.ui.ux3.Collection#getMultiSelection
 * @function
 */

/**
 * Setter for property <code>multiSelection</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bMultiSelection  new value for property <code>multiSelection</code>
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Collection#setMultiSelection
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * Items in the collection
 * 
 * @return {sap.ui.core.Item[]}
 * @public
 * @name sap.ui.ux3.Collection#getItems
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
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Collection#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Item}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Collection#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.core.Item} vItem the item to remove or its index or id
 * @return {sap.ui.core.Item} the removed item or null
 * @public
 * @name sap.ui.ux3.Collection#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.Collection#removeAllItems
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
 * @name sap.ui.ux3.Collection#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Collection#destroyItems
 * @function
 */


/**
 * Contains all items that are currently selected
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.ux3.Collection#getSelectedItems
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Item} vSelectedItem
 *    Id of a selectedItem which becomes an additional target of this <code>selectedItems</code> association.
 *    Alternatively, a selectedItem instance may be given. 
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Collection#addSelectedItem
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Item} vSelectedItem the selectedItem to remove or its index or id
 * @return {string} the id of the removed selectedItem or null
 * @public
 * @name sap.ui.ux3.Collection#removeSelectedItem
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.Collection#removeAllSelectedItems
 * @function
 */

	
/**
 * Fired when ever the selected items changer 
 *
 * @name sap.ui.ux3.Collection#selectionChanged
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'selectionChanged' event of this <code>sap.ui.ux3.Collection</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Collection</code>.<br/> itself. 
 *  
 * Fired when ever the selected items changer 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Collection</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Collection#attachSelectionChanged
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'selectionChanged' event of this <code>sap.ui.ux3.Collection</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Collection#detachSelectionChanged
 * @function
 */

/**
 * Fire event selectionChanged to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.Collection#fireSelectionChanged
 * @function
 */


/**
 * Fires if a property has changed, and the collection inspector needs to do something after that 
 *
 * @name sap.ui.ux3.Collection#propertyChanged
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'propertyChanged' event of this <code>sap.ui.ux3.Collection</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Collection</code>.<br/> itself. 
 *  
 * Fires if a property has changed, and the collection inspector needs to do something after that 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Collection</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Collection#attachPropertyChanged
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'propertyChanged' event of this <code>sap.ui.ux3.Collection</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Collection#detachPropertyChanged
 * @function
 */

/**
 * Fire event propertyChanged to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.Collection#firePropertyChanged
 * @function
 */


// Start of sap\ui\ux3\Collection.js
jQuery.sap.require("sap.ui.model.SelectionModel");


sap.ui.ux3.Collection.prototype.init = function() {
	this.oCollectionSelection = new sap.ui.model.SelectionModel(sap.ui.model.SelectionModel.SINGLE_SELECTION);
};

/**
 * Set multi selection for selection model
 *
 * @public
 */
sap.ui.ux3.Collection.prototype.setMultiSelection = function(bMultiSelection) {
	if (bMultiSelection) {
		this.oCollectionSelection.setSelectionMode(sap.ui.model.SelectionModel.MULTI_SELECTION);
	} else {
		this.oCollectionSelection.setSelectionMode(sap.ui.model.SelectionModel.SINGLE_SELECTION);
		this.removeAllSelectedItems();
	}
	return this.setProperty("multiSelection",bMultiSelection);
};

/**
 * Set editable
 *
 * @public
 */
sap.ui.ux3.Collection.prototype.setEditable = function(bEditable) {
	this.setProperty("editable",bEditable,true);
	this.firePropertyChanged();
};

/**
 * Set title
 *
 * @public
 */
sap.ui.ux3.Collection.prototype.setTitle = function(sTitle) {
	this.setProperty("title",sTitle);
	this.fireEvent('_titleChanged', { newTitle: this.getProperty("title") });
};


/**
 *
 * @param {string | sap.ui.core.Item} vSelectedItem
 *    Id of a selectedItem which becomes an additional target of this <code>selectedItems</code> association.
 *    Alternatively, a selectedItem instance may be given. 
 * @return {sap.ui.ux3.Collection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Collection#addSelectedItem
 * @function
 */
sap.ui.ux3.Collection.prototype.addSelectedItem = function(vSelectedItem) {
	var oSelectedItem;
	if (typeof vSelectedItem == "object") {
		oSelectedItem = vSelectedItem;
	} else {
		oSelectedItem = sap.ui.getCore().byId(vSelectedItem);
	}
	if (jQuery.inArray(oSelectedItem.getId(),this.getSelectedItems()) >= 0) {
		return this;
	}
	var iIndex = this.indexOfItem(oSelectedItem);
	if (iIndex > -1) {
		if (this.oCollectionSelection.getSelectionMode() == sap.ui.model.SelectionModel.SINGLE_SELECTION) {
			this.removeAllAssociation("selectedItems",true);
			this.oCollectionSelection.clearSelection();
		}
		this.oCollectionSelection.addSelectionInterval(iIndex,iIndex);
	}
	this.addAssociation("selectedItems",vSelectedItem,true);
	this.fireSelectionChanged();
	return this;
};

/**
 * @param {int | string | sap.ui.core.Item} vSelectedItem the selectedItem to remove or its index or id
 * @return {string} the id of the removed selectedItem or null
 * @public
 * @name sap.ui.ux3.Collection#removeSelectedItem
 * @function
 */
sap.ui.ux3.Collection.prototype.removeSelectedItem = function(vSelectedItem) {
	//Don't remove the item if there is only one item selected
	if (this.getSelectedItems().length <= 1) {
		return;
	}
	var sRemovedObject = this.removeAssociation("selectedItems",vSelectedItem,true);
	var iIndex;
	if (typeof vSelectedItem == "object") {
		iIndex = this.indexOfItem(vSelectedItem);
	} else {
		iIndex = this.indexOfItem(sap.ui.getCore().byId(vSelectedItem));
	}
	if (iIndex > -1) {
		this.oCollectionSelection.removeSelectionInterval(iIndex,iIndex);
	}
	this.fireSelectionChanged();
	return sRemovedObject;
};

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.Collection#removeAllSelectedItems
 * @function
 */
sap.ui.ux3.Collection.prototype.removeAllSelectedItems = function() {
	var aRemovedObjects = this.removeAllAssociation("selectedItems",true);
	this.oCollectionSelection.clearSelection();
	if (this.getItems().length > 0) {
		this.addSelectedItem(this.getItems()[0]);
	} else {
		this.fireSelectionChanged();
	}
	return aRemovedObjects;
};