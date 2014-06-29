/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ThingInspector.
jQuery.sap.declare("sap.ui.ux3.ThingInspector");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.ux3.Overlay");


/**
 * Constructor for a new ThingInspector.
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
 * <li>{@link #getFirstTitle firstTitle} : string</li>
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getSecondTitle secondTitle} : string</li>
 * <li>{@link #getFollowState followState} : sap.ui.ux3.FollowActionState (default: sap.ui.ux3.FollowActionState.Default)</li>
 * <li>{@link #getFlagState flagState} : boolean (default: false)</li>
 * <li>{@link #getFavoriteState favoriteState} : boolean (default: false)</li>
 * <li>{@link #getFavoriteActionEnabled favoriteActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getUpdateActionEnabled updateActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getFollowActionEnabled followActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getFlagActionEnabled flagActionEnabled} : boolean (default: true)</li>
 * <li>{@link #getHeaderType headerType} : sap.ui.ux3.ThingViewerHeaderType (default: sap.ui.ux3.ThingViewerHeaderType.Standard)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getActions actions} : sap.ui.ux3.ThingAction[]</li>
 * <li>{@link #getHeaderContent headerContent} : sap.ui.ux3.ThingGroup[]</li>
 * <li>{@link #getFacets facets} : sap.ui.ux3.NavigationItem[]</li>
 * <li>{@link #getFacetContent facetContent} : sap.ui.ux3.ThingGroup[]</li>
 * <li>{@link #getActionBar actionBar} : sap.ui.ux3.ActionBar</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedFacet selectedFacet} : string | sap.ui.ux3.NavigationItem</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.ThingInspector#event:actionSelected actionSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ThingInspector#event:facetSelected facetSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ThingInspector#event:feedSubmit feedSubmit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Thing Inspector
 * @extends sap.ui.ux3.Overlay
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.ThingInspector
 */
