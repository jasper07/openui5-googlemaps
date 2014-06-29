/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.layout.form.Form.
jQuery.sap.declare("sap.ui.layout.form.Form");
jQuery.sap.require("sap.ui.layout.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new form/Form.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEditable editable} : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFormContainers formContainers} <strong>(default aggregation)</strong> : sap.ui.layout.form.FormContainer[]</li>
 * <li>{@link #getTitle title} : sap.ui.core.Title|string</li>
 * <li>{@link #getLayout layout} : sap.ui.layout.form.FormLayout</li></ul>
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
 * Form control.
 * Holder for form control to be rendered in a specific form layout.
 * A Form supports VariantLayoutData for it's content to allow a simple switching of Layouts.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16.0
 * @name sap.ui.layout.form.Form
 */
sap.ui.core.Control.extend("sap.ui.layout.form.Form", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.layout",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"visible" : {type : "boolean", group : "Misc", defaultValue : true},
		"editable" : {type : "boolean", group : "Misc", defaultValue : null}
	},
	defaultAggregation : "formContainers",
	aggregations : {
    	"formContainers" : {type : "sap.ui.layout.form.FormContainer", multiple : true, singularName : "formContainer"}, 
    	"title" : {type : "sap.ui.core.Title", altTypes : ["string"], multiple : false}, 
    	"layout" : {type : "sap.ui.layout.form.FormLayout", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.layout.form.Form with name <code>sClassName</code> 
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
 * @name sap.ui.layout.form.Form.extend
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Width of the form.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.layout.form.Form#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.Form#setWidth
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible Forms are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.layout.form.Form#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.Form#setVisible
 * @function
 */


/**
 * Getter for property <code>editable</code>.
 * Applies a device and theme specific line-height to the form elements if the form has editable content.
 * In this case all (not only the editable) rows of the form will get the line height.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @since 1.20.0
 * @name sap.ui.layout.form.Form#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * @since 1.20.0
 * @name sap.ui.layout.form.Form#setEditable
 * @function
 */


/**
 * Getter for aggregation <code>formContainers</code>.<br/>
 * FormContainers with the content of the form.
 * 
 * <strong>Note</strong>: this is the default aggregation for form/Form.
 * @return {sap.ui.layout.form.FormContainer[]}
 * @public
 * @name sap.ui.layout.form.Form#getFormContainers
 * @function
 */


/**
 * Inserts a formContainer into the aggregation named <code>formContainers</code>.
 *
 * @param {sap.ui.layout.form.FormContainer}
 *          oFormContainer the formContainer to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the formContainer should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the formContainer is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the formContainer is inserted at 
 *             the last position        
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.Form#insertFormContainer
 * @function
 */

/**
 * Adds some formContainer <code>oFormContainer</code> 
 * to the aggregation named <code>formContainers</code>.
 *
 * @param {sap.ui.layout.form.FormContainer}
 *            oFormContainer the formContainer to add; if empty, nothing is inserted
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.Form#addFormContainer
 * @function
 */

/**
 * Removes an formContainer from the aggregation named <code>formContainers</code>.
 *
 * @param {int | string | sap.ui.layout.form.FormContainer} vFormContainer the formContainer to remove or its index or id
 * @return {sap.ui.layout.form.FormContainer} the removed formContainer or null
 * @public
 * @name sap.ui.layout.form.Form#removeFormContainer
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>formContainers</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.layout.form.FormContainer[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.layout.form.Form#removeAllFormContainers
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.layout.form.FormContainer</code> in the aggregation named <code>formContainers</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.layout.form.FormContainer}
 *            oFormContainer the formContainer whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.layout.form.Form#indexOfFormContainer
 * @function
 */
	

/**
 * Destroys all the formContainers in the aggregation 
 * named <code>formContainers</code>.
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.Form#destroyFormContainers
 * @function
 */


/**
 * Getter for aggregation <code>title</code>.<br/>
 * Title element of the Form. Can either be a Label object, or a simple string.
 * 
 * @return {sap.ui.core.Title|string}
 * @public
 * @name sap.ui.layout.form.Form#getTitle
 * @function
 */


/**
 * Setter for the aggregated <code>title</code>.
 * @param {sap.ui.core.Title|string} oTitle
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.Form#setTitle
 * @function
 */
	

/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.Form#destroyTitle
 * @function
 */


/**
 * Getter for aggregation <code>layout</code>.<br/>
 * Layout of the form.
 * 
 * @return {sap.ui.layout.form.FormLayout}
 * @public
 * @name sap.ui.layout.form.Form#getLayout
 * @function
 */


/**
 * Setter for the aggregated <code>layout</code>.
 * @param {sap.ui.layout.form.FormLayout} oLayout
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.Form#setLayout
 * @function
 */
	

/**
 * Destroys the layout in the aggregation 
 * named <code>layout</code>.
 * @return {sap.ui.layout.form.Form} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.Form#destroyLayout
 * @function
 */


// Start of sap\ui\layout\form\Form.js
/**
 * This file defines behavior for the control,
 */

(function() {

//	sap.ui.commons.Form.prototype.init = function(){
//	// do something for initialization...
//	};

	sap.ui.layout.form.Form.prototype.toggleContainerExpanded = function(oContainer){

		var oLayout = this.getLayout();
		if (oLayout) {
			oLayout.toggleContainerExpanded(oContainer);
		}

	};

	/*
	 * If onAfterRendering of a field is processed the layout might need to change it.
	 */
	sap.ui.layout.form.Form.prototype.contentOnAfterRendering = function(oFormElement, oControl){

		// call function of the layout
		var oLayout = this.getLayout();
		if (oLayout && oLayout.contentOnAfterRendering) {
			oLayout.contentOnAfterRendering( oFormElement, oControl);
		}

	};

	/*
	 * If LayoutData changed on control this may need changes on the layout. So bubble to the Layout
	 */
	sap.ui.layout.form.Form.prototype.onLayoutDataChange = function(oEvent){

		// call function of the layout
		var oLayout = this.getLayout();
		if (oLayout && oLayout.onLayoutDataChange) {
			oLayout.onLayoutDataChange(oEvent);
		}

	};

	sap.ui.layout.form.Form.prototype.setEditable = function(bEditable) {

		var bOldEditable = this.getEditable();
		this.setProperty("editable", bEditable, true);

		if (bEditable != bOldEditable && this.getDomRef()) {
			if (bEditable) {
				this.$().addClass("sapUiFormEdit").addClass("sapUiFormEdit-CTX");
			}else{
				this.$().removeClass("sapUiFormEdit").removeClass("sapUiFormEdit-CTX");
			}
		}

	};

}());