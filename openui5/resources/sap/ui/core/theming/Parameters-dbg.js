/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/**
 * @namespace
 * @name sap.ui.core.theming
 * @public
 */

sap.ui.define(['jquery.sap.global', 'sap/ui/core/Core'],
	function(jQuery, Core) {
	"use strict";


	
	
		/**
		 * A helper used for (read-only) access to CSS parameters at runtime.
		 *
		 * @class A helper used for (read-only) access to CSS parameters at runtime
		 * @author SAP AG
		 * @static
		 *
		 * @public
		 * @name sap.ui.core.theming.Parameters
		 */
		var Parameters = {};
	
		var mParameters = null;
		var sTheme = null;
		
		function resetParameters() {
			mParameters = null;
		}
	
		/*
		 * Load parameters for a library/theme combination as identified by the URL of the library.css 
		 */
		function loadParameters(sUrl) {
			var oResponse,
				oResult;
			
			// derive parameter file URL from CSS file URL
			// $1: name of library (incl. variants)
			// $2: additional parameters, e.g. for sap-ui-merged use case
			sUrl = sUrl.replace(/\/library([^\/.]*)\.(?:css|less)($|[?#])/, function($0,$1,$2) {
				return "/library-parameters.json" + ($2 ? $2 : "");
			});
			
			// load and evaluate parameter file 
			oResponse = jQuery.sap.sjax({url:sUrl,dataType:'json'});
			if (oResponse.success) {
				oResult = (typeof oResponse.data == "string") ? jQuery.parseJSON(oResponse.data) : oResponse.data; // FIXME jQuery1.7.1 always parses JSON, so why is it checked here?
				if ( jQuery.isArray(oResult) ) {
					// in the sap-ui-merged use case, multiple JSON files are merged into and transfered as a single JSON array  
					for(var j=0; j<oResult.length; j++) {
					  mParameters = jQuery.extend(mParameters, oResult[j]);
					}
				} else {
				  mParameters = jQuery.extend(mParameters, oResult);
				}
			} else {
				// ignore failure at least temporarily as long as there are libraries built using outdated tools which produce no json file
				jQuery.sap.log.warning("Could not load theme parameters from: " + sUrl); // could be an error as well, but let's avoid more CSN messages...
			}
	
		}
	
		function getParameters() {
			if (!mParameters) {
	
				mParameters = {};
				sTheme = sap.ui.getCore().getConfiguration().getTheme();
				
				jQuery("link[id^=sap-ui-theme-]").each(function() {
					loadParameters(this.href);
				});
				
			}
			return mParameters;
		}
	
		/**
		 * Called by the Core when a new library and its stylesheet have been loaded.
		 * @param {string} sUrl URL of the library stylesheet
		 * @private
		 * @name sap.ui.core.theming.Parameters._addLibraryTheme
		 * @function
		 */
		Parameters._addLibraryTheme = function(sUrl) {
			// only load parameters if someone had requested them before
			if ( mParameters ) {
				loadParameters(sUrl);
			}
		};
		
		/**
		 * Returns the current value for the given CSS parameter.
		 * If no parameter is given, a map containing all parameters is returned. This map is a copy, so changing values in the map does not have any effect.
		 * For any other input or an undefined parameter name, the result is undefined.
		 *
		 * @param {string} sName the CSS parameter name
		 * @returns {any} the CSS parameter value
		 *
		 * @public
		 * @name sap.ui.core.theming.Parameters.get
		 * @function
		 */
		Parameters.get = function(sName) {
	
			if (arguments.length == 1) {
				return getParameters()[sName];
	
			} else if (arguments.length == 0) {
				var clone = {};
				return jQuery.extend(clone, getParameters());
	
			} else {
				return undefined;
			}
		};
		
		/**
		 * Resets the CSS parameters which finally will reload the parameters 
		 * the next time they are queried via the method <code>get</code>.
		 * 
		 * @public
		 * @name sap.ui.core.theming.Parameters.reset
		 * @function
		 */
		Parameters.reset = function() {
			// hidden parameter {boolean} bOnlyWhenNecessary
			var bOnlyWhenNecessary = arguments[0] === true;
			if ( !bOnlyWhenNecessary || sap.ui.getCore().getConfiguration().getTheme() !== sTheme ) {
				resetParameters();
			}
		};
	
	
	

	return Parameters;

}, /* bExport= */ true);
