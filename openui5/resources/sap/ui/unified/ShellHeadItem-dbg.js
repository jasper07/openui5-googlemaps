/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.unified.ShellHeadItem.
jQuery.sap.declare("sap.ui.unified.ShellHeadItem");
jQuery.sap.require("sap.ui.unified.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new ShellHeadItem.
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
 * <li>{@link #getStartsSection startsSection} : boolean (default: false)</li>
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * <li>{@link #getShowMarker showMarker} : boolean (default: false)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.unified.ShellHeadItem#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Header Action item of the Shell.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.15.1
 * @name sap.ui.unified.ShellHeadItem
 */
sap.ui.core.Element.extend("sap.ui.unified.ShellHeadItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.unified",
	properties : {
		"startsSection" : {type : "boolean", group : "Appearance", defaultValue : false, deprecated: true},
		"selected" : {type : "boolean", group : "Appearance", defaultValue : false},
		"showMarker" : {type : "boolean", group : "Appearance", defaultValue : false, deprecated: true},
		"icon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.unified.ShellHeadItem with name <code>sClassName</code> 
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
 * @name sap.ui.unified.ShellHeadItem.extend
 * @function
 */

sap.ui.unified.ShellHeadItem.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>startsSection</code>.
 * If set to true, a divider is displayed before the item.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>startsSection</code>
 * @public
 * @deprecated Since version 1.18. 
 * Dividers are not supported anymore.
 * @name sap.ui.unified.ShellHeadItem#getStartsSection
 * @function
 */

/**
 * Setter for property <code>startsSection</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bStartsSection  new value for property <code>startsSection</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18. 
 * Dividers are not supported anymore.
 * @name sap.ui.unified.ShellHeadItem#setStartsSection
 * @function
 */


/**
 * Getter for property <code>selected</code>.
 * If set to true, the item gets a special design.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * @name sap.ui.unified.ShellHeadItem#getSelected
 * @function
 */

/**
 * Setter for property <code>selected</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSelected  new value for property <code>selected</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ShellHeadItem#setSelected
 * @function
 */


/**
 * Getter for property <code>showMarker</code>.
 * If set to true, a theme dependent marker is shown on the item.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showMarker</code>
 * @public
 * @deprecated Since version 1.18. 
 * Markers should not be used anymore.
 * @name sap.ui.unified.ShellHeadItem#getShowMarker
 * @function
 */

/**
 * Setter for property <code>showMarker</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowMarker  new value for property <code>showMarker</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.18. 
 * Markers should not be used anymore.
 * @name sap.ui.unified.ShellHeadItem#setShowMarker
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * The icon of the item, either defined in the sap.ui.core.IconPool or an URI to a custom image. An icon must be set.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.unified.ShellHeadItem#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ShellHeadItem#setIcon
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible items are not shown on the UI.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @since 1.18
 * @name sap.ui.unified.ShellHeadItem#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * @since 1.18
 * @name sap.ui.unified.ShellHeadItem#setVisible
 * @function
 */


/**
 * Event is fired when the user presses the item. 
 *
 * @name sap.ui.unified.ShellHeadItem#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.unified.ShellHeadItem</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.unified.ShellHeadItem</code>.<br/> itself. 
 *  
 * Event is fired when the user presses the item. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.unified.ShellHeadItem</code>.<br/> itself.
 *
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ShellHeadItem#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.unified.ShellHeadItem</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ShellHeadItem#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.unified.ShellHeadItem} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.unified.ShellHeadItem#firePress
 * @function
 */


// Start of sap\ui\unified\ShellHeadItem.js
jQuery.sap.require("sap.ui.core.IconPool");

sap.ui.unified.ShellHeadItem.prototype.onclick = function(oEvent){
	this.firePress();
};


sap.ui.unified.ShellHeadItem.prototype.setStartsSection = function(bStartsSection){
	bStartsSection = !!bStartsSection;
	this.setProperty("startsSection", bStartsSection, true);
	this.$().toggleClass("sapUiUfdShellHeadItmDelim", bStartsSection);
	return this;
};


sap.ui.unified.ShellHeadItem.prototype.setSelected = function(bSelected){
	bSelected = !!bSelected;
	this.setProperty("selected", bSelected, true);
	this.$().toggleClass("sapUiUfdShellHeadItmSel", bSelected);
	return this;
};


sap.ui.unified.ShellHeadItem.prototype.setVisible = function(bVisible){
	this.setProperty("visible", !!bVisible); // Suppress Rerendering handled by Shell
	return this;
};


sap.ui.unified.ShellHeadItem.prototype.setShowMarker = function(bMarker){
	bMarker = !!bMarker;
	this.setProperty("showMarker", bMarker, true);
	this.$().toggleClass("sapUiUfdShellHeadItmMark", bMarker);
	return this;
};


sap.ui.unified.ShellHeadItem.prototype.setIcon = function(sIcon){
	this.setProperty("icon", sIcon, true);
	if(this.getDomRef()){
		this._refreshIcon();
	}
	return this;
};


sap.ui.unified.ShellHeadItem.prototype._refreshIcon = function(){
	var $Ico = jQuery(this.$().children()[0]);
	var sIco = this.getIcon();
	$Ico.html("").css("style", "");
	if(sap.ui.core.IconPool.isIconURI(sIco)){
		var oIconInfo = sap.ui.core.IconPool.getIconInfo(sIco);
		if(oIconInfo){
			$Ico.text(oIconInfo.content).css("font-family", "'" + oIconInfo.fontFamily + "'");
		}
	}else{
		$Ico.html("<img src='" + jQuery.sap.encodeHTML(sIco) + "'></img>");
	}
};