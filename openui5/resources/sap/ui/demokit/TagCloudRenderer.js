/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.demokit.TagCloudRenderer");
sap.ui.demokit.TagCloudRenderer=function(){};
sap.ui.demokit.TagCloudRenderer.render=function(r,c){var a=r;a.write("<div");a.writeControlData(c);a.addClass("sapUiTagCloud");a.writeClasses();a.write(">");var t=c.getTags();if(!t||!t.length){return}var f=c.getMinFontSize(),b=c.getMaxFontSize()-f,d=this.computeWeightRange(t),e=d.min,g=d.max-e;var h=g===0?function(w){return f}:function(w){return f+(w-e)/g*b};for(var i=0;i<t.length;i++){var j=t[i];a.write("<span");a.writeElementData(j);a.writeAttribute("class","sapUiTagCloudTextNormal");if(j.getTooltip_AsString()){a.writeAttributeEscaped("title",j.getTooltip_AsString())}a.writeAttribute("style","font-size:"+h(j.getWeight())+"px;");a.write(">");a.writeEscaped(j.getText());a.write("</span>")}a.write("</div>")};
sap.ui.demokit.TagCloudRenderer.computeWeightRange=function(t){var m=t[0].getWeight(),a=m;for(var i=1;i<t.length;i++){var w=t[i].getWeight();if(w>a){a=w}if(w<m){m=w}}return{min:m,max:a}};
