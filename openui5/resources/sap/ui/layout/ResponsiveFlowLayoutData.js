/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.layout.ResponsiveFlowLayoutData");jQuery.sap.require("sap.ui.layout.library");jQuery.sap.require("sap.ui.core.LayoutData");sap.ui.core.LayoutData.extend("sap.ui.layout.ResponsiveFlowLayoutData",{metadata:{library:"sap.ui.layout",properties:{"minWidth":{type:"int",group:"Misc",defaultValue:100},"weight":{type:"int",group:"Misc",defaultValue:1},"linebreak":{type:"boolean",group:"Misc",defaultValue:false},"margin":{type:"boolean",group:"Misc",defaultValue:true},"linebreakable":{type:"boolean",group:"Misc",defaultValue:true}}}});
/*!
 * @copyright@
 */
sap.ui.layout.ResponsiveFlowLayoutData.MIN_WIDTH=100;sap.ui.layout.ResponsiveFlowLayoutData.WEIGHT=1;sap.ui.layout.ResponsiveFlowLayoutData.LINEBREAK=false;sap.ui.layout.ResponsiveFlowLayoutData.MARGIN=true;sap.ui.layout.ResponsiveFlowLayoutData.LINEBREAKABLE=true;
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setWeight=function(w){if(w>=1){this.setProperty("weight",w)}else{jQuery.sap.log.warning("Values smaller than 1 are not valid. Default value '1' is used instead",this);this.setProperty("weight",sap.ui.layout.ResponsiveFlowLayoutData.WEIGHT)}return this};
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setLinebreak=function(l){if(this.getLinebreakable()==false&&l){jQuery.sap.log.warning("Setting 'linebreak' AND 'linebreakable' doesn't make any sense! Please set either 'linebreak' or 'linebreakable'",this)}else{this.setProperty("linebreak",l)}};
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setLinebreakable=function(l){if(this.getLinebreak()===true&&l===false){jQuery.sap.log.warning("Setting 'linebreak' AND 'linebreakable' doesn't make any sense! Please set either 'linebreak' or 'linebreakable'",this)}else{this.setProperty("linebreakable",l)}};
