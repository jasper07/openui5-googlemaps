/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/EventProvider'],function(q,E){"use strict";var C=sap.ui.base.Object.extend("sap.ui.model.Context",{constructor:function(m,p){sap.ui.base.Object.apply(this);this.oModel=m;this.sPath=p},metadata:{"abstract":true,publicMethods:["getModel","getPath","getProperty","getObject"]}});C.prototype.getModel=function(){return this.oModel};C.prototype.getPath=function(){return this.sPath};C.prototype.getProperty=function(p){return this.oModel.getProperty(p,this)};C.prototype.getObject=function(){return this.oModel.getObject(this.sPath)};C.prototype.toString=function(){return this.sPath};return C},true);
