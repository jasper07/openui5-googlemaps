/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Button.
jQuery.sap.declare("sap.m.Button");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Button.
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
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getType type} : sap.m.ButtonType (default: sap.m.ButtonType.Default)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconFirst iconFirst} : boolean (default: true)</li>
 * <li>{@link #getActiveIcon activeIcon} : sap.ui.core.URI</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Button#event:tap tap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Button#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Enables users to trigger actions. For the button UI, you can define some text or an icon, or both.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.Button
 */
sap.ui.core.Control.extend("sap.m.Button", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"text" : {type : "string", group : "Misc", defaultValue : null},
		"type" : {type : "sap.m.ButtonType", group : "Appearance", defaultValue : sap.m.ButtonType.Default},
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"icon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"iconFirst" : {type : "boolean", group : "Appearance", defaultValue : true},
		"activeIcon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"iconDensityAware" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	events : {
		"tap" : {}, 
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Button with name <code>sClassName</code> 
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
 * @name sap.m.Button.extend
 * @function
 */

sap.m.Button.M_EVENTS = {'tap':'tap','press':'press'};


/**
 * Getter for property <code>text</code>.
 * Button text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.m.Button#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Button#setText
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Type of a button (e.g. Default, Accept, Reject, Back, etc.)
 *
 * Default value is <code>Default</code>
 *
 * @return {sap.m.ButtonType} the value of property <code>type</code>
 * @public
 * @name sap.m.Button#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>Default</code> 
 *
 * @param {sap.m.ButtonType} oType  new value for property <code>type</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Button#setType
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Defines the width of the button.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.Button#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Button#setWidth
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Boolean property to enable the control (default is true). Buttons that are disabled have other colors than enabled ones, depending on custom settings
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.Button#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Button#setEnabled
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible buttons are not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.Button#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Button#setVisible
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Icon to be displayed as graphical element within the button. This can be an image or an icon from the icon font.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.m.Button#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Button#setIcon
 * @function
 */


/**
 * Getter for property <code>iconFirst</code>.
 * If set to true (default), the display sequence is 1. icon 2. control text
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>iconFirst</code>
 * @public
 * @name sap.m.Button#getIconFirst
 * @function
 */

/**
 * Setter for property <code>iconFirst</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconFirst  new value for property <code>iconFirst</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Button#setIconFirst
 * @function
 */


/**
 * Getter for property <code>activeIcon</code>.
 * The source property when this icon is tapped. Graphical element is changed to the new source as long as the icon is tapped.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>activeIcon</code>
 * @public
 * @name sap.m.Button#getActiveIcon
 * @function
 */

/**
 * Setter for property <code>activeIcon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sActiveIcon  new value for property <code>activeIcon</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Button#setActiveIcon
 * @function
 */


/**
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * 
 * If only one version of image is provided, set this value to false to avoid the attempt of fetching density perfect image.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * @name sap.m.Button#getIconDensityAware
 * @function
 */

/**
 * Setter for property <code>iconDensityAware</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Button#setIconDensityAware
 * @function
 */


/**
 * Event is fired when the user taps the control. (This event is deprecated, use the press event instead) 
 *
 * @name sap.m.Button#tap
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'tap' event of this <code>sap.m.Button</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Button</code>.<br/> itself. 
 *  
 * Event is fired when the user taps the control. (This event is deprecated, use the press event instead) 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Button</code>.<br/> itself.
 *
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Button#attachTap
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'tap' event of this <code>sap.m.Button</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Button#detachTap
 * @function
 */

/**
 * Fire event tap to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Button#fireTap
 * @function
 */


/**
 * Event is fired when the user clicks on the control. 
 *
 * @name sap.m.Button#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.m.Button</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Button</code>.<br/> itself. 
 *  
 * Event is fired when the user clicks on the control. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Button</code>.<br/> itself.
 *
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Button#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.m.Button</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Button#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Button} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Button#firePress
 * @function
 */


// Start of sap\m\Button.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.ui.core.EnabledPropagator.call(sap.m.Button.prototype);
jQuery.sap.require("sap.ui.core.theming.Parameters");
jQuery.sap.require("sap.ui.core.IconPool");

/**
 * Function is called to define the behavior for the control.
 *
 * @private
 */
sap.m.Button.prototype.init = function() {
	this._isPlatformDependent = sap.ui.core.theming.Parameters.get("sapMPlatformDependent") == "true";
};

/**
 * Function is called when exiting the control.
 *
 * @private
 */
sap.m.Button.prototype.exit = function(oEvent) {

	// destroy image controls if initialized
	if (this._image) {
		this._image.destroy();
	}

	if (this._iconBtn) {
		this._iconBtn.destroy();
	}
};

/**
 * Function is called when touchstart occurs on button .
 *
 * @private
 */
sap.m.Button.prototype.ontouchstart = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the button
	oEvent.setMarked();

	// change the source only when the first finger is on the control, the
	// following fingers doesn't affect
	if (oEvent.targetTouches.length === 1) {

		// set active button state
		this._activeButton();

		// set target which started the event
		this._target = oEvent.target;
	}
};

/**
 * Function is called when touchend occurs on button .
 *
 * @private
 */
sap.m.Button.prototype.ontouchend = function(oEvent) {

	// set inactive button state
	this._inactiveButton();
};

/**
 * Function is called when tap occurs on button.
 *
 * @private
 */
sap.m.Button.prototype.ontap = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the button
	oEvent.setMarked();

	// fire tap event
	if (this.getEnabled()) {

		// if target is empty set target (specially for selenium test)
		if (!this._target) {
			this._target = oEvent.target;
		}

		// check if target which started the event is the same
		if ((!!this._target) && (this._target === oEvent.target)) {
			this.fireTap({/* no parameters */}); // (This event is deprecated, use the "press" event instead)
			this.firePress({/* no parameters */});
		}
	}

	// reset target which started the event
	delete this._target;
};

