/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.suite.VerticalProgressIndicator");jQuery.sap.require("sap.ui.suite.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.suite.VerticalProgressIndicator",{metadata:{publicMethods:["focus"],library:"sap.ui.suite",properties:{"percentage":{type:"int",group:"Misc",defaultValue:null}},associations:{"ariaLabelledBy":{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"},"ariaDescribedBy":{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"}},events:{"press":{}}}});sap.ui.suite.VerticalProgressIndicator.M_EVENTS={'press':'press'};jQuery.sap.require("sap.ui.core.EnabledPropagator");sap.ui.core.EnabledPropagator.call(sap.ui.suite.VerticalProgressIndicator.prototype);
sap.ui.suite.VerticalProgressIndicator.prototype.setPercentage=function(p){var V=this.getPercentage();if(V==p)return this;this.oBar=jQuery.sap.domById(this.getId()+'-bar');V=p;if(V<0||V==Number.NaN)V=0;if(V>100)V=100;var P=Math.round(V*58/100);var a=58-P;this.setProperty('percentage',p,true);jQuery(this.oBar).css("top",a);jQuery(this.oBar).css("height",P);if(!this.oThis){this.oThis=jQuery.sap.byId(this.getId())}this.oThis.attr('aria-valuenow',p+'%');return this};
sap.ui.suite.VerticalProgressIndicator.prototype.onclick=function(e){this.firePress({});e.preventDefault();e.stopPropagation()};
sap.ui.suite.VerticalProgressIndicator.prototype.focus=function(){var d=this.getDomRef();if(d){d.focus()}};
