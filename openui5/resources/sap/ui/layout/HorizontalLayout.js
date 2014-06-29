/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.layout.HorizontalLayout");jQuery.sap.require("sap.ui.layout.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.layout.HorizontalLayout",{metadata:{library:"sap.ui.layout",properties:{"allowWrapping":{type:"boolean",group:"Misc",defaultValue:false},"visible":{type:"boolean",group:"Appearance",defaultValue:true}},defaultAggregation:"content",aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"}}}});
