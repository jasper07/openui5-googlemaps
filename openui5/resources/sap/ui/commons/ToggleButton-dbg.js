/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ToggleButton.
jQuery.sap.declare("sap.ui.commons.ToggleButton");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.Button");


/**
 * Constructor for a new ToggleButton.
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
 * <li>{@link #getPressed pressed} : boolean (default: false)</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.commons.Button#constructor sap.ui.commons.Button}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The ToggleButton Control is a Button that can be toggled between pressed and normal state
 * @extends sap.ui.commons.Button
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.ToggleButton
 */
sap.ui.commons.Button.extend("sap.ui.commons.ToggleButton", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"pressed" : {type : "boolean", group : "Data", defaultValue : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.ToggleButton with name <code>sClassName</code> 
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
 * @name sap.ui.commons.ToggleButton.extend
 * @function
 */


/**
 * Getter for property <code>pressed</code>.
 * true when button is pressed down.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>pressed</code>
 * @public
 * @name sap.ui.commons.ToggleButton#getPressed
 * @function
 */

/**
 * Setter for property <code>pressed</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bPressed  new value for property <code>pressed</code>
 * @return {sap.ui.commons.ToggleButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ToggleButton#setPressed
 * @function
 */


// Start of sap\ui\commons\ToggleButton.js
/**
 * Function is called when ToggleButton is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.ToggleButton.prototype.onclick = function(oEvent) {
	if (this.getEnabled()){
		this.setPressed(!this.getPressed());
		if (this.$().is(":visible")){
			this.firePress({pressed: this.getPressed()});
		}
	}
	oEvent.preventDefault();
	oEvent.stopPropagation();
};


sap.ui.commons.ToggleButton.prototype.setPressed = function(bPressed) {
	if (bPressed != this.getProperty("pressed")) {
		this.setProperty("pressed", bPressed, true);
		if (!this.getPressed()){
			this.getRenderer().ondeactivePressed(this);
		} else {
			this.getRenderer().onactivePressed(this);
		}
		this.getRenderer().updateImage(this);
	}
	return this;
};


sap.ui.commons.ToggleButton.prototype.onAfterRendering = function() {
	if (!this.getPressed()){
		this.getRenderer().ondeactivePressed(this);
	} else {
		this.getRenderer().onactivePressed(this);
	}
};
