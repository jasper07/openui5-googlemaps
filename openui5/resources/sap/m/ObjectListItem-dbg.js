/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ObjectListItem.
jQuery.sap.declare("sap.m.ObjectListItem");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.ListItemBase");


/**
 * Constructor for a new ObjectListItem.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getNumber number} : string</li>
 * <li>{@link #getNumberUnit numberUnit} : string</li>
 * <li>{@link #getIntro intro} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getActiveIcon activeIcon} : sap.ui.core.URI</li>
 * <li>{@link #getIconDensityAware iconDensityAware} : boolean (default: true)</li>
 * <li>{@link #getMarkFavorite markFavorite} : boolean</li>
 * <li>{@link #getMarkFlagged markFlagged} : boolean</li>
 * <li>{@link #getShowMarkers showMarkers} : boolean</li>
 * <li>{@link #getNumberState numberState} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAttributes attributes} <strong>(default aggregation)</strong> : sap.m.ObjectAttribute[]</li>
 * <li>{@link #getFirstStatus firstStatus} : sap.m.ObjectStatus</li>
 * <li>{@link #getSecondStatus secondStatus} : sap.m.ObjectStatus</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ListItemBase#constructor sap.m.ListItemBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * ObjectListItem is a display control that provides summary information about an object as an item in a list. The object list item title is the key identifier of the object. Additional text and icons can be used to further distinguish it from other objects. Attributes and statuses can be used to provide additional meaning about the object to the user.
 * @extends sap.m.ListItemBase
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.12
 * @name sap.m.ObjectListItem
 */
