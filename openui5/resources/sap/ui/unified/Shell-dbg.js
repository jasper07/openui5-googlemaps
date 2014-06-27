/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.unified.Shell.
jQuery.sap.declare("sap.ui.unified.Shell");
jQuery.sap.require("sap.ui.unified.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Shell.
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
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getShowPane showPane} : boolean</li>
 * <li>{@link #getShowCurtain showCurtain} : boolean</li>
 * <li>{@link #getShowCurtainPane showCurtainPane} : boolean</li>
 * <li>{@link #getHeaderHiding headerHiding} : boolean</li>
 * <li>{@link #getSearchVisible searchVisible} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li>
 * <li>{@link #getPaneContent paneContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getCurtainContent curtainContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getCurtainPaneContent curtainPaneContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getHeadItems headItems} : sap.ui.unified.ShellHeadItem[]</li>
 * <li>{@link #getHeadEndItems headEndItems} : sap.ui.unified.ShellHeadItem[]</li>
 * <li>{@link #getSearch search} : sap.ui.core.Control</li></ul>
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
 * The Shell
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.15.1
 * @name sap.ui.unified.Shell
 */
sap.ui.core.Control.extend("sap.ui.unified.Shell", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.unified",
	properties : {
		"icon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"showPane" : {type : "boolean", group : "Appearance", defaultValue : null},
		"showCurtain" : {type : "boolean", group : "Appearance", defaultValue : null, deprecated: true},
		"showCurtainPane" : {type : "boolean", group : "Appearance", defaultValue : null, deprecated: true},
		"headerHiding" : {type : "boolean", group : "Appearance", defaultValue : null},
		"searchVisible" : {type : "boolean", group : "Appearance", defaultValue : true}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}, 
    	"paneContent" : {type : "sap.ui.core.Control", multiple : true, singularName : "paneContent"}, 
    	"curtainContent" : {type : "sap.ui.core.Control", multiple : true, singularName : "curtainContent"}, 
    	"curtainPaneContent" : {type : "sap.ui.core.Control", multiple : true, singularName : "curtainPaneContent"}, 
    	"headItems" : {type : "sap.ui.unified.ShellHeadItem", multiple : true, singularName : "headItem"}, 
    	"headEndItems" : {type : "sap.ui.unified.ShellHeadItem", multiple : true, singularName : "headEndItem"}, 
    	"search" : {type : "sap.ui.core.Control", multiple : false}, 
    	"canvasSplitContainer" : {type : "sap.ui.unified.SplitContainer", multiple : false, visibility : "hidden"}, 
    	"curtainSplitContainer" : {type : "sap.ui.unified.SplitContainer", multiple : false, visibility : "hidden"}
	}
}});


/**
 * Creates a new subclass of class sap.ui.unified.Shell with name <code>sClassName</code> 
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
 * @name sap.ui.unified.Shell.extend
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * The application icon.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.unified.Shell#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#setIcon
 * @function
 */


/**
 * Getter for property <code>showPane</code>.
 * Shows / Hides the side pane.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>showPane</code>
 * @public
 * @name sap.ui.unified.Shell#getShowPane
 * @function
 */

/**
 * Setter for property <code>showPane</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bShowPane  new value for property <code>showPane</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#setShowPane
 * @function
 */


/**
 * Getter for property <code>showCurtain</code>.
 * Shows / Hides the curtain.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>showCurtain</code>
 * @public
 * @deprecated Since version 1.16.3. 
 * Curtain is deprecated and replaced by ShellOverlay mechanism.
 * @name sap.ui.unified.Shell#getShowCurtain
 * @function
 */

/**
 * Setter for property <code>showCurtain</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bShowCurtain  new value for property <code>showCurtain</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * Curtain is deprecated and replaced by ShellOverlay mechanism.
 * @name sap.ui.unified.Shell#setShowCurtain
 * @function
 */


/**
 * Getter for property <code>showCurtainPane</code>.
 * Shows / Hides the side pane on the curtain.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>showCurtainPane</code>
 * @public
 * @deprecated Since version 1.16.3. 
 * Curtain is deprecated and replaced by ShellOverlay mechanism.
 * @name sap.ui.unified.Shell#getShowCurtainPane
 * @function
 */

/**
 * Setter for property <code>showCurtainPane</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bShowCurtainPane  new value for property <code>showCurtainPane</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16.3. 
 * Curtain is deprecated and replaced by ShellOverlay mechanism.
 * @name sap.ui.unified.Shell#setShowCurtainPane
 * @function
 */


/**
 * Getter for property <code>headerHiding</code>.
 * Whether the header can be hidden (manually or automatically). This feature is only available when touch events are supported.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>headerHiding</code>
 * @public
 * @name sap.ui.unified.Shell#getHeaderHiding
 * @function
 */

/**
 * Setter for property <code>headerHiding</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bHeaderHiding  new value for property <code>headerHiding</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#setHeaderHiding
 * @function
 */


/**
 * Getter for property <code>searchVisible</code>.
 * If set to false, the search area (aggregation 'search') is hidden.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>searchVisible</code>
 * @public
 * @since 1.18
 * @name sap.ui.unified.Shell#getSearchVisible
 * @function
 */

/**
 * Setter for property <code>searchVisible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bSearchVisible  new value for property <code>searchVisible</code>
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @since 1.18
 * @name sap.ui.unified.Shell#setSearchVisible
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The content to appear in the main canvas.
 * 
 * <strong>Note</strong>: this is the default aggregation for Shell.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.unified.Shell#getContent
 * @function
 */


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContent the content to remove or its index or id
 * @return {sap.ui.core.Control} the removed content or null
 * @public
 * @name sap.ui.unified.Shell#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.unified.Shell#removeAllContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.unified.Shell#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>paneContent</code>.<br/>
 * The content to appear in the pane area.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.unified.Shell#getPaneContent
 * @function
 */


/**
 * Inserts a paneContent into the aggregation named <code>paneContent</code>.
 *
 * @param {sap.ui.core.Control}
 *          oPaneContent the paneContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the paneContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the paneContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the paneContent is inserted at 
 *             the last position        
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#insertPaneContent
 * @function
 */

/**
 * Adds some paneContent <code>oPaneContent</code> 
 * to the aggregation named <code>paneContent</code>.
 *
 * @param {sap.ui.core.Control}
 *            oPaneContent the paneContent to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#addPaneContent
 * @function
 */

/**
 * Removes an paneContent from the aggregation named <code>paneContent</code>.
 *
 * @param {int | string | sap.ui.core.Control} vPaneContent the paneContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed paneContent or null
 * @public
 * @name sap.ui.unified.Shell#removePaneContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>paneContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.unified.Shell#removeAllPaneContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>paneContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oPaneContent the paneContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.unified.Shell#indexOfPaneContent
 * @function
 */
	

/**
 * Destroys all the paneContent in the aggregation 
 * named <code>paneContent</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#destroyPaneContent
 * @function
 */


/**
 * Getter for aggregation <code>curtainContent</code>.<br/>
 * The content to appear in the curtain area.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.unified.Shell#getCurtainContent
 * @function
 */


/**
 * Inserts a curtainContent into the aggregation named <code>curtainContent</code>.
 *
 * @param {sap.ui.core.Control}
 *          oCurtainContent the curtainContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the curtainContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the curtainContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the curtainContent is inserted at 
 *             the last position        
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#insertCurtainContent
 * @function
 */

/**
 * Adds some curtainContent <code>oCurtainContent</code> 
 * to the aggregation named <code>curtainContent</code>.
 *
 * @param {sap.ui.core.Control}
 *            oCurtainContent the curtainContent to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#addCurtainContent
 * @function
 */

/**
 * Removes an curtainContent from the aggregation named <code>curtainContent</code>.
 *
 * @param {int | string | sap.ui.core.Control} vCurtainContent the curtainContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed curtainContent or null
 * @public
 * @name sap.ui.unified.Shell#removeCurtainContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>curtainContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.unified.Shell#removeAllCurtainContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>curtainContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oCurtainContent the curtainContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.unified.Shell#indexOfCurtainContent
 * @function
 */
	

/**
 * Destroys all the curtainContent in the aggregation 
 * named <code>curtainContent</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#destroyCurtainContent
 * @function
 */


/**
 * Getter for aggregation <code>curtainPaneContent</code>.<br/>
 * The content to appear in the pane area of the curtain.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.ui.unified.Shell#getCurtainPaneContent
 * @function
 */


/**
 * Inserts a curtainPaneContent into the aggregation named <code>curtainPaneContent</code>.
 *
 * @param {sap.ui.core.Control}
 *          oCurtainPaneContent the curtainPaneContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the curtainPaneContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the curtainPaneContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the curtainPaneContent is inserted at 
 *             the last position        
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#insertCurtainPaneContent
 * @function
 */

/**
 * Adds some curtainPaneContent <code>oCurtainPaneContent</code> 
 * to the aggregation named <code>curtainPaneContent</code>.
 *
 * @param {sap.ui.core.Control}
 *            oCurtainPaneContent the curtainPaneContent to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#addCurtainPaneContent
 * @function
 */

/**
 * Removes an curtainPaneContent from the aggregation named <code>curtainPaneContent</code>.
 *
 * @param {int | string | sap.ui.core.Control} vCurtainPaneContent the curtainPaneContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed curtainPaneContent or null
 * @public
 * @name sap.ui.unified.Shell#removeCurtainPaneContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>curtainPaneContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.unified.Shell#removeAllCurtainPaneContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>curtainPaneContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oCurtainPaneContent the curtainPaneContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.unified.Shell#indexOfCurtainPaneContent
 * @function
 */
	

/**
 * Destroys all the curtainPaneContent in the aggregation 
 * named <code>curtainPaneContent</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#destroyCurtainPaneContent
 * @function
 */


/**
 * Getter for aggregation <code>headItems</code>.<br/>
 * The buttons shown in the begin (left in left-to-right case) of the Shell header. Currently max. 3 buttons are supported.
 * 
 * @return {sap.ui.unified.ShellHeadItem[]}
 * @public
 * @name sap.ui.unified.Shell#getHeadItems
 * @function
 */


/**
 * Inserts a headItem into the aggregation named <code>headItems</code>.
 *
 * @param {sap.ui.unified.ShellHeadItem}
 *          oHeadItem the headItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headItem is inserted at 
 *             the last position        
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#insertHeadItem
 * @function
 */

/**
 * Adds some headItem <code>oHeadItem</code> 
 * to the aggregation named <code>headItems</code>.
 *
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadItem the headItem to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#addHeadItem
 * @function
 */

/**
 * Removes an headItem from the aggregation named <code>headItems</code>.
 *
 * @param {int | string | sap.ui.unified.ShellHeadItem} vHeadItem the headItem to remove or its index or id
 * @return {sap.ui.unified.ShellHeadItem} the removed headItem or null
 * @public
 * @name sap.ui.unified.Shell#removeHeadItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>headItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.ShellHeadItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.unified.Shell#removeAllHeadItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.unified.ShellHeadItem</code> in the aggregation named <code>headItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadItem the headItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.unified.Shell#indexOfHeadItem
 * @function
 */
	

/**
 * Destroys all the headItems in the aggregation 
 * named <code>headItems</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#destroyHeadItems
 * @function
 */


/**
 * Getter for aggregation <code>headEndItems</code>.<br/>
 * The buttons shown in the end (right in left-to-right case) of the Shell header. Currently max. 3 buttons are supported.
 * 
 * @return {sap.ui.unified.ShellHeadItem[]}
 * @public
 * @name sap.ui.unified.Shell#getHeadEndItems
 * @function
 */


/**
 * Inserts a headEndItem into the aggregation named <code>headEndItems</code>.
 *
 * @param {sap.ui.unified.ShellHeadItem}
 *          oHeadEndItem the headEndItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headEndItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headEndItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headEndItem is inserted at 
 *             the last position        
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#insertHeadEndItem
 * @function
 */

/**
 * Adds some headEndItem <code>oHeadEndItem</code> 
 * to the aggregation named <code>headEndItems</code>.
 *
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadEndItem the headEndItem to add; if empty, nothing is inserted
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#addHeadEndItem
 * @function
 */

/**
 * Removes an headEndItem from the aggregation named <code>headEndItems</code>.
 *
 * @param {int | string | sap.ui.unified.ShellHeadItem} vHeadEndItem the headEndItem to remove or its index or id
 * @return {sap.ui.unified.ShellHeadItem} the removed headEndItem or null
 * @public
 * @name sap.ui.unified.Shell#removeHeadEndItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>headEndItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.unified.ShellHeadItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.unified.Shell#removeAllHeadEndItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.unified.ShellHeadItem</code> in the aggregation named <code>headEndItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.unified.ShellHeadItem}
 *            oHeadEndItem the headEndItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.unified.Shell#indexOfHeadEndItem
 * @function
 */
	

/**
 * Destroys all the headEndItems in the aggregation 
 * named <code>headEndItems</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#destroyHeadEndItems
 * @function
 */


/**
 * Getter for aggregation <code>search</code>.<br/>
 * Experimental (This aggregation might change in future!): The search control which should be displayed in the shell header.
 * 
 * @return {sap.ui.core.Control}
 * @public
 * @name sap.ui.unified.Shell#getSearch
 * @function
 */


/**
 * Setter for the aggregated <code>search</code>.
 * @param {sap.ui.core.Control} oSearch
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#setSearch
 * @function
 */
	

/**
 * Destroys the search in the aggregation 
 * named <code>search</code>.
 * @return {sap.ui.unified.Shell} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.unified.Shell#destroySearch
 * @function
 */


// Start of sap\ui\unified\Shell.js
jQuery.sap.require("sap.ui.Device");
jQuery.sap.require("jquery.sap.script");
jQuery.sap.require("jquery.sap.dom");
jQuery.sap.require("sap.ui.unified.SplitContainer");
jQuery.sap.require("sap.ui.core.Popup");
jQuery.sap.require("sap.ui.core.theming.Parameters");

sap.ui.unified.Shell._SIDEPANE_WIDTH_PHONE = 208;
sap.ui.unified.Shell._SIDEPANE_WIDTH_TABLET = 208;
sap.ui.unified.Shell._SIDEPANE_WIDTH_DESKTOP = 240;
sap.ui.unified.Shell._HEADER_ALWAYS_VISIBLE = true; /*Whether header hiding is technically possible (touch enabled)*/
sap.ui.unified.Shell._HEADER_AUTO_CLOSE = true;
sap.ui.unified.Shell._HEADER_TOUCH_TRESHOLD = 30;
if(sap.ui.Device.os.windows && sap.ui.Device.os.version == 8 && sap.ui.Device.browser.chrome){
	sap.ui.unified.Shell._HEADER_TOUCH_TRESHOLD = 15;
}
	
sap.ui.unified.Shell.prototype.init = function(){
	var that = this;
	
	this._rtl = sap.ui.getCore().getConfiguration().getRTL();
	this._animation = sap.ui.getCore().getConfiguration().getAnimation();
	this._showHeader = true;
	this._iHeaderHidingDelay = 3000; /*Currently hidden but maybe a property later (see getter and setter below)*/
	
	this._cont = new sap.ui.unified.SplitContainer(this.getId()+"-container");
	this._cont._bRootContent = true; // see e.g. sap.m.App#onAfterRendering
	this.setAggregation("canvasSplitContainer", this._cont, true);
	
	this._curtCont = new sap.ui.unified.SplitContainer(this.getId()+"-curt-container");
	this._curtCont._bRootContent = true; // see e.g. sap.m.App#onAfterRendering
	this.setAggregation("curtainSplitContainer", this._curtCont, true);
	
	function _setSidePaneWidth(sRange){
		if(!sRange){
			sRange = sap.ui.Device.media.getCurrentRange(sap.ui.Device.media.RANGESETS.SAP_STANDARD).name;
		}
		
		var w = sap.ui.unified.Shell["_SIDEPANE_WIDTH_"+sRange.toUpperCase()]+"px";
		that._cont.setSecondaryContentWidth(w);
		that._curtCont.setSecondaryContentWidth(w);
	};
	
	_setSidePaneWidth();

	this._handleMediaChange = function(mParams){
		if(!that.getDomRef()){
			return;
		}
		
		_setSidePaneWidth(mParams.name);
		
		that._refreshHeader();
	};
	
	sap.ui.Device.media.attachHandler(this._handleMediaChange, this, sap.ui.Device.media.RANGESETS.SAP_STANDARD);
	
	function __refreshHeader(){
		that._refreshHeader();
	};
	
	this._headCenterRenderer = new sap.ui.unified._ContentRenderer(this, this.getId()+"-hdr-center", function(rm){
		sap.ui.unified.ShellRenderer.renderSearch(rm, that);
	}, __refreshHeader);
	
	this._headBeginRenderer = new sap.ui.unified._ContentRenderer(this, this.getId()+"-hdr-begin", function(rm){
		sap.ui.unified.ShellRenderer.renderHeaderItems(rm, that, true);
	}, __refreshHeader);
	
	this._headEndRenderer = new sap.ui.unified._ContentRenderer(this, this.getId()+"-hdr-end", function(rm){
		sap.ui.unified.ShellRenderer.renderHeaderItems(rm, that, false);
	}, __refreshHeader);
};


sap.ui.unified.Shell.prototype.exit = function(){
	sap.ui.Device.media.detachHandler(this._handleMediaChange, this, sap.ui.Device.media.RANGESETS.SAP_STANDARD);
	delete this._handleMediaChange;
	
	this._headCenterRenderer.destroy();
	delete this._headCenterRenderer;
	this._headBeginRenderer.destroy();
	delete this._headBeginRenderer;
	this._headEndRenderer.destroy();
	delete this._headEndRenderer;
	
	delete this._cont; //Destroy of child controls done via aggregation handling
	delete this._curtCont;
};


sap.ui.unified.Shell.prototype.onAfterRendering = function(){
	var that = this;
	
	if(window.addEventListener && !sap.ui.unified.Shell._HEADER_ALWAYS_VISIBLE){
		function headerFocus(oBrowserEvent){
			var oEvent = jQuery.event.fix(oBrowserEvent);
			if(jQuery.sap.containsOrEquals(that.getDomRef("hdr"), oEvent.target)){
				that._timedHideHeader(oEvent.type === "focus");
			}
		};
		
		var oHdr = this.getDomRef("hdr");
		oHdr.addEventListener("focus", headerFocus, true);
		oHdr.addEventListener("blur", headerFocus, true);
	}
	
	this._refreshAfterRendering();
	
	this.$("hdr-center").toggleClass("sapUiUfdShellAnim", !this._noHeadCenterAnim);
};


sap.ui.unified.Shell.prototype.onThemeChanged = function(){
	if(this._refreshAfterRendering() && this._headBeginRenderer){
		this._headBeginRenderer.render(); //Refresh Company Logo
	}
};

sap.ui.unified.Shell.prototype.onfocusin = function(oEvent) {
	var sId = this.getId();
	
	if (oEvent.target.id === sId + "-curt-focusDummyOut") {
		// Jump back to shell when you reach the end of the curtain
		jQuery.sap.focus(this.$("hdrcntnt").firstFocusableDomRef());
	} else if (oEvent.target.id === sId + "-main-focusDummyOut") {
		// Jump to the curtain if it is open (can only reached by tabbing back when curtain is open)
		jQuery.sap.focus(this.$("curtcntnt").firstFocusableDomRef());
	}
};




(function(){

if(sap.ui.Device.support.touch){
	
	sap.ui.unified.Shell._HEADER_ALWAYS_VISIBLE = false;
		
	function _updateHeader(oShell){
		if(oShell._startY === undefined || oShell._currY === undefined){
			return;
		}
		
		var yMove = oShell._currY - oShell._startY;
		if(Math.abs(yMove) > sap.ui.unified.Shell._HEADER_TOUCH_TRESHOLD){
			oShell._doShowHeader(yMove > 0);
			oShell._startY = oShell._currY;
		}
	};
	
	sap.ui.unified.Shell.prototype.ontouchstart = function(oEvent){
		this._startY = oEvent.touches[0].pageY;
		if(this._startY > 2*48){ /*Only when touch starts "nearby" the header*/
			this._startY = undefined;
		}
		this._currY = this._startY;
	};
	
	sap.ui.unified.Shell.prototype.ontouchend = function(oEvent){
		_updateHeader(this);
		this._startY = undefined;
		this._currY = undefined;
	};
	
	sap.ui.unified.Shell.prototype.ontouchcancel = sap.ui.unified.Shell.prototype.ontouchend;
	
	sap.ui.unified.Shell.prototype.ontouchmove = function(oEvent){
		this._currY = oEvent.touches[0].pageY;
		_updateHeader(this);
	};
	
}

})();


// ***************** API / Overridden generated API *****************


sap.ui.unified.Shell.prototype.setHeaderHiding = function(bEnabled){
	bEnabled = !!bEnabled;
	return this._mod(function(bRendered){
		return this.setProperty("headerHiding", bEnabled, bRendered);
	}, function(){
		this._doShowHeader(!bEnabled ? true : this._showHeader);
	});
};


/*Not public, Maybe API later*/
sap.ui.unified.Shell.prototype.setHeaderHidingDelay = function(iDelay){
	this._iHeaderHidingDelay = iDelay;
	return this;
};


/*Not public, Maybe API later*/
sap.ui.unified.Shell.prototype.getHeaderHidingDelay = function(){
	return this._iHeaderHidingDelay;
};


sap.ui.unified.Shell.prototype.getShowPane = function(){
	return this._cont.getShowSecondaryContent();
};


sap.ui.unified.Shell.prototype.setShowPane = function(bShowPane){
	this._cont.setShowSecondaryContent(bShowPane);
	this.setProperty("showPane", !!bShowPane, true);
	return this;
};


sap.ui.unified.Shell.prototype.getShowPane = function(){
	return this._cont.getShowSecondaryContent();
};


sap.ui.unified.Shell.prototype.setShowCurtainPane = function(bShowPane){
	this._curtCont.setShowSecondaryContent(bShowPane);
	this.setProperty("showCurtainPane", !!bShowPane, true);
	return this;
};


sap.ui.unified.Shell.prototype.getShowCurtainPane = function(){
	return this._curtCont.getShowSecondaryContent();
};


sap.ui.unified.Shell.prototype.setShowCurtain = function(bShowCurtain){
	bShowCurtain = !!bShowCurtain;
	
	return this._mod(function(bRendered){
		return this.setProperty("showCurtain", bShowCurtain, bRendered);
	}, function(){
		this.$("main-focusDummyOut").attr("tabindex", bShowCurtain ? 0 : -1);
		this.$().toggleClass("sapUiUfdShellCurtainHidden", !bShowCurtain).toggleClass("sapUiUfdShellCurtainVisible", bShowCurtain);
		
		if(bShowCurtain){
			var zIndex = sap.ui.core.Popup.getNextZIndex();
			this.$("curt").css("z-index", zIndex+1);
			this.$("hdr").css("z-index", zIndex+3);
			this.$("brand").css("z-index", zIndex+7);
			this.$().toggleClass("sapUiUfdShellCurtainClosed", false);
		}
		
		this._timedCurtainClosed(bShowCurtain);
		
		this._doShowHeader(true);
	});
};


sap.ui.unified.Shell.prototype.setIcon = function(sIcon){
	return this._mod(function(bRendered){
		return this.setProperty("icon", sIcon, bRendered);
	}, this._headBeginRenderer);
};


sap.ui.unified.Shell.prototype.setSearchVisible = function(bSearchVisible){
	return this._mod(function(bRendered){
		return this.setProperty("searchVisible", !!bSearchVisible, bRendered);
	}, this._headCenterRenderer);
};


sap.ui.unified.Shell.prototype.setSearch = function(oSearch){
	return this._mod(function(bRendered){
		return this.setAggregation("search", oSearch, bRendered);
	}, this._headCenterRenderer);
};


sap.ui.unified.Shell.prototype.getContent = function() {
	return this._cont.getContent();
};
sap.ui.unified.Shell.prototype.insertContent = function(oContent, iIndex) {
	this._cont.insertContent(oContent, iIndex);
	return this;
};
sap.ui.unified.Shell.prototype.addContent = function(oContent) {
	this._cont.addContent(oContent);
	return this;
};
sap.ui.unified.Shell.prototype.removeContent = function(vIndex) {
	return this._cont.removeContent(vIndex);
};
sap.ui.unified.Shell.prototype.removeAllContent = function() {
	return this._cont.removeAllContent();
};
sap.ui.unified.Shell.prototype.destroyContent = function() {
	this._cont.destroyContent();
	return this;
};


sap.ui.unified.Shell.prototype.getPaneContent = function() {
	return this._cont.getSecondaryContent();
};
sap.ui.unified.Shell.prototype.insertPaneContent = function(oContent, iIndex) {
	this._cont.insertSecondaryContent(oContent, iIndex);
	return this;
};
sap.ui.unified.Shell.prototype.addPaneContent = function(oContent) {
	this._cont.addSecondaryContent(oContent);
	return this;
};
sap.ui.unified.Shell.prototype.removePaneContent = function(vIndex) {
	return this._cont.removeSecondaryContent(vIndex);
};
sap.ui.unified.Shell.prototype.removeAllPaneContent = function() {
	return this._cont.removeAllSecondaryContent();
};
sap.ui.unified.Shell.prototype.destroyPaneContent = function() {
	this._cont.destroySecondaryContent();
	return this;
};


sap.ui.unified.Shell.prototype.getCurtainContent = function() {
	return this._curtCont.getContent();
};
sap.ui.unified.Shell.prototype.insertCurtainContent = function(oContent, iIndex) {
	this._curtCont.insertContent(oContent, iIndex);
	return this;
};
sap.ui.unified.Shell.prototype.addCurtainContent = function(oContent) {
	this._curtCont.addContent(oContent);
	return this;
};
sap.ui.unified.Shell.prototype.removeCurtainContent = function(vIndex) {
	return this._curtCont.removeContent(vIndex);
};
sap.ui.unified.Shell.prototype.removeAllCurtainContent = function() {
	return this._curtCont.removeAllContent();
};
sap.ui.unified.Shell.prototype.destroyCurtainContent = function() {
	this._curtCont.destroyContent();
	return this;
};


sap.ui.unified.Shell.prototype.getCurtainPaneContent = function() {
	return this._curtCont.getSecondaryContent();
};
sap.ui.unified.Shell.prototype.insertCurtainPaneContent = function(oContent, iIndex) {
	this._curtCont.insertSecondaryContent(oContent, iIndex);
	return this;
};
sap.ui.unified.Shell.prototype.addCurtainPaneContent = function(oContent) {
	this._curtCont.addSecondaryContent(oContent);
	return this;
};
sap.ui.unified.Shell.prototype.removeCurtainPaneContent = function(vIndex) {
	return this._curtCont.removeSecondaryContent(vIndex);
};
sap.ui.unified.Shell.prototype.removeAllCurtainPaneContent = function() {
	return this._curtCont.removeAllSecondaryContent();
};
sap.ui.unified.Shell.prototype.destroyCurtainPaneContent = function() {
	this._curtCont.destroySecondaryContent();
	return this;
};


sap.ui.unified.Shell.prototype.insertHeadItem = function(oHeadItem, iIndex) {
	return this._mod(function(bRendered){
		return this.insertAggregation("headItems", oHeadItem, iIndex, bRendered);
	}, this._headBeginRenderer);
};
sap.ui.unified.Shell.prototype.addHeadItem = function(oHeadItem) {
	return this._mod(function(bRendered){
		return this.addAggregation("headItems", oHeadItem, bRendered);
	}, this._headBeginRenderer);
};
sap.ui.unified.Shell.prototype.removeHeadItem = function(vIndex) {
	return this._mod(function(bRendered){
		return this.removeAggregation("headItems", vIndex, bRendered);
	}, this._headBeginRenderer);
};
sap.ui.unified.Shell.prototype.removeAllHeadItems = function() {
	return this._mod(function(bRendered){
		return this.removeAllAggregation("headItems", bRendered);
	}, this._headBeginRenderer);
};
sap.ui.unified.Shell.prototype.destroyHeadItems = function() {
	return this._mod(function(bRendered){
		return this.destroyAggregation("headItems", bRendered);
	}, this._headBeginRenderer);
};


sap.ui.unified.Shell.prototype.insertHeadEndItem = function(oHeadItem, iIndex) {
	return this._mod(function(bRendered){
		return this.insertAggregation("headEndItems", oHeadItem, iIndex, bRendered);
	}, this._headEndRenderer);
};
sap.ui.unified.Shell.prototype.addHeadEndItem = function(oHeadItem) {
	return this._mod(function(bRendered){
		return this.addAggregation("headEndItems", oHeadItem, bRendered);
	}, this._headEndRenderer);
};
sap.ui.unified.Shell.prototype.removeHeadEndItem = function(vIndex) {
	return this._mod(function(bRendered){
		return this.removeAggregation("headEndItems", vIndex, bRendered);
	}, this._headEndRenderer);
};
sap.ui.unified.Shell.prototype.removeAllHeadEndItems = function() {
	return this._mod(function(bRendered){
		return this.removeAllAggregation("headEndItems", bRendered);
	}, this._headEndRenderer);
};
sap.ui.unified.Shell.prototype.destroyHeadEndItems = function() {
	return this._mod(function(bRendered){
		return this.destroyAggregation("headEndItems", bRendered);
	}, this._headEndRenderer);
};


// ***************** Private Helpers *****************


sap.ui.unified.Shell.prototype._doShowHeader = function(bShow){
	this._showHeader = this._isHeaderHidingActive() ? !!bShow : true;
	
	this.$().toggleClass("sapUiUfdShellHeadHidden", !this._showHeader).toggleClass("sapUiUfdShellHeadVisible", this._showHeader);
	
	if(this._showHeader){
		this._timedHideHeader();
	}
};

sap.ui.unified.Shell.prototype._timedHideHeader = function(bClearOnly){
	if(this._headerHidingTimer){
		jQuery.sap.clearDelayedCall(this._headerHidingTimer);
		this._headerHidingTimer = null;
	}
	
	if(bClearOnly || !sap.ui.unified.Shell._HEADER_AUTO_CLOSE || !this._isHeaderHidingActive() || this._iHeaderHidingDelay <= 0){
		return;
	}
	
	this._headerHidingTimer = jQuery.sap.delayedCall(this._iHeaderHidingDelay, this, function(){
		if(this._isHeaderHidingActive() && this._iHeaderHidingDelay > 0 && !jQuery.sap.containsOrEquals(this.getDomRef("hdr"), document.activeElement)){
			this._doShowHeader(false);
		}
	});
};

sap.ui.unified.Shell.prototype._timedCurtainClosed = function(bClearOnly){
	if(this._curtainClosedTimer){
		jQuery.sap.clearDelayedCall(this._curtainClosedTimer);
		this._curtainClosedTimer = null;
	}
	
	if(bClearOnly){
		return;
	}
	
	var duration = parseInt(sap.ui.core.theming.Parameters.get("sapUiUfdShellAnimDuration"), 10);
	if(!this._animation || (sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version < 10)){
		duration = 0;
	}
	
	this._curtainClosedTimer = jQuery.sap.delayedCall(duration, this, function(){
		this._curtainClosedTimer = null;
		this.$("curt").css("z-index", "");
		this.$("hdr").css("z-index", "");
		this.$("brand").css("z-index", "");
		this.$().toggleClass("sapUiUfdShellCurtainClosed", true);
	});
};


sap.ui.unified.Shell.prototype._mod = function(fMod, oDoIfRendered){
	var bRendered = !!this.getDomRef();
	var res = fMod.apply(this, [bRendered]);
	if(bRendered && oDoIfRendered){
		if(oDoIfRendered instanceof sap.ui.unified._ContentRenderer){
			oDoIfRendered.render();
		}else{
			oDoIfRendered.apply(this);
		}
	}
	return res;
};


sap.ui.unified.Shell.prototype._refreshHeader = function(){
	function updateItems(aItems){
		for(var i=0; i<aItems.length; i++){
			aItems[i]._refreshIcon();
		}
	}
	
	updateItems(this.getHeadItems());
	updateItems(this.getHeadEndItems());
	
	var isPhoneSize = jQuery("html").hasClass("sapUiMedia-Std-Phone"),
		searchVisible = !this.$("hdr-search").hasClass("sapUiUfdShellHidden"),
		$logo = this.$("icon");
	
	$logo.parent().toggleClass("sapUiUfdShellHidden", isPhoneSize && searchVisible);
	
	var	we = this.$("hdr-end").outerWidth(),
		wb = this.$("hdr-begin").outerWidth(),
		wmax = Math.max(we, wb),
		begin = (isPhoneSize && searchVisible ? wb : wmax)+"px",
		end = (isPhoneSize && searchVisible ? we : wmax)+"px";

	this.$("hdr-center").css({
		"left": this._rtl ? end : begin,
		"right": this._rtl ? begin : end
	});
};


sap.ui.unified.Shell.prototype._getIcon = function(){
	var ico = this.getIcon();
	if(!ico){
		//see sap.m.Shell
		jQuery.sap.require("sap.ui.core.theming.Parameters");
		ico = sap.ui.core.theming.Parameters.get("sapUiGlobalLogo"); // theme logo
		if(ico){
			var match = /url[\s]*\('?"?([^\'")]*)'?"?\)/.exec(ico);
			if(match){
				ico = match[1];
			}else if(ico === "''"){ // theme default
				ico = null;
			}
		}
	}
	
	return ico || sap.ui.resource('sap.ui.core', 'themes/base/img/1x1.gif');
};


sap.ui.unified.Shell.prototype._refreshAfterRendering = function(){
	var oDom = this.getDomRef();
	
	if(!oDom){
		return false;
	}

	this._repaint(oDom);
	this._refreshHeader();
	
	this._timedHideHeader();
	
	return true;
};


sap.ui.unified.Shell.prototype._repaint = function(oDom){
	if(sap.ui.Device.browser.webkit){
		var display = oDom.style.display;
		oDom.style.display = "none";
		oDom.offsetHeight;
		oDom.style.display = display;
	}
};

sap.ui.unified.Shell.prototype._isHeaderHidingActive = function(){
	// Not active if no touch, the curtain is open or the hiding is deactivated via API
	if(sap.ui.unified.Shell._HEADER_ALWAYS_VISIBLE || this.getShowCurtain() || !this.getHeaderHiding() || sap.ui.unified._iNumberOfOpenedShellOverlays > 0){
		return false;
	}
	return true;
};


//***************** Avoid Rerendering *****************


sap.ui.unified.Shell.prototype.invalidate = function(oOrigin) {
	if(oOrigin instanceof sap.ui.unified.ShellHeadItem && this._headBeginRenderer && this._headEndRenderer){
		this._headBeginRenderer.render();
		this._headEndRenderer.render();
	}else{
		sap.ui.core.Control.prototype.invalidate.apply(this, arguments);
	}
};


