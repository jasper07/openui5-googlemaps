/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.SearchProvider.
jQuery.sap.declare("sap.ui.commons.SearchProvider");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.search.OpenSearchProvider");


/**
 * Constructor for a new SearchProvider.
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.search.OpenSearchProvider#constructor sap.ui.core.search.OpenSearchProvider}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A SearchProvider which can be attached to a Search Field.
 * @extends sap.ui.core.search.OpenSearchProvider
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @deprecated Since version 1.6.0. 
 * Replaced by sap.ui.core.search.OpenSearchProvider
 * @name sap.ui.commons.SearchProvider
 */
sap.ui.core.search.OpenSearchProvider.extend("sap.ui.commons.SearchProvider", { metadata : {

	// ---- object ----
	deprecated : true,

	// ---- control specific ----
	library : "sap.ui.commons"
}});


/**
 * Creates a new subclass of class sap.ui.commons.SearchProvider with name <code>sClassName</code> 
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
 * @name sap.ui.commons.SearchProvider.extend
 * @function
 */


// Start of sap\ui\commons\SearchProvider.js
/**
 * Called by the search field, when suggestions are requested.
 *
 * @private
 */
sap.ui.commons.SearchProvider.prototype._doSuggest = function(oSearchField, sSuggestValue) {
	this.suggest(sSuggestValue, function(sValue, aSuggestions){
		if(oSearchField && oSearchField.suggest){
			oSearchField.suggest(sValue, aSuggestions);
		}
	});
};

