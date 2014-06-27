/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ViewSettingsDialog.
jQuery.sap.declare("sap.m.ViewSettingsDialog");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ViewSettingsDialog.
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
 * <li>{@link #getSortDescending sortDescending} : boolean (default: false)</li>
 * <li>{@link #getGroupDescending groupDescending} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSortItems sortItems} : sap.m.ViewSettingsItem[]</li>
 * <li>{@link #getGroupItems groupItems} : sap.m.ViewSettingsItem[]</li>
 * <li>{@link #getFilterItems filterItems} : sap.m.ViewSettingsItem[]</li>
 * <li>{@link #getPresetFilterItems presetFilterItems} : sap.m.ViewSettingsItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedSortItem selectedSortItem} : string | sap.m.ViewSettingsItem</li>
 * <li>{@link #getSelectedGroupItem selectedGroupItem} : string | sap.m.ViewSettingsItem</li>
 * <li>{@link #getSelectedPresetFilterItem selectedPresetFilterItem} : string | sap.m.ViewSettingsItem</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.ViewSettingsDialog#event:confirm confirm} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ViewSettingsDialog#event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ViewSettingsDialog#event:resetFilters resetFilters} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * ViewSettingsDialog provides functionality to easily select the options for sorting, grouping, and filtering data. It is a composite control, consisting of a modal popover and several internal lists. There are three different tabs (Sort, Group, Filter) in the dialog that can be activated by filling the respecive associations. If only one assication is filled, the other tabs are automatically hidden. The selected options can be used to create sorters and filters for the table.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16
 * @name sap.m.ViewSettingsDialog
 */
sap.ui.core.Control.extend("sap.m.ViewSettingsDialog", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"open", "getSelectedFilters", "getSelectedFilterString", "getSelectedFilterKeys", "setSelectedFilterKeys"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"title" : {type : "string", group : "Behavior", defaultValue : null},
		"sortDescending" : {type : "boolean", group : "Behavior", defaultValue : false},
		"groupDescending" : {type : "boolean", group : "Behavior", defaultValue : false}
	},
	aggregations : {
    	"sortItems" : {type : "sap.m.ViewSettingsItem", multiple : true, singularName : "sortItem", bindable : "bindable"}, 
    	"groupItems" : {type : "sap.m.ViewSettingsItem", multiple : true, singularName : "groupItem", bindable : "bindable"}, 
    	"filterItems" : {type : "sap.m.ViewSettingsItem", multiple : true, singularName : "filterItem", bindable : "bindable"}, 
    	"presetFilterItems" : {type : "sap.m.ViewSettingsItem", multiple : true, singularName : "presetFilterItem", bindable : "bindable"}
	},
	associations : {
		"selectedSortItem" : {type : "sap.m.ViewSettingsItem", multiple : false}, 
		"selectedGroupItem" : {type : "sap.m.ViewSettingsItem", multiple : false}, 
		"selectedPresetFilterItem" : {type : "sap.m.ViewSettingsItem", multiple : false}
	},
	events : {
		"confirm" : {}, 
		"cancel" : {}, 
		"resetFilters" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.ViewSettingsDialog with name <code>sClassName</code> 
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
 * @name sap.m.ViewSettingsDialog.extend
 * @function
 */

sap.m.ViewSettingsDialog.M_EVENTS = {'confirm':'confirm','cancel':'cancel','resetFilters':'resetFilters'};


/**
 * Getter for property <code>title</code>.
 * Title of the dialog. If not set, the dialog uses the default "View" or "Sort", "Group", "Filter" respectively if there is only one active tab.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.ViewSettingsDialog#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#setTitle
 * @function
 */


/**
 * Getter for property <code>sortDescending</code>.
 * If set to true, the sort order is descending, otherwise ascending (default).
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>sortDescending</code>
 * @public
 * @name sap.m.ViewSettingsDialog#getSortDescending
 * @function
 */

/**
 * Setter for property <code>sortDescending</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSortDescending  new value for property <code>sortDescending</code>
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#setSortDescending
 * @function
 */


/**
 * Getter for property <code>groupDescending</code>.
 * If set to true, the group order is descending, otherwise ascending (default).
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>groupDescending</code>
 * @public
 * @name sap.m.ViewSettingsDialog#getGroupDescending
 * @function
 */

/**
 * Setter for property <code>groupDescending</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bGroupDescending  new value for property <code>groupDescending</code>
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#setGroupDescending
 * @function
 */


/**
 * Getter for aggregation <code>sortItems</code>.<br/>
 * List of items with key and value that can be sorted over (e.g. a list of columns for a table).
 * 
 * @return {sap.m.ViewSettingsItem[]}
 * @public
 * @name sap.m.ViewSettingsDialog#getSortItems
 * @function
 */


/**
 * Inserts a sortItem into the aggregation named <code>sortItems</code>.
 *
 * @param {sap.m.ViewSettingsItem}
 *          oSortItem the sortItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the sortItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the sortItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the sortItem is inserted at 
 *             the last position        
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#insertSortItem
 * @function
 */

/**
 * Adds some sortItem <code>oSortItem</code> 
 * to the aggregation named <code>sortItems</code>.
 *
 * @param {sap.m.ViewSettingsItem}
 *            oSortItem the sortItem to add; if empty, nothing is inserted
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#addSortItem
 * @function
 */

/**
 * Removes an sortItem from the aggregation named <code>sortItems</code>.
 *
 * @param {int | string | sap.m.ViewSettingsItem} vSortItem the sortItem to remove or its index or id
 * @return {sap.m.ViewSettingsItem} the removed sortItem or null
 * @public
 * @name sap.m.ViewSettingsDialog#removeSortItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>sortItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.ViewSettingsItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.ViewSettingsDialog#removeAllSortItems
 * @function
 */

/**
 * Checks for the provided <code>sap.m.ViewSettingsItem</code> in the aggregation named <code>sortItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.ViewSettingsItem}
 *            oSortItem the sortItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.ViewSettingsDialog#indexOfSortItem
 * @function
 */
	

/**
 * Destroys all the sortItems in the aggregation 
 * named <code>sortItems</code>.
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#destroySortItems
 * @function
 */


/**
 * Binder for aggregation <code>sortItems</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#bindSortItems
 * @function
 */

/**
 * Unbinder for aggregation <code>sortItems</code>.
 *
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#unbindSortItems
 * @function
 */


/**
 * Getter for aggregation <code>groupItems</code>.<br/>
 * List of items with key and value that can be grouped on (e.g. a list of columns for a table).
 * 
 * @return {sap.m.ViewSettingsItem[]}
 * @public
 * @name sap.m.ViewSettingsDialog#getGroupItems
 * @function
 */


/**
 * Inserts a groupItem into the aggregation named <code>groupItems</code>.
 *
 * @param {sap.m.ViewSettingsItem}
 *          oGroupItem the groupItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the groupItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the groupItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the groupItem is inserted at 
 *             the last position        
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#insertGroupItem
 * @function
 */

/**
 * Adds some groupItem <code>oGroupItem</code> 
 * to the aggregation named <code>groupItems</code>.
 *
 * @param {sap.m.ViewSettingsItem}
 *            oGroupItem the groupItem to add; if empty, nothing is inserted
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#addGroupItem
 * @function
 */

/**
 * Removes an groupItem from the aggregation named <code>groupItems</code>.
 *
 * @param {int | string | sap.m.ViewSettingsItem} vGroupItem the groupItem to remove or its index or id
 * @return {sap.m.ViewSettingsItem} the removed groupItem or null
 * @public
 * @name sap.m.ViewSettingsDialog#removeGroupItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>groupItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.ViewSettingsItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.ViewSettingsDialog#removeAllGroupItems
 * @function
 */

/**
 * Checks for the provided <code>sap.m.ViewSettingsItem</code> in the aggregation named <code>groupItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.ViewSettingsItem}
 *            oGroupItem the groupItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.ViewSettingsDialog#indexOfGroupItem
 * @function
 */
	

/**
 * Destroys all the groupItems in the aggregation 
 * named <code>groupItems</code>.
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#destroyGroupItems
 * @function
 */


/**
 * Binder for aggregation <code>groupItems</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#bindGroupItems
 * @function
 */

/**
 * Unbinder for aggregation <code>groupItems</code>.
 *
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#unbindGroupItems
 * @function
 */


/**
 * Getter for aggregation <code>filterItems</code>.<br/>
 * List of items with key and value that can be filtered on (e.g. a list of columns for a table). A filterItem is associated with one or more detail filters.
 * 
 * @return {sap.m.ViewSettingsItem[]}
 * @public
 * @name sap.m.ViewSettingsDialog#getFilterItems
 * @function
 */


/**
 * Inserts a filterItem into the aggregation named <code>filterItems</code>.
 *
 * @param {sap.m.ViewSettingsItem}
 *          oFilterItem the filterItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the filterItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the filterItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the filterItem is inserted at 
 *             the last position        
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#insertFilterItem
 * @function
 */

/**
 * Adds some filterItem <code>oFilterItem</code> 
 * to the aggregation named <code>filterItems</code>.
 *
 * @param {sap.m.ViewSettingsItem}
 *            oFilterItem the filterItem to add; if empty, nothing is inserted
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#addFilterItem
 * @function
 */

/**
 * Removes an filterItem from the aggregation named <code>filterItems</code>.
 *
 * @param {int | string | sap.m.ViewSettingsItem} vFilterItem the filterItem to remove or its index or id
 * @return {sap.m.ViewSettingsItem} the removed filterItem or null
 * @public
 * @name sap.m.ViewSettingsDialog#removeFilterItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>filterItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.ViewSettingsItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.ViewSettingsDialog#removeAllFilterItems
 * @function
 */

/**
 * Checks for the provided <code>sap.m.ViewSettingsItem</code> in the aggregation named <code>filterItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.ViewSettingsItem}
 *            oFilterItem the filterItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.ViewSettingsDialog#indexOfFilterItem
 * @function
 */
	

/**
 * Destroys all the filterItems in the aggregation 
 * named <code>filterItems</code>.
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#destroyFilterItems
 * @function
 */


/**
 * Binder for aggregation <code>filterItems</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#bindFilterItems
 * @function
 */

/**
 * Unbinder for aggregation <code>filterItems</code>.
 *
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#unbindFilterItems
 * @function
 */


/**
 * Getter for aggregation <code>presetFilterItems</code>.<br/>
 * List of preset filter items that allow the selection of more complex or custom filters. These entries are displayed at the top of the filter tab.
 * 
 * @return {sap.m.ViewSettingsItem[]}
 * @public
 * @name sap.m.ViewSettingsDialog#getPresetFilterItems
 * @function
 */


/**
 * Inserts a presetFilterItem into the aggregation named <code>presetFilterItems</code>.
 *
 * @param {sap.m.ViewSettingsItem}
 *          oPresetFilterItem the presetFilterItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the presetFilterItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the presetFilterItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the presetFilterItem is inserted at 
 *             the last position        
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#insertPresetFilterItem
 * @function
 */

/**
 * Adds some presetFilterItem <code>oPresetFilterItem</code> 
 * to the aggregation named <code>presetFilterItems</code>.
 *
 * @param {sap.m.ViewSettingsItem}
 *            oPresetFilterItem the presetFilterItem to add; if empty, nothing is inserted
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#addPresetFilterItem
 * @function
 */

/**
 * Removes an presetFilterItem from the aggregation named <code>presetFilterItems</code>.
 *
 * @param {int | string | sap.m.ViewSettingsItem} vPresetFilterItem the presetFilterItem to remove or its index or id
 * @return {sap.m.ViewSettingsItem} the removed presetFilterItem or null
 * @public
 * @name sap.m.ViewSettingsDialog#removePresetFilterItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>presetFilterItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.ViewSettingsItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.ViewSettingsDialog#removeAllPresetFilterItems
 * @function
 */

/**
 * Checks for the provided <code>sap.m.ViewSettingsItem</code> in the aggregation named <code>presetFilterItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.ViewSettingsItem}
 *            oPresetFilterItem the presetFilterItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.ViewSettingsDialog#indexOfPresetFilterItem
 * @function
 */
	

/**
 * Destroys all the presetFilterItems in the aggregation 
 * named <code>presetFilterItems</code>.
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#destroyPresetFilterItems
 * @function
 */


/**
 * Binder for aggregation <code>presetFilterItems</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#bindPresetFilterItems
 * @function
 */

/**
 * Unbinder for aggregation <code>presetFilterItems</code>.
 *
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#unbindPresetFilterItems
 * @function
 */


/**
 * Sort item that is selected. It can be set by either passing a key or the item itself to the function "setSelectedSortItem"
 *
 * @return {string} Id of the element which is the current target of the <code>selectedSortItem</code> association, or null
 * @public
 * @name sap.m.ViewSettingsDialog#getSelectedSortItem
 * @function
 */

/**
 * Sort item that is selected. It can be set by either passing a key or the item itself to the function "setSelectedSortItem"
 *
 * @param {string | sap.m.ViewSettingsItem} vSelectedSortItem 
 *    Id of an element which becomes the new target of this <code>selectedSortItem</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#setSelectedSortItem
 * @function
 */


	
/**
 * Group item that is selected. It can be set by either passing a key or the item itself to the function "setSelectedGrouptItem"
 *
 * @return {string} Id of the element which is the current target of the <code>selectedGroupItem</code> association, or null
 * @public
 * @name sap.m.ViewSettingsDialog#getSelectedGroupItem
 * @function
 */

/**
 * Group item that is selected. It can be set by either passing a key or the item itself to the function "setSelectedGrouptItem"
 *
 * @param {string | sap.m.ViewSettingsItem} vSelectedGroupItem 
 *    Id of an element which becomes the new target of this <code>selectedGroupItem</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#setSelectedGroupItem
 * @function
 */


	
/**
 * Preset filter item that is selected. It can be set by either passing a key or the item itself to the function "setSelectedPresetFilterItem". Note that either a preset filter OR multiple detail filters can be active at the same time.
 *
 * @return {string} Id of the element which is the current target of the <code>selectedPresetFilterItem</code> association, or null
 * @public
 * @name sap.m.ViewSettingsDialog#getSelectedPresetFilterItem
 * @function
 */

/**
 * Preset filter item that is selected. It can be set by either passing a key or the item itself to the function "setSelectedPresetFilterItem". Note that either a preset filter OR multiple detail filters can be active at the same time.
 *
 * @param {string | sap.m.ViewSettingsItem} vSelectedPresetFilterItem 
 *    Id of an element which becomes the new target of this <code>selectedPresetFilterItem</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#setSelectedPresetFilterItem
 * @function
 */


	
/**
 * The event indicates that the user has pressed the OK button and the selected sort, group, and filter settings should be applied to the data on this page. 
 *
 * @name sap.m.ViewSettingsDialog#confirm
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.m.ViewSettingsItem} oControlEvent.getParameters.sortItem Selected sort item.
 * @param {boolean} oControlEvent.getParameters.sortDescending Selected sort order (true = descending, false = ascending).
 * @param {sap.m.ViewSettingsItem} oControlEvent.getParameters.groupItem Selected group item
 * @param {boolean} oControlEvent.getParameters.groupDescending Selected group order (true = descending, false = ascending).
 * @param {sap.m.ViewSettingsItem} oControlEvent.getParameters.presetFilterItem Selected preset filter item.
 * @param {sap.m.ViewSettingsItem[]} oControlEvent.getParameters.filterItems Selected filters in an array of ViewSettingsItem.
 * @param {object} oControlEvent.getParameters.filterKeys Selected filter items in an object notation format: { key: boolean }. If a custom control filter was displayed (e.g. the user clicked on the filter item), the value for its key is set to true to indicate that there has been an interaction with the control.
 * @param {string} oControlEvent.getParameters.filterString Selected filter items in string format to display in a control's header bar in format "Filtered by: key (subkey1, subkey2, subkey3)".
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'confirm' event of this <code>sap.m.ViewSettingsDialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ViewSettingsDialog</code>.<br/> itself. 
 *  
 * The event indicates that the user has pressed the OK button and the selected sort, group, and filter settings should be applied to the data on this page. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.ViewSettingsDialog</code>.<br/> itself.
 *
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#attachConfirm
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'confirm' event of this <code>sap.m.ViewSettingsDialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#detachConfirm
 * @function
 */

/**
 * Fire event confirm to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'sortItem' of type <code>sap.m.ViewSettingsItem</code> Selected sort item.</li>
 * <li>'sortDescending' of type <code>boolean</code> Selected sort order (true = descending, false = ascending).</li>
 * <li>'groupItem' of type <code>sap.m.ViewSettingsItem</code> Selected group item</li>
 * <li>'groupDescending' of type <code>boolean</code> Selected group order (true = descending, false = ascending).</li>
 * <li>'presetFilterItem' of type <code>sap.m.ViewSettingsItem</code> Selected preset filter item.</li>
 * <li>'filterItems' of type <code>sap.m.ViewSettingsItem[]</code> Selected filters in an array of ViewSettingsItem.</li>
 * <li>'filterKeys' of type <code>object</code> Selected filter items in an object notation format: { key: boolean }. If a custom control filter was displayed (e.g. the user clicked on the filter item), the value for its key is set to true to indicate that there has been an interaction with the control.</li>
 * <li>'filterString' of type <code>string</code> Selected filter items in string format to display in a control's header bar in format "Filtered by: key (subkey1, subkey2, subkey3)".</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ViewSettingsDialog#fireConfirm
 * @function
 */


/**
 * Event is called when the cancel button is pressed. It can be used to set the state of custom filter controls. 
 *
 * @name sap.m.ViewSettingsDialog#cancel
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'cancel' event of this <code>sap.m.ViewSettingsDialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ViewSettingsDialog</code>.<br/> itself. 
 *  
 * Event is called when the cancel button is pressed. It can be used to set the state of custom filter controls. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.ViewSettingsDialog</code>.<br/> itself.
 *
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#attachCancel
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'cancel' event of this <code>sap.m.ViewSettingsDialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#detachCancel
 * @function
 */

/**
 * Fire event cancel to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ViewSettingsDialog#fireCancel
 * @function
 */


/**
 * Event is called when the reset filters button is pressed. It can be used to clear the state of custom filter controls. 
 *
 * @name sap.m.ViewSettingsDialog#resetFilters
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'resetFilters' event of this <code>sap.m.ViewSettingsDialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ViewSettingsDialog</code>.<br/> itself. 
 *  
 * Event is called when the reset filters button is pressed. It can be used to clear the state of custom filter controls. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.ViewSettingsDialog</code>.<br/> itself.
 *
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#attachResetFilters
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'resetFilters' event of this <code>sap.m.ViewSettingsDialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsDialog#detachResetFilters
 * @function
 */

/**
 * Fire event resetFilters to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ViewSettingsDialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ViewSettingsDialog#fireResetFilters
 * @function
 */


/**
 * Open the dialog.
 *
 * @name sap.m.ViewSettingsDialog.prototype.open
 * @function
 * @param {object} 
 *         oControl
 *         This is the control to which the dialog will be placed. It can be not only a UI5 control, but also an existing dom reference.

 * @type sap.m.ViewSettingsDialog
 * @public
 */


/**
 * Returns the selected filters as an array of ViewSettingsItems. It can be used to create matching sorters and filters to apply the selected settings to the data.
 *
 * @name sap.m.ViewSettingsDialog.prototype.getSelectedFilters
 * @function

 * @type sap.m.ViewSettingsItem[]
 * @public
 */


/**
 * Returns the filter string in the format "filter name (subfilter1 name, subfilter2 name, ...), ..." to be displayed in table/list headers. For custom filters and preset filters it will only add the filter name to the resulting string.
 *
 * @name sap.m.ViewSettingsDialog.prototype.getSelectedFilterString
 * @function

 * @type string
 * @public
 */


/**
 * Returns the filter state of the dialog based on filter keys 8the following format: { key: boolean }. It can be used to create matching sorters and filters to apply the selected settings to the data.
 *
 * @name sap.m.ViewSettingsDialog.prototype.getSelectedFilterKeys
 * @function

 * @type object
 * @public
 */


/**
 * Sets the filter state of the dialog based on filter keys.
 *
 * @name sap.m.ViewSettingsDialog.prototype.setSelectedFilterKeys
 * @function
 * @param {object} 
 *         oFilters
 *         Configuration object to set the dialogs filter state with the following format: { key: boolean }. Setting boolean to true will set the filter to true, false or ommiting an entry will set the filter to false. It can be used to set the dialog state based on presets.

 * @type sap.m.ViewSettingsDialog
 * @public
 */


// Start of sap\m\ViewSettingsDialog.js
jQuery.sap.require("sap.ui.core.IconPool");

/* =========================================================== */
/* begin: API methods */
/* =========================================================== */

sap.m.ViewSettingsDialog.prototype.init = function() {
	this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.m");
	this._sDialogWidth = "350px";
	this._sDialogHeight = "434px";
	this._bAppendedToUIArea = false; // this control does not have a
										// renderer, so we need to take care of
										// adding it to the ui tree manually
	this._showSubHeader = false;
	this._filterDetailList = undefined;
	this._iContentPage = -1;
	this._oContentItem = null;
	this._oPreviousState = {};
};

sap.m.ViewSettingsDialog.prototype.exit = function() {
	// helper variables
	this._rb = null;
	this._sDialogWidth = null;
	this._sDialogHeight = null;
	this._bAppendedToUIArea = null;
	this._showSubHeader = null;
	this._iContentPage = null;
	this._oContentItem = null;
	this._oPreviousState = null;
	this._sortContent = null;
	this._groupContent = null;
	this._filterContent = null;

	// controls that are internally managed and may or may not be assigned to an
	// aggregation (have to be destroyed manually to be sure)

	// dialog
	if (this._dialog) {
		this._dialog.destroy();
		this._dialog = null;
	}
	if (this._navContainer) {
		this._navContainer.destroy();
		this._navContainer = null;
	}
	if (this._titleLabel) {
		this._titleLabel.destroy();
		this._titleLabel = null;
	}

	// page1 (sort/group/filter)
	if (this._page1) {
		this._page1.destroy();
		this._page1 = null;
	}
	if (this._header) {
		this._header.destroy();
		this._header = null;
	}
	if (this._resetButton) {
		this._resetButton.destroy();
		this._resetButton = null;
	}
	if (this._subHeader) {
		this._subHeader.destroy();
		this._subHeader = null;
	}
	if (this._segmentedButton) {
		this._segmentedButton.destroy();
		this._segmentedButton = null;
	}
	if (this._sortButton) {
		this._sortButton.destroy();
		this._sortButton = null;
	}
	if (this._groupButton) {
		this._groupButton.destroy();
		this._groupButton = null;
	}
	if (this._filterButton) {
		this._filterButton.destroy();
		this._filterButton = null;
	}
	if (this._sortList) {
		this._sortList.destroy();
		this._sortList = null;
	}
	if (this._sortOrderList) {
		this._sortOrderList.destroy();
		this._sortOrderList = null;
	}

	if (this._groupList) {
		this._groupList.destroy();
		this._groupList = null;
	}
	if (this._groupOrderList) {
		this._groupOrderList.destroy();
		this._groupOrderList = null;
	}

	if (this._presetFilterList) {
		this._presetFilterList.destroy();
		this._presetFilterList = null;
	}
	if (this._filterList) {
		this._filterList.destroy();
		this._filterList = null;
	}

	// page2 (filter details)
	if (this._page2) {
		this._page2.destroy();
		this._page2 = null;
	}
	if (this._detailTitleLabel) {
		this._detailTitleLabel.destroy();
		this._detailTitleLabel = null;
	}
	if (this._filterDetailList) {
		this._filterDetailList.destroy();
		this._filterDetailList = null;
	}
};

/*
 * Invalidates the control (suppressed because we don't have a renderer)
 * @overwrite @public
 */
sap.m.ViewSettingsDialog.prototype.invalidate = function() {
	// CSN #80686/2014: only invalidate inner dialog if call does not come from inside
	if (this._dialog && (!arguments[0] || arguments[0] && arguments[0].getId() !== this.getId() + "-dialog")) {
		this._dialog.invalidate(arguments);
	} else {
		sap.ui.core.Control.prototype.invalidate.apply(this, arguments);
	}
};

/**
 * Set the title of the internal dialog
 * 
 * @overwrite
 * @public
 * @param {string}
 *            sTitle the title text for the dialog
 * @return {sap.m.ViewSettingsDialog} this pointer for chaining
 */
sap.m.ViewSettingsDialog.prototype.setTitle = function(sTitle) {
	this._getTitleLabel().setText(sTitle);
	this.setProperty("title", sTitle, true);
	return this;
};

/**
 * Adds a sort item and sets the association to reflect the selected state
 * 
 * @overwrite
 * @public
 * @param {sap.m.ViewSettingsItem}
 *            oItem the item to be added to the aggregation
 * @return {sap.m.ViewSettingsDialog} this pointer for chaining
 */
sap.m.ViewSettingsDialog.prototype.addSortItem = function(oItem) {
	if (oItem.getSelected()) {
		this.setSelectedSortItem(oItem);
	}
	this.addAggregation("sortItems", oItem);
	return this;
};

/**
 * Adds a group item and sets the association to reflect the selected state
 * 
 * @overwrite
 * @public
 * @param {sap.m.ViewSettingsItem}
 *            oItem the item to be added to the aggregation
 * @return {sap.m.ViewSettingsDialog} this pointer for chaining
 */
sap.m.ViewSettingsDialog.prototype.addGroupItem = function(oItem) {
	if (oItem.getSelected()) {
		this.setSelectedGroupItem(oItem);
	}
	this.addAggregation("groupItems", oItem);
	return this;
};

/**
 * Adds a preset filter item and sets the association to reflect the selected
 * state
 * 
 * @overwrite
 * @public
 * @param {sap.m.ViewSettingsItem}
 *            oItem the selected item or a string with the key
 * @return {sap.m.ViewSettingsDialog} this pointer for chaining
 */
sap.m.ViewSettingsDialog.prototype.addPresetFilterItem = function(oItem) {
	if (oItem.getSelected()) {
		this.setSelectedPresetFilterItem(oItem);
	}
	this.addAggregation("presetFilterItems", oItem);
	return this;
};

/**
 * Set the selected sort item (either by key or by item)
 * 
 * @overwrite
 * @public
 * @param {sap.m.ViewSettingsItem}
 *            oItem the selected item or a string with the key
 * @return {sap.m.ViewSettingsDialog} this pointer for chaining
 */
sap.m.ViewSettingsDialog.prototype.setSelectedSortItem = function(oItem) {
	var aItems = this.getSortItems(), i = 0;

	// convenience, also allow strings
	if (typeof oItem === "string") {
		// find item with this id
		for (; i < aItems.length; i++) {
			if (aItems[i].getKey() === oItem) {
				oItem = aItems[i];
				break;
			}
		}
	}

	// set selected = true for this item & selected = false for all others items
	for (i = 0; i < aItems.length; i++) {
		aItems[i].setSelected(false);
	}
	if (oItem) {
		oItem.setSelected(true);
	}

	// update the list selection
	if (this._getDialog().isOpen()) {
		this._updateListSelection(this._sortList, oItem);
	}
	this.setAssociation("selectedSortItem", oItem, true);
	return this;
};

/**
 * Set the selected group item (either by key or by item)
 * 
 * @overwrite
 * @public
 * @param {sap.m.ViewSettingsItem}
 *            oItem the selected item or a string with the key
 * @return {sap.m.ViewSettingsDialog} this pointer for chaining
 */
sap.m.ViewSettingsDialog.prototype.setSelectedGroupItem = function(oItem) {
	var aItems = this.getGroupItems(), i = 0;

	// convenience, also allow strings
	if (typeof oItem === "string") {
		// find item with this id
		for (; i < aItems.length; i++) {
			if (aItems[i].getKey() === oItem) {
				oItem = aItems[i];
				break;
			}
		}
	}

	// set selected = true for this item & selected = false for all others items
	for (i = 0; i < aItems.length; i++) {
		aItems[i].setSelected(false);
	}
	if (oItem) {
		oItem.setSelected(true);
	}

	// update the list selection
	if (this._getDialog().isOpen()) {
		this._updateListSelection(this._groupList, oItem);
	}
	this.setAssociation("selectedGroupItem", oItem, true);
	return this;
};

/**
 * Set the selected preset filter item
 * 
 * @overwrite
 * @public
 * @param {sap.m.ViewSettingsItem}
 *            oItem the selected item or a string with the key
 * @return {sap.m.ViewSettingsDialog} this pointer for chaining
 */
sap.m.ViewSettingsDialog.prototype.setSelectedPresetFilterItem = function(oItem) {
	var aItems = this.getPresetFilterItems(), i = 0;

	// convenience, also allow strings
	if (typeof oItem === "string") {
		// find item with this id
		for (; i < aItems.length; i++) {
			if (aItems[i].getKey() === oItem) {
				oItem = aItems[i];
				break;
			}
		}
	}
	// set selected = true for this item & selected = false for all others items
	for (i = 0; i < aItems.length; i++) {
		aItems[i].setSelected(false);
	}
	if (oItem) {
		oItem.setSelected(true);
		// clear filters (only one mode is allowed, preset filters or filters)
		this._clearSelectedFilters();
	}
	this.setAssociation("selectedPresetFilterItem", oItem, true);
	return this;
};

/**
 * Opens the view settings dialog relative to the parent control
 * 
 * @public
 * @param {sap.ui.core.Control}
 *            oParentControl the parent control
 * @return {sap.m.ViewSettingsDialog} this pointer for chaining
 */
sap.m.ViewSettingsDialog.prototype.open = function(oParentControl) {
	// add to static UI area manually because we don't have a renderer
	if (!this.getParent() && !this._bAppendedToUIArea) {
		var oStatic = sap.ui.getCore().getStaticAreaRef();
		oStatic = sap.ui.getCore().getUIArea(oStatic);
		oStatic.addContent(this, true);
		this._bAppendedToUIArea = true;
	}

	// init the dialog content based on the aggregations
	this._initDialogContent();

	// store the current dialog state to be able to reset it on cancel
	this._oPreviousState = {
		sortItem : sap.ui.getCore().byId(this.getSelectedSortItem()),
		sortDescending : this.getSortDescending(),
		groupItem : sap.ui.getCore().byId(this.getSelectedGroupItem()),
		groupDescending : this.getGroupDescending(),
		presetFilterItem : sap.ui.getCore().byId(
				this.getSelectedPresetFilterItem()),
		filterKeys : this.getSelectedFilterKeys(),
		navPage : this._getNavContainer().getCurrentPage(),
		contentPage : this._iContentPage,
		contentItem : this._oContentItem
	};

	// open dialog
	this._getDialog().open();
	return this;
};

/**
 * Returns the selected filters in an array of ViewSettingsItem.
 * 
 * @overwrite
 * @public
 * @return {sap.m.ViewSettingsItem[]} an array of selected filter items
 */
sap.m.ViewSettingsDialog.prototype.getSelectedFilterItems = function() {
	var aSelectedFilterItems = [], aFilterItems = this.getFilterItems(), aSubFilterItems, bMultiSelect = true, i = 0, j;

	for (; i < aFilterItems.length; i++) {
		if (aFilterItems[i] instanceof sap.m.ViewSettingsCustomItem) {
			if (aFilterItems[i].getSelected()) {
				aSelectedFilterItems.push(aFilterItems[i]);
			}
		} else if (aFilterItems[i] instanceof sap.m.ViewSettingsFilterItem) {
			aSubFilterItems = aFilterItems[i].getItems();
			bMultiSelect = aFilterItems[i].getMultiSelect();
			for (j = 0; j < aSubFilterItems.length; j++) {
				if (aSubFilterItems[j].getSelected()) {
					aSelectedFilterItems.push(aSubFilterItems[j]);
					if (!bMultiSelect) {
						break; // only first item is added to the selection on
								// single select items
					}
				}
			}
		}
	}

	return aSelectedFilterItems;
};

/**
 * Get the filter string in the format "filter name (subfilter1 name, subfilter2
 * name, ...), ..." For custom filters and preset filters it will only add the
 * filter name to the resulting string
 * 
 * @public
 * @return {string} the selected filter string
 */
sap.m.ViewSettingsDialog.prototype.getSelectedFilterString = function() {
	var sFilterString = "", sSubfilterString, oPresetFilterItem = this
			.getSelectedPresetFilterItem(), aFilterItems = this
			.getFilterItems(), aSubFilterItems, bMultiSelect = true, i = 0, j;

	if (oPresetFilterItem) {
		// preset filter: add "filter name"
		sFilterString = this._rb.getText("VIEWSETTINGS_FILTERTEXT").concat(
				" " + sap.ui.getCore().byId(oPresetFilterItem).getText());
	} else { // standard & custom filters
		for (; i < aFilterItems.length; i++) {
			if (aFilterItems[i] instanceof sap.m.ViewSettingsCustomItem) {
				// custom filter: add "filter name,"
				if (aFilterItems[i].getSelected()) {
					sFilterString += aFilterItems[i].getText() + ", ";
				}
			} else if (aFilterItems[i] instanceof sap.m.ViewSettingsFilterItem) {
				// standard filter: add "filter name (sub filter 1 name, sub
				// filter 2 name, ...), "
				aSubFilterItems = aFilterItems[i].getItems();
				bMultiSelect = aFilterItems[i].getMultiSelect();
				sSubfilterString = "";
				for (j = 0; j < aSubFilterItems.length; j++) {
					if (aSubFilterItems[j].getSelected()) {
						sSubfilterString += aSubFilterItems[j].getText() + ", ";
						if (!bMultiSelect) {
							break; // only first item is added to the selection
									// on single select items
						}
					}
				}
				// remove last comma
				sSubfilterString = sSubfilterString.substring(0,
						sSubfilterString.length - 2);

				// add surrounding brackets and comma
				if (sSubfilterString) {
					sSubfilterString = " (" + sSubfilterString + ")";
					sFilterString += aFilterItems[i].getText()
							+ sSubfilterString + ", ";
				}
			}
		}

		// remove last comma
		sFilterString = sFilterString.substring(0, sFilterString.length - 2);

		// add "Filtered by: " text
		if (sFilterString) {
			sFilterString = this._rb.getText("VIEWSETTINGS_FILTERTEXT").concat(
					" " + sFilterString);
		}
	}
	return sFilterString;
};

/**
 * Get the selected filter object in format {key: boolean}
 * 
 * @public
 * @return {object} an object with item and subitem keys
 */
sap.m.ViewSettingsDialog.prototype.getSelectedFilterKeys = function() {
	var oSelectedFilterKeys = {}, aSelectedFilterItems = this
			.getSelectedFilterItems(), i = 0;

	for (; i < aSelectedFilterItems.length; i++) {
		oSelectedFilterKeys[aSelectedFilterItems[i].getKey()] = aSelectedFilterItems[i]
				.getSelected();
	}

	return oSelectedFilterKeys;
};

/**
 * Set the selected filter object in format {key: boolean}
 * 
 * @public
 * @param {object}
 *            oAny an object with filter item and sub keys
 * @return {sap.m.ViewSettingsDialog} this pointer for chaining
 */
sap.m.ViewSettingsDialog.prototype.setSelectedFilterKeys = function(
		oSelectedFilterKeys) {
	var sKey = "", aFilterItems = this.getFilterItems(), aSubFilterItems = {}, oFilterItem, bMultiSelect, i, j, k;

	// clear preset filters (only one mode is allowed, preset filters or
	// filters)
	if (Object.keys(oSelectedFilterKeys).length) {
		this._clearPresetFilter();
	}

	// loop through the provided object array {key -> subKey -> boolean}
	for (sKey in oSelectedFilterKeys) { // filter key
		oFilterItem = null;
		if (oSelectedFilterKeys.hasOwnProperty(sKey)) {
			for (i = 0; i < aFilterItems.length; i++) {
				if (aFilterItems[i] instanceof sap.m.ViewSettingsCustomItem) {
					// just compare the key of this control
					if (aFilterItems[i].getKey() === sKey) {
						oFilterItem = aFilterItems[i];
						aFilterItems[i].setSelected(oSelectedFilterKeys[sKey]);
					}
				} else if (aFilterItems[i] instanceof sap.m.ViewSettingsFilterItem) {
					// find the sub filter item with the specified key
					aSubFilterItems = aFilterItems[i].getItems();
					bMultiSelect = aFilterItems[i].getMultiSelect();
					for (j = 0; j < aSubFilterItems.length; j++) {
						if (aSubFilterItems[j].getKey() === sKey) {
							oFilterItem = aSubFilterItems[j];
							// set all other entries to false for single select
							// entries
							if (!bMultiSelect) {
								for (k = 0; k < aSubFilterItems.length; k++) {
									aSubFilterItems[k].setSelected(false);
								}
							}
							break;
						}
					}
				}
				if (oFilterItem) {
					break;
				}
			}

			// skip if we don't have an item with this key
			if (oFilterItem === null) {
				jQuery.sap.log.warning('Cannot set state for key "' + sKey
						+ '" because there is no filter with these keys');
				continue;
			}

			// set the the selected state on the item
			oFilterItem.setSelected(oSelectedFilterKeys[sKey]);
		}
	}

	return this;
};

/* =========================================================== */
/* end: API methods */
/* =========================================================== */

/* =========================================================== */
/* begin: internal methods and properties */
/* =========================================================== */

/*
 * Lazy initialization of the internal dialog @private
 */
sap.m.ViewSettingsDialog.prototype._getDialog = function() {
	var that = this;

	// create an internal instance of a dialog
	if (this._dialog === undefined) {
		this._dialog = new sap.m.Dialog(this.getId() + "-dialog", {
			showHeader : false,
			stretch : sap.ui.Device.system.phone,
			verticalScrolling : true,
			horizontalScrolling : false,
			contentWidth : this._sDialogWidth,
			contentHeight : this._sDialogHeight,
			content : this._getNavContainer(),
			beginButton : new sap.m.Button({
				text : this._rb.getText("VIEWSETTINGS_ACCEPT")
			}).attachPress(this._onConfirm, this),
			endButton : new sap.m.Button({
				text : this._rb.getText("VIEWSETTINGS_CANCEL")
			}).attachPress(this._onCancel, this)
		}).addStyleClass("sapMVSD");

		// CSN# 3696452/2013: ESC key should also cancel dialog, not only close
		// it
		var fnDialogEscape = this._dialog.onsapescape;
		this._dialog.onsapescape = function(oEvent) {
			// call original escape function of the dialog
			if (fnDialogEscape) {
				fnDialogEscape.call(that._dialog, oEvent);
			}
			// execute cancel action
			that._onCancel();
		};
	}

	return this._dialog;
};

/*
 * Lazy initialization of the internal nav container @private
 */
sap.m.ViewSettingsDialog.prototype._getNavContainer = function() {
	// create an internal instance of a dialog
	if (this._navContainer === undefined) {
		this._navContainer = new sap.m.NavContainer(this.getId()
				+ '-navcontainer', {
			pages : []
		});
	}
	return this._navContainer;
};

/*
 * Lazy initialization of the internal title label @private
 */
sap.m.ViewSettingsDialog.prototype._getTitleLabel = function() {
	if (this._titleLabel === undefined) {
		this._titleLabel = new sap.m.Label(this.getId() + "-title", {
			text : this._rb.getText("VIEWSETTINGS_TITLE")
		}).addStyleClass("sapMVSDTitle");
	}
	return this._titleLabel;
};

/*
 * Lazy initialization of the internal reset button @private
 */
sap.m.ViewSettingsDialog.prototype._getResetButton = function() {
	var that = this;

	if (this._resetButton === undefined) {
		this._resetButton = new sap.m.Button(this.getId() + "-resetbutton", {
			icon : sap.ui.core.IconPool.getIconURI("refresh"),
			press : function() {
				that._onClearFilters();
			},
			tooltip : this._rb.getText("VIEWSETTINGS_CLEAR_FILTER_TOOLTIP")
		});
	}
	return this._resetButton;
};

/*
 * Lazy initialization of the internal detail title lable @private
 */
sap.m.ViewSettingsDialog.prototype._getDetailTitleLabel = function() {
	if (this._detailTitleLabel === undefined) {
		this._detailTitleLabel = new sap.m.Label(this.getId() + "-detailtitle",
				{
					text : this._rb.getText("VIEWSETTINGS_TITLE_FILTERBY")
				}).addStyleClass("sapMVSDTitle");
	}
	return this._detailTitleLabel;
};

/*
 * Lazy initialization of the internal header @private
 */
sap.m.ViewSettingsDialog.prototype._getHeader = function() {
	if (this._header === undefined) {
		this._header = new sap.m.Bar({
			contentMiddle : [ this._getTitleLabel() ],
		}).addStyleClass("sapMVSDBar");
	}
	return this._header;
};

/*
 * Lazy initialization of the internal sub header @private
 */
sap.m.ViewSettingsDialog.prototype._getSubHeader = function() {
	if (this._subHeader === undefined) {
		this._subHeader = new sap.m.Bar({
			contentLeft : [ this._getSegmentedButton() ]
		}).addStyleClass("sapMVSDBar");
	}
	return this._subHeader;
};

/*
 * Lazy initialization of the internal segmented button @private
 */
sap.m.ViewSettingsDialog.prototype._getSegmentedButton = function() {
	var that = this;

	if (this._segmentedButton === undefined) {
		this._segmentedButton = new sap.m.SegmentedButton({
			select : function(oEvent) {
				var selectedId = oEvent.getParameter('id');
				if (selectedId === that.getId() + "-sortbutton") {
					that._switchToPage(0);
				} else if (selectedId === that.getId() + "-groupbutton") {
					that._switchToPage(1);
				} else if (selectedId === that.getId() + "-filterbutton") {
					that._switchToPage(2);
				}
				jQuery.sap.log.info('press event segmented: '
						+ oEvent.getParameter('id'));
			}
		}).addStyleClass("sapMVSDSeg");

		// workaround to fix flickering caused by css measurement in
		// SegmentedButton
		this._segmentedButton._fCalcBtnWidth = function() {
			// do nothing here
		};
	}
	return this._segmentedButton;
};

/*
 * Lazy initialization of the internal sort button @private
 */
sap.m.ViewSettingsDialog.prototype._getSortButton = function() {
	if (this._sortButton === undefined) {
		this._sortButton = new sap.m.Button(this.getId() + "-sortbutton", {
			visible : false, // controlled by update state method
			icon : sap.ui.core.IconPool.getIconURI("sort"),
			tooltip : this._rb.getText("VIEWSETTINGS_TITLE_SORT")
		});
	}
	return this._sortButton;
};

/*
 * Lazy initialization of the internal group button @private
 */
sap.m.ViewSettingsDialog.prototype._getGroupButton = function() {
	if (this._groupButton === undefined) {
		this._groupButton = new sap.m.Button(this.getId() + "-groupbutton", {
			visible : false, // controlled by update state method
			icon : sap.ui.core.IconPool.getIconURI("group-2"),
			tooltip : this._rb.getText("VIEWSETTINGS_TITLE_GROUP")
		});
	}
	return this._groupButton;
};

/*
 * Lazy initialization of the internal filter button @private
 */
sap.m.ViewSettingsDialog.prototype._getFilterButton = function() {
	if (this._filterButton === undefined) {
		this._filterButton = new sap.m.Button(this.getId() + "-filterbutton", {
			visible : false, // controlled by update state method
			icon : sap.ui.core.IconPool.getIconURI("filter"),
			tooltip : this._rb.getText("VIEWSETTINGS_TITLE_FILTER")
		});
	}
	return this._filterButton;
};

/*
 * Lazy initialization of the internal page1 (sort/group/filter) @private
 */
sap.m.ViewSettingsDialog.prototype._getPage1 = function() {
	if (this._page1 === undefined) {
		this._page1 = new sap.m.Page(this.getId() + '-page1', {
			title : this._rb.getText("VIEWSETTINGS_TITLE"),
			customHeader : this._getHeader()
		});
		this._getNavContainer().addPage(this._page1); // sort, group, filter
	}
	return this._page1;
};

/*
 * Lazy initialization of the internal page2 (detail filters) @private
 */
sap.m.ViewSettingsDialog.prototype._getPage2 = function() {
	var that = this, oDetailHeader, oBackButton, oDetailResetButton;

	if (this._page2 === undefined) {
		// init internal page content
		oBackButton = new sap.m.Button(this.getId() + "-backbutton", {
			icon : sap.ui.core.IconPool.getIconURI("nav-back"),
			press : function() {
				that._updateFilterCounters();
				jQuery.sap.delayedCall(0, that._navContainer, "back");
				that._switchToPage(2);
				that._segmentedButton.setSelectedButton(that._filterButton);
			}
		});
		oDetailResetButton = new sap.m.Button(this.getId()
				+ "-detailresetbutton", {
			icon : sap.ui.core.IconPool.getIconURI("refresh"),
			press : function() {
				that._onClearFilters();
			},
			tooltip : this._rb.getText("VIEWSETTINGS_CLEAR_FILTER_TOOLTIP")
		});
		oDetailHeader = new sap.m.Bar({
			contentLeft : [ oBackButton ],
			contentMiddle : [ this._getDetailTitleLabel() ],
			contentRight : [ oDetailResetButton ]
		}).addStyleClass("sapMVSDBar");

		this._page2 = new sap.m.Page(this.getId() + '-page2', {
			title : this._rb.getText("VIEWSETTINGS_TITLE_FILTERBY"),
			customHeader : oDetailHeader
		});
		this._getNavContainer().addPage(this._page2); // filter details
	}
	return this._page2;
};

/*
 * Create and initialize the sort content controls @private
 */
sap.m.ViewSettingsDialog.prototype._initSortContent = function() {
	var that = this;

	if (this._sortContent) {
		return;
	}
	this._sortOrderList = new sap.m.List(this.getId() + "-sortorderlist", {
		mode : sap.m.ListMode.SingleSelectLeft,
		includeItemInSelection : true,
		selectionChange : function(oEvent) {
			that
					.setSortDescending(oEvent.getParameter("listItem").data(
							"item"));
		}
	}).addStyleClass("sapMVSDUpperList");
	this._sortOrderList.addItem(new sap.m.StandardListItem({
		title : this._rb.getText("VIEWSETTINGS_ASCENDING_ITEM")
	}).data("item", false).setSelected(true));
	this._sortOrderList.addItem(new sap.m.StandardListItem({
		title : this._rb.getText("VIEWSETTINGS_DESCENDING_ITEM")
	}).data("item", true));

	this._sortList = new sap.m.List(this.getId() + "-sortlist",
			{
				mode : sap.m.ListMode.SingleSelectLeft,
				includeItemInSelection : true,
				selectionChange : function(oEvent) {
					var item = oEvent.getParameter("listItem").data("item");
					if (item) {
						item.setSelected(oEvent.getParameter("listItem")
								.getSelected());
					}
					that.setAssociation("selectedSortItem", item, true);
				}
			});

	this._sortContent = [ this._sortOrderList, this._sortList ];
};

/*
 * Create and initialize the group content controls @private
 */
sap.m.ViewSettingsDialog.prototype._initGroupContent = function() {
	var that = this;

	if (this._groupContent) {
		return;
	}
	this._groupOrderList = new sap.m.List(this.getId() + "-grouporderlist", {
		mode : sap.m.ListMode.SingleSelectLeft,
		includeItemInSelection : true,
		selectionChange : function(oEvent) {
			that.setGroupDescending(oEvent.getParameter("listItem")
					.data("item"));
		}
	}).addStyleClass("sapMVSDUpperList");
	this._groupOrderList.addItem(new sap.m.StandardListItem({
		title : this._rb.getText("VIEWSETTINGS_ASCENDING_ITEM")
	}).data("item", false).setSelected(true));
	this._groupOrderList.addItem(new sap.m.StandardListItem({
		title : this._rb.getText("VIEWSETTINGS_DESCENDING_ITEM")
	}).data("item", true));

	this._groupList = new sap.m.List(this.getId() + "-grouplist",
			{
				mode : sap.m.ListMode.SingleSelectLeft,
				includeItemInSelection : true,
				selectionChange : function(oEvent) {
					var item = oEvent.getParameter("listItem").data("item");
					if (item) {
						item.setSelected(oEvent.getParameter("listItem")
								.getSelected());
					}
					that.setAssociation("selectedGroupItem", item, true);
				}
			});

	this._groupContent = [ this._groupOrderList, this._groupList ];
};

/*
 * Create and initialize the filter content controls @private
 */
sap.m.ViewSettingsDialog.prototype._initFilterContent = function() {
	var that = this;

	if (this._filterContent) {
		return;
	}
	this._presetFilterList = new sap.m.List(
			this.getId() + "-predefinedfilterlist",
			{
				mode : sap.m.ListMode.SingleSelectLeft,
				includeItemInSelection : true,
				selectionChange : function(oEvent) {
					var item = oEvent.getParameter("listItem").data("item");
					if (item) {
						item.setSelected(oEvent.getParameter("listItem")
								.getSelected());
					}
					that.setAssociation("selectedPresetFilterItem", item, true);
					that._clearSelectedFilters();
				}
			}).addStyleClass("sapMVSDUpperList");

	this._filterList = new sap.m.List(this.getId() + "-filterlist", {});

	this._filterContent = [ this._presetFilterList, this._filterList ];
};

/*
 * Fill the dialog with the aggregation data @private
 */
sap.m.ViewSettingsDialog.prototype._initDialogContent = function() {
	var bSort = !!this.getSortItems().length, bGroup = !!this.getGroupItems().length, bPredefinedFilter = !!this
			.getPresetFilterItems().length, bFilter = !!this.getFilterItems().length, that = this, oListItem, aSortItems = [], aGroupItems = [], aPresetFilterItems = [], aFilterItems = [];

	// sort
	if (bSort) {
		this._initSortContent();
		this._sortList.removeAllItems();
		aSortItems = this.getSortItems();
		if (aSortItems.length) {
			aSortItems.forEach(function(oItem) {
				oListItem = new sap.m.StandardListItem({
					title : oItem.getText(),
					type : sap.m.ListType.Active,
					selected : oItem.getSelected()
				}).data("item", oItem);
				this._sortList.addItem(oListItem);
			}, this);
		}
	}

	// group
	if (bGroup) {
		this._initGroupContent();
		this._groupList.removeAllItems();
		aGroupItems = this.getGroupItems();
		if (aGroupItems.length) {
			aGroupItems.forEach(function(oItem) {
				oListItem = new sap.m.StandardListItem({
					title : oItem.getText(),
					type : sap.m.ListType.Active,
					selected : oItem.getSelected()
				}).data("item", oItem);
				this._groupList.addItem(oListItem);
			}, this);
		}
		// add none item to group list
		if (aGroupItems.length) {
			oListItem = new sap.m.StandardListItem({
				title : this._rb.getText("VIEWSETTINGS_NONE_ITEM"),
				type : sap.m.ListType.Active,
				selected : !!this.getSelectedGroupItem()
			});
			this._groupList.addItem(oListItem);
		}
	}

	// predefined filters
	if (bPredefinedFilter || bFilter) {
		this._initFilterContent();
		this._presetFilterList.removeAllItems();
		aPresetFilterItems = this.getPresetFilterItems();
		if (aPresetFilterItems.length) {
			aPresetFilterItems.forEach(function(oItem) {
				oListItem = new sap.m.StandardListItem({
					title : oItem.getText(),
					type : sap.m.ListType.Active,
					selected : oItem.getSelected()
				}).data("item", oItem);
				this._presetFilterList.addItem(oListItem);
			}, this);
		}
		// add none item to preset filter list
		if (aPresetFilterItems.length) {
			oListItem = new sap.m.StandardListItem({
				title : this._rb.getText("VIEWSETTINGS_NONE_ITEM"),
				selected : !!this.getSelectedPresetFilterItem()
			});
			this._presetFilterList.addItem(oListItem);
		}

		// filters
		this._filterList.removeAllItems();
		aFilterItems = this.getFilterItems();
		if (aFilterItems.length) {
			aFilterItems.forEach(function(oItem) {
				oListItem = new sap.m.StandardListItem(
						{
							title : oItem.getText(),
							type : sap.m.ListType.Active,
							press : function(oItem) {
								return function(oEvent) {
									// navigate to details page
									if (that._navContainer.getCurrentPage()
											.getId() !== that.getId()
											+ '-page2') {
										that._switchToPage(3, oItem);
										jQuery.sap.delayedCall(0,
												that._navContainer, "to",
												[ that.getId() + '-page2',
														"slide" ]);
									}
								};
							}(oItem)
						}).data("item", oItem);
				this._filterList.addItem(oListItem);
			}, this);
		}
	}

	// hide elements that are not visible and set the active content
	this._updateDialogState();

	// select the items that are reflected in the control's properties
	this._updateListSelections();
};

/*
 * Sets the state of the dialog when it is opened If only Sort or Group or
 * Filter items are defined, then only one tab is displayed If multiple items
 * are defined, a segmented button is displayed and the first page is set
 * @private
 */
sap.m.ViewSettingsDialog.prototype._updateDialogState = function() {
	var bSort = !!this.getSortItems().length, bGroup = !!this.getGroupItems().length, bPredefinedFilter = !!this
			.getPresetFilterItems().length, bFilter = !!this.getFilterItems().length, bNothing = !bSort
			&& !bGroup && !bPredefinedFilter && !bFilter, bInvalidState = false, iActivePages = 0, oSegmentedButton = this
			._getSegmentedButton();

	// reset state
	oSegmentedButton.removeAllButtons();
	if (this._filterContent) {
		this._presetFilterList.setVisible(true);
		this._filterList.setVisible(true);
	}

	// set invalid state if the previous tab is not valid anymore or has never
	// been selected
	if (this._iContentPage === -1 || this._iContentPage === 0 && !bSort
			|| this._iContentPage === 1 && !bGroup || this._iContentPage === 2
			&& !(bPredefinedFilter || bFilter)) {
		bInvalidState = true;
	}

	// count active dialog pages and update segmentedButton
	if (bSort) {
		oSegmentedButton.addButton(this._getSortButton());
		if (this._iContentPage === 0) {
			oSegmentedButton.setSelectedButton(this._getSortButton());
		}
		iActivePages++;
	}
	if (bPredefinedFilter || bFilter) {
		oSegmentedButton.addButton(this._getFilterButton());
		if (this._iContentPage === 2) {
			oSegmentedButton.setSelectedButton(this._getFilterButton());
		}
		if (!bPredefinedFilter) {
			this._presetFilterList.setVisible(false);
			this._presetFilterList.addStyleClass("sapMVSDUpperList");
		}
		if (!bFilter) {
			this._filterList.setVisible(false);
			this._presetFilterList.removeStyleClass("sapMVSDUpperList");
		}
		iActivePages++;
	}
	if (bGroup) {
		oSegmentedButton.addButton(this._getGroupButton());
		if (this._iContentPage === 1) {
			oSegmentedButton.setSelectedButton(this._getGroupButton());
		}
		iActivePages++;
	}

	// show header only when there are multiple tabs active
	this._showSubHeader = (iActivePages > 1 ? true : false);

	if (bInvalidState) {
		if (bSort || bNothing) { // default = sort
			this._switchToPage(0);
		} else if (bPredefinedFilter || bFilter) { // filter
			this._switchToPage(2);
		} else if (bGroup) { // group
			this._switchToPage(1);
		}
	}

	// CSN# 3802530/2013: if filters were modified by API we need to refresh the
	// filter detail page
	if (this._iContentPage === 3) {
		this._iContentPage = -1;
		this._switchToPage(3, this._oContentItem);
	}
};

/*
 * Switches to a dialog page (0 = sort, 1 = group, 2 = filter, 3 = subfilter)
 * @param {int} iWhich the page to be navigated to @param {sap.m.FilterItem}
 * oItem The filter item for the detail page (optional, only used for page 3)
 * @private
 */
sap.m.ViewSettingsDialog.prototype._switchToPage = function(iWhich, oItem) {
	var i = 0, that = this, aSubFilters = [], oTitleLabel = this
			._getTitleLabel(), oResetButton = this._getResetButton(), oHeader = this
			._getHeader(), oSubHeader = this._getSubHeader(), oListItem;

	// nothing to do if we are already on the requested page (except for filter
	// detail page)
	if (this._iContentPage === iWhich && iWhich !== 3) {
		return false;
	}

	// reset controls
	oHeader.removeAllContentRight();
	oSubHeader.removeAllContentRight();
	this._iContentPage = iWhich;
	this._oContentItem = oItem;

	// purge the current content & reset pages
	if (iWhich >= 0 && iWhich < 3) {
		this._getPage1().removeAllAggregation("content", true);
		// set subheader when there are multiple tabs active
		if (this._showSubHeader) {
			if (!this._getPage1().getSubHeader()) {
				this._getPage1().setSubHeader(oSubHeader);
			}
			// show reset button in subheader
			oSubHeader.addContentRight(oResetButton);
		} else {
			if (this._getPage1().getSubHeader()) {
				this._getPage1().setSubHeader();
			}
			// show reset button in header
			oHeader.addContentRight(oResetButton);
		}
	} else if (iWhich === 3) {
		this._getPage2().removeAllAggregation("content", true);
	}

	if (this.getTitle()) { // custom title
		oTitleLabel.setText(this.getTitle());
	} else { // default title
		oTitleLabel.setText(this._rb.getText("VIEWSETTINGS_TITLE"));
	}

	switch (iWhich) {
	case 1: // grouping
		oResetButton.setVisible(false);
		if (!this._showSubHeader && !this.getTitle()) {
			oTitleLabel.setText(this._rb.getText("VIEWSETTINGS_TITLE_GROUP"));
		}
		for (; i < this._groupContent.length; i++) {
			this._getPage1().addContent(this._groupContent[i]);
		}
		break;
	case 2: // filtering
		// only show reset button when there are detail filters available
		oResetButton.setVisible(!!this.getFilterItems().length);
		if (!this._showSubHeader && !this.getTitle()) {
			oTitleLabel.setText(this._rb.getText("VIEWSETTINGS_TITLE_FILTER"));
		}
		// update status (something could have been changed on a detail filter
		// page or by API
		this._updateListSelection(this._presetFilterList, sap.ui.getCore()
				.byId(this.getSelectedPresetFilterItem()));
		this._updateFilterCounters();
		for (; i < this._filterContent.length; i++) {
			this._getPage1().addContent(this._filterContent[i]);
		}
		break;
	case 3: // filtering details
		// display filter title
		this._getDetailTitleLabel().setText(
				this._rb.getText("VIEWSETTINGS_TITLE_FILTERBY") + " "
						+ oItem.getText());
		// fill detail page
		if (oItem instanceof sap.m.ViewSettingsCustomItem
				&& oItem.getCustomControl()) {
			this._clearPresetFilter();
			this._getPage2().addContent(oItem.getCustomControl());
		} else if (oItem instanceof sap.m.ViewSettingsFilterItem
				&& oItem.getItems()) {
			aSubFilters = oItem.getItems();
			if (this._filterDetailList) { // destroy previous list
				this._filterDetailList.destroy();
			}
			this._filterDetailList = new sap.m.List(
					{
						mode : (oItem.getMultiSelect() ? sap.m.ListMode.MultiSelect
								: sap.m.ListMode.SingleSelectLeft),
						includeItemInSelection : true,
						selectionChange : function(oEvent) {
							var oSubItem = oEvent.getParameter("listItem")
									.data("item"), aSubItems, i = 0;
							that._clearPresetFilter();
							// clear selection of all subitems if this is a
							// single select item
							if (!oItem.getMultiSelect()) {
								aSubItems = oItem.getItems();
								for (; i < aSubItems.length; i++) {
									aSubItems[i].setSelected(false);
								}
							}
							oSubItem.setSelected(oEvent
									.getParameter("listItem").getSelected());
						}
					});
			for (i = 0; i < aSubFilters.length; i++) {
				// use name if there is no key defined
				oListItem = new sap.m.StandardListItem({
					title : aSubFilters[i].getText(),
					type : sap.m.ListType.Active,
					selected : aSubFilters[i].getSelected()
				}).data("item", aSubFilters[i]);
				this._filterDetailList.addItem(oListItem);
			}
			this._getPage2().addContent(this._filterDetailList);
		}
		break;
	case 0: // sorting
	default:
		oResetButton.setVisible(false);
		if (!this._getPage1().getSubHeader() && !this.getTitle()) {
			oTitleLabel.setText(this._rb.getText("VIEWSETTINGS_TITLE_SORT"));
		}
		if (this._sortContent) {
			for (; i < this._sortContent.length; i++) {
				this._getPage1().addContent(this._sortContent[i]);
			}
		}
		break;
	}
};

/*
 * Updates the internal lists based on the dialogs state @private
 */
sap.m.ViewSettingsDialog.prototype._updateListSelections = function() {
	this._updateListSelection(this._sortList, sap.ui.getCore().byId(
			this.getSelectedSortItem()));
	this._updateListSelection(this._sortOrderList, this.getSortDescending());
	this._updateListSelection(this._groupList, sap.ui.getCore().byId(
			this.getSelectedGroupItem()));
	this._updateListSelection(this._groupOrderList, this.getGroupDescending());
	this._updateListSelection(this._presetFilterList, sap.ui.getCore().byId(
			this.getSelectedPresetFilterItem()));
	this._updateFilterCounters();
};

/*
 * Sets selected item on single selection lists based on the "item" data
 * @private
 */
sap.m.ViewSettingsDialog.prototype._updateListSelection = function(oList, oItem) {
	var items, i = 0;

	if (!oList) {
		return false;
	}

	items = oList.getItems();

	oList.removeSelections();
	for (; i < items.length; i++) {
		if (items[i].data("item") === oItem || items[i].data("item") === null) { // null
																					// is
																					// "None"
																					// item
			oList.setSelectedItem(items[i], (oItem && oItem.getSelected ? oItem
					.getSelected() : true)); // true or the selected state if
												// it is a ViewSettingsItem
			return true;
		}
	}
	return false;
};

/*
 * Updates the amount of selected filters in the filter list @private
 */
sap.m.ViewSettingsDialog.prototype._updateFilterCounters = function() {
	var aListItems = (this._filterList ? this._filterList.getItems() : []), oItem, aSubItems, iFilterCount = 0, i = 0, j;

	for (; i < aListItems.length; i++) {
		oItem = aListItems[i].data("item");
		iFilterCount = 0;
		if (oItem) {
			if (oItem instanceof sap.m.ViewSettingsCustomItem) {
				// for custom filter oItems the oItem is directly selected
				iFilterCount = oItem.getFilterCount();
			} else if (oItem instanceof sap.m.ViewSettingsFilterItem) {
				// for filter oItems the oItem counter has to be calculated from
				// the sub oItems
				iFilterCount = 0;
				aSubItems = oItem.getItems();

				for (j = 0; j < aSubItems.length; j++) {
					if (aSubItems[j].getSelected()) {
						iFilterCount++;
					}
				}
			}
		}
		aListItems[i].setCounter(iFilterCount);
	}
};

sap.m.ViewSettingsDialog.prototype._clearSelectedFilters = function() {
	var items = this.getFilterItems(), subItems, i = 0, j;

	// reset all items to selected = false
	for (; i < items.length; i++) {
		if (items[i] instanceof sap.m.ViewSettingsFilterItem) {
			subItems = items[i].getItems();
			for (j = 0; j < subItems.length; j++) {
				subItems[j].setSelected(false);
			}
		}
		items[i].setSelected(false);
	}

	// update counters if visible
	if (this._iContentPage === 2 && this._getDialog().isOpen()) {
		this._updateFilterCounters();
	}
};

/*
 * Clears preset filter item @private
 */
sap.m.ViewSettingsDialog.prototype._clearPresetFilter = function() {
	if (this.getSelectedPresetFilterItem()) {
		this.setSelectedPresetFilterItem(null);
	}
};

/* =========================================================== */
/* end: internal methods */
/* =========================================================== */

/* =========================================================== */
/* begin: event handlers */
/* =========================================================== */

/*
 * Internal event handler for the confirm button @private
 */
sap.m.ViewSettingsDialog.prototype._onConfirm = function(oEvent) {
	var that = this, oDialog = this._getDialog(), fnAfterClose = function() {
		// detach this function
		that._dialog.detachAfterClose(fnAfterClose);

		// fire confirm event
		that.fireConfirm({
			sortItem : sap.ui.getCore().byId(that.getSelectedSortItem()),
			sortDescending : that.getSortDescending(),
			groupItem : sap.ui.getCore().byId(that.getSelectedGroupItem()),
			groupDescending : that.getGroupDescending(),
			presetFilterItem : sap.ui.getCore().byId(
					that.getSelectedPresetFilterItem()),
			filterItems : that.getSelectedFilterItems(),
			filterKeys : that.getSelectedFilterKeys(),
			filterString : that.getSelectedFilterString()
		});
	};

	// attach the reset function to afterClose to hide the dialog changes from
	// the end user
	oDialog.attachAfterClose(fnAfterClose);
	oDialog.close();
};

/*
 * Internal event handler for the cancel button @private
 */
sap.m.ViewSettingsDialog.prototype._onCancel = function(oEvent) {
	var that = this, oDialog = this._getDialog(), fnAfterClose = function() {
		// reset the dialog to the previous state
		that.setSelectedSortItem(that._oPreviousState.sortItem);
		that.setSortDescending(that._oPreviousState.sortDescending);
		that.setSelectedGroupItem(that._oPreviousState.groupItem);
		that.setGroupDescending(that._oPreviousState.groupDescending);
		that.setSelectedPresetFilterItem(that._oPreviousState.presetFilterItem);

		// selected filters need to be cleared before
		that._clearSelectedFilters();
		that.setSelectedFilterKeys(that._oPreviousState.filterKeys);

		// navigate to old page if necessary
		if (that._navContainer.getCurrentPage() !== that._oPreviousState.navPage) {
			jQuery.sap.delayedCall(0, that._navContainer, "to", [
					that._oPreviousState.navPage.getId(), "show" ]);
		}

		// navigate to old tab if necessary
		that._switchToPage(that._oPreviousState.contentPage,
				that._oPreviousState.contentItem);

		// detach this function
		that._dialog.detachAfterClose(fnAfterClose);

		// fire cancel event
		that.fireCancel();
	};

	// attach the reset function to afterClose to hide the dialog changes from
	// the end user
	oDialog.attachAfterClose(fnAfterClose);
	oDialog.close();
};

/*
 * Internal event handler for the reset filter button @private
 */
sap.m.ViewSettingsDialog.prototype._onClearFilters = function() {
	// clear data and update selections
	this._clearSelectedFilters();
	this._clearPresetFilter();

	// fire event to allow custom controls to react and reset
	this.fireResetFilters();

	// update counters
	this._updateFilterCounters();

	// page updates
	if (this._iContentPage === 3) { // go to filter overview page if necessary
		jQuery.sap.delayedCall(0, this._getNavContainer(), "back");
		this._switchToPage(2);
		this._getSegmentedButton().setSelectedButton(this._getFilterButton());
	}
	// update preset list selection
	this._updateListSelection(this._presetFilterList, sap.ui.getCore().byId(
			this.getSelectedPresetFilterItem()));
};

/* =========================================================== */
/* end: event handlers */
/* =========================================================== */
