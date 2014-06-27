/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.suite.TaskCircle.
jQuery.sap.declare("sap.ui.suite.TaskCircle");
jQuery.sap.require("sap.ui.suite.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new TaskCircle.
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
 * <li>{@link #getValue value} : int (default: 0)</li>
 * <li>{@link #getMaxValue maxValue} : int (default: 100)</li>
 * <li>{@link #getMinValue minValue} : int (default: 0)</li>
 * <li>{@link #getColor color} : sap.ui.suite.TaskCircleColor (default: sap.ui.suite.TaskCircleColor.Gray)</li></ul>
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
 * <li>{@link sap.ui.suite.TaskCircle#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control shows a circle which radius and color depends on the given parameters
 * @extends sap.ui.core.Control
 *
 * @author Svetozar Buzdumovic 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @experimental Since version 1.2. 
 * The API may change. User with care.
 * @name sap.ui.suite.TaskCircle
 */
sap.ui.core.Control.extend("sap.ui.suite.TaskCircle", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"focus"
	],

	// ---- control specific ----
	library : "sap.ui.suite",
	properties : {
		"value" : {type : "int", group : "Misc", defaultValue : 0},
		"maxValue" : {type : "int", group : "Misc", defaultValue : 100},
		"minValue" : {type : "int", group : "Misc", defaultValue : 0},
		"color" : {type : "sap.ui.suite.TaskCircleColor", group : "Misc", defaultValue : sap.ui.suite.TaskCircleColor.Gray}
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
 * Creates a new subclass of class sap.ui.suite.TaskCircle with name <code>sClassName</code> 
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
 * @name sap.ui.suite.TaskCircle.extend
 * @function
 */

sap.ui.suite.TaskCircle.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>value</code>.
 * Current value of the task circle to be displayed. In dependency of the parameters maxValue and minValue it controls the size of the circle.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>value</code>
 * @public
 * @name sap.ui.suite.TaskCircle#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iValue  new value for property <code>value</code>
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.TaskCircle#setValue
 * @function
 */


/**
 * Getter for property <code>maxValue</code>.
 * Upper limit of the displayed values. Default is 100.
 *
 * Default value is <code>100</code>
 *
 * @return {int} the value of property <code>maxValue</code>
 * @public
 * @name sap.ui.suite.TaskCircle#getMaxValue
 * @function
 */

/**
 * Setter for property <code>maxValue</code>.
 *
 * Default value is <code>100</code> 
 *
 * @param {int} iMaxValue  new value for property <code>maxValue</code>
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.TaskCircle#setMaxValue
 * @function
 */


/**
 * Getter for property <code>minValue</code>.
 * Lower limit of the displayed values. Default is 0.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>minValue</code>
 * @public
 * @name sap.ui.suite.TaskCircle#getMinValue
 * @function
 */

/**
 * Setter for property <code>minValue</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iMinValue  new value for property <code>minValue</code>
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.TaskCircle#setMinValue
 * @function
 */


/**
 * Getter for property <code>color</code>.
 * Color of the circle. The default color is red.
 *
 * Default value is <code>Gray</code>
 *
 * @return {sap.ui.suite.TaskCircleColor} the value of property <code>color</code>
 * @public
 * @name sap.ui.suite.TaskCircle#getColor
 * @function
 */

/**
 * Setter for property <code>color</code>.
 *
 * Default value is <code>Gray</code> 
 *
 * @param {sap.ui.suite.TaskCircleColor} oColor  new value for property <code>color</code>
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.TaskCircle#setColor
 * @function
 */


/**
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.suite.TaskCircle#getAriaLabelledBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.TaskCircle#addAriaLabelledBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * @name sap.ui.suite.TaskCircle#removeAriaLabelledBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.suite.TaskCircle#removeAllAriaLabelledBy
 * @function
 */

	
/**
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.suite.TaskCircle#getAriaDescribedBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.TaskCircle#addAriaDescribedBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * @name sap.ui.suite.TaskCircle#removeAriaDescribedBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.suite.TaskCircle#removeAllAriaDescribedBy
 * @function
 */

	
/**
 * Event is fired when the user clicks the control. 
 *
 * @name sap.ui.suite.TaskCircle#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.suite.TaskCircle</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.suite.TaskCircle</code>.<br/> itself. 
 *  
 * Event is fired when the user clicks the control. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.suite.TaskCircle</code>.<br/> itself.
 *
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.TaskCircle#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.suite.TaskCircle</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.TaskCircle#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.suite.TaskCircle#firePress
 * @function
 */


/**
 * Puts the focus to the control.
 *
 * @name sap.ui.suite.TaskCircle.prototype.focus
 * @function

 * @type void
 * @public
 */


// Start of sap\ui\suite\TaskCircle.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.ui.core.EnabledPropagator.call(sap.ui.suite.TaskCircle.prototype);


/**
 * init is called when the control is initialized
 */
sap.ui.suite.TaskCircle.prototype.init = function(){
};



/**
 * Function is called when control is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.suite.TaskCircle.prototype.onclick = function(oEvent){
  this.firePress({});
  oEvent.preventDefault();
  oEvent.stopPropagation();
};


// Implementation of API method focus(). Documentation available in generated code.
sap.ui.suite.TaskCircle.prototype.focus = function() {
	var oDomRef = this.getDomRef();
	if(oDomRef) {
		oDomRef.focus();
	}
};