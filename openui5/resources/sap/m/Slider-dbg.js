/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Slider.
jQuery.sap.declare("sap.m.Slider");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Slider.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getMin min} : float (default: 0)</li>
 * <li>{@link #getMax max} : float (default: 100)</li>
 * <li>{@link #getStep step} : float (default: 1)</li>
 * <li>{@link #getProgress progress} : boolean (default: true)</li>
 * <li>{@link #getValue value} : float (default: 0)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Slider#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Slider#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A slider is a user interface control that enables the user to adjust values in a specified numerical range.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.Slider
 */
sap.ui.core.Control.extend("sap.m.Slider", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"stepUp", "stepDown"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : '100%'},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"name" : {type : "string", group : "Misc", defaultValue : null},
		"min" : {type : "float", group : "Data", defaultValue : 0},
		"max" : {type : "float", group : "Data", defaultValue : 100},
		"step" : {type : "float", group : "Data", defaultValue : 1},
		"progress" : {type : "boolean", group : "Misc", defaultValue : true},
		"value" : {type : "float", group : "Data", defaultValue : 0}
	},
	events : {
		"change" : {}, 
		"liveChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Slider with name <code>sClassName</code> 
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
 * @name sap.m.Slider.extend
 * @function
 */

sap.m.Slider.M_EVENTS = {'change':'change','liveChange':'liveChange'};


/**
 * Getter for property <code>width</code>.
 * Defines the width of the slider, this value can be provided in %, em, px… and all possible CSS units.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.Slider#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setWidth
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Determines whether the user can change the slider value.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.Slider#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setEnabled
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Determines whether the slider is visible. Invisible controls are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.Slider#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setVisible
 * @function
 */


/**
 * Getter for property <code>name</code>.
 * The name property to be used in the HTML code for the slider (e.g. for HTML forms that send data to the server via submit).
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.m.Slider#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setName
 * @function
 */


/**
 * Getter for property <code>min</code>.
 * The minimum value of the slider.
 *
 * Default value is <code>0</code>
 *
 * @return {float} the value of property <code>min</code>
 * @public
 * @name sap.m.Slider#getMin
 * @function
 */

/**
 * Setter for property <code>min</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {float} fMin  new value for property <code>min</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setMin
 * @function
 */


/**
 * Getter for property <code>max</code>.
 * The maximum value of the slider.
 *
 * Default value is <code>100</code>
 *
 * @return {float} the value of property <code>max</code>
 * @public
 * @name sap.m.Slider#getMax
 * @function
 */

/**
 * Setter for property <code>max</code>.
 *
 * Default value is <code>100</code> 
 *
 * @param {float} fMax  new value for property <code>max</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setMax
 * @function
 */


/**
 * Getter for property <code>step</code>.
 * Define the amount of units to change the slider when adjusting by drag and drop.
 * 
 * Defines the size of the slider's selection intervals. (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10, 15, 20).
 * 
 * The step must be positive, if a negative number is provided, the default value will be used instead.
 * If the width of the slider converted to pixels is less than the range (max – min), the value will be rounded to multiples of the step size.
 *
 * Default value is <code>1</code>
 *
 * @return {float} the value of property <code>step</code>
 * @public
 * @name sap.m.Slider#getStep
 * @function
 */

/**
 * Setter for property <code>step</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {float} fStep  new value for property <code>step</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setStep
 * @function
 */


/**
 * Getter for property <code>progress</code>.
 * Show a progress bar indicator.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>progress</code>
 * @public
 * @name sap.m.Slider#getProgress
 * @function
 */

/**
 * Setter for property <code>progress</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bProgress  new value for property <code>progress</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setProgress
 * @function
 */


/**
 * Getter for property <code>value</code>.
 * Define the value of the slider.
 * 
 * If the value is lower/higher than the allowed minimum/maximum, the value of the properties "min"/"max" are used instead.
 *
 * Default value is <code>0</code>
 *
 * @return {float} the value of property <code>value</code>
 * @public
 * @name sap.m.Slider#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {float} fValue  new value for property <code>value</code>
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#setValue
 * @function
 */


/**
 * This event is triggered after the end user finishes interacting, if there is any change. 
 *
 * @name sap.m.Slider#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {float} oControlEvent.getParameters.value The current value of the slider after a change.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.m.Slider</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Slider</code>.<br/> itself. 
 *  
 * This event is triggered after the end user finishes interacting, if there is any change. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Slider</code>.<br/> itself.
 *
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.m.Slider</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>float</code> The current value of the slider after a change.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Slider#fireChange
 * @function
 */


/**
 * This event is triggered during the dragging period, each time the slider value changes. 
 *
 * @name sap.m.Slider#liveChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {float} oControlEvent.getParameters.value The current value of the slider after a live change.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.m.Slider</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Slider</code>.<br/> itself. 
 *  
 * This event is triggered during the dragging period, each time the slider value changes. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Slider</code>.<br/> itself.
 *
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#attachLiveChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.m.Slider</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Slider#detachLiveChange
 * @function
 */

/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>float</code> The current value of the slider after a live change.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Slider} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Slider#fireLiveChange
 * @function
 */


/**
 * Increments the slider value by multiplying the step with the given parameter.
 * 
 * The default value for the step is 1.
 *
 * @name sap.m.Slider.prototype.stepUp
 * @function
 * @param {int} 
 *         iIStep
 *         The number of steps the slider goes up.

 * @type sap.m.Slider
 * @public
 */


/**
 * Decrements the slider value by multiplying the step with the given parameter.
 * 
 * The default value for the step is 1.
 *
 * @name sap.m.Slider.prototype.stepDown
 * @function
 * @param {int} 
 *         iIStep
 *         The number of steps the slider goes down.

 * @type sap.m.Slider
 * @public
 */


// Start of sap\m\Slider.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
jQuery.sap.require("sap.m.SliderRenderer");
sap.ui.core.EnabledPropagator.apply(sap.m.Slider.prototype, [true]);

/* =========================================================== */
/* Private methods and properties                              */
/* =========================================================== */

/* ----------------------------------------------------------- */
/* Private properties                                          */
/* ----------------------------------------------------------- */

sap.m.Slider._bRtl  = sap.ui.getCore().getConfiguration().getRTL();

/* ----------------------------------------------------------- */
/* Private methods                                             */
/* ----------------------------------------------------------- */

/**
 * Cache DOM references.
 *
 * @private
 */
sap.m.Slider.prototype._cacheDomRefs = function() {

	// slider control container jQuery DOM reference
	this._$Slider = this.$();

	// slider jQuery DOM reference
	this._$SliderInner = this._$Slider.children("." + sap.m.SliderRenderer.CSS_CLASS + "Inner");

	// progress indicator jQuery DOM reference
	this._$ProgressIndicator = this._$SliderInner.children("." + sap.m.SliderRenderer.CSS_CLASS + "Progress");

	// handle jQuery DOM reference
	this._$Handle = this._$SliderInner.children("." + sap.m.SliderRenderer.CSS_CLASS + "Handle");

	// native input helper jQuery DOM reference
	this._$Input = this._$Slider.children("input." + sap.m.SliderRenderer.CSS_CLASS + "Input");
};

/**
 * Convert <code>fValue</code> for RTL-Mode
 *
 * @param {float} fValue input value
 * @private
 * @returns {float} output value
 */
sap.m.Slider.prototype._convertValueForRtlMode = function(fValue) {
	return this.getMax() - fValue + this.getMin();
};

/**
 * Recalculate some styles.
 *
 * @private
 */
sap.m.Slider.prototype._recalculateStyles = function() {

	// slider width
	this._fSliderWidth = this._$Slider.width();

	// slider padding left
	this._fSliderPaddingLeft = parseFloat(this._$Slider.css("padding-left"));

	// slider offset left
	this._fSliderOffsetLeft = this._$Slider.offset().left;

	// handle width
	this._fHandleWidth = this._$Handle.width();
};

/**
 * Calculate percentage.
 *
 * @param {float} fValue
 * @private
 * @returns {float} percent
 */
sap.m.Slider.prototype._getPercentOfValue = function(fValue) {
	var fMin = this.getMin();

	return (((fValue - fMin) / (this.getMax() - fMin)) * 100);
};

/**
 * Checks whether the given step is of the proper type.
 *
 * @param {int} iStep
 * @private
 * @returns {int}
 */
sap.m.Slider.prototype._validateStep = function(iStep) {
	if (typeof iStep === "undefined") {
		return 1;	// default n = 1
	}

	if (typeof iStep !== "number") {
		jQuery.sap.log.warning('Warning: "iStep" needs to be a number', this);
		return 0;
	}

	if ((Math.floor(iStep) === iStep) && isFinite(iStep)) {
		return iStep;
	}

	jQuery.sap.log.warning('Warning: "iStep" needs to be a finite interger', this);

	return 0;
};

/**
 * Checks whether the minimum is lower than or equal to the maximum and
 * whether the step is bigger than slider range.
 *
 * @private
 * @returns {boolean}
 */
sap.m.Slider.prototype._validateProperties = function() {
	var fMin = this.getMin(),
		fMax = this.getMax(),
		fStep = this.getStep(),
		bMinbiggerThanMax = false,
		bError = false;

	/*
	 *	functional dependencies:
	 *
	 *	min				-> max
	 *	max				-> min
	 *
	 *	max, min		-> step
	 *	max, min, step	-> value
	 *
	 */

	// if the minimum is lower than or equal to the maximum, log a warning
	if (fMin >= fMax) {
		bMinbiggerThanMax = true;
		bError = true;
		jQuery.sap.log.warning("Warning: " + "Property wrong min: " + fMin + " >= max: " + fMax + " on ", this);
	}

	// if the step is negative or 0, set to 1 and log a warning
	if (fStep <= 0) {
		jQuery.sap.log.warning("Warning: " + "The step could not be negative on ", this);
		fStep = 1;

		// update the step to 1 and suppress re-rendering
		this.setProperty("step", fStep, true);
	}

	// the step can't be bigger than slider range, log a warning
	if (fStep > (fMax - fMin) && !bMinbiggerThanMax) {
		bError = true;
		jQuery.sap.log.warning("Warning: " + "Property wrong step: " + fStep + " > max: " + fMax + " - " + "min: " + fMin + " on ", this);
	}

	return bError;
};

/**
 * Setter for property <code>value</code>.
 *
 * @see sap.m.Slider#setValue
 * @param {float} fValue new value for property <code>value</code>.
 * @returns {sap.m.Slider} <code>this</code> to allow method chaining.
 * @private
 * @function
 */
sap.m.Slider.prototype._setValue = function(fNewValue) {
	var fMin = this.getMin(),
		fMax = this.getMax(),
		fStep = this.getStep(),
		fValue = this.getValue(),
		fModStepVal,
		sPerVal;

	// validate the new value before arithmetic calculations
	if (typeof fNewValue !== "number" || !isFinite(fNewValue)) {
		jQuery.sap.log.error("Error:", '"fNewValue" needs to be a finite number on ', this);
		return this;
	}

	fModStepVal = fNewValue % fStep;

	// snap the new value to the nearest step
	fNewValue = fModStepVal * 2 >= fStep ? fNewValue + fStep - fModStepVal
											: fNewValue - fModStepVal;

	// constrain the new value between the maximum and minimum
	fNewValue = fNewValue > fMax ? fMax
									: fNewValue < fMin ? fMin : fNewValue;

	// Floating-point in JavaScript are IEEE 64 bit values and has some problems with big decimals.
	// Round the final value to 5 digits after the decimal point.
	fNewValue = Number(fNewValue.toFixed(5));

	// update the value and suppress re-rendering
	this.setProperty("value", fNewValue, true);

	// if the value is the same, suppress DOM modifications
	if (fValue === this.getValue()) {
		return this;
	}

	if (this._$Slider) {	// after re-rendering

		sPerVal = this._getPercentOfValue(fNewValue) + "%";

		if (this._bInputRendered) {

			// update the input
			this._$Input[0].setAttribute("value", fNewValue);
		}

		if (this._bProgress) {

			// update the progress indicator
			this._$ProgressIndicator[0].style.width = sPerVal;
		}

		// update the position of the handle
		this._$Handle[0].style[sap.m.Slider._bRtl ? "right" : "left"] = sPerVal;

		// update the handle tooltip
		this._$Handle[0].title = fNewValue;

		// update the WAI-ARIA attribute values
		this._$Handle[0].setAttribute("aria-valuenow", fNewValue);
		this._$Handle[0].setAttribute("aria-valuetext", fNewValue);
	}

	return this;
};

/**
 * Returns the closest handle to a touchstart/mousedown event.
 *
 * @returns {object} The nearest handle jQuery DOM reference.
 * @private
 */
sap.m.Slider.prototype._getClosestHandle = function() {

	// there is only one handle, it is always the nearest
	return this._$Handle;
};

/**
 * Increase the value of the slider by the given <code>fIncrement</code>.
 *
 * @param {int} [fIncrement=1]
 * @private
 */
sap.m.Slider.prototype._increaseValueBy = function(fIncrement) {
	var fValue,
		fNewValue;

	if (this.getEnabled()) {
		fValue = this.getValue();
		this.setValue(fValue + (fIncrement || 1));
		fNewValue = this.getValue();

		if (fValue < fNewValue) {
			this._fireChangeAndLiveChange({ value: fNewValue });
		}
	}
};

/**
 * Decrease the value of the slider by the given <code>fDecrement</code>.
 *
 * @param {int} [fDecrement=1]
 * @private
 */
sap.m.Slider.prototype._decreaseValueBy = function(fDecrement) {
	var fValue,
		fNewValue;

	if (this.getEnabled()) {
		fValue = this.getValue();
		this.setValue(fValue - (fDecrement || 1));
		fNewValue = this.getValue();

		if (fValue > fNewValue) {
			this._fireChangeAndLiveChange({ value: fNewValue });
		}
	}
};

sap.m.Slider.prototype._getLongStep = function() {
	var fMin = this.getMin(),
		fMax = this.getMax(),
		fStep = this.getStep(),
		fLongStep = (fMax - fMin) / 10,
		iStepsFromMinToMax = (fMax - fMin) / fStep;

	return iStepsFromMinToMax > 10 ? fLongStep : fStep;
};

sap.m.Slider.prototype._fireChangeAndLiveChange = function(oParam) {
	this.fireChange(oParam);
	this.fireLiveChange(oParam);
};

sap.m.Slider.prototype._hasFocus = function() {
	return document.activeElement === this.getFocusDomRef();
};

/* =========================================================== */
/* Lifecycle methods                                           */
/* =========================================================== */

/**
 * Required adaptations before rendering.
 *
 * @private
 */
sap.m.Slider.prototype.onBeforeRendering = function() {

	var bError = this._validateProperties();

	// update the value only if there aren't errors
	if (!bError) {
		this.setValue(this.getValue());

		// this is the current % value for the slider progress bar
		this._sProgressValue = this._getPercentOfValue(this.getValue()) + "%";
	}

	// flags
	this._bProgress = this.getProgress();
	this._bInputRendered = !!this.getName();
	this._bDisabled = !this.getEnabled();

	if (!this._hasFocus()) {
		this._fInitialFocusValue = this.getValue();
	}
};

/**
 * Required adaptations after rendering.
 *
 * @private
 */
sap.m.Slider.prototype.onAfterRendering = function() {
	this._cacheDomRefs();

	// after all calculations, makes the control visible
	this._$Slider.css("visibility", "");
};

/**
 * Cleans up before destruction.
 *
 * @private
 */
sap.m.Slider.prototype.exit = function() {
	this._$Slider = null;
	this._$SliderInner = null;
	this._$ProgressIndicator = null;
	this._$Handle = null;
	this._$Input = null;
};

/* =========================================================== */
/* Event handlers                                              */
/* =========================================================== */

/**
 * Handle the touchstart event happening on the slider.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Slider.prototype.ontouchstart = function(oEvent) {
	var fMin = this.getMin(),
		oNearestHandleDomRef,
		fNewValue;

	// mark the event for components that needs to know if the event was handled by the Slider
	oEvent.setMarked();

	if (oEvent.targetTouches.length > 1 || this._bDisabled) {	// suppress multiTouch events
		return;
	}

	oNearestHandleDomRef = this._getClosestHandle()[0];

	if (oEvent.target !== oNearestHandleDomRef) {

		// set the focus to the nearest slider handle
		jQuery.sap.delayedCall(0, oNearestHandleDomRef, "focus");
	}

	if (!this._hasFocus()) {
		this._fInitialFocusValue = this.getValue();
	}

	// recalculate some styles,
	// those values may change when the device orientation changes
	this._recalculateStyles();

	this._fDiffX = this._fSliderPaddingLeft;
	this._fInitialValue = this.getValue();

	// add active state
	this._$SliderInner.addClass(sap.m.SliderRenderer.CSS_CLASS + "Pressed");

	if (oEvent.target === this._$Handle[0]) {

		this._fDiffX = (oEvent.targetTouches[0].pageX - this._$Handle.offset().left) + this._fSliderPaddingLeft - (this._fHandleWidth / 2);
	} else {

		fNewValue = (((oEvent.targetTouches[0].pageX - this._fSliderPaddingLeft - this._fSliderOffsetLeft) / this._fSliderWidth) * (this.getMax() - fMin)) +  fMin;

		if (sap.m.Slider._bRtl) {
			fNewValue = this._convertValueForRtlMode(fNewValue);
		}

		// update the value
		this.setValue(fNewValue);

		// new validated value
		fNewValue = this.getValue();

		if (this._fInitialValue !== fNewValue) {
			this.fireLiveChange({ value: fNewValue });
		}
	}
};

/**
 * Handle the touchmove event on the slider.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Slider.prototype.ontouchmove = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Slider
	oEvent.setMarked();

	// note: prevent native document scrolling
	oEvent.preventDefault();

	if (this._bDisabled) {
		return;
	}

	var fMin = this.getMin(),
		fValue = this.getValue(),
		fNewValue = (((oEvent.targetTouches[0].pageX - this._fDiffX - this._fSliderOffsetLeft) / this._fSliderWidth) * (this.getMax() - fMin)) +  fMin;

	if (sap.m.Slider._bRtl) {
		fNewValue = this._convertValueForRtlMode(fNewValue);
	}

	this.setValue(fNewValue);

	// validated value
	fNewValue = this.getValue();

	if (fValue !== fNewValue) {
		this.fireLiveChange({ value: fNewValue });
	}
};

/**
 * Handle the touchend event on the slider.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Slider.prototype.ontouchend = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Slider
	oEvent.setMarked();

	var fValue = this.getValue();

	if (this._bDisabled) {
		return;
	}

	// remove active state
	this._$SliderInner.removeClass(sap.m.SliderRenderer.CSS_CLASS + "Pressed");

	if (this._fInitialValue !== fValue) {
		this.fireChange({ value: fValue });
	}
};

/**
 * Handle the touchcancel event on the slider.
 *
 * @private
 */
sap.m.Slider.prototype.ontouchcancel = sap.m.Slider.prototype.ontouchend;

/* ----------------------------------------------------------- */
/* Keyboard handling                                           */
/* ----------------------------------------------------------- */

/**
 * Handle when right arrow or up arrow is pressed.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Slider.prototype.onsapincrease = function(oEvent) {
	var fValue,
		fNewValue;

	// note: prevent document scrolling when arrow keys are pressed
	oEvent.preventDefault();

	// mark the event for components that needs to know if the event was handled by the Slider
	oEvent.setMarked();

	if (this.getEnabled()) {
		fValue = this.getValue();
		this.stepUp(1);
		fNewValue = this.getValue();

		if (fValue < fNewValue) {
			this._fireChangeAndLiveChange({ value: fNewValue });
		}
	}
};

/**
 * Handle when Ctrl + right arrow or up arrow are pressed.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Slider.prototype.onsapincreasemodifiers = function(oEvent) {

	// note: prevent document scrolling when arrow keys are pressed
	oEvent.preventDefault();

	// mark the event for components that needs to know if the event was handled by the Slider
	oEvent.setMarked();

	this._increaseValueBy(this._getLongStep());
};

/**
 * Handle when left arrow or down arrow are pressed.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Slider.prototype.onsapdecrease = function(oEvent) {
	var fValue,
		fNewValue;

	// note: prevent document scrolling when arrow keys are pressed
	oEvent.preventDefault();

	// mark the event for components that needs to know if the event was handled by the Slider
	oEvent.setMarked();

	if (this.getEnabled()) {
		fValue = this.getValue();
		this.stepDown(1);
		fNewValue = this.getValue();

		if (fValue > fNewValue) {
			this._fireChangeAndLiveChange({ value: fNewValue });
		}
	}
};

/**
 * Handle when Ctrl + left or Ctrl + down keys are pressed.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Slider.prototype.onsapdecreasemodifiers = function(oEvent) {

	// note: prevent document scrolling when arrow keys are pressed
	oEvent.preventDefault();

	// mark the event for components that needs to know if the event was handled by the Slider
	oEvent.setMarked();

	this._decreaseValueBy(this._getLongStep());
};

/**
 * Handle when "+" is pressed.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Slider.prototype.onsapexpand = sap.m.Slider.prototype.onsapincrease;

/**
 * Handle when "-" is pressed.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Slider.prototype.onsapcollapse = sap.m.Slider.prototype.onsapdecrease;

/**
 * Handle when page up is pressed.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Slider.prototype.onsappageup = sap.m.Slider.prototype.onsapincreasemodifiers;

/**
 * Handle when page down is pressed.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Slider.prototype.onsappagedown = sap.m.Slider.prototype.onsapdecreasemodifiers;

/**
 * Handle Home key pressed.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Slider.prototype.onsaphome = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Slider
	oEvent.setMarked();

	var fMin = this.getMin();

	// note: prevent document scrolling when Home key is pressed
	oEvent.preventDefault();

	if (this.getEnabled() && this.getValue() > fMin) {
		this.setValue(fMin);
		this._fireChangeAndLiveChange({ value: fMin });
	}
};

/**
 * Handle End key pressed.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.Slider.prototype.onsapend = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by the Slider
	oEvent.setMarked();

	var fMax = this.getMax();

	// note: prevent document scrolling when End key is pressed
	oEvent.preventDefault();

	if (this.getEnabled() && this.getValue() < fMax) {
		this.setValue(fMax);
		this._fireChangeAndLiveChange({ value: fMax });
	}
};

/**
 * Handle when tab key is pressed.
 *
 * @private
 */
sap.m.Slider.prototype.onsaptabnext = function() {
	this._fInitialFocusValue = this.getValue();
};

/**
 * Handle when shift + tab keys are pressed.
 *
 * @private
 */
sap.m.Slider.prototype.onsaptabprevious = function() {
	this._fInitialFocusValue = this.getValue();
};

/**
 * Handle when escape key is pressed.
 *
 * @private
 */
sap.m.Slider.prototype.onsapescape = function() {

	// reset the slider back to the value
	// which it had when it got the focus
	this.setValue(this._fInitialFocusValue);
};

/* =========================================================== */
/* API method                                                  */
/* =========================================================== */

/* ----------------------------------------------------------- */
/* Public methods                                              */
/* ----------------------------------------------------------- */

sap.m.Slider.prototype.getFocusDomRef = function() {
	return this.getDomRef() ? this._$Handle[0] : null;
};

/**
 * Increments the slider value by multiplying the <code>step</code> with the given parameter.
 *
 * @name sap.m.Slider.prototype.stepUp
 * @function
 * @param {int} [iStep=1] The number of steps the slider goes up.
 * @returns {sap.m.Slider} <code>this</code> to allow method chaining.
 * @type sap.m.Slider
 * @public
 */
sap.m.Slider.prototype.stepUp = function(iStep) {
	return this.setValue(this.getValue() + (this._validateStep(iStep) * this.getStep()));
};

/**
 * Decrements the slider value by multiplying the step the <code>step</code> with the given parameter.
 *
 * @name sap.m.Slider.prototype.stepDown
 * @function
 * @param {int} [iStep=1] The number of steps the slider goes down.
 * @returns {sap.m.Slider} <code>this</code> to allow method chaining.
 * @type sap.m.Slider
 * @public
 */
sap.m.Slider.prototype.stepDown = function(iStep) {
	return this.setValue(this.getValue() - (this._validateStep(iStep) * this.getStep()));
};

/**
 * Setter for property <code>value</code>.
 *
 * Default value is <code>0</code>.
 *
 * @param {float} fValue new value for property <code>value</code>.
 * @returns {sap.m.Slider} <code>this</code> to allow method chaining.
 * @public
 * @name sap.m.Slider#setValue
 * @function
 */
sap.m.Slider.prototype.setValue = function(fNewValue) {

	// note: setValue() method sometimes is called, before the step,
	// max and min properties are set, due the value of the slider
	// needs to be updated in onBeforeRendering()
	this.setValue = this._setValue;

	// update the value and suppress re-rendering
	return this.setProperty("value", fNewValue, true);
};