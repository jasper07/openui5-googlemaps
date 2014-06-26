/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.ScrollContainer");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.ScrollContainer",{metadata:{publicMethods:["scrollTo"],library:"sap.m",properties:{"visible":{type:"boolean",group:"Appearance",defaultValue:true},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'auto'},"height":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'auto'},"horizontal":{type:"boolean",group:"Behavior",defaultValue:true},"vertical":{type:"boolean",group:"Behavior",defaultValue:false}},defaultAggregation:"content",aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"}}}});
sap.m.ScrollContainer.prototype.init=function(){jQuery.sap.require("sap.ui.core.delegate.ScrollEnablement");this._oScroller=new sap.ui.core.delegate.ScrollEnablement(this,this.getId()+"-scroll",{horizontal:true,vertical:false,zynga:false,preventDefault:false,nonTouchScrolling:"scrollbar"})};
sap.m.ScrollContainer.prototype.onBeforeRendering=function(){this._oScroller.setHorizontal(this.getHorizontal());this._oScroller.setVertical(this.getVertical())};
sap.m.ScrollContainer.prototype.exit=function(){if(this._oScroller){this._oScroller.destroy();this._oScroller=null}};
sap.m.ScrollContainer.prototype.getScrollDelegate=function(){return this._oScroller};
sap.m.ScrollContainer.prototype.scrollTo=function(x,y,t){if(this._oScroller){if(this.getDomRef()){this._oScroller.scrollTo(x,y,t)}else{this._oScroller._scrollX=x;this._oScroller._scrollY=y}}return this};
sap.m.ScrollContainer.prototype.setHorizontal=function(h){this._oScroller.setHorizontal(h);this.setProperty("horizontal",h,true)};
sap.m.ScrollContainer.prototype.setVertical=function(v){this._oScroller.setVertical(v);this.setProperty("vertical",v,true)};
