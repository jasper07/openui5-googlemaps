/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Bar.
jQuery.sap.declare("sap.m.Bar");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Bar.
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
 * <li>{@link #getEnableFlexBox enableFlexBox} : boolean (default: false)</li>
 * <li>{@link #getTranslucent translucent} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContentLeft contentLeft} : sap.ui.core.Control[]</li>
 * <li>{@link #getContentMiddle contentMiddle} : sap.ui.core.Control[]</li>
 * <li>{@link #getContentRight contentRight} : sap.ui.core.Control[]</li></ul>
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
 * A bar that may be used as a header of a page. It has the capability to center a content like a title, while having few controls on the left and right side.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.Bar
 */
sap.ui.core.Control.extend("sap.m.Bar", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"enableFlexBox" : {type : "boolean", group : "Misc", defaultValue : false, deprecated: true},
		"translucent" : {type : "boolean", group : "Appearance", defaultValue : false, deprecated: true}
	},
	aggregations : {
    	"contentLeft" : {type : "sap.ui.core.Control", multiple : true, singularName : "contentLeft"}, 
    	"contentMiddle" : {type : "sap.ui.core.Control", multiple : true, singularName : "contentMiddle"}, 
    	"contentRight" : {type : "sap.ui.core.Control", multiple : true, singularName : "contentRight"}
	}
}});


/**
 * Creates a new subclass of class sap.m.Bar with name <code>sClassName</code> 
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
 * @name sap.m.Bar.extend
 * @function
 */


/**
 * Getter for property <code>enableFlexBox</code>.
 * If this flag is set to true, contentMiddle will be rendered as a HBox and layoutData can be used to allocate available space
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>enableFlexBox</code>
 * @public
 * @deprecated Since version 1.16. 
 * This property is no longer supported, instead, contentMiddle will always occupy 100% width when no contentLeft and contentRight are being set.
 * @name sap.m.Bar#getEnableFlexBox
 * @function
 */

/**
 * Setter for property <code>enableFlexBox</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEnableFlexBox  new value for property <code>enableFlexBox</code>
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16. 
 * This property is no longer supported, instead, contentMiddle will always occupy 100% width when no contentLeft and contentRight are being set.
 * @name sap.m.Bar#setEnableFlexBox
 * @function
 */


/**
 * Getter for property <code>translucent</code>.
 * A boolean value indicating whether the bar is partially translucent.
 * It is only applied for touch devices.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>translucent</code>
 * @public
 * @since 1.12
 * @deprecated Since version 1.18.6. 
 * This property has no effect since release 1.18.6 and should not be used. Translucent bar may overlay an input and make it difficult to edit.
 * @name sap.m.Bar#getTranslucent
 * @function
 */

/**
 * Setter for property <code>translucent</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bTranslucent  new value for property <code>translucent</code>
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @since 1.12
 * @deprecated Since version 1.18.6. 
 * This property has no effect since release 1.18.6 and should not be used. Translucent bar may overlay an input and make it difficult to edit.
 * @name sap.m.Bar#setTranslucent
 * @function
 */


/**
 * Getter for aggregation <code>contentLeft</code>.<br/>
 * this is the left content area, usually containing a button or an app icon. If this is overlapped by the right content, its content will disappear and text will show an elipsis.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.Bar#getContentLeft
 * @function
 */


/**
 * Inserts a contentLeft into the aggregation named <code>contentLeft</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContentLeft the contentLeft to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the contentLeft should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the contentLeft is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the contentLeft is inserted at 
 *             the last position        
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#insertContentLeft
 * @function
 */

/**
 * Adds some contentLeft <code>oContentLeft</code> 
 * to the aggregation named <code>contentLeft</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContentLeft the contentLeft to add; if empty, nothing is inserted
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#addContentLeft
 * @function
 */

/**
 * Removes an contentLeft from the aggregation named <code>contentLeft</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContentLeft the contentLeft to remove or its index or id
 * @return {sap.ui.core.Control} the removed contentLeft or null
 * @public
 * @name sap.m.Bar#removeContentLeft
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>contentLeft</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Bar#removeAllContentLeft
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>contentLeft</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContentLeft the contentLeft whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.Bar#indexOfContentLeft
 * @function
 */
	

/**
 * Destroys all the contentLeft in the aggregation 
 * named <code>contentLeft</code>.
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#destroyContentLeft
 * @function
 */


/**
 * Getter for aggregation <code>contentMiddle</code>.<br/>
 * This is the middle content area. Controls such as label, segmented buttons or select should be placed here. Content that is placed here will be centrally positioned, if there is enough space. If the right or left content overlaps the middle content, the middle content will be centered in the space between the left and the right content.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.Bar#getContentMiddle
 * @function
 */


/**
 * Inserts a contentMiddle into the aggregation named <code>contentMiddle</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContentMiddle the contentMiddle to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the contentMiddle should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the contentMiddle is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the contentMiddle is inserted at 
 *             the last position        
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#insertContentMiddle
 * @function
 */

/**
 * Adds some contentMiddle <code>oContentMiddle</code> 
 * to the aggregation named <code>contentMiddle</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContentMiddle the contentMiddle to add; if empty, nothing is inserted
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#addContentMiddle
 * @function
 */

/**
 * Removes an contentMiddle from the aggregation named <code>contentMiddle</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContentMiddle the contentMiddle to remove or its index or id
 * @return {sap.ui.core.Control} the removed contentMiddle or null
 * @public
 * @name sap.m.Bar#removeContentMiddle
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>contentMiddle</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Bar#removeAllContentMiddle
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>contentMiddle</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContentMiddle the contentMiddle whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.Bar#indexOfContentMiddle
 * @function
 */
	

/**
 * Destroys all the contentMiddle in the aggregation 
 * named <code>contentMiddle</code>.
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#destroyContentMiddle
 * @function
 */


/**
 * Getter for aggregation <code>contentRight</code>.<br/>
 * this is the right content area. Controls such as action buttons or search field could be placed here.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.Bar#getContentRight
 * @function
 */


/**
 * Inserts a contentRight into the aggregation named <code>contentRight</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContentRight the contentRight to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the contentRight should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the contentRight is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the contentRight is inserted at 
 *             the last position        
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#insertContentRight
 * @function
 */

/**
 * Adds some contentRight <code>oContentRight</code> 
 * to the aggregation named <code>contentRight</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContentRight the contentRight to add; if empty, nothing is inserted
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#addContentRight
 * @function
 */

/**
 * Removes an contentRight from the aggregation named <code>contentRight</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContentRight the contentRight to remove or its index or id
 * @return {sap.ui.core.Control} the removed contentRight or null
 * @public
 * @name sap.m.Bar#removeContentRight
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>contentRight</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Bar#removeAllContentRight
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>contentRight</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContentRight the contentRight whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.Bar#indexOfContentRight
 * @function
 */
	

/**
 * Destroys all the contentRight in the aggregation 
 * named <code>contentRight</code>.
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#destroyContentRight
 * @function
 */


// Start of sap\m\Bar.js
/**
 * @private
 */

sap.m.Bar.prototype.onBeforeRendering = function() {
	this._removeAllListeners();
};

sap.m.Bar.prototype.onAfterRendering = function() {
	this._handleResize();
};

/**
 * Called when the control is destroyed.
 *
 * @private
 */
sap.m.Bar.prototype.exit = function() {
	this._removeAllListeners();

	if(this._oflexBox) {

		this._oflexBox.destroy();
		this._oflexBox = null;

	}

	this._$MidBarPlaceHolder = null;
	this._$RightBar = null;
	this._$LeftBar = null;
};

/**
 * @private
 */
sap.m.Bar._aResizeHandlers = ["_sResizeListenerId", "_sResizeListenerIdMid", "_sResizeListenerIdRight", "_sResizeListenerIdLeft"];

/**
 * removes all resize listeners, that the bar could have registered.
 * @private
 */
sap.m.Bar.prototype._removeAllListeners = function() {
	var that = this;

	sap.m.Bar._aResizeHandlers.forEach(function(sItem) {

		that._removeListenerFailsave(sItem);

	});
};

/**
 * Removes a listener with the specified name and sets it to null, if the listener is defined.
 * @param sListenerName the name of the listener that has to be removed
 *
 * @private
 */
sap.m.Bar.prototype._removeListenerFailsave = function(sListenerName) {
	if (this[sListenerName]) {

		sap.ui.core.ResizeHandler.deregister(this[sListenerName]);
		this[sListenerName] = null;

	}
};

/**
 * Invoked, when bar is rerendered, its size changed, or the size of one for the content bars changed
 * @private
 */
sap.m.Bar.prototype._handleResize = function() {
	this._removeAllListeners();

	var bContentLeft = !!this.getContentLeft().length,
		bContentMiddle = !!this.getContentMiddle().length,
		bContentRight = !!this.getContentRight().length;

	//No content was set yet - no need to listen to resizes
	if(!bContentLeft && !bContentMiddle && !bContentRight) {
		return;
	}

	this._$LeftBar = this.$("BarLeft");
	this._$RightBar = this.$("BarRight");
	this._$MidBarPlaceHolder = this.$("BarPH");

	this._updatePosition(bContentLeft, bContentMiddle, bContentRight);

	this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(), jQuery.proxy(this._handleResize, this));

	if(this.getEnableFlexBox()) {
		return;
	}

	if(bContentLeft) {
		this._sResizeListenerIdLeft = sap.ui.core.ResizeHandler.register(this._$LeftBar[0], jQuery.proxy(this._handleResize, this));
	}

	if(bContentMiddle) {
		this._sResizeListenerIdMid = sap.ui.core.ResizeHandler.register(this._$MidBarPlaceHolder[0], jQuery.proxy(this._handleResize, this));
	}

	if(bContentRight) {
		this._sResizeListenerIdRight = sap.ui.core.ResizeHandler.register(this._$RightBar[0], jQuery.proxy(this._handleResize, this));
	}
};

