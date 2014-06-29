/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.TextAreaRenderer");jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.ui.commons.TextFieldRenderer");sap.ui.commons.TextAreaRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.TextFieldRenderer);
sap.ui.commons.TextAreaRenderer.getInnerTagName=function(){return('textarea')};
sap.ui.commons.TextAreaRenderer.renderInnerAttributes=function(r,t){var a=r;a.addClass("sapUiTxtA");a.addStyle('overflow','auto');if(t.getWidth()&&t.getWidth()!=''){}else{if(t.getCols()&&t.getCols()!=''){a.writeAttribute('cols',t.getCols())}}if(t.getHeight()&&t.getHeight()!=''){a.addStyle('height',t.getHeight());a.addStyle('margin-top','0');a.addStyle('margin-bottom','0')}else{if(t.getRows()&&t.getRows()!=''){a.writeAttribute('rows',t.getRows())}}switch(t.getWrapping()){case(sap.ui.core.Wrapping.Soft):a.writeAttribute('wrap','soft');break;case(sap.ui.core.Wrapping.Hard):a.writeAttribute('wrap','hard');break;case(sap.ui.core.Wrapping.Off):a.writeAttribute('wrap','off');break}};
sap.ui.commons.TextAreaRenderer.renderARIAInfo=function(r,t){r.writeAccessibilityState(t,{role:t.getAccessibleRole().toLowerCase()||'textbox',labelledby:t.getLabeledBy()?(t.getLabeledBy()+" "+t.getAriaDescribedBy().join(" ")):undefined,required:t.getRequired(),readonly:!t.getEditable(),multiline:true,autocomplete:"none",invalid:t.getValueState()==sap.ui.core.ValueState.Error})};
sap.ui.commons.TextAreaRenderer.renderInnerContent=function(r,t){var a=r;var v=t.getValue();var p=t.getPlaceholder();if(v.length>t.getMaxLength()&&t.getMaxLength()>0){v=v.substring(0,t.getMaxLength())}if(!sap.ui.Device.support.input.placeholder&&p&&!v){a.writeEscaped(p)}else{a.writeEscaped(v)}};
