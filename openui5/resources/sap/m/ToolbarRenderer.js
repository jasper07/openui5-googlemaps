/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.ToolbarRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.m.ToolbarRenderer={};
sap.m.ToolbarRenderer.render=function(r,t){if(t._isInvisible()){return this.renderInvisible(r,t)}r.write("<div");r.writeControlData(t);r.addClass("sapMTB");if(!sap.m.Toolbar.hasFlexBoxSupport){r.addClass("sapMTBNoFlex")}else if(!sap.m.Toolbar.hasNewFlexBoxSupport){r.addClass("sapMTBOldFlex")}else{r.addClass("sapMTBNewFlex")}if(t.getActive()){r.addClass("sapMTBActive");r.writeAttribute("tabindex","0")}else{r.addClass("sapMTBInactive")}r.addClass("sapMTB-"+t.getActiveDesign()+"-CTX");var w=t.getWidth();var h=t.getHeight();w&&r.addStyle("width",w);h&&r.addStyle("height",h);r.writeClasses();r.writeStyles();r.write(">");t.getContent().forEach(function(c){r.renderControl(c)});r.write("</div>")};
sap.m.ToolbarRenderer.renderInvisible=function(r,t){r.write("<div");r.writeControlData(t);r.addStyle("display","none");r.writeStyles();r.write("></div>")};
