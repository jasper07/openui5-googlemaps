/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.IconTabSeparator");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.m.IconTabSeparator",{metadata:{interfaces:["sap.m.IconTab"],library:"sap.m",properties:{"icon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:''},"iconDensityAware":{type:"boolean",group:"Appearance",defaultValue:true}}}});
sap.m.IconTabSeparator.prototype._getImageControl=function(c,p){var P={src:this.getIcon(),densityAware:this.getIconDensityAware()};this._oImageControl=sap.m.ImageHelper.getImageControl(null,this._oImageControl,p,P,c);return this._oImageControl};
sap.m.IconTabSeparator.prototype.exit=function(e){if(this._oImageControl){this._oImageControl.destroy()}if(sap.ui.core.Item.prototype.exit){sap.ui.core.Item.prototype.exit.call(this,e)}};
