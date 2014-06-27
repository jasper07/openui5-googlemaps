/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.QuickView.
jQuery.sap.declare("sap.ui.ux3.QuickView");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.commons.CalloutBase");


/**
 * Constructor for a new QuickView.
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
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getFirstTitle firstTitle} : string</li>
 * <li>{@link #getFirstTitleHref firstTitleHref} : string</li>
 * <li>{@link #getSecondTitle secondTitle} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getShowActionBar showActionBar} : boolean (default: true)</li>
 * <li>{@link #getFollowState followState} : sap.ui.ux3.FollowActionState (default: sap.ui.ux3.FollowActionState.Default)</li>
 * <li>{@link #getFlagState flagState} : boolean (default: false)</li>
 * <li>{@link #getFavoriteState favoriteState} : boolean (default: false)</li>
 * <li>{@link #getFavoriteActionEnabled favoriteActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getUpdateActionEnabled updateActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getFollowActionEnabled followActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getFlagActionEnabled flagActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getOpenActionEnabled openActionEnabled} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Element[]</li>
 * <li>{@link #getActions actions} : sap.ui.ux3.ThingAction[]</li>
 * <li>{@link #getActionBar actionBar} : sap.ui.ux3.ActionBar</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.QuickView#event:actionSelected actionSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.QuickView#event:feedSubmit feedSubmit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.QuickView#event:navigate navigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.CalloutBase#constructor sap.ui.commons.CalloutBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * QuickView is a small popup with a short overview of a Thing.
 * QuickView is shown when a user holds the mouse pointer over a related screen element.
 * 
 * @extends sap.ui.commons.CalloutBase
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.QuickView
 */
