/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.GroupHeaderListItemRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.ListItemBaseRenderer");sap.m.GroupHeaderListItemRenderer=sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);
sap.m.GroupHeaderListItemRenderer.renderLIAttributes=function(r,l){r.addClass("sapMGHLI");if(l.getUpperCase()){r.addClass("sapMGHLIUpperCase")}};
sap.m.GroupHeaderListItemRenderer.renderLIContent=function(r,l,t){var T=l.getTitle();t&&r.write("<td class='sapMGHLICell' colspan='"+(t.getColSpan())+"'>");if(T){t&&r.write("<div class='sapMLIBContent sapMLIBContentMargin'>");r.write("<label for='"+l.getId()+"-value' class='sapMGHLITitle'>");r.writeEscaped(T);var c=l.getCount();if(c!==undefined&&c!==""){r.writeEscaped(" ("+c+")")}r.write("</label>");t&&r.write("</div>")}t&&r.write("</td>")};
