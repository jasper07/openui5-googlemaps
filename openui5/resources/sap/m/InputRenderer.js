/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.InputBaseRenderer");jQuery.sap.declare("sap.m.InputRenderer");sap.m.InputRenderer=sap.ui.core.Renderer.extend(sap.m.InputBaseRenderer);
sap.m.InputRenderer.addOuterClasses=function(r,c){r.addClass("sapMInput");if(c.getShowValueHelp()&&c.getEnabled()&&c.getEditable()){r.addClass("sapMInputVH")}};
sap.m.InputRenderer.addOuterStyles=function(r,c){r.addStyle("width",c.getWidth())};
sap.m.InputRenderer.writeInnerAttributes=function(r,c){r.writeAttribute("type",c.getType().toLowerCase());if((!c.getEnabled()&&c.getType()=="Password")||(c.getShowSuggestion()&&sap.ui.Device.system.phone)){r.writeAttribute("readonly","readonly")}};
sap.m.InputRenderer.addInnerClasses=function(r,c){};
sap.m.InputRenderer.writeInnerContent=function(r,c){if(c.getShowValueHelp()&&c.getEnabled()&&c.getEditable()){r.write('<div class="sapMInputValHelp">');r.renderControl(c._getValueHelpIcon());r.write("</div>")}};
