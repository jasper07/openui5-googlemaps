/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Dialog.
jQuery.sap.declare("sap.m.Dialog");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Dialog.
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
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getShowHeader showHeader} : boolean (default: true)</li>
 * <li>{@link #getType type} : sap.m.DialogType (default: sap.m.DialogType.Standard)</li>
 * <li>{@link #getState state} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getStretchOnPhone stretchOnPhone} : boolean (default: false)</li>
 * <li>{@link #getStretch stretch} : boolean (default: false)</li>
 * <li>{@link #getContentWidth contentWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getContentHeight contentHeight} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHorizontalScrolling horizontalScrolling} : boolean (default: true)</li>
 * <li>{@link #getVerticalScrolling verticalScrolling} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li>
 * <li>{@link #getSubHeader subHeader} : sap.m.Bar</li>
 * <li>{@link #getCustomHeader customHeader} : sap.m.Bar</li>
 * <li>{@link #getBeginButton beginButton} : sap.m.Button</li>
 * <li>{@link #getEndButton endButton} : sap.m.Button</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getLeftButton leftButton} : string | sap.m.Button</li>
 * <li>{@link #getRightButton rightButton} : string | sap.m.Button</li>
 * <li>{@link #getInitialFocus initialFocus} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Dialog#event:beforeOpen beforeOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Dialog#event:afterOpen afterOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Dialog#event:beforeClose beforeClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Dialog#event:afterClose afterClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The Dialog control is used to interrupt the current processing of an application to prompt the user for information or a response.
 * @extends sap.ui.core.Control
 * @implements sap.ui.core.PopupInterface
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.Dialog
 */
sap.ui.core.Control.extend("sap.m.Dialog", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.ui.core.PopupInterface"
	],
	publicMethods : [
		// methods
		"open", "close", "isOpen"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"icon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"title" : {type : "string", group : "Appearance", defaultValue : null},
		"showHeader" : {type : "boolean", group : "Appearance", defaultValue : true},
		"type" : {type : "sap.m.DialogType", group : "Appearance", defaultValue : sap.m.DialogType.Standard},
		"state" : {type : "sap.ui.core.ValueState", group : "Appearance", defaultValue : sap.ui.core.ValueState.None},
		"stretchOnPhone" : {type : "boolean", group : "Appearance", defaultValue : false, deprecated: true},
		"stretch" : {type : "boolean", group : "Appearance", defaultValue : false},
		"contentWidth" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"contentHeight" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"horizontalScrolling" : {type : "boolean", group : "Behavior", defaultValue : true},
		"verticalScrolling" : {type : "boolean", group : "Behavior", defaultValue : true}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    	"subHeader" : {type : "sap.m.Bar", multiple : false}, 
    	"customHeader" : {type : "sap.m.Bar", multiple : false}, 
    	"beginButton" : {type : "sap.m.Button", multiple : false}, 
    	"endButton" : {type : "sap.m.Button", multiple : false}, 
    	"_header" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
    	"_title" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
    	"_icon" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}
	},
	associations : {
		"leftButton" : {type : "sap.m.Button", multiple : false, deprecated: true}, 
		"rightButton" : {type : "sap.m.Button", multiple : false, deprecated: true}, 
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
 * Creates a new subclass of class sap.m.Dialog with name <code>sClassName</code> 
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
 * @name sap.m.Dialog.extend
 * @function
 */

sap.m.Dialog.M_EVENTS = {'beforeOpen':'beforeOpen','afterOpen':'afterOpen','beforeClose':'beforeClose','afterClose':'afterClose'};


/**
 * Getter for property <code>icon</code>.
 * Icon that is displayed in the dialog header. This icon is invisible in iOS platform and it's density aware that you can use the density convention (@2, @1.5, etc.) to provide higher resolution image for higher density screen.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.m.Dialog#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#setIcon
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Title text appears in the dialog header.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.Dialog#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#setTitle
 * @function
 */


/**
 * Getter for property <code>showHeader</code>.
 * This property decides whether the header is shown inside the dialog. If this property is set to true, the text and icon property are ignored. This property has a default value true.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * @since 1.15.1
 * @name sap.m.Dialog#getShowHeader
 * @function
 */

/**
 * Setter for property <code>showHeader</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowHeader  new value for property <code>showHeader</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.1
 * @name sap.m.Dialog#setShowHeader
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * The type of the dialog. In theme sap_bluecrystal, the type message will limit the dialog's width within 480px when runs on tablet and desktop.
 *
 * Default value is <code>Standard</code>
 *
 * @return {sap.m.DialogType} the value of property <code>type</code>
 * @public
 * @name sap.m.Dialog#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>Standard</code> 
 *
 * @param {sap.m.DialogType} oType  new value for property <code>type</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#setType
 * @function
 */


/**
 * Getter for property <code>state</code>.
 * State affects the icon and the title color. If other than None is set, a predefined icon will be added to the dialog. Setting icon property will overwrite the predefined icon. The default value is None which doesn't add any icon to the Dialog control. This property is by now only supported by blue crystal theme.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>state</code>
 * @public
 * @since 1.11.2
 * @name sap.m.Dialog#getState
 * @function
 */

/**
 * Setter for property <code>state</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oState  new value for property <code>state</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * @name sap.m.Dialog#setState
 * @function
 */


/**
 * Getter for property <code>stretchOnPhone</code>.
 * When it's set to true, the dialog will be full screen when it runs on a phone.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>stretchOnPhone</code>
 * @public
 * @since 1.11.2
 * @deprecated Since version 1.13.1. 
 * Please use the new stretch property instead. This enables a stretched dialog even on tablet and desktop. If you want to achieve the same effect as stretchOnPhone, please set the stretch with jQuery.device.is.phone, then dialog is only stretched when runs on phone.
 * @name sap.m.Dialog#getStretchOnPhone
 * @function
 */

/**
 * Setter for property <code>stretchOnPhone</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bStretchOnPhone  new value for property <code>stretchOnPhone</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * @deprecated Since version 1.13.1. 
 * Please use the new stretch property instead. This enables a stretched dialog even on tablet and desktop. If you want to achieve the same effect as stretchOnPhone, please set the stretch with jQuery.device.is.phone, then dialog is only stretched when runs on phone.
 * @name sap.m.Dialog#setStretchOnPhone
 * @function
 */


/**
 * Getter for property <code>stretch</code>.
 * When this property is set to true, the dialog is stretched to a full screen display. This property is only applicable to standard dialog and message type dialog ignores this property.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>stretch</code>
 * @public
 * @since 1.13.1
 * @name sap.m.Dialog#getStretch
 * @function
 */

/**
 * Setter for property <code>stretch</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bStretch  new value for property <code>stretch</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.1
 * @name sap.m.Dialog#setStretch
 * @function
 */


/**
 * Getter for property <code>contentWidth</code>.
 * Preferred width of content in Dialog. This property affects the width of dialog on phone in landscape mode, tablet or desktop, because the dialog has a fixed width when runs on phone in portrait mode. If the preferred width is less than the minimum width of dilaog or more than the available width of the screen, it will be overwritten by the min or max value. The current mininum value of dialog width on tablet is 400px.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>contentWidth</code>
 * @public
 * @since 1.12.1
 * @name sap.m.Dialog#getContentWidth
 * @function
 */

/**
 * Setter for property <code>contentWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sContentWidth  new value for property <code>contentWidth</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.1
 * @name sap.m.Dialog#setContentWidth
 * @function
 */


/**
 * Getter for property <code>contentHeight</code>.
 * Preferred height of content in Dialog. If the preferred height is bigger than the available space on screen, it will be overwritten by the maximum available height on screen in order to make sure that dialog isn't cut off.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>contentHeight</code>
 * @public
 * @since 1.12.1
 * @name sap.m.Dialog#getContentHeight
 * @function
 */

/**
 * Setter for property <code>contentHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sContentHeight  new value for property <code>contentHeight</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.1
 * @name sap.m.Dialog#setContentHeight
 * @function
 */


/**
 * Getter for property <code>horizontalScrolling</code>.
 * This property indicates if user can scroll horizontally inside dialog when the content is bigger than the content area. However, when scrollable control (sap.m.ScrollContainer, sap.m.Page) is in the dialog, this property needs to be set to false to disable the scrolling in dialog in order to make the scrolling in the child control work properly.
 * Dialog detects if there's sap.m.NavContainer, sap.m.Page, or sap.m.ScrollContainer as direct child added to dialog. If there is, dialog will turn off scrolling by setting this property to false automatically ignoring the existing value of this property.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>horizontalScrolling</code>
 * @public
 * @since 1.15.1
 * @name sap.m.Dialog#getHorizontalScrolling
 * @function
 */

/**
 * Setter for property <code>horizontalScrolling</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bHorizontalScrolling  new value for property <code>horizontalScrolling</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.1
 * @name sap.m.Dialog#setHorizontalScrolling
 * @function
 */


/**
 * Getter for property <code>verticalScrolling</code>.
 * This property indicates if user can scroll vertically inside dialog when the content is bigger than the content area. However, when scrollable control (sap.m.ScrollContainer, sap.m.Page) is in the dialog, this property needs to be set to false to disable the scrolling in dialog in order to make the scrolling in the child control work properly.
 * Dialog detects if there's sap.m.NavContainer, sap.m.Page, or sap.m.ScrollContainer as direct child added to dialog. If there is, dialog will turn off scrolling by setting this property to false automatically ignoring the existing value of this property.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>verticalScrolling</code>
 * @public
 * @since 1.15.1
 * @name sap.m.Dialog#getVerticalScrolling
 * @function
 */

/**
 * Setter for property <code>verticalScrolling</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVerticalScrolling  new value for property <code>verticalScrolling</code>
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.1
 * @name sap.m.Dialog#setVerticalScrolling
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content inside the dialog.
 * 
 * <strong>Note</strong>: this is the default aggregation for Dialog.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.Dialog#getContent
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
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.m.Dialog#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Dialog#removeAllContent
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
 * @name sap.m.Dialog#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>subHeader</code>.<br/>
 * When subHeader is assigned to Dialog, it's rendered directly after the main header in Dialog. SubHeader is out of the content area and won't be scrolled when content's size is bigger than the content area's size.
 * 
 * @return {sap.m.Bar}
 * @public
 * @since 1.12.2
 * @name sap.m.Dialog#getSubHeader
 * @function
 */


/**
 * Setter for the aggregated <code>subHeader</code>.
 * @param {sap.m.Bar} oSubHeader
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.2
 * @name sap.m.Dialog#setSubHeader
 * @function
 */
	

/**
 * Destroys the subHeader in the aggregation 
 * named <code>subHeader</code>.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.2
 * @name sap.m.Dialog#destroySubHeader
 * @function
 */


/**
 * Getter for aggregation <code>customHeader</code>.<br/>
 * CustomHeader is only supported in theme sap_bluecrystal. When it's set, the icon, title and showHeader are properties ignored. Only the customHeader is shown as the header of the dialog.
 * 
 * @return {sap.m.Bar}
 * @public
 * @since 1.15.1
 * @name sap.m.Dialog#getCustomHeader
 * @function
 */


/**
 * Setter for the aggregated <code>customHeader</code>.
 * @param {sap.m.Bar} oCustomHeader
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.1
 * @name sap.m.Dialog#setCustomHeader
 * @function
 */
	

/**
 * Destroys the customHeader in the aggregation 
 * named <code>customHeader</code>.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.1
 * @name sap.m.Dialog#destroyCustomHeader
 * @function
 */


/**
 * Getter for aggregation <code>beginButton</code>.<br/>
 * The button which is rendered on the left side (right side in RTL mode) inside the dialog.
 * 
 * @return {sap.m.Button}
 * @public
 * @since 1.15.1
 * @name sap.m.Dialog#getBeginButton
 * @function
 */


/**
 * Setter for the aggregated <code>beginButton</code>.
 * @param {sap.m.Button} oBeginButton
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.1
 * @name sap.m.Dialog#setBeginButton
 * @function
 */
	

/**
 * Destroys the beginButton in the aggregation 
 * named <code>beginButton</code>.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.1
 * @name sap.m.Dialog#destroyBeginButton
 * @function
 */


/**
 * Getter for aggregation <code>endButton</code>.<br/>
 * The button which is rendered on the right side (left side in RTL mode) inside the dialog.
 * 
 * @return {sap.m.Button}
 * @public
 * @since 1.15.1
 * @name sap.m.Dialog#getEndButton
 * @function
 */


/**
 * Setter for the aggregated <code>endButton</code>.
 * @param {sap.m.Button} oEndButton
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.1
 * @name sap.m.Dialog#setEndButton
 * @function
 */
	

/**
 * Destroys the endButton in the aggregation 
 * named <code>endButton</code>.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.1
 * @name sap.m.Dialog#destroyEndButton
 * @function
 */


/**
 * LeftButton is shown at the left edge of the bar in iOS, and at the right side of the bar for the other platforms. Please set this to null if you want to remove the left button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored. Setting leftButton will also set the beginButton internally.
 *
 * @return {string} Id of the element which is the current target of the <code>leftButton</code> association, or null
 * @public
 * @deprecated Since version 1.15.1. 
 * 
 * LeftButton has benn deprecated since 1.15.1. Please use the beginButton instead which is more RTL friendly.
 * 
 * @name sap.m.Dialog#getLeftButton
 * @function
 */

/**
 * LeftButton is shown at the left edge of the bar in iOS, and at the right side of the bar for the other platforms. Please set this to null if you want to remove the left button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored. Setting leftButton will also set the beginButton internally.
 *
 * @param {string | sap.m.Button} vLeftButton 
 *    Id of an element which becomes the new target of this <code>leftButton</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.15.1. 
 * 
 * LeftButton has benn deprecated since 1.15.1. Please use the beginButton instead which is more RTL friendly.
 * 
 * @name sap.m.Dialog#setLeftButton
 * @function
 */


	
/**
 * RightButton is always shown at the right edge of the bar. Please set this to null if you want to remove the right button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored. Setting rightButton will also set the endButton internally.
 *
 * @return {string} Id of the element which is the current target of the <code>rightButton</code> association, or null
 * @public
 * @deprecated Since version 1.15.1. 
 * 
 * RightButton has been deprecated since 1.15.1. Please use the endButton instead which is more RTL friendly.
 * @name sap.m.Dialog#getRightButton
 * @function
 */

/**
 * RightButton is always shown at the right edge of the bar. Please set this to null if you want to remove the right button from the bar. And the button is only removed from the bar, not destroyed. When showHeader is set to false, this property will be ignored. Setting rightButton will also set the endButton internally.
 *
 * @param {string | sap.m.Button} vRightButton 
 *    Id of an element which becomes the new target of this <code>rightButton</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.15.1. 
 * 
 * RightButton has been deprecated since 1.15.1. Please use the endButton instead which is more RTL friendly.
 * @name sap.m.Dialog#setRightButton
 * @function
 */


	
/**
 * Focus is set to the dialog in the sequence of leftButton and rightButton when available. But if some other control needs to get the focus other than one of those two buttons, set the initialFocus with the control which should be focused on. Setting initialFocus to input controls doesn't open the on screen keyboard on mobile device, this is due to the browser limitation that the on screen keyboard can't be opened with javascript code. The opening of on screen keyboard must be triggered by real user action.
 *
 * @return {string} Id of the element which is the current target of the <code>initialFocus</code> association, or null
 * @public
 * @since 1.15.0
 * @name sap.m.Dialog#getInitialFocus
 * @function
 */

/**
 * Focus is set to the dialog in the sequence of leftButton and rightButton when available. But if some other control needs to get the focus other than one of those two buttons, set the initialFocus with the control which should be focused on. Setting initialFocus to input controls doesn't open the on screen keyboard on mobile device, this is due to the browser limitation that the on screen keyboard can't be opened with javascript code. The opening of on screen keyboard must be triggered by real user action.
 *
 * @param {string | sap.ui.core.Control} vInitialFocus 
 *    Id of an element which becomes the new target of this <code>initialFocus</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.m.Dialog#setInitialFocus
 * @function
 */


	
/**
 * This event will be fired before the dialog is opened. 
 *
 * @name sap.m.Dialog#beforeOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'beforeOpen' event of this <code>sap.m.Dialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Dialog</code>.<br/> itself. 
 *  
 * This event will be fired before the dialog is opened. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Dialog</code>.<br/> itself.
 *
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#attachBeforeOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeOpen' event of this <code>sap.m.Dialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#detachBeforeOpen
 * @function
 */

/**
 * Fire event beforeOpen to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Dialog#fireBeforeOpen
 * @function
 */


/**
 * This event will be fired after the dialog is opened. 
 *
 * @name sap.m.Dialog#afterOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterOpen' event of this <code>sap.m.Dialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Dialog</code>.<br/> itself. 
 *  
 * This event will be fired after the dialog is opened. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Dialog</code>.<br/> itself.
 *
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#attachAfterOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterOpen' event of this <code>sap.m.Dialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#detachAfterOpen
 * @function
 */

/**
 * Fire event afterOpen to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Dialog#fireAfterOpen
 * @function
 */


/**
 * This event will be fired before the dialog is closed. 
 *
 * @name sap.m.Dialog#beforeClose
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.m.Button} oControlEvent.getParameters.origin This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'beforeClose' event of this <code>sap.m.Dialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Dialog</code>.<br/> itself. 
 *  
 * This event will be fired before the dialog is closed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Dialog</code>.<br/> itself.
 *
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#attachBeforeClose
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeClose' event of this <code>sap.m.Dialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#detachBeforeClose
 * @function
 */

/**
 * Fire event beforeClose to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'origin' of type <code>sap.m.Button</code> This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Dialog#fireBeforeClose
 * @function
 */


/**
 * This event will be fired after the dialog is closed. 
 *
 * @name sap.m.Dialog#afterClose
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.m.Button} oControlEvent.getParameters.origin This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'afterClose' event of this <code>sap.m.Dialog</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Dialog</code>.<br/> itself. 
 *  
 * This event will be fired after the dialog is closed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Dialog</code>.<br/> itself.
 *
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#attachAfterClose
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'afterClose' event of this <code>sap.m.Dialog</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Dialog#detachAfterClose
 * @function
 */

/**
 * Fire event afterClose to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'origin' of type <code>sap.m.Button</code> This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Dialog} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Dialog#fireAfterClose
 * @function
 */


/**
 * Open the dialog.
 *
 * @name sap.m.Dialog.prototype.open
 * @function

 * @type void
 * @public
 */


/**
 * Close the dialog.
 *
 * @name sap.m.Dialog.prototype.close
 * @function

 * @type void
 * @public
 */


/**
 * The method checks if the Dialog is open. It returns true when the Dialog is currently open (this includes opening and closing animations), otherwise it returns false.
 *
 * @name sap.m.Dialog.prototype.isOpen
 * @function

 * @type boolean
 * @public
 * @since 1.9.1
 */


// Start of sap\m\Dialog.js
jQuery.sap.require("sap.ui.core.Popup");
jQuery.sap.require("sap.m.Bar");
jQuery.sap.require("sap.ui.core.delegate.ScrollEnablement");
jQuery.sap.require("sap.m.InstanceManager");
jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require("sap.ui.core.theming.Parameters");
jQuery.sap.require("sap.ui.core.ValueState");

sap.m.Dialog._bOneDesign = (sap.ui.core.theming.Parameters.get("sapMPlatformDependent") !== 'true');
sap.m.Dialog._bIOS7Tablet = sap.ui.Device.os.ios && sap.ui.Device.system.tablet && sap.ui.Device.os.version >= 7 && sap.ui.Device.os.version < 8 && sap.ui.Device.browser.name === "sf";
sap.m.Dialog._bPaddingByDefault = (sap.ui.getCore().getConfiguration().getCompatibilityVersion("sapMDialogWithPadding").compareTo("1.16") < 0);

sap.m.Dialog._mStateClasses = {};
sap.m.Dialog._mStateClasses[sap.ui.core.ValueState.None] = "";
sap.m.Dialog._mStateClasses[sap.ui.core.ValueState.Success] = "sapMDialogSuccess";
sap.m.Dialog._mStateClasses[sap.ui.core.ValueState.Warning] = "sapMDialogWarning";
sap.m.Dialog._mStateClasses[sap.ui.core.ValueState.Error] = "sapMDialogError";

sap.m.Dialog._mIcons = {};
sap.m.Dialog._mIcons[sap.ui.core.ValueState.Success] = sap.ui.core.IconPool.getIconURI("accept");
sap.m.Dialog._mIcons[sap.ui.core.ValueState.Warning] = sap.ui.core.IconPool.getIconURI("warning2");
sap.m.Dialog._mIcons[sap.ui.core.ValueState.Error] = sap.ui.core.IconPool.getIconURI("alert");

/* =========================================================== */
/*                  begin: Lifecycle functions                 */
/* =========================================================== */
sap.m.Dialog.prototype.init = function(){
	var that = this;
	this._externalIcon = undefined;
	this._sResizeListenerId = null;
	this._$Window = jQuery(window);
	this._iHMargin = sap.ui.Device.system.phone ? 64 : 128;
	this._iVMargin = 16;
	
	// used to judge if enableScrolling needs to be disabled
	this._scrollContentList = ["NavContainer", "Page", "ScrollContainer"];
	
	this.oPopup = new sap.ui.core.Popup();
	this.oPopup.setShadow(true);
	if(jQuery.device.is.iphone && !this._bMessageType){
		this.oPopup.setModal(true, "sapMDialogTransparentBlk");
	}else{
		this.oPopup.setModal(true, "sapMDialogBlockLayerInit");
	}

	//avoid playing fancy animation in native browser with android version smaller than 4.1
	//because it has problem with keyframe animation that it always sets back to the first
	//keyframe after the animation which causes flickering during the animation.
	if(!(sap.ui.Device.os.android && sap.ui.Device.os.version < 4.1 && window.navigator.userAgent.toLowerCase().indexOf("chrome") === -1)){
		this.oPopup.setAnimations(jQuery.proxy(this._openAnimation, this), jQuery.proxy(this._closeAnimation, this));
	}
	//keyboard support for desktop environments
	if(sap.ui.Device.system.desktop) {
		var fnOnEscape = jQuery.proxy(function(oEvent) {
				// when the escape is already handled by inner control, nothing should happen inside dialog
				if(oEvent.originalEvent && oEvent.originalEvent._sapui_handledByControl){
					return;
				}
				this.close();
				//event should not trigger any further actions
				oEvent.stopPropagation();
		}, this);
		//use pseudo event 'onsapescape' to implement keyboard-trigger for closing this dialog
		//had to implement this onthe popup instance because it did not work
		//on the dialog prototype
		this.oPopup.onsapescape = fnOnEscape;
	}

	//the orientationchange event listener
	this._fnOrientationChange = jQuery.proxy(this._reposition, this);

	this._fnContentResize = jQuery.proxy(this._onResize, this);

	this._fnRepositionAfterOpen = jQuery.proxy(this._repositionAfterOpen, this);

	this.oPopup._applyPosition = function(oPosition, bFromResize) {
		var $that = that.$(),
			self = this,
			$Window = jQuery(window);

		that._deregisterResizeHandler();
		that._setDimensions();
		that._adjustScrollingPane();

		//TODO: if sap_mvi has to be restored, here has to be changed.
		oPosition.at = {
			left: ($Window.width() - $that.outerWidth()) / 2,
			top: ($Window.height() - $that.outerHeight()) / 2
		}

		sap.ui.core.Popup.prototype._applyPosition.call(self, oPosition);

		var iWindowScrollTop = that._$Window.scrollTop(),
			iTop = $that.offset().top;

		//TODO: remove this code after Apple fixes the jQuery(window).height() is 20px more than the window.innerHeight issue.
		if(sap.m.Dialog._bIOS7Tablet && sap.ui.Device.orientation.landscape){
			$that.css("top", iTop - 10); //the calculated window size is 20px more than the actual size in ios 7 tablet landscape mode.
		}

		that._registerResizeHandler();
	};

	if(sap.m.Dialog._bPaddingByDefault){
		this.addStyleClass("sapUiPopupWithPadding");
	}
};

sap.m.Dialog.prototype.onBeforeRendering = function(){
	//if content has scrolling, disable scrolling automatically
	if(this._hasSingleScrollableContent()){
		this._forceDisableScrolling = true;
		jQuery.sap.log.info("VerticalScrolling and horizontalScrolling in sap.m.Dialog with ID " + this.getId() +" has been disabled because there's scrollable content inside");
	}else{
		this._forceDisableScrolling = false;
	}
	
	if(!this._forceDisableScrolling){
		if(!this._oScroller){
			this._oScroller = new sap.ui.core.delegate.ScrollEnablement(this, this.getId() + "-scroll", {
				horizontal: this.getHorizontalScrolling(), // will be disabled in adjustScrollingPane if content can fit in
				vertical: this.getVerticalScrolling(),
				zynga: false,
				preventDefault: false,
				nonTouchScrolling: "scrollbar"
			});
		}
	}
};

sap.m.Dialog.prototype.onAfterRendering = function(){
	this._$scrollPane = this.$("scroll");
	this._$content = this.$("cont");
	
	if(this.isOpen()){
		//restore the focus after rendering when dialog is already open
		var sFocusControlId = this._getFocusId();
		jQuery.sap.focus(jQuery.sap.domById(sFocusControlId));
	}
};

sap.m.Dialog.prototype.exit = function(){
	this._deregisterResizeHandler();
	
	sap.ui.Device.resize.detachHandler(this._fnOrientationChange);
	
	sap.m.InstanceManager.removeDialogInstance(this);
	
	if(this.oPopup){
		this.oPopup.detachEvent(sap.ui.core.Popup.M_EVENTS.opened, this._handleOpened, this);
		this.oPopup.detachEvent(sap.ui.core.Popup.M_EVENTS.closed, this._handleClosed, this);
		this.oPopup.destroy();
		this.oPopup = null;
	}
	if(this._oScroller){
		this._oScroller.destroy();
		this._oScroller = null;
	}

	if(this._header){
		this._header.destroy();
		this._header = null;
	}
	
	if(this._headerTitle){
		this._headerTitle.destroy();
		this._headerTitle = null;
	}

	if(this._iconImage){
		this._iconImage.destroy();
		this._iconImage = null;
	}
};
/* =========================================================== */
/*                   end: Lifecycle functions                  */
/* =========================================================== */

/* =========================================================== */
/*                    begin: public functions                  */
/* =========================================================== */
sap.m.Dialog.prototype.open = function(){
	var oPopup = this.oPopup;

	if (oPopup.isOpen()){
		return this;
	}

	//reset the close trigger
	this._oCloseTrigger = null;

	var $blockLayer = jQuery("#sap-ui-blocklayer-popup"),
		// The control that needs to be focused after dialog is open is calculated in following sequence:
		// initialFocus, beginButton, endButton
		// dialog is always modal so the focus doen't need to be on the dialog when there's no initialFocus, beginButton and endButton available.
		// but to keep the consistency, the focus will in the end fall back to dialog itself.
		sFocusControlId = this._getFocusId();

	if(!sap.m.Dialog._bOneDesign && $blockLayer.length > 0){
		var bTransparent = jQuery.device.is.iphone && !this._bMessageType && !this.hasStyleClass("sapMActionSheetDialog");
		$blockLayer.toggleClass("sapMDialogTransparentBlk", bTransparent);
		$blockLayer.toggleClass("sapMDialogBlockLayerInit", !bTransparent);
	}

	this.fireBeforeOpen();
	oPopup.attachEvent(sap.ui.core.Popup.M_EVENTS.opened, this._handleOpened, this);

	// Open popup
	oPopup.setContent(this);
	oPopup.setInitialFocusId(sFocusControlId);
	if(!sap.m.Dialog._bOneDesign && jQuery.device.is.iphone && !this._bMessageType) {
		oPopup.setPosition("center top", "center bottom", window, "0 0", "fit");
	} else {
		oPopup.setPosition("center center", "center center", window, "0 0", "fit");
	}
	oPopup.open();

	// bind to window resize
	sap.ui.Device.resize.attachHandler(this._fnOrientationChange);

	sap.m.InstanceManager.addDialogInstance(this);
	return this;
};

sap.m.Dialog.prototype.close = function(){
	var oPopup = this.oPopup;

	var eOpenState = this.oPopup.getOpenState();
	if(!(eOpenState === sap.ui.core.OpenState.CLOSED || eOpenState === sap.ui.core.OpenState.CLOSING)){
		sap.m.closeKeyboard();
		this.fireBeforeClose({origin: this._oCloseTrigger});
		oPopup.attachEvent(sap.ui.core.Popup.M_EVENTS.closed, this._handleClosed, this);
		this._deregisterResizeHandler();
		oPopup.close();
	}
	return this;
};

sap.m.Dialog.prototype.isOpen = function(){
	return this.oPopup && this.oPopup.isOpen();
};
/* =========================================================== */
/*                     end: public functions                   */
/* =========================================================== */

/* =========================================================== */
/*                      begin: event handlers                  */
/* =========================================================== */
sap.m.Dialog.prototype._handleOpened = function(){
	this.oPopup.detachEvent(sap.ui.core.Popup.M_EVENTS.opened, this._handleOpened, this);
	this.fireAfterOpen();
};

sap.m.Dialog.prototype._handleClosed = function(){
	this.oPopup.detachEvent(sap.ui.core.Popup.M_EVENTS.closed, this._handleClosed, this);
	sap.ui.Device.resize.detachHandler(this._fnOrientationChange);
	sap.m.InstanceManager.removeDialogInstance(this);
	this.fireAfterClose({origin: this._oCloseTrigger});
};

/**
 * Event handler for the focusin event.
 * If it occurs on the focus handler elements at the beginning of the dialog, the focus is set to the end, and vice versa.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.Dialog.prototype.onfocusin = function(oEvent){
	var oSourceDomRef = oEvent.target;
	
	//Check if the invisible FIRST focusable element (suffix '-firstfe') has gained focus
	if (oSourceDomRef.id === this.getId() + "-firstfe") {
		//Check if buttons are available
		var oLastFocusableDomref = jQuery("#" + this.getId() + " .sapMDialogActions").lastFocusableDomRef();
		if(!oLastFocusableDomref) {
			//If there are no buttons, check the content
			oLastFocusableDomref = this.$("cont").lastFocusableDomRef();
			if(!oLastFocusableDomref) {
				//If there is no content, check the header
				oLastFocusableDomref = this.$("header").lastFocusableDomRef();
			}
		}
		jQuery.sap.focus(oLastFocusableDomref);
	} else if (oSourceDomRef.id === this.getId() + "-lastfe") {
		//Check if the invisible LAST focusable element (suffix '-lastfe') has gained focus
		//First check if header content is available
		var oFirstFocusableDomref = this.$("header").firstFocusableDomRef();
		if(!oFirstFocusableDomref) {
			//Check if content are available
			var oFirstFocusableDomref = this.$("cont").firstFocusableDomRef();
			if(!oFirstFocusableDomref) {
				//If there is no content, check the buttons
				oFirstFocusableDomref = jQuery("#" + this.getId() + " .sapMDialogActions").firstFocusableDomRef();
			}
		}
		jQuery.sap.focus(oFirstFocusableDomref);
	}
};


/* =========================================================== */
/*                      end: event handlers                  */
/* =========================================================== */


/* =========================================================== */
/*                      begin: private functions               */
/* =========================================================== */
sap.m.Dialog.prototype._openAnimation = function($Ref, iRealDuration, fnOpened) {
	if(!(sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version < 10)){
		$Ref.css("display", "block");
	}
	
	var that = this,
		bOpenedCalled = false,
		fnEnd;
	
	if(!sap.m.Dialog._bOneDesign && jQuery.device.is.iphone && !this._bMessageType) {
		fnEnd = function(){
			if(bOpenedCalled || !that.oPopup || that.oPopup.getOpenState() !== sap.ui.core.OpenState.OPENING){
				return;
			}
			$Ref.unbind("webkitTransitionEnd transitionend");
			$Ref.removeClass("sapMDialogSliding");
			fnOpened();
			bOpenedCalled = true;
		};
		
		$Ref.addClass("sapMDialogBottom").removeClass("sapMDialogHidden");
		window.setTimeout(function(){
			$Ref.bind("webkitTransitionEnd transitionend", fnEnd);
			$Ref.addClass("sapMDialogSliding").removeClass("sapMDialogBottom");
			//check if the transitionend event isn't fired, if it's not fired due to unexpected rerendering,
			//fnOpened should be called again.
			setTimeout(function(){
				fnEnd();
			}, 400);
		}, 0);
	} else {
		if(sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version < 10){
			$Ref.fadeIn(200, fnOpened);
		}else{
			fnEnd = function(){
				if(bOpenedCalled || !that.oPopup || that.oPopup.getOpenState() !== sap.ui.core.OpenState.OPENING){
					return;
				}
				$Ref.unbind("webkitAnimationEnd animationend");
				fnOpened();
				$Ref.removeClass("sapMDialogOpening");
				bOpenedCalled = true;
			};
			$Ref.bind("webkitAnimationEnd animationend", fnEnd);
			$Ref.addClass("sapMDialogOpening");
			//check if the transitionend event isn't fired, if it's not fired due to unexpected rerendering,
			//fnOpened should be called again.
			setTimeout(function(){
				fnEnd();
			}, 150);
		}
	}
};

sap.m.Dialog.prototype._closeAnimation = function($Ref, iRealDuration, fnClose) {
	var that = this,
		bClosedCalled = false,
		fnEnd;
	
	if(!sap.m.Dialog._bOneDesign && jQuery.device.is.iphone && !this._bMessageType) {
		fnEnd = function(){
			if(bClosedCalled){
				return;
			}
			$Ref.unbind("webkitTransitionEnd transitionend");
			$Ref.addClass("sapMDialogHidden").removeClass("sapMDialogBottom").removeClass("sapMDialogSliding");
			fnClose();
			bClosedCalled = true;
		};
		$Ref.bind("webkitTransitionEnd transitionend", fnEnd);
		$Ref.addClass("sapMDialogSliding").addClass("sapMDialogBottom");
		//check if the transitionend event isn't fired, if it's not fired due to unexpected rerendering,
		//fnClose should be called again.
		setTimeout(function(){
			fnEnd();
		}, 400);
	} else {
		if(sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version < 10){
			$Ref.fadeOut(200, fnClose);
		}else{
			fnEnd = function(){
				if(bClosedCalled){
					return;
				}
				$Ref.unbind("webkitAnimationEnd animationend");
				fnClose();
				$Ref.removeClass("sapMDialogClosing");
				bClosedCalled = true;
			};
			$Ref.bind("webkitAnimationEnd animationend", fnEnd);
			$Ref.addClass("sapMDialogClosing");
			setTimeout(function(){
				fnEnd();
			}, 150);
		}
	}
};

sap.m.Dialog.prototype._setDimensions = function() {
	var iWindowWidth = this._$Window.width(),
		iWindowHeight = (sap.m.Dialog._bIOS7Tablet && sap.ui.Device.orientation.landscape && window.innerHeight) ? window.innerHeight : this._$Window.height(),
		$this = this.$(),
		//stretch is ignored for message dialog
		bStretch = this.getStretch() && !this._bMessageType,
		iHPaddingToScreen = this._iHMargin,
		iVPaddingToScreen = this._iVMargin,
		iPaddingLeft = window.parseInt($this.css("padding-left"), 10),
		iPaddingRight = window.parseInt($this.css("padding-right"), 10),
		iPaddingTop = window.parseInt($this.css("padding-top"), 10),
		iPaddingBottom = window.parseInt($this.css("padding-bottom"), 10),
		$content = this._$content,
		iBorderLeft = window.parseInt($this.css("border-left-width"), 10),
		iBorderRight = window.parseInt($this.css("border-right-width"), 10),
		iBorderTop = window.parseInt($this.css("border-top-width"), 10),
		iBorderBottom = window.parseInt($this.css("border-bottom-width"), 10),
		iMaxWidth = iWindowWidth - iHPaddingToScreen,
		iMaxHeight = iWindowHeight - iVPaddingToScreen,
		sContentWidth = this.getContentWidth(),
		sContentHeight = this.getContentHeight(),
		$scrollArea = this._$scrollPane,
		//this is a fix for setting useTransform false in ScrollEnablement.js line 236
		bSAreaPosAbs = $scrollArea.css("position") === "absolute",
		oSubHeader = this.getSubHeader(),
		sCalcContentWidth = "",
		iMinWidth = 0,
		iContentMaxHeight, iHeaderHeight, iSubHeaderHeight, iFooterHeight, iScrollAreaHeight, iCalcContentWidth, iWidth, iHeight, bIgnoreContentWidth;
	
	//reset
	$this.css({
		"width": "",
		"height": "",
		"min-width": "",
		"max-width": "",
		"max-height": "",
		"left": "",
		"top": ""
	});
	
	$scrollArea.css({
		"width": ""
	});

	if(sap.ui.Device.system.tablet || sap.ui.Device.system.desktop){
		if(sap.m.Dialog._bOneDesign && bStretch){
			$this.css({
				"right": "0px",
				"bottom": "0px",
				"width": iWindowWidth + "px",
				"min-width": iWindowWidth + "px",
				"max-height": iWindowHeight + "px"
			});
		}else{
			iMinWidth = 400;
			$this.css({
				"max-width": (this._bMessageType ? 480 : iMaxWidth) + "px",
				"max-height": iMaxHeight + "px"
			});
		}
	}else{
		if(!sap.m.Dialog._bOneDesign && jQuery.device.is.iphone && !this._bMessageType){
			$this.css({width: "100%",  height: "100%"});
		}else{
			if(sap.m.Dialog._bOneDesign && bStretch){
				$this.css({
					"width": iWindowWidth + "px",
					"height": iWindowHeight + "px",
					"max-height": iWindowHeight + "px"
				});
			}else{
				if(sap.ui.Device.orientation.portrait){
					$this.css({
						"width": iMaxWidth + "px",
						"max-height": iMaxHeight + "px"
					});
				}else{
					iMinWidth = iWindowHeight;
					$this.css({
						"min-width": iMinWidth + "px",
						"max-width": iMaxWidth + "px",
						"max-height": iMaxHeight + "px"
					});
				}
			}
		}
	}
	
	iHeaderHeight = $this.children("header.sapMDialogTitle").outerHeight(true) || 0;
	iSubHeaderHeight = oSubHeader ? oSubHeader.$().outerHeight(true) : 0;
	if(!sap.m.Dialog._bOneDesign && sap.ui.Device.os.ios && !this._bMessageType){
		iFooterHeight = 0;
	}else{
		iFooterHeight = $this.children("footer").outerHeight(true) || 0;
	}
	
	//if stretch is true, paddings to screen are ignored
	iContentMaxHeight = (((sap.m.Dialog._bOneDesign && bStretch) || (!sap.m.Dialog._bOneDesign && jQuery.device.is.iphone && !this._bMessageType)) ? iWindowHeight : iMaxHeight) - iHeaderHeight - iSubHeaderHeight - iFooterHeight - iPaddingTop - iPaddingBottom - iBorderTop - iBorderBottom;
	//sContentWidth is ignored under the following conditions, because the width is managed by dialog itself.
	// 1. when runs on a phone in portrait mode 
	// 2. in landscape mode for iphone (in mvi)
	// 3. stretch (in bluecrystal) is true
	// 4. message type dialog
	bIgnoreContentWidth = (sap.ui.Device.system.phone && (sap.ui.Device.orientation.portrait || (!sap.m.Dialog._bOneDesign && sap.ui.Device.os.ios))) || (sap.m.Dialog._bOneDesign && bStretch) || this._bMessageType;
	
	if(sContentWidth && !bIgnoreContentWidth){
		if(sContentWidth.indexOf("%") > 0){
			sContentWidth = sap.m.PopupHelper.calcPercentageSize(sContentWidth, iWindowWidth);
		}
		
		// convert the width with unit to calculated value
		sContentWidth = $content.width(sContentWidth).width() + "px";
		
		iCalcContentWidth = Math.max(
				iMinWidth - iPaddingLeft - iPaddingRight - iBorderLeft - iBorderRight,
				Math.min(
						window.parseInt(sContentWidth, 10), 
						iMaxWidth - iPaddingLeft - iPaddingRight - iBorderLeft - iBorderRight
				)
			);
		
		sCalcContentWidth = iCalcContentWidth + "px";
		
		// normally setting the width on content is enough but when display:table dom is put out of the content area in dialog in IE9
		// the dialog is pushed to max width. Thus the width has to be set on root dom to prevent this.
		$this.css({
			"width": iCalcContentWidth + iPaddingLeft + iPaddingRight + iBorderLeft + iBorderRight
		});
	}
	
	//height is set later
	$content.css({
		"width": sCalcContentWidth,
		"max-height": ""
	});
	
	if(sContentHeight.indexOf("%") > 0){
		sContentHeight = sap.m.PopupHelper.calcPercentageSize(sContentHeight, iWindowHeight);
	}
	
	if(sContentHeight){
		// convert the height with unit to calculated value
		sContentHeight = $content.height(sContentHeight).height() + "px";
	}
	
	if(bSAreaPosAbs){
		//this is a fix for setting useTransform false in ScrollEnablement.js line 236
		iScrollAreaHeight = $scrollArea.outerHeight(true);
		if(sap.m.Dialog._bOneDesign && bStretch){
			$content.css("height", iContentMaxHeight);
		}else{
			if(sContentHeight){
				$content.css("height", Math.min(iContentMaxHeight, window.parseInt(sContentHeight, 10)));
			}else{
				$content.css("height", Math.min(iContentMaxHeight, iScrollAreaHeight));
			}
		}
	}else{
		if((sap.m.Dialog._bOneDesign && bStretch) || (!sap.m.Dialog._bOneDesign && jQuery.device.is.iphone && !this._bMessageType)){
			$content.css("height", iContentMaxHeight);
		}else{
			if(sContentHeight){
				$content.css("height", Math.min(iContentMaxHeight, window.parseInt(sContentHeight, 10)));
			}else{
				$content.css("max-height", iContentMaxHeight);
			}
		}
	}
};

sap.m.Dialog.prototype._adjustScrollingPane = function(){
	var	$scrollArea = this._$scrollPane,
		oCSS = {
			"display": "block"
		};

	// In Android version less than 4.1, the scrollEnablement needs to set position: absolute to $scrollArea.
	// Thus the width 100% has to be set in order to make the scrollArea as big as the contentArea
	if($scrollArea.css("position") === "absolute"){
		oCSS.width = "100%";
	}

	// If the content fits in, the display: inline-block should be replace with display: block.
	if($scrollArea.outerWidth(true) <= this._$content.width()){
		$scrollArea.css(oCSS);
	}

	if(this._oScroller){
		this._oScroller.refresh();
	}
};

sap.m.Dialog.prototype._reposition = function() {
	var that = this, 
		ePopupState = this.oPopup.getOpenState();
	
	if(ePopupState !== sap.ui.core.OpenState.OPEN && ePopupState !== sap.ui.core.OpenState.OPENING){
		return;
	}
	
	this._fnRepositionAfterOpen();
};

sap.m.Dialog.prototype._repositionAfterOpen = function(){
	//The dialog might have been destroyed while the timeout was set
	if(!this.oPopup) {
		return;
	}

	var eState = this.oPopup.getOpenState();
	//if resize event occurs while the opening animation, the position change has to be done after the opening animation.
	if(eState === sap.ui.core.OpenState.OPENING){
		window.setTimeout(this._fnRepositionAfterOpen, 50);
	}else{
		this._reapplyPosition();
	}
};

sap.m.Dialog.prototype._reapplyPosition = function(){
	this.oPopup && this.oPopup._applyPosition(this.oPopup._oLastPosition, true);
};

sap.m.Dialog.prototype._onResize = function(){
	if(this._sResizeTimer || !this.getDomRef()){
		return;
	}
	
	var that = this, 
		oResizeDomRef = this.getDomRef("scroll");
	
	this._iResizeDomWidth = this._iResizeDomWidth || oResizeDomRef.offsetWidth;
	this._iResizeDomHeight = this._iResizeDomHeight || oResizeDomRef.offsetHeight;
	
	this._sResizeTimer = window.setTimeout(function(){
		var iNewWidth = oResizeDomRef.offsetWidth,
			iNewHeight = oResizeDomRef.offsetHeight;
		if(that._iResizeDomWidth !== iNewWidth || that._iResizeDomHeight !== iNewHeight){
			that._fnOrientationChange();
		}
		that._sResizeTimer = null;
	}, 0);
};

sap.m.Dialog.prototype._createHeader = function(){
	if(sap.m.Dialog._bOneDesign || (sap.ui.Device.os.ios && !this._bMessageType)){
		if(!this._header){
			// set parent of header to detect changes on title
			this._header = new sap.m.Bar(this.getId()+"-header").addStyleClass("sapMHeader-CTX sapMDialogTitle");
			this.setAggregation("_header", this._header, false);
		}
	}
};

/**
 * If a scrollable control (sap.m.NavContainer, sap.m.ScrollContainer, sap.m.Page) is added to dialog's content aggregation as a single child or through one or more sap.ui.mvc.View instances,
 * the scrolling inside dialog will be disabled in order to avoid wrapped scrolling areas.
 * 
 * If more than one scrollable control is added to dialog, the scrolling needs to be disabled manually.
 */
sap.m.Dialog.prototype._hasSingleScrollableContent = function(){
	var aContent = this.getContent(), i;
	
	while(aContent.length === 1 && aContent[0] instanceof sap.ui.core.mvc.View){
		aContent = aContent[0].getContent();
	}
	
	if(aContent.length === 1){
		for(i = 0 ; i < this._scrollContentList.length ; i++){
			if(aContent[0] instanceof sap.m[this._scrollContentList[i]]){
				return true;
			}
		}
	}
	
	return false;
};

sap.m.Dialog.prototype._initBlockLayerAnimation = function(){
	//!!!now the animation on blocklayer is removed due to
	//problem with calling open, close, open without any interval
	//then blocklayer can't be removed and it blocks the whole UI
	if(!sap.m.Dialog._bOneDesign && (!jQuery.device.is.iphone || this._bMessageType)){
		// Animating also the block layer
		this.oPopup._showBlockLayer = function(){
			sap.ui.core.Popup.prototype._showBlockLayer.call(this);
			var $blockLayer = jQuery("#sap-ui-blocklayer-popup");
			if(sap.ui.Device.os.ios){
				$blockLayer.addClass('sapMDialogBLyInit');
//				setTimeout(function() {
//					$blockLayer.addClass('sapMDialogBLyShown');
//				}, 0);
			}else{
				$blockLayer.addClass("sapMDialogBlockLayerAnimation");
				setTimeout(function(){
					$blockLayer.addClass("sapMDialogBlockLayer");
				}, 0);
			}
		};

		this.oPopup._hideBlockLayer = function(){
			var $blockLayer = jQuery("#sap-ui-blocklayer-popup"), that = this;
			
			if(sap.ui.core.Popup.blStack.length > 1){
				// If there's still popups open, hide block layer without animation
				sap.ui.core.Popup.prototype._hideBlockLayer.call(that);
			}else{
				$blockLayer.removeClass('sapMDialogBlockLayerInit');
				if(sap.ui.Device.os.ios){
//					$blockLayer.removeClass('sapMDialogBLyShown');
//					$blockLayer.bind("webkitTransitionEnd", function(){
//						$blockLayer.unbind("webkitTransitionEnd");
						$blockLayer.removeClass("sapMDialogBLyInit");
						sap.ui.core.Popup.prototype._hideBlockLayer.call(that);
						
//					});
				}else{
					$blockLayer.removeClass("sapMDialogBlockLayer");
	
					$blockLayer.bind("webkitTransitionEnd transitionend", function(){
						jQuery(this).unbind("webkitTransitionEnd transitionend");
						sap.ui.core.Popup.prototype._hideBlockLayer.call(that);
						$blockLayer.removeClass("sapMDialogBlockLayerAnimation");
					});
				}
			}
		};
	}else{
		this.oPopup._hideBlockLayer = function(){
			var $blockLayer = jQuery("#sap-ui-blocklayer-popup");
			$blockLayer.removeClass("sapMDialogTransparentBlk");
			sap.ui.core.Popup.prototype._hideBlockLayer.call(this);
		};
	}
};


sap.m.Dialog.prototype._clearBlockLayerAnimation = function(){
	if(jQuery.device.is.iphone && !this._bMessageType){
		delete this.oPopup._showBlockLayer;
		this.oPopup._hideBlockLayer = function(){
			var $blockLayer = jQuery("#sap-ui-blocklayer-popup");
			$blockLayer.removeClass("sapMDialogTransparentBlk");
			sap.ui.core.Popup.prototype._hideBlockLayer.call(this);
		};
	}
};

sap.m.Dialog.prototype._getFocusId = function(){
	var oBeginButton = this.getBeginButton(),
		oEndButton = this.getEndButton();
		
	// Left or Right button can be visible false and therefore not rendered.
	// In such a case, focus should be set somewhere else.
	return this.getInitialFocus() 
			|| (oBeginButton && oBeginButton.getVisible() && oBeginButton.getId())
			|| (oEndButton && oEndButton.getVisible() && oEndButton.getId())
			|| this.getId();
};

/**
 * Returns the sap.ui.core.ScrollEnablement delegate which is used with this control.
 *
 * @private
 */
sap.m.Dialog.prototype.getScrollDelegate = function() {
	return this._oScroller;
};

sap.m.Dialog.prototype._composeAggreNameInHeader = function(sPos){
	var sHeaderAggregationName;
	
	if(sPos === "Begin"){
		sHeaderAggregationName = "contentLeft";
	}else if(sPos === "End"){
		sHeaderAggregationName = "contentRight";
	}else{
		sHeaderAggregationName = "content" + sPos;
	}
	
	return sHeaderAggregationName;
};

sap.m.Dialog.prototype._setButton = function(oButton, sPos, bSkipFlag){
	var that = this,
		sPosModified = this._firstLetterUpperCase(sPos),
		sGetterName = "get" + sPosModified + "Button",
		sAggregationName = sPos.toLowerCase() + "Button",
		sHeaderAggregationName = this._composeAggreNameInHeader(sPosModified), 
		oOldButton;

	oOldButton = this[sGetterName]();
	if(oOldButton && !(oOldButton instanceof sap.m.Button)){
		oOldButton = sap.ui.getCore().byId(oOldButton);
	}
	
	if(oButton && oOldButton === oButton){
		return this;
	}

	if(!this._oButtonDelegate){
		this._oButtonDelegate = {
			ontap: function(){
				that._oCloseTrigger = this;
			}
		};
	}
	
	if(oOldButton){
		oOldButton.removeDelegate(this._oButtonDelegate);
	}
	
	if(oButton){
		oButton.addDelegate(this._oButtonDelegate, true, oButton);
		if(sap.m.Dialog._bOneDesign){
			if( !(oButton.getType() === sap.m.ButtonType.Accept || oButton.getType() === sap.m.ButtonType.Reject)){
				oButton.setType(sap.m.ButtonType.Transparent);
			}
		}
	}
	
	if(!sap.m.Dialog._bOneDesign && sap.ui.Device.os.ios && !this._bMessageType){
		this._createHeader();
		if(oButton){
			if(oOldButton){
				this._header.removeAggregation(sHeaderAggregationName, oOldButton, true);
			}
			this._header.addAggregation(sHeaderAggregationName, oButton, true);
			this._header.invalidate();
		}else{
			if(oOldButton){
				this._header.removeAggregation(sHeaderAggregationName, oOldButton);
			}
		}
	}else{
		this.setAggregation(sAggregationName, oButton, false, /*avoid infinite loop*/true);
	}
	
	return this;
};

sap.m.Dialog.prototype._getButton = function(sPos){
	var sPosModified = this._firstLetterUpperCase(sPos),
		sHeaderAggregationName = this._composeAggreNameInHeader(sPosModified),
		sAggregationName = sPos.toLowerCase() + "Button", 
		sType = this.getType(),
		aHeaderAggregation;
	
	if(!sap.m.Dialog._bOneDesign && sap.ui.Device.os.ios && !this._bMessageType){
		aHeaderAggregation = this._header && this._header.getAggregation(sHeaderAggregationName);
		if(aHeaderAggregation && aHeaderAggregation[0]){
			return aHeaderAggregation[0];
		}else{
			return null;
		}
	}else{
		return this.getAggregation(sAggregationName, null, /*avoid infinite loop*/true);
	}
	
};

sap.m.Dialog.prototype._getButtonFromHeader = function(sPos){
	if(this._header){
		var sHeaderAggregationName = this._composeAggreNameInHeader(this._firstLetterUpperCase(sPos)),
			aContent = this._header.getAggregation(sHeaderAggregationName);
		return aContent && aContent[0];
	}else{
		return null;
	}
};

sap.m.Dialog.prototype._firstLetterUpperCase = function(sValue){
	return sValue.charAt(0).toUpperCase() + sValue.slice(1).toLowerCase();
};

sap.m.Dialog.prototype._getAnyHeader = function(){
	var oCustomHeader = this.getCustomHeader();
	
	if(oCustomHeader){
		return oCustomHeader;
	}else{
		var bShowHeader = this.getShowHeader();
		
		// if showHeader is set to false and not for standard dialog in iOS in theme sap_mvi, no header.
		if(!bShowHeader && !(!sap.m.Dialog._bOneDesign && !this._bMessageType && sap.ui.Device.os.ios)){
			return null;
		}

		if(!sap.m.Dialog._bOneDesign && !this.getTitle() && !this.getBeginButton() && !this.getEndButton()){
			//if there's no title, no left and right buttons, header isn't shown. (only in platform dependent themes)
			//for platform independent themes, header is always created.
			return null;
		}
		
		this._createHeader();
		return this._header;
	}
};

sap.m.Dialog.prototype._deregisterResizeHandler = function(){
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
};

sap.m.Dialog.prototype._registerResizeHandler = function(){
	if(!this._sResizeListenerId && this.getDomRef()){
		var oResizeDomRef = this.getDomRef("scroll");
		this._iResizeDomWidth = oResizeDomRef.offsetWidth;
		this._iResizeDomHeight = oResizeDomRef.offsetHeight;
		this._sResizeListenerId = sap.ui.core.ResizeHandler.register(oResizeDomRef,  this._fnContentResize);
	}
};
/* =========================================================== */
/*                      end: private functions                 */
/* =========================================================== */

/* =========================================================== */
/*                         begin: setters                      */
/* =========================================================== */

sap.m.Dialog.prototype.setBeginButton = function(oButton){
	return this._setButton(oButton, "begin");
};

sap.m.Dialog.prototype.setEndButton = function(oButton){
	return this._setButton(oButton, "end");
};

sap.m.Dialog.prototype.setLeftButton = function(vButton){
	if(!(vButton instanceof sap.m.Button)){
		vButton = sap.ui.getCore().byId(vButton);
	}
	
	//setting leftButton will also set the beginButton with the same button instance.
	//as this instance is aggregated by the beginButton, the hidden aggregation isn't needed.
	this._setButton(vButton, "begin");
	return this.setAssociation("leftButton", vButton);
};

sap.m.Dialog.prototype.setRightButton = function(vButton){
	if(!(vButton instanceof sap.m.Button)){
		vButton = sap.ui.getCore().byId(vButton);
	}
	
	//setting rightButton will also set the endButton with the same button instance.
	//as this instance is aggregated by the endButton, the hidden aggregation isn't needed.
	this._setButton(vButton, "end");
	return this.setAssociation("rightButton", vButton);
};

sap.m.Dialog.prototype.setTitle = function(sTitle){
	this.setProperty("title", sTitle, true);

	if(this._headerTitle){
		this._headerTitle.setText(sTitle);
	}else{
		this._headerTitle = new sap.m.Label(this.getId() + "-title", {
			text: sTitle
		}).addStyleClass("sapMDialogTitle");
		
		if(sap.m.Dialog._bOneDesign || (sap.ui.Device.os.ios && !this._bMessageType)){
			this._createHeader();
			this._header.addContentMiddle(this._headerTitle);
		}else{
			this.setAggregation("_title", this._headerTitle);
		}
	}
	return this;
};

sap.m.Dialog.prototype.setCustomHeader = function(oCustomHeader){
	if(!sap.m.Dialog._bOneDesign){
		jQuery.sap.log.warning("CustomHeader property in sap.m.Dialog isn't supported in theme sap_mvi!");
	}else{
		if(oCustomHeader){
			oCustomHeader.addStyleClass("sapMDialogTitle");
		}
		this.setAggregation("customHeader", oCustomHeader);
	}
};

sap.m.Dialog.prototype.setState = function(sState){
	var mFlags = {}, 
		$this = this.$(),
		sName;
	mFlags[sState] = true;
	
	this.setProperty("state", sState, true);
	if(sap.m.Dialog._bOneDesign){
		for(sName in sap.m.Dialog._mStateClasses){
			$this.toggleClass(sap.m.Dialog._mStateClasses[sName], !!mFlags[sName]);
		}
		this.setIcon(sap.m.Dialog._mIcons[sState], true);
	}
};

sap.m.Dialog.prototype.setIcon = function(sIcon, bInternal){
	if(!bInternal){
		this._externalIcon = sIcon;
	}else{
		if(this._externalIcon){
			sIcon = this._externalIcon;
		}
	}
	
	if(sap.m.Dialog._bOneDesign || !sap.ui.Device.os.ios){
		//icon is only shown in non iOS platform
		if(sIcon){
			if(sIcon!==this.getIcon()){
				if(this._iconImage){
					this._iconImage.setSrc(sIcon);
				}else{
					this._iconImage = sap.ui.core.IconPool.createControlByURI({
						id: this.getId() + "-icon",
						src: sIcon
					}, sap.m.Image).addStyleClass("sapMDialogIcon");
					
					if(sap.m.Dialog._bOneDesign){
						this._createHeader();
						this._header.insertAggregation("contentMiddle", this._iconImage, 0);
					}else{
						this.setAggregation("_icon", this._iconImage);
					}
				}
			}
		}else{
			var sDialogState = this.getState();
			if(!bInternal && sDialogState !== sap.ui.core.ValueState.None && sap.m.Dialog._bOneDesign){
				if(this._iconImage){
					this._iconImage.setSrc(sap.m.Dialog._mIcons[sDialogState]);
				}
			}else{
				if(this._iconImage){
					this._iconImage.destroy();
					this._iconImage = null;
				}
			}
		}
	}
	
	this.setProperty("icon", sIcon, true);
	return this;
};

sap.m.Dialog.prototype.setType = function(sType){
	var sOldType = this.getType(), $blockRef, oBeginButton, oEndButton;
	
	if(sOldType === sType){
		return;
	}
	
	//first time set type property, need to check if the left button and right button are set
	//if set, need to move them when type is message
	if(this._bMessageType === undefined){
		if(sType === sap.m.DialogType.Message && !sap.m.Dialog._bOneDesign && sap.ui.Device.os.ios){
			if(this._header){
				oBeginButton = this._getButtonFromHeader("left");
				oEndButton = this._getButtonFromHeader("right");
				if(oBeginButton){
					this.setAggregation("beginButton", oBeginButton, false, true);
				}
				if(oEndButton){
					this.setAggregation("endButton", oEndButton, false, true);
				}
				this._header.destroy();
				this._header = null;
			}
		}
	}
	
	this._bMessageType = (sType === sap.m.DialogType.Message);
	
	if(!sap.m.Dialog._bOneDesign && sap.ui.Device.os.ios){
		$blockRef = jQuery("#sap-ui-blocklayer-popup");
		//reset blocklayer css and popup animation for iphone when changing the type
		if(this._bMessageType || !sap.ui.Device.system.phone){
			this.oPopup.setModal(true, "sapMDialogBlockLayerInit");
			if($blockRef.length > 0){
				$blockRef.removeClass("sapMDialogTransparentBlk").addClass("sapMDialogBlockLayerInit");
				if(this.oPopup.isOpen()){
					$blockRef.addClass("sapMBusyBLyInit sapMBusyBLyShown");
				}	
			}
			this.oPopup.setPosition("center center", "center center", document, "0 0", "fit");
			this._initBlockLayerAnimation();
		}else{
			this.oPopup.setModal(true, "sapMDialogTransparentBlk");
			if($blockRef.length > 0){
				$blockRef.removeClass("sapMBusyBLyShown sapMBusyBLyInit").addClass("sapMDialogTransparentBlk");
			}
			this.oPopup.setPosition("center top", "center bottom", document, "0 0", "fit");
			this._clearBlockLayerAnimation();
		}
	}
	
	return this.setProperty("type", sType, false);
};

sap.m.Dialog.prototype.setStretch = function(bStretch){
	this._bStretchSet = true;
	return this.setProperty("stretch", bStretch);
};

sap.m.Dialog.prototype.setStretchOnPhone = function(bStretchOnPhone){
	if(this._bStretchSet){
		jQuery.sap.log.warning("sap.m.Dialog: stretchOnPhone property is deprecated. Setting stretchOnPhone property is ignored when there's already stretch property set.")
		return this;
	}
	this.setProperty("stretchOnPhone", bStretchOnPhone);
	return this.setProperty("stretch", bStretchOnPhone && sap.ui.Device.system.phone);
};

sap.m.Dialog.prototype.setVerticalScrolling = function(bValue) {
	var oldValue = this.getVerticalScrolling();
	if(oldValue === bValue) {
		return;
	}

	this.$().toggleClass("sapMDialogVerScrollDisabled", !bValue);
	this.setProperty("verticalScrolling", bValue);

	if(this._oScroller) {
		this._oScroller.setVertical(bValue);
	}

	return this;

};

sap.m.Dialog.prototype.setHorizontalScrolling = function(bValue) {
	var oldValue = this.getHorizontalScrolling();
	if(oldValue === bValue){
		return;
	}

	this.$().toggleClass("sapMDialogHorScrollDisabled", !bValue);
	this.setProperty("horizontalScrolling", bValue);

	if(this._oScroller) {
		this._oScroller.setHorizontal(bValue);
	}

	return this;
};
/* =========================================================== */
/*                           end: setters                      */
/* =========================================================== */

// Pass the setter of beginButton and endButton from dialog to internal header
// Both of them are singular aggregation, only the following three methods need
// to be overwritten
sap.m.Dialog.prototype.setAggregation = function(sAggregationName, oObject, bSuppressInvalidate, bPassBy){
	if(!bPassBy && (sAggregationName === "beginButton" || sAggregationName === "endButton")){
		return this._setButton(oObject, sAggregationName.substring(0, sAggregationName.indexOf("Button")));
	}else{
		return sap.ui.core.Control.prototype.setAggregation.apply(this, Array.prototype.slice.call(arguments, 0, 3));
	}
};

sap.m.Dialog.prototype.getAggregation = function(sAggregationName, oDefaultForCreation, bPassBy){
	if(!bPassBy && (sAggregationName === "beginButton" || sAggregationName === "endButton")){
		return this._getButton(sAggregationName.substring(0, sAggregationName.indexOf("Button"))) || oDefaultForCreation || null;
	}else{
		return sap.ui.core.Control.prototype.getAggregation.apply(this, Array.prototype.slice.call(arguments, 0, 2));
	}
};

sap.m.Dialog.prototype.destroyAggregation = function(sAggregationName, bSuppressInvalidate){
	if((sAggregationName === "beginButton" || sAggregationName === "endButton") && (!sap.m.Dialog._bOneDesign && sap.ui.Device.os.ios && !this._bMessageType)){
		var sPos = sAggregationName.substring(0, sAggregationName.indexOf("Button")),
			sPos = this._firstLetterUpperCase(sPos),
			sHeaderAggregationName = "content" + sPos,
			aHeaderAggregation = this._header && this._header.getAggregation(sHeaderAggregationName);
		if(aHeaderAggregation && aHeaderAggregation[0]){
			aHeaderAggregation[0].destroy();
		}
	}else{
		return sap.ui.core.Control.prototype.destroyAggregation.apply(this, arguments);
	}
};

sap.m.Dialog.prototype.forceInvalidate = sap.ui.core.Control.prototype.invalidate;

// stop propagating the invalidate to static UIArea before dialog is opened.
// otherwise the open animation can't be seen
// dialog will be rendered directly to static ui area when the open method is called.
sap.m.Dialog.prototype.invalidate = function(oOrigin){
	if(this.isOpen()){
		this.forceInvalidate(oOrigin);
	}
};
