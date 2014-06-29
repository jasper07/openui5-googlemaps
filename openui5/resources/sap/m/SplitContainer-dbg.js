/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.SplitContainer.
jQuery.sap.declare("sap.m.SplitContainer");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new SplitContainer.
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
 * <li>{@link #getDefaultTransitionNameDetail defaultTransitionNameDetail} : string (default: "slide")</li>
 * <li>{@link #getDefaultTransitionNameMaster defaultTransitionNameMaster} : string (default: "slide")</li>
 * <li>{@link #getMode mode} : sap.m.SplitAppMode (default: sap.m.SplitAppMode.ShowHideMode)</li>
 * <li>{@link #getMasterButtonText masterButtonText} : string</li>
 * <li>{@link #getBackgroundColor backgroundColor} : string</li>
 * <li>{@link #getBackgroundImage backgroundImage} : sap.ui.core.URI</li>
 * <li>{@link #getBackgroundRepeat backgroundRepeat} : boolean (default: false)</li>
 * <li>{@link #getBackgroundOpacity backgroundOpacity} : float (default: 1)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMasterPages masterPages} : sap.ui.core.Control[]</li>
 * <li>{@link #getDetailPages detailPages} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getInitialDetail initialDetail} : string | sap.ui.core.Control</li>
 * <li>{@link #getInitialMaster initialMaster} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.SplitContainer#event:masterNavigate masterNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitContainer#event:afterMasterNavigate afterMasterNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitContainer#event:masterButton masterButton} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitContainer#event:beforeMasterOpen beforeMasterOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitContainer#event:afterMasterOpen afterMasterOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitContainer#event:beforeMasterClose beforeMasterClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitContainer#event:afterMasterClose afterMasterClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitContainer#event:detailNavigate detailNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SplitContainer#event:afterDetailNavigate afterDetailNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * SplitContainer maintains two NavContainers if runs in tablet and one NavContainer in phone. The display of master NavContainer depends on the portrait/landscape of the device and the mode of SplitContainer.
 * 
 * This control must be rendered as a full screen control in order to make the show/hide master area work properly.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.SplitContainer
 */
sap.ui.core.Control.extend("sap.m.SplitContainer", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"to", "backToPage", "toMaster", "toDetail", "backMaster", "backDetail", "showMaster", "hideMaster", "getCurrentPage", "getCurrentMasterPage", "getCurrentDetailPage", "backToTopMaster", "backToTopDetail", "addPage", "getMasterPage", "getDetailPage", "getPage", "insertPreviousPage", "getPreviousPage", "isMasterShown"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"defaultTransitionNameDetail" : {type : "string", group : "Appearance", defaultValue : "slide"},
		"defaultTransitionNameMaster" : {type : "string", group : "Appearance", defaultValue : "slide"},
		"mode" : {type : "sap.m.SplitAppMode", group : "Appearance", defaultValue : sap.m.SplitAppMode.ShowHideMode},
		"masterButtonText" : {type : "string", group : "Appearance", defaultValue : null},
		"backgroundColor" : {type : "string", group : "Appearance", defaultValue : null},
		"backgroundImage" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"backgroundRepeat" : {type : "boolean", group : "Appearance", defaultValue : false},
		"backgroundOpacity" : {type : "float", group : "Appearance", defaultValue : 1}
	},
	aggregations : {
    	"masterPages" : {type : "sap.ui.core.Control", multiple : true, singularName : "masterPage"}, 
    	"detailPages" : {type : "sap.ui.core.Control", multiple : true, singularName : "detailPage"}, 
    	"_navMaster" : {type : "sap.m.NavContainer", multiple : false, visibility : "hidden"}, 
    	"_navDetail" : {type : "sap.m.NavContainer", multiple : false, visibility : "hidden"}, 
    	"_navPopover" : {type : "sap.m.Popover", multiple : false, visibility : "hidden"}
	},
	associations : {
		"initialDetail" : {type : "sap.ui.core.Control", multiple : false}, 
		"initialMaster" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"masterNavigate" : {}, 
		"afterMasterNavigate" : {}, 
		"masterButton" : {}, 
		"beforeMasterOpen" : {}, 
		"afterMasterOpen" : {}, 
		"beforeMasterClose" : {}, 
		"afterMasterClose" : {}, 
		"detailNavigate" : {}, 
		"afterDetailNavigate" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.SplitContainer with name <code>sClassName</code> 
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
 * @name sap.m.SplitContainer.extend
 * @function
 */

sap.m.SplitContainer.M_EVENTS = {'masterNavigate':'masterNavigate','afterMasterNavigate':'afterMasterNavigate','masterButton':'masterButton','beforeMasterOpen':'beforeMasterOpen','afterMasterOpen':'afterMasterOpen','beforeMasterClose':'beforeMasterClose','afterMasterClose':'afterMasterClose','detailNavigate':'detailNavigate','afterDetailNavigate':'afterDetailNavigate'};


/**
 * Getter for property <code>defaultTransitionNameDetail</code>.
 * The type of the transition/animation to apply when "to()" is called without defining the transition to use. The default is "slide", other options are: "fade" and "show" and the names of any registered custom transitions.
 *
 * Default value is <code>"slide"</code>
 *
 * @return {string} the value of property <code>defaultTransitionNameDetail</code>
 * @public
 * @name sap.m.SplitContainer#getDefaultTransitionNameDetail
 * @function
 */

/**
 * Setter for property <code>defaultTransitionNameDetail</code>.
 *
 * Default value is <code>"slide"</code> 
 *
 * @param {string} sDefaultTransitionNameDetail  new value for property <code>defaultTransitionNameDetail</code>
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#setDefaultTransitionNameDetail
 * @function
 */


/**
 * Getter for property <code>defaultTransitionNameMaster</code>.
 * The type of the transition/animation to apply when "to()" is called without defining the transition to use. The default is "slide", other options are: "fade" and "show" and the names of any registered custom transitions.
 *
 * Default value is <code>"slide"</code>
 *
 * @return {string} the value of property <code>defaultTransitionNameMaster</code>
 * @public
 * @name sap.m.SplitContainer#getDefaultTransitionNameMaster
 * @function
 */

/**
 * Setter for property <code>defaultTransitionNameMaster</code>.
 *
 * Default value is <code>"slide"</code> 
 *
 * @param {string} sDefaultTransitionNameMaster  new value for property <code>defaultTransitionNameMaster</code>
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#setDefaultTransitionNameMaster
 * @function
 */


/**
 * Getter for property <code>mode</code>.
 * This mode defines whether the master page will always be shown (in portrait and in landscape)[StretchCompressMode], or if it should be hidden when in protrait mode [ShowHideMode]. Default is ShowHideMode
 *
 * Default value is <code>ShowHideMode</code>
 *
 * @return {sap.m.SplitAppMode} the value of property <code>mode</code>
 * @public
 * @name sap.m.SplitContainer#getMode
 * @function
 */

/**
 * Setter for property <code>mode</code>.
 *
 * Default value is <code>ShowHideMode</code> 
 *
 * @param {sap.m.SplitAppMode} oMode  new value for property <code>mode</code>
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#setMode
 * @function
 */


/**
 * Getter for property <code>masterButtonText</code>.
 * This is the text shown in master button which has a default value "Navigation". This text is only shown in iOS platform and the icon from the current page in detail area is shown in the master button in the other platfroms.
 * 
 * The master button is shown/hidden depending on the orientation of device and also whether the master area is open or not. SplitContainer manages the show/hide of master button by itself only when the page added to detail area are sap.m.Page with built-in header or sap.m.Page with built-in header which is wrapped by one or several sap.ui.core.mvc.View. Otherwise the show/hide of master button needs to be managed by the application.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>masterButtonText</code>
 * @public
 * @name sap.m.SplitContainer#getMasterButtonText
 * @function
 */

/**
 * Setter for property <code>masterButtonText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sMasterButtonText  new value for property <code>masterButtonText</code>
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#setMasterButtonText
 * @function
 */


/**
 * Getter for property <code>backgroundColor</code>.
 * Background color of the SplitContainer. If set, this color will override the default background defined by the theme. So this should only be set when really required.
 * Any configured background image will be placed above this colored background. But any theme adaptation in the Theme Designer will override this setting.
 * Use the "backgroundRepeat" property to define whether this image should be stretched to cover the complete SplitContainer or whether it should be tiled.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>backgroundColor</code>
 * @public
 * @since 1.11.2
 * @name sap.m.SplitContainer#getBackgroundColor
 * @function
 */

/**
 * Setter for property <code>backgroundColor</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sBackgroundColor  new value for property <code>backgroundColor</code>
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * @name sap.m.SplitContainer#setBackgroundColor
 * @function
 */


/**
 * Getter for property <code>backgroundImage</code>.
 * Background image of the SplitContainer. If set, this image will override the default background defined by the theme. So this should only be set when really required.
 * This background image will be placed above any color set for the background. But any theme adaptation in the Theme Designer will override this image setting.
 * Use the "backgroundRepeat" property to define whether this image should be stretched to cover the complete SplitContainer or whether it should be tiled.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>backgroundImage</code>
 * @public
 * @since 1.11.2
 * @name sap.m.SplitContainer#getBackgroundImage
 * @function
 */

/**
 * Setter for property <code>backgroundImage</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sBackgroundImage  new value for property <code>backgroundImage</code>
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * @name sap.m.SplitContainer#setBackgroundImage
 * @function
 */


/**
 * Getter for property <code>backgroundRepeat</code>.
 * Whether the background image (if configured) should be proportionally stretched to cover the whole SplitContainer (false) or whether it should be tiled (true).
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>backgroundRepeat</code>
 * @public
 * @since 1.11.2
 * @name sap.m.SplitContainer#getBackgroundRepeat
 * @function
 */

/**
 * Setter for property <code>backgroundRepeat</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bBackgroundRepeat  new value for property <code>backgroundRepeat</code>
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * @name sap.m.SplitContainer#setBackgroundRepeat
 * @function
 */


/**
 * Getter for property <code>backgroundOpacity</code>.
 * Opacity of the background image. The opacity can be set between 0 (fully transparent) and 1 fully opaque).
 * This can be used to make the application content better readable by making the background image partly transparent.
 *
 * Default value is <code>1</code>
 *
 * @return {float} the value of property <code>backgroundOpacity</code>
 * @public
 * @since 1.11.2
 * @name sap.m.SplitContainer#getBackgroundOpacity
 * @function
 */

/**
 * Setter for property <code>backgroundOpacity</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {float} fBackgroundOpacity  new value for property <code>backgroundOpacity</code>
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * @name sap.m.SplitContainer#setBackgroundOpacity
 * @function
 */


/**
 * Getter for aggregation <code>masterPages</code>.<br/>
 * The content entities between which this SplitContainer navigates in master area. These can be of type sap.m.Page, sap.ui.core.View, sap.m.Carousel or any other control with fullscreen/page semantics.
 * 
 * These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.SplitContainer#getMasterPages
 * @function
 */


/**
 * Inserts a masterPage into the aggregation named <code>masterPages</code>.
 *
 * @param {sap.ui.core.Control}
 *          oMasterPage the masterPage to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the masterPage should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the masterPage is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the masterPage is inserted at 
 *             the last position        
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#insertMasterPage
 * @function
 */

/**
 * Adds some masterPage <code>oMasterPage</code> 
 * to the aggregation named <code>masterPages</code>.
 *
 * @param {sap.ui.core.Control}
 *            oMasterPage the masterPage to add; if empty, nothing is inserted
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#addMasterPage
 * @function
 */

/**
 * Removes an masterPage from the aggregation named <code>masterPages</code>.
 *
 * @param {int | string | sap.ui.core.Control} vMasterPage the masterPage to remove or its index or id
 * @return {sap.ui.core.Control} the removed masterPage or null
 * @public
 * @name sap.m.SplitContainer#removeMasterPage
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>masterPages</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.SplitContainer#removeAllMasterPages
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>masterPages</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oMasterPage the masterPage whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.SplitContainer#indexOfMasterPage
 * @function
 */
	

/**
 * Destroys all the masterPages in the aggregation 
 * named <code>masterPages</code>.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#destroyMasterPages
 * @function
 */


/**
 * Getter for aggregation <code>detailPages</code>.<br/>
 * The content entities between which this SplitContainer navigates in detail area. These can be of type sap.m.Page, sap.ui.core.View, sap.m.Carousel or any other control with fullscreen/page semantics.
 * 
 * These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.SplitContainer#getDetailPages
 * @function
 */


/**
 * Inserts a detailPage into the aggregation named <code>detailPages</code>.
 *
 * @param {sap.ui.core.Control}
 *          oDetailPage the detailPage to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the detailPage should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the detailPage is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the detailPage is inserted at 
 *             the last position        
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#insertDetailPage
 * @function
 */

/**
 * Adds some detailPage <code>oDetailPage</code> 
 * to the aggregation named <code>detailPages</code>.
 *
 * @param {sap.ui.core.Control}
 *            oDetailPage the detailPage to add; if empty, nothing is inserted
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#addDetailPage
 * @function
 */

/**
 * Removes an detailPage from the aggregation named <code>detailPages</code>.
 *
 * @param {int | string | sap.ui.core.Control} vDetailPage the detailPage to remove or its index or id
 * @return {sap.ui.core.Control} the removed detailPage or null
 * @public
 * @name sap.m.SplitContainer#removeDetailPage
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>detailPages</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.SplitContainer#removeAllDetailPages
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>detailPages</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oDetailPage the detailPage whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.SplitContainer#indexOfDetailPage
 * @function
 */
	

/**
 * Destroys all the detailPages in the aggregation 
 * named <code>detailPages</code>.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#destroyDetailPages
 * @function
 */


/**
 * Sets the initial detail page, which is shown on application launch.
 *
 * @return {string} Id of the element which is the current target of the <code>initialDetail</code> association, or null
 * @public
 * @name sap.m.SplitContainer#getInitialDetail
 * @function
 */

/**
 * Sets the initial detail page, which is shown on application launch.
 *
 * @param {string | sap.ui.core.Control} vInitialDetail 
 *    Id of an element which becomes the new target of this <code>initialDetail</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#setInitialDetail
 * @function
 */


	
/**
 * Sets the initial master page, which is shown on application launch.
 *
 * @return {string} Id of the element which is the current target of the <code>initialMaster</code> association, or null
 * @public
 * @name sap.m.SplitContainer#getInitialMaster
 * @function
 */

/**
 * Sets the initial master page, which is shown on application launch.
 *
 * @param {string | sap.ui.core.Control} vInitialMaster 
 *    Id of an element which becomes the new target of this <code>initialMaster</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#setInitialMaster
 * @function
 */


	
/**
 * The event is fired when navigation between two pages in master area has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation. 
 *
 * @name sap.m.SplitContainer#masterNavigate
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page which was shown before the current navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page which was shown before the current navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page which will be shown after the current navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page which will be shown after the current navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page which is currently navigated to) has not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether this is a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this is a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this is a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are "to", "back", and "backToTop".
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'masterNavigate' event of this <code>sap.m.SplitContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitContainer</code>.<br/> itself. 
 *  
 * The event is fired when navigation between two pages in master area has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code>.<br/> itself.
 *
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#attachMasterNavigate
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'masterNavigate' event of this <code>sap.m.SplitContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#detachMasterNavigate
 * @function
 */

/**
 * Fire event masterNavigate to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page which was shown before the current navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page which was shown before the current navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page which will be shown after the current navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page which will be shown after the current navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page which is currently navigated to) has not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether this is a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this is a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this is a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are "to", "back", and "backToTop".</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitContainer#fireMasterNavigate
 * @function
 */


/**
 * The event is fired when navigation between two pages in master area has completed. In case of animated transitions this event is fired with some delay after the "navigate" event. 
 *
 * @name sap.m.SplitContainer#afterMasterNavigate
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page which had been shown before navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page which had been shown before navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page which is now shown after navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page which is now shown after navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page which has been navigated to) had not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether was a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this was a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are "to", "back", and "backToTop".
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterMasterNavigate' event of this <code>sap.m.SplitContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitContainer</code>.<br/> itself. 
 *  
 * The event is fired when navigation between two pages in master area has completed. In case of animated transitions this event is fired with some delay after the "navigate" event. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code>.<br/> itself.
 *
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#attachAfterMasterNavigate
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterMasterNavigate' event of this <code>sap.m.SplitContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#detachAfterMasterNavigate
 * @function
 */

/**
 * Fire event afterMasterNavigate to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page which had been shown before navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page which had been shown before navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page which is now shown after navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page which is now shown after navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page which has been navigated to) had not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether was a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this was a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are "to", "back", and "backToTop".</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitContainer#fireAfterMasterNavigate
 * @function
 */


/**
 * Event gets triggered when a Master Button needs to be shown or hidden. This is necessary for custom headers when the SplitContainer control does not handle the placement of the master button automatically. 
 *
 * @name sap.m.SplitContainer#masterButton
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'masterButton' event of this <code>sap.m.SplitContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitContainer</code>.<br/> itself. 
 *  
 * Event gets triggered when a Master Button needs to be shown or hidden. This is necessary for custom headers when the SplitContainer control does not handle the placement of the master button automatically. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code>.<br/> itself.
 *
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#attachMasterButton
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'masterButton' event of this <code>sap.m.SplitContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#detachMasterButton
 * @function
 */

/**
 * Fire event masterButton to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitContainer#fireMasterButton
 * @function
 */


/**
 * This event is fired before the master area is opened. 
 *
 * @name sap.m.SplitContainer#beforeMasterOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'beforeMasterOpen' event of this <code>sap.m.SplitContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitContainer</code>.<br/> itself. 
 *  
 * This event is fired before the master area is opened. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code>.<br/> itself.
 *
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#attachBeforeMasterOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeMasterOpen' event of this <code>sap.m.SplitContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#detachBeforeMasterOpen
 * @function
 */

/**
 * Fire event beforeMasterOpen to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitContainer#fireBeforeMasterOpen
 * @function
 */


/**
 * This event is fired when the master area is fully opened after animation if there is. 
 *
 * @name sap.m.SplitContainer#afterMasterOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterMasterOpen' event of this <code>sap.m.SplitContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitContainer</code>.<br/> itself. 
 *  
 * This event is fired when the master area is fully opened after animation if there is. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code>.<br/> itself.
 *
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#attachAfterMasterOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterMasterOpen' event of this <code>sap.m.SplitContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#detachAfterMasterOpen
 * @function
 */

/**
 * Fire event afterMasterOpen to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitContainer#fireAfterMasterOpen
 * @function
 */


/**
 * This event is fired before the master area is closed. 
 *
 * @name sap.m.SplitContainer#beforeMasterClose
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'beforeMasterClose' event of this <code>sap.m.SplitContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitContainer</code>.<br/> itself. 
 *  
 * This event is fired before the master area is closed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code>.<br/> itself.
 *
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#attachBeforeMasterClose
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeMasterClose' event of this <code>sap.m.SplitContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#detachBeforeMasterClose
 * @function
 */

/**
 * Fire event beforeMasterClose to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitContainer#fireBeforeMasterClose
 * @function
 */


/**
 * This event is fired when the master area is fully closed after the animation when there is. 
 *
 * @name sap.m.SplitContainer#afterMasterClose
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterMasterClose' event of this <code>sap.m.SplitContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitContainer</code>.<br/> itself. 
 *  
 * This event is fired when the master area is fully closed after the animation when there is. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code>.<br/> itself.
 *
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#attachAfterMasterClose
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterMasterClose' event of this <code>sap.m.SplitContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#detachAfterMasterClose
 * @function
 */

/**
 * Fire event afterMasterClose to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitContainer#fireAfterMasterClose
 * @function
 */


/**
 * The event is fired when navigation between two pages in detail area has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation. 
 *
 * @name sap.m.SplitContainer#detailNavigate
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page which was shown before the current navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page which was shown before the current navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page which will be shown after the current navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page which will be shown after the current navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page which is currently navigated to) has not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether this is a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this is a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this is a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are "to", "back", and "backToTop".
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'detailNavigate' event of this <code>sap.m.SplitContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitContainer</code>.<br/> itself. 
 *  
 * The event is fired when navigation between two pages in detail area has been triggered. The transition (if any) to the new page has not started yet.
 * This event can be aborted by the application with preventDefault(), which means that there will be no navigation. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code>.<br/> itself.
 *
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#attachDetailNavigate
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'detailNavigate' event of this <code>sap.m.SplitContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#detachDetailNavigate
 * @function
 */

/**
 * Fire event detailNavigate to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page which was shown before the current navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page which was shown before the current navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page which will be shown after the current navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page which will be shown after the current navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page which is currently navigated to) has not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether this is a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this is a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this is a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are "to", "back", and "backToTop".</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitContainer#fireDetailNavigate
 * @function
 */


/**
 * The event is fired when navigation between two pages in detail area has completed. In case of animated transitions this event is fired with some delay after the "navigate" event. 
 *
 * @name sap.m.SplitContainer#afterDetailNavigate
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.from The page which had been shown before navigation.
 * @param {string} oControlEvent.getParameters.fromId The ID of the page which had been shown before navigation.
 * @param {sap.ui.core.Control} oControlEvent.getParameters.to The page which is now shown after navigation.
 * @param {string} oControlEvent.getParameters.toId The ID of the page which is now shown after navigation.
 * @param {boolean} oControlEvent.getParameters.firstTime Whether the "to" page (more precisely: a control with the ID of the page which has been navigated to) had not been shown/navigated to before.
 * @param {boolean} oControlEvent.getParameters.isTo Whether was a forward navigation, triggered by "to()".
 * @param {boolean} oControlEvent.getParameters.isBack Whether this was a back navigation, triggered by "back()".
 * @param {boolean} oControlEvent.getParameters.isBackToTop Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {boolean} oControlEvent.getParameters.isBackToPage Whether this was a navigation to the root page, triggered by "backToTop()".
 * @param {string} oControlEvent.getParameters.direction How the navigation was triggered, possible values are "to", "back", and "backToTop".
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterDetailNavigate' event of this <code>sap.m.SplitContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitContainer</code>.<br/> itself. 
 *  
 * The event is fired when navigation between two pages in detail area has completed. In case of animated transitions this event is fired with some delay after the "navigate" event. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.SplitContainer</code>.<br/> itself.
 *
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#attachAfterDetailNavigate
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterDetailNavigate' event of this <code>sap.m.SplitContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitContainer#detachAfterDetailNavigate
 * @function
 */

/**
 * Fire event afterDetailNavigate to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>sap.ui.core.Control</code> The page which had been shown before navigation.</li>
 * <li>'fromId' of type <code>string</code> The ID of the page which had been shown before navigation.</li>
 * <li>'to' of type <code>sap.ui.core.Control</code> The page which is now shown after navigation.</li>
 * <li>'toId' of type <code>string</code> The ID of the page which is now shown after navigation.</li>
 * <li>'firstTime' of type <code>boolean</code> Whether the "to" page (more precisely: a control with the ID of the page which has been navigated to) had not been shown/navigated to before.</li>
 * <li>'isTo' of type <code>boolean</code> Whether was a forward navigation, triggered by "to()".</li>
 * <li>'isBack' of type <code>boolean</code> Whether this was a back navigation, triggered by "back()".</li>
 * <li>'isBackToTop' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'isBackToPage' of type <code>boolean</code> Whether this was a navigation to the root page, triggered by "backToTop()".</li>
 * <li>'direction' of type <code>string</code> How the navigation was triggered, possible values are "to", "back", and "backToTop".</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitContainer#fireAfterDetailNavigate
 * @function
 */


/**
 * Navigate to given page inside the SplitContainer. The navigation is done inside the master area if the page has been added, otherwise it tries to do the page navigation in the detail area.
 *
 * @name sap.m.SplitContainer.prototype.to
 * @function
 * @param {string} 
 *         sPageId
 *         The screen to which drilldown should happen. The ID or the control itself can be given.
 * @param {string} 
 *         sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default is "slide" (horizontal movement from the right).
 * Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * 
 * None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} 
 *         oData
 *         This optional object can carry any payload data which should be made available to the target page. The "beforeShow" event on the target page will contain this data object as "data" property.
 * 
 * Use case: in scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * 
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameters
 *         This optional object can contain additional information for the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * 
 * For a proper parameter order, the "data" parameter must be given when the "transitionParameters" parameter is used. (it can be given as "null")
 * 
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * The "show", "slide" and "fade" transitions do not use any parameter.

 * @type sap.m.SplitContainer
 * @public
 * @since 1.10.0
 */


/**
 * Navigates back to the nearest previous page in the SplitContainer history with the given ID. If there is no such page among the previous pages, nothing happens.
 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
 * 
 * Calling this navigation method triggers first the (cancelable) "navigate" event on the SplitContainer, then the "beforeHide" pseudo event on the source page and "beforeFirstShow" (if applicable) and"beforeShow" on the target page. Later - after the transition has completed - the "afterShow" pseudo event is triggered on the target page and "afterHide" on the page which has been left. The given backData object is available in the "beforeFirstShow", "beforeShow" and "afterShow" event object as "data" property. The original "data" object from the "to" navigation is also available in these event objects.
 *
 * @name sap.m.SplitContainer.prototype.backToPage
 * @function
 * @param {string} 
 *         sPageId
 *         The screen to which drilldown should happen. The ID or the control itself can be given.
 * @param {object} 
 *         oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * 
 * In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * 
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameters
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * 
 * In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
 * 
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.

 * @type sap.m.SplitContainer
 * @public
 * @since 1.10.0
 */


/**
 * navigate to given master page
 *
 * @name sap.m.SplitContainer.prototype.toMaster
 * @function
 * @param {string} 
 *         sPageId
 *         The screen to which drilldown should happen. The ID or the control itself can be given.
 * @param {string} 
 *         sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default is "slide" (horizontal movement from the right).
 * Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * 
 * None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} 
 *         oData

 * @since 1.7.1 *         This optional object can carry any payload data which should be made available to the target page. The "beforeShow" event on the target page will contain this data object as "data" property.
 * 
 * Use case: in scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * 
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameters

 * @since 1.7.1 *         This optional object can contain additional information for the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * 
 * For a proper parameter order, the "data" parameter must be given when the "transitionParameters" parameter is used. (it can be given as "null")
 * 
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * The "show", "slide" and "fade" transitions do not use any parameter.

 * @type sap.m.SplitContainer
 * @public
 */


/**
 * navigate to given detail page
 *
 * @name sap.m.SplitContainer.prototype.toDetail
 * @function
 * @param {string} 
 *         sPageId
 *         
 * @param {string} 
 *         sTransitionName
 *         The type of the transition/animation to apply. This parameter can be omitted; then the default is "slide" (horizontal movement from the right).
 * Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.
 * 
 * None of the standard transitions is currently making use of any given transition parameters.
 * @param {object} 
 *         oData
 *         This optional object can carry any payload data which should be made available to the target page. The "beforeShow" event on the target page will contain this data object as "data" property.
 * 
 * Use case: in scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * 
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameter
 *         This optional object can contain additional information for the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * 
 * For a proper parameter order, the "data" parameter must be given when the "transitionParameters" parameter is used. (it can be given as "null")
 * 
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.
 * The "show", "slide" and "fade" transitions do not use any parameter.

 * @type sap.m.SplitContainer
 * @public
 */


/**
 * navigate back within MasterView
 *
 * @name sap.m.SplitContainer.prototype.backMaster
 * @function
 * @param {object} 
 *         oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * 
 * In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * 
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameter
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * 
 * In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
 * 
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.

 * @type sap.m.SplitContainer
 * @public
 */


/**
 * navigate back within DetailView
 *
 * @name sap.m.SplitContainer.prototype.backDetail
 * @function
 * @param {object} 
 *         oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * 
 * In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * 
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameter
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * 
 * In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
 * 
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.

 * @type sap.m.SplitContainer
 * @public
 */


/**
 * When in ShowHideMode and the device is in portrait mode, this function can be used to make the master page visible.
 *
 * @name sap.m.SplitContainer.prototype.showMaster
 * @function

 * @type sap.m.SplitContainer
 * @public
 */


/**
 * When in ShowHideMode and the device is in portrait mode, this function can be used to hide the master page.
 *
 * @name sap.m.SplitContainer.prototype.hideMaster
 * @function

 * @type sap.m.SplitContainer
 * @public
 */


/**
 * Returns the current shown page either in master area or in detail area. When the parameter is set to true, the current page in master area is returned. Otherwise the current page in detail area is returned.
 * 
 * This method is provided mainly for providing API consistency between sap.m.SplitContainer and sap.m.App. So that the same code line can be reused.
 *
 * @name sap.m.SplitContainer.prototype.getCurrentPage
 * @function
 * @param {boolean} 
 *         bMaster
 *         States if this function returns the current page in master area. If it's set to false, the current page in detail area will be returned.

 * @type sap.ui.core.Control
 * @public
 * @since 1.11.1
 */


/**
 * Returns the current shown master page.
 *
 * @name sap.m.SplitContainer.prototype.getCurrentMasterPage
 * @function

 * @type sap.ui.core.Control
 * @public
 */


/**
 * Returns the current shown detail page.
 *
 * @name sap.m.SplitContainer.prototype.getCurrentDetailPage
 * @function

 * @type sap.ui.core.Control
 * @public
 */


/**
 * Navigates back to the initial/top level of Master (this is the element aggregated as "initialPage", or the first added element). If already on the initial page, nothing happens.
 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
 *
 * @name sap.m.SplitContainer.prototype.backToTopMaster
 * @function
 * @param {object} 
 *         oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * 
 * In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * 
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameter
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * 
 * In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
 * 
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.

 * @type sap.ui.core.Control
 * @public
 */


/**
 * Navigates back to the initial/top level of Detail (this is the element aggregated as "initialPage", or the first added element). If already on the initial page, nothing happens.
 * The transition effect which had been used to get to the current page is inverted and used for this navigation.
 *
 * @name sap.m.SplitContainer.prototype.backToTopDetail
 * @function
 * @param {object} 
 *         oBackData
 *         This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)
 * 
 * In scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.
 * For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.
 * 
 * When the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.
 * @param {object} 
 *         oTransitionParameter
 *         This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration.
 * The animation type can NOT be selected here - it is always the inverse of the "to" navigation.
 * 
 * In order to use the "transitionParameters" property, the "data" property must be used (at least "null" must be given) for a proper parameter order.
 * 
 * NOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.

 * @type sap.ui.core.Control
 * @public
 */


/**
 * Add a content entity either to master area or detail area depending on the master parameter.
 * 
 * This method is provided mainly for providing API consistency between sap.m.SplitContainer and sap.m.App. So that the same code line can be reused.
 *
 * @name sap.m.SplitContainer.prototype.addPage
 * @function
 * @param {sap.ui.core.Control} 
 *         oPage
 *         The content entities between which this SplitContainer navigates in either master area or detail area depending on the master parameter. These can be of type sap.m.Page, sap.ui.core.View, sap.m.Carousel or any other control with fullscreen/page semantics.
 * @param {boolean} 
 *         bMaster
 *         States if the page should be added to the master area. If it's set to false, the page is added to detail area.

 * @type sap.m.SplitContainer
 * @public
 * @since 1.11.1
 */


/**
 * Returns the page with the given id in master area. If there's no page that has the given id, null is returned.
 *
 * @name sap.m.SplitContainer.prototype.getMasterPage
 * @function
 * @param {string} 
 *         sId
 *         The id of the page that needs to be fetched.

 * @type sap.ui.core.Control
 * @public
 * @since 1.11.1
 */


/**
 * Returns the page with the given id in detail area. If there's no page that has the given id, null is returned.
 *
 * @name sap.m.SplitContainer.prototype.getDetailPage
 * @function
 * @param {string} 
 *         sId
 *         The id of the page that needs to be fetched.

 * @type sap.ui.core.Control
 * @public
 * @since 1.11.1
 */


/**
 * Returns the page with the given id from either master area or detail area depending on the master parameter. If there's no page that has the given id, null is returned.
 *
 * @name sap.m.SplitContainer.prototype.getPage
 * @function
 * @param {string} 
 *         sId
 *         The id of the page that needs to be fetched.
 * @param {boolean} 
 *         bMaster
 *         If the page with given id should be fetched from the master area. If it's set to false, the page will be fetched from detail area.

 * @type sap.ui.core.Control
 * @public
 * @since 1.11.1
 */


/**
 * Inserts the page/control with the specified ID into the navigation history stack of the NavContainer.
 * 
 * This can be used for deep-linking when the user directly reached a drilldown detail page using a bookmark and then wants to navigate up in the drilldown hierarchy. Normally such a back navigation would not be possible because there is no previous page in the SplitContainer's history stack.
 *
 * @name sap.m.SplitContainer.prototype.insertPreviousPage
 * @function
 * @param {string} 
 *         sPageId
 *         The ID of the control/page/screen which is inserted into the history stack. The respective control must be aggregated by the SplitContainer, otherwise this will cause an error.
 * @param {string} 
 *         sTransitionName
 *         The type of the transition/animation which would have been used to navigate from the (inserted) previous page to the current page. When navigating back, the inverse animation will be applied.
 * This parameter can be omitted; then the default is "slide" (horizontal movement from the right).
 * @param {object} 
 *         oData
 *         This optional object can carry any payload data which would have been given to the inserted previous page if the user would have done a normal forward navigation to it.

 * @type sap.m.SplitContainer
 * @public
 */


/**
 * Returns the previous page (the page from which the user drilled down to the current page with "to()").
 * Note: this is not the page which the user has seen before, but the page which is the target of the next "back()" navigation.
 * If there is no previous page, "undefined" is returned.
 *
 * @name sap.m.SplitContainer.prototype.getPreviousPage
 * @function
 * @param {boolean} 
 *         bMaster
 *         States if this function returns the previous page in master area. If it's set to false, the previous page in detail area will be returned.

 * @type sap.ui.core.Control
 * @public
 */


/**
 * 
 * Returns whether master area is currently shown on the screen. In desktop browser or tablet, this method returns true when master area is shown on the screen no matter in portrait or landscape mode. And on mobile phone devices, this method returns true when the current shown page is from the pages which are added to the master area, otherwise it returns false.
 * 
 *
 * @name sap.m.SplitContainer.prototype.isMasterShown
 * @function

 * @type boolean
 * @public
 * @since 1.16.5
 */


// Start of sap\m\SplitContainer.js
jQuery.sap.require("sap.ui.core.theming.Parameters");
jQuery.sap.require("sap.ui.core.IconPool");

/**************************************************************
* START - Life Cycle Methods
**************************************************************/
sap.m.SplitContainer.prototype.init = function() {
	var oSplitContainer = this;
	this._isMie9 = false;
	this._isPlatformDependent = sap.ui.core.theming.Parameters.get("sapMPlatformDependent") == "true";
	//Check for IE9
	if(sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version < 10) {
		this._isMie9 = true;
	}
	this.oCore = sap.ui.getCore();
	// Pages arrays: As we delegate the pages to internal navigation container we have to remember the pages
	// in private member variables. By doing this we can return the right pages for master /detail aggregations.
	this._aMasterPages = [];
	this._aDetailPages = [];
	if(!sap.ui.Device.system.phone) {
		this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.m");
		//initialize the master nav container
		this._oMasterNav = new sap.m.NavContainer(this.getId() + "-Master", {
			width: "",
			navigate: function(oEvent){
				oSplitContainer._handleNavigationEvent(oEvent, false, true);
			},
			afterNavigate: function(oEvent){
				oSplitContainer._handleNavigationEvent(oEvent, true, true);
			}
		});

		//initialize the master nav container
		this._oDetailNav = new sap.m.NavContainer(this.getId() + "-Detail", {
			width: "",
			navigate: function(oEvent){
				oSplitContainer._handleNavigationEvent(oEvent, false, false);
			},
			afterNavigate: function(oEvent){
				oSplitContainer._handleNavigationEvent(oEvent, true, false);
			}
		});
		
		this.setAggregation("_navMaster", this._oMasterNav, true);
		this.setAggregation("_navDetail", this._oDetailNav, true);

		//initialize the navigation button
		this._createShowMasterButton();

		//initialize the popover
		this._oPopOver = new sap.m.Popover(this.getId() + "-Popover", {
			placement: sap.m.PlacementType.Bottom,
			showHeader: false,
			contentWidth: "320px",
			contentHeight: "600px",
			beforeOpen: function(){
				oSplitContainer.fireBeforeMasterOpen();
			},
			beforeClose: function(){
				oSplitContainer.fireAfterMasterOpen();
			},
			afterOpen: function(){
				oSplitContainer.fireAfterMasterOpen();
				oSplitContainer._bMasterisOpen = true;
			},
			afterClose: function(){
				oSplitContainer.fireAfterMasterClose();
				oSplitContainer._bMasterisOpen = false;
			}
		}).addStyleClass("sapMSplitContainerPopover");
		
		this.setAggregation("_navPopover", this._oPopOver, true);
	}else {
		//master nav and detail nav are the same in phone
		this._oMasterNav = this._oDetailNav =  new sap.m.NavContainer();
		this.setAggregation("_navMaster", this._oMasterNav, true);
	}
	
	this._oldIsLandscape = sap.ui.Device.orientation.landscape;
	//if master page is open when device is in portrait and show/hide mode
	this._bMasterisOpen = false; 

	// Patch removeChild methods of navigation container. This is to remove the page from the internal pages array
	// when a page is moved to another aggregation.
	var that = this;
	var fnPatchRemoveChild = function(fnRemoveChild, sNavContainerProperty, sPagesArrayProperty) {
		return function(oChild, sAggregationName, bSuppressInvalidate) {
			fnRemoveChild.apply(that[sNavContainerProperty], arguments);
			if (sAggregationName === "pages" && jQuery.inArray(oChild, that[sPagesArrayProperty])) {
				that._removePageFromArray(that[sPagesArrayProperty], oChild);
			}
		};
	};

	var fnMasterNavRemoveChild = this._oMasterNav._removeChild;
	this._oMasterNav._removeChild = fnPatchRemoveChild(fnMasterNavRemoveChild, "_oMasterNav", "_aMasterPages");

	if (this._oDetailNav) {
		var fnDetailNavRemoveChild = this._oDetailNav._removeChild;
		this._oDetailNav._removeChild = fnPatchRemoveChild(fnDetailNavRemoveChild, "_oDetailNav", "_aDetailPages");
	}
};

sap.m.SplitContainer.prototype.onBeforeRendering = function() {
	if(this._fnOrientationChange) {
		sap.ui.Device.resize.detachHandler(this._fnOrientationChange);
	}
	
	//if SplitContainer is rerendered while the master is open, clear the status.
	if(this._bMasterisOpen && (this._portraitHide() || this._hideMode())){
		this._oShowMasterBtn.removeStyleClass("sapMSplitContainerMasterBtnHidden");
		this._bMasterisOpen = false;
	}
};

sap.m.SplitContainer.prototype.exit = function() {
	if(this._fnOrientationChange){
		sap.ui.Device.resize.detachHandler(this._fnOrientationChange);
	}
	delete this._aMasterPages;
	delete this._aDetailPages;
	if(this._oShowMasterBtn) {
		this._oShowMasterBtn.destroy();
		this._oShowMasterBtn = null;
	}
};

sap.m.SplitContainer.prototype.onAfterRendering = function() {
	if(!sap.ui.Device.system.phone) {
		if(this._oPopOver && this._oPopOver.isOpen()){
			this._oPopOver.close();
		}
		if(!this._fnOrientationChange){
			this._fnOrientationChange = jQuery.proxy(this._handleOrientationChange, this);
		}
		sap.ui.Device.resize.attachHandler(this._fnOrientationChange);
	}
	
	if(sap.ui.Device.browser.internet_explorer){
		this._oMasterNav.$().append('<iframe class="sapMSplitContainerMasterBlindLayer" src="about:blank"></iframe>');
	}
};
/**************************************************************
* END - Life Cycle Methods
**************************************************************/

/**************************************************************
* START - Touch Event Handlers
**************************************************************/
sap.m.SplitContainer.prototype.ontouchstart = function(oEvent){
	if(!sap.ui.Device.system.phone){
		if(oEvent.originalEvent && oEvent.originalEvent._sapui_handledByControl){
			this._bIgnoreSwipe = true;
		}else{
			this._bIgnoreSwipe = false;
		}
	}
};

sap.m.SplitContainer.prototype.onswiperight = function(oEvent) {
	//only enabled on tablet or Windows 8
	if((sap.ui.Device.system.tablet || (sap.ui.Device.os.windows && sap.ui.Device.os.version >= 8))
		&& (this._portraitHide() || this._hideMode()) 
		&& !this._bIgnoreSwipe) {
		//if event is already handled by inner control, master won't be shown.
		//this fix the problem when for example, carousel control in rendered in detail area.
		//CSN 2013 224661
		if(!this._bDetailNavButton){
			this.showMaster();
		}
	}
};

//handles closing of master navContainer and navigation inside it
sap.m.SplitContainer.prototype.ontap = function(oEvent) {
	if(sap.ui.Device.system.phone){
		return;
	}

	var bIsMasterNav = true;

	if(jQuery(oEvent.target).parents(".sapMSplitContainerDetail").length > 0) {
		bIsMasterNav = false;
	}

	// when press not in MasterNav and not the showMasterButton, master will be hidden
	// this should happen when:
	// 1. showhidemode in portrait
	// 2. hidemode
	if(((!this._oldIsLandscape && this.getMode() == "ShowHideMode") || this.getMode() == "HideMode")
			// press isn't occuring in master area
			&& !bIsMasterNav
			// master is open
			&& this._bMasterisOpen
			// press isn't triggered by the showMasterButton
			&& !jQuery.sap.containsOrEquals(this._oShowMasterBtn.getDomRef(), oEvent.target)){
		this.hideMaster();
	}
};

sap.m.SplitContainer.prototype.onswipeleft = function(oEvent) {
	//only enabled on tablet or Windows 8
	if((sap.ui.Device.system.tablet || (sap.ui.Device.os.windows && sap.ui.Device.os.version >= 8)) 
		&& (this._portraitHide() || this._hideMode()) 
		&& !this._bIgnoreSwipe) {
		this.hideMaster();
	}
};

sap.m.SplitContainer.prototype._onMasterButtonTap = function(oEvent){
	if(sap.ui.Device.system.phone){
		return;
	}

	if(!this._oldIsLandscape){
		if(this.getMode() == "PopoverMode") {
			if(!this._oPopOver.isOpen()){
				this._oPopOver.openBy(this._oShowMasterBtn, true);
			}else{
				this._oPopOver.close();
			}
		}else{
			this.showMaster();
		}
	}else{
		if(this.getMode() === "HideMode"){
			this.showMaster();
		}
	}
};
//**************************************************************
//* End - Touch Event Handlers
//**************************************************************

//**************************************************************
//* START - Public methods
//**************************************************************

sap.m.SplitContainer.prototype.to = function(pageId, transitionName, data, oTransitionParameters) {
	if (this._oMasterNav.getPage(pageId)) {
		this._oMasterNav.to(pageId, transitionName, data, oTransitionParameters);
	} else {
		this._oDetailNav.to(pageId, transitionName, data, oTransitionParameters);
	}
};

sap.m.SplitContainer.prototype.backToPage = function(pageId, backData, oTransitionParameters) {
	if (this._oMasterNav.getPage(pageId)) {
		this._oMasterNav.backToPage(pageId, backData, oTransitionParameters);
	} else {
		this._oDetailNav.backToPage(pageId, backData, oTransitionParameters);
	}
};


sap.m.SplitContainer.prototype.insertPreviousPage = function(pageId, transitionName, data) {
	if (this._oMasterNav.getPage(pageId)) {
		this._oMasterNav.insertPreviousPage(pageId, transitionName, data);
	} else {
		this._oDetailNav.insertPreviousPage(pageId, transitionName, data);
	}
	return this;
};


sap.m.SplitContainer.prototype.toMaster = function(pageId, transitionName, data, oTransitionParameters) {
	this._oMasterNav.to(pageId, transitionName, data, oTransitionParameters);
};

sap.m.SplitContainer.prototype.backMaster = function(backData, oTransitionParameters) {
	this._oMasterNav.back(backData, oTransitionParameters);
};

sap.m.SplitContainer.prototype.backMasterToPage = function(pageId, backData, oTransitionParameters) {
	this._oMasterNav.backToPage(pageId, backData, oTransitionParameters);
};

sap.m.SplitContainer.prototype.toDetail = function(pageId, transitionName, data, oTransitionParameters) {
	this._oDetailNav.to(pageId, transitionName, data, oTransitionParameters);
};

sap.m.SplitContainer.prototype.backDetail = function(backData, oTransitionParameters) {
	this._oDetailNav.back(backData, oTransitionParameters);
};

sap.m.SplitContainer.prototype.backDetailToPage = function(pageId, backData, oTransitionParameters) {
	this._oDetailNav.backToPage(pageId, backData, oTransitionParameters);
};

sap.m.SplitContainer.prototype.backToTopMaster = function(backData, oTransitionParameters) {
	this._oMasterNav.backToTop(backData, oTransitionParameters);
};

sap.m.SplitContainer.prototype.backToTopDetail = function(backData, oTransitionParameters) {
	this._oDetailNav.backToTop(backData, oTransitionParameters);
};

sap.m.SplitContainer.prototype.addMasterPage = function(oPage) {
	var oRealPage = this._getRealPage(oPage);

	if(this._hasPageInArray(this._aMasterPages, oPage)) {
		return;
	}

	// When the same NavContainer is used for both aggregations, calling "addPage()" will not do anything in case the oPage is already
	// aggregated by this NavContainer, but in the other "virtual" aggregation of this SplitContainer (i.e. moved from detailPages to masterPages).
	// This would lead to the page being added to the "master" array, but not removed from the "detail" array because the patched method
	// in the NavContainer (removePage) is not called. Hence, remove it directly from the detail array.
	if (this._oMasterNav === this._oDetailNav && jQuery.inArray(oPage, this._oDetailNav.getPages())) {
		this._removePageFromArray(this._aDetailPages, oPage);
	}
	this._oMasterNav.addPage(oPage);
	this._aMasterPages.push(oPage);
	return this;
};

sap.m.SplitContainer.prototype.addDetailPage = function(oPage) {
	var oSplitContainer = this,
		oRealPage = this._getRealPage(oPage),
		oCore = this.oCore,
		sPageId = oRealPage ? oRealPage.getId() : "";

	if(this._hasPageInArray(this._aDetailPages, oPage)) {
		return;
	}
	
	//processing the header in page
	oPage.addDelegate({
		onBeforeFirstShow: function(){
			if(oRealPage){
				var oNavButton = oCore.byId(sPageId + "-navButton"),
					oIconImage = oCore.byId(sPageId + "-icon");
				if(!sap.ui.Device.system.phone){
					if(oNavButton){
						//oNavButton.addStyleClass("sapMSplitContainerHiddenChild");
					}
					if(oIconImage){
						//oIconImage.addStyleClass("sapMSplitContainerHiddenChild");
					}
				}
			}
		},
		onBeforeShow: function(){
			if(oRealPage){
				if(!sap.ui.Device.system.phone){
					//now it's a tablet
					//this is the initialization of header in page inside the detail navigation container
					//rules are displayed below
					// 1. navigation button is completely removed from the page in detail nav container
					// 2. iOS: show title if there is
					// 3: Android: Icon isn't shown directly in header, the icon is added to the showMasterButton.
					// 4: Android: show title in portrait mode, hide title in landscape
					if((oSplitContainer._portraitHide() || oSplitContainer._hideMode() || oSplitContainer._portraitPopover()) && (!oSplitContainer._bMasterisOpen || oSplitContainer._bMasterClosing)) {
						oSplitContainer._setMasterButton(oRealPage, jQuery.proxy(oSplitContainer._setTitleVisibility, oSplitContainer));
					}else{
						oSplitContainer._setTitleVisibility(oRealPage);
					}
				}
			}
		}
	});
	
	if(oRealPage){
		oRealPage.addDelegate({
			//before rendering is used in order to avoid invalidate in renderer (set button to the header in page)
			onBeforeRendering: function(){
				if(!sap.ui.Device.system.phone) {
					if(oSplitContainer._portraitHide() || oSplitContainer._hideMode()) {
						if(!oSplitContainer._bMasterisOpen || oSplitContainer._bMasterClosing){
							oSplitContainer._setMasterButton(oRealPage);
						}
					}else if(oSplitContainer._portraitPopover()) {
						oSplitContainer._setMasterButton(oRealPage);
					}else {
						oSplitContainer._removeMasterButton(oRealPage);
					}
				}
			}
		});
	}
	
	// When the same NavContainer is used for both aggregations, calling "addPage()" will not do anything in case the oPage is already
	// aggregated by this NavContainer, but in the other "virtual" aggregation of this SplitContainer (i.e. moved from masterPages to detailPages).
	// This would lead to the page being added to the "detail" array, but not removed from the "master" array because the patched method
	// in the NavContainer (removePage) is not called. Hence, remove it directly from the master array.
	if (this._oMasterNav === this._oDetailNav && jQuery.inArray(oPage, this._oMasterNav.getPages())) {
		this._removePageFromArray(this._aMasterPages, oPage);
	}
	
	this._oDetailNav.addPage(oPage);
	this._aDetailPages.push(oPage);
	return this;
};

sap.m.SplitContainer.prototype.getMasterPages = function() {
	return this._aMasterPages;
};

sap.m.SplitContainer.prototype.getDetailPages = function() {
	return this._aDetailPages;
};

sap.m.SplitContainer.prototype.indexOfMasterPage = function(oPage) {
	return this._indexOfMasterPage(oPage);
};

sap.m.SplitContainer.prototype.indexOfDetailPage = function(oPage) {
	return this._indexOfDetailPage(oPage);
};

sap.m.SplitContainer.prototype.insertMasterPage = function(oPage, iIndex, bSuppressInvalidate) {
	return this._insertPage(this._aMasterPages, "masterPages", oPage, iIndex, bSuppressInvalidate)
};

sap.m.SplitContainer.prototype.removeMasterPage = function(oPage, bSuppressInvalidate) {
	return this._removePage(this._aMasterPages, "masterPages", oPage, bSuppressInvalidate);
};

sap.m.SplitContainer.prototype.removeAllMasterPages = function(bSuppressInvalidate) {
	this._aMasterPages = [];
	return this.removeAllAggregation("masterPages", bSuppressInvalidate);
};

sap.m.SplitContainer.prototype.insertDetailPage = function(oPage, iIndex, bSuppressInvalidate) {
	return this._insertPage(this._aDetailPages, "detailPages", oPage, iIndex, bSuppressInvalidate)
};

sap.m.SplitContainer.prototype.removeDetailPage = function(oPage, bSuppressInvalidate) {
	return this._removePage(this._aDetailPages, "detailPages", oPage, bSuppressInvalidate);
};

sap.m.SplitContainer.prototype.removeAllDetailPages = function(bSuppressInvalidate) {
	this._aDetailPages = [];
	return this.removeAllAggregation("detailPages", bSuppressInvalidate);
};

sap.m.SplitContainer.prototype.addPage = function(oPage, bMaster){
	if(bMaster){
		return this.addMasterPage(oPage);
	}else{
		return this.addDetailPage(oPage);
	}
};

sap.m.SplitContainer.prototype.showMaster = function() {
	var _this$ = this._oMasterNav.$(),
		that = this,
		_curPage = this._getRealPage(this._oDetailNav.getCurrentPage());
	if(this._portraitPopover()) {
        if(!this._oPopOver.isOpen()){
        	function afterPopoverOpen(){
        		this._oPopOver.detachAfterOpen(afterPopoverOpen, this);
        		this._bMasterOpening = false;
        		this._bMasterisOpen = true;
        		this.fireAfterMasterOpen();
        	}
        	this._oPopOver.attachAfterOpen(afterPopoverOpen, this);
        	this.fireBeforeMasterOpen();
        	this._oPopOver.openBy(this._oShowMasterBtn, true);
        	this._bMasterOpening = true;
        }
	}else{
		if((this._portraitHide() || this._hideMode()) 
			&& (!this._bMasterisOpen || this._bMasterClosing)) {
			if(this._isMie9) {
				this._oMasterNav.$().css("width", "320px");
				_this$.animate({
					left: "+=320"
				}, {
					duration: 300
				});
				this._bMasterisOpen = true;
				that._bMasterOpening = false;
				this._removeMasterButton(_curPage, jQuery.proxy(this._setTitleVisibility, this));
			}
			_this$.bind((sap.ui.Device.os.ios || !this._isPlatformDependent) ? "webkitTransitionEnd transitionend" : "webkitAnimationEnd animationend", function(){
				jQuery(this).unbind("webkitTransitionEnd transitionend");
				jQuery(this).unbind("webkitAnimationEnd animationend");
				that._bMasterOpening = false;
				that._bMasterisOpen = true;
				that._removeMasterButton(_curPage, jQuery.proxy(that._setTitleVisibility, that));
				that.fireAfterMasterOpen();
			});
			this.fireBeforeMasterOpen();
			_this$.toggleClass("sapMSplitContainerMasterVisible", true);
			_this$.toggleClass("sapMSplitContainerMasterHidden", false);
			this._bMasterOpening = true;
			
			// workaround for bug in current webkit versions: in slided-in elements the z-order may be wrong and will be corrected once a re-layout is enforced 
			// see http://code.google.com/p/chromium/issues/detail?id=246965
			if (sap.ui.Device.browser.webkit) {
				var oMNav = this._oMasterNav;
				window.setTimeout(function(){
					oMNav.$().css("box-shadow", "none"); // remove box-shadow
					window.setTimeout(function(){
						oMNav.$().css("box-shadow", "");  // add it again
					},50);
				},0);
			}
		}
	}
	return this;
};

sap.m.SplitContainer.prototype.hideMaster = function() {
	var _this$ = this._oMasterNav.$(),
		that = this,
		_curPage = that._getRealPage(that._oDetailNav.getCurrentPage());
	if(this._portraitPopover()) {
        if(this._oPopOver.isOpen()){
        	function afterPopoverClose(){
        		this._oPopOver.detachAfterClose(afterPopoverClose, this);
        		this._bMasterClosing = false;
        		this._bMasterisOpen = false;
        		this.fireAfterMasterClose();
        	}
        	this._oPopOver.attachAfterClose(afterPopoverClose, this);
        	this.fireBeforeMasterClose();
        	this._oPopOver.close();
        	this._bMasterClosing = true;
        }
	}else{
		if((this._portraitHide() || this._hideMode()) 
			&& this._bMasterisOpen) {
			if(this._isMie9) {
				_this$.animate({
					left: "-=320"
				}, {
					duration: 300
				});
				this._bMasterisOpen = false;
				this._setMasterButton(_curPage, jQuery.proxy(this._setTitleVisibility, this));
			}
			_this$.bind((sap.ui.Device.os.ios || !this._isPlatformDependent) ? "webkitTransitionEnd transitionend" : "webkitAnimationEnd animationend", function(){
				jQuery(this).unbind("webkitTransitionEnd transitionend");
				jQuery(this).unbind("webkitAnimationEnd animationend");
				that._bMasterClosing = false;
				that._bMasterisOpen = false;
				that._setMasterButton(_curPage, jQuery.proxy(that._setTitleVisibility, that));
				that.fireAfterMasterClose();
			});
			this.fireBeforeMasterClose();
			_this$.toggleClass("sapMSplitContainerMasterVisible" , false);
			_this$.toggleClass("sapMSplitContainerMasterHidden" , true);
			this._bMasterClosing = true;
		}
	}
	return this;
};

sap.m.SplitContainer.prototype.getCurrentMasterPage = function() {
	return this._oMasterNav.getCurrentPage();
};



sap.m.SplitContainer.prototype.getCurrentDetailPage = function() {
	return this._oDetailNav.getCurrentPage();
};

sap.m.SplitContainer.prototype.getCurrentPage = function(bMaster){
	if(bMaster){
		return this.getCurrentMasterPage();
	}else{
		return this.getCurrentDetailPage();
	}
};


sap.m.SplitContainer.prototype.getPreviousPage = function(bMaster) {	
	if(bMaster){
		return this._oMasterNav.getPreviousPage();
	}else{
		return this._oDetailNav.getPreviousPage();
	}
};

sap.m.SplitContainer.prototype.getMasterPage = function(pageId){
	return this._oMasterNav.getPage(pageId);
};

sap.m.SplitContainer.prototype.getDetailPage = function(pageId){
	return this._oDetailNav.getPage(pageId);
};

sap.m.SplitContainer.prototype.getPage = function(pageId, bMaster){
	if(bMaster){
		return this.getMasterPage(pageId);
	}else{
		return this.getDetailPage(pageId);
	}
};

sap.m.SplitContainer.prototype.isMasterShown = function(){
	if(sap.ui.Device.system.phone){
		var oCurPage = this._oMasterNav.getCurrentPage();
		return this._indexOfMasterPage(oCurPage) !== -1;
	}else{
		var sMode = this.getMode();
		switch(sMode){
			case sap.m.SplitAppMode.StretchCompressMode:
				// master area is always shown in this mode
				return true;
			case sap.m.SplitAppMode.HideMode:
				return this._bMasterisOpen;
			case sap.m.SplitAppMode.PopoverMode:
			case sap.m.SplitAppMode.ShowHideMode:
				return sap.ui.Device.orientation.landscape || this._bMasterisOpen;
			default:
				return false;
		}
	}
};

//**************************************************************
//* END - Public methods
//**************************************************************

//**************************************************************
//* START - Setters/Getters of the SplitContainer control
//**************************************************************
sap.m.SplitContainer.prototype.setInitialMaster = function(sPage) {
	this._oMasterNav.setInitialPage(sPage);
	this.setAssociation('initialMaster', sPage, true);
	return this;
};

sap.m.SplitContainer.prototype.setInitialDetail = function(sPage) {
	if(!sap.ui.Device.system.phone) {
		this._oDetailNav.setInitialPage(sPage);
	}
	this.setAssociation('initialDetail', sPage, true);
	return this;
};

sap.m.SplitContainer.prototype.setDefaultTransitionNameDetail = function(sTransition) {
	this.setProperty("defaultTransitionNameDetail", sTransition, true);
	this._oDetailNav.setDefaultTransitionName(sTransition);
	return this;
};

sap.m.SplitContainer.prototype.setDefaultTransitionNameMaster = function(sTransition) {
	this.setProperty("defaultTransitionNameMaster", sTransition, true);
	this._oMasterNav.setDefaultTransitionName(sTransition);
	return this;
};

sap.m.SplitContainer.prototype.setMasterButtonText = function(sText) {
	if((sap.ui.Device.os.ios || !this._isPlatformDependent) && !sap.ui.Device.system.phone){
		if(!sText){
			sText = this._rb.getText("SplitContainer_NAVBUTTON_TEXT");
		}
		this._oShowMasterBtn.setText(sText);
	}
	this.setProperty("masterButtonText", sText, true);
	return this;
};

sap.m.SplitContainer.prototype.setMode = function(sMode) {
	var sOldMode = this.getMode();
	if(sOldMode === sMode){
		return;
	}
	this.setProperty("mode", sMode, true);
	this._bMasterisOpen = false;
	//the reposition of master and detail area only occurs in tablet and after it's rendered
	if(!sap.ui.Device.system.phone && this.getDomRef()){
		if(sOldMode === "HideMode" && this._oldIsLandscape){
			//remove the master button
			this._removeMasterButton(this._oDetailNav.getCurrentPage(), jQuery.proxy(this._setTitleVisibility, this));
			if(this._isMie9) {
				this._oMasterNav.$().css({
					left: 0,
					width: ""
				});
			}
		}
		
		if(sMode !== "PopoverMode" && this._oPopOver.getContent().length > 0) {
			this._updateMasterPosition("landscape");
		}else if(sMode == "PopoverMode"){
			if(!this._oldIsLandscape){
				if(this._oPopOver.getContent().length === 0){
					this._updateMasterPosition("popover");
				}
				this._setMasterButton(this._oDetailNav.getCurrentPage(), jQuery.proxy(this._setTitleVisibility, this));
			}
			this.$().toggleClass("sapMSplitContainerShowHide", false);
			this.$().toggleClass("sapMSplitContainerStretchCompress", false);
			this.$().toggleClass("sapMSplitContainerHideMode", false);
			this.$().toggleClass("sapMSplitContainerPopover", true);
		}
		
		if(sMode == "StretchCompressMode") {
			this.$().toggleClass("sapMSplitContainerShowHide", false);
			this.$().toggleClass("sapMSplitContainerPopover", false);
			this.$().toggleClass("sapMSplitContainerHideMode", false);
			this.$().toggleClass("sapMSplitContainerStretchCompress", true);
			this._removeMasterButton(this._oDetailNav.getCurrentPage(), jQuery.proxy(this._setTitleVisibility, this));
		}
		
		if(sMode == "ShowHideMode") {
			this.$().toggleClass("sapMSplitContainerPopover", false);
			this.$().toggleClass("sapMSplitContainerStretchCompress", false);
			this.$().toggleClass("sapMSplitContainerHideMode", false);
			this.$().toggleClass("sapMSplitContainerShowHide", true);
			if(!sap.ui.Device.orientation.landscape){
				this._setMasterButton(this._oDetailNav.getCurrentPage(), jQuery.proxy(this._setTitleVisibility, this));
			}
		}
		
		if(sMode === "HideMode"){
			this.$().toggleClass("sapMSplitContainerPopover", false);
			this.$().toggleClass("sapMSplitContainerStretchCompress", false);
			this.$().toggleClass("sapMSplitContainerShowHide", false);
			this.$().toggleClass("sapMSplitContainerHideMode", true);
			this._setMasterButton(this._oDetailNav.getCurrentPage(), jQuery.proxy(this._setTitleVisibility, this));
			if(this._isMie9) {
				this._oMasterNav.$().css({
					left: "",
					width: "auto"
				});
			}
		}
	}
	return this;
};

sap.m.SplitContainer.prototype.setBackgroundOpacity = function(fOpacity) {
	if (fOpacity > 1 || fOpacity < 0) {
		jQuery.sap.log.warning("Invalid value " + fOpacity + " for SplitContainer.setBackgroundOpacity() ignored. Valid values are: floats between 0 and 1.");
		return this;;
	}
	this.$("BG").css("opacity", fOpacity);
	return this.setProperty("backgroundOpacity", fOpacity, true); // no rerendering - live opacity change looks cooler
};


/**************************************************************
* START - Private methods
**************************************************************/

/**
 * @private
 */
sap.m.SplitContainer.prototype._indexOfMasterPage = function(oPage) {
	return jQuery.inArray(oPage, this._aMasterPages);
};

/**
 * @private
 */
sap.m.SplitContainer.prototype._indexOfDetailPage = function(oPage) {
	return jQuery.inArray(oPage, this._aDetailPages);
};


/**
 * @private
 */
sap.m.SplitContainer.prototype._insertPage = function(aPageArray, sAggregation, oPage, iIndex, bSuppressInvalidate) {
	this.insertAggregation(sAggregation, oPage, iIndex, bSuppressInvalidate);
	var i = iIndex < 0 ? 0 : (iIndex > aPageArray.length ? aPageArray.length : iIndex);
	var iOldIndex = jQuery.inArray(oPage, aPageArray);;
	aPageArray.splice(i, 0, oPage);
	if (iOldIndex != -1) {
		// this is the insert order ui5 is doing it: first add, then remove when it was added before (even so this would remove the just added control)
		this._removePageFromArray(aPageArray, oPage);
	}
	return this;
};


/**
 * @private
 */
sap.m.SplitContainer.prototype._removePage = function(aPageArray, sAggregation, oPage, bSuppressInvalidate) {
	var oRemovedPage = this.removeAggregation(sAggregation, oPage, bSuppressInvalidate);
	if (oRemovedPage) {
		this._removePageFromArray(aPageArray, oRemovedPage);
	}
	return oRemovedPage;
};


/**
 * @private
 */
sap.m.SplitContainer.prototype._removePageFromArray = function(aPageArray, oPage) {
	var iIndex = jQuery.inArray(oPage, aPageArray);
	if (iIndex != -1) {
		aPageArray.splice(iIndex, 1);
	}
};


sap.m.SplitContainer.prototype._handleNavigationEvent = function(oEvent, bAfter, bMaster){
	var sEventName = (bAfter ? "After" : "") + (bMaster ? "Master" : "Detail") + "Navigate";
	sEventName = sEventName.charAt(0).toLowerCase() + sEventName.slice(1);
	
	this.fireEvent(sEventName, oEvent.mParameters);
};

sap.m.SplitContainer.prototype._handleOrientationChange = function() {
	var isLandscape = sap.ui.Device.orientation.landscape,
		_currentPage = this._oDetailNav.getCurrentPage(),
		mode = this.getMode();

	if(this._oldIsLandscape !== isLandscape) {
		this._oldIsLandscape = isLandscape;	
		if (!sap.ui.Device.system.phone) {
			this.$().toggleClass("sapMSplitContainerPortrait", !isLandscape);
	
			//hidemode doesn't react to orientation change
			if(mode === "HideMode"){
				return;
			}
		
			if(mode === "ShowHideMode"){
				if(isLandscape) {
					this.fireBeforeMasterOpen();
				}else{
					this.fireBeforeMasterClose();
				}
			}
			
			if(this._isMie9) {
				if(isLandscape) {
					this._oMasterNav.$().css({
						left: 0,
						width: ""
					});
				}else {
					if(mode === "ShowHideMode" || mode === "PopoverMode"){
						this._oMasterNav.$().css({
							left: -320,
							width: "auto"
						});
					}
				}
			}
			
			if(mode === "ShowHideMode" || mode === "PopoverMode") {
				if(isLandscape) {
					this._oMasterNav.$().toggleClass("sapMSplitContainerMasterVisible", false);
					this._oMasterNav.$().toggleClass("sapMSplitContainerMasterHidden", false);
				}
			}
			
			if(mode === "ShowHideMode"){
				if(isLandscape) {
					this._bMasterisOpen = true;
					this.fireAfterMasterOpen();
				}else{
					this._bMasterisOpen = false;
					this.fireAfterMasterClose();
				}
			}
			
			if(this.getMode() == "PopoverMode") {
				if(this._oPopOver.oPopup.isOpen()){
				//Wait for the popover to be closed properly
					this._oPopOver.attachAfterClose(this._handlePopClose, this);
					this._oPopOver.close();
				} else {
					this._handlePopClose();
				}
			}
			
			_currentPage = this._getRealPage(_currentPage);
			if(!this._oldIsLandscape && mode != "StretchCompressMode") {
				this._setMasterButton(_currentPage, jQuery.proxy(this._setTitleVisibility, this));
			}else {
				this._removeMasterButton(_currentPage, jQuery.proxy(this._setTitleVisibility, this));
			}			
		}
	}
};

sap.m.SplitContainer.prototype._setTitleVisibility = function(oPage){
	var oRealPage = oPage || this._getRealPage(this._oDetailNav.getCurrentPage()),
		oCore = this.oCore,
		sPageId = oRealPage ? oRealPage.getId() : "";
	if(sPageId){
		var oTitle = oCore.byId(sPageId + "-title");
		if(!sap.ui.Device.os.ios && this._isPlatformDependent){
			if((this._portraitHide() || this._portraitPopover() || this._hideMode()) && (!this._bMasterisOpen || this._bMasterClosing)){
				oTitle && oTitle.removeStyleClass("sapMSplitContainerHiddenChild");
			}else{
				oTitle && oTitle.addStyleClass("sapMSplitContainerHiddenChild");
			}
		}
	};
};

sap.m.SplitContainer.prototype._handlePopClose = function(oEvent) {
	this._oPopOver.detachAfterClose(this._handlePopClose, this);
	if(this._oldIsLandscape) {
		this._updateMasterPosition("landscape");
	}else {
		this._updateMasterPosition("popover");
	}
};

sap.m.SplitContainer.prototype._getRealPage = function(oPage){
	var oReturn = oPage, aContent;
	
	while(oReturn){
		if(oReturn instanceof sap.m.Page){
			return oReturn;
		}
		if(oReturn instanceof sap.ui.core.mvc.View){
			aContent = oReturn.getContent();
			if(aContent.length === 1){
				oReturn = aContent[0];
				continue;
			}
		}
		oReturn = null;
	}
	return oReturn;
};

 //updates the dom position of the Master NavContainer (inside popover or left next to the Detail NavContainer)
sap.m.SplitContainer.prototype._updateMasterPosition = function(sPos) {
	var that = this;
	if(sPos == "popover") {
		//remove the NavContainer dom from the left side without rerendering the whole app
		this.removeAggregation("_navMaster", this._oMasterNav, true);
		this._oMasterNav.$().remove();
		this._oPopOver.addContent(this._oMasterNav);
		this._bMasterisOpen = false;
	}
	if(sPos == "landscape") {
		var fRearrangeNavMaster = function(){
			that._oPopOver.removeAggregation("content", that._oMasterNav, false);
			that.setAggregation("_navMaster", that._oMasterNav, true);
			//render only the master navContainer, to prevent the whole app from rerendering
			var $master = that.$();
			if ($master[0]) {
				var rm = sap.ui.getCore().createRenderManager();
				rm.renderControl(that._oMasterNav.addStyleClass("sapMSplitContainerMaster"));
				rm.flush($master[0], false, 1);
				rm.destroy();
			}
		};
		
		if(this._oPopOver.isOpen()){
			var fAfterCloseHandler = function(){
				this._oPopOver.detachAfterClose(fAfterCloseHandler, this);
				this._bMasterisOpen = false;
				fRearrangeNavMaster();
			};
			this._oPopOver.attachAfterClose(fAfterCloseHandler, this);
			this._oPopOver.close();
		}else{
			fRearrangeNavMaster();
		}
	}
};

//Portrait - Tablet - ShowHideMode
sap.m.SplitContainer.prototype._portraitHide = function() {
	if(!this._oldIsLandscape && !sap.ui.Device.system.phone && this.getMode() === "ShowHideMode") {
		return true;
	} else {
		return false;
	}
};

//Portrait - Tablet - PopoverMode
sap.m.SplitContainer.prototype._portraitPopover = function() {
	if(!this._oldIsLandscape && !sap.ui.Device.system.phone && this.getMode() === "PopoverMode") {
		return true;
	} else {
		return false;
	}
};

//hide mode - not phone
sap.m.SplitContainer.prototype._hideMode = function() {
	return this.getMode() === "HideMode" && !sap.ui.Device.system.phone;
};

sap.m.SplitContainer.prototype._createShowMasterButton = function() {
	if (this._oShowMasterBtn && !this._oShowMasterBtn.bIsDestroyed) {
		return;
	}

	this._oShowMasterBtn = new sap.m.Button(this.getId() + "-MasterBtn", {
		text: (sap.ui.Device.os.ios && this._isPlatformDependent) ? this._rb.getText("SPLITCONTAINER_NAVBUTTON_TEXT") : "",
		icon: !this._isPlatformDependent ? sap.ui.core.IconPool.getIconURI("menu2") : "",
		type: (sap.ui.Device.os.ios || !this._isPlatformDependent) ? sap.m.ButtonType.Default : sap.m.ButtonType.Up,
		press: jQuery.proxy(this._onMasterButtonTap, this)
	}).addStyleClass("sapMSplitContainerMasterBtn");
};

sap.m.SplitContainer.prototype._setMasterButton = function(oPage, fnCallBack) {
	if(!oPage){
		return;
	}
	
	oPage = this._getRealPage(oPage);
	var aHeaderContent = oPage._getAnyHeader().getContentLeft();
	for(var i=0; i < aHeaderContent.length; i++) {
		if(aHeaderContent[i] instanceof sap.m.Button && (aHeaderContent[i].getType() == sap.m.ButtonType.Back || (aHeaderContent[i].getType() == sap.m.ButtonType.Up && aHeaderContent[i] !== this._oShowMasterBtn))) {
			this._bDetailNavButton = true;
			return;
		}
	}
	this._bDetailNavButton = false;
	
	if(oPage /*&& !this._checkCustomHeader(oPage)*/) {
		var oPageHeader = oPage._getAnyHeader(),
			oContentLeft = oPageHeader.getContentLeft(),
			sIcon = oPage.getIcon();
		var bIsSet = false;
		if(oContentLeft){
			for(var i=0; i<oContentLeft.length; i++) {
				if(oContentLeft[i] === this._oShowMasterBtn) {
					bIsSet = true;
				}
			}
		}
		if(!bIsSet) {
			// showMasterBtn could have already be destroyed by destroying the customHeader of the previous page
			// When this is the case, showMasterBtn will be instantiated again
			this._createShowMasterButton();

			this._oShowMasterBtn.removeStyleClass("sapMSplitContainerMasterBtnHidden");

			if(!sap.ui.Device.os.ios && sIcon && this._isPlatformDependent){
				sap.ui.getCore().byId(oPage.getId() + "-icon").addStyleClass("sapMSplitContainerHiddenChild");
				this._oShowMasterBtn.setIcon(sIcon);
			}

			if(oPageHeader){
				//if the header is empty in android, the title index has to be 1 since the back button needs to be the first item in the header
				if(!sap.ui.Device.os.ios && this._isPlatformDependent && oContentLeft.length === 0) {
					oPage._titleIndex = 1;
				}
				oPageHeader.insertContentLeft(this._oShowMasterBtn, 0);
			}
		} else {
			if(this._isMie9) {
				this._oShowMasterBtn.$().fadeIn();
			}
			this._oShowMasterBtn.$().parent().toggleClass("sapMSplitContainerMasterBtnHide", false);	
			this._oShowMasterBtn.removeStyleClass("sapMSplitContainerMasterBtnHidden");	
			this._oShowMasterBtn.$().parent().toggleClass("sapMSplitContainerMasterBtnShow", true);		
		}
		
		if(fnCallBack){
			fnCallBack(oPage);
		}
		this.fireMasterButton({show: true});
	}
};

sap.m.SplitContainer.prototype._removeMasterButton = function(oPage, fnCallBack) {
	if(!oPage){
		return;
	}
	
	var oSplitContainer = this, oHeader;
	
	if(!this._oShowMasterBtn.$().is(":hidden")) {
		oPage = this._getRealPage(oPage);
		oHeader = oPage._getAnyHeader();
		if(oPage && oHeader /*&& !this._checkCustomHeader(oPage)*/) {
			var oContentLeft = oHeader.getContentLeft();
			for(var i=0; i<oContentLeft.length; i++) {
				if(oContentLeft[i] === this._oShowMasterBtn) {
					if(this._isMie9) {
						this._oShowMasterBtn.$().fadeOut();
						if(fnCallBack){
							fnCallBack(oPage);
						}
					}
					this._oShowMasterBtn.$().parent().toggleClass("sapMSplitContainerMasterBtnShow", false);
					this._oShowMasterBtn.$().parent().toggleClass("sapMSplitContainerMasterBtnHide", true);
					this._oShowMasterBtn.$().parent().bind("webkitAnimationEnd animationend", function(){
						jQuery(this).unbind("webkitAnimationEnd animationend");
						oSplitContainer._oShowMasterBtn.addStyleClass("sapMSplitContainerMasterBtnHidden");
						if(fnCallBack){
							fnCallBack(oPage);
						}
					});
					return;
				}
			}
		}
		this.fireMasterButton({show: false});
	}else{
		if(fnCallBack){
			fnCallBack(oPage);
		}
	}
};

sap.m.SplitContainer.prototype._callMethodInManagedObject = function(sFunctionName, sAggregationName){
	var args = Array.prototype.slice.call(arguments);
	if(sAggregationName === "masterPages"){
		if (sFunctionName === "indexOfAggregation") {
			return this._indexOfMasterPage.apply(this, args.slice(2));
		} else {
			return this._callNavContainerMethod(sFunctionName, this._oMasterNav, args);
		}
	}else if(sAggregationName === "detailPages"){
		if (sFunctionName === "indexOfAggregation") {
			return this._indexOfDetailPage.apply(this, args.slice(2));
		} else {
			return this._callNavContainerMethod(sFunctionName, this._oDetailNav, args);
		}
	}else{
		return sap.ui.base.ManagedObject.prototype[sFunctionName].apply(this, args.slice(1));
	}
};

sap.m.SplitContainer.prototype._callNavContainerMethod = function(sFunctionName, oNavContainer, aArgs) {
	aArgs[1] = "pages";
	aArgs = aArgs.slice(1);
	var sRealFunctionName = sap.m.SplitContainer._mFunctionMapping[sFunctionName];
	if (sRealFunctionName) {
		aArgs.shift();
		sFunctionName = sRealFunctionName;
	}
	return oNavContainer[sFunctionName].apply(oNavContainer, aArgs);
};

/**************************************************************
* END - Private methods
**************************************************************/

/**************************************************************
* START - forward aggregation related methods to NavContainer
**************************************************************/
sap.m.SplitContainer.prototype.validateAggregation = function(sAggregationName, oObject, bMultiple){
	return this._callMethodInManagedObject("validateAggregation", sAggregationName, oObject, bMultiple);
};

sap.m.SplitContainer.prototype.setAggregation = function(sAggregationName, oObject, bSuppressInvalidate){
	this._callMethodInManagedObject("setAggregation", sAggregationName, oObject, bSuppressInvalidate);
	return this;
};

sap.m.SplitContainer.prototype.getAggregation = function(sAggregationName, oDefaultForCreation){
	return this._callMethodInManagedObject("getAggregation", sAggregationName, oDefaultForCreation);
};

sap.m.SplitContainer.prototype.indexOfAggregation = function(sAggregationName, oObject){
	return this._callMethodInManagedObject("indexOfAggregation", sAggregationName, oObject);
};

sap.m.SplitContainer.prototype.insertAggregation = function(sAggregationName, oObject, iIndex, bSuppressInvalidate){
	this._callMethodInManagedObject("insertAggregation", sAggregationName, oObject, iIndex, bSuppressInvalidate);
	return this;
};

sap.m.SplitContainer.prototype.addAggregation = function(sAggregationName, oObject, bSuppressInvalidate){
	this._callMethodInManagedObject("addAggregation", sAggregationName, oObject, bSuppressInvalidate);
	return this;
};

sap.m.SplitContainer.prototype.removeAggregation = function(sAggregationName, oObject, bSuppressInvalidate){
	return this._callMethodInManagedObject("removeAggregation", sAggregationName, oObject, bSuppressInvalidate);
};

sap.m.SplitContainer.prototype.removeAllAggregation = function(sAggregationName, bSuppressInvalidate){
	return this._callMethodInManagedObject("removeAllAggregation", sAggregationName, bSuppressInvalidate);
};

sap.m.SplitContainer.prototype.destroyAggregation = function(sAggregationName, bSuppressInvalidate){
	this._callMethodInManagedObject("destroyAggregation", sAggregationName, bSuppressInvalidate);
	return this;
};
/**************************************************************
* END - forward aggregation related methods to NavContainer
**************************************************************/

/**************************************************************
* START - Static methods
**************************************************************/
/**
 * @private
 */
sap.m.SplitContainer._mFunctionMapping = {
	"getAggregation" : "getPage",
	"addAggregation" : "addPage",
	"insertAggregation" : "insertPage",
	"removeAggregation" : "removePage",
	"removeAllAggregation" : "removeAllPages"
};

/*
 * @private
 */
sap.m.SplitContainer.prototype._hasPageInArray= function (array, oPage) {
	var bFound = false;
	
	array.forEach(function(oArrayEntry) {
		if(oPage === oArrayEntry) {
			bFound = true;
		}
	})
	return bFound;
}

/**************************************************************
* END - Static methods
**************************************************************/
