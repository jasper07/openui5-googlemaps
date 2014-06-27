/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.IconTabFilter.
jQuery.sap.declare("sap.m.IconTabFilter");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Item");


/**
 * Constructor for a new IconTabFilter.
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
 * <li>{@link #getCount count} : string (default: '')</li>
 * <li>{@link #getShowAll showAll} : boolean (default: false)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI (default: '')</li>
 * <li>{@link #getIconColor iconColor} : sap.ui.core.IconColor (default: sap.ui.core.IconColor.Default)</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getDesign design} : sap.m.IconTabFilterDesign (default: sap.m.IconTabFilterDesign.Vertical)</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.Item#constructor sap.ui.core.Item}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The filter item class
 * @extends sap.ui.core.Item
 * @implements sap.m.IconTab
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.IconTabFilter
 */
sap.ui.core.Item.extend("sap.m.IconTabFilter", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.m.IconTab"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"count" : {type : "string", group : "Data", defaultValue : ''},
		"showAll" : {type : "boolean", group : "Misc", defaultValue : false},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : ''},
		"iconColor" : {type : "sap.ui.core.IconColor", group : "Appearance", defaultValue : sap.ui.core.IconColor.Default},
		"iconDensityAware" : {type : "boolean", group : "Appearance", defaultValue : true},
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"design" : {type : "sap.m.IconTabFilterDesign", group : "Appearance", defaultValue : sap.m.IconTabFilterDesign.Vertical}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	}
}});


/**
 * Creates a new subclass of class sap.m.IconTabFilter with name <code>sClassName</code> 
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
 * @name sap.m.IconTabFilter.extend
 * @function
 */


/**
 * Getter for property <code>count</code>.
 * The number of available items if this filter is applied
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>count</code>
 * @public
 * @name sap.m.IconTabFilter#getCount
 * @function
 */

/**
 * Setter for property <code>count</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sCount  new value for property <code>count</code>
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabFilter#setCount
 * @function
 */


/**
 * Getter for property <code>showAll</code>.
 * Enables special visualization for disabled filter (show all items)
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showAll</code>
 * @public
 * @name sap.m.IconTabFilter#getShowAll
 * @function
 */

/**
 * Setter for property <code>showAll</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowAll  new value for property <code>showAll</code>
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabFilter#setShowAll
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * The icon to display for this item.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.m.IconTabFilter#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabFilter#setIcon
 * @function
 */


/**
 * Getter for property <code>iconColor</code>.
 * If an icon font is used, the color can be chosen from the icon colors (sap.ui.core.IconColor).
 * Possible semantic colors are: Neutral, Positive, Critical, Negative.
 * Instead of the semantic icon color the brand color can be used, this is named Default.
 * Semantic colors and brand colors should not be mixed up inside one IconTabBar.
 *
 * Default value is <code>Default</code>
 *
 * @return {sap.ui.core.IconColor} the value of property <code>iconColor</code>
 * @public
 * @name sap.m.IconTabFilter#getIconColor
 * @function
 */

/**
 * Setter for property <code>iconColor</code>.
 *
 * Default value is <code>Default</code> 
 *
 * @param {sap.ui.core.IconColor} oIconColor  new value for property <code>iconColor</code>
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabFilter#setIconColor
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
 * @name sap.m.IconTabFilter#getIconDensityAware
 * @function
 */

/**
 * Setter for property <code>iconDensityAware</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabFilter#setIconDensityAware
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * If set to false, the control is not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.IconTabFilter#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabFilter#setVisible
 * @function
 */


/**
 * Getter for property <code>design</code>.
 * Design for the filter item.
 *
 * Default value is <code>Vertical</code>
 *
 * @return {sap.m.IconTabFilterDesign} the value of property <code>design</code>
 * @public
 * @name sap.m.IconTabFilter#getDesign
 * @function
 */

/**
 * Setter for property <code>design</code>.
 *
 * Default value is <code>Vertical</code> 
 *
 * @param {sap.m.IconTabFilterDesign} oDesign  new value for property <code>design</code>
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.IconTabFilter#setDesign
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content to show for this item (optional).
 * If this content is set, it will be displayed instead of the general content inside the IconTabBar.
 * 
 * <strong>Note</strong>: this is the default aggregation for IconTabFilter.
 * @return {sap.ui.core.Control[]}
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabFilter#getContent
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
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabFilter#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabFilter#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabFilter#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabFilter#removeAllContent
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
 * @since 1.15.0
 * @name sap.m.IconTabFilter#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.m.IconTabFilter} <code>this</code> to allow method chaining
 * @public
 * @since 1.15.0
 * @name sap.m.IconTabFilter#destroyContent
 * @function
 */


// Start of sap\m\IconTabFilter.js
/**
 * Lazy load icon tab filter image.
 *
 * @param {Array} aCssClassesToAdd array of css classes which will be added if the image needs to be created.
 * @param {sap.ui.core.Control} oParent this element's parent.
 * @param {Array} aCssClassesToRemove all css clases that oImageControl has and which are contained in this array
 * are removed bevore adding the css classes listed in aCssClassesToAdd.
 *
 * @private
 */
sap.m.IconTabFilter.prototype._getImageControl = function(aCssClassesToAdd, oParent, aCssClassesToRemove) {
	var mProperties = { 
		src : this.getIcon(),
		densityAware : this.getIconDensityAware()
	};
	if (mProperties.src) {
		this._oImageControl = sap.m.ImageHelper.getImageControl(this.getId() + "-icon", this._oImageControl, oParent, mProperties, aCssClassesToAdd, aCssClassesToRemove);
	}
	
	return this._oImageControl;
};

/**
 * Function is called when exiting the element.
 * 
 * @private
 */
sap.m.IconTabFilter.prototype.exit = function(oEvent) {
	
	if (this._oImageControl) {
		this._oImageControl.destroy();
	}
	
	if (sap.ui.core.Item.prototype.exit) {
		sap.ui.core.Item.prototype.exit.call(this, oEvent);
	}
};

