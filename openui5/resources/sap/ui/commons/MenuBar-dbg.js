/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.MenuBar.
jQuery.sap.declare("sap.ui.commons.MenuBar");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new MenuBar.
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
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getDesign design} : sap.ui.commons.MenuBarDesign (default: sap.ui.commons.MenuBarDesign.Standard)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.commons.MenuItem[]</li></ul>
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
 * Represents a user interface area which is the entry point for menus with their menu items. MenuBar is useful for applications which shall offer a
 * set of actions that shall be provided in a structured way. The MenuBar contains the menu titles from where users navigate to the single items. The control supports
 * for example long menu item texts, automated scrolling for menu items when the browser space is not large enough to display all items, defining images for single
 * or all items in a menu, automated layouting of items with or w/o image, and active/non-active items.
 * 
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.MenuBar
 */
sap.ui.core.Control.extend("sap.ui.commons.MenuBar", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"design" : {type : "sap.ui.commons.MenuBarDesign", group : "Appearance", defaultValue : sap.ui.commons.MenuBarDesign.Standard}
	},
	defaultAggregation : "items",
	aggregations : {
    	"items" : {type : "sap.ui.commons.MenuItem", multiple : true, singularName : "item"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.MenuBar with name <code>sClassName</code> 
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
 * @name sap.ui.commons.MenuBar.extend
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * When the MenuBar is not enabled, automatically all single menu items are also displayed as 'disabled'.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.commons.MenuBar#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuBar#setEnabled
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.MenuBar#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuBar#setVisible
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Specifies the width of the MenuBar
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.MenuBar#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuBar#setWidth
 * @function
 */


/**
 * Getter for property <code>design</code>.
 * Available design options are Header and Standard. Note that design settings are theme-dependent.
 *
 * Default value is <code>Standard</code>
 *
 * @return {sap.ui.commons.MenuBarDesign} the value of property <code>design</code>
 * @public
 * @name sap.ui.commons.MenuBar#getDesign
 * @function
 */

/**
 * Setter for property <code>design</code>.
 *
 * Default value is <code>Standard</code> 
 *
 * @param {sap.ui.commons.MenuBarDesign} oDesign  new value for property <code>design</code>
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuBar#setDesign
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation of menu items.
 * 
 * <strong>Note</strong>: this is the default aggregation for MenuBar.
 * @return {sap.ui.commons.MenuItem[]}
 * @public
 * @name sap.ui.commons.MenuBar#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.commons.MenuItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuBar#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.commons.MenuItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuBar#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.commons.MenuItem} vItem the item to remove or its index or id
 * @return {sap.ui.commons.MenuItem} the removed item or null
 * @public
 * @name sap.ui.commons.MenuBar#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.MenuItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.MenuBar#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.MenuItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.MenuItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.MenuBar#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.commons.MenuBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuBar#destroyItems
 * @function
 */


// Start of sap\ui\commons\MenuBar.js
jQuery.sap.require("sap.ui.commons.Menu");
jQuery.sap.require("sap.ui.commons.MenuItem");

sap.ui.commons.MenuItem.extend("sap.ui.commons._DelegatorMenuItem", {
  constructor : function(oAlterEgoItm) {
    sap.ui.commons.MenuItem.apply(this);
    this.oAlterEgoItm = oAlterEgoItm;
    var that = this;
    this.oAlterEgoItm.getSubmenu().getRootMenu = function(){
    	return that.getParent();
    }
  },
  exit : function () {
	this.oAlterEgoItm.getSubmenu().getRootMenu = sap.ui.commons.Menu.prototype.getRootMenu;
    this.oAlterEgoItm = null;
  },
  getText : function() {
    return this.oAlterEgoItm.getText();
  },
  getIcon : function() {
	  return this.oAlterEgoItm.getIcon();
  },
  getEnabled : function() {
	  return this.oAlterEgoItm.getEnabled();
  },
  getVisible : function() {
	  return this.oAlterEgoItm.getVisible();
  },
  getSubmenu : function() {
	  return this.oAlterEgoItm.getSubmenu();
  }
});

(function() {


/**
 * Initialize this control.
 * @private
 */
sap.ui.commons.MenuBar.prototype.init = function() {
	this.oOvrFlwMnu = null;
	this.sCurrentFocusedItemRefId = null;
};


/**
 * Does all the cleanup when the control is to be destroyed.
 * Called from Element's destroy() method.
 * @private
 */
sap.ui.commons.MenuBar.prototype.exit = function (){
	if(this.oOvrFlwMnu) {
		this.oOvrFlwMnu.destroy();
	}
	this.oOvrFlwMnu = null;
	// Cleanup resize event registration
	if(this.sResizeListenerId){
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};


/**
 * Called before rendering starts by the renderer
 * (This is not the onBeforeRendering method which would be not called for the first rendering)
 * @private
 */
sap.ui.commons.MenuBar.prototype.doBeforeRendering = function() {
	var aItems = this.getItems();
	for(var i=0; i<aItems.length; i++){
		var oMenu = aItems[i].getSubmenu();
		if(oMenu) {
			oMenu.setRootMenuTopStyle(this.getDesign() == sap.ui.commons.MenuBarDesign.Header);
		}
	}

	if(this.oOvrFlwMnu) {
		this.oOvrFlwMnu.setRootMenuTopStyle(this.getDesign() == sap.ui.commons.MenuBarDesign.Header);
	}

	// Cleanup resize event registration before re-rendering
	if(this.sResizeListenerId){
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};


/**
 * Called when the rendering is complete
 * @private
 */
sap.ui.commons.MenuBar.prototype.onAfterRendering = function() {
	//Listen to resizing
	this.sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(), jQuery.proxy(this.onresize, this));

	//Calculate the overflow
	this.onresize();
};


/**
 * Called when the control is resized
 * @private
 */
sap.ui.commons.MenuBar.prototype.onresize = function(oEvent) {
	updateAfterResize(this);
};


/**
 * Behavior implementation which is executed when the focus comes into the control or on one of its children.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onfocusin = function(oEvent){
	var sId = this.getId();
	var jTarget = jQuery(oEvent.target);
	var jTargetId = jTarget.attr("id");
	if(!jTargetId || jTargetId == sId || jTargetId == sId + "-area"){
		var jItems = this.$("area").children();
		this.sCurrentFocusedItemRefId = jItems.length == 0 ? null : jQuery(jItems.get(0)).attr("id");
	} else {
		// Make sure the parent menu item get the focus when a menu is closed via
		// keyboard in order to keep keyboard navigation working
		this.sCurrentFocusedItemRefId = jTargetId;
	}

	var oFocusElement = jQuery.sap.byId(this.sCurrentFocusedItemRefId).get(0);
	if(oFocusElement) {
		oFocusElement.focus();
	}
	
	this.$().attr("tabindex", "-1");
};


/**
 * Behavior implementation which is executed when the focus leaves the control or one of its children.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onfocusout = function(oEvent){
	//Add the control to tab chain again to make tab in working (see onfocusin)
	this.$().attr("tabindex", "0");
};


/**
 * Function is called when mouse key is clicked down.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onmousedown = function(oEvent) {
	var oMenuItem = _getMenuItem(this, oEvent);
	if(oMenuItem === "ovrflw"){
		this._bOvrFlwMnuSkipOpen = this.oOvrFlwMnu && this.oOvrFlwMnu.bOpen;
	}else if(oMenuItem){
		var oMenu = oMenuItem.getSubmenu();
		oMenuItem._bSkipOpen = oMenu && oMenu.bOpen;
	}
};


/**
 * Function is called when mouse leaves the control.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuButton.prototype.onmouseout = function(oEvent) {
	var oMenuItem = _getMenuItem(this, oEvent);
	if(oMenuItem === "ovrflw"){
		var jRef = get$Item(this, oEvent);
		if(this._bOvrFlwMnuSkipOpen && jQuery.sap.checkMouseEnterOrLeave(oEvent, jRef[0])){
			this._bOvrFlwMnuSkipOpen = false;
		}
	}else if(oMenuItem){
		var jRef = get$Item(this, oEvent);
		if(oMenuItem._bSkipOpen && jQuery.sap.checkMouseEnterOrLeave(oEvent, jRef[0])){
			oMenuItem._bSkipOpen = false;
		}
	}
};


/**
 * Behavior implementation which is executed when the user clicks.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onclick = function(oEvent) {
	openItemMenu(this, oEvent, false);
};


/**
 * Behavior implementation which is executed when the user presses the space or enter key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onsapselect = function(oEvent){
	openItemMenu(this, oEvent, true);
};


/**
 * Function is called when down key is pressed without a modifier key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onsapdown = function(oEvent){
	openItemMenu(this, oEvent, true);
};


/**
 * Function is called when down key is pressed with a modifier key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onsapdownmodifiers = function(oEvent){
	if(oEvent.altKey) {
		openItemMenu(this, oEvent, true);
	}
};


/**
 * Behavior implementation which is executed when the user presses the arrow left (RTL: arrow right) key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onsapprevious = function(oEvent){
	if(oEvent.keyCode != jQuery.sap.KeyCodes.ARROW_UP) {//Ignore arrow up
		focusStep(this, oEvent, "prev");
	}
};


/**
 * Behavior implementation which is executed when the user presses the arrow right (RTL: arrow left) key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onsapnext = function(oEvent){
	if(oEvent.keyCode != jQuery.sap.KeyCodes.ARROW_DOWN) {//Ignore arrow down
		focusStep(this, oEvent, "next");
	}
};


/**
 * Behavior implementation which is executed when the user presses the home/pos1 key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onsaphome = function(oEvent){
	focusStep(this, oEvent, "first");
};


/**
 * Behavior implementation which is executed when the user presses the end key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuBar.prototype.onsapend = function(oEvent){
	focusStep(this, oEvent, "last");
};


//********* Private *********


//Opens the corresponding menu of the selected menu item
var openItemMenu = function(oThis, oEvent, bWithKeyboard) {
	oEvent.preventDefault();
	oEvent.stopPropagation();
	
	if(oThis.getEnabled()){
		var oMenuItem = _getMenuItem(oThis, oEvent);
		if(oMenuItem === "ovrflw"){
			var jRef = get$Item(oThis, oEvent);
			if(oThis.oOvrFlwMnu && !oThis._bOvrFlwMnuSkipOpen){
				var eDock = sap.ui.core.Popup.Dock;
				oThis.oOvrFlwMnu.open(bWithKeyboard, jRef.get(0), eDock.EndTop, eDock.EndBottom, jRef.get(0));
			}
		}else if(oMenuItem){
			if(oMenuItem.getEnabled()) {
				var jRef = get$Item(oThis, oEvent);
				var oMenu = oMenuItem.getSubmenu();
				if(oMenu && !oMenuItem._bSkipOpen){
					var eDock = sap.ui.core.Popup.Dock;
					oMenu.open(bWithKeyboard, jRef.get(0), eDock.BeginTop, eDock.BeginBottom, jRef.get(0));
				}
			}
		}
	}
	
	//Resets all skip open flags
	oThis._bOvrFlwMnuSkipOpen = false;
	var aItems = oThis.getItems();
	for(var i=0; i<aItems.length; i++){
		aItems[i]._bSkipOpen = false;
	}
};


//Returns the jQuery Object of the item which was the target of the event (if exists)
var get$Item = function(oThis, oEvent){
	var jRef = jQuery(oEvent.target);
	if(!jRef.attr("itemidx")) {
		jRef = jRef.parent();
	}
	return jRef.attr("itemidx") ? jRef : null;
};


//Returns the item which was the target of the event (if exists) or "ovrflow" for the overflow
var _getMenuItem = function(oThis, oEvent) {
	var jRef = get$Item(oThis, oEvent);
	if(jRef){
		var sItemIdx = jRef.attr("itemidx");
		if(sItemIdx){
			if(sItemIdx == "ovrflw"){
				return "ovrflw";
			}else{
				var iIdx = parseInt(sItemIdx, 10);
				var oMenuItem = oThis.getItems()[iIdx];
				return oMenuItem;
			}
		}
	}
	return null;
};


//Compute actual number of items currently hidden due to overflow
var getVisibleItemCount = function(oThis){
	var iVisibleItems = 0;

	var jAreaRef = oThis.$("area");
	var jItems = jAreaRef.children();

	var bRtl = sap.ui.getCore().getConfiguration().getRTL();
	var lastOffsetLeft = (bRtl ? 100000 : 0);

	jItems.each(function(iIdx) {
		if(iIdx == 0) {
			return true;
		}

		var currentOffsetLeft = this.offsetLeft;
		var bLineBreak = (bRtl ? (currentOffsetLeft >= lastOffsetLeft) : (currentOffsetLeft <= lastOffsetLeft));

		if(bLineBreak){
			iVisibleItems = iIdx;
			return false;
		}else if(jQuery(this).attr("id") == oThis.getId()+"-ovrflw"){
			// This is the overflow button, there was no line break
			iVisibleItems = iIdx;
			return false;
		}else{
			// Regular item, to the right of the last one, so just proceed
			lastOffsetLeft = currentOffsetLeft;
			return true;
		}
	});

	return iVisibleItems;
};


//Handle the resize of the menubar
var updateAfterResize = function(oThis){
	var iVisibleItems = getVisibleItemCount(oThis);
	var _iVisibleItems = iVisibleItems;

	var jAreaRef = oThis.$("area");
	var jItems = jAreaRef.children();
	var jOvrFlwRef = oThis.$("ovrflw");

	var bUpdateFocus = false;

	if(iVisibleItems < jItems.length-1){
		jOvrFlwRef.attr("style", "display:block;");
		if(!oThis.oOvrFlwMnu){
			oThis.oOvrFlwMnu = new sap.ui.commons.Menu(oThis.getId()+"-ovrflwmnu");
			oThis.oOvrFlwMnu.bUseTopStyle = oThis.getDesign() == sap.ui.commons.MenuBarDesign.Header;
			oThis.oOvrFlwMnu.attachItemSelect(function(oEvent){
				var oItem = oEvent.getParameter("item");
				if(!(oItem instanceof sap.ui.commons._DelegatorMenuItem)){
					var oItemRootMenu = sap.ui.commons.Menu.prototype.getRootMenu.apply(oItem.getParent());
					oItemRootMenu.fireItemSelect({item: oItem});
				}
			});
		}
		oThis.oOvrFlwMnu.destroyItems();
		var aItems = oThis.getItems();
		for(var i=0; i<aItems.length; i++){
			var oItem = aItems[i];
			if(iVisibleItems != 0){
				if(oItem.getVisible()) {
					iVisibleItems--;
				}
				if(iVisibleItems == 0) {
					oThis.sLastVisibleItemId = oItem.getId();
				}
			}else{
				oThis.oOvrFlwMnu.addItem(new sap.ui.commons._DelegatorMenuItem(oItem));
				if(oItem.getId() == oThis.sCurrentFocusedItemRefId){
					bUpdateFocus = true;
				}
			}
		}
		if(sap.ui.getCore().getConfiguration().getAccessibility()){
			jItems.attr("aria-setsize", _iVisibleItems+1);
			jOvrFlwRef.attr("aria-posinset", _iVisibleItems+1);
		}
	}else{
		jOvrFlwRef.attr("style", "display:none;");
		if(oThis.oOvrFlwMnu) {
			oThis.oOvrFlwMnu.destroyItems();
		}
		oThis.sLastVisibleItemId = null;
		if(sap.ui.getCore().getConfiguration().getAccessibility()){
			jItems.attr("aria-setsize", _iVisibleItems);
			jOvrFlwRef.attr("aria-posinset", 0);
		}
	}

	jAreaRef.scrollTop(0);

	if(bUpdateFocus){
		oThis.sCurrentFocusedItemRefId = oThis.sLastVisibleItemId;
		jQuery.sap.byId(oThis.sLastVisibleItemId).get(0).focus();
	}
};


//Focus the next (depending on the given direction) step
var focusStep = function(oThis, oEvent, sDir){
	oEvent.stopPropagation();
	oEvent.preventDefault();

	if(!oThis.sCurrentFocusedItemRefId) {
		return;
	}

	var sFollowingFocusItemId = null;
	if(oThis.sLastVisibleItemId && ((oThis.sCurrentFocusedItemRefId == oThis.sLastVisibleItemId && sDir == "next") || sDir == "last")){
		sFollowingFocusItemId = oThis.getId()+"-ovrflw";
	}else if(oThis.sLastVisibleItemId && oThis.sCurrentFocusedItemRefId == oThis.getId()+"-ovrflw" && sDir == "prev"){
		sFollowingFocusItemId = oThis.sLastVisibleItemId;
	}else{
		var sFoo = sDir+"All";
		var bIsJumpToEnd = false;
		if(sDir == "first"){
			sFoo = "prevAll";
			bIsJumpToEnd = true;
		}else if(sDir == "last"){
			sFoo = "nextAll";
			bIsJumpToEnd = true;
		}

		var jCurrentFocusItem = jQuery.sap.byId(oThis.sCurrentFocusedItemRefId);
		var jFollowingItems = jCurrentFocusItem[sFoo](":visible");

		sFollowingFocusItemId = jQuery(jFollowingItems.get(bIsJumpToEnd ? jFollowingItems.length-1 : 0)).attr("id");
	}
	if(sFollowingFocusItemId){
		oThis.sCurrentFocusedItemRefId = sFollowingFocusItemId;
		jQuery.sap.byId(sFollowingFocusItemId).get(0).focus();
	}
};


}());
