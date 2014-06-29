/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Carousel.
jQuery.sap.declare("sap.m.Carousel");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Carousel.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getLoop loop} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getShowPageIndicator showPageIndicator} : boolean (default: true)</li>
 * <li>{@link #getPageIndicatorPlacement pageIndicatorPlacement} : sap.m.PlacementType (default: sap.m.PlacementType.Bottom)</li>
 * <li>{@link #getShowBusyIndicator showBusyIndicator} : boolean (default: true)</li>
 * <li>{@link #getBusyIndicatorSize busyIndicatorSize} : sap.ui.core.CSSSize (default: '6em')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPages pages} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getActivePage activePage} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Carousel#event:loadPage loadPage} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Carousel#event:unloadPage unloadPage} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Carousel#event:pageChanged pageChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The Carousel control can be used to navigate through a list of sap.m controls just like flipping through the pages of a book by swiping right or left. An indicator shows the current position within the control list. When displayed in a desktop browser, a left- and right-arrow button is displayed on the carousel's sides, which can be used to navigate through the carousel.
 * 
 * Note: when displa Internet Explorer 9, page changes are not animated.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.Carousel
 */
sap.ui.core.Control.extend("sap.m.Carousel", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"next", "previous"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"loop" : {type : "boolean", group : "Misc", defaultValue : false},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"showPageIndicator" : {type : "boolean", group : "Appearance", defaultValue : true},
		"pageIndicatorPlacement" : {type : "sap.m.PlacementType", group : "Appearance", defaultValue : sap.m.PlacementType.Bottom},
		"showBusyIndicator" : {type : "boolean", group : "Appearance", defaultValue : true, deprecated: true},
		"busyIndicatorSize" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '6em', deprecated: true}
	},
	defaultAggregation : "pages",
	aggregations : {
    	"pages" : {type : "sap.ui.core.Control", multiple : true, singularName : "page"}
	},
	associations : {
		"activePage" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"loadPage" : {deprecated: true}, 
		"unloadPage" : {deprecated: true}, 
		"pageChanged" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Carousel with name <code>sClassName</code> 
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
 * @name sap.m.Carousel.extend
 * @function
 */

sap.m.Carousel.M_EVENTS = {'loadPage':'loadPage','unloadPage':'unloadPage','pageChanged':'pageChanged'};


/**
 * Getter for property <code>height</code>.
 * The height of the carousel. Note that when a percentage value is used, the height of the surrounding container must be defined.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.m.Carousel#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Carousel#setHeight
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The width of the carousel. Note that when a percentage value is used, the height of the surrounding container must be defined.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.Carousel#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Carousel#setWidth
 * @function
 */


/**
 * Getter for property <code>loop</code>.
 * Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>loop</code>
 * @public
 * @name sap.m.Carousel#getLoop
 * @function
 */

/**
 * Setter for property <code>loop</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bLoop  new value for property <code>loop</code>
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Carousel#setLoop
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Shows or hides the carousel.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.Carousel#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Carousel#setVisible
 * @function
 */


/**
 * Getter for property <code>showPageIndicator</code>.
 * Show or hide carousel's page indicator.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showPageIndicator</code>
 * @public
 * @name sap.m.Carousel#getShowPageIndicator
 * @function
 */

/**
 * Setter for property <code>showPageIndicator</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowPageIndicator  new value for property <code>showPageIndicator</code>
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Carousel#setShowPageIndicator
 * @function
 */


/**
 * Getter for property <code>pageIndicatorPlacement</code>.
 * Defines where the carousel's page indicator is displayed. Possible values are sap.m.PlacementType.Top, sap.m.PlacementType.Bottom. Other values are ignored and the default value will be applied. The default value is sap.m.PlacementType.Bottom.
 *
 * Default value is <code>Bottom</code>
 *
 * @return {sap.m.PlacementType} the value of property <code>pageIndicatorPlacement</code>
 * @public
 * @name sap.m.Carousel#getPageIndicatorPlacement
 * @function
 */

/**
 * Setter for property <code>pageIndicatorPlacement</code>.
 *
 * Default value is <code>Bottom</code> 
 *
 * @param {sap.m.PlacementType} oPageIndicatorPlacement  new value for property <code>pageIndicatorPlacement</code>
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Carousel#setPageIndicatorPlacement
 * @function
 */


/**
 * Getter for property <code>showBusyIndicator</code>.
 * Show or hide busy indicator in the carousel when loading pages after swipe.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showBusyIndicator</code>
 * @public
 * @deprecated Since version 1.18.7. 
 * Since 1.18.7 pages are no longer loaded or unloaded. Therefore busy indicator is not necessary any longer.
 * @name sap.m.Carousel#getShowBusyIndicator
 * @function
 */

/**
 * Setter for property <code>showBusyIndicator</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowBusyIndicator  new value for property <code>showBusyIndicator</code>
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.7. 
 * Since 1.18.7 pages are no longer loaded or unloaded. Therefore busy indicator is not necessary any longer.
 * @name sap.m.Carousel#setShowBusyIndicator
 * @function
 */


/**
 * Getter for property <code>busyIndicatorSize</code>.
 * Size of the busy indicators which can be displayed in the carousel.
 *
 * Default value is <code>6em</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>busyIndicatorSize</code>
 * @public
 * @deprecated Since version 1.18.7. 
 * Since 1.18.7 pages are no longer loaded or unloaded. Therefore busy indicator is not necessary any longer.
 * @name sap.m.Carousel#getBusyIndicatorSize
 * @function
 */

/**
 * Setter for property <code>busyIndicatorSize</code>.
 *
 * Default value is <code>6em</code> 
 *
 * @param {sap.ui.core.CSSSize} sBusyIndicatorSize  new value for property <code>busyIndicatorSize</code>
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.7. 
 * Since 1.18.7 pages are no longer loaded or unloaded. Therefore busy indicator is not necessary any longer.
 * @name sap.m.Carousel#setBusyIndicatorSize
 * @function
 */


/**
 * Getter for aggregation <code>pages</code>.<br/>
 * The content which the carousel displays.
 * 
 * <strong>Note</strong>: this is the default aggregation for Carousel.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.Carousel#getPages
 * @function
 */


/**
 * Inserts a page into the aggregation named <code>pages</code>.
 *
 * @param {sap.ui.core.Control}
 *          oPage the page to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the page should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the page is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the page is inserted at 
 *             the last position        
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Carousel#insertPage
 * @function
 */

/**
 * Adds some page <code>oPage</code> 
 * to the aggregation named <code>pages</code>.
 *
 * @param {sap.ui.core.Control}
 *            oPage the page to add; if empty, nothing is inserted
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Carousel#addPage
 * @function
 */

/**
 * Removes an page from the aggregation named <code>pages</code>.
 *
 * @param {int | string | sap.ui.core.Control} vPage the page to remove or its index or id
 * @return {sap.ui.core.Control} the removed page or null
 * @public
 * @name sap.m.Carousel#removePage
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>pages</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Carousel#removeAllPages
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>pages</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oPage the page whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.Carousel#indexOfPage
 * @function
 */
	

/**
 * Destroys all the pages in the aggregation 
 * named <code>pages</code>.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Carousel#destroyPages
 * @function
 */


/**
 * Provides getter and setter for the currently displayed page. For the setter, argument may be the control itself, which must be member of the carousel's page list, or the control's id.
 * The getter will return the control id
 *
 * @return {string} Id of the element which is the current target of the <code>activePage</code> association, or null
 * @public
 * @name sap.m.Carousel#getActivePage
 * @function
 */

/**
 * Provides getter and setter for the currently displayed page. For the setter, argument may be the control itself, which must be member of the carousel's page list, or the control's id.
 * The getter will return the control id
 *
 * @param {string | sap.ui.core.Control} vActivePage 
 *    Id of an element which becomes the new target of this <code>activePage</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Carousel#setActivePage
 * @function
 */


	
/**
 * Carousel requires a new page to be loaded. This event may be used to fill the content of that page 
 *
 * @name sap.m.Carousel#loadPage
 * @event
 * @deprecated Since version 1.18.7. 
 * Since 1.18.7 pages are no longer loaded or unloaded
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.pageId Id of the page which will be loaded
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'loadPage' event of this <code>sap.m.Carousel</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Carousel</code>.<br/> itself. 
 *  
 * Carousel requires a new page to be loaded. This event may be used to fill the content of that page 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Carousel</code>.<br/> itself.
 *
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.7. 
 * Since 1.18.7 pages are no longer loaded or unloaded
 * @name sap.m.Carousel#attachLoadPage
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'loadPage' event of this <code>sap.m.Carousel</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.7. 
 * Since 1.18.7 pages are no longer loaded or unloaded
 * @name sap.m.Carousel#detachLoadPage
 * @function
 */

/**
 * Fire event loadPage to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'pageId' of type <code>string</code> Id of the page which will be loaded</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @protected
 * @deprecated Since version 1.18.7. 
 * Since 1.18.7 pages are no longer loaded or unloaded
 * @name sap.m.Carousel#fireLoadPage
 * @function
 */


/**
 * Carousel does not display a page any longer and unloads it. This event may be used to clean up the content of that page. 
 *
 * @name sap.m.Carousel#unloadPage
 * @event
 * @deprecated Since version 1.18.7. 
 * Since 1.18.7 pages are no longer loaded or unloaded
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.pageId Id of the page which will be unloaded
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'unloadPage' event of this <code>sap.m.Carousel</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Carousel</code>.<br/> itself. 
 *  
 * Carousel does not display a page any longer and unloads it. This event may be used to clean up the content of that page. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Carousel</code>.<br/> itself.
 *
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.7. 
 * Since 1.18.7 pages are no longer loaded or unloaded
 * @name sap.m.Carousel#attachUnloadPage
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'unloadPage' event of this <code>sap.m.Carousel</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18.7. 
 * Since 1.18.7 pages are no longer loaded or unloaded
 * @name sap.m.Carousel#detachUnloadPage
 * @function
 */

/**
 * Fire event unloadPage to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'pageId' of type <code>string</code> Id of the page which will be unloaded</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @protected
 * @deprecated Since version 1.18.7. 
 * Since 1.18.7 pages are no longer loaded or unloaded
 * @name sap.m.Carousel#fireUnloadPage
 * @function
 */


/**
 * This event is fired after a carousel swipe has been completed. It is triggered both by physical swipe events and through API carousel manipulations such as calling 'next', 'previous' or 'setActivePageId' functions. 
 *
 * @name sap.m.Carousel#pageChanged
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.oldActivePageId Id of the page which was active before the page change.
 * @param {string} oControlEvent.getParameters.newActivePageId Id of the page which is active after the page change.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'pageChanged' event of this <code>sap.m.Carousel</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Carousel</code>.<br/> itself. 
 *  
 * This event is fired after a carousel swipe has been completed. It is triggered both by physical swipe events and through API carousel manipulations such as calling 'next', 'previous' or 'setActivePageId' functions. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Carousel</code>.<br/> itself.
 *
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Carousel#attachPageChanged
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'pageChanged' event of this <code>sap.m.Carousel</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Carousel#detachPageChanged
 * @function
 */

/**
 * Fire event pageChanged to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'oldActivePageId' of type <code>string</code> Id of the page which was active before the page change.</li>
 * <li>'newActivePageId' of type <code>string</code> Id of the page which is active after the page change.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Carousel} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Carousel#firePageChanged
 * @function
 */


/**
 * Call this method to display the next page (corresponds to a swipe right). Returns 'this' for method chaining.
 *
 * @name sap.m.Carousel.prototype.next
 * @function

 * @type sap.m.Carousel
 * @public
 */


/**
 * Call this method to display the previous page (corresponds to a swipe left). Returns 'this' for method chaining.
 *
 * @name sap.m.Carousel.prototype.previous
 * @function

 * @type sap.m.Carousel
 * @public
 */


// Start of sap\m\Carousel.js
jQuery.sap.require("sap.ui.thirdparty.mobify-carousel");


//Constants convenient class selections
sap.m.Carousel._INNER_SELECTOR = ".sapMCrslInner";
sap.m.Carousel._PAGE_INDICATOR_SELECTOR = ".sapMCrslBulleted";
sap.m.Carousel._HUD_SELECTOR = ".sapMCrslHud";
sap.m.Carousel._ITEM_SELECTOR = ".sapMCrslItem";
sap.m.Carousel._LEFTMOST_CLASS = "sapMCrslLeftmost";
sap.m.Carousel._RIGHTMOST_CLASS = "sapMCrslRightmost";
sap.m.Carousel._LATERAL_CLASSES = "sapMCrslLeftmost sapMCrslRightmost";
sap.m.Carousel._bIE9 = (sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version < 10);

/**
 * Initialize member variables which are needed later on.
 * 
 * @private
 */
sap.m.Carousel.prototype.init = function() {
	//Scroll container list for clean- up
	this._aScrollContainers = [];
	
	//Initialize '_fnAdjustAfterResize' to be used by window
	//'resize' event
	this._fnAdjustAfterResize = jQuery.proxy(function() {
		var $carouselInner = this.$().find(sap.m.Carousel._INNER_SELECTOR);
		this._oMobifyCarousel.resize($carouselInner);
	}, this);
};



/**
 * Called when the control is destroyed.
 *
 * @private
 */
sap.m.Carousel.prototype.exit = function() {
	if(this._oMobifyCarousel) {
		this._oMobifyCarousel.destroy();
		delete this._oMobifyCarousel;
	}
	
	if(this._oArrowLeft) {
		this._oArrowLeft.destroy();
		delete this._oArrowLeft;
	}
	if(this._oArrowRight) {
		this._oArrowRight.destroy();
		delete this._oArrowRight;
	}
	
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
	this.$().off('afterSlide');
	
	this._cleanUpScrollContainer();
	this._fnAdjustAfterResize = null;
	this._aScrollContainers = null;
	if(!sap.m.Carousel._bIE9 && this._$InnerDiv) {
		jQuery(window).off("resize", this._fnAdjustAfterResize);
	}
	this._$InnerDiv = null;
};

/**
 * Housekeeping for scroll containers: Removes content for each container,
 * destroys the contianer and clears the local container list.
 * 
 * @private
 */
sap.m.Carousel.prototype._cleanUpScrollContainer = function() {
	var oScrollCont;
	while (this.length > 0) {
		oScrollCont = this._aScrollContainers.pop();
		oScrollCont.removeAllContent();
		if(oScrollCont && typeof oScrollCont.destroy === 'function') {
			oScrollCont.destroy();
		}
	}
};


/**
 * Cleans up bindings
 * 
 * @private
 */
sap.m.Carousel.prototype.onBeforeRendering = function() {
	//make sure, active page has an initial value
	var sActivePage = this.getActivePage();
	if(!sActivePage && this.getPages().length > 0) {
		//if no active page is specified, set first page.
		this.setAssociation("activePage", this.getPages()[0].getId(), true);
	}
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
	if(!sap.m.Carousel._bIE9 && this._$InnerDiv) {
		jQuery(window).off("resize", this._fnAdjustAfterResize);
	}
	return this;
};

/**
 * When this method is called for the first time, a swipe-view instance is created which is renders
 * itself into its dedicated spot within the DOM tree. This instance is used throughout the
 * Carousel instance's lifecycle.
 * 
 * @private
 */
sap.m.Carousel.prototype.onAfterRendering = function() {
	
	//Check if carousel has been initialized
	if(this._oMobifyCarousel) {
		//Clean up existing mobify carousel
		this._oMobifyCarousel.destroy();
	}
	//Create and initialize new carousel
	this.$().carousel();
	this._oMobifyCarousel = this.getDomRef()._carousel;
	this._oMobifyCarousel.setLoop(this.getLoop());
	this._oMobifyCarousel.setRTL(sap.ui.getCore().getConfiguration().getRTL());
	
	
	
	//Go to active page: this may be necessary after adding or
	//removing pages
	var sActivePage = this.getActivePage();
	
	if(sActivePage) {
		var iIndex = this._getPageNumber(sActivePage);
		if(isNaN(iIndex)) {
			if(this.getPages().length > 0) {
				//First page is always shown as default
				this.setAssociation("activePage", this.getPages()[0].getId(), true);
			}
		} else {
			this._oMobifyCarousel.changeAnimation('sapMCrslNoTransition');
			//mobify carousel is 1-based
			this._oMobifyCarousel.move(iIndex + 1);
		}
	}
	
	this._fnAdjustHUDVisibility(sActivePage ? (this._getPageNumber(sActivePage) + 1) : 1);
	
	//attach delegate for firing 'PageChanged' events to mobify carousel's
	//'afterSlide'
	this.$().on('afterSlide', jQuery.proxy(function(e, iPreviousSlide, iNextSlide) {
		if(iNextSlide > 0){
			this._fnAdjustHUDVisibility(iNextSlide);
			var sOldActivePageId = this.getActivePage();
			var sNewActivePageId = this.getPages()[iNextSlide -1].getId();
			this.setAssociation("activePage", sNewActivePageId, true);
			
			jQuery.sap.log.debug("sap.m.Carousel: firing pageChanged event: old page: " + sOldActivePageId 
					+ ", new page: " + sNewActivePageId);
			
			this.firePageChanged( { oldActivePageId: sOldActivePageId,
				newActivePageId: sNewActivePageId});
		}
	}, this));
	this._$InnerDiv = this.$().find(sap.m.Carousel._INNER_SELECTOR)[0];
	if(sap.m.Carousel._bIE9) {
		this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this._$InnerDiv, this._fnAdjustAfterResize);
	} else {
		jQuery(window).on("resize", this._fnAdjustAfterResize);
	}
};



/**
 * Sets HUD control's visibility after page has changed
 * 
 * @param iNextSlide index of the next acrtive page
 * @private
 *
 */
sap.m.Carousel.prototype._fnAdjustHUDVisibility = function(iNextSlide) {
	if (sap.ui.Device.system.desktop && !this.getLoop() && this.getPages().length > 1) {
		//update HUD arrow visibility for left- and
		//rightmost pages
		var $HUDContainer = this.$().find(sap.m.Carousel._HUD_SELECTOR);
		//clear marker classes first
		$HUDContainer.removeClass(sap.m.Carousel._LATERAL_CLASSES);
		
		if(iNextSlide === 1) {
			$HUDContainer.addClass(sap.m.Carousel._LEFTMOST_CLASS);
		} else if (iNextSlide === this.getPages().length) {
			$HUDContainer.addClass(sap.m.Carousel._RIGHTMOST_CLASS);
		}
	}
};


/**
 * Handler for 'tab previous' key event. Delegates handling to 
 * '_tabKeyPressed' function.
 * 
 * @param oEvent key event
 * @private
 *
 */
sap.m.Carousel.prototype.onsaptabprevious = function(oEvent) {
	this._bTabPrevious = true;
};

/**
 * Handler for 'tab next' key event. Delegates handling to 
 * '_tabKeyPressed' function.
 * 
 * @param oEvent key event
 * @private
 *
 */
sap.m.Carousel.prototype.onsaptabnext = function(oEvent) {
	this._bTabNext = true;
};


/**
 * Event handler for the focusin event.
 * If the focused element is the dedicated element (class sapMCrslFirstFE) at the beginning of a page, 
 * the focus is set to the end of the previous page. If the dedicated element the end of a page 
 * (class sapMCrslLastFE) is focussed, the first element of the next page is focused
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.Carousel.prototype.onfocusin = function(oEvent){
	if (sap.ui.Device.system.desktop) {
		var oSourceDomRef = oEvent.target,
			iPageIndex = oSourceDomRef.getAttribute('pageIndex'),
			oNextFocusDomRef,
			oNextPage;
		//Invisible Element focused by tab previous
		if(oSourceDomRef.className === 'sapMCrslFirstFE' && this._bTabPrevious) {
			if(iPageIndex > 0) {
				iPageIndex--;
			} else if(this.getLoop()) {
				iPageIndex = this.getPages().length - 1;
			}
			
			oNextPage = this.getPages()[iPageIndex];
			oNextFocusDomRef = oNextPage.$().parent().lastFocusableDomRef();
			
		} else if(oSourceDomRef.className === 'sapMCrslLastFE' && this._bTabNext) {
			//Invisible Element focused by tab next
			if(iPageIndex < this.getPages().length - 1) {
				iPageIndex++;
			} else if(this.getLoop()) {
				iPageIndex = 0;
			}
			
			oNextPage = this.getPages()[iPageIndex];
			oNextFocusDomRef = oNextPage.$().parent().firstFocusableDomRef();
		}
		
		if(oNextFocusDomRef && oNextPage) {
			var fnRequestFocus = function() {
				oNextFocusDomRef.focus();
			};
			this._oMobifyCarousel.changeAnimation('', fnRequestFocus, this);
			this.setActivePage(oNextPage.getId());
		}
		this._bTabPrevious = false;
		this._bTabNext = false;
	}
};





/**
 * API method to set carousel's active page during runtime.
 * 
 * @param vPage Id of the page or page which shall become active
 * @override
 *
 */
sap.m.Carousel.prototype.setActivePage = function (vPage) {
	var sPagedId = null,
		bHasMoved = false;
	if(typeof(vPage) == 'string') {
		sPagedId = vPage;
	} else if (vPage instanceof sap.ui.core.Control) {
		sPagedId = vPage.getId();
	}
	
	if(sPagedId) {
		if(this._oMobifyCarousel) {
			var iPageNr = this._getPageNumber(sPagedId);
			
			if(!isNaN(iPageNr)) {
				//mobify carousel's move function is '1' based
				this._oMobifyCarousel.move(iPageNr + 1);
				bHasMoved = true;
			} 
		}
	} 
	
	if(bHasMoved || !this._oMobifyCarousel) {
		//active page shall only be set, if vPage has been 
		//found amongst the carousel's pages or if carousel has not been 
		//rendered yet
		this.setAssociation("activePage", sPagedId, true);
	} else {
		jQuery.sap.log.warning("sap.m.Carousel.prototype.setActivePage: Cannot set active page " + 
	 	"because it is neither of type 'string' nor a 'sap.ui.core.Control'");
	}
	
	return this;
};



/**
 * API method to set the carousel's height
 *
 * @param oHeight the new height as CSSSize
 * @public
 * @override
 */
sap.m.Carousel.prototype.setHeight = function(oHeight) {
	//do suppress rerendering
	this.setProperty("height", oHeight, true);
	this.$().css("height", oHeight);
	return this;
};

/**
 * API method to set the carousel's width
 *
 * @param oWidth the new width as CSSSize
 * @public
 * @override
 */
sap.m.Carousel.prototype.setWidth = function(oWidth) {
	//do suppress rerendering
	this.setProperty("width", oWidth, true);
	this.$().css("width", oWidth);
	return this;
};

/**
 * API method to place the page inidicator. 
 *
 * @param sPlacement either sap.m.PlacementType.Top or sap.m.PlacementType.Bottom
 * @public
 * @override
 */
sap.m.Carousel.prototype.setPageIndicatorPlacement = function(sPlacement) {
	if(sap.m.PlacementType.Top != sPlacement &&
			sap.m.PlacementType.Bottom != sPlacement) {
		jQuery.sap.assert(false, "sap.m.Carousel.prototype.setPageIndicatorPlacement: invalid value '" + 
				sPlacement + "'. Valid values: sap.m.PlacementType.Top, sap.m.PlacementType.Bottom." +
						"\nUsing default value sap.m.PlacementType.Bottom");
		sPlacement = sap.m.PlacementType.Bottom;
	}
	
	//do suppress rerendering
	this.setProperty("pageIndicatorPlacement", sPlacement, true);
	
	var $PageIndicator = this.$().find(sap.m.Carousel._PAGE_INDICATOR_SELECTOR); 
	
	//set placement regardless of whether indicator is visible: it may become
	//visible later on and then it should be at the right place
	if(sap.m.PlacementType.Top === sPlacement) {
		this.$().prepend($PageIndicator);
		$PageIndicator.removeClass('sapMCrslBottomOffset');
		this.$().find(sap.m.Carousel._ITEM_SELECTOR).removeClass('sapMCrslBottomOffset');
	} else {
		this.$().append($PageIndicator);
		$PageIndicator.addClass('sapMCrslBottomOffset');
		this.$().find(sap.m.Carousel._ITEM_SELECTOR).addClass('sapMCrslBottomOffset');
	}
	return this;
};


/**
 * API method to set whether the carousel should display the page indicator
 *
 * @param bShowPageIndicator the new show property
 * @public
 * @override
 */
sap.m.Carousel.prototype.setShowPageIndicator = function(bShowPageIndicator) {
	
	var $PageInd = this.$().find(sap.m.Carousel._PAGE_INDICATOR_SELECTOR);
	
	bShowPageIndicator ? $PageInd.show() : $PageInd.hide();
	
	//do suppress rerendering
	this.setProperty("showPageIndicator", bShowPageIndicator, true);
	return this;
};



/**
 * API method to set whether the carousel should loop, i.e
 * show the first page after the last page is reached and vice 
 * versa.
 *
 * @param bLoop the new loop property
 * @public
 * @override
 */
sap.m.Carousel.prototype.setLoop = function(bLoop) {
	//do suppress rerendering
	this.setProperty("loop", bLoop, true);
	if(this._oMobifyCarousel) {
		this._oMobifyCarousel.setLoop(bLoop);
	}
	return this;
};

/**
 * Gets the icon of the requested arrow (left/right).
 * @private
 * @param sName left or right
 * @returns icon of the requested arrow
 */
sap.m.Carousel.prototype._getNavigationArrow = function(sName) {
	jQuery.sap.require("sap.ui.core.IconPool");
	var mProperties = {
		src : "sap-icon://navigation-" + sName + "-arrow"
	};
	
	if (sName === "left") {
		if (!this._oArrowLeft) {
			this._oArrowLeft = sap.m.ImageHelper.getImageControl(this.getId() + "-arrowScrollLeft", this._oArrowLeft, this, mProperties);
		}
		return this._oArrowLeft;
	} else if (sName === "right") {
		if (!this._oArrowRight) {
			this._oArrowRight = sap.m.ImageHelper.getImageControl(this.getId() + "-arrowScrollRight", this._oArrowRight, this, mProperties);
		}
		return this._oArrowRight;
	}
};


/**
 * Private method that places a given page control into 
 * a scroll container which does not scroll. That container does
 * not scroll itself. This is necessary to achieve the 100% height 
 * effect with an offset for the page indicator. 
 *
 * @param oPage the page to check
 * @private
 */
sap.m.Carousel.prototype._createScrollContainer = function(oPage) {
	
	var cellClasses = oPage instanceof sap.m.Image ? "sapMCrslItemTableCell sapMCrslImg" : "sapMCrslItemTableCell",
		oContent = new sap.ui.core.HTML({
		content :	"<div class='sapMCrslItemTable'>" +
						"<div class='" + cellClasses + "'></div>" +
					"</div>",
		afterRendering : function(e) {
			var rm = sap.ui.getCore().createRenderManager();
			rm.render(oPage, this.getDomRef().firstChild);
			rm.destroy();
		}
	});
	
	var oScrollContainer = new sap.m.ScrollContainer({
		horizontal: false,
		vertical: false,
		content:[oContent],
		width:'100%',
		height:'100%',
	}); 
	oScrollContainer.setParent(this, null, true);
	this._aScrollContainers.push(oScrollContainer); 
	return oScrollContainer; 
};




/**
 * API method to show the next page in the page list.
 * @public
 */
sap.m.Carousel.prototype.previous = function () {
	if(this._oMobifyCarousel) {
		this._oMobifyCarousel.prev();
	} else {
		jQuery.sap.log.warning("Unable to execute sap.m.Carousel.previous: carousel must be rendered first.");
	}
	return this;
}; 

/**
 * API method to show the previous page in the page list.
 * @public
 */
sap.m.Carousel.prototype.next = function () {
	if(this._oMobifyCarousel) {
		this._oMobifyCarousel.next();
	} else {
		jQuery.sap.log.warning("Unable to execute sap.m.Carousel.next: carousel must be rendered first.");
	}
	return this;
};



/**
 * Determines the position of a given page in the carousel's page list
 * 
 * @return the position of a given page in the carousel's page list or 'undefined' if it does not exist in the list.
 * @private
 */
sap.m.Carousel.prototype._getPageNumber = function(sPagedId) {
	var i, result;
	
	for(i=0; i<this.getPages().length; i++) {
		if(this.getPages()[i].getId() == sPagedId) {
			result = i;
			break;
		}
	}
	return result;
};

//DEPRECATED METHODS


/**
 * API method to set whether the carousel should display the busy indicators.
 * This property has been deprecated since 1.18.7. Does nothing and returns the carousel reference.
 *
 * @deprecated
 * @public
 */
sap.m.Carousel.prototype.setShowBusyIndicator = function() {
	jQuery.sap.log.warning("sap.m.Carousel: Deprecated function 'setShowBusyIndicator' called. " + 
 	"Does nothing.");
	return this;
};

/**
 * API method to check whether the carousel should display the busy indicators.
 * This property has been deprecated since 1.18.7. Always returns false,
 *
 * @deprecated
 * @public
 */
sap.m.Carousel.prototype.getShowBusyIndicator = function() {
	jQuery.sap.log.warning("sap.m.Carousel: Deprecated function 'getShowBusyIndicator' called. " + 
 	"Does nothing.");
	return false;
};

/**
 * API method to set the carousel's busy indicator size.
 * This property has been deprecated since 1.18.7. Does nothing and returns the carousel reference.
 *
 * @deprecated
 * @public
 */
sap.m.Carousel.prototype.setBusyIndicatorSize = function() {
	jQuery.sap.log.warning("sap.m.Carousel: Deprecated function 'setBusyIndicatorSize' called. " + 
 	"Does nothing.");
	return this;
};


/**
 * API method to retrieve the carousel's busy indicator size.
 * This property has been deprecated since 1.18.6. Always returns an empty string.
 *
 * @deprecated
 * @public
 */
sap.m.Carousel.prototype.getBusyIndicatorSize = function() {
	jQuery.sap.log.warning("sap.m.Carousel: Deprecated function 'getBusyIndicatorSize' called. " + 
 	"Does nothing.");
	return "";
};


