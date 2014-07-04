/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.MenuTextFieldItem.
jQuery.sap.declare("sap.ui.commons.MenuTextFieldItem");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.MenuItemBase");


/**
 * Constructor for a new MenuTextFieldItem.
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
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getValue value} : string</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.commons.MenuItemBase#constructor sap.ui.commons.MenuItemBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Menu item which contains an text field. This menu item is e.g. helpful for filters.
 * The aggregation 'submenu' (inherited from parent class) is not supported for this type of menu item.
 * @extends sap.ui.commons.MenuItemBase
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.MenuTextFieldItem
 */
sap.ui.commons.MenuItemBase.extend("sap.ui.commons.MenuTextFieldItem", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"label" : {type : "string", group : "Appearance", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"value" : {type : "string", group : "Misc", defaultValue : null}
	},
	aggregations : {
    	"_label" : {type : "sap.ui.commons.Label", multiple : false, visibility : "hidden"}, 
    	"_textfield" : {type : "sap.ui.commons.TextField", multiple : false, visibility : "hidden"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.MenuTextFieldItem with name <code>sClassName</code> 
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
 * @name sap.ui.commons.MenuTextFieldItem.extend
 * @function
 */


/**
 * Getter for property <code>label</code>.
 * The label of the contained text field.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>label</code>
 * @public
 * @name sap.ui.commons.MenuTextFieldItem#getLabel
 * @function
 */

/**
 * Setter for property <code>label</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLabel  new value for property <code>label</code>
 * @return {sap.ui.commons.MenuTextFieldItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuTextFieldItem#setLabel
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Icon to be displayed.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.commons.MenuTextFieldItem#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.commons.MenuTextFieldItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuTextFieldItem#setIcon
 * @function
 */


/**
 * Getter for property <code>value</code>.
 * Value of the contained text field.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>value</code>
 * @public
 * @name sap.ui.commons.MenuTextFieldItem#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.ui.commons.MenuTextFieldItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuTextFieldItem#setValue
 * @function
 */


// Start of sap\ui\commons\MenuTextFieldItem.js
jQuery.sap.require("sap.ui.commons.MenuItem");
jQuery.sap.require("sap.ui.commons.Label");
jQuery.sap.require("sap.ui.commons.TextField");

(function() {

/**
 * Does the setup when the item is created.
 * @private
 */
sap.ui.commons.MenuTextFieldItem.prototype.init = function(){
	sap.ui.commons.MenuItemBase.prototype.init.apply(this, arguments);
	var that = this;
	var oDelegate = {
		onAfterRendering : function(){
			var $tf = that._tf.$();
			var $lbl = that._lbl.$();
			var offsetLeft = $lbl.length ? $lbl.get(0).offsetLeft : 0;
			
			$tf.attr("tabIndex", -1);
			
			if(sap.ui.getCore().getConfiguration().getRTL()){
				$tf.parent().css({"width": "auto", "right": (that.$().outerWidth(true) - offsetLeft + ($lbl.outerWidth(true) - $lbl.outerWidth()))+"px"});
			}else{
				$tf.parent().css({"width": "auto", "left": (offsetLeft + $lbl.outerWidth(true))+"px"});
			}
		},
		onclick: function(oEvent){
			if(!that._tf.getEnabled() && !!sap.ui.Device.browser.internet_explorer){
				that.getParent().focus();
			}
		}
	};
	this._tf = new sap.ui.commons.TextField(this.getId()+"-tf");
	this._tf.addDelegate(oDelegate);
	this.setAggregation("_textfield", this._tf);
	this._lbl = new sap.ui.commons.Label(this.getId()+"-lbl", {labelFor: this._tf});
	this._lbl.addDelegate(oDelegate);
	this.setAggregation("_label", this._lbl);
};


/**
 * Does all the cleanup when the item is to be destroyed.
 * Called from Element's destroy() method.
 * @private
 */
sap.ui.commons.MenuTextFieldItem.prototype.exit = function(){
	this._lbl = null;
	this._tf = null;
};


/**
 * Called by the Menu renderer when the item should be rendered.
 * @private
 */
sap.ui.commons.MenuTextFieldItem.prototype.render = function(oRenderManager, oItem, oMenu, oInfo){
	var rm = oRenderManager;
	rm.write("<li "); 
	rm.writeAttribute("class", "sapUiMnuItm sapUiMnuTfItm" + (oMenu.checkEnabled(oItem) ? "" : " sapUiMnuItmDsbl"));
	if(oItem.getTooltip_AsString()) {
		rm.writeAttributeEscaped("title", oItem.getTooltip_AsString());
	}	
	rm.writeElementData(oItem);
	
	// ARIA
	if(oInfo.bAccessible){
		rm.writeAttribute("role", "menuitem");
		rm.writeAttribute("aria-labelledby", oMenu.getId()+" "+this.getId()+"-txt "+this.getId()+"-scuttxt");
		rm.writeAttribute("aria-disabled", !oMenu.checkEnabled(oItem));
		rm.writeAttribute("aria-posinset", oInfo.iItemNo);
		rm.writeAttribute("aria-setsize", oInfo.iTotalItems);
	}
	
	// Left border
	rm.write("><div class=\"sapUiMnuItmL\"></div>");
	
	// icon/check column 
	rm.write("<div class=\"sapUiMnuItmIco\">");
	if (oItem.getIcon()) {
		rm.write("<img");
		rm.writeAttributeEscaped("src", oItem.getIcon());
		rm.write("/>");
	}
	rm.write("</div>");
	
	// Text filed column 
	rm.write("<div id=\""+this.getId()+"-txt\" class=\"sapUiMnuItmTxt\">");
	rm.renderControl(this._lbl);
	rm.write("<div id=\""+this.getId()+"-str\" class=\"sapUiMnuTfItmStretch\"></div>"); // Helper to strech the width if needed
	this._tf.setValue(this.getValue()); //Ensure the correct value is rendered
	this._tf.setEnabled(this.getEnabled() && this.getParent().getEnabled()); //Ensure the correct state is rendered
	rm.write("<div class=\"sapUiMnuTfItemWrppr\">");
	rm.renderControl(this._tf);
	rm.write("</div></div>");
	
	// Right border
	rm.write("<div class=\"sapUiMnuItmR\"></div>");

	rm.write("</li>");
};


/**
 * Called by the Menu renderer when the item is hovered.
 * @private
 */
sap.ui.commons.MenuTextFieldItem.prototype.hover = function(bHovered, oMenu){
	if(bHovered){
		jQuery(this.getDomRef()).addClass("sapUiMnuItmHov");
		jQuery(this._tf.getDomRef()).addClass("sapUiTfFoc");
		if(this.getEnabled()){
			var that = this;
			function focusTF() { that._tf.focus(); };
			if(jQuery("html").attr("data-sap-ui-browser") === "ie8"){
				setTimeout(focusTF, 0);
			}else{
				focusTF();
			}
		}
	}else{
		jQuery(this.getDomRef()).removeClass("sapUiMnuItmHov");
		jQuery(this._tf.getDomRef()).removeClass("sapUiTfFoc");
	}
};


sap.ui.commons.MenuTextFieldItem.prototype.onsapup = function(oEvent){
	this.getParent().focus();
	this.getParent().onsapprevious(oEvent);
};


sap.ui.commons.MenuTextFieldItem.prototype.onsapdown = function(oEvent){
	this.getParent().focus();
	this.getParent().onsapnext(oEvent);
};


sap.ui.commons.MenuTextFieldItem.prototype.onsaphome = function(oEvent){
	this.getParent().focus();
	this.getParent().onsaphome(oEvent);
};


sap.ui.commons.MenuTextFieldItem.prototype.onsapend = function(oEvent){
	this.getParent().focus();
	this.getParent().onsapend(oEvent);
};


sap.ui.commons.MenuTextFieldItem.prototype.onsapescape = function(oEvent){
	this.getParent().onsapescape(oEvent);
};


sap.ui.commons.MenuTextFieldItem.prototype.onkeydown = function(oEvent){
	oEvent.stopPropagation();
};


sap.ui.commons.MenuTextFieldItem.prototype.onclick = function(oEvent){
	oEvent.preventDefault();
	oEvent.stopPropagation();
};


sap.ui.commons.MenuTextFieldItem.prototype.onsapenter = function(oEvent){
	var sValue = oEvent.target.value;
	this.setValue(sValue, true);
	this.getParent().selectItem(this);
	oEvent.preventDefault();
	oEvent.stopPropagation();
};


// ************ Overridden API functions *************

/**
 * Getter for aggregation <code>submenu</code>.<br/>
 * Aggregation of a menu item's sub menu.
 * 
 * @return {sap.ui.commons.Menu}
 * @public
 * @name sap.ui.commons.MenuTextFieldItem#getSubmenu
 * @deprecated The aggregation 'submenu' (inherited from parent class) is not supported for this type of menu item.
 * @function
 */
 
/**
 * Destroys the submenu in the aggregation 
 * named <code>submenu</code>.
 * @return {sap.ui.commons.MenuTextFieldItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuTextFieldItem#destroySubmenu
 * @deprecated The aggregation 'submenu' (inherited from parent class) is not supported for this type of menu item.
 * @function
 */

/**
 * Setter for the aggregated <code>submenu</code>.
 * @param oSubmenu {sap.ui.commons.Menu}
 * @return {sap.ui.commons.MenuTextFieldItem} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.MenuTextFieldItem#setSubmenu
 * @deprecated The aggregation 'submenu' (inherited from parent class) is not supported for this type of menu item.
 * @function
 */
sap.ui.commons.MenuTextFieldItem.prototype.setSubmenu = function(oMenu){
	jQuery.sap.log.warning("The aggregation 'submenu' is not supported for this type of menu item.", "", "sap.ui.commons.MenuTextFieldItem");
	return this;
};


sap.ui.commons.MenuTextFieldItem.prototype.setLabel = function(sLabel){
	this._lbl.setText(sLabel);
	return this;
};


sap.ui.commons.MenuTextFieldItem.prototype.getLabel = function(){
	return this._lbl.getText();
};


sap.ui.commons.MenuTextFieldItem.prototype.setValue = function(sValue, bSupR){
	this.setProperty("value", sValue, bSupR);
	this._tf.setValue(sValue);
	return this;
};

sap.ui.commons.MenuTextFieldItem.prototype.setValueState = function(sValueState){
	this._tf.setValueState(sValueState);
	return this;
};

}());
