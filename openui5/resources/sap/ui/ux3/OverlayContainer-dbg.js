/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.OverlayContainer.
jQuery.sap.declare("sap.ui.ux3.OverlayContainer");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.ux3.Overlay");


/**
 * Constructor for a new OverlayContainer.
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
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.ux3.Overlay#constructor sap.ui.ux3.Overlay}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Is to be embedded into the Overlay control as content container
 * @extends sap.ui.ux3.Overlay
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.OverlayContainer
 */
sap.ui.ux3.Overlay.extend("sap.ui.ux3.OverlayContainer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.OverlayContainer with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.OverlayContainer.extend
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Aggregation for content
 * 
 * <strong>Note</strong>: this is the default aggregation for OverlayContainer.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.ux3.OverlayContainer#getContent
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
 * @return {sap.ui.ux3.OverlayContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.OverlayContainer#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.OverlayContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.OverlayContainer#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.ux3.OverlayContainer#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.OverlayContainer#removeAllContent
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
 * @name sap.ui.ux3.OverlayContainer#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.OverlayContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.OverlayContainer#destroyContent
 * @function
 */


// Start of sap\ui\ux3\OverlayContainer.js
/**
 * Focus Last Element
 *
 * @private
 */
sap.ui.ux3.OverlayContainer.prototype._setFocusLast = function() {
	var oFocus = this.$("content").lastFocusableDomRef();
	if (!oFocus && this.getCloseButtonVisible()) {
		oFocus = this.getDomRef("close");
	} else if (!oFocus && this.getOpenButtonVisible()) {
		oFocus = this.getDomRef("openNew");
	}
	jQuery.sap.focus(oFocus);
};

/**
 * Focus First Element
 *
 * @private
 */
sap.ui.ux3.OverlayContainer.prototype._setFocusFirst = function() {
	if (this.getOpenButtonVisible()) {
		jQuery.sap.focus(this.getDomRef("openNew"));
	} else if (this.getCloseButtonVisible()) {
		jQuery.sap.focus(this.getDomRef("close"));
	} else {
		jQuery.sap.focus(this.$("content").firstFocusableDomRef());
	}
};