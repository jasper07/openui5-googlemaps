/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.IconTabSeparator.
jQuery.sap.declare("sap.m.IconTabSeparator");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new IconTabSeparator.
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
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: '')</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li></ul>
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
 * A tab separator item class
 * @extends sap.ui.core.Element
 * @implements sap.m.IconTab
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.IconTabSeparator
 */
sap.ui.core.Element.extend("sap.m.IconTabSeparator", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.m.IconTab"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : ''},
		"iconDensityAware" : {type : "boolean", group : "Appearance", defaultValue : true}
	}
}});


/**
 * Creates a new subclass of class sap.m.IconTabSeparator with name <code>sClassName</code> 
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
 * @name sap.m.IconTabSeparator.extend
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * The icon to display for this separator. If no icon is given, a separator line will be used instead.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.m.IconTabSeparator#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.IconTabSeparator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabSeparator#setIcon
 * @function
 */


/**
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * 
 * If bandwidth is the key for the application, set this value to false.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * @name sap.m.IconTabSeparator#getIconDensityAware
 * @function
 */

/**
 * Setter for property <code>iconDensityAware</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.IconTabSeparator} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabSeparator#setIconDensityAware
 * @function
 */


// Start of sap\m\IconTabSeparator.js
/**
 * Lazy load feed icon image.
 *
 * @param {Array} aCssClasses array of css classes which will be added if the image needs to be created.
 * @param {sap.ui.core.Control} oParent this element's parent.
 * @private
 */
sap.m.IconTabSeparator.prototype._getImageControl = function(aCssClasses, oParent) {
	var mProperties = { 
		src : this.getIcon(),
		densityAware : this.getIconDensityAware()
	};
	
	this._oImageControl = sap.m.ImageHelper.getImageControl(null, this._oImageControl, oParent, mProperties, aCssClasses);
	
	return this._oImageControl;
};

/**
 * Function is called when exiting the element.
 * 
 * @private
 */
sap.m.IconTabSeparator.prototype.exit = function(oEvent) {
	
	if (this._oImageControl) {
		this._oImageControl.destroy();
	}
	
	if (sap.ui.core.Item.prototype.exit) {
		sap.ui.core.Item.prototype.exit.call(this, oEvent);
	}
};