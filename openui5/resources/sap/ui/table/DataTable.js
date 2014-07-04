/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.table.DataTable");jQuery.sap.require("sap.ui.table.library");jQuery.sap.require("sap.ui.table.TreeTable");sap.ui.table.TreeTable.extend("sap.ui.table.DataTable",{metadata:{deprecated:true,library:"sap.ui.table",properties:{"expandedVisibleRowCount":{type:"int",group:"",defaultValue:null},"expanded":{type:"boolean",group:"",defaultValue:false},"hierarchical":{type:"boolean",group:"",defaultValue:false}},events:{"rowSelect":{}}}});sap.ui.table.DataTable.M_EVENTS={'rowSelect':'rowSelect'};
sap.ui.table.DataTable.prototype.init=function(){sap.ui.table.TreeTable.prototype.init.apply(this,arguments);this._bInheritEditableToControls=true;this.setEditable(false);this.setSelectionBehavior(sap.ui.table.SelectionBehavior.Row);this.attachRowSelectionChange(function(e){this.fireRowSelect(e.mParameters)});this._iLastFixedColIndex=-1};
sap.ui.table.DataTable.prototype.isTreeBinding=function(n){n=n||"rows";if(n==="rows"){return this.getHierarchical()}return sap.ui.core.Element.prototype.isTreeBinding.apply(this,arguments)};
sap.ui.table.DataTable.prototype.setHierarchical=function(h){this.setProperty("hierarchical",h);this._iLastFixedColIndex=h?0:-1};
sap.ui.table.DataTable.prototype.setVisibleRowCount=function(r){this._iVisibleRowCount=r;if(!this.getExpanded()){sap.ui.table.Table.prototype.setVisibleRowCount.apply(this,arguments)}};
sap.ui.table.DataTable.prototype.setExpandedVisibleRowCount=function(r){this.setProperty("expandedVisibleRowCount",r,true);if(this.getExpanded()){sap.ui.table.Table.prototype.setVisibleRowCount.apply(this,arguments)}};
sap.ui.table.DataTable.prototype.setExpanded=function(e){this.setProperty("expanded",e,true);if(this.getExpandedVisibleRowCount()>0){var r=e?this.getExpandedVisibleRowCount():this._iVisibleRowCount;sap.ui.table.Table.prototype.setVisibleRowCount.call(this,r)}};
