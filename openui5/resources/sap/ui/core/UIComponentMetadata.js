/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./ComponentMetadata'],function(q,C){"use strict";var U=function(c,o){C.apply(this,arguments)};U.prototype=q.sap.newObject(C.prototype);U.preprocessClassInfo=function(c){if(c&&typeof c.metadata==="string"){c.metadata={_src:c.metadata}}return c};U.prototype.applySettings=function(c){C.prototype.applySettings.call(this,c);var s=c.metadata;this._mRootView=s.rootView;if(typeof this._mRootView==="string"){this._mRootView={viewName:this._mRootView,type:sap.ui.core.mvc.ViewType.XML}}this._mRouting=s.routing;var p=this.getParent();if(p instanceof U){if(p._mRootView){this._mRootView=q.extend(true,{},p._mRootView,this._mRootView)}this._mRouting=q.extend(true,{},p._mRouting,this._mRouting)}};U.prototype.getRootView=function(){return this._mRootView};U.prototype.getRoutingConfig=function(){return this._mRouting&&this._mRouting.config};U.prototype.getRoutes=function(){return this._mRouting&&this._mRouting.routes};return U},true);
