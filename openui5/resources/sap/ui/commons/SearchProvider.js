/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.SearchProvider");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.search.OpenSearchProvider");sap.ui.core.search.OpenSearchProvider.extend("sap.ui.commons.SearchProvider",{metadata:{deprecated:true,library:"sap.ui.commons"}});
sap.ui.commons.SearchProvider.prototype._doSuggest=function(s,S){this.suggest(S,function(v,a){if(s&&s.suggest){s.suggest(v,a)}})};
