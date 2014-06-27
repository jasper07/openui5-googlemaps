/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ExactBrowser.
jQuery.sap.declare("sap.ui.ux3.ExactBrowser");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ExactBrowser.
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
 * <li>{@link #getHeaderTitle headerTitle} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getTopListOrder topListOrder} : sap.ui.ux3.ExactOrder (default: sap.ui.ux3.ExactOrder.Select)</li>
 * <li>{@link #getEnableListClose enableListClose} : boolean (default: false)</li>
 * <li>{@link #getListHeight listHeight} : int (default: 290)</li>
 * <li>{@link #getShowHeader showHeader} : boolean (default: false)</li>
 * <li>{@link #getShowTopList showTopList} : boolean (default: true)</li>
 * <li>{@link #getEnableReset enableReset} : boolean (default: true)</li>
 * <li>{@link #getEnableSave enableSave} : boolean (default: false)</li>
 * <li>{@link #getTopListWidth topListWidth} : int (default: 168)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAttributes attributes} <strong>(default aggregation)</strong> : sap.ui.ux3.ExactAttribute[]</li>
 * <li>{@link #getOptionsMenu optionsMenu} : sap.ui.commons.Menu</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getFollowUpControl followUpControl} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.ExactBrowser#event:attributeSelected attributeSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.ExactBrowser#event:save save} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Attribute browse area used within the Exact pattern. The main benefit of this control is the high flexibility when large data amounts shall be displayed
 * in the form of structured data sets with a high or low interdependency level. From lists - which can be nested according to the defined attributes - the user can choose
 * entries and thereby trigger the display of further information, depending on the chosen entry/entries (multiple selection supported).
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.ExactBrowser
 */
sap.ui.core.Control.extend("sap.ui.ux3.ExactBrowser", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"reset"
	],

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"headerTitle" : {type : "string", group : "Misc", defaultValue : null},
		"visible" : {type : "boolean", group : "", defaultValue : true},
		"topListOrder" : {type : "sap.ui.ux3.ExactOrder", group : "", defaultValue : sap.ui.ux3.ExactOrder.Select},
		"enableListClose" : {type : "boolean", group : "Misc", defaultValue : false},
		"listHeight" : {type : "int", group : "Appearance", defaultValue : 290},
		"showHeader" : {type : "boolean", group : "Misc", defaultValue : false},
		"showTopList" : {type : "boolean", group : "Misc", defaultValue : true},
		"enableReset" : {type : "boolean", group : "Misc", defaultValue : true},
		"enableSave" : {type : "boolean", group : "Misc", defaultValue : false},
		"topListWidth" : {type : "int", group : "Misc", defaultValue : 168}
	},
	defaultAggregation : "attributes",
	aggregations : {
    	"attributes" : {type : "sap.ui.ux3.ExactAttribute", multiple : true, singularName : "attribute"}, 
    	"optionsMenu" : {type : "sap.ui.commons.Menu", multiple : false}, 
    	"controls" : {type : "sap.ui.core.Control", multiple : true, singularName : "control", visibility : "hidden"}, 
    	"rootAttribute" : {type : "sap.ui.core.Element", multiple : false, visibility : "hidden"}
	},
	associations : {
		"followUpControl" : {type : "sap.ui.core.Control", multiple : false}
	},
	events : {
		"attributeSelected" : {}, 
		"save" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.ExactBrowser with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.ExactBrowser.extend
 * @function
 */

sap.ui.ux3.ExactBrowser.M_EVENTS = {'attributeSelected':'attributeSelected','save':'save'};


/**
 * Getter for property <code>title</code>.
 * Title text in the list area of the Exact Browser. The title is not shown when the property showTopList is set to false.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ui.ux3.ExactBrowser#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#setTitle
 * @function
 */


/**
 * Getter for property <code>headerTitle</code>.
 * Title text in the header of the Exact Browser.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>headerTitle</code>
 * @public
 * @name sap.ui.ux3.ExactBrowser#getHeaderTitle
 * @function
 */

/**
 * Setter for property <code>headerTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sHeaderTitle  new value for property <code>headerTitle</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#setHeaderTitle
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible ExactBrowsers are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.ux3.ExactBrowser#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#setVisible
 * @function
 */


/**
 * Getter for property <code>topListOrder</code>.
 * The order how the sublists of the top level list should be displayed.
 *
 * Default value is <code>Select</code>
 *
 * @return {sap.ui.ux3.ExactOrder} the value of property <code>topListOrder</code>
 * @public
 * @since 1.7.1
 * @name sap.ui.ux3.ExactBrowser#getTopListOrder
 * @function
 */

/**
 * Setter for property <code>topListOrder</code>.
 *
 * Default value is <code>Select</code> 
 *
 * @param {sap.ui.ux3.ExactOrder} oTopListOrder  new value for property <code>topListOrder</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.1
 * @name sap.ui.ux3.ExactBrowser#setTopListOrder
 * @function
 */


/**
 * Getter for property <code>enableListClose</code>.
 * Enables the close icons of the displayed lists.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>enableListClose</code>
 * @public
 * @name sap.ui.ux3.ExactBrowser#getEnableListClose
 * @function
 */

/**
 * Setter for property <code>enableListClose</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEnableListClose  new value for property <code>enableListClose</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#setEnableListClose
 * @function
 */


/**
 * Getter for property <code>listHeight</code>.
 * The height of the list area in px.
 *
 * Default value is <code>290</code>
 *
 * @return {int} the value of property <code>listHeight</code>
 * @public
 * @name sap.ui.ux3.ExactBrowser#getListHeight
 * @function
 */

/**
 * Setter for property <code>listHeight</code>.
 *
 * Default value is <code>290</code> 
 *
 * @param {int} iListHeight  new value for property <code>listHeight</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#setListHeight
 * @function
 */


/**
 * Getter for property <code>showHeader</code>.
 * Whether the header area of the ExactBrowser should be shown.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showHeader</code>
 * @public
 * @name sap.ui.ux3.ExactBrowser#getShowHeader
 * @function
 */

/**
 * Setter for property <code>showHeader</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowHeader  new value for property <code>showHeader</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#setShowHeader
 * @function
 */


/**
 * Getter for property <code>showTopList</code>.
 * Whether the top list of the ExactBrowser should be shown. When the property is set to false the
 * application must ensure to select top level attributes appropriately.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showTopList</code>
 * @public
 * @since 1.7.0
 * @name sap.ui.ux3.ExactBrowser#getShowTopList
 * @function
 */

/**
 * Setter for property <code>showTopList</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowTopList  new value for property <code>showTopList</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.0
 * @name sap.ui.ux3.ExactBrowser#setShowTopList
 * @function
 */


/**
 * Getter for property <code>enableReset</code>.
 * Whether the reset functionality should be available in the header area.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableReset</code>
 * @public
 * @name sap.ui.ux3.ExactBrowser#getEnableReset
 * @function
 */

/**
 * Setter for property <code>enableReset</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableReset  new value for property <code>enableReset</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#setEnableReset
 * @function
 */


/**
 * Getter for property <code>enableSave</code>.
 * Whether the save button should be available in the header area.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>enableSave</code>
 * @public
 * @since 1.9.2
 * @name sap.ui.ux3.ExactBrowser#getEnableSave
 * @function
 */

/**
 * Setter for property <code>enableSave</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEnableSave  new value for property <code>enableSave</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @since 1.9.2
 * @name sap.ui.ux3.ExactBrowser#setEnableSave
 * @function
 */


/**
 * Getter for property <code>topListWidth</code>.
 * Specifies the width of the top list in pixels. The value must be between 70 and 500.
 *
 * Default value is <code>168</code>
 *
 * @return {int} the value of property <code>topListWidth</code>
 * @public
 * @since 1.7.0
 * @name sap.ui.ux3.ExactBrowser#getTopListWidth
 * @function
 */

/**
 * Setter for property <code>topListWidth</code>.
 *
 * Default value is <code>168</code> 
 *
 * @param {int} iTopListWidth  new value for property <code>topListWidth</code>
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.0
 * @name sap.ui.ux3.ExactBrowser#setTopListWidth
 * @function
 */


/**
 * Getter for aggregation <code>attributes</code>.<br/>
 * The attributes which shall be available.
 * 
 * <strong>Note</strong>: this is the default aggregation for ExactBrowser.
 * @return {sap.ui.ux3.ExactAttribute[]}
 * @public
 * @name sap.ui.ux3.ExactBrowser#getAttributes
 * @function
 */


/**
 * Inserts a attribute into the aggregation named <code>attributes</code>.
 *
 * @param {sap.ui.ux3.ExactAttribute}
 *          oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the attribute should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the attribute is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#insertAttribute
 * @function
 */

/**
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 *
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#addAttribute
 * @function
 */

/**
 * Removes an attribute from the aggregation named <code>attributes</code>.
 *
 * @param {int | string | sap.ui.ux3.ExactAttribute} vAttribute the attribute to remove or its index or id
 * @return {sap.ui.ux3.ExactAttribute} the removed attribute or null
 * @public
 * @name sap.ui.ux3.ExactBrowser#removeAttribute
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ExactAttribute[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ExactBrowser#removeAllAttributes
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.ExactAttribute</code> in the aggregation named <code>attributes</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ExactBrowser#indexOfAttribute
 * @function
 */
	

/**
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#destroyAttributes
 * @function
 */


/**
 * Getter for aggregation <code>optionsMenu</code>.<br/>
 * Menu with options. The menu can not used when the property showTopList is set to false.
 * 
 * @return {sap.ui.commons.Menu}
 * @public
 * @name sap.ui.ux3.ExactBrowser#getOptionsMenu
 * @function
 */


/**
 * Setter for the aggregated <code>optionsMenu</code>.
 * @param {sap.ui.commons.Menu} oOptionsMenu
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#setOptionsMenu
 * @function
 */
	

/**
 * Destroys the optionsMenu in the aggregation 
 * named <code>optionsMenu</code>.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#destroyOptionsMenu
 * @function
 */


/**
 * 
 * The successor control of the Exact Browser. The id of this control is used in the ARIA description of the control.
 * Additionally it is possible to directly jump to this control via the F6 key.
 * 
 *
 * @return {string} Id of the element which is the current target of the <code>followUpControl</code> association, or null
 * @public
 * @name sap.ui.ux3.ExactBrowser#getFollowUpControl
 * @function
 */

/**
 * 
 * The successor control of the Exact Browser. The id of this control is used in the ARIA description of the control.
 * Additionally it is possible to directly jump to this control via the F6 key.
 * 
 *
 * @param {string | sap.ui.core.Control} vFollowUpControl 
 *    Id of an element which becomes the new target of this <code>followUpControl</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#setFollowUpControl
 * @function
 */


	
/**
 * Event is fired when an attribute is selected or unselected. 
 *
 * @name sap.ui.ux3.ExactBrowser#attributeSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.ux3.ExactAttribute} oControlEvent.getParameters.attribute The attribute which was selected or unselected recently
 * @param {object} oControlEvent.getParameters.allAttributes Array of all selected ExactAttributes
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'attributeSelected' event of this <code>sap.ui.ux3.ExactBrowser</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ExactBrowser</code>.<br/> itself. 
 *  
 * Event is fired when an attribute is selected or unselected. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ExactBrowser</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#attachAttributeSelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'attributeSelected' event of this <code>sap.ui.ux3.ExactBrowser</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#detachAttributeSelected
 * @function
 */

/**
 * Fire event attributeSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'attribute' of type <code>sap.ui.ux3.ExactAttribute</code> The attribute which was selected or unselected recently</li>
 * <li>'allAttributes' of type <code>object</code> Array of all selected ExactAttributes</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.ExactBrowser#fireAttributeSelected
 * @function
 */


/**
 * Event is fired when an attribute is selected or unselected. 
 *
 * @name sap.ui.ux3.ExactBrowser#save
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'save' event of this <code>sap.ui.ux3.ExactBrowser</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ExactBrowser</code>.<br/> itself. 
 *  
 * Event is fired when an attribute is selected or unselected. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ExactBrowser</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#attachSave
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'save' event of this <code>sap.ui.ux3.ExactBrowser</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactBrowser#detachSave
 * @function
 */

/**
 * Fire event save to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ExactBrowser} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.ExactBrowser#fireSave
 * @function
 */


/**
 * Deselects all currently selected attributes and closes all attribute lists.
 *
 * @name sap.ui.ux3.ExactBrowser.prototype.reset
 * @function

 * @type void
 * @public
 */


// Start of sap\ui\ux3\ExactBrowser.js
jQuery.sap.require("sap.ui.ux3.ExactAttribute");
jQuery.sap.require("sap.ui.ux3.ExactList");
jQuery.sap.require("sap.ui.commons.Menu");
jQuery.sap.require("sap.ui.commons.Button");

(function() {
	
	/**
	 * Does the setup when the ExactBrowser is created.
	 * @private
	 */
	sap.ui.ux3.ExactBrowser.prototype.init = function(){
		var that = this;

		this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");

		//Create a root node for the attributes tree
		this._attributeRoot = new sap.ui.ux3.ExactAttribute();
		this.setAggregation("rootAttribute",this._attributeRoot);
		//Init the used subcontrols
		this._rootList = new sap.ui.ux3.ExactList(this.getId()+"-rootlist");
		this._rootList.setData(this._attributeRoot);
		this.addAggregation("controls", this._rootList);

		this._resetButton = new sap.ui.commons.Button(this.getId()+"-RstBtn", {text: this._rb.getText("EXACT_BRWSR_RESET"), lite: true});
		this._resetButton.addStyleClass("sapUiUx3ExactBrwsrReset");
		this.addAggregation("controls", this._resetButton);
		this._resetButton.attachPress(function(){
			that.reset();
		});

		this._saveButton = new sap.ui.commons.Button(this.getId()+"-SvBtn", {text: this._rb.getText("EXACT_BRWSR_SAVE"), lite: true});
		this._saveButton.addStyleClass("sapUiUx3ExactBrwsrSave");
		this.addAggregation("controls", this._saveButton);
		this._saveButton.attachPress(function(){
			that.fireSave();
		});

		this._rootList.attachAttributeSelected(function(oEvent){
			that.fireAttributeSelected({attribute: oEvent.getParameter("attribute"), allAttributes: oEvent.getParameter("allAttributes")});
		});
		this._rootList.attachEvent("_headerPress", function(oEvent){
			var oMenu = that.getOptionsMenu();
			if(oMenu){
				var oDomRef = oEvent.getParameter("domRef");
				oMenu.open(oEvent.getParameter("keyboard"), oDomRef, sap.ui.core.Popup.Dock.BeginTop, sap.ui.core.Popup.Dock.BeginBottom, oDomRef);
			}
		});
	};


	/**
	 * Does all the cleanup when the ExactBrowser is to be destroyed.
	 * Called from Element's destroy() method.
	 * @private
	 */
	sap.ui.ux3.ExactBrowser.prototype.exit = function(){
		this._rootList.destroy();
		this._attributeRoot.destroy();
		this._rootList = null;
		this._attributeRoot = null;
		this._resetButton = null;
		this._saveButton = null;
		this._saveDialog = null;
		this._saveTextField = null;
		this._rb = null;
	};


	/**
	 * Called when a key is pressed.
	 * @private
	 */
	sap.ui.ux3.ExactBrowser.prototype.onkeydown = function(oEvent) {
		if(oEvent.keyCode != jQuery.sap.KeyCodes.F6 || !this.getFollowUpControl()) {
			return;
		}

		var oFollowUpControl = sap.ui.getCore().byId(this.getFollowUpControl());
		if(oFollowUpControl) {
			oEvent.preventDefault();
			oFollowUpControl.focus();
		}
	};
	
	
	/**
	 * Called when the theme is changed.
	 * @private
	 */
	sap.ui.ux3.ExactBrowser.prototype.onThemeChanged = function(oEvent) {
		if (this.getDomRef()) {
			this.invalidate();
		}
	};


	//*** Overridden API functions ***

	sap.ui.ux3.ExactBrowser.prototype.getTitle = function() {
		return this._rootList.getTopTitle();
	};


	sap.ui.ux3.ExactBrowser.prototype.setTitle = function(sTitle) {
		this._rootList.setTopTitle(sTitle);
		return this;
	};
	
	
	sap.ui.ux3.ExactBrowser.prototype.setTopListOrder = function(sListOrder) {
		this.setProperty("topListOrder", sListOrder, true);
		this._attributeRoot.setListOrder(sListOrder);
		return this;
	};
	
	
	sap.ui.ux3.ExactBrowser.prototype.getTopListWidth = function() {
		return this._attributeRoot.getWidth();
	};


	sap.ui.ux3.ExactBrowser.prototype.setTopListWidth = function(iWidth) {
		this._attributeRoot.setWidth(iWidth);
		return this;
	};


	sap.ui.ux3.ExactBrowser.prototype.getHeaderTitle = function() {
		var sTitle = this.getProperty("headerTitle");
		return sTitle ? sTitle : this._rb.getText("EXACT_BRWSR_TITLE");
	};


	sap.ui.ux3.ExactBrowser.prototype.getEnableListClose = function() {
		return this._rootList.getShowClose();
	};


	sap.ui.ux3.ExactBrowser.prototype.setEnableListClose = function(bEnableListClose) {
		this._rootList.setShowClose(bEnableListClose);
		return this;
	};


	sap.ui.ux3.ExactBrowser.prototype.getListHeight = function() {
		return this._rootList.getTopHeight();
	};


	sap.ui.ux3.ExactBrowser.prototype.setListHeight = function(iListHeight) {
		this._rootList.setTopHeight(iListHeight);
		return this;
	};


	sap.ui.ux3.ExactBrowser.prototype.getAttributes = function() {
		return this._attributeRoot.getAttributesInternal();
	};


	sap.ui.ux3.ExactBrowser.prototype.insertAttribute = function(oAttribute, iIndex) {
		this._attributeRoot.insertAttribute(oAttribute, iIndex);
		return this;
	};


	sap.ui.ux3.ExactBrowser.prototype.addAttribute = function(oAttribute) {
		this._attributeRoot.addAttribute(oAttribute);
		return this;
	};


	sap.ui.ux3.ExactBrowser.prototype.removeAttribute = function(vElement) {
		return this._attributeRoot.removeAttribute(vElement);
	};


	sap.ui.ux3.ExactBrowser.prototype.removeAllAttributes = function() {
		return this._attributeRoot.removeAllAttributes();
	};


	sap.ui.ux3.ExactBrowser.prototype.indexOfAttribute = function(oAttribute) {
		return this._attributeRoot.indexOfAttribute(oAttribute);
	};


	sap.ui.ux3.ExactBrowser.prototype.destroyAttributes = function() {
		this._attributeRoot.destroyAttributes();
		return this;
	};


	sap.ui.ux3.ExactBrowser.prototype.reset = function() {
		this._rootList._closeAll();
	};


	//*** Private helper functions ***
	
	sap.ui.ux3.ExactBrowser.prototype.hasOptionsMenu = function() {
		return !!this.getOptionsMenu();
	};

/*	//Closes the save dialog and triggers the save event
	function doSave(oExactBrowser, bSkip) {
		oExactBrowser._saveDialog.close();
		if(!bSkip){
			alert("Save: "+oExactBrowser._saveTextField.getValue());
		}
	}


	//Opens the save dialog
	function openSaveDialog(oExactBrowser) {
		if(!oExactBrowser._saveDialog){
			jQuery.sap.require("sap.ui.ux3.ToolPopup");
			jQuery.sap.require("sap.ui.commons.TextField");
			jQuery.sap.require("sap.ui.commons.Label");
			oExactBrowser._saveTextField = new sap.ui.commons.TextField(oExactBrowser.getId()+"-SvDlgTf");
			var label = new sap.ui.commons.Label({text: oExactBrowser._rb.getText("EXACT_BRWSR_DLG_LABEL")}).setLabelFor(oExactBrowser._saveTextField);
			oExactBrowser._saveDialog = new sap.ui.ux3.ToolPopup(oExactBrowser.getId()+"-SvDlg", {
				content:[label, oExactBrowser._saveTextField],
				buttons: [
					new sap.ui.commons.Button(oExactBrowser.getId()+"-SvDlgSvBtn", {
						text: oExactBrowser._rb.getText("EXACT_BRWSR_DLG_SAVE"),
						press: function(){
							doSave(oExactBrowser);
						}
					}),
					new sap.ui.commons.Button(oExactBrowser.getId()+"-SvDlgCnclBtn", {
						text: oExactBrowser._rb.getText("EXACT_BRWSR_DLG_CANCEL"),
						press: function(){
							doSave(oExactBrowser, true);
						}
					})
				]
			});
			oExactBrowser._saveDialog.addStyleClass("sapUiUx3ExactBrwsrSaveDlg");
			oExactBrowser.addAggregation("controls", oExactBrowser._saveDialog);
		}
		oExactBrowser._saveDialog.setPosition(sap.ui.core.Popup.Dock.EndTop, sap.ui.core.Popup.Dock.EndBottom, oExactBrowser._saveButton.getDomRef(), "0 13", "none");
		oExactBrowser._saveDialog.open();
	}
*/

}());