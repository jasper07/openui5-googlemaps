/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var T={};T.render=function(r,c){var i=c.isInline();if(!i){r.write("<div");r.writeControlData(c);r.writeStyles();r.writeClasses();r.write(">")}var R=this.renderTemplate||c.getTemplateRenderer();if(R){R.apply(this,arguments)}if(!i){r.write("</div>")}};return T},true);
