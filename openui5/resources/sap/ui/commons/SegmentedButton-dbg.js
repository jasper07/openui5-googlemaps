/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.SegmentedButton.
jQuery.sap.declare("sap.ui.commons.SegmentedButton");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new SegmentedButton.
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
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getButtons buttons} : sap.ui.commons.Button[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedButton selectedButton} : string | sap.ui.commons.Button</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.SegmentedButton#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The SegmentedButton provides a group of multiple buttons. Only one button can be active. The behaviour is more ore less like a radio button group.
 * @extends sap.ui.core.Control
 * @implements sap.ui.commons.ToolbarItem
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.SegmentedButton
 */
sap.ui.core.Control.extend("sap.ui.commons.SegmentedButton", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.ui.commons.ToolbarItem"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"enabled" : {type : "boolean", group : "Misc", defaultValue : true},
		"visible" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	aggregations : {
    	"buttons" : {type : "sap.ui.commons.Button", multiple : true, singularName : "button"}
	},
	associations : {
		"selectedButton" : {type : "sap.ui.commons.Button", multiple : false}
	},
	events : {
		"select" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.SegmentedButton with name <code>sClassName</code> 
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
 * @name sap.ui.commons.SegmentedButton.extend
 * @function
 */

sap.ui.commons.SegmentedButton.M_EVENTS = {'select':'select'};


/**
 * Getter for property <code>enabled</code>.
 * enabled
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.commons.SegmentedButton#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SegmentedButton#setEnabled
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * hide/show all Buttons: An invisible SegmentedButton is not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.SegmentedButton#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SegmentedButton#setVisible
 * @function
 */


/**
 * Getter for aggregation <code>buttons</code>.<br/>
 * Buttons
 * 
 * @return {sap.ui.commons.Button[]}
 * @public
 * @name sap.ui.commons.SegmentedButton#getButtons
 * @function
 */


/**
 * Inserts a button into the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.commons.Button}
 *          oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the button should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the button is inserted at 
 *             the last position        
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SegmentedButton#insertButton
 * @function
 */

/**
 * Adds some button <code>oButton</code> 
 * to the aggregation named <code>buttons</code>.
 *
 * @param {sap.ui.commons.Button}
 *            oButton the button to add; if empty, nothing is inserted
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SegmentedButton#addButton
 * @function
 */

/**
 * Removes an button from the aggregation named <code>buttons</code>.
 *
 * @param {int | string | sap.ui.commons.Button} vButton the button to remove or its index or id
 * @return {sap.ui.commons.Button} the removed button or null
 * @public
 * @name sap.ui.commons.SegmentedButton#removeButton
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>buttons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.Button[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.SegmentedButton#removeAllButtons
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.Button</code> in the aggregation named <code>buttons</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.Button}
 *            oButton the button whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.SegmentedButton#indexOfButton
 * @function
 */
	

/**
 * Destroys all the buttons in the aggregation 
 * named <code>buttons</code>.
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SegmentedButton#destroyButtons
 * @function
 */


/**
 * Selected Button
 *
 * @return {string} Id of the element which is the current target of the <code>selectedButton</code> association, or null
 * @public
 * @name sap.ui.commons.SegmentedButton#getSelectedButton
 * @function
 */

/**
 * Selected Button
 *
 * @param {string | sap.ui.commons.Button} vSelectedButton 
 *    Id of an element which becomes the new target of this <code>selectedButton</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SegmentedButton#setSelectedButton
 * @function
 */


	
/**
 * Event fired when button selected 
 *
 * @name sap.ui.commons.SegmentedButton#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.selectedButtonId Id of selected ToggleButton
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.commons.SegmentedButton</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.SegmentedButton</code>.<br/> itself. 
 *  
 * Event fired when button selected 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.SegmentedButton</code>.<br/> itself.
 *
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SegmentedButton#attachSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.commons.SegmentedButton</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.SegmentedButton#detachSelect
 * @function
 */

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedButtonId' of type <code>string</code> Id of selected ToggleButton</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.SegmentedButton} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.SegmentedButton#fireSelect
 * @function
 */


// Start of sap\ui\commons\SegmentedButton.js
/* This file defines behavior for the SegmentedButton control */ 

jQuery.sap.require("sap.ui.core.delegate.ItemNavigation"); 

/**
 * Initialization hook for the SegmentedButton.
 * 
 * @private
 */
sap.ui.commons.SegmentedButton.prototype.init = function() {
	if (!this._oItemNavigation) {
		this._oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
		this._oItemNavigation.setCycling(true);
		this.addDelegate(this._oItemNavigation);
	}
	this._oButtonDelegate = {oSegmentedButton: this, onAfterRendering: this._buttonOnAfterRendering};
};

sap.ui.commons.SegmentedButton.prototype.exit = function() {

	if (this._oItemNavigation) {
		this.removeDelegate(this._oItemNavigation);
		this._oItemNavigation.destroy();
		delete this._oItemNavigation;
	}

};

/**
 * AfterRendering hook for the SegmentedButton. Create ItemNavigation here. 
 *
 * @private
 */
sap.ui.commons.SegmentedButton.prototype.onAfterRendering = function() {
	this._setItemNavigation(true);

};
/**
 * @private
 */
sap.ui.commons.SegmentedButton.prototype._buttonSelected = function(oEvent) {
	var oOldButtonSelection = sap.ui.getCore().byId(this.getSelectedButton()),
		oNewButtonSelection = oEvent.getSource();

	if (oNewButtonSelection !== oOldButtonSelection) {
		this.setSelectedButton(oNewButtonSelection);
		this.fireSelect({selectedButtonId:oNewButtonSelection.getId()});
	}
};
/**
 * @private
 */
sap.ui.commons.SegmentedButton.prototype._setItemNavigation = function(bAddDelegate) {
	var oButton,
		aButtons,
		aItemDomRefs = [];

	if (this.getDomRef()) {
		this._oItemNavigation.setRootDomRef(this.getDomRef("radiogroup"));
		aButtons = this.getButtons();
		for ( var i = 0; i < aButtons.length; i++) {
			oButton = aButtons[i];
			aItemDomRefs.push(oButton.getDomRef());
			this._setAriaInfo(oButton, i+1);
			if (bAddDelegate) {
				// remove delgate if it already exists
				oButton.removeDelegate(this._oButtonDelegate);
				oButton.addDelegate(this._oButtonDelegate);
			}
		}
		this._oItemNavigation.setItemDomRefs(aItemDomRefs);
	}
};
/**
 * @private
 */
sap.ui.commons.SegmentedButton.prototype._setAriaInfo = function(oButton, i) {
	var $button = jQuery(oButton.getDomRef()),
		length = this.getButtons().length;

	$button.attr("aria-posinset",i);
	$button.attr("aria-setsize",length);
	$button.attr("role", "radio");
	if (oButton.getId() === this.getSelectedButton()) {
		$button.attr("aria-checked", "true");
		$button.removeAttr("aria-describedby");
	} else {
		$button.removeAttr("aria-checked");
		$button.attr("aria-describedby",this.getId()+"-label");
	}
};

/**
 * OnAfterRendering of Button
 *
 * @private
*/
sap.ui.commons.SegmentedButton.prototype._buttonOnAfterRendering = function() {

	this.oSegmentedButton._setItemNavigation();

};

/**
 * Rerendering of the Buttons
 *
 * @protected
*/
sap.ui.commons.SegmentedButton.prototype._rerenderButtons = function() {
	var $content = this.$();
	if ($content.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		sap.ui.commons.SegmentedButtonRenderer.renderButtons(rm, this);
		rm.flush($content[0]);
		rm.destroy();
	}
};

/* Override API methods */
sap.ui.commons.SegmentedButton.prototype.addButton = function(oButton) {
	this.addAggregation("buttons",oButton, true);
	oButton.attachPress(this._buttonSelected, this);
	this._rerenderButtons();
	return this;
};
sap.ui.commons.SegmentedButton.prototype.insertButton = function(oButton, iIndex) {
	this.insertAggregation("buttons",oButton, iIndex, true);
	oButton.attachPress(this._buttonSelected, this);
	this._rerenderButtons();
	return this;
};
sap.ui.commons.SegmentedButton.prototype.removeButton = function(oButton) {
	var result = this.removeAggregation("buttons",oButton, true);
	if (result) {
		result.detachPress(this._buttonSelected, this);
		result.removeDelegate(this._oButtonDelegate);
		this._rerenderButtons();
	}
	return result;
};
sap.ui.commons.SegmentedButton.prototype.removeAllButtons = function() {
	var result = this.removeAllAggregation("buttons", true);
	jQuery.each(result, function(i, oButton) {
		oButton.detachPress(this._buttonSelected, this);
		oButton.removeDelegate(this._oButtonDelegate);
	});
	this._rerenderButtons();
	return result;
};
sap.ui.commons.SegmentedButton.prototype.setSelectedButton = function(vButton) {
	var oButton, oButtonOld = sap.ui.getCore().byId(this.getSelectedButton());
	this.setAssociation("selectedButton", vButton, true); 
	oButton = sap.ui.getCore().byId(this.getSelectedButton());
	
	// Make sure Aria info is correct after changing button state
	this._setItemNavigation()
	
	var aButtons = this.getButtons();
	for (var i = 0; i < aButtons.length; i++) {
		if (aButtons[i] === oButton) {
			this._oItemNavigation.setFocusedIndex(i);
			break;
		}
	}
	if (oButtonOld) {
		oButtonOld.removeStyleClass("sapUiSegButtonSelected");
		oButtonOld.$().blur();
	}
	if (oButtonOld && oButtonOld._icon) {
		oButtonOld.setIcon(oButtonOld._icon);
		oButtonOld._icon = null;
	}
	if(oButton) {
		if (oButton.getIconHovered()) {
			oButton._icon = oButton.getIcon();
			oButton.setIcon(oButton.getIconHovered());
		}
		oButton.addStyleClass("sapUiSegButtonSelected");
	}
};

sap.ui.commons.SegmentedButton.prototype.setEnabled = function(bEnabled) {
	jQuery.each(this.getButtons(),function(i,oButton) {
		oButton.setEnabled(bEnabled);
	});
	// remove itemNavigation if buttons are disabled
	if (this._oItemNavigation && !bEnabled) {
		this.removeDelegate(this._oItemNavigation);
	} else {
		this.addDelegate(this._oItemNavigation);
	}
	this.setProperty("enabled",bEnabled);
};

/*
 * before cloning buttons deregister events and register it after cloning again.
 */
sap.ui.commons.SegmentedButton.prototype.clone = function(sIdSuffix, aLocalIds) {

	var aButtons = this.getButtons();
	for ( var i = 0; i < aButtons.length; i++) {
		var oButton = aButtons[i];
		oButton.detachPress(this._buttonSelected, this);
	}

	var oClone = sap.ui.core.Element.prototype.clone.apply(this, arguments);

	for ( var i = 0; i < aButtons.length; i++) {
		var oButton = aButtons[i];
		oButton.attachPress(this._buttonSelected, this);
	}

	return oClone;
};

sap.ui.commons.SegmentedButton.prototype.getFocusDomRef = function() {

	return this.getDomRef("radiogroup") || null;

};