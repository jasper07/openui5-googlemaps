/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/library','./SearchProvider','jquery.sap.encoder'],function(){"use strict";sap.ui.core.search.SearchProvider.extend("sap.ui.core.search.OpenSearchProvider",{metadata:{library:"sap.ui.core",properties:{"suggestUrl":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"suggestType":{type:"string",group:"Misc",defaultValue:'json'}}}});sap.ui.core.search.OpenSearchProvider.prototype.suggest=function(v,c){var u=this.getSuggestUrl();if(!u){return}u=u.replace("{searchTerms}",jQuery.sap.encodeURL(v));var t=this.getSuggestType();var s;if(t&&t.toLowerCase()==="xml"){t="xml";s=function(d){var x=jQuery(d);var i=x.find("Text");var S=[];i.each(function(){S.push(jQuery(this).text())});c(v,S)}}else{t="json";s=function(d){c(v,d[1])}}jQuery.ajax({url:u,dataType:t,success:s,error:function(X,a,e){jQuery.sap.log.fatal("The following problem occurred: "+a,X.responseText+","+X.status)}})};return sap.ui.core.search.OpenSearchProvider},true);
