/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.tmpl.DOMElement.
sap.ui.define(['sap/ui/core/library','sap/ui/core/Control'], function() {
	"use strict";


/**
 * Constructor for a new tmpl/DOMElement.
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
 * <li>{@link #getTag tag} : string (default: 'span')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAttributes attributes} : sap.ui.core.tmpl.DOMAttribute[]</li>
 * <li>{@link #getElements elements} : sap.ui.core.tmpl.DOMElement[]</li></ul>
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
 * Represents a DOM element. It allows to use databinding for the properties and nested DOM attributes.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @experimental Since version 1.15. 
 * The templating might be changed in future versions.
 * @name sap.ui.core.tmpl.DOMElement
 */
sap.ui.core.Control.extend("sap.ui.core.tmpl.DOMElement", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"attr", "removeAttr"
	],

	// ---- control specific ----
	library : "sap.ui.core",
	properties : {
		"text" : {type : "string", group : "Appearance", defaultValue : null},
		"tag" : {type : "string", group : "Behavior", defaultValue : 'span'}
	},
	aggregations : {
    	"attributes" : {type : "sap.ui.core.tmpl.DOMAttribute", multiple : true, singularName : "attribute"}, 
    	"elements" : {type : "sap.ui.core.tmpl.DOMElement", multiple : true, singularName : "element"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.core.tmpl.DOMElement with name <code>sClassName</code> 
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
 * @name sap.ui.core.tmpl.DOMElement.extend
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * The text content of the DOM element
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.core.tmpl.DOMElement#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.core.tmpl.DOMElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.tmpl.DOMElement#setText
 * @function
 */


/**
 * Getter for property <code>tag</code>.
 * The HTML-tag of the DOM element which contains the text
 *
 * Default value is <code>span</code>
 *
 * @return {string} the value of property <code>tag</code>
 * @public
 * @name sap.ui.core.tmpl.DOMElement#getTag
 * @function
 */

/**
 * Setter for property <code>tag</code>.
 *
 * Default value is <code>span</code> 
 *
 * @param {string} sTag  new value for property <code>tag</code>
 * @return {sap.ui.core.tmpl.DOMElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.tmpl.DOMElement#setTag
 * @function
 */


/**
 * Getter for aggregation <code>attributes</code>.<br/>
 * DOM attributes which are rendered as part of the DOM element and bindable
 * 
 * @return {sap.ui.core.tmpl.DOMAttribute[]}
 * @public
 * @name sap.ui.core.tmpl.DOMElement#getAttributes
 * @function
 */


/**
 * Inserts a attribute into the aggregation named <code>attributes</code>.
 *
 * @param {sap.ui.core.tmpl.DOMAttribute}
 *          oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the attribute should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the attribute is inserted at 
 *             the last position        
 * @return {sap.ui.core.tmpl.DOMElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.tmpl.DOMElement#insertAttribute
 * @function
 */

/**
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 *
 * @param {sap.ui.core.tmpl.DOMAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.ui.core.tmpl.DOMElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.tmpl.DOMElement#addAttribute
 * @function
 */

/**
 * Removes an attribute from the aggregation named <code>attributes</code>.
 *
 * @param {int | string | sap.ui.core.tmpl.DOMAttribute} vAttribute the attribute to remove or its index or id
 * @return {sap.ui.core.tmpl.DOMAttribute} the removed attribute or null
 * @public
 * @name sap.ui.core.tmpl.DOMElement#removeAttribute
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.tmpl.DOMAttribute[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.core.tmpl.DOMElement#removeAllAttributes
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.tmpl.DOMAttribute</code> in the aggregation named <code>attributes</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.tmpl.DOMAttribute}
 *            oAttribute the attribute whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.core.tmpl.DOMElement#indexOfAttribute
 * @function
 */
	

/**
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.ui.core.tmpl.DOMElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.tmpl.DOMElement#destroyAttributes
 * @function
 */


/**
 * Getter for aggregation <code>elements</code>.<br/>
 * Nested DOM elements to support nested bindable structures
 * 
 * @return {sap.ui.core.tmpl.DOMElement[]}
 * @public
 * @name sap.ui.core.tmpl.DOMElement#getElements
 * @function
 */


/**
 * Inserts a element into the aggregation named <code>elements</code>.
 *
 * @param {sap.ui.core.tmpl.DOMElement}
 *          oElement the element to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the element should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the element is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the element is inserted at 
 *             the last position        
 * @return {sap.ui.core.tmpl.DOMElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.tmpl.DOMElement#insertElement
 * @function
 */

/**
 * Adds some element <code>oElement</code> 
 * to the aggregation named <code>elements</code>.
 *
 * @param {sap.ui.core.tmpl.DOMElement}
 *            oElement the element to add; if empty, nothing is inserted
 * @return {sap.ui.core.tmpl.DOMElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.tmpl.DOMElement#addElement
 * @function
 */

/**
 * Removes an element from the aggregation named <code>elements</code>.
 *
 * @param {int | string | sap.ui.core.tmpl.DOMElement} vElement the element to remove or its index or id
 * @return {sap.ui.core.tmpl.DOMElement} the removed element or null
 * @public
 * @name sap.ui.core.tmpl.DOMElement#removeElement
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>elements</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.tmpl.DOMElement[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.core.tmpl.DOMElement#removeAllElements
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.tmpl.DOMElement</code> in the aggregation named <code>elements</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.tmpl.DOMElement}
 *            oElement the element whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.core.tmpl.DOMElement#indexOfElement
 * @function
 */
	

/**
 * Destroys all the elements in the aggregation 
 * named <code>elements</code>.
 * @return {sap.ui.core.tmpl.DOMElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.tmpl.DOMElement#destroyElements
 * @function
 */


/**
 * Returns the value of a DOM attribute if available or undefined if the DOM attribute is not available when using this method with the parameter name only. When using the method with the parameter name and value the method acts as a setter and sets the value of a DOM attribute. Int this case the return value is the reference to this DOM element to support method chaining. If you pass null as value of the attribute the attribute will be removed.
 *
 * @name sap.ui.core.tmpl.DOMElement.prototype.attr
 * @function
 * @param {string} 
 *         sName
 *         The name of the DOM attribute.
 * @param {string} 
 *         sValue
 *         The value of the DOM attribute. If the value is undefined the DOM attribute will be removed.

 * @type string
 * @public
 */


/**
 * Removes the DOM attribute for the given name and returns the reference to this DOM element to support method chaining.
 *
 * @name sap.ui.core.tmpl.DOMElement.prototype.removeAttr
 * @function
 * @param {string} 
 *         sName
 *         The name of the DOM attribute.

 * @type sap.ui.core.tmpl.DOMElement
 * @public
 */


// Start of sap/ui/core/tmpl/DOMElement.js
// TODO: maybe this is something for the sap.ui.core itself - something more general for UI5!!

/*
 * cleanup of event handlers of input elements
 */
sap.ui.core.tmpl.DOMElement.prototype.applySettings = function(mSettings) {

	// apply the settings
	sap.ui.core.Control.prototype.applySettings.apply(this, arguments);

	// all unknown keys which value is a string will be added 
	// as attribute to the DOM element
	var that = this,
	    oMetadata = this.getMetadata(),
	    mJSONKeys = oMetadata.getJSONKeys();
	jQuery.each(mSettings, function(sKey, oValue) {
		if (sKey !== "id" && sKey !== "text" && !mJSONKeys[sKey] && typeof oValue === "string") {
			that.attr(sKey, oValue);
		}
	});
	
};

/*
 * cleanup of event handlers of input elements
 */
sap.ui.core.tmpl.DOMElement.prototype.exit = 
sap.ui.core.tmpl.DOMElement.prototype.onBeforeRendering = function() {
	var sTag = this.getTag().toLowerCase();
	if (sTag === "input" || sTag === "textarea" || sTag === "select") {
		this.$().off("change");
	}
};

/*
 * registers the event handlers for input elements
 */
sap.ui.core.tmpl.DOMElement.prototype.onAfterRendering = function() {
	var sTag = this.getTag().toLowerCase();
	if (sTag === "input" || sTag === "textarea" || sTag === "select") {
		this.$().on("change", jQuery.proxy(this.oninputchange, this));
	}
};

/**
 * Listens to the change event of the input elements and updates the properties.
 * @param {Event} oEvent the event object
 * @private
 */
sap.ui.core.tmpl.DOMElement.prototype.oninputchange = function(oEvent) {
	var sTag = this.getTag().toLowerCase();
	if (sTag === "input") {
		var sValue = this.$().val();
		jQuery.each(this.getAttributes(), function(iIndex, oAttribute) {
			if (oAttribute.getName().toLowerCase() === "value") {
				oAttribute.setValue(sValue);
			}
		});
	} else if (sTag === "textarea") {
		var sText = this.$().val();
		this.setText(sText);
	} else if (sTag === "select") {
		// TODO: how should we work with selects?
		var sText = "";
		this.$().find("select option:selected").each(function() {
			sText += jQuery(this).text() + " ";
		});
    this.setText(sText);
	}
};


/*
 * gets, sets or removes the attribute
 */
sap.ui.core.tmpl.DOMElement.prototype.attr = function(sKey, sValue) {

	// lookup the attribute (required for the setter and the getter)
	var aAttributes = this.getAttributes(),
	    oAttribute;
	jQuery.each(aAttributes, function(iIndex, oValue) {
		var sName = oValue.getName();
		if (sName.toLowerCase() === sKey) {
			oAttribute = oValue;
			return false;
		}
	});
	
	if (sValue === undefined) {
	
		// returns the found attribute
		return oAttribute && oAttribute.getValue();
		
	} else {
	
		// if we found the attribute in case of a null value, we remove it
		// and in case of a value we set the value
		if (oAttribute) {
			if (sValue === null) {
				this.removeAttribute(oAttribute);
			} else {
				oAttribute.setValue(sValue);
			}
		} else {
			// in case of a no attribute has been found we create and add
			// a new DOM attribute for the given key and value
			if (sValue !== null) {
				this.addAttribute(new sap.ui.core.tmpl.DOMAttribute({
					name: sKey,
					value: sValue
				}));
			}
		}
		
		// method chaining
		return this;
	
	}
	
}; 

/*
 * remove the attribute for the given name
 */
sap.ui.core.tmpl.DOMElement.prototype.removeAttr = function(sKey) {
	// remove the attribute
	this.attr(sKey, null);
	return this;
}; 


sap.ui.core.tmpl.DOMElement.prototype.setText = function(sText) {
	this.setProperty("text", sText, true); // no re-rendering!
	// do DOM modification to avoid re-rendering
	var $this = this.$();
	if ($this.length > 0) {
		var sTag = this.getTag().toLowerCase();
		if (sTag === "textarea") {
			$this.val(this.getProperty("text"));
		} else {
			$this.text(this.getProperty("text"));
		}
	}
};

	return sap.ui.core.tmpl.DOMElement;

}, /* bExport = */ true);
