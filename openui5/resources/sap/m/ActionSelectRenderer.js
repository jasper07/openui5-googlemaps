/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.require("sap.m.SelectRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.declare("sap.m.ActionSelectRenderer");sap.m.ActionSelectRenderer=sap.ui.core.Renderer.extend(sap.m.SelectRenderer);sap.m.ActionSelectRenderer.CSS_CLASS="sapMActionSelect";
sap.m.ActionSelectRenderer.addStyleClass=function(r,a){r.addClass(sap.m.ActionSelectRenderer.CSS_CLASS)};
