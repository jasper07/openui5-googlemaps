/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ThingGroup.
jQuery.sap.declare("sap.ui.ux3.ThingGroup");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new ThingGroup.
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
 * <li>{@link #getColspan colspan} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li>
 * <li>{@link #getActions actions} : sap.ui.ux3.ThingGroup[]</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Thing Group Area
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.ThingGroup
 */
sap.ui.core.Element.extend("sap.ui.ux3.ThingGroup", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"colspan" : {type : "boolean", group : "Misc", defaultValue : false}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    	"actions" : {type : "sap.ui.ux3.ThingGroup", multiple : true, singularName : "action"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.ThingGroup with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.ThingGroup.extend
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Title of Group
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ui.ux3.ThingGroup#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingGroup#setTitle
 * @function
 */


/**
 * Getter for property <code>colspan</code>.
 * If Group is used in a column layout the groups spans the all columns if set to true.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>colspan</code>
 * @public
 * @name sap.ui.ux3.ThingGroup#getColspan
 * @function
 */

/**
 * Setter for property <code>colspan</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bColspan  new value for property <code>colspan</code>
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingGroup#setColspan
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Content of Group
 * 
 * <strong>Note</strong>: this is the default aggregation for ThingGroup.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.ux3.ThingGroup#getContent
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
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingGroup#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingGroup#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.ux3.ThingGroup#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ThingGroup#removeAllContent
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
 * @name sap.ui.ux3.ThingGroup#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingGroup#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>actions</code>.<br/>
 * Actions of the groups content
 * 
 * @return {sap.ui.ux3.ThingGroup[]}
 * @public
 * @name sap.ui.ux3.ThingGroup#getActions
 * @function
 */


/**
 * Inserts a action into the aggregation named <code>actions</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *          oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the action should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the action is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingGroup#insertAction
 * @function
 */

/**
 * Adds some action <code>oAction</code> 
 * to the aggregation named <code>actions</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oAction the action to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingGroup#addAction
 * @function
 */

/**
 * Removes an action from the aggregation named <code>actions</code>.
 *
 * @param {int | string | sap.ui.ux3.ThingGroup} vAction the action to remove or its index or id
 * @return {sap.ui.ux3.ThingGroup} the removed action or null
 * @public
 * @name sap.ui.ux3.ThingGroup#removeAction
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>actions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingGroup[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ThingGroup#removeAllActions
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation named <code>actions</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oAction the action whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ThingGroup#indexOfAction
 * @function
 */
	

/**
 * Destroys all the actions in the aggregation 
 * named <code>actions</code>.
 * @return {sap.ui.ux3.ThingGroup} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingGroup#destroyActions
 * @function
 */


// Start of sap\ui\ux3\ThingGroup.js
///**
// * This file defines behavior for the control,
// */
//sap.ui.ux3.ThingContent.prototype.init = function(){
//   // do something for initialization...
//};