/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.DisplayListItemRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.ListItemBaseRenderer");sap.m.DisplayListItemRenderer=sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);
sap.m.DisplayListItemRenderer.renderLIAttributes=function(r,l){r.addClass("sapMDLI")};
sap.m.DisplayListItemRenderer.renderLIContent=function(r,l){var i=l.getLabel();if(i){r.write("<label for='"+l.getId()+"-value' class='sapMDLILabel'>");r.writeEscaped(l.getLabel());r.write("</label>")}var a=l.getValue();if(a){r.write("<div id='"+l.getId()+"-value' class='sapMDLIValue'>");r.writeEscaped(l.getValue());r.write("</div>")}};
