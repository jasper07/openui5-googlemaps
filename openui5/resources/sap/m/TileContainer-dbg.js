/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.TileContainer.
jQuery.sap.declare("sap.m.TileContainer");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new TileContainer.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getEditable editable} : boolean</li>
 * <li>{@link #getAllowAdd allowAdd} : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getTiles tiles} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.TileContainer#event:tileMove tileMove} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.TileContainer#event:tileDelete tileDelete} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.TileContainer#event:tileAdd tileAdd} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A container that arranges same-size tiles nicely on carousel pages
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.m.TileContainer
 */
sap.ui.core.Control.extend("sap.m.TileContainer", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"moveTile", "scrollIntoView", "getPageFirstTileIndex"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"height" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"editable" : {type : "boolean", group : "Misc", defaultValue : null},
		"allowAdd" : {type : "boolean", group : "Misc", defaultValue : null}
	},
	defaultAggregation : "tiles",
	aggregations : {
    	"tiles" : {type : "sap.ui.core.Control", multiple : true, singularName : "tile"}
	},
	events : {
		"tileMove" : {}, 
		"tileDelete" : {}, 
		"tileAdd" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.TileContainer with name <code>sClassName</code> 
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
 * @name sap.m.TileContainer.extend
 * @function
 */

sap.m.TileContainer.M_EVENTS = {'tileMove':'tileMove','tileDelete':'tileDelete','tileAdd':'tileAdd'};


/**
 * Getter for property <code>width</code>.
 * The width of the container in pixel
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.TileContainer#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * The height of the container in pixel
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.m.TileContainer#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#setHeight
 * @function
 */


/**
 * Getter for property <code>editable</code>.
 * Whether the tile container is editable and you can move or delete or add tiles.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.m.TileContainer#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#setEditable
 * @function
 */


/**
 * Getter for property <code>allowAdd</code>.
 * Determines whether the user is allowed to add tiles in edit mode (editable = true)
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>allowAdd</code>
 * @public
 * @name sap.m.TileContainer#getAllowAdd
 * @function
 */

/**
 * Setter for property <code>allowAdd</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bAllowAdd  new value for property <code>allowAdd</code>
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#setAllowAdd
 * @function
 */


/**
 * Getter for aggregation <code>tiles</code>.<br/>
 * The tiles to be displayed by the tile container
 * 
 * <strong>Note</strong>: this is the default aggregation for TileContainer.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.TileContainer#getTiles
 * @function
 */


/**
 * Inserts a tile into the aggregation named <code>tiles</code>.
 *
 * @param {sap.ui.core.Control}
 *          oTile the tile to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the tile should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the tile is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the tile is inserted at 
 *             the last position        
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#insertTile
 * @function
 */

/**
 * Adds some tile <code>oTile</code> 
 * to the aggregation named <code>tiles</code>.
 *
 * @param {sap.ui.core.Control}
 *            oTile the tile to add; if empty, nothing is inserted
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#addTile
 * @function
 */

/**
 * Removes an tile from the aggregation named <code>tiles</code>.
 *
 * @param {int | string | sap.ui.core.Control} vTile the tile to remove or its index or id
 * @return {sap.ui.core.Control} the removed tile or null
 * @public
 * @name sap.m.TileContainer#removeTile
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>tiles</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.TileContainer#removeAllTiles
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>tiles</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oTile the tile whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.TileContainer#indexOfTile
 * @function
 */
	

/**
 * Destroys all the tiles in the aggregation 
 * named <code>tiles</code>.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#destroyTiles
 * @function
 */


/**
 * Fired if a tile was moved 
 *
 * @name sap.m.TileContainer#tileMove
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.m.Tile} oControlEvent.getParameters.tile The tile that has been moved
 * @param {int} oControlEvent.getParameters.newIndex The new index of the tile in the tiles aggregation
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'tileMove' event of this <code>sap.m.TileContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.TileContainer</code>.<br/> itself. 
 *  
 * Fired if a tile was moved 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.TileContainer</code>.<br/> itself.
 *
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#attachTileMove
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'tileMove' event of this <code>sap.m.TileContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#detachTileMove
 * @function
 */

/**
 * Fire event tileMove to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'tile' of type <code>sap.m.Tile</code> The tile that has been moved</li>
 * <li>'newIndex' of type <code>int</code> The new index of the tile in the tiles aggregation</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.TileContainer#fireTileMove
 * @function
 */


/**
 * Fired if a tile is deleted during edit mode. 
 *
 * @name sap.m.TileContainer#tileDelete
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.m.Tile} oControlEvent.getParameters.tile The tile

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'tileDelete' event of this <code>sap.m.TileContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.TileContainer</code>.<br/> itself. 
 *  
 * Fired if a tile is deleted during edit mode. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.TileContainer</code>.<br/> itself.
 *
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#attachTileDelete
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'tileDelete' event of this <code>sap.m.TileContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#detachTileDelete
 * @function
 */

/**
 * Fire event tileDelete to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'tile' of type <code>sap.m.Tile</code> The tile
</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.TileContainer#fireTileDelete
 * @function
 */


/**
 * Fired if a Tile is added 
 *
 * @name sap.m.TileContainer#tileAdd
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'tileAdd' event of this <code>sap.m.TileContainer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.TileContainer</code>.<br/> itself. 
 *  
 * Fired if a Tile is added 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.TileContainer</code>.<br/> itself.
 *
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#attachTileAdd
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'tileAdd' event of this <code>sap.m.TileContainer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.TileContainer#detachTileAdd
 * @function
 */

/**
 * Fire event tileAdd to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.TileContainer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.TileContainer#fireTileAdd
 * @function
 */


/**
 * Moves a given tile to the given index
 *
 * @name sap.m.TileContainer.prototype.moveTile
 * @function
 * @param {int} 
 *         iTile
 *         The tile or tile index to move
 * @param {int} 
 *         iNewIndex
 *         The new Tile position in the tiles aggregation

 * @type void
 * @public
 */


/**
 * Scrolls to the page where the given tile or tile index is included.
 * Optionally this can be done animated or not. With IE9 the scroll is never animated.
 *
 * @name sap.m.TileContainer.prototype.scrollIntoView
 * @function
 * @param {int} 
 *         iTile
 *         The tile or tile index to be scrolled into view
 * @param {boolean} 
 *         bAnimated
 *         Whether the scroll should be animated

 * @type void
 * @public
 */


/**
 * Returns the index of the first tile that is visible in the current page
 *
 * @name sap.m.TileContainer.prototype.getPageFirstTileIndex
 * @function

 * @type int
 * @public
 */


// Start of sap\m\TileContainer.js
jQuery.sap.require("sap.ui.core.IconPool");
sap.ui.core.IconPool.insertFontFaceStyle();

sap.m.TileContainer.prototype._bRtl  = sap.ui.getCore().getConfiguration().getRTL();

/**
 * Initializes the control
 *
 * @private
 */
sap.m.TileContainer.prototype.init = function() {
	this._iCurrentTileStartIndex = 0;
	this._iCurrentPage = 0;
	this._iPages = 0;
	this._iScrollLeft = 0;
	this._iScrollGap = 0;	// gap to the left and right that is allowed to be moved while touchmove event if max scrollwidth or min scrollwidth is already reached

	if (!sap.ui.Device.system.desktop) {
		this._iScrollGap = 0;
	}

	this.bAllowTextSelection = false;

	//ugly but needed, initial timeout to wait until all elements are resized. 
	//TODO: Check whether this is needed in no less mode
	this._iInitialResizeTimeout = 400; //needed

	this._oDragSession = null;
	this._oTouchSession = null;

	this._bAvoidChildTapEvent = false;

	// the amount on the left and right during drag drop of a tile needed to start showing the edge of the page
	this._iEdgeShowStart = sap.ui.Device.system.phone ? 10 : 20;

	// the amount of pixels a tile needs to be moved over the left or right edge to trigger a scroll
	this._iTriggerScrollOffset = sap.ui.Device.system.phone ? 10 : sap.ui.Device.system.desktop ? -40 : 20;

	// keyboard support
		this._iCurrentFocusIndex = -1;
		var fnOnHome = jQuery.proxy(function(oEvent) {
				var oFirstTile = this.getTiles()[0];

				if (!!oFirstTile) {
					this._findTile(oFirstTile.$()).focus();

					//event should not trigger any further actions
					oEvent.stopPropagation();
				}
			}, this),

			fnOnEnd = jQuery.proxy(function(oEvent) {

				if (this.getTiles().length > 0) {
					this._findTile(this.getTiles()[this.getTiles().length -1].$()).focus();

					//event should not trigger any further actions
					oEvent.stopPropagation();
				}
			}, this),

			fnOnPageUp = jQuery.proxy(function(oEvent) {

				if (this.getTiles().length > 0) {
					var iModCurr = this._iCurrentFocusIndex % this._iMaxTiles,
					iNextIndex = this._iCurrentFocusIndex - iModCurr;

					if (iModCurr === 0) {
						iNextIndex -= this._iMaxTiles;
					}

					var oNextTile = this.getTiles()[iNextIndex];
					if(!!oNextTile) {
						this._findTile(oNextTile.$()).focus();

						//event should not trigger any further actions
						oEvent.stopPropagation();
					}
				}
			}, this),

			fnOnPageDown = jQuery.proxy(function(oEvent) {
				var iTilesCount = this.getTiles().length;

				if (iTilesCount > 0) {
					var iModCurr = this._iCurrentFocusIndex % this._iMaxTiles,
						iNextIndex = this._iCurrentFocusIndex - iModCurr + this._iMaxTiles -1;

					if (iModCurr === this._iMaxTiles -1) {
						iNextIndex += this._iMaxTiles;
					}

					// check if we are on the last page
					if(iNextIndex - iTilesCount >= 0) {
						iNextIndex = iTilesCount -1;
					}

					var oNextTile = this.getTiles()[iNextIndex];

					if (!!oNextTile) {
						this._findTile(oNextTile.$()).focus();

						//event should not trigger any further actions
						oEvent.stopPropagation();
					}
				}
			}, this),

			fnOnRight = jQuery.proxy(function(oEvent) {

				if (this._iCurrentFocusIndex >= 0) {
					var iModCurr = (this._iCurrentFocusIndex + 2) % this._iMaxTilesX,
						iNextIndex = this._iCurrentFocusIndex + 1;

					if (iModCurr === 1) {
						iNextIndex += (this._iMaxTiles - this._iMaxTilesX);
					}

					var oNextTile = this.getTiles()[iNextIndex];

					if (!!oNextTile) {
						this._findTile(oNextTile.$()).focus();

						//event should not trigger any further actions
						oEvent.stopPropagation();
					}
				}

			}, this),

			fnOnLeft = jQuery.proxy(function(oEvent) {

				if (this._iCurrentFocusIndex >= 0) {
					var iModCurr = this._iCurrentFocusIndex % this._iMaxTilesX,
						iNextIndex = this._iCurrentFocusIndex - 1;

					if (iModCurr === 0) {
						iNextIndex -= (this._iMaxTiles - this._iMaxTilesX);
					}

					var oNextTile = this.getTiles()[iNextIndex];

					if (!!oNextTile) {
						this._findTile(oNextTile.$()).focus();

						//event should not trigger any further actions
						oEvent.stopPropagation();
					}
				}

			}, this),

			fnOnDown = jQuery.proxy(function(oEvent) {

				if (this._iCurrentFocusIndex >= 0) {
					var iModCurr = this._iCurrentFocusIndex % this._iMaxTiles,
						iNextIndex = this._iCurrentFocusIndex + this._iMaxTilesX,
						iModNext = iNextIndex % this._iMaxTiles;

					var oNextTile = this.getTiles()[iNextIndex];

					if ((iModNext > iModCurr) && !!oNextTile) {

						//'(iModNext > iModCurr)' means: still on same page
						this._findTile(oNextTile.$()).focus();

						//event should not trigger any further actions
						oEvent.stopPropagation();
					}
				}

			}, this),

			fnOnUp = jQuery.proxy(function(oEvent) {

				if (this._iCurrentFocusIndex >= 0) {
					var iModCurr = this._iCurrentFocusIndex % this._iMaxTiles,
						iNextIndex = this._iCurrentFocusIndex - this._iMaxTilesX,
						iModNext = iNextIndex % this._iMaxTiles;

					var oNextTile = this.getTiles()[iNextIndex];
					if((iModNext < iModCurr) && !!oNextTile) {

						//'(iModNext < iModCurr)' means: still on same page
						this._findTile(oNextTile.$()).focus();

						//event should not trigger any further actions
						oEvent.stopPropagation();
					}
				}

			}, this);

		this.onsaphome = fnOnHome;
		this.onsapend = fnOnEnd;
		this.onsapright = this._bRtl ? fnOnLeft : fnOnRight;
		this.onsapleft  = this._bRtl ? fnOnRight : fnOnLeft;
		this.onsapup = fnOnUp;
		this.onsapdown = fnOnDown;
		this.onsappageup = fnOnPageUp;
		this.onsappagedown = fnOnPageDown;
};

/**
 * Handles the internal event onBeforeRendering.
 *
 * @private
 */
sap.m.TileContainer.prototype.onBeforeRendering = function() {

	// unregister the resize listener
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
};

/**
 * Handles the internal event onAfterRendering.
 *
 * @private
 */
sap.m.TileContainer.prototype.onAfterRendering = function() {

	// init resizing
	this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef().parentElement,  jQuery.proxy(this._resize, this));

	// init the dimensions to the container scoll area
	this._applyDimension();
	this.$().toggleClass("sapMTCEditable",this.getEditable() === true);
	var that = this;

	this._sInitialResizeTimeoutId = setTimeout(function() {
		that._update(true);
	}, this._iInitialResizeTimeout);
};

/**
 * Sets the editable property to the tile container that allows to move icons.
 * This is currently also set with a long tap
 *
 * @param {boolean} Whether the container is in edit mode or not.
 * @returns {sap.m.TileContainer} This tile container.
 * @public
 */
sap.m.TileContainer.prototype.setEditable = function(bValue) {
	var aTiles = this.getTiles();

	// set the property
	this.setProperty("editable", bValue, true);
	var bEditable = this.getEditable();
	this.$().toggleClass("sapMTCEditable", bEditable);

	for (var i=0;i<aTiles.length; i++) {
		var oTile = aTiles[i];

		if (oTile instanceof sap.m.Tile) {
			oTile.isEditable(bEditable);
		}
	}

	return this;	// allow chaining;
};

/**
 * Applies the containers dimensions.
 *
 * @private
 */
sap.m.TileContainer.prototype._applyDimension = function() {
	var oDim = this._getContainerDimension(),
		$this = this.$(),
		oThisPos,
		iOffset = 10,
		$scroll = this.$("scrl"),
		scrollPos,
		scrollOuterHeight,
		pagerHeight = this.$("pager").outerHeight();

	$scroll.css({
		width : oDim.outerwidth + "px",
		height : (oDim.outerheight - pagerHeight) + "px"
	});

	oThisPos = $this.position();

	scrollPos  = $scroll.position();
	scrollOuterHeight = $scroll.outerHeight();

	if (sap.ui.Device.system.phone) {
		iOffset = 2;
	} else if (sap.ui.Device.system.desktop) {
		iOffset = 0;
	}

	this.$("blind").css({
		top : (scrollPos.top + iOffset) + "px",
		left : (scrollPos.left + iOffset) + "px",
		right: "auto",
		width : ($scroll.outerWidth() - iOffset) + "px",
		height : (scrollOuterHeight - iOffset) + "px"
	});

	this.$("rightedge").css({
		top : (oThisPos.top + iOffset) + "px",
		right : iOffset + "px",
		left : "auto",
		height : (scrollOuterHeight - iOffset) + "px"
	});

	this.$("leftedge").css({
		top : (oThisPos.top + iOffset) + "px",
		left : (oThisPos.left + iOffset) + "px",
		right: "auto",
		height : (scrollOuterHeight - iOffset) + "px"
	});
};

/**
 * Handles the resize event for the tile container.
 * This is called whenever the orientation of browser size changes.
 *
 * @private
 */
sap.m.TileContainer.prototype._resize = function() {
	if (this._oDragSession) {
		return;
	}

	setTimeout(jQuery.proxy(function() {
		this._update(true);
		delete this._iInitialResizeTimeout;
	},this),
	this._iInitialResizeTimeout);

	this._iInitialResizeTimeout = 0; //now we do not need to wait
};

/**
 * Called from parent if the control is destroyed.
 *
 * @private
 */
sap.m.TileContainer.prototype.exit = function() {

	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}

	if (this._sInitialResizeTimeoutId) {
		clearTimeout(this._sInitialResizeTimeoutId);
	}
};

