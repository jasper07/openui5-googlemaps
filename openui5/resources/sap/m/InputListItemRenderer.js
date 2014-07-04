/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.InputListItemRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.ListItemBaseRenderer");sap.m.InputListItemRenderer=sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);
sap.m.InputListItemRenderer.renderLIAttributes=function(r,l){r.addClass("sapMILI")};
sap.m.InputListItemRenderer.renderLIContent=function(r,l){var L=l.getLabel();if(L){r.write("<label for='"+l.getId()+"-content' class='sapMILILabel'>");r.writeEscaped(l.getLabel());r.write("</label>")}r.write("<div class='sapMILIDiv sapMILI-CTX'>");var c=l.getContent();var a=c.length;for(var i=0;i<a;i++){r.renderControl(c[i])}r.write("</div>")};
