/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.ui.layout.form.FormLayoutRenderer");jQuery.sap.declare("sap.ui.layout.form.ResponsiveGridLayoutRenderer");sap.ui.layout.form.ResponsiveGridLayoutRenderer=sap.ui.core.Renderer.extend(sap.ui.layout.form.FormLayoutRenderer);
sap.ui.layout.form.ResponsiveGridLayoutRenderer.getMainClass=function(){return"sapUiFormResGrid"};
sap.ui.layout.form.ResponsiveGridLayoutRenderer.renderContainers=function(r,l,f){var c=f.getFormContainers();var L=0;for(var i=0;i<c.length;i++){var C=c[i];if(C.getVisible()){L++}}if(L>0){if(L>1){r.renderControl(l._mainGrid)}else if(l.mContainers[c[0].getId()][0]){r.renderControl(l.mContainers[c[0].getId()][0])}else{r.renderControl(l.mContainers[c[0].getId()][1])}}};
