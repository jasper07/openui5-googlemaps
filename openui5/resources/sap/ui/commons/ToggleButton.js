/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.ToggleButton");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.commons.Button");sap.ui.commons.Button.extend("sap.ui.commons.ToggleButton",{metadata:{library:"sap.ui.commons",properties:{"pressed":{type:"boolean",group:"Data",defaultValue:false}}}});
sap.ui.commons.ToggleButton.prototype.onclick=function(e){if(this.getEnabled()){this.setPressed(!this.getPressed());if(this.$().is(":visible")){this.firePress({pressed:this.getPressed()})}}e.preventDefault();e.stopPropagation()};
sap.ui.commons.ToggleButton.prototype.setPressed=function(p){if(p!=this.getProperty("pressed")){this.setProperty("pressed",p,true);if(!this.getPressed()){this.getRenderer().ondeactivePressed(this)}else{this.getRenderer().onactivePressed(this)}this.getRenderer().updateImage(this)}return this};
sap.ui.commons.ToggleButton.prototype.onAfterRendering=function(){if(!this.getPressed()){this.getRenderer().ondeactivePressed(this)}else{this.getRenderer().onactivePressed(this)}};
