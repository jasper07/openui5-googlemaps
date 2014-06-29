/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.ui.ux3 (1.20.7)
 */
jQuery.sap.declare("sap.ui.ux3.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAPUI5 library with controls that implement the SAP User Experience (UX) Guidelines 3.0
 *
 * @namespace
 * @name sap.ui.ux3
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.commons.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.ui.ux3",
  dependencies : ["sap.ui.core","sap.ui.commons"],
  types: [
    "sap.ui.ux3.ActionBarSocialActions",
    "sap.ui.ux3.ExactOrder",
    "sap.ui.ux3.FeederType",
    "sap.ui.ux3.FollowActionState",
    "sap.ui.ux3.NotificationBarStatus",
    "sap.ui.ux3.ShellDesignType",
    "sap.ui.ux3.ShellHeaderType",
    "sap.ui.ux3.ThingViewerHeaderType",
    "sap.ui.ux3.VisibleItemCountMode"
  ],
  interfaces: [
    "sap.ui.ux3.DataSetView"
  ],
  controls: [
    "sap.ui.ux3.ActionBar",
    "sap.ui.ux3.CollectionInspector",
    "sap.ui.ux3.DataSet",
    "sap.ui.ux3.DataSetSimpleView",
    "sap.ui.ux3.Exact",
    "sap.ui.ux3.ExactArea",
    "sap.ui.ux3.ExactBrowser",
    "sap.ui.ux3.ExactList",
    "sap.ui.ux3.FacetFilter",
    "sap.ui.ux3.FacetFilterList",
    "sap.ui.ux3.Feed",
    "sap.ui.ux3.FeedChunk",
    "sap.ui.ux3.Feeder",
    "sap.ui.ux3.NavigationBar",
    "sap.ui.ux3.NotificationBar",
    "sap.ui.ux3.Overlay",
    "sap.ui.ux3.OverlayContainer",
    "sap.ui.ux3.OverlayDialog",
    "sap.ui.ux3.QuickView",
    "sap.ui.ux3.Shell",
    "sap.ui.ux3.ThingInspector",
    "sap.ui.ux3.ThingViewer",
    "sap.ui.ux3.ToolPopup"
  ],
  elements: [
    "sap.ui.ux3.Collection",
    "sap.ui.ux3.DataSetItem",
    "sap.ui.ux3.ExactAttribute",
    "sap.ui.ux3.NavigationItem",
    "sap.ui.ux3.Notifier",
    "sap.ui.ux3.ThingAction",
    "sap.ui.ux3.ThingGroup"
  ],
  version: "1.20.7"});

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.ux3.ActionBarSocialActions.
jQuery.sap.declare("sap.ui.ux3.ActionBarSocialActions");


/**
 * @class Enumeration of available standard actions for 'sap.ui.ux3.ActionBar'. To be used as parameters for function 'sap.ui.ux3.ActionBar.getSocialAction'.
 *
 * @version 1.20.7
 * @static
 * @public
 * @experimental Since version 1.2. 
 * API is not yet finished and might change completely
 */
sap.ui.ux3.ActionBarSocialActions = {
  
    /**
     * Standard action 'Create an update' (Feed) 
     * @public
     */
    Update : "Update",

    /**
     * Standard action 'Follow/Unfollow' 
     * @public
     */
    Follow : "Follow",

    /**
     * Standard action 'Mark for Follow up' 
     * @public
     */
    Flag : "Flag",

    /**
     * Standards action 'Mark as Favorite' 
     * @public
     */
    Favorite : "Favorite",

    /**
     * Standard action 'Open Thing Inspector' 
     * @public
     */
    Open : "Open"

  };
/**
 * 
 *   		Marker interface for controls which are suitable as view rendering for a DataSet.
 *   	
 *
 * @name sap.ui.ux3.DataSetView
 * @interface
 * @public
 */

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.ux3.ExactOrder.
jQuery.sap.declare("sap.ui.ux3.ExactOrder");


/**
 * @class Defines the order of the sub lists of a list in the ExactBrowser.
 *
 * @version 1.20.7
 * @static
 * @public
 * @since 1.7.1
 */
sap.ui.ux3.ExactOrder = {
  
    /**
     * The order of the sub lists is defined by the selection order of the user. 
     * @public
     */
    Select : "Select",

    /**
     * The order of the sub lists is defined by order of the defined sub attributes. 
     * @public
     */
    Fixed : "Fixed"

  };
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.ux3.FeederType.
jQuery.sap.declare("sap.ui.ux3.FeederType");


