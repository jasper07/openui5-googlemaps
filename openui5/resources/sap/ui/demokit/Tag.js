/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.demokit.Tag");jQuery.sap.require("sap.ui.demokit.library");jQuery.sap.require("sap.ui.core.Element");sap.ui.core.Element.extend("sap.ui.demokit.Tag",{metadata:{library:"sap.ui.demokit",properties:{"text":{type:"string",group:"Misc",defaultValue:null},"weight":{type:"int",group:"Misc",defaultValue:1}}}});
sap.ui.demokit.Tag.prototype.onclick=function(e){this.oParent.firePressEvent(this)};
