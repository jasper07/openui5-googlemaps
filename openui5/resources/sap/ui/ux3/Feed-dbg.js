/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.Feed.
jQuery.sap.declare("sap.ui.ux3.Feed");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Feed.
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
 * <li>{@link #getFeederThumbnailSrc feederThumbnailSrc} : sap.ui.core.URI</li>
 * <li>{@link #getFeederSender feederSender} : string</li>
 * <li>{@link #getLive live} : boolean (default: true)</li>
 * <li>{@link #getTitle title} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFilterItems filterItems} : sap.ui.core.ListItem[]</li>
 * <li>{@link #getChunks chunks} : sap.ui.ux3.FeedChunk[]</li>
 * <li>{@link #getToolsMenuItems toolsMenuItems} : sap.ui.commons.MenuItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.Feed#event:filterChange filterChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Feed#event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Feed#event:chunkAdded chunkAdded} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Feed#event:toolsItemSelected toolsItemSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Feed#event:toggleLive toggleLive} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A container control representing a full feed page, including feeder and updates.
 * 
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @experimental Since version 1.2. 
 * The whole Feed/Feeder API is still under discussion, significant changes are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the Feed model topic is still open.
 * @name sap.ui.ux3.Feed
 */
sap.ui.core.Control.extend("sap.ui.ux3.Feed", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"feederThumbnailSrc" : {type : "sap.ui.core.URI", group : "Data", defaultValue : null},
		"feederSender" : {type : "string", group : "Data", defaultValue : null},
		"live" : {type : "boolean", group : "Behavior", defaultValue : true},
		"title" : {type : "string", group : "Data", defaultValue : null}
	},
	aggregations : {
    	"filterItems" : {type : "sap.ui.core.ListItem", multiple : true, singularName : "filterItem", bindable : "bindable"}, 
    	"chunks" : {type : "sap.ui.ux3.FeedChunk", multiple : true, singularName : "chunk", bindable : "bindable"}, 
    	"toolsMenuItems" : {type : "sap.ui.commons.MenuItem", multiple : true, singularName : "toolsMenuItem", bindable : "bindable"}
	},
	events : {
		"filterChange" : {}, 
		"search" : {}, 
		"chunkAdded" : {}, 
		"toolsItemSelected" : {}, 
		"toggleLive" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.Feed with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.Feed.extend
 * @function
 */

sap.ui.ux3.Feed.M_EVENTS = {'filterChange':'filterChange','search':'search','chunkAdded':'chunkAdded','toolsItemSelected':'toolsItemSelected','toggleLive':'toggleLive'};


/**
 * Getter for property <code>feederThumbnailSrc</code>.
 * The path to the thumbnail image used for the feeder
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>feederThumbnailSrc</code>
 * @public
 * @name sap.ui.ux3.Feed#getFeederThumbnailSrc
 * @function
 */

/**
 * Setter for property <code>feederThumbnailSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sFeederThumbnailSrc  new value for property <code>feederThumbnailSrc</code>
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#setFeederThumbnailSrc
 * @function
 */


/**
 * Getter for property <code>feederSender</code>.
 * The sender of the feeder
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>feederSender</code>
 * @public
 * @name sap.ui.ux3.Feed#getFeederSender
 * @function
 */

/**
 * Setter for property <code>feederSender</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFeederSender  new value for property <code>feederSender</code>
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#setFeederSender
 * @function
 */


/**
 * Getter for property <code>live</code>.
 * Specifies whether the feed shall be in live mode
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>live</code>
 * @public
 * @name sap.ui.ux3.Feed#getLive
 * @function
 */

/**
 * Setter for property <code>live</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bLive  new value for property <code>live</code>
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#setLive
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Title text of the Feed. If no text is entered "FEED" is displayed.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ui.ux3.Feed#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#setTitle
 * @function
 */


/**
 * Getter for aggregation <code>filterItems</code>.<br/>
 * Items of the filter
 * 
 * @return {sap.ui.core.ListItem[]}
 * @public
 * @name sap.ui.ux3.Feed#getFilterItems
 * @function
 */


/**
 * Inserts a filterItem into the aggregation named <code>filterItems</code>.
 *
 * @param {sap.ui.core.ListItem}
 *          oFilterItem the filterItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the filterItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the filterItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the filterItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#insertFilterItem
 * @function
 */

/**
 * Adds some filterItem <code>oFilterItem</code> 
 * to the aggregation named <code>filterItems</code>.
 *
 * @param {sap.ui.core.ListItem}
 *            oFilterItem the filterItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#addFilterItem
 * @function
 */

/**
 * Removes an filterItem from the aggregation named <code>filterItems</code>.
 *
 * @param {int | string | sap.ui.core.ListItem} vFilterItem the filterItem to remove or its index or id
 * @return {sap.ui.core.ListItem} the removed filterItem or null
 * @public
 * @name sap.ui.ux3.Feed#removeFilterItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>filterItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.ListItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.Feed#removeAllFilterItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.ListItem</code> in the aggregation named <code>filterItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.ListItem}
 *            oFilterItem the filterItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.Feed#indexOfFilterItem
 * @function
 */
	

/**
 * Destroys all the filterItems in the aggregation 
 * named <code>filterItems</code>.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#destroyFilterItems
 * @function
 */


/**
 * Binder for aggregation <code>filterItems</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#bindFilterItems
 * @function
 */

/**
 * Unbinder for aggregation <code>filterItems</code>.
 *
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#unbindFilterItems
 * @function
 */


/**
 * Getter for aggregation <code>chunks</code>.<br/>
 * The chunks
 * 
 * @return {sap.ui.ux3.FeedChunk[]}
 * @public
 * @name sap.ui.ux3.Feed#getChunks
 * @function
 */


/**
 * Inserts a chunk into the aggregation named <code>chunks</code>.
 *
 * @param {sap.ui.ux3.FeedChunk}
 *          oChunk the chunk to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the chunk should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the chunk is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the chunk is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#insertChunk
 * @function
 */

/**
 * Adds some chunk <code>oChunk</code> 
 * to the aggregation named <code>chunks</code>.
 *
 * @param {sap.ui.ux3.FeedChunk}
 *            oChunk the chunk to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#addChunk
 * @function
 */

/**
 * Removes an chunk from the aggregation named <code>chunks</code>.
 *
 * @param {int | string | sap.ui.ux3.FeedChunk} vChunk the chunk to remove or its index or id
 * @return {sap.ui.ux3.FeedChunk} the removed chunk or null
 * @public
 * @name sap.ui.ux3.Feed#removeChunk
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>chunks</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.FeedChunk[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.Feed#removeAllChunks
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.FeedChunk</code> in the aggregation named <code>chunks</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.FeedChunk}
 *            oChunk the chunk whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.Feed#indexOfChunk
 * @function
 */
	

/**
 * Destroys all the chunks in the aggregation 
 * named <code>chunks</code>.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#destroyChunks
 * @function
 */


/**
 * Binder for aggregation <code>chunks</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#bindChunks
 * @function
 */

/**
 * Unbinder for aggregation <code>chunks</code>.
 *
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#unbindChunks
 * @function
 */


/**
 * Getter for aggregation <code>toolsMenuItems</code>.<br/>
 * MenuItems to open when the tool button is clicked by the user
 * 
 * @return {sap.ui.commons.MenuItem[]}
 * @public
 * @name sap.ui.ux3.Feed#getToolsMenuItems
 * @function
 */


/**
 * Inserts a toolsMenuItem into the aggregation named <code>toolsMenuItems</code>.
 *
 * @param {sap.ui.commons.MenuItem}
 *          oToolsMenuItem the toolsMenuItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the toolsMenuItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the toolsMenuItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the toolsMenuItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#insertToolsMenuItem
 * @function
 */

/**
 * Adds some toolsMenuItem <code>oToolsMenuItem</code> 
 * to the aggregation named <code>toolsMenuItems</code>.
 *
 * @param {sap.ui.commons.MenuItem}
 *            oToolsMenuItem the toolsMenuItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#addToolsMenuItem
 * @function
 */

/**
 * Removes an toolsMenuItem from the aggregation named <code>toolsMenuItems</code>.
 *
 * @param {int | string | sap.ui.commons.MenuItem} vToolsMenuItem the toolsMenuItem to remove or its index or id
 * @return {sap.ui.commons.MenuItem} the removed toolsMenuItem or null
 * @public
 * @name sap.ui.ux3.Feed#removeToolsMenuItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>toolsMenuItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.MenuItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.Feed#removeAllToolsMenuItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.MenuItem</code> in the aggregation named <code>toolsMenuItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.MenuItem}
 *            oToolsMenuItem the toolsMenuItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.Feed#indexOfToolsMenuItem
 * @function
 */
	

/**
 * Destroys all the toolsMenuItems in the aggregation 
 * named <code>toolsMenuItems</code>.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#destroyToolsMenuItems
 * @function
 */


/**
 * Binder for aggregation <code>toolsMenuItems</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#bindToolsMenuItems
 * @function
 */

/**
 * Unbinder for aggregation <code>toolsMenuItems</code>.
 *
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#unbindToolsMenuItems
 * @function
 */


/**
 * Event is fired when the filter is changed 
 *
 * @name sap.ui.ux3.Feed#filterChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.newValue The new/changed value of the filter
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'filterChange' event of this <code>sap.ui.ux3.Feed</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Feed</code>.<br/> itself. 
 *  
 * Event is fired when the filter is changed 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#attachFilterChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'filterChange' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#detachFilterChange
 * @function
 */

/**
 * Fire event filterChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> The new/changed value of the filter</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.Feed#fireFilterChange
 * @function
 */


/**
 * Event is fired when the search function on SearchField is triggered 
 *
 * @name sap.ui.ux3.Feed#search
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.query The search query
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.ui.ux3.Feed</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Feed</code>.<br/> itself. 
 *  
 * Event is fired when the search function on SearchField is triggered 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#attachSearch
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#detachSearch
 * @function
 */

/**
 * Fire event search to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> The search query</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.Feed#fireSearch
 * @function
 */


/**
 * Event is fired when a new chunk is added 
 *
 * @name sap.ui.ux3.Feed#chunkAdded
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.ux3.FeedChunk} oControlEvent.getParameters.chunk New chunk
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'chunkAdded' event of this <code>sap.ui.ux3.Feed</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Feed</code>.<br/> itself. 
 *  
 * Event is fired when a new chunk is added 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#attachChunkAdded
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'chunkAdded' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#detachChunkAdded
 * @function
 */

/**
 * Fire event chunkAdded to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'chunk' of type <code>sap.ui.ux3.FeedChunk</code> New chunk</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.Feed#fireChunkAdded
 * @function
 */


/**
 * Event is fired when an item from the tools MenuButton was selected 
 *
 * @name sap.ui.ux3.Feed#toolsItemSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.itemId The Id of the selected item
 * @param {sap.ui.commons.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'toolsItemSelected' event of this <code>sap.ui.ux3.Feed</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Feed</code>.<br/> itself. 
 *  
 * Event is fired when an item from the tools MenuButton was selected 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#attachToolsItemSelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'toolsItemSelected' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#detachToolsItemSelected
 * @function
 */

/**
 * Fire event toolsItemSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'itemId' of type <code>string</code> The Id of the selected item</li>
 * <li>'item' of type <code>sap.ui.commons.MenuItemBase</code> The selected item</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.Feed#fireToolsItemSelected
 * @function
 */


/**
 * Event is fired when the live mode has changed 
 *
 * @name sap.ui.ux3.Feed#toggleLive
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.live Current live indicator
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'toggleLive' event of this <code>sap.ui.ux3.Feed</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Feed</code>.<br/> itself. 
 *  
 * Event is fired when the live mode has changed 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feed</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#attachToggleLive
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'toggleLive' event of this <code>sap.ui.ux3.Feed</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feed#detachToggleLive
 * @function
 */

/**
 * Fire event toggleLive to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'live' of type <code>boolean</code> Current live indicator</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feed} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.Feed#fireToggleLive
 * @function
 */


// Start of sap\ui\ux3\Feed.js
jQuery.sap.require("sap.ui.commons.MenuButton");
jQuery.sap.require("sap.ui.commons.ToggleButton");
jQuery.sap.require("sap.ui.commons.DropdownBox");
jQuery.sap.require("sap.ui.commons.SearchField");
jQuery.sap.require("sap.ui.ux3.Feeder");

///**
// * This file defines behavior for the control,
// */

sap.ui.ux3.Feed.prototype.init = function(){

	this.rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");

	// init sub-controls
	this.oFeeder = new sap.ui.ux3.Feeder( this.getId()+'-Feeder', {
		type: sap.ui.ux3.FeederType.Medium
	}).setParent(this);
	this.oFeeder.attachEvent('submit', this.handleFeederSubmit, this); // attach event this way to have the right this-reference in handler

	this.oLiveButton = new sap.ui.commons.ToggleButton( this.getId()+'-liveButton', {
		text: this.rb.getText('FEED_LIVE'),
		pressed: this.getLive(), // initialize with default value because setter not called for it
		lite: true
	}).setParent(this);
	this.oLiveButton.attachEvent('press', this.handleLiveButtonPress, this); // attach event this way to have the right this-reference in handler

	this.oFilter = new sap.ui.commons.DropdownBox( this.getId()+'-filter').setParent(this);
	this.oFilter.attachEvent('change', this.handleFilterChange, this); // attach event this way to have the right this-reference in handler

	this.oSearchField = new sap.ui.commons.SearchField( this.getId()+'-search', {
		enableListSuggest: false
	}).setParent(this);
	this.oSearchField.attachEvent('search', this.handleSearchFieldSearch, this); // attach event this way to have the right this-reference in handler

};

/*
 * create menu button without items. The items are added later
 */
sap.ui.ux3.Feed.prototype.initToolsButton = function(){

	if (!this.oToolsButton) {
		this.oToolsButton = new sap.ui.commons.MenuButton( this.getId()+'-toolsButton', {
			tooltip: this.rb.getText('FEED_TOOLS'),
			lite: true,
			menu: new sap.ui.commons.Menu(this.getId()+'-toolsMenu')
		}).setParent(this);
		this.oToolsButton.attachEvent('itemSelected', this.handleLtoolsButtonSelected, this); // attach event this way to have the right this-reference in handler

		var sIcon = sap.ui.core.theming.Parameters.get('sap.ui.ux3.Feed:sapUiFeedToolsIconUrl');
		var sIconHover = sap.ui.core.theming.Parameters.get('sap.ui.ux3.Feed:sapUiFeedToolsIconHoverUrl');
		if (sIcon) {
			this.oToolsButton.setProperty('icon', jQuery.sap.getModulePath("sap.ui.ux3", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + sIcon, true);
		}
		if (sIconHover) {
			this.oToolsButton.setProperty('iconHovered', jQuery.sap.getModulePath("sap.ui.ux3", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + sIconHover, true);
		}
	}

};

sap.ui.ux3.Feed.prototype.exit = function(){

	if (this.oFeeder) {
		this.oFeeder.destroy();
		delete this.oFeeder;
	}
	if (this.oLiveButton) {
		this.oLiveButton.destroy();
		delete this.oLiveButton;
	}
	if (this.oToolsButton) {
		this.oToolsButton.destroy();
		delete this.oToolsButton;
	}
	if (this.oFilter) {
		this.oFilter.destroy();
		delete this.oFilter;
	}
	if (this.oSearchField) {
		this.oSearchField.destroy();
		delete this.oSearchField;
	}
	this.rb = undefined;

};

/**
 * Handler for feeder submit event
 *
 * @private
 */
sap.ui.ux3.Feed.prototype.handleFeederSubmit = function(oEvent){

	var oDate = new Date();
//	var sDate = String(oDate.getFullYear()) + String(oDate.getMonth()) + String(oDate.getDate()) + String(oDate.getHours()) + String(oDate.getMinutes()) + String(oDate.getSeconds());
	var sDate = String(oDate);

	var oNewChunk = new sap.ui.ux3.FeedChunk(this.getId()+'-new-'+this.getChunks().length, {
		text: oEvent.getParameter('text'),
		commentChunk: false,
		deletionAllowed: true,
		timestamp: sDate,
		sender: this.getFeederSender(),
		thumbnailSrc: this.getFeederThumbnailSrc()
	});

	// new chunks are inserted at the top
	this.insertChunk(oNewChunk, 0);
	this.fireChunkAdded({chunk: oNewChunk});

};

/*
 * overwrite of setLive
 */
sap.ui.ux3.Feed.prototype.setLive = function(bLive) {
	this.setProperty("live", bLive, true); //no re-rendering because only ToggleButton is changed

	if (this.oLiveButton) {
		// update ToggleButton
		this.oLiveButton.setPressed(bLive);
	}
	return this;
};

/**
 * Handler for live-button press
 *
 * @private
 */
sap.ui.ux3.Feed.prototype.handleLiveButtonPress = function(oEvent){

	var bPressed = oEvent.getParameter("pressed");

	this.setProperty("live", bPressed, true); //no re-rendering because ToggleButton is already changed
	this.fireToggleLive({live: bPressed});

};

/**
 * Handler for tools menu button item selection
 *
 * @private
 */
sap.ui.ux3.Feed.prototype.handleLtoolsButtonSelected = function(oEvent){

	// just forward event
	this.fireToolsItemSelected(oEvent.mParameters);

};

/**
 * Handler for filter change
 *
 * @private
 */
sap.ui.ux3.Feed.prototype.handleFilterChange = function(oEvent){

	// just forward event
	this.fireFilterChange(oEvent.mParameters);

};

/**
 * Handler for search field
 *
 * @private
 */
sap.ui.ux3.Feed.prototype.handleSearchFieldSearch = function(oEvent){

	// just forward event
	this.fireSearch(oEvent.mParameters);

};

/*
 * Overwrite generated function
 */
sap.ui.ux3.Feed.prototype.setFeederThumbnailSrc = function(sFeederThumbnailSrc) {

	this.setProperty("feederThumbnailSrc", sFeederThumbnailSrc, true); // no rerendering, only feeder is changed
	this.oFeeder.setThumbnailSrc(sFeederThumbnailSrc);
	return this;

};

sap.ui.ux3.Feed.prototype.setLive = function(bLive) {

	this.setProperty("live", bLive, true); // no rerendering, only button is changed
	this.oLiveButton.setPressed(bLive);
	return this;

};

// connect toolsMenuItems to MenuButtons menu
sap.ui.ux3.Feed.prototype.getToolsMenuItems = function() {

	if (this.oToolsButton){
		// as parent of items is the menu use menus aggregation
		return this.oToolsButton.getMenu().getItems();
	}

};

sap.ui.ux3.Feed.prototype.insertToolsMenuItem = function(oToolsMenuItem, iIndex) {

	this.initToolsButton();
	// as parent of items is the menu use menus aggregation
	this.oToolsButton.getMenu().insertItem(oToolsMenuItem, iIndex);
	return this;

};

sap.ui.ux3.Feed.prototype.addToolsMenuItem = function(oToolsMenuItem) {

	this.initToolsButton();
	// as parent of items is the menu use menus aggregation
	this.oToolsButton.getMenu().addItem(oToolsMenuItem);
	return this;

};

sap.ui.ux3.Feed.prototype.removeToolsMenuItem = function(vToolsMenuItem) {

	if (this.oToolsButton){
		// as parent of items is the menu use menus aggregation
		return this.oToolsButton.getMenu().removeItem(vToolsMenuItem);
	}

};

sap.ui.ux3.Feed.prototype.removeAllToolsMenuItems = function() {

	if (this.oToolsButton){
		// as parent of items is the menu use menus aggregation
		return this.oToolsButton.getMenu().removeAllItems();
	}

};

sap.ui.ux3.Feed.prototype.indexOfToolsMenuItem = function(oToolsMenuItem) {

	if (this.oToolsButton){
		// as parent of items is the menu use menus aggregation
		return this.oToolsButton.getMenu().indexOfItem(oToolsMenuItem);
	}

};

sap.ui.ux3.Feed.prototype.destroyToolsMenuItems = function() {

	if (this.oToolsButton){
		// as parent of items is the menu use menus aggregation
		this.oToolsButton.getMenu().destroyItems();
	}

	return this;

};

sap.ui.ux3.Feed.prototype.bindToolsMenuItems = function(sPath, oTemplate, oSorter, aFilters) {

	this.initToolsButton();
	// as parent of items is the menu use menus aggregation
	this.oToolsButton.getMenu().bindItems(sPath, oTemplate, oSorter, aFilters);

	return this;

};

sap.ui.ux3.Feed.prototype.unbindToolsMenuItems = function() {

	if (this.oToolsButton){
		this.oToolsButton.getMenu().unbindItems();
	}

	return this;

};

// connect filterItems to filter
sap.ui.ux3.Feed.prototype.getFilterItems = function() {

	return this.oFilter.getItems();

};

sap.ui.ux3.Feed.prototype.insertFilterItem = function(oFilterItem, iIndex) {

	this.oFilter.insertItem(oFilterItem, iIndex);
	return this;

};

sap.ui.ux3.Feed.prototype.addFilterItem = function(oFilterItem) {

	this.oFilter.addItem(oFilterItem);
	return this;

};

sap.ui.ux3.Feed.prototype.removeFilterItem = function(vFilterItem) {

	return this.oFilter.removeItem(vFilterItem);

};

sap.ui.ux3.Feed.prototype.removeAllFilterItems = function() {

	return this.oFilter.removeAllItems();

};

sap.ui.ux3.Feed.prototype.indexOfFilterItem = function(oFilterItem) {

	return this.oFilter.indexOfItem(oFilterItem);

};

sap.ui.ux3.Feed.prototype.destroyFilterItems = function() {

	this.oFilter.destroyItems();

	return this;

};

sap.ui.ux3.Feed.prototype.bindFilterItems = function(sPath, oTemplate, oSorter, aFilters) {

	this.oFilter.bindItems(sPath, oTemplate, oSorter, aFilters);

	return this;

};

sap.ui.ux3.Feed.prototype.unbindFilterItems = function() {

	this.oFilter.unbindItems();

	return this;

};
