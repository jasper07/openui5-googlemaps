/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Link.
jQuery.sap.declare("sap.m.Link");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Link.
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
 * <li>{@link #getText text} : string (default: '')</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getTarget target} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHref href} : sap.ui.core.URI</li>
 * <li>{@link #getWrapping wrapping} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Link#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A hyperlink control which can be used to trigger actions or to navigate to other applications or web pages.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.m.Link
 */
sap.ui.core.Control.extend("sap.m.Link", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"text" : {type : "string", group : "Data", defaultValue : ''},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"target" : {type : "string", group : "Behavior", defaultValue : null},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"href" : {type : "sap.ui.core.URI", group : "Data", defaultValue : null},
		"wrapping" : {type : "boolean", group : "Appearance", defaultValue : false}
	},
	events : {
		"press" : {allowPreventDefault : true}
	}
}});


/**
 * Creates a new subclass of class sap.m.Link with name <code>sClassName</code> 
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
 * @name sap.m.Link.extend
 * @function
 */

sap.m.Link.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>text</code>.
 * Link text to be displayed.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.m.Link#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Link#setText
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Whether the link can be triggered by the user.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.Link#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Link#setEnabled
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible links are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.Link#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Link#setVisible
 * @function
 */


/**
 * Getter for property <code>target</code>.
 * Options are _self, _top, _blank, _parent, _search. Alternatively, a frame name can be entered.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>target</code>
 * @public
 * @name sap.m.Link#getTarget
 * @function
 */

/**
 * Setter for property <code>target</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTarget  new value for property <code>target</code>
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Link#setTarget
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Width of text link. When it is set (CSS-size such as % or px), this is the exact size. When left blank, the text defines the size.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.Link#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Link#setWidth
 * @function
 */


/**
 * Getter for property <code>href</code>.
 * The link target URI. Supports standard hyperlink behavior. If an action should be triggered, this should not be set, but instead an event handler for the "press" event should be registered.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>href</code>
 * @public
 * @name sap.m.Link#getHref
 * @function
 */

/**
 * Setter for property <code>href</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sHref  new value for property <code>href</code>
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Link#setHref
 * @function
 */


/**
 * Getter for property <code>wrapping</code>.
 * Whether the link text is allowed to wrap when tehre is not sufficient space.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>wrapping</code>
 * @public
 * @name sap.m.Link#getWrapping
 * @function
 */

/**
 * Setter for property <code>wrapping</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bWrapping  new value for property <code>wrapping</code>
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Link#setWrapping
 * @function
 */


/**
 * Event is fired when the user triggers the link control. 
 *
 * @name sap.m.Link#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.m.Link</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Link</code>.<br/> itself. 
 *  
 * Event is fired when the user triggers the link control. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Link</code>.<br/> itself.
 *
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Link#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.m.Link</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Link#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.m.Link#firePress
 * @function
 */


// Start of sap\m\Link.js

jQuery.sap.require("sap.ui.core.EnabledPropagator");

sap.ui.core.EnabledPropagator.call(sap.m.Link.prototype);

/**
 * Also trigger link activation when space is pressed on the focused control
 */
sap.m.Link.prototype.onsapspace = function(oEvent) {
	sap.m.Link.prototype._handlePress.apply(this, arguments);
};


/**
 * Function is called when Link is triggered.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Link.prototype._handlePress = function(oEvent) {
	if (this.getEnabled()) {
		if (!this.firePress()) { // fire event and check return value whether default action should be prevented
			oEvent.preventDefault();
		};
	} else { // disabled
		oEvent.preventDefault(); // even prevent URLs from being triggered
	}
};

if (sap.ui.Device.support.touch) {
	sap.m.Link.prototype.ontap = sap.m.Link.prototype._handlePress;
} else {
	sap.m.Link.prototype.onclick = sap.m.Link.prototype._handlePress;
}


sap.m.Link.prototype.ontouchstart = function(oEvent) {
	// for controls which need to know whether they should handle events bubbling from here
	oEvent.originalEvent._sapui_handledByControl = true;
};