/**
 * Repositions the bar. 
 * If there is only one aggregation filled, this aggregation will take 100% of the bars space.
 * @param bContentLeft indicates if there is left content in the bar
 * @param bContentMiddle indicates if there is middle content in the bar
 * @param bContentRight indicates if there is right content in the bar
 * @private
 */
sap.m.Bar.prototype._updatePosition = function(bContentLeft, bContentMiddle, bContentRight) {

	if (!bContentLeft && !bContentRight) {

		this._$MidBarPlaceHolder.css({ width : '100%'});
		return;

	}

	if(bContentLeft && !bContentMiddle && !bContentRight) {

		this._$LeftBar.css({ width : '100%'});
		return;

	}

	if(!bContentLeft && !bContentMiddle && bContentRight) {

		this._$RightBar.css({ width : '100%'});
		return;

	}

	var iBarWidth = this.$().outerWidth(true);

	// reset to default
	this._$RightBar.css({ width : "" });
	this._$LeftBar.css({ width : "" });
	this._$MidBarPlaceHolder.css({ position : "", width : "", visibility : 'hidden' });

	var iRightBarWidth = this._$RightBar.outerWidth(true);

	//right bar is bigger than the bar - only show the right bar
	if(iRightBarWidth > iBarWidth) {

		if(bContentLeft) {
			this._$LeftBar.css({ width : "0px" });
		}

		if(bContentMiddle) {
			this._$MidBarPlaceHolder.css({ width : "0px" });
		}

		this._$RightBar.css({ width : iBarWidth + "px"});
		return;

	}

	var iLeftBarWidth = this._getBarContainerWidth(this._$LeftBar);

	// handle the case when left and right content are wider than the bar itself
	if (iBarWidth < (iLeftBarWidth + iRightBarWidth)) {

		// this scenario happens mostly when a very long title text is set in the left content area
		// hence we make sure the rightContent always has enough space and reduce the left content area width accordingly
		iLeftBarWidth = iBarWidth - iRightBarWidth;

		this._$LeftBar.width(iLeftBarWidth);
		this._$MidBarPlaceHolder.width(0);
		return;

	}

	//middle bar will be shown
	this._$MidBarPlaceHolder.css(this._getMidBarCss(iRightBarWidth, iBarWidth, iLeftBarWidth));

};

