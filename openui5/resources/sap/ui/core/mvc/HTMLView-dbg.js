/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.mvc.HTMLView.
sap.ui.define(['sap/ui/core/library','./View','sap/ui/core/DeclarativeSupport','sap/ui/core/RenderManager'], function() {
	"use strict";


/**
 * Constructor for a new mvc/HTMLView.
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
 * <ul></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.mvc.View#constructor sap.ui.core.mvc.View}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A view defined/constructed by declarative HTML.
 * @extends sap.ui.core.mvc.View
 *
 * @author Stefan Hipfel, Tino Butz 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.9.2
 * @name sap.ui.core.mvc.HTMLView
 */
sap.ui.core.mvc.View.extend("sap.ui.core.mvc.HTMLView", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.core"
}});


/**
 * Creates a new subclass of class sap.ui.core.mvc.HTMLView with name <code>sClassName</code> 
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
 * @name sap.ui.core.mvc.HTMLView.extend
 * @function
 */


// Start of sap/ui/core/mvc/HTMLView.js


	/**
	 * Defines or creates an instance of a declarative HTML view.
	 *
	 * The behavior of this method depends on the signature of the call and on the current context.
	 *
	 * <ul>
	 * <li>View Definition <code>sap.ui.htmlview(sId, vView)</code>: Defines a view of the given name with the given
	 * implementation. sId must be the views name, vView must be an object and can contain
	 * implementations for any of the hooks provided by HTMLView</li>
	 * <li>View Instantiation <code>sap.ui.htmlview(sId?, vView)</code>: Creates an instance of the view with the given name (and id)</li>.
	 * </ul>
	 *
	 * Any other call signature will lead to a runtime error. If the id is omitted in the second variant, an id will
	 * be created automatically.
	 *
	 * @param {string} [sId] id of the newly created view, only allowed for instance creation
	 * @param {string | object} vView name or implementation of the view.
	 * @public
	 * @static
	 * @return {sap.ui.core.mvc.HTMLView | undefined} the created HTMLView instance in the creation case, otherwise undefined
	 */
	sap.ui.htmlview = function(sId, vView) {
		return sap.ui.view(sId, vView, sap.ui.core.mvc.ViewType.HTML);
	};
	
	/**
	 * The type of the view used for the <code>sap.ui.view</code> factory 
	 * function. This property is used by the parsers to define the specific 
	 * view type.
	 * @private
	 */
	sap.ui.core.mvc.HTMLView._sType = sap.ui.core.mvc.ViewType.HTML;
	
	/**
	 * The template cache. Templates are only loaded once.
	 * 
	 * @private
	 * @static
	 */
	sap.ui.core.mvc.HTMLView._mTemplates = {};


	/**
	 * A map with the allowed settings for the view.
	 * 
	 * @private
	 * @static
	 */
	sap.ui.core.mvc.HTMLView._mAllowedSettings = {
			"viewName" : true,
			"controller" : true,
			"viewContent" : true,
			"controllerName" : true,
			"resourceBundleName" : true,
			"resourceBundleUrl" : true,
			"resourceBundleLocale" : true,
			"resourceBundleAlias" : true
	};
	
	
	/**
	 * Loads and returns a template for the given template name. Templates are only loaded once {@link sap.ui.core.mvc.HTMLView._mTemplates}.
	 * 
	 * @param {string} sTemplateName The name of the template
	 * @return {string} the template data
	 * @private
	 * @static
	 */
	sap.ui.core.mvc.HTMLView._getTemplate = function(sTemplateName) {
		var sUrl = this._getViewUrl(sTemplateName);
		var sHTML = this._mTemplates[sUrl];
		
		if (!sHTML) {
			sHTML = this._loadTemplate(sTemplateName);
			// TODO discuss 
			// a) why caching at all (more precise: why for HTMLView although we refused to do it for other view types - risk of a memory leak!)
			// b) why cached via URL instead of via name? Any special scenario in mind?
			this._mTemplates[sUrl] = sHTML;
		}
		return sHTML;
	};


	/**
	 * Abstract method implementation. Returns the name of the controller.
	 * @return {string} the name of the set controller. Returns undefined when no controller is set.
	 * @private
	 */
	sap.ui.core.mvc.HTMLView.prototype.getControllerName = function() {
		return this._controllerName;
	};


	/**
	 * Returns the view URL for a given template name in respect of the module path.
	 * 
	 * @param {string} sTemplateName The name of the template
	 * @return {string} the view url
	 * @private
	 * @static
	 */
	sap.ui.core.mvc.HTMLView._getViewUrl = function(sTemplateName) {
		return jQuery.sap.getModulePath(sTemplateName, ".view.html");
	};


	/**
	 * Loads and returns the template from a given URL.
	 * 
	 * @param {string} sTemplateName The name of the template
	 * @return {string} the template data
	 * @private
	 * @static
	 */
	sap.ui.core.mvc.HTMLView._loadTemplate = function(sTemplateName) {
		var sResourceName = jQuery.sap.getResourceName(sTemplateName, ".view.html"); 
		return jQuery.sap.loadResource(sResourceName);
	};


	/**
	 * Abstract method implementation.
	 * 
	 * @see sap.ui.core.mvc.View#initViewSettings
	 * 
	 * @private
	 */
	sap.ui.core.mvc.HTMLView.prototype.initViewSettings = function (mSettings) {
		if (!mSettings) {
			throw new Error("mSettings must be given");
		}

		// View template handling - no JSON template given
		if (mSettings.viewName && mSettings.viewContent) {
			throw new Error("View name and view content are given. There is no point in doing this, so please decide.");
		} else if (!mSettings.viewName && !mSettings.viewContent) {
			throw new Error("Neither view name nor view content is given. One of them is required.");
		}

		var sHTML = mSettings.viewContent || sap.ui.core.mvc.HTMLView._getTemplate(mSettings.viewName);
		this._oTemplate = document.createElement("div");
		var sHTML = sap.ui.core.RenderManager.prepareHTML5(sHTML);

		if (typeof sHTML === "string") {
			this._oTemplate.innerHTML = sHTML;
		} else {
			var oNodeList = sHTML;
			var oFragment = document.createDocumentFragment();
			for (var i=0; i<oNodeList.length;i++) {
				oFragment.appendChild(oNodeList.item(i));
			}
			this._oTemplate.appendChild(oFragment);
		}

		var oMetaElement = this._oTemplate.getElementsByTagName("template")[0];
		var oProperties = this.getMetadata().getAllProperties();

		if (oMetaElement) {
			var self = this;
			var DeclarativeSupport = sap.ui.core.DeclarativeSupport;
			jQuery.each(oMetaElement.attributes, function(iIndex, oAttr) {
				var sName = DeclarativeSupport.convertAttributeToSettingName(oAttr.name, self.getId());
				var sValue = oAttr.value;
				var oProperty = oProperties[sName];
				if (!mSettings[sName]) {
					if (oProperty) {
						mSettings[sName] = DeclarativeSupport.convertValueToType(DeclarativeSupport.getPropertyDataType(oProperty),sValue);
					} else if (sap.ui.core.mvc.HTMLView._mAllowedSettings[sName]){
						mSettings[sName] = sValue;	
					}
				}
			});
			this._oTemplate = oMetaElement;
		}

		// This is a fix for browsers that support web components
		if (this._oTemplate.content) {
			var oFragment = this._oTemplate.content;
			// Create a new template, as innerHTML would be empty for TemplateElements when the fragment is appended directly
			this._oTemplate = document.createElement("div");
			// Make the shadow DOM available in the DOM
			this._oTemplate.appendChild(oFragment);
		}

		if (mSettings.controllerName) {
		  this._controllerName = mSettings.controllerName;
		}
		if((mSettings.resourceBundleName || mSettings.resourceBundleUrl) && (!mSettings.models || !mSettings.models[mSettings.resourceBundleAlias])) {
			var model = new sap.ui.model.resource.ResourceModel({bundleName:mSettings.resourceBundleName, bundleUrl:mSettings.resourceBundleUrl, bundleLocale:mSettings.resourceBundleLocale});
			this.setModel(model, mSettings.resourceBundleAlias);
		}
	};

	
	/**
	 * Abstract method implementation.
	 * 
	 * @see sap.ui.core.mvc.View#onControllerConnected
	 * 
	 * @private
	 */
	sap.ui.core.mvc.HTMLView.prototype.onControllerConnected = function(oController) {
		// unset any preprocessors (e.g. from an enclosing HTML view)
		var self = this;
		sap.ui.base.ManagedObject.runWithPreprocessors(function() {
			sap.ui.core.DeclarativeSupport.compile(self._oTemplate, self);
		});
	};
	
	
	/**
	 * Called when the control is destroyed. Use this one to free resources and finalize activities.
	 */
	sap.ui.core.mvc.HTMLView.prototype.exit = function() {
		this._oTemplate = null;
		sap.ui.core.mvc.View.prototype.exit.call(this);
		// Destroy all unassociated controls that are connected with the view
		if (this._connectedControls) {
			for (var i = 0; i < this._connectedControls.length; i++) {
				this._connectedControls[i].destroy();
			}
			this._connectedControls = null;
		}
	};


	/**
	 * Internal method to connect unassociated controls to the view. All controls will be destroyed when the view is destroyed. 
     *
	 * @param {sap.ui.core.Control} oControl reference to a Control
	 * @private
	 */
	 sap.ui.core.mvc.HTMLView.prototype.connectControl = function(oControl) {
		this._connectedControls = this._connectedControls || [];
		this._connectedControls.push(oControl);
	};

	return sap.ui.core.mvc.HTMLView;

}, /* bExport = */ true);
