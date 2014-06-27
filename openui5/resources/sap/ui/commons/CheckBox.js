/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.CheckBox");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.CheckBox",{metadata:{publicMethods:["toggle"],library:"sap.ui.commons",properties:{"checked":{type:"boolean",group:"Data",defaultValue:false,bindable:"bindable"},"text":{type:"string",group:"Appearance",defaultValue:null},"visible":{type:"boolean",group:"Misc",defaultValue:true},"enabled":{type:"boolean",group:"Behavior",defaultValue:true},"editable":{type:"boolean",group:"Behavior",defaultValue:true},"valueState":{type:"sap.ui.core.ValueState",group:"Data",defaultValue:sap.ui.core.ValueState.None},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"textDirection":{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:sap.ui.core.TextDirection.Inherit},"name":{type:"string",group:"Misc",defaultValue:null}},associations:{"ariaDescribedBy":{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},"ariaLabelledBy":{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{"change":{}}}});sap.ui.commons.CheckBox.M_EVENTS={'change':'change'};
sap.ui.commons.CheckBox.prototype.onclick=function(e){if(!!sap.ui.Device.browser.internet_explorer&&!this.getEnabled()){this.$().attr("tabindex",0).addClass("sapUiCbFoc")}this.userToggle(e)};
sap.ui.commons.CheckBox.prototype.onfocusout=function(e){if(!!sap.ui.Device.browser.internet_explorer&&!this.getEnabled()){this.$().attr("tabindex",-1).removeClass("sapUiCbFoc")}};
sap.ui.commons.CheckBox.prototype.onsapspace=function(e){this.userToggle(e)};
sap.ui.commons.CheckBox.prototype.userToggle=function(e){e.preventDefault();if(this.getEnabled()&&this.getEditable()){this.toggle();this.fireChange({checked:this.getChecked()})}else{this.getDomRef().focus()}};
sap.ui.commons.CheckBox.prototype.toggle=function(){this.setChecked(!this.getChecked());return this};
