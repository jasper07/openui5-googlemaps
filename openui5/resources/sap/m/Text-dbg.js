/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Text.
jQuery.sap.declare("sap.m.Text");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Text.
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
 * <li>{@link #getText text} : string (default: '')</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: sap.ui.core.TextDirection.Inherit)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getWrapping wrapping} : boolean (default: true)</li>
 * <li>{@link #getTextAlign textAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Begin)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxLines maxLines} : int</li></ul>
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
 * The Text control is used to display some continuous text.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.Text
 */
sap.ui.core.Control.extend("sap.m.Text", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"text" : {type : "string", group : "", defaultValue : '', bindable : "bindable"},
		"textDirection" : {type : "sap.ui.core.TextDirection", group : "Appearance", defaultValue : sap.ui.core.TextDirection.Inherit},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"wrapping" : {type : "boolean", group : "Appearance", defaultValue : true},
		"textAlign" : {type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"maxLines" : {type : "int", group : "Appearance", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.m.Text with name <code>sClassName</code> 
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
 * @name sap.m.Text.extend
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * Text to be displayed.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.m.Text#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Text#setText
 * @function
 */


/**
 * Binder for property <code>text</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Text#bindText
 * @function
 */

/**
 * Unbinder for property <code>text</code>.
 *
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Text#unbindText
 * @function
 */


/**
 * Getter for property <code>textDirection</code>.
 * Available options for the text direction are LTR and RTL. By default the control inherits the text direction from its parent control.
 *
 * Default value is <code>Inherit</code>
 *
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * @name sap.m.Text#getTextDirection
 * @function
 */

/**
 * Setter for property <code>textDirection</code>.
 *
 * Default value is <code>Inherit</code> 
 *
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Text#setTextDirection
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Set this property to false to make the text invisible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.Text#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Text#setVisible
 * @function
 */


/**
 * Getter for property <code>wrapping</code>.
 * Set this property to false to disable the automatic text wrapping.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>wrapping</code>
 * @public
 * @name sap.m.Text#getWrapping
 * @function
 */

/**
 * Setter for property <code>wrapping</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bWrapping  new value for property <code>wrapping</code>
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Text#setWrapping
 * @function
 */


/**
 * Getter for property <code>textAlign</code>.
 * Sets the horizontal alignment of the text.
 *
 * Default value is <code>Begin</code>
 *
 * @return {sap.ui.core.TextAlign} the value of property <code>textAlign</code>
 * @public
 * @name sap.m.Text#getTextAlign
 * @function
 */

/**
 * Setter for property <code>textAlign</code>.
 *
 * Default value is <code>Begin</code> 
 *
 * @param {sap.ui.core.TextAlign} oTextAlign  new value for property <code>textAlign</code>
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Text#setTextAlign
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * By default, the Text control uses the full width available. Set this property to restrict the width to a custom value.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.Text#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Text#setWidth
 * @function
 */


/**
 * Getter for property <code>maxLines</code>.
 * Limits the number of lines for wrapping texts.
 * 
 * Note: The multi-line overflow indicator depends on the browser line clamping support. For such browsers, this will be shown as ellipsis, for the other browsers the overflow will just be hidden.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>maxLines</code>
 * @public
 * @since 1.13.2
 * @name sap.m.Text#getMaxLines
 * @function
 */

/**
 * Setter for property <code>maxLines</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iMaxLines  new value for property <code>maxLines</code>
 * @return {sap.m.Text} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.2
 * @name sap.m.Text#setMaxLines
 * @function
 */


// Start of sap\m\Text.js
/**
 * Default line height value as a number when line-height is normal.
 * This value is required during max-height calculation for the browsers that do not support line-clamping.
 * It is better to define line-height in CSS instead of "normal" to get consistent maxLines results since normal line-height
 * not only vary from browser to browser but they also vary from one font face to another and can also vary within a given face.
 *
 * Default value is 1.2
 *
 * @since 1.22
 * @protected
 * @type {Number}
 */
sap.m.Text.prototype.normalLineHeight = 1.2;

/**
 * Determines per instance whether line height should be cached or not.
 * Default value is true.
 *
 * @since 1.22
 * @protected
 * @type {Boolean}
 */
sap.m.Text.prototype.cacheLineHeight = true;

/**
 * Ellipsis(…) text to indicate more text when clampText function is used.
 * Can be overwritten with 3dots(...) if fonts do not support this UTF-8 character.
 *
 * @since 1.13.2
 * @protected
 * @type {String}
 */
sap.m.Text.prototype.ellipsis = '…';

/**
 * Defines whether browser supports native line clamp or not
 *
 * @since 1.13.2
 * @returns {Boolean}
 * @protected
 * @readonly
 * @static
 */
sap.m.Text.hasNativeLineClamp = (function() {
	return (typeof document.documentElement.style.webkitLineClamp != "undefined");
})();


// suppress invalidation of text property setter
sap.m.Text.prototype.setText = function(sText) {
	this.setProperty("text", sText , true);

	// check text dom ref
	var oDomRef = this.getTextDomRef();
	if (oDomRef) {
		oDomRef.textContent = this.getText(true);
	}

	return this;
};

// returns the text value and normalize line-ending character for rendering
sap.m.Text.prototype.getText = function(bNormalize) {
	var sText = this.getProperty("text");

	// handle line ending characters for renderer
	if (bNormalize) {
		return sText.replace(/\r\n/g, "\n");
	}

	return sText;
};

// required adaptations after rendering
sap.m.Text.prototype.onAfterRendering = function() {
	// check visible, max-lines and line-clamping support
	if (this.getVisible() &&
		this.hasMaxLines() &&
		!this.canUseNativeLineClamp()) {

		// set max-height for maxLines support
		this.clampHeight();
	}
};

/**
 * Determines whether max lines should be rendered or not
 *
 * @since 1.22
 * @protected
 * @returns {HTMLElement|null}
 */
sap.m.Text.prototype.hasMaxLines = function() {
	return (this.getWrapping() && this.getMaxLines() > 1);
};

/**
 * Returns the text node container's DOM reference.
 * This can be different then getDomRef when inner wrapper is needed.
 *
 * @since 1.22
 * @protected
 * @returns {HTMLElement|null}
 */
sap.m.Text.prototype.getTextDomRef = function() {
	if (!this.getVisible()) {
		return null;
	}

	if (this.hasMaxLines()) {
		return this.getDomRef("inner");
	}

	return this.getDomRef();
};

/**
 * Decides whether the control can use native line clamp feature or not.
 * In RTL mode native line clamp feature is not supported
 *
 * @since 1.20
 * @protected
 * @return {Boolean}
 */
sap.m.Text.prototype.canUseNativeLineClamp = function() {
	// has line clamp feature
	if (!sap.m.Text.hasNativeLineClamp) {
		return false;
	}

	// is text direction rtl
	var oDirection = sap.ui.core.TextDirection;
	if (this.getTextDirection() == oDirection.RTL) {
		return false;
	}

	// is text direction inherited as rtl
	if (this.getTextDirection() == oDirection.Inherit && sap.ui.getCore().getConfiguration().getRTL()) {
		return false;
	}

	return true;
};

/**
 * Caches and returns the computed line height of the text.
 *
 * @since 1.22
 * @protected
 * @see sap.m.Text#cacheLineHeight
 * @param {HTMLElement} [oDomRef] DOM reference of the text container.
 * @returns {Number}
 */
sap.m.Text.prototype.getLineHeight = function(oDomRef) {
	// return cached value if possible and available
	if (this.cacheLineHeight && this._iLineHeight) {
		return this._iLineHeight;
	}

	// check whether dom ref exist or not
	oDomRef = oDomRef || this.getTextDomRef();
	if (!oDomRef) {
		return 0;
	}

	// check line-height
	var oStyle = window.getComputedStyle(oDomRef),
		fLineHeight = parseFloat(oStyle.lineHeight);

	// we should ignore "normal" line-height so calculate with font-size
	if (!fLineHeight) {
		fLineHeight = parseFloat(oStyle.fontSize) * this.normalLineHeight;
	}

	// on rasterizing the font, sub pixel line-heights are converted to integer
	// this can differ from browser font rendering engine, in this case
	// we should create one line text on the fly and check the height
	var iLineHeight = Math.floor(fLineHeight);

	// cache line height
	if (this.cacheLineHeight) {
		this._iLineHeight = iLineHeight;
	}

	// return
	return iLineHeight;
};

/**
 * Returns the max height according to max lines and line height calculation.
 * This is not calculated max-height!
 *
 * @since 1.22
 * @protected
 * @param {HTMLElement} [oDomRef] DOM reference of the text container.
 * @returns {Number}
 */
sap.m.Text.prototype.getClampHeight = function(oDomRef) {
	oDomRef = oDomRef || this.getTextDomRef();
	return this.getMaxLines() * this.getLineHeight(oDomRef);
};

/**
 * Sets the max-height to support maxLines property
 *
 * @since 1.22
 * @protected
 * @param {HTMLElement} [oDomRef] DOM reference of the text container.
 * @returns {Number} calculated max height value
 */
sap.m.Text.prototype.clampHeight = function(oDomRef) {
	oDomRef = oDomRef || this.getTextDomRef();
	if (!oDomRef) {
		return 0;
	}

	// calc the max height and set on dom
	var iMaxHeight = this.getClampHeight(oDomRef);
	oDomRef.style.maxHeight = iMaxHeight + "px";
	return iMaxHeight;
};

/**
 * Clamps the wrapping text according to max lines and returns the found ellipsis position.
 * Parameters can be used for better performance.
 *
 * @param {HTMLElement} [oDomRef] DOM reference of the text container.
 * @param {number} [iStartPos] Start point of the ellipsis search.
 * @param {number} [iEndPos] End point of the ellipsis search.
 * @returns {number|undefined} Returns found ellipsis position or undefined
 * @since 1.20
 * @protected
 */
sap.m.Text.prototype.clampText = function(oDomRef, iStartPos, iEndPos) {
	// check DOM reference
	oDomRef = oDomRef || this.getTextDomRef();
	if (!oDomRef) {
		return;
	}

	// init
	var iEllipsisPos;
	var sText = this.getText(true);
	var iMaxHeight = this.getClampHeight(oDomRef);

	// init positions
	iStartPos = iStartPos || 0;
	iEndPos = iEndPos || sText.length;

	// do not set content if not needed
	oDomRef.textContent = sText.slice(0, iEndPos);

	// if text overflow
	if (oDomRef.scrollHeight > iMaxHeight) {

		// cache values
		var oStyle = oDomRef.style,
			sHeight = oStyle.height,
			sEllipsis = this.ellipsis,
			iEllipsisLen = sEllipsis.length;

		// set height during ellipsis search
		oStyle.height = iMaxHeight + "px";

		// implementing binary search to find the position of ellipsis
		// complexity O(logn) so 1024 characters text can be found within 10 steps!
		while ((iEndPos - iStartPos) > iEllipsisLen) {

			// check the middle position and update text
			iEllipsisPos = (iStartPos + iEndPos) >> 1;
			oDomRef.textContent = sText.slice(0, iEllipsisPos - iEllipsisLen) + sEllipsis;

			// check overflow
			if (oDomRef.scrollHeight > iMaxHeight) {
				iEndPos = iEllipsisPos;
			} else {
				iStartPos = iEllipsisPos;
			}
		}

		// last check maybe we overflowed on last character
		if (oDomRef.scrollHeight > iMaxHeight && iStartPos > 0) {
			iEllipsisPos = iStartPos;
			oDomRef.textContent = sText.slice(0, iEllipsisPos - iEllipsisLen) + sEllipsis;
		}

		// reset height
		oStyle.height = sHeight;
	}

	// return the found position
	return iEllipsisPos;
};