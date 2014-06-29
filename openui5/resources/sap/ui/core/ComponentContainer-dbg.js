/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.ComponentContainer.
sap.ui.define(['./library','./Control'], function() {
	"use strict";


/**
 * Constructor for a new ComponentContainer.
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
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getUrl url} : sap.ui.core.URI</li>
 * <li>{@link #getSettings settings} : object</li>
 * <li>{@link #getPropagateModel propagateModel} : boolean (default: false)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getComponent component} : string | sap.ui.core.UIComponent</li></ul>
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
 * Component Container
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @experimental Since version 1.9.2. 
 * The Component concept is still under construction, so some implementation details can be changed in future.
 * @name sap.ui.core.ComponentContainer
 */
sap.ui.core.Control.extend("sap.ui.core.ComponentContainer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.core",
	properties : {
		"name" : {type : "string", group : "", defaultValue : null},
		"url" : {type : "sap.ui.core.URI", group : "", defaultValue : null},
		"settings" : {type : "object", group : "", defaultValue : null},
		"propagateModel" : {type : "boolean", group : "", defaultValue : false},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null}
	},
	associations : {
		"component" : {type : "sap.ui.core.UIComponent", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.core.ComponentContainer with name <code>sClassName</code> 
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
 * @name sap.ui.core.ComponentContainer.extend
 * @function
 */


/**
 * Getter for property <code>name</code>.
 * Component name, the package where the component is contained. The property can only be applied initially.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.ui.core.ComponentContainer#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.ComponentContainer#setName
 * @function
 */


/**
 * Getter for property <code>url</code>.
 * The URL of the component. The property can only be applied initially.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>url</code>
 * @public
 * @name sap.ui.core.ComponentContainer#getUrl
 * @function
 */

/**
 * Setter for property <code>url</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sUrl  new value for property <code>url</code>
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.ComponentContainer#setUrl
 * @function
 */


/**
 * Getter for property <code>settings</code>.
 * The settings object passed to the component when created. The property can only be applied initially.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>settings</code>
 * @public
 * @name sap.ui.core.ComponentContainer#getSettings
 * @function
 */

/**
 * Setter for property <code>settings</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oSettings  new value for property <code>settings</code>
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.ComponentContainer#setSettings
 * @function
 */


/**
 * Getter for property <code>propagateModel</code>.
 * Defines whether binding information is propagated to the component.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>propagateModel</code>
 * @public
 * @name sap.ui.core.ComponentContainer#getPropagateModel
 * @function
 */

/**
 * Setter for property <code>propagateModel</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bPropagateModel  new value for property <code>propagateModel</code>
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.ComponentContainer#setPropagateModel
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Container width in CSS size
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.core.ComponentContainer#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.ComponentContainer#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * Container height in CSS size
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.core.ComponentContainer#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.ComponentContainer#setHeight
 * @function
 */


/**
 * The component displayed in this ComponentContainer.
 *
 * @return {string} Id of the element which is the current target of the <code>component</code> association, or null
 * @public
 * @name sap.ui.core.ComponentContainer#getComponent
 * @function
 */

/**
 * The component displayed in this ComponentContainer.
 *
 * @param {string | sap.ui.core.UIComponent} vComponent 
 *    Id of an element which becomes the new target of this <code>component</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.core.ComponentContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.core.ComponentContainer#setComponent
 * @function
 */


	
// Start of sap/ui/core/ComponentContainer.js
/**
 * Returns the real component instance which is associated with the container.
 * @return {sap.ui.core.UIComponent} the component instance
 */
sap.ui.core.ComponentContainer.prototype.getComponentInstance = function () {
	var sComponentId = this.getComponent();
	return sap.ui.getCore().getComponent(sComponentId);
};


/*
 * TODO: make sure once a component is assigned to the container it cannot be 
 * exchanged later when the container is rendered.
 * 
 * Exchanging the component via setComponent is still required - see existing
 * examples in sap/ui/core/ComponentShell.html - but this opens up another
 * question which was not answered before - what to do here when exchanging
 * the component - destroy or not? Right now we at least unlink the container. 
 */
sap.ui.core.ComponentContainer.prototype.setComponent = function(oComponent) {
	// unlink the old component from the container
	var oOldComponent = this.getComponentInstance();
	if (oOldComponent) {
		// TODO: destroy or not destroy 
		oOldComponent.setContainer(undefined);
	}
	// set the new component
	this.setAssociation("component", oComponent);
	// cross link the new component and propagate the properties (models)
	oComponent = this.getComponentInstance();
	if (oComponent) {
		oComponent.setContainer(this);
		this.propagateProperties();
	}
};


/*
 * delegate the onBeforeRendering to the component instance
 */
sap.ui.core.ComponentContainer.prototype.onBeforeRendering = function(){

	// check if we have already a valid component instance
	// in this case we skip the component creation via props
	// ==> not in applySettings to make sure that components are lazy instantiated,
	//     e.g. in case of invisible containers the component will not be created
	//     immediately in the constructor.
	var oComponent = this.getComponentInstance();
	if (!oComponent) {
		// create the component / link to the container (if a name is given)
		var sName = this.getName();
		if (sName) {
			oComponent = sap.ui.component({
				name: sName,
				url: this.getUrl(),
				settings: this.getSettings() 
			});
			this.setComponent(oComponent);
		}
	}

	// delegate the onBeforeRendering to the component instance
	if (oComponent && oComponent.onBeforeRendering) {
		oComponent.onBeforeRendering();
	}
	
};

/*
 * delegate the onAfterRendering to the component instance
 */
sap.ui.core.ComponentContainer.prototype.onAfterRendering = function(){
	var oComponent = this.getComponentInstance();
	if (oComponent && oComponent.onAfterRendering) {
		oComponent.onAfterRendering();
	}
};


/*
 * once the container is destroyed we also destroy the component 
 */
sap.ui.core.ComponentContainer.prototype.exit = function(){
	var oComponent = this.getComponentInstance();
	if (oComponent) {
		oComponent.destroy();
	}
};


/*
 * overridden to support property propagation to the associated component
 */
sap.ui.core.ComponentContainer.prototype.propagateProperties = function (vName) {
	var oComponent = this.getComponentInstance();
	if (oComponent && this.getPropagateModel()) {
		this._propagateProperties(vName, oComponent);
		sap.ui.core.Control.prototype.propagateProperties.apply(this, arguments);
	}
};

	return sap.ui.core.ComponentContainer;

}, /* bExport = */ true);
