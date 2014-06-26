/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.BusyDialogRenderer");sap.m.BusyDialogRenderer={};
sap.m.BusyDialogRenderer.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapMBusyDialog sapMCommonDialog");if(jQuery.device.is.iphone){r.addClass("sapMDialogHidden")}if(!c._isPlatformDependent){if(!c.getText()&&!c.getTitle()&&!c.getShowCancelButton()){r.addClass("sapMBusyDialogSimple")}}r.writeClasses();var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.write(">");if(c.getTitle()){r.write("<header class=\"sapMDialogTitle\">");r.writeEscaped(c.getTitle());r.write("</header>")}if(sap.ui.Device.os.ios||!c._isPlatformDependent){r.renderControl(c._oLabel);r.renderControl(c._busyIndicator)}else{r.renderControl(c._busyIndicator);r.renderControl(c._oLabel)}if(c.getShowCancelButton()){r.write("<footer class='sapMBusyDialogFooter sapMFooter-CTX'>");r.renderControl(c._oButton);r.write("</footer>")}r.write("</div>")};
