/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.ResponsiveContainerRenderer");
sap.ui.commons.ResponsiveContainerRenderer=function(){};
sap.ui.commons.ResponsiveContainerRenderer.render=function(r,c){var R=r,C=c.getAggregation("content");R.write("<div ");R.writeControlData(c);R.addStyle("width",c.getWidth());R.addStyle("height",c.getHeight());R.writeStyles();R.write(">");if(C){R.renderControl(C)}R.write("<div ");R.addStyle("width","0px");R.addStyle("height","0px");R.addStyle("overflow","hidden");R.writeStyles();R.write(">");jQuery.each(c.getRanges(),function(i,o){R.write("<div ");R.writeElementData(o);R.addStyle("width",o.getWidth());R.addStyle("height",o.getHeight());R.writeStyles();R.write("></div>")});R.write("</div>");R.write("</div>")};
