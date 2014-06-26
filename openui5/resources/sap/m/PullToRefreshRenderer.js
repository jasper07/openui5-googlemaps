/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.PullToRefreshRenderer");jQuery.sap.require("sap.ui.core.IconPool");sap.ui.core.IconPool.insertFontFaceStyle();sap.m.PullToRefreshRenderer={};
sap.m.PullToRefreshRenderer.render=function(r,c){if(!c.getVisible())return;var s=c.getShowIcon();var C=c.getCustomIcon();r.write("<div");r.writeControlData(c);r.addClass("sapMPullDown");if(!c._bTouchMode){r.addClass("sapMPullDownNontouch")}else{r.addClass("sapMPullDownTouch")}if(s&&!C){r.addClass("sapMPullDownLogo")}r.writeClasses();r.write(">");if(s&&C){var o=c.getCustomIconImage();if(o){r.write("<div class=\"sapMPullDownCI\">");r.renderControl(o);r.write("</div>")}}r.write("<span class=\"sapMPullDownIcon\"></span>");r.write("<span class=\"sapMPullDownBusy\">");r.renderControl(c._oBusyIndicator);r.write("</span>");r.write("<span id="+c.getId()+"-T class=\"sapMPullDownText\">");r.writeEscaped(c.oRb.getText(c._bTouchMode?"PULL2REFRESH_PULLDOWN":"PULL2REFRESH_REFRESH"));r.write("</span>");r.write("<span id="+c.getId()+"-I class=\"sapMPullDownInfo\">");r.writeEscaped(c.getDescription());r.write("</span>");r.write("</div>")};
