/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.layout.VerticalLayout");jQuery.sap.require("sap.ui.layout.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.layout.VerticalLayout",{metadata:{library:"sap.ui.layout",properties:{"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"enabled":{type:"boolean",group:"Behavior",defaultValue:true},"visible":{type:"boolean",group:"Appearance",defaultValue:true}},defaultAggregation:"content",aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"}}}});jQuery.sap.require("sap.ui.core.EnabledPropagator");sap.ui.core.EnabledPropagator.call(sap.ui.layout.VerticalLayout.prototype);
