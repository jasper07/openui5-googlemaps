/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.suite.TaskCircle");jQuery.sap.require("sap.ui.suite.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.suite.TaskCircle",{metadata:{publicMethods:["focus"],library:"sap.ui.suite",properties:{"value":{type:"int",group:"Misc",defaultValue:0},"maxValue":{type:"int",group:"Misc",defaultValue:100},"minValue":{type:"int",group:"Misc",defaultValue:0},"color":{type:"sap.ui.suite.TaskCircleColor",group:"Misc",defaultValue:sap.ui.suite.TaskCircleColor.Gray}},associations:{"ariaLabelledBy":{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"},"ariaDescribedBy":{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"}},events:{"press":{}}}});sap.ui.suite.TaskCircle.M_EVENTS={'press':'press'};jQuery.sap.require("sap.ui.core.EnabledPropagator");sap.ui.core.EnabledPropagator.call(sap.ui.suite.TaskCircle.prototype);
sap.ui.suite.TaskCircle.prototype.init=function(){};
sap.ui.suite.TaskCircle.prototype.onclick=function(e){this.firePress({});e.preventDefault();e.stopPropagation()};
sap.ui.suite.TaskCircle.prototype.focus=function(){var d=this.getDomRef();if(d){d.focus()}};
