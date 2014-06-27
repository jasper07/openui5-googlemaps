/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.ux3.OverlayContainerRenderer");jQuery.sap.require("sap.ui.ux3.OverlayRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.ui.ux3.OverlayContainerRenderer=sap.ui.core.Renderer.extend(sap.ui.ux3.OverlayRenderer);
sap.ui.ux3.OverlayContainerRenderer.renderContent=function(r,c){var a=r;a.write("<div role='Main' class='sapUiUx3OCContent' id='"+c.getId()+"-content'>");var b=c.getContent();for(var i=0;i<b.length;i++){var d=b[i];a.renderControl(d)}a.write("</div>")};
sap.ui.ux3.OverlayContainerRenderer.addRootClasses=function(r,c){var a=r;a.addClass("sapUiUx3OC")};
sap.ui.ux3.OverlayContainerRenderer.addOverlayClasses=function(r,c){var a=r;a.addClass("sapUiUx3OCOverlay")};
