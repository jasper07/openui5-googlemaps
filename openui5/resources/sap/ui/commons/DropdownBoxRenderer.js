/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.DropdownBoxRenderer");jQuery.sap.require("sap.ui.commons.ComboBoxRenderer");sap.ui.commons.DropdownBoxRenderer=sap.ui.core.Renderer.extend(sap.ui.commons.ComboBoxRenderer);
sap.ui.commons.DropdownBoxRenderer.renderOuterContentBefore=function(r,d){this.renderExpander(r,d)};
sap.ui.commons.DropdownBoxRenderer.renderOuterContent=function(r,d){this.renderSelectBox(r,d,'0')};
sap.ui.commons.DropdownBoxRenderer.renderTextFieldEnabled=function(r,d){if(d.mobile){r.writeAttribute('tabindex','-1')}else if(!d.getEnabled()){r.writeAttribute('disabled','disabled');r.writeAttribute('tabindex','-1')}else if(!d.getEditable()){r.writeAttribute('tabindex','0')}else{r.writeAttribute('tabindex','0')}};
sap.ui.commons.DropdownBoxRenderer.renderARIAInfo=function(r,d){var p=-1;if(d.getSelectedItemId()){for(var i=0;i<d.getItems().length;i++){var I=d.getItems()[i];if(I.getId()==d.getSelectedItemId()){p=i+1;break}}}var P={autocomplete:"list",live:"polite",setsize:d.getItems().length,posinset:(p>=0)?p:undefined};if(d.getValueState()==sap.ui.core.ValueState.Error){P["invalid"]=true}r.writeAccessibilityState(d,P)};
