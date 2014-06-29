/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.CalloutRenderer");jQuery.sap.require("sap.ui.commons.CalloutBaseRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.ui.commons.CalloutRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.CalloutBaseRenderer);
sap.ui.commons.CalloutRenderer.renderContent=function(r,c){var a=r;var b=c.getContent();for(var i=0;i<b.length;i++){a.renderControl(b[i])}};
sap.ui.commons.CalloutRenderer.addRootClasses=function(r,c){r.addClass("sapUiClt")};
sap.ui.commons.CalloutRenderer.addContentClasses=function(r,c){r.addClass("sapUiCltCont")};
sap.ui.commons.CalloutRenderer.addArrowClasses=function(r,c){r.addClass("sapUiCltArr")};
