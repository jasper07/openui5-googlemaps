/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.CheckBox.
jQuery.sap.declare("sap.ui.commons.CheckBox");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new CheckBox.
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
 * <li>{@link #getChecked checked} : boolean (default: false)</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: sap.ui.core.TextDirection.Inherit)</li>
 * <li>{@link #getName name} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaDescribedBy ariaDescribedBy} : string | sap.ui.core.Control</li>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.CheckBox#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * 
 * Provides a box which can be flagged, the box has a label. A check box can either stand alone, or in a group with other check boxes. As an option, the boxes can initially be set to status 'Not Editable'.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.CheckBox
 */
sap.ui.core.Control.extend("sap.ui.commons.CheckBox", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"toggle"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"checked" : {type : "boolean", group : "Data", defaultValue : false, bindable : "bindable"},
		"text" : {type : "string", group : "Appearance", defaultValue : null},
		"visible" : {type : "boolean", group : "Misc", defaultValue : true},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"editable" : {type : "boolean", group : "Behavior", defaultValue : true},
		"valueState" : {type : "sap.ui.core.ValueState", group : "Data", defaultValue : sap.ui.core.ValueState.None},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"textDirection" : {type : "sap.ui.core.TextDirection", group : "Appearance", defaultValue : sap.ui.core.TextDirection.Inherit},
		"name" : {type : "string", group : "Misc", defaultValue : null}
	},
	associations : {
		"ariaDescribedBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaDescribedBy"}, 
		"ariaLabelledBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaLabelledBy"}
	},
	events : {
		"change" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.CheckBox with name <code>sClassName</code> 
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
 * @name sap.ui.commons.CheckBox.extend
 * @function
 */

sap.ui.commons.CheckBox.M_EVENTS = {'change':'change'};


/**
 * Getter for property <code>checked</code>.
 * Contains the state of the control whether it is flagged with a check mark, or not
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>checked</code>
 * @public
 * @name sap.ui.commons.CheckBox#getChecked
 * @function
 */

/**
 * Setter for property <code>checked</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bChecked  new value for property <code>checked</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CheckBox#setChecked
 * @function
 */


/**
 * Binder for property <code>checked</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CheckBox#bindChecked
 * @function
 */

/**
 * Unbinder for property <code>checked</code>.
 *
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CheckBox#unbindChecked
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
 * @name sap.ui.commons.CheckBox#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CheckBox#setText
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
 * @name sap.ui.commons.CheckBox#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CheckBox#setVisible
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
 * @name sap.ui.commons.CheckBox#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CheckBox#setEnabled
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
 * @name sap.ui.commons.CheckBox#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CheckBox#setEditable
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
 * @name sap.ui.commons.CheckBox#getValueState
 * @function
 */

/**
 * Setter for property <code>valueState</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oValueState  new value for property <code>valueState</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CheckBox#setValueState
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
 * @name sap.ui.commons.CheckBox#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CheckBox#setWidth
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
 * @name sap.ui.commons.CheckBox#getTextDirection
 * @function
 */

/**
 * Setter for property <code>textDirection</code>.
 *
 * Default value is <code>Inherit</code> 
 *
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CheckBox#setTextDirection
 * @function
 */


/**
 * Getter for property <code>name</code>.
 * The 'name' property to be used in the HTML code, for example for HTML forms that send data to the server via submit.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.ui.commons.CheckBox#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CheckBox#setName
 * @function
 */


/**
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.CheckBox#getAriaDescribedBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CheckBox#addAriaDescribedBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * @name sap.ui.commons.CheckBox#removeAriaDescribedBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.CheckBox#removeAllAriaDescribedBy
 * @function
 */

	
/**
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.CheckBox#getAriaLabelledBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CheckBox#addAriaLabelledBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * @name sap.ui.commons.CheckBox#removeAriaLabelledBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.CheckBox#removeAllAriaLabelledBy
 * @function
 */

	
/**
 * 
 * Event is triggered when the control status is changed by the user by flagging or unflagging the checkbox.
 *  
 *
 * @name sap.ui.commons.CheckBox#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.checked 
					Checks whether the box is flagged or not flagged.
					
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.CheckBox</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.CheckBox</code>.<br/> itself. 
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
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.CheckBox</code>.<br/> itself.
 *
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CheckBox#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.CheckBox</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.CheckBox#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'checked' of type <code>boolean</code> 
					Checks whether the box is flagged or not flagged.
					</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.CheckBox} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.CheckBox#fireChange
 * @function
 */


/**
 * 
 * Inverts the current value of the control.
 * 
 *
 * @name sap.ui.commons.CheckBox.prototype.toggle
 * @function

 * @type sap.ui.commons.CheckBox
 * @public
 */


// Start of sap\ui\commons\CheckBox.js
/**
 * Event handler called when the check box is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.CheckBox.prototype.onclick = function(oEvent) {
	//According to CSN2581852 2012 a readonly CB should be in the tabchain
	// This changed in 2013 back to not in the tabchain: see CSN 0002937527 2013
	// Let's see how often this will be changed back and forth in the future... Accessibility fun! :-D
	// End of 2013 is have to be again in the tabchain.
	// But not in the Form. But this is handled in the FromLayout control
	// Let's see what happens 2014... ;-)
	if(!!sap.ui.Device.browser.internet_explorer && !this.getEnabled()){
		// in IE tabindex = -1 hides focus, so in readOnly/disabled case tabindex must be temporarily set to 0
		// as long as CheckBox is focused
		this.$().attr("tabindex", 0).addClass("sapUiCbFoc"); // the CSS class itself is not used, but IE only draws the standard focus outline when it is added
	}

	this.userToggle(oEvent);
};

/**
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.CheckBox.prototype.onfocusout = function(oEvent) {
	//According to CSN2581852 2012 a readonly CB should be in the tabchain
	// This changed in 2013 back to not in the tabchain: see CSN 0002937527 2013
	// Let's see how often this will be changed back and forth in the future... Accessibility fun! :-D
	// End of 2013 is have to be again in the tabchain.
	// But not in the Form. But this is handled in the FromLayout control
	// Let's see what happens 2014... ;-)
	if(!!sap.ui.Device.browser.internet_explorer && !this.getEnabled()){
		// in IE tabindex = -1 hides focus, so in readOnly/disabled case tabindex must be temporarily set to 0
		// as long as CheckBox is focused - now unset this again
		this.$().attr("tabindex", -1).removeClass("sapUiCbFoc");
	}
};

/**
 * Event handler called when the space key is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.CheckBox.prototype.onsapspace = function(oEvent) {
	this.userToggle(oEvent);
};

/**
 * This method is used internally whenever the user toggles the check box value.
 * Purpose: Event cancellation and change event firing.
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.CheckBox.prototype.userToggle = function(oEvent) {
	oEvent.preventDefault();
	if (this.getEnabled() && this.getEditable()) {
		this.toggle();
		this.fireChange({checked: this.getChecked()});
	} else {
		// CheckBox has been activated by the user, but value cannot be changed
		// do nothing, but restore the focus to the complete control, as the user might have clicked the <input> element which also can get the focus
		this.getDomRef().focus();
	}
};

// implement public method toggle()
sap.ui.commons.CheckBox.prototype.toggle = function() {
	this.setChecked(!this.getChecked());
	return this;
};
