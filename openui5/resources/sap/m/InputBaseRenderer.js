/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.InputBaseRenderer");jQuery.sap.require("sap.ui.core.ValueStateSupport");sap.m.InputBaseRenderer={};
sap.m.InputBaseRenderer.render=function(r,c){if(!c.getVisible()){return}r.write("<div");r.writeControlData(c);this.addOuterStyles(r,c);c.getWidth()&&r.addStyle("width",c.getWidth());r.writeStyles();r.addClass("sapMInputBase");this.addCursorClass(r,c);this.addOuterClasses(r,c);!c.getEnabled()&&r.addClass("sapMInputBaseDisabled");!c.getEditable()&&r.addClass("sapMInputBaseReadonly");c.getValueState()!="None"&&r.addClass("sapMInputBase"+c.getValueState());r.writeClasses();this.writeOuterAttributes(r,c);var t=sap.ui.core.ValueStateSupport.enrichTooltip(c,c.getTooltip_AsString());t&&r.writeAttributeEscaped("title",t);r.write(">");if(c._showLabelAsPlaceholder){r.write("<label class='sapMInputBasePlaceholder'");r.writeAttribute("id",c.getId()+"-placeholder");r.writeAttribute("for",c.getId()+"-inner");r.write(">");r.writeEscaped(c.getPlaceholder());r.write("</label>")}this.openInputTag(r,c);r.writeAttribute("id",c.getId()+"-inner");if(c.getName()){r.writeAttributeEscaped("name",c.getName())}if(!c._showLabelAsPlaceholder&&c.getPlaceholder()){r.writeAttributeEscaped("placeholder",c.getPlaceholder())}if(c.getMaxLength&&c.getMaxLength()>0){r.writeAttribute("maxlength",c.getMaxLength())}if(!c.getEnabled()){r.writeAttribute("disabled","disabled")}else if(!c.getEditable()){r.writeAttribute("tabindex","-1");r.writeAttribute("readonly","readonly");r.addClass("sapMInputBaseReadonlyInner")}this.writeInnerValue(r,c);this.writeInnerAttributes(r,c);r.addClass("sapMInputBaseInner");this.addInnerClasses(r,c);c.getValueState()!="None"&&r.addClass("sapMInputBase"+c.getValueState()+"Inner");r.writeClasses();this.addInnerStyles(r,c);r.writeStyles();r.write(">");this.writeInnerContent(r,c);this.closeInputTag(r,c);r.write("</div>")};
sap.m.InputBaseRenderer.writeAttributes=function(r,c){jQuery.sap.log.warning("Usage of deprecated function: sap.m.InputBaseRenderer#writeAttributes");this.writeInnerAttributes(r,c)};
sap.m.InputBaseRenderer.addClasses=function(r,c){jQuery.sap.log.warning("Usage of deprecated function: sap.m.InputBaseRenderer#addClasses");this.addOuterClasses(r,c)};
sap.m.InputBaseRenderer.openInputTag=function(r,c){r.write("<input")};
sap.m.InputBaseRenderer.writeInnerValue=function(r,c){r.writeAttributeEscaped("value",c.getValue())};
sap.m.InputBaseRenderer.addCursorClass=function(r,c){if(c.getEnabled()){r.addClass("sapMInputBaseCursor")}};
sap.m.InputBaseRenderer.addOuterStyles=function(r,c){};
sap.m.InputBaseRenderer.addOuterClasses=function(r,c){};
sap.m.InputBaseRenderer.writeOuterAttributes=function(r,c){};
sap.m.InputBaseRenderer.addInnerStyles=function(r,c){};
sap.m.InputBaseRenderer.addInnerClasses=function(r,c){};
sap.m.InputBaseRenderer.writeInnerAttributes=function(r,c){};
sap.m.InputBaseRenderer.writeInnerContent=function(r,c){};
sap.m.InputBaseRenderer.closeInputTag=function(r,c){};
