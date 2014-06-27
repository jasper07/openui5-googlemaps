/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.demokit.HexagonButtonGroupRenderer");
sap.ui.demokit.HexagonButtonGroupRenderer=function(){};
sap.ui.demokit.HexagonButtonGroupRenderer.render=function(r,c){var a=r;a.write("<div");a.writeControlData(c);a.writeAttribute("class","sapUiHexGroup");a.write(">");var C=c.getColspan();var b=c.getButtons();for(var i=0;i<b.length;i++){var d=i%C;var e=Math.floor(i/C);if(d<Math.floor(C/2)){d=1+2*d}else{d=2*(d-Math.floor(C/2))}var x=100+90*d;var y=100+100*e+100-50*(d%2);var B=b[i];B.setPosition("position:absolute;left:"+x+"px;top:"+y+"px;");r.renderControl(B)}a.write("</div>")};
