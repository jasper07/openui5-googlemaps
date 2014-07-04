/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.FormattedTextView.
jQuery.sap.declare("sap.ui.commons.FormattedTextView");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new FormattedTextView.
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
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getAccessibleRole accessibleRole} : sap.ui.core.AccessibleRole (default: sap.ui.core.AccessibleRole.Document)</li>
 * <li>{@link #getHtmlText htmlText} : string (default: "")</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getControls controls} : sap.ui.commons.FormattedTextViewControl[]</li></ul>
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
 * Allows to use a limited set of HTML tags for display
 * 
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.9.0
 * @name sap.ui.commons.FormattedTextView
 */
sap.ui.core.Control.extend("sap.ui.commons.FormattedTextView", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"setContent"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"accessibleRole" : {type : "sap.ui.core.AccessibleRole", group : "Accessibility", defaultValue : sap.ui.core.AccessibleRole.Document},
		"htmlText" : {type : "string", group : "Misc", defaultValue : ""}
	},
	aggregations : {
    	"controls" : {type : "sap.ui.commons.FormattedTextViewControl", multiple : true, singularName : "control"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.FormattedTextView with name <code>sClassName</code> 
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
 * @name sap.ui.commons.FormattedTextView.extend
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Flag to suppress rendering of the FormattedTextView control
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.FormattedTextView#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.FormattedTextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormattedTextView#setVisible
 * @function
 */


/**
 * Getter for property <code>accessibleRole</code>.
 * The ARIA role for the control.
 *
 * Default value is <code>Document</code>
 *
 * @return {sap.ui.core.AccessibleRole} the value of property <code>accessibleRole</code>
 * @public
 * @name sap.ui.commons.FormattedTextView#getAccessibleRole
 * @function
 */

/**
 * Setter for property <code>accessibleRole</code>.
 *
 * Default value is <code>Document</code> 
 *
 * @param {sap.ui.core.AccessibleRole} oAccessibleRole  new value for property <code>accessibleRole</code>
 * @return {sap.ui.commons.FormattedTextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormattedTextView#setAccessibleRole
 * @function
 */


/**
 * Getter for property <code>htmlText</code>.
 * Text with placeholders
 *
 * Default value is <code>""</code>
 *
 * @return {string} the value of property <code>htmlText</code>
 * @public
 * @name sap.ui.commons.FormattedTextView#getHtmlText
 * @function
 */

/**
 * Setter for property <code>htmlText</code>.
 *
 * Default value is <code>""</code> 
 *
 * @param {string} sHtmlText  new value for property <code>htmlText</code>
 * @return {sap.ui.commons.FormattedTextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormattedTextView#setHtmlText
 * @function
 */


/**
 * Getter for aggregation <code>controls</code>.<br/>
 * Array of controls that should be replaced within htmlText
 * 
 * @return {sap.ui.commons.FormattedTextViewControl[]}
 * @public
 * @name sap.ui.commons.FormattedTextView#getControls
 * @function
 */


/**
 * Inserts a control into the aggregation named <code>controls</code>.
 *
 * @param {sap.ui.commons.FormattedTextViewControl}
 *          oControl the control to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the control should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the control is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the control is inserted at 
 *             the last position        
 * @return {sap.ui.commons.FormattedTextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormattedTextView#insertControl
 * @function
 */

/**
 * Adds some control <code>oControl</code> 
 * to the aggregation named <code>controls</code>.
 *
 * @param {sap.ui.commons.FormattedTextViewControl}
 *            oControl the control to add; if empty, nothing is inserted
 * @return {sap.ui.commons.FormattedTextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormattedTextView#addControl
 * @function
 */

/**
 * Removes an control from the aggregation named <code>controls</code>.
 *
 * @param {int | string | sap.ui.commons.FormattedTextViewControl} vControl the control to remove or its index or id
 * @return {sap.ui.commons.FormattedTextViewControl} the removed control or null
 * @public
 * @name sap.ui.commons.FormattedTextView#removeControl
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>controls</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.FormattedTextViewControl[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.FormattedTextView#removeAllControls
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.FormattedTextViewControl</code> in the aggregation named <code>controls</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.FormattedTextViewControl}
 *            oControl the control whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.FormattedTextView#indexOfControl
 * @function
 */
	

/**
 * Destroys all the controls in the aggregation 
 * named <code>controls</code>.
 * @return {sap.ui.commons.FormattedTextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.FormattedTextView#destroyControls
 * @function
 */


/**
 * Sets text with placeholders and given array of controls
 *
 * @name sap.ui.commons.FormattedTextView.prototype.setContent
 * @function
 * @param {string} 
 *         sHtmlText
 *         Contains the corresponding HTML-text
 * @param {sap.ui.commons.FormattedTextViewControl} 
 *         oControls
 *         Array of controls that should be used within given HTML-text

 * @type void
 * @public
 */


// Start of sap\ui\commons\FormattedTextView.js
jQuery.sap.require("jquery.sap.encoder");

(function() {
	sap.ui.commons.FormattedTextView.prototype.init = function() {
		this._aAllowedInterfaces = [];
		this._aAllowedInterfaces[0] = "sap.ui.commons.FormattedTextViewControl";

		/*
		 * these are the rules for the FormattedTextView
		 */
		this._ftv = {};

		// rules for the allowed attributes
		this._ftv.ATTRIBS = {
			'span::class' : 1,
			'div::class' : 1,
			'div::id' : 1,
			'span::id' : 1,
			'embed::data-index' : 1
		};

		// rules for the allowed tags
		this._ftv.ELEMENTS = {
			// Text Module Tags
			'abbr' : 1,
			'acronym' : 1,
			'address' : 1,
			'blockquote' : 1,
			'br' : 1,
			'cite' : 1,
			'code' : 1,
			'dfn' : 1,
			'div' : 1,
			'em' : 1,
			'h1' : 1,
			'h2' : 1,
			'h3' : 1,
			'h4' : 1,
			'h5' : 1,
			'h6' : 1,
			'kbd' : 1,
			'p' : 1,
			'pre' : 1,
			'q' : 1,
			'samp' : 1,
			'strong' : 1,
			'span' : 1,
			'var' : 1,

			// List Module Tags
			'dl' : 1,
			'dt' : 1,
			'dd' : 1,
			'ol' : 1,
			'ul' : 1,
			'li' : 1,

			// Special Tags
			// this is the placeholder for the controls
			'embed' : 1

		// TODO maybe add these tags (if someone really need this)
		// 'a' : 1, currently used via Link-Control
		// 'img' : 1, currently used via Image-Control
		};
	};
	sap.ui.commons.FormattedTextView.prototype.exit = function() {
		delete this._aAllowedInterfaces;

		delete this._ftv;
	};

	sap.ui.commons.FormattedTextView.prototype.hasControls = function() {
		var aControls = this.getAggregation("controls");
		if (aControls && aControls.length > 0) {
			return true;
		}
		return false;
	};

	/**
	 * Sanitizes attributes on an HTML tag.
	 *
	 * @private
	 * @param {string}
	 *            tagName An HTML tag name in lowercase.
	 * @param {Array.
	 *            <?string>} attribs An array of alternating names and values.
	 * @return {Array.<?string>} The sanitized attributes as a list of
	 *         alternating names and values, where a null value means to omit
	 *         the attribute.
	 */
	var fnSanitizeAttribs = function(tagName, attribs) {
		for ( var i = 0; i < attribs.length; i += 2) {
			// attribs[i] is the name of the tag's attribute.
			// attribs[i+1] is its corresponding value.
			// (i.e. <span class="foo"> -> attribs[i] = "class" | attribs[i+1] =
			// "foo")

			var sAttribKey = tagName + "::" + attribs[i];

			if (this._ftv.ATTRIBS[sAttribKey]) {
				// keep the value of this class
				if (tagName === "embed") {
					var intPattern = /^[0-9]*$/;
					if (!attribs[i + 1].match(intPattern)) {
						// attribs[i + 1] = null;
						return null;
					}
				}
			} else {
				var sWarning = '<' + tagName + '> with attribute [' + attribs[i] + '="' + attribs[i + 1] + '"] is not allowed and cut';
				jQuery.sap.log.warning(sWarning, this);

				// to remove this attribute by the sanitizer the value has to be
				// set to null
				attribs[i + 1] = null;
			}

		}
		return attribs;
	};

	/**
	 * Sanitizes HTML tags and attributes according to a given policy.
	 *
	 * @private
	 * @param {string}
	 *            inputHtml The HTML to sanitize.
	 * @param {function(string,
	 *            Array.<?string>)} tagPolicy A function that decides which
	 *            tags to accept and sanitizes their attributes (see
	 *            makeHtmlSanitizer above for details).
	 * @return {string} The sanitized HTML.
	 */
	var fnPolicy = function(tagName, attribs) {
		if (this._ftv.ELEMENTS[tagName]) {
			var proxiedSanatizedAttribs = jQuery.proxy(fnSanitizeAttribs, this);
			return proxiedSanatizedAttribs(tagName, attribs);
		} else {
			var sWarning = '<' + tagName + '> is not allowed and cut (and its content)';
			jQuery.sap.log.warning(sWarning, this);
		}
	};

	sap.ui.commons.FormattedTextView.prototype.setHtmlText = function(sText) {
		var sSanitizedText = "";

		// use a proxy for policy to access the control's private variables
		var fnProxiedPolicy = jQuery.proxy(fnPolicy, this);

		// using the sanitizer that is already set to the encoder
		sSanitizedText = jQuery.sap._sanitizeHTML(sText, {
			tagPolicy : fnProxiedPolicy
		});

		this.setProperty("htmlText", sSanitizedText);
	};

	var fnSetControls = function(aControls, oThis) {
		if (oThis.hasControls()) {
			oThis.removeAllAggregation("controls");
		}

		var bIsArray = jQuery.isArray(aControls);
		if (bIsArray && aControls.length > 0) {
			// iterate through the given array but suppress invalidate
			for ( var i = 0; i < aControls.length; i++) {
				oThis.addAggregation("controls", aControls[i], true);
			}
			oThis.invalidate();
		}
	};

	sap.ui.commons.FormattedTextView.prototype.setContent = function(sHtmlText, aControls) {
		// set the text using existing checks and method
		this.setHtmlText(sHtmlText);

		// validate and set content of controls corresponding to given HTML-text
		// with place holders
		fnSetControls(aControls, this);
	};
}());