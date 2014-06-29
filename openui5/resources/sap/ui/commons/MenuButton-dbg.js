/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.MenuButton.
jQuery.sap.declare("sap.ui.commons.MenuButton");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.Button");


/**
 * Constructor for a new MenuButton.
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
 * <li>{@link #getDockButton dockButton} : string</li>
 * <li>{@link #getDockMenu dockMenu} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMenu menu} <strong>(default aggregation)</strong> : sap.ui.commons.Menu</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.MenuButton#event:itemSelected itemSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.Button#constructor sap.ui.commons.Button}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Common button control that opens a menu when clicked by the user. The control provides an API for configuring the docking position
 * of the menu.
 * 
 * @extends sap.ui.commons.Button
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.MenuButton
 */
sap.ui.commons.Button.extend("sap.ui.commons.MenuButton", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"dockButton" : {type : "string", group : "Misc", defaultValue : null},
		"dockMenu" : {type : "string", group : "Misc", defaultValue : null}
	},
	defaultAggregation : "menu",
	aggregations : {
    	"menu" : {type : "sap.ui.commons.Menu", multiple : false}
	},
	events : {
		"itemSelected" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.MenuButton with name <code>sClassName</code> 
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
 * @name sap.ui.commons.MenuButton.extend
 * @function
 */

sap.ui.commons.MenuButton.M_EVENTS = {'itemSelected':'itemSelected'};


/**
 * Getter for property <code>dockButton</code>.
 * The position / edge (see sap.ui.core.Popup.Dock) of the button where the menu is docked. Default is 'begin bottom'.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>dockButton</code>
 * @public
 * @name sap.ui.commons.MenuButton#getDockButton
 * @function
 */

/**
 * Setter for property <code>dockButton</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDockButton  new value for property <code>dockButton</code>
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuButton#setDockButton
 * @function
 */


/**
 * Getter for property <code>dockMenu</code>.
 * The position / edge (see sap.ui.core.Popup.Dock) of the menu which is docked to the button. Default is 'begin top'.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>dockMenu</code>
 * @public
 * @name sap.ui.commons.MenuButton#getDockMenu
 * @function
 */

/**
 * Setter for property <code>dockMenu</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDockMenu  new value for property <code>dockMenu</code>
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuButton#setDockMenu
 * @function
 */


/**
 * Getter for aggregation <code>menu</code>.<br/>
 * Menu that shall be opened when the button is clicked
 * 
 * <strong>Note</strong>: this is the default aggregation for MenuButton.
 * @return {sap.ui.commons.Menu}
 * @public
 * @name sap.ui.commons.MenuButton#getMenu
 * @function
 */


/**
 * Setter for the aggregated <code>menu</code>.
 * @param {sap.ui.commons.Menu} oMenu
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuButton#setMenu
 * @function
 */
	

/**
 * Destroys the menu in the aggregation 
 * named <code>menu</code>.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuButton#destroyMenu
 * @function
 */


/**
 * Event that is fired when a menu item is selected by the user 
 *
 * @name sap.ui.commons.MenuButton#itemSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.itemId The ID of the selected item
 * @param {sap.ui.commons.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'itemSelected' event of this <code>sap.ui.commons.MenuButton</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.MenuButton</code>.<br/> itself. 
 *  
 * Event that is fired when a menu item is selected by the user 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.MenuButton</code>.<br/> itself.
 *
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuButton#attachItemSelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'itemSelected' event of this <code>sap.ui.commons.MenuButton</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuButton#detachItemSelected
 * @function
 */

/**
 * Fire event itemSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'itemId' of type <code>string</code> The ID of the selected item</li>
 * <li>'item' of type <code>sap.ui.commons.MenuItemBase</code> The selected item</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.MenuButton#fireItemSelected
 * @function
 */


// Start of sap\ui\commons\MenuButton.js
jQuery.sap.require("sap.ui.commons.Menu");

(function() {
	
sap.ui.commons.MenuButton.prototype.init = function() {
	this.addStyleClass("sapUiMenuButton");
	this.bWithKeyboard = false;
};

/**
 * Function is called when button is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuButton.prototype.onclick = function(oEvent) {
	if(this.getEnabled() && !this._bSkipOpen){
		var oTooltip = this.getTooltip();
		if(oTooltip && oTooltip instanceof sap.ui.core.TooltipBase){
			oTooltip._closeOrPreventOpen(); //CSN 1762131 2013
		}
		var sDockButton = this.getDockButton() ? this.getDockButton() : sap.ui.core.Popup.Dock.BeginBottom;
		var sDockMenu = this.getDockMenu() ? this.getDockMenu() : sap.ui.core.Popup.Dock.BeginTop;
		this.getMenu().open(this.bWithKeyboard, this, sDockMenu, sDockButton, this);
	}
	this.bWithKeyboard = false;
	this._bSkipOpen = false;
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Function is called when mouse key is clicked down.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuButton.prototype.onmousedown = function(oEvent) {
	this.handleMouseDown(oEvent, false);
	this._bSkipOpen = this.getMenu() && this.getMenu().bOpen;
};


/**
 * Function is called when mouse leaves the control.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuButton.prototype.onmouseout = function(oEvent) {
	if(sap.ui.commons.Button.prototype.onmouseout){
		sap.ui.commons.Button.prototype.onmouseout.apply(this, arguments);
	}
	if(this._bSkipOpen && jQuery.sap.checkMouseEnterOrLeave(oEvent, this.getDomRef())){
		this._bSkipOpen = false;
	}
};


/**
 * Function is called when enter key is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuButton.prototype.onsapenter = function(oEvent){
	//It is sufficient to set this flag here only. A click event to open the menu will follow.
	this.bWithKeyboard = true;
};

/**
 * Function is called when space key is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.MenuButton.prototype.onsapspace = function(oEvent){
	//It is sufficient to set this flag here only. A click event to open the menu will follow.
	this.bWithKeyboard = true;
};

/**
 * Function is called when down key is pressed with a modifier key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
//Requested by UX, see CSN 0120061532 0001379793 2011
sap.ui.commons.MenuButton.prototype.onsapdownmodifiers = function(oEvent){
	if(oEvent.altKey){
		this.bWithKeyboard = true;
		this.onclick(oEvent);
	}
};

sap.ui.commons.MenuButton.prototype.clone = function(sIdSuffix, aLocalIds) {
	//Deregister event listener before cloning
	updateMenuEventRegistration(this);
	var oClone = sap.ui.commons.Button.prototype.clone.apply(this, arguments);
	updateMenuEventRegistration(this, this.getMenu());
	return oClone;
};

/**
 * Setter for the aggregated <code>menu</code>.
 * @param oMenu {sap.ui.commons.Menu}
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuButton.prototype.setMenu = function(oMenu) {
	updateMenuEventRegistration(this, oMenu);
	this.setAggregation("menu", oMenu);
	return this;
};

/**
 * Destroys the menu in the aggregation
 * named <code>menu</code>.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuButton.prototype.destroyMenu = function() {
	updateMenuEventRegistration(this, null);
	this.destroyAggregation("menu");
	return this;
};

//********** Private **********

// Detaches the select event handler from the current menu and attaches it to the new menu
var updateMenuEventRegistration = function(oThis, oNewMenu){
	var oMenu = oThis.getMenu();
	if(oMenu) {
		oMenu.detachItemSelect(oThis._fItemSelectHandler);
	}
	oThis._fItemSelectHandler = jQuery.proxy(onItemSelected, oThis);
	if(oNewMenu) {
		oNewMenu.attachItemSelect(oThis._fItemSelectHandler);
	}
};

//Function is called when an item in the menu was selected.
var onItemSelected = function(oEvent){
	var oItem = oEvent.getParameter("item");
	this.fireItemSelected({itemId: oItem.getId(), item: oItem});
	this.firePress({itemId: oItem.getId(), item: oItem});
};

}());

// to overwrite JS doc for inherited press event

/**
 * Fired when an item from the menu was selected.
 *
 * @see sap.ui.commons.MenuButton#itemSelected
 *
 * @name sap.ui.commons.MenuButton#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 *
 * @param {string} oControlEvent.getParameters.itemId The id of the selected item
 * @param {sap.ui.commons.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 */

/**
 * Attach event-handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.commons.MenuButton</code>.<br/>
 *
 * Event is fired when an item from the menu was selected.
 *
 * @see sap.ui.commons.MenuButton#attachItemSelected
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or in a 'static way'.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, the global context (window) is used.
 *
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 */

/**
 * Detach event-handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.commons.MenuButton</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @see sap.ui.commons.MenuButton#detachItemSelected
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @public
 */

/**
 * Fire event press to attached listeners.
 *
 * @see sap.ui.commons.MenuButton#fireItemSelected
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.MenuButton} <code>this</code> to allow method chaining
 * @protected
 */