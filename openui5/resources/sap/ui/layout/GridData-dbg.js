/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.layout.GridData.
jQuery.sap.declare("sap.ui.layout.GridData");
jQuery.sap.require("sap.ui.layout.library");
jQuery.sap.require("sap.ui.core.LayoutData");


/**
 * Constructor for a new GridData.
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
 * <li>{@link #getSpan span} : sap.ui.layout.GridSpan</li>
 * <li>{@link #getSpanL spanL} : int</li>
 * <li>{@link #getSpanM spanM} : int</li>
 * <li>{@link #getSpanS spanS} : int</li>
 * <li>{@link #getIndent indent} : sap.ui.layout.GridIndent</li>
 * <li>{@link #getIndentL indentL} : int</li>
 * <li>{@link #getIndentM indentM} : int</li>
 * <li>{@link #getIndentS indentS} : int</li>
 * <li>{@link #getVisibleL visibleL} : boolean (default: true)</li>
 * <li>{@link #getVisibleM visibleM} : boolean (default: true)</li>
 * <li>{@link #getVisibleS visibleS} : boolean (default: true)</li>
 * <li>{@link #getMoveBackwards moveBackwards} : sap.ui.layout.GridIndent</li>
 * <li>{@link #getMoveForward moveForward} : sap.ui.layout.GridIndent</li>
 * <li>{@link #getLinebreak linebreak} : boolean (default: false)</li>
 * <li>{@link #getLinebreakL linebreakL} : boolean (default: false)</li>
 * <li>{@link #getLinebreakM linebreakM} : boolean (default: false)</li>
 * <li>{@link #getLinebreakS linebreakS} : boolean (default: false)</li>
 * <li>{@link #getSpanLarge spanLarge} : int</li>
 * <li>{@link #getSpanMedium spanMedium} : int</li>
 * <li>{@link #getSpanSmall spanSmall} : int</li>
 * <li>{@link #getIndentLarge indentLarge} : int</li>
 * <li>{@link #getIndentMedium indentMedium} : int</li>
 * <li>{@link #getIndentSmall indentSmall} : int</li>
 * <li>{@link #getVisibleOnLarge visibleOnLarge} : boolean (default: true)</li>
 * <li>{@link #getVisibleOnMedium visibleOnMedium} : boolean (default: true)</li>
 * <li>{@link #getVisibleOnSmall visibleOnSmall} : boolean (default: true)</li></ul>
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
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Grid layout data
 * @extends sap.ui.core.LayoutData
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.15.0
 * @name sap.ui.layout.GridData
 */
sap.ui.core.LayoutData.extend("sap.ui.layout.GridData", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.layout",
	properties : {
		"span" : {type : "sap.ui.layout.GridSpan", group : "Behavior", defaultValue : null},
		"spanL" : {type : "int", group : "Behavior", defaultValue : null},
		"spanM" : {type : "int", group : "Behavior", defaultValue : null},
		"spanS" : {type : "int", group : "Behavior", defaultValue : null},
		"indent" : {type : "sap.ui.layout.GridIndent", group : "Behavior", defaultValue : null},
		"indentL" : {type : "int", group : "Behavior", defaultValue : null},
		"indentM" : {type : "int", group : "Behavior", defaultValue : null},
		"indentS" : {type : "int", group : "Behavior", defaultValue : null},
		"visibleL" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visibleM" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visibleS" : {type : "boolean", group : "Behavior", defaultValue : true},
		"moveBackwards" : {type : "sap.ui.layout.GridIndent", group : "Misc", defaultValue : null},
		"moveForward" : {type : "sap.ui.layout.GridIndent", group : "Misc", defaultValue : null},
		"linebreak" : {type : "boolean", group : "Misc", defaultValue : false},
		"linebreakL" : {type : "boolean", group : "Misc", defaultValue : false},
		"linebreakM" : {type : "boolean", group : "Misc", defaultValue : false},
		"linebreakS" : {type : "boolean", group : "Misc", defaultValue : false},
		"spanLarge" : {type : "int", group : "Behavior", defaultValue : null, deprecated: true},
		"spanMedium" : {type : "int", group : "Behavior", defaultValue : null, deprecated: true},
		"spanSmall" : {type : "int", group : "Behavior", defaultValue : null, deprecated: true},
		"indentLarge" : {type : "int", group : "Behavior", defaultValue : null, deprecated: true},
		"indentMedium" : {type : "int", group : "Behavior", defaultValue : null, deprecated: true},
		"indentSmall" : {type : "int", group : "Behavior", defaultValue : null, deprecated: true},
		"visibleOnLarge" : {type : "boolean", group : "Behavior", defaultValue : true, deprecated: true},
		"visibleOnMedium" : {type : "boolean", group : "Behavior", defaultValue : true, deprecated: true},
		"visibleOnSmall" : {type : "boolean", group : "Behavior", defaultValue : true, deprecated: true}
	}
}});


