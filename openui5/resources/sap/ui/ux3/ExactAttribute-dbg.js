/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.ExactAttribute.
jQuery.sap.declare("sap.ui.ux3.ExactAttribute");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new ExactAttribute.
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
 * <li>{@link #getSelected selected} : boolean</li>
 * <li>{@link #getWidth width} : int (default: 168)</li>
 * <li>{@link #getListOrder listOrder} : sap.ui.ux3.ExactOrder (default: sap.ui.ux3.ExactOrder.Select)</li>
 * <li>{@link #getShowSubAttributesIndicator showSubAttributesIndicator} : boolean (default: true)</li>
 * <li>{@link #getAdditionalData additionalData} : object</li>
 * <li>{@link #getSupplyActive supplyActive} : boolean (default: true)</li>
 * <li>{@link #getAutoActivateSupply autoActivateSupply} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAttributes attributes} <strong>(default aggregation)</strong> : sap.ui.ux3.ExactAttribute[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.ExactAttribute#event:supplyAttributes supplyAttributes} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * An element for defining attributes and sub-attributes used within the Exact pattern.
 * 
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.ux3.ExactAttribute
 */
sap.ui.core.Element.extend("sap.ui.ux3.ExactAttribute", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"getShowSubAttributesIndicator_Computed", "scrollTo"
	],

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"text" : {type : "string", group : "Misc", defaultValue : null},
		"selected" : {type : "boolean", group : "Misc", defaultValue : null},
		"width" : {type : "int", group : "Misc", defaultValue : 168},
		"listOrder" : {type : "sap.ui.ux3.ExactOrder", group : "", defaultValue : sap.ui.ux3.ExactOrder.Select},
		"showSubAttributesIndicator" : {type : "boolean", group : "Misc", defaultValue : true},
		"additionalData" : {type : "object", group : "Misc", defaultValue : null},
		"supplyActive" : {type : "boolean", group : "Misc", defaultValue : true},
		"autoActivateSupply" : {type : "boolean", group : "Misc", defaultValue : false}
	},
	defaultAggregation : "attributes",
	aggregations : {
    	"attributes" : {type : "sap.ui.ux3.ExactAttribute", multiple : true, singularName : "attribute"}
	},
	events : {
		"supplyAttributes" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.ExactAttribute with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.ExactAttribute.extend
 * @function
 */

sap.ui.ux3.ExactAttribute.M_EVENTS = {'supplyAttributes':'supplyAttributes'};


/**
 * Getter for property <code>text</code>.
 * The attribute name
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.ux3.ExactAttribute#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactAttribute#setText
 * @function
 */


/**
 * Getter for property <code>selected</code>.
 * Specifies whether the attribute shall be selected
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>selected</code>
 * @public
 * @name sap.ui.ux3.ExactAttribute#getSelected
 * @function
 */

/**
 * Setter for property <code>selected</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bSelected  new value for property <code>selected</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactAttribute#setSelected
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Specifies the width of the corresponding list in pixels. The value must be between 70 and 500.
 *
 * Default value is <code>168</code>
 *
 * @return {int} the value of property <code>width</code>
 * @public
 * @since 1.7.0
 * @name sap.ui.ux3.ExactAttribute#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>168</code> 
 *
 * @param {int} iWidth  new value for property <code>width</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.0
 * @name sap.ui.ux3.ExactAttribute#setWidth
 * @function
 */


/**
 * Getter for property <code>listOrder</code>.
 * The order how the sublists of this attribute should be displayed.
 *
 * Default value is <code>Select</code>
 *
 * @return {sap.ui.ux3.ExactOrder} the value of property <code>listOrder</code>
 * @public
 * @since 1.7.1
 * @name sap.ui.ux3.ExactAttribute#getListOrder
 * @function
 */

/**
 * Setter for property <code>listOrder</code>.
 *
 * Default value is <code>Select</code> 
 *
 * @param {sap.ui.ux3.ExactOrder} oListOrder  new value for property <code>listOrder</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * @since 1.7.1
 * @name sap.ui.ux3.ExactAttribute#setListOrder
 * @function
 */


/**
 * Getter for property <code>showSubAttributesIndicator</code>.
 * Specifies whether the attribute shall have sub values for visual purposes.
 * The indicator which is a little arrow beside an attribute in the list is computed automatically
 * (getShowSubAttributesIndicator_Computed() of sap.ui.ux3.ExactAttribute).
 * In the case that a supply function is attached, and the supplyActive attribute has value 'true',
 * then the Exact pattern needs a hint if sub attributes are available. The showSubAttributesIndicator attribute is
 * considered then and has to be maintained. If the back-end does not support count-calls, for example,
 * showSubAttributesIndicator should be set to true.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showSubAttributesIndicator</code>
 * @public
 * @name sap.ui.ux3.ExactAttribute#getShowSubAttributesIndicator
 * @function
 */

/**
 * Setter for property <code>showSubAttributesIndicator</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowSubAttributesIndicator  new value for property <code>showSubAttributesIndicator</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactAttribute#setShowSubAttributesIndicator
 * @function
 */


/**
 * Getter for property <code>additionalData</code>.
 * An example for additional data are database keys
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>additionalData</code>
 * @public
 * @name sap.ui.ux3.ExactAttribute#getAdditionalData
 * @function
 */

/**
 * Setter for property <code>additionalData</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oAdditionalData  new value for property <code>additionalData</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactAttribute#setAdditionalData
 * @function
 */


/**
 * Getter for property <code>supplyActive</code>.
 * The supplyAttributes event is only fired if supplyActive has value true which is the default. After firing the event, the attribute is automatically set to false.
 * The idea is that a supply function is called only once when the data is requested. To enable the event again it is possible to manually set the attribute back to true.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>supplyActive</code>
 * @public
 * @name sap.ui.ux3.ExactAttribute#getSupplyActive
 * @function
 */

/**
 * Setter for property <code>supplyActive</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bSupplyActive  new value for property <code>supplyActive</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactAttribute#setSupplyActive
 * @function
 */


/**
 * Getter for property <code>autoActivateSupply</code>.
 * If you want the supply function to be called on every select, you can set the autoActivateSupply attribute to true. In this case, supplyActive is automatically
 * set to true on every unselect.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>autoActivateSupply</code>
 * @public
 * @name sap.ui.ux3.ExactAttribute#getAutoActivateSupply
 * @function
 */

/**
 * Setter for property <code>autoActivateSupply</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bAutoActivateSupply  new value for property <code>autoActivateSupply</code>
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactAttribute#setAutoActivateSupply
 * @function
 */


/**
 * Getter for aggregation <code>attributes</code>.<br/>
 * Values (sub attributes) of this attribute
 * 
 * <strong>Note</strong>: this is the default aggregation for ExactAttribute.
 * @return {sap.ui.ux3.ExactAttribute[]}
 * @public
 * @name sap.ui.ux3.ExactAttribute#getAttributes
 * @function
 */


/**
 * Inserts a attribute into the aggregation named <code>attributes</code>.
 *
 * @param {sap.ui.ux3.ExactAttribute}
 *          oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the attribute should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the attribute is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactAttribute#insertAttribute
 * @function
 */

/**
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 *
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactAttribute#addAttribute
 * @function
 */

/**
 * Removes an attribute from the aggregation named <code>attributes</code>.
 *
 * @param {int | string | sap.ui.ux3.ExactAttribute} vAttribute the attribute to remove or its index or id
 * @return {sap.ui.ux3.ExactAttribute} the removed attribute or null
 * @public
 * @name sap.ui.ux3.ExactAttribute#removeAttribute
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ExactAttribute[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.ExactAttribute#removeAllAttributes
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.ExactAttribute</code> in the aggregation named <code>attributes</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.ExactAttribute#indexOfAttribute
 * @function
 */
	

/**
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactAttribute#destroyAttributes
 * @function
 */


/**
 * A supply function is a handler which is attached to the supplyAttributes event. The event is fired when the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function getAttributes() is called. 
 *
 * @name sap.ui.ux3.ExactAttribute#supplyAttributes
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.ux3.ExactAttribute} oControlEvent.getParameters.attribute The ExactAttribute
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'supplyAttributes' event of this <code>sap.ui.ux3.ExactAttribute</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.ExactAttribute</code>.<br/> itself. 
 *  
 * A supply function is a handler which is attached to the supplyAttributes event. The event is fired when the corresponding ExactAttribute is selected, it was already selected when a handler is attached or function getAttributes() is called. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.ExactAttribute</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactAttribute#attachSupplyAttributes
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'supplyAttributes' event of this <code>sap.ui.ux3.ExactAttribute</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.ExactAttribute#detachSupplyAttributes
 * @function
 */

/**
 * Fire event supplyAttributes to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'attribute' of type <code>sap.ui.ux3.ExactAttribute</code> The ExactAttribute</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.ExactAttribute} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.ExactAttribute#fireSupplyAttributes
 * @function
 */


/**
 * See attribute showSubAttributesIndicator
 *
 * @name sap.ui.ux3.ExactAttribute.prototype.getShowSubAttributesIndicator_Computed
 * @function

 * @type void
 * @public
 */


/**
 * Scrolls the corresponding list of this attribute until the given direct child attribute is visible. If the corresponding list is not yet visible the call is buffered until the list is available.
 *
 * @name sap.ui.ux3.ExactAttribute.prototype.scrollTo
 * @function
 * @param {sap.ui.ux3.ExactAttribute} 
 *         oOAttribute
 *         The direct child attribute

 * @type void
 * @public
 */


// Start of sap\ui\ux3\ExactAttribute.js
(function() {

sap.ui.ux3.ExactAttribute._MINWIDTH = 70;
sap.ui.ux3.ExactAttribute._MAXWIDTH = 500;

sap.ui.ux3.ExactAttribute.prototype.scrollTo = function(oAttribute) {
	if(!(oAttribute instanceof sap.ui.ux3.ExactAttribute)){
		this._scrollToAttributeId = undefined;
		return;
	}
	
	var oList = this.getChangeListener();
	if(oList){
		oList = sap.ui.getCore().byId(oList.id);
		if(oList && oList._lb){
			var iIdx = this.indexOfAttribute(oAttribute);
			if(iIdx >= 0){
				oList._lb.scrollToIndex(iIdx, true);
			}
			this._scrollToAttributeId = undefined;
			return;
		}
	}
	this._scrollToAttributeId = oAttribute.getId();
};

//*** Overridden API functions ***

sap.ui.ux3.ExactAttribute.prototype.setText = function(sText) {
	this.setProperty("text", sText, true);
	this._handleChange(this, "text");
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.setWidth = function(iWidth) {
	this._setWidth(iWidth);
	this._handleChange(this, "width");
	return this;
};


/**
 * @see sap.ui.core.Element.prototype.setTooltip
 * @public
 */
sap.ui.ux3.ExactAttribute.prototype.setTooltip = function(oTooltip) {
	sap.ui.core.Element.prototype.setTooltip.apply(this, arguments);
	this._handleChange(this, "tooltip", true);
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.setSelected = function(bSelected) {
	this.setProperty("selected", bSelected, true);

	if(!this.getSelected()){
		this._clearSelection();
	}

	this._handleChange(this, "selected");
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.setSupplyActive = function(bSupplyActive) {
	this.setProperty("supplyActive", bSupplyActive, true);
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.setAutoActivateSupply = function(bAutoActivateSupply) {
	this.setProperty("autoActivateSupply", bAutoActivateSupply, true);
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.setAdditionalData = function(oAdditionalData) {
	this.setProperty("additionalData", oAdditionalData, true);
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.setListOrder = function(sListOrder) {
	this.setProperty("listOrder", sListOrder, true);
	this._handleChange(this, "order");
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.getAttributes = function() {
	if(this.hasListeners("supplyAttributes") && this.getSupplyActive()){
		this._bSuppressChange = true;
		this._bChangedHappenedDuringSuppress = false;
		this.fireSupplyAttributes({attribute: this});
		this.setSupplyActive(false);
		this._bSuppressChange = undefined;
		if(this._bChangedHappenedDuringSuppress){
			this._handleChange(this, "attributes");
		}
		this._bChangedHappenedDuringSuppress = undefined;
	}
	return this.getAggregation("attributes", []);
};


sap.ui.ux3.ExactAttribute.prototype.insertAttribute = function(oAttribute, iIndex) {
	this.insertAggregation("attributes", oAttribute, iIndex, true);
	this._handleChange(this, "attributes");
	this.setSupplyActive(false);
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.addAttribute = function(oAttribute) {
	this.addAggregation("attributes", oAttribute, true);
	this._handleChange(this, "attributes");
	this.setSupplyActive(false);
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.removeAttribute = function(vElement) {
	var oAtt = this.removeAggregation("attributes", vElement, true);
	if(oAtt){
		oAtt.setChangeListener(null);
		this._handleChange(this, "attributes");
	}
	return oAtt;
};


sap.ui.ux3.ExactAttribute.prototype.removeAllAttributes = function() {
	var aAtts = this.getAttributesInternal();
	for(var idx=0; idx<aAtts.length; idx++){
		aAtts[idx].setChangeListener(null);
	}
	var aRes = this.removeAllAggregation("attributes", true);
	if(aAtts.length > 0) {
		this._handleChange(this, "attributes");
	}
	return aRes;
};


sap.ui.ux3.ExactAttribute.prototype.destroyAttributes = function() {
	var aAtts = this.getAttributesInternal();
	for(var idx=0; idx<aAtts.length; idx++){
		aAtts[idx].setChangeListener(null);
	}
	this.destroyAggregation("attributes", true);
	if(aAtts.length > 0) {
		this._handleChange(this, "attributes");
	}
	return this;
};


sap.ui.ux3.ExactAttribute.prototype.getShowSubAttributesIndicator_Computed = function() {
	return this.hasListeners("supplyAttributes") && this.getSupplyActive() ? this.getShowSubAttributesIndicator() : this.getAttributesInternal().length > 0;
};


sap.ui.ux3.ExactAttribute.prototype.attachSupplyAttributes = function(oData, fnFunction, oListener) {
	this.attachEvent("supplyAttributes", oData, fnFunction, oListener);
	if(this.getSelected()){
		this.getAttributesInternal(true); //force init of attributes (e.g. call supply function))
	}
	return this;
};


//*** Internal (may also used by Exact Control) functions ***


sap.ui.ux3.ExactAttribute.prototype._setProperty_Orig = sap.ui.ux3.ExactAttribute.prototype.setProperty;
/**
 * @see sap.ui.core.Element.prototype.setProperty
 * @protected
 */
sap.ui.ux3.ExactAttribute.prototype.setProperty = function(sPropertyName, oValue, bSuppressRerendering) {
	this._setProperty_Orig(sPropertyName, oValue, bSuppressRerendering);

	if(sPropertyName == "selected"){
		if(oValue){
			this.getAttributesInternal(true); //force init of attributes (e.g. call supply function)
		}else{
			if(this.getAutoActivateSupply()) {
				this.setSupplyActive(true);
			}
		}
	}

	return this;
};


sap.ui.ux3.ExactAttribute.prototype.setChangeListener = function(oChangeListener) {
	this._oChangeListener = oChangeListener;
};


sap.ui.ux3.ExactAttribute.prototype.getChangeListener = function(oChangeListener) {
	return this._oChangeListener;
};


sap.ui.ux3.ExactAttribute.prototype.getAttributesInternal = function(bForceInit) {
	return bForceInit ? this.getAttributes() : this.getAggregation("attributes", []);
};


sap.ui.ux3.ExactAttribute.prototype._handleChange = function(oSourceAttribute, sType) {
	if(this._bSuppressChange){
		this._bChangedHappenedDuringSuppress = true;
		return;
	}
	if(this.getChangeListener()){
		//Change is handled by the change listener
		this.getChangeListener()._notifyOnChange(sType, oSourceAttribute);
	}else if(this.getParent() && this.getParent()._handleChange){
		//Bubble Change to next change listener
		this.getParent()._handleChange(oSourceAttribute, sType);
	}
};


//Sets the selection property of the attribute and all its sub-attributes to false.
sap.ui.ux3.ExactAttribute.prototype._clearSelection = function(){
	this.setProperty("selected", false, true);
	var aVals = this.getAttributesInternal();
	for(var idx=0; idx<aVals.length; idx++){
		aVals[idx]._clearSelection();
	}
};


//Setter of the width property without invalidate and change notification
sap.ui.ux3.ExactAttribute.prototype._setWidth = function(iWidth) {
	iWidth = Math.round(sap.ui.ux3.ExactAttribute._checkWidth(iWidth));
	this.setProperty("width", iWidth, true);
};


//Checks whether the given width is within the allowed boundaries
sap.ui.ux3.ExactAttribute._checkWidth = function(iWidth) {
	iWidth = Math.max(iWidth, sap.ui.ux3.ExactAttribute._MINWIDTH);
	iWidth = Math.min(iWidth, sap.ui.ux3.ExactAttribute._MAXWIDTH);
	return iWidth;
};

}());