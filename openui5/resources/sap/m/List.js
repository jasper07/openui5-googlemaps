/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.List");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.ListBase");sap.m.ListBase.extend("sap.m.List",{metadata:{library:"sap.m",properties:{"backgroundDesign":{type:"sap.m.BackgroundDesign",group:"Appearance",defaultValue:sap.m.BackgroundDesign.Solid}},aggregations:{"columns":{type:"sap.m.Column",multiple:true,singularName:"column",deprecated:true}}}});
sap.m.List.prototype.onBeforeRendering=function(){if(sap.m.ListBase.prototype.onBeforeRendering){sap.m.ListBase.prototype.onBeforeRendering.call(this)}if(!this.getColumns().length||this._isColumnsIncompatible()){return}jQuery.sap.require("sap.m.Table");var p=sap.m.Table.prototype;Object.keys(p).forEach(function(k){this[k]=p[k]},this);if(!this.mProperties.hasOwnProperty("backgroundDesign")){this.setBackgroundDesign("Translucent")}};
sap.m.List.prototype._isColumnsIncompatible=function(){return sap.ui.getCore().getConfiguration().getCompatibilityVersion("sapMListAsTable").compareTo("1.16")>=0};
