/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.demokit.CodeViewerRenderer");
sap.ui.demokit.CodeViewerRenderer=function(){};
sap.ui.demokit.CodeViewerRenderer.render=function(r,c){if(!c.getVisible())return;r.write("<pre");r.writeControlData(c);if(c.getEditable()){r.addClass("sapUiCodeViewer");r.addClass("editable");r.writeAttribute("contentEditable","true")}else{r.addClass("prettyprint")}var h=c.getHeight();if(h){r.addStyle("height",h)}var w=c.getWidth();if(w){r.addStyle("width",w)}r.writeClasses();r.writeStyles();r.write(">");if(c.getSource()){r.write(c.getSource().replace(/</g,'&lt;'))}r.write("</pre>")};
