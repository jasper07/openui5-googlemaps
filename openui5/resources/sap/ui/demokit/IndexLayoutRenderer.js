/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.demokit.IndexLayoutRenderer");sap.ui.demokit.IndexLayoutRenderer={};
sap.ui.demokit.IndexLayoutRenderer.render=function(r,l){var a=l.getId();r.write("<div");r.writeControlData(l);r.addClass("sapDkIdxLayout");r.addClass("sapDkIdxLayoutHidden");if(l.getEnableScaling()){r.addClass("sapDkIdxLayoutScale")}r.writeClasses();r.write("><div id=\"",a,"-cntnt\">");var c=l.getContent();for(var i=0;i<c.length;i++){r.write("<div class=\"sapDkIdxLayoutItem\" style=\"width:",l._scale(l._itemWidth),"px;height:",l._scale(l._itemHeight),"px;\"><div>");r.renderControl(c[i]);r.write("</div></div>")}r.write("</div></div>")};
