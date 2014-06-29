/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.tmpl.DOMAttribute.
sap.ui.define(['sap/ui/core/library','sap/ui/core/Element'], function() {
	"use strict";


/**
 * Constructor for a new tmpl/DOMAttribute.
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
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getValue value} : string</li></ul>
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
 * Represents a DOM attribute of a DOM element.
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @experimental Since version 1.15. 
 * The templating might be changed in future versions.
 * @name sap.ui.core.tmpl.DOMAttribute
 */
sap.ui.core.Element.extend("sap.ui.core.tmpl.DOMAttribute", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.core",
	properties : {
		"name" : {type : "string", group : "Data", defaultValue : null},
		"value" : {type : "string", group : "Data", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.ui.core.tmpl.DOMAttribute with name <code>sClassName</code> 
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
 * @name sap.ui.core.tmpl.DOMAttribute.extend
 * @function
 */


/**
 * Getter for property <code>name</code>.
 * Name of the DOM attribute
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.ui.core.tmpl.DOMAttribute#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.core.tmpl.DOMAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.tmpl.DOMAttribute#setName
 * @function
 */


/**
 * Getter for property <code>value</code>.
 * Value of the DOM attribute
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>value</code>
 * @public
 * @name sap.ui.core.tmpl.DOMAttribute#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.ui.core.tmpl.DOMAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.tmpl.DOMAttribute#setValue
 * @function
 */


// Start of sap/ui/core/tmpl/DOMAttribute.js
sap.ui.core.tmpl.DOMAttribute.prototype.setValue = function(sValue) {
	this.setProperty("value", sValue, true); // no re-rendering!
	// do DOM modification to avoid re-rendering
	var oParent = this.getParent(),
	    $this = oParent && oParent.$();
	if ($this && $this.length > 0) {
		$this.attr(this.getName(), this.getProperty("value"));
	}
	return this;
};

	return sap.ui.core.tmpl.DOMAttribute;

}, /* bExport = */ true);
