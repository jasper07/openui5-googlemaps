/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ObjectIdentifier.
jQuery.sap.declare("sap.m.ObjectIdentifier");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ObjectIdentifier.
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
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getBadgeNotes badgeNotes} : boolean</li>
 * <li>{@link #getBadgePeople badgePeople} : boolean</li>
 * <li>{@link #getBadgeAttachments badgeAttachments} : boolean</li></ul>
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
 * ObjectIdentifier is a display control that enables the user to easily identify a specific object. The object identifier title is the key identifier of the object and additional text and icons can be used to further distinguish it from other objects.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.m.ObjectIdentifier
 */
sap.ui.core.Control.extend("sap.m.ObjectIdentifier", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"text" : {type : "string", group : "Misc", defaultValue : null},
		"badgeNotes" : {type : "boolean", group : "Misc", defaultValue : null},
		"badgePeople" : {type : "boolean", group : "Misc", defaultValue : null},
		"badgeAttachments" : {type : "boolean", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.m.ObjectIdentifier with name <code>sClassName</code> 
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
 * @name sap.m.ObjectIdentifier.extend
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * The object title.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.ObjectIdentifier#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.ObjectIdentifier} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectIdentifier#setTitle
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * The object text.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.m.ObjectIdentifier#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.m.ObjectIdentifier} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectIdentifier#setText
 * @function
 */


/**
 * Getter for property <code>badgeNotes</code>.
 * Indicates whether or not the notes icon is displayed.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>badgeNotes</code>
 * @public
 * @name sap.m.ObjectIdentifier#getBadgeNotes
 * @function
 */

/**
 * Setter for property <code>badgeNotes</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bBadgeNotes  new value for property <code>badgeNotes</code>
 * @return {sap.m.ObjectIdentifier} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectIdentifier#setBadgeNotes
 * @function
 */


/**
 * Getter for property <code>badgePeople</code>.
 * Indicates whether or not the address book icon is displayed.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>badgePeople</code>
 * @public
 * @name sap.m.ObjectIdentifier#getBadgePeople
 * @function
 */

/**
 * Setter for property <code>badgePeople</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bBadgePeople  new value for property <code>badgePeople</code>
 * @return {sap.m.ObjectIdentifier} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectIdentifier#setBadgePeople
 * @function
 */


/**
 * Getter for property <code>badgeAttachments</code>.
 * Indicates whether or not the attachments icon is displayed.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>badgeAttachments</code>
 * @public
 * @name sap.m.ObjectIdentifier#getBadgeAttachments
 * @function
 */

/**
 * Setter for property <code>badgeAttachments</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bBadgeAttachments  new value for property <code>badgeAttachments</code>
 * @return {sap.m.ObjectIdentifier} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectIdentifier#setBadgeAttachments
 * @function
 */


// Start of sap\m\ObjectIdentifier.js
///**
// * This file defines behavior for the control
// */

jQuery.sap.require("sap.ui.core.IconPool");

/**
 * Called when the control is destroyed.
 * 
 * @private
 */
sap.m.ObjectIdentifier.prototype.exit = function() {

    if (this._attachmentsIcon) {
        this._attachmentsIcon.destroy();
        this._attachmentsIcon = null;
    }

    if (this._peopleIcon) {
        this._peopleIcon.destroy();
        this._peopleIcon = null;
    }

    if (this._notesIcon) {
        this._notesIcon.destroy();
        this._notesIcon = null;
    }
};

/**
 * Lazy load attachments icon.
 * 
 * @private
 */
sap.m.ObjectIdentifier.prototype._getAttachmentsIcon = function() {

	if (!this._attachmentsIcon){
		this._attachmentsIcon = this._getIcon(sap.ui.core.IconPool.getIconURI("attachment"), this.getId() + "-attachments");
	}

    return this._attachmentsIcon;
};

/**
 * Lazy load people icon.
 * 
 * @private
 */
sap.m.ObjectIdentifier.prototype._getPeopleIcon = function() {

	if (!this._peopleIcon){
		this._peopleIcon = this._getIcon(sap.ui.core.IconPool.getIconURI("group"), this.getId() + "-people");
	}

    return this._peopleIcon;
};

/**
 * Lazy load notes icon.
 * 
 * @private
 */
sap.m.ObjectIdentifier.prototype._getNotesIcon = function() {

	if(!this._notesIcon ) {
		this._notesIcon  = this._getIcon(sap.ui.core.IconPool.getIconURI("notes"), this.getId() + "-notes");
	}

    return this._notesIcon;
};

/**
 * Create icon image.
 * 
 * @private
 */
sap.m.ObjectIdentifier.prototype._getIcon = function(sURI, sImageId) {

    var sSize = sap.ui.Device.system.phone ? "1em" : "1em";
    var oImage;

    oImage = this._icon || sap.ui.core.IconPool.createControlByURI({
        src : sURI,
        id : sImageId + "-icon",
        size : sSize
    }, sap.m.Image);

    oImage.setSrc(sURI);

    return oImage;
};