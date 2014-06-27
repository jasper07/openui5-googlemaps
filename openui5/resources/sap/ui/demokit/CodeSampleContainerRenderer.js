/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.demokit.CodeSampleContainerRenderer");
sap.ui.demokit.CodeSampleContainerRenderer=function(){};
sap.ui.demokit.CodeSampleContainerRenderer.render=function(r,c){var a=r;a.write("<div");a.writeControlData(c);a.write(" class='sapUiDKitCSample sapUiShd'");var w=c.getWidth();if(w){a.addStyle("width",w)}a.writeStyles();a.write(">");a.write("<div id='",jQuery.sap.escapeHTML(c.getUiAreaId()),"'");a.write(" class='sapUiBody'");a.write(">");var C=c._oUIArea.getContent();for(var i=0;i<C.length;i++){a.renderControl(C[i])}a.write("</div>");a.write("<div class='sapUiDKitCSampleBorder'>");a.renderControl(c._oShowCodeLink);a.write(" ");a.renderControl(c._oApplyCodeLink);a.write(" ");a.renderControl(c._oCodeViewer);a.write("</div>");a.write("</div>")};
