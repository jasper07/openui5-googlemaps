/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.PasswordFieldRenderer");jQuery.sap.require("sap.ui.commons.TextFieldRenderer");sap.ui.commons.PasswordFieldRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.TextFieldRenderer);
sap.ui.commons.PasswordFieldRenderer.renderInnerAttributes=function(r,p){if(sap.ui.Device.support.input.placeholder||p.getValue()||!p.getPlaceholder()){r.writeAttribute('type','password')}};
sap.ui.commons.PasswordFieldRenderer.renderTextFieldEnabled=function(r,p){if(!p.getEnabled()&&!p.getEditable()){r.writeAttribute('readonly','readonly');r.writeAttribute('tabindex','-1')}else{r.writeAttribute('tabindex','0')}};
sap.ui.commons.PasswordFieldRenderer.setEnabled=function(p,e){var t=p.getDomRef();if(e){if(p.getEditable()){jQuery(t).removeClass('sapUiTfDsbl').addClass('sapUiTfStd');jQuery(t).removeAttr('readonly').attr('tabindex','0')}else{jQuery(t).removeClass('sapUiTfDsbl').addClass('sapUiTfRo');jQuery(t).attr('tabindex','0')}}else{if(p.getEditable()){jQuery(t).removeClass('sapUiTfStd').addClass('sapUiTfDsbl');jQuery(t).attr('readonly','readonly').attr('tabindex','-1')}else{jQuery(t).removeClass('sapUiTfRo').addClass('sapUiTfDsbl');jQuery(t).attr('tabindex','-1')}}};
