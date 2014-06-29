/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.CheckBoxRenderer");jQuery.sap.require("sap.ui.core.ValueStateSupport");sap.m.CheckBoxRenderer={};
sap.m.CheckBoxRenderer.render=function(r,c){if(!c.getVisible()){return}var e=c.getEnabled();var t=e?0:-1;r.write("<div");r.addClass("sapMCb");if(e){r.addClass("sapMPointer")}r.writeControlData(c);r.writeClasses();var T=sap.ui.core.ValueStateSupport.enrichTooltip(c,c.getTooltip_AsString());if(T){r.writeAttributeEscaped("title",T)}r.write(">");r.write("<div id='");r.write(c.getId()+"-CbBg'");r.addClass("sapMCbBg");if(!e){r.addClass("sapMCbBgDis")}else if(sap.ui.Device.system.desktop){r.addClass("sapMCbHoverable")}if(!c.getActiveHandling()){r.addClass("sapMCbActiveStateOff")}r.writeAttribute("tabindex",c.hasOwnProperty("_iTabIndex")?c._iTabIndex:t);r.addClass("sapMCbMark");if(c.getSelected()){r.addClass("sapMCbMarkChecked")}r.writeClasses();r.write(">");r.write("<input type='CheckBox' tabindex='-1' id='");r.write(c.getId()+"-CB'");if(c.getSelected()){r.writeAttribute("checked","checked")}if(c.getName()){r.writeAttributeEscaped('name',c.getName())}if(!e){r.write(" disabled='disabled'")}r.write(" /></div>");r.renderControl(c._oLabel);r.write("</div>")};
