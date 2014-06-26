/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.TileRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.m.TileRenderer={};
sap.m.TileRenderer.render=function(r,c){r.write("<div tabindex=\"0\"");r.writeControlData(c);r.addClass("sapMTile");r.addClass("sapMPointer");r.writeClasses();if(c._invisible){r.addStyle("visibility","hidden");r.writeStyles()}var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.write(">");if(c.getRemovable()){r.write("<div id=\""+c.getId()+"-remove\" class=\"sapMTCRemove\"></div>")}else{r.write("<div id=\""+c.getId()+"-remove\" class=\"sapMTCNoRemove\"></div>")}r.write("<div class=\"sapMTileContent\">");this._renderContent(r,c);r.write("</div></div>")};
sap.m.TileRenderer._renderContent=function(r,c){};
