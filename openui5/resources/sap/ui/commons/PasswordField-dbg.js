/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.PasswordField.
jQuery.sap.declare("sap.ui.commons.PasswordField");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.TextField");


/**
 * Constructor for a new PasswordField.
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
 * <ul></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.commons.TextField#constructor sap.ui.commons.TextField}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A text field with masked characters which borrows its properties and methods from TextField.
 * @extends sap.ui.commons.TextField
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.PasswordField
 */
sap.ui.commons.TextField.extend("sap.ui.commons.PasswordField", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons"
}});


/**
 * Creates a new subclass of class sap.ui.commons.PasswordField with name <code>sClassName</code> 
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
 * @name sap.ui.commons.PasswordField.extend
 * @function
 */


// Start of sap\ui\commons\PasswordField.js
sap.ui.commons.PasswordField.prototype.onfocusin = function(oEvent) {

	sap.ui.commons.TextField.prototype.onfocusin.apply(this, arguments);

	if (!sap.ui.Device.support.input.placeholder && this.getPlaceholder()) {
		// if browser not supports placeholder on input tag, set the password type if focused
		jQuery(this.getInputDomRef()).attr("type", "password");
	}

};

sap.ui.commons.PasswordField.prototype.onsapfocusleave = function(oEvent) {

	if (!sap.ui.Device.support.input.placeholder && this.getPlaceholder()) {
		// if browser not supports placeholder on input tag, remove the password type if placeholder is there and not focused
		var $Input = jQuery(this.getInputDomRef());
		if (!$Input.val()) {
			$Input.removeAttr("type");
		}
	}

	sap.ui.commons.TextField.prototype.onsapfocusleave.apply(this, arguments);

};