/**
 * Handle the key down event for SPACE and ENTER.
 * This implementation differs from that of commons button.
 * Commons listens to the click event and ignores touchstart.
 * @param {jQuery.Event} oEvent - the keyboard event.
 * @private
 */
sap.m.Button.prototype.onkeydown = function(oEvent) {

	if (oEvent.which === jQuery.sap.KeyCodes.SPACE || oEvent.which === jQuery.sap.KeyCodes.ENTER) {

		// mark the event for components that needs to know if the event was handled by the button
		oEvent.setMarked();

		// set active button state
		this._activeButton();

		// set target which started the event
		this._target = oEvent.target;
	}
};

/**
 * Handle the key up event for SPACE and ENTER.
 *
 * @param {jQuery.Event} oEvent - the keyboard event.
 * @private
 */
sap.m.Button.prototype.onkeyup = function(oEvent) {

	// if keydown isn't caught by button, ignore the keyup.
	if (!this._target) {
		return;
	}

	this._target = null;

	if (oEvent.which === jQuery.sap.KeyCodes.SPACE || oEvent.which === jQuery.sap.KeyCodes.ENTER) {

		// mark the event for components that needs to know if the event was handled by the button
		oEvent.setMarked();

		// set inactive button state
		this._inactiveButton();
		this.firePress({/* no parameters */});
	}
};

/**
 * Ensure that the active button state is removed by focus loss.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Button.prototype.onfocusout = function(oEvent) {

	// set inactive button state
	this._inactiveButton();
};

/**
 * Function is called when button is active.
 *
 * @private
 */
sap.m.Button.prototype._activeButton = function() {
	this.$().addClass("sapMBtnActive");

	// handling active icon
	if (this.getEnabled()) {
		if (this.getIcon() && this.getActiveIcon() && this._image instanceof sap.m.Image) {
			this._image.setSrc(this.getActiveIcon());
		}
	}
};

/**
 * Function is called when button is inactive.
 *
 * @private
 */
sap.m.Button.prototype._inactiveButton = function() {
	this.$().removeClass("sapMBtnActive");

	// handling active icon
	if (this.getEnabled()) {
		if (this.getIcon() && this.getActiveIcon() && this._image instanceof sap.m.Image) {
			this._image.setSrc(this.getIcon());
		}
	}
};

/**
 * Function is called when image control needs to be loaded.
 *
 * @private
 */
sap.m.Button.prototype._getImage = function(sImgId, sSrc, sActiveSrc, bIconDensityAware) {

	// check if image source has changed - if yes destroy and reset image control
	if(this._image && (this._image.getSrc() != sSrc)){
		this._image.destroy();
		this._image = undefined;
	}

	// update or create image control
	var oImage = this._image;

	if (!!oImage) {

		oImage.setSrc(sSrc);
		if(oImage instanceof sap.m.Image) {
			oImage.setActiveSrc(sActiveSrc);
			oImage.setDensityAware(bIconDensityAware);
		}
	} else {

		oImage = sap.ui.core.IconPool.createControlByURI({
			id: sImgId,
			src : sSrc,
			activeSrc : sActiveSrc,
			densityAware : bIconDensityAware
		}, sap.m.Image).addStyleClass("sapMBtnCustomIcon").setParent(this, null, true);
	}

	return this._image = oImage;
};

/**
 * Function is called when internal image control needs to be loaded.
 *
 * @private
 */
sap.m.Button.prototype._getInternalIconBtn = function(sImgId, sSrc) {
	var oIcon = this._iconBtn;

	if (!!oIcon) {
		oIcon.setSrc(sSrc);
	} else {
		oIcon = sap.ui.core.IconPool.createControlByURI(sSrc, sap.m.Image);
	}

	return this._iconBtn = oIcon;
};