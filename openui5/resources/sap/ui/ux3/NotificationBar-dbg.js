/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.NotificationBar.
jQuery.sap.declare("sap.ui.ux3.NotificationBar");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new NotificationBar.
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
 * <li>{@link #getVisibleStatus visibleStatus} : sap.ui.ux3.NotificationBarStatus (default: sap.ui.ux3.NotificationBarStatus.Default)</li>
 * <li>{@link #getResizeEnabled resizeEnabled} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMessageNotifier messageNotifier} : sap.ui.core.Element</li>
 * <li>{@link #getNotifiers notifiers} : sap.ui.core.Element[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.NotificationBar#event:display display} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.NotificationBar#event:resize resize} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A NotificationBar is a "toolbar" that can be added to a page to show messages and notifications from the application.
 * Its position, height and width is inherited from the element that the notification bar is added to.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.7.0
 * @name sap.ui.ux3.NotificationBar
 */
sap.ui.core.Control.extend("sap.ui.ux3.NotificationBar", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"hasItems"
	],

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"visibleStatus" : {type : "sap.ui.ux3.NotificationBarStatus", group : "Misc", defaultValue : sap.ui.ux3.NotificationBarStatus.Default},
		"resizeEnabled" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
    	"messageNotifier" : {type : "sap.ui.core.Element", multiple : false}, 
    	"notifiers" : {type : "sap.ui.core.Element", multiple : true, singularName : "notifier"}
	},
	events : {
		"display" : {}, 
		"resize" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.NotificationBar with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.NotificationBar.extend
 * @function
 */

sap.ui.ux3.NotificationBar.M_EVENTS = {'display':'display','resize':'resize'};


/**
 * Getter for property <code>visibleStatus</code>.
 * This property displays the bar corresponding to given status
 *
 * Default value is <code>Default</code>
 *
 * @return {sap.ui.ux3.NotificationBarStatus} the value of property <code>visibleStatus</code>
 * @public
 * @name sap.ui.ux3.NotificationBar#getVisibleStatus
 * @function
 */

/**
 * Setter for property <code>visibleStatus</code>.
 *
 * Default value is <code>Default</code> 
 *
 * @param {sap.ui.ux3.NotificationBarStatus} oVisibleStatus  new value for property <code>visibleStatus</code>
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NotificationBar#setVisibleStatus
 * @function
 */


/**
 * Getter for property <code>resizeEnabled</code>.
 * This property enables the bar to be resized by the user.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>resizeEnabled</code>
 * @public
 * @name sap.ui.ux3.NotificationBar#getResizeEnabled
 * @function
 */

/**
 * Setter for property <code>resizeEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bResizeEnabled  new value for property <code>resizeEnabled</code>
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NotificationBar#setResizeEnabled
 * @function
 */


/**
 * Getter for aggregation <code>messageNotifier</code>.<br/>
 * Notifier that shows messages
 * 
 * @return {sap.ui.core.Element}
 * @public
 * @name sap.ui.ux3.NotificationBar#getMessageNotifier
 * @function
 */


/**
 * Setter for the aggregated <code>messageNotifier</code>.
 * @param {sap.ui.core.Element} oMessageNotifier
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NotificationBar#setMessageNotifier
 * @function
 */
	

/**
 * Destroys the messageNotifier in the aggregation 
 * named <code>messageNotifier</code>.
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NotificationBar#destroyMessageNotifier
 * @function
 */


/**
 * Getter for aggregation <code>notifiers</code>.<br/>
 * Notifiers that monitor something within the application and display the corresponding notifications.
 * 
 * @return {sap.ui.core.Element[]}
 * @public
 * @name sap.ui.ux3.NotificationBar#getNotifiers
 * @function
 */


/**
 * Inserts a notifier into the aggregation named <code>notifiers</code>.
 *
 * @param {sap.ui.core.Element}
 *          oNotifier the notifier to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the notifier should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the notifier is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the notifier is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NotificationBar#insertNotifier
 * @function
 */

/**
 * Adds some notifier <code>oNotifier</code> 
 * to the aggregation named <code>notifiers</code>.
 *
 * @param {sap.ui.core.Element}
 *            oNotifier the notifier to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NotificationBar#addNotifier
 * @function
 */

/**
 * Removes an notifier from the aggregation named <code>notifiers</code>.
 *
 * @param {int | string | sap.ui.core.Element} vNotifier the notifier to remove or its index or id
 * @return {sap.ui.core.Element} the removed notifier or null
 * @public
 * @name sap.ui.ux3.NotificationBar#removeNotifier
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>notifiers</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Element[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.NotificationBar#removeAllNotifiers
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Element</code> in the aggregation named <code>notifiers</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Element}
 *            oNotifier the notifier whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.NotificationBar#indexOfNotifier
 * @function
 */
	

/**
 * Destroys all the notifiers in the aggregation 
 * named <code>notifiers</code>.
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NotificationBar#destroyNotifiers
 * @function
 */


/**
 * Event is fired when the bar wants to be displayed depending on given flag. This allows the application to decide what to do. 
 *
 * @name sap.ui.ux3.NotificationBar#display
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.show Indicates if the bar wants to be shown or hidden
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'display' event of this <code>sap.ui.ux3.NotificationBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.NotificationBar</code>.<br/> itself. 
 *  
 * Event is fired when the bar wants to be displayed depending on given flag. This allows the application to decide what to do. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.NotificationBar</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NotificationBar#attachDisplay
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'display' event of this <code>sap.ui.ux3.NotificationBar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.NotificationBar#detachDisplay
 * @function
 */

/**
 * Fire event display to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'show' of type <code>boolean</code> Indicates if the bar wants to be shown or hidden</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.NotificationBar#fireDisplay
 * @function
 */


/**
 * This event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None). The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions firing this event. 
 *
 * @name sap.ui.ux3.NotificationBar#resize
 * @event
 * @since 1.12.2
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.ux3.NotificationBarStatus} oControlEvent.getParameters.status The corresponding status to which the bar was resized. The corresponding heights can be taken for the bar's CSS file.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'resize' event of this <code>sap.ui.ux3.NotificationBar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.NotificationBar</code>.<br/> itself. 
 *  
 * This event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None). The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions firing this event. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.NotificationBar</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.2
 * @name sap.ui.ux3.NotificationBar#attachResize
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'resize' event of this <code>sap.ui.ux3.NotificationBar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.2
 * @name sap.ui.ux3.NotificationBar#detachResize
 * @function
 */

/**
 * Fire event resize to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'status' of type <code>sap.ui.ux3.NotificationBarStatus</code> The corresponding status to which the bar was resized. The corresponding heights can be taken for the bar's CSS file.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.NotificationBar} <code>this</code> to allow method chaining
 * @protected
 * @since 1.12.2
 * @name sap.ui.ux3.NotificationBar#fireResize
 * @function
 */


/**
 * This method checks if the NotificationBar has any items (notifications or messages) to show and returns true if there are any items to show. So the application should decide if the bar should be displayed.
 *
 * @name sap.ui.ux3.NotificationBar.prototype.hasItems
 * @function

 * @type boolean
 * @public
 */


// Start of sap\ui\ux3\NotificationBar.js
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
jQuery.sap.require("sap.ui.core.theming.Parameters");

/**
 * This file defines behavior for the control
 */
sap.ui.core.Control.extend("sap.ui.ux3.NotificationBar.NotifierView", {
	renderMessages : function(oRm) {
		oRm.write("<div");
		oRm.writeAttribute("id", this.getId() + "-content");
		oRm.addClass("sapUiNotifierContent");
		oRm.writeClasses();
		oRm.write(">");

		/*
		 * By setting the counter before running through loop this ensures that
		 * the most recent added message will be displayed first within rendered
		 * Callout
		 */
		var aMessages = this.getMessages();
		var i = aMessages.length - 1;
		var bFirst = true;

		for (; i >= 0; i--) {
			// Since first and last message don't need a
			// separator ->
			// prevent it
			if (!bFirst || (i == 0 && aMessages.length > 1)) {
				// if not the first message is being processed
				// OR
				// if the last available message is being
				// processed but
				// only
				// if there are more than one messages in total

				oRm.write("<div");
				oRm.addClass("sapUiNotificationBarCltSep");
				oRm.writeClasses();
				oRm.write(">");

				oRm.write("</div>");
			} else {
				// After first message was processed start
				// inserting a
				// separator
				bFirst = false;
			}

			var oMessage = aMessages[i];
			if (oMessage._message && oMessage._message.getReadOnly()) {
				oMessage.addStyleClass("sapUiNotifierMessageReadOnly");
			}
			oRm.renderControl(oMessage);
		}

		oRm.write("</div>"); // sapUiNotifierContent
	},

	metadata : {
		properties : {
			"title" : "string",
			"visibleItems" : "int",
			"renderMode" : {
				type : "string",
				defaultValue : "callout"
			}
		},

		aggregations : {
			"messages" : "sap.ui.ux3.NotificationBar.MessageView"
		}
	},

	init : function() {
		this._oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
	},

	exit : function() {
		if (this._renderedControl) {
			delete this._renderedControl;
		}

		delete this._oResBundle;
	},

	getTitle : function() {
		var sTitle = this.getProperty("title");
		var iCount = this.getMessages().length;

		if (iCount > 0) {
			var sKey = "NOTIBAR_NOTIFIER_VIEW_TITLE";
			sTitle = this._oResBundle.getText(sKey, [ sTitle, iCount ]);
		}

		return sTitle;
	},

	renderer : function(oRm, oControl) {
		oRm.write("<div");
		oRm.addClass("sapUiNotifierContainer");
		oRm.writeControlData(oControl);
		oRm.writeClasses();
		oRm.write(">");

		/*
		 * Render title
		 */
		oRm.write("<div");
		oRm.writeAttribute("id", oControl.getId() + "-title");
		oRm.addClass("sapUiNotifierTitle");
		oRm.writeClasses();
		oRm.write(">");

		oRm.writeEscaped(oControl.getTitle());

		oRm.write("</div>"); // div sapUiNotifierTitle

		/*
		 * Render messages
		 */
		if (oControl.getMessages().length > 0) {
			oControl.renderMessages(oRm);
		}

		oRm.write("</div>"); // sapUiNotifierContainer
	},

	onAfterRendering : function() {
		/*
		 * After all items are rendered it is needed to get the Callout's
		 * height. Since a single message could contain no, little or much text.
		 * So the messages' heights may vary.
		 */
		var $viewContent = this.$("content");
		var $aChildren = $viewContent.children();

		var iTotalHeight = 0, iCount = 0;
		// Used to prevent unneeded method calls within loop
		var iVisibleItems = this.getVisibleItems();

		// i=1 since view's title should be skipped for
		// calculation
		for (var i = 1; i < $aChildren.length; i++) {
			var child = jQuery($aChildren[i]);

			if (child.hasClass("sapUiNotifierMessage")) {
				iCount++;
			}

			var height = child.outerHeight(true);
			iTotalHeight += height;

			if (iCount == iVisibleItems) {
				// I don't know why these 2 pixels are needed
				// additionally
				// but
				// it works :-)
				iTotalHeight += 2;
				$viewContent.css("max-height", iTotalHeight);
			}
		}
	}
});

/**
 * Internal control that renders a single message for the NotificationBar
 * corresponding to its needs
 */
sap.ui.core.Control.extend("sap.ui.ux3.NotificationBar.MessageView", {
	metadata : {
		properties : {
			"text" : "string",
			"timestamp" : "string",
			"icon" : "sap.ui.core.URI"
		}
	},

	renderer : function(oRm, oControl) {
		var sId = oControl.getId();

		oRm.write("<div");
		oRm.writeControlData(oControl);

		oRm.addClass("sapUiNotifierMessage");
		oRm.writeClasses();
		oRm.writeAttribute("tabindex", "0");
		oRm.write(">");

		if (oControl.getIcon()) {
			oRm.write("<div");
			oRm.writeAttribute("id", sId + "-icon");
			oRm.addClass("sapUiNotifierMessageIcon");
			oRm.writeClasses();
			oRm.write(">");

			oRm.write("<img");
			oRm.writeAttribute("src", oControl.getIcon());
			oRm.write("/>");

			oRm.write("</div>");
		}

		oRm.write("<div");
		oRm.writeAttribute("id", sId + "-text");
		oRm.addClass("sapUiNotifierMessageText");
		oRm.writeClasses();
		oRm.write(">");
		oRm.writeEscaped(oControl.getText());
		oRm.write("</div>"); // Text

		oRm.write("<div");
		oRm.writeAttribute("id", sId + "-timestamp");
		oRm.addClass("sapUiNotifierMessageTimestamp");
		oRm.writeClasses();
		oRm.write(">");
		oRm.writeEscaped(oControl.getTimestamp());
		oRm.write("</div>"); // Timestamp

		oRm.write("</div>"); // NotificationItem
	},

	onclick : function(oEvent) {
		// only fire selected event if the message can be selected at all
		if (!this._message.getReadOnly()) {
			var oNotifier = this._message.getParent();

			oNotifier.fireMessageSelected({
				message : this._message,
				notifier : oNotifier
			});
		}
	},

	onsapselect : function(oEvent) {
		this.onclick(oEvent);
	},

	exit : function(oEvent) {
		if (this._message) {
			delete this._message;
		}
	}
});

(function() {
	var fnChangeVisibility = function(that) {
		var bShouldBeVisible = that.hasItems();
		var sStatus = that.getVisibleStatus();

		if (bShouldBeVisible && sStatus === "None") {
			return true;
		} else if (!bShouldBeVisible && sStatus !== "None") {
			return true;
		} else if (!bShouldBeVisible && sStatus !== "Min") {
			return true;
		} else {
			return false;
		}

	};

	/**
	 * This is the eventListener of the NotificationBar. All triggered events
	 * from the bar's notifiers will be caught here.
	 * 
	 * @param {sap.ui.base.Event}
	 *            oEvent the event will all needed stuff. It can contain
	 *            'added', 'removed' or 'openCallout' as a parameter to identify
	 *            the event.
	 */
	var fnChildEventListener = function(oEvent) {
		var oCallout = oEvent.getParameter("callout");

		switch (oEvent.getParameter("type")) {
		case "added":
		case "removed":
			var oNotifier = oEvent.getParameter("notifier");

			if (this.getMessageNotifier() && this.getMessageNotifier().getId() === oNotifier.getId()) {
				// clone the message array to sort it
				var aSortMessages = oNotifier.getMessages().concat(new Array());
				if (aSortMessages.length > 0) {
					// sort ascending the messages via their level
					aSortMessages.sort(sap.ui.core.Message.compareByType);

					var iIndex = aSortMessages.length - 1;
					this._sSeverestMessageLevel = aSortMessages[iIndex].getLevel();
				}
			}

			if (fnChangeVisibility(this)) {
				var bShouldBeVisible = this.hasItems();
				this.fireDisplay({
					show : bShouldBeVisible
				});
			} else {
				/*
				 * Needed if i.e. all messages of a notifier were removed but if
				 * there are still notifications or messages to display
				 */
				this.invalidate();

				/*
				 * Needed if the message is directly removed from the Callout
				 * without any request to the user.
				 */
				if (oEvent.getParameter("type") === "removed") {
					/*
					 * Since the Callout has only one content - the NotifierView -
					 * it can be checked this way. If there is no content the
					 * Callout has been closed already.
					 */
					if (oCallout.getContent().length > 0) {
						var oNotiView = oCallout.getContent()[0];
						var oMessage = oEvent.getParameter("message");

						var aMessageViews = oNotiView.getMessages();
						var tmpMsgView;

						for (var i = 0; i < aMessageViews.length; i++) {
							tmpMsgView = aMessageViews[i];

							if (oMessage.getId() === tmpMsgView._message.getId()) {
								tmpMsgView.destroy();

								/*
								 * A normal invalidate on the NotifierView
								 * doesn't work here since the invalidate is
								 * delegated to the most upper parent -> the
								 * NotificationBar. If the NotificationBar is
								 * rendered it doesn't know something of the
								 * corresponding Callout. It would be possible
								 * to rerender the NotifierView but since the
								 * height of the Callout is reduced the
								 * Callout's position must be fixed as well.
								 * This happens also when the Callout is
								 * rerendered, so it saves some lines of codes
								 * to rerender the Callout itself.
								 */
								oCallout.rerender();

								/*
								 * An open Callout would loose its correct
								 * position due to the re-rendering. The
								 * followOf-functionality of the Popup doesn't
								 * work here, since the opener hasn't moved. See
								 * CSN 1625930 2013
								 */
								oCallout.adjustPosition();
								break;
							}
						}
					}
				}
			}

			break;

		case "openCallout":
			oCallout.destroyContent();

			var oNotifier = oEvent.getParameter("notifier");
			// destroy (renew) views that were previously created in maximized
			// mode
			oNotifier.destroyAggregation("views", true);
			var sId = oNotifier.getId();

			var oMessageNotifier = this.getMessageNotifier();

			if (oMessageNotifier && sId === oMessageNotifier.getId()) {
				sId += "-messageNotifierView";
			} else {
				sId += "-messageView";
			}

			// create control that renders the notifier's messages
			var oNotifierView = new sap.ui.ux3.NotificationBar.NotifierView(sId, {
				title : oNotifier.getTitle(),
				visibleItems : this._visibleItems
			});

			if (oNotifier._bEnableMessageSelect) {
				oNotifierView.addStyleClass("sapUiNotifierSelectable");
			}

			var aMessages = oNotifier.getMessages();
			for (var i = 0; i < aMessages.length; i++) {
				var oView = fnCreateMessageView(aMessages[i], oNotifier, this);
				oNotifierView.addMessage(oView);
			}

			// with adding this aggregation the view is destroyed as well if
			// needed
			oNotifier.addAggregation("views", oNotifierView, true);

			oCallout.addContent(oNotifierView);
			break;
		}
	};

	sap.ui.ux3.NotificationBar.HOVER_ITEM_HEIGHT = 16;

	sap.ui.ux3.NotificationBar.prototype.init = function() {
		this._oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
		this._oItemNavigation.setCycling(true);
		this.addDelegate(this._oItemNavigation);

		this._iCalloutWidth = parseInt(250);
		this._iCalloutHeight = parseInt(200);

		this._visibleItems = 5;

		this._eventListener = jQuery.proxy(fnChildEventListener, this);

		// needed within Renderer
		this._oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");

		this._togglerPosition = "50%";
		this._gapMessageArea = "5";

		this._sSeverestMessageLevel = sap.ui.core.MessageType.None;

		// TODO maybe the ResizeHandler should be used
		/*
		 * Frank Weigel: I wonder whether the window.resize is sufficient. If
		 * the NotificationBar is not used top level (e.g. in Shell) but in some
		 * smaller portion of the screen (e.g. Panel), then resizing might occur
		 * without a window.resize. Unfortunately, there is no cross browser
		 * Element.resize event available. Instead, one can use our
		 * ResizeHandler, but this might need more discussion about the Pros and
		 * Cons (ResizeHandler does some kind of polling which is nasty...)
		 */
		jQuery(window).bind("resize", jQuery.proxy(fnOnResize, this));

		this._proxyEnableMessageSelect = jQuery.proxy(fnEnableMessageSelect, this);
	};

	sap.ui.ux3.NotificationBar.prototype.exit = function() {
		this.removeDelegate(this._oItemNavigation);
		this._oItemNavigation.destroy();
		delete this._oItemNavigation;

		delete this._iCalloutWidth;
		delete this._iCalloutHeight;

		delete this._visibleItems;

		delete this._eventListener;

		if (this.getMessageNotifier()) {
			var oMN = this.getMessageNotifier();
			oMN._oMessageArea.destroy();
			delete oMN._oMessageArea;
		}

		delete this._resizeFrom;
		delete this._resizeTo;

		delete this._oResBundle;

		delete this._formerVisibleStatus;

		delete this._togglerPosition;
		delete this._gapMessageArea;

		delete this._isHovered;
		delete this._togglerClicked;

		delete this._sSeverestMessageLevel;

		jQuery(window).unbind("resize", fnOnResize);

		delete this._proxyEnableMessageSelect;
	};
	/**
	 * This method creates an instance of the internal control
	 * {sap.ui.ux3.NotificationBar.MessageView} corresponding to the given
	 * message
	 * 
	 * @param {sap.ui.core.Message}
	 *            oMessage from that should be created a view
	 * @returns {sap.ui.ux3.NotificationBar.MessageView}
	 */
	var fnCreateMessageView = function(oMessage, oNotifier, oNotiBar) {
		var oMessageView = new sap.ui.ux3.NotificationBar.MessageView(oNotifier.getId() + "-messageView-" + oMessage.getId(), {
			text : oMessage.getText(),
			timestamp : oMessage.getTimestamp()
		});
		oMessageView._message = oMessage;

		if (oNotifier.sParentAggregationName == "messageNotifier") {
			if (oNotiBar.getVisibleStatus() == sap.ui.ux3.NotificationBarStatus.Max) {
				oMessageView.setIcon(oMessage.getIcon() || oMessage.getDefaultIcon("32x32"));
			} else {
				oMessageView.setIcon(oMessage.getIcon() || oMessage.getDefaultIcon());
			}
		} else {
			oMessageView.setIcon(oMessage.getIcon());
		}

		return oMessageView;
	};

	/**
	 * This attaches the given notifier to all necessary events that a notifier
	 * can trigger. A transformation is needed because 'this' in this method is
	 * the window instance
	 * 
	 * @param {sap.ui.ux3.NotificationBar}
	 *            The bar itself since 'this' is the window's instance
	 * @param {sap.ui.ux3.Notifier}
	 *            oNotifier that should be registered
	 */
	var fnRegisterNotifierToEvents = function(that, oNotifier) {
		oNotifier.attachEvent("_childControlCalling", that._eventListener, that);
	};

	/**
	 * This detaches the given notifier to all necessary events that a notifier
	 * can trigger. A transformation is needed because 'this' in this method is
	 * the window instance
	 * 
	 * @param {sap.ui.ux3.NotificationBar}
	 *            The bar itself since 'this' is the window's instance
	 * @param {sap.ui.ux3.Notifier}
	 *            oNotifier that should be detached
	 */
	var fnDeregisterNotifierFromEvents = function(that, oNotifier) {
		oNotifier.detachEvent("_childControlCalling", that._eventListener, that);
	};

	/*
	 * Add, insert, remove, removeAll methods for notifiers
	 */
	sap.ui.ux3.NotificationBar.prototype.addNotifier = function(oNotifier) {
		if (oNotifier) {
			var bSuppress = (this.getVisibleStatus() == sap.ui.ux3.NotificationBarStatus.None) ? true : false;
			this.addAggregation("notifiers", oNotifier, bSuppress);
			fnRegisterNotifierToEvents(this, oNotifier);
		}

		return this;
	};
	sap.ui.ux3.NotificationBar.prototype.insertNotifier = function(oNotifier, iIndex) {
		if (oNotifier) {
			this.insertAggregation("notifiers", oNotifier, iIndex);
			fnRegisterNotifierToEvents(this, oNotifier);
		}

		return this;
	};
	sap.ui.ux3.NotificationBar.prototype.removeNotifier = function(oNotifier) {
		var oRemovedNotifier = this.removeAggregation("notifiers", oNotifier);
		fnDeregisterNotifierFromEvents(this, oRemovedNotifier);

		return oRemovedNotifier;
	};
	sap.ui.ux3.NotificationBar.prototype.removeAllNotifiers = function() {
		var aChildren = this.removeAllAggregation("notifiers");

		for (var i = 0; i < aChildren.length; i++) {
			var oNotifier = aChildren[i];
			fnDeregisterNotifierFromEvents(this, oNotifier);
		}

		return aChildren;
	};
	sap.ui.ux3.NotificationBar.prototype.destroyNotifiers = function() {
		var aChildren = this.getNotifiers();

		for (var i = 0; i < aChildren.length; i++) {
			var oNotifier = aChildren[i];
			fnDeregisterNotifierFromEvents(this, oNotifier);
		}

		this.destroyAggregation("notifiers");
		return this;
	};

	/**
	 * This function is called when the 'messageSelected' event listener was
	 * attached/detached to the MessageNotifier. If the MessageNotifier is
	 * affected it is invalidated accordingly so the inplace message of the
	 * MessageNotifier is clickable or not and has visual features as if it were
	 * clickable.
	 */
	var fnEnableMessageSelect = function(oEvent) {
		var oMN = this.getMessageNotifier();

		if (oMN && oMN.getId() === oEvent.getParameter("notifier").getId()) {
			oMN.invalidate();
		}
	};

	/*
	 * Set, remove, destroy methods for message notifier
	 */
	sap.ui.ux3.NotificationBar.prototype.setMessageNotifier = function(oMessageNotifier) {

		var oMN = this.getMessageNotifier();
		if (oMN) {
			oMN._oMessageArea.destroy();
			delete oMN._oMessageArea;

			oMN.detachEvent("_enableMessageSelect", this._proxyEnableMessageSelect);
			fnDeregisterNotifierFromEvents(this, oMN);
		}

		this.setAggregation("messageNotifier", oMessageNotifier);

		if (oMessageNotifier) {
			oMessageNotifier._oMessageArea = new sap.ui.ux3.NotificationBar.MessageView(this.getId() + "-inplaceMessage");
			oMessageNotifier._oMessageArea.setParent(oMessageNotifier);

			oMessageNotifier.attachEvent("_enableMessageSelect", this._proxyEnableMessageSelect);
			fnRegisterNotifierToEvents(this, oMessageNotifier);
		}

		return this;
	};
	sap.ui.ux3.NotificationBar.prototype.destroyMessageNotifier = function(oMsgNotifier) {

		var oMN = this.getMessageNotifier();
		if (oMN) {
			oMN._oMessageArea.destroy();
			delete oMN._oMessageArea;

			oMN.detachEvent("_enableMessageSelect", this._proxyEnableMessageSelect);
			fnDeregisterNotifierFromEvents(this, oMN);
		}

		this.destroyAggregation("messageNotifier");

		return this;
	};

	var fnSetResizeClasses = function(that, sStatus) {
		var $That = that.$();

		switch (sStatus) {
		case sap.ui.ux3.NotificationBarStatus.Min:
			$That.addClass("sapUiNotificationBarMinimized");
			break;

		case sap.ui.ux3.NotificationBarStatus.Max:
			var sHeight = that.getHeightOfStatus(that.getVisibleStatus());

			$That.addClass("sapUiNotificationBarMaximized");
			$That.css("height", sHeight);

			var $containers = that.$("containers");
			$containers.css("max-height", sHeight);
			break;

		case sap.ui.ux3.NotificationBarStatus.None:
			if (!that._resizeTo) {
				$That.css("display", "none");
			}
			break;

		case sap.ui.ux3.NotificationBarStatus.Default:
		default:
			$That.removeClass("sapUiNotificationBarMaximized");
			$That.removeClass("sapUiNotificationBarMinimized");

			break;
		}
	};

	var fnResizeStuff = function(that) {
		if (fnWasResized(that)) {
			var sFromHeight = that.getHeightOfStatus(that._resizeFrom);
			var $That = that.$();
			$That.css("height", sFromHeight);

			var sToHeight = that.getHeightOfStatus(that._resizeTo);
			$That.stop().animate({
				height : sToHeight
			}, {
				duration : "fast",
				queue : true,
				always : function() {
					var sStatus = that.getVisibleStatus();
					if (sStatus === "None") {
						$That.css("display", "none");

						if (that.hasItems()) {
							if (that.getMessageNotifier()) {
								var oMN = that.getMessageNotifier();
								oMN.$().css("display", "none");
							}

							if (that.getNotifiers().length > 0) {
								var aNotifiers = that.getNotifiers();
								for (var i = 0; i < aNotifiers.length; i++) {
									aNotifiers[i].$().css("display", "none");
								}
							}
						}
					}

					fnSetResizeClasses(that, sStatus);
					fnResize(that, sStatus);
				}
			});
		} else {
			/*
			 * Setting the correct size of the bar is necessary if the bar is
			 * maximized e.g. and a new message was added and triggered a
			 * re-rendering
			 */
			var sStatus = that.getVisibleStatus();
			fnSetResizeClasses(that, sStatus);
		}

		delete that._resizeFrom;
		delete that._resizeTo;
	};

	var fnSettingWidth = function(that) {
		if (that.getMessageNotifier() && that.getMessageNotifier().hasItems()) {
			var $messageArea = undefined;
			var sId = that.getId() + "-notifiers";
			var $domRef = jQuery.sap.byId(sId);
			if ($domRef.length > 0) {
				var iTotalWidth = parseInt($domRef.width());

				var $children = $domRef.children();

				for (var i = 0; i < $children.length; i++) {
					var $child = jQuery($children[i]);

					if ($child.hasClass("sapUiNotifier")) {
						iTotalWidth -= $child.width();
					} else if ($child.hasClass("sapUiNotifierSeparator")) {
						iTotalWidth -= $child.width();
					} else if ($child.hasClass("sapUiInPlaceMessage")) {
						$messageArea = $child;
					}
				}

				if ($messageArea) {
					// +2 since otherwise the inplace message has no place to be
					// displayed
					iTotalWidth -= that._gapMessageArea + 2;
					$messageArea.css("width", iTotalWidth + "px");
				}
			}
		}
	};

	var fnMouseMoveListener = function(oEvent) {
		var height = jQuery(window).height();

		var oNotiBar = oEvent.data.notibar;
		var $hoverDomRef = oNotiBar.$("hoverItem");

		var clientY = oEvent.clientY;
		var iClientTop = parseInt(clientY, 10);

		/*
		 * Border has to be moved up a little since the IE doesn't react anymore
		 * if the mouse cursor is too close to the boder.
		 */
		var iBorder = height - $hoverDomRef.outerHeight();
		if (oNotiBar._isHovered) {
			if (iClientTop < iBorder) {
				var fnHoverProxy = jQuery.proxy(fnHover, oNotiBar);
				$hoverDomRef.on("mouseleave", fnHoverProxy);

				window.setTimeout(function() {
					var oEvt = jQuery.Event("mouseleave", {
						notibar : oNotiBar
					});
					$hoverDomRef.trigger(oEvt);

					$hoverDomRef.off("mouseleave", fnHoverProxy);
				}, 100);

				delete oNotiBar._isHovered;
			}
		} else {
			if (iClientTop >= iBorder) {
				var fnHoverProxy = jQuery.proxy(fnHover, oNotiBar);
				$hoverDomRef.on("mouseenter", fnHoverProxy);

				window.setTimeout(function() {
					var oEvt = jQuery.Event("mouseenter", {
						notibar : oNotiBar
					});
					$hoverDomRef.trigger(oEvt);

					$hoverDomRef.off("mouseenter", fnHoverProxy);
				}, 100);

				oNotiBar._isHovered = true;
			}
		}
	};

	/*
	 * When the NotiBar is minimized the IE doesn't get the mouseenter and
	 * mouseleave events on the bar's parent element. So it's needed to simulate
	 * these events with checking if the mouse cursor is near the bottom of the
	 * window to manually trigger these events.
	 */
	var simulateMouseEventsForIE = function(oNotiBar) {
		var $doc = jQuery(document);

		if (oNotiBar.getVisibleStatus() === "Min") {
			$doc.on("mousemove", {
				notibar : oNotiBar
			}, fnMouseMoveListener);
		} else {
			$doc.off("mousemove", fnMouseMoveListener);
		}
	};

	/**
	 * @private
	 */
	sap.ui.ux3.NotificationBar.prototype.onAfterRendering = function() {
		this._oItemNavigation.setRootDomRef(this.getDomRef());

		var aItemDomRefs = [];
		var bIsMaximized = this.getVisibleStatus() === sap.ui.ux3.NotificationBarStatus.Max;

		// use different elements for navigation in maximized-mode
		if (bIsMaximized) {
			// add notifiers and messages reverse so the arrow keys can be used
			// properly. Or the whole control of the item navigation is
			// inverted.
			var oMessageNotifier = this.getMessageNotifier();
			if (oMessageNotifier != null) {
				var aMessages = oMessageNotifier.getMessages();
				var sId = oMessageNotifier.getId() + "-messageNotifierView-messageView-";

				for (var i = aMessages.length - 1; i >= 0; i--) {
					var oDomRef = jQuery.sap.domById(sId + aMessages[i].getId());
					if (oDomRef) {
						aItemDomRefs.push(oDomRef);
					}
				}
			}

			var aNotifiers = this.getNotifiers();
			for (var i = 0; i < aNotifiers.length; i++) {
				var aMessages = aNotifiers[i].getMessages();
				var sId = aNotifiers[i].getId() + "-notifierView-messageView-";

				for (var j = aMessages.length - 1; j >= 0; j--) {
					var oDomRef = jQuery.sap.domById(sId + aMessages[j].getId());
					if (oDomRef) {
						aItemDomRefs.push(oDomRef);
					}
				}
			}

		} else {
			var aNotifiers = this.getNotifiers();
			for (var i = 0; i < aNotifiers.length; i++) {
				var oDomRef = aNotifiers[i].getDomRef();
				if (oDomRef) {
					aItemDomRefs.push(oDomRef);
				}
			}

			var oMessageNotifier = this.getMessageNotifier();
			if (oMessageNotifier != null) {
				var oDomRef = oMessageNotifier.getDomRef();
				if (oDomRef) {
					aItemDomRefs.push(oDomRef);
				}

				// add the inplace message to the item navigation as well
				oDomRef = this.getDomRef("inplaceMessage");
				if (oDomRef && jQuery(oDomRef).hasClass("sapUiInPlaceMessageSelectable")) {
					aItemDomRefs.push(oDomRef);
				}
			}
		}

		this._oItemNavigation.setItemDomRefs(aItemDomRefs);

		/*
		 * Stuff for resizing
		 */
		fnResizeStuff(this);

		/*
		 * Calculating of the width to get the correct width for the message
		 * area
		 */
		fnSettingWidth(this);

		/*
		 * Set corresponding color for MessageNotifier's counter and description
		 * for the MessageNotifier
		 */
		fnSetSeverityForMessageNotifier(this, this.getMessageNotifier());

		// set descriptions for all normal notifiers
		fnSetItemsDescription(this);

		if (!!sap.ui.Device.browser.internet_explorer) {
			simulateMouseEventsForIE(this);
		}

		// set toggler always to visible if running on a mobile device
		if (sap.ui.Device.browser.mobile) {
			var $toggler = this.$("toggler");

			if (this.getVisibleStatus() !== sap.ui.ux3.NotificationBarStatus.None) {
				$toggler.css("display", "block");
			} else {
				$toggler.css("display", "none");
			}
		}
	};

	/**
	 * This method sets the corresponding CSS class to the message notifier's
	 * counter to set its corresponding color and sets the corresponding ARIA
	 * information to the notifier's description element
	 * 
	 * @private
	 */
	var fnSetSeverityForMessageNotifier = function(oThis, oMN) {
		if (oMN && oMN.hasItems()) {
			var $messageCount = oMN.$("counter");

			// remove all possible classes
			$messageCount.removeClass("sapUiMessageInformation");
			$messageCount.removeClass("sapUiMessageSuccess");
			$messageCount.removeClass("sapUiMessageWarning");
			$messageCount.removeClass("sapUiMessageError");

			// add new corresponding class
			var sLvl = oThis._sSeverestMessageLevel;
			$messageCount.addClass("sapUiMessage" + sLvl);

			// create key for description text
			var iCount = oMN.getMessages().length;
			var sKey = "NOTIBAR_MESSAGE_NOTIFIER_DESC_LEVEL_" + sLvl.toUpperCase() + iCount === 1 ? "_SING" : "_PL";

			// set description (i.e. "3 messages available: Highest severity
			// "Error")
			fnSetNotifierDescription(oThis, oMN, sKey, iCount);
		}
	};

	/**
	 * Sets all description of all notifiers
	 * 
	 * @private
	 */
	var fnSetItemsDescription = function(oThis) {
		var aNotifiers = oThis.getNotifiers();

		for (var i = 0; i < aNotifiers.length; i++) {
			var iCount = aNotifiers[i].getMessages().length;
			var sKey = "NOTIBAR_NOTIFIER_COUNT_TEXT_" + iCount === 1 ? "SING" : "PL";

			fnSetNotifierDescription(oThis, aNotifiers[i], sKey, iCount);
		}
	};

	var fnSetNotifierDescription = function(oThis, oNotifier, sKey, iCount) {
		var $description = oNotifier.$("description");

		var sMessage = oThis._oResBundle.getText(sKey, [ iCount ]);
		$description.html(sMessage);
	};

	/*
	 * Event listener for mouseenter/mouseleave for NotificationBar's parent
	 * HTML-element
	 */
	var fnHover = function(oEvent) {
		var $toggler = this.$("toggler");

		var bDisplay = ($toggler.css("display") === "block") ? true : false;
		if (bDisplay) {
			// if toggler is being displayed
			if (oEvent.type === "mouseleave") {
				$toggler.css("display", "none");
			}
		} else {
			if (oEvent.type === "mouseenter") {
				$toggler.css("display", "block");
			}
		}
	};

	/*
	 * EventListener when bar was resized
	 */
	var fnOnResize = function(oEvent) {
		/*
		 * Calculating of the width to get the correct width for the message
		 * area
		 */
		fnSettingWidth(this);
	};

	var fnWasResized = function(that) {
		if (that._resizeFrom && that._resizeTo) {
			if (that._resizeFrom != that._resizeTo) {
				return true;
			}
		}

		return false;
	};

	sap.ui.ux3.NotificationBar.prototype.hasItems = function() {
		// Checking all notifiers if any has items
		var mNotifiers = this.getNotifiers();
		if (mNotifiers.length > 0) {
			for (var i = 0; i < mNotifiers.length; i++) {
				var oNotifier = mNotifiers[i];
				if (oNotifier.hasItems()) {
					return true;
				}
			}
		}

		// Checking MessageNotifier if it has items
		if (this.getMessageNotifier()) {
			if (this.getMessageNotifier().hasItems()) {
				return true;
			}
		}

		return false;
	};

	var fnResize = function(oNotiBar, toStatus) {
		var display = "none";
		var $NotiBar = oNotiBar.$();

		switch (toStatus) {
		/*
		 * These cases are only mentioned to prevent running into default
		 */
		case sap.ui.ux3.NotificationBarStatus.Max:
		case sap.ui.ux3.NotificationBarStatus.None:
			break;

		case sap.ui.ux3.NotificationBarStatus.Min:
			/*
			 * Since minimizing doesn't need any re-rendering all necessary
			 * stuff can be done here
			 */
			$NotiBar.stop().animate({
				height : oNotiBar.getHeightOfStatus(toStatus)
			}, {
				duration : "fast",
				queue : true
			});

			$NotiBar.addClass("sapUiNotificationBarMinimized");

			oNotiBar.$("notifiers").css("display", "none");

			display = "block";
			break;

		default:
		case sap.ui.ux3.NotificationBarStatus.Default:
			/*
			 * If bar should be resized from maximized to default a re-rendering
			 * is needed. Otherwise a simple animation and CSS exchange is
			 * enough
			 */
			$NotiBar.stop().animate({
				height : oNotiBar.getHeightOfStatus(toStatus)
			}, {
				duration : "fast",
				queue : true
			});

			$NotiBar.removeClass("sapUiNotificationBarMaximized");
			$NotiBar.removeClass("sapUiNotificationBarMinimized");

			break;
		}

		var $hover = oNotiBar.$("hoverItem");
		$hover.css("display", display);
	};

	sap.ui.ux3.NotificationBar.prototype.onfocusin = function(oEvent) {
		if (this._togglerClicked) {
			delete this._togglerClicked;

			/*
			 * if the bar is minimized and a notifiers still has the focus it is
			 * needed to stop this event to prevent webkit browsers from
			 * scrolling down
			 */
			oEvent.stopImmediatePropagation(true);
		}
	};

	sap.ui.ux3.NotificationBar.prototype.onclick = function(oEvent) {
		/*
		 * if the bar is minimized and a notifiers still has the focus it is
		 * needed to stop this event to prevent webkit browsers from scrolling
		 * down
		 */
		this._togglerClicked = true;
		/*
		 * Prevent that the NotificationBar itselft gets the focus and causes a
		 * (dotted) border around the hover item and/or the bar iteslef
		 */
		this.$().blur();
		var $activeElement = jQuery(document.activeElement);

		fnCloseAllCallouts(this);

		var sId = oEvent.target.id;
		var aSplit = sId.split("-");

		if (aSplit) {
			var sVisibleStatus = this.getVisibleStatus();
			var iIndex = aSplit.length - 1;

			switch (aSplit[iIndex]) {
			case "ArrowUp":
				if (sVisibleStatus === "Min") {
					this.setVisibleStatus("Default");
				} else {
					// if current state is default -> maximize bar
					this.setVisibleStatus("Max");
				}
				break;

			case "ArrowDown":
				if (sVisibleStatus === "Max") {
					this.setVisibleStatus("Default");
				} else {
					// if current state is default -> minimize bar
					this.setVisibleStatus("Min");
				}
				oEvent.preventDefault();
				break;

			case "BarUp":
				if (this._formerVisibleStatus) {
					this.setVisibleStatus(this._formerVisibleStatus);
				} else {
					this.setVisibleStatus("Default");
				}

				break;

			case "BarDown":
				this._formerVisibleStatus = sVisibleStatus;
				this.setVisibleStatus("Min");

				$activeElement.blur();
				break;

			default:
				if ($activeElement.hasClass("sapUiNotifier")) {
					$activeElement.focus();
				} else {
					if (this.hasItems()) {
						var aNotifiers = this.getNotifiers();
						if (aNotifiers.length > 0) {
							var $firstNoti = jQuery(aNotifiers[0]);
							$firstNoti.focus();
						} else {
							var messageNoti = this.getMessageNotifier();
							if (messageNoti) {
								jQuery(messageNoti).focus();
							}
						}
					}
				}
				break;
			}
		}
	};

	sap.ui.ux3.NotificationBar.prototype.onThemeChanged = function(oEvent) {
		if (this.getDomRef()) {
			this.invalidate();
		}
	};

	/**
	 * Forces a close of all Callouts of all notifiers of the NotificationBar.
	 */
	var fnCloseAllCallouts = function(that) {
		var mNotifiers = that.getNotifiers();

		for (var i = 0; i < mNotifiers.length; i++) {
			var oNotifier = mNotifiers[i];

			oNotifier._oCallout.close();
		}

		if (that.getMessageNotifier()) {
			that.getMessageNotifier()._oCallout.close();
		}
	};

	sap.ui.ux3.NotificationBar.prototype.getHeightOfStatus = function(sStatus) {
		var sParam = "";

		if (sStatus == sap.ui.ux3.NotificationBarStatus.Min) {
			sParam = "sapUiNotificationBarHeightMinimized";
		} else if (sStatus == sap.ui.ux3.NotificationBarStatus.Default) {
			sParam = "sapUiNotificationBarHeight";
		} else if (sStatus == sap.ui.ux3.NotificationBarStatus.Max) {
			sParam = "sapUiNotificationBarHeightMaximized";
			sParam = sap.ui.core.theming.Parameters.get(sParam);

			var iIndex = sParam.indexOf("%");
			if (iIndex != -1) {
				var iPercentage = sParam.substring(0, iIndex);
				var iHeight = jQuery(window).height();
				iHeight = parseInt(iHeight / 100 * iPercentage);

				// Ensure that the MaxHeight is at least 1 px larger than the
				// Default
				// Maybe disabling the resize feature would be the better
				// approach in this case
				var _iHeight = parseInt(this.getHeightOfStatus(sap.ui.ux3.NotificationBarStatus.Default));
				if (iHeight < _iHeight) {
					iHeight = _iHeight + 1;
				}
			} else {
				var sMessage = "No valid percantage value given for maximized size. 400px is used";
				jQuery.sap.log.warning(sMessage);

				iHeight = 400;
			}
			return iHeight + "px";
		} else {
			// sStatus == sap.ui.ux3.NotificationBarStatus.None
			return "0px";
		}

		sParam = sap.ui.core.theming.Parameters.get(sParam);
		return sParam;
	};

	sap.ui.ux3.NotificationBar.prototype.setVisibleStatus = function(toStatus) {
		this._resizeFrom = this.getVisibleStatus();
		this._resizeTo = toStatus;

		// skip setting the property if 'toStatus' equals the current status
		if (this._resizeFrom !== this._resizeTo) {
			if (toStatus === sap.ui.ux3.NotificationBarStatus.None) {
				fnCloseAllCallouts(this);

				if (this.getDomRef()) {
					fnResize(this, toStatus);
				} else {
					this.$().css({
						"height" : "0px",
						"display" : "none"
					});
				}
			}

			this.setProperty("visibleStatus", toStatus);

			this.fireResize({
				status : toStatus
			});
		}
	};
}());