sap.ui.commons.CalloutBase.extend("sap.ui.ux3.QuickView", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"type" : {type : "string", group : "Misc", defaultValue : null},
		"firstTitle" : {type : "string", group : "Misc", defaultValue : null},
		"firstTitleHref" : {type : "string", group : "Misc", defaultValue : null},
		"secondTitle" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"showActionBar" : {type : "boolean", group : "Misc", defaultValue : true},
		"followState" : {type : "sap.ui.ux3.FollowActionState", group : "Misc", defaultValue : sap.ui.ux3.FollowActionState.Default},
		"flagState" : {type : "boolean", group : "Misc", defaultValue : false},
		"favoriteState" : {type : "boolean", group : "Misc", defaultValue : false},
		"favoriteActionEnabled" : {type : "boolean", group : "Misc", defaultValue : true},
		"updateActionEnabled" : {type : "boolean", group : "Misc", defaultValue : true},
		"followActionEnabled" : {type : "boolean", group : "Misc", defaultValue : true},
		"flagActionEnabled" : {type : "boolean", group : "Misc", defaultValue : true},
		"openActionEnabled" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
    	"content" : {type : "sap.ui.core.Element", multiple : true, singularName : "content"}, 
    	"actions" : {type : "sap.ui.ux3.ThingAction", multiple : true, singularName : "action"}, 
    	"actionBar" : {type : "sap.ui.ux3.ActionBar", multiple : false}
	},
	events : {
		"actionSelected" : {}, 
		"feedSubmit" : {}, 
		"navigate" : {allowPreventDefault : true}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.QuickView with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.QuickView.extend
 * @function
 */

sap.ui.ux3.QuickView.M_EVENTS = {'actionSelected':'actionSelected','feedSubmit':'feedSubmit','navigate':'navigate'};


/**
 * Getter for property <code>type</code>.
 * Thing type (mandatory) like Account, Material, Employee etc. is displayed in a header at the top part of the QuickView.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>type</code>
 * @public
 * @name sap.ui.ux3.QuickView#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#setType
 * @function
 */


/**
 * Getter for property <code>firstTitle</code>.
 * Thing name shown in the header of the QuickView
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>firstTitle</code>
 * @public
 * @name sap.ui.ux3.QuickView#getFirstTitle
 * @function
 */

/**
 * Setter for property <code>firstTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFirstTitle  new value for property <code>firstTitle</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#setFirstTitle
 * @function
 */


/**
 * Getter for property <code>firstTitleHref</code>.
 * URI to Thing Inspector
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>firstTitleHref</code>
 * @public
 * @name sap.ui.ux3.QuickView#getFirstTitleHref
 * @function
 */

/**
 * Setter for property <code>firstTitleHref</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFirstTitleHref  new value for property <code>firstTitleHref</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#setFirstTitleHref
 * @function
 */


/**
 * Getter for property <code>secondTitle</code>.
 * Optional short text shown under the firstTitle
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>secondTitle</code>
 * @public
 * @name sap.ui.ux3.QuickView#getSecondTitle
 * @function
 */

/**
 * Setter for property <code>secondTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSecondTitle  new value for property <code>secondTitle</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#setSecondTitle
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * URI of the Thing icon image (mandatory). The image is scaled down to the maximal size of 32 pixel (vertical or horizontal).
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.ux3.QuickView#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#setIcon
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Control width as common CSS-size (px or % as unit, for example).
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.ux3.QuickView#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#setWidth
 * @function
 */


/**
 * Getter for property <code>showActionBar</code>.
 * Show Action Bar
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showActionBar</code>
 * @public
 * @name sap.ui.ux3.QuickView#getShowActionBar
 * @function
 */

/**
 * Setter for property <code>showActionBar</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowActionBar  new value for property <code>showActionBar</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#setShowActionBar
 * @function
 */


/**
 * Getter for property <code>followState</code>.
 * Follow State of a Thing
 *
 * Default value is <code>Default</code>
 *
 * @return {sap.ui.ux3.FollowActionState} the value of property <code>followState</code>
 * @public
 * @name sap.ui.ux3.QuickView#getFollowState
 * @function
 */

/**
 * Setter for property <code>followState</code>.
 *
 * Default value is <code>Default</code> 
 *
 * @param {sap.ui.ux3.FollowActionState} oFollowState  new value for property <code>followState</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#setFollowState
 * @function
 */


/**
 * Getter for property <code>flagState</code>.
 * State of Flag Action
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>flagState</code>
 * @public
 * @name sap.ui.ux3.QuickView#getFlagState
 * @function
 */

/**
 * Setter for property <code>flagState</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFlagState  new value for property <code>flagState</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#setFlagState
 * @function
 */


/**
 * Getter for property <code>favoriteState</code>.
 * State Of favorite Action
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>favoriteState</code>
 * @public
 * @name sap.ui.ux3.QuickView#getFavoriteState
 * @function
 */

/**
 * Setter for property <code>favoriteState</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFavoriteState  new value for property <code>favoriteState</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#setFavoriteState
 * @function
 */


/**
 * Getter for property <code>favoriteActionEnabled</code>.
 * Favorite action enabled/disabled. If disabled the action will be invisible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>favoriteActionEnabled</code>
 * @public
 * @name sap.ui.ux3.QuickView#getFavoriteActionEnabled
 * @function
 */

/**
 * Setter for property <code>favoriteActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFavoriteActionEnabled  new value for property <code>favoriteActionEnabled</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#setFavoriteActionEnabled
 * @function
 */


/**
 * Getter for property <code>updateActionEnabled</code>.
 * Update action enabled/disabled. If disabled the action will be invisible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>updateActionEnabled</code>
 * @public
 * @name sap.ui.ux3.QuickView#getUpdateActionEnabled
 * @function
 */

/**
 * Setter for property <code>updateActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bUpdateActionEnabled  new value for property <code>updateActionEnabled</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#setUpdateActionEnabled
 * @function
 */


/**
 * Getter for property <code>followActionEnabled</code>.
 * Follow action enabled/disabled. If disabled the action will be invisible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>followActionEnabled</code>
 * @public
 * @name sap.ui.ux3.QuickView#getFollowActionEnabled
 * @function
 */

/**
 * Setter for property <code>followActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFollowActionEnabled  new value for property <code>followActionEnabled</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#setFollowActionEnabled
 * @function
 */


/**
 * Getter for property <code>flagActionEnabled</code>.
 * Flag action enabled/disabled. If disabled the action will be invisible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>flagActionEnabled</code>
 * @public
 * @name sap.ui.ux3.QuickView#getFlagActionEnabled
 * @function
 */

/**
 * Setter for property <code>flagActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFlagActionEnabled  new value for property <code>flagActionEnabled</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#setFlagActionEnabled
 * @function
 */


/**
 * Getter for property <code>openActionEnabled</code>.
 * Open Thing action enabled/disabled. If disabled the action will be invisible.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>openActionEnabled</code>
 * @public
 * @name sap.ui.ux3.QuickView#getOpenActionEnabled
 * @function
 */

/**
 * Setter for property <code>openActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bOpenActionEnabled  new value for property <code>openActionEnabled</code>
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#setOpenActionEnabled
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * Body content of the QuickView
 * 
 * @return {sap.ui.core.Element[]}
 * @public
 * @name sap.ui.ux3.QuickView#getContent
 * @function
 */


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Element}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Element}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Element} vContent the content to remove or its index or id
 * @return {sap.ui.core.Element} the removed content or null
 * @public
 * @name sap.ui.ux3.QuickView#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Element[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.QuickView#removeAllContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Element</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Element}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.QuickView#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>actions</code>.<br/>
 * Actions of a Thing
 * 
 * @return {sap.ui.ux3.ThingAction[]}
 * @public
 * @name sap.ui.ux3.QuickView#getActions
 * @function
 */


