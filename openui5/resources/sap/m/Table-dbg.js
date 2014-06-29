/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Table.
jQuery.sap.declare("sap.m.Table");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.ListBase");


/**
 * Constructor for a new Table.
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
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.m.BackgroundDesign (default: sap.m.BackgroundDesign.Translucent)</li></ul>
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
 * The Table control provides a set of sophisticated and convenience functions for responsive table design.
 * For mobile devices, the recommended limit of table rows is 100(based on 4 columns) to assure proper performance. To improve initial rendering on large tables, use the "growing" feature. Please refer to the SAPUI5 Developer Guide for more information
 * @extends sap.m.ListBase
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16
 * @name sap.m.Table
 */
sap.m.ListBase.extend("sap.m.Table", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"backgroundDesign" : {type : "sap.m.BackgroundDesign", group : "Appearance", defaultValue : sap.m.BackgroundDesign.Translucent}
	},
	aggregations : {
    	"columns" : {type : "sap.m.Column", multiple : true, singularName : "column"}
	}
}});


/**
 * Creates a new subclass of class sap.m.Table with name <code>sClassName</code> 
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
 * @name sap.m.Table.extend
 * @function
 */


/**
 * Getter for property <code>backgroundDesign</code>.
 * This property is used to set the background color of the table. Depending on the theme you can change the state of the background from "Solid" over "Translucent" to "Transparent".
 *
 * Default value is <code>Translucent</code>
 *
 * @return {sap.m.BackgroundDesign} the value of property <code>backgroundDesign</code>
 * @public
 * @name sap.m.Table#getBackgroundDesign
 * @function
 */

/**
 * Setter for property <code>backgroundDesign</code>.
 *
 * Default value is <code>Translucent</code> 
 *
 * @param {sap.m.BackgroundDesign} oBackgroundDesign  new value for property <code>backgroundDesign</code>
 * @return {sap.m.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Table#setBackgroundDesign
 * @function
 */


/**
 * Getter for aggregation <code>columns</code>.<br/>
 * Columns of the Table
 * 
 * @return {sap.m.Column[]}
 * @public
 * @name sap.m.Table#getColumns
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
 * @return {sap.m.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Table#insertColumn
 * @function
 */

/**
 * Adds some column <code>oColumn</code> 
 * to the aggregation named <code>columns</code>.
 *
 * @param {sap.m.Column}
 *            oColumn the column to add; if empty, nothing is inserted
 * @return {sap.m.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Table#addColumn
 * @function
 */

/**
 * Removes an column from the aggregation named <code>columns</code>.
 *
 * @param {int | string | sap.m.Column} vColumn the column to remove or its index or id
 * @return {sap.m.Column} the removed column or null
 * @public
 * @name sap.m.Table#removeColumn
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>columns</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.Column[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Table#removeAllColumns
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
 * @name sap.m.Table#indexOfColumn
 * @function
 */
	

/**
 * Destroys all the columns in the aggregation 
 * named <code>columns</code>.
 * @return {sap.m.Table} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Table#destroyColumns
 * @function
 */


// Start of sap\m\Table.js
sap.m.Table.prototype.init = function() {
	this._hasPopin = false;
	this._selectAllCheckBox = null;
	sap.m.ListBase.prototype.init.call(this);
};

sap.m.Table.prototype.onBeforeRendering = function() {
	this.getDomRef() && this._notifyColumns("ItemsRemoved");
	sap.m.ListBase.prototype.onBeforeRendering.call(this);
	this._navRenderedBy = "";
};

sap.m.Table.prototype.onAfterRendering = function() {
	sap.m.ListBase.prototype.onAfterRendering.call(this);

	// table root
	var $table = jQuery(this.getTableDomRef());

	// if any item has navigation, add required class
	this._navRenderedBy && $table.addClass("sapMListTblHasNav");

	// notify columns after rendering
	this._notifyColumns("ColumnRendered", $table);

	// update select-all
	this.updateSelectAllCheckbox();
};

sap.m.Table.prototype.exit = function () {
	sap.m.ListBase.prototype.exit.call(this);
	if (this._selectAllCheckBox) {
		this._selectAllCheckBox.destroy();
		this._selectAllCheckBox = null;
	}
};

sap.m.Table.prototype.destroyAggregation = function(sAggregationName) {
	sAggregationName == "items" && this._notifyColumns("ItemsRemoved");
	return sap.m.ListBase.prototype.destroyAggregation.apply(this, arguments);
};

