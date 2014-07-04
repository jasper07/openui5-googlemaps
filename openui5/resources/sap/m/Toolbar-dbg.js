/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Toolbar.
jQuery.sap.declare("sap.m.Toolbar");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Toolbar.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getActive active} : boolean (default: false)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '')</li>
 * <li>{@link #getDesign design} : sap.m.ToolbarDesign (default: sap.m.ToolbarDesign.Auto)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Toolbar#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The Toolbar control is a horizontal items container that can be used to get an input from user or just to display output.
 * 
 * Note: By default, when Toolbar overflows, it provides shrinking for text controls(e.g. Text, Label) and the control that have percent width.(e.g. Input, Slider). This behaviour can be overwritten by providing sap.m.ToolbarLayoutData for your items.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16
 * @name sap.m.Toolbar
 */
sap.ui.core.Control.extend("sap.m.Toolbar", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : null},
		"active" : {type : "boolean", group : "Behavior", defaultValue : false},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"height" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : ''},
		"design" : {type : "sap.m.ToolbarDesign", group : "Appearance", defaultValue : sap.m.ToolbarDesign.Auto}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Toolbar with name <code>sClassName</code> 
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
 * @name sap.m.Toolbar.extend
 * @function
 */

sap.m.Toolbar.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>visible</code>.
 * Sets the visibility of the control.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.Toolbar#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#setVisible
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Defines the width of the control.
 * By default the Toolbar is block element, if the the width is not explicitly set, control will simply have its own natural size.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.Toolbar#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#setWidth
 * @function
 */


/**
 * Getter for property <code>active</code>.
 * Indicates that the whole toolbar is clickable. Press event of this control is fired only if this property is set "true"
 * Note: This property should be used when there is no interactive control inside the toolbar but to make the toolbar itself interactive.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>active</code>
 * @public
 * @name sap.m.Toolbar#getActive
 * @function
 */

/**
 * Setter for property <code>active</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bActive  new value for property <code>active</code>
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#setActive
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Sets the enabled property of all controls defined in the content aggregation. Note: This property is not for the toolbar itself. See also the "active" property.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.Toolbar#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#setEnabled
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Defines the height of the control.
 * Note: By default, the height property depends on the theme and the design property.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.m.Toolbar#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#setHeight
 * @function
 */


/**
 * Getter for property <code>design</code>.
 * Defines the toolbar design. Design settings are theme-dependent and can also define the default height of the toolbar.
 *
 * Default value is <code>Auto</code>
 *
 * @return {sap.m.ToolbarDesign} the value of property <code>design</code>
 * @public
 * @since 1.16.8
 * @name sap.m.Toolbar#getDesign
 * @function
 */

/**
 * Setter for property <code>design</code>.
 *
 * Default value is <code>Auto</code> 
 *
 * @param {sap.m.ToolbarDesign} oDesign  new value for property <code>design</code>
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.8
 * @name sap.m.Toolbar#setDesign
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content of the toolbar.
 * 
 * <strong>Note</strong>: this is the default aggregation for Toolbar.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.Toolbar#getContent
 * @function
 */


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.m.Toolbar#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Toolbar#removeAllContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.Toolbar#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#destroyContent
 * @function
 */


/**
 * If "active" property is set "true" then "press" event is fired when user clicks on the toolbar. 
 *
 * @name sap.m.Toolbar#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Control} oControlEvent.getParameters.srcControl The control which caused the press event within the toolbar.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.m.Toolbar</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Toolbar</code>.<br/> itself. 
 *  
 * If "active" property is set "true" then "press" event is fired when user clicks on the toolbar. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Toolbar</code>.<br/> itself.
 *
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.m.Toolbar</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Toolbar#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'srcControl' of type <code>sap.ui.core.Control</code> The control which caused the press event within the toolbar.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Toolbar} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Toolbar#firePress
 * @function
 */


// Start of sap\m\Toolbar.js
jQuery.sap.require("sap.m.ToolbarSpacer");
jQuery.sap.require("sap.m.ToolbarDesign");
jQuery.sap.require("sap.m.ToolbarLayoutData");
jQuery.sap.require("sap.ui.core.ResizeHandler");
jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.ui.core.EnabledPropagator.call(sap.m.Toolbar.prototype);

// shrinkable class name
sap.m.Toolbar.shrinkClass = "sapMTBShrinkItem";

/*
 * Checks whether the given width is relative or not
 *
 * @static
 * @protected
 * @param {String} sWidth
 * @return {boolean}
 */
