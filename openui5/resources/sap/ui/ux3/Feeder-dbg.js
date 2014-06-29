/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.Feeder.
jQuery.sap.declare("sap.ui.ux3.Feeder");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Feeder.
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
 * <li>{@link #getThumbnailSrc thumbnailSrc} : sap.ui.core.URI</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getType type} : sap.ui.ux3.FeederType (default: sap.ui.ux3.FeederType.Large)</li>
 * <li>{@link #getPlaceholderText placeholderText} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.Feeder#event:submit submit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This feed control flavor represents a lean common feed, or a comment feed, with a text commit function.
 * The control can be used stand alone or in a multiple way, and generally would be integrated directly into a UIArea.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @experimental Since version 1.2. 
 * The whole Feed/Feeder API is still under discussion, significant changes are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the Feed model topic is still open.
 * @name sap.ui.ux3.Feeder
 */
sap.ui.core.Control.extend("sap.ui.ux3.Feeder", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"thumbnailSrc" : {type : "sap.ui.core.URI", group : "Data", defaultValue : null},
		"text" : {type : "string", group : "Data", defaultValue : null},
		"type" : {type : "sap.ui.ux3.FeederType", group : "Appearance", defaultValue : sap.ui.ux3.FeederType.Large},
		"placeholderText" : {type : "string", group : "Appearance", defaultValue : null}
	},
	events : {
		"submit" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.Feeder with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.Feeder.extend
 * @function
 */

sap.ui.ux3.Feeder.M_EVENTS = {'submit':'submit'};


/**
 * Getter for property <code>thumbnailSrc</code>.
 * URL to the thumb nail image
 * This property is optional if the feeder is a sub-control of a feed or a feedChunk control. In this case the value of the feed or feddChunk control is used if it's not set. So it must be only set once on the feed or feedChunk control.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>thumbnailSrc</code>
 * @public
 * @name sap.ui.ux3.Feeder#getThumbnailSrc
 * @function
 */

/**
 * Setter for property <code>thumbnailSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sThumbnailSrc  new value for property <code>thumbnailSrc</code>
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feeder#setThumbnailSrc
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * The text for the Feeder. @References are supported.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.ux3.Feeder#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feeder#setText
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Type and size of the Feeder
 *
 * Default value is <code>sap.ui.ux3.FeederType.Large</code>
 *
 * @return {sap.ui.ux3.FeederType} the value of property <code>type</code>
 * @public
 * @name sap.ui.ux3.Feeder#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>sap.ui.ux3.FeederType.Large</code> 
 *
 * @param {sap.ui.ux3.FeederType} oType  new value for property <code>type</code>
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feeder#setType
 * @function
 */


/**
 * Getter for property <code>placeholderText</code>.
 * This property could be used for costum placeholder. If it is not set, the default text is used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>placeholderText</code>
 * @public
 * @name sap.ui.ux3.Feeder#getPlaceholderText
 * @function
 */

/**
 * Setter for property <code>placeholderText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sPlaceholderText  new value for property <code>placeholderText</code>
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feeder#setPlaceholderText
 * @function
 */


/**
 * Event is fired when the entered text is submitted 
 *
 * @name sap.ui.ux3.Feeder#submit
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.text The text that is submitted
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'submit' event of this <code>sap.ui.ux3.Feeder</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.Feeder</code>.<br/> itself. 
 *  
 * Event is fired when the entered text is submitted 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.Feeder</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feeder#attachSubmit
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'submit' event of this <code>sap.ui.ux3.Feeder</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.Feeder#detachSubmit
 * @function
 */

/**
 * Fire event submit to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'text' of type <code>string</code> The text that is submitted</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.Feeder} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.Feeder#fireSubmit
 * @function
 */


// Start of sap\ui\ux3\Feeder.js
jQuery.sap.require("sap.ui.core.theming.Parameters");
jQuery.sap.require("sap.ui.commons.Button");

/**
 * This file defines behavior for the control,
 */

sap.ui.ux3.Feeder.prototype.init = function(){
	this.rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
	this.oSendButton = new sap.ui.commons.Button( this.getId() + "-send", {
			style: sap.ui.commons.ButtonStyle.Emph,
			icon: "sap-icon://feeder-arrow"
		}).setParent(this);
	this.oSendButton.attachEvent('press', this.handleSendButtonPress, this); // attach event this way to have the right this-reference in handler

};

/*
 * as onBeforeRendering only runs while re-rendering this module is called in renderer
 */
sap.ui.ux3.Feeder.prototype.initSendButton = function(){
	if (this.getText() == "") {
		// no re-rendering as button is not rendered now.
		this.oSendButton.setProperty('enabled', false, true);
	}

};

sap.ui.ux3.Feeder.prototype.exit = function(){
	this.rb = undefined;
	this.oInput = undefined;
	if(this.oSendButton){
		this.oSendButton.destroy();
		delete this.oSendButton;
	}
};

/**
 * After rendering, keep the input field jQuery object as attribute
 * for reuse
 *
 * @private
 */
sap.ui.ux3.Feeder.prototype.onAfterRendering = function () {
	this.oInput = this.$("input");
};

/**
 * handler for click event
 *
 * @private
 */
sap.ui.ux3.Feeder.prototype.onclick = function(oEvent){

	var sTargetId = oEvent.target.getAttribute( 'ID' );

	switch ( sTargetId ){
	case ( this.getId() + '-send' ):
		// Click on send button (should be handled in button)
	break;
	case ( this.getId() + '-input'):
		// Click on input field

	break;
	default:

	break;
	}

};

/**
 * handler for focusIn
 *
 * If the Feeder is empty the default text must be cleared
 * @private
 */
sap.ui.ux3.Feeder.prototype.onfocusin = function(oEvent){

	this.oInput.find(".sapUiFeederEmptyText").remove();

};

/**
 * handler for focusOut
 *
 * If the Feeder is empty the default text written
 * @private
 */
sap.ui.ux3.Feeder.prototype.onfocusout = function(oEvent){

	var sText = this.oInput.text();
	if(sText == ""){
		this.oInput.empty(); // to remove invisible line breaks and so on
		this.oInput.append(sap.ui.ux3.FeederRenderer.getEmptyTextInfo(this));
	}

	this.setProperty("text", sText, true); // no rerendering!

};

// overrides sap.ui.core.Element.getFocusDomRef()
sap.ui.ux3.Feeder.prototype.getFocusDomRef = function(){
	return this.getDomRef("input");
};

/**
 * handler for keyUp
 *
 * if text is entered the button must be enables, if empty it must be disabled
 * @private
 */
sap.ui.ux3.Feeder.prototype.onkeyup = function(oEvent){

	if(this.oInput.text() == ""){
		this.oSendButton.setEnabled(false);
	}else{
		this.oSendButton.setEnabled(true);
	}

	//Clean input so we avoid having invisible DOM content
//	if(!this.oInput.text()){
//		this.oInput.empty();
//	}

};

/**
 * Handler for send-button press
 *
 * @private
 */
sap.ui.ux3.Feeder.prototype.handleSendButtonPress = function(oEvent){

	var sText = this.getMultilineText(this.oInput);
	this.setProperty("text", sText, true); // no rerendering!
	this.fireSubmit({text: sText});
	this.setText(''); // clear text after submit

};

/**
 * get multiline text from input DIV
 *
 * @param {object} [oInput] jQuery object of the input field
 *
 * @private
 */
sap.ui.ux3.Feeder.prototype.getMultilineText = function(oInput) {

	function parseText(nodes) {

		var node;
		var sText = '';

		for (var i = 0; i < nodes.length; i++) {
			node = nodes[i];

			// text / cdata
			if (node.nodeType === 3 || node.nodeType === 4) {

				// ignore non-breakable space in IE
				if (!(!!sap.ui.Device.browser.internet_explorer && node.nodeValue === '\xA0')) {
					sText += node.nodeValue.replace(/\n/g, ''); // filter out line breaks in text-nodes
				}
			}

			// check for "linebreaking"-nodes
			if (node.nodeName === 'DIV' ||
					node.nodeName ===  'P' ||
					(node.nodeName === 'BR' && !!!sap.ui.Device.browser.webkit)) { // ignore BR in webkit

				// ignore last <br> with type="_moz" in mozilla
				if (node.nodeName === 'BR' &&
					!!sap.ui.Device.browser.firefox &&
					i === nodes.length - 1 &&
					jQuery(node).attr("type") === "_moz") {
					continue;
				}

				// do not add a newline if no text was found until now (IE)
				if (!(!!sap.ui.Device.browser.internet_explorer && sText === '') &&

					// same as above but only for <P> and webkit/mozilla
					!((!!sap.ui.Device.browser.firefox || !!sap.ui.Device.browser.webkit) && sText === '' && node.nodeName ===  'P') &&

					// ignore <P>'s containing linebreaks only (\n)
					!(!!sap.ui.Device.browser.webkit && node.nodeName ===  'P' && node.textContent.match(/^(\n)*$/))) {

					sText += '\n';
				}

			}

			// parse child elements, ignore comments in mozilla
			if (node.nodeType !== 8) {
				sText += parseText(node.childNodes);
			}

		}

		return sText;
	}

	return parseText(oInput.get(0).childNodes);
};

/*
 * Overwrite standard getter for thumbnail source:
 * If not set and feeder is child of a Feed or FeedChunk use the thumbnailsource of the parent
 * So it must not be set manually for each sub-control and is always in sync
 */
sap.ui.ux3.Feeder.prototype.getThumbnailSrc = function() {
	var sThumbnailSrc =  this.getProperty("thumbnailSrc");

	if (!sThumbnailSrc || sThumbnailSrc == "") {
		var oParent = this.getParent();
		if (oParent &&(oParent instanceof sap.ui.ux3.Feed || oParent instanceof sap.ui.ux3.FeedChunk)) {
			sThumbnailSrc = oParent.getFeederThumbnailSrc();
		}
	}

	return sThumbnailSrc;
};

sap.ui.ux3.Feeder.prototype.onpaste = function(oEvent){

	// call after paste function delayed to have content already pasted (in the moment only needed in FireFox)
	if (!!sap.ui.Device.browser.firefox) {
		jQuery.sap.delayedCall(10, this, "onAfterPaste");
	}

};

sap.ui.ux3.Feeder.prototype.onAfterPaste = function(){

	// if pasted from MS Word in FireFox text is longer that contenteditable DIV
	// -> add overflow:hidden to PRE elements
	var aChildren = this.oInput.get(0).childNodes;

	for ( var i = 0; i < aChildren.length; i++) {
		var oChild = aChildren[i];
		if (oChild.nodeName == "PRE") {
			jQuery(oChild).css("overflow", "hidden");
		}
	}

};