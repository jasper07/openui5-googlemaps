/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.demokit.FileUploadIntrospector");jQuery.sap.require("sap.ui.demokit.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.demokit.FileUploadIntrospector",{metadata:{publicMethods:["refresh"],library:"sap.ui.demokit",properties:{"uploadUrl":{type:"string",group:"Misc",defaultValue:null},"autoRefreshInterval":{type:"string",group:"Misc",defaultValue:'0'},"height":{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:null},"width":{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:null}}}});
sap.ui.demokit.FileUploadIntrospector.prototype.init=function(){this._aFiles=[];this._iHash=0};
sap.ui.demokit.FileUploadIntrospector.prototype.setAutoRefreshInterval=function(i){this.setProperty("autoRefreshInterval",i);if(this.oTimer){jQuery.sap.clearDelayedCall(this.oTimer);this.oTimer=undefined}if(i>0){this.oTimer=jQuery.sap.delayedCall(i,this,"_autoRefresh")}};
sap.ui.demokit.FileUploadIntrospector.prototype.refresh=function(){var t=this;jQuery.getJSON(this.getUploadUrl(),function(d){t._receiveFileList(d)})};
sap.ui.demokit.FileUploadIntrospector.prototype._autoRefresh=function(){if(this.oTimer){jQuery.sap.clearDelayedCall(this.oTimer);this.oTimer=undefined}this.refresh();var i=this.getAutoRefreshInterval();if(i>0){this.oTimer=jQuery.sap.delayedCall(i,this,"_autoRefresh")}};
sap.ui.demokit.FileUploadIntrospector.prototype._receiveFileList=function(r){if(!this._aFiles||this._iHash!==r.hash){this._aFiles=r.files;this._iHash=r.hash;this.invalidate()}};