sap.m.Toolbar.isRelativeWidth = function(sWidth) {
	return /^([-+]?\d+%|auto|inherit|)$/i.test(sWidth);
};

/*
 * This sets inner controls to the initial width and
 * checks the given element horizontally overflows
 *
 * @static
 * @protected
 * @param {jQuery} $Element jQuery Object
 * @return {boolean} whether overflow or not
 */
sap.m.Toolbar.checkOverflow = function($Element) {
	if (!$Element || !$Element.length) {
		return false;
	}

	$Element.children().each(function() {
		this.style.width = sap.m.Toolbar.getOrigWidth(this.id);
	});

	return $Element[0].scrollWidth > $Element[0].clientWidth;

};

/*
 * Returns the original width(currently only control's width) via Control ID
 * TODO: This function is not smart enough to detect DOM width changes
 * But tracking width changes is also expensive
 * (last and original width values must be keep in DOM and need update)
 * For now we assume app developers call setWidth from the control
 * And controls return correct width values even default value applied with CSS
 *
 * @static
 * @protected
 * @param {String} sId Control ID
 * @return {String} width
 */
sap.m.Toolbar.getOrigWidth = function(sId) {
	var oControl = sap.ui.getCore().byId(sId);
	if (!oControl || !oControl.getWidth) {
		return "auto";
	}

	return oControl.getWidth();
};

/*
 * Checks given control whether shrinkable or not and marks according to second param
 * Percent widths and text nodes(without fixed width) are shrinkable
 * ToolbarSpacer is already shrinkable if it does not have fixed width
 *
 * @static
 * @protected
 * @param {sap.ui.core.Control} oControl UI5 Control
 * @param {String} [sShrinkClass] shrink item class name
 * @returns {true|false|undefined|Object}
 */
sap.m.Toolbar.checkShrinkable = function(oControl, sShrinkClass) {
	if (oControl instanceof sap.m.ToolbarSpacer) {
		return this.isRelativeWidth(oControl.getWidth());
	}

	// remove old class
	sShrinkClass = sShrinkClass || this.shrinkClass;
	oControl.removeStyleClass(sShrinkClass);

	// ignore the controls has fixed width
	var sWidth = this.getOrigWidth(oControl.getId());
	if (!this.isRelativeWidth(sWidth)) {
		return;
	}

	// check shrinkable via layout data
	var oLayout = oControl.getLayoutData();
	if (oLayout instanceof sap.m.ToolbarLayoutData) {
		return oLayout.getShrinkable() && oControl.addStyleClass(sShrinkClass);
	}

	// is percent item?
	if (sWidth.indexOf("%") > 0) {
		return oControl.addStyleClass(sShrinkClass);
	}

	// is text element?
	var oDomRef = oControl.getDomRef();
	if (oDomRef && (oDomRef.firstChild || {}).nodeType == 3) {
		return oControl.addStyleClass(sShrinkClass);
	}
};

/*
 * Grow-Shrink flexbox polyfill for Toolbar
 *
 * @static
 * @protected
 * @param {jQuery} $Element The container of flex items
 * @param {String} [sFlexClass] flexable item class
 * @param {String} [sShrinkClass] shrinkable item class
 */
