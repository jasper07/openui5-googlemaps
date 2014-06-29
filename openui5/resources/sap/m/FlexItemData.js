/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.FlexItemData");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.LayoutData");sap.ui.core.LayoutData.extend("sap.m.FlexItemData",{metadata:{library:"sap.m",properties:{"alignSelf":{type:"sap.m.FlexAlignSelf",group:"Misc",defaultValue:sap.m.FlexAlignSelf.Auto},"order":{type:"int",group:"Misc",defaultValue:0},"growFactor":{type:"float",group:"Misc",defaultValue:0},"styleClass":{type:"string",group:"Misc",defaultValue:'',deprecated:true}}}});jQuery.sap.require("sap.m.FlexBoxStylingHelper");
sap.m.FlexItemData.prototype.setAlignSelf=function(v){this.setProperty("alignSelf",v);sap.m.FlexBoxStylingHelper.setStyle(null,this,"align-self",v);return this};
sap.m.FlexItemData.prototype.setOrder=function(v){this.setProperty("order",v);sap.m.FlexBoxStylingHelper.setStyle(null,this,"order",v);return this};
sap.m.FlexItemData.prototype.setGrowFactor=function(v){this.setProperty("growFactor",v);sap.m.FlexBoxStylingHelper.setStyle(null,this,"flex-grow",v);return this};