/**
 * Updates all tiles
 *
 * @private
 */
sap.m.TileContainer.prototype._update = function(bAnimated) {

	if (!this.getDomRef()) {
		return;
	}

	if(!this.$().is(":visible")) {
		return;
	}

	this._updateTilePositions();

	if (!this._oDragSession) {
		this.scrollIntoView(this._iCurrentTileStartIndex || 0, bAnimated);
	}
};

/**
 * Returns the index of the first tile that is visible in the current page
 *
 * @returns {sap.m.TileContainer} The index of the first tile that is visible in the current page.
 * @public
 */
sap.m.TileContainer.prototype.getPageFirstTileIndex = function() {
	return this._iCurrentTileStartIndex || 0;
};

/**
 * Moves a given tile to the given index.
 *
 * @param {sap.m.Tile} oTile The tile to move
 * @param {int} iIndex The new Tile position in the tiles aggregation.
 * @returns {sap.m.TileContainer} This tile container.
 * @public
 */
sap.m.TileContainer.prototype.moveTile = function(vTile, iNewIndex) {
	if (!isNaN(vTile)) {
		vTile = this.getTiles()[vTile];
	}

	if (!vTile) {
		jQuery.sap.log.info("No Tile to move");
		return this;
	}

	this.deleteTile(vTile);
	this.insertTile(vTile,iNewIndex);
	return this;
};

