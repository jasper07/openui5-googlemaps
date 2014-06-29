/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.ux3.Feeder");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.ux3.Feeder",{metadata:{library:"sap.ui.ux3",properties:{"thumbnailSrc":{type:"sap.ui.core.URI",group:"Data",defaultValue:null},"text":{type:"string",group:"Data",defaultValue:null},"type":{type:"sap.ui.ux3.FeederType",group:"Appearance",defaultValue:sap.ui.ux3.FeederType.Large},"placeholderText":{type:"string",group:"Appearance",defaultValue:null}},events:{"submit":{}}}});sap.ui.ux3.Feeder.M_EVENTS={'submit':'submit'};jQuery.sap.require("sap.ui.core.theming.Parameters");jQuery.sap.require("sap.ui.commons.Button");
sap.ui.ux3.Feeder.prototype.init=function(){this.rb=sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");this.oSendButton=new sap.ui.commons.Button(this.getId()+"-send",{style:sap.ui.commons.ButtonStyle.Emph,icon:"sap-icon://feeder-arrow"}).setParent(this);this.oSendButton.attachEvent('press',this.handleSendButtonPress,this)};
sap.ui.ux3.Feeder.prototype.initSendButton=function(){if(this.getText()==""){this.oSendButton.setProperty('enabled',false,true)}};
sap.ui.ux3.Feeder.prototype.exit=function(){this.rb=undefined;this.oInput=undefined;if(this.oSendButton){this.oSendButton.destroy();delete this.oSendButton}};
sap.ui.ux3.Feeder.prototype.onAfterRendering=function(){this.oInput=this.$("input")};
sap.ui.ux3.Feeder.prototype.onclick=function(e){var t=e.target.getAttribute('ID');switch(t){case(this.getId()+'-send'):break;case(this.getId()+'-input'):break;default:break}};
sap.ui.ux3.Feeder.prototype.onfocusin=function(e){this.oInput.find(".sapUiFeederEmptyText").remove()};
sap.ui.ux3.Feeder.prototype.onfocusout=function(e){var t=this.oInput.text();if(t==""){this.oInput.empty();this.oInput.append(sap.ui.ux3.FeederRenderer.getEmptyTextInfo(this))}this.setProperty("text",t,true)};
sap.ui.ux3.Feeder.prototype.getFocusDomRef=function(){return this.getDomRef("input")};
sap.ui.ux3.Feeder.prototype.onkeyup=function(e){if(this.oInput.text()==""){this.oSendButton.setEnabled(false)}else{this.oSendButton.setEnabled(true)}};
sap.ui.ux3.Feeder.prototype.handleSendButtonPress=function(e){var t=this.getMultilineText(this.oInput);this.setProperty("text",t,true);this.fireSubmit({text:t});this.setText('')};
sap.ui.ux3.Feeder.prototype.getMultilineText=function(I){function p(n){var a;var t='';for(var i=0;i<n.length;i++){a=n[i];if(a.nodeType===3||a.nodeType===4){if(!(!!sap.ui.Device.browser.internet_explorer&&a.nodeValue==='\xA0')){t+=a.nodeValue.replace(/\n/g,'')}}if(a.nodeName==='DIV'||a.nodeName==='P'||(a.nodeName==='BR'&&!!!sap.ui.Device.browser.webkit)){if(a.nodeName==='BR'&&!!sap.ui.Device.browser.firefox&&i===n.length-1&&jQuery(a).attr("type")==="_moz"){continue}if(!(!!sap.ui.Device.browser.internet_explorer&&t==='')&&!((!!sap.ui.Device.browser.firefox||!!sap.ui.Device.browser.webkit)&&t===''&&a.nodeName==='P')&&!(!!sap.ui.Device.browser.webkit&&a.nodeName==='P'&&a.textContent.match(/^(\n)*$/))){t+='\n'}}if(a.nodeType!==8){t+=p(a.childNodes)}}return t}return p(I.get(0).childNodes)};
sap.ui.ux3.Feeder.prototype.getThumbnailSrc=function(){var t=this.getProperty("thumbnailSrc");if(!t||t==""){var p=this.getParent();if(p&&(p instanceof sap.ui.ux3.Feed||p instanceof sap.ui.ux3.FeedChunk)){t=p.getFeederThumbnailSrc()}}return t};
sap.ui.ux3.Feeder.prototype.onpaste=function(e){if(!!sap.ui.Device.browser.firefox){jQuery.sap.delayedCall(10,this,"onAfterPaste")}};
sap.ui.ux3.Feeder.prototype.onAfterPaste=function(){var c=this.oInput.get(0).childNodes;for(var i=0;i<c.length;i++){var C=c[i];if(C.nodeName=="PRE"){jQuery(C).css("overflow","hidden")}}};
