/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.GrowingList");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.List");sap.m.List.extend("sap.m.GrowingList",{metadata:{deprecated:true,library:"sap.m",properties:{"threshold":{type:"int",group:"Misc",defaultValue:20},"triggerText":{type:"string",group:"Appearance",defaultValue:null},"scrollToLoad":{type:"boolean",group:"Behavior",defaultValue:false}}}});
sap.m.GrowingList.prototype._isIncompatible=function(){return sap.ui.getCore().getConfiguration().getCompatibilityVersion("sapMGrowingList").compareTo("1.16")>=0};
sap.m.GrowingList.prototype.init=function(){sap.m.ListBase.prototype.init.call(this);if(!this._isIncompatible()){this.setGrowing()}};
sap.m.GrowingList.prototype.setGrowing=function(){return sap.m.ListBase.prototype.setGrowing.call(this,true)};
!function(g,l){["Threshold","TriggerText","ScrollToLoad"].forEach(function(p){g["set"+p]=l["setGrowing"+p];g["get"+p]=l["getGrowing"+p]})}(sap.m.GrowingList.prototype,sap.m.ListBase.prototype);