sap.m.Toolbar.flexie = function($Element, sFlexClass, sShrinkClass) {

	// check element exists and has width to calculate
	if (!$Element || !$Element.length || !$Element.width()) {
		return;
	}

	// set default values
	sShrinkClass = sShrinkClass || this.shrinkClass;
	sFlexClass = sFlexClass || sap.m.ToolbarSpacer.flexClass;

	// initial values
	var iTotalPercent = 0,
		aFlexibleItems = [],
		aShrinkableItems = [],
		iTotalUnShrinkableWidth = 0,
		iInnerWidth = $Element.width(),
		$Children = $Element.children(),
		bOverflow = this.checkOverflow($Element),
		isAutoWidth = function(sWidth) {
			return !sWidth || sWidth == "auto" || sWidth == "inherit";
		},
		calcUnShrinkableItem = function($Item) {
			// add too unshrinkable width calculation with margins
			iTotalUnShrinkableWidth += $Item.outerWidth(true);
		},
		pushShrinkableItem = function($Item) {
			// if calculated width and the min-width is same then item cannot shrink
			var fBoxWidth = parseFloat($Item.css("width")) || 0;
			var fMinWidth = parseFloat($Item.css("min-width")) || 0;
			if (fBoxWidth == fMinWidth) {
				calcUnShrinkableItem($Item);
				return;
			}

			// calculate related percentage according to inner width
			var iBoxSizing = 0;
			var fWidth = $Item.width();
			var fPercent = (fWidth * 100) / iInnerWidth;
			iTotalPercent += fPercent;

			// margins + paddings + borders are not shrinkable
			iTotalUnShrinkableWidth += $Item.outerWidth(true) - fWidth;
			if ($Item.css("box-sizing") == "border-box") {
				iBoxSizing = $Item.outerWidth() - fWidth;
			}

			// should also take account of max width
			// browsers does not respect computed max width when it has %
			// https://code.google.com/p/chromium/issues/detail?id=228938
			var sMaxWidth = $Item.css("max-width");
			var fMaxWidth = parseFloat(sMaxWidth);
			if (sMaxWidth.indexOf("%") > 0) {
				fMaxWidth = Math.ceil((fMaxWidth * $Element.outerWidth()) / 100);
			}

			// push item
			aShrinkableItems.push({
				boxSizing : iBoxSizing,
				maxWidth : fMaxWidth,
				minWidth : fMinWidth,
				percent : fPercent,
				el : $Item[0]
			});
		},
		setWidths = function(iTotalWidth) {
			var iSumOfWidth = 0;

			// check for max and min width and remove items if they cannot not shrink or grow anymore
			aShrinkableItems.forEach(function(oItem, iIndex) {
				var fRelativePercent = Math.min(100, (oItem.percent * 100) / iTotalPercent);
				var iContentWidth = Math.floor((iTotalWidth * fRelativePercent) / 100);
				var iCalcWidth = oItem.boxSizing + iContentWidth;

				// if we cannot set calculated shrink width because of the minimum width restriction
				// then we should shrink the other items because current item cannot shrink more
				if (iCalcWidth < oItem.minWidth) {
					oItem.el.style.width = oItem.minWidth + "px";
					iTotalWidth -= (oItem.minWidth - oItem.boxSizing);

					// ignore this element cannot shrink more
					iTotalPercent -= oItem.percent;
					delete aShrinkableItems[iIndex];
				}

				// if there is a max width restriction and calculated grow width is more than max width
				// then we should share this extra grow gap for the other items
				if (oItem.maxWidth && oItem.maxWidth > oItem.minWidth && iCalcWidth > oItem.maxWidth) {
					oItem.el.style.width = oItem.maxWidth + "px";
					iTotalWidth += (iCalcWidth - oItem.maxWidth);

					// ignore this element cannot grow more
					iTotalPercent -= oItem.percent;
					delete aShrinkableItems[iIndex];
				}
			});

			// share the width to the items (can grow or shrink)
			aShrinkableItems.forEach(function(oItem) {
				var fRelativePercent = Math.min(100, (oItem.percent * 100) / iTotalPercent);
				var fContentWidth = (iTotalWidth * fRelativePercent) / 100;
				var fCalcWidth = oItem.boxSizing + fContentWidth;
				oItem.el.style.width = fCalcWidth + "px";
				iSumOfWidth += fCalcWidth;
			});

			// calculate remain width
			iTotalWidth -= iSumOfWidth;
			if (iTotalWidth > 1) {
				// share the remaining width to spacers
				aFlexibleItems.forEach(function(oFlexibleItem) {
					var fWidth = iTotalWidth / aFlexibleItems.length;
					oFlexibleItem.style.width = fWidth + "px";
				});
			}
		};

	// start calculation
	// here items are in their initial width
	$Children.each(function() {
		var $Child = jQuery(this);
		var bAutoWidth = isAutoWidth(this.style.width);
		if (bAutoWidth && $Child.hasClass(sFlexClass)) {
			// flexible item
			aFlexibleItems.push(this);
			this.style.width = "0px";
		} else if ($Child.is(":hidden")) {
			// invisible item
			return;
		} else if (bOverflow && $Child.hasClass(sShrinkClass)) {
			// shrinkable marked item when toolbar overflows
			pushShrinkableItem($Child);
		} else {
			// unshrinkable item
			calcUnShrinkableItem($Child);
		}
	});

	// check if there is still place for flex or do the shrink
	var iRemainWidth = iInnerWidth - iTotalUnShrinkableWidth;
	setWidths(Math.max(iRemainWidth, 0));
};

// determines whether toolbar has flexbox support or not
sap.m.Toolbar.hasFlexBoxSupport = jQuery.support.hasFlexBoxSupport;

