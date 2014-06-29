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
 * Initialization Code and shared classes of library sap.m (1.20.7)
 */
jQuery.sap.declare("sap.m.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAPUI5 library with controls specialized for mobile devices.
 *
 * @namespace
 * @name sap.m
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.m",
  dependencies : ["sap.ui.core"],
  types: [
    "sap.m.BackgroundDesign",
    "sap.m.ButtonType",
    "sap.m.DateTimeInputType",
    "sap.m.DialogType",
    "sap.m.FacetFilterType",
    "sap.m.FlexAlignItems",
    "sap.m.FlexAlignSelf",
    "sap.m.FlexDirection",
    "sap.m.FlexJustifyContent",
    "sap.m.FlexRendertype",
    "sap.m.HeaderLevel",
    "sap.m.IconTabFilterDesign",
    "sap.m.InputType",
    "sap.m.LabelDesign",
    "sap.m.ListHeaderDesign",
    "sap.m.ListMode",
    "sap.m.ListSeparators",
    "sap.m.ListType",
    "sap.m.PageBackgroundDesign",
    "sap.m.PlacementType",
    "sap.m.PopinDisplay",
    "sap.m.RatingIndicatorVisualMode",
    "sap.m.ScreenSize",
    "sap.m.SelectType",
    "sap.m.SplitAppMode",
    "sap.m.StandardTileType",
    "sap.m.SwipeDirection",
    "sap.m.SwitchType",
    "sap.m.ToolbarDesign"
  ],
  interfaces: [
    "sap.m.IconTab"
  ],
  controls: [
    "sap.m.ActionListItem",
    "sap.m.ActionSelect",
    "sap.m.ActionSheet",
    "sap.m.App",
    "sap.m.Bar",
    "sap.m.BusyDialog",
    "sap.m.BusyIndicator",
    "sap.m.Button",
    "sap.m.Carousel",
    "sap.m.CheckBox",
    "sap.m.ColumnListItem",
    "sap.m.CustomListItem",
    "sap.m.CustomTile",
    "sap.m.DateTimeInput",
    "sap.m.Dialog",
    "sap.m.DisplayListItem",
    "sap.m.FacetFilter",
    "sap.m.FacetFilterItem",
    "sap.m.FacetFilterList",
    "sap.m.FeedListItem",
    "sap.m.FlexBox",
    "sap.m.GroupHeaderListItem",
    "sap.m.GrowingList",
    "sap.m.HBox",
    "sap.m.IconTabBar",
    "sap.m.Image",
    "sap.m.Input",
    "sap.m.InputBase",
    "sap.m.InputListItem",
    "sap.m.Label",
    "sap.m.Link",
    "sap.m.List",
    "sap.m.ListBase",
    "sap.m.ListItemBase",
    "sap.m.NavContainer",
    "sap.m.ObjectAttribute",
    "sap.m.ObjectHeader",
    "sap.m.ObjectIdentifier",
    "sap.m.ObjectListItem",
    "sap.m.ObjectNumber",
    "sap.m.ObjectStatus",
    "sap.m.Page",
    "sap.m.Panel",
    "sap.m.Popover",
    "sap.m.ProgressIndicator",
    "sap.m.PullToRefresh",
    "sap.m.RadioButton",
    "sap.m.RatingIndicator",
    "sap.m.ResponsivePopover",
    "sap.m.ScrollContainer",
    "sap.m.SearchField",
    "sap.m.SegmentedButton",
    "sap.m.Select",
    "sap.m.SelectDialog",
    "sap.m.Shell",
    "sap.m.Slider",
    "sap.m.SplitApp",
    "sap.m.SplitContainer",
    "sap.m.StandardListItem",
    "sap.m.StandardTile",
    "sap.m.Switch",
    "sap.m.Table",
    "sap.m.TableSelectDialog",
    "sap.m.Text",
    "sap.m.TextArea",
    "sap.m.Tile",
    "sap.m.TileContainer",
    "sap.m.Toolbar",
    "sap.m.ToolbarSpacer",
    "sap.m.VBox",
    "sap.m.ViewSettingsDialog"
  ],
  elements: [
    "sap.m.Column",
    "sap.m.FlexItemData",
    "sap.m.IconTabFilter",
    "sap.m.IconTabSeparator",
    "sap.m.ToolbarLayoutData",
    "sap.m.ViewSettingsCustomItem",
    "sap.m.ViewSettingsFilterItem",
    "sap.m.ViewSettingsItem"
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

// Provides enumeration sap.m.BackgroundDesign.
jQuery.sap.declare("sap.m.BackgroundDesign");


/**
 * @class Available Background Design.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.BackgroundDesign = {
  
    /**
     * A solid background color dependent on the theme. 
     * @public
     */
    Solid : "Solid",

    /**
     * Transparent background. 
     * @public
     */
    Transparent : "Transparent",

    /**
     * A translucent background depending on the opacity value of the theme. 
     * @public
     */
    Translucent : "Translucent"

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

// Provides enumeration sap.m.ButtonType.
jQuery.sap.declare("sap.m.ButtonType");


/**
 * @class Different types for a button (predefined types)
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.ButtonType = {
  
    /**
     * default type (no special styling) 
     * @public
     */
    Default : "Default",

    /**
     * back type (back navigation button for header) 
     * @public
     */
    Back : "Back",

    /**
     * accept type (blue button) 
     * @public
     */
    Accept : "Accept",

    /**
     * reject style (red button) 
     * @public
     */
    Reject : "Reject",

    /**
     * transparent type 
     * @public
     */
    Transparent : "Transparent",

    /**
     * up type (up navigation button for header) 
     * @public
     */
    Up : "Up",

    /**
     * Unstyled type (no styling) 
     * @public
     */
    Unstyled : "Unstyled",

    /**
     * emphasized type 
     * @public
     */
    Emphasized : "Emphasized"

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

// Provides enumeration sap.m.DateTimeInputType.
jQuery.sap.declare("sap.m.DateTimeInputType");


/**
 * @class A subset of DateTimeInput types that fit to a simple API returning one string.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.DateTimeInputType = {
  
    /**
     * An input control for specifying a date value. The user can select a month, day of the month, and year. 
     * @public
     */
    Date : "Date",

    /**
     * An input control for specifying a date and time value. The user can select a month, day of the month, year, and time of day. 
     * @public
     */
    DateTime : "DateTime",

    /**
     * An input control for specifying a time value. The user can select the hour, minute, and optionally AM or PM. 
     * @public
     */
    Time : "Time"

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

// Provides enumeration sap.m.DialogType.
jQuery.sap.declare("sap.m.DialogType");


/**
 * @class Enum for the type of sap.m.Dialog control.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.DialogType = {
  
    /**
     * This is the default value for Dialog type. Stardard dialog in iOS has a header on the top and the left, right buttons are put inside the header. In android, the left, right buttons are put to the bottom of the Dialog. 
     * @public
     */
    Standard : "Standard",

    /**
     * Dialog with type Message looks the same as the Stardard Dialog in Android. And it puts the left, right buttons to the bottom of the Dialog in iOS. 
     * @public
     */
    Message : "Message"

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

// Provides enumeration sap.m.FacetFilterType.
jQuery.sap.declare("sap.m.FacetFilterType");


/**
 * @class Used by the FacetFilter control to adapt its design according to type.
 * 
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.FacetFilterType = {
  
    /**
     * Forces FacetFilter to display facet lists as a row of buttons, one button per facet. The FacetFilter will automatically adapt to the Light type when it detects smart phone sized displays. 
     * @public
     */
    Simple : "Simple",

    /**
     * Forces FacetFilter to display in light mode. 
     * @public
     */
    Light : "Light"

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

// Provides enumeration sap.m.FlexAlignItems.
jQuery.sap.declare("sap.m.FlexAlignItems");


/**
 * @class Available options for the layout of all elements along the cross axis of the flexbox layout.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.FlexAlignItems = {
  
    /**
     * The cross-start margin edges of the box items are placed flush with the cross-start edge of the line. 
     * @public
     */
    Start : "Start",

    /**
     * The cross-start margin edges of the box items are placed flush with the cross-end edge of the line. 
     * @public
     */
    End : "End",

    /**
     * The box items' margin boxes are centered in the cross axis within the line. 
     * @public
     */
    Center : "Center",

    /**
     * If the box items' inline axes are the same as the cross axis, this value is identical to ?start?. Otherwise, it participates in baseline alignment: all participating box items on the line are aligned such that their baselines align, and the item with the largest distance between its baseline and its cross-start margin edge is placed flush against the cross-start edge of the line. 
     * @public
     */
    Baseline : "Baseline",

    /**
     * Make the cross size of the items' margin boxes as close to the same size as the line as possible. 
     * @public
     */
    Stretch : "Stretch",

    /**
     * Inherits the value from its parent. 
     * @public
     */
    Inherit : "Inherit"

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

// Provides enumeration sap.m.FlexAlignSelf.
jQuery.sap.declare("sap.m.FlexAlignSelf");


/**
 * @class Available options for the layout of individual elements along the cross axis of the flexbox layout overriding the default alignment.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.FlexAlignSelf = {
  
    /**
     * Takes up the value of alignItems from the parent FlexBox 
     * @public
     */
    Auto : "Auto",

    /**
     * The cross-start margin edges of the box item is placed flush with the cross-start edge of the line. 
     * @public
     */
    Start : "Start",

    /**
     * The cross-start margin edges of the box item is placed flush with the cross-end edge of the line. 
     * @public
     */
    End : "End",

    /**
     * The box item's margin box is centered in the cross axis within the line. 
     * @public
     */
    Center : "Center",

    /**
     * If the box item's inline axis is the same as the cross axis, this value is identical to ?start?. Otherwise, it participates in baseline alignment: all participating box items on the line are aligned such that their baselines align, and the item with the largest distance between its baseline and its cross-start margin edge is placed flush against the cross-start edge of the line. 
     * @public
     */
    Baseline : "Baseline",

    /**
     * Make the cross size of the item's margin box as close to the same size as the line as possible. 
     * @public
     */
    Stretch : "Stretch",

    /**
     * Inherits the value from its parent. 
     * @public
     */
    Inherit : "Inherit"

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

// Provides enumeration sap.m.FlexDirection.
jQuery.sap.declare("sap.m.FlexDirection");


/**
 * @class Available directions for flex layouts.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.FlexDirection = {
  
    /**
     * Elements are layed out along the direction of the inline axis (text direction). 
     * @public
     */
    Row : "Row",

    /**
     * Elements are layed out along the direction of the block axis (usually top to bottom). 
     * @public
     */
    Column : "Column",

    /**
     * Elements are layed out along the reverse direction of the inline axis (against the text direction). 
     * @public
     */
    RowReverse : "RowReverse",

    /**
     * Elements are layed out along the reverse direction of the block axis (usually bottom to top). 
     * @public
     */
    ColumnReverse : "ColumnReverse",

    /**
     * Inherits the value from its parent. 
     * @public
     */
    Inherit : "Inherit"

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

// Provides enumeration sap.m.FlexJustifyContent.
jQuery.sap.declare("sap.m.FlexJustifyContent");


/**
 * @class Available options for the layout of elements along the main axis of the flexbox layout.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.FlexJustifyContent = {
  
    /**
     * Box items are packed toward the start of the line. 
     * @public
     */
    Start : "Start",

    /**
     * Box items are packed toward the end of the line. 
     * @public
     */
    End : "End",

    /**
     * Box items are packed toward the center of the line. 
     * @public
     */
    Center : "Center",

    /**
     * Box items are evenly distributed in the line. 
     * @public
     */
    SpaceBetween : "SpaceBetween",

    /**
     * Box items are evenly distributed in the line, with half-size spaces on either end. 
     * @public
     */
    SpaceAround : "SpaceAround",

    /**
     * Inherits the value from its parent. 
     * @public
     */
    Inherit : "Inherit"

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

// Provides enumeration sap.m.FlexRendertype.
jQuery.sap.declare("sap.m.FlexRendertype");


/**
 * @class Determines the type of HTML elements used for rendering controls.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.FlexRendertype = {
  
    /**
     * DIV elements are used for rendering 
     * @public
     */
    Div : "Div",

    /**
     * Unordered lists are used for rendering. 
     * @public
     */
    List : "List"

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

// Provides enumeration sap.m.HeaderLevel.
jQuery.sap.declare("sap.m.HeaderLevel");


/**
 * @class Different levels for headers
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.HeaderLevel = {
  
    /**
     * Header level 1 
     * @public
     */
    H1 : "H1",

    /**
     * Header level 2 
     * @public
     */
    H2 : "H2",

    /**
     * Header level 3 
     * @public
     */
    H3 : "H3",

    /**
     * Header level 4 
     * @public
     */
    H4 : "H4",

    /**
     * Header level 5 
     * @public
     */
    H5 : "H5",

    /**
     * Header level 6 
     * @public
     */
    H6 : "H6"

  };
/**
 * 
 *   Marker interface for controls which are suitable as items for the IconTabBar.
 *   These controls must implement a method isSelectable().
 *   
 *
 * @name sap.m.IconTab
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

// Provides enumeration sap.m.IconTabFilterDesign.
jQuery.sap.declare("sap.m.IconTabFilterDesign");


/**
 * @class Available Filter Item Design.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.IconTabFilterDesign = {
  
    /**
     * A horizontally layouted design providing more space for texts. 
     * @public
     */
    Horizontal : "Horizontal",

    /**
     * A vertically layouted design using minimum horizontal space. 
     * @public
     */
    Vertical : "Vertical"

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

// Provides enumeration sap.m.InputType.
jQuery.sap.declare("sap.m.InputType");


/**
 * @class A subset of input types that fit to a simple API returning one string.
 * Not available on purpose: button, checkbox, hidden, image, password, radio, range, reset, search, submit.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.InputType = {
  
    /**
     * default (text) 
     * @public
     */
    Text : "Text",

    /**
     * An input control for specifying a date value. The user can select a month, day of the month, and year. 
     * @public
     * @deprecated Since version 1.9.1. 
     * Please use sap.m.DateTimeInput control with type "Date" to create date input.
     */
    Date : "Date",

    /**
     * An input control for specifying a date and time value. The user can select a month, day of the month, year, and time of day. 
     * @public
     * @deprecated Since version 1.9.1. 
     * Please use dedicated sap.m.DateTimeInput control with type "DateTime" to create date-time input.
     */
    Datetime : "Datetime",

    /**
     * An input control for specifying a date and time value where the format depends on the locale. 
     * @public
     * @deprecated Since version 1.9.1. 
     * Please use dedicated sap.m.DateTimeInput control with type "DateTime" to create date-time input.
     */
    DatetimeLocale : "DatetimeLocale",

    /**
     * A text field for specifying an email address. Brings up a keyboard optimized for email address entry. 
     * @public
     */
    Email : "Email",

    /**
     * An input control for selecting a month. 
     * @public
     * @deprecated Since version 1.9.1. 
     * There is no cross-platform support. Please do not use this Input type.
     */
    Month : "Month",

    /**
     * A text field for specifying a number. Brings up a number pad keyboard. Specifying an input type of \d* or [0-9]* is equivalent to using this type. 
     * @public
     */
    Number : "Number",

    /**
     * A text field for specifying a phone number. Brings up a phone pad keyboard. 
     * @public
     */
    Tel : "Tel",

    /**
     * An input control for specifying a time value. The user can select the hour, minute, and optionally AM or PM. 
     * @public
     * @deprecated Since version 1.9.1. 
     * Please use dedicated sap.m.DateTimeInput control with type "Time" to create time input.
     */
    Time : "Time",

    /**
     * A text field for specifying a URL. Brings up a keyboard optimized for URL entry. 
     * @public
     */
    Url : "Url",

    /**
     * An input control for selecting a week. 
     * @public
     * @deprecated Since version 1.9.1. 
     * There is no cross-platform support. Please do not use this Input type.
     */
    Week : "Week",

    /**
     * Password input where the user entry cannot be seen. 
     * @public
     */
    Password : "Password"

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

// Provides enumeration sap.m.LabelDesign.
jQuery.sap.declare("sap.m.LabelDesign");


/**
 * @class Available label display modes.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.LabelDesign = {
  
    /**
     * Displays the label in bold. 
     * @public
     */
    Bold : "Bold",

    /**
     * Displays the label in normal mode. 
     * @public
     */
    Standard : "Standard"

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

// Provides enumeration sap.m.ListHeaderDesign.
jQuery.sap.declare("sap.m.ListHeaderDesign");


/**
 * @class Defines the differnet header styles.
 *
 * @version 1.20.7
 * @static
 * @public
 * @deprecated Since version 1.16. 
 * Has no functionality since 1.16.
 */
sap.m.ListHeaderDesign = {
  
    /**
     * Standard header style 
     * @public
     */
    Standard : "Standard",

    /**
     * Plain header style 
     * @public
     */
    Plain : "Plain"

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

// Provides enumeration sap.m.ListMode.
jQuery.sap.declare("sap.m.ListMode");


/**
 * @class Different modes for the list selection (predefined modes)
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.ListMode = {
  
    /**
     * default mode (no selection) 
     * @public
     */
    None : "None",

    /**
     * right positioned single selection mode (only one list item can be selected) 
     * @public
     */
    SingleSelect : "SingleSelect",

    /**
     * multi selection mode (whole list item including checkbox will be selected) 
     * @public
     */
    MultiSelect : "MultiSelect",

    /**
     * delete mode (only one list item can be deleted) 
     * @public
     */
    Delete : "Delete",

    /**
     * Single selection master mode (only one list item can be selected), selected item is highlighted but no radiobutton is visible. 
     * @public
     */
    SingleSelectMaster : "SingleSelectMaster",

    /**
     * left positioned single selection mode (only one list item can be selected) 
     * @public
     */
    SingleSelectLeft : "SingleSelectLeft"

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

// Provides enumeration sap.m.ListSeparators.
jQuery.sap.declare("sap.m.ListSeparators");


/**
 * @class Defines which separator style will be taken.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.ListSeparators = {
  
    /**
     * Separators around all items. 
     * @public
     */
    All : "All",

    /**
     * Separators only between the items. 
     * @public
     */
    Inner : "Inner",

    /**
     * No Separators are used. 
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

// Provides enumeration sap.m.ListType.
jQuery.sap.declare("sap.m.ListType");


/**
 * @class List types
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.ListType = {
  
    /**
     * Inactive 
     * @public
     */
    Inactive : "Inactive",

    /**
     * Detail 
     * @public
     */
    Detail : "Detail",

    /**
     * Navigation 
     * @public
     */
    Navigation : "Navigation",

    /**
     * Active 
     * @public
     */
    Active : "Active",

    /**
     * DetailAndActive 
     * @public
     */
    DetailAndActive : "DetailAndActive"

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

// Provides enumeration sap.m.PageBackgroundDesign.
jQuery.sap.declare("sap.m.PageBackgroundDesign");


/**
 * @class Available Page Background Design.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.PageBackgroundDesign = {
  
    /**
     * Standard Page background color. 
     * @public
     */
    Standard : "Standard",

    /**
     * Page background color when a List is set as the Page content. 
     * @public
     */
    List : "List",

    /**
     * A solid background color dependent on the theme. 
     * @public
     */
    Solid : "Solid",

    /**
     * Transparent background for the page. 
     * @public
     */
    Transparent : "Transparent"

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

// Provides enumeration sap.m.PlacementType.
jQuery.sap.declare("sap.m.PlacementType");


/**
 * @class Types for the placement of popover control.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.PlacementType = {
  
    /**
     * Popover will be placed at the left side of the reference control. 
     * @public
     */
    Left : "Left",

    /**
     * Popover will be placed at the right side of the reference control. 
     * @public
     */
    Right : "Right",

    /**
     * Popover will be placed at the top of the reference control. 
     * @public
     */
    Top : "Top",

    /**
     * Popover will be placed at the bottom of the reference control. 
     * @public
     */
    Bottom : "Bottom",

    /**
     * Popover will be placed at the top or bottom of the reference control. 
     * @public
     */
    Vertical : "Vertical",

    /**
     * Popover will be placed at the right or left side of the reference control. 
     * @public
     */
    Horizontal : "Horizontal",

    /**
     * Popover will be placed automatically at the reference control. 
     * @public
     */
    Auto : "Auto"

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

// Provides enumeration sap.m.PopinDisplay.
jQuery.sap.declare("sap.m.PopinDisplay");


/**
 * @class Defines the display of table pop-ins
 *
 * @version 1.20.7
 * @static
 * @public
 * @since 1.13.2
 */
sap.m.PopinDisplay = {
  
    /**
     * Inside the table popin, header is displayed in first line and value field is displayed in next line. 
     * @public
     */
    Block : "Block",

    /**
     * Inside the table popin, value field is displayed next to the header in the same line. Note: If there is no enough space for the value field then goes to next line. 
     * @public
     */
    Inline : "Inline"

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

// Provides enumeration sap.m.RatingIndicatorVisualMode.
jQuery.sap.declare("sap.m.RatingIndicatorVisualMode");


/**
 * @class Possible values for the visualization of float values in the RatingIndicator Control.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.RatingIndicatorVisualMode = {
  
    /**
     * Values are rounded to the nearest integer value (e.g. 1.7 -> 2). 
     * @public
     */
    Full : "Full",

    /**
     * Values are rounded to the nearest half value (e.g. 1.7 -> 1.5). 
     * @public
     */
    Half : "Half"

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

// Provides enumeration sap.m.ScreenSize.
jQuery.sap.declare("sap.m.ScreenSize");


/**
 * @class Breakpoint names for different screen sizes.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.ScreenSize = {
  
    /**
     * 240px wide 
     * @public
     */
    Phone : "Phone",

    /**
     * 600px wide 
     * @public
     */
    Tablet : "Tablet",

    /**
     * 1024px wide 
     * @public
     */
    Desktop : "Desktop",

    /**
     * 240px wide 
     * @public
     */
    XXSmall : "XXSmall",

    /**
     * 320px wide 
     * @public
     */
    XSmall : "XSmall",

    /**
     * 480px wide 
     * @public
     */
    Small : "Small",

    /**
     * 560px wide 
     * @public
     */
    Medium : "Medium",

    /**
     * 768px wide 
     * @public
     */
    Large : "Large",

    /**
     * 960px wide 
     * @public
     */
    XLarge : "XLarge",

    /**
     * 1120px wide 
     * @public
     */
    XXLarge : "XXLarge"

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

// Provides enumeration sap.m.SelectType.
jQuery.sap.declare("sap.m.SelectType");


/**
 * @class Enumeration for different Select types.
 *
 * @version 1.20.7
 * @static
 * @public
 * @since 1.16
 */
sap.m.SelectType = {
  
    /**
     * Will show the text. 
     * @public
     */
    Default : "Default",

    /**
     * Will show only the specified icon. 
     * @public
     */
    IconOnly : "IconOnly"

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

// Provides enumeration sap.m.SplitAppMode.
jQuery.sap.declare("sap.m.SplitAppMode");


/**
 * @class The mode of SplitContainer or SplitApp control to show/hide the master area.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.SplitAppMode = {
  
    /**
     * Master will automatically be hidden in portrait mode. 
     * @public
     */
    ShowHideMode : "ShowHideMode",

    /**
     * Master will always be shown but in a compressed version when in portrait mode. 
     * @public
     */
    StretchCompressMode : "StretchCompressMode",

    /**
     * Master will be shown inside a Popover when in portrait mode 
     * @public
     */
    PopoverMode : "PopoverMode",

    /**
     * Master area is hidden initially both in portrait and landscape. Master area can be opened by clicking on the top left corner button or swiping right. Swipe is only enabled on mobile devices. Master will keep the open state when changing the orientation of the device. 
     * @public
     */
    HideMode : "HideMode"

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

// Provides enumeration sap.m.StandardTileType.
jQuery.sap.declare("sap.m.StandardTileType");


/**
 * @class Types for StandardTile
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.StandardTileType = {
  
    /**
     * Tile representing that something needs to be created 
     * @public
     */
    Create : "Create",

    /**
     * Monitor tile 
     * @public
     */
    Monitor : "Monitor",

    /**
     * Default type 
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

// Provides enumeration sap.m.SwipeDirection.
jQuery.sap.declare("sap.m.SwipeDirection");


/**
 * @class Directions for swipe event.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.SwipeDirection = {
  
    /**
     * Swipe from left to right 
     * @public
     */
    LeftToRight : "LeftToRight",

    /**
     * Swipe from right to left. 
     * @public
     */
    RightToLeft : "RightToLeft",

    /**
     * Both directions (left to right or right to left) 
     * @public
     */
    Both : "Both"

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

// Provides enumeration sap.m.SwitchType.
jQuery.sap.declare("sap.m.SwitchType");


/**
 * @class Enumaration for different switch types.
 *
 * @version 1.20.7
 * @static
 * @public
 */
sap.m.SwitchType = {
  
    /**
     * Will show "ON" and "OFF" translated to the current language or the custom text if provided 
     * @public
     */
    Default : "Default",

    /**
     * Switch with accept and reject icons 
     * @public
     */
    AcceptReject : "AcceptReject"

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

// Provides enumeration sap.m.ToolbarDesign.
jQuery.sap.declare("sap.m.ToolbarDesign");


/**
 * @class Types of the Toolbar Design
 *
 * @version 1.20.7
 * @static
 * @public
 * @since 1.16.8
 */
sap.m.ToolbarDesign = {
  
    /**
     * The toolbar can be inserted into other controls and if the design is "Auto" then it inherits the design from parent control. 
     * @public
     */
    Auto : "Auto",

    /**
     * The toolbar and its content will be displayed transparent. 
     * @public
     */
    Transparent : "Transparent",

    /**
     * The toolbar appears smaller than the regular size to show information(e.g: text, icon). 
     * @public
     */
    Info : "Info"

  };

// -----------------------------------------------------------------------------
// Begin of Library Initialization coding, copied from shared.js
// -----------------------------------------------------------------------------

/*global Element: true */

/*!
 * @copyright@
 */

// In case the Core decides to throw it out... This module shall always be available when using the mobile lib.
jQuery.sap.require("jquery.sap.mobile");

//enable support feature
jQuery.sap.require("sap.m.Support");

//lazy imports for MessageToast
sap.ui.lazyRequire("sap.m.MessageToast", "show");

//enable ios7 support
jQuery.sap.require("sap.ui.Device");
if (sap.ui.Device.os.ios && sap.ui.Device.os.version >= 7 && sap.ui.Device.os.version < 8 && sap.ui.Device.browser.name === "sf") {
	jQuery.sap.require("sap.m.ios7");
}

// central mobile functionality that should not go into the UI5 Core can go from here
// ----------------------------------------------------------------------------------

/**
 * Touch helper.
 *
 * @namespace
 * @name sap.m.touch
 * @public
 **/

if (sap.m && !sap.m.touch) {
	sap.m.touch = {};
}

/**
 * Given a list of touch objects, find the touch that matches the given one.
 *
 * @param {TouchList} oTouchList The list of touch objects to search.
 * @param {Touch|number} oTouch A touch object to find or a Touch.identifier that uniquely identifies the current finger in the touch session.
 * @return {object|undefined} The touch matching if any.
 * @public
 * @name sap.m.touch.find
 * @function
*/
sap.m.touch.find = function(oTouchList, oTouch) {
	var i,
		iTouchListLength;

	if (!(oTouchList instanceof Object)) {
		jQuery.sap.assert(false, 'sap.m.touch.find(): oTouchList must be a touch list object');
		return;
	}

	if (oTouch instanceof Object && typeof oTouch.identifier !== "undefined") {
		oTouch = oTouch.identifier;
	} else if (typeof oTouch !== "number") {
		jQuery.sap.assert(false, 'sap.m.touch.find(): oTouch must be a touch object or a number');
		return;
	}

	iTouchListLength = oTouchList.length;

	// A TouchList is an object not an array, so we shouldn't use
	// Array.prototype.forEach, etc.
	for (i = 0; i < iTouchListLength; i++) {
		if (oTouchList[i].identifier === oTouch) {
			return oTouchList[i];
		}
	}

	// if the given touch object or touch identifier is not found in the touches list, then return undefined
};

/**
 * Given a list of touches, count the number of touches related with the given element.
 *
 * @param {TouchList} oTouchList The list of touch objects to search.
 * @param {jQuery|Element|string} vElement A jQuery element or an element reference or an element id.
 * @return {number} The number of touches related with the given element.
 * @public
 * @name sap.m.touch.countContained
 * @function
*/
sap.m.touch.countContained = function(oTouchList, vElement) {
	var i,
		iTouchCount = 0,
		iTouchListLength,
		iElementChildrenL,
		$TouchTarget;

	if (!(oTouchList instanceof Object)) {
		jQuery.sap.assert(false, 'sap.m.touch.countContained(): oTouchList must be a TouchList object');
		return;
	}

	if (vElement instanceof Element) {
		vElement = jQuery(vElement);
	} else if (typeof vElement === "string") {
		vElement = jQuery.sap.byId(vElement);
	} else if (!(vElement instanceof jQuery)) {
		jQuery.sap.assert(false, 'sap.m.touch.countContained(): vElement must be a jQuery object or Element reference or a string');
		return;
	}

	iElementChildrenL = vElement.children().length;
	iTouchListLength = oTouchList.length;

	// A TouchList is an object not an array, so we shouldn't use
	// Array.prototype.forEach, etc.
	for (i = 0; i < iTouchListLength; i++) {
		$TouchTarget = jQuery(oTouchList[i].target);

		//	If the current target have only one HTML element or
		//	have a HTML element antecessor that match with the given element id.
		if ((iElementChildrenL === 0  && $TouchTarget.is(vElement)) ||
			(vElement[0].contains($TouchTarget[0]))) {

			iTouchCount++;
		}
	}

	return iTouchCount;
};

!function(oLib) {

	/**
	 * Returns invalid date value of UI5
	 *
	 * @deprecated Since 1.12 UI5 returns null for invalid date
	 * @returns {null}
	 * @public
	 * @since 1.10
	 * @name sap.m#getInvalidDate
	 * @function
	 */
	oLib.getInvalidDate = function() {
		return null;
	};


	/**
	 * Finds default locale settings once and returns always the same.
	 * We should not need to create new instance to get same locale settings
	 * This method keep the locale instance in the scope and returns the same after first run
	 *
	 * @return {Object} sap.ui.core.Locale instane
	 * @public
	 * @since 1.10
	 * @name sap.m#getLocale
	 * @function
	 */
	oLib.getLocale = function() {
		var oConfig = sap.ui.getCore().getConfiguration(),
			sLocale = oConfig.getFormatSettings().getFormatLocale().toString(),
			oLocale = new sap.ui.core.Locale(sLocale);

		oConfig = sLocale = null; //maybe helps GC
		oLib.getLocale = function() {
			return oLocale;
		};

		return oLocale;
	};

	/**
	 * Finds default locale data once and returns always the same
	 *
	 * @return {Object} sap.ui.core.LocaleData instance
	 * @public
	 * @since 1.10
	 * @name sap.m#getLocaleData
	 * @function
	 */
	oLib.getLocaleData = function() {
		jQuery.sap.require("sap.ui.model.type.Date");
		var oLocaleData = sap.ui.core.LocaleData.getInstance(oLib.getLocale());

		oLib.getLocaleData = function() {
			return oLocaleData;
		};

		return oLocaleData;
	};

	/**
	 * Checks if the given parameter is a valid JsDate Object
	 *
	 * @param {any} value Any variable to test.
	 * @return {boolean}
	 * @public
	 * @since 1.10
	 * @name sap.m#isDate
	 * @function
	 */
	oLib.isDate = function(value) {
		return value && Object.prototype.toString.call(value) == "[object Date]" && !isNaN(value);
	};


	/**
	 * Search given control's parents and try to find iScroll
	 *
	 * @param {sap.ui.core.Control} oControl
	 * @return {iScroll|undefined} iScroll reference or undefined if cannot find
	 * @name sap.m#getIScroll
	 * @public
	 * @since 1.11
	 */
	oLib.getIScroll = function(oControl) {
		if (typeof window.iScroll != "function" || !(oControl instanceof sap.ui.core.Control)) {
			return;
		}

		var parent, scroller;
		for (parent = oControl; parent = parent.oParent;) {
			scroller = parent.getScrollDelegate ? parent.getScrollDelegate()._scroller : null;
			if (scroller && scroller instanceof window.iScroll) {
				return scroller;
			}
		}
	};


	/**
	 * Search given control's parents and try to find ScrollDelegate
	 *
	 * @param {sap.ui.core.Control} oControl
	 * @return {Object|undefined} ScrollDelegate or undefined if cannot find
	 * @name sap.m#getScrollDelegate
	 * @public
	 * @since 1.11
	 */
	oLib.getScrollDelegate = function(oControl) {
		if (!(oControl instanceof sap.ui.core.Control)) {
			return;
		}

		for (var parent = oControl; parent = parent.oParent;) {
			if (typeof parent.getScrollDelegate == "function") {
				return parent.getScrollDelegate();
			}
		}
	};

	/**
	 * screen size definitions in pixel
	 * if you change any value here, please also change
	 * 	1. the documentation of sap.m.ScreenSize
	 *  2. media queries in list.css
	 *
	 * @private
	 * @since 1.12
	 * @name sap.m#ScreenSizes
	 */
	oLib.ScreenSizes = {
		phone : 240,
		tablet : 600,
		desktop : 1024,
		xxsmall : 240,
		xsmall : 320,
		small : 480,
		medium : 560,
		large : 768,
		xlarge : 960,
		xxlarge : 1120
	};

	/**
	 * Base font-size
	 * @private
	 * @since 1.12
	 * @name sap.m#BaseFontSize
	 */
	oLib.BaseFontSize = jQuery(document.documentElement).css("font-size");

	/**
	 * Hide the soft keyboard
	 *
	 * @name sap.m#closeKeyboard
	 * @public
	 * @since 1.20
	 */
	oLib.closeKeyboard = function() {
		var activeElement = document.activeElement;
		if(!sap.ui.Device.system.desktop && activeElement && /(INPUT|TEXTAREA)/i.test(activeElement.tagName)) {
			activeElement.blur();
		}
	};


}(sap.m);



/**
 * <pre>
 * URL(Uniform Resource Locator) Helper
 * This helper can be used to trigger a native application(e.g email, sms, tel) from Browser.
 * That means we are restricted of browser or application implementation. e.g.
 *  - Some browsers do not let you to pass more than 2022 characters in URL
 *  - MAPI (Outlook) limit is 2083, max. path under Internet Explorer is 2048
 *  - Different Internet Explorer versions have different limitation in IE9 approximately 1000 characters
 *  - MS mail app under Windows 8 cuts mail links after approximately 100 characters
 *  - Safari gets a confirmation from user before opening a native application and can block rest triggers if user cancels it.
 *  - Some mail applications(Outlook) do not respect all encodings(e.g. Cyrillic texts are not encoded correctly)
 *
 * Note: all the given limitation lengths are for encoded text(e.g space character will be encoded to "%20")
 * </pre>
 *
 * @namespace
 * @name sap.m.URLHelper
 * @since 1.10
 * @public
 */
sap.m.URLHelper = (function($, window) {

	function isValidString(value) {
		return value && Object.prototype.toString.call(value) == "[object String]";
	}

	function formatTel(sTel) {
		if (!isValidString(sTel)) {
			return "";
		}
		return sTel.replace(/[^0-9\+\*#]/g, "");
	}

	function formatMessage(sText) {
		if (!isValidString(sText)) {
			return "";
		}
		// line breaks in the  body of a message MUST be encoded with "%0D%0A"
		// space character in the  body of a message MUST be encoded with "%20"
		// see http://www.ietf.org/rfc/rfc2368.txt for details
		sText = sText.split(/\r\n|\r|\n/g).join("\r\n");
		return window.encodeURIComponent(sText);
	}

	return $.extend(new sap.ui.base.EventProvider(), {
		/**
		 * Sanitize the given telephone number and returns telephone URI scheme
		 *
		 * @param {String} [sTel] telephone number.
		 * @return {String} telephone URI scheme.
		 * @public
		 * @name sap.m.URLHelper#normalizeTel
		 * @function
		 */
		normalizeTel : function(sTel) {
			return "tel:" + formatTel(sTel);
		},

		/**
		 * Sanitize the given telephone number and returns SMS URI scheme
		 *
		 * @param {String} [sTel] telephone number.
		 * @return {String} SMS URI scheme.
		 * @public
		 * @name sap.m.URLHelper#normalizeSms
		 * @function
		 */
		normalizeSms : function(sTel) {
			return "sms:" + formatTel(sTel);
		},

		/**
		 * Builds Email URI from given parameter.
		 * Trims spaces from email addresses
		 *
		 * @param {String} [sEmail] Destination email address.
		 * @param {String} [sSubject] Subject of the email address.
		 * @param {String} [sBody] Default message text.
		 * @param {String} [sCC] Carbon Copy email address.
		 * @param {String} [sBCC] Blind carbon copy email address.
		 * @return {String} Email URI scheme.
		 * @public
		 * @name sap.m.URLHelper#normalizeEmail
		 * @function
		 */
		normalizeEmail : function(sEmail, sSubject, sBody, sCC, sBCC) {
			var aParams = [],
				sURL = "mailto:",
				encode = window.encodeURIComponent;

			// Within mailto URLs, the characters "?", "=", "&" are reserved
			isValidString(sEmail) && (sURL += encode($.trim(sEmail)));
			isValidString(sSubject) && aParams.push("subject=" + encode(sSubject));
			isValidString(sBody) && aParams.push("body=" + formatMessage(sBody));
			isValidString(sBCC) && aParams.push("bcc=" + encode($.trim(sBCC)));
			isValidString(sCC) && aParams.push("cc=" + encode($.trim(sCC)));

			if (aParams.length) {
				sURL += "?" + aParams.join("&");
			}
			return sURL;
		},

		/**
		 * Redirects to given URL
		 * This method fires "redirect" event before open the URL
		 *
		 * @param {String} sURL Uniform resource locator.
		 * @param {boolean} [bNewWindow] Opens URL in a new browser window
		 * @public
		 * @name sap.m.URLHelper#redirect
		 * @function
		 */
		redirect : function (sURL, bNewWindow) {
			$.sap.assert(isValidString(sURL), this + "#redirect: URL must be a string" );

			this.fireEvent("redirect", sURL);
			if (!bNewWindow) {
				window.location.href = sURL;
			} else {
				window.open(sURL, "_blank");
			}
		},

		/**
		 * Adds an event registration for redirect
		 *
		 * @param {Function} fnFunction The function to call, when the event occurs.
		 * @param {Object} [oListener] The object, that wants to be notified, when the event occurs
		 * @return {Object} sap.m.URLHelper instance
		 * @public
		 * @name sap.m.URLHelper#attachRedirect
		 * @function
		 */
		attachRedirect : function (fnFunction, oListener) {
			return this.attachEvent("redirect", fnFunction, oListener);
		},

		/**
		 * Detach already registered redirect event
		 *
		 * @param {Function} fnFunction The function to call, when the event occurs.
		 * @param {Object} [oListener] The object, that wants to be notified, when the event occurs
		 * @return {Object} sap.m.URLHelper instance
		 * @public
		 * @name sap.m.URLHelper#detachRedirect
		 * @function
		 */
		detachRedirect : function (fnFunction, oListener) {
			return this.detachEvent("redirect", fnFunction, oListener);
		},

		/**
		 * Trigger telephone to call given telephone number
		 *
		 * @param {String} [sTel] telephone number.
		 * @public
		 * @name sap.m.URLHelper#triggerTel
		 * @function
		 */
		triggerTel : function(sTel) {
			this.redirect(this.normalizeTel(sTel));
		},

		/**
		 * Trigger SMS application to send SMS to given telephone number
		 *
		 * @param {String} [sTel] telephone number.
		 * @public
		 * @name sap.m.URLHelper#triggerSms
		 * @function
		 */
		triggerSms : function(sTel) {
			this.redirect(this.normalizeSms(sTel));
		},

		/**
		 * Trigger email application to send email
		 * Trims spaces from email addresses
		 *
		 * @param {String} [sEmail] Destination email address.
		 * @param {String} [sSubject] Subject of the email address.
		 * @param {String} [sBody] Default message text.
		 * @param {String} [sCC] Carbon Copy email address.
		 * @param {String} [sBCC] Blind carbon copy email address.
		 * @public
		 * @name sap.m.URLHelper#triggerEmail
		 * @function
		 */
		triggerEmail : function(sEmail, sSubject, sBody, sCC, sBCC) {
			this.redirect(this.normalizeEmail.apply(0, arguments));
		},

		toString : function() {
			return "sap.m.URLHelper";
		}
	});

}(jQuery, window));


/**
 * Helper for rendering themable background
 *
 * @namespace
 * @name sap.m.BackgroundHelper
 * @since 1.12
 * @protected
 */
sap.m.BackgroundHelper = (function($, window) {

	return {
		/**
		 * Adds CSS classes and styles to the given RenderManager, depending on the given configuration for background color and background image.
		 * To be called by control renderers supporting the global themable background image within their root tag, before they call writeClasses() and writeStyles().
		 *
		 * @param {sap.ui.core.RenderManager} rm the RenderManager
		 * @param {String} [sBgColor] a configured custom background color for the control, if any
		 * @param {sap.ui.core.URI} [sBgImgUrl] the configured custom background image for the control, if any
		 * @returns
		 *
		 * @protected
		 * @name sap.m.BackgroundHelper#addBackgroundColorStyles
		 * @function
		 */
		addBackgroundColorStyles: function(rm, sBgColor, sBgImgUrl) {
			rm.addClass("sapMGlobalBackgroundColor");

			if (sBgColor || sBgImgUrl) { // when an image or color is configured, the gradient needs to be removed, so the color can be seen behind the image
				rm.addStyle("background-image", "none");
				rm.addStyle("filter", "none");
			}
			if (sBgColor) {
				rm.addStyle("background-color", jQuery.sap.escapeHTML(sBgColor));
			}
		},


		/**
		 * @protected
		 * @returns
		 */
		/* currently not needed
		isThemeBackgroundImageModified: function() {
			jQuery.sap.require("sap.ui.core.theming.Parameters");
			var sBgImgUrl = sap.ui.core.theming.Parameters.get('sapUiGlobalBackgroundImage'); // the global background image from the theme
			if (sBgImgUrl && sBgImgUrl !== "''") {
				var sBgImgUrlDefault = sap.ui.core.theming.Parameters.get('sapUiGlobalBackgroundImageDefault');
				if (sBgImgUrl !== sBgImgUrlDefault) {
					return true;
				}
			}
			return false;
		},
		*/

		/**
		 * Renders an HTML tag into the given RenderManager which carries the background image which is either configured and given or coming from the current theme.
		 * Should be called right after the opening root tag has been completed, so this is the first child element inside the control.
		 *
		 * @param rm the RenderManager
		 * @param {sap.ui.core.Control} oControl the control within which the tag will be rendered; its ID will be used to generate the element ID
		 * @param {String}  sCssClass a css class to add to the element
		 * @param {sap.ui.core.URI}  [sBgImgUrl] the image of a configured background image; if this is not given, the theme background will be used and also the other settings are ignored.
		 * @param {boolean} [bRepeat] whether the background image should be repeated/tiled (or stretched)
		 * @param {float}   [fOpacity] the background image opacity, if any
		 * @returns
		 *
		 * @protected
		 * @name sap.m.BackgroundHelper#renderBackgroundImageTag
		 * @function
		 */
		renderBackgroundImageTag: function(rm, oControl, sCssClass, sBgImgUrl, bRepeat, fOpacity) {
			rm.write("<div id='" + oControl.getId() + "-BG' ");
			rm.addClass(sCssClass);
			rm.addClass("sapMGlobalBackgroundImage"); // this adds the background image from the theme

			if (sBgImgUrl) { // use the settings only if a background image is configured
				rm.addStyle("display", "block"); // enforce visibility even if a parent has also a background image
				rm.addStyle("background-image", "url(" + jQuery.sap.encodeHTML(sBgImgUrl) + ")");

				rm.addStyle("background-repeat", bRepeat ? "repeat" : "no-repeat");
				if (!bRepeat) {
					rm.addStyle("background-size", "cover");
					rm.addStyle("background-position", "center");
				} else { // repeat
					rm.addStyle("background-position", "left top");
				}

			} else {
				// the theme defines the background
			}

			if (fOpacity !== 1) {
				if (fOpacity > 1) { // greater than 1 enforces 1
					fOpacity = 1;
				}
				rm.addStyle("opacity", fOpacity);
			}

			rm.writeClasses();
			rm.writeStyles();
			rm.write("></div>");
		}
	};
}());

/**
 * Helper for Images
 *
 * @namespace
 * @name sap.m.ImageHelper
 * @since 1.12
 * @protected
 */
sap.m.ImageHelper = (function($, window) {

	/**
	 * Checks if value is not undefined, in which case the
	 * setter function for a given property is called.
	 * Returns true if value is set, false otherwise.
	 *
	 * @private
	 */
	function checkAndSetProperty(oControl, property, value) {
		if(value !== undefined) {
			var fSetter = oControl['set' + jQuery.sap.charToUpperCase(property)];
			if (typeof(fSetter) === "function") {
				fSetter.call(oControl, value);
				return true;
			}
		}
		return false;
	}

	return {
		/**
		 * Creates or updates an image control.
		 *
		 * @param {string} sImgId id of the image to be dealt with.
		 * @param {sap.m.Image} oImageControl the image to update. If undefined, a new image will be created.
		 * @param {sap.ui.core.Control} oParent oImageControl's parentControl.
		 * @param {Map} mProperties map object that contains key value pairs if image propeties. The 'src' property
		 * MUST be contained. Also the map's keys must be names of image properties
		 * @param {Array} aCssClassesToAdd array of css classes which will be added if the image needs to be created.
		 * @param {Array} aCssClassesToRemove all css clases that oImageControl has and which are contained in this array
		 * are removed bevore adding the css classes listed in aCssClassesToAdd.
		 * @returns the new or updated image control
		 *
		 * @protected
		 * @name sap.m.ImageHelper#getImageControl
		 * @function
		 */
		getImageControl: function(sImgId, oImageControl, oParent, mProperties, aCssClassesToAdd, aCssClassesToRemove) {
			jQuery.sap.assert( !!mProperties['src'] , "sap.m.ImageHelper.getImageControl: mProperties do not contain 'src'");

			// make sure, image is rerendered if icon source has changed
			if(oImageControl && (oImageControl.getSrc() != mProperties['src'])){
				oImageControl.destroy();
				oImageControl = undefined;
			}
			// update or create image control
			var oImage = oImageControl;
			if (!!oImage && (oImage instanceof sap.m.Image || oImage instanceof sap.ui.core.Icon)) {
				//Iterate through properties
				for (var key in mProperties) {
					checkAndSetProperty(oImage, key,  mProperties[key]);
				}
			} else {
				if(!sap.m.Image){
					jQuery.sap.require("sap.m.Image");
				}
				var mSettings = mProperties;
				//add 'id' to properties. This is required by utility
				//method 'createControlByURI'
				mSettings['id'] = sImgId;
				oImage = sap.ui.core.IconPool.createControlByURI(
						mSettings, sap.m.Image);
				//Set the parent so the image gets re-rendered, when the parent is
				oImage.setParent(oParent, null, true);
			}

			//Remove existing style classes which are contained in aCssClassesToRemove
			//(the list of css classes allowed for deletion) to have them updated later on
			//Unfortunately, there is no other way to do this but remove
			//each class individually
			if(!!aCssClassesToRemove) {
				for (var l = 0, removeLen = aCssClassesToRemove.length; l !== removeLen; l++) {
					oImage.removeStyleClass(aCssClassesToRemove[l]);
				}
			}
			//Add style classes if necessary
			if(!!aCssClassesToAdd) {
				for (var k = 0, len = aCssClassesToAdd.length; k !== len; k++) {
					oImage.addStyleClass(aCssClassesToAdd[k]);
				}
			}
			return oImageControl = oImage;
		}
	};
}());

/**
 * Helper for Popups
 *
 * @namespace
 * @name sap.m.PopupHelper
 * @since 1.16.7
 * @protected
 */
sap.m.PopupHelper = (function(){
	return {
		/**
		 * This methods converts the percentage value to an absolute number based on the given base number.
		 *
		 * @param {string} sPercentage A percentage value in string format, for example "25%"
		 * @param {float} fBaseSize A float number which the calculation is based on.
		 * @returns The calculated size string with "px" as unit or null when the format of given parameter is wrong.
		 *
		 * @protected
		 * @name sap.m.PopupHelper.calcPercentageSize
		 * @function
		 */
		calcPercentageSize: function(sPercentage, fBaseSize){
			if(typeof sPercentage !== "string"){
				jQuery.sap.log.warning("sap.m.PopupHelper: calcPercentageSize, the first parameter" + sPercentage + "isn't with type string");
				return null;
			}

			if(sPercentage.indexOf("%") <= 0){
				jQuery.sap.log.warning("sap.m.PopupHelper: calcPercentageSize, the first parameter" + sPercentage + "is not a percentage string (for example '25%')");
				return null;
			}

			var fPercent = parseFloat(sPercentage) / 100,
				fParsedBaseSize = parseFloat(fBaseSize);

			return Math.floor(fPercent * fParsedBaseSize) + "px";
		}
	};
}());

// implement Form helper factory with m controls
// possible is set before layout lib is loaded.
jQuery.sap.setObject("sap.ui.layout.form.FormHelper", {
	createLabel: function(sText){
		return new sap.m.Label({text: sText});
	},
	createButton: function(sId, fPressFunction, oThis){
		var oButton = new sap.m.Button(sId);
		oButton.attachEvent('press', fPressFunction, oThis); // attach event this way to have the right this-reference in handler
		return oButton;
	},
	setButtonContent: function(oButton, sText, sTooltip, sIcon, sIconHovered){
		oButton.setText(sText);
		oButton.setTooltip(sTooltip);
		oButton.setIcon(sIcon);
		oButton.setActiveIcon(sIconHovered);
	},
	addFormClass: function(){ return "sapUiFormM"; },
	bArrowKeySupport: false, /* disables the keyboard support for arrow keys */
	bFinal: true
});
