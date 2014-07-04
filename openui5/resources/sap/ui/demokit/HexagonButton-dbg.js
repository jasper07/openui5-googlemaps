/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.demokit.HexagonButton.
jQuery.sap.declare("sap.ui.demokit.HexagonButton");
jQuery.sap.require("sap.ui.demokit.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new HexagonButton.
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
 * <li>{@link #getIcon icon} : string</li>
 * <li>{@link #getColor color} : string (default: 'blue')</li>
 * <li>{@link #getPosition position} : string</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getImagePosition imagePosition} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.demokit.HexagonButton#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Add your documentation for the new HexagonButton
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.demokit.HexagonButton
 */
sap.ui.core.Control.extend("sap.ui.demokit.HexagonButton", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.demokit",
	properties : {
		"icon" : {type : "string", group : "Misc", defaultValue : null},
		"color" : {type : "string", group : "Misc", defaultValue : 'blue'},
		"position" : {type : "string", group : "Misc", defaultValue : null},
		"enabled" : {type : "boolean", group : "Misc", defaultValue : true},
		"imagePosition" : {type : "string", group : "Misc", defaultValue : null}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.demokit.HexagonButton with name <code>sClassName</code> 
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
 * @name sap.ui.demokit.HexagonButton.extend
 * @function
 */

sap.ui.demokit.HexagonButton.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>icon</code>.
 * Icon to display
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * @name sap.ui.demokit.HexagonButton#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.demokit.HexagonButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.HexagonButton#setIcon
 * @function
 */


/**
 * Getter for property <code>color</code>.
 * The color of the hexagon
 *
 * Default value is <code>blue</code>
 *
 * @return {string} the value of property <code>color</code>
 * @public
 * @name sap.ui.demokit.HexagonButton#getColor
 * @function
 */

/**
 * Setter for property <code>color</code>.
 *
 * Default value is <code>blue</code> 
 *
 * @param {string} sColor  new value for property <code>color</code>
 * @return {sap.ui.demokit.HexagonButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.HexagonButton#setColor
 * @function
 */


/**
 * Getter for property <code>position</code>.
 * The position. If set, the button is rendered with an absolute position.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>position</code>
 * @public
 * @name sap.ui.demokit.HexagonButton#getPosition
 * @function
 */

/**
 * Setter for property <code>position</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sPosition  new value for property <code>position</code>
 * @return {sap.ui.demokit.HexagonButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.HexagonButton#setPosition
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Whether the button is enabled or not.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.demokit.HexagonButton#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.demokit.HexagonButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.HexagonButton#setEnabled
 * @function
 */


/**
 * Getter for property <code>imagePosition</code>.
 * The position of the contained image. If not set the image is rendered with a fixed relative position.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>imagePosition</code>
 * @public
 * @name sap.ui.demokit.HexagonButton#getImagePosition
 * @function
 */

/**
 * Setter for property <code>imagePosition</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sImagePosition  new value for property <code>imagePosition</code>
 * @return {sap.ui.demokit.HexagonButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.HexagonButton#setImagePosition
 * @function
 */


/**
 * Fired when the user clicks the hex button 
 *
 * @name sap.ui.demokit.HexagonButton#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.demokit.HexagonButton</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.demokit.HexagonButton</code>.<br/> itself. 
 *  
 * Fired when the user clicks the hex button 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.demokit.HexagonButton</code>.<br/> itself.
 *
 * @return {sap.ui.demokit.HexagonButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.HexagonButton#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.demokit.HexagonButton</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.demokit.HexagonButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.HexagonButton#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.demokit.HexagonButton} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.demokit.HexagonButton#firePress
 * @function
 */


// Start of sap\ui\demokit\HexagonButton.js
/**
 * Function is called when hexagon is clicked.
 * 
 * @param oBrowserEvent the forwarded sap.ui.core.BrowserEvent
 * @private
 */
sap.ui.demokit.HexagonButton.prototype.onclick = function(oBrowserEvent) {
	// TODO check for the hexagon
	if ( this.getEnabled() ) {
		this.firePress({id:this.getId()});
	}
	oBrowserEvent.preventDefault();
	oBrowserEvent.stopPropagation();
};

// intercept attach/detachPress to be able to rerender (renderer behaves differently for purely "decorative" buttons)
sap.ui.demokit.HexagonButton.prototype._attachPress = sap.ui.demokit.HexagonButton.prototype.attachPress; 
sap.ui.demokit.HexagonButton.prototype.attachPress = function() {
	this._attachPress.apply(this, arguments);
	this.invalidate();
};

sap.ui.demokit.HexagonButton.prototype._detachPress = sap.ui.demokit.HexagonButton.prototype.detachPress; 
sap.ui.demokit.HexagonButton.prototype.detachPress = function() {
	this._detachPress.apply(this, arguments);
	this.invalidate();
};