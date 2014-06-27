/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.DataSetSimpleView.
jQuery.sap.declare("sap.ui.ux3.DataSetSimpleView");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new DataSetSimpleView.
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
 * <li>{@link #getFloating floating} : boolean (default: true)</li>
 * <li>{@link #getName name} : string (default: "Name of this View")</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconHovered iconHovered} : sap.ui.core.URI</li>
 * <li>{@link #getIconSelected iconSelected} : sap.ui.core.URI</li>
 * <li>{@link #getResponsive responsive} : boolean (default: false)</li>
 * <li>{@link #getItemMinWidth itemMinWidth} : int (default: 0)</li>
 * <li>{@link #getInitialItemCount initialItemCount} : int (default: 0)</li>
 * <li>{@link #getReloadItemCount reloadItemCount} : int (default: 0)</li>
 * <li>{@link #getScrollArea scrollArea} : any</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTemplate template} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * DataSetSimpleView provides a simple view example for DataSet usage.
 * 
 * @extends sap.ui.core.Control
 * @implements sap.ui.ux3.DataSetView
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.DataSetSimpleView
 */
sap.ui.core.Control.extend("sap.ui.ux3.DataSetSimpleView", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.ui.ux3.DataSetView"
	],

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"floating" : {type : "boolean", group : "Misc", defaultValue : true},
		"name" : {type : "string", group : "Misc", defaultValue : "Name of this View"},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"iconHovered" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"iconSelected" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"responsive" : {type : "boolean", group : "Misc", defaultValue : false},
		"itemMinWidth" : {type : "int", group : "Misc", defaultValue : 0},
		"initialItemCount" : {type : "int", group : "Appearance", defaultValue : 0},
		"reloadItemCount" : {type : "int", group : "Appearance", defaultValue : 0},
		"scrollArea" : {type : "any", group : "Appearance", defaultValue : null},
		"height" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : null}
	},
	aggregations : {
    	"template" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.DataSetSimpleView with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.DataSetSimpleView.extend
 * @function
 */


/**
 * Getter for property <code>floating</code>.
 * When true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column Layout.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>floating</code>
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#getFloating
 * @function
 */

/**
 * Setter for property <code>floating</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFloating  new value for property <code>floating</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#setFloating
 * @function
 */


/**
 * Getter for property <code>name</code>.
 * Name of the View
 *
 * Default value is <code>"Name of this View"</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is <code>"Name of this View"</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#setName
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Icon source for this view
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#setIcon
 * @function
 */


/**
 * Getter for property <code>iconHovered</code>.
 * icon: hovered state
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconHovered</code>
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#getIconHovered
 * @function
 */

/**
 * Setter for property <code>iconHovered</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconHovered  new value for property <code>iconHovered</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#setIconHovered
 * @function
 */


/**
 * Getter for property <code>iconSelected</code>.
 * icon: selected state
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconSelected</code>
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#getIconSelected
 * @function
 */

/**
 * Setter for property <code>iconSelected</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconSelected  new value for property <code>iconSelected</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#setIconSelected
 * @function
 */


/**
 * Getter for property <code>responsive</code>.
 * When true and the property floating is true the DatSet items are floating containers filling the whole space of a row.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>responsive</code>
 * @public
 * @since 1.9.2
 * @name sap.ui.ux3.DataSetSimpleView#getResponsive
 * @function
 */

/**
 * Setter for property <code>responsive</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bResponsive  new value for property <code>responsive</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.2
 * @name sap.ui.ux3.DataSetSimpleView#setResponsive
 * @function
 */


/**
 * Getter for property <code>itemMinWidth</code>.
 * When itemMinWidth>0 and the property floating is true the given minimum width in pixels is set to DatSet items. A minimum width must be given when the property responsive is set.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>itemMinWidth</code>
 * @public
 * @since 1.9.2
 * @name sap.ui.ux3.DataSetSimpleView#getItemMinWidth
 * @function
 */

/**
 * Setter for property <code>itemMinWidth</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iItemMinWidth  new value for property <code>itemMinWidth</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.2
 * @name sap.ui.ux3.DataSetSimpleView#setItemMinWidth
 * @function
 */


/**
 * Getter for property <code>initialItemCount</code>.
 * If this value is greater zero only this amount of items is loaded in the first place. New items are loaded automatically when the user scrolls down. The number of items which are reloaded can be defined with the property "reloadItemCount"
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>initialItemCount</code>
 * @public
 * @since 1.13.0
 * @name sap.ui.ux3.DataSetSimpleView#getInitialItemCount
 * @function
 */

/**
 * Setter for property <code>initialItemCount</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iInitialItemCount  new value for property <code>initialItemCount</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.0
 * @name sap.ui.ux3.DataSetSimpleView#setInitialItemCount
 * @function
 */


/**
 * Getter for property <code>reloadItemCount</code>.
 * This number defines the item count which is reloaded on scroll if initialItemCount is enabled.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>reloadItemCount</code>
 * @public
 * @since 1.13.0
 * @name sap.ui.ux3.DataSetSimpleView#getReloadItemCount
 * @function
 */

/**
 * Setter for property <code>reloadItemCount</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iReloadItemCount  new value for property <code>reloadItemCount</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.0
 * @name sap.ui.ux3.DataSetSimpleView#setReloadItemCount
 * @function
 */


/**
 * Getter for property <code>scrollArea</code>.
 * ID of the DOM Element or jQuery reference to the dom which holds the scrollbar for the dataset
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>scrollArea</code>
 * @public
 * @since 1.13.0
 * @name sap.ui.ux3.DataSetSimpleView#getScrollArea
 * @function
 */

/**
 * Setter for property <code>scrollArea</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oScrollArea  new value for property <code>scrollArea</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.0
 * @name sap.ui.ux3.DataSetSimpleView#setScrollArea
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * If the pagination feature is used without specifying a scroll area, a height for the dataset must be defined.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @since 1.13.0
 * @name sap.ui.ux3.DataSetSimpleView#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.0
 * @name sap.ui.ux3.DataSetSimpleView#setHeight
 * @function
 */


/**
 * Getter for aggregation <code>template</code>.<br/>
 * template
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#getTemplate
 * @function
 */


/**
 * Setter for the aggregated <code>template</code>.
 * @param {sap.ui.core.Control} oTemplate
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#setTemplate
 * @function
 */
	

/**
 * Destroys the template in the aggregation 
 * named <code>template</code>.
 * @return {sap.ui.ux3.DataSetSimpleView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.DataSetSimpleView#destroyTemplate
 * @function
 */


// Start of sap\ui\ux3\DataSetSimpleView.js
jQuery.sap.require("jquery.sap.script");
jQuery.sap.require("sap.ui.core.ResizeHandler");

///**
// * This file defines behavior for the control,
// */

/**
 * Initialization of DataSetSimpleView
 *
 * @private
*/
sap.ui.ux3.DataSetSimpleView.prototype.init = function(){
   this._oDataSet = this.getParent();
   this.items = [];
   this._bRendered = false;
   if (this.getInitialItemCount() > 0 && this.getReloadItemCount() <= 0) {
	   this.setReloadItemCount(this.getInitialItemCount());
   }
	this._bUsePagination = false;
};

sap.ui.ux3.DataSetSimpleView.prototype.exit = function() {
	// Cleanup resize event registration on exit
	if(this.sResizeListenerId){
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};

/**
 * Eventhandler for the selection of an Item
 *
 * @param {event} oEvent SelectionChanged event
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.handleSelection = function(oEvent) {
	var oDataSet = this.getParent();
	var oldIndex = oEvent.getParameters().oldLeadSelectedIndex,
		newIndex = oEvent.getParameters().newLeadSelectedIndex,
		aItems = oDataSet.getItems(),
		aSelectedItems = oDataSet.getSelectedIndices();
		if (aSelectedItems.length > 1){
			this._clearTextSelection();
		}
		jQuery.each(aItems, function(index, item){
			if (oDataSet.isSelectedIndex(index)){
				item.$().addClass("sapUiUx3DSSVSelected");
			}
			else{
				item.$().removeClass("sapUiUx3DSSVSelected");
			}
		});
};


/**
 * clears the text selection on the document (disabled fro Dnd)
 * @private
 */
sap.ui.ux3.DataSetSimpleView.prototype._clearTextSelection = function () {
	if (window.getSelection) {
	  if (window.getSelection().empty) {  // Chrome
	    window.getSelection().empty();
	  } else if (window.getSelection().removeAllRanges) {  // Firefox
	    window.getSelection().removeAllRanges();
	  }
	} else if (document.selection && document.selection.empty) {  // IE?
		try {
		    document.selection.empty();
		} catch (ex) {
		    // ignore error to as a workaround for bug in IE8
		}
	}
};

/**
 * Check if Item <code>oItem</code> is selected
 *
 * @param {sap.ui.ux3.DataSetItem} oItem DataSetItem instance
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.isItemSelected = function(oItem) {
	var iIndex = jQuery.inArray(oItem,this.items);
	if (iIndex == -1) {
		return false;
	}
	return this.getParent().isSelectedIndex(iIndex);
};

//*** Interface methods ***

/**
 * View Initialization: Called when selecting the view
 *
 * @param {array} aItems Array of DataSetItems added to the parent DataSet
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.initView = function(aItems) {
	this.getParent().attachSelectionChanged(this.handleSelection, this);
	this.items = this.items.concat(aItems);
	for (var i = 0; i < aItems.length; i++) {
		var template = this.getTemplate().clone();
		aItems[i].setAggregation('_template', template, true);
	}
};

/**
 * View update: Called when pagination adds items
 *
 * @param {array} aItems Array of DataSetItems added to the parent DataSet
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.updateView = function(aDiff) {
	var rm = sap.ui.getCore().createRenderManager(),
		iLastLength = this.items.length;
		
	for (var i = 0; i < aDiff.length; i++) {
		var oItem = aDiff[i].item;
		var iIndex = aDiff[i].index;
		
		if (aDiff[i].type === "insert") {
			var template = this.getTemplate().clone();
			oItem.setAggregation('_template', template, true);
			if (i == aDiff.length - 1 && iLastLength == 0) {
				//render all inital items first. The delegate loads all missing tro fill the scrollarea
				var oDelegate = {
					onAfterRendering: function() {
						this.calculateItemCounts();
						this.getParent().updateItems(sap.ui.model.ChangeReason.Change);
						template.removeDelegate(oDelegate);
					}
				};
				template.addDelegate(oDelegate, false, this);
			}
			this.getRenderer().renderItem(rm, this, oItem);
			rm.flush(this.$()[0], false, iIndex);
			this.items.splice(iIndex, 0, oItem);
		} else {
			this.items.slice(iIndex, 1);
			oItem.$().remove();
			oItem.destroy();
		}
	}
	if(aDiff.length > 0 && this.getFloating() && this.getResponsive()){
		this._computeWidths(true);
	}
	rm.destroy();
};

/**
 * View finalization: Called when leaving the view
 *
 * @protected
 */
sap.ui.ux3.DataSetSimpleView.prototype.exitView = function(aItems) {
	this.getParent().detachSelectionChanged(this.handleSelection, this);
	for (var i = 0; i < aItems.length; i++) {
		aItems[i].destroyAggregation("_template",true);
    }
    this.items = [];
};

/**
 * Set scroll area based on selected view
 * @private
 */
sap.ui.ux3.DataSetSimpleView.prototype.initScrollArea = function() {
	var $scrollArea = this.getScrollArea(),
		that = this;
	
	var fnScroll = function(oEvent) {
		that.getParent().updateItems(sap.ui.model.ChangeReason.Change);
	};
	if (typeof $scrollArea === 'string') {
		$scrollArea = jQuery.sap.byId($scrollArea);
	}
	if (!$scrollArea) {
		$scrollArea = this.$();
	} else if ($scrollArea.is('html')) {
		//if scrollarea is 'html' then we use the browser scrollarea
		$scrollArea = jQuery(document);
	}
	
	if (!this._bUsePagination) {
		$scrollArea.off('scroll', fnScroll);
	} else {
		$scrollArea.on('scroll', fnScroll);
	}
};

sap.ui.ux3.DataSetSimpleView.prototype.checkScrollItems = function() {
	if (!this._bRendered) {
		return;
	}
	
	var oBindingInfo = this.getParent().mBindingInfos["items"],
		$scrollArea = this.getScrollArea(),
		oBinding = oBindingInfo.binding,
		oParent = this.getParent(),
		iAppendItems = 0,
		iFillupSpace,
		scrollArea,
		iClientHeight,
		iScrollHeight;
		
	
	if (oParent.getItems().length === oBinding.getLength()) {
		return iAppendItems;
	}
	if (typeof $scrollArea === 'string') {
		$scrollArea = jQuery.sap.byId($scrollArea);
	}
	if (!$scrollArea) {
		$scrollArea = this.$();
	}
	if (!$scrollArea || $scrollArea.length == 0) {
		return iAppendItems;
	}

	scrollArea = $scrollArea[0];
	iClientHeight = scrollArea.clientHeight;
	iScrollHeight = scrollArea.scrollHeight;

	if ($scrollArea.is('html')) {
		//if scrollarea is 'html' then we use the browser scrollarea
		$scrollArea = jQuery(document);
	}

	if (iClientHeight == iScrollHeight) {
		iFillupSpace = iClientHeight + this._iScrollTrigger;
	} else {
		iFillupSpace = iClientHeight + this._iScrollTrigger + $scrollArea.scrollTop();
	}
	
	if (iFillupSpace > 0) {
		var iNewItemCount = Math.floor(iFillupSpace / this._iRowHeight) * this._iItemsPerRow;
		var iCurrentItemCount = oParent.getItems().length;
		iNewItemCount = Math.ceil(iNewItemCount / this._iItemsPerRow) * this._iItemsPerRow;
		iAppendItems = iNewItemCount - iCurrentItemCount;
	}
	
	return iAppendItems;
};

sap.ui.ux3.DataSetSimpleView.prototype.getItemCount = function() {
	if (this._bUsePagination) {
		var iLength = this.getParent().getItems().length,
		iAppendItems = this.checkScrollItems();
		if (iLength == 0) {
			iLength += this.getInitialItemCount();
		} else {
			iLength += iAppendItems;
		}
		//this._iLastLength = iLength;
		return iLength;
	} else {
		return null;
	}
};

sap.ui.ux3.DataSetSimpleView.prototype.setInitialItemCount = function(iValue) {
	this.setProperty("initialItemCount", iValue);
	this._bUsePagination = (iValue != 0);
};

/**
 * Called after the control is rendered
 */
sap.ui.ux3.DataSetSimpleView.prototype.onBeforeRendering = function(){
	// Cleanup resize event registration before re-rendering
	if(this.sResizeListenerId){
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};

/**
 * Called after the control is rendered
 */
sap.ui.ux3.DataSetSimpleView.prototype.onAfterRendering = function(){
	this._bRendered = true;
	this.initScrollArea();
	if((this.getFloating() && this.getResponsive()) || this._bUsePagination){
		this._height = -1;
		this._itemsPerRow = -1;
		this.onresize();
		this.sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(), jQuery.proxy(this.onresize, this));
	}
};

/**
 * Called after the control is rendered
 */
sap.ui.ux3.DataSetSimpleView.prototype.onThemeChanged = function(){
	if (this._bRendered) {
		this.calculateItemCounts();
		this.getParent().updateItems(sap.ui.model.ChangeReason.Change);
	}
};

/**
 * Function is called when window is resized
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.ux3.DataSetSimpleView.prototype.onresize = function() {

	if (!this.getDomRef()) {
		// slider is not renderes, maybe deleted from DOM -> deregister resize handler and do nothing
		// Cleanup resize event registration on exit
		if(this.sResizeListenerId){
			sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
			this.sResizeListenerId = null;
		}
		return;
	}

	if(this.getFloating() && this.getResponsive()){
		this._computeWidths();
	}
	if (this._bUsePagination && this.items.length > 0) {
		this.calculateItemCounts();
		this.getParent().updateItems(sap.ui.model.ChangeReason.Change);
	}
};

sap.ui.ux3.DataSetSimpleView.prototype.setTemplate = function(oTemplate) {
	this.setAggregation("template", oTemplate, true);
	//Here we need to rerender all items because of a new layout
	if (this.getParent()) {
		this.getParent().updateItems();
	}
};

/**
 * Calculate Item count
 * @private
 */
sap.ui.ux3.DataSetSimpleView.prototype.calculateItemCounts = function(){
	if (this.getDomRef()) {
		var $itemArea = this.$(),
			$firstItem = $itemArea.children().first();
		
		this._iItemsPerRow = Math.floor($itemArea.outerWidth(true) / $firstItem.outerWidth(true));
		this._iNewRows = Math.ceil(this.getReloadItemCount() / this._iItemsPerRow);
		this._iNewItems = this._iItemsPerRow * this._iNewRows;
		this._iRowHeight = $firstItem.outerHeight(true);
		this._iScrollTrigger = this._iNewRows * this._iRowHeight;
	}
};

sap.ui.ux3.DataSetSimpleView.prototype._computeWidths = function(bInitial){
	var $This = this.$();
	var iItemsPerRow = Math.floor($This.width()/this.getItemMinWidth());
	var width = Math.floor(100/iItemsPerRow);
	if($This.width()*width/100 < this.getItemMinWidth()){
		iItemsPerRow--;
		width = Math.floor(100/iItemsPerRow);
	}
	
	if(bInitial || this._height != $This.height() || this._itemsPerRow != iItemsPerRow){
		var count = -1;
		var aItems = this.getParent().getItems();
		var diff, w;
		
		for(var j=0; j<aItems.length; j++){
			if(count == -1 || count+1 > iItemsPerRow){
				count = 0;
				diff = 100-(iItemsPerRow*width);
			}
			
			var w = width;
			if(diff > 0){
				w++;
				diff--;
			}
			aItems[j].$().css("width", w+"%");
			count++;
		}
		
		this._height = $This.height();
		this._itemsPerRow = iItemsPerRow;
	}
};

/**
 * @public
 */
sap.ui.ux3.DataSetSimpleView.prototype.setScrollArea = function(aScrollArea, bSupress) {
	if (typeof aScrollArea !== 'string' && !(aScrollArea instanceof jQuery)) {
		jQuery.sap.log.error('You can only pass a string (ID of scroll area DOM) or an jQuery object as scrollarea');
	}
	this.setProperty('scrollArea', aScrollArea, bSupress);
};
