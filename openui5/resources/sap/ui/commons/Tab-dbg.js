/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Tab.
jQuery.sap.declare("sap.ui.commons.Tab");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.Panel");


/**
 * Constructor for a new Tab.
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
 * <li>{@link #getVerticalScrolling verticalScrolling} : sap.ui.core.Scrolling (default: sap.ui.core.Scrolling.None)</li>
 * <li>{@link #getHorizontalScrolling horizontalScrolling} : sap.ui.core.Scrolling (default: sap.ui.core.Scrolling.None)</li>
 * <li>{@link #getClosable closable} : boolean (default: false)</li>
 * <li>{@link #getSelected selected} : boolean (default: false)</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.commons.Panel#constructor sap.ui.commons.Panel}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A single page in a TabStrip control.
 * @extends sap.ui.commons.Panel
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.Tab
 */
sap.ui.commons.Panel.extend("sap.ui.commons.Tab", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"verticalScrolling" : {type : "sap.ui.core.Scrolling", group : "Behavior", defaultValue : sap.ui.core.Scrolling.None},
		"horizontalScrolling" : {type : "sap.ui.core.Scrolling", group : "Behavior", defaultValue : sap.ui.core.Scrolling.None},
		"closable" : {type : "boolean", group : "Misc", defaultValue : false},
		"selected" : {type : "boolean", group : "Behavior", defaultValue : false, deprecated: true}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Tab with name <code>sClassName</code> 
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
 * @name sap.ui.commons.Tab.extend
 * @function
 */


/**
 * Getter for property <code>verticalScrolling</code>.
 * Set the height property.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.Scrolling} the value of property <code>verticalScrolling</code>
 * @public
 * @name sap.ui.commons.Tab#getVerticalScrolling
 * @function
 */

/**
 * Setter for property <code>verticalScrolling</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.Scrolling} oVerticalScrolling  new value for property <code>verticalScrolling</code>
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Tab#setVerticalScrolling
 * @function
 */


/**
 * Getter for property <code>horizontalScrolling</code>.
 * Set the width property.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.Scrolling} the value of property <code>horizontalScrolling</code>
 * @public
 * @name sap.ui.commons.Tab#getHorizontalScrolling
 * @function
 */

/**
 * Setter for property <code>horizontalScrolling</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.Scrolling} oHorizontalScrolling  new value for property <code>horizontalScrolling</code>
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Tab#setHorizontalScrolling
 * @function
 */


/**
 * Getter for property <code>closable</code>.
 * Defines whether the tab contains a close button.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>closable</code>
 * @public
 * @name sap.ui.commons.Tab#getClosable
 * @function
 */

/**
 * Setter for property <code>closable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bClosable  new value for property <code>closable</code>
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Tab#setClosable
 * @function
 */


/**
 * Getter for property <code>selected</code>.
 * Defines whether the tab is the active one.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * @deprecated Since version 0.17.0. 
 * This property is not used. To indentify the selected tab in a TabStrip selectedIndex is used.
 * @name sap.ui.commons.Tab#getSelected
 * @function
 */

/**
 * Setter for property <code>selected</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSelected  new value for property <code>selected</code>
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 0.17.0. 
 * This property is not used. To indentify the selected tab in a TabStrip selectedIndex is used.
 * @name sap.ui.commons.Tab#setSelected
 * @function
 */


// Start of sap\ui\commons\Tab.js
/*
 * Initialize the Tab
 * @private
 */
sap.ui.commons.Tab.prototype.init = function() {
	// Setting this to role Tabpanel instead of its container basically worked.
	// However, the role is set one level higher to get better output in screen reader.

	this.oScrollDomRef = null;      // Points to the content area
};

sap.ui.commons.Tab.prototype.rerender = function() {

	// as Tab has no own renderer call renderer of TabStrip
	var oParent = this.getParent();
	if (oParent) {
		oParent.rerender();
	}

};

/*
 * Called after rendering from the TabStrip control
 */
sap.ui.commons.Tab.prototype.onAfterRendering = function () {
	this.oScrollDomRef = this.getDomRef("panel");

	// Restore scroll positions
	if (this.oScrollDomRef) {
		var scrollTop = this.getProperty("scrollTop");
		if (scrollTop > 0) {
			this.oScrollDomRef.scrollTop = scrollTop;
		}
		var scrollLeft = this.getProperty("scrollLeft");
		if (scrollLeft > 0) {
			this.oScrollDomRef.scrollLeft = scrollLeft;
		}
	}

	// TODO: this must also be done for tabs where the contents are not rendered initially
};

/*
 * Returns the scroll position of the tab in pixel from the left. Returns "0" if not rendered yet.
 * Also updates the control property internally.
 *
 * @return The scroll position
 * @public
 */
sap.ui.commons.Tab.prototype.getScrollLeft = function () {
	var scrollLeft = 0;
	if (this.oScrollDomRef) {
		scrollLeft = this.oScrollDomRef.scrollLeft;
		this.setProperty("scrollLeft", scrollLeft, true);
	}

	return scrollLeft;
};

/*
 * Sets the scroll position of the tab in pixel from the left.
 * @param {int} iPosition The position to scroll to
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tab.prototype.setScrollLeft = function (iPosition) {
	this.setProperty("scrollLeft", iPosition, true);
	if (this.oScrollDomRef) {                        // TODO: what if called before rendering?
		this.bIgnoreScrollEvent = true;
		this.oScrollDomRef.scrollLeft = iPosition;
	}
	return this;
};

/*
 * Returns the scroll position of the tab in pixel from the top. Returns "0" if not rendered yet.
 * Also updates the control property internally.
 *
 * @return The scroll position
 * @public
 */
sap.ui.commons.Tab.prototype.getScrollTop = function () {
	var scrollTop = 0;
	if (this.oScrollDomRef) {
		scrollTop = this.oScrollDomRef.scrollTop;
		this.setProperty("scrollTop", scrollTop, true);
	}

	return scrollTop;
};

/*
 * Sets the scroll position of the tab in pixel from the top.
 * @param {int} iPosition The position to scroll to
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tab.prototype.setScrollTop = function (iPosition) {
	this.setProperty("scrollTop", iPosition, true);
	if (this.oScrollDomRef) {                       // TODO: what if called before rendering?
		this.bIgnoreScrollEvent = true;
		this.oScrollDomRef.scrollTop = iPosition;
	}
	return this;
};

/*
 * Property setter for the "enabled" state (overwrite method from panel)
 * Normally only classes are exchanged and no rerendering is needed.
 * But if selected tab should be disabled this needs a rerendering because
 * the selected tab can not be disabled
 * If no tab is selected (because all tabs are disabled before) also a
 * rerendering is needed.
 *
 * @param bEnabled whether the tab should be enabled or not
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tab.prototype.setEnabled = function(bEnabled) {

	if (bEnabled == this.getEnabled()) {
		return this;
	}

	var oDomRef = this.getDomRef();
	var oParent = this.getParent();

	if (!oDomRef || (!bEnabled && jQuery(this.getDomRef()).hasClass("sapUiTabSel")) ||
		(bEnabled && oParent && oParent.getSelectedIndex && oParent.getSelectedIndex() < 0)) {
		this.setProperty("enabled", bEnabled, false); // rendering needed
	} else {
		this.setProperty("enabled", bEnabled, true); // no re-rendering!
		// if already rendered, adapt rendered control without complete re-rendering
		jQuery(this.getDomRef()).toggleClass("sapUiTab", bEnabled).toggleClass("sapUiTabDsbl", !bEnabled).attr("aria-disabled",!bEnabled);
	}
	return this;

};

/*
 * Setter of the width property. As it has no effect on a tab and is
 * only inherited from panel, noting to do. Just overwrite panel implementation
 *
 * @param {string} sWidth the width of the panel as CSS size
 * @return {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tab.prototype.setWidth = function (sWidth) {
	this.setProperty("width", sWidth, true); // don't rerender
	// do nothing
	return this;
};

/*
 * Property setter for the padding.As it has no effect on a tab and is
 * only inherited from panel, noting to do. Just overwrite panel implementation
 *
 * @param bPadding whether the Panel should have padding
 * @returns {sap.ui.commons.Tab} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Tab.prototype.setApplyContentPadding = function(bPadding) {
	this.setProperty("applyContentPadding", bPadding, true); // no re-rendering!
	// do nothing
	return this;
};

sap.ui.commons.Tab.prototype._handleTrigger = function(oEvent) {
	//see sap.ui.commons.Panel.prototype._handleTrigger -> Nothing to do here
};