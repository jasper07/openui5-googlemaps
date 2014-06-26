/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.InputBaseRenderer");jQuery.sap.declare("sap.m.DateTimeInputRenderer");sap.m.DateTimeInputRenderer=sap.ui.core.Renderer.extend(sap.m.InputBaseRenderer);
sap.m.DateTimeInputRenderer.addOuterClasses=function(r,c){r.addClass("sapMDTI")};
sap.m.DateTimeInputRenderer.addCursorClass=function(r,c){if(c.getEnabled()&&c.getEditable()){r.addClass("sapMPointer")}};
sap.m.DateTimeInputRenderer.addOuterStyles=function(r,c){r.addStyle("width",c.getWidth())};
