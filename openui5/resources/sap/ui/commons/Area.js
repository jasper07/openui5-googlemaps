/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.Area");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.commons.Area",{metadata:{library:"sap.ui.commons",properties:{"shape":{type:"string",group:"Misc",defaultValue:null},"coords":{type:"string",group:"Misc",defaultValue:null},"href":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"alt":{type:"string",group:"Misc",defaultValue:null}}}});
sap.ui.commons.Area.prototype.onclick=function(e){var E=jQuery(e.target).control(0);this.getParent().firePress({areaId:E.getId()})};
