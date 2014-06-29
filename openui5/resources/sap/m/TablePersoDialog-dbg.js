/*
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides TablePersoDialog
jQuery.sap.declare("sap.m.TablePersoDialog");
jQuery.sap.require("sap.ui.base.ManagedObject");
jQuery.sap.require("sap.m.InputListItem");
jQuery.sap.require("sap.m.Switch");
jQuery.sap.require("sap.m.SwitchType");
jQuery.sap.require("sap.m.Dialog");
jQuery.sap.require("sap.m.List");
jQuery.sap.require("sap.m.Bar");
jQuery.sap.require("sap.m.Button");


/**
 * The TablePersoDialog can be used to display and allow modification of personalization settings relating to a Table. It displays the columns of the table that it refers to by using
 * <ul><li>The result of calling sap.m.TablePersoProvider's 'getCaption' callback if it is implemented and delivers a non-null value for a column</li>
 * <li>the column header control's 'text' property if no caption property is available</li>
 * <li>the column header control's 'title' property if neither 'text' nor 'caption' property are available</li>
 * <li>the column id is displayed as last fallback, if none of the above is at hand. In that case, a warning is logged. </li></ul>
 *
 * @param {string}
 *			[sId] optional id for the new control; generated automatically if
 *			no non-empty id is given Note: this can be omitted, no matter
 *			whether <code>mSettings</code> will be given or not!
 * @param {object}
 *			[mSettings] optional map/JSON-object with initial settings for the
 *			new component instance
 * @public
 *
 * @class Table Personalization Dialog
 * @extends sap.ui.base.ManagedObject
 * @author SAP
 * @version 1.20.7
 * @name sap.m.TablePersoDialog
 */
sap.ui.base.ManagedObject.extend("sap.m.TablePersoDialog", /** @lends sap.m.TablePersoDialog */

{
	constructor : function(sId, mSettings) {

		sap.ui.base.ManagedObject.apply(this, arguments);

	},

	metadata : {
		properties: {
			"contentWidth": {type: "sap.ui.core.CSSSize"},
			"persoMap": {type: "object"},
			"columnInfo": {type: "object"}
		},
		aggregations: {
			"persoService": {
				type: "Object",
				multiple: false
			}
		},
		associations: {
			"persoDialogFor": sap.m.Table
		},
		events: {
			confirm: {},
			cancel: {}
		},
		library: "sap.m"
	}

});


/**
 * Initializes the TablePersoDialog instance after creation.
 *
 * @function
 * @name sap.m.TablePeroDialog.prototype.init
 * @protected
 */
sap.m.TablePersoDialog.prototype.init = function() {
	var that = this;

	// Resource bundle, for texts
	this._oRb = sap.ui.getCore().getLibraryResourceBundle("sap.m");

	// To store the column settings
	this._oP13nModel = new sap.ui.model.json.JSONModel();

	// Template for list inside the dialog - 1 item per column
	this._columnItemTemplate = new sap.m.InputListItem({
		label: "{Personalization>text}",
		content: new sap.m.Switch({
			state: "{Personalization>visible}",
			customTextOn: " ",
			customTextOff: " "
		})
	}).addStyleClass("sapMPersoDialogLI");

	//Button definition for sorting of the table content(up/down)
	this._oButtonUp = new sap.m.Button({
					icon: "sap-icon://arrow-top",
					enabled: false,
					press: function(oEvent) {
						that._moveItem(-1);
						},
	});
	
	this._oButtonDown = new sap.m.Button({
					  icon: "sap-icon://arrow-bottom",
					  enabled: false,
					  press: function(oEvent) {
						  that._moveItem(1);
					  	}
	});
	
	this._fnUpdateArrowButtons = function() {
		var oList = that._oDialog.getContent()[0],
			length = oList.getItems().length;
		//Initialisation of the enabled property 
		var bButtonDownEnabled = true,
		    bButtonUpEnabled = true;
		if (length == 0) {
			//No data -> both buttons(arrow-up/-down have to be disabled!)
			bButtonUpEnabled = false;
			bButtonDownEnabled = false;
			
		} else {
			//data available (1 or more items)
			if (oList.getItems()[0].getSelected()) {
				//first item selected: disable button "arrow top"
				bButtonUpEnabled = false;
			};
			if (oList.getItems()[length-1].getSelected()){
				//last item selected: disable button "arrow bottom"
				bButtonDownEnabled = false;
			};
		};
		that._oButtonUp.setEnabled(bButtonUpEnabled);
		that._oButtonDown.setEnabled(bButtonDownEnabled);
	};
	
	
	this._oDialog = new sap.m.Dialog({
		title : this._oRb.getText("PERSODIALOG_COLUMNS_TITLE"),
		stretch: sap.ui.Device.system.phone,
		horizontalScrolling: false,
		content : new sap.m.List({
			includeItemInSelection: true,
			mode: sap.m.ListMode.SingleSelectMaster,
			select: this._fnUpdateArrowButtons,
		}),
		subHeader : new sap.m.Bar({
			contentLeft: [ this._oButtonUp, this._oButtonDown],
			contentRight: new sap.m.Button({
				icon: "sap-icon://refresh",
				press : function () {
					that._resetAll();
				}
			})
		}),
		leftButton : new sap.m.Button({
			text : this._oRb.getText("PERSODIALOG_OK"),
			press : function () {
				this.getParent().close();
				that._oButtonUp.setEnabled(false);
				that._oButtonDown.setEnabled(false);				
				that.fireConfirm();
			}
		}),
		rightButton : new sap.m.Button({
			text: this._oRb.getText("PERSODIALOG_CANCEL"),
			press: function () {
				that._readCurrentSettingsFromTable();
				this.getParent().close();
				that._oButtonUp.setEnabled(false);
				that._oButtonDown.setEnabled(false);				
				that.fireCancel();
			}
		})
	}).addStyleClass("sapMPersoDialog");

};

