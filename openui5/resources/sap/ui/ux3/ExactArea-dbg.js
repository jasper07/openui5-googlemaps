/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ExactArea.
jQuery.sap.declare("sap.ui.ux3.ExactArea");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ExactArea.
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
 * <li>{@link #getToolbarVisible toolbarVisible} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li>
 * <li>{@link #getToolbarItems toolbarItems} : sap.ui.commons.ToolbarItem[]</li></ul>
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
 * Consists of two sections: A tool bar and a content area where arbitrary controls can be added.
 * The ExactArea is intended to be used for the Exact design approach but alternatively also in a stand alone version.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @experimental Since version 1.6. 
 * API is not yet finished and might change completely
 * @name sap.ui.ux3.ExactArea
 */
sap.ui.core.Control.extend("sap.ui.ux3.ExactArea", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"toolbarVisible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    	"toolbarItems" : {type : "sap.ui.commons.ToolbarItem", multiple : true, singularName : "toolbarItem"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.ExactArea with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.ExactArea.extend
 * @function
 */


/**
 * Getter for property <code>toolbarVisible</code>.
 * Specifies whether the tool bar shall be visible
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>toolbarVisible</code>
 * @public
 * @name sap.ui.ux3.ExactArea#getToolbarVisible
 * @function
 */

/**
 * Setter for property <code>toolbarVisible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bToolbarVisible  new value for property <code>toolbarVisible</code>
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactArea#setToolbarVisible
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Specifies whether the control shall be visible
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.ux3.ExactArea#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactArea#setVisible
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Arbitrary child controls of the content area
 * 
 * <strong>Note</strong>: this is the default aggregation for ExactArea.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.ux3.ExactArea#getContent
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
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactArea#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactArea#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.ux3.ExactArea#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ExactArea#removeAllContent
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
 * @name sap.ui.ux3.ExactArea#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactArea#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>toolbarItems</code>.<br/>
 * Tool bar items which shall be shown in the tool bar.
 * 
 * @return {sap.ui.commons.ToolbarItem[]}
 * @public
 * @name sap.ui.ux3.ExactArea#getToolbarItems
 * @function
 */


/**
 * Inserts a toolbarItem into the aggregation named <code>toolbarItems</code>.
 *
 * @param {sap.ui.commons.ToolbarItem}
 *          oToolbarItem the toolbarItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the toolbarItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the toolbarItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the toolbarItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactArea#insertToolbarItem
 * @function
 */

/**
 * Adds some toolbarItem <code>oToolbarItem</code> 
 * to the aggregation named <code>toolbarItems</code>.
 *
 * @param {sap.ui.commons.ToolbarItem}
 *            oToolbarItem the toolbarItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactArea#addToolbarItem
 * @function
 */

/**
 * Removes an toolbarItem from the aggregation named <code>toolbarItems</code>.
 *
 * @param {int | string | sap.ui.commons.ToolbarItem} vToolbarItem the toolbarItem to remove or its index or id
 * @return {sap.ui.commons.ToolbarItem} the removed toolbarItem or null
 * @public
 * @name sap.ui.ux3.ExactArea#removeToolbarItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>toolbarItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.ToolbarItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ExactArea#removeAllToolbarItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.ToolbarItem</code> in the aggregation named <code>toolbarItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.ToolbarItem}
 *            oToolbarItem the toolbarItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ExactArea#indexOfToolbarItem
 * @function
 */
	

/**
 * Destroys all the toolbarItems in the aggregation 
 * named <code>toolbarItems</code>.
 * @return {sap.ui.ux3.ExactArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactArea#destroyToolbarItems
 * @function
 */


// Start of sap\ui\ux3\ExactArea.js
jQuery.sap.require("sap.ui.commons.Toolbar");

(function() {

//*************************************************************
//Define a private element to enable titles tin the toolbar
//*************************************************************

sap.ui.core.Element.extend("sap.ui.ux3.ExactAreaToolbarTitle", {
  
  metadata: {
    interfaces : ["sap.ui.commons.ToolbarItem"],
    properties : {
      text : {name : "text", type : "string", group : "Appearance", defaultValue : ''}
    }
  }

});

//*************************************************************

}());