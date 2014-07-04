/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.MessageList");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.MessageList",{metadata:{deprecated:true,publicMethods:["setMessages"],library:"sap.ui.commons",properties:{"visible":{type:"boolean",group:"Behavior",defaultValue:false},"anchorId":{type:"string",group:"Appearance",defaultValue:null},"maxListed":{type:"string",group:"Misc",defaultValue:'7'}}}});jQuery.sap.require("sap.ui.core.Popup");
sap.ui.commons.MessageList.prototype.init=function(){this.aMessages=[];this.iItemHeight=0;this.oPopup=new sap.ui.core.Popup(this,false,true,false)};
sap.ui.commons.MessageList.prototype.exit=function(){this.close();this.oPopup.destroy();this.oPopup=null};
sap.ui.commons.MessageList.prototype.onThemeChanged=function(){this.iItemHeight=0};
sap.ui.commons.MessageList.prototype.onAfterRendering=function(){var l=this.getDomRef();var L=jQuery(l);var m=this.getMaxListed();var a=this.aMessages.length;if(a<=m){L.height("auto");return}if(this.iItemHeight==0){var i=l.firstChild;var I=jQuery(i);this.iItemHeight=I.height()}l.style.overflowY="scroll";l.style.overflowX="hidden";var d=(m*this.iItemHeight)+"px";L.height(d)};
sap.ui.commons.MessageList.prototype.open=function(){var r=sap.ui.getCore().getConfiguration().getRTL();var a=200;var m=r?sap.ui.core.Popup.Dock.RightTop:sap.ui.core.Popup.Dock.LeftTop;var b=r?sap.ui.core.Popup.Dock.RightBottom:sap.ui.core.Popup.Dock.LeftBottom;var c="0 0";var d=null;var e=this.getAnchorId();if(e){d=jQuery.sap.domById(e)}if(!d){d=document.body}this.oPopup.open(a,m,b,d,c)};
sap.ui.commons.MessageList.prototype.close=function(){var a=200;this.oPopup.close(a)};
sap.ui.commons.MessageList.prototype.setMessages=function(m){this.aMessages=m;if(this.getVisible()){sap.ui.getCore().getRenderManager().render(this,sap.ui.getCore().getStaticAreaRef(),true)}return this};
sap.ui.commons.MessageList.prototype.setVisible=function(v){this.setProperty("visible",v);if(v){sap.ui.getCore().getRenderManager().render(this,sap.ui.getCore().getStaticAreaRef(),true);this.open()}else{this.close()}return this};