sap.m.Table.prototype.removeAllAggregation = function(sAggregationName) {
	sAggregationName == "items" && this._notifyColumns("ItemsRemoved");
	return sap.m.ListBase.prototype.removeAllAggregation.apply(this, arguments);
};

sap.m.Table.prototype.removeSelections = function() {
	sap.m.ListBase.prototype.removeSelections.apply(this, arguments);
	this.updateSelectAllCheckbox();
	return this;
};

sap.m.Table.prototype.selectAll = function () {
	sap.m.ListBase.prototype.selectAll.apply(this, arguments);
	this.updateSelectAllCheckbox();
	return this;
};

/**
 * Getter for aggregation columns.
 *
 * @param {Boolean} [bSort] set true to get the columns in an order that respects personalization settings
 * @returns {sap.m.Column[]} columns of the Table
 * @public
 */
sap.m.Table.prototype.getColumns = function(bSort) {
	var aColumns = this.getAggregation("columns", []);
	if (bSort) {
		aColumns.sort(function(c1, c2) {
			return c1.getOrder() - c2.getOrder();
		});
	}
	return aColumns;
};

/*
 * This hook method is called if growing feature is enabled and after new page loaded
 * @overwrite
 */
sap.m.Table.prototype.onAfterPageLoaded = function() {
	this.updateSelectAllCheckbox();
	this._navRenderedBy && jQuery(this.getTableDomRef()).addClass("sapMListTblHasNav");
	sap.m.ListBase.prototype.onAfterPageLoaded.apply(this, arguments);
};

/*
 * This hook method is called from renderer to determine whether items should render or not
 * @overwrite
 */
sap.m.Table.prototype.shouldRenderItems = function() {
	return this.getColumns().some(function(oColumn) {
		return oColumn.getVisible();
	});
};

/*
 * This function runs when setSelected is called from ListItemBase
 * @overwrite
 */
sap.m.Table.prototype.onItemSetSelected = function(oItem, bSelect) {
	sap.m.ListBase.prototype.onItemSetSelected.apply(this, arguments);
	jQuery.sap.delayedCall(0, this, function() {
		this.updateSelectAllCheckbox();
	});
};

// Handle pop-in touch start events for active feedback
sap.m.Table.prototype.ontouchstart = function(oEvent) {
	sap.m.ListBase.prototype.ontouchstart.call(this, oEvent);
	this._handlePopinEvent(oEvent);
};

// Handle pop-in touch end events for active feedback
sap.m.Table.prototype.ontouchend = function(oEvent) {
	this._handlePopinEvent(oEvent);
};

// Android cancels touch events by native scrolling, deactivate popin
sap.m.Table.prototype.ontouchcancel = sap.m.Table.prototype.ontouchend;

// Handle pop-in touch move events for active feedback
sap.m.Table.prototype.ontouchmove = function(oEvent) {
	this._handlePopinEvent(oEvent);
};

// Handle pop-in tap events for active feedback
sap.m.Table.prototype.ontap = function(oEvent) {
	this._handlePopinEvent(oEvent);
};

/*
 * Returns the <table> DOM reference
 * @protected
 */
sap.m.Table.prototype.getTableDomRef = function() {
	return this.getDomRef("listUl");
};

/*
 * Returns items container DOM reference
 * @protected
 */
sap.m.Table.prototype.getItemsContainerDomRef = function() {
	return this.getDomRef("tblBody");
};

/*
 * This method is called asynchronously if resize event comes from column
 * @protected
 */
sap.m.Table.prototype.onColumnResize = function(oColumn) {
	// if list did not have pop-in and will not have pop-in
	// then we do not need re-render, we can just change display of column
	if (!this.hasPopin() && !this._mutex) {
		var hasPopin = this.getColumns().some(function(col) {
			return col.isPopin();
		});

		if (!hasPopin) {
			oColumn.setDisplayViaMedia(this.getTableDomRef());
			return;
		}
	}

	this._dirty = window.innerWidth;
	if (!this._mutex) {
		var clean = window.innerWidth;
		this._mutex = true;
		this.rerender();

		// do not re-render if resize event comes so frequently
		jQuery.sap.delayedCall(200, this, function() {
			// but check if any event come during the wait-time
			if (Math.abs(this._dirty - clean) > 10) {
				this._dirty = 0;
				this.rerender();
			}
			this._mutex = false;
		});
	}
};

/*
 * This method is called from Column control when column visibility is changed via CSS media query
 *
 * @param bColVisible {boolean} whether column is now visible or not
 * @protected
 */
