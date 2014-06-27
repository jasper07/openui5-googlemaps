/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.TriStateCheckBox.
jQuery.sap.declare("sap.ui.commons.TriStateCheckBox");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new TriStateCheckBox.
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
 * <li>{@link #getSelectionState selectionState} : sap.ui.commons.TriStateCheckBoxState (default: sap.ui.commons.TriStateCheckBoxState.Unchecked)</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: sap.ui.core.TextDirection.Inherit)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.TriStateCheckBox#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * TriStateCheckBox to reflect mixed state for checkboxes. The control can display three states, namely checked, unchecked and mixed. However, mixed state cannot be directly reached by user interaction on the particular control.
 * It can be only set by the control's public toggle function, to make a behaviour possible which is e.g. required in checkbox trees.
 * 
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.7.2
 * @name sap.ui.commons.TriStateCheckBox
 */
sap.ui.core.Control.extend("sap.ui.commons.TriStateCheckBox", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"toggle"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"selectionState" : {type : "sap.ui.commons.TriStateCheckBoxState", group : "Data", defaultValue : sap.ui.commons.TriStateCheckBoxState.Unchecked},
		"text" : {type : "string", group : "Appearance", defaultValue : null},
		"visible" : {type : "boolean", group : "Misc", defaultValue : true},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"editable" : {type : "boolean", group : "Behavior", defaultValue : true},
		"valueState" : {type : "sap.ui.core.ValueState", group : "Data", defaultValue : sap.ui.core.ValueState.None},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"textDirection" : {type : "sap.ui.core.TextDirection", group : "Appearance", defaultValue : sap.ui.core.TextDirection.Inherit}
	},
	events : {
		"change" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.TriStateCheckBox with name <code>sClassName</code> 
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
 * @name sap.ui.commons.TriStateCheckBox.extend
 * @function
 */

sap.ui.commons.TriStateCheckBox.M_EVENTS = {'change':'change'};


/**
 * Getter for property <code>selectionState</code>.
 * Defines the states of the checkbox
 *
 * Default value is <code>Unchecked</code>
 *
 * @return {sap.ui.commons.TriStateCheckBoxState} the value of property <code>selectionState</code>
 * @public
 * @name sap.ui.commons.TriStateCheckBox#getSelectionState
 * @function
 */

/**
 * Setter for property <code>selectionState</code>.
 *
 * Default value is <code>Unchecked</code> 
 *
 * @param {sap.ui.commons.TriStateCheckBoxState} oSelectionState  new value for property <code>selectionState</code>
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TriStateCheckBox#setSelectionState
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * Defines the text displayed next to the check box
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.commons.TriStateCheckBox#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TriStateCheckBox#setText
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.TriStateCheckBox#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TriStateCheckBox#setVisible
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Using this property, the control could be disabled, if required.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.commons.TriStateCheckBox#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TriStateCheckBox#setEnabled
 * @function
 */


/**
 * Getter for property <code>editable</code>.
 * Specifies whether the user shall be allowed to flag the check box
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.ui.commons.TriStateCheckBox#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TriStateCheckBox#setEditable
 * @function
 */


/**
 * Getter for property <code>valueState</code>.
 * Accepts the core enumeration ValueState.type that supports 'None', 'Error', 'Warning' and 'Success'.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * @name sap.ui.commons.TriStateCheckBox#getValueState
 * @function
 */

/**
 * Setter for property <code>valueState</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oValueState  new value for property <code>valueState</code>
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TriStateCheckBox#setValueState
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The width can be set to an absolute value. If no value is set, the control width results from the text length.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.TriStateCheckBox#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TriStateCheckBox#setWidth
 * @function
 */


/**
 * Getter for property <code>textDirection</code>.
 * The value can be set to LTR or RTL. Otherwise, the control inherits the text direction from its parent control.
 *
 * Default value is <code>Inherit</code>
 *
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * @name sap.ui.commons.TriStateCheckBox#getTextDirection
 * @function
 */

/**
 * Setter for property <code>textDirection</code>.
 *
 * Default value is <code>Inherit</code> 
 *
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TriStateCheckBox#setTextDirection
 * @function
 */


/**
 * 
 * Event is triggered when the control status is changed by the user by flagging or unflagging the checkbox.
 *  
 *
 * @name sap.ui.commons.TriStateCheckBox#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.selectionState 
					Checks whether the box is flagged or not flagged.
					
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.TriStateCheckBox</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.TriStateCheckBox</code>.<br/> itself. 
 *  
 * 
 * Event is triggered when the control status is changed by the user by flagging or unflagging the checkbox.
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.TriStateCheckBox</code>.<br/> itself.
 *
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TriStateCheckBox#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.TriStateCheckBox</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TriStateCheckBox#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectionState' of type <code>string</code> 
					Checks whether the box is flagged or not flagged.
					</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TriStateCheckBox} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.TriStateCheckBox#fireChange
 * @function
 */


/**
 * 
 * Changes the current value of the control.
 * 
 *
 * @name sap.ui.commons.TriStateCheckBox.prototype.toggle
 * @function
 * @param {string} 
 *         sDestState
 *         
 * destined selection state of checkbox
 * 

 * @type void
 * @public
 */


// Start of sap\ui\commons\TriStateCheckBox.js
/**
 * Event handler called when the check box is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
 sap.ui.commons.TriStateCheckBox.prototype.onclick = function(oEvent) {
	if(!!sap.ui.Device.browser.internet_explorer && (!this.getEnabled())){
		// in IE tabindex = -1 hides focus, so in disabled case tabindex must be temporarily set to 0
		// as long as CheckBox is focused
		this.$().attr("tabindex", 0).addClass("sapUiTriCbFoc"); // the CSS class itself is not used, but IE only draws the standard focus outline when it is added
	}
	this.userToggle(oEvent);
};

/** 
 * Event handler called on focus out
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.TriStateCheckBox.prototype.onfocusout = function(oEvent) {

	if(!!sap.ui.Device.browser.internet_explorer && (!this.getEnabled())){
		// in IE tabindex = -1 hides focus, so in disabled case tabindex must be temporarily set to 0
		// as long as CheckBox is focused - now unset this again
		this.$().attr("tabindex", -1).removeClass("sapUiTriCbFoc");
	}
};

/** 
 * Event handler called when the space key is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.TriStateCheckBox.prototype.onsapspace = function(oEvent) {
	this.userToggle(oEvent);
};

/** 
 * Method called internally whenever a user clicks on a tri-state checkbox:
 * users can only switch between checked and unchecked by direct manipulation by click or key
 *
 * @param {jQuery.Event} oEvent
 * @private
 */

sap.ui.commons.TriStateCheckBox.prototype.userToggle = function(oEvent){
if (this.getEnabled() && this.getEditable()) {
	// don't allow users to switch to mixed state manually
		if (this.getSelectionState() === 'Mixed' || this.getSelectionState() === "Unchecked"){
			this.toggle("Checked");
		}
		else{
			this.toggle("Unchecked");
		}
		this.fireChange({selectionState: this.getSelectionState()});
	} else {
		// CheckBox has been activated by the user, but value cannot be changed
		// do nothing, but restore the focus to the complete control
		this.getDomRef().focus();
	}
};

/**
 * Method called whenever a user clicks on a tri-state checkbox
 *
 * @param destState 
 * @public
 */
sap.ui.commons.TriStateCheckBox.prototype.toggle = function(destState) {
	if (destState in sap.ui.commons.TriStateCheckBoxState){
			this.setSelectionState(destState);
	}
};