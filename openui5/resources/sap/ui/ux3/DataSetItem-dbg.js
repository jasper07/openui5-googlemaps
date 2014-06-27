/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.DataSetItem.
jQuery.sap.declare("sap.ui.ux3.DataSetItem");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new DataSetItem.
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
 * <li>{@link #getIconSrc iconSrc} : sap.ui.core.URI</li>
 * <li>{@link #getTitle title} : string (default: 'Title')</li>
 * <li>{@link #getCheckable checkable} : boolean (default: true)</li>
 * <li>{@link #getSubtitle subtitle} : string (default: 'Subtitle')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.DataSetItem#event:selected selected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * DataSet Item
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.DataSetItem
 */
sap.ui.core.Element.extend("sap.ui.ux3.DataSetItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"iconSrc" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"title" : {type : "string", group : "Misc", defaultValue : 'Title'},
		"checkable" : {type : "boolean", group : "Misc", defaultValue : true},
		"subtitle" : {type : "string", group : "Misc", defaultValue : 'Subtitle'}
	},
	aggregations : {
    	"_template" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}
	},
	events : {
		"selected" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.DataSetItem with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.DataSetItem.extend
 * @function
 */

sap.ui.ux3.DataSetItem.M_EVENTS = {'selected':'selected'};


/**
 * Getter for property <code>iconSrc</code>.
 * image
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconSrc</code>
 * @public
 * @name sap.ui.ux3.DataSetItem#getIconSrc
 * @function
 */

/**
 * Setter for property <code>iconSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconSrc  new value for property <code>iconSrc</code>
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetItem#setIconSrc
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * title
 *
 * Default value is <code>Title</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ui.ux3.DataSetItem#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is <code>Title</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetItem#setTitle
 * @function
 */


/**
 * Getter for property <code>checkable</code>.
 * checkable
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>checkable</code>
 * @public
 * @name sap.ui.ux3.DataSetItem#getCheckable
 * @function
 */

/**
 * Setter for property <code>checkable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bCheckable  new value for property <code>checkable</code>
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetItem#setCheckable
 * @function
 */


/**
 * Getter for property <code>subtitle</code>.
 * subtitle
 *
 * Default value is <code>Subtitle</code>
 *
 * @return {string} the value of property <code>subtitle</code>
 * @public
 * @name sap.ui.ux3.DataSetItem#getSubtitle
 * @function
 */

/**
 * Setter for property <code>subtitle</code>.
 *
 * Default value is <code>Subtitle</code> 
 *
 * @param {string} sSubtitle  new value for property <code>subtitle</code>
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetItem#setSubtitle
 * @function
 */


/**
 * Event Fired when Datset item is selected.
 *  
 *
 * @name sap.ui.ux3.DataSetItem#selected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.itemId Id of the selected Datset item
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'selected' event of this <code>sap.ui.ux3.DataSetItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.DataSetItem</code>.<br/> itself. 
 *  
 * Event Fired when Datset item is selected.
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.DataSetItem</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetItem#attachSelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'selected' event of this <code>sap.ui.ux3.DataSetItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetItem#detachSelected
 * @function
 */

/**
 * Fire event selected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'itemId' of type <code>string</code> Id of the selected Datset item</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.DataSetItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.DataSetItem#fireSelected
 * @function
 */


// Start of sap\ui\ux3\DataSetItem.js
/**
 * Handle onclick event. Fires selected Event.
 * @param {sap.ui.base.Event} oEvent click event
 * @private
 */
sap.ui.ux3.DataSetItem.prototype.onclick = function(oEvent) {
	oEvent.stopPropagation();
	
	// determine modifier keys
	var bShift = oEvent.shiftKey;
	var bCtrl = !!(oEvent.metaKey || oEvent.ctrlKey);
	
	this.fireSelected({
		itemId: this.getId(),
		shift:  bShift,
		ctrl:   bCtrl
	});
};
sap.ui.ux3.DataSetItem.prototype.ondblclick = function(oEvent) {
	this.onclick(oEvent);
};