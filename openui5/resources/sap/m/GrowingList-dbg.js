/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.GrowingList.
jQuery.sap.declare("sap.m.GrowingList");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.List");


/**
 * Constructor for a new GrowingList.
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
 * <li>{@link #getThreshold threshold} : int (default: 20)</li>
 * <li>{@link #getTriggerText triggerText} : string</li>
 * <li>{@link #getScrollToLoad scrollToLoad} : boolean (default: false)</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.m.List#constructor sap.m.List}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * sap.m.GrowingList control is the container for all list items and inherits from sap.m.List control. Everything like the selection, deletion, unread states and inset style are also maintained here. In addition the control provides a loading mechanism to request data from the model and append the list items to the list. The request is started manually by tapping on the trigger at the end of the list.
 * @extends sap.m.List
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @deprecated Since version 1.16. 
 * Instead use "List" or "Table" control with setting "growing" property to "true"
 * @name sap.m.GrowingList
 */
sap.m.List.extend("sap.m.GrowingList", { metadata : {

	// ---- object ----
	deprecated : true,

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"threshold" : {type : "int", group : "Misc", defaultValue : 20},
		"triggerText" : {type : "string", group : "Appearance", defaultValue : null},
		"scrollToLoad" : {type : "boolean", group : "Behavior", defaultValue : false}
	}
}});


/**
 * Creates a new subclass of class sap.m.GrowingList with name <code>sClassName</code> 
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
 * @name sap.m.GrowingList.extend
 * @function
 */


/**
 * Getter for property <code>threshold</code>.
 * Number of items requested from the server. To activate this you should set growing property to "true"
 *
 * Default value is <code>20</code>
 *
 * @return {int} the value of property <code>threshold</code>
 * @public
 * @since 1.16
 * @name sap.m.GrowingList#getThreshold
 * @function
 */

/**
 * Setter for property <code>threshold</code>.
 *
 * Default value is <code>20</code> 
 *
 * @param {int} iThreshold  new value for property <code>threshold</code>
 * @return {sap.m.GrowingList} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.GrowingList#setThreshold
 * @function
 */


/**
 * Getter for property <code>triggerText</code>.
 * Text which is displayed on the trigger at the end of the list. The default is a translated text ("Load More Data") coming from the messagebundle properties.
 * This property can be used only if growing property is set "true" and scrollToLoad property is set "false".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>triggerText</code>
 * @public
 * @since 1.16
 * @name sap.m.GrowingList#getTriggerText
 * @function
 */

/**
 * Setter for property <code>triggerText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTriggerText  new value for property <code>triggerText</code>
 * @return {sap.m.GrowingList} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.GrowingList#setTriggerText
 * @function
 */


/**
 * Getter for property <code>scrollToLoad</code>.
 * If you set this property to true then user needs to scroll end to trigger loading a new page. Default value is false which means user needs to scroll end and then click button to load new page.
 * NOTE: This property can be set true, if growing property is set "true" and if you only have one instance of this control inside the scroll container(e.g Page).
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>scrollToLoad</code>
 * @public
 * @since 1.16
 * @name sap.m.GrowingList#getScrollToLoad
 * @function
 */

/**
 * Setter for property <code>scrollToLoad</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bScrollToLoad  new value for property <code>scrollToLoad</code>
 * @return {sap.m.GrowingList} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.GrowingList#setScrollToLoad
 * @function
 */


// Start of sap\m\GrowingList.js

// checks if control is not compatible anymore
sap.m.GrowingList.prototype._isIncompatible = function() {
	return sap.ui.getCore().getConfiguration().getCompatibilityVersion("sapMGrowingList").compareTo("1.16") >= 0;
};

//sets growing property to true on init
sap.m.GrowingList.prototype.init = function() {
	sap.m.ListBase.prototype.init.call(this);
	if (!this._isIncompatible()) {
		this.setGrowing();
	}
};

// sets growing feature always to true
sap.m.GrowingList.prototype.setGrowing = function() {
	return sap.m.ListBase.prototype.setGrowing.call(this, true);
};

// not to break add getters and setters for old properties
!function(oGL, oLB) {
	["Threshold", "TriggerText", "ScrollToLoad"].forEach(function(property) {
		oGL["set" + property] = oLB["setGrowing" + property];
		oGL["get" + property] = oLB["getGrowing" + property];
	});
}(sap.m.GrowingList.prototype, sap.m.ListBase.prototype);