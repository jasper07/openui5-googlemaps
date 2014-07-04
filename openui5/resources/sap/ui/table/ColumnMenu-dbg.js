/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.table.ColumnMenu.
jQuery.sap.declare("sap.ui.table.ColumnMenu");
jQuery.sap.require("sap.ui.table.library");
jQuery.sap.require("sap.ui.commons.Menu");


/**
 * Constructor for a new ColumnMenu.
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
 * In addition, all settings applicable to the base type {@link sap.ui.commons.Menu#constructor sap.ui.commons.Menu}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The column menu provides all common actions that can be performed on a column.
 * @extends sap.ui.commons.Menu
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.table.ColumnMenu
 */
sap.ui.commons.Menu.extend("sap.ui.table.ColumnMenu", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.table"
}});


/**
 * Creates a new subclass of class sap.ui.table.ColumnMenu with name <code>sClassName</code> 
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
 * @name sap.ui.table.ColumnMenu.extend
 * @function
 */


// Start of sap\ui\table\ColumnMenu.js
jQuery.sap.require("sap.ui.core.RenderManager");
jQuery.sap.require("sap.ui.commons.Menu");
jQuery.sap.require("sap.ui.commons.MenuItem");
jQuery.sap.require("sap.ui.commons.TextField");

/**
 * This file defines behavior for the control,
 */


/**
 * Initialization of the ColumnMenu control
 * @private
 */
sap.ui.table.ColumnMenu.prototype.init = function() {
	this.addStyleClass("sapUiTableColumnMenu");
	this.oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.table");
	this._bInvalidated = true;
	this._iPopupClosedTimeoutId = null;
	this._oColumn = null;
	this._oTable = null;
	this._attachPopupClosed();
};


/**
 * Termination of the ColumnMenu control
 * @private
 */
sap.ui.table.ColumnMenu.prototype.exit = function() {
	window.clearTimeout(this._iPopupClosedTimeoutId);
	this._detachEvents();
	this._oColumn = this._oTable = null;
};


/**
 * Event handler. Called when the theme is changed.
 * @private
 */
sap.ui.table.ColumnMenu.prototype.onThemeChanged = function() {
	if (this.getDomRef()) {
		this._invalidate();
	}
};


/**
 * Overwrite of {@link sap.ui.commons.Menu#setParent} method.
 * @see {sap.ui.commons.Menu#setParent}
 * @private
 */
sap.ui.table.ColumnMenu.prototype.setParent = function(oParent) {
	this._detachEvents();
	this._invalidate();
	this._oColumn = oParent;
	if (oParent) {
		jQuery.sap.assert(oParent instanceof sap.ui.table.Column, "ColumnMenu.setParent: parent must be a subclass of sap.ui.table.Column");

		this._oTable = this._oColumn.getParent();
		if (this._oTable) {
			jQuery.sap.assert(this._oTable instanceof sap.ui.table.Table, "ColumnMenu.setParent: parent of parent must be subclass of sap.ui.table.Table");	
		}
	}
	this._attachEvents();
	return sap.ui.commons.Menu.prototype.setParent.apply(this, arguments);
};


/**
 * Attaches the required event handlers.
 * @private
 */
sap.ui.table.ColumnMenu.prototype._attachEvents = function() {
	if (this._oTable) {
		this._oTable.attachColumnVisibility(this._invalidate, this);
		this._oTable.attachColumnMove(this._invalidate, this);
	}
};


/**
 * Detaches the required event handlers.
 * @private
 */
sap.ui.table.ColumnMenu.prototype._detachEvents = function() {
	if (this._oTable) {
		this._oTable.detachColumnVisibility(this._invalidate, this);
		this._oTable.detachColumnMove(this._invalidate, this);
	}
};

/**
 * Invalidates the column menu control items. Forces recreation of the menu items when the menu is opened.
 * @private
 */
sap.ui.table.ColumnMenu.prototype._invalidate = function() {
	this._bInvalidated = true;
};


/**
 * Special handling for IE < 9 when the popup is closed.
 * The associated column of the menu is focused when the menu is closed.
 * @private
 */