sap.m.ListItemBase.extend("sap.m.ObjectListItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"number" : {type : "string", group : "Misc", defaultValue : null},
		"numberUnit" : {type : "string", group : "Misc", defaultValue : null},
		"intro" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"activeIcon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"iconDensityAware" : {type : "boolean", group : "Misc", defaultValue : true},
		"markFavorite" : {type : "boolean", group : "Misc", defaultValue : null},
		"markFlagged" : {type : "boolean", group : "Misc", defaultValue : null},
		"showMarkers" : {type : "boolean", group : "Misc", defaultValue : null},
		"numberState" : {type : "sap.ui.core.ValueState", group : "Misc", defaultValue : sap.ui.core.ValueState.None}
	},
	defaultAggregation : "attributes",
	aggregations : {
    	"attributes" : {type : "sap.m.ObjectAttribute", multiple : true, singularName : "attribute"}, 
    	"firstStatus" : {type : "sap.m.ObjectStatus", multiple : false}, 
    	"secondStatus" : {type : "sap.m.ObjectStatus", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.m.ObjectListItem with name <code>sClassName</code> 
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
 * @name sap.m.ObjectListItem.extend
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Object list item title
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.ObjectListItem#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setTitle
 * @function
 */


/**
 * Getter for property <code>number</code>.
 * Object list item number
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>number</code>
 * @public
 * @name sap.m.ObjectListItem#getNumber
 * @function
 */

/**
 * Setter for property <code>number</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumber  new value for property <code>number</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setNumber
 * @function
 */


/**
 * Getter for property <code>numberUnit</code>.
 * The number units qualifier of the object list item
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>numberUnit</code>
 * @public
 * @name sap.m.ObjectListItem#getNumberUnit
 * @function
 */

/**
 * Setter for property <code>numberUnit</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sNumberUnit  new value for property <code>numberUnit</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setNumberUnit
 * @function
 */


/**
 * Getter for property <code>intro</code>.
 * Introductory text for the object list item.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>intro</code>
 * @public
 * @name sap.m.ObjectListItem#getIntro
 * @function
 */

/**
 * Setter for property <code>intro</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIntro  new value for property <code>intro</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setIntro
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Object list item icon displayed to the left of the title.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.m.ObjectListItem#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setIcon
 * @function
 */


/**
 * Getter for property <code>activeIcon</code>.
 * Icon displayed when the object list item is active.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>activeIcon</code>
 * @public
 * @name sap.m.ObjectListItem#getActiveIcon
 * @function
 */

/**
 * Setter for property <code>activeIcon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sActiveIcon  new value for property <code>activeIcon</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setActiveIcon
 * @function
 */


/**
 * Getter for property <code>iconDensityAware</code>.
 * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * 
 * If bandwidth is the key for the application, set this value to false.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>iconDensityAware</code>
 * @public
 * @name sap.m.ObjectListItem#getIconDensityAware
 * @function
 */

/**
 * Setter for property <code>iconDensityAware</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconDensityAware  new value for property <code>iconDensityAware</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setIconDensityAware
 * @function
 */


/**
 * Getter for property <code>markFavorite</code>.
 * Set the favorite state for the object list item
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>markFavorite</code>
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectListItem#getMarkFavorite
 * @function
 */

/**
 * Setter for property <code>markFavorite</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bMarkFavorite  new value for property <code>markFavorite</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectListItem#setMarkFavorite
 * @function
 */


/**
 * Getter for property <code>markFlagged</code>.
 * Set the flagged state for the object list item
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>markFlagged</code>
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectListItem#getMarkFlagged
 * @function
 */

/**
 * Setter for property <code>markFlagged</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bMarkFlagged  new value for property <code>markFlagged</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectListItem#setMarkFlagged
 * @function
 */


/**
 * Getter for property <code>showMarkers</code>.
 * Set to true if the object list item can be marked with icons such as favorite and flag.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>showMarkers</code>
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectListItem#getShowMarkers
 * @function
 */

/**
 * Setter for property <code>showMarkers</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bShowMarkers  new value for property <code>showMarkers</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectListItem#setShowMarkers
 * @function
 */


/**
 * Getter for property <code>numberState</code>.
 * Object list item number and numberUnit value state.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>numberState</code>
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectListItem#getNumberState
 * @function
 */

/**
 * Setter for property <code>numberState</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oNumberState  new value for property <code>numberState</code>
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.0
 * @name sap.m.ObjectListItem#setNumberState
 * @function
 */


/**
 * Getter for aggregation <code>attributes</code>.<br/>
 * List of attributes displayed below the title to the left of the status fields.
 * 
 * <strong>Note</strong>: this is the default aggregation for ObjectListItem.
 * @return {sap.m.ObjectAttribute[]}
 * @public
 * @name sap.m.ObjectListItem#getAttributes
 * @function
 */


/**
 * Inserts a attribute into the aggregation named <code>attributes</code>.
 *
 * @param {sap.m.ObjectAttribute}
 *          oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the attribute should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the attribute is inserted at 
 *             the last position        
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#insertAttribute
 * @function
 */

/**
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 *
 * @param {sap.m.ObjectAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#addAttribute
 * @function
 */

/**
 * Removes an attribute from the aggregation named <code>attributes</code>.
 *
 * @param {int | string | sap.m.ObjectAttribute} vAttribute the attribute to remove or its index or id
 * @return {sap.m.ObjectAttribute} the removed attribute or null
 * @public
 * @name sap.m.ObjectListItem#removeAttribute
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.ObjectAttribute[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.ObjectListItem#removeAllAttributes
 * @function
 */

/**
 * Checks for the provided <code>sap.m.ObjectAttribute</code> in the aggregation named <code>attributes</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.ObjectAttribute}
 *            oAttribute the attribute whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.ObjectListItem#indexOfAttribute
 * @function
 */
	

/**
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#destroyAttributes
 * @function
 */


/**
 * Getter for aggregation <code>firstStatus</code>.<br/>
 * First status text field shown on the right side of the attributes.
 * 
 * @return {sap.m.ObjectStatus}
 * @public
 * @name sap.m.ObjectListItem#getFirstStatus
 * @function
 */


/**
 * Setter for the aggregated <code>firstStatus</code>.
 * @param {sap.m.ObjectStatus} oFirstStatus
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setFirstStatus
 * @function
 */
	

/**
 * Destroys the firstStatus in the aggregation 
 * named <code>firstStatus</code>.
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#destroyFirstStatus
 * @function
 */


/**
 * Getter for aggregation <code>secondStatus</code>.<br/>
 * Second status text field shown on the right side of the attributes.
 * 
 * @return {sap.m.ObjectStatus}
 * @public
 * @name sap.m.ObjectListItem#getSecondStatus
 * @function
 */


/**
 * Setter for the aggregated <code>secondStatus</code>.
 * @param {sap.m.ObjectStatus} oSecondStatus
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#setSecondStatus
 * @function
 */
	

/**
 * Destroys the secondStatus in the aggregation 
 * named <code>secondStatus</code>.
 * @return {sap.m.ObjectListItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ObjectListItem#destroySecondStatus
 * @function
 */


// Start of sap\m\ObjectListItem.js
///**
// * This file defines behavior for the control,
// */

jQuery.sap.require("sap.ui.core.IconPool");

/**
 * @private
 */
sap.m.ObjectListItem.prototype.exit = function(oEvent) {
	// image or icon if initialized
	if (this._oImageControl) {
		this._oImageControl.destroy();
	}
	
	if (this._oPlaceholderIcon) {
		this._oPlaceholderIcon.destroy();
		this._oPlaceholderIcon = undefined;
	}

	if (this._oFavIcon) {
		this._oFavIcon.destroy();
		this._oFavIcon = undefined;
	}
	
	if (this._oFlagIcon) {
		this._oFlagIcon.destroy();
		this._oFlagIcon = undefined;
	}	
	
	if(this._oTitleText){
		this._oTitleText.destroy();
		this._oTitleText = undefined;
	}
	
	sap.m.ListItemBase.prototype.exit.apply(this);
};

/**
 * @private
 * @returns {boolean}
 */
sap.m.ObjectListItem.prototype._hasAttributes = function() {
	var attributes = this.getAttributes(); 
	if(attributes.length > 0) {
		for(var i=0; i < attributes.length; i++) {
			if(!attributes[i]._isEmpty()) {
				return true;
			}
		}
	}
	return false;
};

/**
 * @private
 * @returns {boolean}
 */
sap.m.ObjectListItem.prototype._hasStatus = function() {
	return ((this.getFirstStatus() && !this.getFirstStatus()._isEmpty())
			|| (this.getSecondStatus() && !this.getSecondStatus()._isEmpty() ));
};

/**
 * @private
 * @returns {boolean}
 */
sap.m.ObjectListItem.prototype._hasBottomContent = function() {
	
	return (this._hasAttributes() || this._hasStatus() || this.getShowMarkers());
};

/**
 * @private
 * @returns {Array}
 */
sap.m.ObjectListItem.prototype._getVisibleAttributes = function() {

	var aAllAttributes = this.getAttributes();
	var aVisibleAttributes = [];

	for (var i=0; i < aAllAttributes.length; i++) {
		if(aAllAttributes[i].getVisible()){
			aVisibleAttributes.push(aAllAttributes[i]);
		}
	};

	return aVisibleAttributes;
};

/**
 * Lazy load list item's image.
 *
 * @private
 */
sap.m.ObjectListItem.prototype._getImageControl = function() {

	var sImgId = this.getId() + '-img';
	var sSize = "2.5rem";
	var mProperties = { 
		src : this.getIcon(),
		height : sSize,
		width : sSize,
		size: sSize,
		densityAware : this.getIconDensityAware()
	};
	var aCssClasses = ['sapMObjLIcon'];
	
	this._oImageControl = sap.m.ImageHelper.getImageControl(sImgId, this._oImageControl, this, mProperties, aCssClasses);
	
	return this._oImageControl;
};

/**
 * Overwrite base method to hook into list item's active handling
 * 
 * @private
 */
sap.m.ObjectListItem.prototype._activeHandlingInheritor = function() {
	var sActiveSrc = this.getActiveIcon();
	
	if(!!this._oImageControl  && !!sActiveSrc) {
		this._oImageControl.setSrc(sActiveSrc);
	}	
};

/**
 * Overwrite base method to hook into list item's inactive handling
 * 
 * @private
 */
sap.m.ObjectListItem.prototype._inactiveHandlingInheritor = function() {
	var sSrc = this.getIcon();
	if(!!this._oImageControl) {
		this._oImageControl.setSrc(sSrc);
	}	
};

/**
 * @private
 * @returns Flag icon control
 */
//TODO Remove placeholder when Safari iconFont issue is addressed.
sap.m.ObjectListItem.prototype._getPlaceholderIcon = function() {
	
	if(!this._oPlaceholderIcon) {

		var oPlaceholderIconUri = sap.ui.core.IconPool.getIconURI("fridge");
		this._oPlaceholderIcon = sap.ui.core.IconPool.createControlByURI({
			id: this.getId() + "-placeholder",
			src: oPlaceholderIconUri
		});
		
		this._oPlaceholderIcon.addStyleClass("sapMObjStatusMarkerInvisible");
	}	
	return this._oPlaceholderIcon;
};

/**
 * @private
 * @returns Flag icon control
 */
sap.m.ObjectListItem.prototype._getFlagIcon = function() {
	
	if(!this._oFlagIcon) {

		var oFlagIconUri = sap.ui.core.IconPool.getIconURI("flag");
		this._oFlagIcon = sap.ui.core.IconPool.createControlByURI({
			id: this.getId() + "-flag",
			src: oFlagIconUri
		});
	}	
	return this._oFlagIcon;
};

/**
 * @private
 * @returns Favorite icon control
 */
sap.m.ObjectListItem.prototype._getFavoriteIcon = function() {
	
	if(!this._oFavIcon) {

	    var oFavIconUri = sap.ui.core.IconPool.getIconURI("favorite");
	    this._oFavIcon = sap.ui.core.IconPool.createControlByURI({
	           id: this.getId() + "-favorite",
	           src: oFavIconUri
	    });	
	}
	return this._oFavIcon;
};

/**
 * @private
 * @returns title text control
 */
sap.m.ObjectListItem.prototype._getTitleText = function() {
	
	if(!this._oTitleText) {
		this._oTitleText = new sap.m.Text(this.getId() + "-titleText", {
			maxLines: 2
		});
	}
	return this._oTitleText;
};