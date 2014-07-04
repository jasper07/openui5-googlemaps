/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Page.
jQuery.sap.declare("sap.m.Page");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Page.
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
 * <li>{@link #getShowNavButton showNavButton} : boolean (default: false)</li>
 * <li>{@link #getShowHeader showHeader} : boolean (default: true)</li>
 * <li>{@link #getNavButtonText navButtonText} : string</li>
 * <li>{@link #getEnableScrolling enableScrolling} : boolean (default: true)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.m.PageBackgroundDesign (default: sap.m.PageBackgroundDesign.Standard)</li>
 * <li>{@link #getNavButtonType navButtonType} : sap.m.ButtonType (default: sap.m.ButtonType.Back)</li>
 * <li>{@link #getShowFooter showFooter} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li>
 * <li>{@link #getCustomHeader customHeader} : sap.m.Bar</li>
 * <li>{@link #getFooter footer} : sap.m.Bar</li>
 * <li>{@link #getSubHeader subHeader} : sap.m.Bar</li>
 * <li>{@link #getHeaderContent headerContent} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Page#event:navButtonTap navButtonTap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Page#event:navButtonPress navButtonPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A page is a basic container for a mobile application screen. Usually one page is displayed at a time (in landscape mode or on tablets depending on the layout two pages might be displayed side-by-side).
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.Page
 */
sap.ui.core.Control.extend("sap.m.Page", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"scrollTo"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"title" : {type : "string", group : "Data", defaultValue : null},
		"showNavButton" : {type : "boolean", group : "Appearance", defaultValue : false},
		"showHeader" : {type : "boolean", group : "Appearance", defaultValue : true},
		"navButtonText" : {type : "string", group : "Misc", defaultValue : null, deprecated: true},
		"enableScrolling" : {type : "boolean", group : "Behavior", defaultValue : true},
		"icon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null, deprecated: true},
		"backgroundDesign" : {type : "sap.m.PageBackgroundDesign", group : "Appearance", defaultValue : sap.m.PageBackgroundDesign.Standard},
		"navButtonType" : {type : "sap.m.ButtonType", group : "Appearance", defaultValue : sap.m.ButtonType.Back, deprecated: true},
		"showFooter" : {type : "boolean", group : "Appearance", defaultValue : true}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    	"customHeader" : {type : "sap.m.Bar", multiple : false}, 
    	"footer" : {type : "sap.m.Bar", multiple : false}, 
    	"subHeader" : {type : "sap.m.Bar", multiple : false}, 
    	"headerContent" : {type : "sap.ui.core.Control", multiple : true, singularName : "headerContent"}, 
    	"_internalHeader" : {type : "sap.m.Bar", multiple : false, visibility : "hidden"}
	},
	events : {
		"navButtonTap" : {deprecated: true}, 
		"navButtonPress" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Page with name <code>sClassName</code> 
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
 * @name sap.m.Page.extend
 * @function
 */

sap.m.Page.M_EVENTS = {'navButtonTap':'navButtonTap','navButtonPress':'navButtonPress'};


/**
 * Getter for property <code>title</code>.
 * The title text appearing in the page header bar.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.Page#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#setTitle
 * @function
 */


/**
 * Getter for property <code>showNavButton</code>.
 * A nav button will be rendered on the left area of header bar if this property is set to true.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showNavButton</code>
 * @public
 * @name sap.m.Page#getShowNavButton
 * @function
 */

/**
 * Setter for property <code>showNavButton</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowNavButton  new value for property <code>showNavButton</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#setShowNavButton
 * @function
 */


/**
 * Getter for property <code>showHeader</code>.
 * Whether this page shall have a header.
 * If set to true, either the control under the "customHeader" aggregation is used, or if there is no such control, a Header control is constructed from the properties "title", "showNavButton", "navButtonText" and "icon" depending on the platform.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * @name sap.m.Page#getShowHeader
 * @function
 */

/**
 * Setter for property <code>showHeader</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowHeader  new value for property <code>showHeader</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#setShowHeader
 * @function
 */


/**
 * Getter for property <code>navButtonText</code>.
 * The text of the nav button when running in iOS (if shown) in case it deviates from the default, which is "Back". This property is mvi-theme-dependent and will not have any effect in other themes.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>navButtonText</code>
 * @public
 * @deprecated Since version 1.20. 
 * Deprecated since the MVI theme is removed now. This property only affected the NavButton in that theme.
 * @name sap.m.Page#getNavButtonText
 * @function
 */

/**
 * Setter for property <code>navButtonText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNavButtonText  new value for property <code>navButtonText</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.20. 
 * Deprecated since the MVI theme is removed now. This property only affected the NavButton in that theme.
 * @name sap.m.Page#setNavButtonText
 * @function
 */


/**
 * Getter for property <code>enableScrolling</code>.
 * Whether the Page takes special measures to make page content scrollable and keep headers fixed.
 * If set to false, there will be no scrolling at all; for performance reasons this is highly recommended when scrolling is not needed.
 * 
 * The Page only allows vertical scrolling because horizontal scrolling is discouraged in general for full-page content. If it still needs to be achieved, disable the Page scrolling and use a ScrollContainer as full-page content of the Page. This allows you to freely configure scrolling. It can also be used to create horizontally-scrolling sub-areas of (vertically-scrolling) Pages.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableScrolling</code>
 * @public
 * @name sap.m.Page#getEnableScrolling
 * @function
 */

/**
 * Setter for property <code>enableScrolling</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableScrolling  new value for property <code>enableScrolling</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#setEnableScrolling
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * the icon that is rendered in the page header bar in non-iOS phone/tablet platforms. This property is theme-dependent and only has an effect in the MVI theme.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @deprecated Since version 1.20. 
 * Deprecated since the MVI theme is removed now. This property only affected the NavButton in that theme.
 * @name sap.m.Page#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.20. 
 * Deprecated since the MVI theme is removed now. This property only affected the NavButton in that theme.
 * @name sap.m.Page#setIcon
 * @function
 */


/**
 * Getter for property <code>backgroundDesign</code>.
 * This property is used to set the background color of a page. When a list is placed inside a page, the value "List" should be used to display a gray background. "Standard", with the value white, is used as default if not specified.
 *
 * Default value is <code>Standard</code>
 *
 * @return {sap.m.PageBackgroundDesign} the value of property <code>backgroundDesign</code>
 * @public
 * @name sap.m.Page#getBackgroundDesign
 * @function
 */

/**
 * Setter for property <code>backgroundDesign</code>.
 *
 * Default value is <code>Standard</code> 
 *
 * @param {sap.m.PageBackgroundDesign} oBackgroundDesign  new value for property <code>backgroundDesign</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#setBackgroundDesign
 * @function
 */


/**
 * Getter for property <code>navButtonType</code>.
 * This property is used to set the appearance of the NavButton. By default when showNavButton is set to true, a back button will be shown in iOS and an up button in other platforms. In case you want to show a normal button in the left header, you can set the value to "Default".
 *
 * Default value is <code>Back</code>
 *
 * @return {sap.m.ButtonType} the value of property <code>navButtonType</code>
 * @public
 * @since 1.12
 * @deprecated Since version 1.20. 
 * Deprecated since the MVI theme is removed now. This property is only useable with a Button text in that theme.
 * @name sap.m.Page#getNavButtonType
 * @function
 */

/**
 * Setter for property <code>navButtonType</code>.
 *
 * Default value is <code>Back</code> 
 *
 * @param {sap.m.ButtonType} oNavButtonType  new value for property <code>navButtonType</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @since 1.12
 * @deprecated Since version 1.20. 
 * Deprecated since the MVI theme is removed now. This property is only useable with a Button text in that theme.
 * @name sap.m.Page#setNavButtonType
 * @function
 */


/**
 * Getter for property <code>showFooter</code>.
 * Whether this page shall have a footer
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showFooter</code>
 * @public
 * @since 1.13.1
 * @name sap.m.Page#getShowFooter
 * @function
 */

/**
 * Setter for property <code>showFooter</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowFooter  new value for property <code>showFooter</code>
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.1
 * @name sap.m.Page#setShowFooter
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content of this page
 * 
 * <strong>Note</strong>: this is the default aggregation for Page.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.Page#getContent
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
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.m.Page#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Page#removeAllContent
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
 * @name sap.m.Page#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>customHeader</code>.<br/>
 * The (optional) custom header of this page.
 * Use this aggregation only when a custom header is constructed where the default header consisting of title text + nav button is not sufficient.
 * If this aggregation is set, the simple properties "title", "showNavButton", "NavButtonText" and "icon" are not used.
 * 
 * @return {sap.m.Bar}
 * @public
 * @name sap.m.Page#getCustomHeader
 * @function
 */


/**
 * Setter for the aggregated <code>customHeader</code>.
 * @param {sap.m.Bar} oCustomHeader
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#setCustomHeader
 * @function
 */
	

/**
 * Destroys the customHeader in the aggregation 
 * named <code>customHeader</code>.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#destroyCustomHeader
 * @function
 */


/**
 * Getter for aggregation <code>footer</code>.<br/>
 * The (optional) footer of this page. It is always located at the bottom of the page
 * 
 * @return {sap.m.Bar}
 * @public
 * @name sap.m.Page#getFooter
 * @function
 */


/**
 * Setter for the aggregated <code>footer</code>.
 * @param {sap.m.Bar} oFooter
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#setFooter
 * @function
 */
	

/**
 * Destroys the footer in the aggregation 
 * named <code>footer</code>.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#destroyFooter
 * @function
 */


/**
 * Getter for aggregation <code>subHeader</code>.<br/>
 * a subHeader will be rendered directly under the header
 * 
 * @return {sap.m.Bar}
 * @public
 * @name sap.m.Page#getSubHeader
 * @function
 */


/**
 * Setter for the aggregated <code>subHeader</code>.
 * @param {sap.m.Bar} oSubHeader
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#setSubHeader
 * @function
 */
	

/**
 * Destroys the subHeader in the aggregation 
 * named <code>subHeader</code>.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#destroySubHeader
 * @function
 */


/**
 * Getter for aggregation <code>headerContent</code>.<br/>
 * Controls to be added to the right side of the page header. Usually an application would use Button controls and limit the number to one when the application needs to run on smartphones. There is no automatic overflow handling when the space is insufficient.
 * When a customHeader is used, this aggregation will be ignored.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.Page#getHeaderContent
 * @function
 */


/**
 * Inserts a headerContent into the aggregation named <code>headerContent</code>.
 *
 * @param {sap.ui.core.Control}
 *          oHeaderContent the headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headerContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headerContent is inserted at 
 *             the last position        
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#insertHeaderContent
 * @function
 */

/**
 * Adds some headerContent <code>oHeaderContent</code> 
 * to the aggregation named <code>headerContent</code>.
 *
 * @param {sap.ui.core.Control}
 *            oHeaderContent the headerContent to add; if empty, nothing is inserted
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#addHeaderContent
 * @function
 */

/**
 * Removes an headerContent from the aggregation named <code>headerContent</code>.
 *
 * @param {int | string | sap.ui.core.Control} vHeaderContent the headerContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed headerContent or null
 * @public
 * @name sap.m.Page#removeHeaderContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>headerContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Page#removeAllHeaderContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>headerContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oHeaderContent the headerContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.Page#indexOfHeaderContent
 * @function
 */
	

/**
 * Destroys all the headerContent in the aggregation 
 * named <code>headerContent</code>.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Page#destroyHeaderContent
 * @function
 */


/**
 * this event is fired when Nav Button is tapped 
 *
 * @name sap.m.Page#navButtonTap
 * @event
 * @deprecated Since version 1.12.2. 
 * the navButtonPress event is replacing this event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'navButtonTap' event of this <code>sap.m.Page</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Page</code>.<br/> itself. 
 *  
 * this event is fired when Nav Button is tapped 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Page</code>.<br/> itself.
 *
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12.2. 
 * the navButtonPress event is replacing this event
 * @name sap.m.Page#attachNavButtonTap
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'navButtonTap' event of this <code>sap.m.Page</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12.2. 
 * the navButtonPress event is replacing this event
 * @name sap.m.Page#detachNavButtonTap
 * @function
 */

/**
 * Fire event navButtonTap to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @protected
 * @deprecated Since version 1.12.2. 
 * the navButtonPress event is replacing this event
 * @name sap.m.Page#fireNavButtonTap
 * @function
 */


/**
 * this event is fired when Nav Button is pressed 
 *
 * @name sap.m.Page#navButtonPress
 * @event
 * @since 1.12.2
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'navButtonPress' event of this <code>sap.m.Page</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Page</code>.<br/> itself. 
 *  
 * this event is fired when Nav Button is pressed 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Page</code>.<br/> itself.
 *
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.2
 * @name sap.m.Page#attachNavButtonPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'navButtonPress' event of this <code>sap.m.Page</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.2
 * @name sap.m.Page#detachNavButtonPress
 * @function
 */

/**
 * Fire event navButtonPress to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Page} <code>this</code> to allow method chaining
 * @protected
 * @since 1.12.2
 * @name sap.m.Page#fireNavButtonPress
 * @function
 */


/**
 * Scrolls to the given position. Only available if enableScrolling is set to "true".
 *
 * @name sap.m.Page.prototype.scrollTo
 * @function
 * @param {int} 
 *         iY
 *         The vertical pixel position to scroll to. Scrolling down happens with positive values.
 * @param {int} 
 *         iTime
 *         The duration of animated scrolling. To scroll immediately without animation, give 0 as value. 0 is also the default value, when this optional parameter is omitted.

 * @type sap.m.Page
 * @public
 */


// Start of sap\m\Page.js
sap.m.Page.prototype.init = function() {
	jQuery.sap.require("sap.ui.core.theming.Parameters");
	this._bIsPlatformDependent = sap.ui.core.theming.Parameters.get("sapMPlatformDependent") == "true";
	
	this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.m");
	if (this.getNavButtonText() == "" && this._bIsPlatformDependent){
		this.setNavButtonText(this._rb.getText("PAGE_NAVBUTTON_TEXT"));
	}
};

// Return true if scrolling is allowed
sap.m.Page.prototype._hasScrolling = function() {
	return this.getEnableScrolling();
};

sap.m.Page.prototype.onBeforeRendering = function() {
	if(this._oScroller && !this._hasScrolling()){
		this._oScroller.destroy();
		this._oScroller = null;
	}
	else if( this._hasScrolling() && !this._oScroller){
		jQuery.sap.require("sap.ui.core.delegate.ScrollEnablement");
		this._oScroller = new sap.ui.core.delegate.ScrollEnablement(this, this.getId() + "-scroll", {
			horizontal: false,
			vertical: true,
			zynga: false,
			iscroll: this._bUseIScroll,
			preventDefault: false,
			nonTouchScrolling: "scrollbar",
			scrollbarClass: "sapMScrollbar"
		});
	}
};

/**
 * Called when the control is destroyed.
 *
 * @private
 */
sap.m.Page.prototype.exit = function() {
	if(this._oScroller){
		this._oScroller.destroy();
		this._oScroller = null;
	}
	if (this._headerTitle){
		this._headerTitle.destroy();
		this._headerTitle = null;
	}
	if (this._navBtn){
		this._navBtn.destroy();
		this._navBtn = null;
	}
	if (this._appIcon){
		this._appIcon.destroy();
		this._appIcon = null;
	}
};

sap.m.Page.prototype.setBackgroundDesign = function(sBgDesign) {
	var sBgDesignOld = this.getBackgroundDesign();

	this.setProperty("backgroundDesign", sBgDesign, true);
	this.$().removeClass("sapMPageBg" + sBgDesignOld).addClass("sapMPageBg" + this.getBackgroundDesign());
	return this;
};

sap.m.Page.prototype.setTitle = function(sTitle) {
	var bWasNull = !this._headerTitle;
	
	this._headerTitle = this._headerTitle || new sap.m.Label(this.getId() +"-title", {text: sTitle});
	this._headerTitle.setText(sTitle);
	
	if(bWasNull){
		if (this._bIsPlatformDependent){
			if(sap.ui.Device.os.ios){
				this._updateHeaderContent(this._headerTitle, 'middle', 0);
			} else {
				this._titleIndex = this._titleIndex || 0;
				this._updateHeaderContent(this._headerTitle, 'left', this._titleIndex);
			}
		} else {
			this._updateHeaderContent(this._headerTitle, 'middle', 0);
		}
	}
	
	this.setProperty("title", sTitle, true);
	return this;
};

sap.m.Page.prototype.setShowNavButton = function (bShowNavBtn) {
	var bOldValue = !!this.getShowNavButton();
	if(bShowNavBtn === bOldValue){
		return this;
	}

	this.setProperty("showNavButton", bShowNavBtn, true);
	this._navBtn = this._navBtn || new sap.m.Button(this.getId() + "-navButton", {press: jQuery.proxy(function(){this.fireNavButtonPress(); this.fireNavButtonTap();},this)});
	var sNavButtonType = this.getNavButtonType();
	if(sap.ui.Device.os.android && sNavButtonType == sap.m.ButtonType.Back){
		this._navBtn.setType(sap.m.ButtonType.Up);
	} else {
		this._navBtn.setType(sNavButtonType);
		if (this._bIsPlatformDependent){
			this._navBtn.setText(this.getNavButtonText()); 
		}
	}

	if (bShowNavBtn){
		if (sap.ui.Device.os.android && this._bIsPlatformDependent){
			//On android show the title after the navButton
			this._titleIndex = 1;
			if(this.getIcon()) {
				this._navBtn.setIcon(this.getIcon());
			}
		}
		if (this._appIcon){
			this._updateHeaderContent(this._appIcon, 'left', -1);
		}

		this._updateHeaderContent(this._navBtn, 'left', 0);
	} else {
		// remove back button from header bar
		this._updateHeaderContent(this._navBtn, 'left', -1);
		if (this._bIsPlatformDependent && !sap.ui.Device.os.ios && this.getIcon()){
			this._appIcon = this._appIcon || new sap.m.Image(this.getId()+"-icon", {src: this.getIcon()});
			this._updateHeaderContent(this._appIcon, 'left', 0);
		}
	}
	return this;
};

sap.m.Page.prototype.setNavButtonType = function (sNavButtonType) {
	this._navBtn = this._navBtn || new sap.m.Button(this.getId() + "-navButton", {press: jQuery.proxy(function(){this.fireNavButtonPress(); this.fireNavButtonTap();},this)});
	if(!sap.ui.Device.os.ios && sNavButtonType == sap.m.ButtonType.Back){
		// internal conversion from Back to Up for non-iOS platform
		this._navBtn.setType(sap.m.ButtonType.Up);
	} else {
		this._navBtn.setType(sNavButtonType);
	}
	this.setProperty("navButtonType", sNavButtonType, true);
	return this;
};

sap.m.Page.prototype.setNavButtonText = function (sText) {
	this._navBtn = this._navBtn || new sap.m.Button(this.getId() + "-navButton", {press: jQuery.proxy(function(){this.fireNavButtonPress(); this.fireNavButtonTap();},this)});
	if (sText == "" && this._bIsPlatformDependent){
		sText = this._rb.getText("PAGE_NAVBUTTON_TEXT");
	}
	if(sap.ui.Device.os.ios && this._bIsPlatformDependent){
		this._navBtn.setText(sText);
	}
	this.setProperty("navButtonText", sText, true);
	return this;
};

sap.m.Page.prototype.setIcon = function (sIconSrc) {
	var sOldValue = this.getIcon();
	if(sOldValue === sIconSrc){
		return this;
	}
	
	if (!sap.ui.Device.os.ios && this._bIsPlatformDependent){
		if(sIconSrc){
			if (this.getShowNavButton()){
				this._navBtn = this._navBtn || new sap.m.Button(this.getId() + "-navButton", {press: jQuery.proxy(function(){this.fireNavButtonPress(); this.fireNavButtonTap();},this)});
				this._navBtn.setIcon(sIconSrc);	
				if (this._appIcon){
					this._updateHeaderContent(this._appIcon, 'left', -1);
				}
			} else {
				this._appIcon = this._appIcon || new sap.m.Image(this.getId()+"-icon", {src: sIconSrc}).addStyleClass("sapMPageAppIcon");
				this._appIcon.setSrc(sIconSrc);
				if (this._navBtn){
					this._updateHeaderContent(this._navBtn, 'left', -1);
				}
				this._updateHeaderContent(this._appIcon, 'left', 0);
			}
			this._titleIndex = 1;
		}else{
			//I can't remove the icon from button, so we need to do it later...
			if(this._appIcon){
				this._updateHeaderContent(this._appIcon, 'left', -1);
				this._titleIndex = 0;
				this._appIcon.destroy();
				this._appIcon = null;
			}
		}
	}
	this.setProperty("icon", sIconSrc, true);
	return this;
};

/**
 * Update content of internal header
 * @param oContent: control to be added
 * @param sContentPosition: position where the control should be located, possible values left/middle/right
 * @param iContentIndex: the order of the control to be placed. If set to -1, the control will be removed from the header
 * @private 
 */
sap.m.Page.prototype._updateHeaderContent = function (oContent, sContentPosition, iContentIndex){
	var oInternalHeader = this._getInternalHeader();

	if (oInternalHeader){
		switch (sContentPosition){
		case 'left':
			if (iContentIndex == -1){
				if(oInternalHeader.getContentLeft()){
					oInternalHeader.removeContentLeft(oContent);
				}
			} else {
				if (oInternalHeader.indexOfContentLeft(oContent)!= iContentIndex){
					oInternalHeader.insertContentLeft(oContent, iContentIndex);
					oInternalHeader.invalidate(); // workaround for bOutput problem
				}
			}
			break;
		case 'middle':
			if (iContentIndex == -1){
				if(oInternalHeader.getContentMiddle()){
					oInternalHeader.removeContentMiddle(oContent);
				}
			} else {
				if (oInternalHeader.indexOfContentMiddle(oContent)!= iContentIndex){
					oInternalHeader.insertContentMiddle(oContent, iContentIndex);
					oInternalHeader.invalidate();
				}
			}
			break;
		case 'right':
			if (iContentIndex == -1){
				if(oInternalHeader.getContentRight()){
					oInternalHeader.removeContentRight(oContent);
				}
			} else {
				if (oInternalHeader.indexOfContentRight(oContent)!= iContentIndex){
					oInternalHeader.insertContentRight(oContent, iContentIndex);
					oInternalHeader.invalidate();
				}
			}
			break;
		default:
			break;
		}
	}
};

/**
 * Create internal header
 * @private
 */

sap.m.Page.prototype._getInternalHeader= function() {
	var oInternalHeader = this.getAggregation("_internalHeader");
	if (!oInternalHeader){
		this.setAggregation('_internalHeader', new sap.m.Bar(this.getId() + "-intHeader"));
		oInternalHeader = this.getAggregation("_internalHeader");
		oInternalHeader._context = 'header';
		if(sap.ui.Device.os.ios){
			if (this.getShowNavButton() && this._navBtn){
				this._updateHeaderContent(this._navBtn, 'left', 0);
			}
			if (this.getTitle() && this._headerTitle){
				this._updateHeaderContent(this._headerTitle, 'middle', 0);
			}
		} else {
			if (this.getShowNavButton() && this._navBtn){
				this._updateHeaderContent(this._navBtn, 'left', 0);
				this._titleIndex = 1;
			} else {
				if(this._bIsPlatformDependent && this.getIcon() && this._appIcon){
					this._updateHeaderContent(this._appIcon, 'left', 0);
					this._titleIndex = 1;
				}
			}
			if (this.getTitle() && this._headerTitle){
				if (this._bIsPlatformDependent){
					this._titleIndex = this._titleIndex || 0;
					this._updateHeaderContent(this._headerTitle, 'left', this._titleIndex);
				} else {
					this._updateHeaderContent(this._headerTitle, 'middle', 0);
				}
			}
		}
	}
	return oInternalHeader;
};

/**
 * Returns the custom or internal header
 * @private
 */
sap.m.Page.prototype._getAnyHeader = function() {
	var oCustomHeader = this.getCustomHeader();
	if (oCustomHeader) {
		oCustomHeader._context = 'header';
		// return aggregated header, if it exists
		return oCustomHeader.addStyleClass("sapMPageHeader sapMHeader-CTX");
	} else {
		return this._getInternalHeader().addStyleClass("sapMPageHeader sapMHeader-CTX");
	}
};

/**
 * Returns the sap.ui.core.ScrollEnablement delegate which is used with this control.
 *
 * @private
 */
sap.m.Page.prototype.getScrollDelegate = function() {
	return this._oScroller;
};

//*** API Methods ***

sap.m.Page.prototype.scrollTo = function(y, time) {
	if (this._oScroller){
		this._oScroller.scrollTo(0, y, time);
	}
	return this;
};


//*** Methods forwarding the "headerContent" pseudo-aggregation calls ***

sap.m.Page.prototype.getHeaderContent = function() {
	return this._getInternalHeader().getContentRight();
};

sap.m.Page.prototype.indexOfHeaderContent = function(oControl) {
	return this._getInternalHeader().indexOfContentRight(oControl);
};

sap.m.Page.prototype.insertHeaderContent = function(oControl, iIndex) {
	return this._getInternalHeader().insertContentRight(oControl, iIndex);
};

sap.m.Page.prototype.addHeaderContent = function(oControl) {
	return this._getInternalHeader().addContentRight(oControl);
};

sap.m.Page.prototype.removeHeaderContent = function(oControl) {
	return this._getInternalHeader().removeContentRight(oControl);
};

sap.m.Page.prototype.removeAllHeaderContent = function() {
	return this._getInternalHeader().removeAllContentRight();
};

sap.m.Page.prototype.destroyHeaderContent = function() {
	return this._getInternalHeader().destroyContentRight();
};