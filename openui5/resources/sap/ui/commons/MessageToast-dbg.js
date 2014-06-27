/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.MessageToast.
jQuery.sap.declare("sap.ui.commons.MessageToast");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new MessageToast.
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
 * <li>{@link #getAnchorId anchorId} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.MessageToast#event:next next} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Responsible for displaying the new incoming messages, one at the time, on top of the MessageBar.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @deprecated Since version 1.4.0. 
 * A new messaging concept will be created in future. Therefore this control might be removed in one of the next versions.
 * @name sap.ui.commons.MessageToast
 */
sap.ui.core.Control.extend("sap.ui.commons.MessageToast", { metadata : {

	// ---- object ----
	deprecated : true,
	publicMethods : [
		// methods
		"toast", "isIdle"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"anchorId" : {type : "string", group : "Misc", defaultValue : null}
	},
	events : {
		"next" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.MessageToast with name <code>sClassName</code> 
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
 * @name sap.ui.commons.MessageToast.extend
 * @function
 */

sap.ui.commons.MessageToast.M_EVENTS = {'next':'next'};


/**
 * Getter for property <code>anchorId</code>.
 * Id of the anchor on top of which the MessageToast is to render.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>anchorId</code>
 * @public
 * @name sap.ui.commons.MessageToast#getAnchorId
 * @function
 */

/**
 * Setter for property <code>anchorId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAnchorId  new value for property <code>anchorId</code>
 * @return {sap.ui.commons.MessageToast} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MessageToast#setAnchorId
 * @function
 */


/**
 * Fired once the "toast()" method is over, so that the MessageBar can toast() another message if needed. 
 *
 * @name sap.ui.commons.MessageToast#next
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'next' event of this <code>sap.ui.commons.MessageToast</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.MessageToast</code>.<br/> itself. 
 *  
 * Fired once the "toast()" method is over, so that the MessageBar can toast() another message if needed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.MessageToast</code>.<br/> itself.
 *
 * @return {sap.ui.commons.MessageToast} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MessageToast#attachNext
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'next' event of this <code>sap.ui.commons.MessageToast</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.MessageToast} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MessageToast#detachNext
 * @function
 */

/**
 * Fire event next to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.MessageToast} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.MessageToast#fireNext
 * @function
 */


/**
 * Triggers the toasting of a message, on top of the MessageBar.
 * If no message is supplied, displayes the "Multiple new messages..." message.
 *
 * @name sap.ui.commons.MessageToast.prototype.toast
 * @function
 * @param {sap.ui.commons.Message} 
 *         oMessage
 *         The Message to be toasted.
 * @param {string} 
 *         sAnchorId
 *         DOM ID of the anchor against which the Toast Arrow should align for a given Toast.

 * @type void
 * @public
 */


/**
 * Returns TRUE if no message is being toasted.
 *
 * @name sap.ui.commons.MessageToast.prototype.isIdle
 * @function

 * @type boolean
 * @public
 */


// Start of sap\ui\commons\MessageToast.js
jQuery.sap.require("sap.ui.thirdparty.jqueryui.jquery-ui-core");

sap.ui.commons.MessageToast.prototype.init = function(){
	// Local variables...
	this.oMessage    = null;
	this.sAnchorId   = "";
	this.bIdle       = true;
	this.sLeftOffset = "";

	// Popup(oContent, bModal, bShadow, bAutoClose) container initialization:
	// - oModal: "true/false" : For blocking the background window.
	// - bShadow: "false" as the MessageBar Popup is displayed without shadow in all themes.
	//            Shadow is added but not at the Popup level because in contains a down-arrow.
	//            Therefore the shadow is added to an inner container, excluding this down-arrow.
	this.oPopup   = new sap.ui.core.Popup(this, false, false, false);
	// Asking the Popup to fire our "next" event once a "toast()" is over.
	this.oPopup.attachClosed(this.next, this);
};

/**
 * Destroys this Control instance, called by Element#destroy()
 * @private
 */
sap.ui.commons.MessageToast.prototype.exit = function() {
  if (!this.bIdle) {
	this.close();
  }

	this.oPopup.destroy();
	this.oPopup = null;
};

/**
 * This utility makes sure that the Toast is pointing down towards
 * the right MessageBar Icon.
 * @private
 */
sap.ui.commons.MessageToast.prototype.onAfterRendering = function(){
  // The MessageToast and the MessageBar are right-aligned.
  // The MessageToast has a minWidth matching that of the MessageBar.
  // (That allows us to position the down-arrow without moving the MessageToast.)
  // The MessageToast Arrow aligns towards the proper MessageBar Icon.

  var rtl = sap.ui.getCore().getConfiguration().getRTL();

  // 1) Calculating the distance between the Icon and the right side of its MessageBar container:
  var jIcon = jQuery.sap.byId(this.sAnchorId); // Anchor against which our Arrow has to align
//if (!jIcon) return;
  var iconPosition  = jIcon.position();
  var jBar = jQuery.sap.byId(this.getAnchorId()); // Anchor against which our Toast has to align
//if (!jBar) return;
  var barWidth = jBar.outerWidth();
  if (iconPosition) {
	  var targetRightOffset = rtl ? iconPosition.left + jIcon.outerWidth()
								  : barWidth - iconPosition.left;


	  // 2) Calculating the default distance between the Arrow and the right side of our Toast:
		var jToast = this.$();  // = jQuery.sap.byId(this.getId());
	  var toastWidth = jToast.width();
	  var defaultArrowRightOffset = Math.max(toastWidth,barWidth);

	  // 3) Taking care of too-small a Toast:
	  var delta = barWidth - toastWidth;
		if (delta > 0) {
		// Making the Toast as wide as the Bar:
		jToast.css('minWidth', barWidth);
		}

	  // 4) Now, we need to move our Arrow right, by what is missing:
	  var moveRightOffset = rtl ? (defaultArrowRightOffset - targetRightOffset + 2) + "px"
								: (defaultArrowRightOffset - targetRightOffset - 2) + "px";
		if (defaultArrowRightOffset >= targetRightOffset) {
		var jArrow = jQuery.sap.byId(this.getId() + "Arrow");
		if (sap.ui.getCore().getConfiguration().getRTL()) {
			jArrow.css('marginRight', moveRightOffset); // Positive padding
		} else {
			jArrow.css('marginLeft', moveRightOffset); // Positive padding
		}
		// Our right-alignment can stay:
		this.sLeftOffset = "0";
		}
	}
};

// #############################################################################
// Internal Utilities
// #############################################################################
/**
 * Our popup-close callback function.
 * Registers the fact that a toast just completed, and fires our "next" event.
 * @private
 */
sap.ui.commons.MessageToast.prototype.next = function(){
	// Toast done (allows for smooth toasting):
  this.bIdle = true;
  this.fireNext()
}

/**
 * This utility opens the MessageToast Popup.
 * @private
 */;
sap.ui.commons.MessageToast.prototype.open = function(iDuration) {
	// For Multiple Messages, 1st we need to close the existing toast:
  if (!this.bIdle) {
	this.oPopup.close(0);
  }

	// Toast start (allows for no interruption):
  this.bIdle = false;

  var rtl = sap.ui.getCore().getConfiguration().getRTL();

	// Defining or fetching the Popup attributes:
  var popupSnapPoint  = rtl ? sap.ui.core.Popup.Dock.LeftBottom : sap.ui.core.Popup.Dock.RightBottom;
  var anchorSnapPoint = rtl ? sap.ui.core.Popup.Dock.LeftTop    : sap.ui.core.Popup.Dock.RightTop;
  var relativeAnchorPosition = this.sLeftOffset + " 5";
  var anchor = null;
  var anchorId = this.getAnchorId();
  if (anchorId) {
	anchor = jQuery.sap.domById(anchorId);
  }
  if (!anchor) {
	anchor = document.body;
  }
  // Invoking the MsgBar Popup open function(iDuration, my, at, of, offset):
  this.oPopup.open(iDuration, popupSnapPoint, anchorSnapPoint, anchor, relativeAnchorPosition);
};

/**
 * This utility closes the MessageToast Popup.
 * @private
 */
sap.ui.commons.MessageToast.prototype.close = function(iDuration) {
  // Invoking the Popup close = function(iDuration):
  this.oPopup.close(iDuration);
};

/**
 * This utility returns the class of the MessageToast container,
 * which changes according to the displayed message TYPE/PRIORITY
 * to allow for "semantic" rendering.  :-)
 * @private
 */
sap.ui.commons.MessageToast.prototype.getClasses = function() {
  // By default assuming the "Multiple new messages..." css:
  var css = "sapUiMsgToast";
  // Allow for specializing as per the message Type:
  if (this.oMessage && this.oMessage.getType()) {
	css += " sapUiMsgT" + this.oMessage.getType();
  }
  return css;
};

// #############################################################################
// Public APIs
// #############################################################################
/**
 * This public API receives the list of Messages to be displayed,
 * and re-render this Control if visible.
 * @public
 */
sap.ui.commons.MessageToast.prototype.toast = function(oMessage, sAnchorId) {
  // Storing the supplied data:
	this.oMessage = oMessage;
	this.sAnchorId = sAnchorId;
  // Render according to new message, and animate:
	sap.ui.getCore().getRenderManager().render(this, sap.ui.getCore().getStaticAreaRef(), true);
  this.open(750);
  this.close(2250); // <-- CAN BE COMMENTED OUT WHILE STYLING THE TOAST...

	return this;
};

/**
 * Returns the idle state of the control.
 * @public ???
 */
sap.ui.commons.MessageToast.prototype.isIdle = function() {
  return this.bIdle;
};