/**
 * Returns the personalizations made. Currently supports
 * a 'columns' property which holds an array of settings,
 * one element per column in the associated table. The element
 * contains column-specific information as follows: id: column id;
 * order: new order; text: the column's header text that was displayed
 * in the dialog; visible: visibility (true or false).
 *
 * @return object personalizationData
 * @public
 */
sap.m.TablePersoDialog.prototype.retrievePersonalizations = function () {
	return this._oP13nModel.getData();
};

/**
 * Sets the content of the dialog, being list items representing
 * the associated table's column settings, and opens the dialog
 * @public
 */
sap.m.TablePersoDialog.prototype.open = function () {

	// The only control in the Dialog's content aggregation is a List
	var oList = this._oDialog.getContent()[0];

	// Get the associated Table's column info and set it into the Personalization model
	this._readCurrentSettingsFromTable();

	// Also save initial state in model in case of Reset All
	this._oInitialState = JSON.stringify(this._oP13nModel.getData().aColumns);

	this._oDialog.setModel(this._oP13nModel, "Personalization");
	oList.bindAggregation("items", "Personalization>/aColumns", this._columnItemTemplate);

	// Now show the dialog
	this._oDialog.open();
};

/**
 * Reflectors for the internal Dialog's contentWidth property
 * @public
 */
sap.m.TablePersoDialog.prototype.getContentWidth = function() {
	return this._oDialog.getContentWidth();
};

sap.m.TablePersoDialog.prototype.setContentWidth = function(sWidth) {
	this._oDialog.setContentWidth(sWidth);
	return this;
};

/**
 * Destroys the control
 * @private
 */
sap.m.TablePersoDialog.prototype.exit = function () {
	this._oRb = null;
	this._oP13nModel = null;
	this._oInitialState = null;

	if (this._columnItemTemplate) {
		this._columnItemTemplate.destroy();
		this._columnItemTemplate = null;
	}

	if (this._oDialog) {
		this._oDialog.destroy();
		this._oDialog = null;
	}
	
	if(this._oButtonDown){
		this._oButtonDown.destroy();
		this._oButtonDown = null;
	}
	if(this._oButtonUp){
		this._oButtonUp.destroy();
		this._oButtonUp = null;
	}
};

/* =========================================================== */
/*           begin: internal methods                           */
/* =========================================================== */

/**
* Turn column visibility and order back to initial state
* when dialog was opened
* @private
*/
sap.m.TablePersoDialog.prototype._resetAll = function () {

	var oData = this._oP13nModel.getData();
	oData.aColumns = JSON.parse(this._oInitialState);
	this._oP13nModel.setData(oData);

};


/**
 * Returns table column settings (header text, order, visibility) for a table
 * @private
 * @param {object} oTable the table for which column settings should be returned
 */