/**
 * Adds a tile to the end of the tiles collection
 *
 * @param {sap.m.Tile} oTile The tile to add.
 * @returns {sap.m.TileContainer} This tile container.
 * @override
 * @public
 */
sap.m.TileContainer.prototype.addTile = function(oTile) {
	this.insertTile(oTile,this.getTiles().length);
};

/**
 * Inserts a tile to the given index
 *
 * @param {sap.m.Tile} oTile The tile to insert
 * @param {int} iIndex The new Tile position in the tiles aggregation.
 * @returns {sap.m.TileContainer} This tile container.
 * @override
 * @public
 */
sap.m.TileContainer.prototype.insertTile = function(oTile, iIndex) {

	if (this.getDomRef()) {
		this.insertAggregation("tiles", oTile, iIndex, true);

		if (!this._oDragSession) {
			var oRm = sap.ui.getCore().createRenderManager(),
				oContent = this.$("cnt")[0]; 
			oRm.render(oTile, oContent);
			oRm.destroy();
		}

		//this._applyPageStartIndex(iIndex);
		this._update(false);
	} else {
		this.insertAggregation("tiles",oTile,iIndex);
	}

	// keyboard support for desktop environments
		var that = this,
			fnOnFocusIn = function(oEvent) {
				var iIndex = that.indexOfAggregation("tiles", this),
					iExpectedPage = Math.floor(iIndex / that._iMaxTiles),
					iPageDelta = iExpectedPage - that._iCurrentPage;

				if (iPageDelta != 0) {
					that.scrollIntoView(iIndex);
					that._resize();
				}

				that._iCurrentFocusIndex = iIndex;
			};

		oTile.onfocusin = fnOnFocusIn;

	return this;
};

