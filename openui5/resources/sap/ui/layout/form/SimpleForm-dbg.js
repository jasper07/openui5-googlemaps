/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.layout.form.SimpleForm.
jQuery.sap.declare("sap.ui.layout.form.SimpleForm");
jQuery.sap.require("sap.ui.layout.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new form/SimpleForm.
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
 * <li>{@link #getMaxContainerCols maxContainerCols} : int (default: 2)</li>
 * <li>{@link #getMinWidth minWidth} : int (default: -1)</li>
 * <li>{@link #getEditable editable} : boolean</li>
 * <li>{@link #getLabelMinWidth labelMinWidth} : int (default: 192)</li>
 * <li>{@link #getLayout layout} : sap.ui.layout.form.SimpleFormLayout (default: sap.ui.layout.form.SimpleFormLayout.ResponsiveLayout)</li>
 * <li>{@link #getLabelSpanL labelSpanL} : int (default: 4)</li>
 * <li>{@link #getLabelSpanM labelSpanM} : int (default: 2)</li>
 * <li>{@link #getLabelSpanS labelSpanS} : int (default: 12)</li>
 * <li>{@link #getEmptySpanL emptySpanL} : int (default: 0)</li>
 * <li>{@link #getEmptySpanM emptySpanM} : int (default: 0)</li>
 * <li>{@link #getEmptySpanS emptySpanS} : int (default: 0)</li>
 * <li>{@link #getColumnsL columnsL} : int (default: 2)</li>
 * <li>{@link #getColumnsM columnsM} : int (default: 1)</li>
 * <li>{@link #getBreakpointL breakpointL} : int (default: 1024)</li>
 * <li>{@link #getBreakpointM breakpointM} : int (default: 600)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} <strong>(default aggregation)</strong> : sap.ui.core.Element[]</li>
 * <li>{@link #getTitle title} : sap.ui.core.Title|string</li></ul>
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
 * Use the SimpleForm to create a form based on title, label and fields that are stacked in the content aggregation. Add Title to start a new FormContainer(Group). Add Label to start a new row in the container. Add Input/Display controls as needed. Use LayoutData to influence the layout for special cases in the Input/Display controls.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16.0
 * @name sap.ui.layout.form.SimpleForm
 */
sap.ui.core.Control.extend("sap.ui.layout.form.SimpleForm", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.layout",
	properties : {
		"maxContainerCols" : {type : "int", group : "Appearance", defaultValue : 2},
		"minWidth" : {type : "int", group : "Appearance", defaultValue : -1},
		"editable" : {type : "boolean", group : "Misc", defaultValue : null},
		"labelMinWidth" : {type : "int", group : "Misc", defaultValue : 192},
		"layout" : {type : "sap.ui.layout.form.SimpleFormLayout", group : "Misc", defaultValue : sap.ui.layout.form.SimpleFormLayout.ResponsiveLayout},
		"labelSpanL" : {type : "int", group : "Misc", defaultValue : 4},
		"labelSpanM" : {type : "int", group : "Misc", defaultValue : 2},
		"labelSpanS" : {type : "int", group : "Misc", defaultValue : 12},
		"emptySpanL" : {type : "int", group : "Misc", defaultValue : 0},
		"emptySpanM" : {type : "int", group : "Misc", defaultValue : 0},
		"emptySpanS" : {type : "int", group : "Misc", defaultValue : 0},
		"columnsL" : {type : "int", group : "Misc", defaultValue : 2},
		"columnsM" : {type : "int", group : "Misc", defaultValue : 1},
		"breakpointL" : {type : "int", group : "Misc", defaultValue : 1024},
		"breakpointM" : {type : "int", group : "Misc", defaultValue : 600}
	},
	defaultAggregation : "content",
	aggregations : {
    	"content" : {type : "sap.ui.core.Element", multiple : true, singularName : "content"}, 
    	"form" : {type : "sap.ui.layout.form.Form", multiple : false, visibility : "hidden"}, 
    	"title" : {type : "sap.ui.core.Title", altTypes : ["string"], multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.ui.layout.form.SimpleForm with name <code>sClassName</code> 
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
 * @name sap.ui.layout.form.SimpleForm.extend
 * @function
 */


/**
 * Getter for property <code>maxContainerCols</code>.
 * The maximum amount of inner FormContainers per row that is used before a new row is started.
 * (If a ResponsiveGridLayout is used as layout this property is not used. Please use the properties ColumnsL and ColumnsM in this case.)
 *
 * Default value is <code>2</code>
 *
 * @return {int} the value of property <code>maxContainerCols</code>
 * @public
 * @name sap.ui.layout.form.SimpleForm#getMaxContainerCols
 * @function
 */

/**
 * Setter for property <code>maxContainerCols</code>.
 *
 * Default value is <code>2</code> 
 *
 * @param {int} iMaxContainerCols  new value for property <code>maxContainerCols</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.SimpleForm#setMaxContainerCols
 * @function
 */


/**
 * Getter for property <code>minWidth</code>.
 * The overall minimal width in pixels that is used for the SimpleForm. If the available width is below the given minWidth the SimpleForm will create a new row for the next FormContainer.
 * -1 value is default meaning that inner FormContainers will be stacked until maxCols is reached, irrespective if a maxWidth is reached or the available parents width is reached.
 * (only used if ResponsiveLayout is used as Layout)
 *
 * Default value is <code>-1</code>
 *
 * @return {int} the value of property <code>minWidth</code>
 * @public
 * @name sap.ui.layout.form.SimpleForm#getMinWidth
 * @function
 */

/**
 * Setter for property <code>minWidth</code>.
 *
 * Default value is <code>-1</code> 
 *
 * @param {int} iMinWidth  new value for property <code>minWidth</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.SimpleForm#setMinWidth
 * @function
 */


/**
 * Getter for property <code>editable</code>.
 * Applies a device and theme specific line-height to the form elements if the form has editable content.
 * In this case all (not only the editable) rows of the form will get the line height.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @name sap.ui.layout.form.SimpleForm#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.SimpleForm#setEditable
 * @function
 */


/**
 * Getter for property <code>labelMinWidth</code>.
 * Specifies the min-width in pixels of the label in all form containers. (only used if ResponsiveLaout is used as Layout)
 *
 * Default value is <code>192</code>
 *
 * @return {int} the value of property <code>labelMinWidth</code>
 * @public
 * @name sap.ui.layout.form.SimpleForm#getLabelMinWidth
 * @function
 */

/**
 * Setter for property <code>labelMinWidth</code>.
 *
 * Default value is <code>192</code> 
 *
 * @param {int} iLabelMinWidth  new value for property <code>labelMinWidth</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.SimpleForm#setLabelMinWidth
 * @function
 */


/**
 * Getter for property <code>layout</code>.
 * The FormLayout that is used to render the SimpleForm
 *
 * Default value is <code>ResponsiveLayout</code>
 *
 * @return {sap.ui.layout.form.SimpleFormLayout} the value of property <code>layout</code>
 * @public
 * @name sap.ui.layout.form.SimpleForm#getLayout
 * @function
 */

/**
 * Setter for property <code>layout</code>.
 *
 * Default value is <code>ResponsiveLayout</code> 
 *
 * @param {sap.ui.layout.form.SimpleFormLayout} oLayout  new value for property <code>layout</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.SimpleForm#setLayout
 * @function
 */


/**
 * Getter for property <code>labelSpanL</code>.
 * Default span for labels in large size.
 * This span is only used if more than 1 container is in one line, if only 1 container is in the line the labelSpanM value is used.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 *
 * Default value is <code>4</code>
 *
 * @return {int} the value of property <code>labelSpanL</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#getLabelSpanL
 * @function
 */

/**
 * Setter for property <code>labelSpanL</code>.
 *
 * Default value is <code>4</code> 
 *
 * @param {int} iLabelSpanL  new value for property <code>labelSpanL</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#setLabelSpanL
 * @function
 */


/**
 * Getter for property <code>labelSpanM</code>.
 * Default span for labels in medium size.
 * This property is used for full size containers. If more than one Container is in one line, labelSpanL is used.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 *
 * Default value is <code>2</code>
 *
 * @return {int} the value of property <code>labelSpanM</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#getLabelSpanM
 * @function
 */

/**
 * Setter for property <code>labelSpanM</code>.
 *
 * Default value is <code>2</code> 
 *
 * @param {int} iLabelSpanM  new value for property <code>labelSpanM</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#setLabelSpanM
 * @function
 */


/**
 * Getter for property <code>labelSpanS</code>.
 * Default span for labels in small size.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 *
 * Default value is <code>12</code>
 *
 * @return {int} the value of property <code>labelSpanS</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#getLabelSpanS
 * @function
 */

/**
 * Setter for property <code>labelSpanS</code>.
 *
 * Default value is <code>12</code> 
 *
 * @param {int} iLabelSpanS  new value for property <code>labelSpanS</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#setLabelSpanS
 * @function
 */


/**
 * Getter for property <code>emptySpanL</code>.
 * Number of grid cells that are empty at the end of each line on large size.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>emptySpanL</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#getEmptySpanL
 * @function
 */

/**
 * Setter for property <code>emptySpanL</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iEmptySpanL  new value for property <code>emptySpanL</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#setEmptySpanL
 * @function
 */


/**
 * Getter for property <code>emptySpanM</code>.
 * Number of grid cells that are empty at the end of each line on medium size.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>emptySpanM</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#getEmptySpanM
 * @function
 */

/**
 * Setter for property <code>emptySpanM</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iEmptySpanM  new value for property <code>emptySpanM</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#setEmptySpanM
 * @function
 */


/**
 * Getter for property <code>emptySpanS</code>.
 * Number of grid cells that are empty at the end of each line on small size.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>emptySpanS</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#getEmptySpanS
 * @function
 */

/**
 * Setter for property <code>emptySpanS</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iEmptySpanS  new value for property <code>emptySpanS</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#setEmptySpanS
 * @function
 */


/**
 * Getter for property <code>columnsL</code>.
 * Form columns for large size.
 * The number of columns for large size must not be smaller that the number of columns for medium size.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 *
 * Default value is <code>2</code>
 *
 * @return {int} the value of property <code>columnsL</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#getColumnsL
 * @function
 */

/**
 * Setter for property <code>columnsL</code>.
 *
 * Default value is <code>2</code> 
 *
 * @param {int} iColumnsL  new value for property <code>columnsL</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#setColumnsL
 * @function
 */


/**
 * Getter for property <code>columnsM</code>.
 * Form columns for medium size.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>columnsM</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#getColumnsM
 * @function
 */

/**
 * Setter for property <code>columnsM</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iColumnsM  new value for property <code>columnsM</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#setColumnsM
 * @function
 */


/**
 * Getter for property <code>breakpointL</code>.
 * Breakpoint between Medium size and Large size.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 *
 * Default value is <code>1024</code>
 *
 * @return {int} the value of property <code>breakpointL</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#getBreakpointL
 * @function
 */

/**
 * Setter for property <code>breakpointL</code>.
 *
 * Default value is <code>1024</code> 
 *
 * @param {int} iBreakpointL  new value for property <code>breakpointL</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#setBreakpointL
 * @function
 */


/**
 * Getter for property <code>breakpointM</code>.
 * Breakpoint between Small size and Medium size.
 * (This property is only used if a ResponsiveGridLayout is used as Layout.)
 *
 * Default value is <code>600</code>
 *
 * @return {int} the value of property <code>breakpointM</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#getBreakpointM
 * @function
 */

/**
 * Setter for property <code>breakpointM</code>.
 *
 * Default value is <code>600</code> 
 *
 * @param {int} iBreakpointM  new value for property <code>breakpointM</code>
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#setBreakpointM
 * @function
 */


/**
 * Getter for aggregation <code>content</code>.<br/>
 * The form content.
 * Add a Title control to start a new group (Container).
 * Add a Label control to start a new row (Element).
 * Add controls as Input fields, text fields or other as needed.
 * Use LayoutData to influence the layout for special cases in the single controls.
 * For example, if a ResponsiveLayout is used as layout the form content is weighted using weight 3 for the labels and weight 5 for the fields part. Per default the label column is 192 pixels wide.
 * If your Input controls should influence their width you can add sap.ui.layout.ResponsiveFlowLayoutData to them via setLayoutData method.
 * Ensure that the sum of the weights in the ResponsiveFlowLayoutData does not use more than 5 as this is the total width of Input control part of each form row.
 * Example for a row where the Input takes 4 and the Text takes 1 weight:
 * new sap.ui.commons.Label({text:"Label"});
 * new sap.ui.commons.TextField({value:"Weight 4",
 * layoutData:new sap.ui.layout.ResponsiveFlowLayoutData({weight:4})}),
 * new sap.ui.commons.TextView({text:"Weight 1",
 * layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:1})}),
 * 
 * <strong>Note</strong>: this is the default aggregation for form/SimpleForm.
 * @return {sap.ui.core.Element[]}
 * @public
 * @name sap.ui.layout.form.SimpleForm#getContent
 * @function
 */


/**
 * Inserts a content into the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Element}
 *          oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the content should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the content is inserted at 
 *             the last position        
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.SimpleForm#insertContent
 * @function
 */

/**
 * Adds some content <code>oContent</code> 
 * to the aggregation named <code>content</code>.
 *
 * @param {sap.ui.core.Element}
 *            oContent the content to add; if empty, nothing is inserted
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.SimpleForm#addContent
 * @function
 */

/**
 * Removes an content from the aggregation named <code>content</code>.
 *
 * @param {int | string | sap.ui.core.Element} vContent the content to remove or its index or id
 * @return {sap.ui.core.Element} the removed content or null
 * @public
 * @name sap.ui.layout.form.SimpleForm#removeContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>content</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Element[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.layout.form.SimpleForm#removeAllContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Element</code> in the aggregation named <code>content</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Element}
 *            oContent the content whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.layout.form.SimpleForm#indexOfContent
 * @function
 */
	

/**
 * Destroys all the content in the aggregation 
 * named <code>content</code>.
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.layout.form.SimpleForm#destroyContent
 * @function
 */


/**
 * Getter for aggregation <code>title</code>.<br/>
 * Title element of the SimpleForm. Can either be a Label object, or a simple string.
 * 
 * @return {sap.ui.core.Title|string}
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#getTitle
 * @function
 */


/**
 * Setter for the aggregated <code>title</code>.
 * @param {sap.ui.core.Title|string} oTitle
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#setTitle
 * @function
 */
	

/**
 * Destroys the title in the aggregation 
 * named <code>title</code>.
 * @return {sap.ui.layout.form.SimpleForm} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.SimpleForm#destroyTitle
 * @function
 */


// Start of sap\ui\layout\form\SimpleForm.js
///**
//* This file defines behavior for the control,
//*/
jQuery.sap.require("sap.ui.layout.form.Form");
jQuery.sap.require("sap.ui.layout.form.FormContainer");
jQuery.sap.require("sap.ui.layout.form.FormElement");
jQuery.sap.require("sap.ui.layout.form.FormLayout"); // because initial not known what Layout used - but all FormLayout usein this one.
jQuery.sap.require("sap.ui.layout.ResponsiveFlowLayoutData"); // because ResponsiveLayout is the default and it's not known if or when setLayout is called

(function() {

	sap.ui.layout.form.SimpleForm.prototype.init = function() {

		this._iMaxWeight = 8;
		this._iLabelWeight = 3;
		this._iCurrentWidth = 0;
		var oForm = new sap.ui.layout.form.Form(this.getId()+"--Form");
		// use title of SimpleForm in Form
		oForm.getTitle = function(){
			return this.getParent().getTitle();
		};
		this.setAggregation("form",oForm);
		this._aElements = null;
		this._aLayouts = [];
		var that = this;
		this._changedFormContainers = [];
		this._changedFormElements = [];

	};

	sap.ui.layout.form.SimpleForm.prototype.exit = function() {

		if (this._sResizeListenerId) {
			sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
			this._sResizeListenerId = null;
		}
		for (var i=0;i<this._aLayouts.length;i++) {
			var oLayout = sap.ui.getCore().byId(this._aLayouts[i]);
			if (oLayout && oLayout.destroy) {
				oLayout.destroy();
			}
		}
		this._aLayouts = [];
		this._aElements = null;
		this._changedFormContainers = [];
		this._changedFormElements = [];

	};

	/*
	 * Update FormContaners, FormElements and LayoutData before controls are rendered
	 */
	sap.ui.layout.form.SimpleForm.prototype.onBeforeRendering = function() {

		//unregister resize
		if (this._sResizeListenerId) {
			sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
			this._sResizeListenerId = null;
		}
		var that = this;

		var oForm = this.getAggregation("form");
		if(!oForm.getLayout()){
			_setFormLayout(that);
		}

		_updateFormContainers(that);

	};



	sap.ui.layout.form.SimpleForm.prototype.onAfterRendering = function() {

		if (this.getLayout() == sap.ui.layout.form.SimpleFormLayout.ResponsiveLayout) {
			this.$().css("visibility", "hidden"); //avoid that a wrong layouting is visible
			this._applyLinebreaks();

			//attach the resize handler
			this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(),  jQuery.proxy(this._resize, this));
		}

	};

	sap.ui.layout.form.SimpleForm.prototype.setEditable = function(bEditable) {

		this.setProperty("editable", bEditable, true);

		var oForm = this.getAggregation("form");
		oForm.setEditable(bEditable);

	};

	/*
	 * overwrite generated functions to use internal array to look for aggregation
	 */
	sap.ui.layout.form.SimpleForm.prototype.indexOfContent = function(oObject) {

		var aChildren = this._aElements;
		if (aChildren) {
			for (var i = 0; i < aChildren.length; i++) {
				if (aChildren[i] == oObject) {
					return i;
				}
			}
		}
		return -1;

	};

	sap.ui.layout.form.SimpleForm.prototype.addContent = function(oElement) {

		oElement = this.validateAggregation("content", oElement, /* multiple */ true);

		if (!this._aElements) {
			this._aElements = [];
		}

		// try to find corresponding FormElement and FormContainer to update them
		var iLength = this._aElements.length;
		var oLastElement;
		var oForm = this.getAggregation("form");
		var oFormContainer;
		var oFormElement;
		var oParent;
		var oLayoutData;

		if (oElement instanceof sap.ui.core.Title) {
			//start a new container with a title
			oFormContainer = _createFormContainer(this, oElement);
			oForm.addFormContainer(oFormContainer);
			this._changedFormContainers.push(oFormContainer);
		} else if (oElement.getMetadata().isInstanceOf("sap.ui.core.Label")) { // if the control implements the label interface
			// new label -> create new FormElement
			// determine Container from last Content element
			if (iLength > 0) {
				oLastElement = this._aElements[iLength - 1];
				oParent = oLastElement.getParent();
				if (oParent instanceof sap.ui.layout.form.FormElement) {
					oFormContainer = oParent.getParent();
				} else if (oParent instanceof sap.ui.layout.form.FormContainer){
					oFormContainer = oParent;
				}
			}
			if (!oFormContainer) {
				oFormContainer = _createFormContainer(this);
				oForm.addFormContainer(oFormContainer);
				this._changedFormContainers.push(oFormContainer);
			}

			oFormElement = _addFormElement(this, oFormContainer, oElement);
		} else {
			// new Field -> add to last FormElement
			if (iLength > 0) {
				oLastElement = this._aElements[iLength - 1];
				oParent = oLastElement.getParent();
				if (oParent instanceof sap.ui.layout.form.FormElement) {
					oFormContainer = oParent.getParent();
					oFormElement = oParent;
					oLayoutData = _getFieldLayoutData(this, oElement);
					if (oLayoutData instanceof sap.ui.layout.ResponsiveFlowLayoutData && !_isMyLayoutData(this, oLayoutData)) {
						if (oLayoutData.getLinebreak()) {
							oFormElement = _addFormElement(this, oFormContainer);
						}
					}
				} else if (oParent instanceof sap.ui.layout.form.FormContainer){
					oFormContainer = oParent;
					oFormElement = _addFormElement(this, oFormContainer);
				}
			}else {
				// no FormContainer and FormElement exists
				oFormContainer = _createFormContainer(this);
				oForm.addFormContainer(oFormContainer);
				this._changedFormContainers.push(oFormContainer);
				oFormElement = _addFormElement(this, oFormContainer);
			}

			_createFieldLayoutData(this, oElement, 5, false, true);

			oFormElement.addField(oElement);
			_markFormElementForUpdate(this._changedFormElements, oFormElement);
		}

		this._aElements.push(oElement);
		oElement.attachEvent("_change", _handleContentChange, this);
		this.invalidate();
		return this;

	};

	sap.ui.layout.form.SimpleForm.prototype.insertContent = function(oElement, iIndex) {

		oElement = this.validateAggregation("content", oElement, /* multiple */ true);

		if (!this._aElements) {
			this._aElements = [];
		}

		var iLength = this._aElements.length;
		var iNewIndex = iIndex < 0 ? 0 : (iIndex > iLength ? iLength : iIndex);
		if (iNewIndex !== iIndex) {
			jQuery.sap.log.warning("SimpleForm.insertContent: index '" + iIndex + "' out of range [0," + iLength + "], forced to " + iNewIndex);
		}

		if (iNewIndex == iLength) {
			// just added to the end -> use add function
			this.addContent(oElement);
			return this;
		}

		var oOldElement = this._aElements[iNewIndex];
		var oForm = this.getAggregation("form");
		var oFormContainer;
		var oFormElement;
		var oOldFormContainer;
		var oOldFormElement;
		var iContainerIndex;
		var iElementIndex = 0;
		var iFieldIndex;
		var aFields;
		var aFormElements;
		var aFormContainers;

		if (oElement instanceof sap.ui.core.Title) {
			//start a new container with a title
			if (iIndex == 0 && !(oOldElement instanceof sap.ui.core.Title)) {
				// special case - index==0 and first container has no title -> just add title to Container
				oFormContainer = oOldElement.getParent().getParent();
				oFormContainer.setTitle(oElement);
			} else {
				oFormContainer = _createFormContainer(this, oElement);
				if (oOldElement instanceof sap.ui.core.Title) {
					// insert before old container
					oOldFormContainer = oOldElement.getParent();
					iContainerIndex = oForm.indexOfFormContainer(oOldFormContainer);
				}else {
					// insert after old container
					oOldFormElement = oOldElement.getParent();
					oOldFormContainer = oOldFormElement.getParent();
					iContainerIndex = oForm.indexOfFormContainer(oOldFormContainer) + 1;
					iElementIndex = oOldFormContainer.indexOfFormElement(oOldFormElement);

					// check if old FormElement must be splited
					if (!oOldElement.getMetadata().isInstanceOf("sap.ui.core.Label")) {
						iFieldIndex = oOldFormElement.indexOfField(oOldElement);
						if (iFieldIndex > 0 || oOldFormElement.getLabel()) {
							// split FormElement
							oFormElement = _addFormElement(this, oFormContainer);
							this._changedFormElements.push(oFormElement);
							_markFormElementForUpdate(this._changedFormElements, oOldFormElement);
							// move all Fields after index into new FormElement
							aFields = oOldFormElement.getFields();
							for ( var i = iFieldIndex; i < aFields.length; i++) {
								var oField = aFields[i];
								oFormElement.addField(oField);
							}
							iElementIndex++;
						}
					}
					// move all FormElements after the new content into the new container
					aFormElements = oOldFormContainer.getFormElements();
					for ( var i = iElementIndex; i < aFormElements.length; i++) {
						oFormContainer.addFormElement(aFormElements[i]);
					}
				}
				oForm.insertFormContainer(oFormContainer, iContainerIndex);
			}
			this._changedFormContainers.push(oFormContainer);
		} else if (oElement.getMetadata().isInstanceOf("sap.ui.core.Label")) {
			if (oOldElement instanceof sap.ui.core.Title) {
				// add new FormElement to previous container
				oOldFormContainer = oOldElement.getParent();
				iContainerIndex = oForm.indexOfFormContainer(oOldFormContainer);
				aFormContainers = oForm.getFormContainers();
				oFormContainer = aFormContainers[iContainerIndex-1];
				oFormElement = _addFormElement(this, oFormContainer, oElement);
			} else if (oOldElement.getMetadata().isInstanceOf("sap.ui.core.Label")) {
				// insert new form element before this one
				oOldFormContainer = oOldElement.getParent().getParent();
				iElementIndex = oOldFormContainer.indexOfFormElement(oOldElement.getParent());
				oFormElement = _insertFormElement(this, oOldFormContainer, oElement, iElementIndex);
			} else {
				// split FormElement
				oOldFormElement = oOldElement.getParent();
				oOldFormContainer = oOldFormElement.getParent();
				iElementIndex = oOldFormContainer.indexOfFormElement(oOldFormElement) + 1;
				iFieldIndex = oOldFormElement.indexOfField(oOldElement);

				if (iFieldIndex == 0 && !oOldFormElement.getLabel()) {
					// special case: Form Element has no label and inserted before first Field
					oFormElement = oOldFormElement;
					oFormElement.setLabel(oElement);
					_createFieldLayoutData(this, oElement, this._iLabelWeight, false, true, this.getLabelMinWidth());
				} else {
					oFormElement = _insertFormElement(this, oOldFormContainer, oElement, iElementIndex);
					_markFormElementForUpdate(this._changedFormElements, oOldFormElement);

					// move all Fields after index into new FormElement
					aFields = oOldFormElement.getFields();
					for ( var i = iFieldIndex; i < aFields.length; i++) {
						var oField = aFields[i];
						oFormElement.addField(oField);
					}
				}
			}
			this._changedFormElements.push(oFormElement);
		}else{ // new field
			if (oOldElement instanceof sap.ui.core.Title) {
				// add new Field to last FormElement of previous FormContainer
				oOldFormContainer = oOldElement.getParent();
				iContainerIndex = oForm.indexOfFormContainer(oOldFormContainer);

				if (iContainerIndex == 0) {
					// it's the first container - insert new container before
					oFormContainer = _createFormContainer(this);
					oForm.insertFormContainer(oFormContainer, iContainerIndex);
					this._changedFormContainers.push(oFormContainer);
				}else{
					aFormContainers = oForm.getFormContainers();
					oFormContainer = aFormContainers[iContainerIndex-1];
				}

				aFormElements = oFormContainer.getFormElements();
				if (aFormElements.length == 0) {
					// container has no FormElements -> create one
					oFormElement = _addFormElement(this, oFormContainer);
				}else{
					oFormElement = aFormElements[aFormElements.length-1];
				}

				oFormElement.addField(oElement);
			} else if (oOldElement.getMetadata().isInstanceOf("sap.ui.core.Label")) {
				// add new field to previous FormElement
				oOldFormElement = oOldElement.getParent();
				oFormContainer = oOldFormElement.getParent();
				iElementIndex = oFormContainer.indexOfFormElement(oOldFormElement);

				if (iElementIndex == 0) {
					// it's already the first FormElement -> insert a new one before
					oFormElement = _insertFormElement(this, oFormContainer, null, 0);
				} else {
					aFormElements = oFormContainer.getFormElements();
					oFormElement = aFormElements[iElementIndex-1];
				}
				oFormElement.addField(oElement);
			} else {
				// insert new field into same FormElement before old field
				oFormElement = oOldElement.getParent();
				iFieldIndex = oFormElement.indexOfField(oOldElement);
				oFormElement.insertField(oElement, iFieldIndex);
			}
			_markFormElementForUpdate(this._changedFormElements, oFormElement);

			_createFieldLayoutData(this, oElement, 5, false, true);
		}

		this._aElements.splice(iNewIndex, 0, oElement);
		oElement.attachEvent("_change", _handleContentChange, this);
		this.invalidate();
		return this;

	};

	sap.ui.layout.form.SimpleForm.prototype.removeContent = function(vElement) {

		var oElement = null;
		var iIndex = -1;

		if (this._aElements) {

			if (typeof(vElement) == "string") { // ID of the element is given
				vElement = sap.ui.getCore().byId(vElement);
			}

			if (typeof(vElement) == "object") { // the element itself is given or has just been retrieved
				for (var i = 0; i < this._aElements.length; i++) {
					if (this._aElements[i] == vElement) {
						vElement = i;
						break;
					}
				}
			}

			if (typeof(vElement) == "number") { // "vElement" is the index now
				if (vElement < 0 || vElement >= this._aElements.length) {
					jQuery.sap.log.warning("Element.removeAggregation called with invalid index: Items, " + vElement);
				} else {
					iIndex = vElement;
					oElement = this._aElements[iIndex];
				}
			}
		}
		if (oElement) {
			var oForm = this.getAggregation("form");
			var oFormContainer;
			var oFormElement;
			var aFormElements;
			var aFields;

			if (oElement instanceof sap.ui.core.Title) {
				oFormContainer = oElement.getParent();
				oFormContainer.setTitle(null);
				if (iIndex > 0) {
					// if it's the first container -> just remove title
					// remove container and add content to previous container
					aFormElements = oFormContainer.getFormElements();
					var iContainerIndex = oForm.indexOfFormContainer(oFormContainer);
					var oPrevFormContainer = oForm.getFormContainers()[iContainerIndex-1];
					if (aFormElements && !aFormElements[0].getLabel()) {
						// first Form Element has no label -> add its fields to last Form Element of previous container
						var aPrevFormElements = oPrevFormContainer.getFormElements();
						var oLastFormElement = aPrevFormElements[aPrevFormElements.length - 1];
						aFields = aFormElements[0].getFields();
						for ( var i = 0; i < aFields.length; i++) {
							oLastFormElement.addField(aFields[i]);
						}
						_markFormElementForUpdate(this._changedFormElements, oLastFormElement);
						oFormContainer.removeFormElement(aFormElements[0]);
						aFormElements[0].destroy();
						aFormElements.splice(0,1);
					}
					for ( var i = 0; i < aFormElements.length; i++) {
						oPrevFormContainer.addFormElement(aFormElements[i]);
					}
					_markFormElementForUpdate(this._changedFormContainers, oPrevFormContainer);
					oForm.removeFormContainer(oFormContainer);
					oFormContainer.destroy();
				}
			} else if (oElement.getMetadata().isInstanceOf("sap.ui.core.Label")) {
				oFormElement = oElement.getParent();
				oFormContainer = oFormElement.getParent();
				oFormElement.setLabel(null);
				var iElementIndex = oFormContainer.indexOfFormElement(oFormElement);
				if (iElementIndex == 0) {
					// its the first Element of the container -> just remove label
					if (!oFormElement.getFields()) {
						// FormElement has no fields -> just delete
						oFormContainer.removeFormElement(oFormElement);
						oFormElement.destroy();
					}else {
						_markFormElementForUpdate(this._changedFormElements, oFormElement);
					}
				} else {
					// add fields to previous FormElement
					aFormElements = oFormContainer.getFormElements();
					var oPrevFormElement = aFormElements[iElementIndex-1];
					aFields = oFormElement.getFields();
					for ( var i = 0; i < aFields.length; i++) {
						oPrevFormElement.addField(aFields[i]);
					}
					_markFormElementForUpdate(this._changedFormElements, oPrevFormElement);
					oFormContainer.removeFormElement(oFormElement);
					oFormElement.destroy();
				}
			}else{ // remove field
				oFormElement = oElement.getParent();
				oFormElement.removeField(oElement);
				if (!oFormElement.getFields() && !oFormElement.getLabel()) {
					// FormElement has no more fields and no label -> just delete
					oFormContainer = oFormElement.getParent();
					oFormContainer.removeFormElement(oFormElement);
					oFormElement.destroy();
				} else {
					_markFormElementForUpdate(this._changedFormElements, oFormElement);
				}
			}

			this._aElements.splice(iIndex, 1);
			oElement.setParent(null);
			oElement.detachEvent("_change", _handleContentChange, this);
			_removeLayoutData(this, oElement);

			this.invalidate();
			return oElement;
		}
		return null;

	};

	sap.ui.layout.form.SimpleForm.prototype.removeAllContent = function() {

		if (this._aElements) {
			var oForm = this.getAggregation("form");
			var aFormContainers = oForm.getFormContainers();
			for ( var i = 0; i < aFormContainers.length; i++) {
				var oFormContainer = aFormContainers[i];
				oFormContainer.setTitle(null);
				var aFormElements = oFormContainer.getFormElements();
				for ( var j = 0; j < aFormElements.length; j++) {
					var oFormElement = aFormElements[j];
					oFormElement.setLabel(null);
					oFormElement.removeAllFields();
				}
				oFormContainer.destroyFormElements();
			}
			oForm.destroyFormContainers();

			for (var i = 0; i < this._aElements.length; i++) {
				var oElement = this._aElements[i];
				_removeLayoutData(this, oElement);
				oElement.detachEvent("_change", _handleContentChange, this);
			}
			var aElements = this._aElements;
			this._aElements = null;
			this.invalidate();
			return aElements;
		} else {
			return [];
		}

	};

	sap.ui.layout.form.SimpleForm.prototype.destroyContent = function() {

		var aElements = this.removeAllContent();

		if (aElements) {
			for (var i = 0; i < aElements.length; i++) {
				aElements[i].destroy();
			}
			this.invalidate();
		}
		return this;

	};

	sap.ui.layout.form.SimpleForm.prototype.getContent = function() {

		if (!this._aElements) {
			this._aElements = this.getAggregation("content");
		}
		return this._aElements;

	};

/*
 * set the FormLayout to the Form. If already a FormLayout is set, just set a new one.
 */
	sap.ui.layout.form.SimpleForm.prototype.setLayout = function(sLayout) {

		var sOldLayout = this.getLayout();
		this.setProperty("layout", sLayout);

		if (sLayout != sOldLayout) {
			var that = this;
			_setFormLayout(that);

			// update LayoutData for Containers, Elements and Fields
			var oForm = this.getAggregation("form");
			var aContainers = oForm.getFormContainers();
			var aElements;
			var aFields;
			var oLayoutData;

			for ( var i = 0; i < aContainers.length; i++) {
				var oContainer = aContainers[i];
				this._changedFormContainers.push(oContainer);
				oLayoutData = oContainer.getLayoutData();
				if (oLayoutData) {
					oLayoutData.destroy();
				}
				_createContainerLayoutData(this, oContainer);
				aElements = oContainer.getFormElements();
				for ( var j = 0; j < aElements.length; j++) {
					var oElement = aElements[j];
					_markFormElementForUpdate(this._changedFormElements, oElement);
					oLayoutData = oElement.getLayoutData();
					if (oLayoutData) {
						oLayoutData.destroy();
					}
					_createElementLayoutData(this, oElement);
					var oLabel = oElement.getLabel();
					if (oLabel) {
						_removeLayoutData(this, oLabel);
						_createFieldLayoutData(this, oLabel, this._iLabelWeight, false, true, this.getLabelMinWidth());
					}
					aFields = oElement.getFields();
					for ( var k = 0; k < aFields.length; k++) {
						var oField = aFields[k];
						_removeLayoutData(this, oField);
						_createFieldLayoutData(this, oField, 5, false, true);
					}
				}
			}
		}

	};

	/*
	 * overwrite the clone function because content will not be cloned in default one
	 */
	sap.ui.layout.form.SimpleForm.prototype.clone = function(sIdSuffix) {

		var oClone = sap.ui.core.Control.prototype.clone.apply(this, arguments);
		var aContent = this.getContent();

		for ( var i = 0; i < aContent.length; i++) {
			var oElement = aContent[i];
			var oLayoutData = oElement.getLayoutData();
			var oElementClone = oElement.clone(sIdSuffix);
			if (oLayoutData) {
				// mark private LayoutData
				if (oLayoutData.getMetadata().getName() == "sap.ui.core.VariantLayoutData") {
					var aLayoutData = oLayoutData.getMultipleLayoutData();
					for ( var j = 0; j < aLayoutData.length; j++) {
						if (_isMyLayoutData(this, aLayoutData[j])) {
							oClone._aLayouts.push(oElementClone.getLayoutData().getMultipleLayoutData()[j].getId());
						}
					}
				} else if (_isMyLayoutData(this, oLayoutData)) {
					oClone._aLayouts.push(oElementClone.getLayoutData().getId());
				}
			}
			oClone.addContent(oElementClone);
		}

		return oClone;

	};

	var _setFormLayout = function(oThis) {

			var oForm = oThis.getAggregation("form");
			var oLayout = oForm.getLayout();
			if (oLayout) {
				oLayout.destroy();
			}

			switch (oThis.getLayout()) {
			case sap.ui.layout.form.SimpleFormLayout.ResponsiveLayout:
				jQuery.sap.require("sap.ui.layout.form.ResponsiveLayout");
				oForm.setLayout(new sap.ui.layout.form.ResponsiveLayout(oThis.getId()+"--Layout"));
				break;
			case sap.ui.layout.form.SimpleFormLayout.GridLayout:
				jQuery.sap.require("sap.ui.layout.form.GridLayout");
				jQuery.sap.require("sap.ui.layout.form.GridContainerData");
				jQuery.sap.require("sap.ui.layout.form.GridElementData");
				oForm.setLayout(new sap.ui.layout.form.GridLayout(oThis.getId()+"--Layout"));
				break;
			case sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout:
				jQuery.sap.require("sap.ui.layout.form.ResponsiveGridLayout");
				jQuery.sap.require("sap.ui.layout.GridData");
				oForm.setLayout(new sap.ui.layout.form.ResponsiveGridLayout(oThis.getId()+"--Layout"));
				break;

			default:
				break;
			}

	};

	/*
	 * Updates the FormContainers of the simple form.
	 */
	var _updateFormContainers = function(oThis) {

		oThis._changedFormContainers = [];

		var sLayout = oThis.getLayout();


		switch (sLayout) {
		case sap.ui.layout.form.SimpleFormLayout.ResponsiveLayout:
			// set the default values for linebreakes to avoid flickering for default case
			oThis._applyLinebreaks();
			break;
		case sap.ui.layout.form.SimpleFormLayout.GridLayout:
			_applyContainerSize(oThis);
			break;
		case sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout:
			var oLayout = oThis.getAggregation("form").getLayout();
			oLayout.setLabelSpanL(oThis.getLabelSpanL());
			oLayout.setLabelSpanM(oThis.getLabelSpanM());
			oLayout.setLabelSpanS(oThis.getLabelSpanS());
			oLayout.setEmptySpanL(oThis.getEmptySpanL());
			oLayout.setEmptySpanM(oThis.getEmptySpanM());
			oLayout.setEmptySpanS(oThis.getEmptySpanS());
			oLayout.setColumnsL(oThis.getColumnsL());
			oLayout.setColumnsM(oThis.getColumnsM());
			oLayout.setBreakpointL(oThis.getBreakpointL());
			oLayout.setBreakpointM(oThis.getBreakpointM());
			break;
		default:
			break;
		}

		for ( var i = 0; i < oThis._changedFormElements.length; i++) {
			var oFormElement = oThis._changedFormElements[i];

			switch (sLayout) {
			case sap.ui.layout.form.SimpleFormLayout.ResponsiveLayout:
				_applyFieldWeight(oThis, oFormElement);
				break;
			case sap.ui.layout.form.SimpleFormLayout.GridLayout:
				break;
			default:
				break;
			}

			_updateVisibility(oThis, oFormElement);
		}
		oThis._changedFormElements = [];

	};

	/*
	 * Checks whether the given LayoutData is created and added by this Simple Form
	 * @param { sap.ui.layout.ResponsiveFlowLayoutData} optional (interface) The layout data
	 * @returns {boolean} Whether the given layout was created by this Simple Form
	 * @private
	 */
	var _isMyLayoutData = function(oThis, oLayoutData) {

		var sId = oLayoutData.getId(),
		sLayouts = " " + oThis._aLayouts.join(" ") + " ";
		return sLayouts.indexOf(" " + sId + " ") >-1;

	};

	/*
	 * Creates new sap.ui.layout.ResponsiveFlowLayoutData with the given parameters
	 * @param {int} iWeight the weight for the layout data
	 * @param {boolean} bLinebreak Whether the layout data has a linebreak
	 * @param {boolean} bLinebreakable Whether the layout data is linebreakable
	 * @returns {sap.ui.layout.ResponsiveFlowLayoutData} The newly created ResponsiveFlowLayoutData
	 * @private
	 */
	var _createRFLayoutData = function(oThis, iWeight, bLinebreak, bLinebreakable, iMinWidth) {

		var oLayout = new sap.ui.layout.ResponsiveFlowLayoutData({weight:iWeight,linebreak:bLinebreak===true,linebreakable: bLinebreakable===true});
		if (iMinWidth) {
			oLayout.setMinWidth(iMinWidth);
		}
		oThis._aLayouts.push(oLayout.getId());
		return oLayout;

	};

	/*
	 * Mabe there are VariantLayoutData used -> so get the right one for the used Layout
	 */
	var _getFieldLayoutData = function(oThis, oField){

		var oLayoutData;

		switch (oThis.getLayout()) {
		case sap.ui.layout.form.SimpleFormLayout.ResponsiveLayout:
			oLayoutData = sap.ui.layout.form.FormLayout.prototype.getLayoutDataForElement(oField, "sap.ui.layout.ResponsiveFlowLayoutData");
			break;
		case sap.ui.layout.form.SimpleFormLayout.GridLayout:
			oLayoutData = sap.ui.layout.form.FormLayout.prototype.getLayoutDataForElement(oField, "sap.ui.layout.form.GridElementData");
			break;
		case sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout:
			oLayoutData = sap.ui.layout.form.FormLayout.prototype.getLayoutDataForElement(oField, "sap.ui.layout.GridData");
			break;

		default:
			break;
		}

		return oLayoutData;

	};

	var _createFieldLayoutData = function(oThis, oField, iWeight, bLinebreak, bLinebreakable, iMinWidth) {

		var oLayoutData;

		switch (oThis.getLayout()) {
		case sap.ui.layout.form.SimpleFormLayout.ResponsiveLayout:
			oLayoutData = _getFieldLayoutData(oThis, oField);
			if (!oLayoutData || !_isMyLayoutData(oThis, oLayoutData)) {
				oLayoutData = oField.getLayoutData();
				if (oLayoutData && oLayoutData.getMetadata().getName() == "sap.ui.core.VariantLayoutData") {
					oLayoutData.addMultipleLayoutData(_createRFLayoutData(oThis, iWeight, bLinebreak, bLinebreakable, iMinWidth));
				} else if(!oLayoutData){
					oField.setLayoutData(_createRFLayoutData(oThis, iWeight, bLinebreak, bLinebreakable, iMinWidth));
				} else {
					jQuery.sap.log.warning("ResponsiveFlowLayoutData can not be set on Field "+ oField.getId(), "_createFieldLayoutData", "SimpleForm");
				}
			}
			break;
		case sap.ui.layout.form.SimpleFormLayout.GridLayout:
			// no default LayoutData needed"
			break;

		default:
			break;
		}

	};

	var _createElementLayoutData = function(oThis, oElement) {

		switch (oThis.getLayout()) {
		case sap.ui.layout.form.SimpleFormLayout.ResponsiveLayout:
			oElement.setLayoutData(new sap.ui.layout.ResponsiveFlowLayoutData({linebreak:true, margin:false}));
			break;
		case sap.ui.layout.form.SimpleFormLayout.GridLayout:
			// no default LayoutData needed"
			break;

		default:
			break;
		}

	};

	var _createContainerLayoutData = function(oThis, oContainer) {

		switch (oThis.getLayout()) {
		case sap.ui.layout.form.SimpleFormLayout.ResponsiveLayout:
			oContainer.setLayoutData(new sap.ui.layout.ResponsiveFlowLayoutData({minWidth:280}));
			break;
		case sap.ui.layout.form.SimpleFormLayout.GridLayout:
			if (oThis.getMaxContainerCols() > 1) {
				oContainer.setLayoutData(new sap.ui.layout.form.GridContainerData({halfGrid: true}));
			} else{
				oContainer.setLayoutData(new sap.ui.layout.form.GridContainerData({halfGrid: false}));
			}
			break;

		default:
			break;
		}

	};

	var _removeLayoutData = function(oThis, oElement) {

		var oLayout = _getFieldLayoutData(oThis, oElement);
		if (oLayout) {
			var sLayoutId = oLayout.getId();

			for ( var i = 0; i < oThis._aLayouts.length; i++) {
				var sId = oThis._aLayouts[i];
				if (sLayoutId == sId) {
					oLayout.destroy(); // is removed from parent during destroy
					oThis._aLayouts.splice(i, 1);
					break;
				}
			}
		}

	};

	/*
	 * Adds a new form element to the given FormContainer and adds the given label to it.
	 * @param {sap.ui.layout.form.FormContainer} The form container
	 * @param {sap.ui.core.Label} optional (interface) The label of the element
	 * @returns {sap.ui.layout.form.FormElement} The newly created FormElement
	 * @private
	 */
	var _addFormElement = function(oThis, oFormContainer, oLabel) {

		var oElement = _createFormElement(oThis, oLabel);
		oFormContainer.addFormElement(oElement);
		return oElement;

	};

	var _insertFormElement = function(oThis, oFormContainer, oLabel, iIndex) {

		var oElement = _createFormElement(oThis, oLabel);
		oFormContainer.insertFormElement(oElement, iIndex);
		return oElement;

	};

	var _createFormElement = function(oThis, oLabel) {

		var oElement = new sap.ui.layout.form.FormElement();
		_createElementLayoutData(oThis, oElement);
		if (oLabel) {
			oLabel.addStyleClass("sapUiFormLabel-CTX");
			oElement.setLabel(oLabel);
			if (!_getFieldLayoutData(oThis, oLabel)) {
				_createFieldLayoutData(oThis, oLabel, oThis._iLabelWeight, false, true, oThis.getLabelMinWidth());
			}
		}
		oElement.setVisible(false);
		return oElement;

	};

	/*
	 * creates a new form container and adds the given title to it.
	 * @param {sap.ui.core.Title} optional The title of the container
	 * @returns {sap.ui.layout.form.FormContainer} The newly created FormContainer
	 * @private
	 */
	var _createFormContainer = function(oThis, oTitle) {

		var oContainer = new sap.ui.layout.form.FormContainer();
		_createContainerLayoutData(oThis, oContainer);
		if (oTitle) {
			oContainer.setTitle(oTitle);
		}
		return oContainer;

	};

	/*
	 * Applies the weight property for the fields in the responsive layout.
	 * @param {sap.ui.layout.form.FormElement} oElement The FormElement where the weight is applied.
	 * @private
	 */
	var _applyFieldWeight = function(oThis, oElement){

		var iMaxWeight = oThis._iMaxWeight;
		var aFields = oElement.getFields();
		var oField;
		var iLength = aFields.length;
		var oLabel = oElement.getLabel();
		var oLayoutData;

		if (oLabel && _getFieldLayoutData(oThis, oLabel)) {
			iMaxWeight = iMaxWeight - _getFieldLayoutData(oThis, oLabel).getWeight();
		}

		// determine weights set from application
		for (var i=0; i < aFields.length; i++) {
			oField = aFields[i];
			oLayoutData = _getFieldLayoutData(oThis, oField);
			if (oLayoutData instanceof sap.ui.layout.ResponsiveFlowLayoutData && !_isMyLayoutData(oThis, oLayoutData)) {
				iMaxWeight = iMaxWeight - oLayoutData.getWeight();
				iLength--;
			}
		}

		var iWeight = Math.floor(iMaxWeight/iLength);
		var iRest = iMaxWeight % iLength;

		for (var i=0; i < aFields.length; i++) {
			oField = aFields[i];
			oLayoutData = _getFieldLayoutData(oThis, oField);
			var iCurrentWeight = iWeight;

			if (!oLayoutData) {
				_createFieldLayoutData(oThis, oField, iCurrentWeight, false, i==0);
			} else if (_isMyLayoutData(oThis, oLayoutData) && oLayoutData instanceof sap.ui.layout.ResponsiveFlowLayoutData) {
				// devide rest to first fields (not only to last one) (fist because to ignore manual set weigths)
				if (iRest > 0) {
					iCurrentWeight++;
					iRest--;
				}
				oLayoutData.setWeight(iCurrentWeight);
			}
		}

	};

	var _updateVisibility = function(oThis, oElement){

		var aFields = oElement.getFields();
		var iLength = aFields.length;
		var bVisible = false;

		for (var i=0; i < aFields.length; i++) {
			var oField = aFields[i];
			if (!oField.getVisible || oField.getVisible()) {
				// at least one Field is visible
				bVisible = true;
				break;
			}
		}

		if (oElement.getVisible() != bVisible) {
			// set visibility of FormElement
			oElement.setVisible(bVisible);
		}

	};

	/*
	 * Applies the linebreaks of form containers according the minWidth and maxContainerCol settings of the SimpleForm
	 * @private
	 */
	sap.ui.layout.form.SimpleForm.prototype._applyLinebreaks = function(){

		var oForm = this.getAggregation("form"),
		aContainers = oForm.getFormContainers();
		// set line break on every container if Form is smaller than getMinWidth pixel
		// and reset it if it's larger
		var oDomRef = this.getDomRef();
		var o$ = this.$();
		for (var i=1; i<aContainers.length; i++){
			var oContainer = aContainers[i],
			oLayoutData = oContainer.getLayoutData();
			if (!oDomRef || o$.outerWidth(true) > this.getMinWidth()){
				// if not already rendered use default values according to column number
				if (i % this.getMaxContainerCols() == 0) {
					oLayoutData.setLinebreak(true);
				}else{
					oLayoutData.setLinebreak(false);
				}
			} else {
				oLayoutData.setLinebreak(true);
			}
		}
		if (oDomRef && o$.css("visibility") == "hidden"){
			var that = this;
			setTimeout(function() {
				if (that.getDomRef()) {
					that.$().css("visibility", "inherit");
				}
			},10);
		}

	};

	/*
	 * Applies size of the containers in GridLayout: if only one container is in the last line -> make it full size
	 * @private
	 */
	var _applyContainerSize = function(oThis){

		var oForm = oThis.getAggregation("form");
		var aContainers = oForm.getFormContainers();
		var iLength = aContainers.length;
		if (iLength % 2 > 0) {
			aContainers[iLength-1].getLayoutData().setHalfGrid(false);
		}
	};

	/*
	 * Handles the resize event
	 * @private
	 */
	sap.ui.layout.form.SimpleForm.prototype._resize = function(){
		if (this._iCurrentWidth == this.$().outerWidth()) return;
		this._iCurrentWidth = this.$().outerWidth();
		this._applyLinebreaks();
	};

	var _markFormElementForUpdate = function(aFormElements, oFormElement){

		var bFound = false;
		for ( var i = 0; i < aFormElements.length; i++) {
			var oChangedFormElement = aFormElements[i];
			if (oChangedFormElement == oFormElement) {
				bFound = true;
				break;
			}
		}
		if (!bFound) {
			aFormElements.push(oFormElement);
		}

	};

	var _handleContentChange = function(oEvent) {
		if (oEvent.getParameter("name") == "visible") {
			var oFormElement= oEvent.oSource.getParent();
			_updateVisibility(this, oFormElement);
		}
	};

}());