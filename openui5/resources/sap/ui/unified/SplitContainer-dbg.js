/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.unified.SplitContainer.
jQuery.sap.declare("sap.ui.unified.SplitContainer");
jQuery.sap.require("sap.ui.unified.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new SplitContainer.
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
 * <li>{@link #getShowSecondaryContent showSecondaryContent} : boolean</li>
 * <li>{@link #getSecondaryContentWidth secondaryContentWidth} : sap.ui.core.CSSSize (default: '250px')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li>
 * <li>{@link #getSecondaryContent secondaryContent} : sap.ui.core.Control[]</li></ul>
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
 * Provides a main content and a secondary content area
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.15.0
 * @experimental Since version 1.15.0. 
 * API is not yet finished and might change completely
 * @name sap.ui.unified.SplitContainer
 */
sap.ui.core.Control.extend("sap.ui.unified.SplitContainer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.unified",
	properties : {
		"showSecondaryContent" : {type : "boolean", group : "Appearance", defaultValue : null},
		"secondaryContentWidth" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : '250px'}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    	"secondaryContent" : {type : "sap.ui.core.Control", multiple : true, singularName : "secondaryContent"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.unified.SplitContainer with name <code>sClassName</code> 
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
 * @name sap.ui.unified.SplitContainer.extend
 * @function
 */


/**
 * Getter for property <code>showSecondaryContent</code>.
 * Shows / Hides the secondary area.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>showSecondaryContent</code>
 * @public
 * @name sap.ui.unified.SplitContainer#getShowSecondaryContent
 * @function
 */

/**
 * Setter for property <code>showSecondaryContent</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bShowSecondaryContent  new value for property <code>showSecondaryContent</code>
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.SplitContainer#setShowSecondaryContent
 * @function
 */


/**
 * Getter for property <code>secondaryContentWidth</code>.
 * The width if the secondary content. The height is always 100%.
 *
 * Default value is <code>250px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>secondaryContentWidth</code>
 * @public
 * @name sap.ui.unified.SplitContainer#getSecondaryContentWidth
 * @function
 */

/**
 * Setter for property <code>secondaryContentWidth</code>.
 *
 * Default value is <code>250px</code> 
 *
 * @param {sap.ui.core.CSSSize} sSecondaryContentWidth  new value for property <code>secondaryContentWidth</code>
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.SplitContainer#setSecondaryContentWidth
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content to appear in the main area.
 * 
 * <strong>Note</strong>: this is the default aggregation for SplitContainer.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.unified.SplitContainer#getContent
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
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.SplitContainer#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.SplitContainer#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.unified.SplitContainer#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.unified.SplitContainer#removeAllContent
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
 * @name sap.ui.unified.SplitContainer#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.SplitContainer#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>secondaryContent</code>.<br/>
 * The content to appear in the secondary area.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.unified.SplitContainer#getSecondaryContent
 * @function
 */


/**
 * Inserts a secondaryContent into the aggregation named <code>secondaryContent</code>.
 *
 * @param {sap.ui.core.Control}
 *          oSecondaryContent the secondaryContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the secondaryContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the secondaryContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the secondaryContent is inserted at 
 *             the last position        
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.SplitContainer#insertSecondaryContent
 * @function
 */

/**
 * Adds some secondaryContent <code>oSecondaryContent</code> 
 * to the aggregation named <code>secondaryContent</code>.
 *
 * @param {sap.ui.core.Control}
 *            oSecondaryContent the secondaryContent to add; if empty, nothing is inserted
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.SplitContainer#addSecondaryContent
 * @function
 */

/**
 * Removes an secondaryContent from the aggregation named <code>secondaryContent</code>.
 *
 * @param {int | string | sap.ui.core.Control} vSecondaryContent the secondaryContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed secondaryContent or null
 * @public
 * @name sap.ui.unified.SplitContainer#removeSecondaryContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>secondaryContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.unified.SplitContainer#removeAllSecondaryContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>secondaryContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oSecondaryContent the secondaryContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.unified.SplitContainer#indexOfSecondaryContent
 * @function
 */
	

/**
 * Destroys all the secondaryContent in the aggregation 
 * named <code>secondaryContent</code>.
 * @return {sap.ui.unified.SplitContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.SplitContainer#destroySecondaryContent
 * @function
 */


// Start of sap\ui\unified\SplitContainer.js
(function(window, undefined) {

jQuery.sap.require("sap.ui.core.theming.Parameters");

////////////////////////////////////////// Public Methods //////////////////////////////////////////

sap.ui.unified.SplitContainer.prototype.init = function(){
	this.bRtl  = sap.ui.getCore().getConfiguration().getRTL();
	
	this._paneRenderer = new sap.ui.unified._ContentRenderer(this, this.getId()+"-panecntnt", "secondaryContent");
	this._canvasRenderer = new sap.ui.unified._ContentRenderer(this, this.getId()+"-canvascntnt", "content");
	
// Design decided that content does not need to be handled differently depending on device - remove 
// comments if needed again...
//	sap.ui.Device.media.attachHandler(
//		this._handleMediaChange, this, sap.ui.Device.media.RANGESETS.SAP_STANDARD
//	);

	// By default move the content when the secondaryContent is shown
	this._moveContent = true;
};

sap.ui.unified.SplitContainer.prototype.exit = function(){
	this._paneRenderer.destroy();
	delete this._paneRenderer;
	this._canvasRenderer.destroy();
	delete this._canvasRenderer;

	delete this._contentContainer;
	delete this._secondaryContentContainer;
};


////////////////////////////////////////// onEvent Methods /////////////////////////////////////////

sap.ui.unified.SplitContainer.prototype.onAfterRendering = function() {
	// Shortcuts to the main DOM containers
	this._contentContainer 			= this.$("canvas");
	this._secondaryContentContainer = this.$("pane");

// Design decided that content does not need to be handled differently depending on device - remove 
// comments if needed again...
//	this._lastDeviceName = "";
//	this._handleMediaChange(
//		sap.ui.Device.media.getCurrentRange(sap.ui.Device.media.RANGESETS.SAP_STANDARD)
//	);
	
	this._applySecondaryContentSize();
};


////////////////////////////////////////// Private Methods /////////////////////////////////////////

// Design decided that content does not need to be handled differently depending on device - remove 
// comments if needed again...
///**
// * This method is called whenever the size of the document changes into a different range of values
// * that represent different devices (Desktop/Tablet/Phone).
// * 
// * @private
// */
//sap.ui.unified.SplitContainer.prototype._handleMediaChange = function(mParams) {
//	var sDeviceName = mParams.name;
//	
//	// By default, move the content to the right, there should be enough space
//	this._moveContent = true;
//
//	if (sDeviceName == "Phone") {
//		// On phones, do not move the main content as it does not have enough
//		// space as it is
//		this._moveContent = false;
//	}
//
//	// Only write changes if something actually changed
//	if (this._lastDeviceName !== sDeviceName) {
//		this._applySecondaryContentSize();
//	}
//	this._lastDeviceName = sDeviceName;
//};

/**
 * Applies the current status to the content areas (CSS left and width properties).
 * 
 * @private
 */
sap.ui.unified.SplitContainer.prototype._applySecondaryContentSize = function(){
	// Only set if rendered...
	if (this.getDomRef()) {
		var sDir = this.bRtl ? "right" : "left";
		
		var sSize = this.getSecondaryContentWidth();
		var bShow = this.getShowSecondaryContent();

		if (this._closeContentDelayId) {
			jQuery.sap.clearDelayedCall(this._closeContentDelayId);
		}
		
		this._secondaryContentContainer.css("width", sSize);
		this._secondaryContentContainer.css(sDir, bShow ? "0" : "-" + sSize);
		
		// Move main content if it should be completely visible. @see _handleMediaChange()
		if (this._moveContent) {
			this._contentContainer.css(sDir, bShow ? sSize : "0");
		} else {
			this._contentContainer.css(sDir, "0");
		}
		
		if (!bShow) {
			// The theming parameter is something along the lines of "500ms", the "ms"-part is
			// ignored by parseInt.
			// TODO: Cache the value.
			var iHideDelay = parseInt(
				sap.ui.core.theming.Parameters.get("sapUiUfdSplitContAnimationDuration"),
				10
			);
			// Maybe we could also allow "s"-values and then multiply everything below 20 with 1000...?

			this._closeContentDelayId = jQuery.sap.delayedCall(iHideDelay, this, function() {
				this._secondaryContentContainer.toggleClass("sapUiUfdSplitContSecondClosed", true);
			});
		} else {
			this._secondaryContentContainer.toggleClass("sapUiUfdSplitContSecondClosed", false);
		}
		
	}
};



/**
 * Optimization method that prevents the normal render from rerendering the whole control.
 * See _ContentRenderer in file shared.js for details.
 * 
 * @param {function} fMod Method that is called to perform the requested change
 * @param {sap.ui.core.Renderer} oDoIfRendered Renderer Instance
 * @returns {any} the return value from the first parameter
 * 
 * @private
 */
sap.ui.unified.SplitContainer.prototype._mod = function(fMod, oDoIfRendered){
	var bRendered = !!this.getDomRef();
	var res = fMod.apply(this, [bRendered]);
	if(bRendered && oDoIfRendered){
		oDoIfRendered.render();
	}
	return res;
};


//////////////////////////////////////// Overridden Methods ////////////////////////////////////////

    //////////////////////////// Property "showSecondaryContent" ///////////////////////////////

sap.ui.unified.SplitContainer.prototype.setShowSecondaryContent = function(bShow){
	var bRendered = this.getDomRef();
	this.setProperty("showSecondaryContent", !!bShow, bRendered);
	
	this._applySecondaryContentSize();
	return this;
};


	///////////////////////////// Property "secondaryContentWidth" /////////////////////////////

sap.ui.unified.SplitContainer.prototype.setSecondaryContentWidth = function(sSize) {
	this.setProperty("secondaryContentWidth", sSize, true);
	this._applySecondaryContentSize();
	return this;
};


	/////////////////////////////////// Aggregation "content" //////////////////////////////////

sap.ui.unified.SplitContainer.prototype.insertContent = function(oContent, iIndex) {
	return this._mod(function(bRendered){
		return this.insertAggregation("content", oContent, iIndex, bRendered);
	}, this._canvasRenderer);
};
sap.ui.unified.SplitContainer.prototype.addContent = function(oContent) {
	return this._mod(function(bRendered){
		return this.addAggregation("content", oContent, bRendered);
	}, this._canvasRenderer);
};
sap.ui.unified.SplitContainer.prototype.removeContent = function(vIndex) {
	return this._mod(function(bRendered){
		return this.removeAggregation("content", vIndex, bRendered);
	}, this._canvasRenderer);
};
sap.ui.unified.SplitContainer.prototype.removeAllContent = function() {
	return this._mod(function(bRendered){
		return this.removeAllAggregation("content", bRendered);
	}, this._canvasRenderer);
};
sap.ui.unified.SplitContainer.prototype.destroyContent = function() {
	return this._mod(function(bRendered){
		return this.destroyAggregation("content", bRendered);
	}, this._canvasRenderer);
};


    ////////////////////////////// Aggregation "secondaryContent" //////////////////////////////

sap.ui.unified.SplitContainer.prototype.insertSecondaryContent = function(oContent, iIndex) {
	return this._mod(function(bRendered){
		return this.insertAggregation("secondaryContent", oContent, iIndex, bRendered);
	}, this._paneRenderer);
};
sap.ui.unified.SplitContainer.prototype.addSecondaryContent = function(oContent) {
	return this._mod(function(bRendered){
		return this.addAggregation("secondaryContent", oContent, bRendered);
	}, this._paneRenderer);
};
sap.ui.unified.SplitContainer.prototype.removeSecondaryContent = function(vIndex) {
	return this._mod(function(bRendered){
		return this.removeAggregation("secondaryContent", vIndex, bRendered);
	}, this._paneRenderer);
};
sap.ui.unified.SplitContainer.prototype.removeAllSecondaryContent = function() {
	return this._mod(function(bRendered){
		return this.removeAllAggregation("secondaryContent", bRendered);
	}, this._paneRenderer);
};
sap.ui.unified.SplitContainer.prototype.destroySecondaryContent = function() {
	return this._mod(function(bRendered){
		return this.destroyAggregation("secondaryContent", bRendered);
	}, this._paneRenderer);
};


})(window);
