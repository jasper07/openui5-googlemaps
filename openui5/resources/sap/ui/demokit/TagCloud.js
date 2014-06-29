/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.demokit.TagCloud");jQuery.sap.require("sap.ui.demokit.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.demokit.TagCloud",{metadata:{library:"sap.ui.demokit",properties:{"maxFontSize":{type:"int",group:"Misc",defaultValue:30},"minFontSize":{type:"int",group:"Misc",defaultValue:10}},defaultAggregation:"tags",aggregations:{"tags":{type:"sap.ui.demokit.Tag",multiple:true,singularName:"tag"}},events:{"press":{}}}});sap.ui.demokit.TagCloud.M_EVENTS={'press':'press'};
sap.ui.demokit.TagCloud.prototype.firePressEvent=function(t){this.firePress({tagId:t.getId()})};
