/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the XML model implementation of a property binding
sap.ui.define(['jquery.sap.global', 'sap/ui/model/ClientPropertyBinding'],
	function(jQuery, ClientPropertyBinding) {
	"use strict";


	/**
	 *
	 * @class
	 * Property binding implementation for XML format
	 *
	 * @param {sap.ui.model.xml.XMLModel} oModel
	 * @param {string} sPath
	 * @param {sap.ui.model.Context} oContext
	 * @param {object} [mParameters]
	 * @name sap.ui.model.xml.XMLPropertyBinding
	 * @extends sap.ui.model.PropertyBinding
	 */
	var XMLPropertyBinding = ClientPropertyBinding.extend("sap.ui.model.xml.XMLPropertyBinding");
	
	/**
	 * @see sap.ui.model.PropertyBinding.prototype.setValue
	 * @name sap.ui.model.xml.XMLPropertyBinding#setValue
	 * @function
	 */
	XMLPropertyBinding.prototype.setValue = function(oValue){
		if (this.oValue != oValue){
			// the binding value will be updated by the model. The model calls checkupdate on all bindings after updating its value.
			this.oModel.setProperty(this.sPath, oValue, this.oContext);
		}
	};
	
	/**
	 * Check whether this Binding would provide new values and in case it changed,
	 * inform interested parties about this.
	 * 
	 * @param {boolean} bForceupdate
	 * 
	 * @name sap.ui.model.xml.XMLPropertyBinding#checkUpdate
	 * @function
	 */
	XMLPropertyBinding.prototype.checkUpdate = function(bForceupdate){
		var oValue = this._getValue();
		if(oValue !== this.oValue || bForceupdate) {// optimize for not firing the events when unneeded
			this.oValue = oValue;
			this._fireChange({reason: sap.ui.model.ChangeReason.Change});
		}
	};

	return XMLPropertyBinding;

}, /* bExport= */ true);
