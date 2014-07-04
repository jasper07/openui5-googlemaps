/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.RadioButton.
jQuery.sap.declare("sap.ui.commons.RadioButton");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new RadioButton.
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
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: sap.ui.core.TextDirection.Inherit)</li>
 * <li>{@link #getGroupName groupName} : string (default: 'sapUiRbDefaultGroup')</li>
 * <li>{@link #getKey key} : string</li></ul>
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
 * <li>{@link sap.ui.commons.RadioButton#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Consists of a round element and a descriptive text. Generally, you would create at least two radio button controls;
 * by this, you provide a limited choice for the user. Radio buttons can trigger events.
 * Available value states are "Error", "None", "Success", "Warning".
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.RadioButton
 */
sap.ui.core.Control.extend("sap.ui.commons.RadioButton", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"text" : {type : "string", group : "Data", defaultValue : null},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"editable" : {type : "boolean", group : "Behavior", defaultValue : true},
		"selected" : {type : "boolean", group : "Data", defaultValue : false},
		"valueState" : {type : "sap.ui.core.ValueState", group : "Data", defaultValue : sap.ui.core.ValueState.None},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"textDirection" : {type : "sap.ui.core.TextDirection", group : "Appearance", defaultValue : sap.ui.core.TextDirection.Inherit},
		"groupName" : {type : "string", group : "Behavior", defaultValue : 'sapUiRbDefaultGroup'},
		"key" : {type : "string", group : "Data", defaultValue : null}
	},
	associations : {
		"ariaDescribedBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaDescribedBy"}, 
		"ariaLabelledBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaLabelledBy"}
	},
	events : {
		"select" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.RadioButton with name <code>sClassName</code> 
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
 * @name sap.ui.commons.RadioButton.extend
 * @function
 */

sap.ui.commons.RadioButton.M_EVENTS = {'select':'select'};


/**
 * Getter for property <code>text</code>.
 * Defines the text displayed next to the radio button.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.commons.RadioButton#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButton#setText
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible radio buttons are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.RadioButton#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButton#setVisible
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * 
 * Disabled controls are displayed in another color, depending on the customer settings.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.commons.RadioButton#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButton#setEnabled
 * @function
 */


/**
 * Getter for property <code>editable</code>.
 * Specifies whether the user can choose a radio button
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.ui.commons.RadioButton#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButton#setEditable
 * @function
 */


/**
 * Getter for property <code>selected</code>.
 * Specifies the select state of the radio button
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * @name sap.ui.commons.RadioButton#getSelected
 * @function
 */

/**
 * Setter for property <code>selected</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSelected  new value for property <code>selected</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButton#setSelected
 * @function
 */


/**
 * Getter for property <code>valueState</code>.
 * 
 * Enumeration sap.ui.core.ValueState provides state values Error, Success, Warning, None
 * 
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * @name sap.ui.commons.RadioButton#getValueState
 * @function
 */

/**
 * Setter for property <code>valueState</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oValueState  new value for property <code>valueState</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButton#setValueState
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The control width depends on the text length. Alternatively, CSS-sizes in % or px can be set.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.RadioButton#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButton#setWidth
 * @function
 */


/**
 * Getter for property <code>textDirection</code>.
 * 
 * Available options are LTR and RTL. Alternatively, the control can inherit the text direction from its parent container.
 * 
 *
 * Default value is <code>Inherit</code>
 *
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * @name sap.ui.commons.RadioButton#getTextDirection
 * @function
 */

/**
 * Setter for property <code>textDirection</code>.
 *
 * Default value is <code>Inherit</code> 
 *
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButton#setTextDirection
 * @function
 */


/**
 * Getter for property <code>groupName</code>.
 * Name of the radio button group the current radio button belongs to. You can define a new name for the group.
 * If no new name is specified, this radio button belongs to the sapUiRbDefaultGroup per default. Default behavior of a radio button
 * in a group is that when one of the radio buttons in a group is selected, all others are unselected.
 *
 * Default value is <code>'sapUiRbDefaultGroup'</code>
 *
 * @return {string} the value of property <code>groupName</code>
 * @public
 * @name sap.ui.commons.RadioButton#getGroupName
 * @function
 */

/**
 * Setter for property <code>groupName</code>.
 *
 * Default value is <code>'sapUiRbDefaultGroup'</code> 
 *
 * @param {string} sGroupName  new value for property <code>groupName</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButton#setGroupName
 * @function
 */


/**
 * Getter for property <code>key</code>.
 * Can be used for subsequent actions
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>key</code>
 * @public
 * @name sap.ui.commons.RadioButton#getKey
 * @function
 */

/**
 * Setter for property <code>key</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButton#setKey
 * @function
 */


/**
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.RadioButton#getAriaDescribedBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButton#addAriaDescribedBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * @name sap.ui.commons.RadioButton#removeAriaDescribedBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.RadioButton#removeAllAriaDescribedBy
 * @function
 */

	
/**
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.RadioButton#getAriaLabelledBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButton#addAriaLabelledBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * @name sap.ui.commons.RadioButton#removeAriaLabelledBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.RadioButton#removeAllAriaLabelledBy
 * @function
 */

	
/**
 * Event is triggered when the user makes a change on the radio button. 
 *
 * @name sap.ui.commons.RadioButton#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.commons.RadioButton</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.RadioButton</code>.<br/> itself. 
 *  
 * Event is triggered when the user makes a change on the radio button. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.RadioButton</code>.<br/> itself.
 *
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButton#attachSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.commons.RadioButton</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RadioButton#detachSelect
 * @function
 */

/**
 * Fire event select to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RadioButton} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.RadioButton#fireSelect
 * @function
 */


// Start of sap\ui\commons\RadioButton.js
/**
 * Event handler called when the radio button is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RadioButton.prototype.onclick = function(oEvent) {

	if(this.getEnabled() && oEvent.target.id == (this.getId()+"-RB")){
		this.focus();
	}

	if(!!sap.ui.Device.browser.internet_explorer && (/*!this.getEditable() ||*/ !this.getEnabled())){ //According to CSN2581852 2012 a readonly CB should be in the tabchain 
		// in IE tabindex = -1 hides focus, so in readOnly case tabindex must be set to 0
		// as long as RadioButton is clicked on
		this.$().attr("tabindex", 0).toggleClass("sapUiRbFoc");
	}

	this.userSelect(oEvent);
};