/**
 * Deletes a tile.
 *
 * @param {sap.m.Tile} oTile The tile to move
 * @returns {sap.m.TileContainer} This tile container.
 * @override
 * @public
 */
sap.m.TileContainer.prototype.deleteTile = function(oTile) {

	if (this.getDomRef()) {
		var iIndex = this.indexOfAggregation("tiles",oTile)-1;
		this.removeAggregation("tiles",oTile,true);

		if (!this._oDragSession) {
			oTile.getDomRef().parentNode.removeChild(oTile.getDomRef());
		}

		this._applyPageStartIndex(iIndex < 0 ? 0 : iIndex);
		this._update(false);
	} else {
		this.removeAggregation("tiles",oTile,false);
	}

	return this;
};

sap.m.TileContainer.prototype.rerender = function() {
	if (!this._oDragSession || this._oDragSession.bDropped) {
		sap.ui.core.Control.prototype.rerender.apply(this);
	}
};

/**
 * Scrolls one page to the left
 *
 * @public
 */
sap.m.TileContainer.prototype.scrollLeft = function() {
	if(this._bRtl){
		this.scrollIntoView(this._iCurrentTileStartIndex + this._iMaxTiles);
	} else {
		this.scrollIntoView(this._iCurrentTileStartIndex - this._iMaxTiles);
	}
};

/**
 * Scrolls one page to the right.
 *
 * @public
 */
sap.m.TileContainer.prototype.scrollRight = function() {
	if(this._bRtl){
		this.scrollIntoView(this._iCurrentTileStartIndex - this._iMaxTiles);
	} else {
		this.scrollIntoView(this._iCurrentTileStartIndex + this._iMaxTiles);
	}
};

/**
 * Scrolls to the page where the given tile or tile index is included.
 * Optionally this can be done animated or not. With IE9 the scroll is never animated.
 *
 * @param {sap.m.Tile|int} vTile The tile or tile index to be scrolled into view.
 * @param {boolean} bAnimated Whether the scroll should be animated.
 * @public
 */
sap.m.TileContainer.prototype.scrollIntoView = function(vTile, bAnimated) {

	var iContentWidth = this._getContentDimension().outerwidth,
		iIndex = vTile;

	if (isNaN(vTile)) {
		iIndex = this.indexOfAggregation("tiles",vTile);
	}

	if (!this.getTiles()[iIndex]) {
		return;
	}

	this._applyPageStartIndex(iIndex);

	this._iCurrentPage = Math.floor(this._iCurrentTileStartIndex / this._iMaxTiles);

	if (this._bRtl) {
		this._scrollTo((this._iPages - this._iCurrentPage) * iContentWidth, bAnimated);
	} else {
		this._scrollTo(this._iCurrentPage * iContentWidth, bAnimated);
	}

	this._updatePager();
};

/**
 * Updates the tile positions.
 *
 * @private
 */
sap.m.TileContainer.prototype._updateTilePositions = function(){

	if (this.getTiles().length === 0) {	// no tiles
		return;
	}

	this._applyPageStartIndex(this._iCurrentTileStartIndex);
	this._applyDimension();

	var aTiles = this.getTiles(),
		oContentDimension = this._getContentDimension();

	this._iPages = Math.ceil(aTiles.length / this._iMaxTiles);

	for (var i=0; i < aTiles.length; i++) {

		if (aTiles[i].isDragged()) {
			continue;
		}

		var iPage =  Math.floor(i / this._iMaxTiles),
			oTile = aTiles[i],
			iLeft = (iPage * oContentDimension.outerwidth) + this._iOffsetX + i % this._iMaxTilesX * this._oTileDimension.width,
			iTop =  this._iOffsetY + Math.floor(i / this._iMaxTilesX) * this._oTileDimension.height - (iPage * this._iMaxTilesY * this._oTileDimension.height);

		if (this._bRtl) {
			iLeft = (this._iPages - iPage) * oContentDimension.outerwidth - this._iOffsetX - (i % this._iMaxTilesX  + 1) * this._oTileDimension.width;
		}

		oTile.setPos(iLeft,iTop);
		oTile.setSize(this._oTileDimension.width, this._oTileDimension.height);
	}
}; 

/**
 * Convenience method which returns $node if it has css class 'sapMTile'
 * or the first child with that class.
 *
 * @private
 */
sap.m.TileContainer.prototype._findTile = function($node) {
	if($node.hasClass('sapMTile')) {
		return $node;
	} else {
		return $node.find('.sapMTile');
	}
};

/**
 * Updates the pager part of the tile container.
 * This is done dynamically 
 *
 * @private
 */
