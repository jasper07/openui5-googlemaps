/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.mvc.TemplateView.
sap.ui.define(['sap/ui/core/library','./View'], function() {
	"use strict";


/**
 * Constructor for a new mvc/TemplateView.
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
 * A view defined in a template.
 * @extends sap.ui.core.mvc.View
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16.0
 * @name sap.ui.core.mvc.TemplateView
 */
sap.ui.core.mvc.View.extend("sap.ui.core.mvc.TemplateView", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.core"
}});


/**
 * Creates a new subclass of class sap.ui.core.mvc.TemplateView with name <code>sClassName</code> 
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
 * @name sap.ui.core.mvc.TemplateView.extend
 * @function
 */


// Start of sap/ui/core/mvc/TemplateView.js
(function(){
	
	/**
	 * Defines or creates an instance of a template view.
	 *
	 * The behavior of this method depends on the signature of the call and on the current context.
	 *
	 * <ul>
	 * <li>View Definition <code>sap.ui.templateview(sId, vView)</code>: Defines a view of the given name with the given
	 * implementation. sId must be the views name, vView must be an object and can contain
	 * implementations for any of the hooks provided by templateview</li>
	 * <li>View Instantiation <code>sap.ui.templateview(sId?, vView)</code>: Creates an instance of the view with the given name (and id)</li>.
	 * </ul>
	 *
	 * Any other call signature will lead to a runtime error. If the id is omitted in the second variant, an id will
	 * be created automatically.
	 *
	 * @param {string} [sId] id of the newly created view, only allowed for instance creation
	 * @param {string | object} vView name or implementation of the view.
	 * @public
	 * @static
	 * @return {sap.ui.core.mvc.TemplateView | undefined} the created TemplateView instance in the creation case, otherwise undefined
	 */
	sap.ui.templateview = function(sId, vView) {
		return sap.ui.view(sId, vView, sap.ui.core.mvc.ViewType.Template);
	};

	/**
	 * The type of the view used for the <code>sap.ui.view</code> factory 
	 * function. This property is used by the parsers to define the specific 
	 * view type.
	 * @private
	 */
	sap.ui.core.mvc.TemplateView._sType = sap.ui.core.mvc.ViewType.Template;
	
	/**
	 * Abstract method implementation. Returns the name of the controller.
	 * @return {string} the name of the set controller. Returns undefined when no controller is set.
	 * @private
	 */
	sap.ui.core.mvc.TemplateView.prototype.getControllerName = function() {
		return this._sControllerName;
	};


	/**
	 * Returns the view URL for a given template name in respect of the module path.
	 * 
	 * @param {string} sTemplateName The name of the template
	 * @return {string} the view url
	 * @private
	 * @static
	 */
	sap.ui.core.mvc.TemplateView._getViewUrl = function(sTemplateName) {
		return jQuery.sap.getModulePath(sTemplateName, ".view.tmpl");
	};

	/**
	 * Abstract method implementation.
	 * 
	 * @see sap.ui.core.mvc.View#initViewSettings
	 * 
	 * @private
	 */
	sap.ui.core.mvc.TemplateView.prototype.initViewSettings = function (mSettings) {
		if (!mSettings) {
			throw new Error("mSettings must be given");
		}

		// View template handling - no Tmpl template given
		if (!mSettings.viewName) {
			throw new Error("No view name is given.");
		}
		
		this._oTemplate = sap.ui.template({
			id: this.getId(),
			src: sap.ui.core.mvc.TemplateView._getViewUrl(mSettings.viewName)
		});
		this._sControllerName = this._oTemplate._sControllerName;
		this._oTemplate = this._oTemplate.createControl(undefined, undefined, this);
		this.addContent(this._oTemplate);
	};

}());

	return sap.ui.core.mvc.TemplateView;

}, /* bExport = */ true);
