/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ListItemBase.
jQuery.sap.declare("sap.m.ListItemBase");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ListItemBase.
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
 * <li>{@link #getType type} : sap.m.ListType (default: sap.m.ListType.Inactive)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getUnread unread} : boolean (default: false)</li>
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * <li>{@link #getCounter counter} : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.ListItemBase#event:tap tap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ListItemBase#event:detailTap detailTap} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ListItemBase#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ListItemBase#event:detailPress detailPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * ListItemBase contains the core features of all specific list items.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.ListItemBase
 */
sap.ui.core.Control.extend("sap.m.ListItemBase", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"isSelected"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"type" : {type : "sap.m.ListType", group : "Misc", defaultValue : sap.m.ListType.Inactive},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"unread" : {type : "boolean", group : "Misc", defaultValue : false},
		"selected" : {type : "boolean", group : "", defaultValue : false},
		"counter" : {type : "int", group : "Misc", defaultValue : null}
	},
	events : {
		"tap" : {}, 
		"detailTap" : {}, 
		"press" : {}, 
		"detailPress" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.ListItemBase with name <code>sClassName</code> 
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
 * @name sap.m.ListItemBase.extend
 * @function
 */

sap.m.ListItemBase.M_EVENTS = {'tap':'tap','detailTap':'detailTap','press':'press','detailPress':'detailPress'};


/**
 * Getter for property <code>type</code>.
 * Type of the list item, defines the behaviour
 *
 * Default value is <code>Inactive</code>
 *
 * @return {sap.m.ListType} the value of property <code>type</code>
 * @public
 * @name sap.m.ListItemBase#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>Inactive</code> 
 *
 * @param {sap.m.ListType} oType  new value for property <code>type</code>
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#setType
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible list items are not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.ListItemBase#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#setVisible
 * @function
 */


/**
 * Getter for property <code>unread</code>.
 * If the unread indicator is set on the list, this boolean defines if it will be shown on this list item. Default is false.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>unread</code>
 * @public
 * @name sap.m.ListItemBase#getUnread
 * @function
 */

/**
 * Setter for property <code>unread</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bUnread  new value for property <code>unread</code>
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#setUnread
 * @function
 */


/**
 * Getter for property <code>selected</code>.
 * This property defines the select state of the list item when using Single/Multi-Selection.
 * 
 * Note: Binding the "selected" property in single selection mode, may cause unwanted results, if you have more than one selected item in your binding
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * @name sap.m.ListItemBase#getSelected
 * @function
 */

/**
 * Setter for property <code>selected</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSelected  new value for property <code>selected</code>
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#setSelected
 * @function
 */


/**
 * Getter for property <code>counter</code>.
 * Property sets a counter bubble with the integer given.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>counter</code>
 * @public
 * @name sap.m.ListItemBase#getCounter
 * @function
 */

/**
 * Setter for property <code>counter</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iCounter  new value for property <code>counter</code>
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#setCounter
 * @function
 */


/**
 * tap event (This event is deprecated, use the press event instead) 
 *
 * @name sap.m.ListItemBase#tap
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'tap' event of this <code>sap.m.ListItemBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ListItemBase</code>.<br/> itself. 
 *  
 * tap event (This event is deprecated, use the press event instead) 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.ListItemBase</code>.<br/> itself.
 *
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#attachTap
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'tap' event of this <code>sap.m.ListItemBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#detachTap
 * @function
 */

/**
 * Fire event tap to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ListItemBase#fireTap
 * @function
 */


/**
 * detail tap event (This event is deprecated, use the detailPress event instead) 
 *
 * @name sap.m.ListItemBase#detailTap
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'detailTap' event of this <code>sap.m.ListItemBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ListItemBase</code>.<br/> itself. 
 *  
 * detail tap event (This event is deprecated, use the detailPress event instead) 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.ListItemBase</code>.<br/> itself.
 *
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#attachDetailTap
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'detailTap' event of this <code>sap.m.ListItemBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#detachDetailTap
 * @function
 */

/**
 * Fire event detailTap to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ListItemBase#fireDetailTap
 * @function
 */


/**
 * Event is fired when the user clicks on the control. 
 *
 * @name sap.m.ListItemBase#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.m.ListItemBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ListItemBase</code>.<br/> itself. 
 *  
 * Event is fired when the user clicks on the control. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.ListItemBase</code>.<br/> itself.
 *
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.m.ListItemBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ListItemBase#firePress
 * @function
 */


/**
 * Event is fired when the user clicks on the detail button of the control. 
 *
 * @name sap.m.ListItemBase#detailPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'detailPress' event of this <code>sap.m.ListItemBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ListItemBase</code>.<br/> itself. 
 *  
 * Event is fired when the user clicks on the detail button of the control. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.ListItemBase</code>.<br/> itself.
 *
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#attachDetailPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'detailPress' event of this <code>sap.m.ListItemBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ListItemBase#detachDetailPress
 * @function
 */

/**
 * Fire event detailPress to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ListItemBase} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ListItemBase#fireDetailPress
 * @function
 */


/**
 * returns the state of the item selection as a boolean
 *
 * @name sap.m.ListItemBase.prototype.isSelected
 * @function

 * @type boolean
 * @public
 * @deprecated Since version 1.10.2. 
 * API Change makes this method unnecessary
 */


// Start of sap\m\ListItemBase.js
jQuery.sap.require("sap.ui.core.theming.Parameters");

// IE9 does not support flex-box: do special table-based rendering (see List_noFlex.css)
sap.m.ListItemBase.prototype._bNoFlex = !jQuery.support.hasFlexBoxSupport;

// image path for different theme and OS
sap.m.ListItemBase.prototype._sImagePath = jQuery.sap.getModulePath("sap.m", "/") + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + "/img/list/" + (jQuery.os.ios ? "ios" : "android") + "/";

// mode of the list e.g. singleSelection, multi...
// internal selected state of the listitem
sap.m.ListItemBase.prototype.init = function() {
	this._active = false;
	this._mode = "None";
};

/*
 * Returns the binding context path via checking the named model of parent
 *
 * @protected
 * @since 1.16.3
 */
sap.m.ListItemBase.prototype.getBindingContextPath = function(sModelName) {
	if (this._listId && !sModelName) {
		sModelName = (sap.ui.getCore().byId(this._listId).getBindingInfo("items") || {}).model;
	}

	var oContext = this.getBindingContext(sModelName);
	if (oContext) {
		return oContext.getPath();
	}
};

// radiobutton for single selection
sap.m.ListItemBase.prototype._getRadioButton = function(oRadioButtonId, sGroupName) {

	// maybe mode is changed
	if (this.hasOwnProperty("_checkBox")) {
		this._checkBox.destroy();
		delete this._checkBox;
	}

	return this._radioButton || (this._radioButton = new sap.m.RadioButton(oRadioButtonId, {
		groupName : sGroupName,
		activeHandling : false,
		selected : this.getSelected()
	}).setParent(this, null, true).attachSelect(this._select)).setTabIndex(-1);
};

// checkbox for multiselection
sap.m.ListItemBase.prototype._getCheckBox = function(oBoxId) {

	// maybe mode is changed
	if (this.hasOwnProperty("_radioButton")) {
		this._radioButton.destroy();
		delete this._radioButton;
	}

	return this._checkBox || (this._checkBox = new sap.m.CheckBox(oBoxId, {
		activeHandling : false,
		selected : this.getSelected()
	}).setParent(this, null, true).attachSelect(this._select)).setTabIndex(-1);
};

sap.m.ListItemBase.prototype.exit = function() {
	if (this._radioButton) {
		this._radioButton.destroy();
		delete this._radioButton;
	}

	if (this._checkBox) {
		this._checkBox.destroy();
		delete this._checkBox;
	}

	if (this._navImage) {
		this._navImage.destroy();
		delete this._navImage;
	}

	if (this._delIcon) {
		this._delIcon.destroy();
		delete this._delIcon;
	}

	if (this._navIcon) {
		this._navIcon.destroy();
		delete this._navIcon;
	}

	if (this._detailIcon) {
		this._detailIcon.destroy();
		delete this._detailIcon;
	}

	this._oLastFocused = null;
};

sap.m.ListItemBase.prototype.isSelectable = function() {
	return true;
};

sap.m.ListItemBase.prototype.isSelected = function() {
	if (this.isSelectable()) {
		return this.getProperty("selected");
	}
	return false;
};

sap.m.ListItemBase.prototype.getSelected = function() {
	return this.isSelected();
};

sap.m.ListItemBase.prototype.setSelected = function(bSelect, bDontNotifyParent) {
	bSelect = this.validateProperty("selected", bSelect);

	if (this.isSelectable() && bSelect != this.getProperty("selected")) {

		// notify parent about the selection first
		if (!bDontNotifyParent && this._listId) {
			var oParent = sap.ui.getCore().byId(this._listId);
			if (oParent && oParent.onItemSetSelected) {
				oParent.onItemSetSelected(this, bSelect);
			}
		}

		// update selection box
		if (this._checkBox) {
			this._checkBox.setSelected(bSelect);
		} else if (this._radioButton) {
			this._radioButton.setSelected(bSelect);
		}

		// update DOM
		if (this.getDomRef()) {
			this.$().toggleClass("sapMLIBSelected", bSelect);
		}

		// set the property
		this.setProperty("selected", bSelect, true);
	}

	return this;
};

sap.m.ListItemBase.prototype.setActive = function(bActive) {
	if (bActive != this._active) {
		this._active = bActive;
		this._activeHandling();

		if (this.getType() == "Navigation") {
			this._activeHandlingNav();
		}

		if (bActive) {
			this._activeHandlingInheritor();
		} else {
			this._inactiveHandlingInheritor();
		}
	}

	return this;
};

// somehow unread ignores css when changed directly in the dom...therefore rerendering reactivated
sap.m.ListItemBase.prototype.setUnread = function(bUnread) {
	this.setProperty("unread", bUnread);
	this.$().toggleClass("sapMLIBUnread", bUnread);
	return this;
};

sap.m.ListItemBase.prototype._getNavImage = function(oImgId, oImgStyle, oSrc, oActiveSrc) {

	// no navigation image for android
	if (!jQuery.os.ios && this.getType() == "Navigation") {
		return null;
	}

	if (this.hasOwnProperty("_navImage")) {
		return this._navImage;
	}

	if (oActiveSrc) {
		oActiveSrc = this._sImagePath + oActiveSrc;
	}

	return this._navImage = new sap.m.Image(oImgId, {
		src : this._sImagePath + oSrc,
		activeSrc : oActiveSrc,
		densityAware : false
	}).addStyleClass(oImgStyle, true).setParent(this, null, true);
};

sap.m.ListItemBase.prototype._getDelImage = function(oImgId, oImgStyle, oSrc) {
	return this._delImage || (this._delImage = new sap.m.Image(oImgId, {
		src : this._sImagePath + oSrc,
		densityAware: false
	}).addStyleClass(oImgStyle, true).setParent(this, null, true).attachPress(this._delete));
};

sap.m.ListItemBase.prototype.ontap = function(oEvent) {
	var type = this.getType();

	if (this._mode === "SingleSelectMaster" || (this._includeItemInSelection && (this._mode === "SingleSelect" || this._mode === "SingleSelectLeft" || this._mode === "MultiSelect"))) {

		// if _includeItemInSelection all tap events will be used for the mode select and delete
		// SingleSelectMaster always behaves like includeItemInSelection is set
		switch (this._mode) {
			case "SingleSelect":
			case "SingleSelectLeft":
			case "SingleSelectMaster":

				// check if radiobutton fired the event and therefore do not set the select
				if (!this.getSelected() && oEvent.srcControl && oEvent.srcControl.getId() !== this._radioButton.getId()) {
					this.setSelected(true);
					this._listId && sap.ui.getCore().byId(this._listId)._selectTapped(this);
				}

				break;
			case "MultiSelect":

				// check if checkbox fired the event and therefore do not set the select
				if (oEvent.srcControl && oEvent.srcControl.getId() !== this._checkBox.getId()) {
					this.setSelected(!this.getSelected());
					this._listId && sap.ui.getCore().byId(this._listId)._selectTapped(this);
				}

				break;
		}
	} else {
		switch (type) {
			case "Active":
			case "Navigation":

				// if a fast tap happens deactivate the touchstart/touchend timers and their logic
				if ( this._isActivationHandled(oEvent) && !this._eventHandledByControl) {
					window.clearTimeout(this._timeoutIdStart);
					window.clearTimeout(this._timeoutIdEnd);
					this.setActive(true);
					jQuery.sap.delayedCall(180, this, function() {
						this.setActive(false);
					});
				}

				if (!this._eventHandledByControl) {
					jQuery.sap.delayedCall(50, this, function(){
						this.fireTap({});
						this.firePress({});
					});
				}

				break;

			case "Detail":
				if (oEvent.srcControl && oEvent.srcControl.getId() === (this.getId() + "-imgDet")) {
					this.fireDetailTap({});
					this.fireDetailPress({});
				}

				break;

			case "DetailAndActive":
				if (oEvent.srcControl && oEvent.srcControl.getId() === (this.getId() + "-imgDet")) {
					this.fireDetailTap({});
					this.fireDetailPress({});
				} else {

					// if a fast tap happens deactivate the touchstart/touchend timers and their logic
					if ( this._isActivationHandled(oEvent) && !this._eventHandledByControl) {
						window.clearTimeout(this._timeoutIdStart);
						window.clearTimeout(this._timeoutIdEnd);
						this.setActive(true);
						jQuery.sap.delayedCall(180, this, function() {
							this.setActive(false);
						});
					}

					if (!this._eventHandledByControl) {
						jQuery.sap.delayedCall(50, this, function(){
							this.fireTap({});
							this.firePress({});
						});
					}
				}

				break;
		}
	}

	// tell the list, item is pressed
	if (this._listId && type != "Inactive") {
		sap.ui.getCore().byId(this._listId)._onItemPressed(this, oEvent);
	}
};

sap.m.ListItemBase.prototype.ontouchstart = function(oEvent) {
	this._eventHandledByControl = oEvent.originalEvent._sapui_handledByControl;

	this._touchedY = oEvent.targetTouches[0].clientY;
	this._touchedX = oEvent.targetTouches[0].clientX;

	// timeout regarding active state when scrolling
	this._timeoutIdStart = jQuery.sap.delayedCall(100, this, function() {

		// several fingers could be used
		// for selections with whole list item interaction and singleselectmaster active handling is disabled
		if (!(this._includeItemInSelection && (this._mode == "SingleSelect" || this._mode == "SingleSelectLeft" || this._mode == "MultiSelect")) && ((oEvent.touches && oEvent.touches.length === 1) || !oEvent.touches)) {
			var type = this.getType();
			switch (type) {
				case "Active":
				case "Navigation":
				case "DetailAndActive":

					if (this._isActivationHandled(oEvent) && !this._eventHandledByControl) {
						this.setActive(true);
					}

					break;
			}
		}
	});
};

// touch move to prevent active state when scrolling
sap.m.ListItemBase.prototype.ontouchmove = function(oEvent) {
	var bTouchMovement = ((Math.abs(this._touchedY - oEvent.targetTouches[0].clientY) > 10) || Math.abs(this._touchedX - oEvent.targetTouches[0].clientX) > 10);

	if ((this._active || this._timeoutIdStart) && bTouchMovement) {

		// there is movement and therefore no tap...remove active styles
		clearTimeout(this._timeoutIdStart);
		this.setActive(false);
		this._timeoutIdStart = null;
		this._timeoutIdEnd = null;
	}
};

sap.m.ListItemBase.prototype.ontouchend = function(oEvent) {

	// several fingers could be used
	if (oEvent.targetTouches.length === 0) {
		switch (this.getType()) {
			case "Active":
			case "Navigation":
			case "DetailAndActive":

				// wait maybe it is a tap
				this._timeoutIdEnd = jQuery.sap.delayedCall(100, this, function() {
					this._event = oEvent;
					this.setActive(false);
				});

				break;
		}
	}
};

// During native scrolling: Chrome sends touchcancel and no touchend thereafter
sap.m.ListItemBase.prototype.ontouchcancel = sap.m.ListItemBase.prototype.ontouchend;

// toggle active styles for navigation items
sap.m.ListItemBase.prototype._activeHandlingNav = function() {
	if (sap.ui.Device.os.ios) {
		this.$("imgNav").toggleClass("sapMLIBImgNavActive", this._active);
	}
};

// hook method for active handling...inheritors should overwrite this method
sap.m.ListItemBase.prototype._activeHandlingInheritor = function() {
};

// hook method for inactive handling...inheritors should overwrite this method
sap.m.ListItemBase.prototype._inactiveHandlingInheritor = function() {
};

// switch background style... toggle active feedback
sap.m.ListItemBase.prototype._activeHandling = function() {
	this.$().toggleClass("sapMLIBActive", this._active);
	this.$("counter").toggleClass("sapMLIBActiveCounter", this._active);

	if (this.getUnread()) {
		this.$("unread").toggleClass("sapMLIBActiveUnread", this._active);
	}

	var oImgDet = sap.ui.getCore().byId(this.getId() + "-imgDet");
	if (oImgDet) {
		oImgDet.$().toggleClass("sapMLIBIconDetActive", this._active);
	}

	var oImgDel = sap.ui.getCore().byId(this.getId() + "-imgDel");
	if (oImgDel) {
		oImgDel.$().toggleClass("sapMLIBIconDelActive", this._active);
	}
};

// checks the source control from event, whether it is handling the active feedback by its own or not...
// also delete and detail icons won't cause an active feedback
sap.m.ListItemBase.prototype._isActivationHandled = function(oEvent) {
	this._event = oEvent;
	var control = oEvent.srcControl;

	if (control && control.getId() != this.getId() + "-imgDel" && control.getId() != this.getId() + "-imgDet" && (!control.getActiveHandling || control.getActiveHandling && control.getActiveHandling() !== false)) {
		return true;
	}

	return false;
};

/* Keyboard Handling */
sap.m.ListItemBase.prototype.onsapspace = function(oEvent) {
	if (!this._listId ||
		oEvent.isMarked() ||
		!this.isSelectable() ||
		oEvent.srcControl !== this ||
		this._mode == "Delete" ||
		this._mode == "None") {
		return;
	}

	if (this._mode == "MultiSelect") {
		this.setSelected(!this.getSelected());
		sap.ui.getCore().byId(this._listId)._selectTapped(this);
	} else if (!this.getSelected()) {
		this.setSelected(true);
		sap.ui.getCore().byId(this._listId)._selectTapped(this);
	}

	// let the parent know and prevent default not to scroll down
	oEvent.preventDefault();
	oEvent.setMarked();
};

sap.m.ListItemBase.prototype.onsapenter = function(oEvent) {
	if (!this._listId ||
		oEvent.isMarked() ||
		oEvent.srcControl !== this) {
		return;
	}

	// let the list know item is pressed
	if (this.getType() != "Inactive") {
		sap.ui.getCore().byId(this._listId)._onItemPressed(this, oEvent);
	}

	// support old bug!!!
	// do not fire item press event when item is included into selection
	if ((this._includeItemInSelection && this._mode != "None" && this._mode != "Delete") ||
		this._mode == "SingleSelectMaster") {
		this.onsapspace(oEvent);
		return;
	}

	switch (this.getType()) {
		case "Active":
		case "Navigation":
		case "DetailAndActive":
			oEvent.setMarked();

			// active feedback
			this.setActive(true);
			jQuery.sap.delayedCall(180, this, function() {
				this.setActive(false);
			});

			// fire own press event
			jQuery.sap.delayedCall(0, this, function() {
				this.fireTap({});
				this.firePress({});
			});

			break;
	}
};

sap.m.ListItemBase.prototype.onsapdelete = function(oEvent) {
	if (!this._listId ||
		oEvent.isMarked() ||
		oEvent.srcControl !== this ||
		this._mode != "Delete") {
		return;
	}

	this._delete.call(this._delIcon || this._delImage);
	oEvent.preventDefault();
	oEvent.setMarked();
};

sap.m.ListItemBase.prototype._switchFocus = function(oEvent) {
	if (oEvent.srcControl !== this) {
		this._oLastFocused = oEvent.target;
		jQuery(oEvent.target).blur();
		this.$().focus();
	} else if (this._oLastFocused) {
		jQuery(this._oLastFocused).focus();
	}
};

sap.m.ListItemBase.prototype.onkeydown = function(oEvent) {
	// check whether event is marked or not
	var mKeyCodes = jQuery.sap.KeyCodes;
	if (oEvent.isMarked()) {
		return;
	}

	// switch focus to row and focused item with F7
	if (oEvent.which == mKeyCodes.F7) {
		this._switchFocus(oEvent);
		oEvent.preventDefault();
		oEvent.setMarked();
		return;
	}

	// Ctrl + A to select all
	if (oEvent.srcControl === this && oEvent.ctrlKey && oEvent.which == mKeyCodes.A) {
		sap.ui.getCore().byId(this._listId).selectAll(true);
		oEvent.preventDefault();
		oEvent.setMarked();
	}
};