sap.m.TileContainer.prototype._updatePager = function() {

	var oPager = this.$("pager")[0],
		oScrollLeft = this.$("leftscroller")[0],
		oScrollRight = this.$("rightscroller")[0];

	if (this._iPages > 1) {
		var aHTML = [""];

		for (var i=0;i<this._iPages;i++) {
			aHTML.push("");
		}

		oPager.innerHTML = aHTML.join("<span></span>");
		oPager.style.display = "block";
		oPager.childNodes[this._iCurrentPage].className = "sapMTCActive";

		if (sap.ui.Device.system.desktop) {

			var hide = {
				r: this._iCurrentPage == this._iPages-1,
				l: this._iCurrentPage == 0
			};

			if (this._bRtl) {
				var tmp = hide.r;
				hide.r = hide.l;
				hide.l = tmp;
				// Less builder swaps left and right in RTL styles,
				// and that is not required here
				oScrollRight.style.left = "auto";
				oScrollLeft.style.right = "auto";
			}

			oScrollRight.style.right = hide.r ? "-100px" : "1rem";
			oScrollLeft.style.left   = hide.l ? "-100px" : "1rem";
			oScrollLeft.style.display  = "block";
			oScrollRight.style.display = "block";

			if (hide.r) {
				oScrollRight.style.display = "none";
			}

			if (hide.l) {
				oScrollLeft.style.display = "none";
			}
		}
	} else {

		oPager.innerHTML = "";
		oScrollRight.style.right = "-100px";
		oScrollLeft.style.left = "-100px";
		oScrollLeft.style.display = "none";
		oScrollRight.style.display = "none";
	}
};

/**
 * Returns the dimension (width and height) of the pages content.
 *
 * @returns {object} Width and height of the pages content
 * @private
 */
sap.m.TileContainer.prototype._getContentDimension = function() {

	if (!this.getDomRef()) {
		return;
	}

	var oScroll = this.$("scrl");

	return {
		width  		: oScroll.width(),
		height 		: oScroll.height()-20,
		outerheight : oScroll.outerHeight()-20,
		outerwidth 	: oScroll.outerWidth()
	};
};

/**
 * Returns the dimension (width and height) of the tile container content.
 *
 * @returns {object} Width and height of the pages content.
 * @private
 */
sap.m.TileContainer.prototype._getContainerDimension = function() {
	var oDomRef = this.$();

	if (!oDomRef) {
		return;
	}

	return {
		width  		: oDomRef.width(),
		height 		: oDomRef.height(),
		outerheight : oDomRef.outerHeight(),
		outerwidth 	: oDomRef.outerWidth()
	};
};

/**
 * Returns the dimension (width and height) of a tile.
 *
 * @returns {object} Width and height of a tile.
 * @private
 */
sap.m.TileContainer.prototype._getTileDimension = function() {

	if (!this.getDomRef()) {
		return;
	}

	if (this._oTileDim) {
		return this._oTileDim;
	}

	//TODO: Why the dimensions of the first Tile?
	var oTile = this.getTiles()[0];
	this._oTileDim = {
		width  : Math.round(oTile.$().outerWidth(true)),
		height : Math.round(oTile.$().outerHeight(true))
	};

	return this._oTileDim;
};

/**
 * Calculates the tile page sizes.
 *
 * @private
 */
sap.m.TileContainer.prototype._calculatePositions = function() {

	if (this.getTiles().length === 0) {	// no tiles
		return;
	}

	this._oTileDimension = this._getTileDimension();

	var oContentDimension = this._getContainerDimension(),
		iTiles = this.getTiles().length,
		iPagerHeight = this.$("pager")[0].offsetHeight;

	if (oContentDimension.height === 0) {	// nothing to do because the height of the content is not (yet) available
		return;
	}

	if (sap.ui.Device.system.desktop) {
		oContentDimension.width  -= 45 * 2;
	}

	var iMaxTilesX = Math.max( Math.floor( oContentDimension.width / this._oTileDimension.width ),1), 		  //at least one tile needs to be visible
		iMaxTilesY = Math.max( Math.floor((oContentDimension.height - iPagerHeight) / this._oTileDimension.height),1), //at least one tile needs to be visible
		iNumTileX = (iTiles < iMaxTilesX)  ? iTiles : iMaxTilesX,
		iNumTileY = (iTiles / iNumTileX < iMaxTilesY)  ? Math.ceil(iTiles / iNumTileX) : iMaxTilesY;

	// set the member vars for further usage
	this._iMaxTiles = iMaxTilesX * iMaxTilesY;
	this._iMaxTilesX = iMaxTilesX;
	this._iMaxTilesY = iMaxTilesY;
	this._iOffsetX = Math.floor(( oContentDimension.width  -  (this._oTileDimension.width * iNumTileX)) / 2);

	if (sap.ui.Device.system.desktop) {
		this._iOffsetX += 45;
	}

	this._iOffsetY = Math.floor(( oContentDimension.height - iPagerHeight - (this._oTileDimension.height * iNumTileY )) / 2);

	jQuery.sap.log.debug("maxtiles "+ this._iMaxTiles +" on page " + this.getId());
};

/**
 * Returns an array for a given pixel position in the tile container.
 * Normally there is only one tile for a position.
 *
 * @param {int} iX Position in pixels.
 * @param {int} iY Position in pixels.
 * @returns {array} Array of tiles for the given position
 * @private
 */
sap.m.TileContainer.prototype._getTilesFromPosition = function(iX, iY) {

	if (!this.getTiles().length) {
		return [];
	}

	iX = iX + this._iScrollLeft;

	var aTiles = this.getTiles(),
		aResult = [];

	for (var i=0;i<aTiles.length;i++) {
		var oTile = aTiles[i],
			oRect = {
				top: oTile._posY,
				left: oTile._posX,
				width: oTile._width,
				height: oTile._height
			};

		if (!aTiles[i].isDragged() && iY > oRect.top && iY < oRect.top + oRect.height && iX > oRect.left && iX < oRect.left + oRect.width) {
			aResult.push(aTiles[i]);
		}
	}

	return aResult;
};

/**
 * Applies the start index of the pages first tile according to the given index.
 *
 * @param {int} iIndex The index of the tile that should be visible.
 * @private
 */
sap.m.TileContainer.prototype._applyPageStartIndex = function(iIndex) {
	this._calculatePositions();
	var iLength = this.getTiles().length;

	if (iIndex < 0) {
		iIndex = 0;
	} else if (iIndex > iLength-1) {
		iIndex = iLength-1;
	}

	// where does the page start
	var iCurrentPage = Math.floor(iIndex / this._iMaxTiles || 0);
	this._iCurrentTileStartIndex = iCurrentPage * (this._iMaxTiles  || 0);

	jQuery.sap.log.info("current index " + this._iCurrentTileStartIndex);
};

