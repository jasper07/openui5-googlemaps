/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Column.
jQuery.sap.declare("sap.m.Column");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new Column.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHAlign hAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Begin)</li>
 * <li>{@link #getVAlign vAlign} : sap.ui.core.VerticalAlign (default: sap.ui.core.VerticalAlign.Inherit)</li>
 * <li>{@link #getStyleClass styleClass} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getMinScreenWidth minScreenWidth} : string</li>
 * <li>{@link #getDemandPopin demandPopin} : boolean (default: false)</li>
 * <li>{@link #getPopinHAlign popinHAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Begin)</li>
 * <li>{@link #getPopinDisplay popinDisplay} : sap.m.PopinDisplay (default: sap.m.PopinDisplay.Block)</li>
 * <li>{@link #getMergeDuplicates mergeDuplicates} : boolean (default: false)</li>
 * <li>{@link #getMergeFunctionName mergeFunctionName} : string (default: 'getText')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getHeader header} <strong>(default aggregation)</strong> : sap.ui.core.Control</li>
 * <li>{@link #getFooter footer} : sap.ui.core.Control</li></ul>
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
 * The column allows to define column specific properties that will be applied when rendering the List.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.m.Column
 */
sap.ui.core.Element.extend("sap.m.Column", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"hAlign" : {type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin},
		"vAlign" : {type : "sap.ui.core.VerticalAlign", group : "Appearance", defaultValue : sap.ui.core.VerticalAlign.Inherit},
		"styleClass" : {type : "string", group : "Appearance", defaultValue : null},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"minScreenWidth" : {type : "string", group : "Behavior", defaultValue : null},
		"demandPopin" : {type : "boolean", group : "Behavior", defaultValue : false},
		"popinHAlign" : {type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin, deprecated: true},
		"popinDisplay" : {type : "sap.m.PopinDisplay", group : "Appearance", defaultValue : sap.m.PopinDisplay.Block},
		"mergeDuplicates" : {type : "boolean", group : "Behavior", defaultValue : false},
		"mergeFunctionName" : {type : "string", group : "Misc", defaultValue : 'getText'}
	},
	defaultAggregation : "header",
	aggregations : {
    	"header" : {type : "sap.ui.core.Control", multiple : false}, 
    	"footer" : {type : "sap.ui.core.Control", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.m.Column with name <code>sClassName</code> 
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
 * @name sap.m.Column.extend
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Defines the width of the column. If you leave it empty then this column covers the remaining space.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.Column#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setWidth
 * @function
 */


/**
 * Getter for property <code>hAlign</code>.
 * Horizontal alignment of the column content. Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
 * 
 * NOTE: Control with a "textAlign" property inherits the horizontal alignment.
 *
 * Default value is <code>Begin</code>
 *
 * @return {sap.ui.core.TextAlign} the value of property <code>hAlign</code>
 * @public
 * @name sap.m.Column#getHAlign
 * @function
 */

/**
 * Setter for property <code>hAlign</code>.
 *
 * Default value is <code>Begin</code> 
 *
 * @param {sap.ui.core.TextAlign} oHAlign  new value for property <code>hAlign</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setHAlign
 * @function
 */


/**
 * Getter for property <code>vAlign</code>.
 * Vertical alignment of the cells in a column. Possible values are "Inherit", "Top", "Middle", "Bottom"
 * This property does not affect the vertical alignment of header and footer.
 *
 * Default value is <code>Inherit</code>
 *
 * @return {sap.ui.core.VerticalAlign} the value of property <code>vAlign</code>
 * @public
 * @name sap.m.Column#getVAlign
 * @function
 */

/**
 * Setter for property <code>vAlign</code>.
 *
 * Default value is <code>Inherit</code> 
 *
 * @param {sap.ui.core.VerticalAlign} oVAlign  new value for property <code>vAlign</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setVAlign
 * @function
 */


/**
 * Getter for property <code>styleClass</code>.
 * CSS class name for column contents(header, cells and footer of column). This property can be used for different column styling. If column is shown as pop-in then this class name is applied to related pop-in row.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>styleClass</code>
 * @public
 * @name sap.m.Column#getStyleClass
 * @function
 */

/**
 * Setter for property <code>styleClass</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sStyleClass  new value for property <code>styleClass</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setStyleClass
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Specifies whether or not the column is visible. Invisible columns are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.Column#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setVisible
 * @function
 */


/**
 * Getter for property <code>minScreenWidth</code>.
 * By default column is always shown. If you set this property, control checks the minimum width of the screen to show or hide this column.
 * As you can give specific CSS sizes(e.g: "480px" or "40em"), you can also use sap.m.ScreenSize enumeration(e.g: "Phone", "Tablet", "Desktop", "Small", "Medium", "Large", ....).
 * 
 * sap.m.Column.MediaQuery1->Range1 = 199
 * 
 * This property can be used for responsive design. e.g: "40em"(or "640px" or "Tablet") setting shows this column in iPad(and Desktop) but hides in iPhone.
 * Please also see "demandPopin" property
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>minScreenWidth</code>
 * @public
 * @name sap.m.Column#getMinScreenWidth
 * @function
 */

/**
 * Setter for property <code>minScreenWidth</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sMinScreenWidth  new value for property <code>minScreenWidth</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setMinScreenWidth
 * @function
 */


/**
 * Getter for property <code>demandPopin</code>.
 * According to your minScreenWidth settings, the column can be hidden in different screen sizes.
 * Setting this property to true, shows this column as pop-in instead of hiding it.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>demandPopin</code>
 * @public
 * @name sap.m.Column#getDemandPopin
 * @function
 */

/**
 * Setter for property <code>demandPopin</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDemandPopin  new value for property <code>demandPopin</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setDemandPopin
 * @function
 */


/**
 * Getter for property <code>popinHAlign</code>.
 * Horizontal alignment of the pop-in content. Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
 * 
 * NOTE: Controls with a text align do not inherit the horizontal alignment.
 *
 * Default value is <code>Begin</code>
 *
 * @return {sap.ui.core.TextAlign} the value of property <code>popinHAlign</code>
 * @public
 * @deprecated Since version 1.14. 
 * Use popinDisplay property instead.
 * @name sap.m.Column#getPopinHAlign
 * @function
 */

/**
 * Setter for property <code>popinHAlign</code>.
 *
 * Default value is <code>Begin</code> 
 *
 * @param {sap.ui.core.TextAlign} oPopinHAlign  new value for property <code>popinHAlign</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.14. 
 * Use popinDisplay property instead.
 * @name sap.m.Column#setPopinHAlign
 * @function
 */


/**
 * Getter for property <code>popinDisplay</code>.
 * Defines the display options of pop-in.
 * Possible values are
 * 1 - "Block"(Header is displayed in first line and value field in next line.)
 * 2 - "Inline" (Value field is displayed next to the header in same line.)
 *
 * Default value is <code>sap.m.PopinDisplay.Block</code>
 *
 * @return {sap.m.PopinDisplay} the value of property <code>popinDisplay</code>
 * @public
 * @since 1.13.2
 * @name sap.m.Column#getPopinDisplay
 * @function
 */

/**
 * Setter for property <code>popinDisplay</code>.
 *
 * Default value is <code>sap.m.PopinDisplay.Block</code> 
 *
 * @param {sap.m.PopinDisplay} oPopinDisplay  new value for property <code>popinDisplay</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.13.2
 * @name sap.m.Column#setPopinDisplay
 * @function
 */


/**
 * Getter for property <code>mergeDuplicates</code>.
 * Set "true" to merge repeating cells(duplicates) into one.
 * Also see "mergeFunctionName" property to customize.
 * Note: this property gets disabled if any column is in pop-in!
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>mergeDuplicates</code>
 * @public
 * @since 1.16
 * @name sap.m.Column#getMergeDuplicates
 * @function
 */

/**
 * Setter for property <code>mergeDuplicates</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bMergeDuplicates  new value for property <code>mergeDuplicates</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.Column#setMergeDuplicates
 * @function
 */


/**
 * Getter for property <code>mergeFunctionName</code>.
 * Defines the value getter(serialization) function if "mergeDuplicates" property is set "true"
 * Control itself uses this function to compare values of two repeating cells.
 * Default value "getText" is suitable for Label and Text control.
 * e.g. For "Icon" control "getSrc" can be used.
 * Note: You can pass one string parameter to given function after "#" sign. e.g. "data#myparameter"
 *
 * Default value is <code>getText</code>
 *
 * @return {string} the value of property <code>mergeFunctionName</code>
 * @public
 * @since 1.16
 * @name sap.m.Column#getMergeFunctionName
 * @function
 */

/**
 * Setter for property <code>mergeFunctionName</code>.
 *
 * Default value is <code>getText</code> 
 *
 * @param {string} sMergeFunctionName  new value for property <code>mergeFunctionName</code>
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.Column#setMergeFunctionName
 * @function
 */


/**
 * Getter for aggregation <code>header</code>.<br/>
 * Control to be displayed in the column header.
 * 
 * <strong>Note</strong>: this is the default aggregation for Column.
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.m.Column#getHeader
 * @function
 */


/**
 * Setter for the aggregated <code>header</code>.
 * @param {sap.ui.core.Control} oHeader
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setHeader
 * @function
 */
	

/**
 * Destroys the header in the aggregation 
 * named <code>header</code>.
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#destroyHeader
 * @function
 */


/**
 * Getter for aggregation <code>footer</code>.<br/>
 * Control to be displayed in the column footer.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.m.Column#getFooter
 * @function
 */


/**
 * Setter for the aggregated <code>footer</code>.
 * @param {sap.ui.core.Control} oFooter
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#setFooter
 * @function
 */
	

/**
 * Destroys the footer in the aggregation 
 * named <code>footer</code>.
 * @return {sap.m.Column} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Column#destroyFooter
 * @function
 */


// Start of sap\m\Column.js
jQuery.sap.require("sap.ui.core.Renderer");

// default index
sap.m.Column.prototype._index = -1;

// predefined screen size
sap.m.Column.prototype._screen = "";

// default media value
sap.m.Column.prototype._media = null;

// prototype lookup
sap.m.Column.prototype._getTextAlign = sap.ui.core.Renderer.getTextAlign;

sap.m.Column.prototype._clearMedia = function() {
	if (this._media && this._minWidth) {
		sap.ui.Device.media.removeRangeSet(this.getId());
		this._media = null;
	}
};

sap.m.Column.prototype._addMedia = function() {
	if (this._minWidth) {
		sap.ui.Device.media.initRangeSet(this.getId(), [parseFloat(this._minWidth)]);
		sap.ui.Device.media.attachHandler(this._notifyResize, this, this.getId());
		this._media = sap.ui.Device.media.getCurrentRange(this.getId());
		if (this._media) {
			this._media.triggered = false;
			this._media.matches = !!this._media.from;
		}
	}
};

/**
 * Notify parent to re-render
 * Also fire media event for listeners
 *
 * @private
 */
sap.m.Column.prototype._notifyResize = function(oMedia) {
	// ignore the first call
	if (!this._media.triggered) {
		this._media.triggered = true;
		return;
	}

	// keep media info
	this._media = oMedia;
	this._media.triggered = true;
	this._media.matches = !!oMedia.from;

	// wait all events to come
	jQuery.sap.delayedCall(0, this, function() {
		var parent = this.getParent();
		this.fireEvent("media", this);
		if (parent && parent.onColumnResize) {
			parent.onColumnResize(this);
		}
	});
};

sap.m.Column.prototype._validateMinWidth = function(sWidth) {
	if (Object.prototype.toString.call(sWidth) != "[object String]") {
		throw new Error('expected string for property "minScreenWidth" of ' + this);
	}
	if (Object.keys(sap.m.ScreenSizes).indexOf(sWidth.toLowerCase()) != -1) {
		return;
	}
	if (!/^\d+(\.\d+)?(px|em|rem)$/i.test(sWidth)) {
		throw new Error('invalid CSS size("px", "em", "rem" required) or sap.m.ScreenSize enumeration for property "minScreenWidth" of ' + this);
	}
};


// Checks the given width(px or em), if it is a predefined screen value
sap.m.Column.prototype._isWidthPredefined = function(sWidth) {
	var that = this,
		unit = sWidth.replace(/[^a-z]/g, ""),
		baseFontSize = parseFloat(sap.m.BaseFontSize) || 16;

	jQuery.each(sap.m.ScreenSizes, function(screen, size) {
		if (unit != "px") {
			size /= baseFontSize;
		}
		if (size + unit == sWidth) {
			that._minWidth = this + "px";
			that._screen = screen;
			return false;
		}
	});
};

/**
 * Apply text alignment of the Column to Text/Label/Link...
 *
 * TODO: This is so ugly to check content functions
 * instead we should document how to use our controls
 * to inherit text-alignment and we should add a new
 * sap.ui.core.TextAlign type called "Inherit"
 *
 * @protected *
 * @param {sap.ui.core.Control} oControl List control
 * @param {String} [sAlign] TextAlign enumeration
 * @return {sap.ui.core.Control} oControl
 */
sap.m.Column.prototype.applyAlignTo = function(oControl, sAlign) {
	if (oControl.getMetadata().getProperties().textAlign) {
		sAlign = sAlign || this.getHAlign();
		if (oControl.getTextAlign() != sAlign) {
			var oDomRef = oControl.getDomRef();
			oControl.setProperty("textAlign", sAlign, true);
			oDomRef && (oDomRef.style.textAlign = this.getCssAlign(sAlign));
		}
	}

	return oControl;
};


/**
 * Returns CSS alignment according to column hAlign setting or given parameter
 * for Begin/End values checks the locale settings
 *
 * @param {String} [sAlign] TextAlign enumeration
 * @return {String} left|center|right
 * @protected
 */
sap.m.Column.prototype.getCssAlign = function(sAlign) {
	sAlign = sAlign || this.getHAlign();
	if (sAlign == "Begin" || sAlign == "End") {
		sAlign = this._getTextAlign(sAlign);
	}

	return sAlign.toLowerCase();
};


// Returns styleClass property with extra responsive class if second parameter is set true
sap.m.Column.prototype.getStyleClass = function(bResponsive) {
	var cls = this.getProperty("styleClass");
	if (!bResponsive) {
		return cls;
	}
	if (this._screen && (!this.getDemandPopin() || !window.matchMedia)) {
		cls += " sapMSize-" + this._screen;
	} else if (this._media && !this._media.matches) {
		cls += " sapMListTblNone";
	}
	return cls;
};


/**
 * Returns visible probability of the column
 *
 * @param {boolean} [bReturnCache] Whether return cache or new result
 * @return {boolean}
 * @protected
 */
sap.m.Column.prototype.isNeverVisible = function(bReturnCache) {
	if (bReturnCache) {
		return this._isNeverVisible;
	}

	if (!this._minWidth) {
		return this._isNeverVisible = false;
	}

	var width = parseFloat(this._minWidth),
		unit = this._minWidth.replace(/[^a-z]/g, ""),
		baseFontSize = parseFloat(sap.m.BaseFontSize) || 16;

	if (unit != "px") {
		width *= baseFontSize;
	}

	return this._isNeverVisible = (width > Math.max(window.screen.width, window.screen.height));
};


/**
 * Sets the visible column index
 * Negative index values can be used to clear
 *
 * @param {int} nIndex index of the visible column
 * @protected
 */
sap.m.Column.prototype.setIndex = function(nIndex) {
	this._index = +nIndex;
};


/**
 * Sets the order of the column
 * Does not do the visual effect
 * Table should be invalidate to re-render
 *
 * @param {int} nOrder order of the column
 * @protected
 */
sap.m.Column.prototype.setOrder = function(nOrder) {
	this._order = +nOrder;
};

/**
 * Gets the order of the column
 *
 * @returns {int} nOrder order of the column
 * @protected
 */
sap.m.Column.prototype.getOrder = function() {
	return this.hasOwnProperty("_order") ? this._order : this.getInitialOrder();
};

/**
 * Sets the initial order of the column
 *
 * @param {int} nOrder initial order of the column
 * @protected
 */
sap.m.Column.prototype.setInitialOrder = function(nOrder) {
	this._initialOrder = +nOrder;
};

/**
 * Gets the initial order of the column
 *
 * @returns {int} initial order of the column
 * @protected
 */
sap.m.Column.prototype.getInitialOrder = function() {
	if (this.hasOwnProperty("_initialOrder")) {
		return this._initialOrder;
	}

	var oParent = this.getParent();
	if (oParent && oParent.indexOfColumn) {
		return oParent.indexOfColumn(this);
	}

	return -1;
};

/**
 * Display or hide the column from given table
 * This does not set the visibility property of the column
 *
 * @param {Object} oTableDomRef Table DOM reference
 * @param {boolean} [bDisplay] whether visible or not
 * @protected
 */
sap.m.Column.prototype.setDisplay = function(oTableDomRef, bDisplay) {
	if (!oTableDomRef || this._index < 0) {
		return;
	}

	// go with native we need speed
	var i = this._index + 1,
		parent =  this.getParent(),
		display = bDisplay ? "table-cell" : "none",
		header = oTableDomRef.querySelector("tr > th:nth-child(" + i + ")"),
		cells = oTableDomRef.querySelectorAll("tr > td:nth-child(" + i + ")"),
		length = cells.length;

	// set display
	header.style.display = display;
	for (i = 0; i < length; i++) {
		cells[i].style.display = display;
	}

	// let the parent know the visibility change
	if (parent && parent.setTableHeaderVisibility) {
		// make it sure rendering phase is done with timeout
		setTimeout(function() {
			parent.setTableHeaderVisibility(bDisplay);
		}, 0);
	}
};

/**
 * Display or hide the column from given table via checking media query changes
 *
 * @param {Object} oTableDomRef Table DOM reference
 * @protected
 */
sap.m.Column.prototype.setDisplayViaMedia = function(oTableDomRef) {
	var oParent = this.getParent(),
		bDisplay = this._media && this._media.matches;

	if (!this.getDemandPopin() && this._screen && oParent && oParent.setTableHeaderVisibility) {
		// this means CSS media queries already change the column visibility
		// let the parent know the visibility change
		// make it sure rendering phase is done with timeout
		setTimeout(function() {
			oParent.setTableHeaderVisibility(bDisplay);
		}, 0);
	} else {
		this.setDisplay(oTableDomRef, bDisplay);
	}
};

sap.m.Column.prototype.setVisible = function(bVisible) {
	var oParent = this.getParent(),
		oTableDomRef = oParent && oParent.getTableDomRef && oParent.getTableDomRef(),
		bInvalidate = oTableDomRef && this._index >= 0;

	this.setProperty("visible", bVisible, bInvalidate);
	if (bInvalidate) {
		this.setDisplay(oTableDomRef, bVisible);
	}

	return this;
};

/*
 * Decides if we need media query or not according to given settings
 * Checks the given width is known screen size
 */
sap.m.Column.prototype.setMinScreenWidth = function(sWidth) {
	// check if setting the old value
	if (sWidth == this.getMinScreenWidth()) {
		return this;
	}

	// first validate the value
	this._validateMinWidth(sWidth);

	// initialize
	this._clearMedia();
	this._minWidth = 0;
	this._screen = "";

	if (sWidth) {
		// check given width is known screen-size
		sWidth = sWidth.toLowerCase();
		var width = sap.m.ScreenSizes[sWidth];
		if (width) {
			width += "px";
			this._screen = sWidth;
		} else {
			this._isWidthPredefined(sWidth);
			width = sWidth;
		}

		// keep the minimum width value
		this._minWidth = width;

		/**
		// OLD: if pop-in is requested or if unknown screen-size is given then go with JS media queries
		// NEW: We always need JS media queries to detect table header visibility
		if (this.getDemandPopin() || !this._screen) {
			this._addMedia();
		}
		*/
		this._addMedia();
	}

	return this.setProperty("minScreenWidth", sWidth);
};

/*
 * Decides if we need media query or not according to given settings
 * if pop-in is demanded then we always need JS media queries
 * if not demanded but if screen size is known CSS media query can handle
 */
sap.m.Column.prototype.setDemandPopin = function(bValue) {
	// check if setting the old value
	if (bValue == this.getDemandPopin()) {
		return this;
	}

	// minimum width should have been set
	if (!this.getMinScreenWidth()) {
		return this.setProperty("demandPopin", bValue, true);
	}

	return this.setProperty("demandPopin", bValue);
};


/**
 * Checks the column will be shown as pop-in
 *
 * @protected
 */
sap.m.Column.prototype.isPopin = function() {
	if (!this.getDemandPopin()) {
		return false;
	}
	if (this._media) {
		return !this._media.matches;
	}
	return false;
};

/**
 * Checks the column will be hidden
 *
 * @protected
 */
sap.m.Column.prototype.isHidden = function() {
	if (this._media) {
		return !this._media.matches;
	}

	if (this._screen && this._minWidth) {
		return parseFloat(this._minWidth) > window.innerWidth;
	}
	return false;
};

/**
 * Checks if box-sizing border-box works for columns
 * Most of the browser does not respect this CSS property, even buggy
 * https://bugs.webkit.org/show_bug.cgi?id=18565
 *
 * @protected
 * @readonly
 * @static
 */
sap.m.Column.hasBorderBoxSupport = (function() {
	var width = 5,
		hasBorderBoxSupport = false,
		table = "<table style='table-layout:fixed; width:" + width + "px; position:absolute; left:-99px; top:-99px'>" +
					"<tr><td style='width:" + width + "px; padding:1px; border:1px solid transparent;'></td></tr>" +
				"</table>",
		$table = jQuery(table);

	jQuery(document.body).append($table);
	if ($table.find("td").width() == width) {
		hasBorderBoxSupport = true;
	}

	$table.remove();
	return hasBorderBoxSupport;
}());

/**
 * This method is called from parent after all cells in column are rendered
 *
 * @param {jQuery} $table Table jQuery reference
 * @protected
 */
sap.m.Column.prototype.onColumnRendered = function($table) {
	// If there is no borderBox support and column is visible then run the workaround for box sizing
	if (!sap.m.Column.hasBorderBoxSupport && this._index >= 0 && this.getWidth() && this.getVisible() && !this.isPopin() && !this.isNeverVisible()) {
		var $header = $table.find("th:nth-child(" +  (this._index + 1) + ")"),
			outerWidth = $header.outerWidth(),
			width = $header.width();

		// set the outer-width as column width
		$header.width(2 * outerWidth - width);
	}
};

/**
 * Sets the last value of the column if mergeDuplicates property is true
 *
 * @param {any} value Any Value
 * @returns {sap.m.Column}
 * @since 1.16
 * @protected
 */
sap.m.Column.prototype.setLastValue = function(value) {
	if (this.getMergeDuplicates()) {
		this._lastValue = value;
	}
	return this;
};

/**
 * Clears the last value of the column if mergeDuplicates property is true
 *
 * @returns {sap.m.Column}
 * @since 1.20.4
 * @protected
 */
sap.m.Column.prototype.clearLastValue = function() {
	return this.setLastValue(NaN);
};

/**
 * Gets the last value of the column
 *
 * @since 1.16
 * @protected
 */
sap.m.Column.prototype.getLastValue = function() {
	return this._lastValue;
};


/**
 * Calls from Table to notify all items are removed
 *
 * @since 1.16
 * @protected
 */
sap.m.Column.prototype.onItemsRemoved = function() {
	this.clearLastValue();
};