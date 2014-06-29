/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.ScrollContainerRenderer");sap.m.ScrollContainerRenderer={};
sap.m.ScrollContainerRenderer.render=function(r,c){if(!c.getVisible()){return}r.write("<div");r.writeControlData(c);var w=c.getWidth(),h=c.getHeight();if(w){r.addStyle("width",w)}if(h){r.addStyle("height",h)}r.writeStyles();if(c.getVertical()){if(!c.getHorizontal()){r.addClass("sapMScrollContV")}else{r.addClass("sapMScrollContVH")}}else if(c.getHorizontal()){r.addClass("sapMScrollContH")}r.addClass("sapMScrollCont");r.writeClasses();var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.write("><div id='"+c.getId()+"-scroll' class='sapMScrollContScroll'>");var C=c.getContent(),l=C.length;for(var i=0;i<l;i++){r.renderControl(C[i])}r.write("</div></div>")};
