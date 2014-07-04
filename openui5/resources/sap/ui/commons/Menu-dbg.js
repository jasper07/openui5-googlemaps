/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Menu.
jQuery.sap.declare("sap.ui.commons.Menu");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Menu.
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
 * <li>{@link #getAriaDescription ariaDescription} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} <strong>(default aggregation)</strong> : sap.ui.commons.MenuItemBase[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.Menu#event:itemSelect itemSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A container for menu items. When the space in the browser is not large enough to display all defined items, a scroll bar is provided.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.Menu
 */
sap.ui.core.Control.extend("sap.ui.commons.Menu", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"open", "close"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"ariaDescription" : {type : "string", group : "Accessibility", defaultValue : null}
	},
	defaultAggregation : "items",
	aggregations : {
    	"items" : {type : "sap.ui.commons.MenuItemBase", multiple : true, singularName : "item"}
	},
	events : {
		"itemSelect" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Menu with name <code>sClassName</code> 
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
 * @name sap.ui.commons.Menu.extend
 * @function
 */

sap.ui.commons.Menu.M_EVENTS = {'itemSelect':'itemSelect'};


/**
 * Getter for property <code>enabled</code>.
 * 
 * Disabled menus have other colors than enabled ones, depending on customer settings.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.commons.Menu#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.Menu} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Menu#setEnabled
 * @function
 */


/**
 * Getter for property <code>ariaDescription</code>.
 * 
 * The label/description provided for screen readers
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>ariaDescription</code>
 * @public
 * @name sap.ui.commons.Menu#getAriaDescription
 * @function
 */

/**
 * Setter for property <code>ariaDescription</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAriaDescription  new value for property <code>ariaDescription</code>
 * @return {sap.ui.commons.Menu} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Menu#setAriaDescription
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * Aggregation of menu items
 * 
 * <strong>Note</strong>: this is the default aggregation for Menu.
 * @return {sap.ui.commons.MenuItemBase[]}
 * @public
 * @name sap.ui.commons.Menu#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.commons.MenuItemBase}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.ui.commons.Menu} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Menu#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.commons.MenuItemBase}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Menu} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Menu#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.commons.MenuItemBase} vItem the item to remove or its index or id
 * @return {sap.ui.commons.MenuItemBase} the removed item or null
 * @public
 * @name sap.ui.commons.Menu#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.MenuItemBase[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Menu#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.MenuItemBase</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.MenuItemBase}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.Menu#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.ui.commons.Menu} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Menu#destroyItems
 * @function
 */


/**
 * 
 * Provides the application an alternative option to listen to select events. This event is only fired on the root menu of a menu hierarchy.
 * Note that there is also a select event available for MenuItem; if the current event is used, the select event of a MenuItem becomes redundant.
 *  
 *
 * @name sap.ui.commons.Menu#itemSelect
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.commons.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'itemSelect' event of this <code>sap.ui.commons.Menu</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.Menu</code>.<br/> itself. 
 *  
 * 
 * Provides the application an alternative option to listen to select events. This event is only fired on the root menu of a menu hierarchy.
 * Note that there is also a select event available for MenuItem; if the current event is used, the select event of a MenuItem becomes redundant.
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Menu</code>.<br/> itself.
 *
 * @return {sap.ui.commons.Menu} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Menu#attachItemSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'itemSelect' event of this <code>sap.ui.commons.Menu</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Menu} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Menu#detachItemSelect
 * @function
 */

/**
 * Fire event itemSelect to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'item' of type <code>sap.ui.commons.MenuItemBase</code> The selected item</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Menu} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.Menu#fireItemSelect
 * @function
 */


/**
 * Opens the menu
 *
 * @name sap.ui.commons.Menu.prototype.open
 * @function
 * @param {boolean} 
 *         bWithKeyboard
 *         
 * An indicator whether the first item shall be highlighted, or not. It is highlighted in the case that the menu is opened via keyboard.
 * 
 * @param {object} 
 *         oOpenerRef
 *         
 * DOMNode or sap.ui.core.Element that opens the menu; the DOMNode or sap.ui.core.Element will be focused again after the menu is closed. This parameter is optional.
 * 
 * @param {sap.ui.core.Dock} 
 *         sMy
 *         
 * The popup content's reference position for docking.
 * See also sap.ui.core.Popup.Dock and sap.ui.core.Popup.open.
 * 
 * @param {sap.ui.core.Dock} 
 *         sAt
 *         
 * The 'of' element's reference point for docking to.
 * See also sap.ui.core.Popup.Dock and sap.ui.core.Popup.open.
 * 
 * @param {object} 
 *         oOf
 *         
 * The DOM element or sap.ui.core.Element to dock to.
 * See also sap.ui.core.Popup.open.
 * 
 * @param {string} 
 *         sOffset
 *         
 * The offset relative to the docking point, specified as a string with space-separated pixel values (e.g. "0 10" to move the popup 10 pixels to the right).
 * See also sap.ui.core.Popup.open.
 * 
 * @param {sap.ui.core.Collision} 
 *         sCollision
 *         
 * The collision defines how the position of an element should be adjusted in case it overflows the window in some direction.
 * See also sap.ui.core.Popup.open.
 * 

 * @type void
 * @public
 */


/**
 * Closes the menu
 *
 * @name sap.ui.commons.Menu.prototype.close
 * @function

 * @type void
 * @public
 */


// Start of sap\ui\commons\Menu.js
(function(window, undefined) {

jQuery.sap.require("sap.ui.commons.MenuItemBase");
jQuery.sap.require("sap.ui.core.Popup");

sap.ui.commons.Menu.prototype.init = function(){
	var that = this;
	this.bOpen = false;
	this.oOpenedSubMenu = null;
	this.oHoveredItem = null;
	this.oPopup = null; // Will be created lazily
	this.fAnyEventHandlerProxy = jQuery.proxy(this.onAnyEvent, this);
	this.fOrientationChangeHandler = function(){
		that.close();
	};
	this.bUseTopStyle = false;
};

/**
 * Does all the cleanup when the Menu is to be destroyed.
 * Called from Element's destroy() method.
 * @private
 */
sap.ui.commons.Menu.prototype.exit = function(){
	if(this.oPopup){
		this.oPopup.detachOpened(this._menuOpened, this);
		this.oPopup.detachClosed(this._menuClosed, this);
		this.oPopup.destroy();
		delete this.oPopup;
	}
	
	jQuery.sap.unbindAnyEvent(this.fAnyEventHandlerProxy);
	if(this._bOrientationChangeBound){
		jQuery(window).unbind("orientationchange", this.fOrientationChangeHandler);
		this._bOrientationChangeBound = false;
	}
	
	// Cleanup resize event registration
	if(this.sResizeListenerId){
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
	
	// if a parent popup was registered just delete the reference and keep the popup as is
	if (this._sParentPopupId) {
		delete this._sParentPopupId;
		delete this._bBubbleAutoClose;
	}
};

/**
 * Called before rendering starts by the renderer
 * @private
 */
sap.ui.commons.Menu.prototype.onBeforeRendering = function() {
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
sap.ui.commons.Menu.prototype.onAfterRendering = function() {
	if(this.oHoveredItem) {
		this.oHoveredItem.hover(true, this);
	}
	
	//Might be in the end not a good idea to listen for resizing the body / window because the body might change its size
	//during a menu is opened (which then closes the menu again):

	//Listen to resizing of the document
	//if(this.getRootMenu() == this)
	//	this.sResizeListenerId = sap.ui.core.ResizeHandler.register(!!sap.ui.Device.browser.internet_explorer ? window : jQuery("body").get(0), jQuery.proxy(this.onresize, this));
};

///**
// * Called when the control is resized
// * @private
// */
//sap.ui.commons.Menu.prototype.onresize = function(oEvent) {
//	if(!this.bOpen) return;
//	this.close();
//};


//****** API Methods ******

sap.ui.commons.Menu.prototype.open = function(bWithKeyboard, oOpenerRef, my, at, of, offset, collision){
	if(this.bOpen) {
		return;
	}

	this.bOpen = true;
	this.oOpenerRef = oOpenerRef;

	// Open the sap.ui.core.Popup
	this.getPopup().open(0, my, at, of, offset || "0 0", collision || "_sapUiCommonsMenuFlip _sapUiCommonsMenuFlip", true);

	// Set the tab index of the menu and focus
	var oDomRef = this.getDomRef();
	jQuery(oDomRef).attr("tabIndex", 0).focus();
	
	// Mark the first item when using the keyboard
	if (bWithKeyboard) {
		this.setHoveredItem(this.getNextVisibleItem(-1));
	}

	jQuery.sap.bindAnyEvent(this.fAnyEventHandlerProxy);
	if(sap.ui.Device.support.orientation && this.getRootMenu() === this){
		jQuery(window).bind("orientationchange", this.fOrientationChangeHandler);
		this._bOrientationChangeBound = true;
	}
};

/**
 * This function is called when the Menu was opened. If there is a proper opener set
 * the Menu checks if the opener (or menu) runs within another popup.
 * If so the menu gesiters itself at the popup as an additional focusable content.
 *
 * This is needed since CSS: 0120061532 0002682049 2013 found out that if a menu
 * is used within a ToolBar overflow the Menu can't be used at all. Since the overflow
 * is an autoclose popup and when the Menu is opened the focus is set within the opened menu.
 * And thus the focus is lost within the ToolBar overflow and therefore it closes.
 *
 * @since 1.17.0
 * @private
 */ 
sap.ui.commons.Menu.prototype._menuOpened = function() {
	if (this.oOpenerRef) {
		var $Opener = this.oOpenerRef instanceof sap.ui.core.Control ? this.oOpenerRef.$() : jQuery(this.oOpenerRef);
		// get the corresponding Popup of the opener if the menu is opened within a popup
		var $ParentPopup = $Opener.closest("[data-sap-ui-popup]"); 
		
		// get the corresponding Popup-id
		var sParentPopupId = $ParentPopup.attr("data-sap-ui-popup");
		if (sParentPopupId) { 
			this._sParentPopupId = sParentPopupId;
			
			var oObject = {
					id : this.getId()	
			};
			
			// register id of Menu-Popup to parent-Popup to make the menu as focusable
			var sEventId = "sap.ui.core.Popup.addFocusableContent-" + this._sParentPopupId;
			sap.ui.getCore().getEventBus().publish("sap.ui", sEventId, oObject);
		}	
	}
	
	fnIe8RepaintBug(this);
};

sap.ui.commons.Menu.prototype.close = function() {
	if(!this.bOpen || sap.ui.commons.Menu._dbg /*Avoid closing for debugging purposes*/) {
		return;
	}
	
	// Remove fixed flag if it existed
	delete this._bFixed;


	jQuery.sap.unbindAnyEvent(this.fAnyEventHandlerProxy);
	if(this._bOrientationChangeBound){
		jQuery(window).unbind("orientationchange", this.fOrientationChangeHandler);
		this._bOrientationChangeBound = false;
	}

	this.bOpen = false;
	// Close all sub menus if there are any
	if(this.oOpenedSubMenu) {
		this.oOpenedSubMenu.close();
	}

	// Reset the hover state
	this.setHoveredItem();

	// Reset the tab index of the menu and focus the opener (if there is any)
	jQuery(this.getDomRef()).attr("tabIndex", -1);
	if(this.oOpenerRef && !this.ignoreOpenerDOMRef) {
		this.oOpenerRef.focus();
	}
	this.oOpenerRef = undefined;

	// Close the sap.ui.core.Popup
	this.getPopup().close(0);

	//Remove the Menus DOM after it is closed
	this.onBeforeRendering();
	this.$().remove();
	this.bOutput = false;

	if(this.isSubMenu()){
		this.getParent().getParent().oOpenedSubMenu = null;
	}
};

/**
 * This function is called when the Menu was closed. If the menu was closed via the Menu's
 * autoclose-mechanism the variable 'this._bBubbleAutoClose' has to be set to <b>true</b>
 *
 * @since 1.17.0
 * @private
 */ 
sap.ui.commons.Menu.prototype._menuClosed = function() {
	if (this._sParentPopupId) {
		var oObject = {
			id : this.getId(),
			bAutoClose : this._bBubbleAutoClose
		};
		
		// de-register id of Menu-Popup from parent-Popup
		var sEventId = "sap.ui.core.Popup.removeFocusableContent-" + this._sParentPopupId;
		sap.ui.getCore().getEventBus().publish("sap.ui", sEventId, oObject);
	}
	// delete the saved id to reset everything because the Menu might be opened
	// differently when it will be opened next time
	delete this._sParentPopupId;
	delete this._bBubbleAutoClose;
};

//****** Event Handlers ******

sap.ui.commons.Menu.prototype.onclick = function(oEvent){
	this.selectItem(this.getItemByDomRef(oEvent.target), false, !!(oEvent.metaKey || oEvent.ctrlKey));
	oEvent.preventDefault();
	oEvent.stopPropagation();
};


sap.ui.commons.Menu.prototype.onsapnext = function(oEvent){
	//right or down (RTL: left or down)
	if(oEvent.keyCode != jQuery.sap.KeyCodes.ARROW_DOWN){
		//Go to sub menu if available
		if(this.oHoveredItem && this.oHoveredItem.getSubmenu() && this.checkEnabled(this.oHoveredItem)){
			this.openSubmenu(this.oHoveredItem, true);
			return;
		}
	}

	//Go to the next visible item
	var iIdx = this.oHoveredItem ? this.indexOfAggregation("items", this.oHoveredItem) : -1;
	this.setHoveredItem(this.getNextVisibleItem(iIdx));
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.ui.commons.Menu.prototype.onsapprevious = function(oEvent){
	//left or up (RTL: right or up)
	if(oEvent.keyCode != jQuery.sap.KeyCodes.ARROW_UP){
		//Go to parent menu if this is a sub menu
		if(this.isSubMenu()){
			this.close();
			oEvent.preventDefault();
			oEvent.stopPropagation();
			return;
		}
	}

	//Go to the previous visible item
	var iIdx = this.oHoveredItem ? this.indexOfAggregation("items", this.oHoveredItem) : -1;
	this.setHoveredItem(this.getPreviousVisibleItem(iIdx));
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.ui.commons.Menu.prototype.onsaphome = function(oEvent){
	//Go to the first visible item
	var aItems = this.getItems();
	var oItem = null;
	for(var i=0; i<aItems.length; i++){
		if(aItems[i].getVisible()){
			oItem = aItems[i];
			break;
		}
	}

	this.setHoveredItem(oItem);
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.ui.commons.Menu.prototype.onsapend = function(oEvent){
	//Go to the last visible item
	var aItems = this.getItems();
	var oItem = null;
	for(var i=aItems.length-1; i>=0; i--){
		if(aItems[i].getVisible()){
			oItem = aItems[i];
			break;
		}
	}

	this.setHoveredItem(oItem);
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.ui.commons.Menu.prototype.onsapselect = function(oEvent){
	this._sapSelectOnKeyDown = true;
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.ui.commons.Menu.prototype.onkeyup = function(oEvent){
	//like sapselect but on keyup:
	//Using keydown has the following side effect:
	//If the selection leads to a close of the menu and the focus is restored to the caller (e.g. a button)
	//the keyup is fired on the caller (in case of a button a click event is fired there in FF -> Bad!)
	//The attribute _sapSelectOnKeyDown is used to avoid the problem the other way round (Space is pressed
	//on Button which opens the menu and the space keyup immediately selects the first item)
	if(!this._sapSelectOnKeyDown){
		return;
	}else{
		this._sapSelectOnKeyDown = false;
	}
	if(!jQuery.sap.PseudoEvents.sapselect.fnCheck(oEvent)) {
		return;
	}
	this.selectItem(this.oHoveredItem, true, false);
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.ui.commons.Menu.prototype.onsapbackspace = function(oEvent){
	if(jQuery(oEvent.target).prop("tagName") != "INPUT"){
		oEvent.preventDefault(); //CSN 4537657 2012: Stop browser history navigation
	}
};
sap.ui.commons.Menu.prototype.onsapbackspacemodifiers = sap.ui.commons.Menu.prototype.onsapbackspace;

sap.ui.commons.Menu.prototype.onsapescape = function(oEvent){
	this.close();
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.ui.commons.Menu.prototype.onsaptabnext = sap.ui.commons.Menu.prototype.onsapescape;
sap.ui.commons.Menu.prototype.onsaptabprevious = sap.ui.commons.Menu.prototype.onsapescape;

sap.ui.commons.Menu.prototype.onmouseover = function(oEvent){
	var oItem = this.getItemByDomRef(oEvent.target);
	if(!this.bOpen || !oItem || oItem == this.oHoveredItem) {
		return;
	}

	if(this.oOpenedSubMenu && jQuery.sap.containsOrEquals(this.oOpenedSubMenu.getDomRef(), oEvent.target)) {
		return;
	}

	this.setHoveredItem(oItem);

	if (this.oOpenedSubMenu && !this.oOpenedSubMenu._bFixed) {
		this.oOpenedSubMenu.close();
		this.oOpenedSubMenu = null;
	}

	if(jQuery.sap.checkMouseEnterOrLeave(oEvent, this.getDomRef())){
		this.getDomRef().focus();
	}

	if(this.checkEnabled(oItem)) {
		this.openSubmenu(oItem, false, true);
	}
};

sap.ui.commons.Menu.prototype.onmouseout = function(oEvent){
	fnIe8RepaintBug(this);
	
	if(jQuery.sap.checkMouseEnterOrLeave(oEvent, this.getDomRef())){
		if(!this.oOpenedSubMenu || !this.oOpenedSubMenu.getParent() === this.oHoveredItem) {
			this.setHoveredItem(null);
		}
	}
};

/**
 * Handles the outer event of the popup.
 * @param {sap.ui.core.Event} oControlEvent The event
 * @private
 */
sap.ui.commons.Menu.prototype.onAnyEvent = function(oEvent){
	if(!this.bOpen || oEvent.type != "mousedown") {
		return;
	}
	var oSource = oEvent.target, oDomRef = this.getDomRef();

	if(!jQuery.sap.containsOrEquals(oDomRef, oSource) || oSource.tagName=="BODY"){
		this.getRootMenu().handleOuterEvent(this.getId(), oEvent);
	}
};

/**
 * Handles the onsapfocusleave event
 * @param {jQuery.Event} oEvent The browser event
 * @private
 */
sap.ui.commons.Menu.prototype.onsapfocusleave = function(oEvent){
	// Only the deepest opened sub menu should handle the event or ignore the event from an item
	if(this.oOpenedSubMenu || !this.bOpen) {
		return;
	}
	this.getRootMenu().handleOuterEvent(this.getId(), oEvent);
};

//****** Helper Methods ******

sap.ui.commons.Menu.prototype.handleOuterEvent = function(oMenuId, oEvent){
	var isInMenuHierarchy = false;
	if (oEvent.type == "mousedown"){
		var currentMenu = this;
		while(currentMenu){
			if(jQuery.sap.containsOrEquals(currentMenu.getDomRef(), oEvent.target)){
				isInMenuHierarchy = true;
			}
			currentMenu = currentMenu.oOpenedSubMenu;
		}
	}else if (oEvent.type == "sapfocusleave"){
		if(oEvent.relatedControlId){
			var currentMenu = this;
			while(currentMenu){
				if((currentMenu.oOpenedSubMenu && currentMenu.oOpenedSubMenu.getId() == oEvent.relatedControlId)
						|| jQuery.sap.containsOrEquals(currentMenu.getDomRef(), jQuery.sap.byId(oEvent.relatedControlId).get(0))){
					isInMenuHierarchy = true;
				}
				currentMenu = currentMenu.oOpenedSubMenu;
			}
		}
	}

	if(!isInMenuHierarchy) {
		this.ignoreOpenerDOMRef = true;
		// bubble autoClose to the parent popup if Menu runs within another popup
		this._bBubbleAutoClose = !!this._sParentPopupId; 
		
		this.close();
		this.ignoreOpenerDOMRef = false;
	}
};

sap.ui.commons.Menu.prototype.getItemByDomRef = function(oDomRef){
	var oItems = this.getItems(),
		iLength = oItems.length;
	for(var i=0;i<iLength;i++){
		var oItem = oItems[i],
			oItemRef = oItem.getDomRef();
		if(jQuery.sap.containsOrEquals(oItemRef, oDomRef)) {
			return oItem;
		}
	}
	return null;
};

sap.ui.commons.Menu.prototype.selectItem = function(oItem, bWithKeyboard, bCtrlKey){
	if(!oItem || !(oItem instanceof sap.ui.commons.MenuItemBase && this.checkEnabled(oItem))) {
		return;
	}

	var oSubMenu = oItem.getSubmenu();

	if(!oSubMenu){
		// This is a normal item -> Close all menus and fire event.
		this.getRootMenu().close();
	}else{
		// Item with sub menu was triggered -> Open sub menu and fire event.
		this.openSubmenu(oItem, bWithKeyboard);
	}

	oItem.fireSelect({item: oItem, ctrlKey: bCtrlKey});
	this.getRootMenu().fireItemSelect({item: oItem});
};

sap.ui.commons.Menu.prototype.isSubMenu = function(){
	return this.getParent() && this.getParent().getParent && this.getParent().getParent() instanceof sap.ui.commons.Menu;
};

sap.ui.commons.Menu.prototype.getRootMenu = function(){
	var oMenu = this;
	while(oMenu.isSubMenu()){
		oMenu = oMenu.getParent().getParent();
	}
	return oMenu;
};

sap.ui.commons.Menu.prototype.getMenuLevel = function(){
	var iLevel = 1;
	var oMenu = this;
	while(oMenu.isSubMenu()){
		oMenu = oMenu.getParent().getParent();
		iLevel++;
	}
	return iLevel;
};

sap.ui.commons.Menu.prototype.getPopup = function (){
	if(!this.oPopup){
		this.oPopup = new sap.ui.core.Popup(this, false, true); // content, modal, shadow
		this.oPopup.attachOpened(this._menuOpened, this);
		this.oPopup.attachClosed(this._menuClosed, this);
	}
	return this.oPopup;
};

sap.ui.commons.Menu.prototype.setHoveredItem = function(oItem){
	if(this.oHoveredItem) {
		this.oHoveredItem.hover(false, this);
	}

	if(!oItem){
		this.oHoveredItem = null;
		jQuery(this.getDomRef()).removeAttr("aria-activedescendant");
		return;
	}

	this.oHoveredItem = oItem;
	oItem.hover(true, this);
	if(sap.ui.getCore().getConfiguration().getAccessibility()) {
		jQuery(this.getDomRef()).attr("aria-activedescendant", oItem.getId());
	}
};

sap.ui.commons.Menu.prototype.openSubmenu = function(oItem, bWithKeyboard, bWithHover){
	var oSubMenu = oItem.getSubmenu();
	if(!oSubMenu) {
		return;
	}

	if(this.oOpenedSubMenu && this.oOpenedSubMenu !== oSubMenu){
		// Another sub menu is open and has not been fixed. Close it at first.
		this.oOpenedSubMenu.close();
		this.oOpenedSubMenu = null;
	}
	
	if (this.oOpenedSubMenu) {
		// Already open. Keep open, bring to front and fix/unfix menu...

		// Fix/Unfix Menu if clicked. Do not change status if just hovering over
		this.oOpenedSubMenu._bFixed = 
			   (bWithHover && this.oOpenedSubMenu._bFixed) 
			|| (!bWithHover && !this.oOpenedSubMenu._bFixed);
		
		this.oOpenedSubMenu._bringToFront();
	} else {
		// Open the sub menu
		this.oOpenedSubMenu = oSubMenu;
		var eDock = sap.ui.core.Popup.Dock;
		oSubMenu.open(bWithKeyboard, this, eDock.BeginTop, eDock.EndTop, oItem, "0 0");
	}
};

/**
 * Brings this menu to the front of the menu stack.
 * This simulates a mouse-event and raises the z-index which is internally tracked by the Popup.
 * 
 * @private
 */
sap.ui.commons.Menu.prototype._bringToFront = function() {
	// This is a hack. We "simulate" a mouse-down-event on the submenu so that it brings itself
	// to the front.
	this.getPopup().onmousedown();
};

sap.ui.commons.Menu.prototype.checkEnabled = function(oItem){
	fnIe8RepaintBug(this);
	return oItem && oItem.getEnabled() && this.getEnabled();
};

sap.ui.commons.Menu.prototype.getNextVisibleItem = function(iIdx){
	var oItem = null;
	var aItems = this.getItems();

	// At first, start with the next index
	for(var i=iIdx+1; i<aItems.length; i++){
		if(aItems[i].getVisible()){
			oItem = aItems[i];
			break;
		}
	}

	// If nothing found, start from the beginning
	if(!oItem){
		for(var i=0; i<=iIdx; i++){
			if(aItems[i].getVisible()){
				oItem = aItems[i];
				break;
			}
		}
	}

	return oItem;
};

sap.ui.commons.Menu.prototype.getPreviousVisibleItem = function(iIdx){
	var oItem = null;
	var aItems = this.getItems();

	// At first, start with the previous index
	for(var i=iIdx-1; i>=0; i--){
		if(aItems[i].getVisible()){
			oItem = aItems[i];
			break;
		}
	}

	// If nothing found, start from the end
	if(!oItem){
		for(var i=aItems.length-1; i>=iIdx; i--){
			if(aItems[i].getVisible()){
				oItem = aItems[i];
				break;
			}
		}
	}

	return oItem;
};

sap.ui.commons.Menu.prototype.setRootMenuTopStyle = function(bUseTopStyle){
	this.getRootMenu().bUseTopStyle = bUseTopStyle;
	sap.ui.commons.Menu.rerenderMenu(this.getRootMenu());
};


sap.ui.commons.Menu.rerenderMenu = function(oMenu){
	var aItems = oMenu.getItems();
	for(var i=0; i<aItems.length; i++){
		var oSubMenu = aItems[i].getSubmenu();
		if(oSubMenu) {
			sap.ui.commons.Menu.rerenderMenu(oSubMenu);
		}
	}

	oMenu.invalidate();
	oMenu.rerender();
};


///////////////////////////////////////// Hidden Functions /////////////////////////////////////////


//IE 8 repainting bug when hovering over MenuItems with IconFont
var fnIe8RepaintBug = function() {};
if (sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version < 9) {
	fnIe8RepaintBug = function(oMenu, iDelay) {
		if (iDelay === undefined) {
			iDelay = 50;
		}
		
		
		/* In case of perdormance issues, the commented code around the delayedCall might help:
		jQuery.sap.clearDelayedCall(oMenu.data("delayedRepaintId"));
		var iDelayedId =  */ 
		jQuery.sap.delayedCall(iDelay, oMenu, function() {
			var $Elem = this.$(); // this is the Menu instance from the oMenu argument
			if ($Elem.length > 0) {
				var oDomRef = $Elem[0].firstChild;
				sap.ui.core.RenderManager.forceRepaint(oDomRef);
			}
		});
		/* oMenu.data("delayedRepaintId", iDelayedId); */
	};
}


//**********************************************

/*!
 * The following code is taken from 
 * jQuery UI 1.10.3 - 2013-11-18
 * jquery.ui.position.js
 *
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT
 */

//TODO: Get rid of this coding when jQuery UI 1.8 is no longer supported and the framework was switched to jQuery UI 1.9 ff. 

function _migrateDataTojQueryUI110(data){
	var withinElement = jQuery(window);
	data.within = {
		element: withinElement,
		isWindow: true,
		offset: withinElement.offset() || { left: 0, top: 0 },
		scrollLeft: withinElement.scrollLeft(),
		scrollTop: withinElement.scrollTop(),
		width: withinElement.width(),
		height: withinElement.height()
	};
	data.collisionPosition = {
		marginLeft: 0,
		marginTop: 0
	};
	return data;
};

var _pos_jQueryUI110 = {
	fit: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
				outerWidth = within.width,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = withinOffset - collisionPosLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
				newOverRight;

			// element is wider than within
			if ( data.collisionWidth > outerWidth ) {
				// element is initially over the left side of within
				if ( overLeft > 0 && overRight <= 0 ) {
					newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
					position.left += overLeft - newOverRight;
				// element is initially over right side of within
				} else if ( overRight > 0 && overLeft <= 0 ) {
					position.left = withinOffset;
				// element is initially over both left and right sides of within
				} else {
					if ( overLeft > overRight ) {
						position.left = withinOffset + outerWidth - data.collisionWidth;
					} else {
						position.left = withinOffset;
					}
				}
			// too far left -> align with left edge
			} else if ( overLeft > 0 ) {
				position.left += overLeft;
			// too far right -> align with right edge
			} else if ( overRight > 0 ) {
				position.left -= overRight;
			// adjust based on position and margin
			} else {
				position.left = Math.max( position.left - collisionPosLeft, position.left );
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
				outerHeight = data.within.height,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = withinOffset - collisionPosTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
				newOverBottom;

			// element is taller than within
			if ( data.collisionHeight > outerHeight ) {
				// element is initially over the top of within
				if ( overTop > 0 && overBottom <= 0 ) {
					newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
					position.top += overTop - newOverBottom;
				// element is initially over bottom of within
				} else if ( overBottom > 0 && overTop <= 0 ) {
					position.top = withinOffset;
				// element is initially over both top and bottom of within
				} else {
					if ( overTop > overBottom ) {
						position.top = withinOffset + outerHeight - data.collisionHeight;
					} else {
						position.top = withinOffset;
					}
				}
			// too far up -> align with top
			} else if ( overTop > 0 ) {
				position.top += overTop;
			// too far down -> align with bottom edge
			} else if ( overBottom > 0 ) {
				position.top -= overBottom;
			// adjust based on position and margin
			} else {
				position.top = Math.max( position.top - collisionPosTop, position.top );
			}
		}
	},
	flip: {
		left: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.left + within.scrollLeft,
				outerWidth = within.width,
				offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
				overLeft = collisionPosLeft - offsetLeft,
				overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
				myOffset = data.my[ 0 ] === "left" ?
					-data.elemWidth :
					data.my[ 0 ] === "right" ?
						data.elemWidth :
						0,
				atOffset = data.at[ 0 ] === "left" ?
					data.targetWidth :
					data.at[ 0 ] === "right" ?
						-data.targetWidth :
						0,
				offset = -2 * data.offset[ 0 ],
				newOverRight,
				newOverLeft;

			if ( overLeft < 0 ) {
				newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
				if ( newOverRight < 0 || newOverRight < Math.abs( overLeft ) ) {
					position.left += myOffset + atOffset + offset;
				}
			}
			else if ( overRight > 0 ) {
				newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
				if ( newOverLeft > 0 || Math.abs( newOverLeft ) < overRight ) {
					position.left += myOffset + atOffset + offset;
				}
			}
		},
		top: function( position, data ) {
			var within = data.within,
				withinOffset = within.offset.top + within.scrollTop,
				outerHeight = within.height,
				offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
				collisionPosTop = position.top - data.collisionPosition.marginTop,
				overTop = collisionPosTop - offsetTop,
				overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
				top = data.my[ 1 ] === "top",
				myOffset = top ?
					-data.elemHeight :
					data.my[ 1 ] === "bottom" ?
						data.elemHeight :
						0,
				atOffset = data.at[ 1 ] === "top" ?
					data.targetHeight :
					data.at[ 1 ] === "bottom" ?
						-data.targetHeight :
						0,
				offset = -2 * data.offset[ 1 ],
				newOverTop,
				newOverBottom;
			if ( overTop < 0 ) {
				newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
				if ( ( position.top + myOffset + atOffset + offset) > overTop && ( newOverBottom < 0 || newOverBottom < Math.abs( overTop ) ) ) {
					position.top += myOffset + atOffset + offset;
				}
			}
			else if ( overBottom > 0 ) {
				newOverTop = position.top -  data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
				if ( ( position.top + myOffset + atOffset + offset) > overBottom && ( newOverTop > 0 || Math.abs( newOverTop ) < overBottom ) ) {
					position.top += myOffset + atOffset + offset;
				}
			}
		}
	},
	flipfit: {
		left: function() {
			_pos_jQueryUI110.flip.left.apply( this, arguments );
			_pos_jQueryUI110.fit.left.apply( this, arguments );
		},
		top: function() {
			_pos_jQueryUI110.flip.top.apply( this, arguments );
			_pos_jQueryUI110.fit.top.apply( this, arguments );
		}
	}
};

jQuery.ui.position._sapUiCommonsMenuFlip = {
	left: function(position, data){
		
		if(jQuery.ui.position.flipfit){ //jQuery UI 1.9 ff.
			jQuery.ui.position.flipfit.left.apply(this, arguments);
			return;
		}
		
		//jQuery UI 1.8
		data = _migrateDataTojQueryUI110(data);
		_pos_jQueryUI110.flipfit.left.apply(this, arguments);
	},
	top: function(position, data){
		
		if(jQuery.ui.position.flipfit){ //jQuery UI 1.9 ff.
			jQuery.ui.position.flipfit.top.apply(this, arguments);
			return;
		}
		
		//jQuery UI 1.8
		data = _migrateDataTojQueryUI110(data);
		_pos_jQueryUI110.flipfit.top.apply(this, arguments);
	}
};

//******************** jQuery UI 1.10.3 End **************************


})(window);