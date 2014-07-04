/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.Panel");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.Panel",{metadata:{library:"sap.m",properties:{"visible":{type:"boolean",group:"Appearance",defaultValue:true},"headerText":{type:"string",group:"Data",defaultValue:null},"width":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:'100%'},"height":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:'auto'}},defaultAggregation:"content",aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"},"headerToolbar":{type:"sap.m.Toolbar",multiple:false},"infoToolbar":{type:"sap.m.Toolbar",multiple:false}}}});
sap.m.Panel.prototype.init=function(){};
sap.m.Panel.prototype.setWidth=function(w){this.setProperty("width",w,true);var d=this.getDomRef();if(d){d.style.width=w}return this};
sap.m.Panel.prototype.setHeight=function(h){this.setProperty("height",h,true);var d=this.getDomRef();if(d){d.style.height=h}return this};