/**
 * Returns the css for the contentMiddle aggregation. It is centered if there is enough space for it to fit between the left and right content.
 * If not it will be centered between those two.
 * @param iRightBarWidth the width in pixel
 * @param iBarWidth the width in pixel
 * @param iLeftBarWidth the width in pixel
 * @returns {object} the new _$MidBarPlaceHolder css value
 */
sap.m.Bar.prototype._getMidBarCss = function(iRightBarWidth, iBarWidth, iLeftBarWidth) {
	var iMidBarPlaceholderWidth = this._$MidBarPlaceHolder.outerWidth(true),
		bRtl = sap.ui.getCore().getConfiguration().getRTL(),
		sLeftOrRight = bRtl ? "right" : "left",
		oMidBarCss = { visibility : "" };

	if (this.getEnableFlexBox()) {

		iMidBarPlaceholderWidth = iBarWidth - iLeftBarWidth - iRightBarWidth - parseInt(this._$MidBarPlaceHolder.css('margin-left'), 10) - parseInt(this._$MidBarPlaceHolder.css('margin-right'), 10);

		oMidBarCss.position = "absolute";
		oMidBarCss.width = iMidBarPlaceholderWidth + "px";
		oMidBarCss[sLeftOrRight] = iLeftBarWidth;

		//calculation for flex is done
		return oMidBarCss;

	}

	var iSpaceBetweenLeftAndRight = iBarWidth - iLeftBarWidth - iRightBarWidth,

		iMidBarStartingPoint = (iBarWidth / 2) - (iMidBarPlaceholderWidth / 2),
		bLeftContentIsOverlapping = iLeftBarWidth > iMidBarStartingPoint,

		iMidBarEndPoint = (iBarWidth / 2) + (iMidBarPlaceholderWidth / 2),
		bRightContentIsOverlapping = (iBarWidth - iRightBarWidth) < iMidBarEndPoint;

	if (iSpaceBetweenLeftAndRight > 0 && (bLeftContentIsOverlapping || bRightContentIsOverlapping)) {

		//Left or Right content is overlapping the Middle content

		// place the middle positioned element directly next to the end of left content area
		oMidBarCss.position = "absolute";

		//Use the remaining space
		oMidBarCss.width = iSpaceBetweenLeftAndRight + "px";

		oMidBarCss.left = bRtl ? iRightBarWidth : iLeftBarWidth;
	}

	var $MidBar = this.$("BarMiddle"),
		iMidBarWidth = $MidBar.outerWidth(true);

	if (oMidBarCss.width > iMidBarWidth) {

		oMidBarCss.width = iMidBarWidth;

	}

	return oMidBarCss;

};

