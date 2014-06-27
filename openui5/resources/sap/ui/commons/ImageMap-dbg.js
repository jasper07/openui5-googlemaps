/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ImageMap.
jQuery.sap.declare("sap.ui.commons.ImageMap");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ImageMap.
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
 * <li>{@link #getName name} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAreas areas} : sap.ui.commons.Area[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.ImageMap#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Combination of image areas where at runtime these areas are starting points for hyperlinks or actions
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.ImageMap
 */
sap.ui.core.Control.extend("sap.ui.commons.ImageMap", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"createArea"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"name" : {type : "string", group : "Misc", defaultValue : null}
	},
	aggregations : {
    	"areas" : {type : "sap.ui.commons.Area", multiple : true, singularName : "area"}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.ImageMap with name <code>sClassName</code> 
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
 * @name sap.ui.commons.ImageMap.extend
 * @function
 */

sap.ui.commons.ImageMap.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>name</code>.
 * Name for the image that serves as reference
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.ui.commons.ImageMap#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ImageMap#setName
 * @function
 */


/**
 * Getter for aggregation <code>areas</code>.<br/>
 * Area representing the reference to the target location
 * 
 * @return {sap.ui.commons.Area[]}
 * @public
 * @name sap.ui.commons.ImageMap#getAreas
 * @function
 */


/**
 * Inserts a area into the aggregation named <code>areas</code>.
 *
 * @param {sap.ui.commons.Area}
 *          oArea the area to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the area should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the area is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the area is inserted at 
 *             the last position        
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ImageMap#insertArea
 * @function
 */

/**
 * Adds some area <code>oArea</code> 
 * to the aggregation named <code>areas</code>.
 *
 * @param {sap.ui.commons.Area}
 *            oArea the area to add; if empty, nothing is inserted
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ImageMap#addArea
 * @function
 */

/**
 * Removes an area from the aggregation named <code>areas</code>.
 *
 * @param {int | string | sap.ui.commons.Area} vArea the area to remove or its index or id
 * @return {sap.ui.commons.Area} the removed area or null
 * @public
 * @name sap.ui.commons.ImageMap#removeArea
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>areas</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.Area[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.ImageMap#removeAllAreas
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.Area</code> in the aggregation named <code>areas</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.Area}
 *            oArea the area whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.ImageMap#indexOfArea
 * @function
 */
	

/**
 * Destroys all the areas in the aggregation 
 * named <code>areas</code>.
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ImageMap#destroyAreas
 * @function
 */


/**
 * Event for the areas that can be clicked in an ImageMap 
 *
 * @name sap.ui.commons.ImageMap#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.areaId Id of clicked Area.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.commons.ImageMap</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.ImageMap</code>.<br/> itself. 
 *  
 * Event for the areas that can be clicked in an ImageMap 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.ImageMap</code>.<br/> itself.
 *
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ImageMap#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.commons.ImageMap</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ImageMap#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'areaId' of type <code>string</code> Id of clicked Area.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ImageMap} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.ImageMap#firePress
 * @function
 */


/**
 * Adds an area to the ImageMap
 *
 * @name sap.ui.commons.ImageMap.prototype.createArea
 * @function
 * @param {string[]} 
 *         aArea
 *         

 * @type void
 * @public
 */


// Start of sap\ui\commons\ImageMap.js
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");

/**
 * Adds areas to the Image Map. Each argument must be either a JSon object or a
 * list of objects or the area element or elements.
 *
 * @param {sap.ui.commons.Area|string} Area to add
 * @return {sap.ui.commons.Area} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.ImageMap.prototype.createArea = function() {
	var oArea = new sap.ui.commons.Area();

	for ( var i = 0; i < arguments.length; i++) {
		var oContent = arguments[i];
		var oArea;
		if (oContent instanceof sap.ui.commons.Area) {
			oArea = oContent;
		} else {
			oArea = new sap.ui.commons.Area(oContent);
		}
		this.addArea(oArea);
	}
	return this;
};

/**
 * Used for after-rendering initialization.
 *
 * @private
 */
sap.ui.commons.ImageMap.prototype.onAfterRendering = function() {

	this.oDomRef = this.getDomRef();

	// Initialize the ItemNavigation if does not exist yet
	if (!this.oItemNavigation) {
		this.oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
	}

	if (!!sap.ui.Device.browser.internet_explorer) {

		var that = this;
		var aImageControls = [];
		this.oItemNavigation.setTabIndex0();

		// Find the Image control and add delegate to it
		var $Images = jQuery("img[useMap=#" + this.getName() + "]");
		$Images.each(function(i, image) {
			var id = image.getAttribute("id");
			var imageControl = sap.ui.getCore().byId(id);
			imageControl.addDelegate(that.oItemNavigation);
			that.oItemNavigation.setRootDomRef(image);
			aImageControls.push(imageControl);
		});

		this.aImageControls = aImageControls;
	} else {

		this.addDelegate(this.oItemNavigation);
		this.oItemNavigation.setRootDomRef(this.oDomRef);
	}

	// Set navigations items = Areas inside of Image map
	var aItemDomRefs = [];
	var aAllAreas = this.getAreas();
	for ( var i = 0; i < aAllAreas.length; i++) {
		var oDomRef = aAllAreas[i].getFocusDomRef();
		if (oDomRef) { // separators return null here
			aItemDomRefs.push(oDomRef);
		}
	}

	this.oItemNavigation.setItemDomRefs(aItemDomRefs);
	this.oItemNavigation.setCycling(true);
	this.oItemNavigation.setSelectedIndex(-1);
	this.oItemNavigation.setFocusedIndex(-1);

};

/**
 * Does all the cleanup when the Image Map is to be destroyed. Called from the
 * element's destroy() method.
 *
 * @private
 */
sap.ui.commons.ImageMap.prototype.exit = function() {
	// Remove the item navigation delegate
	if (this.oItemNavigation) {
		if (!!sap.ui.Device.browser.internet_explorer) {
			for ( var i = 0; i < this.aImageControls.length; i++) {
				this.aImageControls[i].removeDelegate(this.oItemNavigation);
			}
		} else {
			this.removeDelegate(this.oItemNavigation);
		}
		this.oItemNavigation.destroy();
		delete this.oItemNavigation;
	}

	// No super.exit() to call
};