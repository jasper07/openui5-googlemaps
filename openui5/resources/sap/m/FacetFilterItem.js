/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.FacetFilterItem");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.ListItemBase");sap.m.ListItemBase.extend("sap.m.FacetFilterItem",{metadata:{library:"sap.m",properties:{"key":{type:"string",group:"Data",defaultValue:null},"text":{type:"string",group:"Misc",defaultValue:null},"count":{type:"int",group:"Misc",defaultValue:null,deprecated:true}}}});
sap.m.FacetFilterItem.prototype.setCount=function(c){this.setProperty("count",c);this.setProperty("counter",c)};
sap.m.FacetFilterItem.prototype.setCounter=function(c){this.setProperty("count",c);this.setProperty("counter",c)};
sap.m.FacetFilterItem.prototype.init=function(){sap.m.ListItemBase.prototype.init.apply(this);this.addStyleClass("sapMFFLI")};
