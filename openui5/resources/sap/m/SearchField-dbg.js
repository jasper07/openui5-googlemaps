/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.SearchField.
jQuery.sap.declare("sap.m.SearchField");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new SearchField.
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
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getMaxLength maxLength} : int (default: 0)</li>
 * <li>{@link #getPlaceholder placeholder} : string</li>
 * <li>{@link #getShowMagnifier showMagnifier} : boolean (default: true)</li>
 * <li>{@link #getShowRefreshButton showRefreshButton} : boolean (default: false)</li>
 * <li>{@link #getRefreshButtonTooltip refreshButtonTooltip} : string</li>
 * <li>{@link #getSelectOnFocus selectOnFocus} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.SearchField#event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.SearchField#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Enables users to input a search string.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.SearchField
 */
sap.ui.core.Control.extend("sap.m.SearchField", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"value" : {type : "string", group : "Data", defaultValue : null, bindable : "bindable"},
		"width" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : null},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"maxLength" : {type : "int", group : "Behavior", defaultValue : 0},
		"placeholder" : {type : "string", group : "Misc", defaultValue : null},
		"showMagnifier" : {type : "boolean", group : "Misc", defaultValue : true},
		"showRefreshButton" : {type : "boolean", group : "Behavior", defaultValue : false},
		"refreshButtonTooltip" : {type : "string", group : "Misc", defaultValue : null},
		"selectOnFocus" : {type : "boolean", group : "Behavior", defaultValue : true}
	},
	events : {
		"search" : {}, 
		"liveChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.SearchField with name <code>sClassName</code> 
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
 * @name sap.m.SearchField.extend
 * @function
 */

sap.m.SearchField.M_EVENTS = {'search':'search','liveChange':'liveChange'};


/**
 * Getter for property <code>value</code>.
 * Input Value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>value</code>
 * @public
 * @name sap.m.SearchField#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#setValue
 * @function
 */


/**
 * Binder for property <code>value</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#bindValue
 * @function
 */

/**
 * Unbinder for property <code>value</code>.
 *
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#unbindValue
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Defines the width of the input.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.SearchField#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#setWidth
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Boolean property to enable the control (default is true).
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.SearchField#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#setEnabled
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible inputs are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.SearchField#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#setVisible
 * @function
 */


/**
 * Getter for property <code>maxLength</code>.
 * Maximum number of characters. Value '0' means the feature is switched off.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>maxLength</code>
 * @public
 * @name sap.m.SearchField#getMaxLength
 * @function
 */

/**
 * Setter for property <code>maxLength</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iMaxLength  new value for property <code>maxLength</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#setMaxLength
 * @function
 */


/**
 * Getter for property <code>placeholder</code>.
 * Text shown when no value available. Default placeholder text is the word "Search" in the current local language (if supported) or in English.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>placeholder</code>
 * @public
 * @name sap.m.SearchField#getPlaceholder
 * @function
 */

/**
 * Setter for property <code>placeholder</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sPlaceholder  new value for property <code>placeholder</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#setPlaceholder
 * @function
 */


/**
 * Getter for property <code>showMagnifier</code>.
 * Set to false to hide the magnifier icon. This property is deprecated since version 1.16.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showMagnifier</code>
 * @public
 * @name sap.m.SearchField#getShowMagnifier
 * @function
 */

/**
 * Setter for property <code>showMagnifier</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowMagnifier  new value for property <code>showMagnifier</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#setShowMagnifier
 * @function
 */


/**
 * Getter for property <code>showRefreshButton</code>.
 * Set to true to display a "refresh" button. By pressing the refresh button, the user can reload the results list without changing the search string. This is a visual clue only: a normal search event is fired when a user presses on a refresh button.
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showRefreshButton</code>
 * @public
 * @since 1.16
 * @name sap.m.SearchField#getShowRefreshButton
 * @function
 */

/**
 * Setter for property <code>showRefreshButton</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowRefreshButton  new value for property <code>showRefreshButton</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.SearchField#setShowRefreshButton
 * @function
 */


/**
 * Getter for property <code>refreshButtonTooltip</code>.
 * Tooltip text of the refresh button. If it is not set, the tooltip of the SearchField (if any) is displayed. Tooltips are not displayed on touch devices.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>refreshButtonTooltip</code>
 * @public
 * @since 1.16
 * @name sap.m.SearchField#getRefreshButtonTooltip
 * @function
 */

/**
 * Setter for property <code>refreshButtonTooltip</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sRefreshButtonTooltip  new value for property <code>refreshButtonTooltip</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.SearchField#setRefreshButtonTooltip
 * @function
 */


/**
 * Getter for property <code>selectOnFocus</code>.
 * Normally, search text is selected for copy when the SearchField is focused by keyboard navigation. If an application re-renders the SearchField during the liveChange event, set this property to false to disable text selection by focus.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>selectOnFocus</code>
 * @public
 * @since 1.20
 * @name sap.m.SearchField#getSelectOnFocus
 * @function
 */

/**
 * Setter for property <code>selectOnFocus</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bSelectOnFocus  new value for property <code>selectOnFocus</code>
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @since 1.20
 * @name sap.m.SearchField#setSelectOnFocus
 * @function
 */


/**
 * Event which is fired when the user triggers a search. 
 *
 * @name sap.m.SearchField#search
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.query The search query string.
 * @param {boolean} oControlEvent.getParameters.refreshButtonPressed Indicates if the user pressed the refresh button.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.m.SearchField</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SearchField</code>.<br/> itself. 
 *  
 * Event which is fired when the user triggers a search. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.SearchField</code>.<br/> itself.
 *
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#attachSearch
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.m.SearchField</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SearchField#detachSearch
 * @function
 */

/**
 * Fire event search to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> The search query string.</li>
 * <li>'refreshButtonPressed' of type <code>boolean</code> Indicates if the user pressed the refresh button.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SearchField#fireSearch
 * @function
 */


/**
 * This event is fired when the value of the search field is changed by a user - e.g. at each key press. 
 *
 * @name sap.m.SearchField#liveChange
 * @event
 * @since 1.9.1
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.newValue Current search string.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.m.SearchField</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SearchField</code>.<br/> itself. 
 *  
 * This event is fired when the value of the search field is changed by a user - e.g. at each key press. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.SearchField</code>.<br/> itself.
 *
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.1
 * @name sap.m.SearchField#attachLiveChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.m.SearchField</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.1
 * @name sap.m.SearchField#detachLiveChange
 * @function
 */

/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> Current search string.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SearchField} <code>this</code> to allow method chaining
 * @protected
 * @since 1.9.1
 * @name sap.m.SearchField#fireLiveChange
 * @function
 */


// Start of sap\m\SearchField.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.ui.core.EnabledPropagator.call(sap.m.SearchField.prototype);

jQuery.sap.require("sap.ui.core.IconPool");
sap.ui.core.IconPool.insertFontFaceStyle();

jQuery.sap.require("sap.ui.core.theming.Parameters");

// Do special table-based rendering in IE
sap.m.SearchField.prototype._bNoFlex = !!sap.ui.Device.browser.internet_explorer;

sap.m.SearchField.prototype.init = function() {

	// IE9 does not fire input event when characters are deleted in an input field, use keyup instead
	this._inputEvent = sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version < 10 ? "keyup" : "input";

	// New design: right-aligned magnifying glass and refresh button
	if(sap.ui.core.theming.Parameters.get("sapMPlatformDependent") !== "true"){
		this._sDesign = "bluecrystal";
		this._sSearch = sap.ui.core.IconPool.getIconURI("search");
		this._sReload = sap.ui.core.IconPool.getIconURI("synchronize");
		this._oButton = new sap.m.Button(this.getId()+"-btn", {icon: this._sSearch, press: jQuery.proxy(this._onButtonPress, this) });
		this._oButton.setParent(this);
	}

	// Default placeholder: "Search"
	this.setProperty("placeholder", sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("FACETFILTER_SEARCH"),true);
	// TODO: suggestions and search provider
};

sap.m.SearchField.prototype.exit = function() {
	if (this._oButton) {
		this._oButton.destroy();
		this._oButton = null;
	}
};

sap.m.SearchField.prototype.getFocusDomRef = function() {
	return this._inputElement;
};

// returns correct the width that applied by design
sap.m.SearchField.prototype.getWidth = function() {
	return this.getProperty("width") || "100%";
};

sap.m.SearchField.prototype._hasPlacehoder = (function () {
	return "placeholder" in document.createElement("input");
}());

sap.m.SearchField.prototype.onBeforeRendering = function() {
	jQuery(this._inputElement).unbind();
	this._inputElement = null;
};

sap.m.SearchField.prototype.onAfterRendering = function() {

	// DOM element for the embedded HTML input:
	this._inputElement = this.getDomRef("I");

	// Bind events
	//  search: user has pressed "Enter" button -> fire search event, do search
	//  change: user has focused another control on the page -> do not trigger a search action
	//  input:  key press or paste/cut -> fire liveChange event
	var $input = jQuery(this._inputElement)
		.bind(this._inputEvent,  jQuery.proxy(this.onInput,  this))
		.bind("search", jQuery.proxy(this.onSearch, this))
		.bind("change", jQuery.proxy(this.onChange, this))
		.bind("focus",  jQuery.proxy(this.onFocus,  this))
		.bind("blur",   jQuery.proxy(this.onBlur,  this));
};

sap.m.SearchField.prototype.clear = function() {
	if (!this._inputElement || this.getValue() === "") {
		return;
	}

	this.setValue("");
	this.fireLiveChange({newValue: ""});
	this.fireSearch({query: ""});
};

sap.m.SearchField.prototype.ontouchstart = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the SearchField
	oEvent.setMarked();

	if (!this.getEnabled()) {
		return;
	}

	var oSrc = oEvent.target;

	if(oSrc.id == this.getId()+"-reset"){
		if(oEvent.originalEvent.button === 2) return; // no action on the right mouse button

		var bEmpty = !this.getValue();
		this.clear();
		oEvent.preventDefault();
		oEvent.stopPropagation();

		// When a user presses "x":
		// - always focus input on desktop
		// - focus input only if the soft keyboard is already opened on touch devices (avoid keyboard jumping)
		// When there was no "x" visible (bEmpty):
		// - always focus
		var active = document.activeElement;
		if((sap.ui.Device.system.desktop || bEmpty || /(INPUT|TEXTAREA)/i.test(active.tagName) ) && (active !== this._inputElement)) {
			this._inputElement.focus();
		}
	}

	// focus by form area touch outside of the input field
	this.onmousedown(oEvent);
};

sap.m.SearchField.prototype.onmousedown = function(oEvent) {

	// focus if mouse-clicked on the form outside of the input
	if(this.getEnabled() && oEvent.target.tagName == "FORM"){
		this._inputElement.focus();
		oEvent.preventDefault();
	}
};

/**
 * Process the search event
 *
 * When a user deletes the search string using the "x" button,
 * change event is not fired.
 * Call setValue() to ensure that the value property is updated.
 *
 * @private
 */
sap.m.SearchField.prototype.onSearch = function(event) {
	var value = this._inputElement.value;
	this.setValue(value);
	this.fireSearch({query: value});

	// If the user has pressed the search button on the soft keyboard - close it,
	// but only in case of soft keyboard:
	if (!sap.ui.Device.system.desktop) {
		this._blur();
	}
};

/**
 * Blur the input field
 *
 * @private
 */
sap.m.SearchField.prototype._blur = function() {
	var that = this;
	window.setTimeout( function(){
		if(that._oButton){
			that._oButton.focus();
		} else if(that._inputElement){
			that._inputElement.blur();
		}
	}, 13);
};

/**
 * Process the change event. Update value and do not fire any control events
 * because the user has focused another control on the page without intention to do a search.
 * @private
 */
sap.m.SearchField.prototype.onChange = function(event) {
	this.setValue(this._inputElement.value);
};

/**
 * Process the input event (key press or paste). Update value and fire the liveChange event.
 * @private
 */
sap.m.SearchField.prototype.onInput = function(event) {
	var value = this._inputElement.value;

	// IE fires an input event when an empty input with a placeholder is focused or loses focus.
	// Check if the value has changed, before firing the liveChange event.
	if(value != this.getValue()){
		this.setValue(value);
		this.fireLiveChange({newValue: value});
	}
};

/**
 * React on the Enter and Esc buttons for browsers that do not fire the onsearch event (IE9, IE10).
 * @private
 */
sap.m.SearchField.prototype.onKeyup = function(event) {
	if (event.keyCode === jQuery.sap.KeyCodes.ENTER) {

		// Enter button ==>> search
		this.onSearch(event);
	} else if (event.keyCode === jQuery.sap.KeyCodes.ESCAPE) {

		// Escape button ==>> clear + search
		this.clear();

		// Webkit browsers remove focus on escape. Do the same in IE:
		this._blur();
	}
};

/**
 * Handle the key down event for F5 on all browsers.
 *
 * @param {jQuery.Event}
 *            event - the keyboard event.
 * @private
 */
sap.m.SearchField.prototype.onkeydown = function(event) {
	if (this._oButton && (event.which === jQuery.sap.KeyCodes.F5 || event.which === jQuery.sap.KeyCodes.ENTER)) {

		// set active button state
		this._oButton._activeButton();

		// do not refresh browser window
		event.stopPropagation();
		event.preventDefault();
	}
};

/**
 * Handle the key up event for F5 on all browsers.
 *
 * @param {jQuery.Event}
 *            event - the keyboard event.
 * @private
 */
sap.m.SearchField.prototype.onkeyup = function(event) {
	if (this._oButton && (event.which === jQuery.sap.KeyCodes.F5 || event.which === jQuery.sap.KeyCodes.ENTER)) {

		// set inactive button state
		this._oButton._inactiveButton();
		this._onButtonPress(); // as with the button press: fire search with refreshButtonPressed:true

		// do not refresh browser window
		event.stopPropagation();
		event.preventDefault();
	}
};

/**
 * highlight the background on focus.
 *
 * @private
 */
sap.m.SearchField.prototype.onFocus = function(event) {
	this.$().toggleClass("sapMFocus", true);

	if (this.getShowRefreshButton()) {
		this._setIcon(this._sSearch);
	}

	// Some applications do re-render during the liveSearch event.
	// The input is focused and most browsers select the input text for copy.
	// Any following key press deletes the whole selection.
	// Disable selection by focus:
	var input = this._inputElement;
	if (input && input.value && !this.getSelectOnFocus()) {
		window.setTimeout(function(){input.setSelectionRange(input.value.length,input.value.length);},0);
	}
};

/**
 * Restore the background color on blur.
 *
 * @private
 */
sap.m.SearchField.prototype.onBlur = function(event) {
	this.$().toggleClass("sapMFocus", false);

	if (this.getShowRefreshButton()) {
		this._setIcon(this._sReload, 250);
	}
};


/**
 * React on the search button press.
 *
 * @private
 */
sap.m.SearchField.prototype._onButtonPress = function() {

	this.fireSearch({
		query: this.getValue(), // because of proxy "this" is SearchField, not Button
		refreshButtonPressed: this._oButton && this._sReload && this._oButton.getIcon() == this._sReload
	});
};

/**
 * Toggle the search/refresh icon with optional delay.
 *
 * @private
 */
sap.m.SearchField.prototype._setIcon = function(icon, delay) {
	if (!this._oButton) {
		return;
	}

	if (this._refreshDelay) {
		jQuery.sap.clearDelayedCall(this._refreshDelay);
		this._refreshDelay = null;
	}

	if (this._oButton.getIcon() == icon) {
		return; // do nothing;
	}

	var that = this;
	function setIcon(){
		var showReload = icon == that._sReload,
			button = that._oButton,
			tooltip = showReload? that.getRefreshButtonTooltip() : "";

		that.$().find(".sapMSFB").toggleClass("sapMSFReload", showReload);
		button.setIcon(icon);

		if(tooltip != button.getTooltip_AsString()){
			that._oButton.setTooltip(tooltip);
		}
	}

	if(delay){
		jQuery.sap.delayedCall(delay, this, setIcon);
	} else {
		setIcon();
	}
};

sap.m.SearchField.prototype.setValue = function(value){
	if (this._inputElement) {

		if (this._inputElement.value !== value) {
			this._inputElement.value = value;
		}

		var $this = this.$();
		if($this.hasClass("sapMSFVal") == !value){
			$this.toggleClass("sapMSFVal", !!value);
		}
	}

	this.setProperty("value", value, true);
	return this;
};

sap.m.SearchField.prototype.setShowRefreshButton = function(showRefresh){
	this.setProperty("showRefreshButton", showRefresh);
	this._setIcon(showRefresh? this._sReload : this._sSearch);
	return this;
};

sap.m.SearchField.prototype.setRefreshButtonTooltip = function(tooltip){
	this.setProperty("refreshButtonTooltip", tooltip);
	if (this.getShowRefreshButton() && this._oButton) {
		this._oButton.setTooltip(tooltip);
	}
	return this;
};