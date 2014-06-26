/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/model/FilterOperator'],function(q,F){"use strict";var a=sap.ui.base.Object.extend("sap.ui.model.odata.Filter",{constructor:function(p,v,A){if(typeof p==="object"){var f=p;p=f.path;v=f.values;A=f.and}this.sPath=p;this.aValues=v;this.bAND=A==undefined?true:A}});return a},true);