sap.m.Table.prototype.setTableHeaderVisibility = function(bColVisible) {
	if (!this.getDomRef()) {
		return;
	}

	// find first visible column
	var $table = jQuery(this.getTableDomRef()),
		$headRow = $table.find("thead > tr"),
		bHeaderVisible = !$headRow.hasClass("sapMListTblHeaderNone"),
		aVisibleColumns = $headRow.find(".sapMListTblCell").filter(":visible"),
		$firstVisibleCol = aVisibleColumns.eq(0);

	// check if only one column is visible
	if (aVisibleColumns.length == 1) {
		$firstVisibleCol.width("");	// cover the space
	} else {
		$firstVisibleCol.width($firstVisibleCol.attr("data-sap-orig-width"));
	}

	// remove or show column header row(thead) according to column visibility value
	if (!bColVisible && bHeaderVisible) {
		$headRow[0].className = "sapMListTblRow sapMListTblHeader";
	} else if (bColVisible && !bHeaderVisible && !aVisibleColumns.length) {
		$headRow[0].className = "sapMListTblHeaderNone";
	}
};

// notify all columns with given action and param
sap.m.Table.prototype._notifyColumns = function(action, param) {
	this.getColumns().forEach(function(oColumn) {
		oColumn["on" + action](param);
	});
};

// pass pop-in events to ColumnListItem
sap.m.Table.prototype._handlePopinEvent = function(oEvent, bRowOnly) {
	if (oEvent.isMarked()) {
		return;
	}

	if (bRowOnly && !sap.m.ColumnListItem.isPopinFocused()) {
		return;
	}

	if (this.hasPopin()) {
		sap.m.ColumnListItem.handleEvents(oEvent, this.getItemsContainerDomRef());
	}
};

/**
 * This method takes care of the select all checkbox for table lists. It
 * will automatically be created on demand and returned when needed
 *
 * @private
 * @return {sap.m.CheckBox} reference to the internal select all checkbox
 */
sap.m.Table.prototype._getSelectAllCheckbox = function() {
	return this._selectAllCheckBox || (this._selectAllCheckBox = new sap.m.CheckBox(this.getId("sa"), {
		activeHandling : false,
	}).setParent(this, null, true).attachSelect(function () {
		if (this._selectAllCheckBox.getSelected()) {
			this.selectAll(true);
		} else {
			this.removeSelections(false, true);
		}
	}, this).setTabIndex(-1));
};

/*
 * Internal public function to update the selectAll checkbox
 * according to the current selection on the list items.
 *
 * @protected
 */
sap.m.Table.prototype.updateSelectAllCheckbox = function () {
	// checks if the list is in multi select mode and has selectAll checkbox
	if (this._selectAllCheckBox && this.getMode() === "MultiSelect") {
		var aItems = this.getItems(),
			iSelectedItemCount = this.getSelectedItems().length,
			iSelectableItemCount = aItems.filter(function(oItem) {
				return oItem.isSelectable();
			}).length;

		// set state of the checkbox by comparing item length and selected item length
		this._selectAllCheckBox.setSelected(aItems.length > 0 && iSelectedItemCount == iSelectableItemCount);
	}
};

/*
 * Returns colspan for all columns except navigation
 * Because we render navigation always even it is empty
 *
 * @protected
 */
sap.m.Table.prototype.getColSpan = function() {
	return (this._colCount || 1 ) - 1;
};

/*
 * Returns the number of total columns
 *
 * @protected
 */
sap.m.Table.prototype.getColCount = function() {
	return (this._colCount || 0);
};

/*
 * Returns whether or not the table is in pop-in mode
 *
 * @protected
 */
sap.m.Table.prototype.hasPopin = function() {
	return !!this._hasPopin;
};

// keyboard handling
sap.m.Table.prototype.onsapspace = function(oEvent) {
	if (oEvent.isMarked()) {
		return;
	}

	// toggle select all header checkbox and fire its event
	if (oEvent.target === this.getDomRef("tblHeader") && this._selectAllCheckBox) {
		this._selectAllCheckBox.setSelected(!this._selectAllCheckBox.getSelected()).fireSelect();
		oEvent.preventDefault();
		oEvent.setMarked();
	}

	// handle space event for pop-in
	this._handlePopinEvent(oEvent, true);
};

// Handle enter event for pop-in
sap.m.Table.prototype.onsapenter = function(oEvent) {
	this._handlePopinEvent(oEvent, true);
};

// Handle delete event for pop-in
sap.m.Table.prototype.onsapdelete = function(oEvent) {
	this._handlePopinEvent(oEvent, true);
};
