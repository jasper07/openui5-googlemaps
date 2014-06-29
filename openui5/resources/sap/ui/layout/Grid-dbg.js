/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.layout.Grid.
jQuery.sap.declare("sap.ui.layout.Grid");
jQuery.sap.require("sap.ui.layout.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Grid.
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
 * <li>{@link #getVSpacing vSpacing} : int (default: 1)</li>
 * <li>{@link #getHSpacing hSpacing} : int (default: 1)</li>
 * <li>{@link #getPosition position} : sap.ui.layout.GridPosition (default: "Left")</li>
 * <li>{@link #getDefaultSpan defaultSpan} : sap.ui.layout.GridSpan (default: "L3 M6 S12")</li>
 * <li>{@link #getDefaultIndent defaultIndent} : sap.ui.layout.GridIndent (default: "L0 M0 S0")</li>
 * <li>{@link #getContainerQuery containerQuery} : boolean (default: false)</li></ul>
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
 * The Grid control is a layout which positions its child controls in a 12 column flow layout. Its children can be specified to take on a variable amount of columns depending on available screen size. With this control it is possible to achieve flexible layouts and line-breaks for large-, medium- and small-sized screens, such as desktop, tablet, and mobile. The Grid control's width can be percentage- or pixel-based and the spacing between its columns can be set to various pre-defined values.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.15.0
 * @name sap.ui.layout.Grid
 */
sap.ui.core.Control.extend("sap.ui.layout.Grid", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.layout",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"vSpacing" : {type : "int", group : "Dimension", defaultValue : 1},
		"hSpacing" : {type : "int", group : "Dimension", defaultValue : 1},
		"position" : {type : "sap.ui.layout.GridPosition", group : "Dimension", defaultValue : "Left"},
		"defaultSpan" : {type : "sap.ui.layout.GridSpan", group : "Behavior", defaultValue : "L3 M6 S12"},
		"defaultIndent" : {type : "sap.ui.layout.GridIndent", group : "Behavior", defaultValue : "L0 M0 S0"},
		"containerQuery" : {type : "boolean", group : "Behavior", defaultValue : false}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.layout.Grid with name <code>sClassName</code> 
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
 * @name sap.ui.layout.Grid.extend
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Optional. Width of the Grid. If not specified, then 100%.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.layout.Grid#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Grid#setWidth
 * @function
 */


/**
 * Getter for property <code>vSpacing</code>.
 * Optional. Vertical spacing between the rows in the Grid. In rem, can be 0, 1 and 2.
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>vSpacing</code>
 * @public
 * @name sap.ui.layout.Grid#getVSpacing
 * @function
 */

/**
 * Setter for property <code>vSpacing</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iVSpacing  new value for property <code>vSpacing</code>
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Grid#setVSpacing
 * @function
 */


/**
 * Getter for property <code>hSpacing</code>.
 * Optional. Horizontal spacing between the content in the Grid. In rem, can be 0, 1 rem or 2 rem.
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>hSpacing</code>
 * @public
 * @name sap.ui.layout.Grid#getHSpacing
 * @function
 */

/**
 * Setter for property <code>hSpacing</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iHSpacing  new value for property <code>hSpacing</code>
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Grid#setHSpacing
 * @function
 */


/**
 * Getter for property <code>position</code>.
 * Optional. Position of the Grid in the window or surrounding container. Possible values are "Center", "Left" and "Right".
 *
 * Default value is <code>"Left"</code>
 *
 * @return {sap.ui.layout.GridPosition} the value of property <code>position</code>
 * @public
 * @name sap.ui.layout.Grid#getPosition
 * @function
 */

/**
 * Setter for property <code>position</code>.
 *
 * Default value is <code>"Left"</code> 
 *
 * @param {sap.ui.layout.GridPosition} oPosition  new value for property <code>position</code>
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Grid#setPosition
 * @function
 */


/**
 * Getter for property <code>defaultSpan</code>.
 * Optional. A string type that represents Grid's default span values for large, medium and small screens for the whole Grid. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
 *
 * Default value is <code>"L3 M6 S12"</code>
 *
 * @return {sap.ui.layout.GridSpan} the value of property <code>defaultSpan</code>
 * @public
 * @name sap.ui.layout.Grid#getDefaultSpan
 * @function
 */

/**
 * Setter for property <code>defaultSpan</code>.
 *
 * Default value is <code>"L3 M6 S12"</code> 
 *
 * @param {sap.ui.layout.GridSpan} sDefaultSpan  new value for property <code>defaultSpan</code>
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Grid#setDefaultSpan
 * @function
 */


/**
 * Getter for property <code>defaultIndent</code>.
 * Optional. Defines default for the whole Grid numbers of empty columns before the current span begins. It can be defined for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 0 to 11 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
 *
 * Default value is <code>"L0 M0 S0"</code>
 *
 * @return {sap.ui.layout.GridIndent} the value of property <code>defaultIndent</code>
 * @public
 * @name sap.ui.layout.Grid#getDefaultIndent
 * @function
 */

/**
 * Setter for property <code>defaultIndent</code>.
 *
 * Default value is <code>"L0 M0 S0"</code> 
 *
 * @param {sap.ui.layout.GridIndent} sDefaultIndent  new value for property <code>defaultIndent</code>
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Grid#setDefaultIndent
 * @function
 */


/**
 * Getter for property <code>containerQuery</code>.
 * If true then not the media Query ( device screen size), but the size of the container surrounding the grid defines the current range (large, medium or small).
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>containerQuery</code>
 * @public
 * @name sap.ui.layout.Grid#getContainerQuery
 * @function
 */

/**
 * Setter for property <code>containerQuery</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bContainerQuery  new value for property <code>containerQuery</code>
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Grid#setContainerQuery
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Controls that are placed into Grid layout.
 * 
 * <strong>Note</strong>: this is the default aggregation for Grid.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.layout.Grid#getContent
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
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Grid#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Grid#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.layout.Grid#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.layout.Grid#removeAllContent
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
 * @name sap.ui.layout.Grid#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.layout.Grid} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.Grid#destroyContent
 * @function
 */


// Start of sap\ui\layout\Grid.js
/**
 * This file defines behavior for the control
 */
(function() {
	
	sap.ui.layout.Grid.prototype.init = function() {
		this._iBreakPointTablet = sap.ui.Device.media._predefinedRangeSets[sap.ui.Device.media.RANGESETS.SAP_STANDARD].points[0]; 
		this._iBreakPointDesktop = sap.ui.Device.media._predefinedRangeSets[sap.ui.Device.media.RANGESETS.SAP_STANDARD].points[1];
	};
	
	/**
	 * Used for after-rendering initialization.
	 *
	 * @private
	 */
	sap.ui.layout.Grid.prototype.onAfterRendering = function() {
		if (this.getContainerQuery()) {
			this._sContainerResizeListener = sap.ui.core.ResizeHandler.register(this, jQuery.proxy(this._onParentResize, this));
			this._onParentResize();
		} else {
			sap.ui.Device.media.attachHandler(this._handleMediaChange, this, sap.ui.Device.media.RANGESETS.SAP_STANDARD);
		}
	};
	
	sap.ui.layout.Grid.prototype.onBeforeRendering = function() {
		// Cleanup resize event registration before re-rendering
		this._cleanup();
	};
	
	sap.ui.layout.Grid.prototype.exit = function() {
		// Cleanup resize event registration on exit
		this._cleanup();
	};
	
	/**
	 * Clean up the control.
	 * 
	 * @private
	 */
	sap.ui.layout.Grid.prototype._cleanup = function() {	
		// Cleanup resize event registration
		if (this._sContainerResizeListener) {
			sap.ui.core.ResizeHandler.deregister(this._sContainerResizeListener);
			this._sContainerResizeListener = null;
		}
		
		// Device Media Change handler
		sap.ui.Device.media.detachHandler(this._handleMediaChange, this, sap.ui.Device.media.RANGESETS.SAP_STANDARD);
	};
	
	sap.ui.layout.Grid.prototype._handleMediaChange  = function(oParams) {
		this._toggleClass(oParams.name);
	};
	
	sap.ui.layout.Grid.prototype._setBreakPointTablet = function( breakPoint) {
		this._iBreakPointTablet = breakPoint;
	};
	
	sap.ui.layout.Grid.prototype._setBreakPointDesktop = function( breakPoint) {
		this._iBreakPointDesktop = breakPoint;
	};
	
	sap.ui.layout.Grid.prototype._onParentResize = function() {	
		var oDomRef = this.getDomRef();
		// Prove if Dom reference exist, and if not - clean up the references.
		if (!oDomRef) {
			this._cleanup();
			return;
		}

		if (!jQuery(oDomRef).is(":visible")) {
			return;
		}

		var iCntWidth = oDomRef.clientWidth;
		if (iCntWidth <= this._iBreakPointTablet) {
			this._toggleClass("Phone");	
		} else if ((iCntWidth > this._iBreakPointTablet) && (iCntWidth <= this._iBreakPointDesktop)) {
			this._toggleClass("Tablet");
		} else {
			this._toggleClass("Desktop");
		}
	};
	
	
	sap.ui.layout.Grid.prototype._toggleClass = function(sMedia) {
		var $DomRef = this.$();
		if (!$DomRef) return;
		
		if ($DomRef.hasClass("sapUiRespGridMedia-Std-" + sMedia)) {
			return;
		}
		
		$DomRef.toggleClass("sapUiRespGridMedia-Std-" + sMedia, true);     
		if (sMedia === "Phone") {
			$DomRef.toggleClass("sapUiRespGridMedia-Std-Desktop", false).toggleClass("sapUiRespGridMedia-Std-Tablet", false);
		} else if (sMedia === "Tablet") {
			$DomRef.toggleClass("sapUiRespGridMedia-Std-Desktop", false).toggleClass("sapUiRespGridMedia-Std-Phone", false);
		} else {
			$DomRef.toggleClass("sapUiRespGridMedia-Std-Phone", false).toggleClass("sapUiRespGridMedia-Std-Tablet", false);
		}
		
		this.fireEvent("mediaChanged", {media: sMedia});
	};
	
	
	/*
     * Get span information for the Control
     * @param {sap.ui.core.Control} Control instance
     * @return {Object} Grid layout data
     * @private
     */
	sap.ui.layout.Grid.prototype._getLayoutDataForControl = function(oControl) {
		var oLayoutData = oControl.getLayoutData();

		if (!oLayoutData) {
			return undefined;
		} else if (oLayoutData instanceof sap.ui.layout.GridData) {
			return oLayoutData;
		} else if (oLayoutData.getMetadata().getName() == "sap.ui.core.VariantLayoutData") {
			// multiple LayoutData available - search here
			var aLayoutData = oLayoutData.getMultipleLayoutData();
			for ( var i = 0; i < aLayoutData.length; i++) {
				var oLayoutData2 = aLayoutData[i];
				if (oLayoutData2 instanceof sap.ui.layout.GridData) {
					return oLayoutData2;
				}
			}
		}
	};
	
	/*
	 * If LayoutData is changed on one inner control, the whole grid needs to re-render
	 * because it may influence other rows and columns
	 */
	sap.ui.layout.Grid.prototype.onLayoutDataChange = function(oEvent){
		if (this.getDomRef()) {
			// only if already rendered
			this.invalidate();
		}
	};
}());
