/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./FormatException','./ParseException','./Type','./ValidateException'],function(q,F,P,T,V){"use strict";var S=T.extend("sap.ui.model.SimpleType",{constructor:function(f,c){T.apply(this,arguments);this.setFormatOptions(f||{});this.setConstraints(c||{});this.sName="SimpleType"},metadata:{"abstract":true,publicMethods:["setConstraints","setFormatOptions","formatValue","parseValue","validateValue"]}});S.prototype.setConstraints=function(c){this.oConstraints=c};S.prototype.setFormatOptions=function(f){this.oFormatOptions=f};return S},true);
