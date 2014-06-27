/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.MessageBar.
jQuery.sap.declare("sap.ui.commons.MessageBar");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new MessageBar.
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
 * <li>{@link #getAnchorID anchorID} : string (default: '')</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getMaxToasted maxToasted} : int (default: 3)</li>
 * <li>{@link #getMaxListed maxListed} : int (default: 7)</li>
 * <li>{@link #getAnchorSnapPoint anchorSnapPoint} : string (default: "begin top")</li></ul>
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
 * Creates an instance of a "MessageBar" Control, for displaying "Message"s.
 * There is no imposed limit on the number of "MessageBar"s that can be created, but using only 1 makes sense, specially if accessing it (via Ctl-m) becomes a necessity.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @deprecated Since version 1.4.0. 
 * A new messaging concept will be created in future. Therefore this control might be removed in one of the next versions.
 * @name sap.ui.commons.MessageBar
 */
sap.ui.core.Control.extend("sap.ui.commons.MessageBar", { metadata : {

	// ---- object ----
	deprecated : true,
	publicMethods : [
		// methods
		"addMessages", "deleteMessages", "deleteAllMessages"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"anchorID" : {type : "string", group : "Appearance", defaultValue : ''},
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"maxToasted" : {type : "int", group : "Misc", defaultValue : 3},
		"maxListed" : {type : "int", group : "Misc", defaultValue : 7},
		"anchorSnapPoint" : {type : "string", group : "Misc", defaultValue : "begin top"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.MessageBar with name <code>sClassName</code> 
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
 * @name sap.ui.commons.MessageBar.extend
 * @function
 */


/**
 * Getter for property <code>anchorID</code>.
 * Element ID upon which the 'message bar' is to be initially positioned.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>anchorID</code>
 * @public
 * @name sap.ui.commons.MessageBar#getAnchorID
 * @function
 */

/**
 * Setter for property <code>anchorID</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAnchorID  new value for property <code>anchorID</code>
 * @return {sap.ui.commons.MessageBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MessageBar#setAnchorID
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
 * @name sap.ui.commons.MessageBar#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.MessageBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MessageBar#setVisible
 * @function
 */


/**
 * Getter for property <code>maxToasted</code>.
 * Maximum number of simultaneous messages being toasting-up in a row. Value '0' means this dynamic part of the feature is switched off.
 *
 * Default value is <code>3</code>
 *
 * @return {int} the value of property <code>maxToasted</code>
 * @public
 * @name sap.ui.commons.MessageBar#getMaxToasted
 * @function
 */

/**
 * Setter for property <code>maxToasted</code>.
 *
 * Default value is <code>3</code> 
 *
 * @param {int} iMaxToasted  new value for property <code>maxToasted</code>
 * @return {sap.ui.commons.MessageBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MessageBar#setMaxToasted
 * @function
 */


/**
 * Getter for property <code>maxListed</code>.
 * Maximum number of messages being display in the List before a scrollbar appears. Value '0' means no limit.
 *
 * Default value is <code>7</code>
 *
 * @return {int} the value of property <code>maxListed</code>
 * @public
 * @name sap.ui.commons.MessageBar#getMaxListed
 * @function
 */

/**
 * Setter for property <code>maxListed</code>.
 *
 * Default value is <code>7</code> 
 *
 * @param {int} iMaxListed  new value for property <code>maxListed</code>
 * @return {sap.ui.commons.MessageBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MessageBar#setMaxListed
 * @function
 */


/**
 * Getter for property <code>anchorSnapPoint</code>.
 * Type: sap.ui.core.Popup.Dock
 * SnapPoint of MessageBar over anchorId.
 * Note: Use "begin" or "end" for RTL support.
 * Note: "center" is not indicated, as positioning is only set once, either via the css "left" or the "right" attribute. Therefore a MessageBar will only be extended in one direction, as Messages come in.
 *
 * Default value is <code>"begin top"</code>
 *
 * @return {string} the value of property <code>anchorSnapPoint</code>
 * @public
 * @name sap.ui.commons.MessageBar#getAnchorSnapPoint
 * @function
 */

/**
 * Setter for property <code>anchorSnapPoint</code>.
 *
 * Default value is <code>"begin top"</code> 
 *
 * @param {string} sAnchorSnapPoint  new value for property <code>anchorSnapPoint</code>
 * @return {sap.ui.commons.MessageBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MessageBar#setAnchorSnapPoint
 * @function
 */


/**
 * To add message(s).
 *
 * @name sap.ui.commons.MessageBar.prototype.addMessages
 * @function
 * @param {sap.ui.commons.Message[]} 
 *         aAMessages
 *         Array of messages.

 * @type void
 * @public
 */


/**
 * To deleted messages.
 *
 * @name sap.ui.commons.MessageBar.prototype.deleteMessages
 * @function
 * @param {string[]} 
 *         aIds
 *         Messages IDs to be deleted.

 * @type void
 * @public
 */


/**
 * To deleted all messages.
 *
 * @name sap.ui.commons.MessageBar.prototype.deleteAllMessages
 * @function

 * @type void
 * @public
 */


// Start of sap\ui\commons\MessageBar.js
jQuery.sap.require("sap.ui.core.Popup");

sap.ui.commons.MessageBar.prototype.init = function(){
	// Defining some private data...

	// Message queues, in priority order:
	this.aErrors    = []; // Error queue.
	this.aWarnings  = []; // Warning queue.
	this.aSuccesses = []; // Success queue.
	// Toasting queue:
	this.aToasts    = [];
	this.maxToastsReached = false; // Disables Toast queue.

	// Popup(oContent, bModal, bShadow, bAutoClose) container initialization:
	// - oModal: "true/false" : For blocking the background window.
	this.oPopup   = new sap.ui.core.Popup(this, false, true, false);

	// The different related Controls.
	this.oList    = null; // Created only if opened by user.
	// MessageBar does not come without Toasts:
	var id        = this.getId();
	this.oToast   = new sap.ui.commons.MessageToast(id+"__Toast", {anchorId:id+"__sums"});
	var that      = this; // For closure
	this.oToast.attachNext(function(){that.checkForToast();});

	// Drag&Drop data. Only evaluated if needed:
	this.snapPoint = null;
	this.oHomePosition = null;
	this.oDropPosition = null;
	this.bToggleListBackAfterDrag = null;
};

/**
 * Destroys this Control instance, called by Element#destroy()
 * @private
 */
sap.ui.commons.MessageBar.prototype.exit = function() {
	// If this happens during a Drag, forcing a Drop
	// in order to remove any bound handlers:
	this.onmouseup();

	// Closing and destroying everything:
	this.close();

	this.oPopup.destroy();
	this.oPopup = null;

	this.oToast.destroy();
	this.oToast = null;

	if (this.oList) {
		this.oList.destroy();
		this.oList = null;
	}
};

// **************************************************
// * Drag&Drop // Copied from Dialog and ColumnDnDManager...
// **************************************************
/**
* Overwrites the native D&D, not to see the native ghost.
* @param {sap.ui.core.BrowserEvent} oEvent The forwarded browser event
* @private
*/
sap.ui.commons.MessageBar.prototype.ondragstart = function(oEvent){
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Initializes drag and drop capabilities.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.MessageBar.prototype.onmousedown = function (oEvent) {
//jQuery.sap.log.debug("MESSAGEBAR: ONMOUSEDOWN");
	var oSource  = oEvent.target;
	var jSource = jQuery(oSource);

	// If cursor does not say move, then do not bother.
	if (jSource.css('cursor') != "move") {
		return;
	}

	this.sDragMode = "move";


  // MessageBar start position:
	this.oMsgBarDragStartPosition       = this.$().rect();
	this.oMsgBarDragStartPosition.right = Number(this.$().css('right').replace("px", ""));

	// Recording our home position, in order to return to it on demand:
	if (!this.oHomePosition) {
		this.oHomePosition = this.oMsgBarDragStartPosition;
	}

	// To evaluate the extend of the drag:
	this.mouseDragStartPositionX = oEvent.screenX;
	this.mouseDragStartPositionY = oEvent.screenY;

	// Activating our move handler:
	var jDocument = jQuery(window.document);
	jDocument.bind("mousemove", jQuery.proxy(this.handleMove, this));
	if(window.parent) {
		jQuery(window.parent.document).bind("mousemove", jQuery.proxy(this.handleMove, this), true);
	}

	// Fix for IE blue text selection while dragging:
	jDocument.bind("selectstart",jQuery.proxy(this.ondragstart,this), true);
};

/**
 * Handles the move event.
 * @param {DOMEvent} event The event raised by the browser.
 * @private
 */
sap.ui.commons.MessageBar.prototype.handleMove = function (event) {
//jQuery.sap.log.debug("MESSAGEBAR: HANDLEMOVE");
	if (!this.sDragMode) {
		return;
	}

  // First closing the MessageList, if visible.
  // That will allow the user to better see where he moves the MessageBar.
  // We will reopen it after the Drop.
  // This will also allow the List Popup to properly position itself (UP/DOWN).
  if (this.bToggleListBackAfterDrag==null && this.oList) {
	this.bToggleListBackAfterDrag = this.oList.getVisible();
	if (this.bToggleListBackAfterDrag) {
		this.toggleList();
	}
  }

  // Moving our Control by the extent of the mouse-drag:
	event = event || window.event;
	var iTop   = this.oMsgBarDragStartPosition.top   + event.screenY - this.mouseDragStartPositionY;
	var iLeft  = this.oMsgBarDragStartPosition.left  + event.screenX - this.mouseDragStartPositionX;
	var iRight = this.oMsgBarDragStartPosition.right - event.screenX + this.mouseDragStartPositionX;

  this.oPopup._$().css('top', iTop);
	// Is the Bar to be positioned and dragged from its right-hand side???
	if (this.snapPoint.indexOf("right") != -1) {
		this.oPopup._$().css('right', iRight);
	} else {
		this.oPopup._$().css('left', iLeft);
	}

	// Saving the drop position for the next MessageList "open" event:
	this.oDropPosition = {top: iTop, left: iLeft, right: iRight};

	event.cancelBubble = true;
	return false;
};

/**
 * Handle onmouseup event.
 * This does the cleanup after drag and move handling.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.MessageBar.prototype.onmouseup = function (oEvent) {
//jQuery.sap.log.debug("MESSAGEBAR: ONMOUSEUP");
	if (!this.sDragMode) {
		return;
	}

	// If we have indeed moved, then rendering our "back-home" icon:
  if (this.oDropPosition) {
	  this.addStyleClass("sapUiMsgBarMoved");
  }

  // Reopening the List if was open before the move:
  if (this.bToggleListBackAfterDrag) {
	this.toggleList();
  }
  this.bToggleListBackAfterDrag = null; // Re-initialized for the next D&D.

	// Removing our move handler:
	var jDocument = jQuery(window.document);
	jDocument.unbind("mousemove", jQuery.proxy(this.handleMove, this));
	if(window.parent) {
		jQuery(window.parent.document).unbind("mousemove", jQuery.proxy(this.handleMove, this));
	}
	jDocument.unbind("selectstart",jQuery.proxy(this.ondragstart,this));

	this.sDragMode = null;

	// Resume the toasting:
	this.checkForToast();
};

// **************************************************
// * Clicking
// **************************************************
/**
 * Handle onclick events.
 * The 2 click-able areas are:
 *  1) The front Open/Close list button.
 *  2) The back GoHome button.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.MessageBar.prototype.onclick = function (oEvent) {
	var oSource = oEvent.target;
	var jSource = jQuery(oSource);

	// If cursor does not say click, then do not bother.
	if (jSource.css('cursor') != "pointer") {
		return;
	}

  // Now, checking were the click came from:
  if (jSource.hasClass("sapUiMsgBarToggle")) {
		this.toggleList();
  } else if (jSource.hasClass("sapUiMsgBarHome")) {
		this.backHome();
  } else {
	jQuery.sap.log.debug("Warning: MessageBar unsupported click on " + jSource.attr('className'));
  }
}

// #############################################################################
// Internal Utilities
// #############################################################################
/**
 * This utility checks what action the Toaster should execute next.
 * @private
 */;
sap.ui.commons.MessageBar.prototype.checkForToast = function() {
  // No more toast if Multiple Toasts has already been displayed:
  if (this.maxToastsReached) {
	return;
  }

  // Making sure there is some queued messages:
  if (this.aToasts==null || this.aToasts.length == 0) {
	return;
  }

  // Making sure the feature is active:
  var maxToasted = this.getMaxToasted();
  if (maxToasted == 0) {
	return;
  }

  // Do not toast during Drag&Drop. Do not distract the user!
  if (this.sDragMode) {
	return;
  }

  var nextToast = null;
  var anchorId = "";
  if (this.aToasts.length > this.getMaxToasted()) {
	// Having a null "nextToast" would indicate a "Multiple new messages..."
	// With "Multiple new messages...", no need to toast messages anymore,
	// so emptying the toasting queue:
	  this.aToasts = [];
	  this.maxToastsReached = true;
	// Do not wait for the previous toast to be done.
	// The Toast has to point towards our left open/close Arrow:
	anchorId = this.getId() + "__arrowImg";
  } else {
	// Do not put a new toast in if there is already one in:
	  if (!this.oToast.isIdle()) {
		return;
	  }
	// Retrieving the oldest queued message:
	nextToast = this.aToasts.splice(0, 1)[0];
	// The Toast has to point towards the icon of the same priority, e.g. "id_ErrorImg":
	anchorId = this.getId() + "__" + nextToast.getType() + "Img";
  }

  // Triggering a Toast:
  this.oToast.toast(nextToast, anchorId);
};

/**
 * This utility adds Toasts to the Toast Array, if not already
 * included within this Array.
 * Order is chronological, not by priority.
 * @private
 */
sap.ui.commons.MessageBar.prototype.addToasts = function(aMessages) {
  // Looping through the supplied messages:
	for (var i=0, len=aMessages.length; i<len; i++) {
	  var newMessage = aMessages[i];
	  var alreadyQueued = false;
	  // Making sure message is not already queued for Toast:
	  for (var j=this.aToasts.length; j>=0; j--) {
		if (newMessage == this.aToasts[j]) {
		  alreadyQueued = true;
		  break;
		}
	  }
	  // Adding the message to the Toast queue:
	  if (!alreadyQueued) {
		this.aToasts.push(newMessage);
	  }
  } // end supplied messages for-loop
};

/**
 * This utility removes a Toast from the Array of messages still
 * to be toasted.
 * @private
 */
sap.ui.commons.MessageBar.prototype.deleteToast = function(sId) {
  if (!this.aToasts) {
	return;
  }

  // Checking if within the Toast queue:
	for (var j=0, len=this.aToasts.length; j<len; j++) {
		if (this.aToasts[j].getId() == sId) {
			this.aToasts.splice(j, 1);
			return;
		}
	}
};

/**
 * This utility removes one message, given its ID, from the possible
 * message queues (Error, Warning, Success...).
 * Messages always have an ID, since created via the "Message" Control.
 * @private
 */
sap.ui.commons.MessageBar.prototype.deleteOneMessage = function(sId) {
  if (!sId) {
	return;
  }

  // Checking if within the Error queue:
	for (var j=0, len=this.aErrors.length; j<len; j++) {
		if (this.aErrors[j].getId() == sId) {
		  this.aErrors[j].closeDetails();
			this.aErrors.splice(j, 1);
			return;
		}
	}

  // Checking if within the Warning queue:
	for (var j=0, len=this.aWarnings.length; j<len; j++) {
		if (this.aWarnings[j].getId() == sId) {
		  this.aWarnings[j].closeDetails();
			this.aWarnings.splice(j, 1);
			return;
		}
	}

  // Checking if within the Success queue:
	for (var j=0, len=this.aSuccesses.length; j<len; j++) {
		if (this.aSuccesses[j].getId() == sId) {
		  this.aSuccesses[j].closeDetails();
			this.aSuccesses.splice(j, 1);
			return;
		}
	}
};

/**
 * This utility converts "Begin"/"End" into "Right"/"Left" coordinates,
 * for RTL support.
 * @private
 */
sap.ui.commons.MessageBar.prototype.getSnapPoint = function() {
  if (!this.snapPoint) {
	  this.snapPoint = this.getAnchorSnapPoint();
	  if (sap.ui.getCore().getConfiguration().getRTL()) {
		this.snapPoint = this.snapPoint.replace("begin", "right").replace("end", "left");
	  } else {
		this.snapPoint = this.snapPoint.replace("begin", "left").replace("end", "right");
	  }
  }
  return this.snapPoint;
};

/**
 * This utility opens the MessageBar Popup.
 * @private
 */
sap.ui.commons.MessageBar.prototype.open = function() {
	// Defining or fetching the Popup attributes:
  var animationDuration = 0;
  var snapPoint = this.getSnapPoint();

	// Opening the MessageBar:
  var anchor = null;
  var anchorId = this.getAnchorID();
  if (anchorId) {
	anchor = jQuery.sap.domById(anchorId);
  }
  if (!anchor) {
	anchor = document.body;
  }
  // Invoking the MsgBar Popup open function(iDuration, my, at, of, offset):
	this.oPopup.open(animationDuration, snapPoint, snapPoint, anchor, "0 0");

  // Repositioning as per the Drop position:
  if (this.oDropPosition) {
	  this.oPopup._$().css('top', this.oDropPosition.top);
		// Is the Bar to be positioned and dragged from its right-hand side???
		if (snapPoint.indexOf("right") != -1) {
			this.oPopup._$().css('right', this.oDropPosition.right);
		} else {
			this.oPopup._$().css('left', this.oDropPosition.left);
		}
  }

  // If closed with a list present, then we should still display it:
  if (this.hasStyleClass("sapUiMsgBarOpen")) {
	this.oList.setVisible(true);
  }
};

/**
 * This utility closes the MessageBar Popup.
 * @private
 */
sap.ui.commons.MessageBar.prototype.close = function() {
  // First closing the MessageList, if visible:
  if (this.oList && this.oList.getVisible()) {
	this.oList.setVisible(false);
  }

  // Invoking the MsgBar Popup close = function(iDuration):
  var animationDuration = 0;
	this.oPopup.close(animationDuration);

  // Re-initializing flag along with the turning-off of the MessageBar:
  this.maxToastsReached = false;
};

/**
 * This utility updates the messageBar counters, and visibility.
 * @private
 */
sap.ui.commons.MessageBar.prototype.updateCountersAndVisibility = function() {
  // If invisible, get out of here!
	if (!this.getProperty("visible")) {
		return;
	}

  // Convenience variable
	var id = this.getId();

  // Updating the Error Count and Visibility:
  var oCount = jQuery.sap.domById(id + "__ErrorCount");
  if (!oCount) {
	// The MessageBar has to be available on the DOM in order to update it!
	// This code is required as the MessageBar is first created.
	  this.open();
	oCount = jQuery.sap.domById(id + "__ErrorCount");
  }
  var count   = this.aErrors.length;
  var oldText = oCount.innerHTML;
  var newText = "(" + count + ")";
  var jIcon   = null;
  var jCount  = null;
  if (newText != oldText) {
	// Have to directly update the DOM element:
	oCount.innerHTML = newText;

	if (newText == "(0)") {
	  // Allowing empty queues not to be displayed:
	  jIcon  = jQuery.sap.byId(id + "__ErrorImg");
	  jCount = jQuery.sap.byId(id + "__ErrorCount");
	  jIcon.addClass("sapUiMsgBarZeroCount");
	  jCount.addClass("sapUiMsgBarZeroCount");
	} else if (oldText == "(0)") {
	  // Displaying the non-empty queue:
	  jIcon  = jQuery.sap.byId(id + "__ErrorImg");
	  jCount = jQuery.sap.byId(id + "__ErrorCount");
	  jIcon.removeClass("sapUiMsgBarZeroCount");
	  jCount.removeClass("sapUiMsgBarZeroCount");
	}
  }


  // Updating the Warning Count and Visibility:
  oCount  = jQuery.sap.domById(id + "__WarningCount");
  count   = this.aWarnings.length;
  oldText = oCount.innerHTML;
  newText = "(" + count + ")";
  jIcon   = null;
  jCount  = null;
  if (newText != oldText) {
	// Have to directly update the DOM element:
	oCount.innerHTML = newText;

	if (newText == "(0)") {
	  // Allowing empty queues not to be displayed:
	  jIcon  = jQuery.sap.byId(id + "__WarningImg");
	  jCount = jQuery.sap.byId(id + "__WarningCount");
	  jIcon.addClass("sapUiMsgBarZeroCount");
	  jCount.addClass("sapUiMsgBarZeroCount");
	} else if (oldText == "(0)") {
	  // Displaying the non-empty queue:
	  jIcon  = jQuery.sap.byId(id + "__WarningImg");
	  jCount = jQuery.sap.byId(id + "__WarningCount");
	  jIcon.removeClass("sapUiMsgBarZeroCount");
	  jCount.removeClass("sapUiMsgBarZeroCount");
	}
  }


  // Updating the Success Count and Visibility:
  oCount  = jQuery.sap.domById(id + "__SuccessCount");
  count   = this.aSuccesses.length;
  oldText = oCount.innerHTML;
  newText = "(" + count + ")";
  jIcon   = null;
  jCount  = null;
  if (newText != oldText) {
	// Have to directly update the DOM element:
	oCount.innerHTML = newText;

	if (newText == "(0)") {
	  // Allowing empty queues not to be displayed:
	  jIcon  = jQuery.sap.byId(id + "__SuccessImg");
	  jCount = jQuery.sap.byId(id + "__SuccessCount");
	  jIcon.addClass("sapUiMsgBarZeroCount");
	  jCount.addClass("sapUiMsgBarZeroCount");
	} else if (oldText == "(0)") {
	  // Displaying the non-empty queue:
	  jIcon  = jQuery.sap.byId(id + "__SuccessImg");
	  jCount = jQuery.sap.byId(id + "__SuccessCount");
	  jIcon.removeClass("sapUiMsgBarZeroCount");
	  jCount.removeClass("sapUiMsgBarZeroCount");
	}
  }


	// If the MessageBar is now empty, then it should become invisible:
	if (this.aErrors.length==0 &&
		this.aWarnings.length==0 &&
		this.aSuccesses.length==0) {
	  // Hiding the MessageBar:
	  this.close();
	  return;
	} else {
	  // Showing the MessageBar:
	  this.open();
	}

	// If the MessageList is already open, updating it:
	if (this.oList && this.oList.getVisible()) {
		this.oList.setMessages(this.aSuccesses.concat(this.aWarnings).concat(this.aErrors));
	}

  // Checking for the next Toaster action:
	this.checkForToast();
};

/**
 * This utility toggles the MessageList Popup.
 * This function is invoked by clicking the front MessageBar Arrow.
 * @private
 */
sap.ui.commons.MessageBar.prototype.toggleList = function() {
  // Creating the List, if not already done:
  if (!this.oList) {
	var listId = this.getId() + "__List";
	  this.oList = new sap.ui.commons.MessageList(listId, {anchorId:this.getId(), maxListed:this.getMaxListed()});
  }

  // Retrieving the List current Open/Close information:
  var visible  = this.oList.getVisible();

  // Toggling the List, and adapting our styling:
  if (!visible) {
	this.oList.setMessages(this.aSuccesses.concat(this.aWarnings).concat(this.aErrors));
	this.addStyleClass("sapUiMsgBarOpen");
  } else {
	this.removeStyleClass("sapUiMsgBarOpen");
  }
  this.oList.setVisible(!visible);
};

/**
 * This utility restores the initial position of the MessageBar.
 * @private
 */
sap.ui.commons.MessageBar.prototype.backHome = function() {
  // Instead of repositioning the List, we may as well just re-opening it once back home!
  // Just like when it is the user that is D&D the Bar!
  // This will also allow the List Popup to properly position itself (UP/DOWN).
//this.oPopup.setPosition(sap.ui.core.Popup.Dock.LeftTop, {left:this.oHomePosition.left + "px", top: this.oHomePosition.top + "px"});
  var jPopup = this.oPopup._$();
  if (this.oList && this.oList.getVisible()) {
	this.toggleList();
	var that = this;
		// Is the Bar to be positioned and dragged from its right-hand side???
		if (this.snapPoint.indexOf("right") != -1) {
			jPopup.animate({right:this.oHomePosition.right + "px", top:this.oHomePosition.top + "px"}, 200, function() {that.toggleList();});
		} else {
			jPopup.animate({left:this.oHomePosition.left + "px", top:this.oHomePosition.top + "px"}, 200, function() {that.toggleList();});
		}
  } else {
		// Is the Bar to be positioned and dragged from its right-hand side???
		if (this.snapPoint.indexOf("right") != -1) {
			jPopup.animate({right:this.oHomePosition.right + "px", top:this.oHomePosition.top + "px"}, 200);
		} else {
			jPopup.animate({left:this.oHomePosition.left + "px", top:this.oHomePosition.top + "px"}, 200);
		}
  }

  // MessageBar is back home:
  this.oDropPosition = null;
  // Hiding our "back-home" icon:
  this.removeStyleClass("sapUiMsgBarMoved");
};

// #############################################################################
// Public APIs
// #############################################################################
/**
 * This public API adds/updates a supplied list of messages.
 * The messageBar is to appear should at least one message exists.
 * @public
 */
sap.ui.commons.MessageBar.prototype.addMessages = function(aMessages) {
  if (!aMessages) {
	return;
  }

  // Looping through the supplied messages:
	for (var i=0, len=aMessages.length; i<len; i++) {
	// First have to removing each message from the message queues,
	// in case this is an update that we are doing!
	// This approach allows for messages to change priority,
	// and for "updated" messages to get re-ordered, i.e.
	// the most recent ones are displayed first (on a given priority
	// level).
	this.deleteOneMessage(aMessages[i].getId());

	// Now, inserting each message into its proper queue:
	  switch (aMessages[i].getType()){
		case sap.ui.commons.MessageType.Error:
		  // Adding the "new" Error message:
		this.aErrors.push(aMessages[i]);
		  break;

		case sap.ui.commons.MessageType.Warning:
		  // Adding the "new" Warning message:
		this.aWarnings.push(aMessages[i]);
		  break;

		case sap.ui.commons.MessageType.Success:
		  // Adding the "new" Success message:
		this.aSuccesses.push(aMessages[i]);
		  break;

		default:
		  jQuery.sap.log.debug("ERROR: MessageBar supplied messageType=" + aMessages[i].getType());
	  } // end switch
	} // end for

	// Adding the new messages to the toasting queue:
  this.addToasts(aMessages);

	// Updating the messageBar:
	this.updateCountersAndVisibility();

	return this;
};

/**
 * This public API deletes a supplied list of messages.
 * The messageBar is to disappear should no message remains.
 * @public
 */
sap.ui.commons.MessageBar.prototype.deleteMessages = function(aIds) {
  if (!aIds) {
	return;
  }

  // Removing each message from their message queues, and toast queue:
	for (var i=0, len=aIds.length; i<len; i++) {
	this.deleteOneMessage(aIds[i]);
	this.deleteToast(aIds[i]);
	} // end for

	// Updating the messageBar:
	this.updateCountersAndVisibility();

	return this;
};

/**
 * This public API deletes all recorded messages.
 * The messageBar is to disappear.
 * @public
 */
sap.ui.commons.MessageBar.prototype.deleteAllMessages = function() {
  // Closing the corresponding Details if any:
	for (var j=this.aErrors.length-1; j>=0; j--) {
		this.aErrors[j].closeDetails();
	}
	for (var j=this.aWarnings.length-1; j>=0; j--) {
		this.aWarnings[j].closeDetails();
	}
	for (var j=this.aSuccesses.length-1; j>=0; j--) {
		this.aSuccesses[j].closeDetails();
	}

	// Empty all error queues:
  this.aErrors    = [];
  this.aWarnings  = [];
  this.aSuccesses = [];
  // Empty the Toasting queue:
  this.aToasts    = [];

	// Updating the messageBar:
	this.updateCountersAndVisibility();

	return this;
};



// #############################################################################
// Overwriting auto-generated methods of MessageBar.API.js
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
 * The MessageBar.API.js "setVisible" function is enhanced in order to
 * toggle the "visibility:hidden;" attribute over the control.
 */
sap.ui.commons.MessageBar.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);

  if (bVisible) {
		// Updating and rendering the MessageBar:
		this.updateCountersAndVisibility();
  }
  else {
	// Just closing the MessageBar:
	  this.close();
  }

	return this;
};