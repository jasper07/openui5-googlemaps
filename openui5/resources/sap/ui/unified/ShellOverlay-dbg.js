/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.unified.ShellOverlay.
jQuery.sap.declare("sap.ui.unified.ShellOverlay");
jQuery.sap.require("sap.ui.unified.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ShellOverlay.
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
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li>
 * <li>{@link #getSearch search} : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getShell shell} : string | sap.ui.unified.Shell</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.unified.ShellOverlay#event:closed closed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * ShellOverlay to be opened in front of a sap.ui.unified.Shell
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16.3
 * @name sap.ui.unified.ShellOverlay
 */
sap.ui.core.Control.extend("sap.ui.unified.ShellOverlay", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.unified",
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    	"search" : {type : "sap.ui.core.Control", multiple : false}
	},
	associations : {
		"shell" : {type : "sap.ui.unified.Shell", multiple : false}
	},
	events : {
		"closed" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.unified.ShellOverlay with name <code>sClassName</code> 
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
 * @name sap.ui.unified.ShellOverlay.extend
 * @function
 */

sap.ui.unified.ShellOverlay.M_EVENTS = {'closed':'closed'};


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content to appear in the overlay.
 * 
 * <strong>Note</strong>: this is the default aggregation for ShellOverlay.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.unified.ShellOverlay#getContent
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
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ShellOverlay#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ShellOverlay#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.unified.ShellOverlay#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.unified.ShellOverlay#removeAllContent
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
 * @name sap.ui.unified.ShellOverlay#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ShellOverlay#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>search</code>.<br/>
 * Experimental (This aggregation might change in future!): The search control which should be displayed in the overlay header.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.ui.unified.ShellOverlay#getSearch
 * @function
 */


/**
 * Setter for the aggregated <code>search</code>.
 * @param {sap.ui.core.Control} oSearch
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ShellOverlay#setSearch
 * @function
 */
	

/**
 * Destroys the search in the aggregation 
 * named <code>search</code>.
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ShellOverlay#destroySearch
 * @function
 */


/**
 * Reference to the sap.ui.unified.Shell control.
 *
 * @return {string} Id of the element which is the current target of the <code>shell</code> association, or null
 * @public
 * @name sap.ui.unified.ShellOverlay#getShell
 * @function
 */

/**
 * Reference to the sap.ui.unified.Shell control.
 *
 * @param {string | sap.ui.unified.Shell} vShell 
 *    Id of an element which becomes the new target of this <code>shell</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ShellOverlay#setShell
 * @function
 */


	
/**
 * Fired when the overlay was closed. 
 *
 * @name sap.ui.unified.ShellOverlay#closed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'closed' event of this <code>sap.ui.unified.ShellOverlay</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.ShellOverlay</code>.<br/> itself. 
 *  
 * Fired when the overlay was closed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellOverlay</code>.<br/> itself.
 *
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ShellOverlay#attachClosed
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'closed' event of this <code>sap.ui.unified.ShellOverlay</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ShellOverlay#detachClosed
 * @function
 */

/**
 * Fire event closed to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.ShellOverlay} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.unified.ShellOverlay#fireClosed
 * @function
 */


// Start of sap\ui\unified\ShellOverlay.js
jQuery.sap.require("sap.ui.core.Popup");
jQuery.sap.require("sap.ui.Device");
jQuery.sap.require("sap.ui.unified.Shell");
jQuery.sap.require("jquery.sap.script");

/**** API ****/

/**
 * Opens the ShellOverlay.
 *
 * @public
 */
sap.ui.unified.ShellOverlay.prototype.open = function(){
	if(this._getPopup().isOpen()){
		return;
	}

	this._opening = true;
	this._forceShellHeaderVisible();
	this._getPopup().setModal(true, sap.ui.core.Popup.blStack.length == 0 && this._getAnimActive() ? "sapUiUfdShellOvrlyBly sapUiUfdShellOvrlyBlyTp" : "");
	this._getPopup().open(0, sap.ui.core.Popup.Dock.BeginTop, sap.ui.core.Popup.Dock.BeginTop, window, "0 0", "none");
	var oSearch = this.getSearch();
	if(oSearch){
		oSearch.focus();
	}
	this._opening = false;
	
	if(this._getAnimActive()){
		jQuery.sap.delayedCall(50, this, function(){
			jQuery.sap.byId("sap-ui-blocklayer-popup").toggleClass("sapUiUfdShellOvrlyBlyTp", false);
		});
	}
	
	jQuery.sap.delayedCall(this._getAnimDuration(true), this, function(){
		this.$().toggleClass("sapUiUfdShellOvrlyOpening", false);
	});
};

/**
 * Closes the ShellOverlay.
 *
 * @public
 */
sap.ui.unified.ShellOverlay.prototype.close = function(){
	if(!this._getPopup().isOpen()){
		return;
	}
	
	this.$().toggleClass("sapUiUfdShellOvrlyCntntHidden", true).toggleClass("sapUiUfdShellOvrlyClosing", true);
	
	this._setSearchWidth();
	
	jQuery.sap.delayedCall(Math.max(this._getAnimDuration(false) - this._getBLAnimDuration(), 0), this, function(){
		var $Bl = jQuery.sap.byId("sap-ui-blocklayer-popup");
		if(sap.ui.core.Popup.blStack.length == 1 && this._getAnimActive() && $Bl.hasClass("sapUiUfdShellOvrlyBly")){
			$Bl.toggleClass("sapUiUfdShellOvrlyBlyTp", true);
		}
	});
	
	jQuery.sap.delayedCall(this._getAnimDuration(false), this, function(){
		this._getPopup().close(0);
		this.$().remove();
		this._forceShellHeaderVisible();
		this.fireClosed();
	});
};

sap.ui.unified.ShellOverlay.prototype.setShell = function(vShell){
	return this.setAssociation("shell", vShell, true);
};

sap.ui.unified.ShellOverlay.prototype.setSearch = function(oSearch){
	this.setAggregation("search", oSearch, true);
	if(!!this.getDomRef()){
		this._headRenderer.render();
	}
	return this;
};

sap.ui.unified.ShellOverlay.prototype.insertContent = function(oContent, iIndex) {
	var res = this.insertAggregation("content", oContent, iIndex, true);
	if(!!this.getDomRef()){
		this._contentRenderer.render();
	}
	return res;
};
sap.ui.unified.ShellOverlay.prototype.addContent = function(oContent) {
	var res = this.addAggregation("content", oContent, true);
	if(!!this.getDomRef()){
		this._contentRenderer.render();
	}
	return res;
};
sap.ui.unified.ShellOverlay.prototype.removeContent = function(vIndex) {
	var res = this.removeAggregation("content", vIndex, true);
	if(!!this.getDomRef()){
		this._contentRenderer.render();
	}
	return res;
};
sap.ui.unified.ShellOverlay.prototype.removeAllContent = function() {
	var res = this.removeAllAggregation("content", true);
	if(!!this.getDomRef()){
		this._contentRenderer.render();
	}
	return res;
};
sap.ui.unified.ShellOverlay.prototype.destroyContent = function() {
	var res = this.destroyAggregation("content", true);
	if(!!this.getDomRef()){
		this._contentRenderer.render();
	}
	return res;
};


/**** Private ****/

sap.ui.unified.ShellOverlay.prototype.init = function(){
	this._animOpenDuration = -1;
	this._animCloseDuration = -1;
	this._animBlockLayerDuration = -1;
	this._animation = sap.ui.getCore().getConfiguration().getAnimation();
	this._opening = false;
	
	var that = this;
	
	this._headRenderer = new sap.ui.unified._ContentRenderer(this, this.getId()+"-hdr-center", function(rm){
		sap.ui.unified.ShellOverlayRenderer.renderSearch(rm, that);
	});
	this._contentRenderer = new sap.ui.unified._ContentRenderer(this, this.getId()+"-cntnt", function(rm){
		sap.ui.unified.ShellOverlayRenderer.renderContent(rm, that);
	});
};

sap.ui.unified.ShellOverlay.prototype.exit = function(){
	if(this._popup){
		this._popup.close(0);
		this._popup.destroy();
		this._popup = null;
	}
	
	this._getPopup = function(){return null;};
	this._headRenderer.destroy();
	delete this._headRenderer;
	this._contentRenderer.destroy();
	delete this._contentRenderer;
};

sap.ui.unified.ShellOverlay.prototype.onAfterRendering = function(){
	if(this._opening){
		this._setSearchWidth();
	}
	
	jQuery.sap.delayedCall(10, this, function(){
		this.$().toggleClass("sapUiUfdShellOvrlyCntntHidden", false);
		this.$("search").css("width", "");
	});
};

sap.ui.unified.ShellOverlay.prototype.onclick = function(oEvent){
	if(jQuery(oEvent.target).attr("id") === this.getId()+"-close"){
		this.close();
	}
};

sap.ui.unified.ShellOverlay.prototype.onThemeChanged = function(){
	this._animOpenDuration = -1;
	this._animCloseDuration = -1;
	this._animBlockLayerDuration = -1;
};


/**** Private Helpers ****/

sap.ui.unified.ShellOverlay.prototype._getAnimDurationThemeParam = function(sParam, bClearIfNotActive){
	var val = parseInt(sap.ui.core.theming.Parameters.get(sParam), 10);
	if(!this._getAnimActive() && bClearIfNotActive){
		val = 0;
	}
	return val;
};

sap.ui.unified.ShellOverlay.prototype._getAnimDuration = function(bOpen){
	if((bOpen && this._animOpenDuration == -1) || (!bOpen && this._animCloseDuration == -1)){
		var sTxt = bOpen ? "Open" : "Close";
		this["_anim"+sTxt+"Duration"] = this._getAnimDurationThemeParam("sapUiUfdShellOvrly"+sTxt+"AnimOverAll", true);
	}
	return bOpen ? this._animOpenDuration : this._animCloseDuration;
};

sap.ui.unified.ShellOverlay.prototype._getBLAnimDuration = function(){
	if(this._animBlockLayerDuration == -1){
		this._animBlockLayerDuration = this._getAnimDurationThemeParam("sapUiUfdShellOvrlyBlockLayerAnimDuration", true);
	}
	return this._animBlockLayerDuration;
};

sap.ui.unified.ShellOverlay.prototype._getAnimActive = function(){
	if(!this._animation || (sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version < 10)){
		return false;
	}
	return true;
};

sap.ui.unified.ShellOverlay.prototype._getPopup = function(){
	if(!this._popup){
		this._popup = new sap.ui.core.Popup(this, true, false, false);
		this._popup._applyPosition = function(oPosition) {
			this._$().css("left", "0").css("top", "0");
			this._oLastPosition = oPosition;
			this._oLastOfRect = jQuery(window).rect();
		};
		this._popup.attachOpened(function(){
			sap.ui.unified._iNumberOfOpenedShellOverlays++;
		});
		this._popup.attachClosed(function(){
			sap.ui.unified._iNumberOfOpenedShellOverlays--;
		});
	}
	return this._popup;
};

sap.ui.unified.ShellOverlay.prototype._getShell = function(){
	var sId = this.getShell();
	if(!sId){
		return;
	}
	var oShell = sap.ui.getCore().byId(sId);
	if(!oShell || !(oShell instanceof sap.ui.unified.Shell)){
		return;
	}
	return oShell;
};

sap.ui.unified.ShellOverlay.prototype._forceShellHeaderVisible = function(){
	var oShell = this._getShell();
	if(oShell){
		oShell._doShowHeader(true);
	}
};

sap.ui.unified.ShellOverlay.prototype._getSearchWidth = function(){
	var sShellId = this.getShell();
	if(!sShellId){
		return -1;
	}
	var $ShellSearchArea = jQuery.sap.byId(sShellId+"-hdr-center").children();
	if($ShellSearchArea.length){
		return $ShellSearchArea.width();
	}
	return -1;
};

sap.ui.unified.ShellOverlay.prototype._setSearchWidth = function(){
	var iWidth = this._getSearchWidth();
	if(iWidth <= 0){
		return;
	}
	
	var sWidth = iWidth+"px";
	
	if(sap.ui.Device.browser.safari){
		//Safari doesn't support width transition based on different units -> so px must be replaced by %
		var iTotalWidth = this.$("hdr-center").width();
		if(iTotalWidth > iWidth){
			sWidth = Math.round((iWidth*100)/iTotalWidth) + "%";
		}else{
			sWidth = "100%";
		}
	}
	
	this.$("search").css("width", sWidth);
};


