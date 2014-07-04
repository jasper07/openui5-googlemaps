/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides enumeration for changes in model
sap.ui.define(['jquery.sap.global'],
	function(jQuery) {
	"use strict";


	/**
	* @class
	* Change Reason for ListBindings.
	*
	* @static
	* @public
	* @name sap.ui.model.ChangeReason
	*/
	var ChangeReason = {
	
			/**
			 * The list was sorted
			 * @public
			 */
			Sort: "sort",
	
			/**
			 * The List was filtered
			 * @public
			 */
			Filter: "filter",
	
			/**
			 * The list has changed
			 * @public
			 */
			Change: "change",
	
			/**
			 * The list context has changed
			 * @public
			 */
			Context: "context",
			/**
			 * The list was refreshed
			 * @public
			 */
			Refresh: "refresh"
	};

	return ChangeReason;

}, /* bExport= */ true);
