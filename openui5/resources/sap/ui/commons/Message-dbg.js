/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Message.
jQuery.sap.declare("sap.ui.commons.Message");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Message.
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
 * <li>{@link #getType type} : sap.ui.commons.MessageType</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getAssociatedElementId associatedElementId} : string</li>
 * <li>{@link #getDesign design} : string</li></ul>
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
 * Creates the "Message"s to be supplied to the "MessageBar" Control.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @deprecated Since version 1.4.0. 
 * A new messaging concept will be created in future. Therefore this control might be removed in one of the next versions.
 * @name sap.ui.commons.Message
 */
sap.ui.core.Control.extend("sap.ui.commons.Message", { metadata : {

	// ---- object ----
	deprecated : true,
	publicMethods : [
		// methods
		"bindDetails"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"type" : {type : "sap.ui.commons.MessageType", group : "Behavior", defaultValue : null},
		"text" : {type : "string", group : "Data", defaultValue : null},
		"associatedElementId" : {type : "string", group : "Data", defaultValue : null},
		"design" : {type : "string", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Message with name <code>sClassName</code> 
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
 * @name sap.ui.commons.Message.extend
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * "Success", or "Warning", or "Error" messages. (Mandatory)
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.commons.MessageType} the value of property <code>type</code>
 * @public
 * @name sap.ui.commons.Message#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.commons.MessageType} oType  new value for property <code>type</code>
 * @return {sap.ui.commons.Message} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Message#setType
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * Message short text. (Mandatory)
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.commons.Message#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.Message} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Message#setText
 * @function
 */


/**
 * Getter for property <code>associatedElementId</code>.
 * Associated UI element ID. (Optional)
 * For navigation to error field.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>associatedElementId</code>
 * @public
 * @name sap.ui.commons.Message#getAssociatedElementId
 * @function
 */

/**
 * Setter for property <code>associatedElementId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sAssociatedElementId  new value for property <code>associatedElementId</code>
 * @return {sap.ui.commons.Message} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Message#setAssociatedElementId
 * @function
 */


/**
 * Getter for property <code>design</code>.
 * Internal attribute, used to force the display of the "short" or the "long" text only.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>design</code>
 * @public
 * @name sap.ui.commons.Message#getDesign
 * @function
 */

/**
 * Setter for property <code>design</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sDesign  new value for property <code>design</code>
 * @return {sap.ui.commons.Message} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Message#setDesign
 * @function
 */


/**
 * Registers a callback function to be invoked if long text Details are to be made available. This callback function will be supplied the corresponding Message "id", and should return the HTML string to be displayed within the Message Details Dialog.
 * E.g.: myMessage.bindDetails(getDetails);
 * where
 * function getDetails(sId) {... return htmlString;}
 *
 * @name sap.ui.commons.Message.prototype.bindDetails
 * @function

 * @type string
 * @public
 */


// Start of sap\ui\commons\Message.js
jQuery.sap.require("sap.ui.commons.Dialog");

sap.ui.commons.Message.prototype.init = function(){
	// Defining some private data...
	this.isRTL = sap.ui.getCore().getConfiguration().getRTL();

	// The "Details" related Controls.
  this.fnCallBack    = null; // Supplied only if a longText is to be provided on demand.
	this.oLink         = null; // Created only if a longText exists. This is the link opening the Details Dialog.
	this.oContainer    = null; // Created only if a longText exists. This is the "Dialog" hosting the Details.
	this.oDetails      = null; // Created only if a longText exists. This is the Controller rendering the Details.
	this.oBtnOK        = null; // Created only if a longText exists. This is the OK button found within the Dialog.
};

/**
 * Destroys this Control instance, called by Element#destroy()
 * @private
 */
sap.ui.commons.Message.prototype.exit = function() {
	if (this.oLink) {
		this.oLink.destroy();
		this.oLink = null;
	}
	if (this.oDetails) {
		this.oDetails.destroy();
		this.oDetails = null;
	}
	if (this.oContainer) {
		this.oContainer.destroy();
		this.oContainer = null;
	}
	if (this.oBtnOK) {
		this.oBtnOK.destroy();
		this.oBtnOK = null;
	}
};

// #############################################################################
// Internal Utilities
// #############################################################################
/**
 * This utility is for closing the Message Details from its OK button.
 * @private
 */
sap.ui.commons.Message.closeDetails = function(oControlEvent) {
  oControlEvent.getSource().getParent().close();
};
/**
 * This utility closes THIS Message's Details.
 * @private
 */
sap.ui.commons.Message.prototype.closeDetails = function() {
  // If Details have been opened, can attempt to close them:
  if (this.oContainer) {
	this.oContainer.close();
  }
};

/**
 * This utility renders the Message Details.
 * Current Specifications are those of JPaaS:
 *    Supported by:               "Dialog"              "MessageBox"
 *  - Title:                       Yes                   Yes
 *  - Non-blocking:                Yes, configurable.    No, modal only
 *  - Accepts HTML string:         Yes, via oContent.    No, sMessage only
 *  - Bottom-Right resize handle:  Yes                   No
 *  - No icon:                     Yes                   Possible
 * @private
 */
sap.ui.commons.Message.prototype.openDetails = function() {
  if (!this.oContainer) {
	var rb          = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
	var OK          = rb.getText("MSGBAR_DETAILS_DIALOG_CLOSE");
	var title       = rb.getText("MSGBAR_DETAILS_DIALOG_TITLE");
	// Reading the HTML details as is, styles included:
	var	htmlDetails = this.fnCallBack(this.getId());
	this.oDetails   = new sap.ui.commons.Message({type: this.getType(), text: htmlDetails});
	this.oBtnOK     = new sap.ui.commons.Button({text: OK, press:sap.ui.commons.Message.closeDetails});
	this.oContainer = new sap.ui.commons.Dialog();
	this.oContainer.addContent(this.oDetails);
	this.oContainer.setTitle(title);
		this.oContainer.addButton(this.oBtnOK);
  //this.oContainer.setDefaultButton(this.oBtnOK); // Already the default since the only button...
  }
	// Other visible Dialogs around?
  var sContainerId = this.oContainer.getId();
  var iOthersMaxZIndex = 0;
  var oOtherOpenDialogs = jQuery('.sapUiDlg');
  for (var i=oOtherOpenDialogs.length-1; i>=0; i--) {
	if (jQuery(oOtherOpenDialogs[i]).css('visibility') != "visible") {
	  oOtherOpenDialogs.splice(i, 1);
	} else if (oOtherOpenDialogs[i].id == sContainerId) {
	  oOtherOpenDialogs.splice(i, 1);
	} else {
	  iOthersMaxZIndex = Math.max(iOthersMaxZIndex,jQuery(oOtherOpenDialogs[i]).css('zIndex'));
	}
  }

  // Taking note for later:
  var bWasOpen = this.oContainer.isOpen();
  // No matter what, we have to open the new Details, so:
  this.oContainer.open();

  // jQuery version of our OPEN Dialog Container:
	var jContainer = this.oContainer.$();

  // Starting a new Stack in the default Dialog's location:
  var jContainerRect = jContainer.rect(); // For Height and Width...
	if (oOtherOpenDialogs.length == 0) {
		// "offsets.right" & "offsets.left" should be identical as plain Dialogs are centered,
		// but in case there is a bug (like in Safari RTL):
		if (this.isRTL) {
		  // Will be using "left" invariably for RTL or LTR:
			jContainerRect.left = Number(jContainer.css('right').replace("px", ""));
		}
		this.setLastOffsets(jContainerRect);
		// Nothing else to do:
		return;
	}

  // Dialog limitation. Work-around:
  if (bWasOpen) {
		if (iOthersMaxZIndex > jContainer.css('zIndex')) {
			// zIndex not raised via previous re-open()...
			// Have to raise it ourselves.
		jContainer.css('zIndex',iOthersMaxZIndex+1);
		}
		// Nothing else to do:
	return;
  }

  //*************** Stacking process starts ***************
  // 1st rendering the new Dialog on top of the old one...
  var oNextOffsets = this.getNextOffsets();
	jContainer.css('top',  (oNextOffsets.top -sap.ui.commons.Message.TOP_INCR ) + "px");
  if (this.isRTL) {
		jContainer.css('right', (oNextOffsets.left-sap.ui.commons.Message.LEFT_INCR) + "px");
  } else {
	jContainer.css('left',  (oNextOffsets.left-sap.ui.commons.Message.LEFT_INCR) + "px");
  }

  // Figuring what should the next coordinates be:
  var jContainerRect = jContainer.rect(); // For Height and Width...
  var scrollTop   = jQuery(window).scrollTop();
  var scrollLeft  = jQuery(window).scrollLeft(); // Negative in RTL
  var scrollRight = -scrollLeft;
  // Checking if the new coordinates fit within the window:
  if ((jQuery(window).height()+scrollTop) < (oNextOffsets.top+jContainerRect.height)) {
	// ReStacking from the top:
	oNextOffsets.top = scrollTop;
	this.setLastOffsets(oNextOffsets);
  }
  if (this.isRTL) {
	  if ((jQuery(window).width()+scrollRight) < (oNextOffsets.left+jContainerRect.width)) {
		// ReStacking from the right:
		oNextOffsets.left = scrollRight;
		this.setLastOffsets(oNextOffsets);
	  }
		// Animating the Dialog to its new offset position:
		jContainer.animate({top:oNextOffsets.top+"px", right:oNextOffsets.left+"px"}, 200);
  } else {
	  if ((jQuery(window).width()+scrollLeft) < (oNextOffsets.left+jContainerRect.width)) {
		// ReStacking from the left:
		oNextOffsets.left = scrollLeft;
		this.setLastOffsets(oNextOffsets);
	  }
		// Animating the Dialog to its new offset position:
		jContainer.animate({top:oNextOffsets.top+"px", left:oNextOffsets.left+"px"}, 200);
  }

//MESSAGEBOX BACKUP: Issues: Only Modal, Doesn't accept HTML string, No Resize-Area.
//	var rb    = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
//  var ICON  = this.getType().toUpperCase();		// ERROR, WARNING, ...
//  var title = rb.getText("MSGTYPE_" + ICON);
//  var text  = this.getLongText();
//  sap.ui.commons.MessageBox.show(text, ICON, title);
};

sap.ui.commons.Message.TOP_INCR  = 20;
sap.ui.commons.Message.LEFT_INCR = 10;


// Begin of Dialog-Offsets-Stacking facilities
(function() {
	var oLastOffsets = null;
	/**
	 * @static
	 */
	sap.ui.commons.Message.setLastOffsets = function(oOffsets){
		oLastOffsets = oOffsets;
	};
	sap.ui.commons.Message.prototype.setLastOffsets = function(oOffsets){
		sap.ui.commons.Message.setLastOffsets(oOffsets);
	};
	sap.ui.commons.Message.getNextOffsets = function(){
	  oLastOffsets.top   += sap.ui.commons.Message.TOP_INCR;
	  oLastOffsets.left  += sap.ui.commons.Message.LEFT_INCR;
		return oLastOffsets;
	};
	sap.ui.commons.Message.prototype.getNextOffsets = function(){
		return sap.ui.commons.Message.getNextOffsets();
	};
}());
// End of Dialog-Offsets-Stacking facilities


// #############################################################################
// Public APIs
// #############################################################################
/**
 * This interface registers a CallBack function, to be called for rendering
 * the longText Details of a Message.
 * This function will be supplied the ID of the Message.
 * This function is expected to return the (simple) HTML string giving the
 * details belonging to this message ID.
 * @public
 */
sap.ui.commons.Message.prototype.bindDetails = function(fnCallBack) {
  this.fnCallBack = fnCallBack;
};