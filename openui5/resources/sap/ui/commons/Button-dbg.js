/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Button.
jQuery.sap.declare("sap.ui.commons.Button");
jQuery.sap.require("sap.ui.commons.library");
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
 * <li>{@link #getText text} : string (default: '')</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHelpId helpId} : string (default: '')</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: '')</li>
 * <li>{@link #getIconHovered iconHovered} : sap.ui.core.URI (default: '')</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI (default: '')</li>
 * <li>{@link #getIconFirst iconFirst} : boolean (default: true)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getStyled styled} : boolean (default: true)</li>
 * <li>{@link #getLite lite} : boolean (default: false)</li>
 * <li>{@link #getStyle style} : sap.ui.commons.ButtonStyle (default: sap.ui.commons.ButtonStyle.Default)</li></ul>
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
 * <li>{@link sap.ui.commons.Button#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Enables users to trigger actions such as save or print. For the button UI, you can define some text or an icon, or both.
 * 
 * @extends sap.ui.core.Control
 * @implements sap.ui.commons.ToolbarItem
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.Button
 */
sap.ui.core.Control.extend("sap.ui.commons.Button", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.ui.commons.ToolbarItem"
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
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"helpId" : {type : "string", group : "Behavior", defaultValue : ''},
		"icon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : ''},
		"iconHovered" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : ''},
		"iconSelected" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : ''},
		"iconFirst" : {type : "boolean", group : "Appearance", defaultValue : true},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"styled" : {type : "boolean", group : "Appearance", defaultValue : true},
		"lite" : {type : "boolean", group : "Appearance", defaultValue : false},
		"style" : {type : "sap.ui.commons.ButtonStyle", group : "Appearance", defaultValue : sap.ui.commons.ButtonStyle.Default}
	},
	associations : {
		"ariaDescribedBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaDescribedBy"}, 
		"ariaLabelledBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaLabelledBy"}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Button with name <code>sClassName</code> 
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
 * @name sap.ui.commons.Button.extend
 * @function
 */

sap.ui.commons.Button.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>text</code>.
 * 
 * Button text displayed at runtime.
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.commons.Button#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#setText
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * 
 * Boolean property to enable the control (default is true). Buttons that are disabled have other colors than enabled ones, depending on custom settings.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.commons.Button#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#setEnabled
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * 
 * Invisible buttons are not rendered
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.Button#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#setVisible
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * 
 * Control width as common CSS-size (px or % as unit, for example)
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.Button#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#setWidth
 * @function
 */


/**
 * Getter for property <code>helpId</code>.
 * 
 * Unique identifier used for help service
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>helpId</code>
 * @public
 * @name sap.ui.commons.Button#getHelpId
 * @function
 */

/**
 * Setter for property <code>helpId</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sHelpId  new value for property <code>helpId</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#setHelpId
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Icon to be displayed as graphical element within the button.
 * This can be an URI to an image or an icon font URI.
 *
 * Default value is <code>''</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.commons.Button#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#setIcon
 * @function
 */


/**
 * Getter for property <code>iconHovered</code>.
 * Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon was specified). If not specified the base icon is used.
 * If a icon font icon is used, this property is ignored.
 *
 * Default value is <code>''</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconHovered</code>
 * @public
 * @name sap.ui.commons.Button#getIconHovered
 * @function
 */

/**
 * Setter for property <code>iconHovered</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {sap.ui.core.URI} sIconHovered  new value for property <code>iconHovered</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#setIconHovered
 * @function
 */


/**
 * Getter for property <code>iconSelected</code>.
 * Icon to be displayed as graphical element within the button when it is selected (only if also a base icon was specified). If not specified the base or hovered icon is used.
 * If a icon font icon is used, this property is ignored.
 *
 * Default value is <code>''</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconSelected</code>
 * @public
 * @name sap.ui.commons.Button#getIconSelected
 * @function
 */

/**
 * Setter for property <code>iconSelected</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {sap.ui.core.URI} sIconSelected  new value for property <code>iconSelected</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#setIconSelected
 * @function
 */


/**
 * Getter for property <code>iconFirst</code>.
 * 
 * If set to true (default), the display sequence is 1. icon 2. control text .
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>iconFirst</code>
 * @public
 * @name sap.ui.commons.Button#getIconFirst
 * @function
 */

/**
 * Setter for property <code>iconFirst</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconFirst  new value for property <code>iconFirst</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#setIconFirst
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Specifies the button height. If this property is set, the height which is specified by the underlying theme is not used any longer.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.commons.Button#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#setHeight
 * @function
 */


/**
 * Getter for property <code>styled</code>.
 * Indicates if the button is styled. If not it is rendered as native HTML-button. In this case a custom styling can be added usig addStyleClass.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>styled</code>
 * @public
 * @name sap.ui.commons.Button#getStyled
 * @function
 */

/**
 * Setter for property <code>styled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bStyled  new value for property <code>styled</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#setStyled
 * @function
 */


/**
 * Getter for property <code>lite</code>.
 * The button is rendered as lite button.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>lite</code>
 * @public
 * @name sap.ui.commons.Button#getLite
 * @function
 */

/**
 * Setter for property <code>lite</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bLite  new value for property <code>lite</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#setLite
 * @function
 */


/**
 * Getter for property <code>style</code>.
 * Style of the button.
 * (e.g. emphasized)
 *
 * Default value is <code>sap.ui.commons.ButtonStyle.Default</code>
 *
 * @return {sap.ui.commons.ButtonStyle} the value of property <code>style</code>
 * @public
 * @name sap.ui.commons.Button#getStyle
 * @function
 */

/**
 * Setter for property <code>style</code>.
 *
 * Default value is <code>sap.ui.commons.ButtonStyle.Default</code> 
 *
 * @param {sap.ui.commons.ButtonStyle} oStyle  new value for property <code>style</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#setStyle
 * @function
 */


/**
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.Button#getAriaDescribedBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#addAriaDescribedBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * @name sap.ui.commons.Button#removeAriaDescribedBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Button#removeAllAriaDescribedBy
 * @function
 */

	
/**
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.Button#getAriaLabelledBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#addAriaLabelledBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * @name sap.ui.commons.Button#removeAriaLabelledBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Button#removeAllAriaLabelledBy
 * @function
 */

	
/**
 * 
 * Event is fired when the user presses the control.
 *  
 *
 * @name sap.ui.commons.Button#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.commons.Button</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.Button</code>.<br/> itself. 
 *  
 * 
 * Event is fired when the user presses the control.
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Button</code>.<br/> itself.
 *
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.commons.Button</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Button#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.Button#firePress
 * @function
 */


/**
 * Puts the focus to the button.
 *
 * @name sap.ui.commons.Button.prototype.focus
 * @function

 * @type void
 * @public
 */


// Start of sap\ui\commons\Button.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
jQuery.sap.require("sap.ui.core.IconPool");

sap.ui.core.EnabledPropagator.call(sap.ui.commons.Button.prototype);

/**
 * Function is called when button is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Button.prototype.onclick = function(oEvent) {
	if (this.getEnabled()){
		this.firePress({/* no parameters */});
	}

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Handles the sapenter event does not bubble
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Button.prototype.onsapenter = function(oEvent) {
	oEvent.stopPropagation();
};

