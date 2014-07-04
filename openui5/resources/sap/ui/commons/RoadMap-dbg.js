/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.RoadMap.
jQuery.sap.declare("sap.ui.commons.RoadMap");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new RoadMap.
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
 * <li>{@link #getNumberOfVisibleSteps numberOfVisibleSteps} : int</li>
 * <li>{@link #getFirstVisibleStep firstVisibleStep} : string</li>
 * <li>{@link #getSelectedStep selectedStep} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSteps steps} <strong>(default aggregation)</strong> : sap.ui.commons.RoadMapStep[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.RoadMap#event:stepSelected stepSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.commons.RoadMap#event:stepExpanded stepExpanded} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Is used to display step-by-step work flows of a clearly defined work process
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.RoadMap
 */
sap.ui.core.Control.extend("sap.ui.commons.RoadMap", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"numberOfVisibleSteps" : {type : "int", group : "Misc", defaultValue : null},
		"firstVisibleStep" : {type : "string", group : "Misc", defaultValue : null},
		"selectedStep" : {type : "string", group : "Misc", defaultValue : null},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"visible" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	defaultAggregation : "steps",
	aggregations : {
    	"steps" : {type : "sap.ui.commons.RoadMapStep", multiple : true, singularName : "step"}
	},
	events : {
		"stepSelected" : {}, 
		"stepExpanded" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.RoadMap with name <code>sClassName</code> 
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
 * @name sap.ui.commons.RoadMap.extend
 * @function
 */

sap.ui.commons.RoadMap.M_EVENTS = {'stepSelected':'stepSelected','stepExpanded':'stepExpanded'};


/**
 * Getter for property <code>numberOfVisibleSteps</code>.
 * Total number of steps to be displayed at once
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>numberOfVisibleSteps</code>
 * @public
 * @name sap.ui.commons.RoadMap#getNumberOfVisibleSteps
 * @function
 */

/**
 * Setter for property <code>numberOfVisibleSteps</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iNumberOfVisibleSteps  new value for property <code>numberOfVisibleSteps</code>
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RoadMap#setNumberOfVisibleSteps
 * @function
 */


/**
 * Getter for property <code>firstVisibleStep</code>.
 * Id of the first step to be displayed
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>firstVisibleStep</code>
 * @public
 * @name sap.ui.commons.RoadMap#getFirstVisibleStep
 * @function
 */

/**
 * Setter for property <code>firstVisibleStep</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFirstVisibleStep  new value for property <code>firstVisibleStep</code>
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RoadMap#setFirstVisibleStep
 * @function
 */


/**
 * Getter for property <code>selectedStep</code>.
 * Id of the step which is currently selected
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>selectedStep</code>
 * @public
 * @name sap.ui.commons.RoadMap#getSelectedStep
 * @function
 */

/**
 * Setter for property <code>selectedStep</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSelectedStep  new value for property <code>selectedStep</code>
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RoadMap#setSelectedStep
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Control width in CSS size
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.RoadMap#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RoadMap#setWidth
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
 * @name sap.ui.commons.RoadMap#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RoadMap#setVisible
 * @function
 */


/**
 * Getter for aggregation <code>steps</code>.<br/>
 * Steps that are composing the RoadMap
 * 
 * <strong>Note</strong>: this is the default aggregation for RoadMap.
 * @return {sap.ui.commons.RoadMapStep[]}
 * @public
 * @name sap.ui.commons.RoadMap#getSteps
 * @function
 */


/**
 * Inserts a step into the aggregation named <code>steps</code>.
 *
 * @param {sap.ui.commons.RoadMapStep}
 *          oStep the step to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the step should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the step is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the step is inserted at 
 *             the last position        
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RoadMap#insertStep
 * @function
 */

/**
 * Adds some step <code>oStep</code> 
 * to the aggregation named <code>steps</code>.
 *
 * @param {sap.ui.commons.RoadMapStep}
 *            oStep the step to add; if empty, nothing is inserted
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RoadMap#addStep
 * @function
 */

/**
 * Removes an step from the aggregation named <code>steps</code>.
 *
 * @param {int | string | sap.ui.commons.RoadMapStep} vStep the step to remove or its index or id
 * @return {sap.ui.commons.RoadMapStep} the removed step or null
 * @public
 * @name sap.ui.commons.RoadMap#removeStep
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>steps</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.RoadMapStep[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.RoadMap#removeAllSteps
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.RoadMapStep</code> in the aggregation named <code>steps</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.RoadMapStep}
 *            oStep the step whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.RoadMap#indexOfStep
 * @function
 */
	

/**
 * Destroys all the steps in the aggregation 
 * named <code>steps</code>.
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RoadMap#destroySteps
 * @function
 */


/**
 * Event is fired when the user selects a step; assumption is that this step was not selected with the previously done select action. 
 *
 * @name sap.ui.commons.RoadMap#stepSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.stepId Id of the selected step
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'stepSelected' event of this <code>sap.ui.commons.RoadMap</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.RoadMap</code>.<br/> itself. 
 *  
 * Event is fired when the user selects a step; assumption is that this step was not selected with the previously done select action. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.RoadMap</code>.<br/> itself.
 *
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RoadMap#attachStepSelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'stepSelected' event of this <code>sap.ui.commons.RoadMap</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RoadMap#detachStepSelected
 * @function
 */

/**
 * Fire event stepSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'stepId' of type <code>string</code> Id of the selected step</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.RoadMap#fireStepSelected
 * @function
 */


/**
 * Event is fired when a given step is expanded or collapsed by user. 
 *
 * @name sap.ui.commons.RoadMap#stepExpanded
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.stepId Id of the expanded/collapsed step
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'stepExpanded' event of this <code>sap.ui.commons.RoadMap</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.RoadMap</code>.<br/> itself. 
 *  
 * Event is fired when a given step is expanded or collapsed by user. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.RoadMap</code>.<br/> itself.
 *
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RoadMap#attachStepExpanded
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'stepExpanded' event of this <code>sap.ui.commons.RoadMap</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RoadMap#detachStepExpanded
 * @function
 */

/**
 * Fire event stepExpanded to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'stepId' of type <code>string</code> Id of the expanded/collapsed step</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.RoadMap} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.RoadMap#fireStepExpanded
 * @function
 */


// Start of sap\ui\commons\RoadMap.js
(function() {

/**
 * Does the setup when the RoadMap is created.
 * @private
 */
sap.ui.commons.RoadMap.prototype.init = function(){
	this.iStepWidth = -1;
	this.sCurrentFocusedStepRefId = null;
};

/**
 * Does all the cleanup when the RoadMap is to be destroyed.
 * Called from Element's destroy() method.
 * @private
 */
sap.ui.commons.RoadMap.prototype.exit = function (){
	// Cleanup resize event registration
	if(this.sResizeListenerId){
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};


//Setter for property numberOfVisibleSteps which suppresses rerendering if possible -> Comment generated automatically
sap.ui.commons.RoadMap.prototype.setNumberOfVisibleSteps = function(iNumberOfVisibleSteps) {
	var bIsRendered = this.getDomRef() ? true : false;
	this.setProperty("numberOfVisibleSteps", iNumberOfVisibleSteps, bIsRendered);
	if(bIsRendered) {
		sap.ui.commons.RoadMapRenderer.updateScrollArea(this, true);
	}
	return this;
};


//Setter for property firstVisibleStep which suppresses rerendering if possible -> Comment generated automatically
sap.ui.commons.RoadMap.prototype.setFirstVisibleStep = function(sFirstVisibleStep) {
	var bIsRendered = this.getDomRef() ? true : false;
	if(bIsRendered){
		if(sFirstVisibleStep){
			var oStep = sap.ui.getCore().byId(sFirstVisibleStep);
			if(oStep && oStep.getParent() && (oStep.getParent() === this || oStep.getParent().getParent() === this) && oStep.getVisible()){
				this.setProperty("firstVisibleStep", sFirstVisibleStep, true);
				sap.ui.commons.RoadMapRenderer.updateScrollArea(this);
			}
		}else{
			this.setProperty("firstVisibleStep", "", true);
			sap.ui.commons.RoadMapRenderer.updateScrollArea(this);
		}
	}else{
		this.setProperty("firstVisibleStep", sFirstVisibleStep);
	}
	return this;
};


//Setter for property width which suppresses rerendering if possible -> Comment generated automatically
sap.ui.commons.RoadMap.prototype.setWidth = function(sWidth) {
	var bIsRendered = this.getDomRef() ? true : false;
	this.setProperty("width", sWidth, bIsRendered);
	if(bIsRendered){
		sap.ui.commons.RoadMapRenderer.setRoadMapWidth(this, sWidth);
		sap.ui.commons.RoadMapRenderer.updateScrollArea(this, true);
	}
	return this;
};


//Setter for property selectedStep which suppresses rerendering if possible -> Comment generated automatically
sap.ui.commons.RoadMap.prototype.setSelectedStep = function(sSelectedStep) {
	var bIsRendered = this.getDomRef() ? true : false;
	if(bIsRendered){
		if(sSelectedStep){
			var oStep = sap.ui.getCore().byId(sSelectedStep);
			if(oStep && oStep.getParent() && (oStep.getParent() === this || oStep.getParent().getParent() === this)
				&& oStep.getEnabled() && oStep.getVisible()){
				sap.ui.commons.RoadMapRenderer.selectStepWithId(this, sSelectedStep);
				this.setProperty("selectedStep", sSelectedStep, true);
			}
		}else{
			sap.ui.commons.RoadMapRenderer.selectStepWithId(this, "");
			this.setProperty("selectedStep", "", true);
		}
	}else{
		this.setProperty("selectedStep", sSelectedStep);
	}
	return this;
};


/**
 * Called when the theme is changed.
 * @private
 */
sap.ui.commons.RoadMap.prototype.onThemeChanged = function(oEvent){
	this.iStepWidth = -1;
	if (this.getDomRef()) {
		this.invalidate();
	}
};


/**
 * Called before rendering starts by the renderer
 * (This is not the onBeforeRendering method which would be not called for the first rendering)
 * @private
 */
sap.ui.commons.RoadMap.prototype.doBeforeRendering = function(){
	//Bring the properties into a solid state
	var bIsValidSelectedStep = false;
	var bIsValidFirstStep = false;
	var aSteps = this.getSteps();
	for(var i=0; i<aSteps.length; i++){
		var oStep = aSteps[i];
		//expanded=true only possible if substeps available and enabled
		if(oStep.getSubSteps().length == 0 || !oStep.getEnabled()){
			oStep.setProperty("expanded", false, true);
		}
		//A selected step must exist, be enabled and visible
		if(!oStep.getEnabled() && !oStep.getVisible() && this.getSelectedStep() == oStep.getId()){
			this.setProperty("selectedStep", "", true);
		}else if(oStep.getEnabled() && oStep.getVisible() && this.getSelectedStep() == oStep.getId()){
			bIsValidSelectedStep = true;
		}
		//A first step must exist and be visible
		if(oStep.getVisible() && this.getFirstVisibleStep() == oStep.getId()){
			bIsValidFirstStep = true;
		}

		var aSubSteps = oStep.getSubSteps();
		for(var j=0; j<aSubSteps.length; j++){
			var oSubStep = aSubSteps[j];
			//expanded always false
			oSubStep.setProperty("expanded", false, true);
			//A selected step must exist, be enabled and visible
			if(!oSubStep.getEnabled() && !oSubStep.getVisible() && this.getSelectedStep() == oSubStep.getId()){
				this.setProperty("selectedStep", "", true);
			}else if(oSubStep.getEnabled() && oSubStep.getVisible() && this.getSelectedStep() == oSubStep.getId()){
				bIsValidSelectedStep = true;
			}
			//A first step must exist and be visible
			if(oSubStep.getVisible() && this.getFirstVisibleStep() == oSubStep.getId()){
				bIsValidFirstStep = true;
			}
		}
	}

	if(!bIsValidSelectedStep) {
		this.setProperty("selectedStep", "", true);
	}
	if(!bIsValidFirstStep) {
		this.setProperty("firstVisibleStep", "", true);
	}

	// Cleanup resize event registration before re-rendering
	if(this.sResizeListenerId){
		sap.ui.core.ResizeHandler.deregister(this.sResizeListenerId);
		this.sResizeListenerId = null;
	}
};


/**
 * Called when the rendering is complete
 * @private
 */
sap.ui.commons.RoadMap.prototype.onAfterRendering = function(){

	var aSteps = this.getSteps();

	//Compute the step width
	if(this.iStepWidth == -1 && aSteps.length > 0){
		var jRef = aSteps[0].$();
		this.iStepWidth = jRef.outerWidth();
	}

	//Adapt the step labels if needed
	for(var i=0; i<aSteps.length; i++){
		var oStep = aSteps[i];
		sap.ui.commons.RoadMapRenderer.addEllipses(oStep);
		var aSubSteps = oStep.getSubSteps();
		for(var j=0; j<aSubSteps.length; j++){
			sap.ui.commons.RoadMapRenderer.addEllipses(aSubSteps[j]);
		}
	}

	//Adapt the size of the scroll area
	sap.ui.commons.RoadMapRenderer.updateScrollArea(this);

	// Listen to resizing
	this.sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(), jQuery.proxy(this.onresize, this));
};


/**
 * Called when the Roadmap is resized
 * @private
 */
sap.ui.commons.RoadMap.prototype.onresize = function(oEvent) {
	var fDoOnResize = function() {
		if (this.getDomRef()) {
			//Adapt the size of the scroll area
			sap.ui.commons.RoadMapRenderer.updateScrollArea(this, true);
			refreshFocus(this, "prev");
			this.sResizeInProgress = null;
		}
	};

	if(!!sap.ui.Device.browser.firefox){
		fDoOnResize.apply(this, []);
	}else{
		if(!this.sResizeInProgress){
			this.sResizeInProgress = jQuery.sap.delayedCall(300, this, fDoOnResize);
		}
	}
};


/**
 * Behavior implementation which is executed when the user clicks the step.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RoadMap.prototype.onclick = function(oEvent){
	handleSelect(this, oEvent);
};


/**
 * Behavior implementation which is executed when the user presses the space or enter key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RoadMap.prototype.onsapselect = function(oEvent){
	handleSelect(this, oEvent);
};


/**
 * Behavior implementation which is executed when the focus comes into the control or on one of its children.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RoadMap.prototype.onfocusin = function(oEvent){
	var jTarget = jQuery(oEvent.target);
	var jTargetId = jTarget.attr("id");
	if(jTargetId && jQuery.sap.endsWith(jTargetId, "-box")){
		this.sCurrentFocusedStepRefId = jTargetId.substring(0, jTargetId.length-4);
	}else if(jTargetId && (jQuery.sap.endsWith(jTargetId, "-Start") || jQuery.sap.endsWith(jTargetId, "-End"))){
		//Keep the current focus
	}else{
		this.sCurrentFocusedStepRefId = sap.ui.commons.RoadMapRenderer.getFirstVisibleRef(this).attr("id");
		refreshFocus(this);
	}
	//Remove the control from tab chain to make tab out working (see onfocusout)
	this.$().attr("tabindex", "-1");
};


/**
 * Behavior implementation which is executed when the focus leaves the control or one of its children.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RoadMap.prototype.onfocusout = function(oEvent){
	//Add the control to tab chain again to make tab in working (see onfocusin)
	this.$().attr("tabindex", "0");
};


/**
 * Behavior implementation which is executed when the user presses the arrow up or arrow left (RTL: arrow right) key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RoadMap.prototype.onsapprevious = function(oEvent){
	focusStep(oEvent, this, "prev");
};


/**
 * Behavior implementation which is executed when the user presses the arrow down or arrow right (RTL: arrow left) key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RoadMap.prototype.onsapnext = function(oEvent){
	focusStep(oEvent, this, "next");
};


/**
 * Behavior implementation which is executed when the user presses the home/pos1 key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RoadMap.prototype.onsaphome = function(oEvent){
	focusStep(oEvent, this, "first");
};


/**
 * Behavior implementation which is executed when the user presses the end key.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.RoadMap.prototype.onsapend = function(oEvent){
	focusStep(oEvent, this, "last");
};


//********* Private *********


//Called when either the Roadmap is clicked or the space or enter key is pressed
var handleSelect = function(oThis, oEvent){
	oEvent.stopPropagation();
	oEvent.preventDefault();

	var jTarget = jQuery(oEvent.target);
	var sTargetId = jTarget.attr("id");

	if(!sTargetId) {
		return;
	}

	//Handle event for the end of an expandable step
	var iIdx = sTargetId.lastIndexOf("-expandend");
	if(iIdx != -1){
		var oStep = sap.ui.getCore().byId(sTargetId.substring(0, iIdx));
		if(oStep && oThis.indexOfStep(oStep) >= 0){
			oStep.handleSelect(oEvent, true);
			return;
		}
	}

	//Handle select on delimiter
	if(sTargetId == oThis.getId() + "-Start"){
		if(jTarget.hasClass("sapUiRoadMapStartScroll")){
			scrollToNextStep(oThis, "prev", true);
		}else{
			refreshFocus(oThis);
		}
	}else if(sTargetId == oThis.getId() + "-End"){
		if(jTarget.hasClass("sapUiRoadMapEndScroll")){
			scrollToNextStep(oThis, "next", true);
		}else{
			refreshFocus(oThis);
		}
	}
};


//Helper function to scroll to following step (optionally with updating the focus (see focusStep)).
//Allowed directions are: next, prev, first, last.
var scrollToNextStep = function(oThis, sDir, bUpdateFocus){
	sap.ui.commons.RoadMapRenderer.scrollToNextStep(oThis, sDir, function(sFirstVisibleNodeId){
		var iIdx = sFirstVisibleNodeId.lastIndexOf("-expandend");
		if(iIdx != -1) {
			sFirstVisibleNodeId = sFirstVisibleNodeId.substring(0, iIdx);
		}
		oThis.setProperty("firstVisibleStep", sFirstVisibleNodeId, true);

		if(bUpdateFocus) {
			refreshFocus(oThis, sDir);
		}
	});
};


//Helper function to focus the following step of the current focused step in the given direction.
//Allowed directions are: next, prev, first, last. If this step is not visible an automatic scrolling is done.
var focusStep = function(oEvent, oThis, sDir){
	if(oEvent){
		oEvent.stopPropagation();
		oEvent.preventDefault();
	}
	if(!oThis.sCurrentFocusedStepRefId) {
		return;
	}

	var sFoo = sDir+"All";
	var bIsJumpToDelimiter = false;
	if(sDir == "first"){
		sFoo = "prevAll";
		bIsJumpToDelimiter = true;
	}else if(sDir == "last"){
		sFoo = "nextAll";
		bIsJumpToDelimiter = true;
	}

	var jCurrentFocusStep = jQuery.sap.byId(oThis.sCurrentFocusedStepRefId);
	var jFollowingSteps = jCurrentFocusStep[sFoo](":visible");
	var sFollowingFocusStepId = jQuery(jFollowingSteps.get(bIsJumpToDelimiter ? jFollowingSteps.length-1 : 0)).attr("id");
	if(sFollowingFocusStepId){
		if(!sap.ui.commons.RoadMapRenderer.isVisibleRef(oThis, sFollowingFocusStepId)) {
			scrollToNextStep(oThis, sDir);
		}

		jQuery.sap.byId(sFollowingFocusStepId+"-box").get(0).focus();
	}
};


//Sets the focus on the current focused step again. If the current focused step is not visible anymore
//the following step in the given direction is focused. Allowed directions are: next, prev, first, last
var refreshFocus = function(oThis, sDir){
	if(!oThis.sCurrentFocusedStepRefId) {
		return;
	}

	if(sDir && !sap.ui.commons.RoadMapRenderer.isVisibleRef(oThis, oThis.sCurrentFocusedStepRefId)){
		focusStep(null, oThis, sDir);
	}else{
		jQuery.sap.byId(oThis.sCurrentFocusedStepRefId+"-box").get(0).focus();
	}
};

}());