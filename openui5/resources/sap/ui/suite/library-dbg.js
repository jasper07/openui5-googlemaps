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
 * Initialization Code and shared classes of library sap.ui.suite (1.20.7)
 */
jQuery.sap.declare("sap.ui.suite.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAP UI library: sap.ui.suite (by SAP, Author)
 *
 * @namespace
 * @name sap.ui.suite
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.ui.suite",
  dependencies : ["sap.ui.core"],
  types: [
    "sap.ui.suite.TaskCircleColor"
  ],
  interfaces: [],
  controls: [
    "sap.ui.suite.TaskCircle",
    "sap.ui.suite.VerticalProgressIndicator"
  ],
  elements: [],
  version: "1.20.7"});

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.suite.TaskCircleColor.
jQuery.sap.declare("sap.ui.suite.TaskCircleColor");


/**
 * @class Defined color values for the Task Circle Control
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.ui.suite.TaskCircleColor = {
  
    /**
     * Red 
     * @public
     */
    Red : "Red",

    /**
     * Yellow 
     * @public
     */
    Yellow : "Yellow",

    /**
     * Green 
     * @public
     */
    Green : "Green",

    /**
     * Default value 
     * @public
     */
    Gray : "Gray"

  };
