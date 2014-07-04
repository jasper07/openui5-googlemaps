/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.Notifier.
jQuery.sap.declare("sap.ui.ux3.Notifier");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new Notifier.
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
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getTitle title} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMessages messages} : sap.ui.core.Message[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.Notifier#event:messageSelected messageSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This element can be docked to a notification bar to show notification items
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.Notifier
 */
sap.ui.core.Element.extend("sap.ui.ux3.Notifier", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"hasItems"
	],

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"title" : {type : "string", group : "Misc", defaultValue : null}
	},
	aggregations : {
    	"messages" : {type : "sap.ui.core.Message", multiple : true, singularName : "message"}, 
    	"views" : {type : "sap.ui.core.Control", multiple : true, singularName : "view", visibility : "hidden"}
	},
	events : {
		"messageSelected" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.Notifier with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.Notifier.extend
 * @function
 */

sap.ui.ux3.Notifier.M_EVENTS = {'messageSelected':'messageSelected'};


/**
 * Getter for property <code>icon</code>.
 * Icon of the control that should be displayed within the corresponding bar
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.ux3.Notifier#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.Notifier} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Notifier#setIcon
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Defines the title that should be displayed within the opening popup
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ui.ux3.Notifier#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.Notifier} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Notifier#setTitle
 * @function
 */


/**
 * Getter for aggregation <code>messages</code>.<br/>
 * Messages of this notifier.
 * 
 * @return {sap.ui.core.Message[]}
 * @public
 * @name sap.ui.ux3.Notifier#getMessages
 * @function
 */


/**
 * Inserts a message into the aggregation named <code>messages</code>.
 *
 * @param {sap.ui.core.Message}
 *          oMessage the message to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the message should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the message is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the message is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Notifier} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Notifier#insertMessage
 * @function
 */

/**
 * Adds some message <code>oMessage</code> 
 * to the aggregation named <code>messages</code>.
 *
 * @param {sap.ui.core.Message}
 *            oMessage the message to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Notifier} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Notifier#addMessage
 * @function
 */

/**
 * Removes an message from the aggregation named <code>messages</code>.
 *
 * @param {int | string | sap.ui.core.Message} vMessage the message to remove or its index or id
 * @return {sap.ui.core.Message} the removed message or null
 * @public
 * @name sap.ui.ux3.Notifier#removeMessage
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>messages</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Message[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.Notifier#removeAllMessages
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Message</code> in the aggregation named <code>messages</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Message}
 *            oMessage the message whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.Notifier#indexOfMessage
 * @function
 */
	

/**
 * Destroys all the messages in the aggregation 
 * named <code>messages</code>.
 * @return {sap.ui.ux3.Notifier} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Notifier#destroyMessages
 * @function
 */


/**
 * Event is fired when a message of the notifiers was selected. 
 *
 * @name sap.ui.ux3.Notifier#messageSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Message} oControlEvent.getParameters.message The message that was selected
 * @param {sap.ui.ux3.Notifier} oControlEvent.getParameters.notifier The notifier that contains the selected message
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'messageSelected' event of this <code>sap.ui.ux3.Notifier</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Notifier</code>.<br/> itself. 
 *  
 * Event is fired when a message of the notifiers was selected. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Notifier</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.Notifier} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Notifier#attachMessageSelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'messageSelected' event of this <code>sap.ui.ux3.Notifier</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Notifier} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Notifier#detachMessageSelected
 * @function
 */

/**
 * Fire event messageSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'message' of type <code>sap.ui.core.Message</code> The message that was selected</li>
 * <li>'notifier' of type <code>sap.ui.ux3.Notifier</code> The notifier that contains the selected message</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Notifier} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.Notifier#fireMessageSelected
 * @function
 */


/**
 * This method checks if the notifier has any items.
 *
 * @name sap.ui.ux3.Notifier.prototype.hasItems
 * @function

 * @type boolean
 * @public
 */


// Start of sap\ui\ux3\Notifier.js
jQuery.sap.require("sap.ui.commons.Callout");

/**
 * This file defines behavior for the control,
 */

(function() {
	var fBeforeOpen = function() {
		this.fireEvent("_childControlCalling", {
			type : "openCallout",
			callout : this._oCallout,
			notifier : this
		});
	};

	/**
	 * This is to ensure that all content is destroyed when the Callout is
	 * closed. Otherwise the content is destroyed when the Callout should be
	 * opened again. But who knows if the user will really do this :-)?
	 */
	var fCalloutClosed = function(oEvent) {
		if (oEvent.getSource()) {
			oEvent.getSource().destroyContent();
		}
	};

	sap.ui.ux3.Notifier.prototype.hasItems = function() {
		if (this.getMessages().length > 0) {
			return true;
		}
		return false;
	};

	sap.ui.ux3.Notifier.prototype.init = function() {

		/*
		 * Setting a parent isn't needed due to it will be set below when
		 * Callout is set as Tooltip
		 */
		this._oCallout = new sap.ui.commons.Callout(this.getId() + "-callout", {
			beforeOpen : jQuery.proxy(fBeforeOpen, this),
			open : function(oEvent) {
				// to prevent that the Callout moves if the window is scrolled
				this.$().css("position", "fixed");
			},
			close : jQuery.proxy(fCalloutClosed, this),
			collision : "none"
		});
		this._oCallout.addStyleClass("sapUiNotifierCallout");
		if (sap.ui.Device.browser.mobile) {
			// if used on a mobile device the tab-event is transfered into a
			// 'mouseover' to open the Callout. To simulate a real tab-event the
			// open delay of the callout has to be eleminated.
			this._oCallout.setOpenDelay(0);
		}

		/*
		 * Though it seems that these are properties -> they're not. There are
		 * only methods to do this so a method-call is needed.
		 */
		this._oCallout.setMyPosition("begin bottom");
		this._oCallout.setAtPosition("begin top");

		/*
		 * The method needs to be overwritten since the positioning of the
		 * callout's arrow does currently not work for transparent arrows. The
		 * transparent arrow is styled differently than defined within the
		 * callout and therefore the hard-coded position of the arrow has to be
		 * corrected
		 */
		this._oCallout.setTip = function() {
			sap.ui.commons.Callout.prototype.setTip.apply(this, arguments);

			/*
			 * Since the arrow is set with another CSS technique the position
			 * needs to be corrected as well
			 */
			var $arrow = this.$("arrow");
			$arrow.css("bottom", "-24px");

			/*
			 * Since the calculation of the callout's arrow works fine for RTL
			 * and must be corrected for LTR only a manipulation of the arrow's
			 * position is needed if LTR is active
			 */
			var bRtl = sap.ui.getCore().getConfiguration().getRTL();
			if (!bRtl) {
				$arrow.css("left", "6px");
			}
		};

		this.setTooltip(this._oCallout);
		this.setTooltip = function() {
			jQuery.sap.log.warning("Setting toolstips for notifiers deactivated");
		};

		this._proxyEnableMessageSelect = jQuery.proxy(fnEnableMessageSelect, this);
		this.attachEvent(sap.ui.base.EventProvider.M_EVENTS.EventHandlerChange, this._proxyEnableMessageSelect);
	};

	/**
	 * Checks if the 'messageSelected' event was attached to the Notifier. If so
	 * the corresponding event is fired and e.g. the NotificationBar can react
	 * on that.
	 */
	var fnEnableMessageSelect = function(oEvent) {
		var sEventId = oEvent.getParameter("EventId");

		if (sEventId === "messageSelected") {
			if (oEvent.getParameter("type") === "listenerAttached") {
				this._bEnableMessageSelect = true;
			} else if (oEvent.getParameter("type") === "listenerDetached") {
				this._bEnableMessageSelect = false;
			}

			this.fireEvent("_enableMessageSelect", {
				enabled : this._bEnableMessageSelect,
				notifier : this
			});
		}
	};

	sap.ui.ux3.Notifier.prototype.exit = function(oEvent) {
		this._oCallout = undefined;

		/*
		 * Instance is created when adding the Notifier as MessageNotifier to
		 * the NotificationBar
		 */
		if (this._oMessageView) {
			this._oMessageView.destroy();
			delete this._oMessageView;
		}

		this.detachEvent(sap.ui.base.EventProvider.M_EVENTS.EventHandlerChange, this._proxyEnableMessageSelect);
		delete this._proxyEnableMessageSelect;
	};

	sap.ui.ux3.Notifier.prototype.onclick = function(oEvent) {
		oEvent.preventDefault();

		this.$().trigger("mouseover");
	};

	var fnFireChildControlCalling = function(sType, oMessage, oThat) {
		var sLevel = oMessage ? oMessage.getLevel() : sap.ui.core.MessageType.None;

		oThat.fireEvent("_childControlCalling", {
			type : sType,
			notifier : oThat,
			level : sLevel,
			// these two values are needed if a message was removed
			message : oMessage,
			callout : oThat._oCallout
		});
	};

	sap.ui.ux3.Notifier.prototype.addMessage = function(oMessage) {
		this.addAggregation("messages", oMessage);
		fnFireChildControlCalling("added", oMessage, this);

		return this;
	};

	sap.ui.ux3.Notifier.prototype.insertMessage = function(oMessage, index) {
		this.insertAggregation("messages", oMessage, index);
		fnFireChildControlCalling("added", oMessage, this);

		return this;
	};

	sap.ui.ux3.Notifier.prototype.removeMessage = function(oMessage) {
		var oRemovedMessage = this.removeAggregation("messages", oMessage);
		if (oRemovedMessage) {
			fnFireChildControlCalling("removed", oRemovedMessage, this);
		}

		return oRemovedMessage;
	};

	sap.ui.ux3.Notifier.prototype.removeAllMessages = function() {
		var aRemovedMessages = this.removeAllAggregation("messages");
		if (aRemovedMessages.length > 0) {
			// only re-render if there were messages removed
			fnFireChildControlCalling("removed", null, this);
		}

		return aRemovedMessages;
	};
	sap.ui.ux3.Notifier.prototype.destroyMessages = function() {
		var iLength = this.getMessages().length;
		this.destroyAggregation("messages");

		if (iLength > 0) {
			// only re-render if there were messages removed
			fnFireChildControlCalling("removed", null, this);
		}

		return this;
	};
}());