/**
 * Scrolls to the given position.
 *
 * @param {int} The new scroll position.
 * @private
 */
sap.m.TileContainer.prototype._scrollTo = function(iScrollLeft, bAnimated) {
	if (bAnimated !== false) {
		bAnimated = true; // animated needs to be set explicitly to false
	}

	this._applyTranslate(this.$("cnt"), -iScrollLeft, 0, bAnimated);

	if (this._bRtl) {
		this._iScrollLeft = iScrollLeft - this._getContentDimension().outerwidth;
	} else {
		this._iScrollLeft = iScrollLeft;
	}
};

/**
 * Applies the translate x and y to the given jQuery object.
 *
 * @param {object} o$ The jQuery object
 * @param {int} iX The pixel x value for the translate
 * @param {int} iY The pixel y value for the translate
 * @param {boolean} bAnimated Whether the translate should be animated or not.
 * @private
 */
sap.m.TileContainer.prototype._applyTranslate = function(o$, iX, iY, bAnimated) {
	var o = o$[0];

	this.$("cnt").toggleClass("sapMTCAnim",bAnimated);

	if ("webkitTransform" in o.style) {
		o$.css('-webkit-transform','translate3d('+iX+'px,'+iY+'px,0)');
	} else if ("MozTransform" in o.style) {
		o$.css('-moz-transform','translate('+iX+'px,'+iY+'px)');
	} else if ("transform" in o.style) {
		o$.css('transform','translate3d('+iX+'px,'+iY+'px,0)');
	} else if ("msTransform" in o.style) {
		o$.css('-ms-transform','translate('+iX+'px,'+iY+'px)');
	}
};

/**
 * Initializes the touch session for the tile container.
 *
 * @param {jQuery.Event} oEvent The event object that started the touch.
 * @private
 */
sap.m.TileContainer.prototype._initTouchSession = function(oEvent) {
	if (oEvent.type == "touchstart") {
		var targetTouches = oEvent.targetTouches[0];
		this._oTouchSession = {
			dStartTime : new Date(),
			fStartX : targetTouches.pageX,
			fStartY : targetTouches.pageY,
			fDiffX : 0,
			fDiffY : 0,
			oControl : oEvent.srcControl,
			iOffsetX :  targetTouches.pageX - oEvent.target.offsetLeft
		};
	} else { // mousedown
		this._oTouchSession = {
			dStartTime : new Date(),
			fStartX : oEvent.pageX,
			fStartY : oEvent.pageY,
			fDiffX : 0,
			fDiffY : 0,
			oControl : oEvent.srcControl,
			iOffsetX :  oEvent.pageX - oEvent.target.offsetLeft
		};
	}
};

/**
 * Initializes the drag session for the tile container.
 *
 * @param {jQuery.Event} oEvent The event object that started the drag.
 * @private
 */
sap.m.TileContainer.prototype._initDragSession = function(oEvent) {
	while (oEvent.srcControl && oEvent.srcControl.getParent() != this) {
		 oEvent.srcControl =  oEvent.srcControl.getParent();
	}

	var iIndex = this.indexOfAggregation("tiles",oEvent.srcControl);

	if (oEvent.type == "touchstart") {

	this._oDragSession = {
			oTile  : oEvent.srcControl,
			oTileElement  : oEvent.srcControl.$()[0],
			iOffsetLeft : oEvent.targetTouches[0].pageX - oEvent.srcControl._posX + this._iScrollLeft,
			iOffsetTop  : oEvent.targetTouches[0].pageY - oEvent.srcControl._posY,
			iIndex : iIndex,
			iOldIndex : iIndex,
			iDiffX : oEvent.targetTouches[0].pageX,
			iDiffY : oEvent.targetTouches[0].pageY
	};
	} else { // mousedown
		this._oDragSession = {
				oTile  : oEvent.srcControl,
				oTileElement  : oEvent.srcControl.$()[0],
				iOffsetLeft : oEvent.pageX - oEvent.srcControl._posX + this._iScrollLeft,
				iOffsetTop  : oEvent.pageY - oEvent.srcControl._posY,
				iIndex : iIndex,
				iOldIndex : iIndex,
				iDiffX : oEvent.pageX,
				iDiffY : oEvent.pageY
		};
	}
};

/**
 * Handle click events for scollers in desktop case.
 *
 * @param {jQuery.Event} oEvent The event object that started the drag.
 * @private
 */
sap.m.TileContainer.prototype.onclick = function(oEvent) {
	var oPager = this.$("pager")[0];

	if (oEvent.target.id == this.getId() + "-leftscroller" || oEvent.target.parentNode.id == this.getId() + "-leftscroller") {
		this.scrollLeft();
	} else if (oEvent.target.id == this.getId() + "-rightscroller" || oEvent.target.parentNode.id == this.getId() + "-rightscroller") {
		this.scrollRight();
	} else if (oEvent.target == oPager && sap.ui.Device.system.desktop) {
		if (oEvent.offsetX < oPager.offsetWidth/2) {
			this.scrollLeft();
		} else {
			this.scrollRight();
		}
	}
};

