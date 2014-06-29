/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.ResponsiveContainerRange");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.ResponsiveContainerRange",{metadata:{library:"sap.ui.commons",properties:{"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:''},"height":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:''},"key":{type:"string",group:"Misc",defaultValue:''}},associations:{"content":{type:"sap.ui.core.Control",multiple:false}}}});
