/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.demokit.HexagonButtonGroup");jQuery.sap.require("sap.ui.demokit.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.demokit.HexagonButtonGroup",{metadata:{library:"sap.ui.demokit",properties:{"colspan":{type:"int",group:"Misc",defaultValue:3}},aggregations:{"buttons":{type:"sap.ui.demokit.HexagonButton",multiple:true,singularName:"button"}}}});
