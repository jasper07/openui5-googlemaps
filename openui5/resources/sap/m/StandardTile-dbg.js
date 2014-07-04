/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.StandardTile.
jQuery.sap.declare("sap.m.StandardTile");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.Tile");


/**
 * Constructor for a new StandardTile.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getInfo info} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getActiveIcon activeIcon} : sap.ui.core.URI</li>
 * <li>{@link #getNumber number} : string</li>
 * <li>{@link #getNumberUnit numberUnit} : string</li>
 * <li>{@link #getInfoState infoState} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getType type} : sap.m.StandardTileType (default: sap.m.StandardTileType.None)</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li></ul>
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
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Tile#constructor sap.m.Tile}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The StandardTile
 * @extends sap.m.Tile
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.m.StandardTile
 */
sap.m.Tile.extend("sap.m.StandardTile", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"info" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"activeIcon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"number" : {type : "string", group : "Misc", defaultValue : null},
		"numberUnit" : {type : "string", group : "Misc", defaultValue : null},
		"infoState" : {type : "sap.ui.core.ValueState", group : "Misc", defaultValue : sap.ui.core.ValueState.None},
		"type" : {type : "sap.m.StandardTileType", group : "Misc", defaultValue : sap.m.StandardTileType.None},
		"iconDensityAware" : {type : "boolean", group : "Appearance", defaultValue : true}
	}
}});


/**
 * Creates a new subclass of class sap.m.StandardTile with name <code>sClassName</code> 
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
 * @name sap.m.StandardTile.extend
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Tile title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.StandardTile#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardTile#setTitle
 * @function
 */


/**
 * Getter for property <code>info</code>.
 * Tile description
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>info</code>
 * @public
 * @name sap.m.StandardTile#getInfo
 * @function
 */

/**
 * Setter for property <code>info</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sInfo  new value for property <code>info</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardTile#setInfo
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Tile icon
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.m.StandardTile#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardTile#setIcon
 * @function
 */


/**
 * Getter for property <code>activeIcon</code>.
 * Tile active icon
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>activeIcon</code>
 * @public
 * @name sap.m.StandardTile#getActiveIcon
 * @function
 */

/**
 * Setter for property <code>activeIcon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sActiveIcon  new value for property <code>activeIcon</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardTile#setActiveIcon
 * @function
 */


/**
 * Getter for property <code>number</code>.
 * Number field
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>number</code>
 * @public
 * @name sap.m.StandardTile#getNumber
 * @function
 */

/**
 * Setter for property <code>number</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumber  new value for property <code>number</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardTile#setNumber
 * @function
 */


/**
 * Getter for property <code>numberUnit</code>.
 * Number units qualifier
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>numberUnit</code>
 * @public
 * @name sap.m.StandardTile#getNumberUnit
 * @function
 */

/**
 * Setter for property <code>numberUnit</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumberUnit  new value for property <code>numberUnit</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardTile#setNumberUnit
 * @function
 */


/**
 * Getter for property <code>infoState</code>.
 * Info state defines the color of the info text. E.g. Error, Warning, Success...
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>infoState</code>
 * @public
 * @name sap.m.StandardTile#getInfoState
 * @function
 */

/**
 * Setter for property <code>infoState</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oInfoState  new value for property <code>infoState</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardTile#setInfoState
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Tile type.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.m.StandardTileType} the value of property <code>type</code>
 * @public
 * @name sap.m.StandardTile#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.m.StandardTileType} oType  new value for property <code>type</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardTile#setType
 * @function
 */


/**
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * 
 * If bandwidth is the key for the application, set this value to false.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * @name sap.m.StandardTile#getIconDensityAware
 * @function
 */

/**
 * Setter for property <code>iconDensityAware</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.StandardTile} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.StandardTile#setIconDensityAware
 * @function
 */


// Start of sap\m\StandardTile.js
///**
// * This file defines behavior for the control,
// */
jQuery.sap.require("sap.ui.core.IconPool");


/**
 * Called when the control is destroyed.
 * 
 * @private
 */
sap.m.StandardTile.prototype.exit = function() {
	if(this._oImageControl) {
		this._oImageControl.destroy();
		this._oImageControl = null;
	}	
};

/**
 * Overrides the icon property of the Tile Control
 */
sap.m.StandardTile.prototype.getIcon = function() {
	if(!this.getProperty("icon") && this.getType() === "Create") {
		return sap.ui.core.IconPool.getIconURI("add");
	} else {
		return this.getProperty("icon");
	}
};


/**
 * Lazy load tile icon image.
 * @private
 */
sap.m.StandardTile.prototype._getImage = function() {
	
	var sImgId = this.getId() + "-img";
	var sSize = sap.ui.Device.system.phone ? "1.3rem": "2rem";
	
	var mProperties = { 
		src : this.getIcon(),
		height : sSize,
		width : sSize,
		size: sSize,
		densityAware : this.getIconDensityAware()
	};
	
	this._oImageControl = sap.m.ImageHelper.getImageControl(sImgId, this._oImageControl, this, mProperties);
	
	return this._oImageControl;
};
