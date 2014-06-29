/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ResponsiveContainer.
jQuery.sap.declare("sap.ui.commons.ResponsiveContainer");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ResponsiveContainer.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getRanges ranges} : sap.ui.commons.ResponsiveContainerRange[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getDefaultContent defaultContent} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.ResponsiveContainer#event:rangeSwitch rangeSwitch} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Is used to provide a container, which can show different content depending on its current width. It fires an event, whenever a new range is reached. In addition the content of the new range is automatically shown, if it is set.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.ResponsiveContainer
 */
sap.ui.core.Control.extend("sap.ui.commons.ResponsiveContainer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'}
	},
	aggregations : {
    	"ranges" : {type : "sap.ui.commons.ResponsiveContainerRange", multiple : true, singularName : "range"}, 
    	"content" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}
	},
	associations : {
		"defaultContent" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"rangeSwitch" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.ResponsiveContainer with name <code>sClassName</code> 
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
 * @name sap.ui.commons.ResponsiveContainer.extend
 * @function
 */

sap.ui.commons.ResponsiveContainer.M_EVENTS = {'rangeSwitch':'rangeSwitch'};


/**
 * Getter for property <code>width</code>.
 * The width of the responsive container.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.ResponsiveContainer#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ResponsiveContainer#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * The width of the responsive container.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.commons.ResponsiveContainer#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ResponsiveContainer#setHeight
 * @function
 */


/**
 * Getter for aggregation <code>ranges</code>.<br/>
 * The ranges defined for this container
 * 
 * @return {sap.ui.commons.ResponsiveContainerRange[]}
 * @public
 * @name sap.ui.commons.ResponsiveContainer#getRanges
 * @function
 */


/**
 * Inserts a range into the aggregation named <code>ranges</code>.
 *
 * @param {sap.ui.commons.ResponsiveContainerRange}
 *          oRange the range to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the range should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the range is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the range is inserted at 
 *             the last position        
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ResponsiveContainer#insertRange
 * @function
 */

/**
 * Adds some range <code>oRange</code> 
 * to the aggregation named <code>ranges</code>.
 *
 * @param {sap.ui.commons.ResponsiveContainerRange}
 *            oRange the range to add; if empty, nothing is inserted
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ResponsiveContainer#addRange
 * @function
 */

/**
 * Removes an range from the aggregation named <code>ranges</code>.
 *
 * @param {int | string | sap.ui.commons.ResponsiveContainerRange} vRange the range to remove or its index or id
 * @return {sap.ui.commons.ResponsiveContainerRange} the removed range or null
 * @public
 * @name sap.ui.commons.ResponsiveContainer#removeRange
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>ranges</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.ResponsiveContainerRange[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.ResponsiveContainer#removeAllRanges
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.ResponsiveContainerRange</code> in the aggregation named <code>ranges</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.ResponsiveContainerRange}
 *            oRange the range whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.ResponsiveContainer#indexOfRange
 * @function
 */
	

/**
 * Destroys all the ranges in the aggregation 
 * named <code>ranges</code>.
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ResponsiveContainer#destroyRanges
 * @function
 */


/**
 * The default content to show, in case the range does not provide content
 *
 * @return {string} Id of the element which is the current target of the <code>defaultContent</code> association, or null
 * @public
 * @name sap.ui.commons.ResponsiveContainer#getDefaultContent
 * @function
 */

/**
 * The default content to show, in case the range does not provide content
 *
 * @param {string | sap.ui.core.Control} vDefaultContent 
 *    Id of an element which becomes the new target of this <code>defaultContent</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ResponsiveContainer#setDefaultContent
 * @function
 */


	
/**
 * The event is fired the width of the container reaches a new range. 
 *
 * @name sap.ui.commons.ResponsiveContainer#rangeSwitch
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.commons.ResponsiveContainerRange} oControlEvent.getParameters.currentRange The current range
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'rangeSwitch' event of this <code>sap.ui.commons.ResponsiveContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.ResponsiveContainer</code>.<br/> itself. 
 *  
 * The event is fired the width of the container reaches a new range. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.ResponsiveContainer</code>.<br/> itself.
 *
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ResponsiveContainer#attachRangeSwitch
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'rangeSwitch' event of this <code>sap.ui.commons.ResponsiveContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ResponsiveContainer#detachRangeSwitch
 * @function
 */

/**
 * Fire event rangeSwitch to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'currentRange' of type <code>sap.ui.commons.ResponsiveContainerRange</code> The current range</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ResponsiveContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.ResponsiveContainer#fireRangeSwitch
 * @function
 */


// Start of sap\ui\commons\ResponsiveContainer.js
jQuery.sap.require("sap.ui.core.ResizeHandler");

/**
 * Control Initialization
 * @private
 */
sap.ui.commons.ResponsiveContainer.prototype.init = function(){
	this.oCurrentRange = null;
};

/**
 * Destructor
 * @private
 */
sap.ui.commons.ResponsiveContainer.prototype.exit = function (){
	// Cleanup resize event registration on exit
	if (this.sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};

/**
 * Before rendering
 */
sap.ui.commons.ResponsiveContainer.prototype.onBeforeRendering = function() {
	// Cleanup resize event registration before re-rendering
	if (this.sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
	if (!this.getAggregation("content")) {
		var oDefaultContent = sap.ui.getCore().byId(this.getDefaultContent());
		this.setAggregation("content", oDefaultContent);
	}
};

/**
 * After rendering
 */
sap.ui.commons.ResponsiveContainer.prototype.onAfterRendering = function() {
	var fnResizeHandler = jQuery.proxy(this.onresize, this);
	this.sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(), fnResizeHandler);
	this.refreshRangeDimensions();
	if (!this.oCurrentRange) {
		setTimeout(fnResizeHandler, 0);
	}
};

/**
 * Resize handling
 */
sap.ui.commons.ResponsiveContainer.prototype.onresize = function(oEvent) {
	var oRange = this.findMatchingRange(),
		sContentId = oRange && oRange.getContent(),
		oNewContent;
	if (this.oCurrentRange != oRange) {
		this.oCurrentRange = oRange;
		if (!oRange) {
			sContentId = this.getDefaultContent();
		}
		oNewContent = sap.ui.getCore().byId(sContentId);
		this.setAggregation("content", oNewContent);
		this.fireRangeSwitch({
			currentRange: this.oCurrentRange
		});
	}
};

/**
 * Refresh ranges, updates the range sizes from the DOM.
 * Loop through all the rendered divs for the ranges and read their width and height
 * for later comparison with the current container size
 */
sap.ui.commons.ResponsiveContainer.prototype.refreshRangeDimensions = function() {
	var aRanges = this.getRanges(),
		aRangeDimensions = [],
		$Range;
	jQuery.each(aRanges, function(i, oRange) {
		$Range = oRange.$();
		aRangeDimensions.push({
			range: oRange,
			width: $Range.width(),
			height: $Range.height()
		})
	});
	this.aRangeDimensions = aRangeDimensions;
};

/**
 * Find best matching range, finds the range which best fills the available space.
 * Reads the current width and height of the container and compares to the stored range
 * dimensions to find the best match.
 */
sap.ui.commons.ResponsiveContainer.prototype.findMatchingRange = function() {
	var $Container = this.$(),
		iWidth = $Container.width(),
		iHeight = $Container.height(),
		iRangeWidth, iRangeHeight,
		aRangeDimensions = this.aRangeDimensions,
		oMatch = null;
	jQuery.each(aRangeDimensions, function(i, oRangeDim) {
		iRangeWidth = oRangeDim.width || iWidth;
		iRangeHeight = oRangeDim.height || iHeight;
		if (iRangeWidth <= iWidth && iRangeHeight <= iHeight) {
			oRangeDim.area = iRangeWidth * iRangeHeight;
			if (!oMatch || oMatch.area < oRangeDim.area) {
				oMatch = oRangeDim;
			}
		}
	});
	return oMatch && oMatch.range;
};

