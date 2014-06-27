/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Tile.
jQuery.sap.declare("sap.m.Tile");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Tile.
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
 * <li>{@link #getRemovable removable} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Tile#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A tile to be displayed in the tile container. Use this
 * tile as the base class for
 * specialized tile implementations.
 * Use the renderers _addOuterClass methods to add a style class to the main
 * surface of the Tile. In this class set the background color, gradients
 * or background images.
 * Instead of implementing the default render method in the renderer implement
 * your content HTML in the _renderContent method of the specialized
 * tile.
 * 
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.m.Tile
 */
sap.ui.core.Control.extend("sap.m.Tile", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"removable" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Tile with name <code>sClassName</code> 
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
 * @name sap.m.Tile.extend
 * @function
 */

sap.m.Tile.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>removable</code>.
 * Determines whether the tile is movable within the surrounding tile container. The remove event is fired by the tile contianer.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>removable</code>
 * @public
 * @name sap.m.Tile#getRemovable
 * @function
 */

/**
 * Setter for property <code>removable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bRemovable  new value for property <code>removable</code>
 * @return {sap.m.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Tile#setRemovable
 * @function
 */


/**
 * Tap event is raised if the user tap or click to the
 * control. 
 *
 * @name sap.m.Tile#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.m.Tile</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Tile</code>.<br/> itself. 
 *  
 * Tap event is raised if the user tap or click to the
 * control. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.Tile</code>.<br/> itself.
 *
 * @return {sap.m.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Tile#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.m.Tile</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Tile} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Tile#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Tile} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Tile#firePress
 * @function
 */


// Start of sap\m\Tile.js
/*
 * @see JSDoc generated by SAPUI5 Control API generator
 */


/**
 * Initializes the control
 * @private
 */
sap.m.Tile.prototype.init = function() {
	//keyboard support for desktop environments
	if(sap.ui.Device.system.desktop) {
		var fnOnSpace = jQuery.proxy(function(oEvent) {
			this.ontap();
			//event should not trigger any further actions
			oEvent.stopPropagation();
		}, this);
		this.onsapspace = fnOnSpace;
	}
};

/**
 * Handles the internal event onAfterRendering
 * @private
 */
sap.m.Tile.prototype.onAfterRendering = function(){
	if (this._rendered && !this._bIsDragged && this.getParent() instanceof sap.m.TileContainer) {
		this.setPos(this._posX,this._posY);
	}
	this._rendered = true;
};


/**
 * Sets the position of the tile to the given coordinates.
 * @param {int} iX left position
 * @param {int} iY top position
 * @private
 */ 
sap.m.Tile.prototype.setPos = function(iX,iY){
	// store in member
	this._posX = iX = Math.floor(iX);
	this._posY = iY = Math.floor(iY);
	if (!this._rendered) return;
	var o = this.getDomRef();
	if ("webkitTransform" in o.style) {
		this.$().css('-webkit-transform','translate3d('+iX+'px,'+iY+'px,0)');
	} else if ("transform" in o.style) {
		this.$().css('transform','translate3d('+iX+'px,'+iY+'px,0)');
	} else if ("msTransform" in o.style) {
		this.$().css('msTransform','translate('+iX+'px,'+iY+'px)');
	} else if ("MozTransform" in o.style) {
		this.$().css('-moz-transform','translate3d('+iX+'px,'+iY+'px,0)');
	}
	if(this._invisible){
		this.$().css("visibility","");
		delete this._invisible;
	}
	//jQuery.sap.log.info("Set tile pos, id:" + this.getId() + ", x:" + iX + ", y:" + iY);
	
};

/**
 * Sets the pixel size of the tile 
 * @param {int} iX left position
 * @param {int} iY top position
 * @private
 */ 
sap.m.Tile.prototype.setSize = function(iWidth,iHeight){
	//jQuery.sap.log.debug("Set tile size, id:" + this.getId() + ", x:" + iWidth + ", y:" + iHeight);
	this._width = iWidth;
	this._height = iHeight;
};


/**
 * Returns and optionally sets whether the tile is editable.
 * @param {boolean} optional The editable state of the tile.
 * @returns {boolean} whether the tile is editable
 * @see {sap.m.TileContainer}
 * @private
 */
sap.m.Tile.prototype.isEditable = function(bIsEditable) {
	if (bIsEditable === true || bIsEditable === false) {
		this._bIsEditable = bIsEditable;
	}
	
	return this._bIsEditable;
};

/**
 * Returns and optionally sets whether the tile is dragged and applies or removes the drag styles.
 * @param {boolean} optional The editable state of the tile.
 * @returns {boolean} whether the tile is dragged
 * @see {sap.m.TileContainer}
 * @private
 */
sap.m.Tile.prototype.isDragged = function(bIsDragged) {
	if (!this._bIsEditable) return;
	if (bIsDragged === true || bIsDragged === false) {
		var o = this.$();
		 o.toggleClass("sapMTileDrag",bIsDragged);
		this._bIsDragged = bIsDragged;
	}
	return this._bIsDragged;
};

/**
 * Set active state.
 * @private
 */
sap.m.Tile.prototype.ontouchstart = function(oEvent) {
	if (!this.isEditable()&& !this._parentPreventsTapEvent) {
		this.$().toggleClass("sapMTileActive sapMTileActive-CTX",true);
		this._clientX = oEvent.clientX;
		this._clientY = oEvent.clientY;
	}
};

/**
 * Unset active state.
 * @private
 */
sap.m.Tile.prototype.ontouchend = function() {
	if (!this.isEditable()) {
		this.$().toggleClass("sapMTileActive sapMTileActive-CTX",false);
	}	
};

/**
 * Check if a parent Tile wants to prevent the Tap events for its children - readonly
 * @private
 */
Object.defineProperty(sap.m.Tile.prototype,"_parentPreventsTapEvent",{ 
	get : function (){
		var oParent = this.getParent();
		while (oParent) {
			if (oParent._bAvoidChildTapEvent || (oParent instanceof sap.m.Tile && oParent.isEditable())) {
				return true;
			}
			oParent = oParent.getParent();
		}
		
		return false;
	}
});

/**
 * Unset active state on touch move
 * @private
 */
sap.m.Tile.prototype.ontouchmove = function(oEvent) {
	if (!this.isEditable() && !this._parentPreventsTapEvent) {
		if (Math.abs(oEvent.clientX-this._clientX) > 30 || Math.abs(oEvent.clientY-this._clientY) > 10) {
			this.$().toggleClass("sapMTileActive sapMTileActive-CTX",false);
		}
	}
};

sap.m.Tile.prototype.ontap = function() {
	if (!this.isEditable()&& !this._parentPreventsTapEvent) {
		this.firePress({});
	}
};

/**
 * Set initial visibility of the tile
 * @param {boolean} bVisible visibility
 * @private
 */ 
sap.m.Tile.prototype._setVisible = function(bVisible){
	this._invisible = !bVisible;
	return this;
}
