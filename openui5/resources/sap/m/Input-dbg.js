/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Input.
jQuery.sap.declare("sap.m.Input");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.InputBase");


/**
 * Constructor for a new Input.
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
 * <li>{@link #getType type} : sap.m.InputType (default: sap.m.InputType.Text)</li>
 * <li>{@link #getMaxLength maxLength} : int (default: 0)</li>
 * <li>{@link #getValueStateText valueStateText} : string</li>
 * <li>{@link #getShowValueStateMessage showValueStateMessage} : boolean (default: true)</li>
 * <li>{@link #getDateFormat dateFormat} : string (default: 'YYYY-MM-dd')</li>
 * <li>{@link #getShowValueHelp showValueHelp} : boolean (default: false)</li>
 * <li>{@link #getShowSuggestion showSuggestion} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSuggestionItems suggestionItems} : sap.ui.core.Item[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Input#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Input#event:valueHelpRequest valueHelpRequest} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Input#event:suggest suggest} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.Input#event:suggestionItemSelected suggestionItemSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.InputBase#constructor sap.m.InputBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Enables users to input data.
 * @extends sap.m.InputBase
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.Input
 */
sap.m.InputBase.extend("sap.m.Input", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"setFilterFunction"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"type" : {type : "sap.m.InputType", group : "Data", defaultValue : sap.m.InputType.Text},
		"maxLength" : {type : "int", group : "Behavior", defaultValue : 0},
		"valueStateText" : {type : "string", group : "Misc", defaultValue : null},
		"showValueStateMessage" : {type : "boolean", group : "Misc", defaultValue : true},
		"dateFormat" : {type : "string", group : "Misc", defaultValue : 'YYYY-MM-dd', deprecated: true},
		"showValueHelp" : {type : "boolean", group : "Behavior", defaultValue : false},
		"showSuggestion" : {type : "boolean", group : "Behavior", defaultValue : false}
	},
	aggregations : {
    	"suggestionItems" : {type : "sap.ui.core.Item", multiple : true, singularName : "suggestionItem"}
	},
	events : {
		"liveChange" : {}, 
		"valueHelpRequest" : {}, 
		"suggest" : {}, 
		"suggestionItemSelected" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Input with name <code>sClassName</code> 
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
 * @name sap.m.Input.extend
 * @function
 */

sap.m.Input.M_EVENTS = {'liveChange':'liveChange','valueHelpRequest':'valueHelpRequest','suggest':'suggest','suggestionItemSelected':'suggestionItemSelected'};


/**
 * Getter for property <code>type</code>.
 * Type of input (e.g. Text, Number, Email, Phone)
 *
 * Default value is <code>Text</code>
 *
 * @return {sap.m.InputType} the value of property <code>type</code>
 * @public
 * @name sap.m.Input#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>Text</code> 
 *
 * @param {sap.m.InputType} oType  new value for property <code>type</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Input#setType
 * @function
 */


/**
 * Getter for property <code>maxLength</code>.
 * Maximum number of characters. Value '0' means the feature is switched off.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>maxLength</code>
 * @public
 * @name sap.m.Input#getMaxLength
 * @function
 */

/**
 * Setter for property <code>maxLength</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iMaxLength  new value for property <code>maxLength</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Input#setMaxLength
 * @function
 */


/**
 * Getter for property <code>valueStateText</code>.
 * The text which is shown in the value state message popup. If not specfied a default text is shown.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>valueStateText</code>
 * @public
 * @name sap.m.Input#getValueStateText
 * @function
 */

/**
 * Setter for property <code>valueStateText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sValueStateText  new value for property <code>valueStateText</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Input#setValueStateText
 * @function
 */


/**
 * Getter for property <code>showValueStateMessage</code>.
 * Whether the value state message should be shown.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showValueStateMessage</code>
 * @public
 * @name sap.m.Input#getShowValueStateMessage
 * @function
 */

/**
 * Setter for property <code>showValueStateMessage</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowValueStateMessage  new value for property <code>showValueStateMessage</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Input#setShowValueStateMessage
 * @function
 */


/**
 * Getter for property <code>dateFormat</code>.
 * Only used if type=date and no datepicker is available.
 * The data is displayed and the user input is parsed according to this format.
 * NOTE: The value property is always of the form RFC 3339 (YYYY-MM-dd).
 *
 * Default value is <code>YYYY-MM-dd</code>
 *
 * @return {string} the value of property <code>dateFormat</code>
 * @public
 * @deprecated Since version 1.9.1. 
 * sap.m.DateTimeInput should be used for date/time inputs and formating.
 * @name sap.m.Input#getDateFormat
 * @function
 */

/**
 * Setter for property <code>dateFormat</code>.
 *
 * Default value is <code>YYYY-MM-dd</code> 
 *
 * @param {string} sDateFormat  new value for property <code>dateFormat</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.9.1. 
 * sap.m.DateTimeInput should be used for date/time inputs and formating.
 * @name sap.m.Input#setDateFormat
 * @function
 */


/**
 * Getter for property <code>showValueHelp</code>.
 * If set to true, a value help indicator will be displayed inside the control. When clicked the event "valueHelpRequest" will be fired.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showValueHelp</code>
 * @public
 * @since 1.16
 * @name sap.m.Input#getShowValueHelp
 * @function
 */

/**
 * Setter for property <code>showValueHelp</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowValueHelp  new value for property <code>showValueHelp</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.Input#setShowValueHelp
 * @function
 */


/**
 * Getter for property <code>showSuggestion</code>.
 * If this is set to true, suggest event is fired when user types in the input. Changing the suggestItems aggregation in suggest event listener will show suggestions within a popup. When runs on phone, input will first open a dialog where the input and suggestions are shown. When runs on a tablet, the suggestions are shown in a popup next to the input.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>showSuggestion</code>
 * @public
 * @since 1.16.1
 * @name sap.m.Input#getShowSuggestion
 * @function
 */

/**
 * Setter for property <code>showSuggestion</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShowSuggestion  new value for property <code>showSuggestion</code>
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.1
 * @name sap.m.Input#setShowSuggestion
 * @function
 */


/**
 * Getter for aggregation <code>suggestionItems</code>.<br/>
 * SuggestItems are the items which will be shown in the suggestion popup. Changing this aggregation (by calling addSuggestionItem, insertSuggestionItem, removeSuggestionItem, removeAllSuggestionItems, destroySuggestionItems) after input is rendered will open/close the suggestion popup.
 * 
 * @return {sap.ui.core.Item[]}
 * @public
 * @since 1.16.1
 * @name sap.m.Input#getSuggestionItems
 * @function
 */


/**
 * Inserts a suggestionItem into the aggregation named <code>suggestionItems</code>.
 *
 * @param {sap.ui.core.Item}
 *          oSuggestionItem the suggestionItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the suggestionItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the suggestionItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the suggestionItem is inserted at 
 *             the last position        
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.1
 * @name sap.m.Input#insertSuggestionItem
 * @function
 */

/**
 * Adds some suggestionItem <code>oSuggestionItem</code> 
 * to the aggregation named <code>suggestionItems</code>.
 *
 * @param {sap.ui.core.Item}
 *            oSuggestionItem the suggestionItem to add; if empty, nothing is inserted
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.1
 * @name sap.m.Input#addSuggestionItem
 * @function
 */

/**
 * Removes an suggestionItem from the aggregation named <code>suggestionItems</code>.
 *
 * @param {int | string | sap.ui.core.Item} vSuggestionItem the suggestionItem to remove or its index or id
 * @return {sap.ui.core.Item} the removed suggestionItem or null
 * @public
 * @since 1.16.1
 * @name sap.m.Input#removeSuggestionItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>suggestionItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 * @since 1.16.1
 * @name sap.m.Input#removeAllSuggestionItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation named <code>suggestionItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Item}
 *            oSuggestionItem the suggestionItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @since 1.16.1
 * @name sap.m.Input#indexOfSuggestionItem
 * @function
 */
	

/**
 * Destroys all the suggestionItems in the aggregation 
 * named <code>suggestionItems</code>.
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.1
 * @name sap.m.Input#destroySuggestionItems
 * @function
 */


/**
 * This event is fired when the value of the input is changed - e.g. at each keypress 
 *
 * @name sap.m.Input#liveChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.newValue The new value of the input.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.m.Input</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Input</code>.<br/> itself. 
 *  
 * This event is fired when the value of the input is changed - e.g. at each keypress 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Input</code>.<br/> itself.
 *
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Input#attachLiveChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.m.Input</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Input#detachLiveChange
 * @function
 */

/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> The new value of the input.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Input#fireLiveChange
 * @function
 */


/**
 * When the value help indicator is clicked, this event will be fired. 
 *
 * @name sap.m.Input#valueHelpRequest
 * @event
 * @since 1.16
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'valueHelpRequest' event of this <code>sap.m.Input</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Input</code>.<br/> itself. 
 *  
 * When the value help indicator is clicked, this event will be fired. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Input</code>.<br/> itself.
 *
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.Input#attachValueHelpRequest
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'valueHelpRequest' event of this <code>sap.m.Input</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.Input#detachValueHelpRequest
 * @function
 */

/**
 * Fire event valueHelpRequest to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @protected
 * @since 1.16
 * @name sap.m.Input#fireValueHelpRequest
 * @function
 */


/**
 * This event is fired when user types in the input and showSuggestion is set to true. Changing the suggestItems aggregation will show the suggestions within a popup. 
 *
 * @name sap.m.Input#suggest
 * @event
 * @since 1.16.1
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.suggestValue The current value which has been typed in the input.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'suggest' event of this <code>sap.m.Input</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Input</code>.<br/> itself. 
 *  
 * This event is fired when user types in the input and showSuggestion is set to true. Changing the suggestItems aggregation will show the suggestions within a popup. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Input</code>.<br/> itself.
 *
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.1
 * @name sap.m.Input#attachSuggest
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'suggest' event of this <code>sap.m.Input</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.1
 * @name sap.m.Input#detachSuggest
 * @function
 */

/**
 * Fire event suggest to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'suggestValue' of type <code>string</code> The current value which has been typed in the input.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @protected
 * @since 1.16.1
 * @name sap.m.Input#fireSuggest
 * @function
 */


/**
 * This event is fired when suggestionItem shown in suggestion popup are selected. This event is only fired when showSuggestion is set to true and there are suggestionItems shown in the suggestion popup. 
 *
 * @name sap.m.Input#suggestionItemSelected
 * @event
 * @since 1.16.3
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Item} oControlEvent.getParameters.selectedItem This is the item selected in the suggestion popup.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'suggestionItemSelected' event of this <code>sap.m.Input</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Input</code>.<br/> itself. 
 *  
 * This event is fired when suggestionItem shown in suggestion popup are selected. This event is only fired when showSuggestion is set to true and there are suggestionItems shown in the suggestion popup. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Input</code>.<br/> itself.
 *
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.m.Input#attachSuggestionItemSelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'suggestionItemSelected' event of this <code>sap.m.Input</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.m.Input#detachSuggestionItemSelected
 * @function
 */

/**
 * Fire event suggestionItemSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedItem' of type <code>sap.ui.core.Item</code> This is the item selected in the suggestion popup.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Input} <code>this</code> to allow method chaining
 * @protected
 * @since 1.16.3
 * @name sap.m.Input#fireSuggestionItemSelected
 * @function
 */


/**
 * Sets a custom filter function for suggestionItems. Default is to check whether the item text begins with the typed value. This fitler function is called with two paramters: the first one is the string that is currently typed in the input and the second one is the item that is being filtered. Returning true will add this item to the popup.
 *
 * @name sap.m.Input.prototype.setFilterFunction
 * @function

 * @type boolean
 * @public
 * @since 1.16.1
 */


// Start of sap\m\Input.js
jQuery.sap.require("jquery.sap.strings");
jQuery.sap.require("sap.m.Dialog");
jQuery.sap.require("sap.m.Popover");
jQuery.sap.require("sap.m.List");
jQuery.sap.require("sap.m.StandardListItem");
jQuery.sap.require("sap.m.Bar");
jQuery.sap.require("sap.ui.core.IconPool");
sap.ui.core.IconPool.insertFontFaceStyle();

sap.m.Input._DEFAULTFILTER = function(sValue, oItem){
	return jQuery.sap.startsWithIgnoreCase(oItem.getText(), sValue);
};

sap.m.Input.prototype.init = function() {
	sap.m.InputBase.prototype.init.call(this);
	this._inputProxy = jQuery.proxy(this._onInput, this);
	this._fnFilter = sap.m.Input._DEFAULTFILTER;
};

/**
 * Destroys the control
 * @private
 */
sap.m.Input.prototype.exit = function() {
	this._deregisterEvents();

	if(this._oSuggestionPopup){
		this._oSuggestionPopup.destroy();
		this._oSuggestionPopup = null;
	}

	if (this._oValueHelpIcon) {
		this._oValueHelpIcon.destroy();
		this._oValueHelpIcon = null;
	}
};

sap.m.Input.prototype.onBeforeRendering = function(){
	sap.m.InputBase.prototype.onBeforeRendering.call(this);
	this._deregisterEvents();
};

sap.m.Input.prototype.onAfterRendering = function() {
	var that = this;
	sap.m.InputBase.prototype.onAfterRendering.call(this);
	this._bindToInputEvent(this._inputProxy);

	if(this._oList && !sap.ui.Device.system.phone){
		this._oList.setWidth(this.$().outerWidth() + "px");
		this._sPopupResizeHandler = sap.ui.core.ResizeHandler.register(this.getDomRef(),  function(){
			that._oList.setWidth(that.$().outerWidth() + "px");
		});
	}

	if(sap.ui.Device.system.phone && this._oSuggestionPopup){
		//click event has to be used in order to focus on the input in dialog
		this.$().on("click", jQuery.proxy(function(){
			if(this.getShowSuggestion() && this._oSuggestionPopup){
				this._oSuggestionPopup.open();
				this._oPopupInput._$input.focus();
			}
		}, this));
	}
};

/**
 * Returns/Instantiates the value help icon control when needed
 * @private
 */
sap.m.Input.prototype._getValueHelpIcon = function () {
	var that = this;

	if (!this._oValueHelpIcon) {
		var sURI = sap.ui.core.IconPool.getIconURI("value-help");
		this._oValueHelpIcon = sap.ui.core.IconPool.createControlByURI({
			id: this.getId() + "__vhi",
			src: sURI
		});
		this._oValueHelpIcon.addStyleClass("sapMInputValHelpInner");
		this._oValueHelpIcon.attachPress(function (evt) {
			that.fireValueHelpRequest();
		});
	}
	return this._oValueHelpIcon;
};

/**
 * Defines the width of the input. Default value is 100%
 *
 * @public
 * @param {string} sWidth
 */
sap.m.Input.prototype.setWidth = function(sWidth) {
	return sap.m.InputBase.prototype.setWidth.call(this, sWidth || "100%");
};

sap.m.Input.prototype.getWidth = function(sWidth) {
	return this.getProperty("width") || "100%";
};

sap.m.Input.prototype.setFilterFunction = function(fnFilter){
	this._fnFilter = fnFilter;
};

/**
 * Selects the text of the InputDomRef in the given range
 * @param {int} [iStart=0] start position of the text selection
 * @param {int} [iEnd=<length of text>] end position of the text selection
 * @return {sap.m.Input} this Input instance
 * @private
 */
sap.m.Input.prototype._doSelect = function(iStart, iEnd){
	if(sap.ui.Device.support.touch){
		return;
	}
	var oDomRef = this._$input[0];
	if (oDomRef) {
		//if no Dom-Ref - no selection (Maybe popup closed)
		var $Ref = this._$input;
		oDomRef.focus();
		$Ref.selectText(iStart?iStart:0, iEnd?iEnd:$Ref.val().length);
	}
	return this;
};

sap.m.Input.prototype._scrollToItem = function(iIndex, sDir){
	var oPopup = this._oSuggestionPopup,
		oList = this._oList;

	if(!(oPopup instanceof sap.m.Popover) || !oList){
		return;
	}

	var oListItem = oList.getItems()[iIndex],
		oListItemDom = oListItem && oListItem.$()[0];

	if(oListItemDom){
		oListItemDom.scrollIntoView(sDir === "up");
	}
};

sap.m.Input.prototype._onsaparrowkey = function(oEvent, sDir){
	if(sDir !== "up" && sDir !== "down"){
		return;
	}

	if (!this.getEnabled() || !this.getEditable()) {
		return;
	}

	if(!this._oSuggestionPopup || !this._oSuggestionPopup.isOpen()){
		return;
	}

	var oList = this._oList,
		aListItems = oList.getItems(),
		sValue = this._$input.val(),
		iSelectedIndex = this._iPopupListSelectedIndex,
		sNewValue;

	if(iSelectedIndex === -1){
		iSelectedIndex = 0;
	}else{
		if(sDir === "down"){
			if(iSelectedIndex < aListItems.length - 1){
				aListItems[iSelectedIndex].$().removeClass("sapMLIBSelected");
				iSelectedIndex = iSelectedIndex + 1;
			}
		}else{
			if(iSelectedIndex > 0){
				aListItems[iSelectedIndex].$().removeClass("sapMLIBSelected");
				iSelectedIndex = iSelectedIndex - 1;
			}
		}
	}
	aListItems[iSelectedIndex].$().addClass("sapMLIBSelected");

	if(sap.ui.Device.system.desktop){
		this._scrollToItem(iSelectedIndex, sDir);
	}

	// make sure the value doesn't exceed the maxLength
	sNewValue = this._getInputValue(aListItems[iSelectedIndex].getTitle());
	// setValue isn't used because here is too early to modify the lastValue of input
	this._$input.val(sNewValue);

	// memorize the value set by calling jQuery.val, because browser doesn't fire a change event
	// when the value is set programmatically.
	this._sSelectedSuggViaKeyboard = sNewValue;

	this._doSelect();

	this._iPopupListSelectedIndex = iSelectedIndex;

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.m.Input.prototype.onsapup = function(oEvent) {
	this._onsaparrowkey(oEvent, "up");
};

sap.m.Input.prototype.onsapdown = function(oEvent) {
	this._onsaparrowkey(oEvent, "down");
};

sap.m.Input.prototype.onsapescape = function(oEvent) {
	if(this._oSuggestionPopup && this._oSuggestionPopup.isOpen()){
		// mark the event as already handled
		oEvent.originalEvent._sapui_handledByControl = true;
		this._oSuggestionPopup.close();

		// if popup is open, simply returns from here to prevent from setting the input to the last known value.
		return;
	}

	if(sap.m.InputBase.prototype.onsapescape){
		sap.m.InputBase.prototype.onsapescape.apply(this, arguments);
	}
};

sap.m.Input.prototype.onsapenter = function(oEvent) {
	if (sap.m.InputBase.prototype.onsapenter) {
		sap.m.InputBase.prototype.onsapenter.apply(this, arguments);
	}

	if(this._oSuggestionPopup && this._oSuggestionPopup.isOpen() && this._iPopupListSelectedIndex >= 0){
		var oSelectedListItem = this._oList.getItems()[this._iPopupListSelectedIndex];
		this._changeProxy(oEvent);
		this._oSuggestionPopup.close();
		this._doSelect();
		if(oSelectedListItem){
			this.fireSuggestionItemSelected({selectedItem: oSelectedListItem._oItem});
		}
		this._iPopupListSelectedIndex = -1;
	}
};

sap.m.Input.prototype.onsapfocusleave = function(oEvent){
	var oPopup = this._oSuggestionPopup;

	if(!(oPopup instanceof sap.m.Popover)){
		return;
	}

	if(oEvent.relatedControlId
			&& jQuery.sap.containsOrEquals(oPopup.getFocusDomRef(), sap.ui.getCore().byId(oEvent.relatedControlId).getFocusDomRef())){
		// force the focus to stay in input
		this.focus();
	}else{
		// when the input still has the value of the last jQuery.val call, a change event has to be
		// fired manually because browser doesn't fire an input event in this case.
		if(this._$input.val() === this._sSelectedSuggViaKeyboard) {
			this._sSelectedSuggViaKeyboard = null;
			this._$input.change();
		}
	}
};

sap.m.Input.prototype.onmousedown = function(oEvent){
	var oPopup = this._oSuggestionPopup;

	if((oPopup instanceof sap.m.Popover) && oPopup.isOpen()){
		oEvent.stopPropagation();
	}
};

sap.m.Input.prototype._deregisterEvents = function(){
	if(this._sPopupResizeHandler){
		sap.ui.core.ResizeHandler.deregister(this._sPopupResizeHandler);
		this._sPopupResizeHandler = null;
	}

	if(sap.ui.Device.system.phone && this._oSuggestionPopup){
		this.$().off("click");
	}
};

(function(){
	sap.m.Input.prototype.setShowSuggestion = function(bValue){
		this.setProperty("showSuggestion", bValue);
		this._iPopupListSelectedIndex = -1;
		if(bValue){
			if(this._oSuggestionPopup){
				return this;
			}
			createSuggestionPopup(this);
		}else{
			destroySuggestionPopup(this);
		}
	};

	sap.m.Input.prototype._onInput = function(oEvent) {
		var value = this._$input.val();

		// add maxlength support for all types
		// TODO: type number add min and max properties
		if (this.getMaxLength() > 0 && value.length > this.getMaxLength()) {
			value = value.substring(0, this.getMaxLength());
			this._$input.val(value);
		}

		if (value !== this.getProperty("value")) {
			this.setProperty("value", value, true);
			this._curpos = this._$input.cursorPos();
			this._setLabelVisibility();
			this.fireLiveChange({
				newValue : value
			});

			// No need to fire suggest event when suggestion feature isn't enabled or runs on the phone.
			// Because suggest event should only be fired by the input in dialog when runs on the phone.
			if(!this.getShowSuggestion() || sap.ui.Device.system.phone){
				return;
			}

			if(value){
				this.fireSuggest({
					suggestValue: value
				});
				refreshListItems(this);
			}else{
				if(this._oSuggestionPopup && this._oSuggestionPopup.isOpen()){
					this._oSuggestionPopup.close();
				}
			}
		}
	};

	sap.m.Input.prototype.addSuggestionItem = function(oItem){
		this.addAggregation("suggestionItems", oItem, true);
		refreshListItems(this);
		return this;
	};

	sap.m.Input.prototype.insertSuggestionItem = function(oItem, iIndex){
		this.insertAggregation("suggestionItems", iIndex, oItem, true);
		refreshListItems(this);
		return this;
	};

	sap.m.Input.prototype.removeSuggestionItem = function(oItem){
		var res = this.removeAggregation("suggestionItems", oItem, true);
		refreshListItems(this);
		return res;
	};

	sap.m.Input.prototype.removeAllSuggestionItems = function(){
		var res = this.removeAllAggregation("suggestionItems", true);
		refreshListItems(this);
		return res;
	};

	sap.m.Input.prototype.destroySuggestionItems = function(){
		this.destroyAggregation("suggestionItems", true);
		refreshListItems(this);
		return this;
	};

	function createSuggestionPopup(oInput){
		var oMessageBundle = sap.ui.getCore().getLibraryResourceBundle("sap.m");

		if(sap.ui.Device.system.phone){
			oInput._oPopupInput = new sap.m.Input(oInput.getId() + "-popup-input", {
				width: "100%",
				liveChange: function(oEvent){
					var sValue = oEvent.getParameter("newValue");
					oInput.setValue(sValue);

					oInput.fireSuggest({
						suggestValue: sValue
					});
					refreshListItems(oInput);

					// make sure the live change handler on the original input is also called
					oInput.fireLiveChange({
						newValue: sValue
					});
				},

			}).addStyleClass("sapMInputSuggInDialog");
		}

		oInput._oSuggestionPopup = !sap.ui.Device.system.phone ?
			(new sap.m.Popover(oInput.getId() + "-popup", {
				showHeader: false,
				placement: sap.m.PlacementType.Vertical,
				initialFocus: oInput
			}).attachAfterClose(function(){
				oInput._iPopupListSelectedIndex = -1;
				oInput._oList.destroyItems();
			}))
		:
			(new sap.m.Dialog(oInput.getId() + "-popup", {
				beginButton: new sap.m.Button(oInput.getId() + "-popup-closeButton", {
					text: oMessageBundle.getText("MSGBOX_CLOSE"),
					press: function(){
						oInput._oSuggestionPopup.close();
					}
				}),
				stretch: true,
				customHeader: new sap.m.Bar(oInput.getId() + "-popup-header", {
					contentMiddle: oInput._oPopupInput
				}),
				horizontalScrolling: false,
				initialFocus: oInput._oPopupInput
			}).attachBeforeOpen(function(){
				// set the same placeholder and maxLength as the original input
				oInput._oPopupInput.setPlaceholder(oInput.getPlaceholder());
				oInput._oPopupInput.setMaxLength(oInput.getMaxLength());
			}).attachAfterClose(function(){
				// call _getInputValue to apply the maxLength to the typed value
				oInput._$input.val(oInput._getInputValue(oInput._oPopupInput.getValue()));
				oInput._changeProxy();
				oInput._oList.destroyItems();
			}).attachAfterOpen(function(){
				var sValue = oInput.getValue();

				oInput._oPopupInput.setValue(sValue);
				oInput.fireSuggest({
					suggestValue: sValue
				});
				refreshListItems(oInput);
			}));

		oInput._oSuggestionPopup.addStyleClass("sapMInputSuggestionPopup");

		if(!sap.ui.Device.system.phone){
			overwritePopover(oInput._oSuggestionPopup, oInput);
		}

		oInput._oList = new sap.m.List(oInput.getId() + "-popup-list", {
			width: "100%",
			showNoData: false
		});

		oInput._oSuggestionPopup.addContent(oInput._oList);
	}

	function destroySuggestionPopup(oInput){
		if(oInput._oSuggestionPopup){
			oInput._oSuggestionPopup.destroy();
			oInput._oSuggestionPopup = null;
		}
	}

	function overwritePopover(oPopover, oInput){
		//overwrite the internal properties to not to show the arrow in popover.
		oPopover._marginTop = 0;
		oPopover._marginLeft = 0;
		oPopover._marginRight = 0;
		oPopover._marginBottom = 0;
		oPopover._arrowOffset = 0;
		oPopover._offsets = ["0 0", "0 0", "0 0", "0 0"];
		oPopover._myPositions = ["begin bottom", "begin center", "begin top", "end center"];
		oPopover._atPositions = ["begin top", "end center", "begin bottom", "begin center"];

		oPopover.open = function(){
			this.openBy(oInput, false, true);
		};

		//remove animation from popover
		oPopover.oPopup.setAnimations(function($Ref, iRealDuration, fnOpened){
			fnOpened();
		}, function($Ref, iRealDuration, fnClosed){
			fnClosed();
		});
	}

	function refreshListItems(oInput){
		var bShowSuggestion = oInput.getShowSuggestion();
		this._iPopupListSelectedIndex = -1;
		if(!(bShowSuggestion
				&& oInput.getDomRef()
				&& (sap.ui.Device.system.phone || oInput.$().hasClass("sapMInputFocused"))
			)
		){
			return false;
		}

		var oItem,
			aItems = oInput.getSuggestionItems(),
			sTypedChars = oInput._$input.val(),
			oList = oInput._oList,
			bFilter = sTypedChars && sTypedChars.length > 0,
			aHitItems = [],
			oPopup = oInput._oSuggestionPopup,
			oListItemDelegate = {
				ontouchstart: function(oEvent){
					(oEvent.originalEvent || oEvent)._sapui_cancelAutoClose = true;
				}
			},
			oStandardListItem;

		oList.destroyItems();

		if(!bFilter){
			// when the input has no value, close the Popup when not runs on the phone.
			// because the opened dialog on phone shouldn't be closed.
			if(!sap.ui.Device.system.phone){
				oPopup.close();
			}
			return false;
		}

		for(var i=0; i<aItems.length; i++){
			oItem = aItems[i];
			if(!bFilter || oInput._fnFilter(sTypedChars, oItem)){
				oStandardListItem = new sap.m.StandardListItem(oItem.getId() + "-sli", {
					title: oItem.getText(),
					type: oItem.getEnabled() ? sap.m.ListType.Active : sap.m.ListType.Inactive,
					press: function(){
						if(sap.ui.Device.system.phone){
							oInput._oPopupInput.setValue(this.getTitle());
							oInput._oPopupInput._doSelect();
						}else{
							// call _getInputValue to apply the maxLength to the typed value
							oInput._$input.val(oInput._getInputValue(this.getTitle()));
							oInput._changeProxy();
						}
						oPopup.close();
						if(!sap.ui.Device.support.touch){
							oInput._doSelect();
						}
						oInput.fireSuggestionItemSelected({selectedItem: this._oItem});
					}
				});
				oStandardListItem._oItem = oItem;
				oStandardListItem.addEventDelegate(oListItemDelegate);
				aHitItems.push(oStandardListItem);
			}
		}

		var iItemsLength = aHitItems.length;

		if(iItemsLength > 0){
			for(var i=0; i<iItemsLength; i++){
				oList.addItem(aHitItems[i]);
			}

			if(!sap.ui.Device.system.phone){
				if(oInput._sCloseTimer){
					clearTimeout(oInput._sCloseTimer);
					oInput._sCloseTimer = null;
				}

				if(!oPopup.isOpen() && !oInput._sOpenTimer){
					oInput._sOpenTimer = setTimeout(function(){
						oPopup.open();
						oInput._sOpenTimer = null;
					}, 0);
				}
			}
		}else{
			if(!sap.ui.Device.system.phone && oPopup.isOpen()){
				oInput._sCloseTimer = setTimeout(function(){
					oPopup.close();
				}, 0);
			}
		}
	}
})();

(function(){

	function closeMessage(oInput){
		if(oInput._popup){
			oInput._popup.close();
		}
	};

	function openMessage(oInput){
		var oState = oInput.getValueState();

		if (oInput.getShowValueStateMessage() && oState && ((oState === sap.ui.core.ValueState.Warning)
				|| (oState === sap.ui.core.ValueState.Error)) && oInput.getEnabled() && oInput.getEditable()) {
			var sText = oInput.getValueStateText();
			if(!sText){
				sText = sap.ui.core.ValueStateSupport.getAdditionalText(oInput);
			}
			if(!sText){
				return;
			}

			var messageId = oInput.getId()+"-message";
			if(!oInput._popup){
				jQuery.sap.require("sap.ui.core.Popup");
				jQuery.sap.require("jquery.sap.encoder");
				oInput._popup = new sap.ui.core.Popup(jQuery("<span></span>")[0] /*Just some dummy*/, false, false, false);
				oInput._popup.attachClosed(function(){
					jQuery.sap.byId(messageId).remove();
				});
			}

			var $Input = jQuery(oInput.getFocusDomRef());
			var dock = sap.ui.core.Popup.Dock;
			var bIsRightAligned = $Input.css("text-align") === "right";

			var sClass = "sapMInputMessage " + ((oState === sap.ui.core.ValueState.Warning) ? "sapMInputMessageWarning" : "sapMInputMessageError");

			oInput._popup.setContent(jQuery("<div style=\"max-width:"+$Input.outerWidth()+"px;\" class=\""+sClass+"\" id=\""+messageId+"\"><span id=\""+messageId+"-text\">"+jQuery.sap.encodeHTML(sText)+"</span></div>"));

			oInput._popup.close(0);
			oInput._popup.open(
					200,
					bIsRightAligned ? dock.EndTop : dock.BeginTop,
					bIsRightAligned ? dock.EndBottom : dock.BeginBottom,
					oInput.getFocusDomRef(),
					null,
					null,
					function(){
						oInput._popup.close();
					}
			);
		}
	};

	sap.m.Input.prototype.setValueState = function(sValueState) {
		var sOldValueState = this.getValueState();

		sap.m.InputBase.prototype.setValueState.apply(this, arguments);

		var sNewValueState = this.getValueState();

		if(this.getDomRef() && sNewValueState != sOldValueState && this.getFocusDomRef() === document.activeElement){
			switch(sNewValueState){
				case sap.ui.core.ValueState.Error:
				case sap.ui.core.ValueState.Warning:
					openMessage(this);
					break;
				default:
					closeMessage(this);
			}

		}

		return this;
	};

	sap.m.Input.prototype.setValueStateText = function(sText) {
		this.$("message-text").text(sText);
		return this.setProperty("valueStateText", sText, true);
	};

	sap.m.Input.prototype.onfocusin = function(oEvent) {
		this.$().addClass("sapMInputFocused");
		openMessage(this);
	};


	/**
	 * Register F4 to trigger the valueHelpRequest event
	 * @private
	 */
	sap.m.Input.prototype.onsapshow = function(oEvent) {

		if (!this.getEnabled() || !this.getShowValueHelp()) {
			return;
		}

		this.fireValueHelpRequest();
		oEvent.preventDefault();
		oEvent.stopPropagation();
	};

	sap.m.Input.prototype.onkeydown = function(oEvent) {
		closeMessage(this);
	};

	sap.m.Input.prototype.onfocusout = function(oEvent) {
		this.$().removeClass("sapMInputFocused");
		closeMessage(this);
		sap.m.InputBase.prototype.onfocusout.apply(this, arguments);
	};

})();
