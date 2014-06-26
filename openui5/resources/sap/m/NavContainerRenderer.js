/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.NavContainerRenderer");sap.m.NavContainerRenderer={};
sap.m.NavContainerRenderer.render=function(r,c){if(!c.getVisible()){return}r.write("<div");r.writeControlData(c);r.addClass("sapMNav");r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());if(this.renderAttributes){this.renderAttributes(r,c)}r.writeClasses();r.writeStyles();var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.write(">");if(this.renderBeforeContent){this.renderBeforeContent(r,c)}var C=c.getCurrentPage();if(C){r.renderControl(C)}r.write("</div>")};
