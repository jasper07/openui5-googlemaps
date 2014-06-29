/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.SelectRenderer");jQuery.sap.require("sap.ui.core.ValueStateSupport");sap.m.SelectRenderer={};sap.m.SelectRenderer.CSS_CLASS="sapMSlt";
sap.m.SelectRenderer.render=function(r,s){var S=s.getSelectedItem(),a=S?S.getText():"",t=sap.ui.core.ValueStateSupport.enrichTooltip(s,s.getTooltip_AsString()),i=s.getId()+"-nat",T=s.getType(),I=s.getIcon(),A=s.getAutoAdjustWidth(),e=s.getEnabled(),C=sap.m.SelectRenderer.CSS_CLASS;if(!s.getVisible()){return}r.write("<div");this.addStyleClass(r,s);r.addClass(C);r.addClass(C+s.getType());if(!e){r.addClass(C+"Disabled")}if(A){r.addClass(C+"AutoAdjustedWidth")}else{r.addStyle("width",s.getWidth())}if(I){r.addClass(C+"WithIcon")}r.addClass(C+"WithArrow");r.addStyle("max-width",s.getMaxWidth());r.writeControlData(s);r.writeStyles();r.writeClasses();if(t){r.writeAttributeEscaped("title",t)}if(e){r.writeAttribute("tabindex","0")}r.write(">");switch(T){case sap.m.SelectType.Default:this._renderLabel(r,s,i,a);this._renderArrow(r);break;case sap.m.SelectType.IconOnly:this._renderIcon(r,I);break}if(s._isRequiredSelectElement()){this._renderSelectElement(r,s,i,e,a)}r.write("</div>")};
sap.m.SelectRenderer._renderLabel=function(r,s,i,S){r.write('<label class="'+sap.m.SelectRenderer.CSS_CLASS+'Label"');r.writeAttribute("for",i);r.write(">");r.writeEscaped(S);r.write('</label>')};
sap.m.SelectRenderer._renderArrow=function(r){r.write('<span class="'+sap.m.SelectRenderer.CSS_CLASS+'Arrow"></span>')};
sap.m.SelectRenderer._renderIcon=function(r,i){r.writeIcon(i,sap.m.SelectRenderer.CSS_CLASS+"Icon")};
sap.m.SelectRenderer._renderSelectElement=function(r,s,i,e,S){var n=s.getName();r.write("<select");r.writeAttribute("id",i);if(n){r.writeAttributeEscaped("name",n)}if(!e){r.write(" disabled")}r.writeAttribute("tabindex","-1");r.write(">");this._renderOptions(r,s,S);r.write("</select>")};
sap.m.SelectRenderer._renderOptions=function(r,s,S){var I=s.getItems(),a=I.length,b=s.getAssociation("selectedItem"),i=0;for(;i<a;i++){r.write("<option");r.writeAttribute("id",I[i].getId());r.writeAttributeEscaped("value",(I[i].getKey()!=="")?I[i].getKey():I[i].getId());if(I[i].getId()===b){r.write(" selected")}if(!I[i].getEnabled()){r.write(" disabled")}r.write(">");r.writeEscaped(I[i].getText());r.write("</option>")}if(a===0){r.write("<option>"+S+"</option>")}};
sap.m.SelectRenderer.addStyleClass=function(r,s){};
