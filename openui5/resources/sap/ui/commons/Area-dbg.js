/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Area.
jQuery.sap.declare("sap.ui.commons.Area");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new Area.
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
 * <li>{@link #getShape shape} : string</li>
 * <li>{@link #getCoords coords} : string</li>
 * <li>{@link #getHref href} : sap.ui.core.URI</li>
 * <li>{@link #getAlt alt} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
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
 * Used for defining areas in an image map. At runtime, the user can trigger an action, or start a URL, from the single image areas.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.Area
 */
sap.ui.core.Element.extend("sap.ui.commons.Area", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"shape" : {type : "string", group : "Misc", defaultValue : null},
		"coords" : {type : "string", group : "Misc", defaultValue : null},
		"href" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"alt" : {type : "string", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Area with name <code>sClassName</code> 
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
 * @name sap.ui.commons.Area.extend
 * @function
 */


/**
 * Getter for property <code>shape</code>.
 * The value is a string and can be 'rect' for rectangle, 'poly' for poligon, 'circle', or default.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>shape</code>
 * @public
 * @name sap.ui.commons.Area#getShape
 * @function
 */

/**
 * Setter for property <code>shape</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sShape  new value for property <code>shape</code>
 * @return {sap.ui.commons.Area} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Area#setShape
 * @function
 */


/**
 * Getter for property <code>coords</code>.
 * Coordinates of the area
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>coords</code>
 * @public
 * @name sap.ui.commons.Area#getCoords
 * @function
 */

/**
 * Setter for property <code>coords</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sCoords  new value for property <code>coords</code>
 * @return {sap.ui.commons.Area} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Area#setCoords
 * @function
 */


/**
 * Getter for property <code>href</code>.
 * Hyper link that is executed when the area is clicked
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>href</code>
 * @public
 * @name sap.ui.commons.Area#getHref
 * @function
 */

/**
 * Setter for property <code>href</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sHref  new value for property <code>href</code>
 * @return {sap.ui.commons.Area} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Area#setHref
 * @function
 */


/**
 * Getter for property <code>alt</code>.
 * Alternative text that is displayed in the case the image is not available
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>alt</code>
 * @public
 * @name sap.ui.commons.Area#getAlt
 * @function
 */

/**
 * Setter for property <code>alt</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAlt  new value for property <code>alt</code>
 * @return {sap.ui.commons.Area} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Area#setAlt
 * @function
 */


// Start of sap\ui\commons\Area.js
///**
// * This file defines behavior for the control,
// */
//sap.ui.dev.Area.prototype.init = function(){
//   // do something for initialization...
//};

/**
 * Function is called when Link is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Area.prototype.onclick = function(oEvent) {

	// The Element or Control that initiated the event. For example the id of the area if image map is defined for the current image.
	var oEventSource = jQuery(oEvent.target).control(0);

    // Fire event on Image Map
	this.getParent().firePress({areaId: oEventSource.getId()});
};