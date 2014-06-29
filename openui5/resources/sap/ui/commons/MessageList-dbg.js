/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.MessageList.
jQuery.sap.declare("sap.ui.commons.MessageList");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new MessageList.
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
 * <li>{@link #getVisible visible} : boolean (default: false)</li>
 * <li>{@link #getAnchorId anchorId} : string</li>
 * <li>{@link #getMaxListed maxListed} : string (default: '7')</li></ul>
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
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Instantiated by the "MessageBar" Control if the user ever requests to generate the corresponding "MessageList".
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @deprecated Since version 1.4.0. 
 * A new messaging concept will be created in future. Therefore this control might be removed in one of the next versions.
 * @name sap.ui.commons.MessageList
 */
sap.ui.core.Control.extend("sap.ui.commons.MessageList", { metadata : {

	// ---- object ----
	deprecated : true,
	publicMethods : [
		// methods
		"setMessages"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"visible" : {type : "boolean", group : "Behavior", defaultValue : false},
		"anchorId" : {type : "string", group : "Appearance", defaultValue : null},
		"maxListed" : {type : "string", group : "Misc", defaultValue : '7'}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.MessageList with name <code>sClassName</code> 
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
 * @name sap.ui.commons.MessageList.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * To open or close the Control.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.MessageList#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.MessageList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MessageList#setVisible
 * @function
 */


/**
 * Getter for property <code>anchorId</code>.
 * Id of the anchor under which the MessageList is to render.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>anchorId</code>
 * @public
 * @name sap.ui.commons.MessageList#getAnchorId
 * @function
 */

/**
 * Setter for property <code>anchorId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAnchorId  new value for property <code>anchorId</code>
 * @return {sap.ui.commons.MessageList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MessageList#setAnchorId
 * @function
 */


/**
 * Getter for property <code>maxListed</code>.
 * Maximum number of messages being display in the List before a scrollbar appears. Value '0' means no limit.
 *
 * Default value is <code>7</code>
 *
 * @return {string} the value of property <code>maxListed</code>
 * @public
 * @name sap.ui.commons.MessageList#getMaxListed
 * @function
 */

/**
 * Setter for property <code>maxListed</code>.
 *
 * Default value is <code>7</code> 
 *
 * @param {string} sMaxListed  new value for property <code>maxListed</code>
 * @return {sap.ui.commons.MessageList} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MessageList#setMaxListed
 * @function
 */


/**
 * Sets the message list to be displayed.
 *
 * @name sap.ui.commons.MessageList.prototype.setMessages
 * @function
 * @param {sap.ui.commons.Message[]} 
 *         aMessages
 *         Message list.

 * @type void
 * @public
 */


// Start of sap\ui\commons\MessageList.js
jQuery.sap.require("sap.ui.core.Popup");
///**
// * This file defines behavior for the control,
// */
sap.ui.commons.MessageList.prototype.init = function(){
	// Defining some private data:
	this.aMessages = [];
	this.iItemHeight = 0;

	// Popup(oContent, bModal, bShadow, bAutoClose) container initialization:
	// - bModal: "true/false" : For blocking the background window.
	this.oPopup   = new sap.ui.core.Popup(this, false, true, false);
};

/**
 * Destroys this Control instance, called by Element#destroy()
 * @private
 */
sap.ui.commons.MessageList.prototype.exit = function() {
  this.close();

	this.oPopup.destroy();
	this.oPopup = null;
};

/**
 * Re-initializes the measurements, so all sizes are recalculated after a theme switch.
 * @private
 */
sap.ui.commons.MessageList.prototype.onThemeChanged = function () {
	this.iItemHeight = 0;
};

/**
 * This utility checks to see if a scrollbar has to be rendered.
 */
sap.ui.commons.MessageList.prototype.onAfterRendering = function () {
	var oList = this.getDomRef();
	var jList = jQuery(oList);

  // A scrollbar is only required over 7 items:
  var maxVisibleItems = this.getMaxListed();
  var len = this.aMessages.length;
  if (len <= maxVisibleItems) {
	// By default, css height was set to "20px" to make sure List would fit, for Popup to open.
	jList.height("auto");
	return;
  }

	// Calculating 1 item height:
	if (this.iItemHeight == 0) {
		var oItem = oList.firstChild;
		var jItem = jQuery(oItem);
		this.iItemHeight = jItem.height();
	}

  oList.style.overflowY = "scroll";
  oList.style.overflowX = "hidden";
	var desiredHeight = (maxVisibleItems * this.iItemHeight) + "px";
	jList.height(desiredHeight);
};

// #############################################################################
// Internal Utilities
// #############################################################################
/**
 * This utility opens the MessageList Popup.
 */
sap.ui.commons.MessageList.prototype.open = function() {
  var rtl = sap.ui.getCore().getConfiguration().getRTL();

	// Defining or fetching the Popup attributes:
  var animationDuration = 200;
  var msgListSnapPoint = rtl ? sap.ui.core.Popup.Dock.RightTop    : sap.ui.core.Popup.Dock.LeftTop;
  var anchorSnapPoint  = rtl ? sap.ui.core.Popup.Dock.RightBottom : sap.ui.core.Popup.Dock.LeftBottom;
  var relativeAnchorPosition = "0 0";
  var anchor = null;
  var anchorId = this.getAnchorId();
  if (anchorId) {
	anchor = jQuery.sap.domById(anchorId);
  }
  if (!anchor) {
	anchor = document.body;
  }
  // Invoking the MsgBar Popup open function(iDuration, my, at, of, offset):
  this.oPopup.open(animationDuration, msgListSnapPoint, anchorSnapPoint, anchor, relativeAnchorPosition);
};

/**
 * This utility closes the MessageList Popup.
 */
sap.ui.commons.MessageList.prototype.close = function() {
  // Invoking the MsgBar Popup close = function(iDuration):
  var animationDuration = 200;
  this.oPopup.close(animationDuration);
};

/**
 * This public API receives the list of Messages to be displayed,
 * and re-render this Control if visible.
 */
sap.ui.commons.MessageList.prototype.setMessages = function(aMessages) {
  // Storing the Messages:
  this.aMessages = aMessages;

  // Re-rendering this MessageList if visible:
  if (this.getVisible()) {
	sap.ui.getCore().getRenderManager().render(this, sap.ui.getCore().getStaticAreaRef(), true);
  }

  return this;
};


// #############################################################################
// Overwriting auto-generated methods of MessageList.API.js
// #############################################################################

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code>
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.MessageBar} <code>this</code> to allow method chaining
 * @public
 *
 * The MessageBar.API.js "setVisible" function is overwritten in order to
 * invoke the open() and close() the MessageList Popup.
 */
sap.ui.commons.MessageList.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);

  // Opening or closing the MessageBar, as requested:
  if (bVisible) {
	// Re-rendering, in case content is new.
	sap.ui.getCore().getRenderManager().render(this, sap.ui.getCore().getStaticAreaRef(), true);
		this.open();
  } else {
	  this.close();
  }

	return this;
};