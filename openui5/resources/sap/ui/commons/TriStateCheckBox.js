/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.TriStateCheckBox");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.TriStateCheckBox",{metadata:{publicMethods:["toggle"],library:"sap.ui.commons",properties:{"selectionState":{type:"sap.ui.commons.TriStateCheckBoxState",group:"Data",defaultValue:sap.ui.commons.TriStateCheckBoxState.Unchecked},"text":{type:"string",group:"Appearance",defaultValue:null},"visible":{type:"boolean",group:"Misc",defaultValue:true},"enabled":{type:"boolean",group:"Behavior",defaultValue:true},"editable":{type:"boolean",group:"Behavior",defaultValue:true},"valueState":{type:"sap.ui.core.ValueState",group:"Data",defaultValue:sap.ui.core.ValueState.None},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"textDirection":{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:sap.ui.core.TextDirection.Inherit}},events:{"change":{}}}});sap.ui.commons.TriStateCheckBox.M_EVENTS={'change':'change'};
sap.ui.commons.TriStateCheckBox.prototype.onclick=function(e){if(!!sap.ui.Device.browser.internet_explorer&&(!this.getEnabled())){this.$().attr("tabindex",0).addClass("sapUiTriCbFoc")}this.userToggle(e)};
sap.ui.commons.TriStateCheckBox.prototype.onfocusout=function(e){if(!!sap.ui.Device.browser.internet_explorer&&(!this.getEnabled())){this.$().attr("tabindex",-1).removeClass("sapUiTriCbFoc")}};
sap.ui.commons.TriStateCheckBox.prototype.onsapspace=function(e){this.userToggle(e)};
sap.ui.commons.TriStateCheckBox.prototype.userToggle=function(e){if(this.getEnabled()&&this.getEditable()){if(this.getSelectionState()==='Mixed'||this.getSelectionState()==="Unchecked"){this.toggle("Checked")}else{this.toggle("Unchecked")}this.fireChange({selectionState:this.getSelectionState()})}else{this.getDomRef().focus()}};
sap.ui.commons.TriStateCheckBox.prototype.toggle=function(d){if(d in sap.ui.commons.TriStateCheckBoxState){this.setSelectionState(d)}};
