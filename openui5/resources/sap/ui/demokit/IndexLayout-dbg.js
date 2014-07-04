/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.demokit.IndexLayout.
jQuery.sap.declare("sap.ui.demokit.IndexLayout");
jQuery.sap.require("sap.ui.demokit.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new IndexLayout.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getItemWidth itemWidth} : sap.ui.core.CSSSize (default: '200px')</li>
 * <li>{@link #getItemHeight itemHeight} : sap.ui.core.CSSSize (default: '200px')</li>
 * <li>{@link #getEnableScaling enableScaling} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Layout which renders content items with equal width and height. The items are arranged in rows.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.17.0
 * @experimental Since version 1.17.0. 
 * API is not yet finished and might change completely
 * @name sap.ui.demokit.IndexLayout
 */
sap.ui.core.Control.extend("sap.ui.demokit.IndexLayout", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.demokit",
	properties : {
		"itemWidth" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : '200px'},
		"itemHeight" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : '200px'},
		"enableScaling" : {type : "boolean", group : "Appearance", defaultValue : true}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.demokit.IndexLayout with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.demokit.IndexLayout.extend
 * @function
 */


/**
 * Getter for property <code>itemWidth</code>.
 * The width of a content item. Only px values are allowed.
 *
 * Default value is <code>200px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>itemWidth</code>
 * @public
 * @name sap.ui.demokit.IndexLayout#getItemWidth
 * @function
 */

/**
 * Setter for property <code>itemWidth</code>.
 *
 * Default value is <code>200px</code> 
 *
 * @param {sap.ui.core.CSSSize} sItemWidth  new value for property <code>itemWidth</code>
 * @return {sap.ui.demokit.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.IndexLayout#setItemWidth
 * @function
 */


/**
 * Getter for property <code>itemHeight</code>.
 * The height of a content item. Only px values are allowed.
 *
 * Default value is <code>200px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>itemHeight</code>
 * @public
 * @name sap.ui.demokit.IndexLayout#getItemHeight
 * @function
 */

/**
 * Setter for property <code>itemHeight</code>.
 *
 * Default value is <code>200px</code> 
 *
 * @param {sap.ui.core.CSSSize} sItemHeight  new value for property <code>itemHeight</code>
 * @return {sap.ui.demokit.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.IndexLayout#setItemHeight
 * @function
 */


/**
 * Getter for property <code>enableScaling</code>.
 * Whether the given item width/height should be scaled according to the screen size.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableScaling</code>
 * @public
 * @name sap.ui.demokit.IndexLayout#getEnableScaling
 * @function
 */

/**
 * Setter for property <code>enableScaling</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableScaling  new value for property <code>enableScaling</code>
 * @return {sap.ui.demokit.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.IndexLayout#setEnableScaling
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content items
 * 
 * <strong>Note</strong>: this is the default aggregation for IndexLayout.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.demokit.IndexLayout#getContent
 * @function
 */


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.demokit.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.IndexLayout#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.demokit.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.IndexLayout#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.demokit.IndexLayout#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.demokit.IndexLayout#removeAllContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.demokit.IndexLayout#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.demokit.IndexLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.IndexLayout#destroyContent
 * @function
 */


// Start of sap\ui\demokit\IndexLayout.js
jQuery.sap.require("sap.ui.Device");
jQuery.sap.require("sap.ui.core.IntervalTrigger");

sap.ui.demokit.IndexLayout._MINMARGIN = 18;
sap.ui.demokit.IndexLayout._DEFAULT_ITEM_HEIGHT = 200;
sap.ui.demokit.IndexLayout._DEFAULT_ITEM_WIDTH = 200;
sap.ui.demokit.IndexLayout._pos = null;

(function(){
	
sap.ui.demokit.IndexLayout._IntervalTrigger = new sap.ui.core.IntervalTrigger(300);

sap.ui.demokit.IndexLayout.prototype.init = function(){
	this._itemWidth = sap.ui.demokit.IndexLayout._DEFAULT_ITEM_WIDTH;
	this._itemHeight = sap.ui.demokit.IndexLayout._DEFAULT_ITEM_HEIGHT;
	this._tilesPerRow;
	this._width;
	this._registered = false;
	this._itemScaleFactor = 1;
	sap.ui.Device.media.attachHandler(setScaleFactor, this, sap.ui.Device.media.RANGESETS.SAP_STANDARD);
};


sap.ui.demokit.IndexLayout.prototype.exit = function(){
	this.onBeforeRendering();
	sap.ui.Device.media.detachHandler(setScaleFactor, this, sap.ui.Device.media.RANGESETS.SAP_STANDARD);
};


sap.ui.demokit.IndexLayout.prototype.setItemWidth = function(sItemWidth){
	this.setProperty("itemWidth", sItemWidth, true);
	if(!sItemWidth || sItemWidth.indexOf("px") < 0){
		this._itemWidth = sap.ui.demokit.IndexLayout._DEFAULT_ITEM_WIDTH;
		this.setProperty("itemWidth", this._itemWidth, true);
	}else{
		this._itemWidth = parseInt(sItemWidth, 10);
	}
	_refresh(this);
	return this;
};


sap.ui.demokit.IndexLayout.prototype.setItemHeight = function(sItemHeight){
	this.setProperty("itemHeight", sItemHeight, true);
	if(!sItemHeight || sItemHeight.indexOf("px") < 0){
		this._itemHeight = sap.ui.demokit.IndexLayout._DEFAULT_ITEM_HEIGHT;
		this.setProperty("itemHeight", this._itemHeight, true);
	}else{
		this._itemHeight = parseInt(sItemHeight, 10);
	}
	_refresh(this);
	return this;
};


sap.ui.demokit.IndexLayout.prototype.setEnableScaling = function(bEnableScaling){
	this.setProperty("enableScaling", bEnableScaling, true);
	_refresh(this);
	return this;
};


sap.ui.demokit.IndexLayout.prototype.onBeforeRendering = function(){
	if(this._registered){
		sap.ui.demokit.IndexLayout._IntervalTrigger.removeListener(refresh, this);
		this._registered = false;
	}
	
	var mMediaParams = sap.ui.Device.media.getCurrentRange(sap.ui.Device.media.RANGESETS.SAP_STANDARD);
	setScaleFactor.apply(this, [mMediaParams, true]);
};

sap.ui.demokit.IndexLayout.prototype.onThemeChanged = function(){
	if(this.getDomRef()){
		this.invalidate();
	}
};

sap.ui.demokit.IndexLayout.prototype.onAfterRendering = function(){
	if(!sap.ui.demokit.IndexLayout._pos){
		var transform = null;
		var oStyle = this.getDomRef().style;
		if("webkitTransform" in oStyle){
			  transform = "-webkit-transform";
		}else if ("transform" in oStyle){
			  transform = "transform";
		}else if ("msTransform" in oStyle){
			  transform = "-ms-transform";
		}else if ("MozTransform" in oStyle){
			  transform = "-moz-transform";
		}
		if(transform){
			sap.ui.demokit.IndexLayout._pos = function($ref, x, y){
				$ref.css(transform, "translate("+x+"px,"+y+"px)");
			};
		}else{
			sap.ui.demokit.IndexLayout._pos = function($ref, x, y){
				$ref.css({top: y+"px", left: x+"px"});
			};
		}
	}
	
	if(!this._registered){
		sap.ui.demokit.IndexLayout._IntervalTrigger.addListener(refresh, this);
		this._registered = true;
	}
	this.$().toggleClass("sapDkIdxLayoutHidden", false);
};


sap.ui.demokit.IndexLayout.prototype._scale = function(iVal){
	if(!this.getEnableScaling()){
		return iVal;
	}
	return Math.floor(iVal*this._itemScaleFactor);
};


function _refresh(oLyt, bNoForce){
	refresh.apply(oLyt, [!bNoForce]);
}


function refresh(bInitial){
	if(!this.getDomRef()){
		this.onBeforeRendering();
		return;
	}
	
	bInitial = bInitial || !this._registered;
	
	var $Layout = this.$(),
		w = $Layout.outerWidth(),
		h = $Layout.outerHeight(),
		heightChanged = this._height != h;
	
	if(this._width === w && !heightChanged && !bInitial){
		return;
	}
	
	this._width = w;
	this._height = h;

	var itemCount = this.getContent().length,
		itemWidth = this._scale(this._itemWidth),
		itemHeight = this._scale(this._itemHeight),
		t = getOptimalTilesPerRow(this._width, itemCount, itemWidth),
		//leftpad = Math.max(sap.ui.demokit.IndexLayout._MINMARGIN, Math.floor((this._width - t*itemWidth)/2)),
		tilesPerRowChanged = this._tilesPerRow != t;
	
	this._tilesPerRow = t;
	
	if(!bInitial){
		$Layout.toggleClass("sapDkIdxLayoutAnim", true);
	}
	
	//$Layout.css("padding-left", leftpad+"px");
	
	if(!tilesPerRowChanged && !bInitial && !heightChanged){
		return;
	}
	
	var top = 0,
		left = 0;
		  
	jQuery.sap.byId(this.getId()+"-cntnt").css({
		"padding-left": sap.ui.demokit.IndexLayout._MINMARGIN + "px",
		"width": (t*itemWidth + sap.ui.demokit.IndexLayout._MINMARGIN*2) + "px",
		"height": Math.ceil(itemCount/t)*itemHeight
	}).children().each(function(index){
		if(index > 0 && index % t === 0){
			top = top+itemHeight;
			left = 0;
		}
		sap.ui.demokit.IndexLayout._pos(jQuery(this), left, top);
		left = left+itemWidth;
	});
	
	if(bInitial){
		$Layout.css({
			"padding-top": sap.ui.demokit.IndexLayout._MINMARGIN + "px",
			"padding-bottom": sap.ui.demokit.IndexLayout._MINMARGIN + "px"
		});
	}
};


function getOptimalTilesPerRow(width, itemCount, itemWidth){
	var t = Math.min(Math.floor((width-2*sap.ui.demokit.IndexLayout._MINMARGIN)/itemWidth), itemCount);
	var mod = itemCount % t;
	if(mod == 0 || itemCount <= t){
		return t;
	}
  
	function weight(x){
		var m = itemCount%x;
		return (t-x)*Math.floor(itemCount/x) + (m != 0 ? (t - m) : 0);
	}
  
	var best = weight(t);
	var canditates = [t];
  
	for(var i=t-1; i>=1; i--){
		var w = weight(i);
		if(w < best){
			canditates = [i];
			best = w;
		}else if(w == best) {
			canditates.push(i);
		}
	}

	for(var i=0; i<canditates.length; i++){
		var m = itemCount % canditates[i];
		if(m == 0){
			return canditates[i];
		}else if(i==0 || m > best){
			best = m;
			t = canditates[i];
		}
	}
  
	return t;
};

function setScaleFactor(mMediaParams, bSkipUpdate){
	switch(mMediaParams.name){
		case "Tablet":
			this._itemScaleFactor = 0.75;
			break;
		case "Phone":
			this._itemScaleFactor = 0.5;
			break;
		default:
			this._itemScaleFactor = 1;
	}
	
	if(!this.getDomRef() || bSkipUpdate){
		return;
	}
	
	var width = this._scale(this._itemWidth);
	var height = this._scale(this._itemHeight);
	
	jQuery.sap.byId(this.getId()+"-cntnt").children().each(function(){
		jQuery(this).css({width: width, height: height});
	});
	
	_refresh(this);
};


//**********************************************

sap.ui.core.Control.extend("sap.ui.demokit.IndexLayout._Tile", {
	
	metadata : {
        properties : {
            "title" : "string",
            "description" : "string",
            "target" : "string",
            "icon": "sap.ui.core.URI",
            "href": "sap.ui.core.URI"
        },
        events : {
        	"press": {}
        }
    },
	
	onclick : function() {
		if(!this.getHref()){
			this.firePress();
		}
	},
	
	renderer: function(oRm, oControl) {
		oRm.write("<a");
		oRm.addClass("sapDkIdxLayout_Tile");
		oRm.writeClasses();
		oRm.writeControlData(oControl);
		if (oControl.getHref()) {
			oRm.writeAttributeEscaped("href", oControl.getHref());
			if (oControl.getTarget()) {
				oRm.writeAttributeEscaped("target", oControl.getTarget());
			}
		}	else {
			oRm.writeAttribute("href", "javascript:void(0);");
		}
		oRm.writeAttributeEscaped("title", oControl.getDescription());
		oRm.write(">");
		
		oRm.write("<span class='sapDkIdxLayout_TileIcon'>");
		oRm.writeIcon(oControl.getIcon());
		oRm.write("</span>");

		oRm.write("<span class='sapDkIdxLayout_TileLabel'");
		oRm.writeAttributeEscaped("title", oControl.getTitle());
		oRm.write(">");
		oRm.writeEscaped(oControl.getTitle());
		oRm.write("</span>");
		
		oRm.write("<span class='sapDkIdxLayout_TileDesc'");
		oRm.writeAttributeEscaped("title", oControl.getDescription());
		oRm.write(">");
		oRm.writeEscaped(oControl.getDescription());
		oRm.write("</span>");
		
		oRm.write("</a>");
	}
});

})();
