/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Slider.
jQuery.sap.declare("sap.ui.commons.Slider");
jQuery.sap.require("sap.ui.commons.library");
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
 * <li>{@link #getMin min} : float (default: 0)</li>
 * <li>{@link #getMax max} : float (default: 100)</li>
 * <li>{@link #getValue value} : float (default: 50)</li>
 * <li>{@link #getSmallStepWidth smallStepWidth} : float</li>
 * <li>{@link #getTotalUnits totalUnits} : int</li>
 * <li>{@link #getStepLabels stepLabels} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getLabels labels} : string[]</li>
 * <li>{@link #getVertical vertical} : boolean (default: false)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li></ul>
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
 * <li>{@link sap.ui.commons.Slider#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.commons.Slider#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The interactive control is displayed as a horizontal line with a pointer and units of measurement.
 * Users can move the pointer along the line to change values with graphical support.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.Slider
 */
sap.ui.core.Control.extend("sap.ui.commons.Slider", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"min" : {type : "float", group : "Appearance", defaultValue : 0},
		"max" : {type : "float", group : "Appearance", defaultValue : 100},
		"value" : {type : "float", group : "Appearance", defaultValue : 50},
		"smallStepWidth" : {type : "float", group : "Appearance", defaultValue : null},
		"totalUnits" : {type : "int", group : "Appearance", defaultValue : null},
		"stepLabels" : {type : "boolean", group : "Appearance", defaultValue : false},
		"visible" : {type : "boolean", group : "", defaultValue : true},
		"editable" : {type : "boolean", group : "Behavior", defaultValue : true},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"labels" : {type : "string[]", group : "Misc", defaultValue : null},
		"vertical" : {type : "boolean", group : "Appearance", defaultValue : false},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'}
	},
	associations : {
		"ariaDescribedBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaDescribedBy"}, 
		"ariaLabelledBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaLabelledBy"}
	},
	events : {
		"change" : {}, 
		"liveChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Slider with name <code>sClassName</code> 
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
 * @name sap.ui.commons.Slider.extend
 * @function
 */

sap.ui.commons.Slider.M_EVENTS = {'change':'change','liveChange':'liveChange'};


/**
 * Getter for property <code>width</code>.
 * Width of the horizontal slider.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.Slider#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setWidth
 * @function
 */


/**
 * Getter for property <code>min</code>.
 * Minimal value of the slider.
 *
 * Default value is <code>0</code>
 *
 * @return {float} the value of property <code>min</code>
 * @public
 * @name sap.ui.commons.Slider#getMin
 * @function
 */

/**
 * Setter for property <code>min</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {float} fMin  new value for property <code>min</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setMin
 * @function
 */


/**
 * Getter for property <code>max</code>.
 * Maximal value of the slider
 *
 * Default value is <code>100</code>
 *
 * @return {float} the value of property <code>max</code>
 * @public
 * @name sap.ui.commons.Slider#getMax
 * @function
 */

/**
 * Setter for property <code>max</code>.
 *
 * Default value is <code>100</code> 
 *
 * @param {float} fMax  new value for property <code>max</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setMax
 * @function
 */


/**
 * Getter for property <code>value</code>.
 * Current value of the slider. (Position of the grip.)
 *
 * Default value is <code>50</code>
 *
 * @return {float} the value of property <code>value</code>
 * @public
 * @name sap.ui.commons.Slider#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is <code>50</code> 
 *
 * @param {float} fValue  new value for property <code>value</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setValue
 * @function
 */


/**
 * Getter for property <code>smallStepWidth</code>.
 * The grip can only be moved in steps of this width.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {float} the value of property <code>smallStepWidth</code>
 * @public
 * @name sap.ui.commons.Slider#getSmallStepWidth
 * @function
 */

/**
 * Setter for property <code>smallStepWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {float} fSmallStepWidth  new value for property <code>smallStepWidth</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setSmallStepWidth
 * @function
 */


/**
 * Getter for property <code>totalUnits</code>.
 * Number of units that are displayed by ticks. The PageUp and PageDown keys navigate according to these units.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>totalUnits</code>
 * @public
 * @name sap.ui.commons.Slider#getTotalUnits
 * @function
 */

/**
 * Setter for property <code>totalUnits</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iTotalUnits  new value for property <code>totalUnits</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setTotalUnits
 * @function
 */


/**
 * Getter for property <code>stepLabels</code>.
 * Display step numbers for the ticks on the slider.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>stepLabels</code>
 * @public
 * @name sap.ui.commons.Slider#getStepLabels
 * @function
 */

/**
 * Setter for property <code>stepLabels</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bStepLabels  new value for property <code>stepLabels</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setStepLabels
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible sliders are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.Slider#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setVisible
 * @function
 */


/**
 * Getter for property <code>editable</code>.
 * Using the slider interactively requires value "true".
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.ui.commons.Slider#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setEditable
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.commons.Slider#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setEnabled
 * @function
 */


/**
 * Getter for property <code>labels</code>.
 * Labels to be displayed instead of numbers. Attribute totalUnits and label count should be the same
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string[]} the value of property <code>labels</code>
 * @public
 * @name sap.ui.commons.Slider#getLabels
 * @function
 */

/**
 * Setter for property <code>labels</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string[]} aLabels  new value for property <code>labels</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#setLabels
 * @function
 */


/**
 * Getter for property <code>vertical</code>.
 * Orientation of slider
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>vertical</code>
 * @public
 * @since 1.7.1
 * @name sap.ui.commons.Slider#getVertical
 * @function
 */

/**
 * Setter for property <code>vertical</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bVertical  new value for property <code>vertical</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.1
 * @name sap.ui.commons.Slider#setVertical
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Height of the vertical slider.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @since 1.7.1
 * @name sap.ui.commons.Slider#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.1
 * @name sap.ui.commons.Slider#setHeight
 * @function
 */


/**
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.Slider#getAriaDescribedBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#addAriaDescribedBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * @name sap.ui.commons.Slider#removeAriaDescribedBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Slider#removeAllAriaDescribedBy
 * @function
 */

	
/**
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.Slider#getAriaLabelledBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#addAriaLabelledBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * @name sap.ui.commons.Slider#removeAriaLabelledBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Slider#removeAllAriaLabelledBy
 * @function
 */

	
/**
 * Value was changed. This event is fired if the value has changed by an user action. 
 *
 * @name sap.ui.commons.Slider#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {float} oControlEvent.getParameters.value Current value of the slider after a change. 
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.Slider</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.Slider</code>.<br/> itself. 
 *  
 * Value was changed. This event is fired if the value has changed by an user action. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Slider</code>.<br/> itself.
 *
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.Slider</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>float</code> Current value of the slider after a change. </li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.Slider#fireChange
 * @function
 */


/**
 * Value was changed. This event is fired during the mouse move. The normal change event ist only fired by mouseup. 
 *
 * @name sap.ui.commons.Slider#liveChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {float} oControlEvent.getParameters.value Current value of the slider after a change. 
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.ui.commons.Slider</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.Slider</code>.<br/> itself. 
 *  
 * Value was changed. This event is fired during the mouse move. The normal change event ist only fired by mouseup. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Slider</code>.<br/> itself.
 *
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#attachLiveChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.ui.commons.Slider</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Slider#detachLiveChange
 * @function
 */

/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>float</code> Current value of the slider after a change. </li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.Slider#fireLiveChange
 * @function
 */


// Start of sap\ui\commons\Slider.js
jQuery.sap.require("sap.ui.core.ResizeHandler");
jQuery.sap.require("sap.ui.core.EnabledPropagator");

sap.ui.core.EnabledPropagator.call(sap.ui.commons.Slider.prototype);

sap.ui.commons.Slider.prototype.exit = function() {
	// Cleanup resize event registration on exit
	if(this.sResizeListenerId){
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};

sap.ui.commons.Slider.prototype.onBeforeRendering = function() {
	// Cleanup resize event registration before re-rendering
	if(this.sResizeListenerId){
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};

sap.ui.commons.Slider.prototype.onAfterRendering = function () {

	// Warning in the case of wrong properties
	if( this.getMin() >= this.getMax() ){
		jQuery.sap.log.warning('Property wrong: Min:' + this.getMin() + ' > Max:' + this.getMax() );
	}

	this.oGrip = this.getDomRef("grip");
	this.oBar  = this.getDomRef("bar");
	this.oHiLi = this.getDomRef("hili");
	this.bRtl  = sap.ui.getCore().getConfiguration().getRTL();
	this.bAcc  = sap.ui.getCore().getConfiguration().getAccessibility();
	this.bTextLabels = (this.getLabels() && this.getLabels().length > 0);
	this.oMovingGrip = this.oGrip;

	var fNewValue = this.getValue();
	if( fNewValue >= this.getMax() ){
		fNewValue   = this.getMax();
	}else if( fNewValue <= this.getMin() ){
		fNewValue   = this.getMin();
	}

	if (this.bTextLabels && (this.getLabels().length - 1) != this.getTotalUnits()) {
		jQuery.sap.log.warning('label count should be one more than total units','sap.ui.commons.Slider');
	}

	this.iDecimalFactor = this.calcDecimalFactor(this.getSmallStepWidth());

	// Get left shift for middle of grip. Use offsetWidth to include borders. Round to prevent calculation errors.
	this.iShiftGrip = Math.round(this.getOffsetWidth(this.oGrip) / 2);

	// Calculate grip position
	var iNewPos = ( fNewValue - this.getMin() ) / ( this.getMax() - this.getMin() ) * this.getBarWidth();

	if(this.bRtl || this.getVertical()){
		iNewPos = this.getBarWidth() - iNewPos;
	}

	// Move grip to hit the point in the middle
	this.changeGrip(fNewValue, iNewPos, this.oGrip);

	this.repositionTicksAndLabels();

	// Disable text selection
	this.allowTextSelection(false);

	// Register resize event
	this.oDomRef = this.getDomRef();
	this.sResizeListenerId = sap.ui.core.ResizeHandler.register(this.oDomRef, jQuery.proxy(this.onresize, this));

};

/**
 * Function is called when Slider is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onclick = function(oEvent) {

	var oMovingGrip = this.oMovingGrip;


	if (this.getEditable() && this.getEnabled()){

		var fMultiplicator;

		// Check for ID where the behavior depends on the clicked area.
		var sMyTargetId = oEvent.target.getAttribute( 'ID' );

		var fNewValue = this.getValue();
		var iNewPos   = this.getOffsetLeft(this.oGrip) + this.iShiftGrip;

		switch ( sMyTargetId ){
			case ( this.oBar.id ):
			case ( this.oHiLi.id ):
				// Click on slide bar
				if (this.getVertical()) {
					fMultiplicator = this.getBarWidth() - this.getOffsetX(oEvent);
				} else {
					fMultiplicator = this.getOffsetX(oEvent);
				}
				if (sMyTargetId == this.oHiLi.id) {
					if (this.getVertical()) {
						fMultiplicator -= this.getOffsetLeft(this.oHiLi);
					} else {
						fMultiplicator += this.getOffsetLeft(this.oHiLi);
					}
				}
				fNewValue = this.convertRtlValue(this.getMin() + ( ( ( this.getMax() - this.getMin() )  / this.getBarWidth() ) * fMultiplicator ));
				iNewPos = this.getOffsetX(oEvent);
				if (sMyTargetId == this.oHiLi.id) {
					iNewPos += this.getOffsetLeft(this.oHiLi);
				}
				if (this.oStartTarget && this.targetIsGrip(this.oStartTarget.id)) {
					oMovingGrip = this.oStartTarget;
				} else if (this.targetIsGrip(sMyTargetId)) {
					oMovingGrip = oEvent.target;
				} else {
					oMovingGrip = this.getNearestGrip(iNewPos);
				}
				break;
			case ( this.getId() + '-left' ):
				// Click on left end
				iNewPos = 0;
				if (this.getVertical()) {
					fNewValue = this.getMax();
					oMovingGrip = this.getRightGrip();
				} else {
					fNewValue = this.getMin();
					oMovingGrip = this.getLeftGrip();
				}
				break;
			case ( this.getId() + '-right' ):
				// Click on right end
				iNewPos = this.getBarWidth();
				if (!this.getVertical()) {
					fNewValue = this.getMax();
					oMovingGrip = this.getRightGrip();
				} else {
					fNewValue = this.getMin();
					oMovingGrip = this.getLeftGrip();
				}
				break;
			default:
				//If target is grip return
				//Not implemented as case because RangeSlider has multiple grips, for which cases cannot be inserted afterwards
				if (this.targetIsGrip(sMyTargetId)) {
					return;
				}
				// Check whether tick is clicked
				var iTickPos = sMyTargetId.search('-tick');
				if( iTickPos >= 0){
					var iTickNum = parseInt( sMyTargetId.slice( this.getId().length+5), 10);
					iNewPos = this.fTickDist * iTickNum;
					var iTotalUnits;
					if (this.bTextLabels) {
						iTotalUnits = this.getLabels().length - 1;
					} else {
						iTotalUnits = this.getTotalUnits();
					}
					fNewValue = this.convertRtlValue(this.getMin() + ( ( ( this.getMax() - this.getMin() ) / iTotalUnits ) * iTickNum ));
					if (this.oStartTarget && this.targetIsGrip(this.oStartTarget.id)) {
						oMovingGrip = this.oStartTarget;
					} else if (this.targetIsGrip(sMyTargetId)) {
						oMovingGrip = oEvent.target;
					} else {
						oMovingGrip = this.getNearestGrip(iNewPos);
					}
					break;
				}
	
				// Outer DIV clicked -> ID given by caller. This is the case if all other DIVs are smaller,
				// or if tick text is clicked
				var iOffsetBar = jQuery(this.oBar).offset();
				var iOffsetMe  = jQuery(oEvent.target).offset();
				if (this.getVertical()) {
					iNewPos = this.getOffsetX(oEvent) - ( iOffsetBar.top - iOffsetMe.top );
				} else {
					iNewPos = this.getOffsetX(oEvent) - ( iOffsetBar.left - iOffsetMe.left );
				}
				if( iNewPos <= 0 ){
					iNewPos = 0;
					if (this.getVertical()) {
						fNewValue = this.getMax();
					} else {
						fNewValue = this.getMin();
					}
				}else{
					if( iNewPos >= this.getBarWidth() ){
						iNewPos = this.getBarWidth();
						if (this.getVertical()) {
							fNewValue = this.getMin();
						} else {
							fNewValue = this.getMax();
						}
					}else{
						if (this.getVertical()) {
							fMultiplicator = this.getBarWidth() - iNewPos;
						} else {
							fMultiplicator = iNewPos;
						}
						fNewValue = this.getMin() + ( ( ( this.getMax() - this.getMin() )  / this.getBarWidth() ) * fMultiplicator );
					}
				}
				fNewValue = this.convertRtlValue(fNewValue);
				if (this.oStartTarget && this.targetIsGrip(this.oStartTarget.id)) {
					oMovingGrip = this.oStartTarget;
				} else if (this.targetIsGrip(sMyTargetId)) {
					oMovingGrip = oEvent.target;
				} else {
					oMovingGrip = this.getNearestGrip(iNewPos);
				}
				break;
		}

		var validation = this.validateNewPosition(fNewValue, iNewPos, oMovingGrip, (this.getValueForGrip(oMovingGrip) > fNewValue));
		fNewValue = validation.fNewValue;
		iNewPos = validation.iNewPos;

		this.changeGrip(fNewValue, iNewPos, oMovingGrip);
		this.handleFireChange();
	}

	// Set focus to grip
	oMovingGrip.focus();
	this.oMovingGrip = oMovingGrip;
	this.oStartTarget = null;

};

/**
 * Function is called when Slider is clicked
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onmousedown = function(oEvent) {
	if (this.getEditable() && this.getEnabled()){

		// Check for ID. This is only possible on the grip.
		var sMyTargetId = oEvent.target.getAttribute( 'ID' );

		if( this.targetIsGrip(sMyTargetId) ){
			this.bGripMousedown = true;

			// Remember start coordinates
			this.iStartDragX = oEvent.pageX;
			this.iStartDragY = oEvent.pageY;
			this.iStartLeft  = this.getOffsetLeft(oEvent.target) + this.iShiftGrip;

			this.oMovingGrip = oEvent.target;

			var oThat = this;
			this.handleMoveCall = function (event){
				oThat.handleMove(event);
			};
			this.preventSelect = function (event){
				return false;
			};

			jQuery(window.document).bind('mousemove', this.handleMoveCall);
			jQuery(window.document).bind('selectstart', this.preventSelect);
			jQuery.sap.bindAnyEvent(jQuery.proxy(this.onAnyEvent, this));
		}
		this.oStartTarget = null;
	}
};

/**
 * Function is called when Slider is unclicked
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onmouseup = function(oEvent) {
	if (this.getEditable() && this.getEnabled()){

		// Mouseup is handled on every div, not only on grip

		this.bGripMousedown = false;

		if (this.handleMoveCall) {
			jQuery(window.document).unbind('mousemove', this.handleMoveCall);
			jQuery(window.document).unbind('selectstart', this.preventSelect);
			jQuery.sap.unbindAnyEvent(this.onAnyEvent);

			if ( this.iStartLeft != ( this.getOffsetLeft(this.oMovingGrip) + this.iShiftGrip )){
				// Only if position was changed
				// only fire change event because liveChange is already fired in handleMove
				this.handleFireChangeWithoutLive();
			}

			this.handleMoveCall = null;
			this.iStartDragX    = null;
			this.iStartDragY    = null;
			this.iStartLeft     = null;
		}
	}

};

/**
 * Function is called when Slider is moved
 *
 * @param {DOM.Event} Event
 * @private
 */
sap.ui.commons.Slider.prototype.handleMove = function(event) {

	if (this.getEditable() && this.getEnabled() && this.bGripMousedown ){

		event = event || window.event;

		// Move is handled on every div, not only on grip

		var iNewPos;
		if (this.getVertical()) {
			iNewPos = this.iStartLeft + event.pageY - this.iStartDragY;
		} else {
			iNewPos = this.iStartLeft + event.pageX - this.iStartDragX;
		}

		if( iNewPos <= 0 ){
			iNewPos = 0 ;
			if (this.getVertical()) {
				var fNewValue = this.getMax();
			} else {
				var fNewValue = this.getMin();
			}
		}else{
			if ( iNewPos >= this.getBarWidth() ){
				iNewPos = this.getBarWidth() ;
				if (this.getVertical()) {
					var fNewValue = this.getMin();
				} else {
					var fNewValue = this.getMax();
				}
			}else{
				if (this.getVertical()) {
					var fMultiplicator = this.getBarWidth() - iNewPos;
				} else {
					var fMultiplicator = iNewPos;
				}
				var fNewValue = this.getMin() + ( ( ( this.getMax() - this.getMin() )  / this.getBarWidth() ) * fMultiplicator ) ;
			}
		}
		fNewValue = this.convertRtlValue(fNewValue);
		var fOldValue = this.getValueForGrip(this.oMovingGrip);

		var validation = this.validateNewPosition(fNewValue, iNewPos, this.oMovingGrip, (fOldValue > fNewValue));
		fNewValue = validation.fNewValue;
		iNewPos = validation.iNewPos;

		this.changeGrip(fNewValue, iNewPos, this.oMovingGrip);
		fNewValue = this.getValueForGrip(this.oMovingGrip); // get new value considering step width

		this.fireLiveChangeForGrip(this.oMovingGrip, fNewValue, fOldValue);
		this.oStartTarget = this.oMovingGrip;
	}

	event.cancelBubble = true;

	return false;

};

/**
 * Function is called when Slider is moved
 *
 * @param Grip oGrip, float fNewValue
 * @private
 */
sap.ui.commons.Slider.prototype.fireLiveChangeForGrip = function (oGrip, fNewValue, fOldValue) {
	if (oGrip == this.oGrip) {
		if ( fOldValue != fNewValue ){
			// fire event only if value changed
			this.fireLiveChange( { value: fNewValue } );
		}
	}
}

/**
 * Handles all events that occur outside the Popup and
 * dispatches it to the onOuterEvent
 * @param {jQuery.EventObject} oEvent The event object of the ui.core framework
 * @private
 */
sap.ui.commons.Slider.prototype.onAnyEvent = function (oEvent) {

	jQuery.sap.log.info('onAnyEvent fired: "' + oEvent.type + '"');

	// Skip if not editable or no drag operation in progress
	if ((!this.getEditable()) || (!this.getEnabled()) || !this.bGripMousedown){
		return;
	}

	// Check if outside of control
	var oSource = oEvent.target;
	if ((!jQuery.sap.containsOrEquals(this.oDomRef,oSource) || oSource.tagName=="BODY") && oEvent.type == 'mouseup') {
		this.onmouseup(oEvent);
	}

};

/**
 * Function is called when right arrow is pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapright = function(oEvent) {

	if (this.getEditable() && this.getEnabled()){

		var fNewValue = this.convertRtlValue(this.getValueForGrip(this.oMovingGrip));
		var iNewPos   = this.getOffsetLeft(this.oMovingGrip) + this.iShiftGrip;

		if(this.getSmallStepWidth() > 0){
			// Step defined -> shift grip one step; at least one pixel, if step < 1px
			var fStepPixel = this.getBarWidth() / ( this.getMax() - this.getMin() ) * this.getSmallStepWidth();

			if(fStepPixel > 1){
				fNewValue = fNewValue + this.getSmallStepWidth();
				if (this.getVertical()) {
					iNewPos   = iNewPos - fStepPixel;
				} else {
					iNewPos   = iNewPos + fStepPixel;
				}
			}else{
				// Step < 1px -> shift grip to next step that is 1 pixel away
				fNewValue = fNewValue + ( 1 / fStepPixel * this.getSmallStepWidth() );
				if (this.getVertical()) {
					iNewPos   = iNewPos - 1;
				} else {
					iNewPos   = iNewPos + 1;
				}
			}
		}else{
			// No step defined -> shift grip 1 pixel
			fNewValue = fNewValue + ( ( this.getMax() - this.getMin() ) / this.getBarWidth() );
			if (this.getVertical()) {
				iNewPos   = iNewPos - 1;
			} else {
				iNewPos   = iNewPos + 1;
			}
		}
		fNewValue = this.convertRtlValue(fNewValue);

		var validation = this.validateNewPosition(fNewValue, iNewPos, this.oMovingGrip, !this.getVertical() && this.bRtl);
		fNewValue = validation.fNewValue;
		iNewPos = validation.iNewPos;

		this.changeGrip(fNewValue, iNewPos, this.oMovingGrip);
		this.handleFireChange();

	}

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Function is called when left arrow is pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapleft = function(oEvent) {

	if (this.getEditable() && this.getEnabled()){
		
		var fNewValue = this.convertRtlValue(this.getValueForGrip(this.oMovingGrip));
		var iNewPos   = this.getOffsetLeft(this.oMovingGrip) + this.iShiftGrip;

		if(this.getSmallStepWidth() > 0){
			// Step defined -> shift grip one step (at least one pixel, if step < 1px)
			var fStepPixel = this.getBarWidth() / ( this.getMax() - this.getMin() ) * this.getSmallStepWidth();

			if(fStepPixel > 1){
				fNewValue = fNewValue - this.getSmallStepWidth();
				if (this.getVertical()) {
					iNewPos   = iNewPos + fStepPixel;
				} else {
					iNewPos   = iNewPos - fStepPixel;
				}
			}else{
				fNewValue = fNewValue - ( 1 / fStepPixel * this.getSmallStepWidth() );
				if (this.getVertical()) {
					iNewPos   = iNewPos + 1;
				} else {
					iNewPos   = iNewPos - 1;
				}
			}
		}else{
			// No step defined -> shift grip one pixel
			fNewValue = fNewValue - ( ( this.getMax() - this.getMin() ) / this.getBarWidth() );
			if (this.getVertical()) {
				iNewPos   = iNewPos + 1;
			} else {
				iNewPos   = iNewPos - 1;
			}
		}
		fNewValue = this.convertRtlValue(fNewValue);

		var validation = this.validateNewPosition(fNewValue, iNewPos, this.oMovingGrip, this.getVertical() || !this.bRtl);
		fNewValue = validation.fNewValue;
		iNewPos = validation.iNewPos;

		this.changeGrip(fNewValue, iNewPos, this.oMovingGrip);
		this.handleFireChange();

	}

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Function is called when up arrow is pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapup = function(oEvent) {
	if (this.bRtl && !this.getVertical()) {
		this.onsapleft(oEvent);
	} else {
		this.onsapright(oEvent);
	}
};

/**
 * Function is called when DOWN arrow is pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapdown = function(oEvent) {
	if (this.bRtl && !this.getVertical()) {
		this.onsapright(oEvent);
	} else {
		this.onsapleft(oEvent);
	}
};

/**
 * Function is called when "+" is pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapexpand = function(oEvent) {

	if(!this.bRtl){
		// Normal case - "+" similar to right
		this.onsapright(oEvent);
	}else{
		// RTL case - "+" similar to left
		this.onsapleft(oEvent);
	}

};

/**
 * Function is called when "-" is pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapcollapse = function(oEvent) {

	if(!this.bRtl){
		// Normal case - "-" similar to left
		this.onsapleft(oEvent);
	}else{
		// RTL case - "-" similar to right
		this.onsapright(oEvent);
	}

};

/**
 * Function is called when Home key pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsaphome = function(oEvent) {

	if (this.getEditable() && this.getEnabled()){
		this.setValue(this.getMin());
		this.handleFireChange();
	}

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Function is called when End key pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapend = function(oEvent) {

	if (this.getEditable() && this.getEnabled()){
		this.setValue(this.getMax());
		this.handleFireChange();
	}

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Function is called when Ctrl+right key pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsaprightmodifiers = function(oEvent) {

	if (this.getEditable() && this.getEnabled()){

		if(!this.fPageSize){
			if(this.getTotalUnits() > 0){
				this.fPageSize = ( this.getMax() - this.getMin() ) / this.getTotalUnits();
			}else{
				this.fPageSize = ( this.getMax() - this.getMin() ) / 10;
			}
		}

		if(!this.bRtl || this.getVertical()){
			var fNewValue = this.getValueForGrip(this.oMovingGrip) + this.fPageSize;
		}else{
			var fNewValue = this.getValueForGrip(this.oMovingGrip) - this.fPageSize;
		}
		// Calculate iNewPos from fNewValue to prevent rounding errors after repeating pageUps
		var iNewPos   = ( fNewValue - this.getMin() ) / ( this.getMax() - this.getMin() ) * this.getBarWidth() ;
		if (this.bRtl && !this.getVertical()) {
			iNewPos = this.getBarWidth()-iNewPos;
		}

		if (this.getVertical()) {
			if (iNewPos > this.getBarWidth()) iNewPos = this.getBarWidth();
			iNewPos = this.getBarWidth() - iNewPos;
		}

		var validation = this.validateNewPosition(fNewValue, iNewPos, this.oMovingGrip, !this.getVertical() && this.bRtl);
		fNewValue = validation.fNewValue;
		iNewPos = validation.iNewPos;

		this.changeGrip(fNewValue, iNewPos, this.oMovingGrip);
		this.handleFireChange();
	}

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Function is called when Ctrl+left key pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapleftmodifiers = function(oEvent) {

	if (this.getEditable() && this.getEnabled()){

		if(!this.fPageSize){
			if(this.getTotalUnits() > 0){
				this.fPageSize = ( this.getMax() - this.getMin() ) / this.getTotalUnits();
			}else{
				this.fPageSize = ( this.getMax() - this.getMin() ) / 10;
			}
		}

		if(!this.bRtl || this.getVertical()){
			var fNewValue = this.getValueForGrip(this.oMovingGrip) - this.fPageSize;
		}else{
			var fNewValue = this.getValueForGrip(this.oMovingGrip) + this.fPageSize;
		}
		// Calculate iNewPos from fNewValue to prevent rounding errors after repeating pageDowns
		var iNewPos   = ( fNewValue - this.getMin() ) / ( this.getMax() - this.getMin() ) * this.getBarWidth();
		if (this.bRtl && !this.getVertical()) {
			iNewPos = this.getBarWidth()-iNewPos;
		}

		if (this.getVertical()) {
			if (iNewPos < 0) iNewPos = 0;
			iNewPos = this.getBarWidth() - iNewPos;
		}

		var validation = this.validateNewPosition(fNewValue, iNewPos, this.oMovingGrip, this.getVertical() || !this.bRtl);
		fNewValue = validation.fNewValue;
		iNewPos = validation.iNewPos;

		this.changeGrip(fNewValue, iNewPos, this.oMovingGrip);
		this.handleFireChange();
	}

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Function is called when Ctrl+down key pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapdownmodifiers = function(oEvent) {
	if (this.bRtl && !this.getVertical()) {
		this.onsaprightmodifiers(oEvent);
	} else {
		this.onsapleftmodifiers(oEvent);
	}
};

/**
 * Function is called when Ctrl+Up key pressed
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onsapupmodifiers = function(oEvent) {
	if (this.bRtl && !this.getVertical()) {
		this.onsapleftmodifiers(oEvent);
	} else {
		this.onsaprightmodifiers(oEvent);
	}
};

/**
 * Function is called when window is resized
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.onresize = function(oEvent) {

	if (!this.getDomRef()) {
		// slider is not renderes, maybe deleted from DOM -> deregister resize handler and do nothing
		// Cleanup resize event registration on exit
		if(this.sResizeListenerId){
			sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
			this.sResizeListenerId = null;
		}
		return;
	}

	// If width of control changed -> grip position must be newly calculated

	var fNewValue = this.getValue();

	var iNewPos   = ( fNewValue - this.getMin() ) / ( this.getMax() - this.getMin() ) * this.getBarWidth() ;
	if (this.getVertical() || this.bRtl) {
		iNewPos = this.getBarWidth() - iNewPos;
	}

	this.changeGrip(fNewValue, iNewPos, this.oGrip);

	this.repositionTicksAndLabels();

};

/*
 * Respositiotn ticks and labels
 *
 * @private
 */
sap.ui.commons.Slider.prototype.repositionTicksAndLabels = function() {
	var iTotalUnits;
	if (this.bTextLabels) {
		iTotalUnits = this.getLabels().length - 1;
	} else {
		iTotalUnits = this.getTotalUnits();
	}

	if(iTotalUnits > 0){
		// Move ticks to correct position; put it in the middle.
		// Round value shift factor separately to have the same behavior like for the grip position.

		var oTick = null;
		var oText = null;

		this.fTickDist = this.getBarWidth() / iTotalUnits;

		for (var i = 0; i <= iTotalUnits; i++){
			oTick = jQuery.sap.domById(this.getId() + '-tick' + i);
			if (!this.bRtl || this.getVertical()) {
				var iLeft = Math.round( this.fTickDist * i ) - Math.ceil( this.getOffsetWidth(oTick) / 2 );
			}else{
				var iLeft = Math.round( this.fTickDist * i ) - Math.floor( this.getOffsetWidth(oTick) / 2 );
			}
			if (this.getVertical()) {
				iLeft = this.getBarWidth() - iLeft - this.getOffsetWidth(oTick) ;
			}
			this.setLeft(iLeft, oTick);

			if( this.getStepLabels() && i > 0 && i < iTotalUnits){
				oText = jQuery.sap.domById(this.getId() + '-text' + i);
				if(this.getSmallStepWidth() > 0 && this.iDecimalFactor > 0 && !this.bTextLabels){
					jQuery(oText).text(Math.round( parseFloat(jQuery(oText).text()) * this.iDecimalFactor ) / this.iDecimalFactor);
				}
				var iLeft;
				if(!this.bRtl || this.getVertical()){
					iLeft = Math.round( ( this.fTickDist * i)) - Math.round(( this.getOffsetWidth(oText) / 2) );
				}else{
					iLeft = Math.round( ( this.fTickDist * (iTotalUnits-i))) - Math.round(( this.getOffsetWidth(oText) / 2) );
				}
				if (this.getVertical()) {
					iLeft = this.getBarWidth() - iLeft - this.getOffsetWidth(oText) ;
				}
				this.setLeft(iLeft, oText);
			}
		}
	}

};

/**
 * Called after the theme has been switched. Some adjustments required.
 * @private
 */
sap.ui.commons.Slider.prototype.onThemeChanged = function (oEvent) {

	if (this.getDomRef()) {
		// Get left shift for middle of grip. Use offsetWidth to include borders. Round to prevent calculation errors.
		this.iShiftGrip = Math.round(this.getOffsetWidth(this.oGrip) / 2);

		// Use resize function to adjust grip and ticks
		this.onresize();
	}

};

/**
 * Function is called when grip position shall be changed
 *
 * @param fNewValue iNewPos
 * @private
 */
sap.ui.commons.Slider.prototype.changeGrip = function(fNewValue, iNewPos, oGrip) {
	// Only if position was changed
	if ( iNewPos != ( this.getOffsetLeft(oGrip) + this.iShiftGrip ) ){

		if( this.getSmallStepWidth() > 0 ){
			// Move grip according to step-width
			var iStepNum   = parseInt( ( fNewValue - this.getMin() ) / this.getSmallStepWidth() , 10);
			var fLeftStep  = ( iStepNum * this.getSmallStepWidth() ) + this.getMin();
			var fRightStep = ( ( iStepNum + 1 ) * this.getSmallStepWidth() ) + this.getMin();

			if ( fRightStep > this.getMax() ){
				fRightStep = this.getMax();
			}

			var fStepPixel = this.getBarWidth() / ( this.getMax() - this.getMin() ) * this.getSmallStepWidth();

			if( ( fNewValue - fLeftStep ) < ( fRightStep - fNewValue ) ){
				fNewValue = fLeftStep;
				iNewPos   = iStepNum * fStepPixel;
			}else{
				fNewValue = fRightStep;
				iNewPos   = ( iStepNum + 1 ) * fStepPixel;
				if ( iNewPos > this.getBarWidth() ){
					iNewPos = this.getBarWidth();
				}
			}
			if (this.getVertical() || this.bRtl) {
				iNewPos = this.getBarWidth() - iNewPos;
			}
			// Round value because of calculation errors in JavaScript
			fNewValue = Math.round( fNewValue * this.iDecimalFactor ) / this.iDecimalFactor;
		}

		// Reduce position with half grip-width to center the grip. Round because Internet Explorer does not round automatically.

		var iLeft = Math.round(iNewPos - this.iShiftGrip);	
		if (isNaN(iLeft)) return;

		//Output iShiftGrip to check if rendering issue occurs because of wrong value
		jQuery.sap.log.info("iNewPos: " + iNewPos + " - iLeft: " + iLeft + " - iShiftGrip: " +this.iShiftGrip);

		this.updateValueProperty(fNewValue, oGrip);

		if (this.bTextLabels) {
			oGrip.title = this.getNearestLabel(fNewValue);
		} else {
			oGrip.title = fNewValue;
		}

		this.setLeft(iLeft, oGrip);

		this.adjustHighlightBar(iNewPos, oGrip);

		if(this.bAcc){
			this.setAriaState();
		}
	}

};

/**
 * Function to update value property for grip
 *
 * @param float fNewValue
 * @private
 */
sap.ui.commons.Slider.prototype.updateValueProperty = function(fNewValue,oGrip) {
	this.setProperty( 'value', fNewValue, true ); // Do not render complete control again
};

/**
 * Function to set width and position of highlight bar
 *
 * @param {int} iNewPos
 * @private
 */
sap.ui.commons.Slider.prototype.adjustHighlightBar = function(iNewPos,oGrip) {
	if(this.bRtl){
		// In the case of RTL, highlight must be on right side
		if (this.getVertical()) {
			this.oHiLi.style.height = this.getBarWidth() - Math.round(iNewPos) + 'px';
		} else {
			this.oHiLi.style.width = this.getBarWidth() - Math.round(iNewPos) + 'px';
		}
	}else{
		if (this.getVertical()) {
			this.oHiLi.style.height = this.getBarWidth() - Math.round(iNewPos) + 'px';
		} else {
			this.oHiLi.style.width = Math.round(iNewPos) + 'px';
		}
	}
}

/**
 * Function to calculate the decimals of a value
 *
 * Problem:  If the step-width has decimals in JavaScript, there are calculation errors.
 *           e.g. 2.01*10= 20.099999999999998 instead of 20.1
 *           This is not sufficient as result for the value of sliding step-wise.
 *           Therefore the value is rounded with the numbers of decimals the step-width has.
 *           This is not possible using the modulo or any other Math function because
 *           of the mentioned calculation error.
 * Solution: The idea is to search for the "." in the string and to calculate the rounding factor.
 *
 * @param {DOM.Event} Event
 * @private
 */
sap.ui.commons.Slider.prototype.calcDecimalFactor = function(Value) {

	var iFactor = 1;

	if( !( Value > 0 )){
		return iFactor;
	}

	var sMyString = String( Value );

	if( sMyString.indexOf( '.' ) >= 0 ){
		// Number of decimals = length of all numbers after the "." Subtract the numbers before the "." and the "." itself.
		var iMyExp = sMyString.length - sMyString.indexOf( '.' ) - 1;
	}else{
		if( sMyString.indexOf( 'e-' ) >= 0 ){
			// Floating point number -> number of decimals is number after "e-"
			var iMyExp = sMyString.slice(sMyString.indexOf( 'e-' ) + 2);
		}else{
			return iFactor;
		}
	}

	for (var i = 1; i <= iMyExp; i++){
		iFactor = iFactor * 10;
	}

	return iFactor;

};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the editable state
 *
 * @param {boolean} bEditable Whether the Slider should be editable, or not (read-only then)
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Slider.prototype.setEditable = function(bEditable) {

	this.setProperty('editable', bEditable, true); // No re-rendering

	if (this.oDomRef && this.getEnabled()){
		// If already rendered, adapt rendered control without complete re-rendering
		if (bEditable) {
			jQuery(this.oDomRef).removeClass('sapUiSliRo').addClass('sapUiSliStd');
			if(this.bAcc){
				jQuery(this.oGrip).attr('aria-disabled', false);
			}
		} else {
			jQuery(this.oDomRef).removeClass('sapUiSliStd').addClass('sapUiSliRo');
			if(this.bAcc){
				jQuery(this.oGrip).attr('aria-disabled', true);
			}
		}
	}

	return this;
};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the enabled state
 *
 * @param bEnabled Whether the Slider should be ednabled, or not (disabled)
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Slider.prototype.setEnabled = function(bEnabled) {

	this.setProperty('enabled', bEnabled, true); // No re-rendering

	if (this.oDomRef){
		// If already rendered, adapt rendered control without complete re-rendering
		jQuery(this.oDomRef).toggleClass('sapUiSliDsbl', !bEnabled);
		if( bEnabled ){
			jQuery(this.oGrip).attr('tabindex', '0');
			// set classes according editable state
			if (this.getEditable()) {
				jQuery(this.oDomRef).addClass('sapUiSliStd');
				if(this.bAcc){
					jQuery(this.oGrip).attr('aria-disabled', false);
				}
			} else {
				jQuery(this.oDomRef).addClass('sapUiSliRo');
				if(this.bAcc){
					jQuery(this.oGrip).attr('aria-disabled', true);
				}
			}
		}else{
			jQuery(this.oGrip).attr('tabindex', '-1').attr('aria-disabled', true);
			if (this.getEditable()) {
				jQuery(this.oDomRef).removeClass('sapUiSliStd');
			} else {
				jQuery(this.oDomRef).removeClass('sapUiSliRo');
			}
		}
	}

	return this;
};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the totalUnits state
 *
 * @param iTotalUnits Number of the units (tick-spaces)
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Slider.prototype.setTotalUnits = function(iTotalUnits) {

	this.setProperty('totalUnits', iTotalUnits, false); // Do re-rendering

	// Clear this.fPageSize -> must be re-calculated
	this.fPageSize = false;

	return this;
};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the value
 * A new rendering is not necessary, only the grip must be moved.
 *
 * @param fValue
 * @return {sap.ui.commons.Slider} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Slider.prototype.setValue = function(fValue) {

	this.setProperty('value', fValue, true); // No re-rendering

	// Check for number -> if NaN -> no change
	if( isNaN(fValue) ){
		return this;
	}

	if(!this.oBar){
		// Not already rendered -> return and render
		return this;
	}

	var fNewValue = parseFloat( fValue );
	var iNewPos;

	if( fNewValue >= this.getMax() ){
		fNewValue   = this.getMax();
		if (this.getVertical()) {
			iNewPos = 0;
		} else {
			iNewPos = this.getBarWidth();
		}
	}else if( fNewValue <= this.getMin() ){
			fNewValue   = this.getMin();
			if (this.getVertical()) {
				iNewPos = this.getBarWidth();
			} else {
				iNewPos = 0;
			}
	}else{
			iNewPos = ( fNewValue - this.getMin() ) / ( this.getMax() - this.getMin() ) * this.getBarWidth() ;
	}
	
	if(this.bRtl && !this.getVertical()){
		iNewPos = this.getBarWidth() - iNewPos;
	}

	this.changeGrip( fNewValue, iNewPos, this.oGrip );

	return this;

};

/**
 * fires the change event. The liveEvent is not fired here.
 *
 * @private
 */
sap.ui.commons.Slider.prototype.handleFireChangeWithoutLive = function() {
	this.fireChange({value: this.getValue()});
};

/**
 * fires the change event. The liveChange event must be fired too if the change event is fired.
 *
 * @private
 */
sap.ui.commons.Slider.prototype.handleFireChange = function() {
	var iValue = this.getValue();
	if (iValue !== this._lastValue) {
		this.fireChange({value: iValue});
		this.fireLiveChange({value: iValue});
		this._lastValue = iValue;
	}
};

/**
 * Updates the ARIA state initially and in case of changes.
 *
 * @private
 */
sap.ui.commons.Slider.prototype.setAriaState = function() {

	var fValue = this.getValue();
	
	if (this.bTextLabels) {
		fValue = this.getNearestLabel(fValue);
	}

	this.oGrip.setAttribute('aria-valuenow', fValue);
	this.oGrip.setAttribute('aria-valuetext', 'Value ' + fValue); // to prevent JAWS from saying "percent"

};

/**
 * Returns value for specified grip.
 * This function is for reuse in other sliders like the range slider, which has multiple grips
 *
 * @private
 * @param {jQuery} oGrip
 * @return {float} Value for the grip, which was passed to this function
 */
sap.ui.commons.Slider.prototype.getValueForGrip = function(oGrip) {
	return this.getValue();
};

/**
 * Check if new position and new value are valid within the slider
 *
 * @private
 * @param {float} fNewValue
 * @param {int} iNewPos
 * @param {jQuery} oGrip
 * @param {boolean} bMin If true, checks if validation should be done with minimum values, else it uses maximum values
 * @return {object} oCorrectedData Object with modified data, if validation was not successful
 */
sap.ui.commons.Slider.prototype.validateNewPosition = function(fNewValue, iNewPos, oGrip, bMin) {
	if (!this.bRtl || this.getVertical()) {
		if (bMin) {
			if ( fNewValue <= this.getMin() || iNewPos <= 0 ){
				fNewValue = this.getMin();
				if (this.getVertical()) {
					iNewPos   = this.getBarWidth();
				} else {
					iNewPos   = 0;
				}
			}
		} else {
			if ( fNewValue >= this.getMax() || iNewPos > this.getBarWidth() ){
				fNewValue = this.getMax();
				if (!this.getVertical()) {
					iNewPos   = this.getBarWidth();
				} else {
					iNewPos   = 0;
				}
			}
		}
	} else {
		if (bMin) {
			if ( fNewValue <= this.getMin() || iNewPos > this.getBarWidth() ){
				fNewValue = this.getMin();
				iNewPos   = this.getBarWidth();
			}
		} else {
			if ( fNewValue >= this.getMax() || iNewPos <= 0 ){
				fNewValue = this.getMax();
				iNewPos   = 0;
			}
		}	
	}
	return {fNewValue: fNewValue, iNewPos: iNewPos};
};


/**
 * Gets the nearest label (realative to the specified value).
 *
 * @private
 * @param {float} fNewValue
 * @return {string} Text for label
 */
sap.ui.commons.Slider.prototype.getNearestLabel = function(fValue) {
	var iPos = Math.round((this.getLabels().length-1)/(this.getMax() - this.getMin())*(fValue-this.getMin()));
	if (this.bRtl) {
		iPos = this.getLabels().length-1-iPos;
	}
	return this.getLabels()[iPos];
};


/**
 * Function returns nearest grip (if there is more than one grip). There is only one grip for the basic slider
 *
 * @private
 * @param {int} iOffset Offset relative to Bar
 * 
 */
sap.ui.commons.Slider.prototype.getNearestGrip = function(iOffset) {
	return this.oGrip;
};

/**
 * Function returns grip which should by moved after a click on left side
 *
 * @private
 */
sap.ui.commons.Slider.prototype.getLeftGrip = function() {
	return this.oGrip;
};

/**
 * Function returns grip which should by moved after a click on right side
 *
 * @private
 */
sap.ui.commons.Slider.prototype.getRightGrip = function() {
	return this.oGrip;
};

/**
 * Set left/top for an object. Translates the value for vertical sldiers and RTL
 *
 * @private
 * @param {int} iNewPos New left attribute for specified object
 * @param {jQuery} oObject
 * @param {object} oObject
 */
sap.ui.commons.Slider.prototype.setLeft = function(iNewPos, oObject) {
	if (oObject == undefined) return;
	if (this.getVertical()) {
		oObject.style.top = iNewPos + 'px';
	} else {
		oObject.style.left = iNewPos + 'px';
	}
};

/**
 * Get offset width/height for specified object. Translates between vertical and horizontal slider
 *
 * @private
 * @param {jQuery} oObject
 */
sap.ui.commons.Slider.prototype.getOffsetWidth = function(oObject) {
	if (this.getVertical()) {
		return oObject.offsetHeight;
	} else {
		return oObject.offsetWidth;
	}
};

/**
 * Get client width/height
 *
 * @private
 * @param {jQuery} oObject for specified object. Translates between vertical and horizontal slider
 */
sap.ui.commons.Slider.prototype.getBarWidth = function() {
	if (this.getVertical()) {
		return this.oBar.clientHeight;
	} else {
		return this.oBar.clientWidth;
	}
};

/**
 * Get offset left/top for specified object. Translates between vertical and horizontal slider
 *
 * @private
 * @param {jQuery} oObject
 */
sap.ui.commons.Slider.prototype.getOffsetLeft = function(oObject) {
	if (this.getVertical()) {
		return oObject.offsetTop;
	} else {
		return oObject.offsetLeft;
	}
};


/**
 * Get offset for specified event. Translates between vertical and horizontal slider
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Slider.prototype.getOffsetX = function(oEvent) {
	if (this.getVertical()) {
		return oEvent.getOffsetY();
	} else {
		if (this.bRtl) {
			return oEvent.getOffsetX();
		} else {
			return oEvent.getOffsetX();
		}
	}
};

/**
 * convert fNewValue for RTL-Mode
 *
 * @param {float} fNewValue input value
 * @returns {float} output value
 * @private
 */
sap.ui.commons.Slider.prototype.convertRtlValue = function(fNewValue) {
	if (this.bRtl && !this.getVertical()) {
		fNewValue = this.getMax() - fNewValue + this.getMin();
	}
	return fNewValue
};


/**
 * Check if a specified target is a valid grip
 *
 * @param {string} sMyTargetId
 * @private
 */
sap.ui.commons.Slider.prototype.targetIsGrip = function(sMyTargetId) {
	if( sMyTargetId == this.oGrip.id ){
		return true;
	}
	return false;
};

/*
 * Overrides getFocusDomRef of base element class.
 * @public
 */
sap.ui.commons.Slider.prototype.getFocusDomRef = function() {
	return this.oGrip;
};

/*
 * Overwrites default implementation
 * the label must point to the grip
 * @public
 */
sap.ui.commons.Slider.prototype.getIdForLabel = function () {
	return this.getId()+'-grip';
};
