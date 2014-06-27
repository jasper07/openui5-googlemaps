/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.CollectionInspector.
jQuery.sap.declare("sap.ui.ux3.CollectionInspector");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new CollectionInspector.
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
 * <li>{@link #getSidebarVisible sidebarVisible} : boolean (default: true)</li>
 * <li>{@link #getFitParent fitParent} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCollections collections} : sap.ui.ux3.Collection[]</li>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedCollection selectedCollection} : string | sap.ui.ux3.Collection</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.CollectionInspector#event:collectionSelected collectionSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.CollectionInspector#event:itemSelectionChanged itemSelectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.CollectionInspector#event:editCollection editCollection} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * CollectionInspector
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.9.0
 * @name sap.ui.ux3.CollectionInspector
 */
sap.ui.core.Control.extend("sap.ui.ux3.CollectionInspector", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"sidebarVisible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"fitParent" : {type : "boolean", group : "Appearance", defaultValue : true}
	},
	aggregations : {
    	"collections" : {type : "sap.ui.ux3.Collection", multiple : true, singularName : "collection"}, 
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	},
	associations : {
		"selectedCollection" : {type : "sap.ui.ux3.Collection", multiple : false}
	},
	events : {
		"collectionSelected" : {}, 
		"itemSelectionChanged" : {}, 
		"editCollection" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.CollectionInspector with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.CollectionInspector.extend
 * @function
 */

sap.ui.ux3.CollectionInspector.M_EVENTS = {'collectionSelected':'collectionSelected','itemSelectionChanged':'itemSelectionChanged','editCollection':'editCollection'};


/**
 * Getter for property <code>sidebarVisible</code>.
 * Defines if the list of collection items is visible on the left
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>sidebarVisible</code>
 * @public
 * @name sap.ui.ux3.CollectionInspector#getSidebarVisible
 * @function
 */

/**
 * Setter for property <code>sidebarVisible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bSidebarVisible  new value for property <code>sidebarVisible</code>
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#setSidebarVisible
 * @function
 */


/**
 * Getter for property <code>fitParent</code>.
 * If set to true, control will fit parents content area
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>fitParent</code>
 * @public
 * @name sap.ui.ux3.CollectionInspector#getFitParent
 * @function
 */

/**
 * Setter for property <code>fitParent</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFitParent  new value for property <code>fitParent</code>
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#setFitParent
 * @function
 */


/**
 * Getter for aggregation <code>collections</code>.<br/>
 * Collections which are displayed in the COllectionInspector
 * 
 * @return {sap.ui.ux3.Collection[]}
 * @public
 * @name sap.ui.ux3.CollectionInspector#getCollections
 * @function
 */


/**
 * Inserts a collection into the aggregation named <code>collections</code>.
 *
 * @param {sap.ui.ux3.Collection}
 *          oCollection the collection to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the collection should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the collection is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the collection is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#insertCollection
 * @function
 */

/**
 * Adds some collection <code>oCollection</code> 
 * to the aggregation named <code>collections</code>.
 *
 * @param {sap.ui.ux3.Collection}
 *            oCollection the collection to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#addCollection
 * @function
 */

/**
 * Removes an collection from the aggregation named <code>collections</code>.
 *
 * @param {int | string | sap.ui.ux3.Collection} vCollection the collection to remove or its index or id
 * @return {sap.ui.ux3.Collection} the removed collection or null
 * @public
 * @name sap.ui.ux3.CollectionInspector#removeCollection
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>collections</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.Collection[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.CollectionInspector#removeAllCollections
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.Collection</code> in the aggregation named <code>collections</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.Collection}
 *            oCollection the collection whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.CollectionInspector#indexOfCollection
 * @function
 */
	

/**
 * Destroys all the collections in the aggregation 
 * named <code>collections</code>.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#destroyCollections
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * All controls that are currently displayed
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.ux3.CollectionInspector#getContent
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
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.ux3.CollectionInspector#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.CollectionInspector#removeAllContent
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
 * @name sap.ui.ux3.CollectionInspector#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#destroyContent
 * @function
 */


/**
 * Collection which is currently selected
 *
 * @return {string} Id of the element which is the current target of the <code>selectedCollection</code> association, or null
 * @public
 * @name sap.ui.ux3.CollectionInspector#getSelectedCollection
 * @function
 */

/**
 * Collection which is currently selected
 *
 * @param {string | sap.ui.ux3.Collection} vSelectedCollection 
 *    Id of an element which becomes the new target of this <code>selectedCollection</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#setSelectedCollection
 * @function
 */


	
/**
 * Event is fired if user selects a collection 
 *
 * @name sap.ui.ux3.CollectionInspector#collectionSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'collectionSelected' event of this <code>sap.ui.ux3.CollectionInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.CollectionInspector</code>.<br/> itself. 
 *  
 * Event is fired if user selects a collection 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.CollectionInspector</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#attachCollectionSelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'collectionSelected' event of this <code>sap.ui.ux3.CollectionInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#detachCollectionSelected
 * @function
 */

/**
 * Fire event collectionSelected to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.CollectionInspector#fireCollectionSelected
 * @function
 */


/**
 * Fires when an item in a collection is selected 
 *
 * @name sap.ui.ux3.CollectionInspector#itemSelectionChanged
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'itemSelectionChanged' event of this <code>sap.ui.ux3.CollectionInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.CollectionInspector</code>.<br/> itself. 
 *  
 * Fires when an item in a collection is selected 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.CollectionInspector</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#attachItemSelectionChanged
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'itemSelectionChanged' event of this <code>sap.ui.ux3.CollectionInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#detachItemSelectionChanged
 * @function
 */

/**
 * Fire event itemSelectionChanged to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.CollectionInspector#fireItemSelectionChanged
 * @function
 */


/**
 * Fires when the edit button is clicked 
 *
 * @name sap.ui.ux3.CollectionInspector#editCollection
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'editCollection' event of this <code>sap.ui.ux3.CollectionInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.CollectionInspector</code>.<br/> itself. 
 *  
 * Fires when the edit button is clicked 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.CollectionInspector</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#attachEditCollection
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'editCollection' event of this <code>sap.ui.ux3.CollectionInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#detachEditCollection
 * @function
 */

/**
 * Fire event editCollection to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.CollectionInspector#fireEditCollection
 * @function
 */


// Start of sap\ui\ux3\CollectionInspector.js
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation"); 

/**
 * Initialization the control
 *
 * @private
 */
sap.ui.ux3.CollectionInspector.prototype.init = function() {

	var that = this;

	if (!this._oItemNavigation) {
		this._oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
		this._oItemNavigation.setCycling(false);
		this.addDelegate(this._oItemNavigation);
	}

	var oToggleButton = new sap.ui.commons.ToggleButton(this.getId() + "-toggleButton");
	oToggleButton.setParent(this);
	oToggleButton.setTooltip("This button opens and closes the sidebar");
	oToggleButton.attachPress(function() {
		if (oToggleButton.getPressed()) {
			that.openSidebar();
		} else {
			that.closeSidebar();
		}
	});
	this._oToggleButton = oToggleButton;

	var oCollectionSelector = new sap.ui.commons.SegmentedButton(this.getId() + "-selector");

	oCollectionSelector.attachSelect(function(oEvent) {
		var iCollectionIndex = this.indexOfButton(sap.ui.getCore().byId(this.getSelectedButton()));
		var oCollection = that.getCollections()[iCollectionIndex];
		that.setSelectedCollection(oCollection);
		that.fireCollectionSelected({
			collection: oCollection
		});
		that.openSidebar();
	});

	this._oCollectionSelector = oCollectionSelector;

	var oEditButton = new sap.ui.commons.Button();
	oEditButton.addStyleClass("sapUiUx3EditCollectionButton");
	oEditButton.setText("Collection");
	oEditButton.setTooltip("This button opens an edit dialog for the current collection");
	oEditButton.attachPress(function() {
		that.fireEditCollection();
	});
	this._oEditButton = oEditButton;
};

/**
 * Destroys elements created by the control
 *
 * @private
 */
sap.ui.ux3.CollectionInspector.prototype.exit = function() {
	this._oToggleButton.destroy();
	this._oToggleButton = null;
	this._oEditButton.destroy();
	this._oEditButton = null;
	this._oCollectionSelector.destroy();
	this._oCollectionSelector = null;
	if (this._oItemNavigation) {
		this.removeDelegate(this._oItemNavigation);
		this._oItemNavigation.destroy();
		delete this._oItemNavigation;
	}
};

/**
 * called before the control will be rendered
 *
 * @private
 */
sap.ui.ux3.CollectionInspector.prototype.onBeforeRendering = function() {
	this._oToggleButton.setPressed(this.getSidebarVisible());
};

/**
 * called after control has been rendered
 *
 * @private
 */
sap.ui.ux3.CollectionInspector.prototype.onAfterRendering = function() {
	if (!this.getSelectedCollection()) {
		if (this.getCollections().length > 0) {
			this.setSelectedCollection(this.getCollections()[0]);
		}
	} else {
		var oSelectedCollection = sap.ui.getCore().byId(this.getSelectedCollection());
		if (oSelectedCollection.getSelectedItems().length == 0 && oSelectedCollection.getItems().length > 0) {
			oSelectedCollection.addSelectedItem(oSelectedCollection.getItems()[0]);
		}
	}
	this.setElementsHeight();
	this.updateItemNavigation();
	this.refreshSelectionHighlighting();
};

/**
 * called when the control is clicked
 *
 * @private
 */
sap.ui.ux3.CollectionInspector.prototype.onclick = function(oEvent) {
	var oTarget = oEvent.target;
	if (jQuery(oTarget).hasClass("sapUiUx3CICollectionListItem")) {
		var oSelectedCollection = sap.ui.getCore().byId(this.getSelectedCollection());
		var iIndex = jQuery(oTarget).index();
		if (jQuery.inArray(oTarget.id,oSelectedCollection.getSelectedItems()) >= 0) {
			oSelectedCollection.removeSelectedItem(oTarget.id);
		} else {
			oSelectedCollection.addSelectedItem(oTarget.id);
		}
		this.refreshSelectionHighlighting();
		this.fireItemSelectionChanged({
			selectedItems: oSelectedCollection.getSelectedItems()
		});
	}
};


/**
 * returns instance of toggle button
 *
 * @private
 */
sap.ui.ux3.CollectionInspector.prototype.getToggleButton = function() {
	return this._oToggleButton;
};

/**
 * returns instance of collection selector
 *
 * @private
 */
sap.ui.ux3.CollectionInspector.prototype.getCollectionSelector = function() {
	return this._oCollectionSelector;
};

/**
 * rerender the sidebar if different collection is selected
 *
 * @private
 */
sap.ui.ux3.CollectionInspector.prototype.rerenderSidebar = function() {
	var oCurrentCollection = sap.ui.getCore().byId(this.getSelectedCollection());
	if (oCurrentCollection && oCurrentCollection.getEditable()) {
		this._oEditButton.setVisible(true);
	} else {
		this._oEditButton.setVisible(false);
	}
	var $Content = this.$("sidebar");
	if ($Content.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		this.getRenderer().renderSidebar(rm, this);
		rm.flush($Content[0]);
		rm.destroy();
	}
	if (oCurrentCollection && oCurrentCollection.getEditable()) {
		this.$("sidebar").addClass("sapUiUx3CIWithEditButton");
	} else {
		this.$("sidebar").removeClass("sapUiUx3CIWithEditButton");
	}
	this.updateItemNavigation();
	this.refreshSelectionHighlighting();
};

/**
 * load all dom refs to into the item navigation
 *
 * @private
 */
sap.ui.ux3.CollectionInspector.prototype.updateItemNavigation = function() {
	var aItemDomRefs = [];
	var $Items = this.$("sidebar").find('li');
	jQuery.each($Items, function(iIndex, $DomRef) {
		aItemDomRefs.push($DomRef);
	});
	this._oItemNavigation.setItemDomRefs(aItemDomRefs);
	this._oItemNavigation.setRootDomRef(this.$("sidebar ul")[0]);
};

/**
 * rerender the content if different collection or collection item is selected
 *
 * @param int Index of the collection that should be rendered
 *
 * @private
 */
sap.ui.ux3.CollectionInspector.prototype.rerenderContent = function() {
	var $Content = this.$("content");
	if ($Content.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		this.getRenderer().renderContent(rm, this);
		rm.flush($Content[0]);
		rm.destroy();
	}
	this.setElementsHeight();
};

/**
 * Calculate height, so that both the sidebar and the content have the same height
 *
 * @private
 */
sap.ui.ux3.CollectionInspector.prototype.setElementsHeight = function() {
	if (this.getFitParent()) return;

	var oSidebar = this.$("sidebar");
	var oContent = this.$("content");

	var iContentHeight = oContent.outerHeight(true);
	var iContentMargin = oContent.outerHeight(true) - oContent.height();
	var iSidebarMargin = oSidebar.outerHeight(true) - oSidebar.height();

	oSidebar.height(Math.max(200, iContentHeight) - iSidebarMargin);
	oContent.height(Math.max(200, iContentHeight) - iContentMargin);
};

/**
 * Opens the sidebar
 *
 * @public
 */
sap.ui.ux3.CollectionInspector.prototype.openSidebar = function() {
	var $this = this.$();
	var $Sidebar = this.$("sidebar");
	var $Content = this.$("content");
	$Sidebar.stop(true, true).animate({ width : 150 }, 300, function() {
		$Sidebar.css('width', '');
	});
	$Content.stop(true, true).animate({ left : 150 }, 300, function() {
		$Content.css('left', '');
	});
	$this.removeClass("sapUiUx3CISidebarClosed");
	$this.addClass("sapUiUx3CISidebarOpened");
	this._oToggleButton.setPressed(true);
};

/**
 * Closes the siedebar
 *
 * @public
 */
sap.ui.ux3.CollectionInspector.prototype.closeSidebar = function() {
	var $this = this.$();
	var $Sidebar = this.$("sidebar");
	var $Content = this.$("content");
	$Sidebar.stop(true, true).animate({ width : 0 }, 300, function() {
		$Sidebar.css('width', '');
	});
	$Content.stop(true, true).animate({ left : 0 }, 300, function() {
		$Content.css('left', '');
	});
	$this.removeClass("sapUiUx3CISidebarOpened");
	$this.addClass("sapUiUx3CISidebarClosed");
	this._oToggleButton.setPressed(false);
};

/**
 * Inserts a collection into the aggregation named <code>collections</code>.
 *
 * @param {sap.ui.ux3.Collection}
 *          oCollection the collection to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the collection should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the collection is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the collection is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#insertCollection
 * @function
 */
sap.ui.ux3.CollectionInspector.prototype.insertCollection = function(oCollection, iIndex) {
	var oButton = new sap.ui.commons.Button();
	oButton.setText(oCollection.getTitle());
	oCollection.attachEvent('_titleChanged', function(oEvent) {
		oButton.setText(oEvent.getParameter("newTitle"));
	});
	var that = this;
	oCollection.attachSelectionChanged(function() {
		that.refreshSelectionHighlighting();
	});
	oCollection.attachPropertyChanged(function() {
		that.rerenderSidebar();
	});
	this._oCollectionSelector.insertButton(oButton, iIndex);
	return this.insertAggregation("collections",oCollection, iIndex);
};

/**
 * Adds some collection <code>oCollection</code> 
 * to the aggregation named <code>collections</code>.
 *
 * @param {sap.ui.ux3.Collection}
 *            oCollection the collection to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#addCollection
 * @function
 */
sap.ui.ux3.CollectionInspector.prototype.addCollection = function(oCollection) {
	var oButton = new sap.ui.commons.Button();
	oButton.setText(oCollection.getTitle());
	oCollection.attachEvent('_titleChanged', function(oEvent) {
		oButton.setText(oEvent.getParameter("newTitle"));
	});
	var that = this;
	oCollection.attachSelectionChanged(function() {
		that.refreshSelectionHighlighting();
	});
	oCollection.attachPropertyChanged(function() {
		that.rerenderSidebar();
	});
	this._oCollectionSelector.addButton(oButton);
	return this.addAggregation("collections",oCollection);
};

/**
 * Removes an collection from the aggregation named <code>collections</code>.
 *
 * @param {int | string | sap.ui.ux3.Collection} vCollection the collection to remove or its index or id
 * @return {sap.ui.ux3.Collection} the removed collection or null
 * @public
 * @name sap.ui.ux3.CollectionInspector#removeCollection
 * @function
 */
sap.ui.ux3.CollectionInspector.prototype.removeCollection = function(vCollection) {
	var iIndex;
	if (typeof vCollection == "object") {
		iIndex= this.indexOfCollection(vCollection);
	} else {
		iIndex = this.indexOfCollection(sap.ui.getCore().byId(vCollection));
	}
	var oButton = this._oCollectionSelector.getButtons()[iIndex];
	this._oCollectionSelector.removeButton(oButton);

	var oResult = this.removeAggregation("collections",vCollection);
	if (oResult && this.getSelectedCollection() == oResult.getId()) {
		this.setSelectedCollection(null);
	}
	return oResult;
};

/**
 * Removes all the controls in the aggregation named <code>collections</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.Collection[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.CollectionInspector#removeAllCollections
 * @function
 */
sap.ui.ux3.CollectionInspector.prototype.removeAllCollections = function() {
	this._oCollectionSelector.removeAllButtons();
	this.setSelectedCollection(null);
	return this.removeAllAggregation("collections");
};

/**
 * Destroys the collection aggregation
 * @return {sap.ui.ux3.CollectionInspector} this to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#destroyCollections
 * @function
 */
sap.ui.ux3.CollectionInspector.prototype.destroyCollections = function() {
	this._oCollectionSelector.destroyButtons();
	this.setSelectedCollection(null);
	return this.destroyAggregation("collections");
};

sap.ui.ux3.CollectionInspector.prototype.setSelectedCollection = function(oCollection) {
	this.setAssociation("selectedCollection",oCollection,true);
	if (!oCollection) { 
		this._oEditButton.setVisible(false);
	} else {
		//Select the corresponding item in top navigation
		this._oCollectionSelector.setSelectedButton(this._oCollectionSelector.getButtons()[this.indexOfCollection(oCollection)]);
		//Select first item if no item is selected
		var oSelectedCollection = sap.ui.getCore().byId(this.getSelectedCollection());
		if (oSelectedCollection.getSelectedItems().length == 0 && oSelectedCollection.getItems().length > 0) {
			oSelectedCollection.addSelectedItem(oSelectedCollection.getItems()[0]);
		}
	}
	this.rerenderSidebar();
	this.refreshSelectionHighlighting();
};

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
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#insertContent
 * @function
 */
sap.ui.ux3.CollectionInspector.prototype.insertContent = function(oContent, iIndex) {
	this.insertAggregation("content",oContent,iIndex,true);
	this.rerenderContent();
}

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#addContent
 * @function
 */
sap.ui.ux3.CollectionInspector.prototype.addContent = function(oContent) {
	this.addAggregation("content",oContent,true);
	this.rerenderContent();
}

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.ux3.CollectionInspector#removeContent
 * @function
 */
sap.ui.ux3.CollectionInspector.prototype.removeContent = function(vContent) {
	this.removeAggregation("content",vContent,true);
	this.rerenderContent();
}

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.CollectionInspector#removeAllContent
 * @function
 */
sap.ui.ux3.CollectionInspector.prototype.removeAllContent = function() {
	this.removeAllAggregation("content",true);
	this.rerenderContent();
}

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.CollectionInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.CollectionInspector#destroyContent
 * @function
 */
sap.ui.ux3.CollectionInspector.prototype.destroyContent = function() {
	this.destroyAggregation("content",true);
	this.rerenderContent();
}

/**
 * When the CI looses the focus, this method is called.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.ux3.CollectionInspector.prototype.onfocusout = function(oEvent) {
	var $Target = jQuery(oEvent.target);
	if ($Target.hasClass("sapUiUx3CICollectionListItem")) {
		$Target.removeClass("sapUiUx3CISidebarFoc");
	}
};

/**
 * When the CI gets the focus, this method is called.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.ux3.CollectionInspector.prototype.onfocusin = function(oEvent) {
	var $Target = jQuery(oEvent.target);
	if ($Target.hasClass("sapUiUx3CICollectionListItem")) {
		$Target.addClass("sapUiUx3CISidebarFoc");
	}
};

/**
 * Handles the sapenter event does not bubble
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.ux3.CollectionInspector.prototype.onsapenter = function(oEvent) {
	var $Target = jQuery(oEvent.target);
	if ($Target.hasClass("sapUiUx3CISidebarFoc")) {
		this.onclick(oEvent);
	}
	oEvent.stopPropagation();
};

/**
 * Handles the sapspace event does not bubble
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.ux3.CollectionInspector.prototype.onsapspace = function(oEvent) {
	var $Target = jQuery(oEvent.target);
	if ($Target.hasClass("sapUiUx3CISidebarFoc")) {
		this.onclick(oEvent);
	}
	oEvent.stopPropagation();
};

/**
 * Updates the css classes for the selected items
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.ux3.CollectionInspector.prototype.refreshSelectionHighlighting = function() {
	var aItems = this.$("sidebar").find('.sapUiUx3CICollectionListItem');
	var aSelectedItems;
	if (this.getSelectedCollection()) {
		aSelectedItems = sap.ui.getCore().byId(this.getSelectedCollection()).getSelectedItems();
	} else {
		aSelectedItems = [];
	}
	jQuery.each(aItems, function(iIndex, oItem) {
		if (jQuery.inArray(oItem.id,aSelectedItems) >= 0) {
			jQuery(oItem).addClass("sapUiUx3CICollectionListItemSelected");
			jQuery(oItem).attr("aria-selected",true);
		} else {
			jQuery(oItem).removeClass("sapUiUx3CICollectionListItemSelected");
			jQuery(oItem).attr("aria-selected",false);
		}
	});
};

/**
 * Return the edit button
 *
 * @public
 */
sap.ui.ux3.CollectionInspector.prototype.getEditButton = function() {
	return this._oEditButton;
};