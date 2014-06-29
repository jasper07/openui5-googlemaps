/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/Core'],function(q,C){"use strict";var P={};var p=null;var t=null;function r(){p=null}function l(u){var R,o;u=u.replace(/\/library([^\/.]*)\.(?:css|less)($|[?#])/,function($,a,b){return"/library-parameters.json"+(b?b:"")});R=q.sap.sjax({url:u,dataType:'json'});if(R.success){o=(typeof R.data=="string")?q.parseJSON(R.data):R.data;if(q.isArray(o)){for(var j=0;j<o.length;j++){p=q.extend(p,o[j])}}else{p=q.extend(p,o)}}else{q.sap.log.warning("Could not load theme parameters from: "+u)}}function g(){if(!p){p={};t=sap.ui.getCore().getConfiguration().getTheme();q("link[id^=sap-ui-theme-]").each(function(){l(this.href)})}return p}P._addLibraryTheme=function(u){if(p){l(u)}};P.get=function(n){if(arguments.length==1){return g()[n]}else if(arguments.length==0){var c={};return q.extend(c,g())}else{return undefined}};P.reset=function(){var o=arguments[0]===true;if(!o||sap.ui.getCore().getConfiguration().getTheme()!==t){r()}};return P},true);
