/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.ToolbarLayoutData");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.LayoutData");sap.ui.core.LayoutData.extend("sap.m.ToolbarLayoutData",{metadata:{library:"sap.m",properties:{"shrinkable":{type:"boolean",group:"Behavior",defaultValue:false},"minWidth":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"maxWidth":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null}}}});
sap.m.ToolbarLayoutData.prototype.getParentStyle=function(){var p=this.getParent();if(!p||!p.getDomRef){return{}}var d=p.getDomRef();return d?d.style:{}};
sap.m.ToolbarLayoutData.prototype.applyProperties=function(){var s=this.getParentStyle();s.minWidth=this.getMinWidth();s.maxWidth=this.getMaxWidth();return this};
