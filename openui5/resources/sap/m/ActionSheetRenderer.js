/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.ActionSheetRenderer");sap.m.ActionSheetRenderer={};
sap.m.ActionSheetRenderer.render=function(r,c){var a=c.getButtons(),i,m;for(i=0;i<a.length;i++){if(a[i].getIcon()){m=true;break}}r.write("<div");r.writeControlData(c);r.addClass("sapMActionSheet");if(m){r.addClass("sapMActionSheetMixedButtons")}r.writeClasses();var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.write(">");for(i=0;i<a.length;i++){r.renderControl(a[i].addStyleClass("sapMActionSheetButton"))}if((jQuery.device.is.iphone||(sap.m.Dialog._bOneDesign&&sap.ui.Device.system.phone))&&c.getShowCancelButton()){r.renderControl(c._getCancelButton())}r.write("</div>")};
