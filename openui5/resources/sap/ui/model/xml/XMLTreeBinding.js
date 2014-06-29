/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/model/ClientTreeBinding'],function(q,C){"use strict";var X=C.extend("sap.ui.model.xml.XMLTreeBinding");X.prototype.getNodeContexts=function(c){var s=c.getPath();if(!q.sap.endsWith(s,"/")){s=s+"/"}if(!q.sap.startsWith(s,"/")){s="/"+s}var a=[],n={},t=this,N=this.oModel._getObject(c.getPath()),o,b,d;q.each(N[0].childNodes,function(e,o){if(o.nodeType==1){if(n[o.nodeName]==undefined){n[o.nodeName]=0}else{n[o.nodeName]++}b=s+o.nodeName+"/"+n[o.nodeName];d=t.oModel.getContext(b);if(t.aFilters&&!t.bIsFiltering){if(q.inArray(d,t.filterInfo.aFilteredContexts)!=-1){a.push(d)}}else{a.push(d)}}});return a};return X},true);
