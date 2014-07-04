/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.core.LayoutData.
sap.ui.define(['./library','./Element'], function() {
	"use strict";


/**
 * Constructor for a new LayoutData.
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A layout data base type.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.core.LayoutData
 */
sap.ui.core.Element.extend("sap.ui.core.LayoutData", { metadata : {

	// ---- object ----
	"abstract" : true,

	// ---- control specific ----
	library : "sap.ui.core"
}});


/**
 * Creates a new subclass of class sap.ui.core.LayoutData with name <code>sClassName</code> 
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
 * @name sap.ui.core.LayoutData.extend
 * @function
 */


// Start of sap/ui/core/LayoutData.js
sap.ui.core.LayoutData.prototype.invalidate = function() {
	//No call of Element.invalidate to avoid bubbling of invalidate
	var oParent = this.getParent();

	if(oParent && oParent.getMetadata().getName() == "sap.ui.core.VariantLayoutData"){
		// layout is part of a VariantLayout - so use parent of this one
		oParent = oParent.getParent();
	}

	if(oParent){
		var oLayout = oParent.getParent();
		if(oLayout){
			var oEvent = jQuery.Event("LayoutDataChange");
			oEvent.srcControl = oParent;
			oLayout._handleEvent(oEvent);
		}
	}
};

sap.ui.core.LayoutData.prototype.setLayoutData = function(oLayoutData) {

	// as LayoutData on LayoutData makes no sense just ignore it.
	return this;

};

	return sap.ui.core.LayoutData;

}, /* bExport = */ true);
