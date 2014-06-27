/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ToolPopup.
jQuery.sap.declare("sap.ui.ux3.ToolPopup");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ToolPopup.
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
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconHover iconHover} : sap.ui.core.URI</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI</li>
 * <li>{@link #getModal modal} : boolean (default: false)</li>
 * <li>{@link #getInverted inverted} : boolean (default: true)</li>
 * <li>{@link #getAutoClose autoClose} : boolean (default: false)</li>
 * <li>{@link #getMaxHeight maxHeight} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxWidth maxWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getOpenDuration openDuration} : int (default: 400)</li>
 * <li>{@link #getCloseDuration closeDuration} : int (default: 400)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getButtons buttons} : sap.ui.core.Control[]</li>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getInitialFocus initialFocus} : string | sap.ui.core.Control</li>
 * <li>{@link #getOpener opener} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.ToolPopup#event:open open} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ToolPopup#event:close close} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ToolPopup#event:enter enter} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ToolPopup#event:iconChanged iconChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ToolPopup#event:closed closed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ToolPopup#event:opened opened} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A pop up which the user can open from the Shell's tool pane. Generally, the starting point would be an icon.
 * For this pop up, buttons can be defined with any text; therefore, it has the same purpose and similar look like any common dialog box.
 * A ToolPopup can have any content. Depending on the application type and design, the structure of the texts and input fields can be for
 * example form-like.
 * 
 * @extends sap.ui.core.Control
 * @implements sap.ui.core.PopupInterface
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.ToolPopup
 */
sap.ui.core.Control.extend("sap.ui.ux3.ToolPopup", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.ui.core.PopupInterface"
	],
	publicMethods : [
		// methods
		"isOpen", "open", "close", "setPosition", "getEnabled", "addFocusableArea", "removeFocusableArea"
	],

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"iconHover" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"iconSelected" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"modal" : {type : "boolean", group : "Behavior", defaultValue : false},
		"inverted" : {type : "boolean", group : "Misc", defaultValue : true},
		"autoClose" : {type : "boolean", group : "Misc", defaultValue : false},
		"maxHeight" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"maxWidth" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"openDuration" : {type : "int", group : "Misc", defaultValue : 400},
		"closeDuration" : {type : "int", group : "Misc", defaultValue : 400}
	},
	defaultAggregation : "content",
	aggregations : {
    	"buttons" : {type : "sap.ui.core.Control", multiple : true, singularName : "button"}, 
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	},
	associations : {
		"initialFocus" : {type : "sap.ui.core.Control", multiple : false}, 
		"opener" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"open" : {}, 
		"close" : {allowPreventDefault : true}, 
		"enter" : {}, 
		"iconChanged" : {}, 
		"closed" : {}, 
		"opened" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.ToolPopup with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.ToolPopup.extend
 * @function
 */

sap.ui.ux3.ToolPopup.M_EVENTS = {'open':'open','close':'close','enter':'enter','iconChanged':'iconChanged','closed':'closed','opened':'opened'};


/**
 * Getter for property <code>title</code>.
 * The title displayed in the pop up window
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ui.ux3.ToolPopup#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#setTitle
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * This property is relevant for Shell-use:
 * The URL to the icon displayed in the tool area which is used to open the ToolPopup. The recommended size is 32x32px, including some transparent border. Therefore, the content will cover about 20x20px.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.ux3.ToolPopup#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#setIcon
 * @function
 */


/**
 * Getter for property <code>iconHover</code>.
 * This property is relevant for Shell-use:
 * The URL to the icon in hover state, displayed in the tool area which is used to open the pop up.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconHover</code>
 * @public
 * @name sap.ui.ux3.ToolPopup#getIconHover
 * @function
 */

/**
 * Setter for property <code>iconHover</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconHover  new value for property <code>iconHover</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#setIconHover
 * @function
 */


/**
 * Getter for property <code>iconSelected</code>.
 * This property is relevant for Shell-use:
 * The URL to the icon in selected state displayed in the tool area which is used to open the pop up. If no selected icon is given, the hover icon is used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconSelected</code>
 * @public
 * @name sap.ui.ux3.ToolPopup#getIconSelected
 * @function
 */

/**
 * Setter for property <code>iconSelected</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconSelected  new value for property <code>iconSelected</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#setIconSelected
 * @function
 */


/**
 * Getter for property <code>modal</code>.
 * Whether the popup is modal and blocks any user-interaction with controls in the background.
 * Changing this property while the ToolPopup is open is not allowed (and currently has no effect)
 * Please don't use "modal" and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose" won't be used.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>modal</code>
 * @public
 * @name sap.ui.ux3.ToolPopup#getModal
 * @function
 */

/**
 * Setter for property <code>modal</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bModal  new value for property <code>modal</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#setModal
 * @function
 */


/**
 * Getter for property <code>inverted</code>.
 * Specifies whether the ToolPopup has a dark or bright background. If set to true the background and borders will be dark. If false this stuff will be bright.
 * This property only has an effect for the GoldReflection-theme.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>inverted</code>
 * @public
 * @since 1.11.1
 * @name sap.ui.ux3.ToolPopup#getInverted
 * @function
 */

/**
 * Setter for property <code>inverted</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bInverted  new value for property <code>inverted</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.1
 * @name sap.ui.ux3.ToolPopup#setInverted
 * @function
 */


/**
 * Getter for property <code>autoClose</code>.
 * This property tells the ToolPopup to close itself if the ToolPopup looses the focus. If the user e.g. clicks outside of the ToolPopup it will be closed. Please don't use "modal" and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose" won't be used.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>autoClose</code>
 * @public
 * @since 1.13.2
 * @name sap.ui.ux3.ToolPopup#getAutoClose
 * @function
 */

/**
 * Setter for property <code>autoClose</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bAutoClose  new value for property <code>autoClose</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.2
 * @name sap.ui.ux3.ToolPopup#setAutoClose
 * @function
 */


/**
 * Getter for property <code>maxHeight</code>.
 * This property can be used to force a maximum height of the ToolPopup in pixels. If the ToolPopup content is higher than the ToolPopup, the content will be scrollable.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>maxHeight</code>
 * @public
 * @since 1.13.2
 * @name sap.ui.ux3.ToolPopup#getMaxHeight
 * @function
 */

/**
 * Setter for property <code>maxHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMaxHeight  new value for property <code>maxHeight</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.2
 * @name sap.ui.ux3.ToolPopup#setMaxHeight
 * @function
 */


/**
 * Getter for property <code>maxWidth</code>.
 * This property can be used to force a maximum width of the ToolPopup in pixels.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>maxWidth</code>
 * @public
 * @since 1.15.0
 * @name sap.ui.ux3.ToolPopup#getMaxWidth
 * @function
 */

/**
 * Setter for property <code>maxWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMaxWidth  new value for property <code>maxWidth</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.ui.ux3.ToolPopup#setMaxWidth
 * @function
 */


/**
 * Getter for property <code>openDuration</code>.
 * Time in milliseconds for the open animation.
 *
 * Default value is <code>400</code>
 *
 * @return {int} the value of property <code>openDuration</code>
 * @public
 * @since 1.19.0
 * @name sap.ui.ux3.ToolPopup#getOpenDuration
 * @function
 */

/**
 * Setter for property <code>openDuration</code>.
 *
 * Default value is <code>400</code> 
 *
 * @param {int} iOpenDuration  new value for property <code>openDuration</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @since 1.19.0
 * @name sap.ui.ux3.ToolPopup#setOpenDuration
 * @function
 */


/**
 * Getter for property <code>closeDuration</code>.
 * Time in milliseconds for the close animation.
 *
 * Default value is <code>400</code>
 *
 * @return {int} the value of property <code>closeDuration</code>
 * @public
 * @since 1.19.0
 * @name sap.ui.ux3.ToolPopup#getCloseDuration
 * @function
 */

/**
 * Setter for property <code>closeDuration</code>.
 *
 * Default value is <code>400</code> 
 *
 * @param {int} iCloseDuration  new value for property <code>closeDuration</code>
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @since 1.19.0
 * @name sap.ui.ux3.ToolPopup#setCloseDuration
 * @function
 */


/**
 * Getter for aggregation <code>buttons</code>.<br/>
 * The buttons to appear in the pop up
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.ux3.ToolPopup#getButtons
 * @function
 */


/**
 * Inserts a button into the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.core.Control}
 *          oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the button should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the button is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#insertButton
 * @function
 */

/**
 * Adds some button <code>oButton</code> 
 * to the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.core.Control}
 *            oButton the button to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#addButton
 * @function
 */

/**
 * Removes an button from the aggregation named <code>buttons</code>.
 *
 * @param {int | string | sap.ui.core.Control} vButton the button to remove or its index or id
 * @return {sap.ui.core.Control} the removed button or null
 * @public
 * @name sap.ui.ux3.ToolPopup#removeButton
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>buttons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ToolPopup#removeAllButtons
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>buttons</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oButton the button whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ToolPopup#indexOfButton
 * @function
 */
	

/**
 * Destroys all the buttons in the aggregation 
 * named <code>buttons</code>.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#destroyButtons
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content of the pop up
 * 
 * <strong>Note</strong>: this is the default aggregation for ToolPopup.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.ux3.ToolPopup#getContent
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
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.ux3.ToolPopup#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ToolPopup#removeAllContent
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
 * @name sap.ui.ux3.ToolPopup#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#destroyContent
 * @function
 */


/**
 * Defines the control that shall get the focus when the ToolPopup is opened.
 *
 * @return {string} Id of the element which is the current target of the <code>initialFocus</code> association, or null
 * @public
 * @name sap.ui.ux3.ToolPopup#getInitialFocus
 * @function
 */

/**
 * Defines the control that shall get the focus when the ToolPopup is opened.
 *
 * @param {string | sap.ui.core.Control} vInitialFocus 
 *    Id of an element which becomes the new target of this <code>initialFocus</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#setInitialFocus
 * @function
 */


	
/**
 * This property is relevant for stand-alone-use:
 * This association needs to be set if the ToolPopup should not be opened by/with the Shell. This association contains the instance of the control that assigns the ToolPopup's position.
 *
 * @return {string} Id of the element which is the current target of the <code>opener</code> association, or null
 * @public
 * @name sap.ui.ux3.ToolPopup#getOpener
 * @function
 */

/**
 * This property is relevant for stand-alone-use:
 * This association needs to be set if the ToolPopup should not be opened by/with the Shell. This association contains the instance of the control that assigns the ToolPopup's position.
 *
 * @param {string | sap.ui.core.Control} vOpener 
 *    Id of an element which becomes the new target of this <code>opener</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#setOpener
 * @function
 */


	
/**
 * Event is fired when the pop up opens 
 *
 * @name sap.ui.ux3.ToolPopup#open
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'open' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself. 
 *  
 * Event is fired when the pop up opens 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#attachOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'open' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#detachOpen
 * @function
 */

/**
 * Fire event open to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.ToolPopup#fireOpen
 * @function
 */


/**
 * Event is fired when the pop up closes because the user pressed Escape or the ToolPopup Button in the Shell. This is called before the closing animation. 
 *
 * @name sap.ui.ux3.ToolPopup#close
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'close' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself. 
 *  
 * Event is fired when the pop up closes because the user pressed Escape or the ToolPopup Button in the Shell. This is called before the closing animation. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#attachClose
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'close' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#detachClose
 * @function
 */

/**
 * Fire event close to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.ux3.ToolPopup#fireClose
 * @function
 */


/**
 * Event is fired whenever the user clicks the Enter or the Return key inside the pop up 
 *
 * @name sap.ui.ux3.ToolPopup#enter
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {object} oControlEvent.getParameters.originalEvent The onsapenter event, received by the pop up
 * @param {sap.ui.core.Control} oControlEvent.getParameters.originalSrcControl The control that was focused when the user pressed the Enter key (may be null)
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'enter' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself. 
 *  
 * Event is fired whenever the user clicks the Enter or the Return key inside the pop up 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#attachEnter
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'enter' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#detachEnter
 * @function
 */

/**
 * Fire event enter to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'originalEvent' of type <code>object</code> The onsapenter event, received by the pop up</li>
 * <li>'originalSrcControl' of type <code>sap.ui.core.Control</code> The control that was focused when the user pressed the Enter key (may be null)</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.ToolPopup#fireEnter
 * @function
 */


/**
 * Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup).
 * To be used by other controls which want to update the icon in their UI. 
 *
 * @name sap.ui.ux3.ToolPopup#iconChanged
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'iconChanged' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself. 
 *  
 * Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup).
 * To be used by other controls which want to update the icon in their UI. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#attachIconChanged
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'iconChanged' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#detachIconChanged
 * @function
 */

/**
 * Fire event iconChanged to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.ToolPopup#fireIconChanged
 * @function
 */


/**
 * This event is fired after the ToolPopup has finished its closing animation. It is called for EVERY close, regardless of whether the user has triggered the close or whether the ToolPopup was closed via API call. 
 *
 * @name sap.ui.ux3.ToolPopup#closed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'closed' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself. 
 *  
 * This event is fired after the ToolPopup has finished its closing animation. It is called for EVERY close, regardless of whether the user has triggered the close or whether the ToolPopup was closed via API call. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#attachClosed
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'closed' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ToolPopup#detachClosed
 * @function
 */

/**
 * Fire event closed to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.ToolPopup#fireClosed
 * @function
 */


/**
 * Event is being fired after the ToolPopup has been opened. 
 *
 * @name sap.ui.ux3.ToolPopup#opened
 * @event
 * @since 1.19.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'opened' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself. 
 *  
 * Event is being fired after the ToolPopup has been opened. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ToolPopup</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @since 1.19.0
 * @name sap.ui.ux3.ToolPopup#attachOpened
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'opened' event of this <code>sap.ui.ux3.ToolPopup</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @public
 * @since 1.19.0
 * @name sap.ui.ux3.ToolPopup#detachOpened
 * @function
 */

/**
 * Fire event opened to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ToolPopup} <code>this</code> to allow method chaining
 * @protected
 * @since 1.19.0
 * @name sap.ui.ux3.ToolPopup#fireOpened
 * @function
 */


/**
 * Returns whether the pop up is currently open
 *
 * @name sap.ui.ux3.ToolPopup.prototype.isOpen
 * @function

 * @type boolean
 * @public
 */


/**
 * Opens the pop up.
 *
 * @name sap.ui.ux3.ToolPopup.prototype.open
 * @function
 * @param {string} 
 *         sMy
 *         The ToolPopup's content reference position for docking. This value is optional if the position of the ToolPopup is set via 'setPosition'.
 * @param {string} 
 *         sAt
 *         The "of" element's reference point for docking to. This value is optional if the position of the ToolPopup is set via 'setPosition'.

 * @type void
 * @public
 */


/**
 * Closes the pop up. Can be called by the Shell when the pop up's button is clicked again; or by the application
 * when the interaction in the pop up has been completed or canceled.
 *
 * @name sap.ui.ux3.ToolPopup.prototype.close
 * @function
 * @param {boolean} 
 *         bPreventRestoreFocus
 *         If set, the focus is NOT restored to the element that had the focus before the ToolPopup was opened. This makes sense when the ToolPopup is closed programmatically from a different area of the application (outside the ToolPopup) and the focus should not move aways from that place.

 * @type void
 * @public
 */


/**
 * Sets the position of the pop up, the same parameters as for sap.ui.core.Popup can be used.
 *
 * @name sap.ui.ux3.ToolPopup.prototype.setPosition
 * @function

 * @type void
 * @public
 */


/**
 * Whether the ToolPopup is currently enabled or not.
 * 
 * Applications can't control the enabled state via a property. A ToolPopup is implicitly enabled while it is OPENING or OPEN. Descendant controls that honor the enabled state of their ancestors will appear disabled after the ToolPopup is closed.
 *
 * @name sap.ui.ux3.ToolPopup.prototype.getEnabled
 * @function

 * @type boolean
 * @public
 * @since 1.13.1
 */


/**
 * Add an identified area to the parent Popup as additional focusable area that can be used for an "autoclose" ToolPopup. This added area can be focused and prevent the ToolPopup from closing if the added area is outside of the ToolPopup.
 *
 * @name sap.ui.ux3.ToolPopup.prototype.addFocusableArea
 * @function
 * @param {string} 
 *         sId
 *         ID of a control or DOM-node

 * @type void
 * @public
 * @since 1.19.0
 */


/**
 * Removes the control's or DOM-node's id from focusable areas.
 *
 * @name sap.ui.ux3.ToolPopup.prototype.removeFocusableArea
 * @function
 * @param {string} 
 *         sId
 *         ID of a control or DOM-node

 * @type void
 * @public
 * @since 1.19.0
 */


// Start of sap\ui\ux3\ToolPopup.js
jQuery.sap.require("sap.ui.core.Popup");
jQuery.sap.require("sap.ui.core.theming.Parameters");
jQuery.sap.require("sap.ui.core.IconPool");

// regex rules for arrows corresponding to the given 'my' and 'at' parameters
// these regexes also consider the new offset style of jQueryUI-position from version 1.10.x
// from version 1.10.x the offset is used right within the 'my' parameter
sap.ui.ux3.ToolPopup.ARROW_LEFT =  new RegExp(/my:(left|begin)([-+]\d*\%?)?\|[a-z]+([-+]\d*\%?)? at:(right|end)\|[a-z]+/);
sap.ui.ux3.ToolPopup.ARROW_RIGHT = new RegExp(/my:(right|end)([-+]\d*\%?)?\|[a-z]+([-+]\d*\%?)? at:(left|begin)\|[a-z]+/);
sap.ui.ux3.ToolPopup.ARROW_UP =    new RegExp(/my:[a-z]+([-+]\d*\%?)?\|top([-+]\d*\%?)? at:[a-z]+\|bottom/);
sap.ui.ux3.ToolPopup.ARROW_DOWN =  new RegExp(/my:[a-z]+([-+]\d*\%?)?\|bottom([-+]\d*\%?)? at:[a-z]+\|top/);

(function() {
sap.ui.ux3.ToolPopup.prototype.init = function() {
	this.oPopup = null;
	this._bPositionSet = false;

	this._bFocusSet = false;
	this._proxyOpened = jQuery.proxy(fnPopupOpened, this);
	this._proxyClosed = jQuery.proxy(fnOnClosed, this);
	this._proxyFixSize = jQuery.proxy(fnFixSize, this);
	
	fnSetArrowDimensions(this);
};
sap.ui.ux3.ToolPopup.prototype.exit = function() {
	if (this.oPopup) {
		this.oPopup.detachOpened(this._proxyOpened);
		this.oPopup.detachClosed(this._proxyClosed);
		this.oPopup.destroy();
		delete this.oPopup;
	}
	delete this._bPositionSet;

	delete this._bFocusSet;
	delete this._bPreventRestoreFocus;
	delete this._proxyOpened;
	delete this._proxyClosed;

	if (this._bBoundOnResize){
		jQuery(window).unbind("resize", this._proxyFixSize);
	}

	delete this._bRTL;
	delete this._sArrowDir;
	delete this._oArrowIcon;
	delete this._bThemeInverted;
	
	delete this._sInitialFocusId;
	delete this._sFirstFocusableId;
	delete this._sLastFocusableId;
};

/**
 * Checks if the ToolPopup already has a focused element. If not it's checked whether
 * the fake-element should be used or if there is an element that could be focused instead
 */
var fnSetInitialFocus = function(oThis){
	var sId = oThis.getId();
	var sTempId = "";
	var sFirstFocusId = sId + "-firstFocusable";
	var sLastFocusId = sId + "-lastFocusable";
	
	var oElement = jQuery.sap.byId(sFirstFocusId).get(0);
	var aFocusables = jQuery(":sapFocusable", oThis.$()).get();
	
	// if there is an initial focus it was already set to the Popup onBeforeRendering
	if (!oThis._bFocusSet){
		// search the first focusable element
		if(aFocusables.length > 0) {
			for (var i = 0; i < aFocusables.length; i++){
				sTempId = aFocusables[i].id;
 
				if (sTempId !== sFirstFocusId && sTempId !== sLastFocusId) {
					oElement = aFocusables[i];
					break;
				}
			}
		}

		// If focusables are part of a control, focus the controls instead
		var oFocusControl = jQuery(oElement).control();
		if (oFocusControl[0]) {
			var oFocusDomRef = oFocusControl[0].getFocusDomRef();
			oElement = oFocusDomRef ? oFocusDomRef : oElement;
		}
		
		jQuery.sap.focus(oElement);
		oThis._sInitialFocusId = oElement.id;
	} else {
		oThis._sInitialFocusId = oThis.oPopup._sInitialFocusId;
	}
	
	// initiate the first and last focusable element in content
	if (!oThis._sLastFocusableId || !oThis._sFirstFocusableId) {
		oThis._sLastFocusableId = sFirstFocusId;
		oThis._sFirstFocusableId = sLastFocusId;
		
		if (aFocusables.length > 2) {
			// using second array content since first focusable item is the fake element
			oThis._sFirstFocusableId = aFocusables[1].id;
			// using the second to last element in array since last one is the fake element
			oThis._sLastFocusableId = aFocusables[aFocusables.length -2].id;
		}
		
	} 
};

sap.ui.ux3.ToolPopup.prototype.onfocusin = function(oEvent){
	var $NewFocus = jQuery();
	var sId = this.getId();
	var sFirstFocusId = sId + "-firstFocusable";
	var sLastFocusId = sId + "-lastFocusable";
	
	if (oEvent.target.id === sFirstFocusId && oEvent.target.id !== this._sLastFocusableId) {
		$NewFocus = jQuery.sap.byId(this._sLastFocusableId);
	} else if (oEvent.target.id === sLastFocusId && oEvent.target.id !== this._sFirstFocusableId) {
		$NewFocus = jQuery.sap.byId(this._sFirstFocusableId);
	}
	
	if ($NewFocus.length) {
		// if focus has to be corrected
		$NewFocus.focus();
	}
};

/**
 * This function fixes the height of the ToolPopup if the content is too large.
 * So the height will be set to the possible maximum and a scrollbar is provided.
 * Additionally the width of the ToolPopup is fixed as well since the scrollbar reduces
 * the possible space for the content.
 */
var fnFixSize = function(){
	var $This = this.$();
	var iValue = 0;
	
	var sMaxHeight = this.getMaxHeight();
	var iMaxHeight = sMaxHeight ? parseInt(sMaxHeight) : 0;
	
	/*
	 * Fix the height
	 */
	// get all paddings
	var sPaddingTop = $This.css("padding-top");
	var iPaddingTop = parseInt(sPaddingTop, 10);
	var sPaddingBottom = $This.css("padding-bottom");
	var iPaddingBottom = parseInt(sPaddingBottom, 10);
	
	// get all border widths
	var sBorderTop = $This.css("border-top-width");
	var iBorderTop = parseInt(sBorderTop, 10);
	var sBorderBottom = $This.css("border-bottom-width");
	var iBorderBottom = parseInt(sBorderBottom, 10);
	
	var iPaddings = iPaddingTop + iPaddingBottom + iBorderTop + iBorderBottom;
	
	// determine the corresponding scrollTop to calculate the proper bottom end of the ToolPopup
	var iScrollTop = jQuery(document).scrollTop();
	var oThisRect = $This.rect();
	var iBottomEnd = oThisRect.top - iScrollTop + $This.outerHeight(true);
	
	// only use this mechanism when there is NO maxHeight set
	var iWinHeight = jQuery(window).height();
	var bTooHigh = (iBottomEnd > iWinHeight) && (iMaxHeight === 0);
	
	// check if an offset forces the ToolPopup out of the window
	// and below the opener
	if (bTooHigh) {
		var $Opener = jQuery.sap.byId(this.getOpener());
		var oOpenerRect = $Opener.rect();
		var iOpenerBottom = oOpenerRect.top - iScrollTop + $Opener.outerHeight(true);
		
		// if bottom of the ToolPopup is below the opener and there is a possible offset
		var aOffset = this.oPopup._getPositionOffset();
		if (iBottomEnd > iOpenerBottom && aOffset.length > 0) {
			// check if the offset is responsible for pushing the ToolPopup below the opener
			// and therefore out of the window
			var iYOffset = Math.abs(parseInt(aOffset[1], 10));

			// this check inverts the variable to prevent any resize of the ToolPopup since it
			// is pushed out of the window because of the offset
			if (iBottomEnd - iYOffset > iWinHeight) {
				bTooHigh = false;
				var sMessage = "Offset of " + iYOffset +" pushes ToolPopup out of the window";
				jQuery.sap.log.warning(sMessage, "", "sap.ui.ux3.ToolPopup");
			}
		}
	}
		
	if (!this._bInitialFix || this._bInitialFix && bTooHigh) {
		delete this._bInitialFix;
		$This.toggleClass("sapUiUx3TPLargeContent", true);
	}
	if (bTooHigh) {
		iMaxHeight = $This.outerHeight(true);
		$This.toggleClass("sapUiUx3TPLargeContent", false);
	}
	
	if (iMaxHeight > 0) {
		$This.css("max-height", iMaxHeight + "px");
	
		var $Title = this.$("title");
		var $TitleSep = this.$("title-separator");
		
		var $Buttons = this.$("buttons");
		var $ButtonsSep = this.$("buttons-separator");
		
		// subtract all paddings and border-widths
		iMaxHeight -= iPaddings;
		
		// subtracting all corresponding values from top to down
		iMaxHeight -= $Title.outerHeight(true);
		iMaxHeight -= $TitleSep.outerHeight(true); // including margin
		
		// height of content needn't to be subtracted
		
		iMaxHeight -= $ButtonsSep.outerHeight(true); // including margin
		iMaxHeight -= $Buttons.length > 0 ? $Buttons.outerHeight(true) : 0;
		
		iValue = iMaxHeight;
	}
	
	if (bTooHigh || (iMaxHeight > 0)){
		// if the height has to be corrected
		iValue = parseInt(iValue, 10);
		
		var $Content = this.$("content");
		$Content.css("max-height", iValue + "px");
		
		$Content.toggleClass("sapUiUx3TPLargeContent", true);
	}
	
	/*
	 * Fix the width (if necessary)
	 */
	var sMaxWidth = this.getMaxWidth();
	if(sMaxWidth) {
		var iMaxWidth = parseInt(sMaxWidth, 10);
		
		var sBorderLeft = $This.css("border-left-width");
		var iBorderLeft = parseInt(sBorderLeft);
		var sBorderRight = $This.css("border-right-width");
		var iBorderRight = parseInt(sBorderRight);
		
		var sPaddingLeft = $This.css("padding-left");
		var iPaddingLeft = parseInt(sPaddingLeft);
		var sPaddingRight = $This.css("padding-right");
		var iPaddingRight = parseInt(sPaddingRight);
		
		iMaxWidth -= iBorderLeft + iPaddingLeft + iPaddingRight + iBorderRight;
		$This.css("max-width", iMaxWidth + "px");
	} else {
		$This.css("max-width", "");
	}

	fnSetArrow(this);
};

/**
 * Function is called via 'jQuery.proxy()' when the ToolPopup has been opened
 * including the fade-in-animation of the Popup
 */
var fnPopupOpened = function(){
	fnSetInitialFocus(this);
	this._bInitialFix = true; // will be deleted in _proxyFixSize
	this._proxyFixSize();
	
	// forward the Popup's opened event accordingly
	// was added in "1.19.0" as a fix for a CSN and was downported to "1.18.2" and "1.16.6"
	this.fireOpened();
};

sap.ui.ux3.ToolPopup.prototype.isOpen = function() {
	if (this.oPopup && this.oPopup.isOpen()) {
		return true;
	}
	return false;
};

sap.ui.ux3.ToolPopup.prototype.willBeClosed = function() {
	var eState = this.oPopup && this.oPopup.getOpenState();
	return eState !== sap.ui.core.OpenState.OPENING && eState !== sap.ui.core.OpenState.OPEN;
};

/**
 * This opens the ToolPopup. It is checked which control wants to open the ToolPopup. The Shell was previously set as parent so the
 * corresponding parent element is used to set the correct position of the ToolPopup.
 * If another control (i.e. a button) opens the ToolPopup, the control must be previously set as 'opener' via 'setOpener' to the
 * ToolPopup. Corresponding to this opener the position of the ToolPopup will be set.
 * It's also possible to set the position above, below or left from the opener. This can be done via the possible parameters 'my' and 'at'.
 * These parameters refers to work the same way as they do of sap.ui.core.Popup.open.
 *
 * @param {sap.ui.core.Popup.Dock} [my=sap.ui.core.Popup.Dock.CenterCenter] the ToolPopup's content reference position for docking
 * @param {sap.ui.core.Popup.Dock} [at=sap.ui.core.Popup.Dock.CenterCenter] the "of" element's reference point for docking to
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.open = function(my, at) {
	this._my = my;
	this._at = at;
	this._sArrowDir = fnGetArrowDirection(this);
	var $OpenerRef = null;
	this.sOffset = "";
	fnUpdateThemeInverted(this);

	// if the popup position has not been (re-)initialized since the last time this was opened, try to apply the default position
	if (!this._bPositionSet) {
		var iOffsetX = 0;
		var iOffsetY = 0;

		// any further validation of the values is done within the Popup
		if (!this._my){
			this._my = sap.ui.core.Popup.Dock.BeginTop;
		}
		if (!this._at){
			this._at = sap.ui.core.Popup.Dock.EndTop;
		}

		$OpenerRef = jQuery.sap.domById(this.getOpener());
		if ($OpenerRef){
			switch (this._sArrowDir) {
				case "Up":
					iOffsetX = 0;
					iOffsetY = this.iArrowWidth;
					break;

				case "Down":
					iOffsetX = 0;
					iOffsetY = -this.iArrowWidth;
					break;

				case "Right":
					iOffsetX = -this.iArrowWidth;
					break;

				default:
				case "Left":
					iOffsetX = this.iArrowWidth;
					break;
			}

			iOffsetX = parseInt( iOffsetX, 10 );
			iOffsetY = parseInt( iOffsetY, 10 );
			this.sOffset = "" + iOffsetX + " " + iOffsetY;
			// my, at, of, offset, collision /*none*/
			this.setPosition(this._my, this._at, $OpenerRef, this.sOffset, "none");
		} else {
			this.setPosition(sap.ui.core.Popup.Dock.BeginTop, sap.ui.core.Popup.Dock.BeginTop, window, "0 0", "fit");
			jQuery.sap.log.warning("No opener set. Using a default position for Popup", "", "sap.ui.ux3.ToolPopup");
		}
		/* value is set in 'setPosition'. This value shows if the position was previously set manually =>
		 * in this case it was definitely not set manually
		 */
		this._bPositionSet = false;
	}
	// create popup if required
	this._ensurePopup();
	
	var bAutoClose = this.getAutoClose();
	var bModal = this.getModal();
	if (bAutoClose && bModal) {
		jQuery.sap.log.warning("A modal & autoclose ToolPopup will not work properly. Therefore 'autoclose' will be deactived!");
		bAutoClose = false;
	}
	this.oPopup.setAutoClose(bAutoClose);
	this.oPopup.setModal(bModal);

	// Save current focused element to restore the focus after closing the dialog
	this._oPreviousFocus = sap.ui.core.Popup.getCurrentFocusInfo();
	// open popup
	this.fireOpen();

	// the opener is needed for the intelligent arrow positioning
	fnCheckOpener(this);
	
	// function(iDuration, my, at, of, offset, collision /*empty to avoid any override*/, followOf /*true*/)
	this.oPopup.open(this.getOpenDuration(), this._my, this._at, $OpenerRef, this.sOffset, "", true);
	fnSetArrow(this);
	
	return this;
};

/**
 * Checks if an opener was set. If not this functions tries to get the opener from the Popup. 
 */
var fnCheckOpener = function(oThis) {
	if (!oThis.getOpener()) {
		var sId = "";
		if (oThis.oPopup) {
			if (oThis.oPopup._oPosition.of instanceof sap.ui.core.Element) {
				sId = oThis.oPopup._oPosition.of.getId();
			} else {
				if (oThis.oPopup._oPosition.of.length > 0) {
					sId = oThis.oPopup._oPosition.of[0].id;
				} else {
					sId = oThis.oPopup._oPosition.of.id;
				}
			}
		}
		
		if (sId !== "") {
			oThis.setAssociation("opener", sId, true);
		} else {
			jQuery.sap.log.error("Neither an opener was set properly nor a corresponding one can be distinguished", "", "sap.ui.ux3.ToolPopup");
		}
	}
};

var fnSetArrowDimensions = function(oThis){
	var sParam = "sapUiUx3ToolPopupArrowWidth";
	oThis.sArrowWidth = sap.ui.core.theming.Parameters.get(sParam);
	oThis.iArrowWidth = parseInt(oThis.sArrowWidth, 10);
	
	sParam = "sapUiUx3ToolPopupArrowHeight";
	oThis.sArrowHeight = sap.ui.core.theming.Parameters.get(sParam);
	oThis.iArrowHeight = parseInt(oThis.sArrowHeight, 10);
	
	sParam = "sapUiUx3ToolPopupArrowRightMarginCorrection";
	oThis.sArrowPadding = sap.ui.core.theming.Parameters.get(sParam);
	oThis.iArrowPadding = parseInt(oThis.sArrowPadding, 10);

	sParam = "sapUiUx3ToolPopupArrowRightMarginCorrectionInverted";
	oThis.sArrowPaddingInverted = sap.ui.core.theming.Parameters.get(sParam);
	oThis.iArrowPaddingInverted = parseInt(oThis.sArrowPaddingInverted, 10);
};

/**
 * Calculates the desired arrow direction related to the set docking. This only works when "my" and "at" both use the jQuery-based docking
 * which means they are strings like "begin top".
 *
 * @private
 */
var fnGetArrowDirection = function(oThis) {

	// do not mirror the arrow direction here in RTL mode, because otherwise the offset is calculated wrong
	// (Because the offset mirroring happens inside popup)
	// the arrow is later mirrored at the output...

	// this is the default case if no match was found
	var sDirection = "Left";

	// if 'my' is not set check if it was previously set via 'setPosition'
	var my = oThis._my;
	var at = oThis._at;
	if (!my && oThis.oPopup){
		my = oThis.oPopup._oPosition.my;
	}
	if (!at && oThis.oPopup){
		at = oThis.oPopup._oPosition.at;
	}
	
	oThis._bHorizontalArrow = false;

	if (my && at) {
		var aMy = my.split(" ");
		var aAt = at.split(" ");
		// create a rule like "my:top|left at:left|top"
		var sRule = "my:" + aMy[0] + "|" + aMy[1];
		sRule += " at:" + aAt[0] + "|" + aAt[1];
		
		if (sap.ui.ux3.ToolPopup.ARROW_LEFT.exec(sRule)) {
			oThis._bHorizontalArrow = true;
			sDirection = "Left";
		} else if (sap.ui.ux3.ToolPopup.ARROW_RIGHT.exec(sRule)) {
			oThis._bHorizontalArrow = true;
			sDirection = "Right";
		} else if (sap.ui.ux3.ToolPopup.ARROW_UP.exec(sRule)) {
			sDirection = "Up";
		} else if (sap.ui.ux3.ToolPopup.ARROW_DOWN.exec(sRule)) {
			sDirection = "Down";
		}

		if (oThis.getDomRef() && oThis.isOpen()) {
			var $This = oThis.$();
			var oPopRect = $This.rect();
			var $Opener = jQuery.sap.byId(oThis.getOpener());
			var oOpenerRect = $Opener.rect();
			
			if (oOpenerRect) {
				// check if the ToolPopup was positioned at another side relative to the opener due to any collision.
				if (oThis._bHorizontalArrow) {
					// left/right arrow
					var iPopRight = oPopRect.left + $This.outerWidth(true) + oThis.iArrowWidth;
					var iOpenerRight = oOpenerRect.left + $Opener.outerWidth(true);
					
					if(iPopRight <= iOpenerRight) {
						sDirection = "Right";
						
					} else {
						sDirection = "Left";
					}
				} else {
				// up/down arrow
					var iPopBottom = oPopRect.top + $This.outerHeight(true) + oThis.iArrowWidth;
					var iOpenerBottom = oOpenerRect.top + $Opener.outerHeight(true);
					
					if(iPopBottom <= iOpenerBottom){
						sDirection = "Down";
					} else {
						sDirection = "Up";
					}
				}
			}
		}
	}

	return sDirection;
};

/**
 * Calculates the desired arrow position related to the set docking and to the size of the popup. 
 * This only works when "my" and "at" both use the jQuery-based docking which means they are strings like "begin top".
 * If there is no opener set properly an error is logged into the console and there will be no arrow for the ToolPopup.
 *
 * @private
 */
var fnSetArrow = function(oThis){
	if (!oThis.getDomRef()){
		return;
	}

	var sKey = "";
	var iVal = 0;
	var iZero = 0; // this is the 0 of the  relative position between ToolPopup and Opener
	var iHalfArrow = oThis.iArrowHeight / 2;

	oThis._sArrowDir = fnGetArrowDirection(oThis);
	var sArrowDir = oThis._sArrowDir;
	if(oThis._bRTL){
		// in RTL mode arrow must be mirrowed here
		if (oThis._sArrowDir === "Right") {
			sArrowDir = "Left";
		} else if (oThis._sArrowDir === "Left") {
			sArrowDir = "Right";
		}
	}

	var oPopRect = oThis.$().rect();
	var oOpenerRect = jQuery.sap.byId(oThis.getOpener()).rect();
	if (!oOpenerRect) {
		// if a proper opener isn't available
		jQuery.sap.log.warning("Opener wasn't set properly. Therefore arrow will be at a default position", "", "sap.ui.ux3.ToolPopup");
	}
	var $Arrow = oThis.$("arrow");

	// get the corresponding my-property
	if (!oThis._my && oThis.oPopup){
		oThis._my = oThis.oPopup._oPosition.my;
	}

	// calculate the horizontal/vertical value of the arrow
	if (oThis._bHorizontalArrow) {
		// left or right arrow
		sKey = "top";

		if (oOpenerRect) {
			iZero = oOpenerRect.top - oPopRect.top;

			iVal = Math.round(iZero + oOpenerRect.height / 2);

			// if the position would exceed the ToolPopup's height
			iVal = iVal + iHalfArrow > oPopRect.height ? iVal - oThis.iArrowHeight : iVal;
		}
	} else {		
		// up/down arrow
		sKey = "left";

		if (oOpenerRect) {
			iZero = oOpenerRect.left - oPopRect.left;

			iVal = Math.round(iZero + oOpenerRect.width / 2);
			// if the position would exceed the ToolPopup's width
			iVal = iVal + iHalfArrow > oPopRect.width ? iVal - oThis.iArrowHeight : iVal;
		}
	}

	if (oOpenerRect) {
		iVal -= iHalfArrow;
	} else {
		iVal =  oThis.iArrowHeight;
	}


	// set the corresponding classes
	var sClassAttr = "";
	if ($Arrow.hasClass("sapUiUx3TPNewArrow")){
		sClassAttr = "sapUiUx3TPNewArrow sapUiUx3TPNewArrow";
	} else {
		sClassAttr = oThis.isInverted() ? "sapUiUx3TPArrow sapUiTPInverted sapUiUx3TPArrow" : "sapUiUx3TPArrow sapUiUx3TPArrow";
	}
	$Arrow.attr("class", sClassAttr + sArrowDir);

	if (sArrowDir === "Right" ){
		var iWidth = oPopRect.width;
		// if the ToolPopup is invertable and it is being inverted use another
		// value since in such a case the padding is different for the arrow
		if (oThis.isInverted()) {
			iWidth += oThis.iArrowPaddingInverted;
		} else {
			iWidth += oThis.iArrowPadding;
		}
		
		oThis._bRTL = sap.ui.getCore().getConfiguration().getRTL();
		if (oThis._bRTL) {
			$Arrow.css("right", iWidth + "px");
		} else {
			$Arrow.css("left", iWidth + "px");
		}
	} else {
		$Arrow.css({
			"left" : "",
			"right" : ""
		});
	}

	iVal = parseInt(iVal, 10);
	iVal = iVal < 0 ? 0 : iVal;
	if (iVal > 0) {
		iVal -= 2; // due to some padding
		// only correct corresponding position if there is something to correct
		// otherwise the default position is used (via styling)
		$Arrow.css(sKey, iVal + "px");
	}
};
/**
 * Handles the sapescape event, triggers closing of the ToolPopup.
 *
 * @private
 */
sap.ui.ux3.ToolPopup.prototype.onsapescape = function() {
	if (this.fireClose()) {
		this.close();
	}
};

/**
 * This function is called when the Popup has been closed. No matter if through the "close"-function
 * or through the autoClose-mechanism.
 * Additionally it is necessary to restore the focus as if the ToolPopup was closed via "close()".
 * If the corresponding suppress-parameter was given to "close" no focus will be restored.
 */
var fnOnClosed = function(oEvent) {
	if (!this._bPreventRestoreFocus) {
		sap.ui.core.Popup.applyFocusInfo(this._oPreviousFocus);
	}
	this.fireClosed();
};

sap.ui.ux3.ToolPopup.prototype.close = function(bPreventRestoreFocus) {
	if (this.oPopup && this.oPopup.isOpen()) {
		if (this._bBoundOnResize){
			jQuery(window).unbind("resize", this._proxyFixSize);
			delete this._bBoundOnResize;
		}

		this.oPopup.close(this.getCloseDuration());
		this._bPreventRestoreFocus = bPreventRestoreFocus;
	}
	return this;
};

/**
 * Whether the ToolPopup is currently enabled or not.
 * 
 * Applications can't control the enabled state via a property. A ToolPopup is implicitly 
 * enabled depending on its <code>openStatey</code>. Descendant controls that honor the 
 * enabled state of their ancestors will appear disabled after the ToolPopup is closed.
 * 
 * @experimental Whether a dialog is regarded as "enabled" during the state transitions 
 * (OPENING, CLOSING) is not fully decided. Currently, it is enabled during the OPENING phase 
 * and disabled during the CLOSING phase. The only potential change would be to treat the 
 * OPENING phase as disabled as well. Applications should be prepared to receive events from
 * "enabled" controls after they called open() on the dialog until close() is called on it.
 * If the mentioned potential change should happen, the dialog will become enabled only 
 * after the transition to OPEN. Events from "enabled" children then can still only arrive 
 * between open() and close(), so applications that obey the previous rule should continue 
 * to work. Only end users or code that explicitly triggers pseudo user events would notice
 * a difference. <br>
 * A second aspect that might change is the visual behavior of the content: during the CLOSING 
 * phase it 'looks' enabled but in fact it is already disabled. This avoids unnecessary redraws 
 * for content that becomes hidden soon. Should this show to be confusing for end users, it might 
 * be changed.
 * 
 * @since: 1.13.1
 * @return {boolean} whether the ToolPopup is currently enabled or not.
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.getEnabled = function() {
	var eState = this.oPopup ? this.oPopup.getOpenState() : sap.ui.core.OpenState.CLOSED; // assuming that a ToolPopup without a Popup can’t be open

	//TODO the check for state OPENING is a compromise. Without that, the content of the dialog will render 
	// in disabled state but will be enabled. As an alternative, the dialog could render again after OPEN is reached
	// and after switching to CLOSING (to properly reflect the changed enabled state in the descendants) 
	return eState === sap.ui.core.OpenState.OPENING || eState === sap.ui.core.OpenState.OPEN;
};

sap.ui.ux3.ToolPopup.prototype.onsapenter = function(oEvent) {
	this.fireEnter({originalEvent:oEvent,originalSrcControl:oEvent.srcControl});
};

sap.ui.ux3.ToolPopup.prototype.onBeforeRendering = function() {
	var sId = this.getInitialFocus();
	if (sId) {
		this._bFocusSet = true;
		this.oPopup.setInitialFocusId(sId);
	} else {
		this._bFocusSet = false;
	}
	
	this._bRTL = sap.ui.getCore().getConfiguration().getRTL();
};

sap.ui.ux3.ToolPopup.prototype._ensurePopup = function() {
	if (!this.oPopup) {
		this.oPopup = new sap.ui.core.Popup(this, false, true, false);
		this.oPopup.attachOpened(this._proxyOpened);
		this.oPopup.attachClosed(this._proxyClosed);

		var oThis = this;
		this.oPopup._applyPosition = function(){
			sap.ui.core.Popup.prototype._applyPosition.apply(oThis.oPopup, arguments);

			var of = oThis.oPopup._oLastPosition.of;
			if (!of) {
				// In case setPosition is called from the outside and the opener has
				// been removed, this leads to closing the ToolPopup instead of causing
				// an error
				oThis.oPopup.close();
			} else {
				var $of = jQuery.sap.byId(of.id);
				// only after an open popup the corresponding arrow can be determined
				// if the position was set manually
				if (oThis._bPositionSet) {
					// shell stuff should still use the left arrow
					if (!$of.hasClass("sapUiUx3ShellTool")) {
						oThis._my = oThis.oPopup._oLastPosition.my;
						oThis._at = oThis.oPopup._oLastPosition.at;
					}
				}
				fnSetArrow(oThis);
			}
		};
	}
	return this.oPopup;
};

sap.ui.ux3.ToolPopup.prototype.setPosition = function() {
	this._ensurePopup();
	this.oPopup.setPosition.apply(this.oPopup, arguments);
	this._bPositionSet = true;
	
	fnCheckOpener(this);
	
	return this;
};

var fnRenderContent = function(oThis) {
	var oContentDomRef = oThis.getDomRef("content");
	oContentDomRef.innerHTML = "";
	
	var aContent = oThis.getContent();
	var rm = sap.ui.getCore().createRenderManager();
	
	for (var i = 0; i < aContent.length; i++) {
		rm.renderControl(aContent[i]);
	}
	
	rm.flush(oContentDomRef, true);
	rm.destroy();
	
	// this fixes the height of the ToolPopup if the height exceeds the window height
	oThis._proxyFixSize();
};
var fnRenderButtons = function(oThis) {
	var oButtons = oThis.getDomRef("buttons");
	var oSeparator = oThis.getDomRef("buttons-separator");
	var aButtons = oThis.getButtons();
	
	if (aButtons.length === 0) {
		jQuery(oButtons).addClass("sapUiUx3TPButtonRowHidden");
		jQuery(oSeparator).addClass("sapUiUx3TPButtonRowHidden");
	} else {
		jQuery(oButtons).removeClass("sapUiUx3TPButtonRowHidden");
		jQuery(oSeparator).removeClass("sapUiUx3TPButtonRowHidden");
		oButtons.innerHTML = "";
		var rm = sap.ui.getCore().createRenderManager();
		
		for (var i = 0; i < aButtons.length; i++) {
			rm.renderControl(aButtons[i]);
		}
		
		rm.flush(oButtons, true);
		rm.destroy();
		
		// this fixes the height of the ToolPopup if the height exceeds the window height
		oThis._proxyFixSize();
	}
};

sap.ui.ux3.ToolPopup.prototype.addContent = function(oContent) {
	this.addAggregation("content", oContent, true);
	
	if (this.isOpen()) {
		fnRenderContent(this);
		fnSetArrow(this);
	}
	
	return this;
};
sap.ui.ux3.ToolPopup.prototype.insertContent = function(oContent, index) {
	this.insertAggregation("content", oContent, index, true);
	
	if (this.isOpen()) {
		fnRenderContent(this);
		fnSetArrow(this);
	}
	
	return this;
};
sap.ui.ux3.ToolPopup.prototype.removeContent = function(oContent) {
	this.removeAggregation("content", oContent, true);
	
	if (this.isOpen()) {
		fnRenderContent(this);
		fnSetArrow(this);
	}
	
	return this;
};
sap.ui.ux3.ToolPopup.prototype.addButton = function(oButton) {
	this.addAggregation("buttons", oButton, true);
	
	if (this.isOpen()) {
		fnRenderButtons(this);
		fnSetArrow(this);
	}
	
	return this;
};
sap.ui.ux3.ToolPopup.prototype.insertButton = function(oButton, index) {
	this.insertAggregation("buttons", oButton, index, true);
	
	if (this.isOpen()) {
		fnRenderButtons(this);
		fnSetArrow(this);
	}
	
	return this;
};
sap.ui.ux3.ToolPopup.prototype.removeButton = function(oButton) {
	this.removeAggregation("button", oButton, true);
	
	if (this.isOpen()) {
		fnRenderButtons(this);
		fnSetArrow(this);
	}
	
	return this;
};

/**
 * This updates the instance's parameter if the ToolPopup is inverted per default
 *
 * @private
 */
var fnUpdateThemeInverted = function(oThis) {
	var sParam = "sapUiUx3ToolPopupInverted";
	
	sParam = sap.ui.core.theming.Parameters.get(sParam);
	oThis._bThemeInverted = sParam === "true";
};

/**
 * @private
 */
sap.ui.ux3.ToolPopup.prototype.onThemeChanged = function() {
	fnUpdateThemeInverted(this);
};

/**
 * This checks if the ToolPopup is inverted. This depends on the parameter
 * 'inverted' and the LESS-parameter 'sapUiUx3ToolPopupInverted' in the current
 * theme. 
 * 
 * @return {sap.ui.core.boolean} whether the ToolPopup is inverted
 * @private
 */
sap.ui.ux3.ToolPopup.prototype.isInverted = function() {
	fnUpdateThemeInverted(this);
	return this.getInverted() && this._bThemeInverted;
};

/**
 * This is just a forward to the Popup's function (sap.ui.core.Popup.setAutoCloseAreas)
 * with the same functionality.
 * 
 * @public
 * @since: 1.19.0
 */
sap.ui.ux3.ToolPopup.prototype.setAutoCloseAreas = function(aAutoCloseAreas) {
	this._ensurePopup();
	return this.oPopup.setAutoCloseAreas(aAutoCloseAreas);
};

/**
 * Adds an ID to the Popup that should be focusable as well when using 'autoclose'.
 * Chaining is only possible if a valid type (string) is given.
 * 
 * @param {sap.ui.core.string} [sID] of the corresponding element that should be focusable as well
 * @since: 1.19.0
 * @public
 */
sap.ui.ux3.ToolPopup.prototype.addFocusableArea = function(sID) {
	this._ensurePopup();
	
	if (typeof(sID) === "string") {
		// channelId & eventId are mandatory dummy values
		this.oPopup._addFocusableArea("channelId", "eventId", {
			id : sID
		}); 
		return this;
	} else {
		jQuery.sap.log.error("Wrong type of focusable area ID - string expected", "", "sap.ui.ux3.ToolPopup");
	}
};

/**
 * Removes an ID to the Popup that should be focusable as well when using 'autoclose'.
 * Chaining is only possible if a valid type (string) is given.
 * 
 * @param {sap.ui.core.string} [sID] of the corresponding element
 * @since: 1.19.0
 * @public
 */

sap.ui.ux3.ToolPopup.prototype.removeFocusableArea = function(sID) {
	this._ensurePopup();
	
	if (typeof(sID) === "string") {
		// channelId & eventId are mandatory dummy values
		this.oPopup._removeFocusableArea("channelId", "eventId", {
			id : sID
		}); 
		return this;
	} else {
		jQuery.sap.log.error("Wrong type of focusable area ID - string expected", "", "sap.ui.ux3.ToolPopup");
	}
};
}());

sap.ui.ux3.ToolPopup.prototype.setIcon = function(sIcon) {
	this.setProperty("icon", sIcon, true); // rerendering makes no sense, as this icon is not rendered by the ToolPopup
	this.fireIconChanged(); // tell other interested parties to update the icon
	return this;
};
sap.ui.ux3.ToolPopup.prototype.setIconHover = function(sIconHover) {
	this.setProperty("iconHover", sIconHover, true); // rerendering makes no sense, as this icon is not rendered by the ToolPopup
	this.fireIconChanged(); // tell other interested parties to update the icon
	return this;
};
sap.ui.ux3.ToolPopup.prototype.setIconSelected = function(sIconSelected) {
	this.setProperty("iconSelected", sIconSelected, true); // rerendering makes no sense, as this icon is not rendered by the ToolPopup
	this.fireIconChanged(); // tell other interested parties to update the icon
	return this;
};
sap.ui.ux3.ToolPopup.prototype.getIconSelected = function() {
	return this.getProperty("iconSelected") || this.getProperty("iconHover"); // implement the documented fallback
};

sap.ui.ux3.ToolPopup.prototype.setMaxWidth = function(sMaxWidth) {
	var pattern = /[0-9]+px/;
	
	if(pattern.test(sMaxWidth)) {
		this.setProperty("maxWidth", sMaxWidth);
	} else {
		jQuery.sap.log.error("Only values in pixels are possible", "", "sap.ui.ux3.ToolPopup");
	}
};
