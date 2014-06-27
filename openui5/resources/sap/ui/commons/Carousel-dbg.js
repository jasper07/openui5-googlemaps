/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Carousel.
jQuery.sap.declare("sap.ui.commons.Carousel");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Carousel.
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
 * <li>{@link #getOrientation orientation} : sap.ui.commons.enums.Orientation (default: sap.ui.commons.enums.Orientation.horizontal)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getDefaultItemHeight defaultItemHeight} : int (default: 150)</li>
 * <li>{@link #getDefaultItemWidth defaultItemWidth} : int (default: 150)</li>
 * <li>{@link #getAnimationDuration animationDuration} : int (default: 500)</li>
 * <li>{@link #getVisibleItems visibleItems} : int</li>
 * <li>{@link #getHandleSize handleSize} : int (default: 22)</li>
 * <li>{@link #getFirstVisibleIndex firstVisibleIndex} : int (default: 0)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
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
 * Carousel holds multiple controls and displays them vertical or horizontal next to each other. You can define how many content items should be displayed at once or let the carousel determine that for you. Navigation is done through buttons or keys.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.8.0
 * @name sap.ui.commons.Carousel
 */
sap.ui.core.Control.extend("sap.ui.commons.Carousel", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"showNext", "showPrevious", "showElementWithId"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"orientation" : {type : "sap.ui.commons.enums.Orientation", group : "Misc", defaultValue : sap.ui.commons.enums.Orientation.horizontal},
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"height" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"defaultItemHeight" : {type : "int", group : "Misc", defaultValue : 150},
		"defaultItemWidth" : {type : "int", group : "Misc", defaultValue : 150},
		"animationDuration" : {type : "int", group : "Misc", defaultValue : 500},
		"visibleItems" : {type : "int", group : "Misc", defaultValue : null},
		"handleSize" : {type : "int", group : "Misc", defaultValue : 22},
		"firstVisibleIndex" : {type : "int", group : "Appearance", defaultValue : 0}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content", bindable : "bindable"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Carousel with name <code>sClassName</code> 
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
 * @name sap.ui.commons.Carousel.extend
 * @function
 */


/**
 * Getter for property <code>orientation</code>.
 * Can be either "horizontal" or "vertical"
 *
 * Default value is <code>horizontal</code>
 *
 * @return {sap.ui.commons.enums.Orientation} the value of property <code>orientation</code>
 * @public
 * @name sap.ui.commons.Carousel#getOrientation
 * @function
 */

/**
 * Setter for property <code>orientation</code>.
 *
 * Default value is <code>horizontal</code> 
 *
 * @param {sap.ui.commons.enums.Orientation} oOrientation  new value for property <code>orientation</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#setOrientation
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Width of carousel
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.Carousel#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Height of carousel
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.commons.Carousel#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#setHeight
 * @function
 */


/**
 * Getter for property <code>defaultItemHeight</code>.
 * Default height of item in carousel if no height can be determined
 *
 * Default value is <code>150</code>
 *
 * @return {int} the value of property <code>defaultItemHeight</code>
 * @public
 * @name sap.ui.commons.Carousel#getDefaultItemHeight
 * @function
 */

/**
 * Setter for property <code>defaultItemHeight</code>.
 *
 * Default value is <code>150</code> 
 *
 * @param {int} iDefaultItemHeight  new value for property <code>defaultItemHeight</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#setDefaultItemHeight
 * @function
 */


/**
 * Getter for property <code>defaultItemWidth</code>.
 * Default width of item in carousel if no height can be determined
 *
 * Default value is <code>150</code>
 *
 * @return {int} the value of property <code>defaultItemWidth</code>
 * @public
 * @name sap.ui.commons.Carousel#getDefaultItemWidth
 * @function
 */

/**
 * Setter for property <code>defaultItemWidth</code>.
 *
 * Default value is <code>150</code> 
 *
 * @param {int} iDefaultItemWidth  new value for property <code>defaultItemWidth</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#setDefaultItemWidth
 * @function
 */


/**
 * Getter for property <code>animationDuration</code>.
 * Duration for animation when navigating through children
 *
 * Default value is <code>500</code>
 *
 * @return {int} the value of property <code>animationDuration</code>
 * @public
 * @name sap.ui.commons.Carousel#getAnimationDuration
 * @function
 */

/**
 * Setter for property <code>animationDuration</code>.
 *
 * Default value is <code>500</code> 
 *
 * @param {int} iAnimationDuration  new value for property <code>animationDuration</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#setAnimationDuration
 * @function
 */


/**
 * Getter for property <code>visibleItems</code>.
 * If defined, the carousel displays the number of items defined. Items will be resized to fit the area.
 *
 * Default value is <code></code>
 *
 * @return {int} the value of property <code>visibleItems</code>
 * @public
 * @name sap.ui.commons.Carousel#getVisibleItems
 * @function
 */

/**
 * Setter for property <code>visibleItems</code>.
 *
 * Default value is <code></code> 
 *
 * @param {int} iVisibleItems  new value for property <code>visibleItems</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#setVisibleItems
 * @function
 */


/**
 * Getter for property <code>handleSize</code>.
 * Size of the handle in pixels. (Height for vertical carousel, width for horizontal carousel)
 *
 * Default value is <code>22</code>
 *
 * @return {int} the value of property <code>handleSize</code>
 * @public
 * @name sap.ui.commons.Carousel#getHandleSize
 * @function
 */

/**
 * Setter for property <code>handleSize</code>.
 *
 * Default value is <code>22</code> 
 *
 * @param {int} iHandleSize  new value for property <code>handleSize</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#setHandleSize
 * @function
 */


/**
 * Getter for property <code>firstVisibleIndex</code>.
 * The index of the element in the content aggreation which is displayed first on rendering
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>firstVisibleIndex</code>
 * @public
 * @since 1.11.0
 * @name sap.ui.commons.Carousel#getFirstVisibleIndex
 * @function
 */

/**
 * Setter for property <code>firstVisibleIndex</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iFirstVisibleIndex  new value for property <code>firstVisibleIndex</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.0
 * @name sap.ui.commons.Carousel#setFirstVisibleIndex
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Controls which are displayed inside the carousel
 * 
 * <strong>Note</strong>: this is the default aggregation for Carousel.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.commons.Carousel#getContent
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
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.commons.Carousel#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Carousel#removeAllContent
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
 * @name sap.ui.commons.Carousel#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#destroyContent
 * @function
 */


/**
 * Binder for aggregation <code>content</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#bindContent
 * @function
 */

/**
 * Unbinder for aggregation <code>content</code>.
 *
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Carousel#unbindContent
 * @function
 */


/**
 * Shows next item in carousel. This can be only used after the component is rendered.
 *
 * @name sap.ui.commons.Carousel.prototype.showNext
 * @function

 * @type void
 * @public
 */


/**
 * Shows previous item in carousel. This can be only used after the component is rendered.
 *
 * @name sap.ui.commons.Carousel.prototype.showPrevious
 * @function

 * @type void
 * @public
 */


/**
 * Shows the element with id specified. This can be only used after the component is rendered.
 *
 * @name sap.ui.commons.Carousel.prototype.showElementWithId
 * @function

 * @type void
 * @public
 */


// Start of sap\ui\commons\Carousel.js
jQuery.sap.require("sap.ui.core.ResizeHandler");
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");

/**
 * Initialize the carousel control
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype.init = function() {
	this._visibleItems = 0;
};

/**
 * Clean up control when it is destroyed
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype.exit = function() {
	// Cleanup resize event registration on exit
	if (this.sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
	this._destroyItemNavigation();
};

/**
 * If one of the navigation buttons is clicked we trigger the navigation
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype.onclick = function(oEvent) {
	var sCarouselId = this.getId();

	switch (oEvent.target) {
	case jQuery.sap.byId(sCarouselId + '-prevbutton')[0]:
		this.showPrevious();
		break;
	case jQuery.sap.byId(sCarouselId + '-nextbutton')[0]:
		this.showNext();
		break;
	default:
		return;
	}
};

/**
 * Used for before-rendering initialization.
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype.onBeforeRendering = function() {
	// Cleanup resize event registration before re-rendering
	if (this.sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};

/**
 * Used for after-rendering initialization.
 *
 * @private
 */
sap.ui.commons.Carousel.prototype.onAfterRendering = function() {
	// Define which attribute needs to be animated
	if (this.getOrientation() == "vertical") {
		this._sAnimationAttribute = 'margin-top';
	} else {
		if (sap.ui.getCore().getConfiguration().getRTL()) {
			this._sAnimationAttribute = 'margin-right';
		} else {
			this._sAnimationAttribute = 'margin-left';
		}
	}

	this.showElementWithId(this._getItemIdByIndex(this.getFirstVisibleIndex()));

	this.calculateAndSetSize();
	this.oDomRef = this.getDomRef();
	this.sResizeListenerId = sap.ui.core.ResizeHandler.register(this.oDomRef, jQuery.proxy(this.onresize, this));
	
	this._initItemNavigation();
};

/**
 * Initialize item navigation
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype._initItemNavigation = function() {
	var $this = this.$();
	var $scrollList = this.$("scrolllist");

	if (!this._oItemNavigation) {
		this._oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
		this._oItemNavigation.setCycling(true);
		this.addDelegate(this._oItemNavigation);
		//Setting focus on next to an invisible element changes the scollPosition and messes up correct display
		//So after setting the focus, we need to reset the left scrollpos
		this._oItemNavigation.attachEvent(sap.ui.core.delegate.ItemNavigation.Events.AfterFocus, function(oEvent) {
			var $ContentArea = this.$("contentarea"),
				$ScrollList = this.$("scrolllist");

			// ItemNavigation should only handle keyboard, do not set the focus on a carousel item if clicked on control inside
			var oOrgEvent = oEvent.getParameter("event");
			if (oOrgEvent && oOrgEvent.type == "mousedown") {
				var bItem = false;
				for ( var i = 0; i < $ScrollList.children().length; i++) {
					var oItem = $ScrollList.children()[i];
					if (oOrgEvent.target.id == oItem.id) {
						bItem = true;
						break;
					}
				}
				if (!bItem) {
					// something inside carousel item clicked -> focus this one
					oOrgEvent.target.focus();
				}
			}

			if (sap.ui.getCore().getConfiguration().getRTL()) {
				$ContentArea.scrollLeft($ScrollList.width()  - $ContentArea.width());
			} else {
				$ContentArea.scrollLeft(0);
			}
		}, this);
	}

	this._oItemNavigation.setRootDomRef($scrollList[0]);
	this._oItemNavigation.setItemDomRefs($scrollList.children());
}

/**
 * Destroy item navigation
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype._destroyItemNavigation = function() {
	if (this._oItemNavigation) {
		this._oItemNavigation.destroy();
		this._oItemNavigation = undefined;
	}
}

/**
 * Called after the theme has been switched. Some adjustments required.
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype.onThemeChanged = function (oEvent) {
	this.calculateAndSetSize();
};

/**
 * Focus in handling
 * handles the focus when you tab into the control
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype.onfocusin = function(oEvent) {
	var $target = jQuery(oEvent.target);
	// KEYBOARD HANDLING (_bIgnoreFocusIn is set in onsaptabXXX)
	if (!this._bIgnoreFocusIn && ($target.hasClass("sapUiCrslBefore") || $target.hasClass("sapUiCrslAfter"))) {
		// when entering the before or after helper DOM elements we put the
		// focus on the current focus element of the item navigation and we
		// leave the action mode!
		this._leaveActionMode();
		// set the focus on the last focused dom ref of the item navigation or
		// in case if not set yet (tab previous into item nav) then we set the
		// focus to the root domref
		jQuery(this._oItemNavigation.getFocusedDomRef() || this._oItemNavigation.getRootDomRef()).focus();
	}
};

/**
 * If we are in action mode we only allow tabbing within the selected element
 * else we focus on the next element in the tab chain (not in the carousel item)
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype.onsaptabnext = function(oEvent) {
	var $this = this.$();
	if (this._bActionMode) {
		if ($this.find(".sapUiCrslScl").lastFocusableDomRef() === oEvent.target) {
			$this.find(".sapUiCrslScl").firstFocusableDomRef().focus();
			oEvent.preventDefault();
			oEvent.stopPropagation();
		}
	} else {
		if (this._oItemNavigation.getFocusedDomRef() === oEvent.target) {
			this._bIgnoreFocusIn = true;
			$this.find(".sapUiCrslAfter").focus();
			this._bIgnoreFocusIn = false;
		}
	}
};

/**
 * If we are in action mode we only allow tabbing within the selected element
 * else we focus on the previous element in the tab chain (not in the carousel item)
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype.onsaptabprevious = function(oEvent) {
	var $this = this.$();
	if (this._bActionMode) {
		if ($this.find(".sapUiCrslScl").firstFocusableDomRef() === oEvent.target) {
			$this.find(".sapUiCrslScl").lastFocusableDomRef().focus();
			oEvent.preventDefault();
			oEvent.stopPropagation();
		}
	} else {
		if (this._oItemNavigation.getFocusedDomRef() === oEvent.target &&
				jQuery.sap.containsOrEquals($this.find(".sapUiCrslScl").get(0), oEvent.target)) {
			this._bIgnoreFocusIn = true;
			$this.find(".sapUiCrslBefore").focus();
			this._bIgnoreFocusIn = false;
		}
	}
};

/**
 * handle the ESCAPE key to leave the action mode
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype.onsapescape = function(oEvent) {
	this._leaveActionMode(oEvent);
};

/**
 * Trigger the navigation to the next item and stop current animations (if available)
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype.onsapnext = function(oEvent) {
	var $target = jQuery(oEvent.target);
	var $ScrollList = this.$("scrolllist");
	$ScrollList.stop(true, true);
	if ($target.hasClass('sapUiCrslItm') && $target.nextAll(':visible').length < 2) {
		this.showNext();
		oEvent.preventDefault();
	}
};

/**
 * Trigger the navigation to the previous item and stop current animations (if available)
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype.onsapprevious = function(oEvent) {
	var $target = jQuery(oEvent.target);
	var $ScrollList = this.$("scrolllist");
	$ScrollList.stop(true, true);
	if ($target.hasClass('sapUiCrslItm') && $target.prevAll(':visible').length < 2) {
		this.showPrevious();
		oEvent.preventDefault();
	}
};

/**
 * If in action mode and F2 is pressed we leave the action mode
 * If not in action mode and F2 or enter is pressed we enter the action mode
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype.onkeydown = function(oEvent) {
	var $this = this.$();
	if (!this._bActionMode &&
		oEvent.keyCode == jQuery.sap.KeyCodes.F2 ||
		oEvent.keyCode == jQuery.sap.KeyCodes.ENTER) {
		if ($this.find(".sapUiCrslScl li:focus").length > 0) {
			this._enterActionMode($this.find(".sapUiCrslScl li:focus :sapFocusable").get(0));
			oEvent.preventDefault();
			oEvent.stopPropagation();
		}
	} else if (this._bActionMode &&
		oEvent.keyCode == jQuery.sap.KeyCodes.F2) {
		this._leaveActionMode(oEvent);
	} 
};

/**
 * Handle clicking into elements
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype.onmouseup = function(oEvent) {
	if (this.$().find(".sapUiCrslScl li :focus").length > 0) {
		// when clicking into a focusable control we enter the action mode!
		this._enterActionMode(this.$().find(".sapUiCrslScl li :focus").get(0));
	} else {
		// when clicking anywhere else in the table we leave the action mode!
		this._leaveActionMode(oEvent);
	}
};

sap.ui.commons.Carousel.prototype.onswipeleft = function(oEvent) {
	this.showNext();
};

sap.ui.commons.Carousel.prototype.onswiperight = function(oEvent) {
	this.showPrevious();
};


/**
 * Enter action mode
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype._enterActionMode = function(oDomRef) {
	// only enter the action mode when not already in action mode
	if (oDomRef && !this._bActionMode) {

		// in the action mode we need no item navigation
		this._bActionMode = true;
		this.removeDelegate(this._oItemNavigation);

		// remove the tab index from the item navigation
		jQuery(this._oItemNavigation.getFocusedDomRef()).attr("tabindex", "-1");
		
		//set aria active descendent
		this.$("scrolllist").attr("aria-activedescendant", jQuery(this._oItemNavigation.getFocusedDomRef()).attr("id"));

		// set the focus to the active control
		jQuery(oDomRef).focus();
	}
};

/**
 * Leave action mode
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype._leaveActionMode = function(oEvent) {
	if (this._bActionMode) {

		// in the navigation mode we use the item navigation
		this._bActionMode = false;
		this.addDelegate(this._oItemNavigation);

		// reset the tabindex of the focused domref of the item navigation
		jQuery(this._oItemNavigation.getFocusedDomRef()).attr("tabindex", "0");

		//remove aria active descendent
		this.$("scrolllist").removeAttr("aria-activedescendant");

		// when we have an event which is responsible to leave the action mode
		// we search for the closest
		if (oEvent) {
			if (jQuery(oEvent.target).closest("li[tabindex=-1]").length > 0) {
				// triggered when clicking into an item, then we focus the item
				var iIndex = jQuery(this._oItemNavigation.aItemDomRefs).index(jQuery(oEvent.target).closest("li[tabindex=-1]").get(0));
				this._oItemNavigation.focusItem(iIndex, null);
			} else {
				// somewhere else means whe check if the click happend inside
				// the container, then we focus the last focused element
				if (jQuery.sap.containsOrEquals(this.$().find(".sapUiCrslScl").get(0), oEvent.target)) {
					this._oItemNavigation.focusItem(this._oItemNavigation.getFocusedIndex(), null);
				}
			}
		} else {
			// when no event is given we just focus the last focused index
			this._oItemNavigation.focusItem(this._oItemNavigation.getFocusedIndex(), null);
		}
	}
};

/**
 * Function is called when window is resized
 *
 * @param {jQuery.Event}
 *            oEvent
 * @private
 */
sap.ui.commons.Carousel.prototype.onresize = function(oEvent) {
	if (!this.getDomRef()) {
		// carousel is not rendered, maybe deleted from DOM -> deregister resize
		// handler and do nothing
		// Cleanup resize event registration on exit
		if (this.sResizeListenerId) {
			sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
			this.sResizeListenerId = null;
		}
		return;
	}

	this.calculateAndSetSize();
};

/**
 * Slide to previous element
 *
 * @public
 */
sap.ui.commons.Carousel.prototype.showPrevious = function() {
	var mAnimationArguments = {};
	mAnimationArguments[this._sAnimationAttribute] = 0;
	var $ScrollList = this.$("scrolllist");
	var $ContentArea = this.$("contentarea");
	if ($ScrollList.children('li').length < 2) {
		return;
	}
	$ScrollList.stop(true, true);
	$ScrollList.css(this._sAnimationAttribute, -this._iMaxWidth);
	var $lastItem = $ScrollList.children('li:last');
	var $firstItem = $ScrollList.children('li:first');
	this._showAllItems();
	$lastItem.insertBefore($firstItem);
	$ScrollList.append($lastItem.sapExtendedClone(true));
	var me = this;
	$ScrollList.animate(mAnimationArguments, this.getAnimationDuration(), function() {
			$ScrollList.children('li:last').remove();
			me.setProperty("firstVisibleIndex", me._getContentIndex($ScrollList.children('li:first').attr('id')), true);
			me._hideInvisibleItems();
		});
};

/**
 * Slide to next element
 *
 * @public
 */
sap.ui.commons.Carousel.prototype.showNext = function() {
	var mAnimationArguments = {};
	mAnimationArguments[this._sAnimationAttribute] = -this._iMaxWidth;
	var $ScrollList = this.$("scrolllist");
	var $ContentArea = this.$("contentarea");
	if ($ScrollList.children('li').length < 2) {
		return;
	}
	$ScrollList.stop(true, true);
	this._showAllItems();
	var sAnimationAttribute = this._sAnimationAttribute;
	var me = this;
	var $firstItem = $ScrollList.children('li:first');
	$firstItem.appendTo($ScrollList);
	$firstItem.sapExtendedClone(true).insertBefore($ScrollList.children('li:first'));
	$ScrollList.animate(mAnimationArguments, this.getAnimationDuration(), function() {
			$ScrollList.children('li:first').remove();
			jQuery(this).css(sAnimationAttribute, '0px');
			me.setProperty("firstVisibleIndex", me._getContentIndex($ScrollList.children('li:first').attr('id')), true);
			me._hideInvisibleItems();
		});
};

/**
 * Slide to specific element
 *
 * @public
 * @param {string} sElementId
 */
sap.ui.commons.Carousel.prototype.showElementWithId = function(sElementId) {
	this._showAllItems();
	var $ScrollList = this.$("scrolllist");
	sElementId = this.getId() + "-item-" + sElementId;
	var index = $ScrollList.children('li').index(jQuery.sap.byId(sElementId));
	$ScrollList.children('li:lt(' + index + ')').appendTo($ScrollList);
	this._hideInvisibleItems();
};

sap.ui.commons.Carousel.prototype.calculateAndSetSize = function() {
	var aContent = this.getContent();
	var sCarouselId = this.getId();

	this._showAllItems();

	if (aContent.length > 0) {
		var maxWidth = 0;
		var maxHeight = 0;

		for ( var i = 0; i < aContent.length; i++) {
			var childWidth, childHeight;
			try {
				childWidth = aContent[i].getWidth();
				if (childWidth.substr(-1) == "%") {
					childWidth = this.getDefaultItemWidth();
				}
			} catch (e) {
				childWidth = this.getDefaultItemWidth();
			}
			try {
				childHeight = aContent[i].getHeight();
				if (childHeight.substr(-1) == "%") {
					childHeight = this.getDefaultItemHeight();
				}
			} catch (e) {
				childHeight = this.getDefaultItemHeight();
			}
			maxWidth = Math.max(maxWidth, parseInt(childWidth, 10));
			maxHeight = Math.max(maxHeight, parseInt(childHeight, 10));
		}

		if (maxWidth == 0 || isNaN(maxWidth)) {
			maxWidth = this.getDefaultItemWidth();
		}
		if (maxHeight == 0 || isNaN(maxHeight)) {
			maxHeight = this.getDefaultItemHeight();
		}

		var contentBarSize;
		var visibleItems = this.getVisibleItems();
		var $Me = jQuery.sap.byId(sCarouselId);
		var $NextButton = jQuery.sap.byId(sCarouselId + '-nextbutton');
		var $PrevButton = jQuery.sap.byId(sCarouselId + '-prevbutton');
		var $ContentArea = jQuery.sap.byId(sCarouselId + '-contentarea');

		if (this.getWidth() && this.getOrientation() == "vertical") {
			maxWidth = $Me.width();
		}
		if (this.getHeight() && this.getOrientation() == "horizontal") {
			maxHeight = $Me.height();
		}

		this.$().addClass('sapUiCrsl' + jQuery.sap.charToUpperCase(this.getOrientation(), 0));

		if (this.getOrientation() == "horizontal") {
			contentBarSize = $Me.width() - this.getHandleSize() * 2 - 1;
			$ContentArea.css('left', this.getHandleSize() + "px").css('right', this.getHandleSize() + "px");

			if (visibleItems == 0) {
				visibleItems = Math.floor(contentBarSize / maxWidth);
			}

			maxWidth = contentBarSize / visibleItems;
			this._iMaxWidth = maxWidth;

			var cLineHeight = maxHeight + "px";
			$ContentArea.find('.sapUiCrslItm').css("width", maxWidth + "px").css("height", maxHeight + "px");
			$PrevButton.css("height", maxHeight).css("line-height", cLineHeight);
			$NextButton.css("height", maxHeight).css("line-height", cLineHeight);
			$ContentArea.height(maxHeight);
			$Me.height(maxHeight);
		} else {
			contentBarSize = $Me.height() - this.getHandleSize() * 2 - 1;
			$ContentArea.css('top', this.getHandleSize() + "px").css('bottom', this.getHandleSize() + "px");

			if (visibleItems == 0) {
				visibleItems = Math.floor(contentBarSize / maxHeight);
			}

			maxHeight = contentBarSize / visibleItems;
			this._iMaxWidth = maxHeight;

			$ContentArea.find('.sapUiCrslItm').css("width", maxWidth + "px").css("height", maxHeight + "px");
			$PrevButton.width(maxWidth).after($ContentArea);
			$NextButton.width(maxWidth);
			$ContentArea.width(maxWidth);
			$Me.width(maxWidth);
		}
		this._visibleItems = visibleItems;
		this._hideInvisibleItems();
	}
};

sap.ui.commons.Carousel.prototype.getFocusDomRef = function() {
	return this.oContentArea;
};

/**
 * Make all carousel items visible
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype._showAllItems = function() {
	var $ContentArea = this.$("contentarea");
	$ContentArea.find('.sapUiCrslItm').show();
};

/**
 * Hide all carousel items
 * 
 * @private
 */
sap.ui.commons.Carousel.prototype._hideInvisibleItems = function() {
	var $ContentArea = this.$("contentarea");
	$ContentArea.find('.sapUiCrslItm:gt(' + (this._visibleItems - 1)  + ')').hide();
};

sap.ui.commons.Carousel.prototype._getContentIndex = function(sId) {
	var aIdParts = sId.split("-item-");
	return jQuery.inArray(sap.ui.getCore().byId(aIdParts[1]), this.getContent());
};

sap.ui.commons.Carousel.prototype._getItemIdByIndex = function(iIndex) {
	var oContent = this.getContent()[iIndex];
	if (!oContent) {
		return null;
	}
	return oContent.getId();
};

/**
 * Setter for property <code>firstVisibleIndex</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iFirstVisibleIndex  new value for property <code>firstVisibleIndex</code>
 * @return {sap.ui.commons.Carousel} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.0
 * @name sap.ui.commons.Carousel#setFirstVisibleIndex
 * @function
 */
sap.ui.commons.Carousel.prototype.setFirstVisibleIndex = function(iFirstVisibleIndex) {
	this.setProperty("firstVisibleIndex", iFirstVisibleIndex, true);
	this.showElementWithId(this._getItemIdByIndex(iFirstVisibleIndex));
	if (this._oItemNavigation) {
		this._oItemNavigation.focusItem(iFirstVisibleIndex);
	}
	return this;
};


//Fix because jQuery clone doesn't support cloning textarea values
//jQuery Ticket #3016 (http://bugs.jquery.com/ticket/3016)

//Textarea and select clone() bug workaround | Spencer Tipping
//Licensed under the terms of the MIT source code license

//Motivation.
//jQuery's clone() method works in most cases, but it fails to copy the value of textareas and select elements. This patch replaces jQuery's clone() method with a wrapper that fills in the
//values after the fact.

//An interesting error case submitted by Piotr Przybył: If two <select> options had the same value, the clone() method would select the wrong one in the cloned box. The fix, suggested by Piotr
//and implemented here, is to use the selectedIndex property on the <select> box itself rather than relying on jQuery's value-based val().

(function (original) {
	jQuery.fn.sapExtendedClone = function () {
		var result           = original.apply(this, arguments);
		var my_textareas     = this.find('textarea').add(this.filter('textarea'));
		var result_textareas = result.find('textarea').add(result.filter('textarea'));
		var my_selects       = this.find('select').add(this.filter('select'));
		var result_selects   = result.find('select').add(result.filter('select'));

		for (var i = 0, l = my_textareas.length; i < l; ++i) {
			jQuery(result_textareas[i]).val(jQuery(my_textareas[i]).val());
		}
		for (var i = 0, l = my_selects.length;   i < l; ++i) {
			result_selects[i].selectedIndex = my_selects[i].selectedIndex;
		}

		return result;
	};
}) (jQuery.fn.clone);