/**
 * Gets the width of a container
 * @static
 * @param $Container a container with children
 * @returns {number} the width of one of the bar containers
 */
sap.m.Bar.prototype._getBarContainerWidth = function($Container) {
	var i,
		iContainerWidth = 0,
		aContainerChildren = $Container.children(),
		iContainerChildrenTotalWidth = 0;

	// Chrome browser has a problem in providing the correct div size when image inside does not have width explicitly set
	//since ff version 24 the calculation is correct, since we don't support older versions we won't check it 
	if (sap.ui.Device.browser.webkit || sap.ui.Device.browser.firefox) {

		for (i= 0; i < aContainerChildren.length; i++) {

			iContainerChildrenTotalWidth += jQuery(aContainerChildren[i]).outerWidth(true);

		}

		iContainerWidth = $Container.outerWidth(true);

	} else {

		// IE has a rounding issue with JQuery.outerWidth
		var oContainerChildrenStyle;

		for(i= 0; i < aContainerChildren.length; i++){

			oContainerChildrenStyle = window.getComputedStyle(aContainerChildren[i]);

			if (oContainerChildrenStyle.width == "auto") {

				iContainerChildrenTotalWidth += jQuery(aContainerChildren[i]).width() + 1; //add an additional 1 pixel because of rounding issue.

			} else {

				iContainerChildrenTotalWidth += parseFloat(oContainerChildrenStyle.width);

			}

			iContainerChildrenTotalWidth += parseFloat(oContainerChildrenStyle.marginLeft);
			iContainerChildrenTotalWidth += parseFloat(oContainerChildrenStyle.marginRight);
			iContainerChildrenTotalWidth += parseFloat(oContainerChildrenStyle.paddingLeft);
			iContainerChildrenTotalWidth += parseFloat(oContainerChildrenStyle.paddingRight);
		}

		var oContainerComputedStyle = window.getComputedStyle($Container[0]);

		iContainerWidth += parseFloat(oContainerComputedStyle.width);
		iContainerWidth += parseFloat(oContainerComputedStyle.marginLeft);
		iContainerWidth += parseFloat(oContainerComputedStyle.marginRight);
		iContainerWidth += parseFloat(oContainerComputedStyle.paddingLeft);
		iContainerWidth += parseFloat(oContainerComputedStyle.paddingRight);

	}

	if (iContainerWidth < iContainerChildrenTotalWidth) {

		iContainerWidth = iContainerChildrenTotalWidth;

	}

	return iContainerWidth;
};
