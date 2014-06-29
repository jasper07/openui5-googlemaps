/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.PositionContainer.
jQuery.sap.declare("sap.ui.commons.layout.PositionContainer");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new layout/PositionContainer.
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
 * <li>{@link #getTop top} : sap.ui.core.CSSSize</li>
 * <li>{@link #getBottom bottom} : sap.ui.core.CSSSize</li>
 * <li>{@link #getLeft left} : sap.ui.core.CSSSize</li>
 * <li>{@link #getRight right} : sap.ui.core.CSSSize</li>
 * <li>{@link #getCenterHorizontally centerHorizontally} : boolean (default: false)</li>
 * <li>{@link #getCenterVertically centerVertically} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getControl control} <strong>(default aggregation)</strong> : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
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
 * Is used to specify the position of a control in the AbsoluteLayout
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.layout.PositionContainer
 */
sap.ui.core.Element.extend("sap.ui.commons.layout.PositionContainer", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"updatePosition"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"top" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"bottom" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"left" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"right" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"centerHorizontally" : {type : "boolean", group : "Dimension", defaultValue : false},
		"centerVertically" : {type : "boolean", group : "Dimension", defaultValue : false}
	},
	defaultAggregation : "control",
	aggregations : {
    	"control" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.layout.PositionContainer with name <code>sClassName</code> 
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
 * @name sap.ui.commons.layout.PositionContainer.extend
 * @function
 */


/**
 * Getter for property <code>top</code>.
 * Defines the distance to the top of the layout (as specified in HTML)
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>top</code>
 * @public
 * @name sap.ui.commons.layout.PositionContainer#getTop
 * @function
 */

/**
 * Setter for property <code>top</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sTop  new value for property <code>top</code>
 * @return {sap.ui.commons.layout.PositionContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.PositionContainer#setTop
 * @function
 */


/**
 * Getter for property <code>bottom</code>.
 * Defines the distance to the bottom of the layout (as specified in HTML)
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>bottom</code>
 * @public
 * @name sap.ui.commons.layout.PositionContainer#getBottom
 * @function
 */

/**
 * Setter for property <code>bottom</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sBottom  new value for property <code>bottom</code>
 * @return {sap.ui.commons.layout.PositionContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.PositionContainer#setBottom
 * @function
 */


/**
 * Getter for property <code>left</code>.
 * Defines the distance to the left of the layout (as specified in HTML)
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>left</code>
 * @public
 * @name sap.ui.commons.layout.PositionContainer#getLeft
 * @function
 */

/**
 * Setter for property <code>left</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sLeft  new value for property <code>left</code>
 * @return {sap.ui.commons.layout.PositionContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.PositionContainer#setLeft
 * @function
 */


/**
 * Getter for property <code>right</code>.
 * Defines the distance to the right of the layout (as specified in HTML)
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>right</code>
 * @public
 * @name sap.ui.commons.layout.PositionContainer#getRight
 * @function
 */

/**
 * Setter for property <code>right</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sRight  new value for property <code>right</code>
 * @return {sap.ui.commons.layout.PositionContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.PositionContainer#setRight
 * @function
 */


/**
 * Getter for property <code>centerHorizontally</code>.
 * Indicates whether this container shall be centered horizontally within the AbsoluteLayout area.
 * The values of the attributes left and right are ignored when this feature is activated.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>centerHorizontally</code>
 * @public
 * @name sap.ui.commons.layout.PositionContainer#getCenterHorizontally
 * @function
 */

/**
 * Setter for property <code>centerHorizontally</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bCenterHorizontally  new value for property <code>centerHorizontally</code>
 * @return {sap.ui.commons.layout.PositionContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.PositionContainer#setCenterHorizontally
 * @function
 */


/**
 * Getter for property <code>centerVertically</code>.
 * Indicates whether this container should be centered vertically within the AbsoluteLayout area.
 * The values of the attributes top and bottom are ignored when this feature is activated.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>centerVertically</code>
 * @public
 * @name sap.ui.commons.layout.PositionContainer#getCenterVertically
 * @function
 */

/**
 * Setter for property <code>centerVertically</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bCenterVertically  new value for property <code>centerVertically</code>
 * @return {sap.ui.commons.layout.PositionContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.PositionContainer#setCenterVertically
 * @function
 */


/**
 * Getter for aggregation <code>control</code>.<br/>
 * Child control of the position container
 * 
 * <strong>Note</strong>: this is the default aggregation for layout/PositionContainer.
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.ui.commons.layout.PositionContainer#getControl
 * @function
 */


/**
 * Setter for the aggregated <code>control</code>.
 * @param {sap.ui.core.Control} oControl
 * @return {sap.ui.commons.layout.PositionContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.PositionContainer#setControl
 * @function
 */
	

/**
 * Destroys the control in the aggregation 
 * named <code>control</code>.
 * @return {sap.ui.commons.layout.PositionContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.PositionContainer#destroyControl
 * @function
 */


/**
 * Updates the position properties of the container according to the given position in JSON style.
 *
 * @name sap.ui.commons.layout.PositionContainer.prototype.updatePosition
 * @function
 * @param {object} 
 *         oOPos
 *         JSON-like object which defines the position of the child control in the absolute layout. The object is expected
 * to have one or more out of the attributes top, bottom, left, right (each with a value of type sap.ui.core.CSSSize). If no object
 * is given, nothing is updated.

 * @type void
 * @public
 */


// Start of sap\ui\commons\layout\PositionContainer.js
(function() {

//**** Overridden API Functions ****

sap.ui.commons.layout.PositionContainer.prototype.setControl = function(oControl) {
	cleanup(this);

	if(this.getDomRef()) {
		this.setAggregation("control", oControl, true);
		notifyLayoutOnChange(this, oControl ? "CTRL_CHANGE" : "CTRL_REMOVE");
	}else{
		if(this.getParent() && this.getParent().getDomRef()){
			this.setAggregation("control", oControl, true);
			if(oControl) {
				notifyLayoutOnChange(this, "CTRL_ADD");
			}
		}else{
			this.setAggregation("control", oControl);
		}
	}
	
	if(oControl){
		oControl.attachEvent("_change", onPropertyChanges, this);
	}

	return this;
};


sap.ui.commons.layout.PositionContainer.prototype.destroyControl = function() {
	cleanup(this);

	var bSuppressRerendering = !!this.getDomRef();
	this.destroyAggregation("control", bSuppressRerendering);
	if(bSuppressRerendering) {
		notifyLayoutOnChange(this, "CTRL_REMOVE");
	}

	return this;
};


sap.ui.commons.layout.PositionContainer.prototype.setTop = function(sTop) {
	setProp(this, "top", sTop, true);
	return this;
};


sap.ui.commons.layout.PositionContainer.prototype.setBottom = function(sBottom) {
	setProp(this, "bottom", sBottom, true);
	return this;
};


sap.ui.commons.layout.PositionContainer.prototype.setLeft = function(sLeft) {
	setProp(this, "left", sLeft, true);
	return this;
};


sap.ui.commons.layout.PositionContainer.prototype.setRight = function(sRight) {
	setProp(this, "right", sRight, true);
	return this;
};


sap.ui.commons.layout.PositionContainer.prototype.setCenterHorizontally = function(bCenterHorizontally) {
	setProp(this, "centerHorizontally", bCenterHorizontally, true);
	return this;
};


sap.ui.commons.layout.PositionContainer.prototype.setCenterVertically = function(bCenterVertically) {
	setProp(this, "centerVertically", bCenterVertically, true);
	return this;
};


sap.ui.commons.layout.PositionContainer.prototype.updatePosition = function(oPos) {
	if(!oPos) {
		oPos = {};
	}

	setProp(this, "centerHorizontally", oPos.centerHorizontally ? oPos.centerHorizontally : null);
	setProp(this, "centerVertically", oPos.centerVertically ? oPos.centerVertically : null);
	setProp(this, "left", oPos.left ? oPos.left : null);
	setProp(this, "right", oPos.right ? oPos.right : null);
	setProp(this, "top", oPos.top ? oPos.top : null);
	var bNotify = setProp(this, "bottom", oPos.bottom ? oPos.bottom : null);
	if(bNotify) {
		notifyLayoutOnChange(this, "CTRL_POS");
	}

};


//**** Other Functions ****

/**
 * Checks the position information for the child control against the width/height property and
 * returns the compute position.
 *
 * @private
 */
sap.ui.commons.layout.PositionContainer.prototype.getComputedPosition = function() {
	var sTop = this.getTop();
	var sBottom = this.getBottom();
	var sLeft = this.getLeft();
	var sRight = this.getRight();
	var sWidth = null;
	var sHeight = null;

	var oControl = this.getControl();

	if(oControl){
		if(this.getCenterHorizontally()){
			sLeft = "50%";
			sRight = null;
		}else{
			if(!checkProperty(this, oControl, "width", "left", sLeft, "right", sRight)) {
				sRight = undefined;
			}
			if(!sLeft && !sRight) {
				sLeft = "0px";
			}
		}

		if(this.getCenterVertically()){
			sTop = "50%";
			sBottom = null;
		}else{
			if(!checkProperty(this, oControl, "height", "top", sTop, "bottom", sBottom)) {
				sBottom = undefined;
			}
			if(!sTop && !sBottom) {
				sTop = "0px";
			}
		}

		sWidth = getContainerDimension(oControl, "width");
		sHeight = getContainerDimension(oControl, "height");
	}

	return {top: sTop, bottom: sBottom, left: sLeft, right: sRight, width: sWidth, height: sHeight};
};


/**
 * Factory for <code>sap.ui.commons.layout.PositionContainer</code> using a given
 * child control and a position in JSON style.
 *
 * @private
 */
sap.ui.commons.layout.PositionContainer.createPosition = function(oControl, oPos) {
	var oPosition = new sap.ui.commons.layout.PositionContainer();
	oPosition.setControl(oControl);
	if(oPos) {
		if(oPos.left) {
			oPosition.setLeft(oPos.left);
		}
		if(oPos.right) {
			oPosition.setRight(oPos.right);
		}
		if(oPos.top) {
			oPosition.setTop(oPos.top);
		}
		if(oPos.bottom) {
			oPosition.setBottom(oPos.bottom);
		}
		if(oPos.centerHorizontally) {
			oPosition.setCenterHorizontally(oPos.centerHorizontally);
		}
		if(oPos.centerVertically) {
			oPosition.setCenterVertically(oPos.centerVertically);
		}
	}
	return oPosition;
};


/**
 * Cleans up and optionally reinitalizes the event handler registrations of the element.
 *
 * @private
 */
sap.ui.commons.layout.PositionContainer.prototype.reinitializeEventHandlers = function(bCleanupOnly) {
	if(this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
	if(!bCleanupOnly && this.getDomRef() && (this.getCenterHorizontally() || this.getCenterVertically())) {
		var that = this;
		var onResize = function(){
			var jRef = jQuery(that.getDomRef());
			if(that.getCenterHorizontally()){
				jRef.css("margin-left", "-"+jRef.children().outerWidth()/2+"px");
			}
			if(that.getCenterVertically()){
				jRef.css("margin-top", "-"+jRef.children().outerHeight()/2+"px");
			}
		};
		this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(), onResize);
		onResize();
	}
};


/**
 * Called when the element is destroyed.
 *
 * @private
 */
sap.ui.commons.layout.PositionContainer.prototype.exit = function(oPos) {
	this.reinitializeEventHandlers(true);
};


/**
 * Called when the element is instanciated.
 *
 * @private
 */
sap.ui.commons.layout.PositionContainer.prototype.init = function() {
	this._disableWidthCheck = true;
	this._disableHeightCheck = false;
};


//**** Private Helper Functions ****

/**
 * Sets the value of the given property and notifies the layout
 * if necessary and desired.
 *
 * @private
 */
var setProp = function(oThis, sProp, oValue, bNotifyLayout) {
	var bSuppressRerendering = !!oThis.getDomRef();
	oThis.setProperty(sProp, oValue, bSuppressRerendering);
	if(bSuppressRerendering && bNotifyLayout) {
		notifyLayoutOnChange(oThis, "CTRL_POS");
	}
	return bSuppressRerendering;
};


/**
 * Notifies the layout of this container about the change of the given type.
 *
 * @private
 */
var notifyLayoutOnChange = function(oThis, sChangeType) {
	var oLayout = oThis.getParent();
	if(oLayout) {
		oLayout.contentChanged(oThis, sChangeType);
	}
};


/**
 * @see sap.ui.commons.layout.AbsoluteLayout#cleanUpControl
 *
 * @private
 */
var cleanup = function(oThis) {
	var oControl = oThis.getControl();
	if(oControl) {
		sap.ui.commons.layout.AbsoluteLayout.cleanUpControl(oControl);
		oControl.detachEvent("_change", onPropertyChanges, oThis);
	}
};


/**
 * Checks whether the position settings fits to the set height/width attribute of a control.
 *
 * @private
 */
var checkProperty = function(oPositionContainer, oControl, sProp, sPos1, sVal1, sPos2, sVal2) {
	if(sVal1 && sVal2) {
		var oLayout = oPositionContainer.getParent();
		var oProp = getPropertyInfo(oControl, sProp);
		if(oProp) {
			var val = oControl[oProp._sGetter]();
			if(!(!val || val == "" || val == "auto" || val == "inherit")) {
				jQuery.sap.log.warning("Position "+sPos2+"="+sVal2+" ignored, because child control "+oControl.getId()+" has fixed "+sProp+" ("+val+").",
						"", "AbsoluteLayout '"+(oLayout ? oLayout.getId() : "_undefined")+"'");
				return false;
			}
		}else{
			if((sProp === "width" && !oPositionContainer._disableWidthCheck) || (sProp === "height" && !oPositionContainer._disableHeightCheck)){
				jQuery.sap.log.warning("Position "+sPos2+"="+sVal2+" ignored, because child control "+oControl.getId()+" not resizable.",
						"", "AbsoluteLayout '"+(oLayout ? oLayout.getId() : "_undefined")+"'");
				return false;
			}
		}
	}
	return true;
};


/**
 * Checks whether the given control has a property with the given name and type 'sap.ui.core.CSSSize' and
 * returns the corresponding metadata object.
 *
 * @private
 */
var getPropertyInfo = function(oControl, sPropertyName) {
	var oMetadata = oControl.getMetadata();
	oMetadata._enrichChildInfos();
	var oPropertyInfo = oMetadata.getAllProperties()[sPropertyName];
	if(oPropertyInfo && sap.ui.base.DataType.getType(oPropertyInfo.type) == sap.ui.base.DataType.getType("sap.ui.core.CSSSize")) {
		return oPropertyInfo;
	}
	return null;
};


/**
 * Returns the value width or height property (depending of <code>sDim</code>) of the given
 * control if the width or height is specified in %.
 *
 * @private
 */
var getContainerDimension = function(oControl, sDim){
	var oProp = getPropertyInfo(oControl, sDim);
	if(oProp) {
		var val = oControl[oProp._sGetter]();
		if(val && jQuery.sap.endsWith(val, "%")) {
			return val;
		}
	}
	return null;
};


/**
 * Handler on child control to check for property changes on width or height attribute.
 *
 * @private
 */
var onPropertyChanges = function(oEvent){
	var sProp = oEvent.getParameter("name");
	var parent = this.getParent();
	
	if((sProp === "width" || sProp === "height") && parent && parent.getDomRef()){
		notifyLayoutOnChange(this, "CTRL_POS");
	}
};

}());