/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.FacetFilterList.
jQuery.sap.declare("sap.ui.ux3.FacetFilterList");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new FacetFilterList.
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
 * <li>{@link #getMultiSelect multiSelect} : boolean (default: true)</li>
 * <li>{@link #getDisplaySecondaryValues displaySecondaryValues} : boolean (default: false)</li>
 * <li>{@link #getSelectedKeys selectedKeys} : string[]</li>
 * <li>{@link #getShowCounter showCounter} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.ListItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.FacetFilterList#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * List to be used with the FacetFilter control. The control is not intended to be used stand alone.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.FacetFilterList
 */
sap.ui.core.Control.extend("sap.ui.ux3.FacetFilterList", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"multiSelect" : {type : "boolean", group : "Behavior", defaultValue : true},
		"displaySecondaryValues" : {type : "boolean", group : "Misc", defaultValue : false},
		"selectedKeys" : {type : "string[]", group : "Misc", defaultValue : null},
		"showCounter" : {type : "boolean", group : "Behavior", defaultValue : true}
	},
	aggregations : {
    	"items" : {type : "sap.ui.core.ListItem", multiple : true, singularName : "item"}, 
    	"controls" : {type : "sap.ui.commons.ListBox", multiple : true, singularName : "control", visibility : "hidden"}
	},
	events : {
		"select" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.FacetFilterList with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.FacetFilterList.extend
 * @function
 */

sap.ui.ux3.FacetFilterList.M_EVENTS = {'select':'select'};


/**
 * Getter for property <code>title</code>.
 * The title of this list.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ui.ux3.FacetFilterList#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FacetFilterList#setTitle
 * @function
 */


/**
 * Getter for property <code>multiSelect</code>.
 * Specifies whether multiple or single selection is used.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>multiSelect</code>
 * @public
 * @name sap.ui.ux3.FacetFilterList#getMultiSelect
 * @function
 */

/**
 * Setter for property <code>multiSelect</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bMultiSelect  new value for property <code>multiSelect</code>
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FacetFilterList#setMultiSelect
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
 * @since 1.9.0
 * @name sap.ui.ux3.FacetFilterList#getDisplaySecondaryValues
 * @function
 */

/**
 * Setter for property <code>displaySecondaryValues</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDisplaySecondaryValues  new value for property <code>displaySecondaryValues</code>
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.0
 * @name sap.ui.ux3.FacetFilterList#setDisplaySecondaryValues
 * @function
 */


/**
 * Getter for property <code>selectedKeys</code>.
 * Array of type string containing the selected keys.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>selectedKeys</code>
 * @public
 * @name sap.ui.ux3.FacetFilterList#getSelectedKeys
 * @function
 */

/**
 * Setter for property <code>selectedKeys</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aSelectedKeys  new value for property <code>selectedKeys</code>
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FacetFilterList#setSelectedKeys
 * @function
 */


/**
 * Getter for property <code>showCounter</code>.
 * Specifies whether the counter for all entries is shown.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showCounter</code>
 * @public
 * @name sap.ui.ux3.FacetFilterList#getShowCounter
 * @function
 */

/**
 * Setter for property <code>showCounter</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowCounter  new value for property <code>showCounter</code>
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FacetFilterList#setShowCounter
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * The filter values that are presented as a list.
 * 
 * @return {sap.ui.core.ListItem[]}
 * @public
 * @name sap.ui.ux3.FacetFilterList#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.ListItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FacetFilterList#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.ListItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FacetFilterList#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.core.ListItem} vItem the item to remove or its index or id
 * @return {sap.ui.core.ListItem} the removed item or null
 * @public
 * @name sap.ui.ux3.FacetFilterList#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.ListItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.FacetFilterList#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.ListItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.ListItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.FacetFilterList#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FacetFilterList#destroyItems
 * @function
 */


/**
 * On Select event. 
 *
 * @name sap.ui.ux3.FacetFilterList#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id Id of the FacetFilterList taht fires the event.
 * @param {int[]} oControlEvent.getParameters.selectedIndices Array of selected Indices.
 * @param {sap.ui.core.ListItem[]} oControlEvent.getParameters.selectedItems Array of selected Items.
 * @param {boolean} oControlEvent.getParameters.all If it is true, then Item All is selected. That means all items in the list are selected - no filter is set.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.ux3.FacetFilterList</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FacetFilterList</code>.<br/> itself. 
 *  
 * On Select event. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FacetFilterList</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FacetFilterList#attachSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.ux3.FacetFilterList</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FacetFilterList#detachSelect
 * @function
 */

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of the FacetFilterList taht fires the event.</li>
 * <li>'selectedIndices' of type <code>int[]</code> Array of selected Indices.</li>
 * <li>'selectedItems' of type <code>sap.ui.core.ListItem[]</code> Array of selected Items.</li>
 * <li>'all' of type <code>boolean</code> If it is true, then Item All is selected. That means all items in the list are selected - no filter is set.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FacetFilterList} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.FacetFilterList#fireSelect
 * @function
 */


// Start of sap\ui\ux3\FacetFilterList.js
jQuery.sap.require("sap.ui.commons.ListBox");

(function() {

/**
 * Does the setup when the control is created.
 * @private
 */
sap.ui.ux3.FacetFilterList.prototype.init = function(){

    // Get the translatable text
	this._oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");

	//For later use
	//this._bAccMode = sap.ui.getCore().getConfiguration().getAccessibility();
	//this._bRtlMode = sap.ui.getCore().getConfiguration().getRTL();

	//Create the used ListBox control
	this._oListBox = new sap.ui.commons.ListBox(this.getId() + "-lb");
	this._oListBox.setScrollTop(0);
	this._oListBox.setValueTextAlign("Begin");
	this._oListBox.setDisplaySecondaryValues(this.getDisplaySecondaryValues());
	this._oListBox.setDisplayIcons(false);
	this._oListBox.setEditable(true);
	this._oListBox.setEnabled(true);
	this._oListBox.setVisible(true);
	this._oListBox.setAllowMultiSelect(this.getMultiSelect());
	this._oListBox.addAriaLabelledBy(this.getId() + "-head-txt");
	var that=this;
	//Attach to the ListBox select event
	this._oListBox.attachSelect(function(oEvent) {
		that.onSelect(that, oEvent);
	});
	this.addAggregation("controls", this._oListBox);
	this._oItemAll = new sap.ui.core.ListItem({text: this._oResBundle.getText("FACETFILTER_ALL", [0]), key:"sapUiFacetFilter_ALL"});
	this._oListBox.addItem(this._oItemAll);
};

sap.ui.ux3.FacetFilterList.prototype.setMultiSelect = function(bMultiSelect) {
	this._oListBox.setAllowMultiSelect(bMultiSelect);
	this.setProperty("multiSelect", bMultiSelect, true);
};

sap.ui.ux3.FacetFilterList.prototype.setDisplaySecondaryValues = function(bDisplaySecondaryValues) {
	this._oListBox.setDisplaySecondaryValues(bDisplaySecondaryValues);
	this.setProperty("displaySecondaryValues", bDisplaySecondaryValues, true);
};

sap.ui.ux3.FacetFilterList.prototype.addItem = function(oItem) {
	this._oListBox.addItem(oItem);
	if (!oItem.getKey() || jQuery.trim(oItem.getKey()) == "" ){
		oItem.setKey("generatedkey" + this.indexOfItem(oItem));
	}
	this.updateText4All();
};

sap.ui.ux3.FacetFilterList.prototype.insertItem = function(oItem, iIndex) {
	this._oListBox.insertItem(oItem, iIndex + 1); // +1 because of entry "all" on the fist position.
	if (!oItem.getKey() || jQuery.trim(oItem.getKey()) == "" ){
		oItem.setKey("generatedkey" + this.indexOfItem(oItem));
	}
	this.updateText4All();
};

sap.ui.ux3.FacetFilterList.prototype.removeItem = function(oItem) {
	this._oListBox.removeItem(oItem);
	this.updateText4All();
};

sap.ui.ux3.FacetFilterList.prototype.removeAllItems = function() {
	this._oListBox.removeAllItems();
	this._oListBox.addItem(this._oItemAll);
	this.updateText4All();
};

sap.ui.ux3.FacetFilterList.prototype.destroyItems = function() {
	this._oListBox.removeItem(this._oItemAll);
	this._oListBox.destroyItems();
	this._oListBox.addItem(this._oItemAll);
	this.updateText4All();
};

sap.ui.ux3.FacetFilterList.prototype.indexOfItem = function(oItem) {
	var iIndex = this._oListBox.indexOfItem(oItem);
	if (iIndex > -1) { // index values -1, -2 and 0 stay unchanged
		iIndex = iIndex - 1;
	}
	return iIndex;
};

sap.ui.ux3.FacetFilterList.prototype.getItems = function() {
	var aListItems = this._oListBox.getItems();
	var aItems = [];
	for(var i=1; i<aListItems.length; i++){
		aItems.push(aListItems[i]);
	}
	return aItems;
}

sap.ui.ux3.FacetFilterList.prototype.setSelectedKeys = function(aSelectedKeys) {
	this.setProperty("selectedKeys", aSelectedKeys);
	this.invalidate(); 
}

sap.ui.ux3.FacetFilterList.prototype.setShowCounter = function(bShowCounter) {
	this.setProperty("showCounter", bShowCounter);
	this.updateText4All();
}

/**
 *
 * @private
 */
sap.ui.ux3.FacetFilterList.prototype.updateText4All = function() {
	if (this.getShowCounter()) {
		this._oItemAll.setText( this._oResBundle.getText("FACETFILTER_ALL", [this._oListBox.getItems().length - 1]));
	} else {
		this._oItemAll.setText( this._oResBundle.getText("FACETFILTER_NO_COUNT"));
	}
};

/**
 * Used for after-rendering initialization.
 *
 * @private
 */
sap.ui.ux3.FacetFilterList.prototype.onBeforeRendering = function() {
	if (this.bFullHeight) {
		//this._oListBox.setHeight("100%");
	} else {
		this._oListBox.setVisibleItems(5);
	}
	
	var aKeys = this.getSelectedKeys();
	if (aKeys && aKeys.length > 0) {
		this._oListBox.setSelectedKeys(aKeys);
		this._bAllOnly = false;
	} else {
		this._oListBox.setSelectedKeys(["sapUiFacetFilter_ALL"]);
		this._bAllOnly = true;
	}
};

sap.ui.ux3.FacetFilterList.prototype.updateItems = function(){

	this.updateAggregation("items");

	var aSelectedKeys = this._oListBox.getSelectedKeys();
	//if no selection at all - mark ALL
	if (aSelectedKeys.length == 0) {
		aSelectedKeys = ["sapUiFacetFilter_ALL"];
		this._bAllOnly = true;
		this._oListBox.setSelectedKeys(aSelectedKeys);
	}

};

//Handles the select event of the used ListBox control
sap.ui.ux3.FacetFilterList.prototype.onSelect = function(oFFList, oEvent) {
    var aSelectedKeys = this._oListBox.getSelectedKeys();
    //if no selection at all - mark ALL
    if (aSelectedKeys.length == 0) {
    	aSelectedKeys = ["sapUiFacetFilter_ALL"];
    	this._bAllOnly = true;
    	this._oListBox.setSelectedKeys(aSelectedKeys);
    }
    var iIndexAll = jQuery.inArray("sapUiFacetFilter_ALL", aSelectedKeys);
    if (iIndexAll > -1) {
    	if (aSelectedKeys.length == 1){
    		this._bAllOnly = true;
    	} else {
    		if (this._bAllOnly) {
    			aSelectedKeys.splice(iIndexAll,1);
    			this._bAllOnly = false;
    		} else {
    			aSelectedKeys = ["sapUiFacetFilter_ALL"];
    			this._bAllOnly = true;
    		}
    		this._oListBox.setSelectedKeys(aSelectedKeys);
    	}
    } else {
    	this._bAllOnly = false;
    }

	this.setProperty("selectedKeys", aSelectedKeys, true);
	
	var aSelectedIndices = [];
	var aSelectedItems = [];
	var aAllSelectedItems = this._oListBox.getSelectedItems();
	if(!this._bAllOnly){
		 for(var i=0; i<aAllSelectedItems.length; i++){
			 if(aAllSelectedItems[i] != this._oItemAll){
				 aSelectedIndices.push(this.indexOfItem(aAllSelectedItems[i]));
				 aSelectedItems.push(aAllSelectedItems[i]);
			 }
		 }
	}
	
	this.fireSelect({
		id:oFFList.getId(),
		all:this._bAllOnly,
		selectedIndices: aSelectedIndices,
		selectedItems: aSelectedItems
	});
};

}());
