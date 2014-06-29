/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.layout.AbsoluteLayout.
jQuery.sap.declare("sap.ui.commons.layout.AbsoluteLayout");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new layout/AbsoluteLayout.
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
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getVerticalScrolling verticalScrolling} : sap.ui.core.Scrolling (default: sap.ui.core.Scrolling.Hidden)</li>
 * <li>{@link #getHorizontalScrolling horizontalScrolling} : sap.ui.core.Scrolling (default: sap.ui.core.Scrolling.Hidden)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPositions positions} <strong>(default aggregation)</strong> : sap.ui.commons.layout.PositionContainer[]</li></ul>
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
 * 
 * The Absolute Layout positions its child controls absolutely
 * 
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout
 */
sap.ui.core.Control.extend("sap.ui.commons.layout.AbsoluteLayout", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"setPositionOfChild", "destroyContent", "indexOfContent", "removeAllContent", "removeContent", "insertContent", "addContent", "getContent"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"visible" : {type : "boolean", group : "", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"verticalScrolling" : {type : "sap.ui.core.Scrolling", group : "Behavior", defaultValue : sap.ui.core.Scrolling.Hidden},
		"horizontalScrolling" : {type : "sap.ui.core.Scrolling", group : "Behavior", defaultValue : sap.ui.core.Scrolling.Hidden}
	},
	defaultAggregation : "positions",
	aggregations : {
    	"positions" : {type : "sap.ui.commons.layout.PositionContainer", multiple : true, singularName : "position"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.layout.AbsoluteLayout with name <code>sClassName</code> 
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
 * @name sap.ui.commons.layout.AbsoluteLayout.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.layout.AbsoluteLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#setVisible
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The overall width of the control. When not set, 100% is automatically set.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.layout.AbsoluteLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * The overall height of the control. When not set, 100% is automatically set.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.layout.AbsoluteLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#setHeight
 * @function
 */


/**
 * Getter for property <code>verticalScrolling</code>.
 * 'Auto', 'Scroll', 'Hidden', and 'None' are the available values for setting the vertical scrolling mode.
 *
 * Default value is <code>Hidden</code>
 *
 * @return {sap.ui.core.Scrolling} the value of property <code>verticalScrolling</code>
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#getVerticalScrolling
 * @function
 */

/**
 * Setter for property <code>verticalScrolling</code>.
 *
 * Default value is <code>Hidden</code> 
 *
 * @param {sap.ui.core.Scrolling} oVerticalScrolling  new value for property <code>verticalScrolling</code>
 * @return {sap.ui.commons.layout.AbsoluteLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#setVerticalScrolling
 * @function
 */


/**
 * Getter for property <code>horizontalScrolling</code>.
 * 'Auto', 'Scroll', 'Hidden', and 'None' are the available values for setting the vertical scrolling mode.
 *
 * Default value is <code>Hidden</code>
 *
 * @return {sap.ui.core.Scrolling} the value of property <code>horizontalScrolling</code>
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#getHorizontalScrolling
 * @function
 */

/**
 * Setter for property <code>horizontalScrolling</code>.
 *
 * Default value is <code>Hidden</code> 
 *
 * @param {sap.ui.core.Scrolling} oHorizontalScrolling  new value for property <code>horizontalScrolling</code>
 * @return {sap.ui.commons.layout.AbsoluteLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#setHorizontalScrolling
 * @function
 */


/**
 * Getter for aggregation <code>positions</code>.<br/>
 * Positioned child controls within the layout
 * 
 * <strong>Note</strong>: this is the default aggregation for layout/AbsoluteLayout.
 * @return {sap.ui.commons.layout.PositionContainer[]}
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#getPositions
 * @function
 */


/**
 * Inserts a position into the aggregation named <code>positions</code>.
 *
 * @param {sap.ui.commons.layout.PositionContainer}
 *          oPosition the position to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the position should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the position is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the position is inserted at 
 *             the last position        
 * @return {sap.ui.commons.layout.AbsoluteLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#insertPosition
 * @function
 */

/**
 * Adds some position <code>oPosition</code> 
 * to the aggregation named <code>positions</code>.
 *
 * @param {sap.ui.commons.layout.PositionContainer}
 *            oPosition the position to add; if empty, nothing is inserted
 * @return {sap.ui.commons.layout.AbsoluteLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#addPosition
 * @function
 */

/**
 * Removes an position from the aggregation named <code>positions</code>.
 *
 * @param {int | string | sap.ui.commons.layout.PositionContainer} vPosition the position to remove or its index or id
 * @return {sap.ui.commons.layout.PositionContainer} the removed position or null
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#removePosition
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>positions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.layout.PositionContainer[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#removeAllPositions
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.layout.PositionContainer</code> in the aggregation named <code>positions</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.layout.PositionContainer}
 *            oPosition the position whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#indexOfPosition
 * @function
 */
	

/**
 * Destroys all the positions in the aggregation 
 * named <code>positions</code>.
 * @return {sap.ui.commons.layout.AbsoluteLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.layout.AbsoluteLayout#destroyPositions
 * @function
 */


/**
 * Allows to set or change the position information of the given child control
 *
 * @name sap.ui.commons.layout.AbsoluteLayout.prototype.setPositionOfChild
 * @function
 * @param {sap.ui.core.Control} 
 *         oOControl
 *         The child control for which to change the position information; if empty or not aggregated, nothing is changed
 * @param {object} 
 *         oOPos
 *         JSON-like object which defines the position of the child control. The object is expected to have one or more from the attribute set
 * top, bottom, left, right; each with a value of type sap.ui.core.CSSSize.
 * If no object is given, the default is used which is left=0px,right=0px.

 * @type boolean
 * @public
 */


/**
 * Destroys all aggregated position containers and their child controls. Returns 'this' to allow method chaining.
 *
 * @name sap.ui.commons.layout.AbsoluteLayout.prototype.destroyContent
 * @function

 * @type sap.ui.commons.layout.AbsoluteLayout
 * @public
 */


/**
 * Checks for the provided sap.ui.core.Control in the aggregated position containers, and returns the index of the container in the positions aggregation
 * if found, or '-1' otherwise.
 *
 * @name sap.ui.commons.layout.AbsoluteLayout.prototype.indexOfContent
 * @function
 * @param {sap.ui.core.Control} 
 *         oOContent
 *         The content of which the index is looked for

 * @type int
 * @public
 */


/**
 * Removes all aggregated position containers. Returns an array of the controls contained in the removed position containers (might be empty).
 *
 * @name sap.ui.commons.layout.AbsoluteLayout.prototype.removeAllContent
 * @function

 * @type sap.ui.core.Control[]
 * @public
 */


/**
 * Removes the given control and its corresponding position container from the aggregation named 'positions'.
 *
 * @name sap.ui.commons.layout.AbsoluteLayout.prototype.removeContent
 * @function
 * @param {object} 
 *         oVContent
 *         The content control to remove, its ID, or the index of the corresponding position container in the 'positions' aggregation.

 * @type sap.ui.core.Control
 * @public
 */


/**
 * Inserts the given control and a corresponding position container into the aggregation named 'positions'. Returns 'this' to allow method chaining.
 *
 * @name sap.ui.commons.layout.AbsoluteLayout.prototype.insertContent
 * @function
 * @param {sap.ui.core.Control} 
 *         oOContent
 *         The content to insert; if empty, nothing is inserted
 * @param {int} 
 *         iIIndex
 *         The '0'-based index where the content shall be inserted at. For a negative value of iIndex, the content is inserted at position '0';
 * for a value greater than the current size of the aggregation, the content is inserted at the last position.
 * @param {object} 
 *         oOPos
 *         JSON-like object which defines the position of the child control within the layout. The object is expected to have one or more
 * from the attribute set top, bottom, left, right; each with a value of type sap.ui.core.CSSSize. If no object is given, the default is left=0px,right=0px.

 * @type sap.ui.commons.layout.AbsoluteLayout
 * @public
 */


/**
 * Adds the given control and a corresponding position container into the aggregation named 'positions'. Returns 'this' to allow method chaining.
 *
 * @name sap.ui.commons.layout.AbsoluteLayout.prototype.addContent
 * @function
 * @param {sap.ui.core.Control} 
 *         oOContent
 *         The content to add; if empty, nothing is inserted.
 * @param {object} 
 *         oOPos
 *         JSON-like object which defines the position of the child control in the layout. The object is expected to have one or more from the attribute set
 * top, bottom, left, right; each with a value of type sap.ui.core.CSSSize. If no object is given, the default is left=0px,right=0px

 * @type sap.ui.commons.layout.AbsoluteLayout
 * @public
 */


/**
 * Returns an array of the controls contained in the aggregated position containers (might be empty).
 *
 * @name sap.ui.commons.layout.AbsoluteLayout.prototype.getContent
 * @function

 * @type sap.ui.core.Control[]
 * @public
 */


// Start of sap\ui\commons\layout\AbsoluteLayout.js
jQuery.sap.require("sap.ui.commons.layout.PositionContainer");

(function() {

//**** Overridden API Functions ****

sap.ui.commons.layout.AbsoluteLayout.prototype.setWidth = function(sWidth) {
	return setProp(this, "width", sWidth, "LYT_SIZE");
};


sap.ui.commons.layout.AbsoluteLayout.prototype.setHeight = function(sHeight) {
	return setProp(this, "height", sHeight, "LYT_SIZE");
};


sap.ui.commons.layout.AbsoluteLayout.prototype.setVerticalScrolling = function(oVerticalScrolling) {
	return setProp(this, "verticalScrolling", oVerticalScrolling, "LYT_SCROLL");
};


sap.ui.commons.layout.AbsoluteLayout.prototype.setHorizontalScrolling = function(oHorizontalScrolling) {
	return setProp(this, "horizontalScrolling", oHorizontalScrolling, "LYT_SCROLL");
};


sap.ui.commons.layout.AbsoluteLayout.prototype.insertPosition = function(oPosition, iIndex) {
	var bHasDomRef = !!this.getDomRef();
	this.insertAggregation("positions", oPosition, iIndex, bHasDomRef);
	if(bHasDomRef && oPosition && oPosition.getControl()) {
		this.contentChanged(oPosition, "CTRL_ADD");
	}
	return this;
};


sap.ui.commons.layout.AbsoluteLayout.prototype.addPosition = function(oPosition) {
	var bHasDomRef = !!this.getDomRef();
	this.addAggregation("positions", oPosition, bHasDomRef);
	if(bHasDomRef && oPosition && oPosition.getControl()) {
		this.contentChanged(oPosition, "CTRL_ADD");
	}
	return this;
};


sap.ui.commons.layout.AbsoluteLayout.prototype.removePosition = function(vPosition) {
	var bHasDomRef = !!this.getDomRef();
	var oRemovedPosition = this.removeAggregation("positions", vPosition, bHasDomRef);
	if(oRemovedPosition){
		cleanup([oRemovedPosition]);
		this.contentChanged(oRemovedPosition, "CTRL_REMOVE");
	}
	return oRemovedPosition;
};


sap.ui.commons.layout.AbsoluteLayout.prototype.removeAllPositions = function() {
	cleanup(this.getPositions());
	var bHasDomRef = !!this.getDomRef();
	var aRemovedPositions = this.removeAllAggregation("positions", bHasDomRef);
	if(bHasDomRef) {
		this.contentChanged(aRemovedPositions, "CTRL_REMOVE_ALL");
	}
	return aRemovedPositions;
};


sap.ui.commons.layout.AbsoluteLayout.prototype.destroyPositions = function() {
	cleanup(this.getPositions());
	var bHasDomRef = !!this.getDomRef();
	this.destroyAggregation("positions", bHasDomRef);
	if(bHasDomRef) {
		this.contentChanged(null, "CTRL_REMOVE_ALL");
	}
	return this;
};



//**** Additional API Functions ****

sap.ui.commons.layout.AbsoluteLayout.prototype.getContent = function() {
	var aControls = [];
	var aPositions = this.getPositions();
	for(var index=0; index<aPositions.length; index++) {
		aControls.push(aPositions[index].getControl());
	}
	return aControls;
};


sap.ui.commons.layout.AbsoluteLayout.prototype.addContent = function(oContent, oPos) {
	var oPosition = sap.ui.commons.layout.PositionContainer.createPosition(oContent, oPos);
	this.addPosition(oPosition);
	return this;
};


sap.ui.commons.layout.AbsoluteLayout.prototype.insertContent = function(oContent, iIndex, oPos) {
	var oPosition = sap.ui.commons.layout.PositionContainer.createPosition(oContent, oPos);
	this.insertPosition(oPosition, iIndex);
	return this;
};


sap.ui.commons.layout.AbsoluteLayout.prototype.removeContent = function(vContent) {
	var iIndex = vContent;
	if (typeof(vContent) == "string") { // ID of the element is given
		vContent = sap.ui.getCore().byId(vContent);
	}
	if (typeof(vContent) == "object") { // the element itself is given or has just been retrieved
		iIndex = this.indexOfContent(vContent);
	}
	if(iIndex >= 0 && iIndex < this.getContent().length) {
		this.removePosition(iIndex);
		return vContent;
	}
	return null;
};


sap.ui.commons.layout.AbsoluteLayout.prototype.removeAllContent = function() {
	var aControls = this.getContent();
	this.removeAllPositions();
	return aControls;
};


sap.ui.commons.layout.AbsoluteLayout.prototype.indexOfContent = function(oContent) {
	var aControls = this.getContent();
	for(var index=0; index<aControls.length; index++) {
		if(oContent === aControls[index]){
			return index;
		}
	}
	return -1;
};


sap.ui.commons.layout.AbsoluteLayout.prototype.destroyContent = function() {
	this.destroyPositions();
	return this;
};


sap.ui.commons.layout.AbsoluteLayout.prototype.setPositionOfChild = function(oControl, oPos) {
	var iIdx = this.indexOfContent(oControl);
	if(iIdx >= 0){
		var oPosition = this.getPositions()[iIdx];
		oPosition.updatePosition(oPos);
		return true;
	}
	return false;
};



//**** Other Functions ****

/**
 * @see sap.ui.commons.layout.PositionContainer#getComputedPosition
 *
 * @private
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.getPositionOfChild = function(oControl){
	var iIdx = this.indexOfContent(oControl);
	if(iIdx >= 0){
		//Adapt when width/height attribute on control is set
		var oPosition = this.getPositions()[iIdx];
		return oPosition.getComputedPosition();
	}
	return {};
};


/**
 * Called when the control is destroyed.
 *
 * @private
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.exit = function(){
	cleanup(this.getPositions());
};


/**
 * Called by the Renderer before the control is rendered.
 * Attention: Do not mix it up with onBeforeRendering!
 *
 * @private
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.doBeforeRendering = function() {
	var aPositions = this.getPositions();
	if(!aPositions || aPositions.length == 0) {
		return;
	}

	for(var index=0; index<aPositions.length; index++) {
		var oPosition = aPositions[index];
		oPosition.reinitializeEventHandlers(true);
		adaptChildControl(oPosition, true);
	}
};


/**
 * Called after the control is rendered.
 *
 * @private
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.onAfterRendering = function() {
	var aPositions = this.getPositions();
	if(!aPositions || aPositions.length == 0) {
		return;
	}

	for(var index=0; index<aPositions.length; index++) {
		aPositions[index].reinitializeEventHandlers();
	}
};


/**
 * Cleanup modifications of the given control.
 *
 * @private
 */
sap.ui.commons.layout.AbsoluteLayout.cleanUpControl = function(oControl) {
	if(oControl && oControl[SAVED_DELEGATOR]){
		oControl.removeDelegate(oControl[SAVED_DELEGATOR]);
		oControl[SAVED_DELEGATOR] = undefined;
	}
};


/**
 * Handles changes on an aggregated position container when it is already in the Dom.
 *
 * @private
 */
sap.ui.commons.layout.AbsoluteLayout.prototype.contentChanged = function(oPosition, sChangeType) {
	switch(sChangeType) {
		case "CTRL_POS":
			sap.ui.commons.layout.AbsoluteLayoutRenderer.updatePositionStyles(oPosition);
			adaptChildControl(oPosition);
			oPosition.reinitializeEventHandlers();
			break;
		case "CTRL_CHANGE":
			adaptChildControl(oPosition, true);
			sap.ui.commons.layout.AbsoluteLayoutRenderer.updatePositionedControl(oPosition);
			oPosition.reinitializeEventHandlers();
			break;
		case "CTRL_REMOVE":
			sap.ui.commons.layout.AbsoluteLayoutRenderer.removePosition(oPosition);
			oPosition.reinitializeEventHandlers(true);
			break;
		case "CTRL_REMOVE_ALL":
			sap.ui.commons.layout.AbsoluteLayoutRenderer.removeAllPositions(this);
			var aPositions = oPosition;
			if(aPositions) {
				for(var index=0; index<aPositions.length; index++) {
					aPositions[index].reinitializeEventHandlers(true);
				}
			}
			break;
		case "CTRL_ADD":
			adaptChildControl(oPosition, true);
			sap.ui.commons.layout.AbsoluteLayoutRenderer.insertPosition(this, oPosition);
			oPosition.reinitializeEventHandlers();
			break;
		case "LYT_SCROLL":
			sap.ui.commons.layout.AbsoluteLayoutRenderer.updateLayoutScolling(this);
			break;
		case "LYT_SIZE":
			sap.ui.commons.layout.AbsoluteLayoutRenderer.updateLayoutSize(this);
			break;
	}
};



//**** Private Helper Functions ****

//Constant which defines the "save location" for the used delegator object
var SAVED_DELEGATOR = "__absolutelayout__delegator";

/**
 * Cleanup modifications of all child controls of the given positions.
 *
 * @private
 */
var cleanup = function(aPositions) {
	for(var index=0; index<aPositions.length; index++) {
		var oPosition = aPositions[index];
		var oChildControl = oPosition.getControl();
		if(oChildControl) {
			sap.ui.commons.layout.AbsoluteLayout.cleanUpControl(oChildControl);
		}
	}
};


/**
 * (Re-)Initialize listening to child rerendering
 *
 * @private
 */
var adaptChildControl = function(oPosition, bRegisterOnly) {
	var oChildControl = oPosition.getControl();
	if(oChildControl) {
		sap.ui.commons.layout.AbsoluteLayout.cleanUpControl(oChildControl);

		if(!bRegisterOnly) {
			adaptControlSize(oChildControl);
		}

		var oDelegate = (function(oControl) {
			return {
				onAfterRendering: function(){
					adaptControlSize(oControl);
				}
			};
		}(oChildControl));

		oChildControl[SAVED_DELEGATOR] = oDelegate;
		oChildControl.addDelegate(oDelegate, true);
	}
};


/**
 * Adapt the sizes of controls if necessary.
 *
 * @private
 */
var adaptControlSize = function(oControl){
	var bAdapted = false;
	if(oControl.getParent() && oControl.getParent().getComputedPosition) {
		var oPos = oControl.getParent().getComputedPosition();
		if(oPos.top && oPos.bottom || oPos.height){
			jQuery(oControl.getDomRef()).height("100%");
			bAdapted = true;
		}
		if(oPos.left && oPos.right || oPos.width){
			jQuery(oControl.getDomRef()).width("100%");
			bAdapted = true;
		}
		if(bAdapted) {
			sap.ui.commons.layout.AbsoluteLayoutRenderer.updatePositionStyles(oControl.getParent());
		}
	}
	return bAdapted;
};


/**
 * Sets the value of the given property and triggers Dom change if
 * possible.
 *
 * @private
 */
var setProp = function(oThis, sProp, oValue, sChangeType) {
	var bHasDomRef = !!oThis.getDomRef();
	oThis.setProperty(sProp, oValue, bHasDomRef);
	if(bHasDomRef) {
		oThis.contentChanged(null, sChangeType);
	}
	return oThis;
};


}());