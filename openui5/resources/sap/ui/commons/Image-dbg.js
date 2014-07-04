/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Image.
jQuery.sap.declare("sap.ui.commons.Image");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Image.
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
 * <li>{@link #getSrc src} : sap.ui.core.URI</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getDecorative decorative} : boolean (default: true)</li>
 * <li>{@link #getAlt alt} : string</li>
 * <li>{@link #getUseMap useMap} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.Image#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A wrapper around the IMG tag. The image can be loaded from a remote or local server.
 * There are various size setting options available, and the images can be combined with actions.
 * @extends sap.ui.core.Control
 * @implements sap.ui.commons.ToolbarItem,sap.ui.commons.FormattedTextViewControl
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.Image
 */
sap.ui.core.Control.extend("sap.ui.commons.Image", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.ui.commons.ToolbarItem",
		"sap.ui.commons.FormattedTextViewControl"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"src" : {type : "sap.ui.core.URI", group : "Data", defaultValue : null},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : null},
		"height" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : null},
		"decorative" : {type : "boolean", group : "Accessibility", defaultValue : true},
		"alt" : {type : "string", group : "Accessibility", defaultValue : null},
		"useMap" : {type : "string", group : "Misc", defaultValue : null}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Image with name <code>sClassName</code> 
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
 * @name sap.ui.commons.Image.extend
 * @function
 */

sap.ui.commons.Image.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>src</code>.
 * Relative or absolute path to URL where the image file is stored.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>src</code>
 * @public
 * @name sap.ui.commons.Image#getSrc
 * @function
 */

/**
 * Setter for property <code>src</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sSrc  new value for property <code>src</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Image#setSrc
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible images are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.Image#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Image#setVisible
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the overall size is maintained then, considering the aspect ratio.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.Image#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Image#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the overall size is maintained then, considering the aspect ratio.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.commons.Image#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Image#setHeight
 * @function
 */


/**
 * Getter for property <code>decorative</code>.
 * A decorative image is included for design reasons. Accessibility tools will ignore decorative images.
 * Note: If the Image has an image map (useMap is set), this property will be overridden (the image will not be rendered as decorative).
 * A decorative image has no ALT attribute, so the Alt property is ignored if the image is decorative.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>decorative</code>
 * @public
 * @name sap.ui.commons.Image#getDecorative
 * @function
 */

/**
 * Setter for property <code>decorative</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bDecorative  new value for property <code>decorative</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Image#setDecorative
 * @function
 */


/**
 * Getter for property <code>alt</code>.
 * The alternative text that is displayed in case the Image is not available, or cannot be displayed.
 * If the image is set to decorative this property is ignored.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>alt</code>
 * @public
 * @name sap.ui.commons.Image#getAlt
 * @function
 */

/**
 * Setter for property <code>alt</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAlt  new value for property <code>alt</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Image#setAlt
 * @function
 */


/**
 * Getter for property <code>useMap</code>.
 * The name of the image map that defines the clickable areas
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>useMap</code>
 * @public
 * @name sap.ui.commons.Image#getUseMap
 * @function
 */

/**
 * Setter for property <code>useMap</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUseMap  new value for property <code>useMap</code>
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Image#setUseMap
 * @function
 */


/**
 * Event is fired when the user clicks on the control. 
 *
 * @name sap.ui.commons.Image#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.commons.Image</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.Image</code>.<br/> itself. 
 *  
 * Event is fired when the user clicks on the control. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Image</code>.<br/> itself.
 *
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Image#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.commons.Image</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Image#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Image} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.Image#firePress
 * @function
 */


// Start of sap\ui\commons\Image.js
/**
 * Function is called when image is clicked.
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Image.prototype.onclick = function(oEvent) {
	this.firePress({/* no parameters */});
};

/**
 * Function is called when "enter" keydown happens on image.
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Image.prototype.onsapenter = sap.ui.commons.Image.prototype.onclick;
