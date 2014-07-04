/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Link.
jQuery.sap.declare("sap.ui.commons.Link");
jQuery.sap.require("sap.ui.commons.library");
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
 * <li>{@link #getHelpId helpId} : string (default: '')</li>
 * <li>{@link #getHref href} : sap.ui.core.URI</li>
 * <li>{@link #getTarget target} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaDescribedBy ariaDescribedBy} : string | sap.ui.core.Control</li>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.Link#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * 
 * Provides an absolute or relative reference to an internal or external URL. The classical target parameters are supported.
 * Another usage scenario is triggering an action, for example to open a popup window. In both cases, the link is a hypertext link.
 * 
 * @extends sap.ui.core.Control
 * @implements sap.ui.commons.ToolbarItem,sap.ui.commons.FormattedTextViewControl
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.Link
 */
sap.ui.core.Control.extend("sap.ui.commons.Link", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.ui.commons.ToolbarItem",
		"sap.ui.commons.FormattedTextViewControl"
	],
	publicMethods : [
		// methods
		"focus"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"text" : {type : "string", group : "Appearance", defaultValue : ''},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visible" : {type : "boolean", group : "", defaultValue : true},
		"helpId" : {type : "string", group : "Behavior", defaultValue : ''},
		"href" : {type : "sap.ui.core.URI", group : "Data", defaultValue : null},
		"target" : {type : "string", group : "Data", defaultValue : null},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null}
	},
	associations : {
		"ariaDescribedBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaDescribedBy"}, 
		"ariaLabelledBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaLabelledBy"}
	},
	events : {
		"press" : {allowPreventDefault : true}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Link with name <code>sClassName</code> 
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
 * @name sap.ui.commons.Link.extend
 * @function
 */

sap.ui.commons.Link.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>text</code>.
 * 
 * Link text to be displayed.
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.commons.Link#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Link#setText
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
 * @name sap.ui.commons.Link#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Link#setEnabled
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * 
 * Invisible links are not rendered.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.Link#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Link#setVisible
 * @function
 */


/**
 * Getter for property <code>helpId</code>.
 * 
 * Unique identifier used for help service.
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>helpId</code>
 * @public
 * @name sap.ui.commons.Link#getHelpId
 * @function
 */

/**
 * Setter for property <code>helpId</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sHelpId  new value for property <code>helpId</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Link#setHelpId
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
 * @name sap.ui.commons.Link#getHref
 * @function
 */

/**
 * Setter for property <code>href</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sHref  new value for property <code>href</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Link#setHref
 * @function
 */


/**
 * Getter for property <code>target</code>.
 * 
 * Options are _self, _top, _blank, _parent, _search. Alternatively, a frame name can be entered.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>target</code>
 * @public
 * @name sap.ui.commons.Link#getTarget
 * @function
 */

/**
 * Setter for property <code>target</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTarget  new value for property <code>target</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Link#setTarget
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
 * @since 1.8.0
 * @name sap.ui.commons.Link#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * @since 1.8.0
 * @name sap.ui.commons.Link#setWidth
 * @function
 */


/**
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.Link#getAriaDescribedBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Link#addAriaDescribedBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * @name sap.ui.commons.Link#removeAriaDescribedBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Link#removeAllAriaDescribedBy
 * @function
 */

	
/**
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.Link#getAriaLabelledBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Link#addAriaLabelledBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * @name sap.ui.commons.Link#removeAriaLabelledBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Link#removeAllAriaLabelledBy
 * @function
 */

	
/**
 * 
 * Event is fired when the user clicks the control.
 *  
 *
 * @name sap.ui.commons.Link#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.commons.Link</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.Link</code>.<br/> itself. 
 *  
 * 
 * Event is fired when the user clicks the control.
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Link</code>.<br/> itself.
 *
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Link#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.commons.Link</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Link} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Link#detachPress
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
 * @name sap.ui.commons.Link#firePress
 * @function
 */


/**
 * Puts the focus to the link.
 *
 * @name sap.ui.commons.Link.prototype.focus
 * @function

 * @type void
 * @public
 */


// Start of sap\ui\commons\Link.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");

sap.ui.core.EnabledPropagator.call(sap.ui.commons.Link.prototype);

/**
 * Also trigger link activation when space is pressed on the focused control
 */
sap.ui.commons.Link.prototype.onsapspace = function(oEvent) {
	sap.ui.commons.Link.prototype.onclick.apply(this, arguments);
};

/**
 * Function is called when Link is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Link.prototype.onclick = function(oEvent) {
	if (this.getEnabled()) {
		// the default behavior will be supressed, when oEvent.preventDefault() is 
		// called or when the link doesn't contain a valid href (javascript:void(0)).
		// The last thing will trigger the onbeforeunload event in IE when not 
		// preventing the default behavior
		if (!this.firePress() || !this.getHref()) {
			oEvent.preventDefault();
		}
	} else {
		oEvent.preventDefault();
	}
};

/**
 * The Link handles the enter by itself
 * @since 1.16.2
 */
sap.ui.commons.Link.prototype.onsapenter = function(oEvent) {
	oEvent.stopPropagation();
};