/**
 * @class Type of an Feeder.
 *
 * @version 1.20.7
 * @static
 * @public
 * @experimental Since version 1.2. 
 * The whole Feed/Feeder API is still under discussion, significant changes are likely. Especially text presentation (e.g. @-references and formatted text) is not final. Also the Feed model topic is still open.
 */
sap.ui.ux3.FeederType = {
  
    /**
     * large Feeder 
     * @public
     */
    Large : "Large",

    /**
     * medium feeder 
     * @public
     */
    Medium : "Medium",

    /**
     * comment feeder (small) 
     * @public
     */
    Comment : "Comment"

  };
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.ux3.FollowActionState.
jQuery.sap.declare("sap.ui.ux3.FollowActionState");


/**
 * @class Defines the states of the follow action
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.ui.ux3.FollowActionState = {
  
    /**
     * follow state 
     * @public
     */
    Follow : "Follow",

    /**
     * hold state 
     * @public
     */
    Hold : "Hold",

    /**
     * default state 
     * @public
     */
    Default : "Default"

  };
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.ux3.NotificationBarStatus.
jQuery.sap.declare("sap.ui.ux3.NotificationBarStatus");


/**
 * @class This entries are used to set the visibility status of a NotificationBar
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.ui.ux3.NotificationBarStatus = {
  
    /**
     * Default height for the bar 
     * @public
     */
    Default : "Default",

    /**
     * Bar should be minimized 
     * @public
     */
    Min : "Min",

    /**
     * Bar should be maximized 
     * @public
     */
    Max : "Max",

    /**
     * Bar should not be visible 
     * @public
     */
    None : "None"

  };
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.ux3.ShellDesignType.
jQuery.sap.declare("sap.ui.ux3.ShellDesignType");


/**
 * @class Available shell design types.
 *
 * @version 1.20.7
 * @static
 * @public
 * @since 1.12.0
 */
sap.ui.ux3.ShellDesignType = {
  
    /**
     * The standard Shell design (dark). 
     * @public
     */
    Standard : "Standard",

    /**
     * 
     * A lighter design. Should be used in combination with the Standard header
     * type.
     *  
     * @public
     */
    Light : "Light",

    /**
     * 
     * An even lighter design. It borrows most of its properties from the Light
     * design and just changes a few details like the header colors in order to
     * have a blue design within gold reflection.
     *  
     * @public
     */
    Crystal : "Crystal"

  };
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.ux3.ShellHeaderType.
jQuery.sap.declare("sap.ui.ux3.ShellHeaderType");


/**
 * @class Available shell header display types.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.ui.ux3.ShellHeaderType = {
  
    /**
     * The standard Shell header. 
     * @public
     */
    Standard : "Standard",

    /**
     * Only the branding area is visible. Top-level navigation bar, header items, title and icon are not shown. 
     * @public
     */
    BrandOnly : "BrandOnly",

    /**
     * Like the Standard Area but without top-level navigation bar. 
     * @public
     */
    NoNavigation : "NoNavigation",

    /**
     * Like the Standard Area but with a leaner top-level navigation bar. 
     * @public
     */
    SlimNavigation : "SlimNavigation"

  };
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.ux3.ThingViewerHeaderType.
jQuery.sap.declare("sap.ui.ux3.ThingViewerHeaderType");


/**
 * @class Available ThingViewer header display types.
 *
 * @version 1.20.7
 * @static
 * @public
 * @since 1.16.3
 */
sap.ui.ux3.ThingViewerHeaderType = {
  
    /**
     * The standard ThingViewer header. 
     * @public
     */
    Standard : "Standard",

    /**
     * The header content is displayed horizontally above the facet content 
     * @public
     */
    Horizontal : "Horizontal"

  };
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.ux3.VisibleItemCountMode.
jQuery.sap.declare("sap.ui.ux3.VisibleItemCountMode");


/**
 * @class VisibleItemCountMode of the FacetFilter defines if the FacetFilter takes the whole available height (Auto) in the surrounding container, or is so high as needed to show 5 Items ("Fixed " - default).
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.ui.ux3.VisibleItemCountMode = {
  
    /**
     * The FacetFilter always has as many items in the FacetFilterList as defined in the visibleItemCount property. 
     * @public
     */
    Fixed : "Fixed",

    /**
     * The FacetFilter automatically fills the height of the surrounding container. The visibleItemCount property is automatically changed accordingly. 
     * @public
     */
    Auto : "Auto"

  };
