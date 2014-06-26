/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.ViewSettingsFilterItem");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.ViewSettingsItem");sap.m.ViewSettingsItem.extend("sap.m.ViewSettingsFilterItem",{metadata:{library:"sap.m",properties:{"multiSelect":{type:"boolean",group:"Behavior",defaultValue:true}},aggregations:{"items":{type:"sap.m.ViewSettingsItem",multiple:true,singularName:"item"}}}});
