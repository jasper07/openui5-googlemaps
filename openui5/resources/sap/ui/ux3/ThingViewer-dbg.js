/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ThingViewer.
jQuery.sap.declare("sap.ui.ux3.ThingViewer");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ThingViewer.
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
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getSubtitle subtitle} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeaderType headerType} : sap.ui.ux3.ThingViewerHeaderType (default: sap.ui.ux3.ThingViewerHeaderType.Standard)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getHeaderContent headerContent} : sap.ui.ux3.ThingGroup[]</li>
 * <li>{@link #getFacets facets} : sap.ui.ux3.NavigationItem[]</li>
 * <li>{@link #getFacetContent facetContent} : sap.ui.ux3.ThingGroup[]</li>
 * <li>{@link #getActionBar actionBar} : sap.ui.ux3.ActionBar</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedFacet selectedFacet} : string | sap.ui.ux3.NavigationItem</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.ThingViewer#event:facetSelected facetSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * ThingViewer: Same as ThingInspector but decoupled from the Overlay and the ActionBar.
 * The control can be added to a Parent container that has a defined width. The ThingViewer fill the whole container. If the parent container has no width defined the control will not work properly.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.9.1
 * @name sap.ui.ux3.ThingViewer
 */
sap.ui.core.Control.extend("sap.ui.ux3.ThingViewer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"type" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"subtitle" : {type : "string", group : "Misc", defaultValue : null},
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '100%'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '100%'},
		"headerType" : {type : "sap.ui.ux3.ThingViewerHeaderType", group : "Misc", defaultValue : sap.ui.ux3.ThingViewerHeaderType.Standard}
	},
	aggregations : {
    	"headerContent" : {type : "sap.ui.ux3.ThingGroup", multiple : true, singularName : "headerContent"}, 
    	"facets" : {type : "sap.ui.ux3.NavigationItem", multiple : true, singularName : "facet"}, 
    	"facetContent" : {type : "sap.ui.ux3.ThingGroup", multiple : true, singularName : "facetContent"}, 
    	"actionBar" : {type : "sap.ui.ux3.ActionBar", multiple : false}, 
    	"navBar" : {type : "sap.ui.ux3.NavigationBar", multiple : false, visibility : "hidden"}
	},
	associations : {
		"selectedFacet" : {type : "sap.ui.ux3.NavigationItem", multiple : false}
	},
	events : {
		"facetSelected" : {allowPreventDefault : true}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.ThingViewer with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.ThingViewer.extend
 * @function
 */

sap.ui.ux3.ThingViewer.M_EVENTS = {'facetSelected':'facetSelected'};


/**
 * Getter for property <code>title</code>.
 * Title of the Thing Inspector
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ui.ux3.ThingViewer#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#setTitle
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Thing type
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>type</code>
 * @public
 * @name sap.ui.ux3.ThingViewer#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#setType
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Thing Icon Url
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.ux3.ThingViewer#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#setIcon
 * @function
 */


/**
 * Getter for property <code>subtitle</code>.
 * Subtitle of the Thing Inspector
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>subtitle</code>
 * @public
 * @name sap.ui.ux3.ThingViewer#getSubtitle
 * @function
 */

/**
 * Setter for property <code>subtitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSubtitle  new value for property <code>subtitle</code>
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#setSubtitle
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Width of the ThingViewer
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.ux3.ThingViewer#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Height of the ThingViewer
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.ux3.ThingViewer#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#setHeight
 * @function
 */


/**
 * Getter for property <code>headerType</code>.
 * Defines which header type should be used.
 *
 * Default value is <code>Standard</code>
 *
 * @return {sap.ui.ux3.ThingViewerHeaderType} the value of property <code>headerType</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.ux3.ThingViewer#getHeaderType
 * @function
 */

/**
 * Setter for property <code>headerType</code>.
 *
 * Default value is <code>Standard</code> 
 *
 * @param {sap.ui.ux3.ThingViewerHeaderType} oHeaderType  new value for property <code>headerType</code>
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.ux3.ThingViewer#setHeaderType
 * @function
 */


/**
 * Getter for aggregation <code>headerContent</code>.<br/>
 * ThingGroups for the header content
 * 
 * @return {sap.ui.ux3.ThingGroup[]}
 * @public
 * @name sap.ui.ux3.ThingViewer#getHeaderContent
 * @function
 */


/**
 * Inserts a headerContent into the aggregation named <code>headerContent</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *          oHeaderContent the headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headerContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headerContent is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#insertHeaderContent
 * @function
 */

/**
 * Adds some headerContent <code>oHeaderContent</code> 
 * to the aggregation named <code>headerContent</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oHeaderContent the headerContent to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#addHeaderContent
 * @function
 */

/**
 * Removes an headerContent from the aggregation named <code>headerContent</code>.
 *
 * @param {int | string | sap.ui.ux3.ThingGroup} vHeaderContent the headerContent to remove or its index or id
 * @return {sap.ui.ux3.ThingGroup} the removed headerContent or null
 * @public
 * @name sap.ui.ux3.ThingViewer#removeHeaderContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>headerContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingGroup[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ThingViewer#removeAllHeaderContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation named <code>headerContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oHeaderContent the headerContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ThingViewer#indexOfHeaderContent
 * @function
 */
	

/**
 * Destroys all the headerContent in the aggregation 
 * named <code>headerContent</code>.
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#destroyHeaderContent
 * @function
 */


/**
 * Getter for aggregation <code>facets</code>.<br/>
 * Thing Inspector facets
 * 
 * @return {sap.ui.ux3.NavigationItem[]}
 * @public
 * @name sap.ui.ux3.ThingViewer#getFacets
 * @function
 */


/**
 * Inserts a facet into the aggregation named <code>facets</code>.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *          oFacet the facet to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the facet should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the facet is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the facet is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#insertFacet
 * @function
 */

/**
 * Adds some facet <code>oFacet</code> 
 * to the aggregation named <code>facets</code>.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *            oFacet the facet to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#addFacet
 * @function
 */

/**
 * Removes an facet from the aggregation named <code>facets</code>.
 *
 * @param {int | string | sap.ui.ux3.NavigationItem} vFacet the facet to remove or its index or id
 * @return {sap.ui.ux3.NavigationItem} the removed facet or null
 * @public
 * @name sap.ui.ux3.ThingViewer#removeFacet
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>facets</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.NavigationItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ThingViewer#removeAllFacets
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation named <code>facets</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *            oFacet the facet whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ThingViewer#indexOfFacet
 * @function
 */
	

/**
 * Destroys all the facets in the aggregation 
 * named <code>facets</code>.
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#destroyFacets
 * @function
 */


/**
 * Getter for aggregation <code>facetContent</code>.<br/>
 * ThingGroups for content of the selected facet
 * 
 * @return {sap.ui.ux3.ThingGroup[]}
 * @public
 * @name sap.ui.ux3.ThingViewer#getFacetContent
 * @function
 */


/**
 * Inserts a facetContent into the aggregation named <code>facetContent</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *          oFacetContent the facetContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the facetContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the facetContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the facetContent is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#insertFacetContent
 * @function
 */

/**
 * Adds some facetContent <code>oFacetContent</code> 
 * to the aggregation named <code>facetContent</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oFacetContent the facetContent to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#addFacetContent
 * @function
 */

/**
 * Removes an facetContent from the aggregation named <code>facetContent</code>.
 *
 * @param {int | string | sap.ui.ux3.ThingGroup} vFacetContent the facetContent to remove or its index or id
 * @return {sap.ui.ux3.ThingGroup} the removed facetContent or null
 * @public
 * @name sap.ui.ux3.ThingViewer#removeFacetContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>facetContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingGroup[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ThingViewer#removeAllFacetContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation named <code>facetContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oFacetContent the facetContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ThingViewer#indexOfFacetContent
 * @function
 */
	

/**
 * Destroys all the facetContent in the aggregation 
 * named <code>facetContent</code>.
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#destroyFacetContent
 * @function
 */


/**
 * Getter for aggregation <code>actionBar</code>.<br/>
 * An ActionBar can be given
 * 
 * @return {sap.ui.ux3.ActionBar}
 * @public
 * @name sap.ui.ux3.ThingViewer#getActionBar
 * @function
 */


/**
 * Setter for the aggregated <code>actionBar</code>.
 * @param {sap.ui.ux3.ActionBar} oActionBar
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#setActionBar
 * @function
 */
	

/**
 * Destroys the actionBar in the aggregation 
 * named <code>actionBar</code>.
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#destroyActionBar
 * @function
 */


/**
 * The Facet that is currently selected.
 *
 * @return {string} Id of the element which is the current target of the <code>selectedFacet</code> association, or null
 * @public
 * @name sap.ui.ux3.ThingViewer#getSelectedFacet
 * @function
 */

/**
 * The Facet that is currently selected.
 *
 * @param {string | sap.ui.ux3.NavigationItem} vSelectedFacet 
 *    Id of an element which becomes the new target of this <code>selectedFacet</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#setSelectedFacet
 * @function
 */


	
/**
 * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected. 
 *
 * @name sap.ui.ux3.ThingViewer#facetSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id Id of selected NavigationItem
 * @param {sap.ui.ux3.NavigationItem} oControlEvent.getParameters.item The selected NavigationItem
 * @param {string} oControlEvent.getParameters.key Key of selected NavigationItem
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'facetSelected' event of this <code>sap.ui.ux3.ThingViewer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ThingViewer</code>.<br/> itself. 
 *  
 * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingViewer</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#attachFacetSelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'facetSelected' event of this <code>sap.ui.ux3.ThingViewer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingViewer#detachFacetSelected
 * @function
 */

/**
 * Fire event facetSelected to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of selected NavigationItem</li>
 * <li>'item' of type <code>sap.ui.ux3.NavigationItem</code> The selected NavigationItem</li>
 * <li>'key' of type <code>string</code> Key of selected NavigationItem</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.ux3.ThingViewer#fireFacetSelected
 * @function
 */


// Start of sap\ui\ux3\ThingViewer.js
(function() {
	/**
	 * Initialization hook for the ThingViewer. It creates the instance of the
	 * Popup helper service and does some basic configuration for it.
	 *
	 * @private
	 */
	sap.ui.ux3.ThingViewer.prototype.init = function() {
		var that = this;
		this._oNavBar = new sap.ui.ux3.NavigationBar();
		this.setAggregation("navBar",this._oNavBar);
		// attach NavBar selection
		this._oSocialActions = {};
		this._oNavBar.attachSelect(function(oControlEvent) {
			var item = oControlEvent.getParameters().item;
			if(that.fireFacetSelected({id:item.getId(), key:item.getKey(),item:item})) {
				that.setSelectedFacet(item);
			} else {
				 oControlEvent.preventDefault();
			}
		});
	};
	
	/*
	 * Set size of TI after rendering: If running in Shell we sync with shell
	 * canvas. The size will then be set by the shell.
	 */
	sap.ui.ux3.ThingViewer.prototype.onAfterRendering = function() {
		// register resize handler
		this._resize = false;
		if (this.getActionBar()) {
			this._adjustStyles();
		}
		if (this.$().find(".sapUiUx3TVFacetContent").length <= 0) {
			return;
		}
		this._resizeListenerId = sap.ui.core.ResizeHandler.register(this.$().find(".sapUiUx3TVFacetContent")[0], jQuery.proxy(this._onresize, this));
		
		// initial resize handling
		this._setTriggerValue();
		this._setHeaderPosition();
		this._onresize();
	};
	
	sap.ui.ux3.ThingViewer.prototype.onBeforeRendering = function() {
		if (this._resizeListenerId) {
			sap.ui.core.ResizeHandler.deregister(this._resizeListenerId);
			this._resizeListenerId = null;
		}
	};
	
	sap.ui.ux3.ThingViewer.prototype._setHeaderPosition = function() {
		if (this.getHeaderType() === sap.ui.ux3.ThingViewerHeaderType.Standard) {
			var $typeContainer = this.$().find(".sapUiUx3TVHeaderContainerIdentifier");
			var $scrollContainer = this.$().find(".sapUiUx3TVHeaderGroupScrollContainer");
			$scrollContainer.css("top", $typeContainer.outerHeight());
		}
	};
	
	/**
	 * Resize handler listening to the facet content area. If the area will be
	 * resized and the blocks will be rearranged to one column the width will be set
	 * to 100%. After resize to a width greater than two times the minimum width of
	 * a single block the size will be set back to 50%
	 *
	 * @private
	 */
	sap.ui.ux3.ThingViewer.prototype._onresize = function(oEvent) {
		var width;
		if (oEvent) {
			width = jQuery(oEvent.target).width();
		}
		if (!width) {
			width = jQuery(this.$().find(".sapUiUx3TVFacetContent")[0]).width();
		}
		if (width < this._triggerValue && this._resize == false) {
			var facetGroups = this.$().find(".sapUiUx3TVFacetThingGroup");
			for ( var i = 0; i < facetGroups.length; i++) {
				jQuery(facetGroups[i]).animate({
					width : "100%"
				}, "fast");
			}
			this._resize = true;
		} else if (width > this._triggerValue && this._resize == true) {
			var facetGroups = this.$().find(".sapUiUx3TVFacetThingGroup");
			for ( var i = 0; i < facetGroups.length; i++) {
				jQuery(facetGroups[i]).animate({
					width : "50%"
				}, "fast");
			}
			this._resize = false;
		}
		if (this.getActionBar()) {
			var minWidth = this.getActionBar().getActionBarMinWidth();
			var minWidthTI = minWidth;
			if (this._bShell) {
				minWidth += 36;
				minWidthTI  = minWidth + 60;
			}
			this.$().find(".sapUiUx3TV").css("min-width",minWidthTI+"px");
			this.$().find(".sapUiUx3TVContent").css("min-width",minWidth+"px");
		}
	};
	
	/**
	 * Destroys this instance of ThingViewer, called by Element#destroy()
	 *
	 * @private
	 */
	sap.ui.ux3.ThingViewer.prototype.exit = function() {
		this._oNavBar.destroy();
		if (this._resizeListenerId) {
			sap.ui.core.ResizeHandler.deregister(this._resizeListenerId);
			this._resizeListenerId = null;
		}
	};
	
	/**
	 * get Navigation Bar control
	 *
	 * @private
	 */
	sap.ui.ux3.ThingViewer.prototype._getNavBar = function() {
		return this._oNavBar;
	};
	
	/**
	 * setDefault NavBar selection and fire SelectedItem Event
	 *
	 * @private
	 */
	sap.ui.ux3.ThingViewer.prototype._selectDefault = function() {
		var navBarItems = this._oNavBar.getItems();
		if (navBarItems.length && !this._oNavBar.getSelectedItem()) {
			if (!this.getSelectedFacet()) {
				this.setSelectedFacet(navBarItems[0]);
			}
			var itemID = this._oNavBar.getSelectedItem();
			var item = sap.ui.getCore().byId(itemID);
			this.fireFacetSelected({
				id : item.getId(),
				key : item.getKey(),
				item : item
			});
		}
	};
	
	/**
	 * equal Columns
	 *
	 * @private
	 */
	sap.ui.ux3.ThingViewer.prototype._equalColumns = function() {
		var headerColumn = this.$().find(".sapUiUx3TVHeader");
		var facetsColumn = this.$().find(".sapUiUx3TVFacets");
		var scrollContainer = this.$().find(".sapUiUx3TVContentScrollContainer");
		facetsColumn.height(scrollContainer.get(0).scrollHeight);
		headerColumn.height(scrollContainer.get(0).scrollHeight);
	};
	
	/**
	 * Rerender Header
	 *
	 * @private
	 */
	sap.ui.ux3.ThingViewer.prototype._rerenderHeader = function() {
		var $content = this.$("header");
		if ($content.length > 0) {
			var rm = sap.ui.getCore().createRenderManager();
			sap.ui.ux3.ThingViewerRenderer.renderHeader(rm, this);
			rm.flush($content[0]);
			rm.destroy();
		}
	};
	
	/**
	 * Rerender Header Content
	 *
	 * @private
	 */
	sap.ui.ux3.ThingViewer.prototype._rerenderHeaderContent = function() {
		var $content = this.$("headerContent");
		if ($content.length > 0) {
			var rm = sap.ui.getCore().createRenderManager();
			sap.ui.ux3.ThingViewerRenderer.renderHeaderContent(rm, this);
			rm.flush($content[0]);
			rm.destroy();
		}
	};
	
	/**
	 * Rerender Toolbar
	 *
	 * @private
	 */
	sap.ui.ux3.ThingViewer.prototype._rerenderToolbar = function() {
		var $content = this.$("toolbar");
		if ($content.length > 0) {
			var rm = sap.ui.getCore().createRenderManager();
			sap.ui.ux3.ThingViewerRenderer.renderToolbar(rm, this);
			rm.flush($content[0]);
			rm.destroy();
		}
	};
	
	/**
	 * Rerender Facet Content
	 *
	 * @private
	 */
	sap.ui.ux3.ThingViewer.prototype._rerenderFacetContent = function() {
		var $content = this.$("facetContent");
		if ($content.length > 0) {
			var rm = sap.ui.getCore().createRenderManager();
			sap.ui.ux3.ThingViewerRenderer.renderFacetContent(rm, this);
			rm.flush($content[0]);
			rm.destroy();
			this._resize = false;
			this._setTriggerValue();
			this._onresize();
		}
	};
	
	/**
	 * set trigger value for resize handler
	 * 
	 * @private
	 */
	sap.ui.ux3.ThingViewer.prototype._setTriggerValue = function() {
		var facetGroups, minWidth,
			$content = this.$("facetContent");
		
		// get triggerValue for facet content resize handler
		if ($content.length > 0) {
			facetGroups = this.$().find(".sapUiUx3TVFacetThingGroup");
			minWidth = jQuery(facetGroups[0]).css("min-width");
			this._triggerValue = parseInt(minWidth, 10) * 2;
		}
	};
	
	/* Redefinition of generated API methods */
	
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.getFacets = function() {
		return this._oNavBar.getItems();
	};
	
	// Implementation of API method insertFacet
	sap.ui.ux3.ThingViewer.prototype.insertFacet = function(oFacet, iIndex) {
		this._oNavBar.insertItem(oFacet, iIndex);
		return this;
	};
	
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.addFacet = function(oFacet) {
		this._oNavBar.addItem(oFacet);
		return this;
	};
	
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.removeFacet = function(vElement) {
		return this._oNavBar.removeItem(vElement);
	};
	
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.removeAllFacets = function() {
		return this._oNavBar.removeAllItems();
	};
	
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.destroyFacets = function() {
		this._oNavBar.destroyItems();
		return this;
	};
	
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.setIcon = function(oIcon) {
		this.setProperty("icon", oIcon);
		if (this.getActionBar()) {
			this.getActionBar().setThingIconURI(oIcon);
		}
		this._rerenderHeader();
		return this;
	};
	
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.insertFacetContent = function(oFacetContent, iIndex) {
		this.insertAggregation("facetContent", oFacetContent, iIndex, true);
		this._rerenderFacetContent();
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.addFacetContent = function(oFacetContent) {
		this.addAggregation("facetContent", oFacetContent, true);
		this._rerenderFacetContent();
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.removeFacetContent = function(vFacetContent) {
		var result = this.removeAggregation("facetContent", vFacetContent, true);
		this._rerenderFacetContent();
		return result;
	};
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.removeAllFacetContent = function() {
		var result = this.removeAllAggregation("facetContent", true);
		this._rerenderFacetContent();
		return result;
	};
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.destroyFacetContent = function() {
		this.destroyAggregation("facetContent", true);
		this._rerenderFacetContent();
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.insertHeaderContent = function(oHeaderContent, iIndex) {
		this.insertAggregation("headerContent", oHeaderContent, iIndex, true);
		this._rerenderHeaderContent();
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.addHeaderContent = function(oHeaderContent) {
		this.addAggregation("headerContent", oHeaderContent, true);
		this._rerenderHeaderContent();
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.removeHeaderContent = function(vHeaderContent) {
		var result = this.removeAggregation("headerContent", vHeaderContent, true);
		this._rerenderHeaderContent();
		return result;
	};
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.removeAllHeaderContent = function() {
		var result = this.removeAllAggregation("headerContent", true);
		this._rerenderHeaderContent();
		return result;
	};
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.destroyHeaderContent = function() {
		this.destroyAggregation("headerContent", true);
		this._rerenderHeaderContent();
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.setSelectedFacet = function(selectedFacet) {
		var oldSelectedFacet = this.getSelectedFacet();
		this.setAssociation("selectedFacet", selectedFacet, true);
		var newSelectedFacet = this.getSelectedFacet();
	
		if (oldSelectedFacet != newSelectedFacet) {
			this._oNavBar.setSelectedItem(newSelectedFacet);
		}
	};
	//Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.setTitle = function(sTitle) {
		this.setProperty("title", sTitle, true);
		this._rerenderHeader();
	};
	//Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.setSubtitle = function(sTitle) {
		this.setProperty("subtitle", sTitle, true);
		this._rerenderHeader();
	};
	// Implementation of API method
	sap.ui.ux3.ThingViewer.prototype.setActionBar = function(oActionBar) {
		this.setAggregation("actionBar", oActionBar, true);
		if (this.getIcon() && this.getActionBar()) {
			this.getActionBar().setThingIconURI(this.getIcon());
		}
		this._rerenderToolbar();
		this._adjustStyles();
		return this;
	};
	sap.ui.ux3.ThingViewer.prototype._adjustStyles = function() {
		var $header = this.$().find(".sapUiUx3TVHeader");
		var $facets = this.$().find(".sapUiUx3TVFacets");
		if ($header.length > 0) { 
			$header.addClass("sapUiUx3TVActionBar");
			$header.removeClass("sapUiUx3TVNoActionBar");
		}
		if ($facets.length > 0) {
			$facets.addClass("sapUiUx3TVActionBar");
			$facets.removeClass("sapUiUx3TVNoActionBar");
		}
	};
}());