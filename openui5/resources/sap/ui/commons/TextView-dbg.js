/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.TextView.
jQuery.sap.declare("sap.ui.commons.TextView");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new TextView.
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
 * <li>{@link #getText text} : string (default: '')</li>
 * <li>{@link #getTextDirection textDirection} : sap.ui.core.TextDirection (default: sap.ui.core.TextDirection.Inherit)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getHelpId helpId} : string (default: '')</li>
 * <li>{@link #getAccessibleRole accessibleRole} : sap.ui.core.AccessibleRole (default: sap.ui.core.AccessibleRole.Document)</li>
 * <li>{@link #getDesign design} : sap.ui.commons.TextViewDesign (default: sap.ui.commons.TextViewDesign.Standard)</li>
 * <li>{@link #getWrapping wrapping} : boolean (default: true)</li>
 * <li>{@link #getSemanticColor semanticColor} : sap.ui.commons.TextViewColor (default: sap.ui.commons.TextViewColor.Default)</li>
 * <li>{@link #getTextAlign textAlign} : sap.ui.core.TextAlign (default: sap.ui.core.TextAlign.Begin)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaDescribedBy ariaDescribedBy} : string | sap.ui.core.Control</li>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : string | sap.ui.core.Control</li></ul>
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
 * Is used to display some continous text. The control can inherit the text direction from its parent control.
 * @extends sap.ui.core.Control
 * @implements sap.ui.commons.ToolbarItem
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.TextView
 */
sap.ui.core.Control.extend("sap.ui.commons.TextView", { metadata : {

	// ---- object ----
	interfaces : [
		"sap.ui.commons.ToolbarItem"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"text" : {type : "string", group : "", defaultValue : '', bindable : "bindable"},
		"textDirection" : {type : "sap.ui.core.TextDirection", group : "Appearance", defaultValue : sap.ui.core.TextDirection.Inherit},
		"visible" : {type : "boolean", group : "Behavior", defaultValue : true},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"helpId" : {type : "string", group : "Behavior", defaultValue : ''},
		"accessibleRole" : {type : "sap.ui.core.AccessibleRole", group : "Accessibility", defaultValue : sap.ui.core.AccessibleRole.Document},
		"design" : {type : "sap.ui.commons.TextViewDesign", group : "Data", defaultValue : sap.ui.commons.TextViewDesign.Standard},
		"wrapping" : {type : "boolean", group : "Appearance", defaultValue : true},
		"semanticColor" : {type : "sap.ui.commons.TextViewColor", group : "Appearance", defaultValue : sap.ui.commons.TextViewColor.Default},
		"textAlign" : {type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null}
	},
	associations : {
		"ariaDescribedBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaDescribedBy"}, 
		"ariaLabelledBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaLabelledBy"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.TextView with name <code>sClassName</code> 
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
 * @name sap.ui.commons.TextView.extend
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * Text to be displayed.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.commons.TextView#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextView#setText
 * @function
 */


/**
 * Binder for property <code>text</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextView#bindText
 * @function
 */

/**
 * Unbinder for property <code>text</code>.
 *
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextView#unbindText
 * @function
 */


/**
 * Getter for property <code>textDirection</code>.
 * Available options are LTR and RTL. Alternatively, the control can inherit the text direction from its parent control.
 *
 * Default value is <code>Inherit</code>
 *
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * @name sap.ui.commons.TextView#getTextDirection
 * @function
 */

/**
 * Setter for property <code>textDirection</code>.
 *
 * Default value is <code>Inherit</code> 
 *
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextView#setTextDirection
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible text views are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.commons.TextView#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextView#setVisible
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * When the control is disabled, it is greyed out and no longer focusable.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.ui.commons.TextView#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextView#setEnabled
 * @function
 */


/**
 * Getter for property <code>helpId</code>.
 * Unique identifier used for help services.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>helpId</code>
 * @public
 * @name sap.ui.commons.TextView#getHelpId
 * @function
 */

/**
 * Setter for property <code>helpId</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sHelpId  new value for property <code>helpId</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextView#setHelpId
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
 * @name sap.ui.commons.TextView#getAccessibleRole
 * @function
 */

/**
 * Setter for property <code>accessibleRole</code>.
 *
 * Default value is <code>Document</code> 
 *
 * @param {sap.ui.core.AccessibleRole} oAccessibleRole  new value for property <code>accessibleRole</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextView#setAccessibleRole
 * @function
 */


/**
 * Getter for property <code>design</code>.
 * Defines the visual appearance of the control.
 *
 * Default value is <code>Standard</code>
 *
 * @return {sap.ui.commons.TextViewDesign} the value of property <code>design</code>
 * @public
 * @name sap.ui.commons.TextView#getDesign
 * @function
 */

/**
 * Setter for property <code>design</code>.
 *
 * Default value is <code>Standard</code> 
 *
 * @param {sap.ui.commons.TextViewDesign} oDesign  new value for property <code>design</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextView#setDesign
 * @function
 */


/**
 * Getter for property <code>wrapping</code>.
 * Disabled automatic wrapping of the text.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>wrapping</code>
 * @public
 * @name sap.ui.commons.TextView#getWrapping
 * @function
 */

/**
 * Setter for property <code>wrapping</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bWrapping  new value for property <code>wrapping</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextView#setWrapping
 * @function
 */


/**
 * Getter for property <code>semanticColor</code>.
 * Semantic color of the text View
 *
 * Default value is <code>Default</code>
 *
 * @return {sap.ui.commons.TextViewColor} the value of property <code>semanticColor</code>
 * @public
 * @name sap.ui.commons.TextView#getSemanticColor
 * @function
 */

/**
 * Setter for property <code>semanticColor</code>.
 *
 * Default value is <code>Default</code> 
 *
 * @param {sap.ui.commons.TextViewColor} oSemanticColor  new value for property <code>semanticColor</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextView#setSemanticColor
 * @function
 */


/**
 * Getter for property <code>textAlign</code>.
 * Sets the horizontal alignment of the text.
 *
 * Default value is <code>Begin</code>
 *
 * @return {sap.ui.core.TextAlign} the value of property <code>textAlign</code>
 * @public
 * @name sap.ui.commons.TextView#getTextAlign
 * @function
 */

/**
 * Setter for property <code>textAlign</code>.
 *
 * Default value is <code>Begin</code> 
 *
 * @param {sap.ui.core.TextAlign} oTextAlign  new value for property <code>textAlign</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextView#setTextAlign
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Width of the TextView
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.TextView#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextView#setWidth
 * @function
 */


/**
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.TextView#getAriaDescribedBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextView#addAriaDescribedBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * @name sap.ui.commons.TextView#removeAriaDescribedBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.TextView#removeAllAriaDescribedBy
 * @function
 */

	
/**
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.TextView#getAriaLabelledBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TextView#addAriaLabelledBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * @name sap.ui.commons.TextView#removeAriaLabelledBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.TextView#removeAllAriaLabelledBy
 * @function
 */

	
// Start of sap\ui\commons\TextView.js
jQuery.sap.require("sap.ui.core.Popup");

/*
 * @see JSDoc generated by SAPUI5 Control API generator
 */
sap.ui.commons.TextView.prototype.setText = function(sText) {
	this.setProperty("text", sText, true); // no re-rendering!
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		var aLines = this.getText().split("\n");
		for (var i = 0; i < aLines.length; i++) {
			aLines[i] = jQuery.sap.encodeHTML(aLines[i]);
		}
		sText = aLines.join("<br>");
		oDomRef.innerHTML = sText;
		// when no tooltip is applied use the text as tooltip
		if (!this.getTooltip_AsString() && sText) {
			oDomRef.title = this.getText(); // IE8 doesn't like HTML encoded attribute values
		}
	}
	if (this._oPopup) {
		this._oPopup.destroy();
		delete this._oPopup;
	}
	return this;
};

sap.ui.commons.TextView.prototype.exit = function() {
	if (this._oPopup) {
		this._oPopup.destroy();
		delete this._oPopup;
	}
};
/*
sap.ui.commons.TextView.prototype.onBeforeRendering = function() {
	if (this._oPopup) {
		this._oPopup.destroy();
		delete this._oPopup;
	}
};

sap.ui.commons.TextView.prototype.onmouseover = function(oEvent) {
	var oRef = this.getDomRef();
	if (Math.abs(oRef.clientWidth - oRef.scrollWidth) < 2){
		return;
	}

	if (!this._oPopup) {
		 this._oPopup = new sap.ui.core.Popup();
		 this._oPopup.setDurations(0, 0); // no animations
		 this._oPopup.setContent(this._createInfo());
		 this._oPopup.attachOpened(this._handleOpened, this);
	}

	var eDock = sap.ui.core.Popup.Dock;
	this._oPopup.open(0, eDock.BeginTop, eDock.BeginTop, this, "0 1", "fit", true);
};

sap.ui.commons.TextView.prototype._createInfo = function(){
	var $Me   = jQuery(this.getDomRef());
	var sText = $Me.html();
	var sHtml = "<span id='" + this.getId()+'-info' + "' class='sapUiTvInfo " + $Me.attr("class") + "'>" + sText + "</span>";

	var oDomRef = jQuery(sHtml).appendTo(sap.ui.getCore().getStaticAreaRef());
	var that = this;
	jQuery(oDomRef).mouseout([this.getId()], function(oEvent){
		that._oPopup.close();
	});
	return oDomRef;
};

sap.ui.commons.TextView.prototype._handleOpened = function(){
	var that = this;
	jQuery.sap.byId(this.getId()+'-info').mouseout([this.getId()], function(oEvent){
		that._oPopup.close();
	});
};*/