/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.IconTabFilter");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Item");sap.ui.core.Item.extend("sap.m.IconTabFilter",{metadata:{interfaces:["sap.m.IconTab"],library:"sap.m",properties:{"count":{type:"string",group:"Data",defaultValue:''},"showAll":{type:"boolean",group:"Misc",defaultValue:false},"icon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:''},"iconColor":{type:"sap.ui.core.IconColor",group:"Appearance",defaultValue:sap.ui.core.IconColor.Default},"iconDensityAware":{type:"boolean",group:"Appearance",defaultValue:true},"visible":{type:"boolean",group:"Behavior",defaultValue:true},"design":{type:"sap.m.IconTabFilterDesign",group:"Appearance",defaultValue:sap.m.IconTabFilterDesign.Vertical}},defaultAggregation:"content",aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"}}}});
sap.m.IconTabFilter.prototype._getImageControl=function(c,p,C){var P={src:this.getIcon(),densityAware:this.getIconDensityAware()};if(P.src){this._oImageControl=sap.m.ImageHelper.getImageControl(this.getId()+"-icon",this._oImageControl,p,P,c,C)}return this._oImageControl};
sap.m.IconTabFilter.prototype.exit=function(e){if(this._oImageControl){this._oImageControl.destroy()}if(sap.ui.core.Item.prototype.exit){sap.ui.core.Item.prototype.exit.call(this,e)}};
