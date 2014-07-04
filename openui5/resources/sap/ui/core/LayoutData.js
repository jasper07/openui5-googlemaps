/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['./library','./Element'],function(){"use strict";sap.ui.core.Element.extend("sap.ui.core.LayoutData",{metadata:{"abstract":true,library:"sap.ui.core"}});sap.ui.core.LayoutData.prototype.invalidate=function(){var p=this.getParent();if(p&&p.getMetadata().getName()=="sap.ui.core.VariantLayoutData"){p=p.getParent()}if(p){var l=p.getParent();if(l){var e=jQuery.Event("LayoutDataChange");e.srcControl=p;l._handleEvent(e)}}};sap.ui.core.LayoutData.prototype.setLayoutData=function(l){return this};return sap.ui.core.LayoutData},true);
