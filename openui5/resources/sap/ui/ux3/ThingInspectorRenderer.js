/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.ux3.ThingInspectorRenderer");jQuery.sap.require("sap.ui.ux3.OverlayRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.ui.ux3.ThingInspectorRenderer=sap.ui.core.Renderer.extend(sap.ui.ux3.OverlayRenderer);
sap.ui.ux3.ThingInspectorRenderer.renderContent=function(r,c){var a=r;a.write("<div role='Main' class='sapUiUx3TIContent' id='"+c.getId()+"-content'>");a.renderControl(c._oThingViewer);a.write("</div>")};
sap.ui.ux3.ThingInspectorRenderer.addRootClasses=function(r,c){var a=r;a.addClass("sapUiUx3TI")};
sap.ui.ux3.ThingInspectorRenderer.addOverlayClasses=function(r,c){var a=r;a.addClass("sapUiUx3TIOverlay")};
