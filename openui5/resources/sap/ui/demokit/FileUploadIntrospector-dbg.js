/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.demokit.FileUploadIntrospector.
jQuery.sap.declare("sap.ui.demokit.FileUploadIntrospector");
jQuery.sap.require("sap.ui.demokit.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new FileUploadIntrospector.
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
 * <li>{@link #getUploadUrl uploadUrl} : string</li>
 * <li>{@link #getAutoRefreshInterval autoRefreshInterval} : string (default: '0')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
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
 * Add your documentation for the new FileUploadInspector
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.demokit.FileUploadIntrospector
 */
sap.ui.core.Control.extend("sap.ui.demokit.FileUploadIntrospector", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"refresh"
	],

	// ---- control specific ----
	library : "sap.ui.demokit",
	properties : {
		"uploadUrl" : {type : "string", group : "Misc", defaultValue : null},
		"autoRefreshInterval" : {type : "string", group : "Misc", defaultValue : '0'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.ui.demokit.FileUploadIntrospector with name <code>sClassName</code> 
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
 * @name sap.ui.demokit.FileUploadIntrospector.extend
 * @function
 */


/**
 * Getter for property <code>uploadUrl</code>.
 * The URL to check the upload content with....
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>uploadUrl</code>
 * @public
 * @name sap.ui.demokit.FileUploadIntrospector#getUploadUrl
 * @function
 */

/**
 * Setter for property <code>uploadUrl</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUploadUrl  new value for property <code>uploadUrl</code>
 * @return {sap.ui.demokit.FileUploadIntrospector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.FileUploadIntrospector#setUploadUrl
 * @function
 */


/**
 * Getter for property <code>autoRefreshInterval</code>.
 * Interval in milliseconds after which the content is checked again. values lower or equal to 0 mean 'no automatic refresh'.
 *
 * Default value is <code>0</code>
 *
 * @return {string} the value of property <code>autoRefreshInterval</code>
 * @public
 * @name sap.ui.demokit.FileUploadIntrospector#getAutoRefreshInterval
 * @function
 */

/**
 * Setter for property <code>autoRefreshInterval</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {string} sAutoRefreshInterval  new value for property <code>autoRefreshInterval</code>
 * @return {sap.ui.demokit.FileUploadIntrospector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.FileUploadIntrospector#setAutoRefreshInterval
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * (CSS) Height of the control
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.demokit.FileUploadIntrospector#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.demokit.FileUploadIntrospector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.FileUploadIntrospector#setHeight
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Width of the file list
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.demokit.FileUploadIntrospector#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.demokit.FileUploadIntrospector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.FileUploadIntrospector#setWidth
 * @function
 */


/**
 * 
 *
 * @name sap.ui.demokit.FileUploadIntrospector.prototype.refresh
 * @function

 * @type void
 * @public
 */


// Start of sap\ui\demokit\FileUploadIntrospector.js
sap.ui.demokit.FileUploadIntrospector.prototype.init = function() {
	this._aFiles = [];
	this._iHash = 0;
};

sap.ui.demokit.FileUploadIntrospector.prototype.setAutoRefreshInterval = function(iInterval) {
	this.setProperty("autoRefreshInterval", iInterval);
	if ( this.oTimer ) {
		jQuery.sap.clearDelayedCall(this.oTimer);
		this.oTimer = undefined;
	}
	if ( iInterval > 0 ) {
		this.oTimer = jQuery.sap.delayedCall(iInterval, this, "_autoRefresh");
	}
};

sap.ui.demokit.FileUploadIntrospector.prototype.refresh = function() {
	var that = this;
	jQuery.getJSON(this.getUploadUrl(), function(data) { that._receiveFileList(data); });
};

sap.ui.demokit.FileUploadIntrospector.prototype._autoRefresh = function() {
	if ( this.oTimer ) {
		jQuery.sap.clearDelayedCall(this.oTimer);
		this.oTimer = undefined;
	}
	this.refresh(); 
	// TODO reinitialize timer only after response has been received (requires separate receive methods)  
	var iInterval = this.getAutoRefreshInterval();
	if ( iInterval > 0 ) {
		this.oTimer = jQuery.sap.delayedCall(iInterval, this, "_autoRefresh");
	}
};

sap.ui.demokit.FileUploadIntrospector.prototype._receiveFileList = function(oResult) {
	if ( !this._aFiles || this._iHash !== oResult.hash ) {
		this._aFiles = oResult.files;
		this._iHash = oResult.hash;
		this.invalidate();
	}
}; 