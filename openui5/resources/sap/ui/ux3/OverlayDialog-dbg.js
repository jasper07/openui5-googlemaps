/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.OverlayDialog.
jQuery.sap.declare("sap.ui.ux3.OverlayDialog");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.ux3.Overlay");


/**
 * Constructor for a new OverlayDialog.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 'auto')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 'auto')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.Overlay#constructor sap.ui.ux3.Overlay}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Dialog implementation based on the Overlay. If used in a Shell it leaves the Tool-Palette, Pane-Bar and Header-Items accessible.
 * @extends sap.ui.ux3.Overlay
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.OverlayDialog
 */
sap.ui.ux3.Overlay.extend("sap.ui.ux3.OverlayDialog", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'}
	},
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.OverlayDialog with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.OverlayDialog.extend
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Width of the Overlay Dialog. If the width is set to "auto" it is always 50% of the overlay width.
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.ux3.OverlayDialog#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.ux3.OverlayDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.OverlayDialog#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Height of the Overlay Dialog. If the height is set to "auto" it is always 50% of the overlay height.
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.ux3.OverlayDialog#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.ux3.OverlayDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.OverlayDialog#setHeight
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Content for the OverlayDialog.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.ux3.OverlayDialog#getContent
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
 * @return {sap.ui.ux3.OverlayDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.OverlayDialog#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.OverlayDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.OverlayDialog#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.ux3.OverlayDialog#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.OverlayDialog#removeAllContent
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
 * @name sap.ui.ux3.OverlayDialog#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.OverlayDialog} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.OverlayDialog#destroyContent
 * @function
 */


// Start of sap\ui\ux3\OverlayDialog.js
jQuery.sap.require("sap.ui.core.IntervalTrigger");

/**
 * @private
 */
sap.ui.ux3.OverlayDialog.prototype.init = function(){
	sap.ui.ux3.Overlay.prototype.init.apply(this);
	//OverlayDialog must not have an open button
	this.setProperty("openButtonVisible",false);
	sap.ui.ux3.OverlayDialog.Trigger = new sap.ui.core.IntervalTrigger(300);
};

/**
 * Focus Last Element
 *
 * @private
 */
sap.ui.ux3.OverlayDialog.prototype._setFocusLast = function() {
	var oFocus = this.$("content").lastFocusableDomRef();
	if (!oFocus && this.getCloseButtonVisible()) {
		oFocus = this.getDomRef("close");
	}
	jQuery.sap.focus(oFocus);
};

/**
 * Focus First Element
 *
 * @private
 */
sap.ui.ux3.OverlayDialog.prototype._setFocusFirst = function() {
	if (this.getCloseButtonVisible()) {
		jQuery.sap.focus(this.getDomRef("close"));
	} else {
		jQuery.sap.focus(this.$("content").firstFocusableDomRef());
	}
};

/**
 * This Method is not supported for the OverlayDialog 
 * @public
 */
sap.ui.ux3.OverlayDialog.prototype.setOpenButtonVisible = function(bVisible) {
	jQuery.sap.log.warning("OverlayDialog does not support an openButton.");	
	return undefined;
};

/**
 * Sets the width for the OverlayDialog
 * @param {sap.ui.core.CSSSize} sWidth
 * @public 
 *
 */
sap.ui.ux3.OverlayDialog.prototype.setWidth = function(sWidth) {
	if(sWidth == "auto" || sWidth == "inherit") {
		sWidth = "auto";
	}
	return this.setProperty("width", sWidth);
};

/**
 * Sets the height for the OverlayDialog
 * @param {sap.ui.core.CSSSize} sHeight
 * @public 
 *
 */
sap.ui.ux3.OverlayDialog.prototype.setHeight = function(sHeight) {
	if(sHeight == "auto" || sHeight == "inherit") {
		sHeight = "auto";
	}
	return this.setProperty("height", sHeight);
};

/**
 * @private
 */
sap.ui.ux3.OverlayDialog.prototype.onBeforeRendering = function(){
	sap.ui.ux3.Overlay.prototype.onBeforeRendering.apply(this, arguments);
	this._cleanup();
};

/**
 * @private
 */
sap.ui.ux3.OverlayDialog.prototype.onAfterRendering = function(){
	sap.ui.ux3.Overlay.prototype.onAfterRendering.apply(this, arguments);
	sap.ui.ux3.OverlayDialog.Trigger.addListener(this._checkChange, this);
};

/**
 * @private
 */
sap.ui.ux3.OverlayDialog.prototype._cleanup = function(){
	sap.ui.ux3.OverlayDialog.Trigger.removeListener(this._checkChange, this);
	this.contentWidth = null;
	this.contentHeight = null;
	this.overlayWidth = null;
	this.overlayHeight = null;
};

/**
 * @private
 */
sap.ui.ux3.OverlayDialog.prototype.exit = function() {
	this._cleanup();
	sap.ui.ux3.Overlay.prototype.exit.apply(this,arguments);
}

/**
 * @private
 */
sap.ui.ux3.OverlayDialog.prototype._checkChange = function(){
	if(!this.getDomRef()){
		return;
	}

	var $content = this.$("content"),
		$overlay = this.$(),
		bAutoWidth = this.getWidth() === "auto",
		bAutoHeight = this.getHeight() === "auto";

	var contentWidth = bAutoWidth ? $overlay.width()/2 : $content.width(),
		contentHeight = bAutoHeight ? $overlay.height()/2 : $content.height(),
		overlayWidth = $overlay.width(),
		overlayHeight = $overlay.height();

	if(	contentWidth != this.contentWidth || contentHeight!= this.contentHeight 
		|| overlayWidth != this.overlayWidth || overlayHeight != this.overlayHeight){

		$content.css("left", "0").css("right", "auto").css("top", "0").css("bottom", "auto").css("width", this.getWidth()).css("height", this.getHeight());
		
		this.contentWidth = bAutoWidth ? $overlay.width()/2 : $content.width();
		this.contentHeight = bAutoHeight ? $overlay.height()/2 : $content.height();
		this.overlayWidth = overlayWidth;
		this.overlayHeight = overlayHeight;

		var $close = this.$("close");

		if(this.contentWidth < this.overlayWidth){
			$content.css("left", "50%");
			$content.css("right", "auto");
			$content.css("margin-left", (-1)*this.contentWidth/2+"px");
			$content.css("width",  bAutoHeight ? this.contentWidth : this.getWidth());
			$close.css("right", "50%");
			$close.css("margin-right", (-1)*this.contentWidth/2-10+"px");
		}else{
			$content.css("left", "0");
			$content.css("right", "10px");
			$content.css("margin-left", "0");
			$content.css("width", "auto");
			$close.css("right", "0")
			$close.css("margin-right", "0");
		}

		if(this.contentHeight < this.overlayHeight-30/*Bottom Border (NotificationBar)*/){
			$content.css("top", "50%");
			$content.css("bottom", "auto");
			$content.css("margin-top", (-1)*this.contentHeight/2+"px");
			$content.css("height",  bAutoHeight ? this.contentHeight : this.getHeight());
			$close.css("top", "50%");
			$close.css("margin-top", (-1)*this.contentHeight/2-10+"px");
		}else{
			$content.css("top", "10px");
			$content.css("bottom", "30px");
			$content.css("margin-top", "0");
			$content.css("height", "auto");
			$close.css("top", "0");
			$close.css("margin-top", "0");
		}
	}
};
