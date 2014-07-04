/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.mvc.XMLView.
sap.ui.define(['sap/ui/core/library','./View','jquery.sap.xml','sap/ui/base/DataType','sap/ui/model/resource/ResourceModel','sap/ui/core/XMLTemplateProcessor'], function() {
	"use strict";


/**
 * Constructor for a new mvc/XMLView.
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
 * A View defined using (P)XML and HTML markup.
 * @extends sap.ui.core.mvc.View
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.core.mvc.XMLView
 */
sap.ui.core.mvc.View.extend("sap.ui.core.mvc.XMLView", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.core"
}});


/**
 * Creates a new subclass of class sap.ui.core.mvc.XMLView with name <code>sClassName</code> 
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
 * @name sap.ui.core.mvc.XMLView.extend
 * @function
 */


// Start of sap/ui/core/mvc/XMLView.js



	/**
	 * Instantiates an XMLView of the given name and with the given id.
	 *
	 * The <code>viewName</code> must either correspond to an XML module that can be loaded
	 * via the module system (viewName + suffix ".view.xml") and which defines the view or must
	 * be a configuration object for a view.
	 * The configuration object can have a viewName, viewContent and a controller property. The viewName
	 * behaves as described above. ViewContent is optional and can hold the view description as XML string; if not
	 * given, the View content definition is loaded by the module system.
	 * The controller property can hold an controller instance. If a controller instance is given it 
	 * overrides the controller defined in the view.
	 *
	 * Like with any other control, id is optional and one will be created automatically.
	 *
	 * @param {string} [sId] id of the newly created view
	 * @param {string | object} vView name of the view or view configuration as described above.
	 * @public
	 * @static
	 * @return {sap.ui.core.mvc.XMLView} the created XMLView instance
	 */
	sap.ui.xmlview = function(sId, vView) {
		return sap.ui.view(sId, vView, sap.ui.core.mvc.ViewType.XML);
	};

	/**
	 * The type of the view used for the <code>sap.ui.view</code> factory 
	 * function. This property is used by the parsers to define the specific 
	 * view type.
	 * @private
	 */
	sap.ui.core.mvc.XMLView._sType = sap.ui.core.mvc.ViewType.XML;
	
	sap.ui.core.mvc.XMLView.prototype.initViewSettings = function(mSettings) {
		if (!mSettings) {
			throw new Error("mSettings must be given");
		}

		// View template handling - either template name or XML node is given
		if (mSettings.viewName && mSettings.viewContent) {
			throw new Error("View name and view content are given. There is no point in doing this, so please decide.");
		} else if ((mSettings.viewName || mSettings.viewContent) && mSettings.xmlNode) {
			throw new Error("View name/content AND an XML node are given. There is no point in doing this, so please decide.");
		} else if (!(mSettings.viewName || mSettings.viewContent) && !mSettings.xmlNode) {
			throw new Error("Neither view name/content nor an XML node is given. One of them is required.");
		}

		if (mSettings.viewName) {
			this._xContent = sap.ui.core.XMLTemplateProcessor.loadTemplate(mSettings.viewName);
		} else if (mSettings.viewContent) {
			this.mProperties["viewContent"] = mSettings.viewContent;
			this._xContent = jQuery.sap.parseXML(mSettings.viewContent);
			if (this._xContent.parseError.errorCode != 0){
				var oParseError = this._xContent.parseError;
				throw new Error("The following problem occurred: XML parse Error for " + oParseError.url + " code: " + oParseError.errorCode + " reason: " +
						oParseError.reason +  " src: " + oParseError.srcText + " line: " +  oParseError.line +  " linepos: " + oParseError.linepos +  " filepos: " + oParseError.filepos);
			}else{
				this._xContent = this._xContent.documentElement;
			}

		} else if (mSettings.xmlNode) {
			this._xContent = mSettings.xmlNode;
		} else {
			// does not happen, already checked
		}
		this._oContainingView = mSettings.containingView || this;

		// extract the properties of the view from the XML element
		if ( !this.isSubView() ) {
			// for a real XMLView, we need to parse the attributes of the root node
			sap.ui.core.XMLTemplateProcessor.parseViewAttributes(this._xContent, this, mSettings);
		} else {
			// when used as fragment: prevent connection to controller, only top level XMLView must connect
			delete mSettings.controller;
		}

		if((this._resourceBundleName || this._resourceBundleUrl) && (!mSettings.models || !mSettings.models[this._resourceBundleAlias])) {
			var model = new sap.ui.model.resource.ResourceModel({bundleName:this._resourceBundleName, bundleUrl:this._resourceBundleUrl, bundleLocale:this._resourceBundleLocale});
			this.setModel(model,this._resourceBundleAlias);
		}

		// Delegate for after rendering notification before onAfterRendering of child controls
		var that = this;
		this.oAfterRenderingNotifier = new sap.ui.core.mvc.XMLAfterRenderingNotifier();
		this.oAfterRenderingNotifier.addDelegate({
			onAfterRendering: function() {
				that.onAfterRenderingBeforeChildren()
			}
		});
	};

	sap.ui.core.mvc.XMLView.prototype.exit = function() {
		this.oAfterRenderingNotifier.destroy();
		sap.ui.core.mvc.View.prototype.exit.apply(this, arguments);
	};

	sap.ui.core.mvc.XMLView.prototype.onControllerConnected = function(oController) {
		var that=this;
		// unset any preprocessors (e.g. from an enclosing JSON view)
		sap.ui.base.ManagedObject.runWithPreprocessors(function() {
			// parse the XML tree
			that._aParsedContent = sap.ui.core.XMLTemplateProcessor.parseTemplate(that._xContent, that);
		});
	};

	sap.ui.core.mvc.XMLView.prototype.getControllerName = function() {
		return this._controllerName;
	};


	sap.ui.core.mvc.XMLView.prototype.isSubView = function() {
		return this._oContainingView != this;
	};

	/**
	 * If the HTML doesn't contain own content, it tries to reproduce existing content
	 * This is executed before the onAfterRendering of the child controls, to ensure that
	 * the HTML is already at its final position, before additional operations are executed.
	 */
	sap.ui.core.mvc.XMLView.prototype.onAfterRenderingBeforeChildren = function() {

		if ( this._$oldContent.length !== 0 ) {
			// jQuery.sap.log.debug("after rendering for " + this);

			// move DOM of children into correct place in preserved DOM
			var aChildren = this.getAggregation("content");
			if ( aChildren ) {
				for(var i=0; i<aChildren.length; i++) {
					var $childDOM = aChildren[i].$();
					// jQuery.sap.log.debug("replacing placeholder for " + aChildren[i] + " with content");
					jQuery.sap.byId("sap-ui-dummy-" + aChildren[i].getId(), this._$oldContent).replaceWith($childDOM);
				}
			}
			// move preserved DOM into place
			// jQuery.sap.log.debug("moving preserved dom into place for " + this);
			jQuery.sap.byId("sap-ui-dummy-" + this.getId()).replaceWith(this._$oldContent);
		}
		this._$oldContent = undefined;
	};
	
	sap.ui.core.mvc.XMLView.prototype._onChildRerenderedEmpty = function(oControl, oElement) {
		// when the render manager notifies us about an empty child rendering, we replace the old DOM with a dummy
		jQuery(oElement).replaceWith('<div id="sap-ui-dummy-' + oControl.getId() + '" class="sapUiHidden"/>');
		return true; // indicates that we have taken care
	};
	
	/**
	 * Dummy control for after rendering notification before onAfterRendering of
	 * child controls of the XMLView is called
	 */
	sap.ui.core.Control.extend("sap.ui.core.mvc.XMLAfterRenderingNotifier", {
		renderer: function(oRM, oControl) {
			oRM.write(""); // onAfterRendering is only called if control produces output
		}
	});



	return sap.ui.core.mvc.XMLView;

}, /* bExport = */ true);