/**
 * Handle the touchstart event on the TileContainer.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.TileContainer.prototype.ontouchstart = function(oEvent) {

	// mark the event for components that needs to know if the event was handled by this control.
	oEvent.setMarked();

	if (oEvent.targetTouches.length > 1 || this._oTouchSession) {	// allow only one touch session
		return;
	}

	while (oEvent.srcControl && oEvent.srcControl.getParent() != this) {
		 oEvent.srcControl =  oEvent.srcControl.getParent();
	}

	if (oEvent.srcControl instanceof sap.m.Tile && this.getEditable()) {

		if (oEvent.target.className != "sapMTCRemove") {
			this._initDragSession(oEvent);
			this._initTouchSession(oEvent);
			this._oDragSession.oTile.isDragged(true);
		} else {
			this._initTouchSession(oEvent);
		}

		this._bAvoidChildTapEvent = true;
	} else {
		this._initTouchSession(oEvent);
	}

	jQuery(document).on("touchmove mousemove", jQuery.proxy(this._onmove, this));
	jQuery(document).on("touchend touchcancel mouseup", jQuery.proxy(this._onend, this));
};

/**
 * Handle the touch move event on the TileContainer.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.TileContainer.prototype._onmove = function(oEvent) {

	if (document.selection && document.selection.clear) {
		document.selection.clear();
	}

	if (oEvent.isMarked("delayedMouseEvent")) {
		return;
	}

	if (oEvent.targetTouches && oEvent.targetTouches.length > 1) {	//allow only one touch session
		return;
	}

	if (!oEvent.targetTouches) {
		oEvent.targetTouches=[{pageX:oEvent.pageX,pageY:oEvent.pageY}];
	}

	var oTouchSession = this._oTouchSession;
	oTouchSession.fDiffX = oTouchSession.fStartX - oEvent.targetTouches[0].pageX;
	oTouchSession.fDiffY = oTouchSession.fStartY - oEvent.targetTouches[0].pageY;

	if (this._oDragSession) {

		if (Math.abs(oTouchSession.fDiffX)>5) {
			if (!this._oDragSession.bStarted) {
				this._oDragSession.bStarted = true;
				this._onDragStart(oEvent);
			} else {
				this._onDrag(oEvent);
			}

			this._bAvoidChildTapEvent = true;
		}
	} else if (oTouchSession) {
		var contentWidth = this._getContentDimension().outerwidth;
		var iNewLeft = -this._iScrollLeft - oTouchSession.fDiffX;

		if (iNewLeft > this._iScrollGap) {
			return;
		} else if (iNewLeft < -(((this._iPages-1) * contentWidth) + this._iScrollGap)) {
			return;
		}

		if (this._bRtl){
			iNewLeft = iNewLeft - contentWidth;
		}

		this._applyTranslate(this.$("cnt"),iNewLeft,0,false);
	}
};

/**
 * Handle the touchend and mouseup events on the TileContainer.
 *
 * @param {jQuery.Event} The event object.
 * @private
 */
sap.m.TileContainer.prototype._onend = function(oEvent) {

	if (oEvent.isMarked("delayedMouseEvent")) {
		return;
	}

	jQuery(document).off("touchend touchcancel mouseup", this._onend);
	jQuery(document).off("touchmove mousemove", this._onmove);

	if (this._oDragSession) {

		this._onDrop(oEvent);
		delete this._oTouchSession;
		return;
	}

	if (!this._oTouchSession) {
		return;
	}

	var oTouchSession = this._oTouchSession,
		oDate = new Date(),
		bFast = (oDate - oTouchSession.dStartTime < 600),
		iRtl = this._bRtl? -1 : 1;

	// handle fast swipe or tap
	if (bFast) {
		var oPager = this.$("pager")[0];

		if (Math.abs(oTouchSession.fDiffX) > 30) {

			this._applyPageStartIndex(this._iCurrentTileStartIndex + ((oTouchSession.fDiffX * iRtl > 0 ? 1 : -1) * this._iMaxTiles));
			this._bAvoidChildTapEvent = true;
		} else if (oEvent.target == oPager && !sap.ui.Device.system.desktop) {

			if ((oTouchSession.iOffsetX - oPager.offsetWidth/2) * iRtl < 0) {
				this.scrollLeft();
			} else {
				this.scrollRight();
			}

			this._bAvoidChildTapEvent = true;
		} else if (oEvent.target.className == "sapMTCRemove") {
			this.fireTileDelete({ tile: oTouchSession.oControl });
		}
	} else {
		var oContentDimension = this._getContentDimension();

		if (Math.abs(oTouchSession.fDiffX) > oContentDimension.outerwidth/2) {
			this._applyPageStartIndex(this._iCurrentTileStartIndex + ((oTouchSession.fDiffX * iRtl > 0 ? 1 : -1) * this._iMaxTiles));
			this._bAvoidChildTapEvent = true;
		}
	}

	this._update();

	// remove unused properties
	delete this._oDragSession;
	delete this._oTouchSession;
	var that = this;

	setTimeout(function(){
		that._bAvoidChildTapEvent = false;
	},100);
};

