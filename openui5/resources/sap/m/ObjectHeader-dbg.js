/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ObjectHeader.
jQuery.sap.declare("sap.m.ObjectHeader");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ObjectHeader.
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
 * <li>{@link #getNumber number} : string</li>
 * <li>{@link #getNumberUnit numberUnit} : string</li>
 * <li>{@link #getIntro intro} : string</li>
 * <li>{@link #getIntroActive introActive} : boolean</li>
 * <li>{@link #getTitleActive titleActive} : boolean</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIconActive iconActive} : boolean</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li>
 * <li>{@link #getMarkFavorite markFavorite} : boolean (default: false)</li>
 * <li>{@link #getMarkFlagged markFlagged} : boolean (default: false)</li>
 * <li>{@link #getShowMarkers showMarkers} : boolean (default: false)</li>
 * <li>{@link #getShowTitleSelector showTitleSelector} : boolean (default: false)</li>
 * <li>{@link #getNumberState numberState} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getCondensed condensed} : boolean (default: false)</li>
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.m.BackgroundDesign (default: sap.m.BackgroundDesign.Transparent)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAttributes attributes} <strong>(default aggregation)</strong> : sap.m.ObjectAttribute[]</li>
 * <li>{@link #getFirstStatus firstStatus} : sap.m.ObjectStatus</li>
 * <li>{@link #getSecondStatus secondStatus} : sap.m.ObjectStatus</li>
 * <li>{@link #getStatuses statuses} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.ObjectHeader#event:titlePress titlePress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ObjectHeader#event:introPress introPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ObjectHeader#event:iconPress iconPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.ObjectHeader#event:titleSelectorPress titleSelectorPress} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * ObjectHeader is a display control that enables the user to easily identify a specific object. The object header title is the key identifier of the object and additional text and icons can be used to further distinguish it from other objects.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.m.ObjectHeader
 */
sap.ui.core.Control.extend("sap.m.ObjectHeader", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"number" : {type : "string", group : "Misc", defaultValue : null},
		"numberUnit" : {type : "string", group : "Misc", defaultValue : null},
		"intro" : {type : "string", group : "Misc", defaultValue : null},
		"introActive" : {type : "boolean", group : "Misc", defaultValue : null},
		"titleActive" : {type : "boolean", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"iconActive" : {type : "boolean", group : "Misc", defaultValue : null},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"iconDensityAware" : {type : "boolean", group : "Misc", defaultValue : true},
		"markFavorite" : {type : "boolean", group : "Misc", defaultValue : false},
		"markFlagged" : {type : "boolean", group : "Misc", defaultValue : false},
		"showMarkers" : {type : "boolean", group : "Misc", defaultValue : false},
		"showTitleSelector" : {type : "boolean", group : "Misc", defaultValue : false},
		"numberState" : {type : "sap.ui.core.ValueState", group : "Misc", defaultValue : sap.ui.core.ValueState.None},
		"condensed" : {type : "boolean", group : "Appearance", defaultValue : false},
		"backgroundDesign" : {type : "sap.m.BackgroundDesign", group : "Appearance", defaultValue : sap.m.BackgroundDesign.Transparent}
	},
	defaultAggregation : "attributes",
	aggregations : {
    	"attributes" : {type : "sap.m.ObjectAttribute", multiple : true, singularName : "attribute"}, 
    	"firstStatus" : {type : "sap.m.ObjectStatus", multiple : false, deprecated: true}, 
    	"secondStatus" : {type : "sap.m.ObjectStatus", multiple : false, deprecated: true}, 
    	"statuses" : {type : "sap.ui.core.Control", multiple : true, singularName : "status"}
	},
	events : {
		"titlePress" : {}, 
		"introPress" : {}, 
		"iconPress" : {}, 
		"titleSelectorPress" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.ObjectHeader with name <code>sClassName</code> 
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
 * @name sap.m.ObjectHeader.extend
 * @function
 */

sap.m.ObjectHeader.M_EVENTS = {'titlePress':'titlePress','introPress':'introPress','iconPress':'iconPress','titleSelectorPress':'titleSelectorPress'};


/**
 * Getter for property <code>title</code>.
 * Object header title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.ObjectHeader#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setTitle
 * @function
 */


/**
 * Getter for property <code>number</code>.
 * Object header number field
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>number</code>
 * @public
 * @name sap.m.ObjectHeader#getNumber
 * @function
 */

/**
 * Setter for property <code>number</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumber  new value for property <code>number</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setNumber
 * @function
 */


/**
 * Getter for property <code>numberUnit</code>.
 * Object header number units qualifier.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>numberUnit</code>
 * @public
 * @name sap.m.ObjectHeader#getNumberUnit
 * @function
 */

/**
 * Setter for property <code>numberUnit</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumberUnit  new value for property <code>numberUnit</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setNumberUnit
 * @function
 */


/**
 * Getter for property <code>intro</code>.
 * Introductory text for the object header.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>intro</code>
 * @public
 * @name sap.m.ObjectHeader#getIntro
 * @function
 */

/**
 * Setter for property <code>intro</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIntro  new value for property <code>intro</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setIntro
 * @function
 */


/**
 * Getter for property <code>introActive</code>.
 * Indicates that the intro is clickable
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>introActive</code>
 * @public
 * @name sap.m.ObjectHeader#getIntroActive
 * @function
 */

/**
 * Setter for property <code>introActive</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bIntroActive  new value for property <code>introActive</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setIntroActive
 * @function
 */


/**
 * Getter for property <code>titleActive</code>.
 * Indicates that the title is clickable
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>titleActive</code>
 * @public
 * @name sap.m.ObjectHeader#getTitleActive
 * @function
 */

/**
 * Setter for property <code>titleActive</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bTitleActive  new value for property <code>titleActive</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setTitleActive
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Object header icon
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.m.ObjectHeader#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setIcon
 * @function
 */


/**
 * Getter for property <code>iconActive</code>.
 * Indicates that the object header icon is clickable
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>iconActive</code>
 * @public
 * @name sap.m.ObjectHeader#getIconActive
 * @function
 */

/**
 * Setter for property <code>iconActive</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bIconActive  new value for property <code>iconActive</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setIconActive
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Indicateds if object header is visible. Invisible object headers are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.ObjectHeader#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setVisible
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
 * @name sap.m.ObjectHeader#getIconDensityAware
 * @function
 */

/**
 * Setter for property <code>iconDensityAware</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setIconDensityAware
 * @function
 */


/**
 * Getter for property <code>markFavorite</code>.
 * Set the favorite state to true or false. The showMarkers property must be true for this property to take effect.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>markFavorite</code>
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#getMarkFavorite
 * @function
 */

/**
 * Setter for property <code>markFavorite</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bMarkFavorite  new value for property <code>markFavorite</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#setMarkFavorite
 * @function
 */


/**
 * Getter for property <code>markFlagged</code>.
 * Set the flagged state to true or false. The showMarkers property must be true for this property to take effect.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>markFlagged</code>
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#getMarkFlagged
 * @function
 */

/**
 * Setter for property <code>markFlagged</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bMarkFlagged  new value for property <code>markFlagged</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#setMarkFlagged
 * @function
 */


/**
 * Getter for property <code>showMarkers</code>.
 * Indicates if object header supports showing markers such as flagged and favorite.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showMarkers</code>
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#getShowMarkers
 * @function
 */

/**
 * Setter for property <code>showMarkers</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowMarkers  new value for property <code>showMarkers</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#setShowMarkers
 * @function
 */


/**
 * Getter for property <code>showTitleSelector</code>.
 * When it is true, the selector arrow icon/image is shown and can be pressed.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showTitleSelector</code>
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#getShowTitleSelector
 * @function
 */

/**
 * Setter for property <code>showTitleSelector</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowTitleSelector  new value for property <code>showTitleSelector</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#setShowTitleSelector
 * @function
 */


/**
 * Getter for property <code>numberState</code>.
 * Object header number and numberUnit value state.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>numberState</code>
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#getNumberState
 * @function
 */

/**
 * Setter for property <code>numberState</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oNumberState  new value for property <code>numberState</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#setNumberState
 * @function
 */


/**
 * Getter for property <code>condensed</code>.
 * Displays the condensed object header with title, one attribute, number and number unit.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>condensed</code>
 * @public
 * @name sap.m.ObjectHeader#getCondensed
 * @function
 */

/**
 * Setter for property <code>condensed</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bCondensed  new value for property <code>condensed</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setCondensed
 * @function
 */


/**
 * Getter for property <code>backgroundDesign</code>.
 * Note: only applied when "condensed" is true.
 * This property is used to set the background color of the ObjectHeader in condensed mode. Depending on the theme you can change the state of the background from "Solid" to "Transparent".
 *
 * Default value is <code>Transparent</code>
 *
 * @return {sap.m.BackgroundDesign} the value of property <code>backgroundDesign</code>
 * @public
 * @name sap.m.ObjectHeader#getBackgroundDesign
 * @function
 */

/**
 * Setter for property <code>backgroundDesign</code>.
 *
 * Default value is <code>Transparent</code> 
 *
 * @param {sap.m.BackgroundDesign} oBackgroundDesign  new value for property <code>backgroundDesign</code>
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#setBackgroundDesign
 * @function
 */


/**
 * Getter for aggregation <code>attributes</code>.<br/>
 * The list of Object Attributes
 * 
 * <strong>Note</strong>: this is the default aggregation for ObjectHeader.
 * @return {sap.m.ObjectAttribute[]}
 * @public
 * @name sap.m.ObjectHeader#getAttributes
 * @function
 */


/**
 * Inserts a attribute into the aggregation named <code>attributes</code>.
 *
 * @param {sap.m.ObjectAttribute}
 *          oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the attribute should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the attribute is inserted at 
 *             the last position        
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#insertAttribute
 * @function
 */

/**
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 *
 * @param {sap.m.ObjectAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#addAttribute
 * @function
 */

/**
 * Removes an attribute from the aggregation named <code>attributes</code>.
 *
 * @param {int | string | sap.m.ObjectAttribute} vAttribute the attribute to remove or its index or id
 * @return {sap.m.ObjectAttribute} the removed attribute or null
 * @public
 * @name sap.m.ObjectHeader#removeAttribute
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.ObjectAttribute[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.ObjectHeader#removeAllAttributes
 * @function
 */

/**
 * Checks for the provided <code>sap.m.ObjectAttribute</code> in the aggregation named <code>attributes</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.ObjectAttribute}
 *            oAttribute the attribute whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.ObjectHeader#indexOfAttribute
 * @function
 */
	

/**
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#destroyAttributes
 * @function
 */


/**
 * Getter for aggregation <code>firstStatus</code>.<br/>
 * First status shown on the right side of the attributes above the second status.
 * If it is not set the first attibute will expand to take the entire row.
 * 
 * @return {sap.m.ObjectStatus}
 * @public
 * @deprecated Since version 1.16.0. 
 * Use the statuses aggregation instead.
 * @name sap.m.ObjectHeader#getFirstStatus
 * @function
 */


/**
 * Setter for the aggregated <code>firstStatus</code>.
 * @param {sap.m.ObjectStatus} oFirstStatus
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.0. 
 * Use the statuses aggregation instead.
 * @name sap.m.ObjectHeader#setFirstStatus
 * @function
 */
	

/**
 * Destroys the firstStatus in the aggregation 
 * named <code>firstStatus</code>.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.0. 
 * Use the statuses aggregation instead.
 * @name sap.m.ObjectHeader#destroyFirstStatus
 * @function
 */


/**
 * Getter for aggregation <code>secondStatus</code>.<br/>
 * Second status shown on the right side of the attributes below the first status.
 * If it is not set the second attibute will expand to take the entire row.
 * 
 * @return {sap.m.ObjectStatus}
 * @public
 * @deprecated Since version 1.16.0. 
 * Use the statuses aggregation instead.
 * @name sap.m.ObjectHeader#getSecondStatus
 * @function
 */


/**
 * Setter for the aggregated <code>secondStatus</code>.
 * @param {sap.m.ObjectStatus} oSecondStatus
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.0. 
 * Use the statuses aggregation instead.
 * @name sap.m.ObjectHeader#setSecondStatus
 * @function
 */
	

/**
 * Destroys the secondStatus in the aggregation 
 * named <code>secondStatus</code>.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.0. 
 * Use the statuses aggregation instead.
 * @name sap.m.ObjectHeader#destroySecondStatus
 * @function
 */


/**
 * Getter for aggregation <code>statuses</code>.<br/>
 * The list of Object sap.ui.core.Control. It will only allow sap.m.ObjectStatus and sap.m.ProgressIndicator controls.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#getStatuses
 * @function
 */


/**
 * Inserts a status into the aggregation named <code>statuses</code>.
 *
 * @param {sap.ui.core.Control}
 *          oStatus the status to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the status should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the status is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the status is inserted at 
 *             the last position        
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#insertStatus
 * @function
 */

/**
 * Adds some status <code>oStatus</code> 
 * to the aggregation named <code>statuses</code>.
 *
 * @param {sap.ui.core.Control}
 *            oStatus the status to add; if empty, nothing is inserted
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#addStatus
 * @function
 */

/**
 * Removes an status from the aggregation named <code>statuses</code>.
 *
 * @param {int | string | sap.ui.core.Control} vStatus the status to remove or its index or id
 * @return {sap.ui.core.Control} the removed status or null
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#removeStatus
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>statuses</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#removeAllStatuses
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>statuses</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oStatus the status whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#indexOfStatus
 * @function
 */
	

/**
 * Destroys all the statuses in the aggregation 
 * named <code>statuses</code>.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#destroyStatuses
 * @function
 */


/**
 * Event is fired when the title is active and the user tap/click on it 
 *
 * @name sap.m.ObjectHeader#titlePress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {object} oControlEvent.getParameters.domRef Dom reference of the object header' title to be used for positioning.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'titlePress' event of this <code>sap.m.ObjectHeader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ObjectHeader</code>.<br/> itself. 
 *  
 * Event is fired when the title is active and the user tap/click on it 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.ObjectHeader</code>.<br/> itself.
 *
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#attachTitlePress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'titlePress' event of this <code>sap.m.ObjectHeader</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#detachTitlePress
 * @function
 */

/**
 * Fire event titlePress to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'domRef' of type <code>object</code> Dom reference of the object header' title to be used for positioning.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ObjectHeader#fireTitlePress
 * @function
 */


/**
 * Event is fired when the title is active and the user tap/click on it 
 *
 * @name sap.m.ObjectHeader#introPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {object} oControlEvent.getParameters.domRef Dom reference of the object header' intro to be used for positioning.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'introPress' event of this <code>sap.m.ObjectHeader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ObjectHeader</code>.<br/> itself. 
 *  
 * Event is fired when the title is active and the user tap/click on it 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.ObjectHeader</code>.<br/> itself.
 *
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#attachIntroPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'introPress' event of this <code>sap.m.ObjectHeader</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#detachIntroPress
 * @function
 */

/**
 * Fire event introPress to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'domRef' of type <code>object</code> Dom reference of the object header' intro to be used for positioning.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ObjectHeader#fireIntroPress
 * @function
 */


/**
 * Event is fired when the title icon is active and the user tap/click on it 
 *
 * @name sap.m.ObjectHeader#iconPress
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {object} oControlEvent.getParameters.domRef Dom reference of the object header' icon to be used for positioning.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'iconPress' event of this <code>sap.m.ObjectHeader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ObjectHeader</code>.<br/> itself. 
 *  
 * Event is fired when the title icon is active and the user tap/click on it 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.ObjectHeader</code>.<br/> itself.
 *
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#attachIconPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'iconPress' event of this <code>sap.m.ObjectHeader</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectHeader#detachIconPress
 * @function
 */

/**
 * Fire event iconPress to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'domRef' of type <code>object</code> Dom reference of the object header' icon to be used for positioning.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.ObjectHeader#fireIconPress
 * @function
 */


/**
 * Event is fired when the object header title selector (down-arrow) is pressed 
 *
 * @name sap.m.ObjectHeader#titleSelectorPress
 * @event
 * @since 1.16.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {object} oControlEvent.getParameters.domRef Dom reference of the object header' titleArrow to be used for positioning.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'titleSelectorPress' event of this <code>sap.m.ObjectHeader</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.ObjectHeader</code>.<br/> itself. 
 *  
 * Event is fired when the object header title selector (down-arrow) is pressed 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.ObjectHeader</code>.<br/> itself.
 *
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#attachTitleSelectorPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'titleSelectorPress' event of this <code>sap.m.ObjectHeader</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectHeader#detachTitleSelectorPress
 * @function
 */

/**
 * Fire event titleSelectorPress to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'domRef' of type <code>object</code> Dom reference of the object header' titleArrow to be used for positioning.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.ObjectHeader} <code>this</code> to allow method chaining
 * @protected
 * @since 1.16.0
 * @name sap.m.ObjectHeader#fireTitleSelectorPress
 * @function
 */


// Start of sap\m\ObjectHeader.js
///**
jQuery.sap.require("sap.ui.core.IconPool");

sap.m.ObjectHeader.prototype.init = function() {

	this._fNumberWidth = undefined;
	
	//TODO Remove placeholder when Safari iconFont issue is addressed.
	var oPlaceholderIconUri = sap.ui.core.IconPool.getIconURI("fridge");
	this._oPlaceholderIcon = sap.ui.core.IconPool.createControlByURI({
		id : this.getId() + "-placeholder",
		src : oPlaceholderIconUri
	});	
	this._oPlaceholderIcon.addStyleClass("sapMObjStatusMarkerInvisible");

	var oFlagIconUri = sap.ui.core.IconPool.getIconURI("flag");
	this._oFlagIcon = sap.ui.core.IconPool.createControlByURI({
		id : this.getId() + "-flag",
		src : oFlagIconUri,
		visible : false
	});

	var oFavIconUri = sap.ui.core.IconPool.getIconURI("favorite");	
	this._oFavIcon = sap.ui.core.IconPool.createControlByURI({
		id : this.getId() + "-favorite",
		src : oFavIconUri,
		visible : false
	});
	
	var oTitleArrowIconUri = sap.ui.core.IconPool.getIconURI("slim-arrow-down");	
	this._oTitleArrowIcon = sap.ui.core.IconPool.createControlByURI({
		id : this.getId() + "-titleArrow",
		src : oTitleArrowIconUri,
		visible : false
	});		   
			
	this._titleText = new sap.m.Text(this.getId() + "-titleText");
	this._titleText.setMaxLines(3);
};

sap.m.ObjectHeader.prototype.ontap = function(oEvent) {

	var sourceId = oEvent.target.id;
	if (this.getIntroActive() && sourceId === this.getId() + "-intro") {
		this.fireIntroPress({
			domRef : jQuery.sap.domById(sourceId)
		});
	} else if (this.getTitleActive() && oEvent.srcControl === this._titleText) {
		this.fireTitlePress({
			domRef : jQuery.sap.domById(sourceId)
		});
	} else if (this.getIconActive() && (sourceId === this.getId() + "-img" || sourceId === this.getId() + "-icon")) {
		this.fireIconPress({
			domRef : jQuery.sap.domById(sourceId)
		});
	} else if (sourceId === this.getId() + "-titleArrow") {		
		this.fireTitleSelectorPress({
			domRef : jQuery.sap.domById(sourceId)	 
		});
	} 
};

/**
 * Called when the control is destroyed.
 * 
 * @private
 */
sap.m.ObjectHeader.prototype.exit = function() {

	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}

	if (this._oImageControl) {
		this._oImageControl.destroy();
		this._oImageControl = undefined;
	}

	if (this._oPlaceholderIcon) {
		this._oPlaceholderIcon.destroy();
		this._oPlaceholderIcon = undefined;
	}

	if (this._oFavIcon) {
		this._oFavIcon.destroy();
		this._oFavIcon = undefined;
	}

	if (this._oFlagIcon) {
		this._oFlagIcon.destroy();
		this._oFlagIcon = undefined;
	}
	
	if (this._oTitleArrowIcon) {
		this._oTitleArrowIcon.destroy();
		this._oTitleArrowIcon = undefined;
	}
	
	if(this._titleText){
		this._titleText.destroy();
		this._titleText = undefined;
	}

};

/**
 * Lazy load object header's image.
 * 
 * @private
 */
sap.m.ObjectHeader.prototype._getImageControl = function() {

	var sImgId = this.getId() + "-img";
	var sSize = sap.ui.Device.system.phone ? "2.5rem" : "3rem";

	var mProperties = {
		src : this.getIcon(),
		height : sSize,
		width : sSize,
		size : sSize,
		densityAware : this.getIconDensityAware()
	};

	this._oImageControl = sap.m.ImageHelper.getImageControl(sImgId, this._oImageControl, this, mProperties);

	return this._oImageControl;
};

sap.m.ObjectHeader.prototype.onBeforeRendering = function() {

	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}

};

sap.m.ObjectHeader.prototype.onAfterRendering = function() {
	
	if (this.getShowTitleSelector()) {
		this._oTitleArrowIcon.$().css("cursor", "pointer");
	}
	
	if (this.$("number").length > 0) {
		this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(), jQuery.proxy(this._resizeElements, this));
		setTimeout(jQuery.proxy(this._resizeElements, this));
	}
};

sap.m.ObjectHeader.prototype._resizeElements = function() {

	if (!this.getDomRef())
		return;

	var id = this.getId();
	var $numberDiv = jQuery.sap.byId(id + "-numberdiv");
	var bHasWrap = $numberDiv.hasClass("sapMOHNumberWrap");

	if (this._fNumberWidth === undefined) {
		this._fNumberWidth = $numberDiv.outerWidth();
	}

	var bOverflow = $numberDiv.parent().width() * 35 / 100 < this._fNumberWidth;

	if (bOverflow != bHasWrap) {
		$numberDiv.toggleClass("sapMOHNumberWrap");
		jQuery.sap.byId(id + "-titlediv").toggleClass("sapMOHNumberWrap");

		jQuery(sap.m.ObjectHeader._escapeId(id) + " .sapMOHBottomRow").css("margin-top", bOverflow && sap.ui.Device.system.phone ? ".25rem" : "");
		this._titleText.setMaxLines(bOverflow ? 2 : 3).rerender();
	}
};

/**
 * @param [string]
 *            sId control id to be escaped
 * @returns escaped control id with "#" prefix
 * @private
 */
sap.m.ObjectHeader._escapeId = function(sId) {

	return sId ? "#" + sId.replace(/(:|\.)/g, '\\$1') : "";
};

/**
 * @private
 * @returns {boolean}
 */
sap.m.ObjectHeader.prototype._hasBottomContent = function() {

	return (this._hasAttributes() || this._hasStatus() || this.getShowMarkers());
};

/**
 * @private
 * @returns {boolean}
 */
sap.m.ObjectHeader.prototype._hasIcon = function() {

	return !!this.getIcon().trim();
};

/**
 * @private
 * @returns {boolean}
 */
sap.m.ObjectHeader.prototype._hasAttributes = function() {

	var attributes = this.getAttributes();
	if (attributes && attributes.length > 0) {
		for ( var i = 0; i < attributes.length; i++) {
			if (!attributes[i]._isEmpty()) {
				return true;
			}
		}
	}
	return false;
};

/**
 * @private
 * @returns {boolean}
 */
sap.m.ObjectHeader.prototype._hasStatus = function() {

	var bHasStatus = ((this.getFirstStatus() && !this.getFirstStatus()._isEmpty()) || (this.getSecondStatus() && !this.getSecondStatus()._isEmpty()));

	if (!bHasStatus && this.getStatuses() && this.getStatuses().length > 0) {
		var statuses = this.getStatuses();
		for ( var i = 0; i < statuses.length; i++) {
			if (statuses[i] instanceof sap.m.ObjectStatus && !statuses[i]._isEmpty()) {
				bHasStatus = true;
				break;
			}
			else if (statuses[i] instanceof sap.m.ProgressIndicator) {
				bHasStatus = true;
				break;
			}
		}
	}

	return bHasStatus;
};
