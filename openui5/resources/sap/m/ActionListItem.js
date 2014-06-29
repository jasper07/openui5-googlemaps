/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.ActionListItem");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.ListItemBase");sap.m.ListItemBase.extend("sap.m.ActionListItem",{metadata:{library:"sap.m",properties:{"text":{type:"string",group:"Misc",defaultValue:null}}}});jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.m.ActionListItem.prototype.init=function(){this.setType(sap.m.ListType.Active);sap.m.ListItemBase.prototype.init.apply(this,arguments)};
