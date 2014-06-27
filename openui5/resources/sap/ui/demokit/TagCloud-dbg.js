/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.demokit.TagCloud.
jQuery.sap.declare("sap.ui.demokit.TagCloud");
jQuery.sap.require("sap.ui.demokit.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new TagCloud.
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
 * <li>{@link #getMaxFontSize maxFontSize} : int (default: 30)</li>
 * <li>{@link #getMinFontSize minFontSize} : int (default: 10)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTags tags} <strong>(default aggregation)</strong> : sap.ui.demokit.Tag[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.demokit.TagCloud#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A simple TagCloud representing a set of weighted tags
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.demokit.TagCloud
 */
sap.ui.core.Control.extend("sap.ui.demokit.TagCloud", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.demokit",
	properties : {
		"maxFontSize" : {type : "int", group : "Misc", defaultValue : 30},
		"minFontSize" : {type : "int", group : "Misc", defaultValue : 10}
	},
	defaultAggregation : "tags",
	aggregations : {
    	"tags" : {type : "sap.ui.demokit.Tag", multiple : true, singularName : "tag"}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.demokit.TagCloud with name <code>sClassName</code> 
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
 * @name sap.ui.demokit.TagCloud.extend
 * @function
 */

sap.ui.demokit.TagCloud.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>maxFontSize</code>.
 * 
 *
 * Default value is <code>30</code>
 *
 * @return {int} the value of property <code>maxFontSize</code>
 * @public
 * @name sap.ui.demokit.TagCloud#getMaxFontSize
 * @function
 */

/**
 * Setter for property <code>maxFontSize</code>.
 *
 * Default value is <code>30</code> 
 *
 * @param {int} iMaxFontSize  new value for property <code>maxFontSize</code>
 * @return {sap.ui.demokit.TagCloud} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.TagCloud#setMaxFontSize
 * @function
 */


/**
 * Getter for property <code>minFontSize</code>.
 * 
 *
 * Default value is <code>10</code>
 *
 * @return {int} the value of property <code>minFontSize</code>
 * @public
 * @name sap.ui.demokit.TagCloud#getMinFontSize
 * @function
 */

/**
 * Setter for property <code>minFontSize</code>.
 *
 * Default value is <code>10</code> 
 *
 * @param {int} iMinFontSize  new value for property <code>minFontSize</code>
 * @return {sap.ui.demokit.TagCloud} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.TagCloud#setMinFontSize
 * @function
 */


/**
 * Getter for aggregation <code>tags</code>.<br/>
 * 
 * 
 * <strong>Note</strong>: this is the default aggregation for TagCloud.
 * @return {sap.ui.demokit.Tag[]}
 * @public
 * @name sap.ui.demokit.TagCloud#getTags
 * @function
 */


/**
 * Inserts a tag into the aggregation named <code>tags</code>.
 *
 * @param {sap.ui.demokit.Tag}
 *          oTag the tag to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the tag should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the tag is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the tag is inserted at 
 *             the last position        
 * @return {sap.ui.demokit.TagCloud} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.TagCloud#insertTag
 * @function
 */

/**
 * Adds some tag <code>oTag</code> 
 * to the aggregation named <code>tags</code>.
 *
 * @param {sap.ui.demokit.Tag}
 *            oTag the tag to add; if empty, nothing is inserted
 * @return {sap.ui.demokit.TagCloud} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.TagCloud#addTag
 * @function
 */

/**
 * Removes an tag from the aggregation named <code>tags</code>.
 *
 * @param {int | string | sap.ui.demokit.Tag} vTag the tag to remove or its index or id
 * @return {sap.ui.demokit.Tag} the removed tag or null
 * @public
 * @name sap.ui.demokit.TagCloud#removeTag
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>tags</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.demokit.Tag[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.demokit.TagCloud#removeAllTags
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.demokit.Tag</code> in the aggregation named <code>tags</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.demokit.Tag}
 *            oTag the tag whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.demokit.TagCloud#indexOfTag
 * @function
 */
	

/**
 * Destroys all the tags in the aggregation 
 * named <code>tags</code>.
 * @return {sap.ui.demokit.TagCloud} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.TagCloud#destroyTags
 * @function
 */


/**
 * Fired when a Tag is clicked. 
 *
 * @name sap.ui.demokit.TagCloud#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.tagId Id of the selected Tag.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.demokit.TagCloud</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.demokit.TagCloud</code>.<br/> itself. 
 *  
 * Fired when a Tag is clicked. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.demokit.TagCloud</code>.<br/> itself.
 *
 * @return {sap.ui.demokit.TagCloud} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.TagCloud#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.demokit.TagCloud</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.demokit.TagCloud} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.TagCloud#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'tagId' of type <code>string</code> Id of the selected Tag.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.demokit.TagCloud} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.demokit.TagCloud#firePress
 * @function
 */


// Start of sap\ui\demokit\TagCloud.js
//Called by a tag when a onclick event is triggered there.
//The event is forwarded to the application coding.
sap.ui.demokit.TagCloud.prototype.firePressEvent = function(tag){
  this.firePress({tagId:tag.getId()});
};
