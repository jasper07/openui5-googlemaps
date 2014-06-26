/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/model/ClientTreeBinding'],function(q,C){"use strict";var J=C.extend("sap.ui.model.json.JSONTreeBinding");J.prototype.getNodeContexts=function(c){var s=c.getPath();if(!q.sap.endsWith(s,"/")){s=s+"/"}if(!q.sap.startsWith(s,"/")){s="/"+s}var a=[],t=this,n=this.oModel._getObject(s),o,A=this.mParameters&&this.mParameters.arrayNames,b;if(A&&q.isArray(A)){q.each(A,function(i,d){b=n[d];if(b){q.each(b,function(S,e){t._saveSubContext(e,a,s,d+"/"+S)})}})}else{if(n){q.sap.each(n,function(N,o){if(q.isArray(o)){q.each(o,function(S,d){t._saveSubContext(d,a,s,N+"/"+S)})}else if(o&&typeof o=="object"){t._saveSubContext(o,a,s,N)}})}}return a};J.prototype._saveSubContext=function(n,c,s,N){if(typeof n=="object"){var o=this.oModel.getContext(s+N);if(this.aFilters&&!this.bIsFiltering){if(q.inArray(o,this.filterInfo.aFilteredContexts)!=-1){c.push(o)}}else{c.push(o)}}};return J},true);