sap.m.TablePersoDialog.prototype._tableColumnInfo = function (oTable) {
	//Check if persoMap has been passed into the dialog.
	//Otherwise, personalization is not possible.
	if(!!this.getPersoMap()) {
		var aColumns = oTable.getColumns(),
			that = this,
			aColumnInfo = [];
		aColumns.forEach(function(oColumn){
			var sCaption = null;
			if(that.getPersoService().getCaption) {
				sCaption = that.getPersoService().getCaption(oColumn);
			}
			
			if (!sCaption) {
				var oColHeader = oColumn.getHeader();
				//Check if header control has either text or 'title' property
				if(oColHeader.getText && oColHeader.getText()) {
					sCaption = oColHeader.getText();
				} else if(oColHeader.getTitle && oColHeader.getTitle()) {
					sCaption = oColHeader.getTitle();
				}
			}
				
			if (!sCaption){
				//Fallback: use column id and issue warning to let app developer know to add captions to columns
				sCaption = oColumn.getId();
				jQuery.sap.log.warning("Please 'getCaption' callback implentation in your TablePersoProvider for column " + oColumn + ". Table personalization uses column id as fallback value.");
			}
			
			//In this case, oColumn is one of our controls. Therefore, sap.ui.core.Element.toString() 
			//is called which delivers something like 'Element sap.m.Column#<sId>' where sId is the column's sId property
			aColumnInfo.push({
				text : sCaption,
				order : oColumn.getOrder(),
				visible : oColumn.getVisible(),
				id: that.getPersoMap()[oColumn]
			});
		});

		// Sort to make sure they're presented in the right order
		aColumnInfo.sort(function(a, b) { return a.order - b.order; });

		return aColumnInfo;
	}
	return null;
};

/**
 * Moves an item up or down, swapping it with the neighbour.
 * Does this in the bound model.
 * @private
 * @param {int} iDirection the move direction (-1 up, 1 down)
 */
sap.m.TablePersoDialog.prototype._moveItem = function (iDirection) {

	var oList = this._oDialog.getContent()[0];
	var oModel = this._oP13nModel;

	// Abort if nothing selected
	var oSelectedItem = oList.getSelectedItem();
	if (! oSelectedItem) return;

	// The items themselves
	var data = oModel.getData();

	// Get array index of selected item
	var item = oSelectedItem.getBindingContext("Personalization").getPath().split("/").pop() * 1;

	// Get array index of item to swap with
	var swap = item + iDirection;

	// Abort if out of bounds
	if ( swap < 0 || swap >= data.aColumns.length ) return;

	// Do the swap
	var temp = data.aColumns[swap];
	data.aColumns[swap] = data.aColumns[item];
	//Make sure the order member is adapted as well!
	data.aColumns[swap].order = swap;
	data.aColumns[item] = temp;
	//Make sure the order member is adapted as well!
	data.aColumns[item].order = item;

	// Remove selection before binding
	oList.removeSelections(true);

	// Swap in the visible list
	this._swapListItemContent(oList, item, swap);

	// Switch the selected item
	oList.setSelectedItem(oList.getItems()[swap], true);

	this._fnUpdateArrowButtons.call(this);
};

/**
* Exchanges the label property text and the Switch inside the Dialog's List
* for the two items being swapped, using DOM manipulation (to save re-rendering)
* @private
*/
sap.m.TablePersoDialog.prototype._swapListItemContent = function(oList, iItem, iSwap) {

	var aListItems = oList.getItems();

	// Labels
	var sLabelItemId = "#" + aListItems[iItem].getId() + " label",
	sLabelSwapId = "#" + aListItems[iSwap].getId() + " label";
	var sLabelTemp = jQuery(sLabelSwapId).html();

	// Switches
	var sSwitchItemId = "#" + aListItems[iItem].getContent()[0].getId();
	var sSwitchSwapId = "#" + aListItems[iSwap].getContent()[0].getId();
	var sSwitchTemp = jQuery(sSwitchSwapId).html();

	// Do the swap
	jQuery(sLabelSwapId).html(jQuery(sLabelItemId).html());
	jQuery(sLabelItemId).html(sLabelTemp);
	jQuery(sSwitchSwapId).html(jQuery(sSwitchItemId).html());
	jQuery(sSwitchItemId).html(sSwitchTemp);

};

/**
 * Reads current column settings from the table and stores in the model
 * @private
 */
sap.m.TablePersoDialog.prototype._readCurrentSettingsFromTable = function() {
	var oTable = sap.ui.getCore().byId(this.getPersoDialogFor());
	this._oP13nModel.setData({ aColumns : this._tableColumnInfo(oTable) });
};

