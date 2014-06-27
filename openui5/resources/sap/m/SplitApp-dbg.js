/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.SplitApp.
jQuery.sap.declare("sap.m.SplitApp");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.SplitContainer");


/**
 * Constructor for a new SplitApp.
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
 * <li>{@link #getHomeIcon homeIcon} : any</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.SplitApp#event:orientationChange orientationChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.SplitContainer#constructor sap.m.SplitContainer}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * SplitApp is another root element of a UI5 mobile application besides App control. It maintains two NavContainers if runs in tablet and one NavContainer in phone. The display of master NavContainer depends on the portrait/landscape of the device and the mode of SplitApp.
 * @extends sap.m.SplitContainer
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.SplitApp
 */
sap.m.SplitContainer.extend("sap.m.SplitApp", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"homeIcon" : {type : "any", group : "Misc", defaultValue : null}
	},
	events : {
		"orientationChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.SplitApp with name <code>sClassName</code> 
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
 * @name sap.m.SplitApp.extend
 * @function
 */

sap.m.SplitApp.M_EVENTS = {'orientationChange':'orientationChange'};


/**
 * Getter for property <code>homeIcon</code>.
 * The icon to be displayed on the home screen of iOS devices after the user does "add to home screen".
 * 
 * Note that only the first attempt to set the homeIcon will be executed, subsequent settings are ignored.
 * 
 * This icon must be in PNG format. The property can either hold the URL of one single icon which is used for all devices (and possibly scaled, which looks not perfect), or an object holding icon URLs for the different required sizes.
 * 
 * A desktop icon (used for bookmarks and overriding the favicon) can also be configured. This requires an object to be given and the "icon" property of this object then defines the desktop bookmark icon. For this icon, PNG is not supported by Internet Explorer. The ICO format is supported by all browsers. ICO is also preferred for this desktop icon setting because the file can contain different images for different resolutions.
 * 
 * One example is:
 * 
 * app.setHomeIcon({
 * 'phone':'phone-icon.png',
 * 'phone@2':'phone-retina.png',
 * 'tablet':'tablet-icon.png',
 * 'tablet@2':'tablet-retina.png',
 * 'icon':'desktop.ico'
 * });
 * 
 * The respective image sizes are 57/114 px for the phone and 72/144 px for the tablet.
 * If an object is given but one of the sizes is not given, the largest given icon will be used for this size.
 * 
 * On Android these icons may or may not be used by the device. Apparently chances can be improved by adding glare effect and rounded corners, setting the file name so it ends with "-precomposed.png" and setting the "homeIconPrecomposed" property to "true".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {any} the value of property <code>homeIcon</code>
 * @public
 * @name sap.m.SplitApp#getHomeIcon
 * @function
 */

/**
 * Setter for property <code>homeIcon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {any} oHomeIcon  new value for property <code>homeIcon</code>
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#setHomeIcon
 * @function
 */


/**
 * This event will be fired when orientation (portrait/landscape) is changed. 
 *
 * @name sap.m.SplitApp#orientationChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.landscape Returns true if the device is in landscape.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'orientationChange' event of this <code>sap.m.SplitApp</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SplitApp</code>.<br/> itself. 
 *  
 * This event will be fired when orientation (portrait/landscape) is changed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.SplitApp</code>.<br/> itself.
 *
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#attachOrientationChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'orientationChange' event of this <code>sap.m.SplitApp</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SplitApp#detachOrientationChange
 * @function
 */

/**
 * Fire event orientationChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'landscape' of type <code>boolean</code> Returns true if the device is in landscape.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SplitApp} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SplitApp#fireOrientationChange
 * @function
 */


// Start of sap\m\SplitApp.js
jQuery.sap.require("sap.m.SplitContainer");

/**************************************************************
* START - Life Cycle Methods
**************************************************************/
sap.m.SplitApp.prototype.init = function() {
	sap.m.SplitContainer.prototype.init.apply(this, arguments);
	this.addStyleClass("sapMSplitApp");
	jQuery.sap.initMobile({
		viewport: !this._debugZoomAndScroll,
		statusBar: "default",
		hideBrowser: true,
		preventScroll: !this._debugZoomAndScroll,
		rootId: this.getId()
	});
};

sap.m.SplitApp.prototype.onBeforeRendering = function() {
	sap.m.SplitContainer.prototype.onBeforeRendering.apply(this, arguments);
	jQuery(window).unbind("resize", this._fireOrientationChange);
	jQuery.sap.initMobile({
		homeIcon: this.getHomeIcon()
	});
};

sap.m.SplitApp.prototype.onAfterRendering = function(){
	sap.m.SplitContainer.prototype.onAfterRendering.apply(this, arguments);

    var ref = this.getDomRef().parentNode;
    // set all parent elements to 100% height this *should* be done by the application in CSS, but people tend to forget it...
    if (ref && !ref._sapui5_heightFixed) {
        ref._sapui5_heightFixed = true;
        while (ref && ref !== document.documentElement) {
            var $ref = jQuery(ref);
            if ($ref.attr("data-sap-ui-root-content")) { // Shell as parent does this already
                break;
            }
            if (!ref.style.height) ref.style.height = "100%";
            ref = ref.parentNode;
        }
    }

    jQuery(window).bind("resize", jQuery.proxy(this._fireOrientationChange, this));
};

sap.m.SplitApp.prototype.exit = function() {
	sap.m.SplitContainer.prototype.exit.apply(this, arguments);
	jQuery(window).unbind("resize", this._fireOrientationChange);
};
/**************************************************************
* END - Life Cycle Methods
**************************************************************/

sap.m.SplitApp.prototype._fireOrientationChange = function() {
	var isLandscape = sap.ui.Device.orientation.landscape;
	if (this._oldIsLandscape !== isLandscape) {
		this.fireOrientationChange({landscape: isLandscape});
	}
};