/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.ui.layout (1.20.7)
 */
jQuery.sap.declare("sap.ui.layout.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAPUI5 library with layout controls.
 *
 * @namespace
 * @name sap.ui.layout
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.ui.layout",
  dependencies : ["sap.ui.core"],
  types: [
    "sap.ui.layout.GridIndent",
    "sap.ui.layout.GridPosition",
    "sap.ui.layout.GridSpan",
    "sap.ui.layout.form.GridElementCells",
    "sap.ui.layout.form.SimpleFormLayout"
  ],
  interfaces: [],
  controls: [
    "sap.ui.layout.Grid",
    "sap.ui.layout.HorizontalLayout",
    "sap.ui.layout.ResponsiveFlowLayout",
    "sap.ui.layout.VerticalLayout",
    "sap.ui.layout.form.Form",
    "sap.ui.layout.form.FormLayout",
    "sap.ui.layout.form.GridLayout",
    "sap.ui.layout.form.ResponsiveGridLayout",
    "sap.ui.layout.form.ResponsiveLayout",
    "sap.ui.layout.form.SimpleForm"
  ],
  elements: [
    "sap.ui.layout.GridData",
    "sap.ui.layout.ResponsiveFlowLayoutData",
    "sap.ui.layout.form.FormContainer",
    "sap.ui.layout.form.FormElement",
    "sap.ui.layout.form.GridContainerData",
    "sap.ui.layout.form.GridElementData"
  ],
  version: "1.20.7"});

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

// Provides data type sap.ui.layout.GridIndent
jQuery.sap.declare('sap.ui.layout.GridIndent');
jQuery.sap.require('sap.ui.base.DataType');

/**
 * @class A string type that represents Grid's indent values for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 11 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large  medium  small.
 *
 * @static
 * @public
 */
sap.ui.layout.GridIndent = sap.ui.base.DataType.createType('sap.ui.layout.GridIndent', {
    isValid : function(vValue) {
      return /^(([Ll](?:[0-9]|1[0-1]))? ?([Mm](?:[0-9]|1[0-1]))? ?([Ss](?:[0-9]|1[0-1]))?)$/.test(vValue);
    }

  },
  sap.ui.base.DataType.getType('string')
);

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.layout.GridPosition.
jQuery.sap.declare("sap.ui.layout.GridPosition");


/**
 * @class Position of the Grid. Can be "Left", "Center" or "Right". "Left" is default.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.ui.layout.GridPosition = {
  
    /**
     * Grid is aligned left. 
     * @public
     */
    Left : "Left",

    /**
     * Grid is aligned to the right. 
     * @public
     */
    Right : "Right",

    /**
     * Grid is centered on the screen. 
     * @public
     */
    Center : "Center"

  };
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

// Provides data type sap.ui.layout.GridSpan
jQuery.sap.declare('sap.ui.layout.GridSpan');
jQuery.sap.require('sap.ui.base.DataType');

/**
 * @class A string type that represents Grid's span values for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large  medium  small.
 *
 * @static
 * @public
 */
sap.ui.layout.GridSpan = sap.ui.base.DataType.createType('sap.ui.layout.GridSpan', {
    isValid : function(vValue) {
      return /^(([Ll](?:[1-9]|1[0-2]))? ?([Mm](?:[1-9]|1[0-2]))? ?([Ss](?:[1-9]|1[0-2]))?)$/.test(vValue);
    }

  },
  sap.ui.base.DataType.getType('string')
);

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

// Provides data type sap.ui.layout.form.GridElementCells
jQuery.sap.declare('sap.ui.layout.form.GridElementCells');
jQuery.sap.require('sap.ui.base.DataType');

/**
 * @class A string that defines the number of used cells in a GridLayout. This can be a number from 1 to 16, "auto" or "full".
 *
 * @static
 * @public
 */
sap.ui.layout.form.GridElementCells = sap.ui.base.DataType.createType('sap.ui.layout.form.GridElementCells', {
    isValid : function(vValue) {
      return /^(auto|full|([1-9]|1[0-6]))$/.test(vValue);
    }

  },
  sap.ui.base.DataType.getType('string')
);

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.layout.form.SimpleFormLayout.
jQuery.sap.declare("sap.ui.layout.form.SimpleFormLayout");


/**
 * @class Available FormLayouts used for the SimpleForm.
 *
 * @version 1.20.7
 * @static
 * @public
 * @since 1.16.0
 */
sap.ui.layout.form.SimpleFormLayout = {
  
    /**
     * Uses the ResponsiveLayout for the SimpleForm 
     * @public
     */
    ResponsiveLayout : "ResponsiveLayout",

    /**
     * Uses the GridLayout for the SimpleForm 
     * @public
     */
    GridLayout : "GridLayout",

    /**
     * Uses the ResponsiveGridLayout for the SimpleForm 
     * @public
     * @since 1.16.0
     */
    ResponsiveGridLayout : "ResponsiveGridLayout"

  };

// -----------------------------------------------------------------------------
// Begin of Library Initialization coding, copied from shared.js
// -----------------------------------------------------------------------------

// factory for Form to create labels an buttons to be overwritten by commons and mobile library
if (!sap.ui.layout.form.FormHelper) {
	sap.ui.layout.form.FormHelper = {
		createLabel: function(sText){ throw new Error("no Label control available!"); }, /* must return a Label control */
		createButton: function(sId, fPressFunction, oThis){ throw new Error("no Button control available!"); }, /* must return a button control */
		setButtonContent: function(oButton, sText, sTooltip, sIcon, sIconHovered){ throw new Error("no Button control available!"); },
		addFormClass: function(){ return null; },
		bArrowKeySupport: true, /* enables the keyboard support for arrow keys */
		bFinal: false /* if true, the helper must not be overwritten by an other library */
	};
}
