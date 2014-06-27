/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.demokit.HexagonButton");jQuery.sap.require("sap.ui.demokit.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.demokit.HexagonButton",{metadata:{library:"sap.ui.demokit",properties:{"icon":{type:"string",group:"Misc",defaultValue:null},"color":{type:"string",group:"Misc",defaultValue:'blue'},"position":{type:"string",group:"Misc",defaultValue:null},"enabled":{type:"boolean",group:"Misc",defaultValue:true},"imagePosition":{type:"string",group:"Misc",defaultValue:null}},events:{"press":{}}}});sap.ui.demokit.HexagonButton.M_EVENTS={'press':'press'};
sap.ui.demokit.HexagonButton.prototype.onclick=function(b){if(this.getEnabled()){this.firePress({id:this.getId()})}b.preventDefault();b.stopPropagation()};
sap.ui.demokit.HexagonButton.prototype._attachPress=sap.ui.demokit.HexagonButton.prototype.attachPress;
sap.ui.demokit.HexagonButton.prototype.attachPress=function(){this._attachPress.apply(this,arguments);this.invalidate()};
sap.ui.demokit.HexagonButton.prototype._detachPress=sap.ui.demokit.HexagonButton.prototype.detachPress;
sap.ui.demokit.HexagonButton.prototype.detachPress=function(){this._detachPress.apply(this,arguments);this.invalidate()};
