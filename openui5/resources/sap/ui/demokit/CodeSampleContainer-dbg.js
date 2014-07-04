/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.demokit.CodeSampleContainer.
jQuery.sap.declare("sap.ui.demokit.CodeSampleContainer");
jQuery.sap.require("sap.ui.demokit.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new CodeSampleContainer.
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
 * <li>{@link #getScriptElementId scriptElementId} : string</li>
 * <li>{@link #getUiAreaId uiAreaId} : string</li>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getSourceVisible sourceVisible} : boolean (default: false)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '90%')</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.demokit.CodeSampleContainer#event:apply apply} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A container for both the source and the runtime results of a CodeSample. By default, only the runtime results are shown. There are additional controls that allow the user to display the source, modify and run it.
 * 
 * The container provides a sub container that can be used in calls to sap.ui.setRoot() as if it would be a normal UIArea. So the sample code doesn't have to know that it runs in a CodeSample container.
 * 
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.demokit.CodeSampleContainer
 */
sap.ui.core.Control.extend("sap.ui.demokit.CodeSampleContainer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.demokit",
	properties : {
		"scriptElementId" : {type : "string", group : "Misc", defaultValue : null},
		"uiAreaId" : {type : "string", group : "Misc", defaultValue : null},
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"sourceVisible" : {type : "boolean", group : "Misc", defaultValue : false},
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '90%'}
	},
	aggregations : {
    	"_uiarea" : {type : "sap.ui.demokit.UIAreaSubstitute", multiple : false, visibility : "hidden"}
	},
	events : {
		"apply" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.demokit.CodeSampleContainer with name <code>sClassName</code> 
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
 * @name sap.ui.demokit.CodeSampleContainer.extend
 * @function
 */

sap.ui.demokit.CodeSampleContainer.M_EVENTS = {'apply':'apply'};


/**
 * Getter for property <code>scriptElementId</code>.
 * Id of the script element that contains the initial sample code for this code sample.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>scriptElementId</code>
 * @public
 * @name sap.ui.demokit.CodeSampleContainer#getScriptElementId
 * @function
 */

/**
 * Setter for property <code>scriptElementId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sScriptElementId  new value for property <code>scriptElementId</code>
 * @return {sap.ui.demokit.CodeSampleContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.CodeSampleContainer#setScriptElementId
 * @function
 */


/**
 * Getter for property <code>uiAreaId</code>.
 * Id of the container for the running code. This Id can be used in calls to sap.ui.setRoot as if it would be a normal UIArea. Internally, a container UIElement is created with that Id.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>uiAreaId</code>
 * @public
 * @name sap.ui.demokit.CodeSampleContainer#getUiAreaId
 * @function
 */

/**
 * Setter for property <code>uiAreaId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sUiAreaId  new value for property <code>uiAreaId</code>
 * @return {sap.ui.demokit.CodeSampleContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.CodeSampleContainer#setUiAreaId
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ui.demokit.CodeSampleContainer#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.demokit.CodeSampleContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.CodeSampleContainer#setTitle
 * @function
 */


/**
 * Getter for property <code>sourceVisible</code>.
 * Whether the source code is visible or not.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>sourceVisible</code>
 * @public
 * @name sap.ui.demokit.CodeSampleContainer#getSourceVisible
 * @function
 */

/**
 * Setter for property <code>sourceVisible</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bSourceVisible  new value for property <code>sourceVisible</code>
 * @return {sap.ui.demokit.CodeSampleContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.CodeSampleContainer#setSourceVisible
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Width of the CodeSample container.
 *
 * Default value is <code>90%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.demokit.CodeSampleContainer#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>90%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.demokit.CodeSampleContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.CodeSampleContainer#setWidth
 * @function
 */


/**
 *  
 *
 * @name sap.ui.demokit.CodeSampleContainer#apply
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.code 
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'apply' event of this <code>sap.ui.demokit.CodeSampleContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.demokit.CodeSampleContainer</code>.<br/> itself. 
 *  
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.demokit.CodeSampleContainer</code>.<br/> itself.
 *
 * @return {sap.ui.demokit.CodeSampleContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.CodeSampleContainer#attachApply
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'apply' event of this <code>sap.ui.demokit.CodeSampleContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.demokit.CodeSampleContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.CodeSampleContainer#detachApply
 * @function
 */

/**
 * Fire event apply to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'code' of type <code>string</code> </li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.demokit.CodeSampleContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.demokit.CodeSampleContainer#fireApply
 * @function
 */


// Start of sap\ui\demokit\CodeSampleContainer.js
jQuery.sap.require("sap.ui.core.ResizeHandler");

sap.ui.demokit.CodeSampleContainer.prototype.init = function(){

	this._oUIArea = new sap.ui.demokit.UIAreaSubstitute(this.getUiAreaId());
	this.setAggregation("_uiarea", this._oUIArea);
	this._oCodeViewer = new sap.ui.demokit.CodeViewer({
		visible : false, 
		source : "", 
		press : [this._setCodeEditable, this],
		save : [this._saveAndApplyCode, this]
	});
	this._oCodeViewer.setParent(this); //TODO provide sAggregationName?
	this._oShowCodeLink = new sap.ui.commons.Link({	text : "Show Source", press : [this._toggleCodeDisplay, this]});
	this._oShowCodeLink.setParent(this); //TODO provide sAggregationName?
	this._oApplyCodeLink = new sap.ui.commons.Link({ visible: false, text : 'Apply', press : [this._saveAndApplyCode, this]});
	this._oApplyCodeLink.setParent(this); //TODO provide sAggregationName?

};

sap.ui.demokit.CodeSampleContainer.prototype.setSourceVisible = function(bSourceVisible) {
	this.setProperty("sourceVisible", bSourceVisible);
	this._oCodeViewer && this._oCodeViewer.setVisible(this.getSourceVisible());
	this._oShowCodeLink && this._oShowCodeLink.setText(this.getSourceVisible() ? "Hide Source" : "Show Source");
	this._oApplyCodeLink && this._oApplyCodeLink.setVisible(this.getSourceVisible());
};

sap.ui.demokit.CodeSampleContainer.prototype.setUiAreaId = function(sId) {
	this.setProperty("uiAreaId", sId);
	var aContent;
	if ( this._oUIArea ) {
		aContent = this._oUIArea.removeAllContent();
		this._oUIArea.destroy();
	}
	this._oUIArea = new sap.ui.demokit.UIAreaSubstitute(this.getUiAreaId());
	this.setAggregation("_uiarea", this._oUIArea);
	if ( aContent ) {
		for(var i=0; i<aContent.length; i++) {
			this._oUIArea.addContent(aContent[i]);
		}
	}
};

sap.ui.demokit.CodeSampleContainer.prototype.setScriptElementId = function(sId) {
	this.setProperty("scriptElementId", sId);
	this._oCodeViewer.setSource(this._getSource());
	if ( sId && !this._oScriptRef ) {
		var that = this;
		sap.ui.getCore().attachInitEvent(function() { that._oCodeViewer.setSource(that._getSource()) });
	}
};

sap.ui.demokit.CodeSampleContainer.prototype._getSource = function() {
	var sSource = "!source not found! (" + this.getScriptElementId() + ")";
	if ( this.getScriptElementId() ) {
		this._oScriptRef = jQuery.sap.domById(this.getScriptElementId());
		if ( this._oScriptRef ) {
			sSource = this._oScriptRef.innerHTML;
		}
	}
	return sSource;
};

sap.ui.demokit.CodeSampleContainer.prototype._setCodeEditable = function() {
	this._oCodeViewer.setEditable(true); 
	var that = this;
	setTimeout(function() { that._oCodeViewer.focus(); }, 50);
};

sap.ui.demokit.CodeSampleContainer.prototype._toggleCodeDisplay = function() {
	this.setSourceVisible(!this.getSourceVisible());
};

sap.ui.demokit.CodeSampleContainer.prototype._saveAndApplyCode = function() {
	var sCode = this._oCodeViewer.getSource();
	if ( this._oCodeViewer.getEditable() ) {
		sCode = this._oCodeViewer.getCurrentSource();
		this._oCodeViewer.setSource(sCode);
		this._oCodeViewer.setEditable(false);
	}

	// before executing the new code, we discard the old UIArea content 
	// Otherwise, invalidation might fail (due to the bPrerendered logic in Control)
	this._oUIArea.destroyContent();
	
	// now execute the code
	if ( !this.hasListeners("apply") ) {
		eval(sCode);
	} else {
		this.fireApply({ code : sCode });
	}
	
};
