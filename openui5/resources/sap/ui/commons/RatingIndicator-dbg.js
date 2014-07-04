/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.RatingIndicator.
jQuery.sap.declare("sap.ui.commons.RatingIndicator");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new RatingIndicator.
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
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getMaxValue maxValue} : int (default: 5)</li>
 * <li>{@link #getValue value} : float (default: 0)</li>
 * <li>{@link #getAverageValue averageValue} : float (default: 0)</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI</li>
 * <li>{@link #getIconUnselected iconUnselected} : sap.ui.core.URI</li>
 * <li>{@link #getIconHovered iconHovered} : sap.ui.core.URI</li>
 * <li>{@link #getVisualMode visualMode} : sap.ui.commons.RatingIndicatorVisualMode (default: sap.ui.commons.RatingIndicatorVisualMode.Half)</li></ul>
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
 * <li>{@link sap.ui.commons.RatingIndicator#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Is used to let the user do some rating on a certain topic. The amount of rating symbols can be specified, as well as the URIs to the
 * image icons which shall be used as rating symbols. When the user performs a rating, an event is fired.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.RatingIndicator
 */
sap.ui.core.Control.extend("sap.ui.commons.RatingIndicator", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"editable" : {type : "boolean", group : "Behavior", defaultValue : true},
		"maxValue" : {type : "int", group : "Behavior", defaultValue : 5},
		"value" : {type : "float", group : "Behavior", defaultValue : 0, bindable : "bindable"},
		"averageValue" : {type : "float", group : "Behavior", defaultValue : 0},
		"iconSelected" : {type : "sap.ui.core.URI", group : "Behavior", defaultValue : null},
		"iconUnselected" : {type : "sap.ui.core.URI", group : "Behavior", defaultValue : null},
		"iconHovered" : {type : "sap.ui.core.URI", group : "Behavior", defaultValue : null},
		"visualMode" : {type : "sap.ui.commons.RatingIndicatorVisualMode", group : "Behavior", defaultValue : sap.ui.commons.RatingIndicatorVisualMode.Half}
	},
	associations : {
		"ariaDescribedBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaDescribedBy"}, 
		"ariaLabelledBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaLabelledBy"}
	},
	events : {
		"change" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.RatingIndicator with name <code>sClassName</code> 
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
 * @name sap.ui.commons.RatingIndicator.extend
 * @function
 */

sap.ui.commons.RatingIndicator.M_EVENTS = {'change':'change'};


/**
 * Getter for property <code>visible</code>.
 * If set to invisible, the control is not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.RatingIndicator#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RatingIndicator#setVisible
 * @function
 */


/**
 * Getter for property <code>editable</code>.
 * Value 'true' is required for changes on the rating symbols.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.ui.commons.RatingIndicator#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RatingIndicator#setEditable
 * @function
 */


/**
 * Getter for property <code>maxValue</code>.
 * The number of displayed rating symbols
 *
 * Default value is <code>5</code>
 *
 * @return {int} the value of property <code>maxValue</code>
 * @public
 * @name sap.ui.commons.RatingIndicator#getMaxValue
 * @function
 */

/**
 * Setter for property <code>maxValue</code>.
 *
 * Default value is <code>5</code> 
 *
 * @param {int} iMaxValue  new value for property <code>maxValue</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RatingIndicator#setMaxValue
 * @function
 */


/**
 * Getter for property <code>value</code>.
 * The currently selected value. If value is set to sap.ui.commons.RatingIndicator.NoValue, the averageValue is shown.
 *
 * Default value is <code>0</code>
 *
 * @return {float} the value of property <code>value</code>
 * @public
 * @name sap.ui.commons.RatingIndicator#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {float} fValue  new value for property <code>value</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RatingIndicator#setValue
 * @function
 */


/**
 * Binder for property <code>value</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RatingIndicator#bindValue
 * @function
 */

/**
 * Unbinder for property <code>value</code>.
 *
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RatingIndicator#unbindValue
 * @function
 */


/**
 * Getter for property <code>averageValue</code>.
 * This value is shown if no value is set. This can be used to display an average Value before the user votes.
 *
 * Default value is <code>0</code>
 *
 * @return {float} the value of property <code>averageValue</code>
 * @public
 * @name sap.ui.commons.RatingIndicator#getAverageValue
 * @function
 */

/**
 * Setter for property <code>averageValue</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {float} fAverageValue  new value for property <code>averageValue</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RatingIndicator#setAverageValue
 * @function
 */


/**
 * Getter for property <code>iconSelected</code>.
 * The URI to the image which shall be displayed for all selected rating symbols.
 * Note that when this attribute is used, also the other icon attributes need to be set.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconSelected</code>
 * @public
 * @name sap.ui.commons.RatingIndicator#getIconSelected
 * @function
 */

/**
 * Setter for property <code>iconSelected</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconSelected  new value for property <code>iconSelected</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RatingIndicator#setIconSelected
 * @function
 */


/**
 * Getter for property <code>iconUnselected</code>.
 * The URI to the image which shall be displayed for all unselected rating symbols. If this attribute is used, a requirement is that all custom icons need to have the same size.
 * Note that when this attribute is used also the other icon attributes need to be set.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconUnselected</code>
 * @public
 * @name sap.ui.commons.RatingIndicator#getIconUnselected
 * @function
 */

/**
 * Setter for property <code>iconUnselected</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconUnselected  new value for property <code>iconUnselected</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RatingIndicator#setIconUnselected
 * @function
 */


/**
 * Getter for property <code>iconHovered</code>.
 * The URI to the image which is displayed when the mouse hovers onto a rating symbol.
 * If used, a requirement is that all custom icons need to have the same size.
 * Note that when this attribute is used also the other icon attributes need to be set.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconHovered</code>
 * @public
 * @name sap.ui.commons.RatingIndicator#getIconHovered
 * @function
 */

/**
 * Setter for property <code>iconHovered</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconHovered  new value for property <code>iconHovered</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RatingIndicator#setIconHovered
 * @function
 */


/**
 * Getter for property <code>visualMode</code>.
 * Defines how float values are visualized: Full, Half, Continuous (see enumeration RatingIndicatorVisualMode)
 *
 * Default value is <code>Half</code>
 *
 * @return {sap.ui.commons.RatingIndicatorVisualMode} the value of property <code>visualMode</code>
 * @public
 * @name sap.ui.commons.RatingIndicator#getVisualMode
 * @function
 */

/**
 * Setter for property <code>visualMode</code>.
 *
 * Default value is <code>Half</code> 
 *
 * @param {sap.ui.commons.RatingIndicatorVisualMode} oVisualMode  new value for property <code>visualMode</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RatingIndicator#setVisualMode
 * @function
 */


/**
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.RatingIndicator#getAriaDescribedBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RatingIndicator#addAriaDescribedBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * @name sap.ui.commons.RatingIndicator#removeAriaDescribedBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.RatingIndicator#removeAllAriaDescribedBy
 * @function
 */

	
/**
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.RatingIndicator#getAriaLabelledBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RatingIndicator#addAriaLabelledBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * @name sap.ui.commons.RatingIndicator#removeAriaLabelledBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.RatingIndicator#removeAllAriaLabelledBy
 * @function
 */

	
/**
 * The event is fired when the user has done a rating. 
 *
 * @name sap.ui.commons.RatingIndicator#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.value The rated value
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.RatingIndicator</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.RatingIndicator</code>.<br/> itself. 
 *  
 * The event is fired when the user has done a rating. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.RatingIndicator</code>.<br/> itself.
 *
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RatingIndicator#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.RatingIndicator</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RatingIndicator#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'value' of type <code>int</code> The rated value</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.RatingIndicator#fireChange
 * @function
 */


// Start of sap\ui\commons\RatingIndicator.js
jQuery.sap.require("sap.ui.core.theming.Parameters");

sap.ui.commons.RatingIndicator.NoValue = -9999;
/**
 * Control Initialization
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.init = function(){
	this.iHoveredRating = -1;
};

/**
 * Does all the cleanup when the RatingIndicator is to be destroyed.
 * Called from Element's destroy() method.
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.exit = function (){
	// no super.exit() to call
};

/**
 * Called when the theme is changed.
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onThemeChanged = function(oEvent){
	if (this.getDomRef()) {
		this.invalidate();
	}
};

/**
 * Avoid dragging the icons.
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.ondragstart = function(oEvent){
	oEvent.preventDefault();
};

/**
 * Returns the value to be displayed, which is either a set value or (if no value is set) the
 * averageValue
 * @private
 */
sap.ui.commons.RatingIndicator.prototype._getDisplayValue = function() {
	var fValue = this.getValue();
	
	if (fValue == sap.ui.commons.RatingIndicator.NoValue) {
		// If the value is set to sap.ui.commons.RatingIndicator.NoValue, show the averageValue 
		return this.getAverageValue();
	} else {
		return fValue;
	}
}

/**
 * Behavior implementation which is executed when the user presses Arrow Right (Left in RTL case) or Arrow Up.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onsapincrease = function(oEvent){
	var iNewHoverValue = this.iHoveredRating;

	if(iNewHoverValue == -1){
		iNewHoverValue = Math.round(this._getDisplayValue()) - 1;
		if(iNewHoverValue == -1){
			iNewHoverValue = 0;
		}
	}

	if(iNewHoverValue < this.getMaxValue()){
		iNewHoverValue = iNewHoverValue + 1;
	}else{
		iNewHoverValue = this.getMaxValue();
	}

	this.updateHoverState(oEvent, iNewHoverValue);
};

/**
 * Behavior implementation which is executed when the user presses Arrow Left (Right in RTL case) or Arrow Down.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onsapdecrease = function(oEvent){
	var iNewHoverValue = this.iHoveredRating;

	if(iNewHoverValue == -1 && Math.round(this._getDisplayValue()) == 0) {
		return;
	}

	if(iNewHoverValue == -1){
		iNewHoverValue = Math.round(this._getDisplayValue()) + 1;
	}

	if(iNewHoverValue > 1){
		iNewHoverValue = iNewHoverValue - 1;
	}else{
		iNewHoverValue = 1;
	}

	this.updateHoverState(oEvent, iNewHoverValue);
};

/**
 * Behavior implementation which is executed when the user presses Home.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onsaphome = function(oEvent){
	this.updateHoverState(oEvent, 1);
};

/**
 * Behavior implementation which is executed when the user presses End.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onsapend = function(oEvent){
	this.updateHoverState(oEvent, this.getMaxValue());
};

/**
 * Behavior implementation which is executed when the user presses Enter or Space.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onsapselect = function(oEvent){
	this.saveValue(oEvent, true, this.iHoveredRating);
};

/**
 * Behavior implementation which is executed when the user presses Esc.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onsapescape = function(oEvent){
	this.saveValue(oEvent, true, -1);
};

/**
 * Behavior implementation which is executed when the control loses the focus.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onfocusout = function(oEvent){
	//Do not react on focusouts of child DOM refs in IE
	if(!!sap.ui.Device.browser.internet_explorer && oEvent.target != this.getDomRef()) {
		return;
	}
	this.saveValue(oEvent, false, this.iHoveredRating);
};

/**
 * Behavior implementation which is executed when the control gets the focus.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onfocusin = function(oEvent){
	//Avoid focusing child DOM refs in IE
	if(!!sap.ui.Device.browser.internet_explorer && oEvent.target != this.getDomRef()) {
		this.getDomRef().focus();
	}
};

/**
 * Behavior implementation which is executed when the user clicks on a rating symbol.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onclick = function(oEvent){
	this.saveValue(oEvent, true, this.getSymbolValue(oEvent));
};

/**
 * Behavior implementation which is executed when the user moves the mouse on a rating symbol.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onmouseover = function(oEvent){
	oEvent.preventDefault();
	oEvent.stopPropagation();

	if(!this.getEditable()) {
		return;
	}
	this.iHoveredRating = -1;

	var symbolValue = this.getSymbolValue(oEvent);
	if(symbolValue == -1){
		return;
	}

	for(var i=1; i<=symbolValue; i++){
		sap.ui.commons.RatingIndicatorRenderer.hoverRatingSymbol(i, this);
	}
	for(var i=symbolValue+1; i<=this.getMaxValue(); i++){
		sap.ui.commons.RatingIndicatorRenderer.hoverRatingSymbol(i, this, true);
	}
};

/**
 * Behavior implementation which is executed when the user moves the mouse out of the rating symbol.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onmouseout = function(oEvent){
	oEvent.preventDefault();
	oEvent.stopPropagation();

	if(!this.getEditable()) {
		return;
	}

	if(jQuery.sap.checkMouseEnterOrLeave(oEvent, this.getDomRef())){
		this.iHoveredRating = -1;
		for(var i=1; i<=this.getMaxValue(); i++){
			sap.ui.commons.RatingIndicatorRenderer.unhoverRatingSymbol(i, this);
		}
	}
};

/**
 * Returns the rating symbol value which is affected by the given event or -1
 * if the event was not on a rating symbol.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.getSymbolValue = function(oEvent){
	var oSymbol = jQuery(oEvent.target);
	if(oSymbol.hasClass("sapUiRatingItmImg") || oSymbol.hasClass("sapUiRatingItmOvrflw")){
		oSymbol = jQuery(oEvent.target.parentNode);
	}else if(oSymbol.hasClass("sapUiRatingItmOvrflwImg")){
		oSymbol = jQuery(oEvent.target.parentNode.parentNode);
	}
	var itemvalue = oSymbol.attr("itemvalue");
	if(itemvalue){
		return parseInt(itemvalue, 10);
	}
	return -1;
};

/**
 * Updates the hover state according to the current pending keyboard input.
 *
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.updateKeyboardHoverState = function(bSkipHoverAfter){
	for(var i=1; i<=this.getMaxValue(); i++){
		sap.ui.commons.RatingIndicatorRenderer.unhoverRatingSymbol(i, this);
		if(i <= this.iHoveredRating){
			sap.ui.commons.RatingIndicatorRenderer.hoverRatingSymbol(i, this);
		}else if(!bSkipHoverAfter){
			sap.ui.commons.RatingIndicatorRenderer.hoverRatingSymbol(i, this, true);
		}
	}
	this.setAriaState();
};

/**
 * Called by the framework when rendering is completed.
 *
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.onAfterRendering = function() {
	this.setAriaState();
};

/**
 * Updates the ARIA state initially and in case of changes.
 *
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.setAriaState = function() {
	var val = this.iHoveredRating == -1 ? this._getDisplayValue() : this.iHoveredRating;
	this.$().attr("aria-valuenow", val).attr("aria-valuetext", this._getText("RATING_ARIA_VALUE" , [val])).attr("aria-label", this._getText("RATING_ARIA_NAME"));
};

/**
 * Load language dependent texts.
 *
 * @private
 */
sap.ui.commons.RatingIndicator.prototype._getText = function(sKey, aArgs) {
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
	if(rb) {
		return rb.getText(sKey, aArgs);
	}
	return sKey;
};

/**
 * Helper function to save the value and fire the change event.
 *
 * @param {jQuery.Event} oEvent
 * @param {boolean} bstopEvent
 * @param {int} iNewValue
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.saveValue = function(oEvent, bstopEvent, iNewValue) {
	if(bstopEvent){
		oEvent.preventDefault();
		// the control should not stop browser event propagation
		// Example: table control needs to catch and handle the event as well
		//oEvent.stopPropagation();
	}
	if(!this.getEditable()) {
		return false;
	}

	this.iHoveredRating = -1;
	if(iNewValue != -1 && iNewValue != this.getValue()){
		this.setValue(iNewValue);
		this.fireChange({value:iNewValue});
		return true;
	}else{
		//Update hover state only if value is not changed (otherwise rerendering is done anyway)
		for(var i=1; i<=this.getMaxValue(); i++){
			sap.ui.commons.RatingIndicatorRenderer.unhoverRatingSymbol(i, this);
		}
		this.setAriaState();
		return false;
	}
};

/**
 * Helper function to update the hover state when keyboard is used.
 *
 * @param {jQuery.Event} oEvent
 * @param {interger} iNewHoverValue
 * @private
 */
sap.ui.commons.RatingIndicator.prototype.updateHoverState = function(oEvent, iNewHoverValue) {
	oEvent.preventDefault();
	oEvent.stopPropagation();
	if(!this.getEditable()) {
		return;
	}
	this.iHoveredRating = iNewHoverValue;
	this.updateKeyboardHoverState();
};

/**
 * Setter for property <code>maxValue</code>.
 *
 * Default value is <code>5</code>
 * Minimum value is <code>1</code>
 *
 * @param {int} iMaxValue new value for property <code>maxValue</code>
 * @return {sap.ui.commons.RatingIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.RatingIndicator.prototype.setMaxValue = function(iMaxValue) {
	if(iMaxValue < 1) {
		iMaxValue = 1;
	}
	this.setProperty("maxValue", iMaxValue);
	return this;
};
