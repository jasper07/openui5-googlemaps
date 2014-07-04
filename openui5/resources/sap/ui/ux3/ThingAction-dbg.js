/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ThingAction.
jQuery.sap.declare("sap.ui.ux3.ThingAction");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new ThingAction.
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
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.ThingAction#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Thing Action for Swatch, QuickView, Thinginspector
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.ThingAction
 */
sap.ui.core.Element.extend("sap.ui.ux3.ThingAction", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"text" : {type : "string", group : "Misc", defaultValue : null},
		"enabled" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	events : {
		"select" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.ThingAction with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.ThingAction.extend
 * @function
 */

sap.ui.ux3.ThingAction.M_EVENTS = {'select':'select'};


/**
 * Getter for property <code>text</code>.
 * text of action
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.ux3.ThingAction#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.ux3.ThingAction} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingAction#setText
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * action enabled (true/false)
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.ux3.ThingAction#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.ux3.ThingAction} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingAction#setEnabled
 * @function
 */


/**
 * Event will be fired when the action was triggered. 
 *
 * @name sap.ui.ux3.ThingAction#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id Id of selected action
 * @param {sap.ui.ux3.ThingAction} oControlEvent.getParameters.action Selected Thing Action
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.ux3.ThingAction</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ThingAction</code>.<br/> itself. 
 *  
 * Event will be fired when the action was triggered. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingAction</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ThingAction} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingAction#attachSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.ux3.ThingAction</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingAction} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingAction#detachSelect
 * @function
 */

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of selected action</li>
 * <li>'action' of type <code>sap.ui.ux3.ThingAction</code> Selected Thing Action</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ThingAction} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.ThingAction#fireSelect
 * @function
 */


// Start of sap\ui\ux3\ThingAction.js
///**
// * This file defines behavior for the control,
// */
//sap.ui.ux3.ThingAction.prototype.init = function(){
//   // do something for initialization...
//};
sap.ui.ux3.ThingAction.prototype.onclick = function(oEvent) {
	this.fireSelect({
		id : this.getId(),
		action: this
	});
};
sap.ui.ux3.ThingAction.prototype.onsapselect = function(oEvent) {
	this.fireSelect({
		id : this.getId(),
		action: this
	});
};