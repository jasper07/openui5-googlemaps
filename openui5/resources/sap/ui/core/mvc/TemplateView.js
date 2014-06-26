/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/library','./View'],function(){"use strict";sap.ui.core.mvc.View.extend("sap.ui.core.mvc.TemplateView",{metadata:{library:"sap.ui.core"}});(function(){sap.ui.templateview=function(i,v){return sap.ui.view(i,v,sap.ui.core.mvc.ViewType.Template)};sap.ui.core.mvc.TemplateView._sType=sap.ui.core.mvc.ViewType.Template;sap.ui.core.mvc.TemplateView.prototype.getControllerName=function(){return this._sControllerName};sap.ui.core.mvc.TemplateView._getViewUrl=function(t){return jQuery.sap.getModulePath(t,".view.tmpl")};sap.ui.core.mvc.TemplateView.prototype.initViewSettings=function(s){if(!s){throw new Error("mSettings must be given")}if(!s.viewName){throw new Error("No view name is given.")}this._oTemplate=sap.ui.template({id:this.getId(),src:sap.ui.core.mvc.TemplateView._getViewUrl(s.viewName)});this._sControllerName=this._oTemplate._sControllerName;this._oTemplate=this._oTemplate.createControl(undefined,undefined,this)}}());return sap.ui.core.mvc.TemplateView},true);
