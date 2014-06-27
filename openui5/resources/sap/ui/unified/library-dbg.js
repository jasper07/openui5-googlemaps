/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.ui.unified (1.20.7)
 */
jQuery.sap.declare("sap.ui.unified.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAPUI5 unified library
 *
 * @namespace
 * @name sap.ui.unified
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.ui.unified",
  dependencies : ["sap.ui.core"],
  types: [
    "sap.ui.unified.ContentSwitcherAnimation"
  ],
  interfaces: [],
  controls: [
    "sap.ui.unified.ContentSwitcher",
    "sap.ui.unified.Shell",
    "sap.ui.unified.ShellOverlay",
    "sap.ui.unified.SplitContainer"
  ],
  elements: [
    "sap.ui.unified.ShellHeadItem"
  ],
  version: "1.20.7"});

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.unified.ContentSwitcherAnimation.
jQuery.sap.declare("sap.ui.unified.ContentSwitcherAnimation");


/**
 * @class Predefined animations for the ContentSwitcher
 *
 * @version 1.20.7
 * @static
 * @public
 * @since 1.16.0
 * @experimental Since version 1.16.0. 
 * API is not yet finished and might change completely
 */
sap.ui.unified.ContentSwitcherAnimation = {
  
    /**
     * No animation. Content is switched instantly. 
     * @public
     */
    None : "None",

    /**
     * Content is faded (opacity change). 
     * @public
     */
    Fade : "Fade",

    /**
     * The new content is "zoomed in" from the center and grows to fill the full content area. 
     * @public
     */
    ZoomIn : "ZoomIn",

    /**
     * The old content is "zoomed out", i.e. shrinks to a point at the center of the content area. 
     * @public
     */
    ZoomOut : "ZoomOut",

    /**
     * The new content rotates in. (Just like one of those old newspaper-animations.) 
     * @public
     */
    Rotate : "Rotate",

    /**
     * The new slides in from the left (to the right). 
     * @public
     */
    SlideRight : "SlideRight",

    /**
     * The new content slides in from the left while the old content slides out to the left at the same time. 
     * @public
     */
    SlideOver : "SlideOver"

  };

// -----------------------------------------------------------------------------
// Begin of Library Initialization coding, copied from shared.js
// -----------------------------------------------------------------------------

sap.ui.base.Object.extend("sap.ui.unified._ContentRenderer", {
	constructor : function(oControl, sContentContainerId, oContent, fAfterRenderCallback) {
		sap.ui.base.Object.apply(this);
		this._id = sContentContainerId;
		this._cntnt = oContent;
		this._ctrl = oControl;
		this._rm = sap.ui.getCore().createRenderManager();
		this._cb = fAfterRenderCallback || function(){};
	},
	
	destroy : function() {
		this._rm.destroy();
		delete this._rm;
		delete this._id;
		delete this._cntnt;
		delete this._cb;
		delete this._ctrl;
		if(this._rerenderTimer){
			jQuery.sap.clearDelayedCall(this._rerenderTimer);
			delete this._rerenderTimer;
		}
		sap.ui.base.Object.prototype.destroy.apply(this, arguments);
	},
	
	render : function() {
		if(!this._rm){
			return;
		}
		
		if(this._rerenderTimer){
			jQuery.sap.clearDelayedCall(this._rerenderTimer);
		}
		
		this._rerenderTimer = jQuery.sap.delayedCall(0, this, function(){
			var $content = jQuery.sap.byId(this._id);
			var doRender = $content.length > 0;
			
			if(doRender){
				if(typeof(this._cntnt) === "string"){
					var aContent = this._ctrl.getAggregation(this._cntnt, []);
					for(var i=0; i < aContent.length; i++){
						this._rm.renderControl(aContent[i]);
					}
				}else{
					this._cntnt(this._rm);
				}
				this._rm.flush($content[0]);
			}

			this._cb(doRender);
		});
	}
});


sap.ui.unified._iNumberOfOpenedShellOverlays = 0;