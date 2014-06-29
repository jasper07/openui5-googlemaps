/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.demokit.HexagonButtonGroup.
jQuery.sap.declare("sap.ui.demokit.HexagonButtonGroup");
jQuery.sap.require("sap.ui.demokit.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new HexagonButtonGroup.
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
 * <li>{@link #getColspan colspan} : int (default: 3)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getButtons buttons} : sap.ui.demokit.HexagonButton[]</li></ul>
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
 * Add your documentation for the new HexagonButtonGroup
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.demokit.HexagonButtonGroup
 */
sap.ui.core.Control.extend("sap.ui.demokit.HexagonButtonGroup", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.demokit",
	properties : {
		"colspan" : {type : "int", group : "Misc", defaultValue : 3}
	},
	aggregations : {
    	"buttons" : {type : "sap.ui.demokit.HexagonButton", multiple : true, singularName : "button"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.demokit.HexagonButtonGroup with name <code>sClassName</code> 
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
 * @name sap.ui.demokit.HexagonButtonGroup.extend
 * @function
 */


/**
 * Getter for property <code>colspan</code>.
 * 
 *
 * Default value is <code>3</code>
 *
 * @return {int} the value of property <code>colspan</code>
 * @public
 * @name sap.ui.demokit.HexagonButtonGroup#getColspan
 * @function
 */

/**
 * Setter for property <code>colspan</code>.
 *
 * Default value is <code>3</code> 
 *
 * @param {int} iColspan  new value for property <code>colspan</code>
 * @return {sap.ui.demokit.HexagonButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.HexagonButtonGroup#setColspan
 * @function
 */


/**
 * Getter for aggregation <code>buttons</code>.<br/>
 * 
 * 
 * @return {sap.ui.demokit.HexagonButton[]}
 * @public
 * @name sap.ui.demokit.HexagonButtonGroup#getButtons
 * @function
 */


/**
 * Inserts a button into the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.demokit.HexagonButton}
 *          oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the button should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the button is inserted at 
 *             the last position        
 * @return {sap.ui.demokit.HexagonButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.HexagonButtonGroup#insertButton
 * @function
 */

/**
 * Adds some button <code>oButton</code> 
 * to the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.demokit.HexagonButton}
 *            oButton the button to add; if empty, nothing is inserted
 * @return {sap.ui.demokit.HexagonButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.HexagonButtonGroup#addButton
 * @function
 */

/**
 * Removes an button from the aggregation named <code>buttons</code>.
 *
 * @param {int | string | sap.ui.demokit.HexagonButton} vButton the button to remove or its index or id
 * @return {sap.ui.demokit.HexagonButton} the removed button or null
 * @public
 * @name sap.ui.demokit.HexagonButtonGroup#removeButton
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>buttons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.demokit.HexagonButton[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.demokit.HexagonButtonGroup#removeAllButtons
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.demokit.HexagonButton</code> in the aggregation named <code>buttons</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.demokit.HexagonButton}
 *            oButton the button whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.demokit.HexagonButtonGroup#indexOfButton
 * @function
 */
	

/**
 * Destroys all the buttons in the aggregation 
 * named <code>buttons</code>.
 * @return {sap.ui.demokit.HexagonButtonGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.HexagonButtonGroup#destroyButtons
 * @function
 */


// Start of sap\ui\demokit\HexagonButtonGroup.js
///**
// * This file defines behavior for the control, 
// */
//sap.ui.demokit.HexagonButtonGroup.prototype.init = function(){
//   // do something for initialization...
//};
