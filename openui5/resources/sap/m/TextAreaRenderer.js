/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.InputBaseRenderer");jQuery.sap.declare("sap.m.TextAreaRenderer");sap.m.TextAreaRenderer={};sap.m.TextAreaRenderer=sap.ui.core.Renderer.extend(sap.m.InputBaseRenderer);
sap.m.TextAreaRenderer.addOuterClasses=function(r,c){r.addClass("sapMTextArea")};
sap.m.TextAreaRenderer.openInputTag=function(r,c){r.write("<textarea")};
sap.m.TextAreaRenderer.closeInputTag=function(r,c){r.write("</textarea>")};
sap.m.TextAreaRenderer.writeInnerValue=function(){};
sap.m.TextAreaRenderer.writeInnerContent=function(r,c){r.writeEscaped(c.getValue())};
sap.m.TextAreaRenderer.addInnerClasses=function(r,c){r.addClass("sapMTextAreaInner")};
sap.m.TextAreaRenderer.writeInnerAttributes=function(r,c){if(c.getWrapping()&&c.getWrapping()!="None"){r.writeAttribute("wrap",c.getWrapping())}r.writeAttribute("rows",c.getRows());r.writeAttribute("cols",c.getCols())};
sap.m.TextAreaRenderer.addInnerStyles=function(r,c){c.getHeight()&&r.addStyle("height",c.getHeight())};
