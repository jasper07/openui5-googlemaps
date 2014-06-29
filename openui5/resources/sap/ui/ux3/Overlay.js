/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.ux3.Overlay");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.ux3.Overlay",{metadata:{interfaces:["sap.ui.core.PopupInterface"],publicMethods:["open","close","isOpen"],library:"sap.ui.ux3",properties:{"openButtonVisible":{type:"boolean",group:"Misc",defaultValue:true},"closeButtonVisible":{type:"boolean",group:"Misc",defaultValue:true}},events:{"close":{allowPreventDefault:true},"openNew":{},"open":{}}}});sap.ui.ux3.Overlay.M_EVENTS={'close':'close','openNew':'openNew','open':'open'};jQuery.sap.require("sap.ui.core.Popup");
sap.ui.ux3.Overlay.prototype.init=function(){var t=this;this._oPopup=new sap.ui.core.Popup(this,false,true);this._oPopup.attachOpened(function(e){var d=jQuery.sap.byId(t._initialFocusId)[0];if(!d&&t._getShell()&&t.getOpenButtonVisible()){d=jQuery.sap.domById(t._getOpenButtonId())}else if(!d&&t._getShell()&&t.getCloseButtonVisible()){d=jQuery.sap.domById(t._getCloseButtonId())}else if(!d){d=t.$("content").firstFocusableDomRef()}if(!d){d=t.$().firstFocusableDomRef()}if(d){jQuery.sap.focus(d)}});this._overridePopupEventing()};
sap.ui.ux3.Overlay.prototype._getShell=function(){return this._oShell};
sap.ui.ux3.Overlay.prototype._getCloseButtonId=function(){return this.getId()+"-close"};
sap.ui.ux3.Overlay.prototype._getOpenButtonId=function(){return this.getId()+"-openNew"};
sap.ui.ux3.Overlay.prototype._initDom=function(f,F,a){var s=jQuery(".sapUiUx3Shell").control();this._oShell=s.length?s[0]:null;s=this._oShell;this.$().css("position","fixed");if(s){this._bFocusEventsRegistered=true;s.syncWithCanvasSize(this.getId(),true,f,F,a);this.$("firstFocusDummyPaneFw").attr("tabindex","0").focusin(jQuery.proxy(s.focusFirstHdr,s));this.$("firstFocusDummyPaneBw").attr("tabindex","0").focusin(jQuery.proxy(s.focusLastTool,s));this.$("LastFocusDummyPane").attr("tabindex","0").focusin(jQuery.proxy(s.focusPaneStart,s))}else{this.$().css("bottom","0px").css("top","0px").css("left","0px").css("right","0px")}};
sap.ui.ux3.Overlay.prototype._cleanupDom=function(){if(this._oShell){this._oShell.syncWithCanvasSize(this.getId(),false)}if(this._bFocusEventsRegistered){this._bFocusEventsRegistered=false;this.$("firstFocusDummyPaneFw").removeAttr("tabindex").unbind("focusin");this.$("firstFocusDummyPaneBw").removeAttr("tabindex").unbind("focusin");this.$("LastFocusDummyPane").removeAttr("tabindex").unbind("focusin")}};
sap.ui.ux3.Overlay.prototype.onAfterRendering=function(){var p=this._oPopup.getOpenState();if(p===sap.ui.core.OpenState.OPEN||p===sap.ui.core.OpenState.OPENING){this._initDom(jQuery.proxy(this._setFocusFirst,this),jQuery.proxy(this._setFocusLast,this),jQuery.proxy(this._applyChanges,this))}};
sap.ui.ux3.Overlay.prototype.onBeforeRendering=function(){};
sap.ui.ux3.Overlay.prototype.exit=function(){this.close();this._oPopup.destroy();this._oPopup=null;this._oShell=null};
sap.ui.ux3.Overlay.prototype.open=function(i){this._initialFocusId=i;if(this._oPopup.isOpen()){return}if(i){this._oPopup.setInitialFocusId(i)}this._oPopup.open(400);this._initDom(jQuery.proxy(this._setFocusFirst,this),jQuery.proxy(this._setFocusLast,this),jQuery.proxy(this._applyChanges,this));this.fireOpen({id:this.getId()})};
sap.ui.ux3.Overlay.prototype.close=function(){if(!this._oPopup.isOpen()){return}this._oPopup.close(400);this._cleanupDom()};
sap.ui.ux3.Overlay.prototype.onclick=function(e){this._handleButtonEvent(e)};
sap.ui.ux3.Overlay.prototype.onsapselect=function(e){this._handleButtonEvent(e)};
sap.ui.ux3.Overlay.prototype._handleButtonEvent=function(e){var a=e.target.id;if(a===this._getCloseButtonId()){if(this.fireClose({id:this.getId()})){this.close()}}else if(a===this._getOpenButtonId()){this.fireOpenNew({id:this.getId()})}};
sap.ui.ux3.Overlay.prototype._getText=function(k,a){var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");var t=undefined;if(r){t=r.getText(k)}if(t&&a){for(var i=0;i<a.length;i++){t=t.replace("{"+i+"}",a[i])}}return t?t:k};
sap.ui.ux3.Overlay.prototype._overridePopupEventing=function(){this._oPopup.onmousedown=function(e){return}};
sap.ui.ux3.Overlay.prototype._setFocusFirst=function(){jQuery.sap.focus(jQuery.sap.domById(this._getOpenButtonId()))};
sap.ui.ux3.Overlay.prototype._setFocusLast=function(){jQuery.sap.focus(jQuery.sap.domById(this._getCloseButtonId()))};
sap.ui.ux3.Overlay.prototype._applyChanges=function(c){return this};
sap.ui.ux3.Overlay.prototype.isOpen=function(){return this._oPopup.isOpen()};
