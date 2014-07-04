/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Panel.
jQuery.sap.declare("sap.m.Panel");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Panel.
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
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getHeaderText headerText} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 'auto')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li>
 * <li>{@link #getHeaderToolbar headerToolbar} : sap.m.Toolbar</li>
 * <li>{@link #getInfoToolbar infoToolbar} : sap.m.Toolbar</li></ul>
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
 * The Panel control is a container for controls with a solid background and a header text.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16
 * @name sap.m.Panel
 */
sap.ui.core.Control.extend("sap.m.Panel", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"headerText" : {type : "string", group : "Data", defaultValue : null},
		"width" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : '100%'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : 'auto'}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    	"headerToolbar" : {type : "sap.m.Toolbar", multiple : false}, 
    	"infoToolbar" : {type : "sap.m.Toolbar", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.m.Panel with name <code>sClassName</code> 
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
 * @name sap.m.Panel.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Is the control visible
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.Panel#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Panel#setVisible
 * @function
 */


/**
 * Getter for property <code>headerText</code>.
 * Sets the header text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>headerText</code>
 * @public
 * @name sap.m.Panel#getHeaderText
 * @function
 */

/**
 * Setter for property <code>headerText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sHeaderText  new value for property <code>headerText</code>
 * @return {sap.m.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Panel#setHeaderText
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The Panel width
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.Panel#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Panel#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * The Panel height
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.m.Panel#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.m.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Panel#setHeight
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Content for the Panel
 * 
 * <strong>Note</strong>: this is the default aggregation for Panel.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.Panel#getContent
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
 * @return {sap.m.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Panel#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.m.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Panel#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.m.Panel#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Panel#removeAllContent
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
 * @name sap.m.Panel#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.Panel} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Panel#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>headerToolbar</code>.<br/>
 * Header can be used as a Toolbar to add extra controls for user interactions.
 * Note: This aggregation overwrites "headerText" property.
 * 
 * @return {sap.m.Toolbar}
 * @public
 * @since 1.16
 * @name sap.m.Panel#getHeaderToolbar
 * @function
 */


/**
 * Setter for the aggregated <code>headerToolbar</code>.
 * @param {sap.m.Toolbar} oHeaderToolbar
 * @return {sap.m.Panel} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.Panel#setHeaderToolbar
 * @function
 */
	

/**
 * Destroys the headerToolbar in the aggregation 
 * named <code>headerToolbar</code>.
 * @return {sap.m.Panel} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.Panel#destroyHeaderToolbar
 * @function
 */


/**
 * Getter for aggregation <code>infoToolbar</code>.<br/>
 * InfoBar is placed below the header and can be used to show extra information to the user.
 * 
 * @return {sap.m.Toolbar}
 * @public
 * @since 1.16
 * @name sap.m.Panel#getInfoToolbar
 * @function
 */


/**
 * Setter for the aggregated <code>infoToolbar</code>.
 * @param {sap.m.Toolbar} oInfoToolbar
 * @return {sap.m.Panel} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.Panel#setInfoToolbar
 * @function
 */
	

/**
 * Destroys the infoToolbar in the aggregation 
 * named <code>infoToolbar</code>.
 * @return {sap.m.Panel} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.Panel#destroyInfoToolbar
 * @function
 */


// Start of sap\m\Panel.js
sap.m.Panel.prototype.init = function() {
};

/**
 * Sets the width of the panel.
 *
 * @param {string} sWidth the width of the panel as CSS size
 * @return {sap.m.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.m.Panel.prototype.setWidth = function (sWidth) {
	this.setProperty("width", sWidth, true); // don't rerender
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		oDomRef.style.width = sWidth;
	}
	return this;
};


/**
 * Sets the height of the panel.
 *
 * @param {string} sHeight the height of the panel as CSS size
 * @return {sap.m.Panel} <code>this</code> to allow method chaining
 * @public
 */
sap.m.Panel.prototype.setHeight = function (sHeight) {
	this.setProperty("height", sHeight, true); // don't rerender
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		oDomRef.style.height = sHeight;
	}
	return this;
};