sap.ui.ux3.Overlay.extend("sap.ui.ux3.ThingInspector", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"firstTitle" : {type : "string", group : "Misc", defaultValue : null},
		"type" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"secondTitle" : {type : "string", group : "Misc", defaultValue : null},
		"followState" : {type : "sap.ui.ux3.FollowActionState", group : "Misc", defaultValue : sap.ui.ux3.FollowActionState.Default},
		"flagState" : {type : "boolean", group : "Misc", defaultValue : false},
		"favoriteState" : {type : "boolean", group : "Misc", defaultValue : false},
		"favoriteActionEnabled" : {type : "boolean", group : "Misc", defaultValue : true},
		"updateActionEnabled" : {type : "boolean", group : "Misc", defaultValue : true},
		"followActionEnabled" : {type : "boolean", group : "Misc", defaultValue : true},
		"flagActionEnabled" : {type : "boolean", group : "Misc", defaultValue : true},
		"headerType" : {type : "sap.ui.ux3.ThingViewerHeaderType", group : "Misc", defaultValue : sap.ui.ux3.ThingViewerHeaderType.Standard}
	},
	aggregations : {
    	"actions" : {type : "sap.ui.ux3.ThingAction", multiple : true, singularName : "action"}, 
    	"headerContent" : {type : "sap.ui.ux3.ThingGroup", multiple : true, singularName : "headerContent"}, 
    	"facets" : {type : "sap.ui.ux3.NavigationItem", multiple : true, singularName : "facet"}, 
    	"facetContent" : {type : "sap.ui.ux3.ThingGroup", multiple : true, singularName : "facetContent"}, 
    	"actionBar" : {type : "sap.ui.ux3.ActionBar", multiple : false}, 
    	"thingViewer" : {type : "sap.ui.ux3.ThingViewer", multiple : false, visibility : "hidden"}
	},
	associations : {
		"selectedFacet" : {type : "sap.ui.ux3.NavigationItem", multiple : false}
	},
	events : {
		"actionSelected" : {}, 
		"facetSelected" : {allowPreventDefault : true}, 
		"feedSubmit" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.ThingInspector with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.ThingInspector.extend
 * @function
 */

sap.ui.ux3.ThingInspector.M_EVENTS = {'actionSelected':'actionSelected','facetSelected':'facetSelected','feedSubmit':'feedSubmit'};


/**
 * Getter for property <code>firstTitle</code>.
 * First Line of the Thing Inspector Title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>firstTitle</code>
 * @public
 * @name sap.ui.ux3.ThingInspector#getFirstTitle
 * @function
 */

/**
 * Setter for property <code>firstTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFirstTitle  new value for property <code>firstTitle</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setFirstTitle
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Thing type
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>type</code>
 * @public
 * @name sap.ui.ux3.ThingInspector#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sType  new value for property <code>type</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setType
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Thing Icon Url
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.ux3.ThingInspector#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setIcon
 * @function
 */


/**
 * Getter for property <code>secondTitle</code>.
 * Second Line of the Thing Inspector Title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>secondTitle</code>
 * @public
 * @name sap.ui.ux3.ThingInspector#getSecondTitle
 * @function
 */

/**
 * Setter for property <code>secondTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSecondTitle  new value for property <code>secondTitle</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setSecondTitle
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
 * @name sap.ui.ux3.ThingInspector#getFollowState
 * @function
 */

/**
 * Setter for property <code>followState</code>.
 *
 * Default value is <code>Default</code> 
 *
 * @param {sap.ui.ux3.FollowActionState} oFollowState  new value for property <code>followState</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setFollowState
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
 * @name sap.ui.ux3.ThingInspector#getFlagState
 * @function
 */

/**
 * Setter for property <code>flagState</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFlagState  new value for property <code>flagState</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setFlagState
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
 * @name sap.ui.ux3.ThingInspector#getFavoriteState
 * @function
 */

/**
 * Setter for property <code>favoriteState</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFavoriteState  new value for property <code>favoriteState</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setFavoriteState
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
 * @name sap.ui.ux3.ThingInspector#getFavoriteActionEnabled
 * @function
 */

/**
 * Setter for property <code>favoriteActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFavoriteActionEnabled  new value for property <code>favoriteActionEnabled</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setFavoriteActionEnabled
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
 * @name sap.ui.ux3.ThingInspector#getUpdateActionEnabled
 * @function
 */

/**
 * Setter for property <code>updateActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bUpdateActionEnabled  new value for property <code>updateActionEnabled</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setUpdateActionEnabled
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
 * @name sap.ui.ux3.ThingInspector#getFollowActionEnabled
 * @function
 */

/**
 * Setter for property <code>followActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFollowActionEnabled  new value for property <code>followActionEnabled</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setFollowActionEnabled
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
 * @name sap.ui.ux3.ThingInspector#getFlagActionEnabled
 * @function
 */

/**
 * Setter for property <code>flagActionEnabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bFlagActionEnabled  new value for property <code>flagActionEnabled</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setFlagActionEnabled
 * @function
 */


/**
 * Getter for property <code>headerType</code>.
 * Defines which header type should be used.
 *
 * Default value is <code>Standard</code>
 *
 * @return {sap.ui.ux3.ThingViewerHeaderType} the value of property <code>headerType</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.ux3.ThingInspector#getHeaderType
 * @function
 */

/**
 * Setter for property <code>headerType</code>.
 *
 * Default value is <code>Standard</code> 
 *
 * @param {sap.ui.ux3.ThingViewerHeaderType} oHeaderType  new value for property <code>headerType</code>
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.ux3.ThingInspector#setHeaderType
 * @function
 */


/**
 * Getter for aggregation <code>actions</code>.<br/>
 * Actions of a Thing
 * 
 * @return {sap.ui.ux3.ThingAction[]}
 * @public
 * @name sap.ui.ux3.ThingInspector#getActions
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
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#insertAction
 * @function
 */

/**
 * Adds some action <code>oAction</code> 
 * to the aggregation named <code>actions</code>.
 *
 * @param {sap.ui.ux3.ThingAction}
 *            oAction the action to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#addAction
 * @function
 */

/**
 * Removes an action from the aggregation named <code>actions</code>.
 *
 * @param {int | string | sap.ui.ux3.ThingAction} vAction the action to remove or its index or id
 * @return {sap.ui.ux3.ThingAction} the removed action or null
 * @public
 * @name sap.ui.ux3.ThingInspector#removeAction
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>actions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingAction[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ThingInspector#removeAllActions
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
 * @name sap.ui.ux3.ThingInspector#indexOfAction
 * @function
 */
	

/**
 * Destroys all the actions in the aggregation 
 * named <code>actions</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#destroyActions
 * @function
 */


/**
 * Getter for aggregation <code>headerContent</code>.<br/>
 * ThingGroups for the header content
 * 
 * @return {sap.ui.ux3.ThingGroup[]}
 * @public
 * @name sap.ui.ux3.ThingInspector#getHeaderContent
 * @function
 */


/**
 * Inserts a headerContent into the aggregation named <code>headerContent</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *          oHeaderContent the headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headerContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headerContent is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#insertHeaderContent
 * @function
 */

/**
 * Adds some headerContent <code>oHeaderContent</code> 
 * to the aggregation named <code>headerContent</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oHeaderContent the headerContent to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#addHeaderContent
 * @function
 */

/**
 * Removes an headerContent from the aggregation named <code>headerContent</code>.
 *
 * @param {int | string | sap.ui.ux3.ThingGroup} vHeaderContent the headerContent to remove or its index or id
 * @return {sap.ui.ux3.ThingGroup} the removed headerContent or null
 * @public
 * @name sap.ui.ux3.ThingInspector#removeHeaderContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>headerContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingGroup[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ThingInspector#removeAllHeaderContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation named <code>headerContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oHeaderContent the headerContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ThingInspector#indexOfHeaderContent
 * @function
 */
	

/**
 * Destroys all the headerContent in the aggregation 
 * named <code>headerContent</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#destroyHeaderContent
 * @function
 */


/**
 * Getter for aggregation <code>facets</code>.<br/>
 * Thing Inspector facets
 * 
 * @return {sap.ui.ux3.NavigationItem[]}
 * @public
 * @name sap.ui.ux3.ThingInspector#getFacets
 * @function
 */


/**
 * Inserts a facet into the aggregation named <code>facets</code>.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *          oFacet the facet to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the facet should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the facet is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the facet is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#insertFacet
 * @function
 */

/**
 * Adds some facet <code>oFacet</code> 
 * to the aggregation named <code>facets</code>.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *            oFacet the facet to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#addFacet
 * @function
 */

/**
 * Removes an facet from the aggregation named <code>facets</code>.
 *
 * @param {int | string | sap.ui.ux3.NavigationItem} vFacet the facet to remove or its index or id
 * @return {sap.ui.ux3.NavigationItem} the removed facet or null
 * @public
 * @name sap.ui.ux3.ThingInspector#removeFacet
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>facets</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.NavigationItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ThingInspector#removeAllFacets
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.NavigationItem</code> in the aggregation named <code>facets</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.NavigationItem}
 *            oFacet the facet whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ThingInspector#indexOfFacet
 * @function
 */
	

/**
 * Destroys all the facets in the aggregation 
 * named <code>facets</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#destroyFacets
 * @function
 */


/**
 * Getter for aggregation <code>facetContent</code>.<br/>
 * ThingGroups for content of the selected facet
 * 
 * @return {sap.ui.ux3.ThingGroup[]}
 * @public
 * @name sap.ui.ux3.ThingInspector#getFacetContent
 * @function
 */


/**
 * Inserts a facetContent into the aggregation named <code>facetContent</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *          oFacetContent the facetContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the facetContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the facetContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the facetContent is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#insertFacetContent
 * @function
 */

/**
 * Adds some facetContent <code>oFacetContent</code> 
 * to the aggregation named <code>facetContent</code>.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oFacetContent the facetContent to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#addFacetContent
 * @function
 */

/**
 * Removes an facetContent from the aggregation named <code>facetContent</code>.
 *
 * @param {int | string | sap.ui.ux3.ThingGroup} vFacetContent the facetContent to remove or its index or id
 * @return {sap.ui.ux3.ThingGroup} the removed facetContent or null
 * @public
 * @name sap.ui.ux3.ThingInspector#removeFacetContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>facetContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ThingGroup[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ThingInspector#removeAllFacetContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.ThingGroup</code> in the aggregation named <code>facetContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ThingGroup}
 *            oFacetContent the facetContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ThingInspector#indexOfFacetContent
 * @function
 */
	

/**
 * Destroys all the facetContent in the aggregation 
 * named <code>facetContent</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#destroyFacetContent
 * @function
 */


/**
 * Getter for aggregation <code>actionBar</code>.<br/>
 * ActionBar. If no actionBar is set a default ActionBar will be created.
 * 
 * @return {sap.ui.ux3.ActionBar}
 * @public
 * @name sap.ui.ux3.ThingInspector#getActionBar
 * @function
 */


/**
 * Setter for the aggregated <code>actionBar</code>.
 * @param {sap.ui.ux3.ActionBar} oActionBar
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setActionBar
 * @function
 */
	

/**
 * Destroys the actionBar in the aggregation 
 * named <code>actionBar</code>.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#destroyActionBar
 * @function
 */


/**
 * The Facet that is currently selected.
 * 
 *
 * @return {string} Id of the element which is the current target of the <code>selectedFacet</code> association, or null
 * @public
 * @name sap.ui.ux3.ThingInspector#getSelectedFacet
 * @function
 */

/**
 * The Facet that is currently selected.
 * 
 *
 * @param {string | sap.ui.ux3.NavigationItem} vSelectedFacet 
 *    Id of an element which becomes the new target of this <code>selectedFacet</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#setSelectedFacet
 * @function
 */


	
/**
 * Further thing related Action selected 
 *
 * @name sap.ui.ux3.ThingInspector#actionSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id Id of selected ThingAction
 * @param {sap.ui.ux3.ThingAction} oControlEvent.getParameters.action Selected ThingAction
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'actionSelected' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself. 
 *  
 * Further thing related Action selected 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#attachActionSelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'actionSelected' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#detachActionSelected
 * @function
 */

/**
 * Fire event actionSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of selected ThingAction</li>
 * <li>'action' of type <code>sap.ui.ux3.ThingAction</code> Selected ThingAction</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.ThingInspector#fireActionSelected
 * @function
 */


/**
 * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected. 
 *
 * @name sap.ui.ux3.ThingInspector#facetSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.id Id of selected NavigationItem
 * @param {sap.ui.ux3.NavigationItem} oControlEvent.getParameters.item The selected NavigationItem
 * @param {string} oControlEvent.getParameters.key Key of selected NavigationItem
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'facetSelected' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself. 
 *  
 * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#attachFacetSelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'facetSelected' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#detachFacetSelected
 * @function
 */

/**
 * Fire event facetSelected to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'id' of type <code>string</code> Id of selected NavigationItem</li>
 * <li>'item' of type <code>sap.ui.ux3.NavigationItem</code> The selected NavigationItem</li>
 * <li>'key' of type <code>string</code> Key of selected NavigationItem</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.ux3.ThingInspector#fireFacetSelected
 * @function
 */


/**
 * Fired when a new feed entry is submitted. 
 *
 * @name sap.ui.ux3.ThingInspector#feedSubmit
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.text Feed text
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'feedSubmit' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself. 
 *  
 * Fired when a new feed entry is submitted. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ThingInspector</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#attachFeedSubmit
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'feedSubmit' event of this <code>sap.ui.ux3.ThingInspector</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ThingInspector#detachFeedSubmit
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
 * @return {sap.ui.ux3.ThingInspector} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.ThingInspector#fireFeedSubmit
 * @function
 */


// Start of sap\ui\ux3\ThingInspector.js
jQuery.sap.require("sap.ui.ux3.Overlay");
jQuery.sap.require("sap.ui.ux3.ActionBar");
jQuery.sap.require("sap.ui.ux3.ThingViewer");

(function() {
	/**
	 * Initialization hook for the Thinginspector. It creates the instance of the
	 * Popup helper service and does some basic configuration for it.
	 *
	 * @private
	 */
	sap.ui.ux3.ThingInspector.prototype.init = function() {
		var oActionBar, that = this;
		sap.ui.ux3.Overlay.prototype.init.apply(this);
		this._oThingViewer = new sap.ui.ux3.ThingViewer(this.getId()+"-thingViewer");
		this.setAggregation("thingViewer",this._oThingViewer);
		this._oThingViewer.attachFacetSelected(function(oEvent) {
			var item = oEvent.getParameters().item;
			if(that.fireFacetSelected({id:item.getId(), key:item.getKey(),item:item})) {
				that.setSelectedFacet(item);
			} else {
				 oEvent.preventDefault();
			}
		});
		this._oSocialActions = {};
		if (this.getActionBar() == null) { 
			oActionBar = new sap.ui.ux3.ActionBar(this.getId()+"-actionBar");
			oActionBar.setShowOpen(false);
			oActionBar.setAlwaysShowMoreMenu(false);
			oActionBar.setDividerWidth("252px");
			oActionBar.attachActionSelected(function (oEvent) {
				var sActionID = oEvent.getParameters().id,
						oBarAction = oEvent.getParameters().action,
						oThingAction;
				if (sActionID.indexOf('Favorite') != -1 ||
				    sActionID.indexOf('Follow') != -1 ||
					sActionID.indexOf('Flag') != -1) {
					if (that._oSocialActions[sActionID]) {
						oThingAction = that._oSocialActions[sActionID];
					} else { 
						oThingAction =  new sap.ui.ux3.ThingAction({
							id: that.getId() + "-" + sActionID.toLowerCase(),
							text: oBarAction.text,
							enabled: oBarAction.enabled
						});
						that._oSocialActions[sActionID] = oThingAction;
					}
					that.fireActionSelected({
						id : sActionID.toLowerCase(),
						action : oThingAction
					});
				} else {
					that.fireActionSelected({
						id : oEvent.getParameters().id,
						action : oEvent.getParameters().action
					});
				}
			});
			oActionBar.attachFeedSubmit(function (oEvent) {
				that.fireFeedSubmit({
					text : oEvent.getParameters().text
				});
			});
			this.setActionBar(oActionBar);
		}
	};
	
	/*
	 * Set size of TI after rendering: If running in Shell we sync with shell
	 * canvas. The size will then be set by the shell.
	 */
	sap.ui.ux3.ThingInspector.prototype.onAfterRendering = function() {
		sap.ui.ux3.Overlay.prototype.onAfterRendering.apply(this,arguments);
		var oShell = this._getShell();
		this._bShell = !!oShell;
		if(!oShell) {
			this._applyChanges({showOverlay:false});
		}
	};
	
	sap.ui.ux3.ThingInspector.prototype.onBeforeRendering = function() {
		sap.ui.ux3.Overlay.prototype.onBeforeRendering.apply(this,arguments);
	}
	
	/**
	 * Destroys this instance of ThingInspector, called by Element#destroy()
	 *
	 * @private
	 */
	sap.ui.ux3.ThingInspector.prototype.exit = function() {
		this._oThingViewer.exit(arguments);
		this._oThingViewer.destroy();
		sap.ui.ux3.Overlay.prototype.exit.apply(this,arguments);
	};
	
	/**
	 * Opens this instance of ThingIspector
	 *
	 * @public
	 */
	sap.ui.ux3.ThingInspector.prototype.open = function(initialFocusId) {
		if (this.getDomRef()) {
			this.rerender();
		}
		sap.ui.ux3.Overlay.prototype.open.apply(this,arguments);
		this._selectDefault();
	};
	
	/**
	 * get Navigation Bar control
	 *
	 * @private
	 */
	sap.ui.ux3.ThingInspector.prototype._getNavBar = function() {
		return this._oThingViewer._oNavBar;
	};
	
	/**
	 * setDefault NavBar selection and fire SelectedItem Event
	 *
	 * @private
	 */
	sap.ui.ux3.ThingInspector.prototype._selectDefault = function() {
		this._oThingViewer._selectDefault();
	};
	
	/**
	 * equal Columns
	 *
	 * @private
	 */
	sap.ui.ux3.ThingInspector.prototype._equalColumns = function() {
		this._oThingViewer._equalColumns();
	};
	
	/**
	 * set trigger value for resize handler
	 * 
	 * @private
	 */
	sap.ui.ux3.ThingInspector.prototype._setTriggerValue = function() {
		this._oThingViewer._setTriggerValue();
	};
	
	/**
	 * Focus Last Element
	 *
	 * @private
	 */
	sap.ui.ux3.ThingInspector.prototype._setFocusLast = function() {
		var oFocus = this.$("thingViewer-toolbar").lastFocusableDomRef();
		if (!oFocus && this.getCloseButtonVisible() && this.$("close").is(":sapFocusable")) {
			oFocus = this.getDomRef("close")
		} else if (!oFocus && this.getOpenButtonVisible() && this.$("openNew").is(":sapFocusable")) {
			oFocus = this.getDomRef("openNew")
		}
		jQuery.sap.focus(oFocus);
	};
	
	/**
	 * Focus First Element
	 *
	 * @private
	 */
	sap.ui.ux3.ThingInspector.prototype._setFocusFirst = function() {
		if (this.getOpenButtonVisible() && this.$("openNew").is(":sapFocusable")) {
			jQuery.sap.focus(this.getDomRef("openNew"));
		} else if (this.getCloseButtonVisible() && this.$("close").is(":sapFocusable")) {
			jQuery.sap.focus(this.getDomRef("close"));
		} else {
			jQuery.sap.focus(this.$("thingViewer-content").firstFocusableDomRef());
		}
	};
	
	/* Redefinition of generated API methods */
	
	// Implementation of API method insertAction
	sap.ui.ux3.ThingInspector.prototype.insertAction = function(oAction, iIndex) {
		if (this.getActionBar()) {
			this.getActionBar().insertBusinessAction(oAction, iIndex);
		}
		return this;
	};
	
	// Implementation of API method addAction
	sap.ui.ux3.ThingInspector.prototype.addAction = function(oAction) {
		if (this.getActionBar()) {
			this.getActionBar().addBusinessAction(oAction);
		}
		return this;
	};
	
	// Implementation of API method removeAction
	sap.ui.ux3.ThingInspector.prototype.removeAction = function(oAction) {
		var result;
		if (this.getActionBar()) {
			result = this.getActionBar().removeBusinessAction(oAction);
		}
		return result;
	};
	
	// Implementation of API method removeAllActions
	sap.ui.ux3.ThingInspector.prototype.removeAllActions = function() {
		var result;
		if (this.getActionBar()) {
			result = this.getActionBar().removeAllBusinessActions();
		}
		return result;
	};
	
	// Implementation of API method getActions
	sap.ui.ux3.ThingInspector.prototype.getActions = function() {
		var result;
		if (this.getActionBar()) {
			result = this.getActionBar().getBusinessActions();
		}
		return result;
	}
	
	// Implementation of API method destroyActions
	sap.ui.ux3.ThingInspector.prototype.destroyActions = function() {
		if (this.getActionBar()) {
			this.getActionBar().destroyBusinessActions();
		}
		return this;
	};
	
	sap.ui.ux3.ThingInspector.prototype.indexOfAction = function(oAction) {
		var result = -1;
		if (this.getActionBar()) {
			result = this.getActionBar().indexOfBusinessAction(oAction);
		}
		return result;
	};
	
	
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.getFacets = function() {
		return this._oThingViewer.getFacets();
	};
	
	// Implementation of API method insertFacet
	sap.ui.ux3.ThingInspector.prototype.insertFacet = function(oFacet, iIndex) {
		this._oThingViewer.insertFacet(oFacet, iIndex);
		return this;
	};
	
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.addFacet = function(oFacet) {
		this._oThingViewer.addFacet(oFacet);
		return this;
	};
	
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.removeFacet = function(vElement) {
		return this._oThingViewer.removeFacet(vElement);
	};
	
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.removeAllFacets = function() {
		return this._oThingViewer.removeAllFacets();
	};
	
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.destroyFacets = function() {
		this._oThingViewer.destroyFacets();
		return this;
	};
	
	sap.ui.ux3.ThingInspector.prototype.indexOfFacet = function(oFacet) {
		return this._oThingViewer.indexOfFacet(oFacet);
	};
	
	
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.setFollowState = function(oFollowState) {
		if (this.getActionBar()) {
			this.getActionBar().setFollowState(oFollowState);
		}
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.getFollowState = function() {
		var result = null;
		if (this.getActionBar()) {
			result = this.getActionBar().getFollowState(); 
		}
		return result;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.setFlagState = function(oFlagState) {
		if (this.getActionBar()) {
			this.getActionBar().setFlagState(oFlagState);
		}
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.getFlagState = function() {
		var result = null;
		if (this.getActionBar()) {
			result = this.getActionBar().getFlagState(); 
		}
		return result;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.setFavoriteState = function(oFavoriteState) {
		if (this.getActionBar()) {
			this.getActionBar().setFavoriteState(oFavoriteState);
		}
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.getFavoriteState = function() {
		var result = null;
		if (this.getActionBar()) {
			result = this.getActionBar().getFavoriteState(); 
		}
		return result;
	};
	
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.setIcon = function(oIcon) {
		this._oThingViewer.setIcon(oIcon);
		if (this.getActionBar()) {
			this.getActionBar().setThingIconURI(oIcon);
		}
		return this;
	};
	
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.getIcon = function() {
		return this._oThingViewer.getIcon();
	};
	
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.setType = function(sType) {
		this._oThingViewer.setType(sType);
		return this;
	};
	
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.getType = function() {
		return this._oThingViewer.getType();
	};
	
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.insertFacetContent = function(oFacetContent, iIndex) {
		this._oThingViewer.insertFacetContent(oFacetContent, iIndex);
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.addFacetContent = function(oFacetContent) {
		this._oThingViewer.addFacetContent(oFacetContent);
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.removeFacetContent = function(vFacetContent) {
		var result = this._oThingViewer.removeFacetContent(vFacetContent);
		return result;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.removeAllFacetContent = function() {
		var result = this._oThingViewer.removeAllFacetContent();
		return result;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.destroyFacetContent = function() {
		this._oThingViewer.destroyFacetContent();
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.getFacetContent = function() {
		return this._oThingViewer.getFacetContent();
	};
	
	sap.ui.ux3.ThingInspector.prototype.indexOfFacetContent = function(oFacetContent) {
		return this._oThingViewer.indexOfFacetContent(oFacetContent);
	};
	
	
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.setActionBar = function(oActionBar) {
		this._oThingViewer.setActionBar(oActionBar);
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.getActionBar = function() {
		return this._oThingViewer.getActionBar();
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.destroyActionBar = function() {
		this._oThingViewer.destroyActionBar();
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.insertHeaderContent = function(oHeaderContent, iIndex) {
		this._oThingViewer.insertHeaderContent(oHeaderContent, iIndex);
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.addHeaderContent = function(oHeaderContent) {
		this._oThingViewer.addHeaderContent(oHeaderContent);
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.getHeaderContent = function() {
		return this._oThingViewer.getHeaderContent();
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.removeHeaderContent = function(vHeaderContent) {
		var result = this._oThingViewer.removeHeaderContent(vHeaderContent);
		return result;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.removeAllHeaderContent = function() {
		var result = this._oThingViewer.removeAllHeaderContent();
		return result;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.destroyHeaderContent = function() {
		this._oThingViewer.destroyHeaderContent();
		return this;
	};
	
	sap.ui.ux3.ThingInspector.prototype.indexOfHeaderContent = function(oHeaderContent) {
		return this._oThingViewer.indexOfHeaderContent(oHeaderContent);
	};
	
	
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.setSelectedFacet = function(selectedFacet) {
		this._oThingViewer.setSelectedFacet(selectedFacet);
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.getSelectedFacet = function(selectedFacet) {
		return this._oThingViewer.getSelectedFacet();
	}
	//Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.setFavoriteActionEnabled = function(bEnabled) {
		if (this.getActionBar()) {
			this.getActionBar().setShowFavorite(bEnabled);
		}
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.getFavoriteActionEnabled = function() {
		var result;
		if (this.getActionBar()) {
			result = this.getActionBar().getShowFavorite();
		}
		return result;
	}
	
	//Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.setFlagActionEnabled = function(bEnabled) {
		if (this.getActionBar()) {
			this.getActionBar().setShowFlag(bEnabled);
		}
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.getFlagActionEnabled = function() {
		var result;
		if (this.getActionBar()) {
			result = this.getActionBar().getShowFlag();
		}
		return result;
	}
	
	//Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.setUpdateActionEnabled = function(bEnabled) {
		if (this.getActionBar()) {
			this.getActionBar().setShowUpdate(bEnabled);
		}
		return this;
	};
	// Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.getUpdateActionEnabled = function() {
		var result;
		if (this.getActionBar()) {
			result = this.getActionBar().getShowUpdate();
		}
		return result;
	}
	
	//Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.setFollowActionEnabled = function(bEnabled) {
		if (this.getActionBar()) {
			this.getActionBar().setShowFollow(bEnabled);
		}
		return this;
	};
	//Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.getFollowActionEnabled = function() {
		var result;
		if (this.getActionBar()) {
			result = this.getActionBar().getShowFollow();
		}
		return result;
	}
	//Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.setFirstTitle = function(sTitle) {
		this._oThingViewer.setTitle(sTitle);
	};
	
	//Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.getFirstTitle = function() {
		return this._oThingViewer.getTitle();
	};
	
	//Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.setSecondTitle = function(sTitle) {
		this._oThingViewer.setSubtitle(sTitle);
	};
	
	//Implementation of API method
	sap.ui.ux3.ThingInspector.prototype.getSecondTitle = function() {
		return this._oThingViewer.getSubtitle();
	};
	sap.ui.ux3.ThingInspector.prototype.setHeaderType = function(vHeaderType) {
		this._oThingViewer.setHeaderType(vHeaderType);
		return this;
	};
	sap.ui.ux3.ThingInspector.prototype.getHeaderType = function() {
		var result = this._oThingViewer.getHeaderType();
		return result;
	};
	
	sap.ui.ux3.ThingInspector.prototype._applyChanges = function(oChanges) {
		this.oChanges = oChanges;
		if( oChanges.showOverlay ) {
			this.$().removeClass("sapUiUx3TINoFrame");
		}else{
			this.$().addClass("sapUiUx3TINoFrame");
		}
		return this;
	};
}());