/**
 * Creates a new subclass of class sap.ui.layout.GridData with name <code>sClassName</code> 
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
 * @name sap.ui.layout.GridData.extend
 * @function
 */


/**
 * Getter for property <code>span</code>.
 * A string type that represents Grid's span values for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.layout.GridSpan} the value of property <code>span</code>
 * @public
 * @name sap.ui.layout.GridData#getSpan
 * @function
 */

/**
 * Setter for property <code>span</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.layout.GridSpan} sSpan  new value for property <code>span</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setSpan
 * @function
 */


/**
 * Getter for property <code>spanL</code>.
 * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "span".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>spanL</code>
 * @public
 * @name sap.ui.layout.GridData#getSpanL
 * @function
 */

/**
 * Setter for property <code>spanL</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iSpanL  new value for property <code>spanL</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setSpanL
 * @function
 */


/**
 * Getter for property <code>spanM</code>.
 * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "span".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>spanM</code>
 * @public
 * @name sap.ui.layout.GridData#getSpanM
 * @function
 */

/**
 * Setter for property <code>spanM</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iSpanM  new value for property <code>spanM</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setSpanM
 * @function
 */


/**
 * Getter for property <code>spanS</code>.
 * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "span".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>spanS</code>
 * @public
 * @name sap.ui.layout.GridData#getSpanS
 * @function
 */

/**
 * Setter for property <code>spanS</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iSpanS  new value for property <code>spanS</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setSpanS
 * @function
 */


/**
 * Getter for property <code>indent</code>.
 * A string type that represents Grid's span values for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.layout.GridIndent} the value of property <code>indent</code>
 * @public
 * @name sap.ui.layout.GridData#getIndent
 * @function
 */

/**
 * Setter for property <code>indent</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.layout.GridIndent} sIndent  new value for property <code>indent</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setIndent
 * @function
 */


/**
 * Getter for property <code>indentL</code>.
 * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "indent".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>indentL</code>
 * @public
 * @name sap.ui.layout.GridData#getIndentL
 * @function
 */

/**
 * Setter for property <code>indentL</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iIndentL  new value for property <code>indentL</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setIndentL
 * @function
 */


/**
 * Getter for property <code>indentM</code>.
 * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "indent".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>indentM</code>
 * @public
 * @name sap.ui.layout.GridData#getIndentM
 * @function
 */

/**
 * Setter for property <code>indentM</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iIndentM  new value for property <code>indentM</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setIndentM
 * @function
 */


/**
 * Getter for property <code>indentS</code>.
 * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "indent".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>indentS</code>
 * @public
 * @name sap.ui.layout.GridData#getIndentS
 * @function
 */

/**
 * Setter for property <code>indentS</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iIndentS  new value for property <code>indentS</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setIndentS
 * @function
 */


/**
 * Getter for property <code>visibleL</code>.
 * Defines if this Control is visible on Large screens.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visibleL</code>
 * @public
 * @name sap.ui.layout.GridData#getVisibleL
 * @function
 */

/**
 * Setter for property <code>visibleL</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisibleL  new value for property <code>visibleL</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setVisibleL
 * @function
 */


/**
 * Getter for property <code>visibleM</code>.
 * Defines if this Control is visible on Medium size screens.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visibleM</code>
 * @public
 * @name sap.ui.layout.GridData#getVisibleM
 * @function
 */

/**
 * Setter for property <code>visibleM</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisibleM  new value for property <code>visibleM</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setVisibleM
 * @function
 */


/**
 * Getter for property <code>visibleS</code>.
 * Defines if this Control is visible on small screens.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visibleS</code>
 * @public
 * @name sap.ui.layout.GridData#getVisibleS
 * @function
 */

/**
 * Setter for property <code>visibleS</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisibleS  new value for property <code>visibleS</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setVisibleS
 * @function
 */


/**
 * Getter for property <code>moveBackwards</code>.
 * Optional. Moves a cell backwards so many columns as specified.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.layout.GridIndent} the value of property <code>moveBackwards</code>
 * @public
 * @name sap.ui.layout.GridData#getMoveBackwards
 * @function
 */

