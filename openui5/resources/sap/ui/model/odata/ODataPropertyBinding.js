/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/model/PropertyBinding'],function(q,P){"use strict";var O=P.extend("sap.ui.model.odata.ODataPropertyBinding",{constructor:function(m,p,c,a){P.apply(this,arguments);this.oValue=this._getValue()}});O.prototype.getValue=function(){return this.oValue};O.prototype._getValue=function(){return this.oModel._getObject(this.sPath,this.oContext)};O.prototype.setValue=function(v){if(this.oValue!=v){if(!this.oModel.setProperty(this.sPath,v,this.oContext)){this._fireChange()}}};O.prototype.setContext=function(c){if(this.oContext!=c){this.oContext=c;if(this.isRelative()){this.checkUpdate()}}};O.prototype.checkUpdate=function(f){var v=this._getValue();if(v!==this.oValue||f){this.oValue=v;this._fireChange({reason:sap.ui.model.ChangeReason.Change})}};return O},true);