/**
 * Event handler called when the space key is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RadioButton.prototype.onsapspace = function(oEvent) {

	if(this.getEnabled() && oEvent.target.id == (this.getId()+"-RB")){
		this.focus();
	}
	this.userSelect(oEvent);
};

/**
 * Event handler called focus is set on Radio button
 * Problem in HCB: Focus is set in IE8 to bullet, not to whole control
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RadioButton.prototype.onsaptabnext = function(oEvent) {

	if(!!sap.ui.Device.browser.internet_explorer){
		this.bTabPressed = true;
		var that = this;
		window.setTimeout(function(){that.bTabPressed = false;}, 100);
	}
};

/**
 * Event handler called when the radio button is focused
 * Problem in HCB: Focus is sometimes set in IE8 to bullet, not to whole control
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RadioButton.prototype.onfocusin = function(oEvent) {

	if(this.getEnabled() && oEvent.target.id == (this.getId()+"-RB")){
		if(this.bTabPressed){
			// this only occurs in IE in HCB mode
			var aFocusableElements = jQuery(":sapFocusable"),
				bFound = false;
			for(var i = 0; i < aFocusableElements.length; i++){
				if(bFound && aFocusableElements[i].parentNode != oEvent.target && aFocusableElements[i].tabIndex != "-1"){
					aFocusableElements[i].focus();
					oEvent.preventDefault();
					break;
				}
				if(oEvent.target == aFocusableElements[i]){
					bFound = true;
				}
			}
		}else{
			this.focus();
		}
	}
};

/**
 * Event handler called when the radio button is left
 * Problem in IE: Tabindex must be set back to -1
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RadioButton.prototype.onfocusout = function(oEvent) {

	if(!!sap.ui.Device.browser.internet_explorer && (/*!this.getEditable() ||*/ !this.getEnabled())){ //According to CSN2581852 2012 a readonly CB should be in the tabchain 
		// in IE tabindex = -1 hides focus, so in readOnly case tabindex must be set to 0
		// as long as RadioButton is clicked on
		this.$().attr("tabindex", -1).toggleClass("sapUiRbFoc");
	}

};
/**
 * This method is used internally only, whenever the user somehow selects the RadioButton.
 * It is responsible for event cancellation and for firing the select event.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RadioButton.prototype.userSelect = function(oEvent) {
//	oEvent.preventDefault();
	// the control should not stop browser event propagation
	// Example: table control needs to catch and handle the event as well
	//oEvent.stopPropagation();

	if (this.getEnabled() && this.getEditable()) {
		var selected = this.getSelected();
		if (!selected) {
			this.setSelected(true);
			this.fireSelect({/* no parameters */});
		}
	}else{
		// readOnly or disabled -> don't allow browser to switch RadioButton on
		oEvent.preventDefault();
	}
};

// #############################################################################
// Overwritten methods that are also generated in RadioButton.API.js
// #############################################################################

/*
 * Overwrite the definition from RadioButton.API.js
 */
sap.ui.commons.RadioButton.prototype.setSelected = function(bSelected) {

	var bSelectedOld = this.getSelected();

	this.setProperty("selected", bSelected, true); // No re-rendering
	bSelected = this.getSelected();

	if (bSelected) { // If this radio button is selected, explicitly deselect the other radio buttons of the same group
		if (this.getGroupName() && (this.getGroupName() != "")) { // Do it only if groupName is set
			// TODO: Add control references to some static list when they are constructed, in order to avoid searching every time
			var others = document.getElementsByName(this.getGroupName());
			for (var i = 0; i < others.length; i++) {
				var other = others[i];
				// Recommendation is that the HTML radio button has an ID ending with "-RB"
				if (other.id && (other.id.length > 3) && (other.id.substr(other.id.length-3) == "-RB")) {
					// The SAPUI5 control is known by an ID without the "-RB" suffix
					var oControl = sap.ui.getCore().getElementById(other.id.substr(0, other.id.length-3));
					if (oControl instanceof sap.ui.commons.RadioButton && (oControl != this)) {
						oControl.setSelected(false);
					}
				}
			}
		}
	}
	if ((bSelectedOld != bSelected) && this.getDomRef() && this.getRenderer().setSelected){
		this.getRenderer().setSelected(this, bSelected);
	}

	return this;
};

sap.ui.commons.RadioButton.prototype.getTooltipDomRefs = function() {
	return this.$().children();
};