/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.CheckBox");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.CheckBox",{metadata:{library:"sap.m",properties:{"selected":{type:"boolean",group:"Data",defaultValue:false},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"enabled":{type:"boolean",group:"Behavior",defaultValue:true},"name":{type:"string",group:"Misc",defaultValue:null},"text":{type:"string",group:"Appearance",defaultValue:null},"textDirection":{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:sap.ui.core.TextDirection.Inherit},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:''},"activeHandling":{type:"boolean",group:"Misc",defaultValue:true}},events:{"select":{}}}});sap.m.CheckBox.M_EVENTS={'select':'select'};jQuery.sap.require("sap.ui.core.EnabledPropagator");sap.ui.core.EnabledPropagator.call(sap.m.CheckBox.prototype);
sap.m.CheckBox.prototype.init=function(){this.addActiveState(this);jQuery.sap.require("sap.ui.core.IconPool");sap.ui.core.IconPool.insertFontFaceStyle()};
sap.m.CheckBox.prototype.ontouchstart=function(e){e.originalEvent._sapui_handledByControl=true};
sap.m.CheckBox.prototype.setSelected=function(s){s=!!s;if(s==this.getSelected()){return this}this.$("CbBg").toggleClass("sapMCbMarkChecked",s);var c=this.getDomRef("CB");if(c){s?c.setAttribute('checked','checked'):c.removeAttribute('checked')}this.setProperty("selected",s,true);return this};
sap.m.CheckBox.prototype.ontap=function(e){if(this.getEnabled()){var s=!this.getSelected();this.setSelected(s);this.fireSelect({selected:s})}};
sap.m.CheckBox.prototype.addActiveState=function(c){if(sap.ui.Device.os.blackberry||(sap.ui.Device.os.android&&(sap.ui.Device.os.versionStr.match(/[23]\./)))){c.addDelegate({ontouchstart:function(e){jQuery(c.getDomRef()).addClass("sapMActive")},ontouchend:function(e){jQuery(c.getDomRef()).removeClass("sapMActive")}})}};
sap.m.CheckBox.prototype.setText=function(t){this.setProperty("text",t,true);if(this._oLabel){this._oLabel.setText(this.getText())}else{this._createLabel("text",this.getText())}return this};
sap.m.CheckBox.prototype.setWidth=function(w){this.setProperty("width",w,true);if(this._oLabel){this._oLabel.setWidth(this.getWidth())}else{this._createLabel("width",this.getWidth())}return this};
sap.m.CheckBox.prototype.setTextDirection=function(d){this.setProperty("textDirection",d,true);if(this._oLabel){this._oLabel.setTextDirection(this.getTextDirection())}else{this._createLabel("textDirection",this.getTextDirection())}return this};
sap.m.CheckBox.prototype.exit=function(){delete this._iTabIndex;if(this._oLabel){this._oLabel.destroy()}};
sap.m.CheckBox.prototype._createLabel=function(p,v){this._oLabel=new sap.m.Label(this.getId()+"-label",{}).addStyleClass("sapMCbLabel").setParent(this,null,true);this._oLabel.setProperty(p,v,false)};
sap.m.CheckBox.prototype.onsapspace=function(e){this.ontap(e);if(e){e.preventDefault();e.stopPropagation()}};
sap.m.CheckBox.prototype.setTabIndex=function(t){this._iTabIndex=t;this.$("CbBg").attr("tabindex",t);return this};
