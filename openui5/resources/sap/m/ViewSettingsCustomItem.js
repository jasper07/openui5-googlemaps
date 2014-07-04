/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.ViewSettingsCustomItem");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.ViewSettingsItem");sap.m.ViewSettingsItem.extend("sap.m.ViewSettingsCustomItem",{metadata:{library:"sap.m",properties:{"filterCount":{type:"int",group:"Behavior",defaultValue:0}},aggregations:{"customControl":{type:"sap.ui.core.Control",multiple:false}}}});
sap.m.ViewSettingsCustomItem.prototype.exit=function(){if(this._control&&!this._control.getParent()){this._control.destroy();delete this._control}};
sap.m.ViewSettingsCustomItem.prototype.setCustomControl=function(c){this._control=c;return this};
sap.m.ViewSettingsCustomItem.prototype.getCustomControl=function(){return this._control};
