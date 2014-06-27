/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.FacetFilterList.
jQuery.sap.declare("sap.m.FacetFilterList");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.List");


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
 * <li>{@link #getActive active} : boolean (default: true)</li>
 * <li>{@link #getAllCount allCount} : int</li>
 * <li>{@link #getSequence sequence} : int (default: -1)</li>
 * <li>{@link #getKey key} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.FacetFilterList#event:listOpen listOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.FacetFilterList#event:listClose listClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.List#constructor sap.m.List}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * FacetFilterList represents a list of values for the FacetFilter control.
 * @extends sap.m.List
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.FacetFilterList
 */
sap.m.List.extend("sap.m.FacetFilterList", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"getSelectedKeys", "setSelectedKeys", "removeSelectedKey", "removeSelectedKeys"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"title" : {type : "string", group : "Appearance", defaultValue : null},
		"multiSelect" : {type : "boolean", group : "Behavior", defaultValue : true, deprecated: true},
		"active" : {type : "boolean", group : "Behavior", defaultValue : true},
		"allCount" : {type : "int", group : "Appearance", defaultValue : null},
		"sequence" : {type : "int", group : "Behavior", defaultValue : -1},
		"key" : {type : "string", group : "Identification", defaultValue : null}
	},
	events : {
		"listOpen" : {}, 
		"listClose" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.FacetFilterList with name <code>sClassName</code> 
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
 * @name sap.m.FacetFilterList.extend
 * @function
 */

sap.m.FacetFilterList.M_EVENTS = {'listOpen':'listOpen','listClose':'listClose'};


/**
 * Getter for property <code>title</code>.
 * The title of the facet. The facet title is displayed on the facet button when the FacetFilter type is set to Simple. It is also displayed as a list item in the facet page of the dialog.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.FacetFilterList#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#setTitle
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
 * @deprecated Since version 1.20.0. 
 * This property is no longer supported. Use the setMode method instead. FacetFilterList overrides the setMode method to restrict the possible modes to MultiSelect and SingleSelectMaster. All other modes are ignored and will not be set.
 * @name sap.m.FacetFilterList#getMultiSelect
 * @function
 */

/**
 * Setter for property <code>multiSelect</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bMultiSelect  new value for property <code>multiSelect</code>
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.20.0. 
 * This property is no longer supported. Use the setMode method instead. FacetFilterList overrides the setMode method to restrict the possible modes to MultiSelect and SingleSelectMaster. All other modes are ignored and will not be set.
 * @name sap.m.FacetFilterList#setMultiSelect
 * @function
 */


/**
 * Getter for property <code>active</code>.
 * Indicates that the list is displayed as a button when the FacetFilter type is set to Simple.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>active</code>
 * @public
 * @name sap.m.FacetFilterList#getActive
 * @function
 */

/**
 * Setter for property <code>active</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bActive  new value for property <code>active</code>
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#setActive
 * @function
 */


/**
 * Getter for property <code>allCount</code>.
 * Number of objects that match this item in the target data set when all filter items are selected.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>allCount</code>
 * @public
 * @name sap.m.FacetFilterList#getAllCount
 * @function
 */

/**
 * Setter for property <code>allCount</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iAllCount  new value for property <code>allCount</code>
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#setAllCount
 * @function
 */


/**
 * Getter for property <code>sequence</code>.
 * Sequence that determines the order in which facet list is shown on the facet filter. Lists are rendered by ascending order of sequence.
 *
 * Default value is <code>-1</code>
 *
 * @return {int} the value of property <code>sequence</code>
 * @public
 * @name sap.m.FacetFilterList#getSequence
 * @function
 */

/**
 * Setter for property <code>sequence</code>.
 *
 * Default value is <code>-1</code> 
 *
 * @param {int} iSequence  new value for property <code>sequence</code>
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#setSequence
 * @function
 */


/**
 * Getter for property <code>key</code>.
 * Unique identifier for this filter list.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>key</code>
 * @public
 * @name sap.m.FacetFilterList#getKey
 * @function
 */

/**
 * Setter for property <code>key</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#setKey
 * @function
 */


/**
 * Fired before the filter list is opened. 
 *
 * @name sap.m.FacetFilterList#listOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'listOpen' event of this <code>sap.m.FacetFilterList</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.FacetFilterList</code>.<br/> itself. 
 *  
 * Fired before the filter list is opened. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.FacetFilterList</code>.<br/> itself.
 *
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#attachListOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'listOpen' event of this <code>sap.m.FacetFilterList</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#detachListOpen
 * @function
 */

/**
 * Fire event listOpen to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.FacetFilterList#fireListOpen
 * @function
 */


/**
 * Triggered after the list of items is closed. 
 *
 * @name sap.m.FacetFilterList#listClose
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.m.FacetFilterItem[]} oControlEvent.getParameters.selectedItems Array of selected items.  Items returned are only copies and therefore can only be used to read properties, not set them.
 * @param {boolean} oControlEvent.getParameters.allSelected True if the select All checkbox is selected.  This will be false if all items are actually selected (every FacetFilterItem.selected == true).  In that case selectedItems will contain all selected items.
 * @param {object} oControlEvent.getParameters.selectedKeys Associative array containing the keys of selected FacetFilterItems. Unlike the selectedItems parameter, this contains only the keys for all selected items, not the items themselves.  Being an associative array, each object property is the FacetFilterItem key value and the value of the property is the FacetFilterItem text.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'listClose' event of this <code>sap.m.FacetFilterList</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.FacetFilterList</code>.<br/> itself. 
 *  
 * Triggered after the list of items is closed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.FacetFilterList</code>.<br/> itself.
 *
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#attachListClose
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'listClose' event of this <code>sap.m.FacetFilterList</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#detachListClose
 * @function
 */

/**
 * Fire event listClose to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedItems' of type <code>sap.m.FacetFilterItem[]</code> Array of selected items.  Items returned are only copies and therefore can only be used to read properties, not set them.</li>
 * <li>'allSelected' of type <code>boolean</code> True if the select All checkbox is selected.  This will be false if all items are actually selected (every FacetFilterItem.selected == true).  In that case selectedItems will contain all selected items.</li>
 * <li>'selectedKeys' of type <code>object</code> Associative array containing the keys of selected FacetFilterItems. Unlike the selectedItems parameter, this contains only the keys for all selected items, not the items themselves.  Being an associative array, each object property is the FacetFilterItem key value and the value of the property is the FacetFilterItem text.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.FacetFilterList#fireListClose
 * @function
 */


/**
 * Returns the keys of the selected elements as an associative array. An empty object is returned if no items are selected.
 *
 * @name sap.m.FacetFilterList.prototype.getSelectedKeys
 * @function

 * @type object
 * @public
 * @since 1.20.3
 */


/**
 * Use this method to pre-select FacetFilterItems, such as when restoring FacetFilterList selections from a variant. Keys are cached separately from the actual FacetFilterItems so that they remain even when the physical items are removed by filtering or sorting. If aKeys is undefined, null, or {} (empty object) then all keys are deleted. After this method completes only those items with matching keys will be selected. All other items in the list will be deselected.
 *
 * @name sap.m.FacetFilterList.prototype.setSelectedKeys
 * @function
 * @param {object} 
 *         oAKeys
 *         Associative array indicating which FacetFilterItems should be selected in the list. Each property must be set to the value of a FacetFilterItem.key property. Each property value should be set to the FacetFilterItem.text property value. The text value is used to display the FacetFilterItem text when the FacetFilterList button or FacetFilter summary bar is displayed. If no property value is set then the property key is used for the text.

 * @type void
 * @public
 * @since 1.20.3
 */


/**
 * Remove the specified key from the selected keys cache and deselect the item.
 *
 * @name sap.m.FacetFilterList.prototype.removeSelectedKey
 * @function
 * @param {string} 
 *         sKey
 *         The key of the selected item to be removed from the cache. If null then the text parameter will be used as the key.
 * @param {string} 
 *         sText
 *         The text of the selected item to be removed from the cache. If the key parameter is null then text will be used as the key.

 * @type void
 * @public
 * @since 1.20.4
 */


/**
 * Remove all selected keys from the selected keys cache and deselect all items.
 *
 * @name sap.m.FacetFilterList.prototype.removeSelectedKeys
 * @function

 * @type void
 * @public
 * @since 1.20.4
 */


// Start of sap\m\FacetFilterList.js
sap.m.FacetFilterList.prototype.setTitle = function(sTitle) {
       
       this.setProperty("title", sTitle, true);
       if(this.getParent() && this.getParent()._setButtonText) {
              this.getParent()._setButtonText(this);
       }
       return this;
};


sap.m.FacetFilterList.prototype.setMultiSelect = function(bVal) {
       
       this.setProperty("multiSelect", bVal, true);
       var mode = bVal ? sap.m.ListMode.MultiSelect : sap.m.ListMode.SingleSelectMaster;
       this.setMode(mode);
       return this;
};

/**
* Override to allow only MultiSelect and SingleSelectMaster list modes. If an invalid mode is given
* then the mode will not be changed.
* @param mode {sap.m.ListMode} The list mode
* @public
*/
sap.m.FacetFilterList.prototype.setMode = function(mode) {
       
       if(mode === sap.m.ListMode.MultiSelect || mode === sap.m.ListMode.SingleSelectMaster) {
              
              sap.m.List.prototype.setMode.call(this, mode);
              this.setProperty("multiSelect", mode === sap.m.ListMode.MultiSelect ? true : false, true);
       }
       return this;
};


sap.m.FacetFilterList.prototype.getSelectedItems = function() {
       
       var aSelectedItems = [];
       // Track which items are added from the aggregation so that we don't add them again when adding the remaining selected key items
       var oCurrentSelectedItemsMap = {};  
       var aCurrentSelectedItems = sap.m.ListBase.prototype.getSelectedItems.apply(this, arguments);
       
       // First add items according to what is selected in the 'items' aggregation. This maintains indexes of currently selected items in the returned array.
       aCurrentSelectedItems.forEach(function(oItem) {
              
              aSelectedItems.push(new sap.m.FacetFilterItem({
                     text: oItem.getText(),
                     key: oItem.getKey(),
                     selected: true
              }));
              oCurrentSelectedItemsMap[oItem.getKey()] = true;
       });    

       var oSelectedKeys = this.getSelectedKeys();
       var aSelectedKeys = Object.getOwnPropertyNames(oSelectedKeys);
       
       // Now add items that are not present in the aggregation. These have no index since they are not in the aggregation,
       // so just add them to the end in non-deterministic order.
       if(aCurrentSelectedItems.length < aSelectedKeys.length) {
                     
              aSelectedKeys.forEach(function(sKey) {
                     
                     if(!oCurrentSelectedItemsMap[sKey]) {
                           aSelectedItems.push(new sap.m.FacetFilterItem({
                                  text: oSelectedKeys[sKey],
                                  key: sKey,
                                  selected: true
                           }));
                     }
              });
       }
       return aSelectedItems;
};

sap.m.FacetFilterList.prototype.getSelectedItem = function() {
       
       var oItem = sap.m.ListBase.prototype.getSelectedItem.apply(this, arguments);
       var aSelectedKeys = Object.getOwnPropertyNames(this.getSelectedKeys());
       if(!oItem && aSelectedKeys.length > 0) {
              oItem = new sap.m.FacetFilterItem({
                     text: this.getSelectedKeys()[aSelectedKeys[0]],
                     key: aSelectedKeys[0],
                     selected: true
              });
       }
       return oItem;
};

sap.m.FacetFilterList.prototype.removeSelections = function(bAll) {
       
       // See _resetItemsBinding to understand why we override the ListBase method
       if(this._allowRemoveSelections) {
              
              bAll ? this.setSelectedKeys() : sap.m.ListBase.prototype.removeSelections.call(this, bAll);
       }             
       return this;
};

sap.m.FacetFilterList.prototype.getSelectedKeys = function() {
       var oResult = {};
       var oKeys = this._oSelectedKeys;
       Object.getOwnPropertyNames(oKeys).forEach(function(key) {oResult[key] = oKeys[key];});
       return oResult;
};

sap.m.FacetFilterList.prototype.setSelectedKeys = function(oKeys) {
       
       this._oSelectedKeys = {};
       var bKeyAdded = false;
       oKeys && Object.getOwnPropertyNames(oKeys).forEach(function(key){
              this._addSelectedKey(key, oKeys[key]);
              bKeyAdded = true;
       }, this);
       if (bKeyAdded) {
              this.setActive(true);
              this._selectItemsByKeys();
       } else {
              sap.m.ListBase.prototype.removeSelections.call(this);
       }
};

sap.m.FacetFilterList.prototype.removeSelectedKey = function(sKey, sText) {
       
       if(this._removeSelectedKey(sKey, sText)){
         this.getItems().forEach(function(oItem) {
              var sItemKey = oItem.getKey() || oItem.getText();
              sKey === sItemKey && oItem.setSelected(false);
         });         
       }
};

sap.m.FacetFilterList.prototype.removeSelectedKeys = function() {
       this._oSelectedKeys = {};
       sap.m.ListBase.prototype.removeSelections.call(this, true);
};

sap.m.FacetFilterList.prototype.removeItem = function(vItem) {
       
              // Update the selected keys cache if an item is removed
    var oItem = sap.m.ListBase.prototype.removeItem.apply(this, arguments);   
    if(!this._filtering){
    oItem && oItem.getSelected() && this.removeSelectedKey(oItem.getKey(), oItem.getText());
    return oItem;
    }

};


/**
*
* @private
*/
sap.m.FacetFilterList.prototype.init = function(){

    this._firstTime = true;
    this._saveBindInfo;

      
       // The internal associative array of keys for selected items.
       // Items that were selected but currently are not in the model are included as well. 
       this._oSelectedKeys = {};
       
       sap.m.List.prototype.init.call(this);
       this.setMode(sap.m.ListMode.MultiSelect);
       this.setIncludeItemInSelection(true);
       this.setGrowing(true);
       this.setRememberSelections(false);
       
       // Remember the search value so that it can be seeded into the search field
       this._searchValue = null;
       
       // Select items set from a variant when the growing list is updated 
       this.attachUpdateFinished(function(oEvent) {
              
              // Make sure we don't call _selectItemsByKeys twice in the case when the
              // list is being filtered. The process of selecting items gets more and more
              // expensive as the number of items increases.
              // 
              // If the list is being filtered then items are already selected in updateItems.
              var sUpdateReason = oEvent.getParameter("reason");
              if(sUpdateReason) {
                     sUpdateReason = sUpdateReason.toLowerCase();
                     if(sUpdateReason !== sap.ui.model.ChangeReason.Filter.toLowerCase()) {
                           this._selectItemsByKeys();                      
                     }
              } else {
                     this._selectItemsByKeys();
              }
       });
       
       this._allowRemoveSelections = true;
};

/**
* ListBase method override needed to prevent selected keys from being removed by removeSelections when
* the 'items' binding is reset.
* 
 * ListBase._resetItemsBinding calls removeSelections(), which is also overridden
* by FacetFilterList so that selected keys (i.e. cached selected items) are removed if bAll is true. If this
* method was not overridden then selected keys will be removed when 'items' is bound or when the model is set.
* This presents a dilemma for applications that want to load items from a listOpen event handler by setting the model. In
* that scenario it would be impossible to restore selections from a variant since selected keys must be set outside
* of the listOpen handler (otherwise the facet button or summary bar would not display pre-selected items until after
* the list was opened and then closed).
* 
 * @private
*/
sap.m.FacetFilterList.prototype._resetItemsBinding = function() {

       if(this.isBound("items")) {
              
              this._searchValue = null; // Clear the search value since items are being reinitialized
              this._allowRemoveSelections = false;
              sap.m.ListBase.prototype._resetItemsBinding.apply(this, arguments);
              this._allowRemoveSelections = true;             
       }
};

/**
* @private
*/
sap.m.FacetFilterList.prototype._fireListCloseEvent = function() {

              var aSelectedItems = this.getSelectedItems();
       var oSelectedKeys = this.getSelectedKeys();
       
       var bAllSelected = aSelectedItems.length === 0;

       
       this._firstTime = true; 
       
       this.fireListClose({
              selectedItems : aSelectedItems,
              selectedKeys : oSelectedKeys,
              allSelected : bAllSelected
       });

};

/**
* Set this list active if at least one list item is selected, or the all checkbox is selected
* 
 * @private
*/
sap.m.FacetFilterList.prototype._updateActiveState = function() {
       
       var oCheckbox = sap.ui.getCore().byId(this.getAssociation("allcheckbox"));
       if(Object.getOwnPropertyNames(this._oSelectedKeys).length > 0 || (oCheckbox && oCheckbox.getSelected())) {
              this.setActive(true);
       }
};


/**
* Handle both liveChange and search events.
* 
 * @private
*/
sap.m.FacetFilterList.prototype._handleSearchEvent = function(oEvent) {

       var sSearchVal = oEvent.getParameters()["query"];
       if (sSearchVal === undefined) {
              sSearchVal = oEvent.getParameters()["newValue"];
       }
       this._search(sSearchVal, true);
       
       // If search was cleared and a selected item is made visible, make sure to set the
       // checkbox accordingly.
       this._updateSelectAllCheckBox();  
};

/**
* Filter list items with the given search value. If an item's text value does not contain the search
* value then it is filtered out of the list. 
 * 
 * No search is done if the list is not bound to a model.
* 
 * @private
*/
sap.m.FacetFilterList.prototype._search = function(sSearchVal, force) {
	
    var bindingInfoaFilters;
    var numberOfsPath = 0;  
    
    if(force || (sSearchVal !== this._searchValue)) {                    
              this._searchValue = sSearchVal;
              var oBinding = this.getBinding("items");
              var oBindingInfo = this.getBindingInfo("items");
              if (oBindingInfo && oBindingInfo.binding){
                  bindingInfoaFilters = oBindingInfo.binding.aFilters;                               
                  if (bindingInfoaFilters.length > 0) {
                      numberOfsPath = bindingInfoaFilters[0].aFilters.length;
                     if (this._firstTime) {
                        this._saveBindInfo = bindingInfoaFilters[0].aFilters[0];
                        this._firstTime = false;                         
                     }
                  }                  
              };     
                
              

          if (oBinding) { // There will be no binding if the items aggregation has not been bound to a model, so search is not possible
                  if (sSearchVal ||  numberOfsPath > 0) {
                        var path = this.getBindingInfo("items").template.getBindingInfo("text").parts[0].path;                     
                        if (path) {
                               var oUserFilter = new sap.ui.model.Filter(path, sap.ui.model.FilterOperator.Contains, sSearchVal);
                               if ( numberOfsPath > 1) {
                                      var oFinalFilter = new sap.ui.model.Filter([oUserFilter, this._saveBindInfo], true);                        
                               }
                               else
                               {
                                      if (this._saveBindInfo > "" && oUserFilter.sPath != this._saveBindInfo.sPath) {
                                           var oFinalFilter = new sap.ui.model.Filter([oUserFilter,this._saveBindInfo], true);   
                                      }
                                      else 
                                      {
                                       	  if  (sSearchVal == "") {
                                       		  var oFinalFilter = [];
                                   		  }
                                   		  else
                                   		  {
                                        	  var oFinalFilter = new sap.ui.model.Filter([oUserFilter], true);
                                   		  }
                                      }
                               }
                               oBinding.filter(oFinalFilter, sap.ui.model.FilterType.Control);
                        }
                  } else {
                        oBinding.filter([], sap.ui.model.FilterType.Control);
                  }
           } else {
                  jQuery.sap.log.warning("No filtering performed", "The list must be defined with a binding for search to work", this);
           }
    }
         
       
};



/**
* 
 * @returns The last searched value
*/
sap.m.FacetFilterList.prototype._getSearchValue = function() {
       
       return this._searchValue;
};

/**
* Update the select all checkbox according to the state of selections in the list and the list active state.
* This has no effect for lists not in MultiSelect mode.
* 
 * @param bItemSelected The selection state of the item currently being selected or deselected.  
 * @private
*/
sap.m.FacetFilterList.prototype._updateSelectAllCheckBox = function(bItemSelected) {
       
       if(this.getMultiSelect()) { 
              var oCheckbox = sap.ui.getCore().byId(this.getAssociation("allcheckbox"));
              
              if(bItemSelected) {
                     oCheckbox && oCheckbox.setSelected(false);
              } else {
                     
                     // Checkbox may not be defined if an item is selected and the list is not displayed 
                     oCheckbox && oCheckbox.setSelected(Object.getOwnPropertyNames(this._oSelectedKeys).length === 0 && this.getActive());                           
              }                    
       }
};

/**
* Add a key to the selected keys cache.
* 
 * @param sKey
* @param sText
*/
sap.m.FacetFilterList.prototype._addSelectedKey = function(sKey, sText){
       
       if(!sKey && !sText) {
              jQuery.sap.log.error("Both sKey and sText are not defined. At least one must be defined.");
              return;
       }
  if(this.getMode() === sap.m.ListMode.SingleSelectMaster){
    this.removeSelectedKeys();
  }    
  if(!sKey) {
       sKey = sText;
  }
       this._oSelectedKeys[sKey] = sText || sKey;
};

/**
* Remove the given key from the selected keys cache. This does not deselect the associated item and therefore does
* not cause onItemSetSelected to be called.
* 
 * @param sKey The key to remove. If null, then the value of sText will be used as the key.
* @param sText If key is null then this parameter will be used as the key.
* @returns {Boolean} true if the key was removed
*/
sap.m.FacetFilterList.prototype._removeSelectedKey = function(sKey, sText) {
       
       if(!sKey && !sText) {
              jQuery.sap.log.error("Both sKey and sText are not defined. At least one must be defined.");
              return false;
       }      
       
       // Since it is common for applications to use text as the key (and not set key), set the key to the text value if no key is given
  if(!sKey) { 
       sKey = sText;
  }    
       delete this._oSelectedKeys[sKey];
       return true;
};

/**
* Determine the selected state of the given item. The item's text value will
* be used as the lookup key if the item does not have a key set. This is done
* for convenience to allow applications to only set the item text and have it
* used also as the key.
* 
 * @param oItem
* @returns true if the item is selected, false otherwise
* @private
*/
sap.m.FacetFilterList.prototype._isItemSelected = function(oItem){
       return !!(this._oSelectedKeys[oItem && (oItem.getKey() || oItem.getText())]);
};

/**
* For each item key in the selected keys cache, select the matching FacetFilterItem
* present in the 'items' aggregation.
* 
 * @private
*/
sap.m.FacetFilterList.prototype._selectItemsByKeys = function(){
       this.getItems().forEach(function (oItem){
              oItem.setSelected(this._isItemSelected(oItem));
       }, this);
};


sap.m.FacetFilterList.prototype._applySearch = function(){
	var searchVal = this._getSearchValue();
	if ( searchVal!= null) { 
		this._search(searchVal, true);
                                
    }

	
};


sap.m.FacetFilterList.prototype.onItemSetSelected = function(oItem, bSelect) {
       
       // This method override runs when setSelected is called from ListItemBase. Here we update
       // the selected keys cache based on whether the item is being selected or not. We also
       // update the select all checkbox state and list active state based on the selected
       // state of all items taken as a whole.
       if (bSelect){
              this._addSelectedKey(oItem.getKey(), oItem.getText());
       } else {
              this._removeSelectedKey(oItem.getKey(), oItem.getText());
       }
       sap.m.ListBase.prototype.onItemSetSelected.apply(this, arguments);
       
       this._updateSelectAllCheckBox(bSelect);
       this.setActive(this.getActive() || bSelect);
       !this.getDomRef() && this.getParent() && this.getParent().getDomRef() && this.getParent().invalidate();
};


sap.m.FacetFilterList.prototype.updateItems = function(sReason) {    
       
              // This method override runs when the list updates its items. The reason
       // for the update is given by sReason, which for example can be when the
       // list is filtered or when it grows.

  this._filtering = sReason === sap.ui.model.ChangeReason.Filter;
  sap.m.ListBase.prototype.updateItems.apply(this,arguments);   
  this._filtering=false;
  
  // If this list is not set to growing or it has been filtered then we must make sure that selections are
  // applied to items matching keys contained in the selected keys cache.  Selections
  // in a growing list are handled by the updateFinished handler. 
  if(!this.getGrowing() || sReason === sap.ui.model.ChangeReason.Filter) {
       this._selectItemsByKeys();
  }

};

