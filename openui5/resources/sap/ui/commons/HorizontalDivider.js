/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.HorizontalDivider");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.HorizontalDivider",{metadata:{library:"sap.ui.commons",properties:{"visible":{type:"boolean",group:"Appearance",defaultValue:true},"width":{type:"sap.ui.core.CSSSize",group:"Appearance",defaultValue:'100%'},"type":{type:"sap.ui.commons.HorizontalDividerType",group:"Appearance",defaultValue:sap.ui.commons.HorizontalDividerType.Area},"height":{type:"sap.ui.commons.HorizontalDividerHeight",group:"Appearance",defaultValue:sap.ui.commons.HorizontalDividerHeight.Medium}}}});
