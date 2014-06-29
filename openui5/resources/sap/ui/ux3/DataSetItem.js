/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.ux3.DataSetItem");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.ux3.DataSetItem",{metadata:{library:"sap.ui.ux3",properties:{"iconSrc":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"title":{type:"string",group:"Misc",defaultValue:'Title'},"checkable":{type:"boolean",group:"Misc",defaultValue:true},"subtitle":{type:"string",group:"Misc",defaultValue:'Subtitle'}},aggregations:{"_template":{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}},events:{"selected":{}}}});sap.ui.ux3.DataSetItem.M_EVENTS={'selected':'selected'};
sap.ui.ux3.DataSetItem.prototype.onclick=function(e){e.stopPropagation();var s=e.shiftKey;var c=!!(e.metaKey||e.ctrlKey);this.fireSelected({itemId:this.getId(),shift:s,ctrl:c})};
sap.ui.ux3.DataSetItem.prototype.ondblclick=function(e){this.onclick(e)};
