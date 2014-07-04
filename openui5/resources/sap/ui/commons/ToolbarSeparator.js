/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.ToolbarSeparator");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.commons.ToolbarSeparator",{metadata:{interfaces:["sap.ui.commons.ToolbarItem"],library:"sap.ui.commons",properties:{"displayVisualSeparator":{type:"boolean",group:"Appearance",defaultValue:true},"design":{type:"sap.ui.commons.ToolbarSeparatorDesign",group:"Misc",defaultValue:null}}}});
sap.ui.commons.ToolbarSeparator.prototype.getFocusDomRef=function(){return undefined};