/**
 * Setter for property <code>moveBackwards</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.layout.GridIndent} sMoveBackwards  new value for property <code>moveBackwards</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setMoveBackwards
 * @function
 */


/**
 * Getter for property <code>moveForward</code>.
 * Optional. Moves a cell forwards so many columns as specified.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.layout.GridIndent} the value of property <code>moveForward</code>
 * @public
 * @name sap.ui.layout.GridData#getMoveForward
 * @function
 */

/**
 * Setter for property <code>moveForward</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.layout.GridIndent} sMoveForward  new value for property <code>moveForward</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setMoveForward
 * @function
 */


/**
 * Getter for property <code>linebreak</code>.
 * Optional. If this property is set to true, the control on all-size screens causes a line break within the Grid and becomes the first within the next line.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>linebreak</code>
 * @public
 * @name sap.ui.layout.GridData#getLinebreak
 * @function
 */

/**
 * Setter for property <code>linebreak</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bLinebreak  new value for property <code>linebreak</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setLinebreak
 * @function
 */


/**
 * Getter for property <code>linebreakL</code>.
 * Optional. If this property is set to true, the control on large screens causes a line break within the Grid and becomes the first within the next line.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>linebreakL</code>
 * @public
 * @name sap.ui.layout.GridData#getLinebreakL
 * @function
 */

/**
 * Setter for property <code>linebreakL</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bLinebreakL  new value for property <code>linebreakL</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setLinebreakL
 * @function
 */


/**
 * Getter for property <code>linebreakM</code>.
 * Optional. If this property is set to true, the control on medium sized screens causes a line break within the Grid and becomes the first within the next line.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>linebreakM</code>
 * @public
 * @name sap.ui.layout.GridData#getLinebreakM
 * @function
 */

/**
 * Setter for property <code>linebreakM</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bLinebreakM  new value for property <code>linebreakM</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setLinebreakM
 * @function
 */


/**
 * Getter for property <code>linebreakS</code>.
 * Optional. If this property is set to true, the control on small screens causes a line break within the Grid and becomes the first within the next line.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>linebreakS</code>
 * @public
 * @name sap.ui.layout.GridData#getLinebreakS
 * @function
 */

/**
 * Setter for property <code>linebreakS</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bLinebreakS  new value for property <code>linebreakS</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.GridData#setLinebreakS
 * @function
 */


/**
 * Getter for property <code>spanLarge</code>.
 * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "span".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>spanLarge</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use spanL instead.
 * @name sap.ui.layout.GridData#getSpanLarge
 * @function
 */

/**
 * Setter for property <code>spanLarge</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iSpanLarge  new value for property <code>spanLarge</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use spanL instead.
 * @name sap.ui.layout.GridData#setSpanLarge
 * @function
 */


/**
 * Getter for property <code>spanMedium</code>.
 * Deprecated. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "span".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>spanMedium</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use spanM instead.
 * @name sap.ui.layout.GridData#getSpanMedium
 * @function
 */

/**
 * Setter for property <code>spanMedium</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iSpanMedium  new value for property <code>spanMedium</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use spanM instead.
 * @name sap.ui.layout.GridData#setSpanMedium
 * @function
 */


/**
 * Getter for property <code>spanSmall</code>.
 * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "span".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>spanSmall</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use spanS instead.
 * @name sap.ui.layout.GridData#getSpanSmall
 * @function
 */

/**
 * Setter for property <code>spanSmall</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iSpanSmall  new value for property <code>spanSmall</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use spanS instead.
 * @name sap.ui.layout.GridData#setSpanSmall
 * @function
 */


/**
 * Getter for property <code>indentLarge</code>.
 * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "indent".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>indentLarge</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use indentL instead.
 * @name sap.ui.layout.GridData#getIndentLarge
 * @function
 */

/**
 * Setter for property <code>indentLarge</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iIndentLarge  new value for property <code>indentLarge</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use indentL instead.
 * @name sap.ui.layout.GridData#setIndentLarge
 * @function
 */


/**
 * Getter for property <code>indentMedium</code>.
 * Deprecated. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "indent".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>indentMedium</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use indentM instead.
 * @name sap.ui.layout.GridData#getIndentMedium
 * @function
 */

/**
 * Setter for property <code>indentMedium</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iIndentMedium  new value for property <code>indentMedium</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use indentM instead.
 * @name sap.ui.layout.GridData#setIndentMedium
 * @function
 */


