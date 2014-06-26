/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.ObjectAttribute");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.ObjectAttribute",{metadata:{library:"sap.m",properties:{"visible":{type:"boolean",group:"Appearance",defaultValue:true},"text":{type:"string",group:"Misc",defaultValue:null},"active":{type:"boolean",group:"Misc",defaultValue:null}},events:{"press":{}}}});sap.m.ObjectAttribute.M_EVENTS={'press':'press'};
sap.m.ObjectAttribute.prototype.ontap=function(e){if(!!this.getActive()){this.firePress({domRef:this.getDomRef()})}};
sap.m.ObjectAttribute.prototype._isEmpty=function(){return!this.getText().trim()};
sap.m.ObjectAttribute.prototype.ontouchstart=function(e){if(!!this.getActive()){e.originalEvent._sapui_handledByControl=true}};
