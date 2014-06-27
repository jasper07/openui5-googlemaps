/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ToolbarLayoutData.
jQuery.sap.declare("sap.m.ToolbarLayoutData");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.LayoutData");


/**
 * Constructor for a new ToolbarLayoutData.
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
 * <li>{@link #getShrinkable shrinkable} : boolean (default: false)</li>
 * <li>{@link #getMinWidth minWidth} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxWidth maxWidth} : sap.ui.core.CSSSize</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Holds layout data for the toolbar items.
 * @extends sap.ui.core.LayoutData
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.20
 * @name sap.m.ToolbarLayoutData
 */
sap.ui.core.LayoutData.extend("sap.m.ToolbarLayoutData", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"shrinkable" : {type : "boolean", group : "Behavior", defaultValue : false},
		"minWidth" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"maxWidth" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.m.ToolbarLayoutData with name <code>sClassName</code> 
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
 * @name sap.m.ToolbarLayoutData.extend
 * @function
 */


/**
 * Getter for property <code>shrinkable</code>.
 * Determines whether the control in the toolbar is shrinkable or not. If the related control has fixed width(e.g. 100px, 5rem) then this property is ignored.
 * 
 * Note: Nested layout controls should not be shrinkable.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>shrinkable</code>
 * @public
 * @name sap.m.ToolbarLayoutData#getShrinkable
 * @function
 */

/**
 * Setter for property <code>shrinkable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShrinkable  new value for property <code>shrinkable</code>
 * @return {sap.m.ToolbarLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ToolbarLayoutData#setShrinkable
 * @function
 */


/**
 * Getter for property <code>minWidth</code>.
 * Sets the minimum width of the toolbar item.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>minWidth</code>
 * @public
 * @name sap.m.ToolbarLayoutData#getMinWidth
 * @function
 */

/**
 * Setter for property <code>minWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMinWidth  new value for property <code>minWidth</code>
 * @return {sap.m.ToolbarLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ToolbarLayoutData#setMinWidth
 * @function
 */


/**
 * Getter for property <code>maxWidth</code>.
 * Sets the maximum width of the toolbar item.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>maxWidth</code>
 * @public
 * @name sap.m.ToolbarLayoutData#getMaxWidth
 * @function
 */

/**
 * Setter for property <code>maxWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMaxWidth  new value for property <code>maxWidth</code>
 * @return {sap.m.ToolbarLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ToolbarLayoutData#setMaxWidth
 * @function
 */


// Start of sap\m\ToolbarLayoutData.js
/*
 * Returns the parent's live style object from DOM
 * Here parent is the control who is setting the layout data
 *
 * @returns {Object}
 * @protected
 */
sap.m.ToolbarLayoutData.prototype.getParentStyle = function() {
	var oParent = this.getParent();
	if (!oParent || !oParent.getDomRef) {
		return {};
	}

	var oDomRef = oParent.getDomRef();
	return oDomRef ? oDomRef.style : {};
};

/*
 * If the control that is using ToolbarLayoutData has been already rendered,
 * then this function can be used to apply layout data properties to related control
 *
 * @returns {sap.m.ToolbarLayoutData}
 * @protected
 */
sap.m.ToolbarLayoutData.prototype.applyProperties = function() {
	var oStyle = this.getParentStyle();
	oStyle.minWidth = this.getMinWidth();
	oStyle.maxWidth = this.getMaxWidth();
	return this;
};