/**
 * Inserts a action into the aggregation named <code>actions</code>.
 *
 * @param {sap.ui.ux3.ThingAction}
 *          oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the action should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the action is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#insertAction
 * @function
 */

/**
 * Adds some action <code>oAction</code> 
 * to the aggregation named <code>actions</code>.
 *
 * @param {sap.ui.ux3.ThingAction}
 *            oAction the action to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#addAction
 * @function
 */

/**
 * Removes an action from the aggregation named <code>actions</code>.
 *
 * @param {int | string | sap.ui.ux3.ThingAction} vAction the action to remove or its index or id
 * @return {sap.ui.ux3.ThingAction} the removed action or null
 * @public
 * @name sap.ui.ux3.QuickView#removeAction
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>actions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingAction[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.QuickView#removeAllActions
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.ThingAction</code> in the aggregation named <code>actions</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ThingAction}
 *            oAction the action whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.QuickView#indexOfAction
 * @function
 */
	

/**
 * Destroys all the actions in the aggregation 
 * named <code>actions</code>.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#destroyActions
 * @function
 */


/**
 * Getter for aggregation <code>actionBar</code>.<br/>
 * ActionBar. If no actionBar is set a default ActionBar will be created.
 * In any case, ActionBar is displayed only when the showActionBar property is set to true.
 * 
 * @return {sap.ui.ux3.ActionBar}
 * @public
 * @name sap.ui.ux3.QuickView#getActionBar
 * @function
 */


/**
 * Setter for the aggregated <code>actionBar</code>.
 * @param {sap.ui.ux3.ActionBar} oActionBar
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#setActionBar
 * @function
 */
	

/**
 * Destroys the actionBar in the aggregation 
 * named <code>actionBar</code>.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#destroyActionBar
 * @function
 */


/**
 * Action is selected in Action Bar 
 *
 * @name sap.ui.ux3.QuickView#actionSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id Id of selected ThingAction
 * @param {sap.ui.ux3.ThingAction} oControlEvent.getParameters.action Selected ThingAction
 * @param {string} oControlEvent.getParameters.newState New State of the selected action. Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite'
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'actionSelected' event of this <code>sap.ui.ux3.QuickView</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.QuickView</code>.<br/> itself. 
 *  
 * Action is selected in Action Bar 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.QuickView</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#attachActionSelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'actionSelected' event of this <code>sap.ui.ux3.QuickView</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#detachActionSelected
 * @function
 */

/**
 * Fire event actionSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of selected ThingAction</li>
 * <li>'action' of type <code>sap.ui.ux3.ThingAction</code> Selected ThingAction</li>
 * <li>'newState' of type <code>string</code> New State of the selected action. Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite'</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.QuickView#fireActionSelected
 * @function
 */


/**
 * Fired when a new feed entry is submitted. 
 *
 * @name sap.ui.ux3.QuickView#feedSubmit
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.text Feed text
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'feedSubmit' event of this <code>sap.ui.ux3.QuickView</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.QuickView</code>.<br/> itself. 
 *  
 * Fired when a new feed entry is submitted. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.QuickView</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#attachFeedSubmit
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'feedSubmit' event of this <code>sap.ui.ux3.QuickView</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#detachFeedSubmit
 * @function
 */

/**
 * Fire event feedSubmit to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'text' of type <code>string</code> Feed text</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.QuickView#fireFeedSubmit
 * @function
 */


