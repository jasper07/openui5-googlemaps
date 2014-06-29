/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.FeedListItem.
jQuery.sap.declare("sap.m.FeedListItem");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.ListItemBase");


/**
 * Constructor for a new FeedListItem.
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
 * <li>{@link #getActiveIcon activeIcon} : sap.ui.core.URI</li>
 * <li>{@link #getSender sender} : string</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getInfo info} : string</li>
 * <li>{@link #getTimestamp timestamp} : string</li>
 * <li>{@link #getSenderActive senderActive} : boolean (default: true)</li>
 * <li>{@link #getIconActive iconActive} : boolean (default: true)</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li>
 * <li>{@link #getShowIcon showIcon} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.FeedListItem#event:senderPress senderPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.FeedListItem#event:iconPress iconPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The control provides a set of properties for text, sender information, time stamp
 * 
 * @extends sap.m.ListItemBase
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.m.FeedListItem
 */
sap.m.ListItemBase.extend("sap.m.FeedListItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"icon" : {type : "sap.ui.core.URI", group : "Data", defaultValue : null},
		"activeIcon" : {type : "sap.ui.core.URI", group : "Data", defaultValue : null},
		"sender" : {type : "string", group : "Data", defaultValue : null},
		"text" : {type : "string", group : "Data", defaultValue : null},
		"info" : {type : "string", group : "Data", defaultValue : null},
		"timestamp" : {type : "string", group : "Data", defaultValue : null},
		"senderActive" : {type : "boolean", group : "Behavior", defaultValue : true},
		"iconActive" : {type : "boolean", group : "Behavior", defaultValue : true},
		"iconDensityAware" : {type : "boolean", group : "Appearance", defaultValue : true},
		"showIcon" : {type : "boolean", group : "Behavior", defaultValue : true}
	},
	events : {
		"senderPress" : {}, 
		"iconPress" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.FeedListItem with name <code>sClassName</code> 
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
 * @name sap.m.FeedListItem.extend
 * @function
 */

sap.m.FeedListItem.M_EVENTS = {'senderPress':'senderPress','iconPress':'iconPress'};


/**
 * Getter for property <code>icon</code>.
 * Icon to be displayed as graphical element within the FeedListItem. This can be an image or an icon from the icon font.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.m.FeedListItem#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FeedListItem#setIcon
 * @function
 */


/**
 * Getter for property <code>activeIcon</code>.
 * Icon displayed when the list item is active.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>activeIcon</code>
 * @public
 * @name sap.m.FeedListItem#getActiveIcon
 * @function
 */

/**
 * Setter for property <code>activeIcon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sActiveIcon  new value for property <code>activeIcon</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FeedListItem#setActiveIcon
 * @function
 */


/**
 * Getter for property <code>sender</code>.
 * Sender of the chunk
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>sender</code>
 * @public
 * @name sap.m.FeedListItem#getSender
 * @function
 */

/**
 * Setter for property <code>sender</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSender  new value for property <code>sender</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FeedListItem#setSender
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * The FeedListItem text.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.m.FeedListItem#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FeedListItem#setText
 * @function
 */


/**
 * Getter for property <code>info</code>.
 * The Info text.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>info</code>
 * @public
 * @name sap.m.FeedListItem#getInfo
 * @function
 */

/**
 * Setter for property <code>info</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sInfo  new value for property <code>info</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FeedListItem#setInfo
 * @function
 */


/**
 * Getter for property <code>timestamp</code>.
 * This chunks timestamp
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>timestamp</code>
 * @public
 * @name sap.m.FeedListItem#getTimestamp
 * @function
 */

/**
 * Setter for property <code>timestamp</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTimestamp  new value for property <code>timestamp</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FeedListItem#setTimestamp
 * @function
 */


/**
 * Getter for property <code>senderActive</code>.
 * If true, sender string is an link, which will fire 'senderPress' events. If false, sender is normal text.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>senderActive</code>
 * @public
 * @name sap.m.FeedListItem#getSenderActive
 * @function
 */

/**
 * Setter for property <code>senderActive</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bSenderActive  new value for property <code>senderActive</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FeedListItem#setSenderActive
 * @function
 */


/**
 * Getter for property <code>iconActive</code>.
 * If true, icon is an link, which will fire 'iconPress' events. If false, icon is normal image
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>iconActive</code>
 * @public
 * @name sap.m.FeedListItem#getIconActive
 * @function
 */

/**
 * Setter for property <code>iconActive</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconActive  new value for property <code>iconActive</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FeedListItem#setIconActive
 * @function
 */


/**
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * 
 * If bandwidth is the key for the application, set this value to false.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * @name sap.m.FeedListItem#getIconDensityAware
 * @function
 */

/**
 * Setter for property <code>iconDensityAware</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FeedListItem#setIconDensityAware
 * @function
 */


/**
 * Getter for property <code>showIcon</code>.
 * If set to "true" (default), icons will be displayed, if set to false icons are hidden
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showIcon</code>
 * @public
 * @name sap.m.FeedListItem#getShowIcon
 * @function
 */

/**
 * Setter for property <code>showIcon</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowIcon  new value for property <code>showIcon</code>
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FeedListItem#setShowIcon
 * @function
 */


/**
 * Event is fired when name of the sender is pressed. 
 *
 * @name sap.m.FeedListItem#senderPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.domRef Dom reference of the feed item's sender string to be used for positioning.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'senderPress' event of this <code>sap.m.FeedListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.FeedListItem</code>.<br/> itself. 
 *  
 * Event is fired when name of the sender is pressed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.FeedListItem</code>.<br/> itself.
 *
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FeedListItem#attachSenderPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'senderPress' event of this <code>sap.m.FeedListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FeedListItem#detachSenderPress
 * @function
 */

/**
 * Fire event senderPress to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'domRef' of type <code>string</code> Dom reference of the feed item's sender string to be used for positioning.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.FeedListItem#fireSenderPress
 * @function
 */


/**
 * Event is fired when the icon is pressed. 
 *
 * @name sap.m.FeedListItem#iconPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.domRef Dom reference of the feed item's icon to be used for positioning.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'iconPress' event of this <code>sap.m.FeedListItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.FeedListItem</code>.<br/> itself. 
 *  
 * Event is fired when the icon is pressed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.FeedListItem</code>.<br/> itself.
 *
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FeedListItem#attachIconPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'iconPress' event of this <code>sap.m.FeedListItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FeedListItem#detachIconPress
 * @function
 */

/**
 * Fire event iconPress to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'domRef' of type <code>string</code> Dom reference of the feed item's icon to be used for positioning.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.FeedListItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.FeedListItem#fireIconPress
 * @function
 */


// Start of sap\m\FeedListItem.js
///**
// * This file defines behavior for the control,
// */

/**
 * Function is called when exiting the control.
 * 
 * @private
 */
sap.m.FeedListItem.prototype.exit = function(oEvent) {
	// destroy link control if initialized
	if (this._oLinkControl) {
		this._oLinkControl.destroy();
	} 
	if (this._oImageControl) {
		this._oImageControl.destroy();
	}
	
	sap.m.ListItemBase.prototype.exit.apply(this);
};

/**
 * Overwrite ListItemBase's ontap. Triggers 'senderPress' if sender was pressed or
 * iconPress if icon was pressed. IN those cases, the tap is not propagated to ListItemBase.
 * Otherwise, ListItemBase's tap is executed which will take care of interaction response.
 * 
 * @private
 */
sap.m.FeedListItem.prototype.ontap = function(oEvent) {
	if (oEvent.srcControl.getId() === this.getId() + "-icon" && this.getIconActive()) {
		//Use figure dom ref because some image content might be cut off
		var sFigureDomRef = this.getDomRef("figure");
		this.fireIconPress({ domRef: sFigureDomRef});
	} else if(!this._oLinkControl || !this.getSenderActive() || oEvent.srcControl.getId() !== this._oLinkControl.getId()) {
		sap.m.ListItemBase.prototype.ontap.apply(this, [oEvent]);
	}
};

/**
 * Lazy load feed icon image.
 *
 * @private
 */
sap.m.FeedListItem.prototype._getImageControl = function() {
	
	var sIconSrc = this.getIcon() ? this.getIcon() : sap.ui.core.IconPool.getIconURI("person-placeholder"),
		sImgId = this.getId() + '-icon',
		mProperties = { 
			src : sIconSrc,
			alt : this.getSender(),
			densityAware : this.getIconDensityAware()
		},
		aCssClasses = ['sapMFeedListItemImage'];
	
	this._oImageControl = sap.m.ImageHelper.getImageControl(sImgId, this._oImageControl, this, mProperties, aCssClasses);
	
	return this._oImageControl;
};



/**
 * Returns a link control with sender text firing a 'senderPress' event. Does
 * not take care of the 'senderActive' flag, though
 * 
 * @returns link control with current sender text which fires a 'senderPress' event.
 * @private
 */
sap.m.FeedListItem.prototype._getLinkControl = function() {
	if(!this._oLinkControl) {
		jQuery.sap.require("sap.m.Link");
		var that = this;
		this._oLinkControl =  new sap.m.Link({
				press : function() {
					var sSenderDomRef = this.getDomRef();
					that.fireSenderPress({ domRef: sSenderDomRef});
				}
			});
		//Necessary so this gets garbage collected
		this._oLinkControl.setParent(this, null, true);
	}
	this._oLinkControl.setProperty("text", this.getSender(), true);
	this._oLinkControl.setProperty("enabled", this.getSenderActive(), true);
		
	return this._oLinkControl;
};

/**
 * Overwrite base method to hook into list item's active handling
 * 
 * @private
 */
sap.m.FeedListItem.prototype._activeHandlingInheritor = function() {
	var sActiveSrc = this.getActiveIcon();

	if(!!this._oImageControl  && !!sActiveSrc) {
		this._oImageControl.setSrc(sActiveSrc);
	}	
};


/**
 * Overwrite base method to hook into list item's inactive handling
 * 
 * @private
 */
sap.m.FeedListItem.prototype._inactiveHandlingInheritor = function() {
	var sSrc = this.getIcon();
	if(!!this._oImageControl) {
		this._oImageControl.setSrc(sSrc);
	}	
};