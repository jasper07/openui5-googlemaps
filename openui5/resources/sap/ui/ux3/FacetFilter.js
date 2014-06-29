/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.ux3.FacetFilter");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.ux3.FacetFilter",{metadata:{library:"sap.ui.ux3",properties:{"visible":{type:"boolean",group:"",defaultValue:true},"visibleItemCountMode":{type:"sap.ui.ux3.VisibleItemCountMode",group:"Appearance",defaultValue:sap.ui.ux3.VisibleItemCountMode.Fixed}},aggregations:{"lists":{type:"sap.ui.ux3.FacetFilterList",multiple:true,singularName:"list"}}}});
