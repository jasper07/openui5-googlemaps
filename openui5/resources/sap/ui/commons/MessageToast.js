/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.MessageToast");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.MessageToast",{metadata:{deprecated:true,publicMethods:["toast","isIdle"],library:"sap.ui.commons",properties:{"anchorId":{type:"string",group:"Misc",defaultValue:null}},events:{"next":{}}}});sap.ui.commons.MessageToast.M_EVENTS={'next':'next'};jQuery.sap.require("sap.ui.thirdparty.jqueryui.jquery-ui-core");
sap.ui.commons.MessageToast.prototype.init=function(){this.oMessage=null;this.sAnchorId="";this.bIdle=true;this.sLeftOffset="";this.oPopup=new sap.ui.core.Popup(this,false,false,false);this.oPopup.attachClosed(this.next,this)};
sap.ui.commons.MessageToast.prototype.exit=function(){if(!this.bIdle){this.close()}this.oPopup.destroy();this.oPopup=null};
sap.ui.commons.MessageToast.prototype.onAfterRendering=function(){var r=sap.ui.getCore().getConfiguration().getRTL();var i=jQuery.sap.byId(this.sAnchorId);var a=i.position();var b=jQuery.sap.byId(this.getAnchorId());var c=b.outerWidth();if(a){var t=r?a.left+i.outerWidth():c-a.left;var T=this.$();var d=T.width();var e=Math.max(d,c);var f=c-d;if(f>0){T.css('minWidth',c)}var m=r?(e-t+2)+"px":(e-t-2)+"px";if(e>=t){var A=jQuery.sap.byId(this.getId()+"Arrow");if(sap.ui.getCore().getConfiguration().getRTL()){A.css('marginRight',m)}else{A.css('marginLeft',m)}this.sLeftOffset="0"}}};
sap.ui.commons.MessageToast.prototype.next=function(){this.bIdle=true;this.fireNext()};
sap.ui.commons.MessageToast.prototype.open=function(d){if(!this.bIdle){this.oPopup.close(0)}this.bIdle=false;var r=sap.ui.getCore().getConfiguration().getRTL();var p=r?sap.ui.core.Popup.Dock.LeftBottom:sap.ui.core.Popup.Dock.RightBottom;var a=r?sap.ui.core.Popup.Dock.LeftTop:sap.ui.core.Popup.Dock.RightTop;var b=this.sLeftOffset+" 5";var c=null;var e=this.getAnchorId();if(e){c=jQuery.sap.domById(e)}if(!c){c=document.body}this.oPopup.open(d,p,a,c,b)};
sap.ui.commons.MessageToast.prototype.close=function(d){this.oPopup.close(d)};
sap.ui.commons.MessageToast.prototype.getClasses=function(){var c="sapUiMsgToast";if(this.oMessage&&this.oMessage.getType()){c+=" sapUiMsgT"+this.oMessage.getType()}return c};
sap.ui.commons.MessageToast.prototype.toast=function(m,a){this.oMessage=m;this.sAnchorId=a;sap.ui.getCore().getRenderManager().render(this,sap.ui.getCore().getStaticAreaRef(),true);this.open(750);this.close(2250);return this};
sap.ui.commons.MessageToast.prototype.isIdle=function(){return this.bIdle};
