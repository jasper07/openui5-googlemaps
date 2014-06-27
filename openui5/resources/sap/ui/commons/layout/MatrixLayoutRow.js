/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.layout.MatrixLayoutRow");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.commons.layout.MatrixLayoutRow",{metadata:{publicMethods:["addStyleClass","removeStyleClass","hasStyleClass"],library:"sap.ui.commons",aggregatingType:"MatrixLayout",properties:{"height":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null}},defaultAggregation:"cells",aggregations:{"cells":{type:"sap.ui.commons.layout.MatrixLayoutCell",multiple:true,singularName:"cell"}}}});jQuery.sap.require("sap.ui.core.CustomStyleClassSupport");sap.ui.core.CustomStyleClassSupport.apply(sap.ui.commons.layout.MatrixLayoutRow.prototype);
