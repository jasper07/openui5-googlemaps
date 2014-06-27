/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ColumnListItem.
jQuery.sap.declare("sap.m.ColumnListItem");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.ListItemBase");


/**
 * Constructor for a new ColumnListItem.
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
 * <li>{@link #getVAlign vAlign} : sap.ui.core.VerticalAlign (default: sap.ui.core.VerticalAlign.Inherit)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCells cells} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * ColumnListItem can be used to create columns for Table control.
 * Note: This control should not be used without Column definition in parent control.
 * @extends sap.m.ListItemBase
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.m.ColumnListItem
 */
sap.m.ListItemBase.extend("sap.m.ColumnListItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"vAlign" : {type : "sap.ui.core.VerticalAlign", group : "Appearance", defaultValue : sap.ui.core.VerticalAlign.Inherit}
	},
	defaultAggregation : "cells",
	aggregations : {
    	"clonedHeaders" : {type : "sap.ui.core.Control", multiple : true, singularName : "clonedHeader", visibility : "hidden"}, 
    	"cells" : {type : "sap.ui.core.Control", multiple : true, singularName : "cell", bindable : "bindable"}
	}
}});


/**
 * Creates a new subclass of class sap.m.ColumnListItem with name <code>sClassName</code> 
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
 * @name sap.m.ColumnListItem.extend
 * @function
 */


/**
 * Getter for property <code>vAlign</code>.
 * Sets the vertical alignment of the all cells in a table row(including selection and navigation). Possible values are "Inherit", "Top", "Middle", "Bottom"
 * Note: Column's "vAlign" property is stronger than this one.
 *
 * Default value is <code>Inherit</code>
 *
 * @return {sap.ui.core.VerticalAlign} the value of property <code>vAlign</code>
 * @public
 * @since 1.20
 * @name sap.m.ColumnListItem#getVAlign
 * @function
 */

/**
 * Setter for property <code>vAlign</code>.
 *
 * Default value is <code>Inherit</code> 
 *
 * @param {sap.ui.core.VerticalAlign} oVAlign  new value for property <code>vAlign</code>
 * @return {sap.m.ColumnListItem} <code>this</code> to allow method chaining
 * @public
 * @since 1.20
 * @name sap.m.ColumnListItem#setVAlign
 * @function
 */


/**
 * Getter for aggregation <code>cells</code>.<br/>
 * Every item inside the cells aggregation defines one column of the row.
 * 
 * <strong>Note</strong>: this is the default aggregation for ColumnListItem.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.ColumnListItem#getCells
 * @function
 */


/**
 * Inserts a cell into the aggregation named <code>cells</code>.
 *
 * @param {sap.ui.core.Control}
 *          oCell the cell to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the cell should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the cell is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the cell is inserted at 
 *             the last position        
 * @return {sap.m.ColumnListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ColumnListItem#insertCell
 * @function
 */

/**
 * Adds some cell <code>oCell</code> 
 * to the aggregation named <code>cells</code>.
 *
 * @param {sap.ui.core.Control}
 *            oCell the cell to add; if empty, nothing is inserted
 * @return {sap.m.ColumnListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ColumnListItem#addCell
 * @function
 */

/**
 * Removes an cell from the aggregation named <code>cells</code>.
 *
 * @param {int | string | sap.ui.core.Control} vCell the cell to remove or its index or id
 * @return {sap.ui.core.Control} the removed cell or null
 * @public
 * @name sap.m.ColumnListItem#removeCell
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>cells</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.ColumnListItem#removeAllCells
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>cells</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oCell the cell whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.ColumnListItem#indexOfCell
 * @function
 */
	

/**
 * Destroys all the cells in the aggregation 
 * named <code>cells</code>.
 * @return {sap.m.ColumnListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ColumnListItem#destroyCells
 * @function
 */


/**
 * Binder for aggregation <code>cells</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.m.ColumnListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ColumnListItem#bindCells
 * @function
 */

/**
 * Unbinder for aggregation <code>cells</code>.
 *
 * @return {sap.m.ColumnListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ColumnListItem#unbindCells
 * @function
 */


// Start of sap\m\ColumnListItem.js

// prototype lookup for pop-in id
sap.m.ColumnListItem.prototype._popinId = "";

/**
 * remove pop-in from DOM
 * @protected
 */
sap.m.ColumnListItem.prototype.removePopin = function() {
	if (this.hasPopin()) {
		jQuery.sap.byId(this._popinId).remove();
		this._popinId = "";
	}
	return this;
};

/**
 * Whether has pop-in or not
 * @protected
 */
sap.m.ColumnListItem.prototype.hasPopin = function() {
	return !!(this._popinId);
};

/*
 * remove pop-in from DOM when setVisible false is called
 * @overwite
 */
sap.m.ColumnListItem.prototype.setVisible = function() {
	sap.m.ListItemBase.prototype.setVisible.apply(this, arguments);
	if (!this.getVisible()) {
		this.removePopin();
	}
	return this;
};

// remove pop-in on destroy
sap.m.ColumnListItem.prototype.exit = function() {
	sap.m.ListItemBase.prototype.exit.call(this);
	this.destroyAggregation("clonedHeaders", true);
	return this.removePopin();
};

// active feedback for pop-in
sap.m.ColumnListItem.prototype._activeHandlingInheritor = function() {
	this._toggleActiveClass(true);
};

// inactive feedback for pop-in
sap.m.ColumnListItem.prototype._inactiveHandlingInheritor = function() {
	this._toggleActiveClass(false);
};

/*
 * Common code for the two methods _inactiveHandlingInheritor,_activeHandlingInheritor
 *
 * @param {boolean} bSwitch Determine whether the class should be added or removed.
 */
sap.m.ColumnListItem.prototype._toggleActiveClass = function(bSwitch){
	if (this.hasPopin()) {
		jQuery.sap.byId(this._popinId).toggleClass("sapMLIBActive", bSwitch);
	}
};

/**
 * Handles event delegation for pop-ins
 *
 * @static
 * @protected
 *
 * @param {jQuery.Event} oEvent jQuery event object
 * @param {HTMLElement} oContainerDomRef max parent element to search in DOM to find pop-in
 */
sap.m.ColumnListItem.handleEvents = function(oEvent, oContainerDomRef) {
	// check if event is coming from pop-in
	var $popin = jQuery(oEvent.target).closest(".sapMListTblSubRow", oContainerDomRef);
	if ($popin.length) {
		// get the related Column List Item
		var oColumnLI = sap.ui.getCore().byId($popin.prev().attr("id"));
		if (oColumnLI) {
			// try to find scrControl from event
			oEvent.srcControl = sap.ui.getCore().byId(oEvent.target.id) || oColumnLI;

			// call the related ListItemBase event
			if (oColumnLI["on" + oEvent.type]) {
				oColumnLI["on" + oEvent.type](oEvent);
			}
		}
	}
};

/**
 * Checks whether popin is focused or not
 *
 * @static
 * @protected
 *
 * @param {jQuery.Event} oEvent jQuery event object
 */
sap.m.ColumnListItem.isPopinFocused = function(oEvent) {
	return jQuery(document.activeElement).hasClass("sapMListTblSubRow");
};