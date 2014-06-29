/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.ApplicationHeader");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.commons.ApplicationHeader",{metadata:{library:"sap.ui.commons",properties:{"logoSrc":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"logoText":{type:"string",group:"Misc",defaultValue:null},"displayLogoff":{type:"boolean",group:"Misc",defaultValue:true},"userName":{type:"string",group:"Misc",defaultValue:null},"displayWelcome":{type:"boolean",group:"Misc",defaultValue:true}},events:{"logoff":{}}}});sap.ui.commons.ApplicationHeader.M_EVENTS={'logoff':'logoff'};
sap.ui.commons.ApplicationHeader.prototype.init=function(){this.initializationDone=false};
sap.ui.commons.ApplicationHeader.prototype.exit=function(){this.oLogo&&this.oLogo.destroy();this.oLogoText&&this.oLogoText.destroy();this.oLogoffBtn&&this.oLogoffBtn.destroy()};
sap.ui.commons.ApplicationHeader.prototype.initControls=function(){var a=this.getId();var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");this.oLogo&&this.oLogo.destroy();this.oLogo=new sap.ui.commons.Image(a+"-logoImg");this.oLogo.setTooltip(r.getText("APPHDR_LOGO_TOOLTIP"));this.oLogo.setParent(this);this.oLogoText&&this.oLogoText.destroy();this.oLogoText=new sap.ui.commons.TextView(a+"-logoText");this.oLogoText.setAccessibleRole(sap.ui.core.AccessibleRole.Heading);this.oLogoText.setParent(this);this.oLogoffBtn&&this.oLogoffBtn.destroy();this.oLogoffBtn=new sap.ui.commons.Button(a+"-logoffBtn");var l=r.getText("APPHDR_LOGOFF");this.oLogoffBtn.setText(l);this.oLogoffBtn.setTooltip(l);this.oLogoffBtn.attachPress(this.logoff,this);this.oLogoffBtn.setParent(this);this.oLogoffBtn.setLite(true)};
sap.ui.commons.ApplicationHeader.prototype.logoff=function(e){this.fireLogoff()};
sap.ui.commons.ApplicationHeader.prototype.setLogoSrc=function(l){this.initializationDone=false;this.setProperty("logoSrc",l);return this};
sap.ui.commons.ApplicationHeader.prototype.setLogoText=function(l){this.initializationDone=false;this.setProperty("logoText",l);return this};
sap.ui.commons.ApplicationHeader.prototype.setUserName=function(u){this.initializationDone=false;this.setProperty("userName",u);return this};
sap.ui.commons.ApplicationHeader.prototype.setDisplayWelcome=function(d){this.initializationDone=false;this.setProperty("displayWelcome",d);return this};
sap.ui.commons.ApplicationHeader.prototype.setDisplayLogoff=function(d){this.initializationDone=false;this.setProperty("displayLogoff",d);return this};
