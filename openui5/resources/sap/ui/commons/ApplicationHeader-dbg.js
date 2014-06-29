/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ApplicationHeader.
jQuery.sap.declare("sap.ui.commons.ApplicationHeader");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ApplicationHeader.
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
 * <li>{@link #getLogoSrc logoSrc} : sap.ui.core.URI</li>
 * <li>{@link #getLogoText logoText} : string</li>
 * <li>{@link #getDisplayLogoff displayLogoff} : boolean (default: true)</li>
 * <li>{@link #getUserName userName} : string</li>
 * <li>{@link #getDisplayWelcome displayWelcome} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.ApplicationHeader#event:logoff logoff} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The application header control stands on the top of any application page. It consists basically of 4 areas. Logo area/Function area provided by application/Search area/Logout area
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.ApplicationHeader
 */
sap.ui.core.Control.extend("sap.ui.commons.ApplicationHeader", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"logoSrc" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"logoText" : {type : "string", group : "Misc", defaultValue : null},
		"displayLogoff" : {type : "boolean", group : "Misc", defaultValue : true},
		"userName" : {type : "string", group : "Misc", defaultValue : null},
		"displayWelcome" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	events : {
		"logoff" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.ApplicationHeader with name <code>sClassName</code> 
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
 * @name sap.ui.commons.ApplicationHeader.extend
 * @function
 */

sap.ui.commons.ApplicationHeader.M_EVENTS = {'logoff':'logoff'};


/**
 * Getter for property <code>logoSrc</code>.
 * Path (src) to the logo icon to be displayed in the application header.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>logoSrc</code>
 * @public
 * @name sap.ui.commons.ApplicationHeader#getLogoSrc
 * @function
 */

/**
 * Setter for property <code>logoSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sLogoSrc  new value for property <code>logoSrc</code>
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ApplicationHeader#setLogoSrc
 * @function
 */


/**
 * Getter for property <code>logoText</code>.
 * The text that will be displayed beside the logo in the application header. This property is optional.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>logoText</code>
 * @public
 * @name sap.ui.commons.ApplicationHeader#getLogoText
 * @function
 */

/**
 * Setter for property <code>logoText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLogoText  new value for property <code>logoText</code>
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ApplicationHeader#setLogoText
 * @function
 */


/**
 * Getter for property <code>displayLogoff</code>.
 * If set to true, the logoff area will be displayed at the right hand side of the application header.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>displayLogoff</code>
 * @public
 * @name sap.ui.commons.ApplicationHeader#getDisplayLogoff
 * @function
 */

/**
 * Setter for property <code>displayLogoff</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bDisplayLogoff  new value for property <code>displayLogoff</code>
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ApplicationHeader#setDisplayLogoff
 * @function
 */


/**
 * Getter for property <code>userName</code>.
 * User name that will be displayed beside the welcome text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>userName</code>
 * @public
 * @name sap.ui.commons.ApplicationHeader#getUserName
 * @function
 */

/**
 * Setter for property <code>userName</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUserName  new value for property <code>userName</code>
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ApplicationHeader#setUserName
 * @function
 */


/**
 * Getter for property <code>displayWelcome</code>.
 * By default, set to true and dislpays the welcome text
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>displayWelcome</code>
 * @public
 * @name sap.ui.commons.ApplicationHeader#getDisplayWelcome
 * @function
 */

/**
 * Setter for property <code>displayWelcome</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bDisplayWelcome  new value for property <code>displayWelcome</code>
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ApplicationHeader#setDisplayWelcome
 * @function
 */


/**
 * Fires an event to log off the user from the application.
 * No parameters. 
 *
 * @name sap.ui.commons.ApplicationHeader#logoff
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'logoff' event of this <code>sap.ui.commons.ApplicationHeader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.ApplicationHeader</code>.<br/> itself. 
 *  
 * Fires an event to log off the user from the application.
 * No parameters. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.ApplicationHeader</code>.<br/> itself.
 *
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ApplicationHeader#attachLogoff
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'logoff' event of this <code>sap.ui.commons.ApplicationHeader</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ApplicationHeader#detachLogoff
 * @function
 */

/**
 * Fire event logoff to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ApplicationHeader} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.ApplicationHeader#fireLogoff
 * @function
 */


// Start of sap\ui\commons\ApplicationHeader.js
///**
// * This file defines behavior for the control,
// */
sap.ui.commons.ApplicationHeader.prototype.init = function(){
	this.initializationDone = false;
};

sap.ui.commons.ApplicationHeader.prototype.exit = function() {
	this.oLogo && this.oLogo.destroy();
	this.oLogoText && this.oLogoText.destroy();
	this.oLogoffBtn && this.oLogoffBtn.destroy();
};

/**
 * Create the composite parts out of the current settings.
 * Called by the renderer just before rendering
 * @private
 */
sap.ui.commons.ApplicationHeader.prototype.initControls = function() {

	//Application header to build sub-controls ids
	var appHeaderId = this.getId();

	//Get the texts from the resources bundle
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");

	//Create the logo image control and the title (textView) control
	this.oLogo && this.oLogo.destroy();
	this.oLogo = new sap.ui.commons.Image(appHeaderId + "-logoImg");
	this.oLogo.setTooltip(rb.getText("APPHDR_LOGO_TOOLTIP"));
	this.oLogo.setParent(this);
	this.oLogoText && this.oLogoText.destroy();
	this.oLogoText = new sap.ui.commons.TextView(appHeaderId + "-logoText");
	this.oLogoText.setAccessibleRole(sap.ui.core.AccessibleRole.Heading);
	this.oLogoText.setParent(this);

	//Log off button
	this.oLogoffBtn && this.oLogoffBtn.destroy();
	this.oLogoffBtn = new sap.ui.commons.Button(appHeaderId + "-logoffBtn");
	var sLogOffText = rb.getText("APPHDR_LOGOFF");
	this.oLogoffBtn.setText(sLogOffText);
	this.oLogoffBtn.setTooltip(sLogOffText);
	this.oLogoffBtn.attachPress(this.logoff,this);
	this.oLogoffBtn.setParent(this);
	this.oLogoffBtn.setLite(true);
}


/**
*  This event is fired when the user clicks on the Log Off button
*  @param oEvent The event triggered
*  @private
*/;
sap.ui.commons.ApplicationHeader.prototype.logoff = function(oEvent){
	this.fireLogoff();
};


// ---- Overwritten property setters to make sure the full area is rerendered correctly ----

sap.ui.commons.ApplicationHeader.prototype.setLogoSrc = function(sLogoSrc) {
	this.initializationDone = false;
	this.setProperty("logoSrc", sLogoSrc);
	return this;
};

sap.ui.commons.ApplicationHeader.prototype.setLogoText = function(sLogoText) {
	this.initializationDone = false;
	this.setProperty("logoText", sLogoText);
	return this;
};

sap.ui.commons.ApplicationHeader.prototype.setUserName = function(sUserName){
	this.initializationDone = false;
	this.setProperty("userName", sUserName);
	return this;
};

sap.ui.commons.ApplicationHeader.prototype.setDisplayWelcome = function(bDisplayWelcome) {
	this.initializationDone = false;
	this.setProperty("displayWelcome", bDisplayWelcome);
	return this;
};

sap.ui.commons.ApplicationHeader.prototype.setDisplayLogoff = function(bDisplayLogoff) {
	this.initializationDone = false;
	this.setProperty("displayLogoff", bDisplayLogoff);
	return this;
};