/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.layout.ResponsiveFlowLayoutData.
jQuery.sap.declare("sap.ui.layout.ResponsiveFlowLayoutData");
jQuery.sap.require("sap.ui.layout.library");
jQuery.sap.require("sap.ui.core.LayoutData");


/**
 * Constructor for a new ResponsiveFlowLayoutData.
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
 * <li>{@link #getMinWidth minWidth} : int (default: 100)</li>
 * <li>{@link #getWeight weight} : int (default: 1)</li>
 * <li>{@link #getLinebreak linebreak} : boolean (default: false)</li>
 * <li>{@link #getMargin margin} : boolean (default: true)</li>
 * <li>{@link #getLinebreakable linebreakable} : boolean (default: true)</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This is a LayoutData Element that can be added to a control if this control is used within a ResponsiveFlowLayout
 * @extends sap.ui.core.LayoutData
 *
 * @author SAP 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16.0
 * @name sap.ui.layout.ResponsiveFlowLayoutData
 */
sap.ui.core.LayoutData.extend("sap.ui.layout.ResponsiveFlowLayoutData", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.layout",
	properties : {
		"minWidth" : {type : "int", group : "Misc", defaultValue : 100},
		"weight" : {type : "int", group : "Misc", defaultValue : 1},
		"linebreak" : {type : "boolean", group : "Misc", defaultValue : false},
		"margin" : {type : "boolean", group : "Misc", defaultValue : true},
		"linebreakable" : {type : "boolean", group : "Misc", defaultValue : true}
	}
}});


/**
 * Creates a new subclass of class sap.ui.layout.ResponsiveFlowLayoutData with name <code>sClassName</code> 
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
 * @name sap.ui.layout.ResponsiveFlowLayoutData.extend
 * @function
 */


/**
 * Getter for property <code>minWidth</code>.
 * This is the minimal size in pixels of an ResponsiveFlowLayout element. The element will be shrinked till this value.
 *
 * Default value is <code>100</code>
 *
 * @return {int} the value of property <code>minWidth</code>
 * @public
 * @name sap.ui.layout.ResponsiveFlowLayoutData#getMinWidth
 * @function
 */

/**
 * Setter for property <code>minWidth</code>.
 *
 * Default value is <code>100</code> 
 *
 * @param {int} iMinWidth  new value for property <code>minWidth</code>
 * @return {sap.ui.layout.ResponsiveFlowLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.ResponsiveFlowLayoutData#setMinWidth
 * @function
 */


/**
 * Getter for property <code>weight</code>.
 * This is the weight of the element that influences the resulting width. If there are several elements within a row of the ResponsiveFlowLayout each element could have another weight. The bigger the weight of a single element the wider it will be pumped up --> a bigger weight result a bigger width.
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>weight</code>
 * @public
 * @name sap.ui.layout.ResponsiveFlowLayoutData#getWeight
 * @function
 */

/**
 * Setter for property <code>weight</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iWeight  new value for property <code>weight</code>
 * @return {sap.ui.layout.ResponsiveFlowLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.ResponsiveFlowLayoutData#setWeight
 * @function
 */


/**
 * Getter for property <code>linebreak</code>.
 * If this property is set the control where this LayoutData is added to will always cause a linebreak within the ResponsiveFlowLayout
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>linebreak</code>
 * @public
 * @name sap.ui.layout.ResponsiveFlowLayoutData#getLinebreak
 * @function
 */

/**
 * Setter for property <code>linebreak</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bLinebreak  new value for property <code>linebreak</code>
 * @return {sap.ui.layout.ResponsiveFlowLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.ResponsiveFlowLayoutData#setLinebreak
 * @function
 */


/**
 * Getter for property <code>margin</code>.
 * This property prevents any margin of the element if set to false
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>margin</code>
 * @public
 * @name sap.ui.layout.ResponsiveFlowLayoutData#getMargin
 * @function
 */

/**
 * Setter for property <code>margin</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bMargin  new value for property <code>margin</code>
 * @return {sap.ui.layout.ResponsiveFlowLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.ResponsiveFlowLayoutData#setMargin
 * @function
 */


/**
 * Getter for property <code>linebreakable</code>.
 * If this value shows if an element can be wrapped into a new line. If this value is set to false, the min-width will be set to 0 and the wrapping is up to the previous element.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>linebreakable</code>
 * @public
 * @name sap.ui.layout.ResponsiveFlowLayoutData#getLinebreakable
 * @function
 */

/**
 * Setter for property <code>linebreakable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bLinebreakable  new value for property <code>linebreakable</code>
 * @return {sap.ui.layout.ResponsiveFlowLayoutData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.ResponsiveFlowLayoutData#setLinebreakable
 * @function
 */


// Start of sap\ui\layout\ResponsiveFlowLayoutData.js
/*!
 * @copyright@
 */
sap.ui.layout.ResponsiveFlowLayoutData.MIN_WIDTH = 100;
sap.ui.layout.ResponsiveFlowLayoutData.WEIGHT = 1;
sap.ui.layout.ResponsiveFlowLayoutData.LINEBREAK = false;
sap.ui.layout.ResponsiveFlowLayoutData.MARGIN = true;
sap.ui.layout.ResponsiveFlowLayoutData.LINEBREAKABLE = true;

sap.ui.layout.ResponsiveFlowLayoutData.prototype.setWeight = function(iWeight) {
	if (iWeight >= 1) {
		this.setProperty("weight", iWeight);
	} else {
		jQuery.sap.log.warning("Values smaller than 1 are not valid. Default value '1' is used instead", this);
		this.setProperty("weight", sap.ui.layout.ResponsiveFlowLayoutData.WEIGHT);
	}

	return this;
};

sap.ui.layout.ResponsiveFlowLayoutData.prototype.setLinebreak = function(bLinebreak) {
	// if the element should not be linebreakable and a forced linebreak should
	// be set
	if (this.getLinebreakable() == false && bLinebreak) {
		jQuery.sap.log.warning("Setting 'linebreak' AND 'linebreakable' doesn't make any sense! Please set either 'linebreak' or 'linebreakable'", this);
	} else {
		this.setProperty("linebreak", bLinebreak);
	}
};

sap.ui.layout.ResponsiveFlowLayoutData.prototype.setLinebreakable = function(bLinebreakable) {
	// if the element has a forced linebreak and the element should be set to
	// not linebreakable
	if (this.getLinebreak() === true && bLinebreakable === false) {
		jQuery.sap.log.warning("Setting 'linebreak' AND 'linebreakable' doesn't make any sense! Please set either 'linebreak' or 'linebreakable'", this);
	} else {
		this.setProperty("linebreakable", bLinebreakable);
		// this.setMinWidth(0);
	}
};