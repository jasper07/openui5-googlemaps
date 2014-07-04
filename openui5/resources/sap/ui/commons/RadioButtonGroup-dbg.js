/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.RadioButtonGroup.
jQuery.sap.declare("sap.ui.commons.RadioButtonGroup");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new RadioButtonGroup.
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
 * <li>{@link #getColumns columns} : int (default: 1)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getSelectedIndex selectedIndex} : int (default: 0)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li></ul>
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
 * <li>{@link sap.ui.commons.RadioButtonGroup#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * a group of RadioButtons to hande as one UI element.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.RadioButtonGroup
 */
sap.ui.core.Control.extend("sap.ui.commons.RadioButtonGroup", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"getSelectedItem", "setSelectedItem"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"columns" : {type : "int", group : "Appearance", defaultValue : 1},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"editable" : {type : "boolean", group : "Behavior", defaultValue : true},
		"valueState" : {type : "sap.ui.core.ValueState", group : "Data", defaultValue : sap.ui.core.ValueState.None},
		"selectedIndex" : {type : "int", group : "Data", defaultValue : 0},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true}
	},
	defaultAggregation : "items",
	aggregations : {
    	"items" : {type : "sap.ui.core.Item", multiple : true, singularName : "item", bindable : "bindable"}
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
 * Creates a new subclass of class sap.ui.commons.RadioButtonGroup with name <code>sClassName</code> 
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
 * @name sap.ui.commons.RadioButtonGroup.extend
 * @function
 */

sap.ui.commons.RadioButtonGroup.M_EVENTS = {'select':'select'};


/**
 * Getter for property <code>width</code>.
 * Width of the RadioButtonGroup.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.RadioButtonGroup#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButtonGroup#setWidth
 * @function
 */


/**
 * Getter for property <code>columns</code>.
 * Number of RadioButtons displayed in one Line.
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>columns</code>
 * @public
 * @name sap.ui.commons.RadioButtonGroup#getColumns
 * @function
 */

/**
 * Setter for property <code>columns</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iColumns  new value for property <code>columns</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButtonGroup#setColumns
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Visibility of Group
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.RadioButtonGroup#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButtonGroup#setVisible
 * @function
 */


/**
 * Getter for property <code>editable</code>.
 * Specifies whether the user can choose a radio button.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.ui.commons.RadioButtonGroup#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButtonGroup#setEditable
 * @function
 */


/**
 * Getter for property <code>valueState</code>.
 * The value state to be displayed.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * @name sap.ui.commons.RadioButtonGroup#getValueState
 * @function
 */

/**
 * Setter for property <code>valueState</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oValueState  new value for property <code>valueState</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButtonGroup#setValueState
 * @function
 */


/**
 * Getter for property <code>selectedIndex</code>.
 * Index of the selected/checked RadioButton.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>selectedIndex</code>
 * @public
 * @name sap.ui.commons.RadioButtonGroup#getSelectedIndex
 * @function
 */

/**
 * Setter for property <code>selectedIndex</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iSelectedIndex  new value for property <code>selectedIndex</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButtonGroup#setSelectedIndex
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * If set the RadioButtonGroup is enabled, if not it is disabled. If it is disabled all RadioButtons will be shown as disabled. The enabled property of the item will not be uses in this case. If the RadioButtonGroup is enabled the enabled property of the item will define if a RadioButton is enabled or not.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @since 1.10.3
 * @name sap.ui.commons.RadioButtonGroup#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @since 1.10.3
 * @name sap.ui.commons.RadioButtonGroup#setEnabled
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * RadioButtons of this RadioButtonGroup
 * 
 * <strong>Note</strong>: this is the default aggregation for RadioButtonGroup.
 * @return {sap.ui.core.Item[]}
 * @public
 * @name sap.ui.commons.RadioButtonGroup#getItems
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
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButtonGroup#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Item}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButtonGroup#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.core.Item} vItem the item to remove or its index or id
 * @return {sap.ui.core.Item} the removed item or null
 * @public
 * @name sap.ui.commons.RadioButtonGroup#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.RadioButtonGroup#removeAllItems
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
 * @name sap.ui.commons.RadioButtonGroup#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButtonGroup#destroyItems
 * @function
 */


/**
 * Binder for aggregation <code>items</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButtonGroup#bindItems
 * @function
 */

/**
 * Unbinder for aggregation <code>items</code>.
 *
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButtonGroup#unbindItems
 * @function
 */


/**
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.RadioButtonGroup#getAriaDescribedBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButtonGroup#addAriaDescribedBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * @name sap.ui.commons.RadioButtonGroup#removeAriaDescribedBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.RadioButtonGroup#removeAllAriaDescribedBy
 * @function
 */

	
/**
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.RadioButtonGroup#getAriaLabelledBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButtonGroup#addAriaLabelledBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * @name sap.ui.commons.RadioButtonGroup#removeAriaLabelledBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.RadioButtonGroup#removeAllAriaLabelledBy
 * @function
 */

	
/**
 * Event is fired when selection is changed by user interaction. 
 *
 * @name sap.ui.commons.RadioButtonGroup#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.selectedIndex Index of the selected RadioButton.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.commons.RadioButtonGroup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.RadioButtonGroup</code>.<br/> itself. 
 *  
 * Event is fired when selection is changed by user interaction. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.RadioButtonGroup</code>.<br/> itself.
 *
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButtonGroup#attachSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.commons.RadioButtonGroup</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButtonGroup#detachSelect
 * @function
 */

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedIndex' of type <code>int</code> Index of the selected RadioButton.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RadioButtonGroup} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.RadioButtonGroup#fireSelect
 * @function
 */


/**
 * Returns selected item. When no item is selected, "null" is returned.
 *
 * @name sap.ui.commons.RadioButtonGroup.prototype.getSelectedItem
 * @function

 * @type sap.ui.core.Item
 * @public
 */


/**
 * Sets the item as seleced and removs the selection from the old one.
 *
 * @name sap.ui.commons.RadioButtonGroup.prototype.setSelectedItem
 * @function
 * @param {sap.ui.core.Item} 
 *         oItem
 *         Selected item.

 * @type void
 * @public
 */


// Start of sap\ui\commons\RadioButtonGroup.js
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");

sap.ui.commons.RadioButtonGroup.prototype.exit = function() {
	this.destroyItems(); // or Element.exit should call the typed destroyXYZ methods?
	// sap.ui.core.Control.prototype.exit.apply(this); // does not exist!

	if (this.oItemNavigation) {
		this.removeDelegate(this.oItemNavigation);
		this.oItemNavigation.destroy();
		delete this.oItemNavigation;
	}

};

sap.ui.commons.RadioButtonGroup.prototype.onBeforeRendering = function() {
	if(this.getSelectedIndex() > this.getItems().length){
		// SelectedIndex is > than number of items -> select the first one
		jQuery.sap.log.warning("Invalid index, set to 0");
		this.setSelectedIndex(0);
	};
};

sap.ui.commons.RadioButtonGroup.prototype.onAfterRendering = function() {

	this.initItemNavigation();

	// update ARIA information of RadioButtons
	for(var i = 0; i < this.aRBs.length; i++){
		this.aRBs[i].$().attr("aria-posinset", i+1).attr("aria-setsize", this.aRBs.length);
	}
};

/*
 * initialize ItemNavigation. Transfer RadioButtons to ItemNavigation.
 * TabIndexes are set by ItemNavigation
 * @private
 */
sap.ui.commons.RadioButtonGroup.prototype.initItemNavigation = function(){

	// Collect items for ItemNavigation
	var aDomRefs = [];
	this._aActiveItems = [];
	var aActiveItems = this._aActiveItems;
	var bEnabled = false;
	for (var i=0; i < this.aRBs.length; i++) {
		aActiveItems[aDomRefs.length] = i;
		aDomRefs.push(this.aRBs[i].getDomRef());
		if (!bEnabled && this.aRBs[i].getEnabled()) {
			// at least one RadioButton is enabled
			bEnabled = true;
		}
	}

	if (bEnabled) {
		// at least one RadioButton enabled -> use property of RadioButtonGroup
		// so if all RadioButtons are disabled the RadioButtonGroup is disabled too.
		bEnabled = this.getEnabled();
	}

	if (!bEnabled) {
		// RadioButtonGroup is disabled -> no ItemNavigation
		if (this.oItemNavigation) {
			this.removeDelegate(this.oItemNavigation);
			this.oItemNavigation.destroy();
			delete this.oItemNavigation;
		}
		return;
	}

	// init ItemNavigation
	if (!this.oItemNavigation) {
		this.oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
		this.oItemNavigation.attachEvent(sap.ui.core.delegate.ItemNavigation.Events.AfterFocus, this._handleAfterFocus, this);
		this.addDelegate(this.oItemNavigation);
	}
	this.oItemNavigation.setRootDomRef(this.getDomRef());
	this.oItemNavigation.setItemDomRefs(aDomRefs);
	this.oItemNavigation.setCycling(true);
	this.oItemNavigation.setColumns(this.getColumns());
	this.oItemNavigation.setSelectedIndex(this.getSelectedIndex());
	this.oItemNavigation.setFocusedIndex(this.getSelectedIndex());
};

/*
 * Set selected RadioButton via Index
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.setSelectedIndex = function(iSelectedIndex) {

	var iIndexOld = this.getSelectedIndex();

	if (iSelectedIndex < 0) {
		// invalid negative index -> don't change index.
		jQuery.sap.log.warning("Invalid index, will not be changed");
		return this;
	}

	this.setProperty("selectedIndex", iSelectedIndex, true); // no re-rendering

	// deselect old RadioButton
	if( !isNaN(iIndexOld) && this.aRBs && this.aRBs[iIndexOld]){
		this.aRBs[iIndexOld].setSelected(false);
	}

	// select new one
	if(this.aRBs && this.aRBs[iSelectedIndex]){
		this.aRBs[iSelectedIndex].setSelected(true);
	}

	if(this.oItemNavigation){
		this.oItemNavigation.setSelectedIndex(iSelectedIndex);
		this.oItemNavigation.setFocusedIndex(iSelectedIndex);
	}

	return this;

};

/*
 * Set selected RadioButton via Item
 * @param {sap.ui.core.Item} oSelectedItem the item to be selected.
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.setSelectedItem = function(iSelectedItem) {

	for (var i = 0; i < this.getItems().length; i++){
		if(iSelectedItem.getId() == this.getItems()[i].getId()){
			this.setSelectedIndex(i);
			break;
		}
	}
};

/*
 * Get item of selected RadioButton
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.getSelectedItem = function() {

	return this.getItems()[this.getSelectedIndex()];

};

/*
 * Adds a new Item
 * If an item is added a new RadioButton must be added
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.addItem = function(oItem) {

	this.myChange = true;
	this.addAggregation("items", oItem);
	this.myChange = undefined;

	if(this.getSelectedIndex() === undefined){
		// if not defined -> select first one
		this.setSelectedIndex(0);
	}
	if(!this.aRBs){
		this.aRBs = [];
	}

	var iIndex = this.aRBs.length;

	this.aRBs[iIndex] = this.createRadioButton(oItem, iIndex);

	return this;
};

/*
 * Inserts a new Item
 * If an item is inserted a new RadioButton must be inserted
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.insertItem = function(oItem, iIndex) {

	this.myChange = true;
	this.insertAggregation("items", oItem, iIndex);
	this.myChange = undefined;

	if(!this.aRBs){
		this.aRBs = [];
	}

	var iLength = this.aRBs.length;

	if(this.getSelectedIndex() === undefined || iLength == 0){
		// if not defined -> select first one
		this.setSelectedIndex(0);
	}else if(this.getSelectedIndex() >= iIndex){
		// If inserted before selected one, move selection index (only change parameter, not RadioButton)
		this.setProperty("selectedIndex", this.getSelectedIndex() + 1, true); // no re-rendering
	}

	if( iIndex >= iLength){
		this.aRBs[iIndex] = this.createRadioButton(oItem, iIndex);
	}else{
		// Insert RadioButton: loop backwards over Array and shift everything
		for (var i = (iLength); i > iIndex; i--) {
			this.aRBs[i] = this.aRBs[i-1];
			if((i-1) == iIndex){
				this.aRBs[i-1] = this.createRadioButton(oItem, iIndex);
			}
		}
	}

	return this;

};

/*
 * create RadioButton for an item
 * @private
 */
sap.ui.commons.RadioButtonGroup.prototype.createRadioButton = function(oItem, iIndex){

	if(this.iIDCount == undefined){
		this.iIDCount = 0;
	}else{
		this.iIDCount++;
	}

	var oRadioButton = new sap.ui.commons.RadioButton(this.getId() + "-" + this.iIDCount);
	oRadioButton.setText(oItem.getText());
	oRadioButton.setTooltip(oItem.getTooltip());
	if (this.getEnabled()) {
		oRadioButton.setEnabled(oItem.getEnabled());
	} else {
		oRadioButton.setEnabled(false);
	}
	oRadioButton.setKey(oItem.getKey());
	oRadioButton.setTextDirection(oItem.getTextDirection());
	oRadioButton.setEditable(this.getEditable());
	oRadioButton.setGroupName(this.getId());
	oRadioButton.setValueState(this.getValueState());
	oRadioButton.setParent(this);

	if( iIndex == this.getSelectedIndex() ){
		oRadioButton.setSelected(true);
	}

	oRadioButton.attachEvent('select', this.handleRBSelect, this);

	return(oRadioButton);
};

/*
 * Removes an Item
 * If an item is removed the corresponding RadioButton must be deleted
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.removeItem = function(vElement) {
	var iIndex = vElement;
	if (typeof(vElement) == "string") { // ID of the element is given
		vElement = sap.ui.getCore().byId(vElement);
	}
	if (typeof(vElement) == "object") { // the element itself is given or has just been retrieved
		iIndex = this.indexOfItem(vElement);
	}

	this.myChange = true;
	var oItem = this.removeAggregation("items", iIndex);
	this.myChange = undefined;

	if(!this.aRBs){
		this.aRBs = [];
	}

	if(!this.aRBs[iIndex]){
		// RadioButton not exists
		return null;
	}

	this.aRBs[iIndex].destroy();
	this.aRBs.splice(iIndex, 1);

	if(this.aRBs.length == 0){
		this.setSelectedIndex(undefined);
	}else if(this.getSelectedIndex() == iIndex){
		// selected one is removed -> select first one
		this.setSelectedIndex(0);
	}else{
		if(this.getSelectedIndex() > iIndex){
			// If removed before selected one, move selection index (only change parameter, not RadioButton)
			this.setProperty("selectedIndex", this.getSelectedIndex() - 1, true); // no re-rendering
		}
	}

	return oItem;
};

/*
 * Removes all items
 * If all items are removed all RadioButtons must be deleted
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.removeAllItems = function() {

	this.myChange = true;
	var aItems = this.removeAllAggregation("items");
	this.myChange = undefined;

	this.setSelectedIndex(undefined);

	if(this.aRBs){
		while(this.aRBs.length > 0){
			this.aRBs[0].destroy();
			this.aRBs.splice(0, 1);
		};
		return aItems;
	}else{
		return null;
	}

};

/*
 * destroys all items
 * If all items are destroyed all RadioButtons must be deleted
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.destroyItems = function() {

	this.myChange = true;
	this.destroyAggregation("items");
	this.myChange = undefined;

	this.setSelectedIndex(undefined);

	if(this.aRBs){
		while(this.aRBs.length > 0){
			this.aRBs[0].destroy();
			this.aRBs.splice(0, 1);
		};
	}

	return this;

};

/*
 * if invalid -> synchronize radio buttons
 * @protected
 */
sap.ui.commons.RadioButtonGroup.prototype.invalidate = function(oOrigin){

	if(oOrigin instanceof sap.ui.core.Item && this.aRBs && !this.myChange){
		// change was not done by RadioButtonGroup itself
		var aItems = this.getItems();
		for (var i = 0; i < aItems.length; i++) {
			if( aItems[i] == oOrigin){
				if(this.aRBs[i]){
					this.aRBs[i].setText(aItems[i].getText());
					this.aRBs[i].setTooltip(aItems[i].getTooltip());
					if (this.getEnabled()) {
						this.aRBs[i].setEnabled(aItems[i].getEnabled());
					} else {
						this.aRBs[i].setEnabled(false);
					}
					this.aRBs[i].setKey(aItems[i].getKey());
					this.aRBs[i].setTextDirection(aItems[i].getTextDirection());
				}
				break;
			}
		}
		if(this.getDomRef()){
			this.initItemNavigation();
		}
	}
	var oParent = this.getParent();
	if(oParent) {
		oParent.invalidate(this);
	}

};

/*
 * On SELECT event of single Radio Buttons fire Select Event for group
 * @private
 */
sap.ui.commons.RadioButtonGroup.prototype.handleRBSelect = function(oControlEvent){
	// find RadioButton in Array to get Index
	for (var i = 0; i < this.aRBs.length; i++) {
		if(this.aRBs[i].getId() == oControlEvent.getParameter("id")){
			this.setSelectedIndex(i);
			this.oItemNavigation.setSelectedIndex(i);
			this.oItemNavigation.setFocusedIndex(i);
			this.fireSelect({selectedIndex: i});
			break;
		}
	}

};

/*
 * Set all RadioButtons to Editable/ReadOnly
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.setEditable = function(bEditable){

	this.setProperty("editable", bEditable, false); // re-rendering to update ItemNavigation

	if(this.aRBs){
		for (var i = 0; i < this.aRBs.length; i++) {
			this.aRBs[i].setEditable(bEditable);
		}
	}
};

/*
 * Set all RadioButtons to Enabled/Disabled
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.setEnabled = function(bEnabled){

	this.setProperty("enabled", bEnabled, false); // re-rendering to update ItemNavigation

	if(this.aRBs){
		var aItems = this.getItems();

		for (var i = 0; i < this.aRBs.length; i++) {
			if (bEnabled) {
				this.aRBs[i].setEnabled(aItems[i].getEnabled());
			}else {
				this.aRBs[i].setEnabled(bEnabled);
			}
		}
	}

};

/*
 * Set ValueState for all RadioButtons
 * @public
 */
sap.ui.commons.RadioButtonGroup.prototype.setValueState = function(sValueState){

	this.setProperty("valueState", sValueState, false); // re-rendering to update ItemNavigation

	if(this.aRBs){
		for (var i = 0; i < this.aRBs.length; i++) {
			this.aRBs[i].setValueState(sValueState);
		}
	}
};

/*
 * Handles the event that gets fired by the {@link sap.ui.core.delegate.ItemNavigation} delegate.
 * Ensures that focused element is selected
 *
 * @param {sap.ui.base.Event} oControlEvent The event that gets fired by the {@link sap.ui.core.delegate.ItemNavigation} delegate.
 * @private
 */
sap.ui.commons.RadioButtonGroup.prototype._handleAfterFocus = function(oControlEvent){

	var iIndex = oControlEvent.getParameter("index");
	var oEvent = oControlEvent.getParameter("event");

	if(iIndex != this.getSelectedIndex() && !(oEvent.ctrlKey || oEvent.metaKey) && this.aRBs[iIndex].getEditable() && this.aRBs[iIndex].getEnabled()){
		// if CTRL key is used do not switch selection
		this.setSelectedIndex(iIndex);
		this.oItemNavigation.setSelectedIndex(iIndex);
		this.fireSelect({selectedIndex:iIndex});
	}
};