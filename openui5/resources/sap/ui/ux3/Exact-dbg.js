/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.Exact.
jQuery.sap.declare("sap.ui.ux3.Exact");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Exact.
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
 * <li>{@link #getResultText resultText} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSettingsMenu settingsMenu} : sap.ui.commons.Menu</li>
 * <li>{@link #getAttributes attributes} <strong>(default aggregation)</strong> : sap.ui.ux3.ExactAttribute[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.Exact#event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.Exact#event:refineSearch refineSearch} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A comprehensive UI design approach with graphical and functional elements for searching data, exploring data, and acting on the data
 * ("Explore and Act (Exact) Pattern").
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @experimental Since version 1.2. 
 * API is not yet finished and might change completely
 * @name sap.ui.ux3.Exact
 */
sap.ui.core.Control.extend("sap.ui.ux3.Exact", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"getResultArea", "getSearchField"
	],

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"resultText" : {type : "string", group : "Misc", defaultValue : null}
	},
	defaultAggregation : "attributes",
	aggregations : {
    	"settingsMenu" : {type : "sap.ui.commons.Menu", multiple : false}, 
    	"attributes" : {type : "sap.ui.ux3.ExactAttribute", multiple : true, singularName : "attribute"}, 
    	"controls" : {type : "sap.ui.core.Control", multiple : true, singularName : "control", visibility : "hidden"}
	},
	events : {
		"search" : {}, 
		"refineSearch" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.Exact with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.Exact.extend
 * @function
 */

sap.ui.ux3.Exact.M_EVENTS = {'search':'search','refineSearch':'refineSearch'};


/**
 * Getter for property <code>resultText</code>.
 * A title text which is displayed above the result section
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>resultText</code>
 * @public
 * @name sap.ui.ux3.Exact#getResultText
 * @function
 */

/**
 * Setter for property <code>resultText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sResultText  new value for property <code>resultText</code>
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Exact#setResultText
 * @function
 */


/**
 * Getter for aggregation <code>settingsMenu</code>.<br/>
 * Defines the 'Settings' button in the browse section tool bar
 * 
 * @return {sap.ui.commons.Menu}
 * @public
 * @name sap.ui.ux3.Exact#getSettingsMenu
 * @function
 */


/**
 * Setter for the aggregated <code>settingsMenu</code>.
 * @param {sap.ui.commons.Menu} oSettingsMenu
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Exact#setSettingsMenu
 * @function
 */
	

/**
 * Destroys the settingsMenu in the aggregation 
 * named <code>settingsMenu</code>.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Exact#destroySettingsMenu
 * @function
 */


/**
 * Getter for aggregation <code>attributes</code>.<br/>
 * The attributes which shall be available to refine the search
 * 
 * <strong>Note</strong>: this is the default aggregation for Exact.
 * @return {sap.ui.ux3.ExactAttribute[]}
 * @public
 * @name sap.ui.ux3.Exact#getAttributes
 * @function
 */


/**
 * Inserts a attribute into the aggregation named <code>attributes</code>.
 *
 * @param {sap.ui.ux3.ExactAttribute}
 *          oAttribute the attribute to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the attribute should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the attribute is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the attribute is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Exact#insertAttribute
 * @function
 */

/**
 * Adds some attribute <code>oAttribute</code> 
 * to the aggregation named <code>attributes</code>.
 *
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Exact#addAttribute
 * @function
 */

/**
 * Removes an attribute from the aggregation named <code>attributes</code>.
 *
 * @param {int | string | sap.ui.ux3.ExactAttribute} vAttribute the attribute to remove or its index or id
 * @return {sap.ui.ux3.ExactAttribute} the removed attribute or null
 * @public
 * @name sap.ui.ux3.Exact#removeAttribute
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>attributes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.ExactAttribute[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.Exact#removeAllAttributes
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.ExactAttribute</code> in the aggregation named <code>attributes</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.ExactAttribute}
 *            oAttribute the attribute whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.Exact#indexOfAttribute
 * @function
 */
	

/**
 * Destroys all the attributes in the aggregation 
 * named <code>attributes</code>.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Exact#destroyAttributes
 * @function
 */


/**
 * Event is fired when the search button is clicked 
 *
 * @name sap.ui.ux3.Exact#search
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.query The query string which was entered in the search field.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'search' event of this <code>sap.ui.ux3.Exact</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Exact</code>.<br/> itself. 
 *  
 * Event is fired when the search button is clicked 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Exact</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Exact#attachSearch
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'search' event of this <code>sap.ui.ux3.Exact</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Exact#detachSearch
 * @function
 */

/**
 * Fire event search to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> The query string which was entered in the search field.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.Exact#fireSearch
 * @function
 */


/**
 * Event which is fired when an attribute is selected or unselected. 
 *
 * @name sap.ui.ux3.Exact#refineSearch
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.query The query string which was entered in the search field
 * @param {sap.ui.ux3.ExactAttribute} oControlEvent.getParameters.changedAttribute The attribute which was selected or unselected recently
 * @param {object} oControlEvent.getParameters.allSelectedAttributes Array of all selected ExcatAttribute.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'refineSearch' event of this <code>sap.ui.ux3.Exact</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Exact</code>.<br/> itself. 
 *  
 * Event which is fired when an attribute is selected or unselected. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Exact</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Exact#attachRefineSearch
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'refineSearch' event of this <code>sap.ui.ux3.Exact</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Exact#detachRefineSearch
 * @function
 */

/**
 * Fire event refineSearch to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'query' of type <code>string</code> The query string which was entered in the search field</li>
 * <li>'changedAttribute' of type <code>sap.ui.ux3.ExactAttribute</code> The attribute which was selected or unselected recently</li>
 * <li>'allSelectedAttributes' of type <code>object</code> Array of all selected ExcatAttribute.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Exact} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.Exact#fireRefineSearch
 * @function
 */


/**
 * Returns the ExactArea representing the result section. Arbitrary content can be added here.
 *
 * @name sap.ui.ux3.Exact.prototype.getResultArea
 * @function

 * @type sap.ui.ux3.ExactArea
 * @public
 */


/**
 * Returns the SearchField control which is used by the Exact control.
 *
 * @name sap.ui.ux3.Exact.prototype.getSearchField
 * @function

 * @type sap.ui.commons.SearchField
 * @public
 */


// Start of sap\ui\ux3\Exact.js
jQuery.sap.require("sap.ui.ux3.ExactArea");
jQuery.sap.require("sap.ui.ux3.ExactAttribute");
jQuery.sap.require("sap.ui.ux3.ExactBrowser");
jQuery.sap.require("sap.ui.commons.SearchField");
jQuery.sap.require("sap.ui.commons.Button");
jQuery.sap.require("sap.ui.commons.Menu");
jQuery.sap.require("sap.ui.commons.TextView");


(function() {

/**
 * Does the setup when the Exact is created.
 * @private
 */
sap.ui.ux3.Exact.prototype.init = function(){
	var that = this;

	//Init the used subcontrols
	//Init Search Area
	this._searchArea = new sap.ui.ux3.ExactArea(this.getId()+"-searchArea", {toolbarVisible: false});
	this._searchArea.addStyleClass("sapUiUx3ExactSearchArea");
	this.addAggregation("controls", this._searchArea);

	this._search_input = new sap.ui.commons.SearchField(this.getId()+"-searchTF", {enableListSuggest: false});
	this._search_input.attachSearch(function(oEvent){
		_handleSearch(that, oEvent);
	});
	this._search_input.addStyleClass("sapUiUx3ExactSearchText");
	this._searchArea.addContent(this._search_input);

	//Init Browse Area
	this._browser = new sap.ui.ux3.ExactBrowser(this.getId()+"-browser", {title: "Attributes"}); //TODO: I18n
	this._browser.addStyleClass("sapUiUx3ExactBrowseArea");
	this.addAggregation("controls", this._browser);
	this._browser.attachAttributeSelected(function(oEvent){
		_handleAttributeSelected(that, oEvent);
	});

	//Init Result Area
	this._resultArea = new sap.ui.ux3.ExactArea(this.getId()+"-resultArea");
	this.addAggregation("controls", this._resultArea);

	this._resultText = new sap.ui.commons.TextView(this.getId()+"-resultAreaTitle", {design: sap.ui.commons.TextViewDesign.Bold});
	this._resultText.addStyleClass("sapUiUx3ExactViewTitle");
	this.addAggregation("controls", this._resultText);

	this._bDetailsVisible = false;
};


//*** Overridden API functions ***


sap.ui.ux3.Exact.prototype.getSettingsMenu = function() {
	return this._browser.getOptionsMenu();
};


sap.ui.ux3.Exact.prototype.setSettingsMenu = function(oSettingsMenu) {
	this._browser.setOptionsMenu(oSettingsMenu);
	return this;
};


sap.ui.ux3.Exact.prototype.destroySettingsMenu = function() {
	this._browser.destroyOptionsMenu();
	return this;
};


sap.ui.ux3.Exact.prototype.getResultText = function() {
	return this._resultText.getText();
};


sap.ui.ux3.Exact.prototype.setResultText = function(sResultText) {
	this._resultText.setText(sResultText);
	return this;
};


sap.ui.ux3.Exact.prototype.getAttributes = function() {
	return this._browser.getAttributes();
};


sap.ui.ux3.Exact.prototype.insertAttribute = function(oAttribute, iIndex) {
	this._browser.insertAttribute(oAttribute, iIndex);
	return this;
};


sap.ui.ux3.Exact.prototype.addAttribute = function(oAttribute) {
	this._browser.addAttribute(oAttribute);
	return this;
};


sap.ui.ux3.Exact.prototype.removeAttribute = function(vElement) {
	return this._browser.removeAttribute(vElement);
};


sap.ui.ux3.Exact.prototype.removeAllAttributes = function() {
	return this._browser.removeAllAttributes();
};


sap.ui.ux3.Exact.prototype.indexOfAttribute = function(oAttribute) {
	return this._browser.indexOfAttribute(oAttribute);
};


sap.ui.ux3.Exact.prototype.destroyAttributes = function() {
	this._browser.destroyAttributes();
	return this;
};


sap.ui.ux3.Exact.prototype.getResultArea = function() {
	return this._resultArea;
};

sap.ui.ux3.Exact.prototype.getSearchField = function() {
	return this._search_input;
};


//*** Behavior functions ***





//*** Private helper functions ***


//Handles the search event
var _handleSearch = function(oThis, oEvent){
	oThis._sSearchQuery = oEvent.getParameter("query"); //Store the value until next Search
	oThis.fireSearch({query: oThis._sSearchQuery});
	oThis._bDetailsVisible = true;
	oThis.invalidate();
};


//Handles attribute selections
var _handleAttributeSelected = function(oThis, oEvent){
	oThis.fireRefineSearch({
		query: oThis._sSearchQuery,
		changedAttribute: oEvent.getParameter("attribute"),
		allSelectedAttributes: oEvent.getParameter("allAttributes")
	});
};


}());