/**
 * Getter for property <code>indentSmall</code>.
 * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "indent".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>indentSmall</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use indentS instead.
 * @name sap.ui.layout.GridData#getIndentSmall
 * @function
 */

/**
 * Setter for property <code>indentSmall</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iIndentSmall  new value for property <code>indentSmall</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use indentS instead.
 * @name sap.ui.layout.GridData#setIndentSmall
 * @function
 */


/**
 * Getter for property <code>visibleOnLarge</code>.
 * Deprecated. Defines if this Control is visible on Large screens.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visibleOnLarge</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use visibleL instead.
 * @name sap.ui.layout.GridData#getVisibleOnLarge
 * @function
 */

/**
 * Setter for property <code>visibleOnLarge</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisibleOnLarge  new value for property <code>visibleOnLarge</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use visibleL instead.
 * @name sap.ui.layout.GridData#setVisibleOnLarge
 * @function
 */


/**
 * Getter for property <code>visibleOnMedium</code>.
 * Deprecated. Defines if this Control is visible on Medium size screens.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visibleOnMedium</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use visibleM instead.
 * @name sap.ui.layout.GridData#getVisibleOnMedium
 * @function
 */

/**
 * Setter for property <code>visibleOnMedium</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisibleOnMedium  new value for property <code>visibleOnMedium</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use visibleM instead.
 * @name sap.ui.layout.GridData#setVisibleOnMedium
 * @function
 */


/**
 * Getter for property <code>visibleOnSmall</code>.
 * Deprecated. Defines if this Control is visible on small screens.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visibleOnSmall</code>
 * @public
 * @deprecated Since version 1.17.1. 
 * Use visibleS instead.
 * @name sap.ui.layout.GridData#getVisibleOnSmall
 * @function
 */

/**
 * Setter for property <code>visibleOnSmall</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisibleOnSmall  new value for property <code>visibleOnSmall</code>
 * @return {sap.ui.layout.GridData} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.17.1. 
 * Use visibleS instead.
 * @name sap.ui.layout.GridData#setVisibleOnSmall
 * @function
 */


// Start of sap\ui\layout\GridData.js
/**
 * This file defines behavior for the control
 */