// determines whether toolbar has new flexbox (shrink) support
sap.m.Toolbar.hasNewFlexBoxSupport = (function() {
	var oStyle = document.documentElement.style;
	return (oStyle.flex !== undefined ||
			oStyle.msFlex !== undefined ||
			oStyle.webkitFlexShrink !== undefined);
}());

sap.m.Toolbar.prototype.onBeforeRendering = function() {
	this._cleanup();
};

sap.m.Toolbar.prototype.onAfterRendering = function() {
	// do nothing for invisible
	if (this._isInvisible()) {
		return;
	}

	// if there is no shrinkable item, layout is not needed
	if (!this._checkContents()) {
		return;
	}

	// let the new flexbox do the job
	if (sap.m.Toolbar.hasNewFlexBoxSupport) {
		return;
	}

	// cache jQuery object
	this._$this = this.$();

	// define behaviour according to flex support
	if (sap.m.Toolbar.hasFlexBoxSupport) {
		this._resetOverflow();
	} else {
		this._reflexie();
	}
};

sap.m.Toolbar.prototype.exit = function() {
	this._cleanup();
};

sap.m.Toolbar.prototype.addContent = function(oContent) {
	this.addAggregation("content", oContent);
	this._attachContentPropertyChange(oContent);
	return this;
};

sap.m.Toolbar.prototype.insertContent = function(oContent, iIndex) {
	this.insertAggregation("content", oContent, iIndex);
	this._attachContentPropertyChange(oContent);
	return this;
};

sap.m.Toolbar.prototype.removeContent = function(vContent) {
	vContent = this.removeAggregation("content", vContent);
	this._detachContentPropertyChange(vContent);
	return vContent;
};

sap.m.Toolbar.prototype.removeAllContent = function() {
	var aContents = this.removeAllAggregation("content") || [];
	aContents.forEach(function(oContent) {
		this._detachContentPropertyChange(oContent);
	}, this);
	return aContents;
};

// handle tap for active toolbar, do nothing if already handled
sap.m.Toolbar.prototype.ontap = function(oEvent) {
	if (this.getActive() && !oEvent.isMarked()) {
		oEvent.setMarked();
		this.firePress({
			srcControl : oEvent.srcControl
		});
	}
};

// fire press event when enter is hit on the active toolbar
sap.m.Toolbar.prototype.onsapenter = function(oEvent) {
	if (this.getActive() && oEvent.srcControl === this && !oEvent.isMarked()) {
		oEvent.setMarked();
		this.firePress({
			srcControl : this
		});
	}
};

// keyboard space handling mimic the enter event
sap.m.Toolbar.prototype.onsapspace = sap.m.Toolbar.prototype.onsapenter;

// mark to inform active handling is done by toolbar
sap.m.Toolbar.prototype.ontouchstart = function(oEvent) {
	this.getActive() && oEvent.setMarked();
};

// determines whether toolbar is visible or not
sap.m.Toolbar.prototype._isInvisible = function() {
	if (!this.getVisible() || !this.getContent().length) {
		return true;
	}
};

// mark shrinkable contents and render layout data
// returns shrinkable and flexible content count
sap.m.Toolbar.prototype._checkContents = function() {
	var iShrinkableItemCount = 0;
	this.getContent().forEach(function(oControl) {
		if (sap.m.Toolbar.checkShrinkable(oControl)) {
			iShrinkableItemCount++;
		}

		var oLayout = oControl.getLayoutData();
		if (oLayout instanceof sap.m.ToolbarLayoutData) {
			oLayout.applyProperties();
		}
	});

	return iShrinkableItemCount;
};

// Reset overflow and mark with classname if overflows
sap.m.Toolbar.prototype._resetOverflow = function() {
	this._deregisterResize();
	var $this = this._$this;
	var oDomRef = $this[0] || {};
	$this.removeClass("sapMTBOverflow");
	var bOverflow = oDomRef.scrollWidth > oDomRef.clientWidth;
	bOverflow && $this.addClass("sapMTBOverflow");
	this._endPoint = this._getEndPoint();
	this._registerResize();
};

// recalculate flexbox layout
sap.m.Toolbar.prototype._reflexie = function() {
	this._deregisterResize();
	sap.m.Toolbar.flexie(this._$this);
	this._endPoint = this._getEndPoint();
	this._registerResize();
};

