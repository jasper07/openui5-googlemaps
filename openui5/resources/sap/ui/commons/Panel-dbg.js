/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Panel.
jQuery.sap.declare("sap.ui.commons.Panel");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Panel.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getScrollLeft scrollLeft} : int (default: 0)</li>
 * <li>{@link #getScrollTop scrollTop} : int (default: 0)</li>
 * <li>{@link #getApplyContentPadding applyContentPadding} : boolean (default: true)</li>
 * <li>{@link #getCollapsed collapsed} : boolean (default: false)</li>
 * <li>{@link #getAreaDesign areaDesign} : sap.ui.commons.enums.AreaDesign (default: sap.ui.commons.enums.AreaDesign.Fill)</li>
 * <li>{@link #getBorderDesign borderDesign} : sap.ui.commons.enums.BorderDesign (default: sap.ui.commons.enums.BorderDesign.Box)</li>
 * <li>{@link #getShowCollapseIcon showCollapseIcon} : boolean (default: true)</li>
 * <li>{@link #getText text} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li>
 * <li>{@link #getTitle title} : sap.ui.core.Title</li>
 * <li>{@link #getButtons buttons} : sap.ui.commons.Button[]</li></ul>
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
 * Represents a container with scroll functionality, the control can be used for text and controls. The Panel does not layout the embedded controls.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.Panel
 */
sap.ui.core.Control.extend("sap.ui.commons.Panel", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"setDimensions"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"scrollLeft" : {type : "int", group : "Behavior", defaultValue : 0},
		"scrollTop" : {type : "int", group : "Behavior", defaultValue : 0},
		"applyContentPadding" : {type : "boolean", group : "Appearance", defaultValue : true},
		"collapsed" : {type : "boolean", group : "Behavior", defaultValue : false},
		"areaDesign" : {type : "sap.ui.commons.enums.AreaDesign", group : "Appearance", defaultValue : sap.ui.commons.enums.AreaDesign.Fill},
		"borderDesign" : {type : "sap.ui.commons.enums.BorderDesign", group : "Appearance", defaultValue : sap.ui.commons.enums.BorderDesign.Box},
		"showCollapseIcon" : {type : "boolean", group : "Behavior", defaultValue : true},
		"text" : {type : "string", group : "Misc", defaultValue : null}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    	"title" : {type : "sap.ui.core.Title", multiple : false}, 
    	"buttons" : {type : "sap.ui.commons.Button", multiple : true, singularName : "button"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Panel with name <code>sClassName</code> 
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
 * @name sap.ui.commons.Panel.extend
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Panel width in CSS size
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.Panel#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Per default, the height for the Panel is automatically adjusted to the content. Dimension allows to explicitly specify the height.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.commons.Panel#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#setHeight
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Represents the state of the of the Panel (enabled or disabled)
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.commons.Panel#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#setEnabled
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible Panels are not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.Panel#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#setVisible
 * @function
 */


/**
 * Getter for property <code>scrollLeft</code>.
 * Specifies the scroll position from left to right. Value "0" means leftmost position.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>scrollLeft</code>
 * @public
 * @name sap.ui.commons.Panel#getScrollLeft
 * @function
 */

/**
 * Setter for property <code>scrollLeft</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iScrollLeft  new value for property <code>scrollLeft</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#setScrollLeft
 * @function
 */


/**
 * Getter for property <code>scrollTop</code>.
 * Specifies the scroll position from top to bottom. Value "0" means topmost position.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>scrollTop</code>
 * @public
 * @name sap.ui.commons.Panel#getScrollTop
 * @function
 */

/**
 * Setter for property <code>scrollTop</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iScrollTop  new value for property <code>scrollTop</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#setScrollTop
 * @function
 */


/**
 * Getter for property <code>applyContentPadding</code>.
 * Padding is theme-dependent.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>applyContentPadding</code>
 * @public
 * @name sap.ui.commons.Panel#getApplyContentPadding
 * @function
 */

/**
 * Setter for property <code>applyContentPadding</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bApplyContentPadding  new value for property <code>applyContentPadding</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#setApplyContentPadding
 * @function
 */


/**
 * Getter for property <code>collapsed</code>.
 * A collapsed Panel consumes less space than a not collapsed one. When it is initially collapsed, the contents are not rendered.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>collapsed</code>
 * @public
 * @name sap.ui.commons.Panel#getCollapsed
 * @function
 */

/**
 * Setter for property <code>collapsed</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bCollapsed  new value for property <code>collapsed</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#setCollapsed
 * @function
 */


/**
 * Getter for property <code>areaDesign</code>.
 * Defines the background color. Note that color settings are theme-dependent.
 *
 * Default value is <code>Fill</code>
 *
 * @return {sap.ui.commons.enums.AreaDesign} the value of property <code>areaDesign</code>
 * @public
 * @name sap.ui.commons.Panel#getAreaDesign
 * @function
 */

/**
 * Setter for property <code>areaDesign</code>.
 *
 * Default value is <code>Fill</code> 
 *
 * @param {sap.ui.commons.enums.AreaDesign} oAreaDesign  new value for property <code>areaDesign</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#setAreaDesign
 * @function
 */


/**
 * Getter for property <code>borderDesign</code>.
 * The Panel can have a box as border. Note that displaying borders is theme-dependent.
 *
 * Default value is <code>Box</code>
 *
 * @return {sap.ui.commons.enums.BorderDesign} the value of property <code>borderDesign</code>
 * @public
 * @name sap.ui.commons.Panel#getBorderDesign
 * @function
 */

/**
 * Setter for property <code>borderDesign</code>.
 *
 * Default value is <code>Box</code> 
 *
 * @param {sap.ui.commons.enums.BorderDesign} oBorderDesign  new value for property <code>borderDesign</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#setBorderDesign
 * @function
 */


/**
 * Getter for property <code>showCollapseIcon</code>.
 * Specifies whether the Panel shall have an icon for collapsing/expanding, or not.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showCollapseIcon</code>
 * @public
 * @name sap.ui.commons.Panel#getShowCollapseIcon
 * @function
 */

/**
 * Setter for property <code>showCollapseIcon</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowCollapseIcon  new value for property <code>showCollapseIcon</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#setShowCollapseIcon
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * Can be used to create a simple title text for Panels that do not require an icon in the header.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.commons.Panel#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#setText
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Aggregates the controls that are contained in the Panel. It is recommended to use a layout control as single direct child.
 * When the Panel dimensions are set, the child control may have width and height of 100%. When the dimensions are not set, the child defines
 * the Panel size.
 * 
 * <strong>Note</strong>: this is the default aggregation for Panel.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.commons.Panel#getContent
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
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.commons.Panel#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Panel#removeAllContent
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
 * @name sap.ui.commons.Panel#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>title</code>.<br/>
 * Aggregates the title element of the Panel. For text titles only, you alternatively could use setText() which also creates a title in the background.
 * 
 * @return {sap.ui.core.Title}
 * @public
 * @name sap.ui.commons.Panel#getTitle
 * @function
 */


/**
 * Setter for the aggregated <code>title</code>.
 * @param {sap.ui.core.Title} oTitle
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#setTitle
 * @function
 */
	

/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#destroyTitle
 * @function
 */


/**
 * Getter for aggregation <code>buttons</code>.<br/>
 * The buttons that shall be displayed in the Panel header
 * 
 * @return {sap.ui.commons.Button[]}
 * @public
 * @name sap.ui.commons.Panel#getButtons
 * @function
 */


/**
 * Inserts a button into the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.commons.Button}
 *          oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the button should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the button is inserted at 
 *             the last position        
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#insertButton
 * @function
 */

/**
 * Adds some button <code>oButton</code> 
 * to the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.commons.Button}
 *            oButton the button to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#addButton
 * @function
 */

/**
 * Removes an button from the aggregation named <code>buttons</code>.
 *
 * @param {int | string | sap.ui.commons.Button} vButton the button to remove or its index or id
 * @return {sap.ui.commons.Button} the removed button or null
 * @public
 * @name sap.ui.commons.Panel#removeButton
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>buttons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.Button[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Panel#removeAllButtons
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.Button</code> in the aggregation named <code>buttons</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.Button}
 *            oButton the button whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.Panel#indexOfButton
 * @function
 */
	

/**
 * Destroys all the buttons in the aggregation 
 * named <code>buttons</code>.
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Panel#destroyButtons
 * @function
 */


/**
 * Property for width and height settings for the Panel
 *
 * @name sap.ui.commons.Panel.prototype.setDimensions
 * @function
 * @param {sap.ui.core.CSSSize} 
 *         sWidth
 *         
 * Panel width as CSS size
 * 
 * @param {sap.ui.core.CSSSize} 
 *         sHeight
 *         
 * Panel height as CSS size
 * 

 * @type sap.ui.commons.Panel
 * @public
 */


// Start of sap\ui\commons\Panel.js
/**
 * Initialization
 * @private
 */
sap.ui.commons.Panel.prototype.init = function() {
	this._oScrollDomRef = null;       // points to the content area
	this._iMaxTbBtnWidth = -1;        // the maximum width of all toolbar buttons (when there are any, else -1)
	this._iTbMarginsAndBorders = 0;
	this._iMinTitleWidth = 30;        // the minimum width of the title span
	this._iOptTitleWidth = 30;
	this._iTitleMargin = 0;
	this._bFocusCollapseIcon = false; // indicates whether the collapse icon should be focused after the next rendering
	this._resizeDelayTimer = null;    // the timer for delayed reaction to resize events in browsers not supporting FlexBox layout
	this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
};

sap.ui.commons.Panel.prototype.exit = function() {
	this._rb = undefined;
};

/**
 * Called after the theme has been switched: adjust sizes
 * @private
 */
sap.ui.commons.Panel.prototype.onThemeChanged = function () {
	if (this.getDomRef() && this._oTitleDomRef) { // only if already rendered and if a real Panel (no subclass like Tab)

		// reset size settings done for previous theme, so elements take their optimum space
		this.getDomRef().style.minWidth = "auto";
		if (this._oToolbarDomRef) {
			this._oToolbarDomRef.style.width = "auto";
		}
		this._oTitleDomRef.style.width = "auto";

		// adapt sizes
		this._initializeSizes(); // TODO: delay this for Safari?
		if (!jQuery.support.flexBoxLayout ||
				(sap.ui.commons.Panel._isSizeSet(this.getHeight()) && (this._hasIcon() || (this.getButtons().length > 0)))) {
			this._handleResizeNow();
		}
	}
};


/**
 * Event unbinding
 * @private
 */
sap.ui.commons.Panel.prototype.onBeforeRendering = function() {
	// Deregister resize event before re-rendering
	if(this.sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};


/**
 * Adapts size settings of the rendered HTML
 * @private
 */
sap.ui.commons.Panel.prototype.onAfterRendering = function () {
	var id = this.getId();
	this._oScrollDomRef = jQuery.sap.domById(id + "-cont");
	if (!this._oScrollDomRef) {
		return;
	} // BugFix for TwoGo where the DomRefs were not there after rendering
	this._oHeaderDomRef = jQuery.sap.domById(id + "-hdr");
	this._oTitleDomRef = jQuery.sap.domById(id + "-title");
	this._oToolbarDomRef = jQuery.sap.domById(id + "-tb");

	// restore focus if required
	if (this._bFocusCollapseIcon) {
		this._bFocusCollapseIcon = false;
		var $collArrow = jQuery.sap.byId(id + "-collArrow");
		if($collArrow.is(":visible") && ($collArrow.css("visibility") == "visible" || $collArrow.css("visibility") == "inherit")) {
			$collArrow.focus();
		} else {
			var $collIco = jQuery.sap.byId(id + "-collIco");
			if ($collIco.is(":visible") && ($collIco.css("visibility") == "visible" || $collIco.css("visibility") == "inherit")) {
				$collIco.focus();
			}
		}
	}

	this._initializeSizes(); // TODO: delay this for Safari?

	// in browsers not supporting the FlexBoxLayout we need to listen to resizing
	if (!jQuery.support.flexBoxLayout ||
			(sap.ui.commons.Panel._isSizeSet(this.getHeight()) && (this._hasIcon() || (this.getButtons().length > 0)))) {
		this._handleResizeNow();
		this.sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(), jQuery.proxy(this._handleResizeSoon, this));
	}
};


/**
 *
 * @protected
 */
sap.ui.commons.Panel.prototype.getFocusInfo = function () {
	var collId = null;
	var id = this.getId();

	// if collapse icon needs to be focused, find out which one - if any - is currently visible
	if (this._bFocusCollapseIcon) {
		var $collArrow = jQuery.sap.byId(id + "-collArrow");
		if($collArrow.is(":visible") && ($collArrow.css("visibility") == "visible" || $collArrow.css("visibility") == "inherit")) {
			collId = $collArrow[0].id;
		} else {
			var $collIco = jQuery.sap.byId(id + "-collIco");
			if ($collIco.is(":visible") && ($collIco.css("visibility") == "visible" || $collIco.css("visibility") == "inherit")) {
				collId = $collIco[0].id;
			}
		}

	}

	// if a collapse icon is visible and to be focused, return its ID, otherwise just the control ID
	return {id:(collId ? collId : id)};
};


/**
 *
 * @private
 */
sap.ui.commons.Panel.prototype.applyFocusInfo = function (oFocusInfo) {
	var $DomRef;
	if (oFocusInfo && oFocusInfo.id && ($DomRef = jQuery.sap.byId(oFocusInfo.id)) && ($DomRef.length > 0)) {
		$DomRef.focus();
	} else {
		this.focus();
	}
	return this;
};


/**
 * Measures and calculates/sets sizes as soon as the CSS has been applied after rendering or a theme switch
 * @private
 */
sap.ui.commons.Panel.prototype._initializeSizes = function() {
	var bRtl = sap.ui.getCore().getConfiguration().getRTL();

	// maximum width of a toolbar item -> min toolbar width
	var aButtons = this.getButtons();
	if (aButtons && aButtons.length > 0) {
		var maxWidth = 0;
		jQuery(this._oToolbarDomRef).children().each(function(){
			var width = this.offsetWidth;
			if (width > maxWidth) {
				maxWidth = width;
			}
		});
		this._iMaxTbBtnWidth = maxWidth;

		if (this._oToolbarDomRef) {
			this._oToolbarDomRef.style.minWidth = maxWidth + "px";

			// calculate the toolbar borders and margins
			var $tb = jQuery(this._oToolbarDomRef);
			this._iTbMarginsAndBorders = $tb.outerWidth(true) - $tb.width();
		}
	}

	// calculate available space between left- and right-aligned items with static width
	var beginBorderOfTitle = this._oTitleDomRef.offsetLeft; // displacement of the beginning of the title from the Panel border
	var totalWidth = this.getDomRef().offsetWidth;
	if (bRtl) {
		beginBorderOfTitle = totalWidth - (beginBorderOfTitle + this._oTitleDomRef.offsetWidth); // RTL case
	}
	var $title = jQuery(this._oTitleDomRef);
	this._iOptTitleWidth = $title.width() + 1 /*+1 to avoid subpixel issues*/;
	this._iTitleMargin = $title.outerWidth(true) - $title.outerWidth();
	var beginBorderOfRightItems = 10000;
	jQuery(this._oHeaderDomRef).children(".sapUiPanelHdrRightItem").each(function(){
		var begin = this.offsetLeft;
		if (bRtl) {
			begin = totalWidth - (begin + this.offsetWidth); // RTL case
		}
		if ((begin < beginBorderOfRightItems) && (begin > 0)) {
			beginBorderOfRightItems = begin;
		}
	});


	// set minimum Panel width as sum of minimum sizes
	var minWidth = beginBorderOfTitle;
	minWidth += this._iMinTitleWidth; // 30px is ok even if there is no title
	minWidth += this._iMaxTbBtnWidth + 1; // -1 if there is no toolbar... 1px more or less is no problem here
	minWidth += (beginBorderOfRightItems == 10000) ? 10 : (totalWidth - beginBorderOfRightItems); // use 10 as hardcoded right border
	this.getDomRef().style.minWidth = minWidth + 10 + "px";


	// restore scroll positions
	if (this._oScrollDomRef) {
		var scrollTop = this.getProperty("scrollTop");
		if (scrollTop > 0) {
			this._oScrollDomRef.scrollTop = scrollTop;
		}
		var scrollLeft = this.getProperty("scrollLeft");
		if (scrollLeft > 0) {
			this._oScrollDomRef.scrollLeft = scrollLeft;
		}

	}

};


/**
 * Adapts the absolute position of the content when height is set.
 * @private
 */
sap.ui.commons.Panel.prototype._fixContentHeight = function() {
	//if height is set and an icon or at least one toolbar button is present (which *could* inflate the header height), the cont top must be set to the header height
	if (sap.ui.commons.Panel._isSizeSet(this.getHeight()) && (this._hasIcon() || (this.getButtons().length > 0))) { // TODO: what if the icon is not yet loaded?
		this._iContTop = this._oHeaderDomRef.offsetHeight;
		if (this._oScrollDomRef) {
			this._oScrollDomRef.style.top = this._iContTop + "px";
		}
	}
};


/**
 * Called in browsers not supporting the FlexBox layout whenever the Panel size is changing. This method registers a delayed reaction to the size changes.
 * When there are further size changes during this delay, the delay starts from zero. So the Panel is not adapted during the resize, but only after resizing has
 * completed. This should fix most of the related performance issues.
 * @private
 */
sap.ui.commons.Panel.prototype._handleResizeSoon = function() {
	if (this._resizeDelayTimer) {
		jQuery.sap.clearDelayedCall(this._resizeDelayTimer);
	}

	this._resizeDelayTimer = jQuery.sap.delayedCall(200, this, function() {
		this._handleResizeNow();
		this._resizeDelayTimer = null;
	});
};


/**
 * Called in browsers not supporting the FlexBox layout whenever the Panel size has changed and the header layout finally needs to be adapted.
 * Basically this method imitates that layout's behavior.
 * @private
 */
sap.ui.commons.Panel.prototype._handleResizeNow = function() {
	// in IE8 (maybe also IE9) the sizes of the flexible items (title and toolbar) need to be adjusted
	// whenever the Panel width changes
	if (!jQuery.support.flexBoxLayout && this.getDomRef()) {
		var bRtl = sap.ui.getCore().getConfiguration().getRTL();

		/* Algorithm:
		 * 1. calculate space available for the two elements
		 * 2. if no toolbar is present, apply this width to the title, else:
		 * 3.   reduce toolbar width until maxBtnSize is reached, then reduce title width until minimum (do not make either any smaller; the Panel has a min-width anyway)
		 * 4.   apply these widths
		 */

		// begin of Panel to begin of Title
		var beginBorderOfTitle = this._oTitleDomRef.offsetLeft; // displacement of the beginning of the title from the Panel border
		var totalWidth = this.getDomRef().offsetWidth;
		if (bRtl) {
			beginBorderOfTitle = totalWidth - (beginBorderOfTitle + this._oTitleDomRef.offsetWidth); // RTL case
		}

		// begin of Panel to begin if "RightItems"
		var beginBorderOfRightItems = 10000;
		jQuery(this._oHeaderDomRef).children(".sapUiPanelHdrRightItem").each(function(){
			var begin = this.offsetLeft;
			if (bRtl) {
				begin = totalWidth - (begin + this.offsetWidth); // RTL case
			}
			if ((begin < beginBorderOfRightItems) && (begin > 0)) {
				beginBorderOfRightItems = begin;
			}
		});

		var availableSpace = (beginBorderOfRightItems == 10000) ?
					this.$().width() - beginBorderOfTitle - 20
				: beginBorderOfRightItems - beginBorderOfTitle - 10;

		var aButtons = this.getButtons();
		if (aButtons && aButtons.length > 0) { // there are title and toolbar; calculate and set both sizes
			// differentiate between two cases: 1. there is enough space for title plus minimum toolbar width
			//                                  2. both need to be reduced in size
			if ((availableSpace - this._iOptTitleWidth - this._iTitleMargin) > (this._iMaxTbBtnWidth - this._iTbMarginsAndBorders)) {
				// if available width minus optimum title width is still more than the minimum toolbar width,
				// give all remaining width to the toolbar
				this._oToolbarDomRef.style.width = (availableSpace - this._iOptTitleWidth - this._iTitleMargin - this._iTbMarginsAndBorders) + "px";
				this._oTitleDomRef.style.width = this._iOptTitleWidth + "px";
			} else {
				// both are affected => set toolbar to minimum and reduce title width, but not smaller than minimum
				this._oToolbarDomRef.style.width = this._iMaxTbBtnWidth + "px";
				this._oTitleDomRef.style.width = Math.max((availableSpace - this._iMaxTbBtnWidth - this._iTbMarginsAndBorders), this._iMinTitleWidth) + "px";
			}

		} else {
			// no toolbar
			this._oTitleDomRef.style.width = Math.max(availableSpace, this._iMinTitleWidth) + "px";
		}
	}

	// in case the resizing caused button wrapping, adapt content height -- FOR ALL BROWSERS!
	this._fixContentHeight();
};


/**
 * Helper method to find out whether the Panel has an icon.
 * @private
 */
sap.ui.commons.Panel.prototype._hasIcon = function() {
	return (this.getTitle() && this.getTitle().getIcon());
};



/**
 * Property setter for the "enabled" state
 *
 * @param bEnabled whether the Panel should be enabled or not
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled, true); // no re-rendering!
	// if already rendered, adapt rendered control without complete re-rendering
	jQuery(this.getDomRef()).toggleClass("sapUiPanelDis", !bEnabled);
	return this;
};


/**
 * Property setter for the padding
 *
 * @param bPadding whether the Panel should have padding
 * @returns {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setApplyContentPadding = function(bPadding) {
	this.setProperty("applyContentPadding", bPadding, true); // no re-rendering!
	jQuery(this.getDomRef()).toggleClass("sapUiPanelWithPadding", bPadding);
	return this;
};


/**
 * Property setter for the "collapsed" state
 *
 * @param bCollapsed whether the Panel should be collapsed or not
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setCollapsed = function(bCollapsed) {
	this.setProperty("collapsed", bCollapsed, true); // no re-rendering!
	this._setCollapsedState(bCollapsed); // adapt rendered control without complete re-rendering
	return this;
};


/**
 * Internal method for applying a (non-)"collapsed" state to the rendered HTML
 *
 * @param bCollapsed whether the Panel should be collapsed or not
 * @private
 */
sap.ui.commons.Panel.prototype._setCollapsedState = function(bCollapsed) {
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		// after Panel has been rendered
		var accessibility = sap.ui.getCore().getConfiguration().getAccessibility();
		if (bCollapsed) {
			// collapsing
			if (!this.getWidth()) {
				oDomRef.style.width = this.getDomRef().offsetWidth + "px"; // maintain the current width
			}
			jQuery(oDomRef).addClass("sapUiPanelColl");
			if (accessibility) {
				oDomRef.setAttribute("aria-expanded", "false");
			}
			if (this.getHeight()) {
				// if there is a height set, the Panel would still consume the respective space, so remove the height setting
				oDomRef.style.height = "auto";
			}
			// update tooltips
			var sExpandTooltip = this._rb.getText("PANEL_EXPAND");
			this.$("collArrow").attr("title", sExpandTooltip);
			this.$("collIco").attr("title", sExpandTooltip);

		} else {
			// expanding
			if (!this.getDomRef("cont")) {
				// content has not been rendered yet, so render it now
				this._bFocusCollapseIcon = true; // restore focus to collapse icon/button after rendering
				this.rerender();
			} else {
				// content exists already, just make it visible again
				jQuery(oDomRef).removeClass("sapUiPanelColl");
				if (accessibility) {
					oDomRef.setAttribute("aria-expanded", "true");
				}
				if (!this.getWidth()) {
					oDomRef.style.width = "auto"; // restore the automatic width behavior
				}
				if (this.getHeight()) {
					oDomRef.style.height = this.getHeight(); // restore the set height
				}
				// update tooltips
				var sCollapseTooltip = this._rb.getText("PANEL_COLLAPSE");
				this.$("collArrow").attr("title", sCollapseTooltip);
				this.$("collIco").attr("title", sCollapseTooltip);
			}
		}
	}
};


/**
 * Static method that finds out whether the given CSS size is actually set.
 * Returns "true" for absolute and relative sizes, returns "false" if "null", "inherit" or "auto" is given.
 *
 * @static
 * @param sCssSize a css size string (must be a valid CSS size, or null)
 * @private
 */
sap.ui.commons.Panel._isSizeSet = function(sCssSize) {
	return (sCssSize && !(sCssSize =="auto") && !(sCssSize == "inherit"));
};

// API method
sap.ui.commons.Panel.prototype.setTitle = function(oTitle) {
	var oOldTitle = this.getTitle();
	this.setAggregation("title", oTitle);
	// check whether the title has been created on the fly. Then we are owner of it and should destroy it
	// the ID check should be sufficient as long as the naming conventions are obeyed
	if ( oOldTitle && oOldTitle !== oTitle && oOldTitle.getId() === this.getId() + "-tit" ) {
		oOldTitle.destroy();
	}
	return this;
};

// API method
sap.ui.commons.Panel.prototype.setText = function(sText) {
	if (!this.getTitle()) {
		this.setTitle(new sap.ui.core.Title(this.getId() + "-tit",{text:sText}));
	} else {
		this.getTitle().setText(sText);
	}
	return this;
};

// API method
sap.ui.commons.Panel.prototype.getText = function () {
	if (!this.getTitle()) {
		return "";
	} else {
		return this.getTitle().getText();
	}
};


/**
 * Returns the scroll position of the panel in pixels from the left. Returns 0 if not rendered yet.
 * Also internally updates the control property.
 *
 * @return the scroll position
 * @public
 */
sap.ui.commons.Panel.prototype.getScrollLeft = function () {
	var scrollLeft = 0;
	if (this._oScrollDomRef) {
		if (sap.ui.getCore().getConfiguration().getRTL()) {
			scrollLeft = jQuery(this._oScrollDomRef).scrollLeftRTL();
		} else {
			scrollLeft = jQuery(this._oScrollDomRef).scrollLeft();
		}
		jQuery.sap.assert(typeof scrollLeft == "number", "scrollLeft read from DOM should be a number");
		this.setProperty("scrollLeft", scrollLeft, true);
	}

	return scrollLeft;
};


/**
 * Sets the scroll position of the panel in pixels from the left.
 *
 * @param {int} iPosition the position to scroll to
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setScrollLeft = function (iPosition) {
	this.setProperty("scrollLeft", iPosition, true);
	if (this._oScrollDomRef) {
		if (sap.ui.getCore().getConfiguration().getRTL()) {
			jQuery(this._oScrollDomRef).scrollLeftRTL(iPosition);
		} else {
			jQuery(this._oScrollDomRef).scrollLeft(iPosition);
		}
	}
	return this;
};


/**
 * Returns the scroll position of the panel in pixels from the top. Returns 0 if not rendered yet.
 * Also internally updates the control property.
 *
 * @return the scroll position
 * @public
 */
sap.ui.commons.Panel.prototype.getScrollTop = function () {
	var scrollTop = 0;
	if (this._oScrollDomRef) {
		scrollTop = this._oScrollDomRef.scrollTop;
		this.setProperty("scrollTop", scrollTop, true);
	}

	return scrollTop;
};


/**
 * Sets the scrolls position of the panel in pixels from the top.
 *
 * @param {int} iPosition the position to scroll to
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setScrollTop = function (iPosition) {
	this.setProperty("scrollTop", iPosition, true);
	if (this._oScrollDomRef) {
		this._oScrollDomRef.scrollTop = iPosition;
	}
	return this;
};


/**
 * Sets the dimensions of the panel.
 *
 * @param {string} sWidth the width of the panel as CSS size
 * @param {string} sHeight the height of the panel as CSS size
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setDimensions = function (sWidth, sHeight) {
	jQuery.sap.assert(typeof sWidth == "string" && typeof sHeight == "string", "sWidth and sHeight must be strings");
	this.setWidth(sWidth); // does not rerender
	this.setHeight(sHeight);
	return this;
};


/**
 * Sets the width of the panel.
 *
 * @param {string} sWidth the width of the panel as CSS size
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setWidth = function (sWidth) {
	this.setProperty("width", sWidth, true); // don't rerender
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		oDomRef.style.width = sWidth;
	}
	return this;
};


/**
 * Sets the height of the panel.
 *
 * @param {string} sHeight the height of the panel as CSS size
 * @return {sap.ui.commons.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Panel.prototype.setHeight = function (sHeight) {
	this.setProperty("height", sHeight, true); // don't rerender
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		oDomRef.style.height = sHeight;
	}
	return this;
};



/*   Event Handling   */

/**
 * Handles mouse clicks
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Panel.prototype.onclick = function(oEvent) {
	this._handleTrigger(oEvent);
};

/**
 * Handles "space" presses
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Panel.prototype.onsapspace = function(oEvent) {
	this._handleTrigger(oEvent);
};

/**
 * Handles any "triggering" actions like click and space
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Panel.prototype._handleTrigger = function(oEvent) {
	var id = this.getId();
	// minimize button toggled
	if((oEvent.target.id === id + "-collArrow") ||
			(oEvent.target.id === id + "-collIco") ||
			// toggle triggered via space key
			(oEvent.target.id === id && oEvent.type === "sapspace" && this.getShowCollapseIcon())) {
		this.setCollapsed(!this.getProperty("collapsed"));
		oEvent.preventDefault();
		oEvent.stopPropagation();
		this.fireEvent("collapsedToggled"); //private event used in ResponsiveLayout
	}
};
