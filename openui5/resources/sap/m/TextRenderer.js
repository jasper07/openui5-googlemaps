/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.TextRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.m.TextRenderer={};sap.m.TextRenderer.getTextAlign=sap.ui.core.Renderer.getTextAlign;
sap.m.TextRenderer.render=function(r,t){if(!t.getVisible()){return}var w=t.getWidth(),T=t.getText(true),s=t.getTextDirection(),a=t.getTooltip_AsString(),n=t.getMaxLines(),W=t.getWrapping(),b=t.getTextAlign();r.write("<span");r.writeControlData(t);r.addClass("sapMText");if(!W||n==1){r.addClass("sapMTextNoWrap")}else if(W){if(!/\s/.test(T)){r.addClass("sapMTextBreakWord")}}w?r.addStyle("width",w):r.addClass("sapMTextMaxWidth");s&&r.addStyle("direction",s.toLowerCase());a&&r.writeAttributeEscaped("title",a);if(b){b=this.getTextAlign(b,s);if(b){r.addStyle("text-align",b)}}r.writeClasses();r.writeStyles();r.write(">");if(W&&n>1){this.renderMaxLines(r,t)}else{this.renderText(r,t)}r.write("</span>")};
sap.m.TextRenderer.renderMaxLines=function(r,t){r.write("<div");r.writeAttribute("id",t.getId()+"-inner");r.addClass("sapMTextMaxLine");if(t.canUseNativeLineClamp()){r.addClass("sapMTextLineClamp");r.addStyle("-webkit-line-clamp",t.getMaxLines())}r.writeClasses();r.writeStyles();r.write(">");this.renderText(r,t);r.write("</div>")};
sap.m.TextRenderer.renderText=function(r,t){var T=t.getText(true);var w=t.getWrapping();r.writeEscaped(T,w)};
