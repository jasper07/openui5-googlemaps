/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.Overlay.
jQuery.sap.declare("sap.ui.ux3.Overlay");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Overlay.
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
 * <li>{@link #getOpenButtonVisible openButtonVisible} : boolean (default: true)</li>
 * <li>{@link #getCloseButtonVisible closeButtonVisible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.Overlay#event:close close} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Overlay#event:openNew openNew} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Overlay#event:open open} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Overlay Control
 * @extends sap.ui.core.Control
 * @implements sap.ui.core.PopupInterface
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.Overlay
 */
sap.ui.core.Control.extend("sap.ui.ux3.Overlay", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.ui.core.PopupInterface"
	],
	publicMethods : [
		// methods
		"open", "close", "isOpen"
	],

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"openButtonVisible" : {type : "boolean", group : "Misc", defaultValue : true},
		"closeButtonVisible" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	events : {
		"close" : {allowPreventDefault : true}, 
		"openNew" : {}, 
		"open" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.Overlay with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.Overlay.extend
 * @function
 */

sap.ui.ux3.Overlay.M_EVENTS = {'close':'close','openNew':'openNew','open':'open'};


/**
 * Getter for property <code>openButtonVisible</code>.
 * Defines whether the 'Open' button shall be visible
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>openButtonVisible</code>
 * @public
 * @name sap.ui.ux3.Overlay#getOpenButtonVisible
 * @function
 */

/**
 * Setter for property <code>openButtonVisible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bOpenButtonVisible  new value for property <code>openButtonVisible</code>
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Overlay#setOpenButtonVisible
 * @function
 */


/**
 * Getter for property <code>closeButtonVisible</code>.
 * Defines whether the 'Close' button shall be visible
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>closeButtonVisible</code>
 * @public
 * @name sap.ui.ux3.Overlay#getCloseButtonVisible
 * @function
 */

/**
 * Setter for property <code>closeButtonVisible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bCloseButtonVisible  new value for property <code>closeButtonVisible</code>
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Overlay#setCloseButtonVisible
 * @function
 */


/**
 * Event is fired when the ThingInspector is closed 
 *
 * @name sap.ui.ux3.Overlay#close
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id The Id of the Thing which is inspected in this ThingInspector instance
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'close' event of this <code>sap.ui.ux3.Overlay</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Overlay</code>.<br/> itself. 
 *  
 * Event is fired when the ThingInspector is closed 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Overlay</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Overlay#attachClose
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'close' event of this <code>sap.ui.ux3.Overlay</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Overlay#detachClose
 * @function
 */

/**
 * Fire event close to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The Id of the Thing which is inspected in this ThingInspector instance</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.ux3.Overlay#fireClose
 * @function
 */


/**
 * Event is fired when the 'Open' button of the ThingInspector is clicked 
 *
 * @name sap.ui.ux3.Overlay#openNew
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id The Id of the Thing which is inspected in this ThingInspector instance
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'openNew' event of this <code>sap.ui.ux3.Overlay</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Overlay</code>.<br/> itself. 
 *  
 * Event is fired when the 'Open' button of the ThingInspector is clicked 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Overlay</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Overlay#attachOpenNew
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'openNew' event of this <code>sap.ui.ux3.Overlay</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Overlay#detachOpenNew
 * @function
 */

/**
 * Fire event openNew to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The Id of the Thing which is inspected in this ThingInspector instance</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.Overlay#fireOpenNew
 * @function
 */


/**
 * Event is fired when the ThingInspector is opened 
 *
 * @name sap.ui.ux3.Overlay#open
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id The Id of the Thing which is inspected in this ThingInspector instance
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'open' event of this <code>sap.ui.ux3.Overlay</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Overlay</code>.<br/> itself. 
 *  
 * Event is fired when the ThingInspector is opened 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Overlay</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Overlay#attachOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'open' event of this <code>sap.ui.ux3.Overlay</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Overlay#detachOpen
 * @function
 */

/**
 * Fire event open to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> The Id of the Thing which is inspected in this ThingInspector instance</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Overlay} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.Overlay#fireOpen
 * @function
 */


/**
 * Opens Overlay as pop up
 *
 * @name sap.ui.ux3.Overlay.prototype.open
 * @function
 * @param {string} 
 *         sInitialFocusId
 *         ID of the control that gets focused when the overlay is openend

 * @type void
 * @public
 */


/**
 * Closes Overlay
 *
 * @name sap.ui.ux3.Overlay.prototype.close
 * @function

 * @type void
 * @public
 */


/**
 * Checks whether Overlay is open
 *
 * @name sap.ui.ux3.Overlay.prototype.isOpen
 * @function

 * @type boolean
 * @public
 */


// Start of sap\ui\ux3\Overlay.js
jQuery.sap.require("sap.ui.core.Popup");

/**
 * This file defines behavior for the control,
 */
sap.ui.ux3.Overlay.prototype.init = function() {
	var that = this;
	this._oPopup = new sap.ui.core.Popup(this, false, true);
	this._oPopup.attachOpened(function(oEvent){
		var domRef = jQuery.sap.byId(that._initialFocusId)[0];
		if (!domRef && that._getShell() && that.getOpenButtonVisible()) {
			domRef = jQuery.sap.domById(that._getOpenButtonId());
		} else if (!domRef && that._getShell() && that.getCloseButtonVisible()) {
			domRef = jQuery.sap.domById(that._getCloseButtonId());
		} else if (!domRef) {
			domRef = that.$("content").firstFocusableDomRef();
		} 
		if (!domRef) {
			domRef = that.$().firstFocusableDomRef();
		}
 		if(domRef) {
			jQuery.sap.focus(domRef);
		}
	});
	this._overridePopupEventing();
};

/**
 * Returns the Shell (if both Overlay and Shell are rendered)
 */
sap.ui.ux3.Overlay.prototype._getShell = function() {
	return this._oShell;
};


/**
 * Returns the ID of the close button element.
 * 
 * @return {string} The close button ID.
 * @private
 */
sap.ui.ux3.Overlay.prototype._getCloseButtonId = function() {
	return this.getId()+"-close";
};


/**
 * Returns the ID of the open button element.
 * 
 * @return {string} The open button ID.
 * @private
 */
sap.ui.ux3.Overlay.prototype._getOpenButtonId = function() {
	return this.getId()+"-openNew";
};


sap.ui.ux3.Overlay.prototype._initDom = function(fFocusFirst, fFocusLast, fApplyChanges) {
	//Override the popup theming and init the focus handling
	var oShell = jQuery(".sapUiUx3Shell").control();
	this._oShell = oShell.length ? oShell[0] : null;
	oShell = this._oShell;
	this.$().css("position", "fixed");
	if (oShell) {
		this._bFocusEventsRegistered = true;
		oShell.syncWithCanvasSize(this.getId(), true, fFocusFirst, fFocusLast, fApplyChanges);
		this.$("firstFocusDummyPaneFw").attr("tabindex", "0").focusin(jQuery.proxy(oShell.focusFirstHdr,oShell));
		this.$("firstFocusDummyPaneBw").attr("tabindex", "0").focusin(jQuery.proxy(oShell.focusLastTool,oShell));
		this.$("LastFocusDummyPane").attr("tabindex", "0").focusin(jQuery.proxy(oShell.focusPaneStart,oShell));
	} else {
		this.$().css("bottom", "0px").css("top", "0px").css("left", "0px").css("right", "0px");
	}
};

sap.ui.ux3.Overlay.prototype._cleanupDom = function() {
	if (this._oShell) {
		this._oShell.syncWithCanvasSize(this.getId(), false);
	}
	if (this._bFocusEventsRegistered) {
		this._bFocusEventsRegistered = false;
		this.$("firstFocusDummyPaneFw").removeAttr("tabindex").unbind("focusin");
		this.$("firstFocusDummyPaneBw").removeAttr("tabindex").unbind("focusin");
		this.$("LastFocusDummyPane").removeAttr("tabindex").unbind("focusin");
	}
};

/**
 * Set size of TI after rendering: If running in Shell we sync with shell
 * canvas (only if Popup is open/opening). The size will then be set by the shell.
 */
sap.ui.ux3.Overlay.prototype.onAfterRendering = function() {
    var oPopupState = this._oPopup.getOpenState();
    if(oPopupState === sap.ui.core.OpenState.OPEN || oPopupState === sap.ui.core.OpenState.OPENING){
          this._initDom(jQuery.proxy(this._setFocusFirst, this), jQuery.proxy(this._setFocusLast, this), jQuery.proxy(this._applyChanges, this));
    }
};

sap.ui.ux3.Overlay.prototype.onBeforeRendering = function() {
};


/**
 * Destroys this instance of Overlay, called by Element#destroy()
 *
 * @private
 */
sap.ui.ux3.Overlay.prototype.exit = function() {
	this.close();
	this._oPopup.destroy();
	this._oPopup = null;
	this._oShell = null;
};

/**
 * Opens this instance of Overlay
 *
 * @public
 */
sap.ui.ux3.Overlay.prototype.open = function(initialFocusId) {
	this._initialFocusId = initialFocusId;
	if (this._oPopup.isOpen()) {
		return;
	}
	if(initialFocusId) {
		this._oPopup.setInitialFocusId(initialFocusId);
	}
	this._oPopup.open(400);
	
	this._initDom(jQuery.proxy(this._setFocusFirst, this), jQuery.proxy(this._setFocusLast, this), jQuery.proxy(this._applyChanges, this));

	//fire open event
	this.fireOpen({
		id : this.getId()
	});
};

/**
 * Closes this instance of Overlay
 *
 * @public
 */
sap.ui.ux3.Overlay.prototype.close = function() {
	if (!this._oPopup.isOpen()) {
		return;
	}
	this._oPopup.close(400);
	this._cleanupDom();
};

/**
 * Handle the click event happening on the Overlay instance.
 *
 * @param {jQuery.EventObject}
 *            oEvent
 * @private
 */
sap.ui.ux3.Overlay.prototype.onclick = function(oEvent) {
	this._handleButtonEvent(oEvent);
};

/**
 * Handle the sapselect pseudo event happening on the Overlay instance.
 *
 * @param {jQuery.EventObject}
 *            oEvent
 * @private
 */
sap.ui.ux3.Overlay.prototype.onsapselect = function(oEvent) {
	this._handleButtonEvent(oEvent);
};

/**
 * Eventhandling for Overlay Buttons
 *
 * @private
 */
sap.ui.ux3.Overlay.prototype._handleButtonEvent = function(oEvent) {
	var elementId = oEvent.target.id;
	if (elementId === this._getCloseButtonId()) {
		if(this.fireClose({id : this.getId()})) {
			this.close();
		}
	} else if (elementId === this._getOpenButtonId()) {
		this.fireOpenNew({
			id : this.getId()
		});
	}
};

/**
 * Load language dependent texts.
 *
 * @private
 */
sap.ui.ux3.Overlay.prototype._getText = function(sKey, aArgs) {
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
	var sText = undefined;
	if(rb) {
		sText = rb.getText(sKey);
	}
	if(sText && aArgs){
		for(var index=0; index<aArgs.length; index++){
			sText = sText.replace("{"+index+"}", aArgs[index]);
		}
	}
	return sText ? sText : sKey;
};

/**
 * Override Popup Events
 *
 * @private
 */
sap.ui.ux3.Overlay.prototype._overridePopupEventing = function() {
	// don't bring Overlay to the front on mouse down. Existing
	// Toolpopups should always be in front
	this._oPopup.onmousedown = function(oEvent) {
		return;
	};
};

/**
 * Returns the first focusable Dom element which is contained in this Overlay.
 * This function is used for the Shell integration for a proper keyboard handling (tab chain).
 * 
 * This function must be overridden in sub classes appropriately.
 *
 * @private
 */
sap.ui.ux3.Overlay.prototype._setFocusFirst = function() {
	jQuery.sap.focus(jQuery.sap.domById(this._getOpenButtonId()));
};

/**
 * Returns the last focusable Dom element which is contained in this Overlay.
 * This function is used for the Shell integration for a proper keyboard handling (tab chain).
 *
 * This function must be overridden in sub classes appropriately.
 *
 * @private
 */
sap.ui.ux3.Overlay.prototype._setFocusLast = function() {
	jQuery.sap.focus(jQuery.sap.domById(this._getCloseButtonId()));
};

/**
 * Called from the Shell when properties (e.g. the HeaderType) are changing
 * 
 * This function must be overridden in sub classes appropriately.
 *
 * @private
 */
sap.ui.ux3.Overlay.prototype._applyChanges = function(oChanges) {
	return this;
};


/* Redefinition of generated API methods */

// Implementation of API method isOpen
sap.ui.ux3.Overlay.prototype.isOpen = function() {
	return this._oPopup.isOpen();
};
