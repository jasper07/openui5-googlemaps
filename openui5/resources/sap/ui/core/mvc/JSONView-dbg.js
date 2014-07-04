/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.mvc.JSONView.
sap.ui.define(['sap/ui/core/library','./View'], function() {
	"use strict";


/**
 * Constructor for a new mvc/JSONView.
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
 * A View defined using JSON.
 * @extends sap.ui.core.mvc.View
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.core.mvc.JSONView
 */
sap.ui.core.mvc.View.extend("sap.ui.core.mvc.JSONView", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.core"
}});


/**
 * Creates a new subclass of class sap.ui.core.mvc.JSONView with name <code>sClassName</code> 
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
 * @name sap.ui.core.mvc.JSONView.extend
 * @function
 */


// Start of sap/ui/core/mvc/JSONView.js
(function(){

	/**
	 * Creates a JSON view of the given name and id.
	 *
	 * The <code>viewName</code> must either correspond to an JSON module that can be loaded
	 * via the module system (viewName + suffix ".view.json") and which defines the view or must
	 * be a configuration object for a view.
	 * The configuration object can have a vieName, viewContent and a controller property. The viewName
	 * behaves as described above. ViewContent can hold the view description as JSON string. The controller
	 * property can hold an controller instance. If a controller instance is given it overrides the
	 * controller defined in the view.
	 *
	 * Like with any other control, an id is optional and will be created when missing.
	 *
	 * @param {string} [sId] id of the newly created view
	 * @param {string | object} vView name of the view or view configuration as described above.
	 * @public
	 * @static
	 * @return {sap.ui.core.mvc.JSONView} the created JSONView instance
	 */
	sap.ui.jsonview = function(sId, vView) {
		return sap.ui.view(sId, vView, sap.ui.core.mvc.ViewType.JSON);
	};
	
	/**
	 * The type of the view used for the <code>sap.ui.view</code> factory 
	 * function. This property is used by the parsers to define the specific 
	 * view type.
	 * @private
	 */
	sap.ui.core.mvc.JSONView._sType = sap.ui.core.mvc.ViewType.JSON;
	
	sap.ui.core.mvc.JSONView.prototype.initViewSettings = function(mSettings) {
		if (!mSettings) {
			throw new Error("mSettings must be given");
		}

		// View template handling - no JSON template given
		if (mSettings.viewName && mSettings.viewContent) {
			throw new Error("View name and view content are given. There is no point in doing this, so please decide.");
		} else if (!mSettings.viewName && !mSettings.viewContent) {
			throw new Error("Neither view name nor view content is given. One of them is required.");
		}

		if (mSettings.viewName) {
			this._loadTemplate(mSettings.viewName);
		} else if (mSettings.viewContent) {
			this.mProperties["viewContent"] = mSettings.viewContent;
			if (typeof mSettings.viewContent === "string") {
				this._oJSONView = jQuery.parseJSON(mSettings.viewContent);
				if (!this._oJSONView) { // would lead to errors later on
					throw new Error("error when parsing viewContent: " + mSettings.viewContent);
				}
			} else if (typeof mSettings.viewContent === "object") {
				this._oJSONView = mSettings.viewContent;
			} else {
				throw new Error("viewContent must be a JSON string or object, but is a " + (typeof mSettings.viewContent));
			}
		} else {
			// does not happen, already checked
		}

		if((this._oJSONView.resourceBundleName || this._oJSONView.resourceBundleUrl) && (!mSettings.models || !mSettings.models[this._oJSONView.resourceBundleAlias])) {
			var model = new sap.ui.model.resource.ResourceModel({bundleName:this._oJSONView.resourceBundleName, bundleUrl:this._oJSONView.resourceBundleUrl});
			this.setModel(model, this._oJSONView.resourceBundleAlias);
		}

	};

	sap.ui.core.mvc.JSONView.prototype.onControllerConnected = function(oController) {
		var that = this;

		// use preprocessors to fix IDs, associations and event handler references
		sap.ui.base.ManagedObject.runWithPreprocessors(function() {
				// parse
				that.applySettings({ content : that._oJSONView.content});
			},

			{
				// preprocessors
				id : function(sId) {
					// prefix only if prefix doesn't exist already. Avoids double prefixes 
					// for composite components (now done in createId)
					return that.createId(sId);
				},
				// preprocess 'mSettings' for setting the controller as Listener for defined events
				// => make sure to store old preprocessor in case of nested views
				settings : function(oSettings) {
					var oMetadata = this.getMetadata(),
					aValidKeys = oMetadata.getJSONKeys(),
					sKey, oValue, oKeyInfo;
					for(sKey in oSettings) {
						// get info object for the key
						if ( oKeyInfo = aValidKeys[sKey] ) {
							oValue = oSettings[sKey];
							switch(oKeyInfo._iKind) {
							case 3: // SINGLE ASSOCIATIONS
								// prefix the association ids with the view id
								oSettings[sKey] = that.createId(oValue);
								break;
							case 5: // EVENTS
								if ( typeof oSettings[sKey] === "string" ) {
									oSettings[sKey] = [oController[oSettings[sKey]], oController];
								}
								break;
							}
						}
					}
				}
			});
		
	};

	sap.ui.core.mvc.JSONView.prototype._loadTemplate = function(sTemplateName) {
		var sResourceName = jQuery.sap.getResourceName(sTemplateName, ".view.json"); 
		this._oJSONView = jQuery.sap.loadResource(sResourceName);
	};

	sap.ui.core.mvc.JSONView.prototype.getControllerName = function() {
		return this._oJSONView.controllerName;
	};

}());

	return sap.ui.core.mvc.JSONView;

}, /* bExport = */ true);
