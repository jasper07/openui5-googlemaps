/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.layout.HorizontalLayoutRenderer");sap.ui.layout.HorizontalLayoutRenderer={};
sap.ui.layout.HorizontalLayoutRenderer.render=function(r,c){if(!c.getVisible()){return}var a=r;var n=!c.getAllowWrapping();a.write("<div");a.writeControlData(c);a.addClass("sapUiHLayout");if(n){a.addClass("sapUiHLayoutNoWrap")}a.writeClasses();a.write(">");var C=c.getContent();for(var i=0;i<C.length;i++){if(n){a.write("<div class='sapUiHLayoutChildWrapper'>")}a.renderControl(C[i]);if(n){a.write("</div>")}}a.write("</div>")};