/**
 * Event is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event object to cancel browser navigation. 
 *
 * @name sap.ui.ux3.QuickView#navigate
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.href URI of the Thing Inspector application.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'navigate' event of this <code>sap.ui.ux3.QuickView</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.QuickView</code>.<br/> itself. 
 *  
 * Event is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event object to cancel browser navigation. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.QuickView</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#attachNavigate
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'navigate' event of this <code>sap.ui.ux3.QuickView</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.QuickView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.QuickView#detachNavigate
 * @function
 */

/**
 * Fire event navigate to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'href' of type <code>string</code> URI of the Thing Inspector application.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.ux3.QuickView#fireNavigate
 * @function
 */


// Start of sap\ui\ux3\QuickView.js
///**
// * This file defines behavior for the QuickView control,
// */

jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
jQuery.sap.require("sap.ui.ux3.ActionBar");

/**
 * Initialization of the QuickView control.
 * 
 * @private
 */
sap.ui.ux3.QuickView.prototype.init = function(){

	var oActionBar;

	// Initialize CalloutBase
	sap.ui.commons.CalloutBase.prototype.init.call(this);

	if(!this.getActionBar()){
		oActionBar = new sap.ui.ux3.ActionBar();

		// react on the ActionSelected event of the ActionBar
		function onActionSelected(oControlEvent){
			var parameters = oControlEvent.getParameters();
			this.fireActionSelected(parameters);
		}
		oActionBar.attachActionSelected(jQuery.proxy(onActionSelected, this));

		// react on the FeedSubmit event of the ActionBar
		function onFeedSubmit(oControlEvent){
			var parameters = oControlEvent.getParameters();
			this.fireFeedSubmit(parameters);
		}
		oActionBar.attachFeedSubmit(jQuery.proxy(onFeedSubmit, this));
		this.setAggregation("actionBar", oActionBar, true);
	}
}

/**
* Handle the mouseover event
* @param {jQuery.EventObject} oEvent The event that occurred on the QuickView link
* @private
 */
sap.ui.ux3.QuickView.prototype.onmouseover = function(oEvent) {
	//jQuery.sap.log.debug("QuickView: mouseover");
	var oPopup = this._getPopup();
	// do not close my pop-up if it was opened already
	if (oPopup.isOpen() && oPopup.getContent() == this) {
		if (this.sCloseNowTimeout){
			jQuery.sap.clearDelayedCall(this.sCloseNowTimeout);
			this.sCloseNowTimeout = null; }
		return;
	}

	sap.ui.core.TooltipBase.prototype.onmouseover.call(this, oEvent);
};

/**
 * Organize header fields navigation with help of arrow keys.
 * 
 * @private
 */
sap.ui.ux3.QuickView.prototype.onAfterRendering = function(){
	// Collect the DOM references of items that are accessible via keyboard arrow keys

	var	i,
		oFocusRef = this.getDomRef(),
		aDomRefs = [];

	// Title
	var oRef = this.$("title");
	aDomRefs.push(oRef);

	// Name
	oRef = this.$("link");
	if(!oRef.length){oRef = this.$("name"); } // when no link, navigate to -name
	if(!oRef.length){ return; } // do nothing if we have a title only
	aDomRefs.push(oRef);

	// Description
	oRef = this.$("descr");
	if(oRef.length){aDomRefs.push(oRef);}

	// initialize item navigation
	if(!this.oItemNavigation){
		this.oItemNavigation = new sap.ui.core.delegate.ItemNavigation(null, null, false);
		this.addDelegate(this.oItemNavigation);
	}
	this.oItemNavigation.setRootDomRef(oFocusRef);
	this.oItemNavigation.setItemDomRefs(aDomRefs);
	this.oItemNavigation.setCycling(false);
	this.oItemNavigation.setSelectedIndex(1); // UX3 requirement: the Name field must be focused first
	this.oItemNavigation.setPageSize(aDomRefs.length);
};

/**
 * Function is called when the Control is clicked.
 * If one of the links on the form is clicked, fire a "navigate" event, otherwise ignore the click.
 * If one of the "navigate" event handlers calls <code>preventDefault()</code>,
 * prevent the original event too (cancel browser navigation).
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.ux3.QuickView.prototype.onclick = function(oEvent) {

	var oTarget = oEvent.target;
	// react only on clicks over links:
	if(!oTarget || !oTarget.hasAttribute("href") ){ return; }

	// fire the "navigate" event and prevent browser navigation if the application requests this
	if(!this.fireEvent("navigate", {href:oTarget.href}, true, false)){
		oEvent.preventDefault();
	};
};

/**
 * Clean up on exit.
 * 
 * @private
 */
