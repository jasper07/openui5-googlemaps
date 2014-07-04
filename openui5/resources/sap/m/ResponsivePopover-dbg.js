/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ResponsivePopover.
jQuery.sap.declare("sap.m.ResponsivePopover");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ResponsivePopover.
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
 * <li>{@link #getPlacement placement} : sap.m.PlacementType (default: sap.m.PlacementType.Right)</li>
 * <li>{@link #getShowHeader showHeader} : boolean (default: true)</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getModal modal} : boolean</li>
 * <li>{@link #getOffsetX offsetX} : int</li>
 * <li>{@link #getOffsetY offsetY} : int</li>
 * <li>{@link #getContentWidth contentWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getContentHeight contentHeight} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHorizontalScrolling horizontalScrolling} : boolean</li>
 * <li>{@link #getVerticalScrolling verticalScrolling} : boolean</li>
 * <li>{@link #getShowCloseButton showCloseButton} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li>
 * <li>{@link #getCustomHeader customHeader} : sap.m.Bar</li>
 * <li>{@link #getSubHeader subHeader} : sap.m.Bar</li>
 * <li>{@link #getBeginButton beginButton} : sap.m.Button</li>
 * <li>{@link #getEndButton endButton} : sap.m.Button</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getInitialFocus initialFocus} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.ResponsivePopover#event:beforeOpen beforeOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ResponsivePopover#event:afterOpen afterOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ResponsivePopover#event:beforeClose beforeClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ResponsivePopover#event:afterClose afterClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control acts responsively to the type of device. It acts as a sap.m.Popover on desktop and tablet while acts as a sap.m.Dialog with stretch set to true on phone.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.15.1
 * @name sap.m.ResponsivePopover
 */
sap.ui.core.Control.extend("sap.m.ResponsivePopover", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"openBy", "close", "isOpen"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"placement" : {type : "sap.m.PlacementType", group : "Misc", defaultValue : sap.m.PlacementType.Right},
		"showHeader" : {type : "boolean", group : "Misc", defaultValue : true},
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"modal" : {type : "boolean", group : "Misc", defaultValue : null},
		"offsetX" : {type : "int", group : "Misc", defaultValue : null},
		"offsetY" : {type : "int", group : "Misc", defaultValue : null},
		"contentWidth" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"contentHeight" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"horizontalScrolling" : {type : "boolean", group : "Misc", defaultValue : null},
		"verticalScrolling" : {type : "boolean", group : "Misc", defaultValue : null},
		"showCloseButton" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    	"customHeader" : {type : "sap.m.Bar", multiple : false}, 
    	"subHeader" : {type : "sap.m.Bar", multiple : false}, 
    	"beginButton" : {type : "sap.m.Button", multiple : false}, 
    	"endButton" : {type : "sap.m.Button", multiple : false}, 
    	"_popup" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}
	},
	associations : {
		"initialFocus" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"beforeOpen" : {}, 
		"afterOpen" : {}, 
		"beforeClose" : {}, 
		"afterClose" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.ResponsivePopover with name <code>sClassName</code> 
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
 * @name sap.m.ResponsivePopover.extend
 * @function
 */

sap.m.ResponsivePopover.M_EVENTS = {'beforeOpen':'beforeOpen','afterOpen':'afterOpen','beforeClose':'beforeClose','afterClose':'afterClose'};


/**
 * Getter for property <code>placement</code>.
 * This property only takes effect when runs on desktop or tablet. Please see the documentation {@linkcode sap.m.Popover#placement here}.
 *
 * Default value is <code>Right</code>
 *
 * @return {sap.m.PlacementType} the value of property <code>placement</code>
 * @public
 * @name sap.m.ResponsivePopover#getPlacement
 * @function
 */

/**
 * Setter for property <code>placement</code>.
 *
 * Default value is <code>Right</code> 
 *
 * @param {sap.m.PlacementType} oPlacement  new value for property <code>placement</code>
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setPlacement
 * @function
 */


/**
 * Getter for property <code>showHeader</code>.
 * This property is supported by both variants. Please see the documentation on {@linkcode sap.m.Popover#showHeader sap.m.Popover} and {@linkcode sap.m.Dialog#showHeader sap.m.Dialog}
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * @name sap.m.ResponsivePopover#getShowHeader
 * @function
 */

/**
 * Setter for property <code>showHeader</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowHeader  new value for property <code>showHeader</code>
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setShowHeader
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * This property is supported by both variants. Please see the documentation on {@linkcode sap.m.Popover#title sap.m.Popover} and {@linkcode sap.m.Dialog#title sap.m.Dialog}
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.ResponsivePopover#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setTitle
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * This property only takes effect when runs on phone. Please see the documentation {@linkcode sap.m.Dialog#icon here}.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.m.ResponsivePopover#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setIcon
 * @function
 */


/**
 * Getter for property <code>modal</code>.
 * This property only takes effect when runs on desktop or tablet. Please see the documentation {@linkcode sap.m.Popover#modal here}.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>modal</code>
 * @public
 * @name sap.m.ResponsivePopover#getModal
 * @function
 */

/**
 * Setter for property <code>modal</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bModal  new value for property <code>modal</code>
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setModal
 * @function
 */


/**
 * Getter for property <code>offsetX</code>.
 * This property only takes effect when runs on desktop or tablet. Please see the documentation {@linkcode sap.m.Popover#offsetX here}.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>offsetX</code>
 * @public
 * @name sap.m.ResponsivePopover#getOffsetX
 * @function
 */

/**
 * Setter for property <code>offsetX</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iOffsetX  new value for property <code>offsetX</code>
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setOffsetX
 * @function
 */


/**
 * Getter for property <code>offsetY</code>.
 * This property only takes effect when runs on desktop or tablet. Please see the documentation {@linkcode sap.m.Popover#offsetY here}.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>offsetY</code>
 * @public
 * @name sap.m.ResponsivePopover#getOffsetY
 * @function
 */

/**
 * Setter for property <code>offsetY</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iOffsetY  new value for property <code>offsetY</code>
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setOffsetY
 * @function
 */


/**
 * Getter for property <code>contentWidth</code>.
 * This property is supported by both variants. Please see the documentation on {@linkcode sap.m.Popover#contentWidth sap.m.Popover} and {@linkcode sap.m.Dialog#contentWidth sap.m.Dialog}
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>contentWidth</code>
 * @public
 * @name sap.m.ResponsivePopover#getContentWidth
 * @function
 */

/**
 * Setter for property <code>contentWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sContentWidth  new value for property <code>contentWidth</code>
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setContentWidth
 * @function
 */


/**
 * Getter for property <code>contentHeight</code>.
 * This property is supported by both variants. Please see the documentation on {@linkcode sap.m.Popover#contentHeight sap.m.Popover} and {@linkcode sap.m.Dialog#contentHeight sap.m.Dialog}
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>contentHeight</code>
 * @public
 * @name sap.m.ResponsivePopover#getContentHeight
 * @function
 */

/**
 * Setter for property <code>contentHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sContentHeight  new value for property <code>contentHeight</code>
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setContentHeight
 * @function
 */


/**
 * Getter for property <code>horizontalScrolling</code>.
 * This property is supported by both variants. Please see the documentation on {@linkcode sap.m.Popover#horizontalScrolling sap.m.Popover} and {@linkcode sap.m.Dialog#horizontalScrolling sap.m.Dialog}
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>horizontalScrolling</code>
 * @public
 * @name sap.m.ResponsivePopover#getHorizontalScrolling
 * @function
 */

/**
 * Setter for property <code>horizontalScrolling</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bHorizontalScrolling  new value for property <code>horizontalScrolling</code>
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setHorizontalScrolling
 * @function
 */


/**
 * Getter for property <code>verticalScrolling</code>.
 * This property is supported by both variants. Please see the documentation on {@linkcode sap.m.Popover#verticalScrolling sap.m.Popover} and {@linkcode sap.m.Dialog#verticalScrolling sap.m.Dialog}
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>verticalScrolling</code>
 * @public
 * @name sap.m.ResponsivePopover#getVerticalScrolling
 * @function
 */

/**
 * Setter for property <code>verticalScrolling</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bVerticalScrolling  new value for property <code>verticalScrolling</code>
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setVerticalScrolling
 * @function
 */


/**
 * Getter for property <code>showCloseButton</code>.
 * Whether a close button should be inserted to the dialog's header dynamically to close the dialog. This property only takes effect when runs on the phone.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showCloseButton</code>
 * @public
 * @name sap.m.ResponsivePopover#getShowCloseButton
 * @function
 */

/**
 * Setter for property <code>showCloseButton</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowCloseButton  new value for property <code>showCloseButton</code>
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setShowCloseButton
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Content is supported by both variants. Please see the documentation on {@linkcode sap.m.Popover#content sap.m.Popover} and {@linkcode sap.m.Dialog#content sap.m.Dialog}
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.ResponsivePopover#getContent
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
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.m.ResponsivePopover#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.ResponsivePopover#removeAllContent
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
 * @name sap.m.ResponsivePopover#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>customHeader</code>.<br/>
 * CustomHeader is supported by both variants. Please see the documentation on {@linkcode sap.m.Popover#customHeader sap.m.Popover} and {@linkcode sap.m.Dialog#customHeader sap.m.Dialog}
 * 
 * @return {sap.m.Bar}
 * @public
 * @name sap.m.ResponsivePopover#getCustomHeader
 * @function
 */


/**
 * Setter for the aggregated <code>customHeader</code>.
 * @param {sap.m.Bar} oCustomHeader
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setCustomHeader
 * @function
 */
	

/**
 * Destroys the customHeader in the aggregation 
 * named <code>customHeader</code>.
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#destroyCustomHeader
 * @function
 */


/**
 * Getter for aggregation <code>subHeader</code>.<br/>
 * SubHeader is supported by both variants. Please see the documentation on {@linkcode sap.m.Popover#subHeader sap.m.Popover} and {@linkcode sap.m.Dialog#subHeader sap.m.Dialog}
 * 
 * @return {sap.m.Bar}
 * @public
 * @name sap.m.ResponsivePopover#getSubHeader
 * @function
 */


/**
 * Setter for the aggregated <code>subHeader</code>.
 * @param {sap.m.Bar} oSubHeader
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setSubHeader
 * @function
 */
	

/**
 * Destroys the subHeader in the aggregation 
 * named <code>subHeader</code>.
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#destroySubHeader
 * @function
 */


/**
 * Getter for aggregation <code>beginButton</code>.<br/>
 * BeginButton is supported by both variants. It is always show in the left part (right part in RTL mode) of the footer which is located at the bottom of the ResponsivePopover. If buttons need to be displayed in header, please use customHeader instead.
 * 
 * @return {sap.m.Button}
 * @public
 * @name sap.m.ResponsivePopover#getBeginButton
 * @function
 */


/**
 * Setter for the aggregated <code>beginButton</code>.
 * @param {sap.m.Button} oBeginButton
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setBeginButton
 * @function
 */
	

/**
 * Destroys the beginButton in the aggregation 
 * named <code>beginButton</code>.
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#destroyBeginButton
 * @function
 */


/**
 * Getter for aggregation <code>endButton</code>.<br/>
 * EndButton is supported by both variants. It is always show in the right part (left part in RTL mode) of the footer which is located at the bottom of the ResponsivePopover. If buttons need to be displayed in header, please use customHeader instead.
 * 
 * @return {sap.m.Button}
 * @public
 * @name sap.m.ResponsivePopover#getEndButton
 * @function
 */


/**
 * Setter for the aggregated <code>endButton</code>.
 * @param {sap.m.Button} oEndButton
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setEndButton
 * @function
 */
	

/**
 * Destroys the endButton in the aggregation 
 * named <code>endButton</code>.
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#destroyEndButton
 * @function
 */


/**
 * InitialFocus is supported by both variants. Please see the documentation on {@linkcode sap.m.Popover#initialFocus sap.m.Popover} and {@linkcode sap.m.Dialog#initialFocus sap.m.Dialog}
 *
 * @return {string} Id of the element which is the current target of the <code>initialFocus</code> association, or null
 * @public
 * @name sap.m.ResponsivePopover#getInitialFocus
 * @function
 */

/**
 * InitialFocus is supported by both variants. Please see the documentation on {@linkcode sap.m.Popover#initialFocus sap.m.Popover} and {@linkcode sap.m.Dialog#initialFocus sap.m.Dialog}
 *
 * @param {string | sap.ui.core.Control} vInitialFocus 
 *    Id of an element which becomes the new target of this <code>initialFocus</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#setInitialFocus
 * @function
 */


	
/**
 * Event is fired before popover or dialog is open. 
 *
 * @name sap.m.ResponsivePopover#beforeOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.openBy 
						This parameter contains the control which is passed as the parameter when calling openBy method. When runs on the phone, this parameter is undefined.
					
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'beforeOpen' event of this <code>sap.m.ResponsivePopover</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ResponsivePopover</code>.<br/> itself. 
 *  
 * Event is fired before popover or dialog is open. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.ResponsivePopover</code>.<br/> itself.
 *
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#attachBeforeOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeOpen' event of this <code>sap.m.ResponsivePopover</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#detachBeforeOpen
 * @function
 */

/**
 * Fire event beforeOpen to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'openBy' of type <code>sap.ui.core.Control</code> 
						This parameter contains the control which is passed as the parameter when calling openBy method. When runs on the phone, this parameter is undefined.
					</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ResponsivePopover#fireBeforeOpen
 * @function
 */


/**
 * Event is fired after popover or dialog is open. 
 *
 * @name sap.m.ResponsivePopover#afterOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.openBy 
						This parameter contains the control which is passed as the parameter when calling openBy method. When runs on the phone, this parameter is undefined.
					
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterOpen' event of this <code>sap.m.ResponsivePopover</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ResponsivePopover</code>.<br/> itself. 
 *  
 * Event is fired after popover or dialog is open. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.ResponsivePopover</code>.<br/> itself.
 *
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#attachAfterOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterOpen' event of this <code>sap.m.ResponsivePopover</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#detachAfterOpen
 * @function
 */

/**
 * Fire event afterOpen to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'openBy' of type <code>sap.ui.core.Control</code> 
						This parameter contains the control which is passed as the parameter when calling openBy method. When runs on the phone, this parameter is undefined.
					</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ResponsivePopover#fireAfterOpen
 * @function
 */


/**
 * Event is fired before popover or dialog is closed. 
 *
 * @name sap.m.ResponsivePopover#beforeClose
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.openBy 
						This parameter contains the control which is passed as the parameter when calling openBy method. When runs on the phone, this parameter is undefined.
					
 * @param {sap.m.Button} oControlEvent.getParameters.origin 
						This parameter contains the control which triggers the close of the ResponsivePopover. This parameter is undefined when runs on desktop or tablet.
					
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'beforeClose' event of this <code>sap.m.ResponsivePopover</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ResponsivePopover</code>.<br/> itself. 
 *  
 * Event is fired before popover or dialog is closed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.ResponsivePopover</code>.<br/> itself.
 *
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#attachBeforeClose
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeClose' event of this <code>sap.m.ResponsivePopover</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#detachBeforeClose
 * @function
 */

/**
 * Fire event beforeClose to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'openBy' of type <code>sap.ui.core.Control</code> 
						This parameter contains the control which is passed as the parameter when calling openBy method. When runs on the phone, this parameter is undefined.
					</li>
 * <li>'origin' of type <code>sap.m.Button</code> 
						This parameter contains the control which triggers the close of the ResponsivePopover. This parameter is undefined when runs on desktop or tablet.
					</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ResponsivePopover#fireBeforeClose
 * @function
 */


/**
 * Event is fired after popover or dialog is closed. 
 *
 * @name sap.m.ResponsivePopover#afterClose
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.openBy 
						This parameter contains the control which is passed as the parameter when calling openBy method. When runs on the phone, this parameter is undefined.
					
 * @param {sap.m.Button} oControlEvent.getParameters.origin 
						This parameter contains the control which triggers the close of the ResponsivePopover. This parameter is undefined when runs on desktop or tablet.
					
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterClose' event of this <code>sap.m.ResponsivePopover</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ResponsivePopover</code>.<br/> itself. 
 *  
 * Event is fired after popover or dialog is closed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.ResponsivePopover</code>.<br/> itself.
 *
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#attachAfterClose
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterClose' event of this <code>sap.m.ResponsivePopover</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ResponsivePopover#detachAfterClose
 * @function
 */

/**
 * Fire event afterClose to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'openBy' of type <code>sap.ui.core.Control</code> 
						This parameter contains the control which is passed as the parameter when calling openBy method. When runs on the phone, this parameter is undefined.
					</li>
 * <li>'origin' of type <code>sap.m.Button</code> 
						This parameter contains the control which triggers the close of the ResponsivePopover. This parameter is undefined when runs on desktop or tablet.
					</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ResponsivePopover} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ResponsivePopover#fireAfterClose
 * @function
 */


/**
 * Opens the ResponsivePopover. The ResponsivePopover is positioned relatively to the control parameter when runs on tablet or desktop and is full screen when runs on phone. Therefore the control parameter only has its usage when runs on tablet or desktop and is ignored when runs on phone.
 *
 * @name sap.m.ResponsivePopover.prototype.openBy
 * @function
 * @param {object} 
 *         oControl
 *         
 * When this control runs on tablet or desktop, the ResponsivePopover is positioned relatively to this control.
 * 

 * @type sap.ui.core.Control
 * @public
 */


/**
 * Closes the ResponsivePopover.
 *
 * @name sap.m.ResponsivePopover.prototype.close
 * @function

 * @type sap.ui.core.Control
 * @public
 */


/**
 * Checks whether the ResponsivePopover is currently open.
 *
 * @name sap.m.ResponsivePopover.prototype.isOpen
 * @function

 * @type sap.ui.core.Control
 * @public
 */


// Start of sap\m\ResponsivePopover.js
jQuery.sap.declare("sap.m.ResponsivePopover");
jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require("sap.m.Popover");
jQuery.sap.require("sap.m.Dialog");

sap.m.ResponsivePopover.prototype.init = function(){
	var that = this;
	
	this._bAppendedToUIArea = false;
	
	var settings = {
		beforeOpen: function(oEvent){
			that.fireBeforeOpen(oEvent);
		},
		afterOpen: function(oEvent){
			that.fireAfterOpen(oEvent);
		},
		beforeClose: function(oEvent){
			that.fireBeforeClose(oEvent);
		},
		afterClose: function(oEvent){
			that.fireAfterClose(oEvent);
		}
	};
	if(sap.ui.Device.system.phone){
		this._aNotSupportedProperties = ["placement", "modal", "offsetX", "offsetY", "showCloseButton"];
		settings.stretch = true;
		settings.type = sap.m.DialogType.Standard;
		this._oControl = new sap.m.Dialog(this.getId() + "-dialog", settings);
	}else{
		this._aNotSupportedProperties = ["icon", "showCloseButton"];
		this._oControl = new sap.m.Popover(this.getId()+ "-popover", settings);
	}

	this.setAggregation("_popup", this._oControl);

	this._oControl.addStyleClass("sapMResponsivePopover");
	
	this._oDelegate = {
		onBeforeRendering: function(){
			var bShowCloseButton = this.getShowCloseButton(),
				oNavContent, oHeader, oPage, oRealPage;
			
			if(!bShowCloseButton ||  !sap.ui.Device.system.phone || !this._bContentChanged){
				return;
			}
			
			this._bContentChanged = false;
			
			oHeader = this._oControl._getAnyHeader();
			if(oHeader){
				this._insertCloseButton(oHeader);
			}else{
				oNavContent = this._getSingleNavContent();
				if(!oNavContent){
					return;
				}
				//insert the close button to current page's header
				oPage = oNavContent.getCurrentPage();
				oRealPage = this._getRealPage(oPage);
				if(oRealPage && (oHeader = oRealPage._getAnyHeader())){
					this._insertCloseButton(oHeader);
				}
				
				//register to the navigation inside navcontainer to insert the closebutton to the page which is being navigated to
				oNavContent.attachEvent("navigate", this._fnOnNavigate , this);
			}
		}
	};
	
	this._oPageDelegate = {
		onAfterShow: function(){
			var oRealPage = that._getRealPage(this),
				oHeader;
			if(oRealPage && (oHeader = oRealPage._getAnyHeader())){
				that._insertCloseButton(oHeader);
			}
		}
	};
	
	this._fnOnNavigate = function(oEvent){
		var oPage = oEvent.getParameter("to");
		if(oPage){
			oPage.addEventDelegate(this._oPageDelegate, oPage);
		}
	};
	
	this._oControl.addEventDelegate(this._oDelegate, this);
	
	//overwrite the _removeChild to detach event listener and remove delegate when the navcontainer is removed from this responsive popover
	this._oControl._removeChild = function(oChild, sAggregationName, bSuppressInvalidate){
		var aPages, i;
		if((sAggregationName === "content") && (oChild instanceof sap.m.NavContainer)){
			aPages = oChild.getPages();
			for(i = 0 ; i < aPages.length ; i++){
				aPages[i].removeEventDelegate(that._oPageDelegate);
			}
			oChild.detachEvent("navigate", that._fnOnNavigate, that);
		}
		sap.ui.core.Control.prototype._removeChild.apply(this, arguments);
	};
};

sap.m.ResponsivePopover.prototype.openBy = function(oParent){
	if(!this._bAppendedToUIArea && !this.getParent()){
		var oStatic = sap.ui.getCore().getStaticAreaRef();
		oStatic = sap.ui.getCore().getUIArea(oStatic);
		oStatic.addContent(this, true);
		this._bAppendedToUIArea = true;
	}
	
	if(sap.ui.Device.system.phone){
		return this._oControl.open();
	}else{
		return this._oControl.openBy(oParent);
	}
};

sap.m.ResponsivePopover.prototype.exit = function(){
	if(this._oCloseButton){
		this._oCloseButton.destroy();
		this._oCloseButton = null;
	}
	
	if(this._oControl){
		this._oControl.removeEventDelegate(this._oDelegate);
		this._oControl.destroy();
		this._oControl = null;
	}
};

sap.m.ResponsivePopover.prototype._getCloseButton = function(){
	if(!this._oCloseButton){
		var that = this;
		this._oCloseButton = new sap.m.Button(this.getId() + "-closeButton", {
			icon: sap.ui.core.IconPool.getIconURI("decline"),
			press: function(){
				that._oControl._oCloseTrigger = this;
				that.close();
			}
		});
	}
	return this._oCloseButton;
};

sap.m.ResponsivePopover.prototype.addContent = function(oContent){
	this._bContentChanged = true;
	this.addAggregation("content", oContent);
};

sap.m.ResponsivePopover.prototype._getSingleNavContent = sap.m.Popover.prototype._getSingleNavContent;

sap.m.ResponsivePopover.prototype._getRealPage = function(oPage){
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

sap.m.ResponsivePopover.prototype._insertCloseButton = function(oHeader){
	var oCloseButton = this._getCloseButton(),
		iIndex;
	if(oHeader){
		iIndex = oHeader.getAggregation("contentRight", []).length;
		oHeader.insertAggregation("contentRight", oCloseButton, iIndex);
	}
};

sap.m.ResponsivePopover.prototype._firstLetterUpperCase = function(sValue){
	return sValue.charAt(0).toUpperCase() + sValue.slice(1);
};

sap.m.ResponsivePopover.prototype._lastIndexOfUpperCaseLetter = function(sValue){
	var i, sChar;
	for(i = sValue.length - 1 ; i >= 0; i--){
		sChar = sValue.charAt(i);
		if(sChar === sChar.toUpperCase()){
			return i;
		}
	}
	return -1;
};

sap.m.ResponsivePopover.prototype._oldSetProperty = sap.m.ResponsivePopover.prototype.setProperty;
sap.m.ResponsivePopover.prototype.setProperty = function(sPropertyName, oValue, bSuppressInvalidate){
	this._oldSetProperty(sPropertyName, oValue, true);
	if(jQuery.inArray(sPropertyName, this._aNotSupportedProperties) === -1){
		this._oControl["set" + this._firstLetterUpperCase(sPropertyName)](oValue);
	}
	return this;
};

sap.m.ResponsivePopover.prototype._oldSetModel = sap.m.ResponsivePopover.prototype.setModel;
sap.m.ResponsivePopover.prototype.setModel = function(oModel, sName){
	this._oControl.setModel(oModel, sName);
	return this._oldSetModel(oModel, sName);
};

sap.m.ResponsivePopover.prototype._createButtonFooter = function(){
	this._oFooter = this._oFooter || new sap.m.Bar(this.getId() + "-footer");
	return this._oFooter;
};

sap.m.ResponsivePopover.prototype._setButton = function(sPos, oButton){
	if(this._oControl instanceof sap.m.Popover){
		var sGetterName = "get" + this._firstLetterUpperCase(sPos) + "Button",
			oOldButton = this[sGetterName](),
			oFooter = this._createButtonFooter(),
			sPrivateName = "_o" + this._firstLetterUpperCase(sPos) + "Button",
			iIndex = (sPos.toLowerCase() === "begin" ? 0 : 1),
			sOtherGetterName = (sPos.toLowerCase() === "begin" ? "getEndButton" : "getBeginButton");
		
		if(oOldButton){
			oFooter.removeContentMiddle(oOldButton);
		}
		if(oButton){
			if(!oFooter.getParent()){
				this._oControl.setFooter(oFooter);
			}
			oFooter.insertAggregation("contentMiddle", oButton, iIndex)
		}else{
			var oOtherButton = this[sOtherGetterName]();
			if(!oOtherButton){
				oFooter.destroy();
				this._oFooter = null;
			}
		}
		
		this[sPrivateName] = oButton;
		return this;
	}else{
		var sAggregationName = sPos.toLowerCase() + "Button";
		return this.setAggregation(sAggregationName, oButton);
	}
};

sap.m.ResponsivePopover.prototype._getButton = function(sPos){
	if(this._oControl instanceof sap.m.Popover){
		var sPrivateName = "_o" + this._firstLetterUpperCase(sPos) + "Button";
		return this[sPrivateName];
	}else{
		var sGetterName = "get" + this._firstLetterUpperCase(sPos) + "Button";
		return this[sGetterName]();
	}
};

sap.m.ResponsivePopover.prototype.setBeginButton = function(oButton){
	return this._setButton("begin", oButton);
};

sap.m.ResponsivePopover.prototype.setEndButton = function(oButton){
	return this._setButton("end", oButton);
};

sap.m.ResponsivePopover.prototype.getBeginButton = function(){
	return this._getButton("begin");
};

sap.m.ResponsivePopover.prototype.getEndButton = function(){
	return this._getButton("end");
};

// forward all aggregation methods to the inner instance, either the popover or the dialog.
["bindAggregation", "validateAggregation", "setAggregation", "getAggregation", "indexOfAggregation", "insertAggregation", 
	"addAggregation", "removeAggregation", "removeAllAggregation", "destroyAggregation", "setAssociation", "getAssociation", 
	"addAssociation", "removeAssociation", "removeAllAssociation"].forEach(function(sName){
		sap.m.ResponsivePopover.prototype[sName] = function(){
			var iLastUpperCase = this._lastIndexOfUpperCaseLetter(sName),
				sMethodName, res;
			if(jQuery.type(arguments[0]) === "string"){
				if(iLastUpperCase !== -1){
					sMethodName = sName.substring(0, iLastUpperCase) + this._firstLetterUpperCase(arguments[0]);
					//_oControl can be already destroyed in exit method
					if(this._oControl && this._oControl[sMethodName]){
						res = this._oControl[sMethodName].apply(this._oControl, Array.prototype.slice.call(arguments, 1));
						return res === this._oControl ? this : res;
					}else{
						return sap.ui.core.Control.prototype[sName].apply(this, arguments);
					}
				}
			}
			res = this._oControl[sName].apply(this._oControl, arguments);
			return res === this._oControl ? this : res; 
		};
});

// forward the other necessary methods to the inner instance, but do not check the existence of generated methods like (addItem)
["invalidate", "close", "isOpen", "addStyleClass", "removeStyleClass", "toggleStyleClass", "hasStyleClass",
	"setBindingContext", "getBindingContext", "getBinding", "getBindingInfo", "getBindingPath"].forEach(function(sName){
		sap.m.ResponsivePopover.prototype[sName] = function(){
			var res = this._oControl[sName].apply(this._oControl ,arguments);
			return res === this._oControl ? this : res;
		};
});