/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.suite.VerticalProgressIndicator.
jQuery.sap.declare("sap.ui.suite.VerticalProgressIndicator");
jQuery.sap.require("sap.ui.suite.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new VerticalProgressIndicator.
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
 * <li>{@link #getPercentage percentage} : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : string | sap.ui.core.Control</li>
 * <li>{@link #getAriaDescribedBy ariaDescribedBy} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.suite.VerticalProgressIndicator#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control shows a vertical progress bar in dependency of the given percentage. Only values between 0 and 100 are valid.
 * @extends sap.ui.core.Control
 *
 * @author Svetozar Buzdumovic 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @experimental Since version 1.2. 
 * The API may change. User with care.
 * @name sap.ui.suite.VerticalProgressIndicator
 */
sap.ui.core.Control.extend("sap.ui.suite.VerticalProgressIndicator", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"focus"
	],

	// ---- control specific ----
	library : "sap.ui.suite",
	properties : {
		"percentage" : {type : "int", group : "Misc", defaultValue : null}
	},
	associations : {
		"ariaLabelledBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaLabelledBy"}, 
		"ariaDescribedBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaDescribedBy"}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.suite.VerticalProgressIndicator with name <code>sClassName</code> 
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
 * @name sap.ui.suite.VerticalProgressIndicator.extend
 * @function
 */

sap.ui.suite.VerticalProgressIndicator.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>percentage</code>.
 * The numerical value between 0 and 100 which determines the height of the vertical bar. Values higher than 100 will be displayed as 100%, values lower than zero will be displayed as 0%.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>percentage</code>
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#getPercentage
 * @function
 */

/**
 * Setter for property <code>percentage</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iPercentage  new value for property <code>percentage</code>
 * @return {sap.ui.suite.VerticalProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#setPercentage
 * @function
 */


/**
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#getAriaLabelledBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.ui.suite.VerticalProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#addAriaLabelledBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#removeAriaLabelledBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#removeAllAriaLabelledBy
 * @function
 */

	
/**
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#getAriaDescribedBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.ui.suite.VerticalProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#addAriaDescribedBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#removeAriaDescribedBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#removeAllAriaDescribedBy
 * @function
 */

	
/**
 * Event is fired when the user clicks the control. 
 *
 * @name sap.ui.suite.VerticalProgressIndicator#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.suite.VerticalProgressIndicator</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.suite.VerticalProgressIndicator</code>.<br/> itself. 
 *  
 * Event is fired when the user clicks the control. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.suite.VerticalProgressIndicator</code>.<br/> itself.
 *
 * @return {sap.ui.suite.VerticalProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.suite.VerticalProgressIndicator</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.suite.VerticalProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.suite.VerticalProgressIndicator} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.suite.VerticalProgressIndicator#firePress
 * @function
 */


/**
 * Puts the focus to the control.
 *
 * @name sap.ui.suite.VerticalProgressIndicator.prototype.focus
 * @function

 * @type void
 * @public
 */


// Start of sap\ui\suite\VerticalProgressIndicator.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.ui.core.EnabledPropagator.call(sap.ui.suite.VerticalProgressIndicator.prototype);

/**
 * Property setter for the Percentage, which determines the height of the vertical bar.
 * Values higher than 100 will be displayed as 100%, values lower than zero will be displayed as 0%. 
 * A new rendering is not necessary, only the bar will be moved
 *
 * @param  iPercentage
 * @return {sap.ui.suite.VerticalProgressIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.suite.VerticalProgressIndicator.prototype.setPercentage = function(iPercentage) {

  // exit if nothing changed
  var VerticalPercent = this.getPercentage();
  if (VerticalPercent == iPercentage) return this;

  // get the ProgressBar
  this.oBar  = jQuery.sap.domById(this.getId() + '-bar');

  // get the new Value and calculate Pixels
  VerticalPercent = iPercentage;
  if (VerticalPercent < 0 || VerticalPercent == Number.NaN) VerticalPercent = 0;
  if (VerticalPercent > 100) VerticalPercent = 100;
  var PixelDown = Math.round(VerticalPercent * 58 / 100);
  var PixelUp   = 58 - PixelDown;

  //set the new values
  this.setProperty('percentage', iPercentage, true); // No re-rendering!
  jQuery(this.oBar).css("top",PixelUp);
  jQuery(this.oBar).css("height",PixelDown);

  //set the ARIA property
  if(!this.oThis){
	this.oThis = jQuery.sap.byId(this.getId());
	}
  this.oThis.attr('aria-valuenow', iPercentage + '%');
  return this;

};


/**
 * Function is called when control is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.suite.VerticalProgressIndicator.prototype.onclick = function(oEvent) {
	this.firePress({/* no parameters */});
	oEvent.preventDefault();
	oEvent.stopPropagation();
};


// Implementation of API method focus(). Documentation available in generated code.
sap.ui.suite.VerticalProgressIndicator.prototype.focus = function() {
	var oDomRef = this.getDomRef();
	if(oDomRef) {
		oDomRef.focus();
	}
};