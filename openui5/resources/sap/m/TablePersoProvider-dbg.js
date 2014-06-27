/*
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides TablePersoProvider
jQuery.sap.declare("sap.m.TablePersoProvider");
jQuery.sap.require("sap.ui.base.ManagedObject");


/**
 * This is an abstract TablePersoProvider, describing the interface for a real
 * TablePersoProvider.
 *
 * @public
 *
 * @class Table Personalization Provider
 * @extends sap.ui.base.ManagedObject
 * @abstract
 * @author SAP
 * @version 1.20.7
 * @name sap.m.TablePersoProvider
 */
sap.ui.base.ManagedObject.extend("sap.m.TablePersoProvider", /** @lends sap.m.TablePersoProvider */

{
	constructor: function(sId, mSettings) {

		sap.ui.base.ManagedObject.apply(this, arguments);

	},

	metadata: {
		"abstract": true,
		library: "sap.m"
	}

});


/**
 * Initializes the TablePersoProvider instance after creation.
 *
 * @function
 * @name sap.m.TablePersoDialog.prototype.init
 * @protected
 */
sap.m.TablePersoProvider.prototype.init = function() {

	jQuery.sap.log.warning("This is the abstract base class for a TablePersoProvider. Do not create instances of this class, but use a concrete sub class instead.");
	jQuery.sap.log.debug("TablePersoProvider init");

};

/**
 * Retrieves the personalization bundle. 
 * This must return a jQuery promise (see http://api.jquery.com/promise/)
 * @public
 */
sap.m.TablePersoProvider.prototype.getPersData = function() {

	jQuery.sap.log.debug("TablePersoProvider getPersData");

};

/**
 * Stores the personalization bundle, overwriting any
 * previous bundle completely
 * This must return a jQuery promise (see http://api.jquery.com/promise/)
 * @public
 */
sap.m.TablePersoProvider.prototype.setPersData = function(oBundle) {

	jQuery.sap.log.debug("TablePersoProvider setPersData");

};

/**
 * Removes the personalization bundle
 * This must return a jQuery promise (see http://api.jquery.com/promise/)
 * @public
 */
sap.m.TablePersoProvider.prototype.delPersData = function() {

	jQuery.sap.log.debug("TablePersoProvider delPersData");

};

/**
 * Callback function which can be used to determine the title of a given column
 * within the TablePersoDialog. As a default, the column header controls are
 * asked for their 'text' or 'title' property. This works in most cases, for example
 * if the header control is a sap.m.Label (has 'text' property) or a sap.m.ObjectListItem
 * (has 'title' property). 
 * 
 * If the header control used in a column has neither 'text' nor 'title' property, or if you would like to 
 * display a modified column name for a certain column, this callback function can be used.
 * 
 * If the callback delivers null for a column (which is the default implementation), the default
 * texts described above are displayed for that column in the TablePersoDialog. 
 * 
 * In case neither the callback delovers null and neither 'text' nor ' title' property are at hand,
 * the TablePersoDialog will display the column id and a warning message is logged.
 * 
 * @param oColumn column control instance whose caption shall be determined
 * @public
 */
sap.m.TablePersoProvider.prototype.getCaption = function(oColumn) {
	return null;
};