/**
 * Handles the drag start of an item in edit mode.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.TileContainer.prototype._onDragStart = function(oEvent) {
	this.$().append(this._oDragSession.oTileElement);
	this._oDragSession.iDiffX = this._oTouchSession.fStartX - this._oTouchSession.fDiffX;
	this._oDragSession.iDiffY = this._oTouchSession.fStartY - this._oTouchSession.fDiffY;
	this._oDragSession.oTile.setPos(this._oDragSession.iDiffX - this._oDragSession.iOffsetLeft,this._oDragSession.iDiffY - this._oDragSession.iOffsetTop);
	this.$("blind").css("display","block");
};

/**
 * Handles the dragging of an item.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.TileContainer.prototype._onDrag = function(oEvent) {

	// calculate the center and middle position of the dragged tile
	if (!this._oTouchSession) {

		// if onDrag is fired after an scroll interval but the drag session was already ended.
		clearTimeout(this.iScrollTimer);
		this._oDragSession = null;
		this.iScrollTimer = null;
		this._bTriggerScroll = false;
		return;
	}

	this._oDragSession.iDiffX = this._oTouchSession.fStartX - this._oTouchSession.fDiffX;
	this._oDragSession.iDiffY = this._oTouchSession.fStartY - this._oTouchSession.fDiffY;

	var oContentDimension = this._getContentDimension(),
		iTop = this._oDragSession.iDiffY - this._oDragSession.iOffsetTop,
		iLeft = this._oDragSession.iDiffX - this._oDragSession.iOffsetLeft,
		iMiddle = iTop + (this._oDragSession.oTileElement.offsetHeight/2),
		iCenter = iLeft + (this._oDragSession.oTileElement.offsetWidth/2),
		bScrollRight = iLeft +  this._oDragSession.oTileElement.offsetWidth - this._iTriggerScrollOffset > oContentDimension.width,
		bScrollLeft =  iLeft  < -this._iTriggerScrollOffset,
		iNearRight = oContentDimension.width - (iLeft +  this._oDragSession.oTileElement.offsetWidth),
		iNearLeft =  iLeft;

	//jQuery.sap.log.info("ScrollLeft = " + this._iScrollLeft + " Left = " + iLeft + " Top = " + iTop);
	this._oDragSession.oTile.setPos(iLeft,iTop);

	// reset the clipping of the tile
	this._oDragSession.oTile.$().css("clip","auto");

	// clip the right part of the tile if it is near the right edge
	var oRight = this.$("rightedge")[0];
	if (iLeft + this._oDragSession.oTile._width > oRight.offsetLeft + oRight.offsetWidth && this._iCurrentPage < this._iPages-1) {
		var iClipRight =oRight.offsetLeft + oRight.offsetWidth - iLeft - ((this._oDragSession.oTile._width-this._oDragSession.oTile.$().outerWidth(false))/2)-2;
		this._oDragSession.oTile.$().css("clip","rect(-25px,"+iClipRight+"px," + (this._oDragSession.oTile._height +20) + "px,-25px)");
	}

	// clip the left part of the tile if it is near the left edge
	var oLeft = this.$("leftedge")[0];
	if (iLeft < oLeft.offsetLeft + 2 + ((this._oDragSession.oTile._width - this._oDragSession.oTile.$().outerWidth(false))/2) && this._iCurrentPage > 0) {
		var iClipLeft = oLeft.offsetLeft + 4 - iLeft - ((this._oDragSession.oTile._width-this._oDragSession.oTile.$().outerWidth(false))/2);
		this._oDragSession.oTile.$().css("clip","rect(-25px,"+this._oDragSession.oTile._width+"px," + (this._oDragSession.oTile._height +20) + "px,"+iClipLeft+"px)");	
	}

	// increase the opacity of the right edge the closer the tile is moved
	if (iNearRight < this._iEdgeShowStart && this._iCurrentPage < this._iPages-1) {
		var iOpacity = (this._iEdgeShowStart-iNearRight) / (this._iEdgeShowStart + this._iTriggerScrollOffset);
		this.$("rightedge").css("opacity","" + iOpacity);
	} else {

		// not near the edge
		this.$("rightedge").css("opacity","0.01");
	}

	// increase the opacity of the left edge the closer the tile is moved
	if (iNearLeft < this._iEdgeShowStart && this._iCurrentPage > 0) {
		var iOpacity = (this._iEdgeShowStart-iNearLeft) / (this._iEdgeShowStart + this._iTriggerScrollOffset);
		this.$("leftedge").css("opacity",""+iOpacity);
	} else {

		// not near the edge
		this.$("leftedge").css("opacity","0.01");
	}

	// check if scrolling needed
	var bScrollNeeded;

	if (this._bRtl){
		bScrollNeeded = bScrollRight && this._iCurrentPage > 0 || bScrollLeft && this._iCurrentPage < this._iPages-1;
	} else {
		bScrollNeeded = bScrollLeft && this._iCurrentPage > 0 || bScrollRight && this._iCurrentPage < this._iPages-1;
	}

	if (bScrollNeeded) {
		if (this._bTriggerScroll) {
			bScrollLeft ? this.scrollLeft() : this.scrollRight();
		} else {

			// start the interval timer
			var that = this;
			if (!this.iScrollTimer) {
				this.iScrollTimer = setInterval(function () {
					that._bTriggerScroll = true;
					that._onDrag(oEvent); //retrigger the event
					that._bTriggerScroll = false;
				},1000);
			}
		}

		// do not process further to avoid hovered tiles from the next page to be processed
		return;
	} else {

		// reset the interval timer
		if (this.iScrollTimer) {
			clearTimeout(this.iScrollTimer);
			this._bTriggerScroll = false;
			this.iScrollTimer = null;
		}
	}

	// get the hovered tile
	var aHoveredTiles = this._getTilesFromPosition(iCenter, iMiddle);
	if (aHoveredTiles && aHoveredTiles.length > 0) {

		// insert the tile after if center is on the right half of the target tile
		var oHoveredTile = aHoveredTiles[0],
			oRect = {
				top: oHoveredTile._posY,
				left: oHoveredTile._posX,
				width: oHoveredTile._width,
				height: oHoveredTile._height
			};

		var iIndex = this.indexOfAggregation("tiles", oHoveredTile);

		// (iIndex % this._iMaxTilesX) != 0 = Not a start tile in a row to avoid inserting in previous row which would flicker if 
		// drag right before the first tile in a row.
		if (iCenter + this._iScrollLeft < ((oRect.left + oRect.width)/2) && (iIndex % this._iMaxTilesX) != 0) {
			iIndex--;
		}

		this._oDragSession.iIndex = iIndex;
		this.moveTile(this._oDragSession.oTile,this._oDragSession.iIndex);
	} else if (this._iCurrentPage == this._iPages - 1) {

		// check whether the dragged tile is at the end of the tile container
		var aTiles = this.getTiles(),
			oLastTile = aTiles[aTiles.length-1];

		if (oLastTile && iCenter > oLastTile._posX - this._iScrollLeft && iMiddle > oLastTile._posY) {
			this._oDragSession.iIndex = aTiles.length - 1;
			this.moveTile(this._oDragSession.oTile, this._oDragSession.iIndex);
		}
	}
};

/**
 * Handles the drop of a tile.
 *
 * @param {jQuery.Event} oEvent The event object.
 * @private
 */
sap.m.TileContainer.prototype._onDrop = function(oEvent) {
	if (this._oDragSession) {
		var oTile = this._oDragSession.oTile,
			iIndex = this._oDragSession.iIndex;

		this._oDragSession.oTile.isDragged(false);

		if (this._oDragSession.iOldIndex != this._oDragSession.iIndex) {
			this.fireTileMove({
				tile: oTile,
				newIndex: iIndex
			});
		}

		this.$("blind").css("display","block");

		if (this._oDragSession.bStarted) {
			this._oDragSession.oTile.setPos(this._oDragSession.oTile._posX + this._iScrollLeft, this._oDragSession.oTile._posY);
		}

		// reset the clipping
		this._oDragSession.oTile.$().css("clip","auto");

		// reset the edges
		this.$("rightedge").css("opacity","0.01");
		this.$("leftedge").css("opacity","0.01");
		this.$("cnt").append(this._oDragSession.oTileElement);
		delete this._oDragSession;
		this.moveTile(oTile, iIndex);
		this.scrollIntoView(oTile, false);
		this.$("blind").css("display","none");
	}
};