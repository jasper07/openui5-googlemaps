/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.RoadMapStep.
jQuery.sap.declare("sap.ui.commons.RoadMapStep");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new RoadMapStep.
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
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getExpanded expanded} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSubSteps subSteps} <strong>(default aggregation)</strong> : sap.ui.commons.RoadMapStep[]</li></ul>
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
 * Step used within a RoadMap Control.
 * 
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.RoadMapStep
 */
sap.ui.core.Element.extend("sap.ui.commons.RoadMapStep", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"label" : {type : "string", group : "Misc", defaultValue : null},
		"enabled" : {type : "boolean", group : "Misc", defaultValue : true},
		"expanded" : {type : "boolean", group : "Misc", defaultValue : false, deprecated: true},
		"visible" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	defaultAggregation : "subSteps",
	aggregations : {
    	"subSteps" : {type : "sap.ui.commons.RoadMapStep", multiple : true, singularName : "subStep", deprecated: true}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.RoadMapStep with name <code>sClassName</code> 
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
 * @name sap.ui.commons.RoadMapStep.extend
 * @function
 */


/**
 * Getter for property <code>label</code>.
 * Label of the step
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>label</code>
 * @public
 * @name sap.ui.commons.RoadMapStep#getLabel
 * @function
 */

/**
 * Setter for property <code>label</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLabel  new value for property <code>label</code>
 * @return {sap.ui.commons.RoadMapStep} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RoadMapStep#setLabel
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Specifies whether the user shall be allowed to click a step, or not
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.commons.RoadMapStep#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.RoadMapStep} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RoadMapStep#setEnabled
 * @function
 */


/**
 * Getter for property <code>expanded</code>.
 * This property is only relevant when using sub steps.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * @deprecated Since version 1.10.5. 
 * Note that sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @name sap.ui.commons.RoadMapStep#getExpanded
 * @function
 */

/**
 * Setter for property <code>expanded</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.ui.commons.RoadMapStep} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.10.5. 
 * Note that sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @name sap.ui.commons.RoadMapStep#setExpanded
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Step is visible
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.RoadMapStep#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.RoadMapStep} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RoadMapStep#setVisible
 * @function
 */


/**
 * Getter for aggregation <code>subSteps</code>.<br/>
 * Sub steps for the current step. Will be displayed only in the case that the step is expanded. Otherwise, special arrows show the availability
 * of sub steps. One level of sub steps supported.
 * 
 * <strong>Note</strong>: this is the default aggregation for RoadMapStep.
 * @return {sap.ui.commons.RoadMapStep[]}
 * @public
 * @deprecated Since version 1.10.5. 
 * Sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @name sap.ui.commons.RoadMapStep#getSubSteps
 * @function
 */


/**
 * Inserts a subStep into the aggregation named <code>subSteps</code>.
 *
 * @param {sap.ui.commons.RoadMapStep}
 *          oSubStep the subStep to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the subStep should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the subStep is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the subStep is inserted at 
 *             the last position        
 * @return {sap.ui.commons.RoadMapStep} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.10.5. 
 * Sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @name sap.ui.commons.RoadMapStep#insertSubStep
 * @function
 */

/**
 * Adds some subStep <code>oSubStep</code> 
 * to the aggregation named <code>subSteps</code>.
 *
 * @param {sap.ui.commons.RoadMapStep}
 *            oSubStep the subStep to add; if empty, nothing is inserted
 * @return {sap.ui.commons.RoadMapStep} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.10.5. 
 * Sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @name sap.ui.commons.RoadMapStep#addSubStep
 * @function
 */

/**
 * Removes an subStep from the aggregation named <code>subSteps</code>.
 *
 * @param {int | string | sap.ui.commons.RoadMapStep} vSubStep the subStep to remove or its index or id
 * @return {sap.ui.commons.RoadMapStep} the removed subStep or null
 * @public
 * @deprecated Since version 1.10.5. 
 * Sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @name sap.ui.commons.RoadMapStep#removeSubStep
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>subSteps</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.RoadMapStep[]} an array of the removed elements (might be empty)
 * @public
 * @deprecated Since version 1.10.5. 
 * Sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @name sap.ui.commons.RoadMapStep#removeAllSubSteps
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.RoadMapStep</code> in the aggregation named <code>subSteps</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.RoadMapStep}
 *            oSubStep the subStep whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @deprecated Since version 1.10.5. 
 * Sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @name sap.ui.commons.RoadMapStep#indexOfSubStep
 * @function
 */
	

/**
 * Destroys all the subSteps in the aggregation 
 * named <code>subSteps</code>.
 * @return {sap.ui.commons.RoadMapStep} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.10.5. 
 * Sub steps will not be supported in future. This feature might be removed in one of the next releases.
 * @name sap.ui.commons.RoadMapStep#destroySubSteps
 * @function
 */


// Start of sap\ui\commons\RoadMapStep.js
(function() {

//Setter for property label which suppresses rerendering if possible -> Comment generated automatically
sap.ui.commons.RoadMapStep.prototype.setLabel = function(sLabel) {
	setProperty(this, "label", sLabel, function(){
		sap.ui.commons.RoadMapRenderer.setStepLabel(this, sLabel);
		this.setProperty("label", sLabel, true);
		sap.ui.commons.RoadMapRenderer.addEllipses(this);
		return true;
	});
	return this;
};


//Setter for property enabled which suppresses rerendering if possible -> Comment generated automatically
sap.ui.commons.RoadMapStep.prototype.setEnabled = function(bEnabled) {
	var bOldEnabled = this.getEnabled();
	if((bEnabled && bOldEnabled) || (!bEnabled && !bOldEnabled)) {
		return this;
	}
	setProperty(this, "enabled", bEnabled, function(){
		var oRoadMap = getRoadMap(this);
		var bWasSelected = sap.ui.commons.RoadMapRenderer.setStepEnabled(oRoadMap, this, bEnabled);
		if(bWasSelected) {
			oRoadMap.setProperty("selectedStep", "", true);
		}
		if(!bEnabled) {
			this.setExpanded(false);
		}
		return false;
	});
	return this;
};


//Setter for property expanded which suppresses rerendering if possible -> Comment generated automatically
sap.ui.commons.RoadMapStep.prototype.setExpanded = function(bExpanded) {
	var bOldExpanded= this.getExpanded();
	if((bExpanded && bOldExpanded) || (!bExpanded && !bOldExpanded)) {
		return this;
	}
	setProperty(this, "expanded", bExpanded, function(){
		if(isSubStep(this) || this.getSubSteps().length == 0 || !this.getEnabled() || !bExpanded){
			this.setProperty("expanded", false, true);
			if(!isSubStep(this) && this.getSubSteps().length > 0 && this.getEnabled()){
				sap.ui.commons.RoadMapRenderer.selectStep(getRoadMap(this), this, false, true, null, true);
			}
		}else{
			this.setProperty("expanded", true, true);
			sap.ui.commons.RoadMapRenderer.selectStep(getRoadMap(this), this, false, true, null, true);
		}
		return true;
	});
	return this;
};


//Setter for property visible which suppresses rerendering if possible -> Comment generated automatically
sap.ui.commons.RoadMapStep.prototype.setVisible = function(bVisible) {
	var bOldVisible = this.getVisible();
	if((bVisible && bOldVisible) || (!bVisible && !bOldVisible)) {
		return this;
	}
	setProperty(this, "visible", bVisible, function(){
		var oRoadMap = getRoadMap(this);
		var bWasSelected = sap.ui.commons.RoadMapRenderer.setStepVisible(oRoadMap, this, isSubStep(this), bVisible);
		if(bWasSelected) {
			oRoadMap.setProperty("selectedStep", "", true);
		}
		this.setProperty("visible", bVisible, true);
		sap.ui.commons.RoadMapRenderer.updateStepArea(oRoadMap);
		sap.ui.commons.RoadMapRenderer.updateStepAria(this);
		return true;
	});
	return this;
};


/**
 * Returns the dom reference that should get the focus
 * @type DOMNode
 * @return Returns the dom reference that should get the focus
 */
sap.ui.commons.RoadMapStep.prototype.getFocusDomRef = function () {
	return jQuery.sap.byId(this.getFocusInfo().id).get(0) || null;
};


/**
 * Returns an object representing the serialized focus information
 * @type object
 * @return an object representing the serialized focus information
 * @private
 */
sap.ui.commons.RoadMapStep.prototype.getFocusInfo = function () {
	return {id: this.getId()+"-box"};
};


/**
 * Behavior implementation which is executed when the user clicks the step.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RoadMapStep.prototype.onclick = function(oEvent){
	this.handleSelect(oEvent);
};


/**
 * Behavior implementation which is executed when the user presses the space or enter key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RoadMapStep.prototype.onsapselect = function(oEvent){
	this.handleSelect(oEvent);
};


/**
 * Handler which is called when the step is selected.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RoadMapStep.prototype.handleSelect = function(oEvent, bIgnoreDomCheck){
	oEvent.stopPropagation();
	oEvent.preventDefault();

	if(!bIgnoreDomCheck && !jQuery.sap.containsOrEquals(this.getDomRef(), oEvent.target)) {
		return;
	}

	if(this.getEnabled()){
		var oRoadMap = getRoadMap(this);
		var oStep = this;
		sap.ui.commons.RoadMapRenderer.selectStep(oRoadMap, this, isSubStep(this), false, function(sType){
			var bWasAlreadySelected = oRoadMap.getSelectedStep() == oStep.getId();
			oRoadMap.setProperty("selectedStep", oStep.getId(), true);
			oStep.focus();
			if(sType != "selected"){
				oStep.setProperty("expanded", sType == "expanded", true);
				oRoadMap.fireStepExpanded({stepId: oStep.getId()});
			}
			if(!bWasAlreadySelected) {
				oRoadMap.fireStepSelected({stepId: oStep.getId()});
			}
		});
	}else{
		this.focus();
	}
};


//********* Private *********


//Returns the corresponding Roadmap control
var getRoadMap = function(oThis){
	var oRoadMap = oThis.getParent();
	if(isSubStep(oThis)) {
		oRoadMap = oRoadMap.getParent();
	}
	return oRoadMap;
};


//Returns true if the parent of this step is not of type sap.ui.commons.RoadMap
var isSubStep = function(oThis){
	return !(oThis.getParent() instanceof sap.ui.commons.RoadMap);
};


//Helper function to set a property without rerendering (see overridden setter functions)
var setProperty = function(oThis, sName, oValue, fDomAdaptationCallback){
	if(!oThis.getDomRef()){
		oThis.setProperty(sName, oValue);
		return;
	}
	var bSkipUpdate = fDomAdaptationCallback.apply(oThis, []);
	if(!bSkipUpdate) {
		oThis.setProperty(sName, oValue, true);
	}
};

}());