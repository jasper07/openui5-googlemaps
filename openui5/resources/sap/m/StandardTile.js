/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.StandardTile");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.Tile");sap.m.Tile.extend("sap.m.StandardTile",{metadata:{library:"sap.m",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"info":{type:"string",group:"Misc",defaultValue:null},"icon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"activeIcon":{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},"number":{type:"string",group:"Misc",defaultValue:null},"numberUnit":{type:"string",group:"Misc",defaultValue:null},"infoState":{type:"sap.ui.core.ValueState",group:"Misc",defaultValue:sap.ui.core.ValueState.None},"type":{type:"sap.m.StandardTileType",group:"Misc",defaultValue:sap.m.StandardTileType.None},"iconDensityAware":{type:"boolean",group:"Appearance",defaultValue:true}}}});jQuery.sap.require("sap.ui.core.IconPool");
sap.m.StandardTile.prototype.exit=function(){if(this._oImageControl){this._oImageControl.destroy();this._oImageControl=null}};
sap.m.StandardTile.prototype.getIcon=function(){if(!this.getProperty("icon")&&this.getType()==="Create"){return sap.ui.core.IconPool.getIconURI("add")}else{return this.getProperty("icon")}};
sap.m.StandardTile.prototype._getImage=function(){var i=this.getId()+"-img";var s=sap.ui.Device.system.phone?"1.3rem":"2rem";var p={src:this.getIcon(),height:s,width:s,size:s,densityAware:this.getIconDensityAware()};this._oImageControl=sap.m.ImageHelper.getImageControl(i,this._oImageControl,this,p);return this._oImageControl};