sap.ui.ux3.QuickView.prototype.exit = function() {
	if (this.oItemNavigation) {
		this.removeDelegate(this.oItemNavigation);
		this.oItemNavigation.destroy();
		delete this.oItemNavigation;
	}
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.insertAction = function(oAction, iIndex) {
	if(this.getActionBar()) {
		this.getActionBar().insertBusinessAction(oAction, iIndex);
	}
	return this;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.addAction = function(oAction) {
	if(this.getActionBar()) {
		this.getActionBar().addBusinessAction(oAction);
	}
	return this;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.removeAction = function(oAction) {
	if(this.getActionBar()) {
		this.getActionBar().removeBusinessAction(oAction);
	}
	return this;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.removeAllActions = function() {
	if(this.getActionBar()) {
		this.getActionBar().removeAllBusinessActions();
	}
	return this;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.getActions = function() {
	if(this.getActionBar()) {
		this.getActionBar().getBusinessActions();
	}
	return this;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.destroyActions = function() {
	if (this.getActionBar()) {
		this.getActionBar().destroyBusinessActions();
	}
	return this;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.setFollowState = function(oFollowState) {
	if (this.getActionBar()) {
		this.getActionBar().setFollowState(oFollowState);
	}
	return this;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.getFollowState = function() {
	var result = null;
	if (this.getActionBar()) {
		result = this.getActionBar().getFollowState(); 
	}
	return result;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.setFlagState = function(oFlagState) {
	if (this.getActionBar()) {
		this.getActionBar().setFlagState(oFlagState);
	}
	return this;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.getFlagState = function() {
	var result = null;
	if (this.getActionBar()) {
		result = this.getActionBar().getFlagState(); 
	}
	return result;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.setFavoriteState = function(oFavoriteState) {
	if (this.getActionBar()) {
		this.getActionBar().setFavoriteState(oFavoriteState);
	}
	return this;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.getFavoriteState = function() {
	var result = null;
	if (this.getActionBar()) {
		result = this.getActionBar().getFavoriteState(); 
	}
	return result;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.setFavoriteActionEnabled = function(bEnabled) {
	if (this.getActionBar()) {
		this.getActionBar().setShowFavorite(bEnabled);
	}
	return this;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.getFavoriteActionEnabled = function() {
	var result;
	if (this.getActionBar()) {
		result = this.getActionBar().getShowFavorite();
	}
	return result;
}

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.setFlagActionEnabled = function(bEnabled) {
	if (this.getActionBar()) {
		this.getActionBar().setShowFlag(bEnabled);
	}
	return this;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.getFlagActionEnabled = function() {
	var result;
	if (this.getActionBar()) {
		result = this.getActionBar().getShowFlag();
	}
	return result;
}

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.setUpdateActionEnabled = function(bEnabled) {
	if (this.getActionBar()) {
		this.getActionBar().setShowUpdate(bEnabled);
	}
	return this;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.getUpdateActionEnabled = function() {
	var result;
	if (this.getActionBar()) {
		result = this.getActionBar().getShowUpdate();
	}
	return result;
}

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.setFollowActionEnabled = function(bEnabled) {
	if (this.getActionBar()) {
		this.getActionBar().setShowFollow(bEnabled);
	}
	return this;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.getFollowActionEnabled = function() {
	var result;
	if (this.getActionBar()) {
		result = this.getActionBar().getShowFollow();
	}
	return result;
}

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.setOpenActionEnabled = function(bEnabled) {
	if (this.getActionBar()) {
		this.getActionBar().setShowOpen(bEnabled);
	}
	return this;
};

// Interface method to ActionBar API
sap.ui.ux3.QuickView.prototype.getOpenActionEnabled = function() {
	var result;
	if (this.getActionBar()) {
		result = this.getActionBar().getShowOpen();
	}
	return result;
}

// Implementation of API method
sap.ui.ux3.QuickView.prototype.setIcon = function(oIcon) {
	this.setProperty("icon", oIcon);
	if (this.getActionBar()) {
		this.getActionBar().setThingIconURI(oIcon);
	}
	return this;
};

// Implementation of API method
sap.ui.ux3.QuickView.prototype.setActionBar = function(oActionBar) {
	this.setAggregation("actionBar", oActionBar, true);
	if (this.getIcon() && this.getActionBar()) {
		this.getActionBar().setThingIconURI(this.getIcon());
	}
	return this;
};
