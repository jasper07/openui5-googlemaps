/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.InputListItem");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.ListItemBase");sap.m.ListItemBase.extend("sap.m.InputListItem",{metadata:{library:"sap.m",properties:{"label":{type:"string",group:"Misc",defaultValue:null}},defaultAggregation:"content",aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content",bindable:"bindable"}}}});