// called when a content property is changed
sap.m.Toolbar.prototype._onContentPropertyChanged = function(oEvent) {
	if (oEvent.getParameter("name") != "width") {
		return;
	}

	// check and mark percent widths
	var oControl = oEvent.getSource();
	var bPercent = oControl.getWidth().indexOf("%") > 0;
	oControl.toggleStyleClass(sap.m.Toolbar.shrinkClass, bPercent);
};

// attach property change handler for the given control
sap.m.Toolbar.prototype._attachContentPropertyChange = function(oControl) {
	oControl.attachEvent("_change", this._onContentPropertyChanged, this);
};

// detach property change handler from given control
sap.m.Toolbar.prototype._detachContentPropertyChange = function(oControl) {
	oControl.detachEvent("_change", this._onContentPropertyChanged, this);
};

// register interval timer to detect inner content size is changed
sap.m.Toolbar.prototype._registerContentResize = function() {
	sap.ui.getCore().attachIntervalTimer(this._handleContentResize, this);
};

// deregister interval timer for inner content
sap.m.Toolbar.prototype._deregisterContentResize = function() {
	sap.ui.getCore().detachIntervalTimer(this._handleContentResize, this);
};

// register toolbar resize handler
sap.m.Toolbar.prototype._registerToolbarResize = function() {
	// register resize handler only if toolbar has relative width
	if (sap.m.Toolbar.isRelativeWidth(this.getWidth())) {
		var fnResizeProxy = jQuery.proxy(this._handleToolbarResize, this);
		this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this._$this[0], fnResizeProxy);
	}
};

// deregister toolbar resize handlers
sap.m.Toolbar.prototype._deregisterToolbarResize = function() {
	sap.ui.getCore().detachIntervalTimer(this._handleContentResize, this);
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = "";
	}
};

// register resize handlers
sap.m.Toolbar.prototype._registerResize = function() {
	this._registerToolbarResize();
	this._registerContentResize();
};

// deregister resize handlers
sap.m.Toolbar.prototype._deregisterResize = function() {
	this._deregisterToolbarResize();
	this._deregisterContentResize();
};

// remove jquery cache and resize handlers
sap.m.Toolbar.prototype._cleanup = function() {
	this._deregisterResize();
	this._$this = [];
};

// get the end position of last content
sap.m.Toolbar.prototype._getEndPoint = function() {
	var oLastChild = (this._$this[0] || this.getDomRef() || {}).lastElementChild;
	if (oLastChild) {
		var iEndPoint = oLastChild.offsetLeft;
		if (!sap.ui.getCore().getConfiguration().getRTL()) {
			iEndPoint += oLastChild.offsetWidth;
		}
	}
	return iEndPoint || 0;
};

// handle toolbar resize
sap.m.Toolbar.prototype._handleToolbarResize = function() {
	this._handleResize(false);
};

// handle inner content resize
sap.m.Toolbar.prototype._handleContentResize = function() {
	this._handleResize(true);
};

// generic resize handler
sap.m.Toolbar.prototype._handleResize = function(bCheckEndPoint) {
	// check whether end point is changed or not
	if (bCheckEndPoint && this._endPoint == this._getEndPoint()) {
		return;
	}

	// decide the behaviour
	if (!sap.m.Toolbar.hasFlexBoxSupport) {
		this._reflexie();
	} else if (!sap.m.Toolbar.hasNewFlexBoxSupport) {
		this._resetOverflow();
	}
};

/*
 * Augment design property setter.
 * 2nd parameter can be used to define auto design context.
 * Note: When the second parameter is used, Toolbar does not rerender. This should be done by the setter.
 *
 * @param {sap.m.ToolbarDesign} sDesign The design for the Toolbar.
 * @param {boolean} [bSetAutoDesign] Determines auto design context
 * @returns {sap.m.Toolbar}
 */
sap.m.Toolbar.prototype.setDesign = function(sDesign, bSetAutoDesign) {
	if (!bSetAutoDesign) {
		return this.setProperty("design", sDesign);
	}

	this._sAutoDesign = this.validateProperty("design", sDesign);
	return this;
};

/**
 * Returns the currently applied design property of the Toolbar.
 *
 * @returns {sap.m.ToolbarDesign}
 * @protected
 */
sap.m.Toolbar.prototype.getActiveDesign = function() {
	var sDesign = this.getDesign();
	if (sDesign != sap.m.ToolbarDesign.Auto) {
		return sDesign;
	}

	return this._sAutoDesign || sDesign;
};
