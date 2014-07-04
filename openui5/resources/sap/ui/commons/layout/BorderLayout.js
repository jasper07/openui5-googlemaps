/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.layout.BorderLayout");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.layout.BorderLayout",{metadata:{publicMethods:["createArea","setAreaData","addContent","insertContent","removeContent","removeAllContent","getContent","indexOfContent","destroyContent","getAreaData","getAreaById","getArea"],library:"sap.ui.commons",properties:{"rtl":{type:"boolean",group:"Appearance",defaultValue:false,deprecated:true},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'100%'},"height":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'100%'}},aggregations:{"top":{type:"sap.ui.commons.layout.BorderLayoutArea",multiple:false},"begin":{type:"sap.ui.commons.layout.BorderLayoutArea",multiple:false},"center":{type:"sap.ui.commons.layout.BorderLayoutArea",multiple:false},"end":{type:"sap.ui.commons.layout.BorderLayoutArea",multiple:false},"bottom":{type:"sap.ui.commons.layout.BorderLayoutArea",multiple:false}}}});
sap.ui.commons.layout.BorderLayout.prototype._getOrCreateArea=function(a,c){var T=sap.ui.commons.layout.BorderLayoutAreaTypes,t=this,A;function b(m){var A;if(c){A=new sap.ui.commons.layout.BorderLayoutArea({id:t.getId()+"--"+a,areaId:a,content:c});t[m](A)}return A}if(!T.hasOwnProperty(a)){throw new Error("Invalid Area Id '"+a+"'")}switch(a){case T.top:A=this.getTop()||b("setTop");break;case T.begin:A=this.getBegin()||b("setBegin");break;case T.center:A=this.getCenter()||b("setCenter");break;case T.end:A=this.getEnd()||b("setEnd");break;case T.bottom:A=this.getBottom()||b("setBottom");break;default:break}return A};
sap.ui.commons.layout.BorderLayout.prototype.getArea=function(a,c){return this._getOrCreateArea(a,c?[]:null)};
sap.ui.commons.layout.BorderLayout.prototype.createArea=function(a,c){return this._getOrCreateArea(a,Array.prototype.slice.call(arguments,1))};
sap.ui.commons.layout.BorderLayout.prototype.getAreaById=function(a){return this._getOrCreateArea(a,[])};
sap.ui.commons.layout.BorderLayout.prototype.getAreaData=function(a){var A=this.getAreaById(a);return A?{size:A.getSize(),visible:A.getVisible(),overflowX:A.getOverflowX(),overflowY:A.getOverflowY(),contentAlign:A.getContentAlign()}:{}};
sap.ui.commons.layout.BorderLayout.prototype.setAreaData=function(a,d){this.getArea(a,true).applySettings(d);return this};
sap.ui.commons.layout.BorderLayout.prototype.addContent=function(a){var A=this.getArea(a,true),i;for(var i=1;i<arguments.length;i++){A.addContent(arguments[i])}return this};
sap.ui.commons.layout.BorderLayout.prototype.insertContent=function(a,I){var A=this.getArea(a,true),i;for(i=2;i<arguments.length;i++){A.insertContent(arguments[i],I++)}return this};
sap.ui.commons.layout.BorderLayout.prototype.removeContent=function(a,e){var A=this.getAreaById(a);if(A){A.removeContent(e)}return this};
sap.ui.commons.layout.BorderLayout.prototype.removeAllContent=function(a){var A=this.getAreaById(a);if(A){A.removeAllContent()}return this};
sap.ui.commons.layout.BorderLayout.prototype.getContent=function(a){var A=this.getAreaById(a);return A?A.getContent():[]};
sap.ui.commons.layout.BorderLayout.prototype.indexOfContent=function(a,c){var A=this.getAreaById(a);return A?A.indexOfContent(c):-1};
sap.ui.commons.layout.BorderLayout.prototype.destroyContent=function(a){this.getAreaById(a,true).destroyContent();return this};