/**
 * Function is called when mouse key is clicked down. The button style classes
 * are replaced then.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Button.prototype.onmousedown = function(oEvent) {
	this.handleMouseDown(oEvent, true);
};

/**
 * Function to handle the mouse down event.
 *
 * @param {jQuery.Event} oEvent The causing event.
 * @param {boolean} [bFocus=false] Whether to set the focus on the selected element in a delayed call.
 * @private
 */
sap.ui.commons.Button.prototype.handleMouseDown = function(oEvent, bFocus) {
	if (this.getEnabled() && this.getRenderer().onactive) {
		this.getRenderer().onactive(this);
	}
	// webkit && firefox on mac does not focus a Button on click, it even unfocuses it onmousedown!
	if (bFocus && (!!sap.ui.Device.browser.webkit || (!!sap.ui.Device.browser.firefox && navigator.platform.indexOf("Mac") === 0))) { 
		if(sap.ui.Device.browser.mobile && !!sap.ui.Device.browser.webkit){
			//In mobile Webkit Browsers (IPad) the focus must be set immediately to ensure that a focusout happens whereever the
			//focus currently is. The deleayedCall below is still needed due to the reason described above. (CSN 2536817 2012)
			this.focus();
		}
		jQuery.sap.delayedCall(0, this, function(){
			this.focus();
		}); 
	}
};

/**
 * When mouse key is up again, reset the background images to normal.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Button.prototype.onmouseup = function(oEvent) {
	if (this.getEnabled() && this.getRenderer().ondeactive) {
		this.getRenderer().ondeactive(this);
	}
};

/**
 * When mouse is going out of the control, reset the background images to normal.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Button.prototype.onmouseout = function(oEvent) {
	if (this.getEnabled() && this.getRenderer().onmouseout) {
		this.getRenderer().onmouseout(this);
	}
};

/**
 * When mouse is going over the control a hover effect is done.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Button.prototype.onmouseover = function(oEvent) {
	if (this.getEnabled() && this.getRenderer().onmouseover) {
		this.getRenderer().onmouseover(this);
	}
};

/**
 * When the button looses the focus, this method is called.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Button.prototype.onfocusout = function(oEvent) {
	if (this.getEnabled() && this.getRenderer().onblur) {
		this.getRenderer().onblur(this);
	}
};

/**
 * When the button gets the focus, this method is called.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Button.prototype.onfocusin = function(oEvent) {
	if (this.getEnabled() && this.getRenderer().onfocus) {
		this.getRenderer().onfocus(this);
	}
};

/*
 * If Icon has just changed don't rerender.
 */
sap.ui.commons.Button.prototype.setIcon = function(sIcon) {

	this._setIcon(sIcon, "icon");

	return this;

};

sap.ui.commons.Button.prototype.setIconHovered = function(sIcon) {

	this._setIcon(sIcon, "iconHovered");

	return this;

};

sap.ui.commons.Button.prototype.setIconSelected = function(sIcon) {

	this._setIcon(sIcon, "iconSelected");

	return this;

};

/*
 * helper function to set different icons
 */
sap.ui.commons.Button.prototype._setIcon = function(sIcon, sProperty) {

	var sIconOld = this.getProperty(sProperty);

	if (sIconOld == sIcon) {
		// icon not changed -> nothing to do
		return;
	}

	var bUseIconFontOld = false;
	if (sap.ui.core.IconPool.isIconURI(sIconOld)) {
		bUseIconFontOld = true;
	}

	var bUseIconFontNew = false;
	if (sap.ui.core.IconPool.isIconURI(sIcon)) {
		bUseIconFontNew = true;
	}

	var bSupressRerender = true;
	if ((!sIconOld && sIcon) || (sIconOld && !sIcon) || (bUseIconFontOld != bUseIconFontNew)) {
		// Icon new added or removed -> need to rerender
		bSupressRerender = false;
	}

	this.setProperty(sProperty, sIcon, bSupressRerender);

	if (bSupressRerender == true && this.getDomRef() && this.getRenderer().changeIcon) {
		this.getRenderer().changeIcon(this);
	}

};
