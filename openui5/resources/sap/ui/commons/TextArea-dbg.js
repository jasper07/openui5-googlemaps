/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.TextArea.
jQuery.sap.declare("sap.ui.commons.TextArea");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.TextField");


/**
 * Constructor for a new TextArea.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getCols cols} : int</li>
 * <li>{@link #getRows rows} : int</li>
 * <li>{@link #getWrapping wrapping} : sap.ui.core.Wrapping</li>
 * <li>{@link #getCursorPos cursorPos} : int</li>
 * <li>{@link #getExplanation explanation} : string</li>
 * <li>{@link #getLabeledBy labeledBy} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.commons.TextField#constructor sap.ui.commons.TextField}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Control to enter or display multible row text.
 * @extends sap.ui.commons.TextField
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.TextArea
 */
sap.ui.commons.TextField.extend("sap.ui.commons.TextArea", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"cols" : {type : "int", group : "Dimension", defaultValue : null},
		"rows" : {type : "int", group : "Dimension", defaultValue : null},
		"wrapping" : {type : "sap.ui.core.Wrapping", group : "Appearance", defaultValue : null},
		"cursorPos" : {type : "int", group : "Appearance", defaultValue : null},
		"explanation" : {type : "string", group : "Misc", defaultValue : null},
		"labeledBy" : {type : "string", group : "Identification", defaultValue : null, deprecated: true}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.TextArea with name <code>sClassName</code> 
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
 * @name sap.ui.commons.TextArea.extend
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Height of text field. When it is set (CSS-size such as % or px), this is the exact size.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.commons.TextArea#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextArea#setHeight
 * @function
 */


/**
 * Getter for property <code>cols</code>.
 * Number of Columns. Cols means number of characters per row. This proprty is only used if Width is not used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>cols</code>
 * @public
 * @name sap.ui.commons.TextArea#getCols
 * @function
 */

/**
 * Setter for property <code>cols</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iCols  new value for property <code>cols</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextArea#setCols
 * @function
 */


/**
 * Getter for property <code>rows</code>.
 * Number of Rows. This proprty is only used if Height is not used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>rows</code>
 * @public
 * @name sap.ui.commons.TextArea#getRows
 * @function
 */

/**
 * Setter for property <code>rows</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iRows  new value for property <code>rows</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextArea#setRows
 * @function
 */


/**
 * Getter for property <code>wrapping</code>.
 * Text wrapping. Possible values are: Soft, Hard, Off.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.Wrapping} the value of property <code>wrapping</code>
 * @public
 * @name sap.ui.commons.TextArea#getWrapping
 * @function
 */

/**
 * Setter for property <code>wrapping</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.Wrapping} oWrapping  new value for property <code>wrapping</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextArea#setWrapping
 * @function
 */


/**
 * Getter for property <code>cursorPos</code>.
 * Position of cursor, e.g., to let the user re-start typing at the same position as before the server roundtrip
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>cursorPos</code>
 * @public
 * @name sap.ui.commons.TextArea#getCursorPos
 * @function
 */

/**
 * Setter for property <code>cursorPos</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iCursorPos  new value for property <code>cursorPos</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextArea#setCursorPos
 * @function
 */


/**
 * Getter for property <code>explanation</code>.
 * text which appears, in case quick-help is switched on
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>explanation</code>
 * @public
 * @name sap.ui.commons.TextArea#getExplanation
 * @function
 */

/**
 * Setter for property <code>explanation</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sExplanation  new value for property <code>explanation</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextArea#setExplanation
 * @function
 */


/**
 * Getter for property <code>labeledBy</code>.
 * ID of label control
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>labeledBy</code>
 * @public
 * @deprecated Since version 1.5.2. 
 * Please use association AriaLabelledBy instead.
 * @name sap.ui.commons.TextArea#getLabeledBy
 * @function
 */

/**
 * Setter for property <code>labeledBy</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLabeledBy  new value for property <code>labeledBy</code>
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.5.2. 
 * Please use association AriaLabelledBy instead.
 * @name sap.ui.commons.TextArea#setLabeledBy
 * @function
 */


// Start of sap\ui\commons\TextArea.js
///**
// * This file defines the control behavior.
// */
//.TextArea.prototype.init = function(){
//   // do something for initialization...
//};

/**
 * Exit handler
 */
sap.ui.commons.TextArea.prototype.exit = function() {
	this._detachEventHandler();
};

/**
 * Event handler called before control is rendered
 */
sap.ui.commons.TextArea.prototype.onBeforeRendering = function() {
	this._detachEventHandler();
};

/**
 * Event handler called after control is rendered
 */
sap.ui.commons.TextArea.prototype.onAfterRendering = function () {
	this._attachEventHandler();
};

/**
 * attaches the native event handlers
 */
sap.ui.commons.TextArea.prototype._attachEventHandler = function() {
	var $this = this.$();
	this.pasteHandlerId = $this.bind('paste', jQuery.proxy(this.handlePaste, this));
	this.inputHandlerId = $this.bind('input', jQuery.proxy(this.handleInput, this)); // for FF
	this.proChHandlerId = $this.bind('propertychange', jQuery.proxy(this.handleInput, this)); // for IE
};

/**
 * detaches the native event handlers
 */
sap.ui.commons.TextArea.prototype._detachEventHandler = function() {
	// Unbind events
	var $this = this.$();
	if(this.pasteHandlerId){
		$this.unbind('paste', this.handlePaste);
		this.pasteHandlerId = null;
	}
	if(this.inputHandlerId){
		$this.unbind('input', this.handlePaste);
		this.inputHandlerId = null;
	}
	if(this.proChHandlerId){
		$this.unbind('propertychange', this.handlePaste);
		this.proChHandlerId = null;
	}
};

/**
 * Event handler called when control is getting the focus
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.TextArea.prototype.onfocusin = function(oEvent){

	sap.ui.commons.TextField.prototype.onfocusin.apply(this, arguments);

	var oFocusDomRef = this.getFocusDomRef();

	// Set focus flag
	this.bFocus = true;

	oEvent.preventDefault();
};

/*
 * Event handler called when control is loosing the focus
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.TextArea.prototype.onsapfocusleave = function(oEvent){

	sap.ui.commons.TextField.prototype.onsapfocusleave.apply(this, arguments);

	var oFocusDomRef = this.getFocusDomRef();
	if (oFocusDomRef && !!sap.ui.Device.browser.firefox) { // Only for FF -> deselect text
		if (oFocusDomRef.selectionStart != oFocusDomRef.selectionEnd){
			jQuery(oFocusDomRef).selectText(oFocusDomRef.selectionStart, oFocusDomRef.selectionStart);
		}
	}

	// Clear focus flag
	this.bFocus = false;

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Returns an object representing the serialized focus information.
 * Overwrites the standard function.
 * @type Object
 * @return An object representing the serialized focus information.
 * @private
 */
sap.ui.commons.TextArea.prototype.getFocusInfo = function () {
	return {id:this.getId(), cursorPos:this.getCursorPos()};
};

/**
 * Applies the focus info.
 * Overwrites the standard function.
 * @param {object} oFocusInfo
 * @private
 */
sap.ui.commons.TextArea.prototype.applyFocusInfo = function (oFocusInfo) {
	this.focus();
	var oFocusDomRef = this.getFocusDomRef();
	jQuery(oFocusDomRef).cursorPos(this.getCursorPos());
};

/**
 * Event handler called on Key press
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.TextArea.prototype.onkeypress = function(oEvent){

	sap.ui.commons.TextField.prototype.onkeypress.apply(this, arguments);

	if(!this.getEditable() || !this.getEnabled() || this.getMaxLength() <= 0){
		return;
	}

	var oKC = jQuery.sap.KeyCodes;
	var iKC = oEvent.which || oEvent.keyCode;
	var oDom = this.getDomRef();

	// Check if some text is selected since this is different in Internet Explorer and FireFox
	// If some text is selected, it is overwritten by a key press -> Value will not get too large
	if(document.selection){ //IE
		var oSel = document.selection.createRange();
		if (oSel.text.length > 0){
			return
		}
	}else{ // FF
		if(oDom.selectionStart != oDom.selectionEnd){
			return;
		}
	}

	// Only real characters and ENTER, no backspace
	if(oDom.value.length >= this.getMaxLength() && ( iKC > oKC.DELETE || iKC == oKC.ENTER || iKC == oKC.SPACE) && !oEvent.ctrlKey){
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}

};

/**
 * Event handler called on Key up
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.TextArea.prototype.onkeyup = function(oEvent){

// save cursor position
	var oDomRef = this.getDomRef();
	this.setProperty('cursorPos', jQuery(oDomRef).cursorPos(), true); // no re-rendering!

	// call keyup function of TextField to get liveChange event
	sap.ui.commons.TextField.prototype.onkeyup.apply(this, arguments);

};

/**
 * Event handler called when the enter key is pressed.
 * @see sap.ui.commons.TextField#onsapenter
 * @private
 */
sap.ui.commons.TextArea.prototype.onsapenter = function (oEvent) {
// stop bubbling of event when in the textarea so other actions of parent control handlers won't be called.
// don't do a prevent default because we want the default browser behavior...e.g. new line when pressing enter in the text area.
	oEvent.stopPropagation();
}

/**
 * Event handler called on Mouse up
 *
 * @param {jQuery.Event} oEvent
 * @private
 */;
sap.ui.commons.TextArea.prototype.onmouseup = function(oEvent){

// Save cursor position
	var oDomRef = this.getDomRef();
	this.setProperty('cursorPos', jQuery(oDomRef).cursorPos(), true); // no re-rendering!

};

/**
 * Event handler called on Paste
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.TextArea.prototype.handlePaste = function(oEvent){

	if(!this.getEditable() || !this.getEnabled() || this.getMaxLength() <= 0){
		return;
	}

	var oDom = this.getDomRef();

	if(oDom.value.length >= this.getMaxLength() && oDom.selectionStart == oDom.selectionEnd){
		// already maxLenght reached and nothing selected -> no paste possible
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}

};

/**
 * Event handler called on Input
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.TextArea.prototype.handleInput = function(oEvent){

	if (oEvent.originalEvent.propertyName && oEvent.originalEvent.propertyName.toLowerCase () != "value") {
		// In Internet Explorer, check for correct property
		return;
	}

	if(!this.getEditable() || !this.getEnabled() || this.getMaxLength() <= 0){
		return;
	}

	var oDom = this.getDomRef();

	// If text is entered or pasted, cut it if is too long
	if(oDom.value.length > this.getMaxLength()){
		oDom.value = oDom.value.substring(0,this.getMaxLength());
	}
	// The result is if text is pasted via clipboard or drag and drop the result is cut to fit the
	// maxLength. It's not easy to cut only the pasted text because in FireFox there is no access to the clipboard.
	// An option would be to store the old value after each change and compare it after each change.
	// Then the pasted text must be determined and cut. But this would need a lot of effort and script on
	// every change.

};

/**
 * Property setter for MaxLength
 *
 * @param {int} iMaxLength
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextArea.prototype.setMaxLength = function(iMaxLength) {

	this.setProperty('maxLength', iMaxLength, true); // No re-rendering

	var oDom = this.getDomRef();

	if(oDom && oDom.value.length > iMaxLength && iMaxLength > 0 ){
		oDom.value = oDom.value.substring(0,iMaxLength);
	}

	var sValue = this.getValue();
	if(sValue.length > iMaxLength && iMaxLength > 0 ){
		this.setProperty('value', sValue.substring(0,iMaxLength));
	}

	return this;
};

/**
 * Property setter for the cursor position
 *
 * @param {int} iCursorPos
 * @return {sap.ui.commons.TextArea} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextArea.prototype.setCursorPos = function(iCursorPos) {

	this.setProperty('cursorPos', iCursorPos, true); // no re-rendering!

	if(this.bFocus){
		jQuery(this.getDomRef()).cursorPos(iCursorPos);
	}

	return this;
};