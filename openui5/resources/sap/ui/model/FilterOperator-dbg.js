/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides enumeration sap.ui.model.FilterOperator
sap.ui.define(['jquery.sap.global'],
	function(jQuery) {
	"use strict";


	/**
	* @class
	* Operators for the Filter.
	*
	* @static
	* @public
	* @name sap.ui.model.FilterOperator
	*/
	var FilterOperator = {
			/**
			 * FilterOperator equals
			 * @public
			 */
			EQ: "EQ",
	
			/**
			 * FilterOperator not equals
			 * @public
			 */
			NE: "NE",
	
			/**
			 * FilterOperator less than
			 * @public
			 */
			LT: "LT",
	
			/**
			 * FilterOperator less or equals
			 * @public
			 */
			LE: "LE",
	
			/**
			 * FilterOperator greater than
			 * @public
			 */
			GT: "GT",
	
			/**
			 * FilterOperator greater or equals
			 * @public
			 */
			GE: "GE",
	
			/**
			 * FilterOperator between
			 * @public
			 */
			BT: "BT",
	
			/**
			 * FilterOperator contains
			 * @public
			 */
			Contains: "Contains",
	
			/**
			 * FilterOperator starts with
			 * @public
			 */
			StartsWith: "StartsWith",
	
			/**
			 * FilterOperator ends with
			 * @public
			 */
			EndsWith: "EndsWith"
	};

	return FilterOperator;

}, /* bExport= */ true);
