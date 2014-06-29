/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/model/ClientPropertyBinding'],function(q,C){"use strict";var X=C.extend("sap.ui.model.xml.XMLPropertyBinding");X.prototype.setValue=function(v){if(this.oValue!=v){this.oModel.setProperty(this.sPath,v,this.oContext)}};X.prototype.checkUpdate=function(f){var v=this._getValue();if(v!==this.oValue||f){this.oValue=v;this._fireChange({reason:sap.ui.model.ChangeReason.Change})}};return X},true);