sap.ui.table.ColumnMenu.prototype._attachPopupClosed = function() {
	// put the focus back into the column header after the 
	// popup is being closed.
	var that = this;

	if (!sap.ui.Device.support.touch) {
		this.getPopup().attachClosed(function(oEvent) {
			that._iPopupClosedTimeoutId = window.setTimeout(function() {
				if (that._oColumn) {
					that._oColumn.focus();
				}
			}, 0);
		});	
	}
};


/**
 * Overwrite of {@link sap.ui.commons.Menu#open} method.
 * @see {sap.ui.commons.Menu#open}
 * @private
 */
sap.ui.table.ColumnMenu.prototype.open = function() {
	if (this._bInvalidated) {
		this._bInvalidated = false;
		this.destroyItems();
		this._addMenuItems();
	}

	if (this.getItems().length > 0) {
		sap.ui.commons.Menu.prototype.open.apply(this, arguments);
	}
};


/**
 * Adds the menu items to the menu.
 * @private
 */
sap.ui.table.ColumnMenu.prototype._addMenuItems = function() {
	if (this._oColumn) {
		this._addSortMenuItem(false);
		this._addSortMenuItem(true);
		this._addFilterMenuItem();
		this._addGroupMenuItem();
		this._addColumnVisibilityMenuItem();
	}
};


/**
 * Adds the sort menu item to the menu.
 * @param {boolean} bDesc the sort direction. <code>true</code> for descending.
 * @private
 */
sap.ui.table.ColumnMenu.prototype._addSortMenuItem = function(bDesc) {
	var oColumn = this._oColumn;

	var sDir = bDesc ? "desc" : "asc";
	if (oColumn.getSortProperty() && oColumn.getShowSortMenuEntry()) {
		this.addItem(this._createMenuItem(
			sDir,
			"TBL_SORT_" + sDir.toUpperCase(),
			"ico12_sort_" + sDir + ".gif",
			function(oEvent) {
				oColumn.sort(bDesc, oEvent.getParameter("ctrlKey") === true);
			}
		));
	}
};


/**
 * Adds the filter menu item to the menu.
 * @private
 */
sap.ui.table.ColumnMenu.prototype._addFilterMenuItem = function() {
	var oColumn = this._oColumn;

	if (oColumn.getFilterProperty() && oColumn.getShowFilterMenuEntry()) {
		this.addItem(this._createMenuTextFieldItem(
			"filter",
			"TBL_FILTER",
			"ico12_filter.gif",
			oColumn.getFilterValue(),
			function(oEvent) {
				oColumn.filter(this.getValue());
			}
		));
	}
};


/**
 * Adds the group menu item to the menu.
 * @private
 */
sap.ui.table.ColumnMenu.prototype._addGroupMenuItem = function() {
	var oColumn = this._oColumn;
	var oTable = this._oTable;
	if (oTable && oTable.getEnableGrouping() && oColumn.getSortProperty()) {
		this.addItem(this._createMenuItem(
			"group",
			"TBL_GROUP",
			null,
			jQuery.proxy(function(oEvent) {
				oTable.setGroupBy(oColumn);
			},this)
		));
	}
};


/**
 * Adds the column visibility menu item to the menu.
 * @private
 */
sap.ui.table.ColumnMenu.prototype._addColumnVisibilityMenuItem = function() {
	var oTable = this._oTable;

	if (oTable && oTable.getShowColumnVisibilityMenu()) {
		var oColumnVisibiltyMenuItem = this._createMenuItem("column-visibilty", "TBL_COLUMNS");
		this.addItem(oColumnVisibiltyMenuItem);

		var oColumnVisibiltyMenu = new sap.ui.commons.Menu(oColumnVisibiltyMenuItem.getId() + "-menu");
		oColumnVisibiltyMenu.addStyleClass("sapUiTableColumnVisibilityMenu");
		oColumnVisibiltyMenuItem.setSubmenu(oColumnVisibiltyMenu);

		var aColumns = oTable.getColumns();
		for (var i = 0, l = aColumns.length; i < l; i++) {
			var oMenuItem = this._createColumnVisibilityMenuItem(oColumnVisibiltyMenu.getId() + "-item-" + i, aColumns[i]);
			oColumnVisibiltyMenu.addItem(oMenuItem);
		}
	}
};


