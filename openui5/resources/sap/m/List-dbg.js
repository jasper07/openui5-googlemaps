/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.List.
jQuery.sap.declare("sap.m.List");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.ListBase");


/**
 * Constructor for a new List.
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
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.m.BackgroundDesign (default: sap.m.BackgroundDesign.Solid)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getColumns columns} : sap.m.Column[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.ListBase#constructor sap.m.ListBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The List control provides a container for all types of list items.
 * For mobile devices, the recommended limit of list items is 100 to assure proper performance. To improve initial rendering of large lists, use the "growing" feature. Please refer to the SAPUI5 Developer Guide for more information..
 * @extends sap.m.ListBase
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.List
 */
sap.m.ListBase.extend("sap.m.List", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"backgroundDesign" : {type : "sap.m.BackgroundDesign", group : "Appearance", defaultValue : sap.m.BackgroundDesign.Solid}
	},
	aggregations : {
    	"columns" : {type : "sap.m.Column", multiple : true, singularName : "column", deprecated: true}
	}
}});


/**
 * Creates a new subclass of class sap.m.List with name <code>sClassName</code> 
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
 * @name sap.m.List.extend
 * @function
 */


/**
 * Getter for property <code>backgroundDesign</code>.
 * This property is used to set the background color of the list. Depending on the theme you can change the state of the background from "Solid" over "Translucent" to "Transparent".
 *
 * Default value is <code>Solid</code>
 *
 * @return {sap.m.BackgroundDesign} the value of property <code>backgroundDesign</code>
 * @public
 * @since 1.14
 * @name sap.m.List#getBackgroundDesign
 * @function
 */

/**
 * Setter for property <code>backgroundDesign</code>.
 *
 * Default value is <code>Solid</code> 
 *
 * @param {sap.m.BackgroundDesign} oBackgroundDesign  new value for property <code>backgroundDesign</code>
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * @since 1.14
 * @name sap.m.List#setBackgroundDesign
 * @function
 */


/**
 * Getter for aggregation <code>columns</code>.<br/>
 * Columns
 * 
 * @return {sap.m.Column[]}
 * @public
 * @deprecated Since version 1.16. 
 * Use Table control instead.
 * @name sap.m.List#getColumns
 * @function
 */


/**
 * Inserts a column into the aggregation named <code>columns</code>.
 *
 * @param {sap.m.Column}
 *          oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the column should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the column is inserted at 
 *             the last position        
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16. 
 * Use Table control instead.
 * @name sap.m.List#insertColumn
 * @function
 */

/**
 * Adds some column <code>oColumn</code> 
 * to the aggregation named <code>columns</code>.
 *
 * @param {sap.m.Column}
 *            oColumn the column to add; if empty, nothing is inserted
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16. 
 * Use Table control instead.
 * @name sap.m.List#addColumn
 * @function
 */

/**
 * Removes an column from the aggregation named <code>columns</code>.
 *
 * @param {int | string | sap.m.Column} vColumn the column to remove or its index or id
 * @return {sap.m.Column} the removed column or null
 * @public
 * @deprecated Since version 1.16. 
 * Use Table control instead.
 * @name sap.m.List#removeColumn
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>columns</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.Column[]} an array of the removed elements (might be empty)
 * @public
 * @deprecated Since version 1.16. 
 * Use Table control instead.
 * @name sap.m.List#removeAllColumns
 * @function
 */

/**
 * Checks for the provided <code>sap.m.Column</code> in the aggregation named <code>columns</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.Column}
 *            oColumn the column whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 1.16. 
 * Use Table control instead.
 * @name sap.m.List#indexOfColumn
 * @function
 */
	

/**
 * Destroys all the columns in the aggregation 
 * named <code>columns</code>.
 * @return {sap.m.List} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16. 
 * Use Table control instead.
 * @name sap.m.List#destroyColumns
 * @function
 */


// Start of sap\m\List.js
sap.m.List.prototype.onBeforeRendering = function() {
	if (sap.m.ListBase.prototype.onBeforeRendering) {
		sap.m.ListBase.prototype.onBeforeRendering.call(this);
	}
	
	// if "columns" aggregation is not in use or incompatible then ignore
	if (!this.getColumns().length || this._isColumnsIncompatible()) {
		return;
	}
	
	/**
	 * FIXME: Here to support old API if columns are set
	 * We are trying to extend renderer to render list as table
	 * This is so ugly and we need to get rid of it ASAP
	 */
	jQuery.sap.require("sap.m.Table");
	var proto = sap.m.Table.prototype;
	Object.keys(proto).forEach(function(key) {
		this[key] = proto[key];
	}, this);

	/**
	 * FIXME: Handle different default backgroundDesign value for Table
	 */
	if (!this.mProperties.hasOwnProperty("backgroundDesign")) {
		this.setBackgroundDesign("Translucent");
	}
	
};

// checks if "columns" usage is not compatible anymore
sap.m.List.prototype._isColumnsIncompatible = function() {
	return sap.ui.getCore().getConfiguration().getCompatibilityVersion("sapMListAsTable").compareTo("1.16") >= 0;
};