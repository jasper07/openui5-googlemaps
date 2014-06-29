/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.layout.form.FormElement.
jQuery.sap.declare("sap.ui.layout.form.FormElement");
jQuery.sap.require("sap.ui.layout.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new form/FormElement.
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
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLabel label} : sap.ui.core.Label|string</li>
 * <li>{@link #getFields fields} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
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
 * A form element is a combination of one label and different controls associated to this label.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16.0
 * @name sap.ui.layout.form.FormElement
 */
sap.ui.core.Element.extend("sap.ui.layout.form.FormElement", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"getLabelControl"
	],

	// ---- control specific ----
	library : "sap.ui.layout",
	properties : {
		"visible" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	defaultAggregation : "fields",
	aggregations : {
    	"label" : {type : "sap.ui.core.Label", altTypes : ["string"], multiple : false}, 
    	"fields" : {type : "sap.ui.core.Control", multiple : true, singularName : "field"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.layout.form.FormElement with name <code>sClassName</code> 
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
 * @name sap.ui.layout.form.FormElement.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible FormElements are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.layout.form.FormElement#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.layout.form.FormElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.FormElement#setVisible
 * @function
 */


/**
 * Getter for aggregation <code>label</code>.<br/>
 * Label of the fields. Can either be a Label object, or a simple string.
 * 
 * @return {sap.ui.core.Label|string}
 * @public
 * @name sap.ui.layout.form.FormElement#getLabel
 * @function
 */


/**
 * Setter for the aggregated <code>label</code>.
 * @param {sap.ui.core.Label|string} oLabel
 * @return {sap.ui.layout.form.FormElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.FormElement#setLabel
 * @function
 */
	

/**
 * Destroys the label in the aggregation 
 * named <code>label</code>.
 * @return {sap.ui.layout.form.FormElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.FormElement#destroyLabel
 * @function
 */


/**
 * Getter for aggregation <code>fields</code>.<br/>
 * Formular controls.
 * 
 * <strong>Note</strong>: this is the default aggregation for form/FormElement.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.layout.form.FormElement#getFields
 * @function
 */


/**
 * Inserts a field into the aggregation named <code>fields</code>.
 *
 * @param {sap.ui.core.Control}
 *          oField the field to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the field should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the field is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the field is inserted at 
 *             the last position        
 * @return {sap.ui.layout.form.FormElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.FormElement#insertField
 * @function
 */

/**
 * Adds some field <code>oField</code> 
 * to the aggregation named <code>fields</code>.
 *
 * @param {sap.ui.core.Control}
 *            oField the field to add; if empty, nothing is inserted
 * @return {sap.ui.layout.form.FormElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.FormElement#addField
 * @function
 */

/**
 * Removes an field from the aggregation named <code>fields</code>.
 *
 * @param {int | string | sap.ui.core.Control} vField the field to remove or its index or id
 * @return {sap.ui.core.Control} the removed field or null
 * @public
 * @name sap.ui.layout.form.FormElement#removeField
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>fields</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.layout.form.FormElement#removeAllFields
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>fields</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oField the field whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.layout.form.FormElement#indexOfField
 * @function
 */
	

/**
 * Destroys all the fields in the aggregation 
 * named <code>fields</code>.
 * @return {sap.ui.layout.form.FormElement} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.FormElement#destroyFields
 * @function
 */


/**
 * Returns the Label Control, even if the Label is entered as Text.
 *
 * @name sap.ui.layout.form.FormElement.prototype.getLabelControl
 * @function

 * @type sap.ui.core.Label
 * @public
 */


// Start of sap\ui\layout\form\FormElement.js
/**
 * This file defines behavior for the control,
 */

jQuery.sap.require("sap.ui.core.EnabledPropagator");

// TODO deactivated until Element/Control has been clarified: sap.ui.core.EnabledPropagator.call(sap.ui.layout.form.FormElement.prototype);

(function() {

	sap.ui.layout.form.FormElement.prototype.init = function(){

		this._oFieldDelegate = {oElement: this, onAfterRendering: _fieldOnAfterRendering};

	};

	sap.ui.layout.form.FormElement.prototype.exit = function(){

		if (this._oLabel) {
			this._oLabel.destroy();
			delete this._oLabel;
		}

		this._oFieldDelegate = undefined;

	};

/*
 * sets the label for the FormElement. If it's only a string an internal label is created.
 * overwrite the isRequired and the getLabelForRendering functions with Form specific ones.
 */
	sap.ui.layout.form.FormElement.prototype.setLabel = function(vAny) {

		if (!this._oLabel) {
			var oOldLabel = this.getLabel();
			if (oOldLabel) {
				if (oOldLabel.isRequired) {
					oOldLabel.isRequired = oOldLabel._sapui_isRequired;
					oOldLabel._sapui_isRequired = undefined;
				}
				if (oOldLabel.getLabelForRendering) {
					oOldLabel.getLabelForRendering = oOldLabel._sapui_getLabelForRendering;
					oOldLabel._sapui_getLabelForRendering = undefined;
				}
			}
		}

		this.setAggregation("label", vAny);
		var oLabel = vAny;
		if (typeof oLabel === "string") {
			if (!this._oLabel) {
				this._oLabel = sap.ui.layout.form.FormHelper.createLabel(oLabel);
				this._oLabel.setParent(this);
				if (oLabel.isRequired) {
					this._oLabel.isRequired = _labelIsRequired;
				}
				this._oLabel.getLabelForRendering = _getLabelForRendering;
			}else{
				this._oLabel.setText(oLabel);
			}
		} else {
			if (this._oLabel) {
				this._oLabel.destroy();
				delete this._oLabel;
			}
			if (!oLabel) return this; //set label is called with null if label is removed by ManagedObject.removeChild
			if (oLabel.isRequired) {
				oLabel._sapui_isRequired = oLabel.isRequired;
				oLabel.isRequired = _labelIsRequired;
			}
			if (oLabel.getLabelForRendering) {
				oLabel._sapui_getLabelForRendering = oLabel.getLabelForRendering;
				oLabel.getLabelForRendering = _getLabelForRendering;
			}
		}

		return this;

	};

	sap.ui.layout.form.FormElement.prototype.getLabelControl = function() {

		if (this._oLabel) {
			return this._oLabel;
		} else {
			return this.getLabel();
		}

	};

	sap.ui.layout.form.FormElement.prototype.addField = function(oField) {

		this.addAggregation("fields", oField);
		oField.addDelegate(this._oFieldDelegate);

		return this;

	};

	sap.ui.layout.form.FormElement.prototype.insertField = function(oField, iIndex) {

		this.insertAggregation("fields", oField, iIndex);
		oField.addDelegate(this._oFieldDelegate);

		return this;

	};

	sap.ui.layout.form.FormElement.prototype.removeField = function(oField) {

		var oRemovedField = this.removeAggregation("fields", oField);
		oRemovedField.removeDelegate(this._oFieldDelegate);

		return oRemovedField;

	};

	sap.ui.layout.form.FormElement.prototype.removeAllFields = function() {

		var aRemovedFields = this.removeAllAggregation("fields");

		for ( var i = 0; i < aRemovedFields.length; i++) {
			var oRemovedField = aRemovedFields[i];
			oRemovedField.removeDelegate(this._oFieldDelegate);
		}

		return aRemovedFields;

	};

	sap.ui.layout.form.FormElement.prototype.destroyFields = function() {

		var aFields = this.getFields();

		for ( var i = 0; i < aFields.length; i++) {
			var oField = aFields[i];
			oField.removeDelegate(this._oFieldDelegate);
		}

		this.destroyAggregation("fields");

		return this;

	};

	sap.ui.layout.form.FormElement.prototype.updateFields = function() {

		var aFields = this.getFields();

		for ( var i = 0; i < aFields.length; i++) {
			var oField = aFields[i];
			oField.removeDelegate(this._oFieldDelegate);
		}

		this.updateAggregation("fields");

		aFields = this.getFields();

		for ( var i = 0; i < aFields.length; i++) {
			var oField = aFields[i];
			oField.addDelegate(this._oFieldDelegate);
		}

		return this;

	};

	/*
	 * Enhance Aria properties of fields to set aria-labelledby to FormElements label if not set otherwise
	 * Set aria-describedby to the title of the container, but only for the first field in the container
	 * This function is called during rendering.
	 */
	sap.ui.layout.form.FormElement.prototype.enhanceAccessibilityState = function(oElement, mAriaProps) {

		var oLabel = this.getLabelControl();
		if (oLabel && oLabel != oElement) {
			if (!mAriaProps["labelledby"]) {
				mAriaProps["labelledby"] = oLabel.getId();
			}

			var oContainer = this.getParent();
			var aElements = oContainer.getFormElements();
			if (this == aElements[0]) {
				// it's the first Element
				var aControls = this.getFields();
				if (oElement == aControls[0]) {
					//it's the first field
					var oTitle = oContainer.getTitle();
					if (oTitle) {
						var sId = "";
						if (typeof oTitle == "string") {
							sId = oContainer.getId()+"--title";
						} else {
							sId = oTitle.getId();
						}
						var sDescribedBy = mAriaProps["describedby"];
						if (sDescribedBy) {
							sDescribedBy = sDescribedBy + " " + sId;
						} else {
							sDescribedBy = sId;
						}
						mAriaProps["describedby"] = sDescribedBy;
					}
				}
			}
		}

		return mAriaProps;

	};

	/*
	 * If LayoutData changed on control this may need changes on the layout. So bubble to the form
	 */
	sap.ui.layout.form.FormElement.prototype.onLayoutDataChange = function(oEvent){

		// call function of parent (if assigned)
		var oParent = this.getParent();
		if (oParent && oParent.onLayoutDataChange) {
			oParent.onLayoutDataChange(oEvent);
		}

	};

	// *** Private helper functions ***

	/*
	 * overwrite Labels isRequired function to check if one of the fields in the element is required,
	 * not only the one directly assigned.
	 */
	var _labelIsRequired = function(){

		var oFormElement = this.getParent();
		var aFields = oFormElement.getFields();

		for ( var i = 0; i < aFields.length; i++) {
			var oField = aFields[i];
			if (oField.getRequired && oField.getRequired() === true) {
				return true;
			}
		}

		return false;

	};

	/*
	 * overwrite Labels getLabelForRendering function to point always to the first field.
	 * But only if the application does not set a labelFor explicitly.
	 */
	var _getLabelForRendering = function(){

		if (this.getLabelFor()) {
			return this.getLabelFor();
		}else {
			var oFormElement = this.getParent();
			var aFields = oFormElement.getFields();
			if (aFields[0]) {
				return aFields[0].getId();
			}
		}

	};

	/*
	 * If onAfterRendering of a field is processed the Form (layout) might need to change it.
	 */
	var _fieldOnAfterRendering = function(oEvent){

		// call function of parent (if assigned)
		var oParent = this.oElement.getParent();
		if (oParent && oParent.contentOnAfterRendering) {
			oParent.contentOnAfterRendering( this.oElement, oEvent.srcControl);
		}

	};

}());