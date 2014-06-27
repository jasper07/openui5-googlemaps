/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.layout.form.FormContainer.
jQuery.sap.declare("sap.ui.layout.form.FormContainer");
jQuery.sap.require("sap.ui.layout.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new form/FormContainer.
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
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * <li>{@link #getExpandable expandable} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFormElements formElements} <strong>(default aggregation)</strong> : sap.ui.layout.form.FormElement[]</li>
 * <li>{@link #getTitle title} : sap.ui.core.Title|string</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Used to group form elements.
 * Can contain other form elements or containers.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16.0
 * @name sap.ui.layout.form.FormContainer
 */
sap.ui.core.Element.extend("sap.ui.layout.form.FormContainer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.layout",
	properties : {
		"expanded" : {type : "boolean", group : "Misc", defaultValue : true},
		"expandable" : {type : "boolean", group : "Misc", defaultValue : false},
		"visible" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	defaultAggregation : "formElements",
	aggregations : {
    	"formElements" : {type : "sap.ui.layout.form.FormElement", multiple : true, singularName : "formElement"}, 
    	"title" : {type : "sap.ui.core.Title", altTypes : ["string"], multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.layout.form.FormContainer with name <code>sClassName</code> 
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
 * @name sap.ui.layout.form.FormContainer.extend
 * @function
 */


/**
 * Getter for property <code>expanded</code>.
 * Group is expanded.
 * This property works only if the Container is expandable.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * @name sap.ui.layout.form.FormContainer#getExpanded
 * @function
 */

/**
 * Setter for property <code>expanded</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.ui.layout.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.FormContainer#setExpanded
 * @function
 */


/**
 * Getter for property <code>expandable</code>.
 * Defines if the Container is expandable.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>expandable</code>
 * @public
 * @name sap.ui.layout.form.FormContainer#getExpandable
 * @function
 */

/**
 * Setter for property <code>expandable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bExpandable  new value for property <code>expandable</code>
 * @return {sap.ui.layout.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.FormContainer#setExpandable
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible FormContainers are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.layout.form.FormContainer#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.layout.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.FormContainer#setVisible
 * @function
 */


/**
 * Getter for aggregation <code>formElements</code>.<br/>
 * Elements of the FormContainer.
 * 
 * <strong>Note</strong>: this is the default aggregation for form/FormContainer.
 * @return {sap.ui.layout.form.FormElement[]}
 * @public
 * @name sap.ui.layout.form.FormContainer#getFormElements
 * @function
 */


/**
 * Inserts a formElement into the aggregation named <code>formElements</code>.
 *
 * @param {sap.ui.layout.form.FormElement}
 *          oFormElement the formElement to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the formElement should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the formElement is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the formElement is inserted at 
 *             the last position        
 * @return {sap.ui.layout.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.FormContainer#insertFormElement
 * @function
 */

/**
 * Adds some formElement <code>oFormElement</code> 
 * to the aggregation named <code>formElements</code>.
 *
 * @param {sap.ui.layout.form.FormElement}
 *            oFormElement the formElement to add; if empty, nothing is inserted
 * @return {sap.ui.layout.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.FormContainer#addFormElement
 * @function
 */

/**
 * Removes an formElement from the aggregation named <code>formElements</code>.
 *
 * @param {int | string | sap.ui.layout.form.FormElement} vFormElement the formElement to remove or its index or id
 * @return {sap.ui.layout.form.FormElement} the removed formElement or null
 * @public
 * @name sap.ui.layout.form.FormContainer#removeFormElement
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>formElements</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.layout.form.FormElement[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.layout.form.FormContainer#removeAllFormElements
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.layout.form.FormElement</code> in the aggregation named <code>formElements</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.layout.form.FormElement}
 *            oFormElement the formElement whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.layout.form.FormContainer#indexOfFormElement
 * @function
 */
	

/**
 * Destroys all the formElements in the aggregation 
 * named <code>formElements</code>.
 * @return {sap.ui.layout.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.FormContainer#destroyFormElements
 * @function
 */


/**
 * Getter for aggregation <code>title</code>.<br/>
 * Title element of the Container. Can either be a Label object, or a simple string.
 * 
 * @return {sap.ui.core.Title|string}
 * @public
 * @name sap.ui.layout.form.FormContainer#getTitle
 * @function
 */


/**
 * Setter for the aggregated <code>title</code>.
 * @param {sap.ui.core.Title|string} oTitle
 * @return {sap.ui.layout.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.FormContainer#setTitle
 * @function
 */
	

/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.ui.layout.form.FormContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.FormContainer#destroyTitle
 * @function
 */


// Start of sap\ui\layout\form\FormContainer.js
/**
 * This file defines behavior for the control,
 */

jQuery.sap.require("sap.ui.core.EnabledPropagator");
jQuery.sap.require("sap.ui.core.theming.Parameters");

//sap.ui.core.EnabledPropagator.call(sap.ui.layout.form.FormContainer.prototype);

(function() {

	sap.ui.layout.form.FormContainer.prototype.init = function(){

		this._rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.layout");

	};

	sap.ui.layout.form.FormContainer.prototype.exit = function(){

		if (this._oExpandButton) {
			this._oExpandButton.destroy();
			delete this._oExpandButton;
		}
		this._rb = undefined;

	};

	sap.ui.layout.form.FormContainer.prototype.setExpandable = function(bExpandable){

		this.setProperty("expandable", bExpandable);

		if (bExpandable) {
			var that = this;
			if (!this._oExpandButton) {
				this._oExpandButton = sap.ui.layout.form.FormHelper.createButton(this.getId()+"--Exp", handleExpButtonPress, that);
				this._oExpandButton.setParent(this);
			}
			_setExpanderIcon(that);
		}

	};

	sap.ui.layout.form.FormContainer.prototype.setExpanded = function(bExpanded){

		this.setProperty("expanded", bExpanded, true); // no automatic rerendering

		var that = this;
		_setExpanderIcon(that);

		var oForm = this.getParent();
		if (oForm && oForm.toggleContainerExpanded) {
			oForm.toggleContainerExpanded(that);
		}

	};

	/*
	 * If onAfterRendering of a field is processed the Form (layout) might need to change it.
	 */
	sap.ui.layout.form.FormContainer.prototype.contentOnAfterRendering = function(oFormElement, oControl){

		// call function of parent (if assigned)
		var oParent = this.getParent();
		if (oParent && oParent.contentOnAfterRendering) {
			oParent.contentOnAfterRendering( oFormElement, oControl);
		}

	};

	/*
	 * If LayoutData changed on control this may need changes on the layout. So bubble to the form
	 */
	sap.ui.layout.form.FormContainer.prototype.onLayoutDataChange = function(oEvent){

		// call function of parent (if assigned)
		var oParent = this.getParent();
		if (oParent && oParent.onLayoutDataChange) {
			oParent.onLayoutDataChange(oEvent);
		}

	};

	function _setExpanderIcon(oContainer){

		if (!oContainer._oExpandButton) {
			return;
		}

		var sIcon, sIconHovered, sText, sTooltip;

		if (oContainer.getExpanded()) {
			sIcon = sap.ui.core.theming.Parameters.get('sapUiFormContainerColImageURL');
			sIconHovered = sap.ui.core.theming.Parameters.get('sapUiFormContainerColImageDownURL');
			sText = "-";
			sTooltip = oContainer._rb.getText("FORM_COLLAPSE");
		} else {
			sIcon = sap.ui.core.theming.Parameters.get('sapUiFormContainerExpImageURL');
			sIconHovered = sap.ui.core.theming.Parameters.get('sapUiFormContainerExpImageDownURL');
			sText = "+";
			sTooltip = oContainer._rb.getText("FORM_EXPAND");
		}

		if (sIcon) {
			sIcon = jQuery.sap.getModulePath("sap.ui.layout", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + sIcon;
			sText = "";
		}
		if (sIconHovered) {
			sIconHovered = jQuery.sap.getModulePath("sap.ui.layout", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + sIconHovered;
		}
		sap.ui.layout.form.FormHelper.setButtonContent(oContainer._oExpandButton, sText, sTooltip, sIcon, sIconHovered);

	};

	function handleExpButtonPress(oEvent){

		this.setExpanded(!this.getExpanded());

	};

}());