/**
 * Factory method for the column visibility menu item.
 * @param {string} sId the id of the menu item.
 * @param {sap.ui.table.Column} oColumn the associated column to the menu item.
 * @return {sap.ui.commons.MenuItem} the created menu item.
 * @private
 */
sap.ui.table.ColumnMenu.prototype._createColumnVisibilityMenuItem = function(sId, oColumn) {
	var sText = oColumn.getName() || (oColumn.getLabel() && oColumn.getLabel().getText ? oColumn.getLabel().getText() : null); 
	return new sap.ui.commons.MenuItem(sId, {
		text: sText,
		icon: oColumn.getVisible() ? this._getThemedIcon("ico_tick.png") : null,
		select: jQuery.proxy(function(oEvent) {
			var oMenuItem = oEvent.getSource();
			var bVisible = !oColumn.getVisible();
			if (bVisible || this._oTable._getVisibleColumnCount() > 1) {
				oColumn.setVisible(bVisible);
				oMenuItem.setIcon(bVisible ? this._getThemedIcon("ico_tick.png") : null);
			}
		}, this)
	});
};


/**
 * Factory method for a menu item.
 * @param {string} sId the id of the menu item.
 * @param {string} sTextI18nKey the i18n key that should be used for the menu item text.
 * @param {string} sIcon the icon name
 * @param {function} fHandler the handler function to call when the item gets selected.
 * @return {sap.ui.commons.MenuItem} the created menu item.
 * @private
 */
sap.ui.table.ColumnMenu.prototype._createMenuItem = function(sId, sTextI18nKey, sIcon, fHandler) {
	return new sap.ui.commons.MenuItem(this.getId() + "-" + sId, {
		text: this.oResBundle.getText(sTextI18nKey),
		icon: sIcon ? this._getThemedIcon(sIcon) : null,
		select: fHandler || function() {}
	});
};


/**
 * Factory method for a menu text field item.
 * @param {string} sId the id of the menu item.
 * @param {string} sTextI18nKey the i18n key that should be used for the menu item text.
 * @param {string} sIcon the icon name
 * @param {string} sValue the default value of the text field
 * @param {function} fHandler the handler function to call when the item gets selected.
 * @return {sap.ui.commons.MenuTextFieldItem} the created menu text field item.
 * @private
 */
sap.ui.table.ColumnMenu.prototype._createMenuTextFieldItem = function(sId, sTextI18nKey, sIcon, sValue, fHandler) {
	jQuery.sap.require("sap.ui.commons.MenuTextFieldItem");
	fHandler = fHandler || function() {};
	return new sap.ui.commons.MenuTextFieldItem(this.getId() + "-" + sId, {
		label: this.oResBundle.getText(sTextI18nKey),
		icon: sIcon ? this._getThemedIcon(sIcon) : null,
		value: sValue,
		select: fHandler || function() {}
	});
};


/**
 * Returns the path to the themed icon for a given icon.
 * @param {string} sIcon the icon name
 * @return {string} the path to the themed icon.
 * @private
 */
sap.ui.table.ColumnMenu.prototype._getThemedIcon = function(sIcon) {
	var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
	return sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/" + sIcon);
};


/**
 * sets a new filter value into the filter field
 * @private
 */
sap.ui.table.ColumnMenu.prototype._setFilterValue = function(sValue) {
	var oFilterField = sap.ui.getCore().byId(this.getId() + "-filter");
	if (oFilterField) {
		oFilterField.setValue(sValue);
	}
	return this;
};

/**
 * Sets the value state of the filter field
 * @private
 */
sap.ui.table.ColumnMenu.prototype._setFilterState = function(sFilterState) {
	var oFilterField = sap.ui.getCore().byId(this.getId() + "-filter");
	if (oFilterField) {
		oFilterField.setValueState(sFilterState);
	}
	return this;
};
