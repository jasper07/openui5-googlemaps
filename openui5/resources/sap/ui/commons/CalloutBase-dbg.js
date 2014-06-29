/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.CalloutBase.
jQuery.sap.declare("sap.ui.commons.CalloutBase");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.TooltipBase");


/**
 * Constructor for a new CalloutBase.
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
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.CalloutBase#event:open open} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.commons.CalloutBase#event:close close} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.commons.CalloutBase#event:beforeOpen beforeOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.commons.CalloutBase#event:opened opened} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.commons.CalloutBase#event:closed closed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.TooltipBase#constructor sap.ui.core.TooltipBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * CalloutBase is a building block for Callout. Do not use it directly. Use the Callout control instead
 * @extends sap.ui.core.TooltipBase
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.CalloutBase
 */
sap.ui.core.TooltipBase.extend("sap.ui.commons.CalloutBase", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"adjustPosition", "close", "setPosition"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	events : {
		"open" : {}, 
		"close" : {}, 
		"beforeOpen" : {allowPreventDefault : true}, 
		"opened" : {}, 
		"closed" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.CalloutBase with name <code>sClassName</code> 
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
 * @name sap.ui.commons.CalloutBase.extend
 * @function
 */

sap.ui.commons.CalloutBase.M_EVENTS = {'open':'open','close':'close','beforeOpen':'beforeOpen','opened':'opened','closed':'closed'};


/**
 * The event is fired when the popup is opened. 
 *
 * @name sap.ui.commons.CalloutBase#open
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.parent Parent control that has this Callout as a tooltip
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'open' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself. 
 *  
 * The event is fired when the popup is opened. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself.
 *
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CalloutBase#attachOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'open' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CalloutBase#detachOpen
 * @function
 */

/**
 * Fire event open to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'parent' of type <code>sap.ui.core.Control</code> Parent control that has this Callout as a tooltip</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.CalloutBase#fireOpen
 * @function
 */


/**
 * Event is fired when the Callout window is closed. 
 *
 * @name sap.ui.commons.CalloutBase#close
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'close' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself. 
 *  
 * Event is fired when the Callout window is closed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself.
 *
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CalloutBase#attachClose
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'close' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CalloutBase#detachClose
 * @function
 */

/**
 * Fire event close to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.CalloutBase#fireClose
 * @function
 */


/**
 * Event is fired before a Callout is displayed. Call the preventDefault method of the event object to postpone opening. Application may use this event to start asynchronous Ajax call to load the Callout content 
 *
 * @name sap.ui.commons.CalloutBase#beforeOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.parent Parent control that has this Callout as a tooltip
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'beforeOpen' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself. 
 *  
 * Event is fired before a Callout is displayed. Call the preventDefault method of the event object to postpone opening. Application may use this event to start asynchronous Ajax call to load the Callout content 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself.
 *
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CalloutBase#attachBeforeOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'beforeOpen' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CalloutBase#detachBeforeOpen
 * @function
 */

/**
 * Fire event beforeOpen to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'parent' of type <code>sap.ui.core.Control</code> Parent control that has this Callout as a tooltip</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.commons.CalloutBase#fireBeforeOpen
 * @function
 */


/**
 * Is fired when the Callout has been opened 
 *
 * @name sap.ui.commons.CalloutBase#opened
 * @event
 * @since 1.11.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'opened' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself. 
 *  
 * Is fired when the Callout has been opened 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself.
 *
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.0
 * @name sap.ui.commons.CalloutBase#attachOpened
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'opened' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.0
 * @name sap.ui.commons.CalloutBase#detachOpened
 * @function
 */

/**
 * Fire event opened to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @protected
 * @since 1.11.0
 * @name sap.ui.commons.CalloutBase#fireOpened
 * @function
 */


/**
 * Is fired when the Callout has been closed 
 *
 * @name sap.ui.commons.CalloutBase#closed
 * @event
 * @since 1.11.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'closed' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself. 
 *  
 * Is fired when the Callout has been closed 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.CalloutBase</code>.<br/> itself.
 *
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.0
 * @name sap.ui.commons.CalloutBase#attachClosed
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'closed' event of this <code>sap.ui.commons.CalloutBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.0
 * @name sap.ui.commons.CalloutBase#detachClosed
 * @function
 */

/**
 * Fire event closed to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @protected
 * @since 1.11.0
 * @name sap.ui.commons.CalloutBase#fireClosed
 * @function
 */


/**
 * Adjust position of the already opened Callout window.
 * Call this method each time when the size of the opened
 * Callout window may be changed due to new or changed
 * contents.
 *
 * @name sap.ui.commons.CalloutBase.prototype.adjustPosition
 * @function

 * @type void
 * @public
 */


/**
 * Closes Callout
 *
 * @name sap.ui.commons.CalloutBase.prototype.close
 * @function

 * @type void
 * @public
 */


/**
 * Helper function to set position of the Callout window relative to the parent control. It automatically calculates and sets the correct offset, so it is recommended to use this function instead of setMyPosition and setAtPosition
 *
 * @name sap.ui.commons.CalloutBase.prototype.setPosition
 * @function
 * @param {sap.ui.core.Dock} 
 *         sMyPosition
 *         Docking position of the Callout
 * @param {sap.ui.core.Dock} 
 *         sAtPosition
 *         Docking position of the Callout

 * @type sap.ui.commons.CalloutBase
 * @public
 */


// Start of sap\ui\commons\CalloutBase.js
///**
// * This file defines behavior for the Callout control
// */

/**
 * Initializes a new callout base.
 * Overrides default popup placement and offset of the TooltipBase control
 *
 * @private
 */
sap.ui.commons.CalloutBase.prototype.init = function() {
	this.oPopup = new sap.ui.core.Popup();
	this.oPopup.setShadow(true);
	
	// resource bundle
	this.oRb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");

	// override the default position and offset of TooltipBase:
	this.setPosition(sap.ui.core.Popup.Dock.BeginBottom, sap.ui.core.Popup.Dock.BeginTop);

	// listen to global events outside of the callout to close it when needed
	this.fAnyEventHandlerProxy = jQuery.proxy(this.onAnyEvent, this);

	// make this.oPopup call this.setTip each time after its position is changed
	var that = this;
	this.oPopup._applyPosition = function(oPosition){
		sap.ui.core.Popup.prototype._applyPosition.call(this, oPosition);
		that.setTip();
	};
	
	// enable the Callout to fix its position when scolling occurs
	this.oPopup.setFollowOf(true);
};

/**
 * Destroys this instance of the callout, called by Element#destroy()
 * @private
 */
sap.ui.commons.CalloutBase.prototype.exit = function() {
	this.oPopup.close();
	this.oPopup.detachEvent("opened", this.handleOpened, this);
	this.oPopup.detachEvent("closed", this.handleClosed, this);
	this.oPopup.destroy();
	delete this.oPopup;
	delete this.oRb;
	jQuery.sap.unbindAnyEvent(this.fAnyEventHandlerProxy);
};

/**
 * Return the popup to use. Each callout has own popup.
 * (Allow multiple call-outs taking into account pin-up functionality in the next version).
 * Overrides {sap.ui.core.TooltipBase} that has a single common popup for all instances.
 * @type sap.ui.commons.Popup
 * @return The popup to use
 * @private
 */
sap.ui.commons.CalloutBase.prototype._getPopup = function(){
	return this.oPopup;
};

/**
 * Check if the given DOM reference is child of this control
 * @param {oDOMNode}
 * DOM node reference
 * @private
 */
sap.ui.commons.CalloutBase.prototype.hasChild = function(oDOMNode) {
	return oDOMNode && !!(jQuery(oDOMNode).closest(this.getDomRef()).length);
};

/**
 * Check if the given DOM reference is part of a SAPUI5 popup
 * @param {oDOMNode}
 * DOM node reference
 * @private
 */
sap.ui.commons.CalloutBase.prototype.isPopupElement = function(oDOMNode) {
	if(!oDOMNode){ return false; }
	if(this.hasChild(oDOMNode)){ return true; }

	var oStatic = sap.ui.getCore().getStaticAreaRef();
	// if oDOMNode belongs to a static area child, get z-index of this child:
	var thatZ = parseInt(jQuery(oDOMNode).closest(jQuery(oStatic).children()).css("z-index"), 10);
	// z-index of this:
	var thisZ = parseInt(this.$().css("z-index"), 10);

	// true if the element has the z-index inside of static area that is higher as the z-index of my control
	return thatZ && thisZ && thatZ >= thisZ;
};

/**
 * Set tip arrow below or above the callout window depending on the popup placement
 * @private
 */
sap.ui.commons.CalloutBase.prototype.setTip = function() {

	if (!this.oPopup || !this.oPopup.isOpen()) {
		return;
	}

	var $parent = this._currentControl.$(),
		$this = this.$(),
		$arrow = this.$("arrow"),
		$offset = $this.offset(),
		$pOffset = $parent.offset(),
		bShow = true,
		dock = {},
		tRect = {
			l:$offset.left,
			r:$offset.left+$this.outerWidth(),
			w:$this.outerWidth(),
			t:$offset.top,
			b:$offset.top+$this.outerHeight(),
			h:$this.outerHeight()
		},
		pRect = {
			l:$pOffset.left,
			r:$pOffset.left+$parent.outerWidth(),
			w:$parent.outerWidth(),
			t:$pOffset.top,
			b:$pOffset.top+$parent.outerHeight(),
			h:$parent.outerHeight()
		},
		borderWidth = ($this.outerWidth() - $this.innerWidth()) / 2,
		arrowWidth = $arrow.outerWidth() * 1.4,
		aw = $arrow.outerWidth() / 5, // (width*sqrt(2)-width)/2
		tipOffset = aw - borderWidth - 8, // offset of the tip to the border should be 8px
		myPosition = this.getMyPosition();

	// right-left pointer
	if ( tRect.r < pRect.l - tipOffset ){ dock.x = "right"; }
	else if ( tRect.l - tipOffset > pRect.r ){ dock.x = "left"; }

	// top-bottom pointer
	if ( tRect.t > pRect.b - tipOffset ){ dock.y = "top"; }
	else if ( tRect.b < pRect.t + tipOffset ){ dock.y = "bottom"; }

	if(dock.x){ // pointer on the left or right side

		var vPos = 0;
		// Set the vertical position of the pointer, relative to callout:
		//   dock top: top, dock bottom: bottom, dock center: center
		if(myPosition.indexOf("top") > -1){
			vPos = 20;
		} else if (myPosition.indexOf("bottom") > -1){
			vPos = tRect.h - 20 - arrowWidth;
		} else { // center
			vPos = (tRect.h -arrowWidth) / 2;
		}

		// adjust if it points outside of the parent or the parent is too small
		// - put it into the middle of intersection
		var tipY = tRect.t + vPos + arrowWidth / 2 + borderWidth;
		if( (tipY < pRect.t) || (tipY > pRect.b) || (pRect.t > tRect.t && pRect.b < tRect.b)){
			vPos = (Math.max(tRect.t, pRect.t) + Math.min(tRect.b, pRect.b))/2 - tRect.t -  arrowWidth / 2;
		}

		if(!!sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version == 8 && dock.x == "left"){
			tipOffset = tipOffset - 8;
		}
		$arrow.css(dock.x, tipOffset + "px");
		$arrow.css("top", vPos);

		// do not show pointer if it cannot be placed inside
		if( vPos < 0 || vPos > tRect.h - arrowWidth){
			bShow = false;
		}
	}

	if(dock.y){ // pointer on the top or bottom border
		// switch right to left in case of RTL for the relevant docking (begin & end):
		var bRtl = sap.ui.getCore().getConfiguration().getRTL();
		if(bRtl){ myPosition.replace("begin", "right").replace("end", "left"); }
		var hPos = 0;

		// Set horizontal position of the pointer, relative to callout:
		//   dock left: left, dock right: right, dock center: center
		if((myPosition.indexOf("begin") > -1) || (myPosition.indexOf("left") > -1)){
			hPos = 20;
		} else if ((myPosition.indexOf("right") > -1) || (myPosition.indexOf("end") > -1)){
			hPos = tRect.w - 20 - arrowWidth;
		} else { // center
			hPos = (tRect.w -arrowWidth) / 2;
		}

		// adjust if it points outside of the parent - put it into the middle of intersection
		var tipX = tRect.l + hPos + arrowWidth / 2 + borderWidth;
		if( (tipX < pRect.l) || (tipX > pRect.r)){
			hPos = (Math.max(tRect.l, pRect.l) + Math.min(tRect.r, pRect.r))/2 - tRect.l - arrowWidth / 2;
		}

		if(!!sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version == 8 && dock.y == "top"){
			tipOffset = tipOffset - 8;
		}
		$arrow.css(dock.y, tipOffset + "px");
		$arrow.css("left", hPos + "px");

		// do not show pointer if it cannot be placed inside
		if( hPos < 0 || hPos > tRect.w - arrowWidth){
			bShow = false;
		}
	}

	if(dock.x && dock.y || !dock.x && !dock.y){ bShow = false; }

	// hide if the pointer cannot be shown
	$arrow.toggle(bShow);
};

sap.ui.commons.CalloutBase.prototype.adjustPosition = function() {

	function _adjust(){
		// adjust popup position
		if (this.oPopup) {
			var oParentDomRef = this._currentControl.getDomRef();
			this.oPopup.setPosition(this.getMyPosition(), this.getAtPosition(), oParentDomRef, this.getOffset(), this.getCollision());
		}
	}

	setTimeout( jQuery.proxy( _adjust, this ), 0 );
};

/**
 * @see sap.ui.core.Element.prototype.focus As the callout itself is just a
 *      frame, focus the first focusable content
 * @private
 */
sap.ui.commons.CalloutBase.prototype.focus = function() {
	if(this.oPopup.isOpen()){
		// Focus the first focusable child. If the callout is empty, focus the content container div.
		// Empty callout should be focused too because the contents may appear at a later time point
		// and we need input focus to react to the ESC key.
		var $Content = this.$("cont");
		jQuery.sap.focus($Content.firstFocusableDomRef() || $Content.get(0));
	}
};

/**
 * Open the callout window.
 *
 * @param {sap.ui.core.Control}
 *       parent control that contains the callout
 * @private
 */
sap.ui.commons.CalloutBase.prototype.openPopup = function(oSC) {

	if(this.oPopup.isOpen()){ return; }
	if (sap.ui.core.TooltipBase.sOpenTimeout) {
		jQuery.sap.clearDelayedCall(sap.ui.core.TooltipBase.sOpenTimeout);
		sap.ui.core.TooltipBase.sOpenTimeout = undefined;
	}

	// TODO this._parentControl member not defined! Can't we use oSC instead?
	// fire the "beforeOpen" event and delay display of the Callout if the application requests this
	if(!this.fireEvent("beforeOpen", {parent:this._currentControl}, true, false)){
		if(!this.sCloseNowTimeout){
			// postpone opening for 200ms
			sap.ui.core.TooltipBase.sOpenTimeout = jQuery.sap.delayedCall(200, this, "openPopup", [this._currentControl]);
		}
		return;
	};

	// save parent focus info to be restored after close
	this.oParentFocusInfo = oSC.getFocusInfo();

	this.oPopup.attachEvent("opened", this.handleOpened, this);

	// use TooltipBase to open the pop-up
	sap.ui.core.TooltipBase.prototype.openPopup.call(this, oSC);

	this.adjustPosition();

	this.fireOpen({ parent : this._currentControl });
};

/**
 * Close the Callout popup.
 *
 * @public
 */
sap.ui.commons.CalloutBase.prototype.close = function() {
	if(this.oPopup.isOpen() && !this.sCloseNowTimeout){
		if (sap.ui.core.TooltipBase.sOpenTimeout) {
			jQuery.sap.clearDelayedCall(sap.ui.core.TooltipBase.sOpenTimeout);
			sap.ui.core.TooltipBase.sOpenTimeout = undefined;
		}
		this.closePopup();
	}
};

/**
 * Close CalloutBase. Fire the close event.
 *
 * @private
 */
sap.ui.commons.CalloutBase.prototype.closePopup = function() {
	var bWasOpen = this._getPopup().isOpen();

	if(this.fAnyEventHandlerProxy){
		jQuery.sap.unbindAnyEvent(this.onAnyEvent);
	}

	// This also attaches the handleClosed function to the closed-event
	sap.ui.core.TooltipBase.prototype.closePopup.call(this);

	// Set focus to the parent control.
	// Accessibility requirement: a focused Callout should set focus to its parent after close,
	// and not to a control where it could be found originally (In the scenario when a Callout
	// is opened on hover and a control inside it was clicked on with the mouse. This would
	// implicitly mean that a user has moved focus to the parent control intentionally)
	if (bWasOpen && this._currentControl && this.bFocused) {
		this._currentControl.applyFocusInfo(this.oParentFocusInfo);
		this.bFocused = false;
	}

	// inform the application
	this.fireClose({});
};

/**
 * Attaches the Callout to the Popup's closed-event and forwards it accordingly to the attached listeners
 * @private
 */
sap.ui.commons.CalloutBase.prototype.handleClosed = function(){
	if (this.oPopup){
		this.oPopup.detachEvent("closed", this.handleClosed, this);
		this.fireEvent(sap.ui.core.Popup.M_EVENTS.closed);
	}
};

/**
 * Handle the key down event for ESCAPE and Ctrl-I.
 *
 * @param {jQuery.Event}
 *            oEvent - the event that occurred on the Parent of the Callout.
 * @private
 */
sap.ui.commons.CalloutBase.prototype.onkeydown = function(oEvent) {

	var bCtrlI = oEvent.ctrlKey && oEvent.which == jQuery.sap.KeyCodes.I;
	var bEsc = oEvent.which == jQuery.sap.KeyCodes.ESCAPE;

	if(!bCtrlI && !bEsc){
		if(jQuery(oEvent.target).control(0) === this._currentControl){
			// Close callout by any key press on the parent control except for Ctrl-I
			this.close();
		}
		return;
	}

	// do not try to open the same callout twice
	if (bCtrlI) {
		if (this.oPopup.isOpen()){
			return; // this is already opened
		}
		this.bDoFocus = true; // accessibility: request focus
	}

	// let the TooltipBase remove/set standard tooltips and open/close the popup
	sap.ui.core.TooltipBase.prototype.onkeydown.call(this, oEvent);
};

/**
 * If the callout has been opened with a keyboard command, the mouse
 * pointer is most probably outside: the callout does not receive any
 * mouseover and mouseout events. Arrange a global mousemove listener
 * temporarily.
 * Use case: accessibility testing; advanced users that prefer to work with
 * keyboard instead of mouse.
 *
 * @private
 */
sap.ui.commons.CalloutBase.prototype.handleOpened = function() {
	this.oPopup.detachEvent("opened", this.handleOpened, this);

	// The following is needed only of the callout was opened with the keyboard:
	// - request focus (accessibility requirement)
	if (this.bDoFocus) {
		this.focus();
		this.bDoFocus = false;
		this.bFocused = true; // Remember to set focus to parent on close
	}
	
	this.fireEvent(sap.ui.core.Popup.M_EVENTS.opened);
	
	// - listen to mouse over events outside
	//   do always because the Callout can lose focus to child popup controls
	jQuery.sap.bindAnyEvent(this.fAnyEventHandlerProxy);
};

/**
 * Event handler for the focusin event.
 * Organize a local tab chain inside of a callout.
 * If it occurs on the focus handler elements at the beginning of the callout,
 * the focus is set to the end, and vice versa.
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.ui.commons.CalloutBase.prototype.onfocusin = function(oEvent){

	// Some element has been focused inside of the popup.
	// Focus will be set to the parent after popup close.
	this.bFocused = true;

	var oSourceDomRef = oEvent.target;

	// The same logic as in the Dialog.control:
	if (oSourceDomRef.id === this.getId() + "-fhfe") {
		// the FocusHandlingFirstElement was focused and thus the focus should move to the last element.
		jQuery.sap.focus(this.$("cont").lastFocusableDomRef());
	} else if (oSourceDomRef.id === this.getId() + "-fhee") {
		// the FocusHandlingEndElement was focused and thus the focus should move to the first element.
		jQuery.sap.focus(this.$("cont").firstFocusableDomRef());
	}
};

/**
 * When a control that has a Callout looses the focus to the Callout contents,
 * do not close it. Override the onfocusout event handler of TooltipBalse.
 * @param {jQuery.EventObject} the event indication that the focus is lost
 * @private
 */
sap.ui.commons.CalloutBase.prototype.onfocusout = function(oEvent) {
	return;
};

/**
* Handle the mouseover event: do not close if a child control has a simple tooltip
* @param {jQuery.EventObject} oEvent The event that occurred in the callout
* @private
 */
sap.ui.commons.CalloutBase.prototype.onmouseover = function(oEvent) {
	// do not close my pop-up if it was opened already
	if (this.oPopup.isOpen() && this.oPopup.getContent() == this) {
		if (this.sCloseNowTimeout){
			jQuery.sap.clearDelayedCall(this.sCloseNowTimeout);
			this.sCloseNowTimeout = null; }
		return;
	} else {
		sap.ui.core.TooltipBase.prototype.onmouseover.call(this, oEvent);
	}
};

/**
 * Handle the mouseout event of a Callout. Override the default TooltipBase behavior when 
 * the mouse pointer is over some other popup on the screen
 * @param {jQuery.EventObject} oEvent mouseout Event.
 * @private
 */
sap.ui.commons.CalloutBase.prototype.onmouseout = function(oEvent) {
	// Do not close callout when the mouse goes to a popup (like menu)
	if(this.oPopup.isOpen() && this.isPopupElement(oEvent.relatedTarget)){
		return;
	}
	sap.ui.core.TooltipBase.prototype.onmouseout.call(this, oEvent);
};

/**
 * Always close Callout when the user clicks on the parent control.
 * @param {jQuery.EventObject} the event
 * @private
 */
sap.ui.commons.CalloutBase.prototype.onmousedown = function(oEvent) {
	if(jQuery(oEvent.target).control(0) === this._currentControl){
		this.close();
	}
};

/**
 * Handles the outer event of the popup.
 * @param {sap.ui.core.Event} oControlEvent The event
 * @private
 */
sap.ui.commons.CalloutBase.prototype.onAnyEvent = function(oEvent){

	if(!this.oPopup.isOpen() || oEvent.type != "mouseover" || this.hasChild(oEvent.target)) {
		return;
	}

	// do not close if the hovered element is a top level popup or it is the parent of the callout
	var bDoNotClose = this.isPopupElement(oEvent.target) || jQuery(oEvent.target).control(0) === this._currentControl;
	if(!bDoNotClose && !this.sCloseNowTimeout && !sap.ui.core.TooltipBase.sOpenTimeout){
		// schedule close if mouse moved outside of the Popup
		this.sCloseNowTimeout = jQuery.sap.delayedCall(400, this, "closePopup");
	}
	if (bDoNotClose && this.sCloseNowTimeout) {
		// do not close when inside
		jQuery.sap.clearDelayedCall(this.sCloseNowTimeout);
		this.sCloseNowTimeout = null;
	}
};

/**
 * Set position of the Callout window relative to the parent control.
 * This function automatically calculates and sets the correct offset,
 * use it instead of <code>setMyPosition/setAtPosition</code>.
 * @param {sap.ui.core.Popup.Dock} myPosition docking position of the Callout
 * @param {sap.ui.core.Popup.Dock} atPosition docking position of the parent control
 * @return {sap.ui.commons.CalloutBase} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.CalloutBase.prototype.setPosition = function(myPosition, atPosition){

	var myPos = myPosition || sap.ui.core.Popup.Dock.BeginBottom;
	var atPos = atPosition || sap.ui.core.Popup.Dock.BeginTop;

	var myX = 0, myY = 0, atX = 0, atY = 0, gap = 5;

	if((myPos.indexOf("begin") > -1) || (myPos.indexOf("left") > -1)){
		myX = -1;
	} else if ((myPos.indexOf("right") > -1) || (myPos.indexOf("end") > -1)){
		myX = 1;
	}

	if((atPos.indexOf("begin") > -1) || (atPos.indexOf("left") > -1)){
		atX = -1;
	} else if ((atPos.indexOf("right") > -1) || (atPos.indexOf("end") > -1)){
		atX = 1;
	}

	if(myPos.indexOf("top") > -1){
		myY = -1;
	} else if (myPos.indexOf("bottom") > -1){
		myY = 1;
	}

	if(atPos.indexOf("top") > -1){
		atY = -1;
	} else if (atPos.indexOf("bottom") > -1){
		atY = 1;
	}

	var offset = ((myX - atX) * myX * atX * gap) + " " + ((myY - atY) * myY * atY * gap);

	this.setMyPosition(myPos);
	this.setAtPosition(atPos);
	this.setOffset(offset);

	return this;
};

