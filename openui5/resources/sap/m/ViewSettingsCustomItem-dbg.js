/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ViewSettingsCustomItem.
jQuery.sap.declare("sap.m.ViewSettingsCustomItem");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.ViewSettingsItem");


/**
 * Constructor for a new ViewSettingsCustomItem.
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
 * <li>{@link #getFilterCount filterCount} : int (default: 0)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCustomControl customControl} : sap.ui.core.Control</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.ViewSettingsItem#constructor sap.m.ViewSettingsItem}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * ViewSettingsCustomItem is used for modelling custom filters in the ViewSettingsDialog.
 * @extends sap.m.ViewSettingsItem
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16
 * @name sap.m.ViewSettingsCustomItem
 */
sap.m.ViewSettingsItem.extend("sap.m.ViewSettingsCustomItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"filterCount" : {type : "int", group : "Behavior", defaultValue : 0}
	},
	aggregations : {
    	"customControl" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.m.ViewSettingsCustomItem with name <code>sClassName</code> 
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
 * @name sap.m.ViewSettingsCustomItem.extend
 * @function
 */


/**
 * Getter for property <code>filterCount</code>.
 * The number of currently active filters for this custom filter item. It will be displayed in the filter list of the ViewSettingsDialog to represent the filter state of the custom control.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>filterCount</code>
 * @public
 * @name sap.m.ViewSettingsCustomItem#getFilterCount
 * @function
 */

/**
 * Setter for property <code>filterCount</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iFilterCount  new value for property <code>filterCount</code>
 * @return {sap.m.ViewSettingsCustomItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsCustomItem#setFilterCount
 * @function
 */


/**
 * Getter for aggregation <code>customControl</code>.<br/>
 * A custom control for the filter field. It can be used for complex filtering mechanisms.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.m.ViewSettingsCustomItem#getCustomControl
 * @function
 */


/**
 * Setter for the aggregated <code>customControl</code>.
 * @param {sap.ui.core.Control} oCustomControl
 * @return {sap.m.ViewSettingsCustomItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsCustomItem#setCustomControl
 * @function
 */
	

/**
 * Destroys the customControl in the aggregation 
 * named <code>customControl</code>.
 * @return {sap.m.ViewSettingsCustomItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ViewSettingsCustomItem#destroyCustomControl
 * @function
 */


// Start of sap\m\ViewSettingsCustomItem.js
/**
 * Destroys the control
 * @private
 */
sap.m.ViewSettingsCustomItem.prototype.exit = function () {
	if(this._control && !this._control.getParent()) {
		// control is not aggregated, so we have to destroy it
		this._control.destroy();
		delete this._control;
	}
};

/*
 * Internally the control is handled as a managed object instead of an aggregation 
 * because this control is sometimes aggregated in other controls like a popover or a dialog
 * @overwrite
 * @public
 * @param {sap.ui.core.Control} oControl a control used for filtering purposes
 * @return {sap.m.ViewSettingsCustomItem} this pointer for chaining 
 */
sap.m.ViewSettingsCustomItem.prototype.setCustomControl = function (oControl) {
	this._control = oControl;
	return this;
};

/*
 * Internally the control is handled as a managed object instead of an aggregation 
 * because this control is sometimes aggregated in other controls like a popover or a dialog
 * @overwrite
 * @public
 * @return {sap.ui.core.Control} oControl a control used for filtering purposes
 */
sap.m.ViewSettingsCustomItem.prototype.getCustomControl = function () {
	return this._control;
};