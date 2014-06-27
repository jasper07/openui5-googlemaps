/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.demokit.UI5EntityCueCard.
jQuery.sap.declare("sap.ui.demokit.UI5EntityCueCard");
jQuery.sap.require("sap.ui.demokit.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new UI5EntityCueCard.
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
 * <li>{@link #getCollapsible collapsible} : boolean (default: true)</li>
 * <li>{@link #getExpanded expanded} : boolean (default: false)</li>
 * <li>{@link #getNavigable navigable} : boolean (default: false)</li>
 * <li>{@link #getEntityName entityName} : string</li>
 * <li>{@link #getStyle style} : sap.ui.demokit.UI5EntityCueCardStyle</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.demokit.UI5EntityCueCard#event:navigate navigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Displays documentation for a UI5 entity (control or type).
 * 
 * The documentation will be read from a UI5 metamodel file that by default is loaded from the same resource location
 * where the control or type would be loaded from (using the UI5 resource loading). This control displays all properties,
 * aggregations, associations, events and methods that are described in the metamodel. For each part, it lists the name,
 * type (where applicable) and documentation. If the navigable property is set to true, all types are shown as links
 * and when pressed, the navigate event is fired. This allows consumers to react on a user click on such a type
 * (and to e.g. navigate to the underlying type of a property or aggregation)
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.demokit.UI5EntityCueCard
 */
sap.ui.core.Control.extend("sap.ui.demokit.UI5EntityCueCard", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.demokit",
	properties : {
		"collapsible" : {type : "boolean", group : "Misc", defaultValue : true},
		"expanded" : {type : "boolean", group : "Misc", defaultValue : false},
		"navigable" : {type : "boolean", group : "Misc", defaultValue : false},
		"entityName" : {type : "string", group : "Misc", defaultValue : null},
		"style" : {type : "sap.ui.demokit.UI5EntityCueCardStyle", group : "Misc", defaultValue : null}
	},
	events : {
		"navigate" : {allowPreventDefault : true}
	}
}});


/**
 * Creates a new subclass of class sap.ui.demokit.UI5EntityCueCard with name <code>sClassName</code> 
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
 * @name sap.ui.demokit.UI5EntityCueCard.extend
 * @function
 */

sap.ui.demokit.UI5EntityCueCard.M_EVENTS = {'navigate':'navigate'};


/**
 * Getter for property <code>collapsible</code>.
 * Whether the cue card can be collapsed at all. When set to true, the value of property expanded determines the current collapsed/expanded state. When false, the control is always expanded.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>collapsible</code>
 * @public
 * @name sap.ui.demokit.UI5EntityCueCard#getCollapsible
 * @function
 */

/**
 * Setter for property <code>collapsible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bCollapsible  new value for property <code>collapsible</code>
 * @return {sap.ui.demokit.UI5EntityCueCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.UI5EntityCueCard#setCollapsible
 * @function
 */


/**
 * Getter for property <code>expanded</code>.
 * Whether the cue card is currently expanded.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * @name sap.ui.demokit.UI5EntityCueCard#getExpanded
 * @function
 */

/**
 * Setter for property <code>expanded</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.ui.demokit.UI5EntityCueCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.UI5EntityCueCard#setExpanded
 * @function
 */


/**
 * Getter for property <code>navigable</code>.
 * Whether type information is navigable. Also see event 'navigate'.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>navigable</code>
 * @public
 * @name sap.ui.demokit.UI5EntityCueCard#getNavigable
 * @function
 */

/**
 * Setter for property <code>navigable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bNavigable  new value for property <code>navigable</code>
 * @return {sap.ui.demokit.UI5EntityCueCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.UI5EntityCueCard#setNavigable
 * @function
 */


/**
 * Getter for property <code>entityName</code>.
 * Qualified name of the control or type to show the documentation for. The name can be specified in the metamodel notation ('sap.ui.core/Control' or in the UI5 resource notation (sap.ui.core.Control).
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>entityName</code>
 * @public
 * @name sap.ui.demokit.UI5EntityCueCard#getEntityName
 * @function
 */

/**
 * Setter for property <code>entityName</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sEntityName  new value for property <code>entityName</code>
 * @return {sap.ui.demokit.UI5EntityCueCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.UI5EntityCueCard#setEntityName
 * @function
 */


/**
 * Getter for property <code>style</code>.
 * Style of the cue card.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.demokit.UI5EntityCueCardStyle} the value of property <code>style</code>
 * @public
 * @name sap.ui.demokit.UI5EntityCueCard#getStyle
 * @function
 */

/**
 * Setter for property <code>style</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.demokit.UI5EntityCueCardStyle} oStyle  new value for property <code>style</code>
 * @return {sap.ui.demokit.UI5EntityCueCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.UI5EntityCueCard#setStyle
 * @function
 */


/**
 * Fired when a link for a type is activated (clicked) by the user.
 * 
 * When property "navigable" is set to true, type links are created for the types of properties, aggregations and associations, for the types of event or method parameters and for the return types of methods (if not void).
 * 
 * The default behavior for this event is to set the entityName property to the clicked entityName. Applications can prevent the default by calling the corresponding method on the event object. 
 *
 * @name sap.ui.demokit.UI5EntityCueCard#navigate
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.entityName Name of the entity (control or type) that has been clicked. 
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'navigate' event of this <code>sap.ui.demokit.UI5EntityCueCard</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.demokit.UI5EntityCueCard</code>.<br/> itself. 
 *  
 * Fired when a link for a type is activated (clicked) by the user.
 * 
 * When property "navigable" is set to true, type links are created for the types of properties, aggregations and associations, for the types of event or method parameters and for the return types of methods (if not void).
 * 
 * The default behavior for this event is to set the entityName property to the clicked entityName. Applications can prevent the default by calling the corresponding method on the event object. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.demokit.UI5EntityCueCard</code>.<br/> itself.
 *
 * @return {sap.ui.demokit.UI5EntityCueCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.UI5EntityCueCard#attachNavigate
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'navigate' event of this <code>sap.ui.demokit.UI5EntityCueCard</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.demokit.UI5EntityCueCard} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.demokit.UI5EntityCueCard#detachNavigate
 * @function
 */

/**
 * Fire event navigate to attached listeners.
 *
 * Listeners may prevent the default action of this event using the preventDefault-method on the event object.
 * * 
 * Expects following event parameters:
 * <ul>
 * <li>'entityName' of type <code>string</code> Name of the entity (control or type) that has been clicked. </li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {boolean} whether to prevent the default action
 * @protected
 * @name sap.ui.demokit.UI5EntityCueCard#fireNavigate
 * @function
 */


// Start of sap\ui\demokit\UI5EntityCueCard.js
jQuery.sap.require("sap.ui.commons.Link");

sap.ui.demokit.UI5EntityCueCard.prototype.init = function() { 
	this._oShowCueCardLink = new sap.ui.commons.Link({	text : "Show All Settings", press : [this._toggleExpanded, this]});
	this._oShowCueCardLink.setParent(this); //TODO provide sAggregationName?
	this._aHistory = [];
	/**
	 * Active position in the history. Moved by back/forward and setEntityName 
	 */
	this._iHistory = -1;
};

sap.ui.demokit.UI5EntityCueCard.prototype.setEntityName = function(sEntityName) {
	if ( sEntityName !== this.getEntityName() ) {
		this.setProperty("entityName", sEntityName);
		this._aHistory[++this._iHistory] = sEntityName;
		this._aHistory.length = this._iHistory + 1; // cut off any dangling entries
	}
};

sap.ui.demokit.UI5EntityCueCard.prototype.back = function() {
	if ( this._iHistory > 0 ) {
		this.setProperty("entityName", this._aHistory[--this._iHistory]);
	}
};

sap.ui.demokit.UI5EntityCueCard.prototype.forward = function() {
	if ( this._iHistory+1 < this._aHistory.length ) {
		this.setProperty("entityName", this._aHistory[++this._iHistory]);
	}
};

sap.ui.demokit.UI5EntityCueCard.prototype.setExpanded = function(bExpanded) {
	this.setProperty("expanded", bExpanded);
	this._oShowCueCardLink && this._oShowCueCardLink.setText(this.getExpanded() ? "Hide Settings" : "Show All Settings");
};

sap.ui.demokit.UI5EntityCueCard.prototype.onclick = function(oEvent) {
	/*if ( oEvent.target && oEvent.target.nodeName == "A" ) {
		oEvent.preventDefault();
	}*/
	if ( this.getNavigable() ) {
		var sEntity = jQuery(oEvent.target).attr("data-sap-ui-entity");
		if ( sEntity && this.fireNavigate({entityName : sEntity}) ) {
			this.setEntityName(sEntity);
		} 
	}
};

sap.ui.demokit.UI5EntityCueCard.prototype._toggleExpanded = function() {
	this.setExpanded(!this.getExpanded());
};

sap.ui.demokit.UI5EntityCueCard.prototype._getDoc = function() {

	var oEntityDoc = this._oDocumentation;
	if ( !oEntityDoc || oEntityDoc.name !== this.getEntityName() ) {
		oEntityDoc = undefined;
		load(this.getEntityName(), ".control");
		if ( !oEntityDoc ) { 
			load(this.getEntityName(), ".type");
		}
		this._oDocumentation = oEntityDoc;
	}
	return oEntityDoc;
	
	
	function load(sName, sType) {

		var PARSERS = {
			".control" : parseControl,
			".type"    : parseType
		};
		
		// just a hack, needs proper type resolution
		var CORE_TYPES = "boolean int float number function object string void any Element Control Component";
		
		function parseControl($control) {
			
			oEntityDoc = oEntityDoc || {
				doc : undefined,
				deprecation : undefined,
				properties : {},
				aggregations : {},
				associations : {},
				events : {},
				methods : {}
			};
			
			oEntityDoc.doc = oEntityDoc.doc || doc($control);
			oEntityDoc.deprecation = oEntityDoc.deprecation || depr($control);
	
			each($control, "properties/property", function($prop) {
				oEntityDoc.properties[$prop.attr("name")] = {
					kind : 0,
					type : resolve($prop.attr("type") || "string"),
					defaultValue : $prop.attr("defaultValue") || "empty/undefined",
					doc : doc($prop),
					deprecation : depr($prop)
				};				
			});
			
			oEntityDoc.defaultAggregation = oEntityDoc.defaultAggregation || $control.children("aggregations").attr("default");
			each($control, "aggregations/aggregation", function($aggr) {
				oEntityDoc.aggregations[$aggr.attr("name")] = {
					kind : $aggr.attr("cardinality") === "0..1" ? 1 : 2,
					type : resolve($aggr.attr("type") || "sap.ui.core/Control"),
					cardinality : $aggr.attr("cardinality") || "0..n",
					doc : doc($aggr),
					deprecation : depr($aggr)
				};
			});
			
			each($control, "associations/association", function($assoc) {
				oEntityDoc.associations[$assoc.attr("name")] = {
					kind : $assoc.attr("cardinality") === "0..n" ? 4 : 3,
					type : resolve($assoc.attr("type") || "sap.ui.core/Control"),
					cardinality : $assoc.attr("cardinality") || "0..1",
					doc : doc($assoc),
					deprecation : depr($assoc)
				};
			});
			
			each($control, "events/event", function($event) {
				var sName = $event.attr("name");
				oEntityDoc.events[sName] = {
					kind : 5,
					doc : doc($event),
					deprecation : depr($event),
					parameters : []
				};
				each($event, "parameters/parameter", function($param) {
					oEntityDoc.events[sName].parameters[$param.attr("name")] = {
						kind : 6,
						type : resolve($param.attr("type") || "string"),
						doc : doc($param),
						deprecation : depr($param)
					};
				});
			});
			
			each($control, "methods/method", function($method) {
				var sName = $method.attr("name");
				oEntityDoc.methods[sName] = {
					kind : 7,
					type : resolve($method.attr("type") || "sap.ui.core/void"),
					doc : doc($method),
					deprecation : depr($method),
					parameters : []
				};
				each($method, "parameters/parameter", function($param) {
					oEntityDoc.methods[sName].parameters.push({
						kind: 8,
						name : $param.attr("name"),
						type : resolve($param.attr("type") || "sap.ui.core/Control"),
						doc : doc($param),
						deprecation : depr($param)
					});
				});
			});
			
			var sBaseType = $control.children("baseType").text();
			if ( sBaseType ) {
				load(sBaseType, ".control");
			}
		}
			
		function parseType($type) {
	
			oEntityDoc = oEntityDoc || {
				doc : undefined,
				deprecation : false,
				values : {}
			};
			
			oEntityDoc.doc = oEntityDoc.doc || doc($type);
			oEntityDoc.deprecation = oEntityDoc.deprecation || depr($type);
			
			each($type, "enumeration/value", function($value) {
				var sName = $value.attr("name");
				oEntityDoc.values[sName] = {
				    value : $value.attr("value") || sName,
					doc : doc($value),
					deprecation : depr($value)
				};
			});
			
			oEntityDoc.pattern = $type.children("pattern").text();
			
			var sBaseType = $type.children("baseType").text();
			if ( sBaseType ) {
				load(sBaseType, ".type");
			}
		}
		
		function each($,sNames,fnCallback) {
			jQuery.each(sNames.split("/"), function(i,n) {
				$ = $.children(n);
			});
			$.each(function(i,e) {
				fnCallback(jQuery(e));
			});
		}
		
		function doc($) {
			return $.children("documentation").text();
		}
	
		function depr($) {
			return $.children("deprecation").text();
		}
		
		function resolve(sType) {
			if ( sType.indexOf("/") >= 0 ) {
				return sType.replace(/\//g, ".");
			} else if ( sType && sType.indexOf(".") < 0 && CORE_TYPES.indexOf(sType) >= 0 ) {
				return "sap.ui.core." + sType;
			} else {
				return sName.split(".").slice(0,-1).concat([sType.replace(/\//g, ".")]).join(".");
			}
		}
	
		jQuery.ajax({
			async: false,
			url : jQuery.sap.getModulePath(sName, sType),
			dataType : 'xml',
			success : function(oXMLDoc) { 
				PARSERS[sType](jQuery(oXMLDoc.documentElement)); 
				oEntityDoc.name = sName;
				oEntityDoc.metatype = sType;
			}
		});
	}
	
};

sap.ui.demokit.UI5EntityCueCard.createDialog = function() {
	jQuery.sap.require("sap.ui.commons.Button");
	jQuery.sap.require("sap.ui.commons.Dialog");
	jQuery.sap.require("sap.ui.commons.Toolbar");

	var oCueCard = new sap.ui.demokit.UI5EntityCueCard({
		collapsible : false,
		expanded : true,
		navigable: true
	});
    var oDialog = new sap.ui.commons.Dialog({
		title : "Cue Card",
		minWidth : "200px",
		minHeight : "200px",
		maxWidth : "75%",
		maxHeight : "75%",
		content : [
	        new sap.ui.commons.Toolbar({
	            standalone : false,
	        	items : [
	                new sap.ui.commons.Button({
	                    text : "Back",
	                    press : function() {
	                        oCueCard.back();
	                    }
	                }),
	                new sap.ui.commons.Button({
	                    text : "Fwd", 
	                    press : function() {
	                        oCueCard.forward();
	                    }
	                })
	            ]
	        }),
	        oCueCard
	    ]
    });
    oDialog.openForClass = function(sClassName) {
        oCueCard.setEntityName(sClassName);
        this.rerender();
        this.open();	
    };
    return oDialog;
};

sap.ui.demokit.UI5EntityCueCard.attachToContextMenu = function(oNode) {
	var oDialog;
    jQuery(oNode || window.document).bind("contextmenu.sapDkCueCd", function(e) {
        if ( e.shiftKey && e.ctrlKey )  {
            var oCtrl = jQuery(e.target).control(0);
            // if there is a control and if the control is not part of the cue card dialog
            if ( oCtrl && (!oDialog || !oDialog.getDomRef() || (oDialog.getDomRef() !== e.target && !jQuery.contains(oDialog.getDomRef(), e.target)) ) ) {
            	oDialog = oDialog || sap.ui.demokit.UI5EntityCueCard.createDialog();
                oDialog.openForClass(oCtrl.getMetadata().getName());
   	            e.preventDefault();
   	            e.stopPropagation();
            }
        }
    });
};

sap.ui.demokit.UI5EntityCueCard.detachFromContextMenu = function(oNode) {
    jQuery(oNode || window.document).unbind("contextmenu.sapDkCueCd");
};


/* 
 * TODOs
 *
 * - defaultValues
 * - method & event parameters
 * - styling
 * - integrate into snippix itself
 * - initial size
 */