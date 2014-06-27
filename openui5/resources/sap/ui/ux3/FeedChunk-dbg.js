/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.ux3.FeedChunk.
jQuery.sap.declare("sap.ui.ux3.FeedChunk");
jQuery.sap.require("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new FeedChunk.
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
 * <li>{@link #getSender sender} : string</li>
 * <li>{@link #getTimestamp timestamp} : string</li>
 * <li>{@link #getDeletionAllowed deletionAllowed} : boolean (default: false)</li>
 * <li>{@link #getCommentChunk commentChunk} : boolean (default: false)</li>
 * <li>{@link #getFeederThumbnailSrc feederThumbnailSrc} : sap.ui.core.URI</li>
 * <li>{@link #getFeederSender feederSender} : string</li>
 * <li>{@link #getFlagged flagged} : boolean (default: false)</li>
 * <li>{@link #getFavorite favorite} : boolean</li>
 * <li>{@link #getShared shared} : boolean (default: false)</li>
 * <li>{@link #getEnableFlag enableFlag} : boolean (default: true)</li>
 * <li>{@link #getEnableShare enableShare} : boolean (default: true)</li>
 * <li>{@link #getEnableComment enableComment} : boolean (default: true)</li>
 * <li>{@link #getEnableInspect enableInspect} : boolean (default: true)</li>
 * <li>{@link #getEnableFavorite enableFavorite} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getComments comments} : sap.ui.ux3.FeedChunk[]</li>
 * <li>{@link #getActionMenuItems actionMenuItems} : sap.ui.commons.MenuItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.ux3.FeedChunk#event:deleted deleted} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.FeedChunk#event:commentAdded commentAdded} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.FeedChunk#event:toggleFlagged toggleFlagged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.FeedChunk#event:senderClicked senderClicked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.FeedChunk#event:referenceClicked referenceClicked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.FeedChunk#event:toggleFavorite toggleFavorite} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.FeedChunk#event:inspect inspect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.FeedChunk#event:toggleShared toggleShared} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.ux3.FeedChunk#event:actionItemSelected actionItemSelected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The unit that is embedded - single-wise or in a multiple way - into a Feed control.
 * The control provides a set of properties for text, sender information, time stamp,
 * comments, and functions such as flagging the entry to be favorite, shared, or flagged.
 * 
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @experimental Since version 1.2. 
 * The whole Feed/Feeder API is still under discussion, significant changes are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the Feed model topic is still open.
 * @name sap.ui.ux3.FeedChunk
 */
sap.ui.core.Control.extend("sap.ui.ux3.FeedChunk", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.ux3",
	properties : {
		"thumbnailSrc" : {type : "sap.ui.core.URI", group : "Data", defaultValue : null},
		"text" : {type : "string", group : "Data", defaultValue : null},
		"sender" : {type : "string", group : "Data", defaultValue : null},
		"timestamp" : {type : "string", group : "Data", defaultValue : null},
		"deletionAllowed" : {type : "boolean", group : "Behavior", defaultValue : false},
		"commentChunk" : {type : "boolean", group : "Appearance", defaultValue : false, deprecated: true},
		"feederThumbnailSrc" : {type : "sap.ui.core.URI", group : "Data", defaultValue : null},
		"feederSender" : {type : "string", group : "Data", defaultValue : null},
		"flagged" : {type : "boolean", group : "Data", defaultValue : false},
		"favorite" : {type : "boolean", group : "Data", defaultValue : null},
		"shared" : {type : "boolean", group : "Data", defaultValue : false},
		"enableFlag" : {type : "boolean", group : "Appearance", defaultValue : true},
		"enableShare" : {type : "boolean", group : "Appearance", defaultValue : true},
		"enableComment" : {type : "boolean", group : "Appearance", defaultValue : true},
		"enableInspect" : {type : "boolean", group : "Appearance", defaultValue : true},
		"enableFavorite" : {type : "boolean", group : "Appearance", defaultValue : true}
	},
	aggregations : {
    	"comments" : {type : "sap.ui.ux3.FeedChunk", multiple : true, singularName : "comment", bindable : "bindable"}, 
    	"actionMenuItems" : {type : "sap.ui.commons.MenuItem", multiple : true, singularName : "actionMenuItem", bindable : "bindable"}
	},
	events : {
		"deleted" : {}, 
		"commentAdded" : {}, 
		"toggleFlagged" : {}, 
		"senderClicked" : {}, 
		"referenceClicked" : {}, 
		"toggleFavorite" : {}, 
		"inspect" : {}, 
		"toggleShared" : {}, 
		"actionItemSelected" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.ux3.FeedChunk with name <code>sClassName</code> 
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
 * @name sap.ui.ux3.FeedChunk.extend
 * @function
 */

sap.ui.ux3.FeedChunk.M_EVENTS = {'deleted':'deleted','commentAdded':'commentAdded','toggleFlagged':'toggleFlagged','senderClicked':'senderClicked','referenceClicked':'referenceClicked','toggleFavorite':'toggleFavorite','inspect':'inspect','toggleShared':'toggleShared','actionItemSelected':'actionItemSelected'};


/**
 * Getter for property <code>thumbnailSrc</code>.
 * URL to the thumbnail image.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>thumbnailSrc</code>
 * @public
 * @name sap.ui.ux3.FeedChunk#getThumbnailSrc
 * @function
 */

/**
 * Setter for property <code>thumbnailSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sThumbnailSrc  new value for property <code>thumbnailSrc</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#setThumbnailSrc
 * @function
 */


/**
 * Getter for property <code>text</code>.
 * The FeedChunk text. @References are supported.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.ux3.FeedChunk#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#setText
 * @function
 */


/**
 * Getter for property <code>sender</code>.
 * Sender of the chunk
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>sender</code>
 * @public
 * @name sap.ui.ux3.FeedChunk#getSender
 * @function
 */

/**
 * Setter for property <code>sender</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSender  new value for property <code>sender</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#setSender
 * @function
 */


/**
 * Getter for property <code>timestamp</code>.
 * Format is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC time zone
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>timestamp</code>
 * @public
 * @name sap.ui.ux3.FeedChunk#getTimestamp
 * @function
 */

/**
 * Setter for property <code>timestamp</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTimestamp  new value for property <code>timestamp</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#setTimestamp
 * @function
 */


/**
 * Getter for property <code>deletionAllowed</code>.
 * Flag if the deletion of the chunk shall be allowed
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>deletionAllowed</code>
 * @public
 * @name sap.ui.ux3.FeedChunk#getDeletionAllowed
 * @function
 */

/**
 * Setter for property <code>deletionAllowed</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bDeletionAllowed  new value for property <code>deletionAllowed</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#setDeletionAllowed
 * @function
 */


/**
 * Getter for property <code>commentChunk</code>.
 * This flag changes a FeedChunk into a CommentChunk. In this case, it can not have own comments,
 * furthermore it must be assigned to a FeedChunk.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>commentChunk</code>
 * @public
 * @deprecated Since version 1.4.0. 
 * Not longer used. If a chunk is a comment is determined from hierarchy. If the parent is a chunk it's automatically a comment.
 * @name sap.ui.ux3.FeedChunk#getCommentChunk
 * @function
 */

/**
 * Setter for property <code>commentChunk</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bCommentChunk  new value for property <code>commentChunk</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.4.0. 
 * Not longer used. If a chunk is a comment is determined from hierarchy. If the parent is a chunk it's automatically a comment.
 * @name sap.ui.ux3.FeedChunk#setCommentChunk
 * @function
 */


/**
 * Getter for property <code>feederThumbnailSrc</code>.
 * URL to the thumbnail image for the comment feeder.
 * This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>feederThumbnailSrc</code>
 * @public
 * @name sap.ui.ux3.FeedChunk#getFeederThumbnailSrc
 * @function
 */

/**
 * Setter for property <code>feederThumbnailSrc</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sFeederThumbnailSrc  new value for property <code>feederThumbnailSrc</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#setFeederThumbnailSrc
 * @function
 */


/**
 * Getter for property <code>feederSender</code>.
 * Sender for the comment feeder
 * This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>feederSender</code>
 * @public
 * @name sap.ui.ux3.FeedChunk#getFeederSender
 * @function
 */

/**
 * Setter for property <code>feederSender</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFeederSender  new value for property <code>feederSender</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#setFeederSender
 * @function
 */


/**
 * Getter for property <code>flagged</code>.
 * Defines whether the entry is flagged. This property is not supported for comment chunks.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>flagged</code>
 * @public
 * @name sap.ui.ux3.FeedChunk#getFlagged
 * @function
 */

/**
 * Setter for property <code>flagged</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bFlagged  new value for property <code>flagged</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#setFlagged
 * @function
 */


/**
 * Getter for property <code>favorite</code>.
 * Defines whether the entry shall be displayed as favorite. This property is not supported for comment chunks.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>favorite</code>
 * @public
 * @name sap.ui.ux3.FeedChunk#getFavorite
 * @function
 */

/**
 * Setter for property <code>favorite</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bFavorite  new value for property <code>favorite</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#setFavorite
 * @function
 */


/**
 * Getter for property <code>shared</code>.
 * Defines whether the entry shall be shared. This property is not supported for comment chunks.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>shared</code>
 * @public
 * @name sap.ui.ux3.FeedChunk#getShared
 * @function
 */

/**
 * Setter for property <code>shared</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bShared  new value for property <code>shared</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#setShared
 * @function
 */


/**
 * Getter for property <code>enableFlag</code>.
 * If true the flag action is enabled.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableFlag</code>
 * @public
 * @name sap.ui.ux3.FeedChunk#getEnableFlag
 * @function
 */

/**
 * Setter for property <code>enableFlag</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableFlag  new value for property <code>enableFlag</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#setEnableFlag
 * @function
 */


/**
 * Getter for property <code>enableShare</code>.
 * If true the share action is enabled.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableShare</code>
 * @public
 * @name sap.ui.ux3.FeedChunk#getEnableShare
 * @function
 */

/**
 * Setter for property <code>enableShare</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableShare  new value for property <code>enableShare</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#setEnableShare
 * @function
 */


/**
 * Getter for property <code>enableComment</code>.
 * If true the comment action is enabled.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableComment</code>
 * @public
 * @name sap.ui.ux3.FeedChunk#getEnableComment
 * @function
 */

/**
 * Setter for property <code>enableComment</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableComment  new value for property <code>enableComment</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#setEnableComment
 * @function
 */


/**
 * Getter for property <code>enableInspect</code>.
 * If true the inspect action is enabled.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableInspect</code>
 * @public
 * @name sap.ui.ux3.FeedChunk#getEnableInspect
 * @function
 */

/**
 * Setter for property <code>enableInspect</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableInspect  new value for property <code>enableInspect</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#setEnableInspect
 * @function
 */


/**
 * Getter for property <code>enableFavorite</code>.
 * If true the favorite action is enabled.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enableFavorite</code>
 * @public
 * @name sap.ui.ux3.FeedChunk#getEnableFavorite
 * @function
 */

/**
 * Setter for property <code>enableFavorite</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnableFavorite  new value for property <code>enableFavorite</code>
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#setEnableFavorite
 * @function
 */


/**
 * Getter for aggregation <code>comments</code>.<br/>
 * Comments on this chunk
 * 
 * @return {sap.ui.ux3.FeedChunk[]}
 * @public
 * @name sap.ui.ux3.FeedChunk#getComments
 * @function
 */


/**
 * Inserts a comment into the aggregation named <code>comments</code>.
 *
 * @param {sap.ui.ux3.FeedChunk}
 *          oComment the comment to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the comment should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the comment is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the comment is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#insertComment
 * @function
 */

/**
 * Adds some comment <code>oComment</code> 
 * to the aggregation named <code>comments</code>.
 *
 * @param {sap.ui.ux3.FeedChunk}
 *            oComment the comment to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#addComment
 * @function
 */

/**
 * Removes an comment from the aggregation named <code>comments</code>.
 *
 * @param {int | string | sap.ui.ux3.FeedChunk} vComment the comment to remove or its index or id
 * @return {sap.ui.ux3.FeedChunk} the removed comment or null
 * @public
 * @name sap.ui.ux3.FeedChunk#removeComment
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>comments</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.ux3.FeedChunk[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.FeedChunk#removeAllComments
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.ux3.FeedChunk</code> in the aggregation named <code>comments</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.ux3.FeedChunk}
 *            oComment the comment whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.FeedChunk#indexOfComment
 * @function
 */
	

/**
 * Destroys all the comments in the aggregation 
 * named <code>comments</code>.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#destroyComments
 * @function
 */


/**
 * Binder for aggregation <code>comments</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#bindComments
 * @function
 */

/**
 * Unbinder for aggregation <code>comments</code>.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#unbindComments
 * @function
 */


/**
 * Getter for aggregation <code>actionMenuItems</code>.<br/>
 * MenuItems to open when there is a click on the action menu button
 * 
 * @return {sap.ui.commons.MenuItem[]}
 * @public
 * @name sap.ui.ux3.FeedChunk#getActionMenuItems
 * @function
 */


/**
 * Inserts a actionMenuItem into the aggregation named <code>actionMenuItems</code>.
 *
 * @param {sap.ui.commons.MenuItem}
 *          oActionMenuItem the actionMenuItem to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the actionMenuItem should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the actionMenuItem is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the actionMenuItem is inserted at 
 *             the last position        
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#insertActionMenuItem
 * @function
 */

/**
 * Adds some actionMenuItem <code>oActionMenuItem</code> 
 * to the aggregation named <code>actionMenuItems</code>.
 *
 * @param {sap.ui.commons.MenuItem}
 *            oActionMenuItem the actionMenuItem to add; if empty, nothing is inserted
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#addActionMenuItem
 * @function
 */

/**
 * Removes an actionMenuItem from the aggregation named <code>actionMenuItems</code>.
 *
 * @param {int | string | sap.ui.commons.MenuItem} vActionMenuItem the actionMenuItem to remove or its index or id
 * @return {sap.ui.commons.MenuItem} the removed actionMenuItem or null
 * @public
 * @name sap.ui.ux3.FeedChunk#removeActionMenuItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>actionMenuItems</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.MenuItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.ux3.FeedChunk#removeAllActionMenuItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.MenuItem</code> in the aggregation named <code>actionMenuItems</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.MenuItem}
 *            oActionMenuItem the actionMenuItem whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.ux3.FeedChunk#indexOfActionMenuItem
 * @function
 */
	

/**
 * Destroys all the actionMenuItems in the aggregation 
 * named <code>actionMenuItems</code>.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#destroyActionMenuItems
 * @function
 */


/**
 * Binder for aggregation <code>actionMenuItems</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#bindActionMenuItems
 * @function
 */

/**
 * Unbinder for aggregation <code>actionMenuItems</code>.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#unbindActionMenuItems
 * @function
 */


/**
 * Event is fired when the deletion button is pressed. 
 *
 * @name sap.ui.ux3.FeedChunk#deleted
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'deleted' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 *  
 * Event is fired when the deletion button is pressed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#attachDeleted
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'deleted' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#detachDeleted
 * @function
 */

/**
 * Fire event deleted to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.FeedChunk#fireDeleted
 * @function
 */


/**
 * Event is raised when a comment is added to the entry. This event is not supported for comment chunks. 
 *
 * @name sap.ui.ux3.FeedChunk#commentAdded
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.ux3.FeedChunk} oControlEvent.getParameters.comment New comment chunk
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'commentAdded' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 *  
 * Event is raised when a comment is added to the entry. This event is not supported for comment chunks. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#attachCommentAdded
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'commentAdded' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#detachCommentAdded
 * @function
 */

/**
 * Fire event commentAdded to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'comment' of type <code>sap.ui.ux3.FeedChunk</code> New comment chunk</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.FeedChunk#fireCommentAdded
 * @function
 */


/**
 * Event is raised when the user clicks to flag the entry. This event is not supported for comment chunks. 
 *
 * @name sap.ui.ux3.FeedChunk#toggleFlagged
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.flagged Current flagged state
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'toggleFlagged' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 *  
 * Event is raised when the user clicks to flag the entry. This event is not supported for comment chunks. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#attachToggleFlagged
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'toggleFlagged' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#detachToggleFlagged
 * @function
 */

/**
 * Fire event toggleFlagged to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'flagged' of type <code>boolean</code> Current flagged state</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.FeedChunk#fireToggleFlagged
 * @function
 */


/**
 * Event is fired when the thumbnail or the name of the sender is clicked. 
 *
 * @name sap.ui.ux3.FeedChunk#senderClicked
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'senderClicked' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 *  
 * Event is fired when the thumbnail or the name of the sender is clicked. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#attachSenderClicked
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'senderClicked' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#detachSenderClicked
 * @function
 */

/**
 * Fire event senderClicked to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.FeedChunk#fireSenderClicked
 * @function
 */


/**
 * Click on a @-reference 
 *
 * @name sap.ui.ux3.FeedChunk#referenceClicked
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.text Text of the @-reference
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'referenceClicked' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 *  
 * Click on a @-reference 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#attachReferenceClicked
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'referenceClicked' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#detachReferenceClicked
 * @function
 */

/**
 * Fire event referenceClicked to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'text' of type <code>string</code> Text of the @-reference</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.FeedChunk#fireReferenceClicked
 * @function
 */


/**
 * Event is raised when the user clicks to set the entry as favorite. This event is not supported for comment chunks. 
 *
 * @name sap.ui.ux3.FeedChunk#toggleFavorite
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.favorite Current favorite state
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'toggleFavorite' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 *  
 * Event is raised when the user clicks to set the entry as favorite. This event is not supported for comment chunks. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#attachToggleFavorite
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'toggleFavorite' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#detachToggleFavorite
 * @function
 */

/**
 * Fire event toggleFavorite to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'favorite' of type <code>boolean</code> Current favorite state</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.FeedChunk#fireToggleFavorite
 * @function
 */


/**
 * Event is fired when the inspect button was pressed 
 *
 * @name sap.ui.ux3.FeedChunk#inspect
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'inspect' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 *  
 * Event is fired when the inspect button was pressed 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#attachInspect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'inspect' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#detachInspect
 * @function
 */

/**
 * Fire event inspect to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.FeedChunk#fireInspect
 * @function
 */


/**
 * Event is raised when the user clicks to share the entry. This event is not supported for comment chunks. 
 *
 * @name sap.ui.ux3.FeedChunk#toggleShared
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.shareed Current shared state
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'toggleShared' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 *  
 * Event is raised when the user clicks to share the entry. This event is not supported for comment chunks. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#attachToggleShared
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'toggleShared' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#detachToggleShared
 * @function
 */

/**
 * Fire event toggleShared to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'shareed' of type <code>boolean</code> Current shared state</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.FeedChunk#fireToggleShared
 * @function
 */


/**
 * Event is fired when an item from the action menu button was selected. 
 *
 * @name sap.ui.ux3.FeedChunk#actionItemSelected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.itemId The Id of the selected item
 * @param {sap.ui.commons.MenuItemBase} oControlEvent.getParameters.item The selected item
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'actionItemSelected' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself. 
 *  
 * Event is fired when an item from the action menu button was selected. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.ux3.FeedChunk</code>.<br/> itself.
 *
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#attachActionItemSelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'actionItemSelected' event of this <code>sap.ui.ux3.FeedChunk</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.ux3.FeedChunk#detachActionItemSelected
 * @function
 */

/**
 * Fire event actionItemSelected to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'itemId' of type <code>string</code> The Id of the selected item</li>
 * <li>'item' of type <code>sap.ui.commons.MenuItemBase</code> The selected item</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.ux3.FeedChunk} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.ux3.FeedChunk#fireActionItemSelected
 * @function
 */


// Start of sap\ui\ux3\FeedChunk.js
jQuery.sap.require("sap.ui.core.theming.Parameters");
jQuery.sap.require("sap.ui.commons.MenuButton");
jQuery.sap.require("sap.ui.ux3.Feeder");

///**
// * This file defines behavior for the control,
// */

sap.ui.ux3.FeedChunk.prototype.init = function(){
   this.maxComments = 2; // max. number of comments displayed initially
   this.allComments = false; // initially render only maxComments
   this.rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
   this.expanded = false;
};

sap.ui.ux3.FeedChunk.prototype.initCommentFeeder = function(){

	// create comment feeder if needed
	if (!this.oCommentFeeder) {
		this.oCommentFeeder = new sap.ui.ux3.Feeder( this.getId()+'-CommentFeeder', {
			type: sap.ui.ux3.FeederType.Comment
		}).setParent(this);
		this.oCommentFeeder.attachEvent('submit', this.handleCommentFeederSubmit, this); // attach event this way to have the right this-reference in handler
		this.showCommentFeeder = true;
	}

};

sap.ui.ux3.FeedChunk.prototype.initToolsButton = function(){

	if (!this.oToolsButton) {
		this.oToolsButton = new sap.ui.commons.MenuButton( this.getId()+'-toolsButton', {
			tooltip: this.rb.getText('FEED_TOOLS'),
			lite: true,
			menu: new sap.ui.commons.Menu(this.getId()+'-toolsMenu')
		}).setParent(this);
		this.oToolsButton.attachEvent('itemSelected', this.handleToolsButtonSelected, this); // attach event this way to have the right this-reference in handler

		var sIcon = sap.ui.core.theming.Parameters.get('sap.ui.ux3.Feed:sapUiFeedToolsIconUrl');
		var sIconHover = sap.ui.core.theming.Parameters.get('sap.ui.ux3.Feed:sapUiFeedToolsIconHoverUrl');
		if (sIcon) {
			this.oToolsButton.setProperty('icon', jQuery.sap.getModulePath("sap.ui.ux3", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + sIcon, true);
		}
		if (sIconHover) {
			this.oToolsButton.setProperty('iconHovered', jQuery.sap.getModulePath("sap.ui.ux3", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + sIconHover, true);
		}
	}

};

sap.ui.ux3.FeedChunk.prototype.exit = function(){

	if (this.oCommentFeeder) {
		this.oCommentFeeder.destroy();
		delete this.oCommentFeeder;
	}
	if (this.oToolsButton) {
		this.oToolsButton.destroy();
		delete this.oToolsButton;
	}
	this.rb = undefined;
	this.showCommentFeeder = undefined;
	this.expanded = undefined;
	this.oText = undefined;
	if (this.oHCMMenuButton) {
		this.oHCMMenuButton.destroy();
		delete this.oHCMMenuButton;
	}

};

sap.ui.ux3.FeedChunk.prototype.onAfterRendering = function(){

	// if text is cut show expand button
	this.oText = this.$().children(".sapUiFeedChunkText").get(0);
	if (this.oText.clientHeight < this.oText.scrollHeight) {
		// if tags are rendered put button in tag-DIV
		var oFather = this.$().children(".sapUiFeedChunkByline").get(0);
		jQuery(oFather).append(sap.ui.ux3.FeedChunkRenderer.renderExpander(this));

		if (this.expanded) {
			// expanded
			jQuery(this.oText).css('height', 'auto');
		}
	}

};

/**
 * handler for click event
 *
 * @private
 */
sap.ui.ux3.FeedChunk.prototype.onclick = function(oEvent){

	var sTargetId = oEvent.target.getAttribute( 'ID' );

	if(sTargetId){
		switch ( sTargetId ){
		case ( this.getId() + '-delete' ):
			// Click on delete button
			this.fireDeleted();
		break;
		case ( this.getId() + '-sender'):
			// Click on sender
			this.fireSenderClicked();
		break;
		case ( this.getId() + '-thumb' ):
			// Click on sender
			this.fireSenderClicked();
		break;
		case ( this.getId() + '-exp' ):
			// Click on expand/collapse button
			var sNewTitle = '';
			if (this.expanded) {
				// collapse
				jQuery(this.oText).css('height', '');
				sNewTitle = this.rb.getText("FEED_EXPAND");
				this.expanded = false;
			} else {
				// expand
				jQuery(this.oText).css('height', 'auto');
				sNewTitle = this.rb.getText("FEED_COLLAPSE");
				this.expanded = true;
			}
			jQuery.sap.byId(sTargetId).attr('title',sNewTitle).toggleClass('sapUiFeedChunkExpand sapUiFeedChunkCollapse');
		break;
		case ( this.getId() + '-all' ):
			// Click on sender
			this.showAllComments();
		break;
		case ( this.getId() + '-ActComment' ):
			// Click Add comment button
			if(!this.showCommentFeeder){
				this.initCommentFeeder();
				this.rerender();
			}
		break;
		case ( this.getId() + '-ActFlag' ):
			// Click flag button
			this.setFlagged(!this.getFlagged());
			this.fireToggleFlagged({flagged: this.getFlagged()});
		break;
		case ( this.getId() + '-ActFavorite' ):
			// Click favorite button
			this.setFavorite(!this.getFavorite());
			this.fireToggleFavorite({favorite: this.getFavorite()});
		break;
		case ( this.getId() + '-ActInspect' ):
			// Click inspect button
			this.fireInspect();
		break;
		case ( this.getId() + '-ActShare' ):
			// Click favorite button
			this.setShared(!this.getShared());
			this.fireToggleShared({shared: this.getShared()});
		break;
		default:
			//Reference
			if(sTargetId.search(this.getId() + '-Ref') != -1){
				this.fireReferenceClicked({text: jQuery(oEvent.target).text()});
			}

		break;
		}
	}

	oEvent.stopPropagation(); //to prevent comment chunks to propagate event to parentChunk

};

/**
 * show all comments
 * rerender comment section
 *
 * @private
 */
sap.ui.ux3.FeedChunk.prototype.showAllComments = function(){

	this.allComments = !this.allComments;

	var $commentSection = jQuery.sap.byId(this.getId() + " > section"); // use sap function instead of jQuery child selector because of escaping ID
	if ($commentSection.length > 0) {
		var rm = sap.ui.getCore().createRenderManager();
		this.getRenderer().renderComments(rm, this);
		rm.flush($commentSection[0]);
		rm.destroy();
	}

};

/**
 * Handler for Comment feeder submit event
 *
 * @private
 */
sap.ui.ux3.FeedChunk.prototype.handleCommentFeederSubmit = function(oEvent){

	var oDate = new Date();
//	var sDate = String(oDate.getFullYear()) + String(oDate.getMonth()) + String(oDate.getDate()) + String(oDate.getHours()) + String(oDate.getMinutes()) + String(oDate.getSeconds());
	var sDate = String(oDate);

	var oNewComment = new sap.ui.ux3.FeedChunk(this.getId()+'-new-'+this.getComments().length, {
		text: oEvent.getParameter('text'),
		commentChunk: true,
		deletionAllowed: true,
		timestamp: sDate,
		sender: this.getFeederSender(),
		thumbnailSrc: this.getFeederThumbnailSrc()
	});

	// new comments are shown at the bottom
	this.addComment(oNewComment);
	this.fireCommentAdded({comment: oNewComment});

};

/**
 * Handler for tools menu button item selection
 *
 * @private
 */
sap.ui.ux3.FeedChunk.prototype.handleToolsButtonSelected = function(oEvent){

	if(oEvent.getParameter('itemId') == this.getId() + '-actDelete'){
		this.fireDeleted();
	}else{
		// just forward event
		this.fireActionItemSelected(oEvent.mParameters);
	}

};

/*
 * Overwrite generated function
 */
sap.ui.ux3.FeedChunk.prototype.insertComment = function(oComment, iIndex) {

	this.insertAggregation("comments", oComment, iIndex);
	this.initCommentFeeder();
	return this;

};

sap.ui.ux3.FeedChunk.prototype.addComment = function(oComment) {

	this.addAggregation("comments", oComment);
	this.initCommentFeeder();
	return this;

};

sap.ui.ux3.FeedChunk.prototype.setDeletionAllowed = function(bDeletionAllowed) {

	if (bDeletionAllowed == this.getDeletionAllowed()) {
		// nothing to do
		return this;
	}

	this.setProperty("deletionAllowed", bDeletionAllowed);
	if (bDeletionAllowed) {
		this.initToolsButton();
		//add deletion item from menu
		this.oToolsButton.getMenu().insertItem(new sap.ui.commons.MenuItem(this.getId() + '-actDelete',{text: this.rb.getText('FEED_DELETE')}), 0);
	}else{
		//remove deletion item from menu
		if (this.oToolsButton) {
			this.oToolsButton.getMenu().removeItem(this.getId() + '-actDelete');
		}
	}

	return this;

};

// connect ActionMenuItems to MenuButtons menu
sap.ui.ux3.FeedChunk.prototype.getActionMenuItems = function() {

	if (this.oToolsButton){
		// as parent of items is the menu use menus aggregation
		var aItems = this.oToolsButton.getMenu().getItems();
		// remove delete item
		if (aItems.length > 0 && aItems[0].getId() == (this.getId() + '-actDelete')) {
			aItems.shift();
		}
		return aItems;
	}

};

sap.ui.ux3.FeedChunk.prototype.insertActionMenuItem = function(oActionMenuItem, iIndex) {

	this.initToolsButton();
	// if there is a delete item adjust index
	var aItems = this.oToolsButton.getMenu().getItems();
	if (aItems.length > 0 && aItems[0].getId() == (this.getId() + '-actDelete')) {
		iIndex++;
	}
	this.oToolsButton.getMenu().insertItem(oActionMenuItem, iIndex);
	return this;

};

sap.ui.ux3.FeedChunk.prototype.addActionMenuItem = function(oActionMenuItem) {

	this.initToolsButton();
	// as parent of items is the menu use menus aggregation
	this.oToolsButton.getMenu().addItem(oActionMenuItem);
	return this;

};

sap.ui.ux3.FeedChunk.prototype.removeActionMenuItem = function(vActionMenuItem) {

	if (this.oToolsButton){
		return this.oToolsButton.getMenu().removeItem(vActionMenuItem);
	}

};

sap.ui.ux3.FeedChunk.prototype.removeAllActionMenuItems = function() {

	if (this.oToolsButton){
		// if there is a delete item do not remove it
		var aItems = this.oToolsButton.getMenu().getItems();
		if (aItems.length > 0 && aItems[0].getId() == (this.getId() + '-actDelete')) {
			aItems.shift();
			for ( var i = 0; i < aItems.length; i++) {
				this.oToolsButton.getMenu().removeItem(aItems[i]);
			}
			return aItems;
		}else{
			return this.oToolsButton.getMenu().removeAllItems();
		}
	}

};

sap.ui.ux3.FeedChunk.prototype.indexOfActionMenuItem = function(oActionMenuItem) {

	if (this.oToolsButton){
		var iIndex = this.oToolsButton.getMenu().indexOfItem(oActionMenuItem);
		// if there is a delete item adjust index
		var aItems = this.oToolsButton.getMenu().getItems();
		if (aItems.length > 0 && aItems[0].getId() == (this.getId() + '-actDelete')) {
			iIndex--;
		}
		return iIndex;
	}

};

sap.ui.ux3.FeedChunk.prototype.destroyActionMenuItems = function() {

	if (this.oToolsButton){
		// if there is a delete item only remove all other items
		var aItems = this.oToolsButton.getMenu().getItems();
		if (aItems.length > 0 && aItems[0].getId() == (this.getId() + '-actDelete')) {
			this.removeAllActionMenuItems();
		}else{
			this.oToolsButton.getMenu().destroyItems();
		}
	}

	return this;

};

sap.ui.ux3.FeedChunk.prototype.bindActionMenuItems = function(sPath, oTemplate, oSorter, aFilters) {

	this.initToolsButton();
	// as parent of items is the menu use menus aggregation
	this.oToolsButton.getMenu().bindItems(sPath, oTemplate, oSorter, aFilters);

	return this;

};

sap.ui.ux3.FeedChunk.prototype.unbindActionMenuItems = function() {

	if (this.oToolsButton){
		this.oToolsButton.getMenu().unbindItems();
	}

	return this;

};

/*
 * Overwrite standard getter for feeder thumbnail source:
 * If not set and feedChunk is child of a Feed or FeedChunk use the thumbnailsource of the parent
 * So it must not be set manual for each sub-control and is always synchron
 */
sap.ui.ux3.FeedChunk.prototype.getFeederThumbnailSrc = function() {
	var sThumbnailSrc =  this.getProperty("feederThumbnailSrc");

	if (!sThumbnailSrc || sThumbnailSrc == "") {
		var oParent = this.getParent();
		if (oParent &&(oParent instanceof sap.ui.ux3.Feed || oParent instanceof sap.ui.ux3.FeedChunk)) {
			sThumbnailSrc = oParent.getFeederThumbnailSrc();
		}
	}

	return sThumbnailSrc;
};

/*
 * Overwrite standard getter for feeder sender:
 * If not set and feedChunk is child of a Feed or FeedChunk use the feederSender of the parent
 * So it must not be set manual for each sub-control and is always synchron
 */
sap.ui.ux3.FeedChunk.prototype.getFeederSender = function() {
	var sSender =  this.getProperty("feederSender");

	if (!sSender || sSender == "") {
		var oParent = this.getParent();
		if (oParent &&(oParent instanceof sap.ui.ux3.Feed || oParent instanceof sap.ui.ux3.FeedChunk)) {
			sSender = oParent.getFeederSender();
		}
	}

	return sSender;
};

sap.ui.ux3.FeedChunk.prototype.initHCMMenuButton = function(){

	if (!this.oHCMMenuButton) {
		this.oHCMMenuButton = new sap.ui.commons.MenuButton(this.getId()+"-HCMMenu",{
			lite: true
		}).setParent(this);
		this.oHCMMenuButton.attachEvent('itemSelected', this.handleHCMMenuButtonSelected, this); // attach event this way to have the right this-reference in handler
	}

};

/**
 * Sets the MenuButton for HCM applications
 * This is NOT an official API method and must be only uses with approval of SAPUI5 team
 * @param(sap.ui.commons.Menu) oMenu Menu control
 * @private
 */
sap.ui.ux3.FeedChunk.prototype.setHCMMenu = function(oMenu) {

	this.initHCMMenuButton();
	this.oHCMMenuButton.setMenu(oMenu);

	return this;

};

/**
 * Handler for HCM menu button item selection
 *
 * @private
 */
sap.ui.ux3.FeedChunk.prototype.handleHCMMenuButtonSelected = function(oEvent){

	this.fireEvent("HCMMenuItemSelected", oEvent.mParameters);

};