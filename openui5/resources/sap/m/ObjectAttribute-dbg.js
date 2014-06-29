/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ObjectAttribute.
jQuery.sap.declare("sap.m.ObjectAttribute");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ObjectAttribute.
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
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getActive active} : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.ObjectAttribute#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * ObjectAttribute displays a text field that can be normal or active. Object attribute fires a press event when the user selects active text.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.m.ObjectAttribute
 */
sap.ui.core.Control.extend("sap.m.ObjectAttribute", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"text" : {type : "string", group : "Misc", defaultValue : null},
		"active" : {type : "boolean", group : "Misc", defaultValue : null}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.ObjectAttribute with name <code>sClassName</code> 
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
 * @name sap.m.ObjectAttribute.extend
 * @function
 */

sap.m.ObjectAttribute.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>visible</code>.
 * Indicates if the object attribute is visible. Invisible object attribute is not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.ObjectAttribute#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.ObjectAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectAttribute#setVisible
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * The object attribute text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.m.ObjectAttribute#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.ObjectAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectAttribute#setText
 * @function
 */


/**
 * Getter for property <code>active</code>.
 * Indicates if the object attribute text is selectable by the user
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>active</code>
 * @public
 * @name sap.m.ObjectAttribute#getActive
 * @function
 */

/**
 * Setter for property <code>active</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bActive  new value for property <code>active</code>
 * @return {sap.m.ObjectAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectAttribute#setActive
 * @function
 */


/**
 * Event is fired when the user clicks active text 
 *
 * @name sap.m.ObjectAttribute#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.domRef Dom reference of the object attributes' text to be used for positioning.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.m.ObjectAttribute</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ObjectAttribute</code>.<br/> itself. 
 *  
 * Event is fired when the user clicks active text 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.ObjectAttribute</code>.<br/> itself.
 *
 * @return {sap.m.ObjectAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectAttribute#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.m.ObjectAttribute</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ObjectAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectAttribute#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'domRef' of type <code>string</code> Dom reference of the object attributes' text to be used for positioning.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ObjectAttribute} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ObjectAttribute#firePress
 * @function
 */


// Start of sap\m\ObjectAttribute.js
///**
// * This file defines behavior for the control,
// */

/**
 * @private
 */
sap.m.ObjectAttribute.prototype.ontap = function(oEvent) {
	if(!!this.getActive()) {
		this.firePress({domRef: this.getDomRef()});
	}
};

/**
 * See 'return'.
 * 
 * @private
 * @returns {boolean} true if attribute's text is empty or only consists of whitespaces.
 */
sap.m.ObjectAttribute.prototype._isEmpty = function() {
	return !this.getText().trim();
};

/**
 * Function is called when the control is touched.  
 *
 * @private
 */
sap.m.ObjectAttribute.prototype.ontouchstart = function(oEvent) {
	if(!!this.getActive()) {
		// for control who need to know if they should handle events from the ObjectAttribute control
		oEvent.originalEvent._sapui_handledByControl = true;
	}
};

	
