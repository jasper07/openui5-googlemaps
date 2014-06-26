/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.layout.form.FormRenderer");sap.ui.layout.form.FormRenderer={};
sap.ui.layout.form.FormRenderer.render=function(r,f){if(!f.getVisible()){return}var a=r;var l=f.getLayout();a.write("<div");a.writeControlData(f);a.addClass("sapUiForm");var c=sap.ui.layout.form.FormHelper.addFormClass();if(c){a.addClass(c)}if(f.getEditable()){a.addClass("sapUiFormEdit");a.addClass("sapUiFormEdit-CTX")}if(f.getWidth()){a.addStyle("width",f.getWidth())}if(f.getTooltip_AsString()){a.writeAttributeEscaped('title',f.getTooltip_AsString())}a.writeClasses();a.writeStyles();var A={role:"form"};var t=f.getTitle();if(t){var i="";if(typeof t=="string"){i=f.getId()+"--title"}else{i=t.getId()}A["describedby"]=i}a.writeAccessibilityState(f,A);a.write(">");if(l){a.renderControl(l)}else{jQuery.sap.log.warning("Form \""+f.getId()+"\" - Layout missing!","Renderer","Form")}a.write("</div>")};