(function() {

	sap.ui.layout.GridData.prototype._setStylesInternal = function(sStyles) {
		if (sStyles && sStyles.length > 0) {
			this._sStylesInternal = sStyles;
		} else {
			this._sStylesInternal = undefined;
		}
	};
	
	/*
	 * Get span information for the large screens
	 * @return {int} the value of the span 
	 * @private
	 */
	sap.ui.layout.GridData.prototype._getEffectiveSpanLarge = function() {

		var iSpan = this.getSpanL();
		if (iSpan && (iSpan > 0) && (iSpan < 13)) {
			return iSpan;
		}
		
		var SPANPATTERN = /L([1-9]|1[0-2])(?:\s|$)/i;

		var aSpan = SPANPATTERN.exec(this.getSpan());

		if (aSpan) {
			var span = aSpan[0];
			if (span) {
				span = span.toUpperCase();
				if (span.substr(0,1) === "L") {
					return parseInt(span.substr(1));
				}
			}
		}
		return undefined;
	};
	
	/*
	 * Get span information for the medium screens 
	 * @return {int} the value of the span 
	 * @private
	 */
	sap.ui.layout.GridData.prototype._getEffectiveSpanMedium = function() {
		var iSpan = this.getSpanM();
		if (iSpan && (iSpan > 0) && (iSpan < 13)) {
			return iSpan;
		}
				
		var SPANPATTERN = /M([1-9]|1[0-2])(?:\s|$)/i;

		var aSpan = SPANPATTERN.exec(this.getSpan());

		if (aSpan) {
			var span = aSpan[0];
			if (span) {
				span = span.toUpperCase();
				if (span.substr(0,1) === "M") {
					return parseInt(span.substr(1));
				}
			}
		}
		return undefined;
	};
	
	/*
	 * Get span information for the small screens
	 * @return {int} the value of the span 
	 * @private
	 */
	sap.ui.layout.GridData.prototype._getEffectiveSpanSmall = function() {
		var iSpan = this.getSpanS();
		if (iSpan && (iSpan > 0) && (iSpan < 13)) {
			return iSpan;
		}
		
		
		var SPANPATTERN = /S([1-9]|1[0-2])(?:\s|$)/i;

		var aSpan = SPANPATTERN.exec(this.getSpan());

		if (aSpan) {
			var span = aSpan[0];
			if (span) {
				span = span.toUpperCase();
				if (span.substr(0,1) === "S") {
					return parseInt(span.substr(1));
				}
			}
		}
		return undefined;
	};
	
	
	// Deprecated properties handling
	//Setter
	sap.ui.layout.GridData.prototype.setSpanLarge = function(iSpan) {
		this.setSpanL(iSpan);
		jQuery.sap.log.warning("Deprecated property spanLarge is used, please use spanL instead.");
	};
	
	sap.ui.layout.GridData.prototype.setSpanMedium = function(iSpan) {
		this.setSpanM(iSpan);
		jQuery.sap.log.warning("Deprecated property spanMedium is used, please use spanM instead.");
	};
	
	sap.ui.layout.GridData.prototype.setSpanSmall = function(iSpan) {
		this.setSpanS(iSpan);
		jQuery.sap.log.warning("Deprecated property spanSmall is used, please use spanS instead.");
	};
	
	sap.ui.layout.GridData.prototype.setIndentLarge = function(iIndent) {
		this.setIndentL(iIndent);
		jQuery.sap.log.warning("Deprecated property indentLarge is used, please use indentL instead.");
	};
	
	sap.ui.layout.GridData.prototype.setIndentMedium = function(iIndent) {
		this.setIndentM(iIndent);
		jQuery.sap.log.warning("Deprecated property indentMedium is used, please use indentM instead.");
	};
	
	sap.ui.layout.GridData.prototype.setIndentSmall = function(iIndent) {
		this.setIndentS(iIndent);
		jQuery.sap.log.warning("Deprecated property indentSmall is used, please use indentS instead.");
	};
	
	sap.ui.layout.GridData.prototype.setVisibleOnLarge = function(bVisible) {
		this.setVisibleL(bVisible);
		jQuery.sap.log.warning("Deprecated property visibleOnLarge is used, please use visibleL instead.");
	};
	
	sap.ui.layout.GridData.prototype.setVisibleOnMedium = function(bVisible) {
		this.setVisibleM(bVisible);
		jQuery.sap.log.warning("Deprecated property visibleOnMedium is used, please use visibleM instead.");
	};
	
	sap.ui.layout.GridData.prototype.setVisibleOnSmall = function(bVisible) {
		this.setVisibleS(bVisible);
		jQuery.sap.log.warning("Deprecated property visibleOnSmall is used, please use visibleS instead.");
	};
	
	
	// Getter 
	sap.ui.layout.GridData.prototype.getSpanLarge = function() {
		jQuery.sap.log.warning("Deprecated property spanLarge is used, please use spanL instead.");
		return this.getSpanL();
	};
	
	sap.ui.layout.GridData.prototype.getSpanMedium = function() {
		jQuery.sap.log.warning("Deprecated property spanMedium is used, please use spanM instead.");
		return this.getSpanM();
	};
	
	sap.ui.layout.GridData.prototype.getSpanSmall = function() {
		jQuery.sap.log.warning("Deprecated property spanSmall is used, please use spanS instead.");
		return this.getSpanS();
	};
	
	sap.ui.layout.GridData.prototype.getIndentLarge = function() {
		jQuery.sap.log.warning("Deprecated property indentLarge is used, please use indentL instead.");
		return this.getIndentL();
	};
	
	sap.ui.layout.GridData.prototype.getIndentMedium = function() {
		jQuery.sap.log.warning("Deprecated property indentMedium is used, please use indentM instead.");
		return this.getIndentM();
	};
	
	sap.ui.layout.GridData.prototype.getIndentSmall = function() {
		jQuery.sap.log.warning("Deprecated property indentSmall is used, please use indentS instead.");
		return this.getIndentS();
	};
	
	sap.ui.layout.GridData.prototype.getVisibleOnLarge = function() {
		jQuery.sap.log.warning("Deprecated property visibleOnLarge is used, please use visibleL instead.");
		return this.getVisibleL();
	};
	
	sap.ui.layout.GridData.prototype.getVisibleOnMedium = function() {
		jQuery.sap.log.warning("Deprecated property visibleOnMedium is used, please use visibleM instead.");
		return this.getVisibleM();
	};
	
	sap.ui.layout.GridData.prototype.getVisibleOnSmall = function() {
		jQuery.sap.log.warning("Deprecated property visibleOnSmall is used, please use visibleS instead.");
		return this.getVisibleS();
	};
	
}());
