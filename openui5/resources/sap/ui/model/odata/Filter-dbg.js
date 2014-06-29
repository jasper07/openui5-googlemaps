/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides a filter for list bindings
sap.ui.define(['jquery.sap.global', 'sap/ui/model/FilterOperator'],
	function(jQuery, FilterOperator) {
	"use strict";


	/**
	 * Constructor for Filter
	 *
	 * @class
	 * Filter for the list binding
	 *
	 * @param {string} sPath the binding path for this filter
	 * @param {object[]} aValues Array of FilterOperators and their values: [{operator:"GE",value1:"val1"},{operator:"LE",value1:"val1"},{operator:"BT",value1:"val1",value2:"val2"}]
	 * @param {boolean} [bAND=true] If true the values from aValues will be ANDed; otherwise ORed
	 * @public
	 * @name sap.ui.model.odata.Filter
	 * @deprecated
	 */
	var Filter = sap.ui.base.Object.extend("sap.ui.model.odata.Filter", /** @lends sap.ui.model.odata.Filter */ {
		
		constructor : function(sPath, aValues, bAND){
			if (typeof sPath === "object") {
				var oFilterData = sPath;
				sPath = oFilterData.path;
				aValues = oFilterData.values;
				bAND = oFilterData.and;
			}
			this.sPath = sPath;
			this.aValues = aValues;
			this.bAND = bAND == undefined ? true : bAND;
		}
	
	});
	

	return Filter;

}, /* bExport= */ true);
