/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.unified.ContentSwitcher.
jQuery.sap.declare("sap.ui.unified.ContentSwitcher");
jQuery.sap.require("sap.ui.unified.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ContentSwitcher.
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
 * <li>{@link #getAnimation animation} : string (default: 'None')</li>
 * <li>{@link #getActiveContent activeContent} : int (default: 1)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent1 content1} : sap.ui.core.Control[]</li>
 * <li>{@link #getContent2 content2} : sap.ui.core.Control[]</li></ul>
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
 * Switches between two control areas and animates it via CSS transitions
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16.0
 * @experimental Since version 1.16.0. 
 * API is not yet finished and might change completely
 * @name sap.ui.unified.ContentSwitcher
 */
sap.ui.core.Control.extend("sap.ui.unified.ContentSwitcher", { metadata : {

	// ---- object ----
	deprecated : true,

	// ---- control specific ----
	library : "sap.ui.unified",
	properties : {
		"animation" : {type : "string", group : "Appearance", defaultValue : 'None'},
		"activeContent" : {type : "int", group : "Behavior", defaultValue : 1}
	},
	aggregations : {
    	"content1" : {type : "sap.ui.core.Control", multiple : true, singularName : "content1"}, 
    	"content2" : {type : "sap.ui.core.Control", multiple : true, singularName : "content2"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.unified.ContentSwitcher with name <code>sClassName</code> 
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
 * @name sap.ui.unified.ContentSwitcher.extend
 * @function
 */


/**
 * Getter for property <code>animation</code>.
 * Set the used animation when changing content. This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation" + this value on the root element of the control. The animation has to be implemented in CSS. This also enables applications to implement their own animations via CSS by reacting to the parent class.
 * See the types sap.ui.unified.ContentSwitcherAnimation for default implementations.
 *
 * Default value is <code>None</code>
 *
 * @return {string} the value of property <code>animation</code>
 * @public
 * @name sap.ui.unified.ContentSwitcher#getAnimation
 * @function
 */

/**
 * Setter for property <code>animation</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {string} sAnimation  new value for property <code>animation</code>
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ContentSwitcher#setAnimation
 * @function
 */


/**
 * Getter for property <code>activeContent</code>.
 * The number of the currently active content (1 or 2).
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>activeContent</code>
 * @public
 * @name sap.ui.unified.ContentSwitcher#getActiveContent
 * @function
 */

/**
 * Setter for property <code>activeContent</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iActiveContent  new value for property <code>activeContent</code>
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ContentSwitcher#setActiveContent
 * @function
 */


/**
 * Getter for aggregation <code>content1</code>.<br/>
 * The controls that should be shown in the first content
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.unified.ContentSwitcher#getContent1
 * @function
 */


/**
 * Inserts a content1 into the aggregation named <code>content1</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent1 the content1 to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content1 should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content1 is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content1 is inserted at 
 *             the last position        
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ContentSwitcher#insertContent1
 * @function
 */

/**
 * Adds some content1 <code>oContent1</code> 
 * to the aggregation named <code>content1</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent1 the content1 to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ContentSwitcher#addContent1
 * @function
 */

/**
 * Removes an content1 from the aggregation named <code>content1</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent1 the content1 to remove or its index or id
 * @return {sap.ui.core.Control} the removed content1 or null
 * @public
 * @name sap.ui.unified.ContentSwitcher#removeContent1
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content1</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.unified.ContentSwitcher#removeAllContent1
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content1</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent1 the content1 whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.unified.ContentSwitcher#indexOfContent1
 * @function
 */
	

/**
 * Destroys all the content1 in the aggregation 
 * named <code>content1</code>.
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ContentSwitcher#destroyContent1
 * @function
 */


/**
 * Getter for aggregation <code>content2</code>.<br/>
 * The controls that should be shown in the second content
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.unified.ContentSwitcher#getContent2
 * @function
 */


/**
 * Inserts a content2 into the aggregation named <code>content2</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent2 the content2 to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content2 should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content2 is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content2 is inserted at 
 *             the last position        
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ContentSwitcher#insertContent2
 * @function
 */

/**
 * Adds some content2 <code>oContent2</code> 
 * to the aggregation named <code>content2</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent2 the content2 to add; if empty, nothing is inserted
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ContentSwitcher#addContent2
 * @function
 */

/**
 * Removes an content2 from the aggregation named <code>content2</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent2 the content2 to remove or its index or id
 * @return {sap.ui.core.Control} the removed content2 or null
 * @public
 * @name sap.ui.unified.ContentSwitcher#removeContent2
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content2</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.unified.ContentSwitcher#removeAllContent2
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content2</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent2 the content2 whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.unified.ContentSwitcher#indexOfContent2
 * @function
 */
	

/**
 * Destroys all the content2 in the aggregation 
 * named <code>content2</code>.
 * @return {sap.ui.unified.ContentSwitcher} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.ContentSwitcher#destroyContent2
 * @function
 */


// Start of sap\ui\unified\ContentSwitcher.js
(function(window, undefined) {

////////////////////////////////////////// Public Methods //////////////////////////////////////////

/**
 * This file defines behavior for the control,
 */
sap.ui.unified.ContentSwitcher.prototype.init = function(){
};

/**
 * Changes the currently active content to the other one. If content 1 is active, content 2 will
 * be activated and the other way around.
 * 
 * @public
 */
sap.ui.unified.ContentSwitcher.prototype.switchContent = function() {
	this.setActiveContent(this.getActiveContent() == 1 ? 2 : 1);
	return this;
};

////////////////////////////////////////// onEvent Methods /////////////////////////////////////////

sap.ui.unified.ContentSwitcher.prototype.onAfterRendering = function() {
	this._$Contents = [
		this.$("content1"),
		this.$("content2")
	];
};


////////////////////////////////////////// Private Methods /////////////////////////////////////////

/**
 * Make the content-area with the given number appear/visible. This just sets the CSS-class
 * sapUiUnifiedCSwitcherVisible
 */
sap.ui.unified.ContentSwitcher.prototype._showActiveContent = function(iNumber) {
	this._$Contents[0].toggleClass("sapUiUfdCSwitcherVisible", iNumber === 1);
	this._$Contents[1].toggleClass("sapUiUfdCSwitcherVisible", iNumber === 2);
};

///////////////////////////////////////// Hidden Functions /////////////////////////////////////////


//////////////////////////////////////// Overridden Methods ////////////////////////////////////////

    ///////////////////////////////// Property "activeContent" /////////////////////////////////

sap.ui.unified.ContentSwitcher.prototype.setActiveContent = function(iNumber) {
	iNumber = parseInt(iNumber);
	
	if (isNaN(iNumber) || iNumber < 1) {
		iNumber = 1;
		
		jQuery.sap.log.warning(
			"setActiveContent argument must be either 1 or 2. Active content set to 1."
		);
	} else if (iNumber > 2) {
		iNumber = 2;
		
		jQuery.sap.log.warning(
			"setActiveContent argument must be either 1 or 2. Active content set to 2."
		);
	}
	
	this.setProperty("activeContent", iNumber, /* supressInvalidate: */ true);
	
	this._showActiveContent(iNumber);
	
	return this;
};


    /////////////////////////////////// Property "animation" ///////////////////////////////////

sap.ui.unified.ContentSwitcher.prototype.setAnimation = function(sAnimation, bSuppressInvalidate){
	if (typeof(sAnimation) !== "string") {
		sAnimation = sap.ui.unified.ContentSwitcherAnimation.None;
		jQuery.sap.log.warning(
			"setAnimation argument must be a string. Animation was set to \"" + 
			sap.ui.unified.ContentSwitcherAnimation.None + "\"."
		);
	}
	
	// Remove all non-alphanumerical characters from the animation string
	sAnimation = sAnimation.replace(/[^a-zA-Z0-9]/g, "");
	
	var sCurrentAnimation = this.getProperty("animation");
	
	if (sAnimation === sCurrentAnimation) {
		// No change.
		return;
	}
	
	var $Dom = this.$();
	if ($Dom[0]) {
		// We are already rendered - so we have to change the class on the fly...
		$Dom.toggleClass("sapUiUfdCSwitcherAnimation" + sCurrentAnimation, false);
		$Dom.toggleClass("sapUiUfdCSwitcherAnimation" + sAnimation, true);
	}/* else {
		// The renderer will take care of it.
	}/**/

	this.setProperty("animation", sAnimation, bSuppressInvalidate);
	
	return this;
};


    //////////////////////////////////////// Event "xxx" ///////////////////////////////////////
    ///////////////////////////////////// Aggregation "xxx" ////////////////////////////////////
    ///////////////////////////////////// Association "xxx" ////////////////////////////////////

})(window);