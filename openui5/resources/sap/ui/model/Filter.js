/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./FilterOperator'],function(q,F){"use strict";var a=sap.ui.base.Object.extend("sap.ui.model.Filter",{constructor:function(p,o,v,V){if(typeof p==="object"&&!q.isArray(p)){var f=p;this.sPath=f.path;this.sOperator=f.operator;this.oValue1=f.value1;this.oValue2=f.value2;this.aFilters=f.aFilters;this.bAnd=f.bAnd}else{if(q.isArray(p)){this.aFilters=p}else{this.sPath=p}if(q.type(o)==="boolean"){this.bAnd=o}else{this.sOperator=o}this.oValue1=v;this.oValue2=V}if(q.isArray(this.aFilters)&&this.bAnd!=undefined&&!this.sPath&&!this.sOperator&&!this.oValue1&&!this.oValue2){this._bMultiFilter=true;q.each(this.aFilters,function(i,b){if(!(b instanceof a)){q.sap.log.error("Filter in Aggregation of Multi filter has to be instance of sap.ui.model.Filter")}})}else if(!this.aFilters&&!this.bAnd&&this.sPath!==undefined&&this.sOperator&&this.oValue1!==undefined){this._bMultiFilter=false}else{q.sap.log.error("Wrong parameters defined for filter.")}}});return a},true);
