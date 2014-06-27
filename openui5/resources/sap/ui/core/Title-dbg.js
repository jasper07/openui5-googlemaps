/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.Title.
sap.ui.define(['./library','./Element'], function() {
	"use strict";


/**
 * Constructor for a new Title.
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
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getLevel level} : sap.ui.core.TitleLevel (default: sap.ui.core.TitleLevel.Auto)</li>
 * <li>{@link #getEmphasized emphasized} : boolean (default: false)</li></ul>
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
 * Represents a title element that can be used for aggregation with other controls
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16.0
 * @name sap.ui.core.Title
 */
sap.ui.core.Element.extend("sap.ui.core.Title", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.core",
	properties : {
		"text" : {type : "string", group : "Appearance", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"level" : {type : "sap.ui.core.TitleLevel", group : "Appearance", defaultValue : sap.ui.core.TitleLevel.Auto},
		"emphasized" : {type : "boolean", group : "Appearance", defaultValue : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.core.Title with name <code>sClassName</code> 
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
 * @name sap.ui.core.Title.extend
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * Defines the title text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.core.Title#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.core.Title} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Title#setText
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Defines the URL for icon display
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.core.Title#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.core.Title} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Title#setIcon
 * @function
 */


/**
 * Getter for property <code>level</code>.
 * Defines the level of the title. If set to auto the level of the title is chosen by the control rendering the title.
 * 
 * Currently not all controls using the Title.control supporting this property.
 *
 * Default value is <code>Auto</code>
 *
 * @return {sap.ui.core.TitleLevel} the value of property <code>level</code>
 * @public
 * @name sap.ui.core.Title#getLevel
 * @function
 */

/**
 * Setter for property <code>level</code>.
 *
 * Default value is <code>Auto</code> 
 *
 * @param {sap.ui.core.TitleLevel} oLevel  new value for property <code>level</code>
 * @return {sap.ui.core.Title} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Title#setLevel
 * @function
 */


/**
 * Getter for property <code>emphasized</code>.
 * If set the title is displayed emphasized.
 * This feature is nor supported by all controls using the Title.control.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>emphasized</code>
 * @public
 * @name sap.ui.core.Title#getEmphasized
 * @function
 */

/**
 * Setter for property <code>emphasized</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEmphasized  new value for property <code>emphasized</code>
 * @return {sap.ui.core.Title} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.Title#setEmphasized
 * @function
 */


// Start of sap/ui/core/Title.js

	return sap.ui.core.Title;

}, /* bExport = */ true);
