/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.demokit.CodeViewer");jQuery.sap.require("sap.ui.demokit.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.demokit.CodeViewer",{metadata:{library:"sap.ui.demokit",properties:{"source":{type:"string",group:"Misc",defaultValue:null},"width":{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:null},"height":{type:"sap.ui.core.CSSSize",group:"Misc",defaultValue:null},"editable":{type:"boolean",group:"Misc",defaultValue:false},"visible":{type:"boolean",group:"Misc",defaultValue:true}},events:{"press":{},"save":{}}}});sap.ui.demokit.CodeViewer.M_EVENTS={'press':'press','save':'save'};
sap.ui.demokit.CodeViewer.load=function(){if(!window.prettyPrint){jQuery.sap.require("sap.ui.demokit.js.prettify")}};
sap.ui.demokit.CodeViewer.load();
sap.ui.demokit.CodeViewer.prototype.onAfterRendering=function(){var d=this.getDomRef();if(!this.getEditable()&&d&&d.className.indexOf("prettyprint")===0&&window.prettyPrint){prettyPrint();d.className="sapUiCodeViewer"}};
sap.ui.demokit.CodeViewer.prototype.onclick=function(e){if(!this.getEditable()){this.firePress({id:this.getId()});e.preventDefault();e.stopPropagation()}};
sap.ui.demokit.CodeViewer.prototype.onsapescape=function(b){if(this.getEditable()){this.setEditable(false)}};
sap.ui.demokit.CodeViewer.prototype.onkeydown=function(e){if(this.getEditable()&&((e.keyCode==jQuery.sap.KeyCodes.S&&e.ctrlKey&&!e.shiftKey&&!e.altKey)||(e.keyCode==jQuery.sap.KeyCodes.F2))){e.preventDefault();e.stopPropagation();this.fireSave()}};
sap.ui.demokit.CodeViewer.prototype.getCurrentSource=(function(){var S=/<(\/?[^ >]+)[^>]*>|(&[^;]+;)/g,T={"/p":"\n","br":"\n","div":"\n"},E={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&"};return function(){var c='',d=this.getDomRef();if(d){c=d.innerHTML;c=c.replace(S,function(m,a,b){if(a){a=a.toLowerCase();if(T[a])return T[a]}else if(b){b=b.toLowerCase();if(E[b])return E[b]}return""})}return c}})();jQuery.sap.require("sap.ui.commons.Button");jQuery.sap.require("sap.ui.commons.Dialog");
sap.ui.demokit.CodeViewer.showScript=function(i){var d=document.getElementById(i);var s=d.innerHTML;if(!d||!s)return;var c=new sap.ui.commons.Button({text:"Close",press:function(){D.close()}});var D=new sap.ui.commons.Dialog({applyContentPadding:false,title:"Source Code for '"+i+"'",resizable:true,minWidth:"400px",minHeight:"200px",buttons:[c],content:new sap.ui.demokit.CodeViewer({source:s,press:function(){alert('clicked into code viewer')}}),defaultButton:c});D.center();D.open()};
