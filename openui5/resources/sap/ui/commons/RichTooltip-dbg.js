/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.RichTooltip.
jQuery.sap.declare("sap.ui.commons.RichTooltip");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.TooltipBase");


/**
 * Constructor for a new RichTooltip.
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
 * <li>{@link #getImageSrc imageSrc} : sap.ui.core.URI</li>
 * <li>{@link #getValueStateText valueStateText} : string</li>
 * <li>{@link #getImageAltText imageAltText} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.TooltipBase#constructor sap.ui.core.TooltipBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * 
 * Is used to provide tool tips that can have long text, image and title. This tool tip extends the TooltipBase.
 * 
 * @extends sap.ui.core.TooltipBase
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.RichTooltip
 */
sap.ui.core.TooltipBase.extend("sap.ui.commons.RichTooltip", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"title" : {type : "string", group : "Misc", defaultValue : null},
		"imageSrc" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"valueStateText" : {type : "string", group : "Misc", defaultValue : null},
		"imageAltText" : {type : "string", group : "Misc", defaultValue : null}
	},
	aggregations : {
    	"formattedText" : {type : "sap.ui.commons.FormattedTextView", multiple : false, visibility : "hidden"}, 
    	"individualStateText" : {type : "sap.ui.commons.FormattedTextView", multiple : false, visibility : "hidden"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.RichTooltip with name <code>sClassName</code> 
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
 * @name sap.ui.commons.RichTooltip.extend
 * @function
 */


/**
 * Getter for property <code>title</code>.
 * Tool tip title to be displayed in the header.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.ui.commons.RichTooltip#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.commons.RichTooltip} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RichTooltip#setTitle
 * @function
 */


/**
 * Getter for property <code>imageSrc</code>.
 * If RichTooltip contains an image, this property is used to define the source path.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>imageSrc</code>
 * @public
 * @name sap.ui.commons.RichTooltip#getImageSrc
 * @function
 */

/**
 * Setter for property <code>imageSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sImageSrc  new value for property <code>imageSrc</code>
 * @return {sap.ui.commons.RichTooltip} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.RichTooltip#setImageSrc
 * @function
 */


/**
 * Getter for property <code>valueStateText</code>.
 * This property is an individual text that will be used instead of the default ValueState text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>valueStateText</code>
 * @public
 * @since 1.11.1
 * @name sap.ui.commons.RichTooltip#getValueStateText
 * @function
 */

/**
 * Setter for property <code>valueStateText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sValueStateText  new value for property <code>valueStateText</code>
 * @return {sap.ui.commons.RichTooltip} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.1
 * @name sap.ui.commons.RichTooltip#setValueStateText
 * @function
 */


/**
 * Getter for property <code>imageAltText</code>.
 * This is the alt text for the image
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>imageAltText</code>
 * @public
 * @since 1.11.1
 * @name sap.ui.commons.RichTooltip#getImageAltText
 * @function
 */

/**
 * Setter for property <code>imageAltText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sImageAltText  new value for property <code>imageAltText</code>
 * @return {sap.ui.commons.RichTooltip} <code>this</code> to allow method chaining
 * @public
 * @since 1.11.1
 * @name sap.ui.commons.RichTooltip#setImageAltText
 * @function
 */


// Start of sap\ui\commons\RichTooltip.js
/**
 * Calculates the height of the RichTooltip to set a proper min-height.
 * Additionally the ARIA attributes are set to the corresponding elements.
 *
 * @public
 *
 */
sap.ui.commons.RichTooltip.prototype.onAfterRendering = function() {
	var oText = this.getAggregation("formattedText");
	if (oText && oText.getDomRef()) {
		// set a corresponding ARIA role if there is a text
		oText.$().attr("role", "tooltip");

		if (this.getImageSrc() !== "") {
			// if text and image are set a bigger min-width is needed
			this.$().addClass("sapUiRttContentWide");
		}
	}
};

/**
 * This sets an individual text for the ValueState of the parent element of the
 * RichTooltip.
 *
 * @param sText
 *            {sap.ui.core.string} the text that should be shown as individual
 *            ValueState text
 */
sap.ui.commons.RichTooltip.prototype.setValueStateText = function(sText) {
	var oValueStateText = this.getAggregation("individualStateText");
	if (sText) {
		if (oValueStateText) {
			oValueStateText.setProperty("htmlText", sText);
		} else {
			oValueStateText = new sap.ui.commons.FormattedTextView(this.getId() + "-valueStateText", {
				htmlText : sText
			}).addStyleClass("sapUiRttValueStateText").addStyleClass("individual");

			this.setAggregation("individualStateText", oValueStateText);
			this.setProperty("valueStateText", sText, true);
		}
	} else {
		if (oValueStateText) {
			this.setAggregation("individualStateText", oValueStateText);
		}
	}
};

/**
 * This returns the previously set text. Since a FormattedTextView is used for
 * rendering and stuff the corresponding property of the FormattedTextView is
 * being read and returned. If no text was set an empty string is being
 * returned.
 *
 * @returns {sap.ui.core.string} the ValueState text that was previously set.
 * @public
 */
sap.ui.commons.RichTooltip.prototype.getValueStateText = function() {
	var oValueStateText = this.getAggregation("individualStateText");
	if (oValueStateText) {
		return oValueStateText.getHtmlText();
	}
	return "";
};

/**
 * This overrides the function of TooltipBase to create a FormattedTextView that
 * should be used for rendering
 *
 * @override sap.ui.core.TooltipBase.setText
 * @param sText
 *            {sap.ui.core.string} the text that should be shown
 */
sap.ui.commons.RichTooltip.prototype.setText = function(sText) {
	if(!!sText){
		//replace carriage returns etc. with br tag
		sText = sText.replace(/(\r\n|\n|\r)/g,"<br />");
	}
	var oText = this.getAggregation("formattedText");
	if (oText) {
		oText.setProperty("htmlText", sText, true);
	} else {
		oText = new sap.ui.commons.FormattedTextView(this.getId() + "-txt", {
			htmlText : sText
		}).addStyleClass("sapUiRttText");
		this.setAggregation("formattedText", oText);
		oText.setProperty("htmlText", sText, true); 
		 this.setProperty("text", sText, true);
	}
};

/**
 * This returns the previously set text. Since a FormattedTextView is used for
 * rendering and stuff the corresponding property of the FormattedTextView is
 * being read and returned. If no text was set an empty string is being
 * returned.
 *
 * @returns {sap.ui.core.string} the text that was previously set.
 * @override TooltipBase.getText
 */
sap.ui.commons.RichTooltip.prototype.getText = function() {
	var oText = this.getAggregation("formattedText");
	if (oText) {
		return oText.getHtmlText();
	}
	return "";
};

sap.ui.commons.RichTooltip.prototype.onfocusin = function(oEvent) {
	sap.ui.core.TooltipBase.prototype.onfocusin.apply(this, arguments);

	var oSC = jQuery(oEvent.target).control(0);
	if (oSC != null) {
		var sId = this.getId();
		var sIds = "";

		if (this.getTitle() !== "") {
			sIds += sId + "-title ";
		}

		var $valueStateText = this.$("valueStateText");
		if ($valueStateText.length > 0) {
			sIds += sId + "-valueStateText ";
		}

		// alt image
		if (this.getImageSrc() !== "") {
			sIds += sId + "-image ";
		}

		//
		if (this.getText() !== "") {
			sIds += sId + "-txt";
		}

		var oDomRef = oSC.getFocusDomRef();
		oDomRef.setAttribute("aria-describedby", sIds);
	}
};
