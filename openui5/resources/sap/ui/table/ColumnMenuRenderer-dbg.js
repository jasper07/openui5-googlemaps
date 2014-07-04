/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.commons.ComboBox
jQuery.sap.declare("sap.ui.table.ColumnMenuRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.ui.commons.MenuRenderer");

/**
 * @class Renderer for the sap.ui.commons.ComboBox
 * @static
 */
sap.ui.table.ColumnMenuRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.MenuRenderer);