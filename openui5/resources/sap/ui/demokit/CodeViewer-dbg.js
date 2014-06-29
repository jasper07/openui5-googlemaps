/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.demokit.CodeViewer.
jQuery.sap.declare("sap.ui.demokit.CodeViewer");
jQuery.sap.require("sap.ui.demokit.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new CodeViewer.
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
 * <li>{@link #getSource source} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEditable editable} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.demokit.CodeViewer#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.demokit.CodeViewer#event:save save} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Add your documentation for the new CodeViewer
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.demokit.CodeViewer
 */
sap.ui.core.Control.extend("sap.ui.demokit.CodeViewer", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.demokit",
	properties : {
		"source" : {type : "string", group : "Misc", defaultValue : null},
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"height" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"editable" : {type : "boolean", group : "Misc", defaultValue : false},
		"visible" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	events : {
		"press" : {}, 
		"save" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.demokit.CodeViewer with name <code>sClassName</code> 
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
 * @name sap.ui.demokit.CodeViewer.extend
 * @function
 */

sap.ui.demokit.CodeViewer.M_EVENTS = {'press':'press','save':'save'};


/**
 * Getter for property <code>source</code>.
 * The source code to display.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>source</code>
 * @public
 * @name sap.ui.demokit.CodeViewer#getSource
 * @function
 */

/**
 * Setter for property <code>source</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSource  new value for property <code>source</code>
 * @return {sap.ui.demokit.CodeViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.CodeViewer#setSource
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * The CSS width property
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.demokit.CodeViewer#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.demokit.CodeViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.CodeViewer#setWidth
 * @function
 */


/**
 * Getter for property <code>height</code>.
 * The CSS height property
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.ui.demokit.CodeViewer#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.demokit.CodeViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.CodeViewer#setHeight
 * @function
 */


/**
 * Getter for property <code>editable</code>.
 * Whether the code can be edited or not
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.ui.demokit.CodeViewer#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.demokit.CodeViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.CodeViewer#setEditable
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.ui.demokit.CodeViewer#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.demokit.CodeViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.CodeViewer#setVisible
 * @function
 */


/**
 * Called when the mouse button is clicked over the non-editable(!) control
 *  
 *
 * @name sap.ui.demokit.CodeViewer#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.demokit.CodeViewer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.demokit.CodeViewer</code>.<br/> itself. 
 *  
 * Called when the mouse button is clicked over the non-editable(!) control
 *  
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.demokit.CodeViewer</code>.<br/> itself.
 *
 * @return {sap.ui.demokit.CodeViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.CodeViewer#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.demokit.CodeViewer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.demokit.CodeViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.CodeViewer#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.demokit.CodeViewer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.demokit.CodeViewer#firePress
 * @function
 */


/**
 * Called when the editor is active and should be saved 
 *
 * @name sap.ui.demokit.CodeViewer#save
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'save' event of this <code>sap.ui.demokit.CodeViewer</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.demokit.CodeViewer</code>.<br/> itself. 
 *  
 * Called when the editor is active and should be saved 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.demokit.CodeViewer</code>.<br/> itself.
 *
 * @return {sap.ui.demokit.CodeViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.CodeViewer#attachSave
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'save' event of this <code>sap.ui.demokit.CodeViewer</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.demokit.CodeViewer} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.CodeViewer#detachSave
 * @function
 */

/**
 * Fire event save to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.demokit.CodeViewer} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.demokit.CodeViewer#fireSave
 * @function
 */


// Start of sap\ui\demokit\CodeViewer.js
sap.ui.demokit.CodeViewer.load = function() {
	if ( !window.prettyPrint ) {
		jQuery.sap.require("sap.ui.demokit.js.prettify");
	}
};

sap.ui.demokit.CodeViewer.load();

/**  
 * Adapts size settings of the rendered HTML in special situations
 */
sap.ui.demokit.CodeViewer.prototype.onAfterRendering = function () {
	var oDomRef = this.getDomRef();
	if ( !this.getEditable() && oDomRef && oDomRef.className.indexOf("prettyprint") === 0 && window.prettyPrint ) {
		// TODO a call to prettyPrint() will also pretty print other CodeViewer controls -> avoid double pretty printing
		prettyPrint();
		oDomRef.className = "sapUiCodeViewer";
	}
};

/**
 * Function is called when code viewer is clicked.
 * 
 * @param oBrowserEvent the forwarded sap.ui.core.BrowserEvent
 * @private
 */
sap.ui.demokit.CodeViewer.prototype.onclick = function(e) {
	if (!this.getEditable()){
		this.firePress({id:this.getId()});
		e.preventDefault();
		e.stopPropagation();	
	}
};

/**
 * Handles the sapescape event... triggers return to non-editable mode (revert)
 * @param {sap.ui.core.BroserEvent} oBrowserEvent the forwarded browser event
 * @private
 */
sap.ui.demokit.CodeViewer.prototype.onsapescape = function(oBrowserEvent) {
	if ( this.getEditable() ) {
		// we do not update the source from the PRE tag, so this acts as a 'revert'
		this.setEditable(false);
	}
};

sap.ui.demokit.CodeViewer.prototype.onkeydown = function(e) {
	if ( this.getEditable() && 
		 ((e.keyCode == jQuery.sap.KeyCodes.S && e.ctrlKey && !e.shiftKey && !e.altKey) ||
		  (e.keyCode == jQuery.sap.KeyCodes.F2)) ) {
		e.preventDefault();
		e.stopPropagation();	
		this.fireSave();
	}
};

sap.ui.demokit.CodeViewer.prototype.getCurrentSource = (function() {

	var SIMPLE_HTML_REGEXP = /<(\/?[^ >]+)[^>]*>|(&[^;]+;)/g,
		TAG_REPLACEMENTS = {
			"/p" : "\n",
			"br" : "\n",
			"div" : "\n"
		},
		ENTITY_REPLACEMENTS = {
			"&nbsp;" : " ",
			"&lt;" : "<",
			"&gt;" : ">",
			"&amp;" : "&"
		};
	
	return function() {
		var code = '',
			oDomRef = this.getDomRef();
		
		if ( oDomRef ) {
			// retrieve the edited source via innerHTML as this seems to be the only way to detect line breaks 
			code = oDomRef.innerHTML;
			//var code = oDomRef.textContent;
			//if (!code) {
			//	// IE version
			//	code = oDomRef.innerText;
			//}

			// convert some well known tags and entities, remove all others
			code = code.replace(SIMPLE_HTML_REGEXP, function(m,m1,m2) {
				if ( m1 ) {
					m1 = m1.toLowerCase();
					if ( TAG_REPLACEMENTS[m1] )
						return TAG_REPLACEMENTS[m1];
				} else if ( m2 ) {
					m2 = m2.toLowerCase();
					if ( ENTITY_REPLACEMENTS[m2] ) 
						return ENTITY_REPLACEMENTS[m2];
				}
				return "";
			});
		}
		return code;
	};
})();


jQuery.sap.require("sap.ui.commons.Button");
jQuery.sap.require("sap.ui.commons.Dialog");

sap.ui.demokit.CodeViewer.showScript = function(sId) {
	var oDomRef = document.getElementById(sId);
	var sSource = oDomRef.innerHTML;

	if ( !oDomRef || !sSource ) 
		return;
	
	var oClose = new sap.ui.commons.Button({text:"Close", press: function() { oDialog.close();}});
	var oDialog = new sap.ui.commons.Dialog({
		applyContentPadding : false,
		title : "Source Code for '" + sId + "'", 
		resizable: true,
		minWidth:"400px", minHeight:"200px",
		buttons : [oClose], 
		content : new sap.ui.demokit.CodeViewer({
			source:sSource,
			press: function() { alert('clicked into code viewer');}}),
		defaultButton: oClose});
	oDialog.center();
	oDialog.open();
};
