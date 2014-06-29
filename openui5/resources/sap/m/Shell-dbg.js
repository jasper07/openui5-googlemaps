/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Shell.
jQuery.sap.declare("sap.m.Shell");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Shell.
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
 * <li>{@link #getLogo logo} : sap.ui.core.URI</li>
 * <li>{@link #getShowLogout showLogout} : boolean (default: true)</li>
 * <li>{@link #getHeaderRightText headerRightText} : string</li>
 * <li>{@link #getAppWidthLimited appWidthLimited} : boolean (default: true)</li>
 * <li>{@link #getBackgroundColor backgroundColor} : sap.ui.core.CSSColor</li>
 * <li>{@link #getBackgroundImage backgroundImage} : sap.ui.core.URI</li>
 * <li>{@link #getBackgroundRepeat backgroundRepeat} : boolean (default: false)</li>
 * <li>{@link #getBackgroundOpacity backgroundOpacity} : float (default: 1)</li>
 * <li>{@link #getHomeIcon homeIcon} : object</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getApp app} <strong>(default aggregation)</strong> : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Shell#event:logout logout} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The Shell control can be used as root element of applications, it can contain an App or SplitApp control.
 * The Shell provides some overarching functionality for the overall application and takes care of visual adaptation, like a frame around the App, on desktop browser platforms.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.m.Shell
 */
sap.ui.core.Control.extend("sap.m.Shell", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"logo" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"showLogout" : {type : "boolean", group : "Behavior", defaultValue : true},
		"headerRightText" : {type : "string", group : "Data", defaultValue : null},
		"appWidthLimited" : {type : "boolean", group : "Appearance", defaultValue : true},
		"backgroundColor" : {type : "sap.ui.core.CSSColor", group : "Appearance", defaultValue : null},
		"backgroundImage" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"backgroundRepeat" : {type : "boolean", group : "Appearance", defaultValue : false},
		"backgroundOpacity" : {type : "float", group : "Appearance", defaultValue : 1},
		"homeIcon" : {type : "object", group : "Misc", defaultValue : null}
	},
	defaultAggregation : "app",
	aggregations : {
    	"app" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"logout" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Shell with name <code>sClassName</code> 
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
 * @name sap.m.Shell.extend
 * @function
 */

sap.m.Shell.M_EVENTS = {'logout':'logout'};


/**
 * Getter for property <code>title</code>.
 * The application title which may or may not be displayed outside the actual application, depending on the available screen size.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.Shell#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Shell#setTitle
 * @function
 */


/**
 * Getter for property <code>logo</code>.
 * A logo to be displayed next to the app when the screen is sufficiently large.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>logo</code>
 * @public
 * @name sap.m.Shell#getLogo
 * @function
 */

/**
 * Setter for property <code>logo</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sLogo  new value for property <code>logo</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Shell#setLogo
 * @function
 */


/**
 * Getter for property <code>showLogout</code>.
 * Whether the Logout button should be displayed. This currently only happens on very tall screens (1568px height), otherwise it is always hidden.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showLogout</code>
 * @public
 * @name sap.m.Shell#getShowLogout
 * @function
 */

/**
 * Setter for property <code>showLogout</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowLogout  new value for property <code>showLogout</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Shell#setShowLogout
 * @function
 */


/**
 * Getter for property <code>headerRightText</code>.
 * A text, like the name of the logged-in user, which should be displayed on the right side of the header (if there is enough space to display the header at all - this only happens on very tall screens (1568px height), otherwise it is always hidden.).
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>headerRightText</code>
 * @public
 * @name sap.m.Shell#getHeaderRightText
 * @function
 */

/**
 * Setter for property <code>headerRightText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sHeaderRightText  new value for property <code>headerRightText</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Shell#setHeaderRightText
 * @function
 */


/**
 * Getter for property <code>appWidthLimited</code>.
 * Whether the width of the content (the aggregated app) should be limited or extend to the full screen width.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>appWidthLimited</code>
 * @public
 * @name sap.m.Shell#getAppWidthLimited
 * @function
 */

/**
 * Setter for property <code>appWidthLimited</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bAppWidthLimited  new value for property <code>appWidthLimited</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Shell#setAppWidthLimited
 * @function
 */


/**
 * Getter for property <code>backgroundColor</code>.
 * Background color of the Shell. If set, this color will override the default background defined by the theme. So this should only be set when really required.
 * Any configured background image will be placed above this colored background.
 * Use the "backgroundRepeat" property to define whether this image should be stretched to cover the complete Shell or whether it should be tiled.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSColor} the value of property <code>backgroundColor</code>
 * @public
 * @since 1.11.2
 * @name sap.m.Shell#getBackgroundColor
 * @function
 */

/**
 * Setter for property <code>backgroundColor</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSColor} sBackgroundColor  new value for property <code>backgroundColor</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * @name sap.m.Shell#setBackgroundColor
 * @function
 */


/**
 * Getter for property <code>backgroundImage</code>.
 * Background image of the Shell. If set, this image will override the default background defined by the theme. So this should only be set when really required.
 * This background image will be placed above any color set for the background.
 * Use the "backgroundRepeat" property to define whether this image should be stretched to cover the complete Shell or whether it should be tiled.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>backgroundImage</code>
 * @public
 * @since 1.11.2
 * @name sap.m.Shell#getBackgroundImage
 * @function
 */

/**
 * Setter for property <code>backgroundImage</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sBackgroundImage  new value for property <code>backgroundImage</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * @name sap.m.Shell#setBackgroundImage
 * @function
 */


/**
 * Getter for property <code>backgroundRepeat</code>.
 * Whether the background image (if configured) should be proportionally stretched to cover the whole Shell (false, default) or whether it should be tiled (true).
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>backgroundRepeat</code>
 * @public
 * @since 1.11.2
 * @name sap.m.Shell#getBackgroundRepeat
 * @function
 */

/**
 * Setter for property <code>backgroundRepeat</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bBackgroundRepeat  new value for property <code>backgroundRepeat</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * @name sap.m.Shell#setBackgroundRepeat
 * @function
 */


/**
 * Getter for property <code>backgroundOpacity</code>.
 * Opacity of the background image. The opacity can be set between 0 (fully transparent) and 1 fully opaque).
 * This can be used to improve readability of the shell content by making the background image partly transparent.
 *
 * Default value is <code>1</code>
 *
 * @return {float} the value of property <code>backgroundOpacity</code>
 * @public
 * @since 1.11.2
 * @name sap.m.Shell#getBackgroundOpacity
 * @function
 */

/**
 * Setter for property <code>backgroundOpacity</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {float} fBackgroundOpacity  new value for property <code>backgroundOpacity</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.2
 * @name sap.m.Shell#setBackgroundOpacity
 * @function
 */


/**
 * Getter for property <code>homeIcon</code>.
 * Sets the icon used for the mobile device home screen and the icon to be used for bookmarks by desktop browsers.
 * 
 * This property should be only set once and as early as possible. Subsequent calls replace the previous icon settings and may lead to different behavior depending on the browser.
 * 
 * Different image sizes for device home screen need to be given as PNG images, an ICO file needs to be given as desktop browser bookmark icon (other file formats may not work in all browsers).
 * The "precomposed" flag defines whether there is already a glow effect contained in the home screen images (or whether iOS should add such an effect). The given structure could look like this:
 * {
 * 'phone':'phone-icon_57x57.png',
 * 'phone@2':'phone-retina_114x114.png',
 * 'tablet':'tablet-icon_72x72.png',
 * 'tablet@2':'tablet-retina_144x144.png',
 * 'precomposed':true,
 * 'favicon':'favicon.ico'
 * }
 * 
 * See jQuery.sap.setIcons() for full documentation.
 * 
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>homeIcon</code>
 * @public
 * @name sap.m.Shell#getHomeIcon
 * @function
 */

/**
 * Setter for property <code>homeIcon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oHomeIcon  new value for property <code>homeIcon</code>
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Shell#setHomeIcon
 * @function
 */


/**
 * Getter for aggregation <code>app</code>.<br/>
 * A Shell contains an App or a SplitApp (they may be wrapped in a View). Other control types are not allowed.
 * 
 * <strong>Note</strong>: this is the default aggregation for Shell.
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.m.Shell#getApp
 * @function
 */


/**
 * Setter for the aggregated <code>app</code>.
 * @param {sap.ui.core.Control} oApp
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Shell#setApp
 * @function
 */
	

/**
 * Destroys the app in the aggregation 
 * named <code>app</code>.
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Shell#destroyApp
 * @function
 */


/**
 * Fired when the user presses the logout button/link. 
 *
 * @name sap.m.Shell#logout
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'logout' event of this <code>sap.m.Shell</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Shell</code>.<br/> itself. 
 *  
 * Fired when the user presses the logout button/link. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Shell</code>.<br/> itself.
 *
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Shell#attachLogout
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'logout' event of this <code>sap.m.Shell</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Shell#detachLogout
 * @function
 */

/**
 * Fire event logout to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Shell} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Shell#fireLogout
 * @function
 */


// Start of sap\m\Shell.js

sap.m.Shell.prototype.init = function() {
	// theme change might change the logo
	sap.ui.getCore().attachThemeChanged(jQuery.proxy(function(){
		var $hdr = this.$("hdr");
		if ($hdr.length) {
			$hdr.find(".sapMShellLogo").remove(); // remove old logo, if present
			var html = sap.m.ShellRenderer.getLogoImageHtml(this);
			$hdr.prepend(jQuery(html)); // insert new logo
		}
	}, this));
	

	jQuery.sap.initMobile({
		statusBar: "default",
		hideBrowser: true
	});
};

sap.m.Shell.prototype.onAfterRendering = function () {
	var ref = this.getDomRef().parentNode,
		$ref;
	// set all parent elements to 100% height this *should* be done by the application in CSS, but people tend to forget it...
	if (ref && !ref._sapui5_heightFixed) {
		ref._sapui5_heightFixed = true;
		while (ref && ref !== document.documentElement) {
			$ref = jQuery(ref);
			if ($ref.attr("data-sap-ui-root-content")) { // some parents (e.g. Unified Shell) do this already
				break;
			}
			if (!ref.style.height) {
				ref.style.height = "100%";
			}
			ref = ref.parentNode;
		}
	}
	this.$("content").css("height", "");
};

sap.m.Shell.prototype.ontap = function(oEvent) {
	if (oEvent.target.className 
			&& oEvent.target.className.indexOf /* not available for SVG elements */ 
			&& oEvent.target.className.indexOf("sapMShellHeaderLogout") > -1) { // logout button clicked
		this.fireLogout();
	}
};


// API methods

sap.m.Shell.prototype.setTitle = function(sTitle) {
	this.$("hdrTxt").text(sTitle);
	this.setProperty("title", sTitle, true); // no rerendering
	return this; 
};

sap.m.Shell.prototype.setHeaderRightText = function(sText) {
	this.setProperty("headerRightText", sText, true); // no rerendering
	if (!sText) {
		sText = "";
	}
	this.$("hdrRightTxt").text(sText).css("display", (!!sText ? "inline" : "none"));
	return this; 
};

sap.m.Shell.prototype.setAppWidthLimited = function(bLimit) {
	this.$().toggleClass("sapMShellAppWidthLimited", bLimit);
	this.setProperty("appWidthLimited", bLimit, true); // no rerendering 
	return this;
};

sap.m.Shell.prototype.setBackgroundOpacity = function(fOpacity) {
	if (fOpacity > 1 || fOpacity < 0) {
		jQuery.sap.log.warning("Invalid value " + fOpacity + " for Shell.setBackgroundOpacity() ignored. Valid values are: floats between 0 and 1.");
		return this;
	}
	this.$("BG").css("opacity", fOpacity);
	return this.setProperty("backgroundOpacity", fOpacity, true); // no rerendering - live opacity change looks cooler
};

sap.m.Shell.prototype.setHomeIcon = function(oIcons) {
	this.setProperty("homeIcon", oIcons, true); // no rerendering
	jQuery.sap.setIcons(oIcons);
};