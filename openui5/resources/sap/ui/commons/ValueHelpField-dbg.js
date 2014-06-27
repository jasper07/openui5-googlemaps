/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ValueHelpField.
jQuery.sap.declare("sap.ui.commons.ValueHelpField");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.TextField");


/**
 * Constructor for a new ValueHelpField.
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
 * <li>{@link #getIconURL iconURL} : sap.ui.core.URI</li>
 * <li>{@link #getIconHoverURL iconHoverURL} : sap.ui.core.URI</li>
 * <li>{@link #getIconDisabledURL iconDisabledURL} : sap.ui.core.URI</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.ValueHelpField#event:valueHelpRequest valueHelpRequest} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.TextField#constructor sap.ui.commons.TextField}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A TextField with an attached icon which triggeres an event.
 * @extends sap.ui.commons.TextField
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.ValueHelpField
 */
sap.ui.commons.TextField.extend("sap.ui.commons.ValueHelpField", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"iconURL" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"iconHoverURL" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"iconDisabledURL" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null}
	},
	events : {
		"valueHelpRequest" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.ValueHelpField with name <code>sClassName</code> 
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
 * @name sap.ui.commons.ValueHelpField.extend
 * @function
 */

sap.ui.commons.ValueHelpField.M_EVENTS = {'valueHelpRequest':'valueHelpRequest'};


/**
 * Getter for property <code>iconURL</code>.
 * Url of the standard icon for the value help. If no parameter is supplied the default icon image will be shown.
 * This can be an URI to an image or an icon font URI.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconURL</code>
 * @public
 * @name sap.ui.commons.ValueHelpField#getIconURL
 * @function
 */

/**
 * Setter for property <code>iconURL</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconURL  new value for property <code>iconURL</code>
 * @return {sap.ui.commons.ValueHelpField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ValueHelpField#setIconURL
 * @function
 */


/**
 * Getter for property <code>iconHoverURL</code>.
 * URL of the icon for the value help when hovered. If no parameter is supplied the standard icon image will be shown.
 * If a icon font icon is used, this property is ignored.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconHoverURL</code>
 * @public
 * @name sap.ui.commons.ValueHelpField#getIconHoverURL
 * @function
 */

/**
 * Setter for property <code>iconHoverURL</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconHoverURL  new value for property <code>iconHoverURL</code>
 * @return {sap.ui.commons.ValueHelpField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ValueHelpField#setIconHoverURL
 * @function
 */


/**
 * Getter for property <code>iconDisabledURL</code>.
 * URL of the icon for the value help when disabled. If no parameter is supplied the default icon image will be shown.
 * If a icon font icon is used, this property is ignored.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>iconDisabledURL</code>
 * @public
 * @name sap.ui.commons.ValueHelpField#getIconDisabledURL
 * @function
 */

/**
 * Setter for property <code>iconDisabledURL</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIconDisabledURL  new value for property <code>iconDisabledURL</code>
 * @return {sap.ui.commons.ValueHelpField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ValueHelpField#setIconDisabledURL
 * @function
 */


/**
 * Event which is fired when the ValueHelp is requested. 
 *
 * @name sap.ui.commons.ValueHelpField#valueHelpRequest
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'valueHelpRequest' event of this <code>sap.ui.commons.ValueHelpField</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.ValueHelpField</code>.<br/> itself. 
 *  
 * Event which is fired when the ValueHelp is requested. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.ValueHelpField</code>.<br/> itself.
 *
 * @return {sap.ui.commons.ValueHelpField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ValueHelpField#attachValueHelpRequest
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'valueHelpRequest' event of this <code>sap.ui.commons.ValueHelpField</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.ValueHelpField} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ValueHelpField#detachValueHelpRequest
 * @function
 */

/**
 * Fire event valueHelpRequest to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ValueHelpField} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.ValueHelpField#fireValueHelpRequest
 * @function
 */


// Start of sap\ui\commons\ValueHelpField.js
jQuery.sap.require("sap.ui.core.theming.Parameters");
jQuery.sap.require("sap.ui.core.IconPool");

sap.ui.commons.ValueHelpField.prototype.onBeforeRendering = function(){
	var sIcon = sap.ui.core.theming.Parameters.get('sap.ui.commons.ValueHelpField:sapUiValueHelpIconDsblUrl');
	this.sIconDsblUrl = jQuery.sap.getModulePath("sap.ui.commons", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + sIcon;

	sIcon = sap.ui.core.theming.Parameters.get('sap.ui.commons.ValueHelpField:sapUiValueHelpIconRegularUrl');
	this.sIconRegularUrl = jQuery.sap.getModulePath("sap.ui.commons", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + sIcon;
	
	sIcon = sap.ui.core.theming.Parameters.get('sap.ui.commons.ValueHelpField:sapUiValueHelpIconHoverUrl');
	this.sIconHoverUrl = jQuery.sap.getModulePath("sap.ui.commons", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + sIcon;
};

sap.ui.commons.ValueHelpField.prototype.onmouseover = function (oEvent) {

	if (oEvent.target.id == this.getId() + '-icon' && this.getEnabled() && this.getEditable() && !this.bIsIconURI) {
		if (this.getIconHoverURL()) {
			this.sIconHoverUrl = this.getIconHoverURL();
		} else if (this.getIconURL()) {
			this.sIconHoverUrl = this.sIconRegularUrl;
		} else {
			var sIcon = sap.ui.core.theming.Parameters.get('sap.ui.commons.ValueHelpField:sapUiValueHelpIconHoverUrl');
			this.sIconHoverUrl = jQuery.sap.getModulePath("sap.ui.commons", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + sIcon;
		}
		var oIcon = jQuery.sap.byId(oEvent.target.id);
		oIcon.attr( 'src', this.sIconHoverUrl );
	}
};

sap.ui.commons.ValueHelpField.prototype.onmouseout = function (oEvent) {
	if (oEvent.target.id == this.getId() + '-icon' && this.getEnabled() && this.getEditable() && !this.bIsIconURI) {
		var oIcon = jQuery.sap.byId(oEvent.target.id);
		oIcon.attr( 'src', this.sIconRegularUrl );
	}
};

sap.ui.commons.ValueHelpField.prototype.onclick = function(oEvent){
if (oEvent.target.id == this.getId() + '-icon' && this.getEnabled() && this.getEditable()) {
		this.fireValueHelpRequest({/* no parameters */});
	}
};

sap.ui.commons.ValueHelpField.prototype.setEnabled = function(bEnabled) {
	var bOldEnabled = this.getEnabled();
	sap.ui.commons.TextField.prototype.setEnabled.apply(this, arguments);

	if (this.getDomRef() && bOldEnabled != bEnabled && !this.bIsIconURI) {
		var oIcon = this.$("icon");
		if (bEnabled) {
			oIcon.attr( 'src', this.sIconRegularUrl );
			oIcon.removeClass('sapUiTfValueHelpDsblIcon');
			oIcon.addClass('sapUiTfValueHelpRegularIcon');
		} else {
			oIcon.attr( 'src', this.sIconRegularUrl );
			oIcon.removeClass('sapUiTfValueHelpRegularIcon');
			oIcon.addClass('sapUiTfValueHelpDsblIcon');
		}
	}
};

sap.ui.commons.ValueHelpField.prototype.setEditable = function(bEditable) {
	var bOldEditable = this.getEditable();
	sap.ui.commons.TextField.prototype.setEditable.apply(this, arguments);

	if (this.getDomRef() && bOldEditable != bEditable && !this.bIsIconURI) {
		var oIcon = this.$("icon");
		if (bEditable) {
			oIcon.removeClass('sapUiTfValueHelpDsblIcon');
			oIcon.addClass('sapUiTfValueHelpRegularIcon');
		} else {
			oIcon.removeClass('sapUiTfValueHelpRegularIcon');
			oIcon.addClass('sapUiTfValueHelpDsblIcon');
		}
	}
};

/**
 * Handle F4 event
 * @param {jQuery.Event} oEvent the occurring event
 * @protected
 */
sap.ui.commons.ValueHelpField.prototype.onsapshow = function(oEvent) {
	this._checkChange(oEvent);
	this.fireValueHelpRequest({/* no parameters */});
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/*
 * Extends the method inherited from sap.ui.core.Element by providing information on Search Help access
 *
 * @return {string} string tooltip or undefined
 * @public
 */
sap.ui.commons.ValueHelpField.prototype.getTooltip_AsString = function() {
	var sTooltipString = sap.ui.commons.TextField.prototype.getTooltip_AsString.apply(this, arguments);
	if (this.getEnabled() && this.getEditable()) {
		var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
		// ResourceBundle always returns the key if the text is not found
		var sSearchHelp = rb.getText("DDBX_SHI_ARIA");
		sSearchHelp = sSearchHelp === "DDBX_SHI_ARIA"?"Open search help via {0}":sSearchHelp;
		sSearchHelp = sSearchHelp.replace("{0}", rb.getText("DDBX_SHIF4"));
		return (sTooltipString?sTooltipString + " - ":"") + sSearchHelp;
	} else {
		return sTooltipString;
	}
};

/**
 * Called after the theme has been switched. Some adjustments required.
 * @private
 */
sap.ui.commons.ValueHelpField.prototype.onThemeChanged = function (oEvent) {
	if(this.getDomRef()){
		this.invalidate();
	}
};

sap.ui.commons.ValueHelpField.prototype.exit = function(){
	this.sIconRegularUrl = undefined;
	this.sIconHoverUrl = undefined;
	this.sIconDsblUrl = undefined;
};