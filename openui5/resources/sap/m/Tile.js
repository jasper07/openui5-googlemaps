/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.Tile");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.Tile",{metadata:{library:"sap.m",properties:{"removable":{type:"boolean",group:"Misc",defaultValue:true}},events:{"press":{}}}});sap.m.Tile.M_EVENTS={'press':'press'};
sap.m.Tile.prototype.init=function(){if(sap.ui.Device.system.desktop){var o=jQuery.proxy(function(e){this.ontap();e.stopPropagation()},this);this.onsapspace=o}};
sap.m.Tile.prototype.onAfterRendering=function(){if(this._rendered&&!this._bIsDragged&&this.getParent()instanceof sap.m.TileContainer){this.setPos(this._posX,this._posY)}this._rendered=true};
sap.m.Tile.prototype.setPos=function(x,y){this._posX=x=Math.floor(x);this._posY=y=Math.floor(y);if(!this._rendered)return;var o=this.getDomRef();if("webkitTransform"in o.style){this.$().css('-webkit-transform','translate3d('+x+'px,'+y+'px,0)')}else if("transform"in o.style){this.$().css('transform','translate3d('+x+'px,'+y+'px,0)')}else if("msTransform"in o.style){this.$().css('msTransform','translate('+x+'px,'+y+'px)')}else if("MozTransform"in o.style){this.$().css('-moz-transform','translate3d('+x+'px,'+y+'px,0)')}if(this._invisible){this.$().css("visibility","");delete this._invisible}};
sap.m.Tile.prototype.setSize=function(w,h){this._width=w;this._height=h};
sap.m.Tile.prototype.isEditable=function(i){if(i===true||i===false){this._bIsEditable=i}return this._bIsEditable};
sap.m.Tile.prototype.isDragged=function(i){if(!this._bIsEditable)return;if(i===true||i===false){var o=this.$();o.toggleClass("sapMTileDrag",i);this._bIsDragged=i}return this._bIsDragged};
sap.m.Tile.prototype.ontouchstart=function(e){if(!this.isEditable()&&!this._parentPreventsTapEvent){this.$().toggleClass("sapMTileActive sapMTileActive-CTX",true);this._clientX=e.clientX;this._clientY=e.clientY}};
sap.m.Tile.prototype.ontouchend=function(){if(!this.isEditable()){this.$().toggleClass("sapMTileActive sapMTileActive-CTX",false)}};
Object.defineProperty(sap.m.Tile.prototype,"_parentPreventsTapEvent",{get:function(){var p=this.getParent();while(p){if(p._bAvoidChildTapEvent||(p instanceof sap.m.Tile&&p.isEditable())){return true}p=p.getParent()}return false}});
sap.m.Tile.prototype.ontouchmove=function(e){if(!this.isEditable()&&!this._parentPreventsTapEvent){if(Math.abs(e.clientX-this._clientX)>30||Math.abs(e.clientY-this._clientY)>10){this.$().toggleClass("sapMTileActive sapMTileActive-CTX",false)}}};
sap.m.Tile.prototype.ontap=function(){if(!this.isEditable()&&!this._parentPreventsTapEvent){this.firePress({})}};
sap.m.Tile.prototype._setVisible=function(v){this._invisible=!v;return this}
