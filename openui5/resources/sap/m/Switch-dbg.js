/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Switch.
jQuery.sap.declare("sap.m.Switch");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Switch.
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
 * <li>{@link #getState state} : boolean (default: false)</li>
 * <li>{@link #getCustomTextOn customTextOn} : string</li>
 * <li>{@link #getCustomTextOff customTextOff} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getType type} : sap.m.SwitchType (default: sap.m.SwitchType.Default)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Switch#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A switch is a user interface control on mobile devices that is used for change between binary states. The user can also drag the button handle or tap to change the state.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.Switch
 */
sap.ui.core.Control.extend("sap.m.Switch", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"state" : {type : "boolean", group : "Misc", defaultValue : false},
		"customTextOn" : {type : "string", group : "Misc", defaultValue : null},
		"customTextOff" : {type : "string", group : "Misc", defaultValue : null},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"enabled" : {type : "boolean", group : "Data", defaultValue : true},
		"name" : {type : "string", group : "Misc", defaultValue : null},
		"type" : {type : "sap.m.SwitchType", group : "Appearance", defaultValue : sap.m.SwitchType.Default}
	},
	events : {
		"change" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Switch with name <code>sClassName</code> 
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
 * @name sap.m.Switch.extend
 * @function
 */

sap.m.Switch.M_EVENTS = {'change':'change'};


/**
 * Getter for property <code>state</code>.
 * A boolean value indicating whether the switch is on or off.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>state</code>
 * @public
 * @name sap.m.Switch#getState
 * @function
 */

/**
 * Setter for property <code>state</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bState  new value for property <code>state</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#setState
 * @function
 */


/**
 * Getter for property <code>customTextOn</code>.
 * Custom text for the "ON" state.
 * 
 * "ON" translated to the current language is the default value.
 * Beware that the given text will be cut off after three characters.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>customTextOn</code>
 * @public
 * @name sap.m.Switch#getCustomTextOn
 * @function
 */

/**
 * Setter for property <code>customTextOn</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sCustomTextOn  new value for property <code>customTextOn</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#setCustomTextOn
 * @function
 */


/**
 * Getter for property <code>customTextOff</code>.
 * Custom text for the "OFF" state.
 * 
 * "OFF" translated to the current language is the default value.
 * Beware that the given text will be cut off after three characters.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>customTextOff</code>
 * @public
 * @name sap.m.Switch#getCustomTextOff
 * @function
 */

/**
 * Setter for property <code>customTextOff</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sCustomTextOff  new value for property <code>customTextOff</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#setCustomTextOff
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible switches are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.Switch#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#setVisible
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Whether the switch is enabled.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.Switch#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#setEnabled
 * @function
 */


/**
 * Getter for property <code>name</code>.
 * The name to be used in the HTML code for the switch (e.g. for HTML forms that send data to the server via submit).
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.m.Switch#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#setName
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Type of a Switch. Possibles values "Default", "AcceptReject".
 *
 * Default value is <code>Default</code>
 *
 * @return {sap.m.SwitchType} the value of property <code>type</code>
 * @public
 * @name sap.m.Switch#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>Default</code> 
 *
 * @param {sap.m.SwitchType} oType  new value for property <code>type</code>
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#setType
 * @function
 */


/**
 * Triggered when a switch changes the state. 
 *
 * @name sap.m.Switch#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.state The new state of the switch.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.m.Switch</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Switch</code>.<br/> itself. 
 *  
 * Triggered when a switch changes the state. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Switch</code>.<br/> itself.
 *
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.m.Switch</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Switch#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'state' of type <code>boolean</code> The new state of the switch.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Switch} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Switch#fireChange
 * @function
 */


// Start of sap\m\Switch.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
jQuery.sap.require("sap.ui.core.theming.Parameters");
jQuery.sap.require("sap.ui.core.IconPool");
jQuery.sap.require("sap.m.SwitchRenderer");
sap.ui.core.IconPool.insertFontFaceStyle();

sap.ui.core.EnabledPropagator.apply(sap.m.Switch.prototype, [true]);

/* =========================================================== */
/* Internal methods and properties                             */
/* =========================================================== */

/**
 * Slide the switch.
 *
 * @private
 */
sap.m.Switch.prototype._slide = function(iPosition) {
	iPosition = iPosition > sap.m.Switch._OFFPOSITION ? sap.m.Switch._OFFPOSITION
														: iPosition < sap.m.Switch._ONPOSITION ? sap.m.Switch._ONPOSITION : iPosition;

	if (this._iCurrentPosition === iPosition) {
		return;
	}

	this._iCurrentPosition = iPosition;
	this._$SwitchInner[0].style[sap.m.Switch._bRtl ? "right" : "left"] = iPosition + "px";
	this._setTempState(Math.abs(iPosition) < sap.m.Switch._SWAPPOINT);
};

sap.m.Switch.prototype._setTempState = function(b) {
	if (this._bTempState === b) {
		return;
	}

	this._bTempState = b;
	this._$Handle[0].setAttribute("data-sap-ui-swt", b ? this._sOn : this._sOff);
};

sap.m.Switch._getCssParameter = function(sParameter) {
	var fnGetCssParameter = sap.ui.core.theming.Parameters.get;

	return fnGetCssParameter(sParameter) || fnGetCssParameter(sParameter + "-" + sap.ui.Device.os.name.toLowerCase());
};

(function() {
	var sParamTransitionTime = "sapMSwitch-TRANSITIONTIME",

	sTransitionTime = sap.m.Switch._getCssParameter(sParamTransitionTime);

	// a boolean property to indicate if transition or not
	sap.m.Switch._bUseTransition = !!(Number(sTransitionTime));

	// the milliseconds takes the transition from one state to another
	sap.m.Switch._TRANSITIONTIME = Number(sTransitionTime) || 0;
}());

sap.m.Switch._bRtl  = sap.ui.getCore().getConfiguration().getRTL();

// the position of the inner HTML element whether the switch is "ON"
sap.m.Switch._ONPOSITION = Number(sap.m.Switch._getCssParameter("sapMSwitch-ONPOSITION"));

// the position of the inner HTML element whether the switch is "OFF"
sap.m.Switch._OFFPOSITION = Number(sap.m.Switch._getCssParameter("sapMSwitch-OFFPOSITION"));

// swap point
sap.m.Switch._SWAPPOINT = Math.abs((sap.m.Switch._ONPOSITION - sap.m.Switch._OFFPOSITION) / 2);

// resource bundle
sap.m.Switch._oRb = sap.ui.getCore().getLibraryResourceBundle("sap.m");

/* =========================================================== */
/* Lifecycle methods                                           */
/* =========================================================== */

/**
 * Required adaptations before rendering.
 *
 * @private
 */
sap.m.Switch.prototype.onBeforeRendering = function() {
	var Swt = sap.m.Switch;

	this._sOn = this.getCustomTextOn() || Swt._oRb.getText("SWITCH_ON");
	this._sOff = this.getCustomTextOff() || Swt._oRb.getText("SWITCH_OFF");

	// flags
	this._bDisabled = !this.getEnabled();
	this._bCheckboxRendered = this.getName();
};

/**
 * Required adaptations after rendering.
 *
 * @private
 */
sap.m.Switch.prototype.onAfterRendering = function() {
	var $SwitchCont,
		CSS_CLASS = "." + sap.m.SwitchRenderer.CSS_CLASS;

	// switch control container jQuery DOM reference
	$SwitchCont = this.$();

	// switch jQuery DOM reference
	this._$Switch = $SwitchCont.find(CSS_CLASS);

	// switch inner jQuery DOM reference
	this._$SwitchInner = this._$Switch.children(CSS_CLASS + "Inner");

	// switch handle jQuery DOM reference
	this._$Handle = this._$SwitchInner.children(CSS_CLASS + "Handle");

	// checkbox jQuery DOM reference
	this._$Checkbox = $SwitchCont.children("input");
};

/* =========================================================== */
/* Event handlers                                              */
/* =========================================================== */

/**
 * Handle the touch start event happening on the switch.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Switch.prototype.ontouchstart = function(oEvent) {
	var oTargetTouch = oEvent.targetTouches[0],
		CSS_CLASS = sap.m.SwitchRenderer.CSS_CLASS;

	// mark the event for components that needs to know if the event was handled by the Switch
	oEvent.setMarked();

	// Process only single touches, if there is already a touch happening
	// or two simultaneous touches, then ignore them.
	if (sap.m.touch.countContained(oEvent.touches, this.getId()) > 1 || this._bDisabled) {
		return;
	}

	jQuery.sap.delayedCall(0, this._$Handle[0], "focus");

	this._$Switch.addClass(CSS_CLASS + "Pressed")
				.removeClass(CSS_CLASS + "Trans");

	this._iActiveTouch = oTargetTouch.identifier;
	this._bTempState = this.getState();
	this._iStartPressPosX = oTargetTouch.pageX;
	this._iPosition = this._$SwitchInner.position().left;
	this._bDragging = false;
};

/**
 * Handle the touch move event on the switch.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Switch.prototype.ontouchmove = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Switch
	oEvent.setMarked();

	// note: prevent native document scrolling
	oEvent.preventDefault();

	var oTouch,
		iPosition,
		fnTouch = sap.m.touch;

	if (this._bDisabled) {
		return;
	}

	// the active touch has to be in the list of touches
	jQuery.sap.assert(fnTouch.find(oEvent.touches, this._iActiveTouch), "missing touchend");

	// find the active touch
	oTouch = fnTouch.find(oEvent.changedTouches, this._iActiveTouch);

	// only respond to the active touch
	if (!oTouch ||

		// Note: do not rely on a specific granularity of the touchmove event.
		// On windows 8 surfaces, the touchmove events are dispatched even if
		// the user doesn’t move the touch point along the surface.
		oTouch.pageX === this._iStartPressPosX) {
		return;
	}

	this._bDragging = true;
	iPosition = ((this._iStartPressPosX - oTouch.pageX) * -1) + this._iPosition;

	if (sap.m.Switch._bRtl) {
		iPosition = -iPosition;
	}

	this._slide(iPosition);
};

/**
 * Handle the touch end event on the switch.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Switch.prototype.ontouchend = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Switch
	oEvent.setMarked();

	var fnTouch = sap.m.touch,
		assert = jQuery.sap.assert;

	if (this._bDisabled) {
		return;
	}

	assert(this._iActiveTouch !== undefined, "expect to already be touching");

	// if the touch we're tracking isn't changing here, ignore this event
	if (!fnTouch.find(oEvent.changedTouches, this._iActiveTouch)) {

		// In most cases, our active touch will be in the touches collection,
		// but we can't assert that because occasionally two touch end events can
		// occur at almost the same time with both having empty touches lists.
		return;
	}

	// the touchend for the touch we're monitoring
	assert(!fnTouch.find(oEvent.touches, this._iActiveTouch), "touch ended also still active");

	// remove active state
	this._$Switch.removeClass(sap.m.SwitchRenderer.CSS_CLASS + "Pressed");

	// change the state
	this.setState(this._bDragging ? this._bTempState : !this._bTempState, true);
};

/**
 * Handle the touchcancel event on the switch.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Switch.prototype.ontouchcancel = sap.m.Switch.prototype.ontouchend;

/**
 *  Handle when the space or enter key are pressed.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Switch.prototype.onsapselect = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Switch
	oEvent.setMarked();

	// note: prevent document scrolling when space keys is pressed
	oEvent.preventDefault();

	this.setState(!this.getState());
};

/* =========================================================== */
/* API method                                                  */
/* =========================================================== */

sap.m.Switch.prototype.getFocusDomRef = function() {
	return this.getDomRef() ? this._$Handle[0] : null;
};

/**
 * Change the switch state between on and off.
 *
 * @param {boolean} bState
 * @public
 * @return {sap.m.Switch} <code>this</code> to allow method chaining.
 */
sap.m.Switch.prototype.setState = function(bState, bTriggerEvent) {
	var sState,
		bNewState,
		Swt = sap.m.Switch,
		CSS_CLASS = sap.m.SwitchRenderer.CSS_CLASS;

	if (this._bDisabled && bTriggerEvent) {
		return this;
	}

	bNewState = !(this.getState() === bState);

	if (bNewState) {
		this.setProperty("state", bState, true);	// validation and suppress re-rendering
	}

	if (!this._$Switch) {
		return this;
	}

	bState = this.getState();
	sState = bState ? this._sOn : this._sOff;

	if (bNewState) {
		this._$Handle[0].setAttribute("data-sap-ui-swt", sState);

		if (this._bCheckboxRendered) {
			this._$Checkbox[0].setAttribute("checked", bState);
			this._$Checkbox[0].setAttribute("value", sState);
		}

		bState ? this._$Switch.removeClass(CSS_CLASS + "Off").addClass(CSS_CLASS + "On")
				: this._$Switch.removeClass(CSS_CLASS + "On").addClass(CSS_CLASS + "Off");

		if (bTriggerEvent) {
			if (Swt._bUseTransition) {
				jQuery.sap.delayedCall(Swt._TRANSITIONTIME, this, function() {
					this.fireChange({ state: bState });
				}, [bState]);
			} else {
				this.fireChange({ state: bState });
			}
		}
	}

	this._$Switch.addClass(CSS_CLASS + "Trans");

	// remove inline styles
	this._$SwitchInner.removeAttr("style");

	return this;
};