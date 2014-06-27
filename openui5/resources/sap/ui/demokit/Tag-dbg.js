/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.demokit.Tag.
jQuery.sap.declare("sap.ui.demokit.Tag");
jQuery.sap.require("sap.ui.demokit.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new Tag.
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
 * <li>{@link #getWeight weight} : int (default: 1)</li></ul>
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
 * A Tag in a TagCloud
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.demokit.Tag
 */
sap.ui.core.Element.extend("sap.ui.demokit.Tag", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.demokit",
	properties : {
		"text" : {type : "string", group : "Misc", defaultValue : null},
		"weight" : {type : "int", group : "Misc", defaultValue : 1}
	}
}});


/**
 * Creates a new subclass of class sap.ui.demokit.Tag with name <code>sClassName</code> 
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
 * @name sap.ui.demokit.Tag.extend
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * The text to be disaplyed for this tag.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.demokit.Tag#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.demokit.Tag} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.Tag#setText
 * @function
 */


/**
 * Getter for property <code>weight</code>.
 * The weight for this tag. Can be any integer value.
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>weight</code>
 * @public
 * @name sap.ui.demokit.Tag#getWeight
 * @function
 */

/**
 * Setter for property <code>weight</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iWeight  new value for property <code>weight</code>
 * @return {sap.ui.demokit.Tag} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.Tag#setWeight
 * @function
 */


// Start of sap\ui\demokit\Tag.js
sap.ui.demokit.Tag.prototype.onclick = function(oEvent){
	//Inform the parent about the onclick event
	this.oParent.firePressEvent(this);
};
