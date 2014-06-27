/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.AccordionSection.
jQuery.sap.declare("sap.ui.commons.AccordionSection");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new AccordionSection.
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
 * <li>{@link #getMaxHeight maxHeight} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getCollapsed collapsed} : boolean (default: false)</li>
 * <li>{@link #getTitle title} : string</li></ul>
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
 * <li>{@link sap.ui.commons.AccordionSection#event:scroll scroll} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Represents a panel which is a container for other controls. The container does not have any layout function.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.AccordionSection
 */
sap.ui.core.Element.extend("sap.ui.commons.AccordionSection", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"maxHeight" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"collapsed" : {type : "boolean", group : "Behavior", defaultValue : false},
		"title" : {type : "string", group : "Misc", defaultValue : null}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	},
	events : {
		"scroll" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.AccordionSection with name <code>sClassName</code> 
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
 * @name sap.ui.commons.AccordionSection.extend
 * @function
 */

sap.ui.commons.AccordionSection.M_EVENTS = {'scroll':'scroll'};


/**
 * Getter for property <code>maxHeight</code>.
 * When the section content exceeds maxHeight, a vertical scroll bar appears.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>maxHeight</code>
 * @public
 * @name sap.ui.commons.AccordionSection#getMaxHeight
 * @function
 */

/**
 * Setter for property <code>maxHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sMaxHeight  new value for property <code>maxHeight</code>
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.AccordionSection#setMaxHeight
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Requirement is that the used theme supports the control.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.commons.AccordionSection#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.AccordionSection#setEnabled
 * @function
 */


/**
 * Getter for property <code>collapsed</code>.
 * It is recommended to make some settings for the width when the section is set to 'collapsed'.
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>collapsed</code>
 * @public
 * @name sap.ui.commons.AccordionSection#getCollapsed
 * @function
 */

/**
 * Setter for property <code>collapsed</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bCollapsed  new value for property <code>collapsed</code>
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.AccordionSection#setCollapsed
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Text for the section header
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ui.commons.AccordionSection#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.AccordionSection#setTitle
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Aggregates the controls that are contained in the panel. Control layouting is browser-dependent. For a stable content layout, use a layout control as direct single child.
 * When the panel dimensions are set, the child control may have width and height of 100%;
 * when the panel dimensions are not set, the child defines the panel size.
 * 
 * <strong>Note</strong>: this is the default aggregation for AccordionSection.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.commons.AccordionSection#getContent
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
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.AccordionSection#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.AccordionSection#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.commons.AccordionSection#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.AccordionSection#removeAllContent
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
 * @name sap.ui.commons.AccordionSection#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.AccordionSection#destroyContent
 * @function
 */


/**
 * Event is fired when the user scrolls the panel. 
 *
 * @name sap.ui.commons.AccordionSection#scroll
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.left Horizontal scroll position.
 * @param {int} oControlEvent.getParameters.top Vertical scroll position.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'scroll' event of this <code>sap.ui.commons.AccordionSection</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.AccordionSection</code>.<br/> itself. 
 *  
 * Event is fired when the user scrolls the panel. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.AccordionSection</code>.<br/> itself.
 *
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.AccordionSection#attachScroll
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'scroll' event of this <code>sap.ui.commons.AccordionSection</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.AccordionSection#detachScroll
 * @function
 */

/**
 * Fire event scroll to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'left' of type <code>int</code> Horizontal scroll position.</li>
 * <li>'top' of type <code>int</code> Vertical scroll position.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.AccordionSection} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.AccordionSection#fireScroll
 * @function
 */


// Start of sap\ui\commons\AccordionSection.js
/**
 * AccordionSection Behavior Implementation
 *
 * Open:
 * - HeaderDesign not implemented yet
 */

/**
 * Do some initialization
 * @private
 */
sap.ui.commons.AccordionSection.prototype.init = function(){
   this.bIgnoreScrollEvent = true; // do not fire a scroll event initially
   this.oScrollDomRef = null;      // points to the content area
};

/**
 * Set focus on the first control
 * @private
 */
sap.ui.commons.AccordionSection.prototype.focusFirstControl = function () {
	var aControls = this.getContent();
	if (aControls[0]) {
		aControls[0].focus();
	}
};

/**
 * Set focus the arrow
 * @private
 */
sap.ui.commons.AccordionSection.prototype.focus = function () {

	var header = this.getDomRef("hdr");
	header.focus();
};

/**
 * Called after the theme has been switched, required for adjustments
 * @private
 */
sap.ui.commons.AccordionSection.prototype.onThemeChanged = function () {
	var hdrLeft = this.getDomRef("hdrL");

	if (hdrLeft) {
		hdrLeft.style.width = "auto";
		var obj = this;
		setTimeout(function() {obj.onAfterRendering();}, 0); // TODO: there is a problem in IE8, depending on what the surrounding container is...
	}

}

/**
 * Adapts size settings of the rendered HTML
 * @private
 */;
sap.ui.commons.AccordionSection.prototype.onAfterRendering = function () {

	this.oScrollDomRef = this.getDomRef("cont");
	var cont	  = this.oScrollDomRef;
	var root	  = this.getDomRef();
	var accordion = this.getParent().getDomRef();
	// if only height is set, the content area's height needs to be adapted  (should be a rare use-case)
	if (!sap.ui.commons.AccordionSection._isSizeSet(this.getParent().getWidth()) && sap.ui.commons.AccordionSection._isSizeSet(this.getMaxHeight())) {
		if (cont) {
			var contTop = cont.offsetTop;
			var targetHeight = (root.offsetHeight - contTop);
			cont.style.height = targetHeight + "px";

			var actualContHeight = cont.offsetHeight;
			if (actualContHeight > targetHeight) {
				cont.style.height = targetHeight - (actualContHeight - targetHeight) + "px";
			}
		}

	}

	var leftBorder	= jQuery(accordion).css("border-left-width");
	var rightBorder = jQuery(accordion).css("border-right-width");


	var borderTotal = parseFloat(leftBorder.substring(0, leftBorder.indexOf("px") )) + parseFloat(rightBorder.substring(0, rightBorder.indexOf("px") ));
	var oDomLabel = this.getDomRef("lbl");
	root.style.width = accordion.offsetWidth - borderTotal + "px";
	oDomLabel.style.width = accordion.offsetWidth - 30 + "px";

	//Bind the scroll event (does not bubble)
	var fnScrollProxy = this.__scrollproxy__;
	if (!fnScrollProxy) {
		fnScrollProxy = this.__scrollproxy__ = jQuery.proxy(this.onscroll, this);
	}
	this.$("cont").bind("scroll", fnScrollProxy);

};

sap.ui.commons.AccordionSection.prototype.onBeforeRendering = function() {
	var fnScrollProxy = this.__scrollproxy__;
	if (fnScrollProxy) {
		this.$("cont").unbind("scroll", fnScrollProxy);
	}
};

/**
 * Property setter for the "enabled" state
 *
 * @param bEnabled Whether the AccordionSection should be enabled, or not
 * @return {sap.ui.commons.AccordionSection} 'this' to allow method chaining
 * @public
 */
sap.ui.commons.AccordionSection.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled, true); // no re-rendering!
	var root = this.getDomRef();
	if (root) {
		// if already rendered, adapt rendered control without complete re-rendering
		if (bEnabled) {
			jQuery(root).removeClass("sapUiAcdSectionDis");
		} else {
			jQuery(root).addClass("sapUiAcdSectionDis");
		}
	}
	return this;
};


/**
 * Property setter for the "collapsed" state
 *
 * @param bCollapsed Whether the AccordionSection should be collapsed, or not
 * @private
 */
sap.ui.commons.AccordionSection.prototype._setCollapsed = function(bCollapsed) {
	this.setProperty("collapsed", bCollapsed, true); // no re-rendering!
	this._setCollapsedState(bCollapsed); // adapt rendered control without complete re-rendering
};

/**
 * Property setter for the "collapsed" state
 *
 * @param bCollapsed Whether the AccordionSection should be collapsed, or not
 * @return {sap.ui.commons.AccordionSection} 'this' to allow method chaining
 * @public
 */
sap.ui.commons.AccordionSection.prototype.setCollapsed = function(bCollapsed) {
	if(this.getParent()){

		if(!bCollapsed){
			this.getParent().openSection(this.getId());
		}
		else{
			this.getParent().closeSection(this.getId());
		}
	}
	else{
		this._setCollapsed(bCollapsed);
	}
	return this;
};


/**
 * Internal method for applying a "collapsed" state to the rendered HTML
 *
 * @param bCollapsed Whether the AccordionSection should be collapsed, or not
 * @private
 */
sap.ui.commons.AccordionSection.prototype._setCollapsedState = function(bCollapsed) {

	if (this.getDomRef()) {
		// after AccordionSection has been rendered
		if (bCollapsed) {
			var accessibility = sap.ui.getCore().getConfiguration().getAccessibility();

			// collapsing
			if (!this.getParent().getWidth()) {
				this.getDomRef().style.width = this.getDomRef().offsetWidth + "px"; // maintain the current width
			}
			jQuery(this.getDomRef()).addClass("sapUiAcdSectionColl");
			var tb = this.getDomRef("tb");
			if (tb) {
				tb.style.display = "none";
			}

			var cont = this.getDomRef("cont");
			cont.style.display = "none";
			if (accessibility) {
				cont.setAttribute("aria-expanded", "false");
				cont.setAttribute("aria-hidden", "true");
			}

			this.rerender();

		} else {
			// expanding
			if (!this.getDomRef("cont")) {
				// content has not been rendered yet, so render it now
				this.rerender(); // TODO: potentially restore focus to collapse icon/button
			} else {
				// content exists already, just make it visible again
				jQuery(this.getDomRef()).removeClass("sapUiAcdSectionColl");
				var tb = this.getDomRef("tb");
				if (tb) {
					tb.style.display = "block";
				}

				var cont = this.getDomRef("cont");
				cont.style.display = "block";
				if (accessibility) {
					cont.setAttribute("aria-expanded", "true");
				}

				if (this.getMaxHeight()) {
					this.getDomRef().style.height = this.getMaxHeight(); // restore the set height
				}
			}
		}
	}
}


/**
 * Static method that finds out whether the given CSS size is actually set.
 * Returns "true" for absolute and relative sizes, returns "false" if "null", "inherit" or "auto" is given.
 *
 * @static
 * @param sCssSize A CSS size string which must be a valid CSS size, or null
 * @private
 */;
sap.ui.commons.AccordionSection._isSizeSet = function(sCssSize) {
	return (sCssSize && !(sCssSize =="auto") && !(sCssSize == "inherit"));
}


/*   Event Handling   */

/**
 * Handles any "triggering" actions like click and space
 *
 * @param {jQuery.Event} oEvent
 * @private
 */;
sap.ui.commons.AccordionSection.prototype._handleTrigger = function(oEvent) {
	// minimize button toggled
	if((oEvent.target.id === this.getId() + "-minL") ||
			(oEvent.target.id === this.getId() + "-minR")) {
		var bCollapsed = !this.getProperty("collapsed");
		this._setCollapsed(bCollapsed);
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};

/**
 * Handles the scroll event of the browser
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.AccordionSection.prototype.onscroll = function (oEvent) {
	/**
	if (this.bIgnoreScrollEvent) { // bIgnoreScrollEvent is set to "true" if the scrollbar is moved via API calls
		this.bIgnoreScrollEvent = false;
		return;
	}
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		this.fireScroll(oDomRef.scrollTop, oDomRef.scrollLeft);
	}
	 */
};