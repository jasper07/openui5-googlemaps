/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.DatePickerRenderer");jQuery.sap.require("sap.ui.commons.TextFieldRenderer");jQuery.sap.require("sap.ui.commons.DatePicker");(function($){var r=$.datepicker.regional;function d(l,s){r[l]=jQuery.extend(r[l]||{},s)}d('en',{firstDay:0,yearSuffix:''})}(jQuery));sap.ui.commons.DatePickerRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.TextFieldRenderer);
sap.ui.commons.DatePickerRenderer.renderOuterAttributes=function(r,c){r.addClass("sapUiTfCombo");this.renderDatePickerARIAInfo(r,c)};
sap.ui.commons.DatePickerRenderer.renderOuterContentBefore=function(r,c){r.write("<div");r.writeAttribute('id',c.getId()+'-icon');r.addClass("sapUiTfDateIcon");r.writeClasses();r.write("></div>");var a=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");var t=a.getText("DATEPICKER_KEYBOARD");var d=a.getText("DATEPICKER_DATE_TYPE");var T=sap.ui.core.ValueStateSupport.enrichTooltip(c,c.getTooltip_AsString());if(T){t=T+". "+t}t=d+". "+t;r.write('<SPAN id="'+c.getId()+'-Descr" style="visibility: hidden; display: none;">');r.writeEscaped(t);r.write('</SPAN>')};
sap.ui.commons.DatePickerRenderer.renderInnerAttributes=function(r,d){if(d.mobile){r.writeAttribute('type','date');r.addStyle('position','absolute')}};
sap.ui.commons.DatePickerRenderer.renderDatePickerARIAInfo=function(r,c){};
sap.ui.commons.DatePickerRenderer.renderARIAInfo=function(r,d){var p={role:d.getAccessibleRole().toLowerCase(),multiline:false,autocomplete:"none",haspopup:true,describedby:{value:d.getId()+"-Descr",append:true}};if(d.getValueState()==sap.ui.core.ValueState.Error){p["invalid"]=true}r.writeAccessibilityState(d,p)};
sap.ui.commons.DatePickerRenderer.convertPlaceholder=function(d){var p=d.getPlaceholder();if(p.length==8&&!isNaN(p)){var D=d._oFormatYyyymmdd.parse(p);if(D){if(!d._oFormat){d.getRenderedLocale()}p=d._oFormat.format(D)}}return p};
