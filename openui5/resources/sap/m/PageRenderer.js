/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.PageRenderer");sap.m.PageRenderer={};
sap.m.PageRenderer.render=function(r,p){var h=null,f=null,e=p.getEnableScrolling()?" sapMPageScrollEnabled":"";if(p.getShowHeader()){h=p._getAnyHeader()}var s=p.getSubHeader();if(p.getShowFooter()){f=p.getFooter()}r.write("<div");r.writeControlData(p);r.addClass("sapMPage");r.addClass("sapMPageBg"+p.getBackgroundDesign());if(h){r.addClass("sapMPageWithHeader")}if(s){r.addClass("sapMPageWithSubHeader")}if(f){r.addClass("sapMPageWithFooter")}r.writeClasses();var t=p.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.write(">");if(h){r.renderControl(h)}if(s){s._context='header';r.renderControl(s.addStyleClass("sapMSubHeader-CTX sapMPageSubHeader"))}r.write('<section id="'+p.getId()+'-cont">');r.write('<div id="'+p.getId()+'-scroll" class="sapMPageScroll'+e+'">');var c=p.getContent();var l=c.length;for(var i=0;i<l;i++){r.renderControl(c[i])}r.write("</div>");r.write("</section>");if(f){f._context='footer';r.renderControl(f)}r.write("</div>")};
