/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.table.Row");jQuery.sap.require("sap.ui.table.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.table.Row",{metadata:{publicMethods:["getIndex"],library:"sap.ui.table",defaultAggregation:"cells",aggregations:{"cells":{type:"sap.ui.core.Control",multiple:true,singularName:"cell"}}}});
sap.ui.table.Row.prototype.getIndex=function(){var t=this.getParent();if(t){var f=t.getFirstVisibleRow();var r=t.indexOfRow(this);return f+r}return-1};
