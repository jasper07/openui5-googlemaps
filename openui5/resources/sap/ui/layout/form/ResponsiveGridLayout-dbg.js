/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.layout.form.ResponsiveGridLayout.
jQuery.sap.declare("sap.ui.layout.form.ResponsiveGridLayout");
jQuery.sap.require("sap.ui.layout.library");
jQuery.sap.require("sap.ui.layout.form.FormLayout");


/**
 * Constructor for a new form/ResponsiveGridLayout.
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
 * In addition, all settings applicable to the base type {@link sap.ui.layout.form.FormLayout#constructor sap.ui.layout.form.FormLayout}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Renders a form using a Grid. Internally the Grid is used.
 * On the FormContainers, Labels and Fields GridData can be used to cahnge the default rendering. On FormElements GridDada are not supported.
 * If own GridData are used this may be much more complex than the default. So in some cases the calculation for the other content may nor bring the expected result. In this case GridData should be used at all content to disable the default behaviour.
 * @extends sap.ui.layout.form.FormLayout
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @since 1.16.0
 * @name sap.ui.layout.form.ResponsiveGridLayout
 */
sap.ui.layout.form.FormLayout.extend("sap.ui.layout.form.ResponsiveGridLayout", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.layout",
	properties : {
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
	}
}});


/**
 * Creates a new subclass of class sap.ui.layout.form.ResponsiveGridLayout with name <code>sClassName</code> 
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
 * @name sap.ui.layout.form.ResponsiveGridLayout.extend
 * @function
 */


/**
 * Getter for property <code>labelSpanL</code>.
 * Default span for labels in large size.
 * This span is only used if more than 1 container is in one line, if only 1 container is in the line the labelSpanM value is used.
 *
 * Default value is <code>4</code>
 *
 * @return {int} the value of property <code>labelSpanL</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#getLabelSpanL
 * @function
 */

/**
 * Setter for property <code>labelSpanL</code>.
 *
 * Default value is <code>4</code> 
 *
 * @param {int} iLabelSpanL  new value for property <code>labelSpanL</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#setLabelSpanL
 * @function
 */


/**
 * Getter for property <code>labelSpanM</code>.
 * Default span for labels in medium size.
 * This property is used for full size containers. if more than one Container is in one line, labelSpanL is used.
 *
 * Default value is <code>2</code>
 *
 * @return {int} the value of property <code>labelSpanM</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#getLabelSpanM
 * @function
 */

/**
 * Setter for property <code>labelSpanM</code>.
 *
 * Default value is <code>2</code> 
 *
 * @param {int} iLabelSpanM  new value for property <code>labelSpanM</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#setLabelSpanM
 * @function
 */


/**
 * Getter for property <code>labelSpanS</code>.
 * Default span for labels in small size.
 *
 * Default value is <code>12</code>
 *
 * @return {int} the value of property <code>labelSpanS</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#getLabelSpanS
 * @function
 */

/**
 * Setter for property <code>labelSpanS</code>.
 *
 * Default value is <code>12</code> 
 *
 * @param {int} iLabelSpanS  new value for property <code>labelSpanS</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#setLabelSpanS
 * @function
 */


/**
 * Getter for property <code>emptySpanL</code>.
 * Number of grid cells that are empty at the end of each line on large size.
 * 
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>emptySpanL</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#getEmptySpanL
 * @function
 */

/**
 * Setter for property <code>emptySpanL</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iEmptySpanL  new value for property <code>emptySpanL</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#setEmptySpanL
 * @function
 */


/**
 * Getter for property <code>emptySpanM</code>.
 * Number of grid cells that are empty at the end of each line on medium size.
 * 
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>emptySpanM</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#getEmptySpanM
 * @function
 */

/**
 * Setter for property <code>emptySpanM</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iEmptySpanM  new value for property <code>emptySpanM</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#setEmptySpanM
 * @function
 */


/**
 * Getter for property <code>emptySpanS</code>.
 * Number of grid cells that are empty at the end of each line on small size.
 * 
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>emptySpanS</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#getEmptySpanS
 * @function
 */

/**
 * Setter for property <code>emptySpanS</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iEmptySpanS  new value for property <code>emptySpanS</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#setEmptySpanS
 * @function
 */


/**
 * Getter for property <code>columnsL</code>.
 * Form columns for large size.
 * The number of columns for large size must not be smaller that the number of columns for medium size
 *
 * Default value is <code>2</code>
 *
 * @return {int} the value of property <code>columnsL</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#getColumnsL
 * @function
 */

/**
 * Setter for property <code>columnsL</code>.
 *
 * Default value is <code>2</code> 
 *
 * @param {int} iColumnsL  new value for property <code>columnsL</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#setColumnsL
 * @function
 */


/**
 * Getter for property <code>columnsM</code>.
 * Form columns for medium size.
 *
 * Default value is <code>1</code>
 *
 * @return {int} the value of property <code>columnsM</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#getColumnsM
 * @function
 */

/**
 * Setter for property <code>columnsM</code>.
 *
 * Default value is <code>1</code> 
 *
 * @param {int} iColumnsM  new value for property <code>columnsM</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#setColumnsM
 * @function
 */


/**
 * Getter for property <code>breakpointL</code>.
 * Breakpoint between Medium size and Large size.
 *
 * Default value is <code>1024</code>
 *
 * @return {int} the value of property <code>breakpointL</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#getBreakpointL
 * @function
 */

/**
 * Setter for property <code>breakpointL</code>.
 *
 * Default value is <code>1024</code> 
 *
 * @param {int} iBreakpointL  new value for property <code>breakpointL</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#setBreakpointL
 * @function
 */


/**
 * Getter for property <code>breakpointM</code>.
 * Breakpoint between Small size and Medium size.
 *
 * Default value is <code>600</code>
 *
 * @return {int} the value of property <code>breakpointM</code>
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#getBreakpointM
 * @function
 */

/**
 * Setter for property <code>breakpointM</code>.
 *
 * Default value is <code>600</code> 
 *
 * @param {int} iBreakpointM  new value for property <code>breakpointM</code>
 * @return {sap.ui.layout.form.ResponsiveGridLayout} <code>this</code> to allow method chaining
 * @public
 * @since 1.16.3
 * @name sap.ui.layout.form.ResponsiveGridLayout#setBreakpointM
 * @function
 */


// Start of sap\ui\layout\form\ResponsiveGridLayout.js
///**
// * This file defines behavior for the control, 
// */

jQuery.sap.require("sap.ui.layout.Grid");
jQuery.sap.require("sap.ui.layout.GridData");

/*
 * The ResponsiveGridLayout uses Grid controls to render the Form
 * If more than one FormContainer is used there is an outer Grid (mainGrid) that holds the FormContainers
 * Each FormContainer holds it's own Grid where the FormElements content is placed.
 * If a FormContainer has a Title or is expandable it is rendered as a ResponsiveGridLayoutPanel.
 * The panels and GridLayouts are stored in this.mContainers. This has the following structure:
 * - For each FormContainer there is an entry inside the object. (this.mContainers[FormContainerId])
 * - For each FormContainer there is an array with 2 entries:
 *   - [0]: The Panel that renders the Container (undefined if no panel is used)
 *   - [1]: The Grid that holds the Containers content
 *          - the getLayoutData function of this Grid is overwritten to get the LayoutData of the FormContainer
 *            (If no panel is used)
 *
 * It must be made sure to hold this object up to date. So it is filled onBeforeRendering. Entries no longer used are deleted
 *
*/

sap.ui.core.Control.extend("sap.ui.layout.form.ResponsiveGridLayoutPanel", {

	metadata : {
		aggregations: {
			"content"   : {type: "sap.ui.layout.Grid", multiple: false}
		},
		associations: {
			"container" : {type: "sap.ui.layout.form.FormContainer", multiple: false},
			"layout"    : {type: "sap.ui.layout.form.ResponsiveLayout", multiple: false}
		}
	},

	getLayoutData :  function(){

		// only ResponsiveFlowLayoutData are interesting
		var oContainer = sap.ui.getCore().byId(this.getContainer());
		var oLayout    = sap.ui.getCore().byId(this.getLayout());
		var oLD;
		if (oLayout && oContainer) {
			oLD = oLayout.getLayoutDataForElement(oContainer, "sap.ui.layout.GridData");
		}
		if (oLD) {
			return oLD;
		}else {
			return this.getAggregation("layoutData");
		}

	},

	getCustomData :  function(){

		var oContainer = sap.ui.getCore().byId(this.getContainer());
		if (oContainer) {
			return oContainer.getCustomData();
		}

	},

	refreshExpanded :  function(){

		var oContainer = sap.ui.getCore().byId(this.getContainer());
		if (oContainer) {
			if (oContainer.getExpanded()) {
				this.$().removeClass("sapUiRGLContainerColl");
			}else {
				this.$().addClass("sapUiRGLContainerColl");
			}
		}
	},

	renderer : function(oRm, oPanel) {

		var oContainer = sap.ui.getCore().byId(oPanel.getContainer());
		var oLayout    = sap.ui.getCore().byId(oPanel.getLayout());
		var oContent   = oPanel.getContent();

		var bExpandable = oContainer.getExpandable();
		var sTooltip = oContainer.getTooltip_AsString();

		oRm.write("<div");
		oRm.writeControlData(oPanel);
		oRm.addClass("sapUiRGLContainer");
		if (bExpandable && !oContainer.getExpanded()) {
			oRm.addClass("sapUiRGLContainerColl");
		}

		if (sTooltip) {
			oRm.writeAttributeEscaped('title', sTooltip);
		}
		oRm.writeClasses();
		oRm.write(">");

		// container header
		if (oContainer.getTitle()) {
			oLayout.getRenderer().renderTitle(oRm, oContainer.getTitle(), oContainer._oExpandButton, bExpandable, false, oContainer.getId());
		}

		if (oContent) {
			oRm.write("<div");
			oRm.addClass("sapUiRGLContainerCont");
			oRm.writeClasses();
			oRm.write(">");
			// container is not expandable or is expanded -> render elements
			oRm.renderControl(oContent);
			oRm.write("</div>");
		}

		oRm.write("</div>");
	}

});

(function() {

	sap.ui.layout.form.ResponsiveGridLayout.prototype.init = function(){

		this.mContainers = {}; //association of container to panel and Grid
		this.oDummyLayoutData = new sap.ui.layout.GridData(this.getId()+"--Dummy");
		this.SPANPATTERN = /^([L](?:[1-9]|1[0-2]))? ?([M](?:[1-9]|1[0-2]))? ?([S](?:[1-9]|1[0-2]))?$/i;

	};

	sap.ui.layout.form.ResponsiveGridLayout.prototype.exit = function(){

		var that = this;

		// clear panels
		for ( var sContainerId in this.mContainers) {
			_cleanContainer(that, sContainerId);
		}

		// clear main Grid
		if (this._mainGrid) {
			this._mainGrid.destroy();
			delete this._mainGrid;
		}

		this.oDummyLayoutData.destroy();
		this.oDummyLayoutData = undefined;

	};

	sap.ui.layout.form.ResponsiveGridLayout.prototype.onBeforeRendering = function( oEvent ){

		var oForm = this.getParent();
		if (!oForm || !(oForm instanceof sap.ui.layout.form.Form)) {
			// layout not assigned to form - nothing to do
			return;
		}

		var that = this;
		_createPanels(that, oForm);
		_createMainGrid(that, oForm);

	};

	sap.ui.layout.form.ResponsiveGridLayout.prototype.onAfterRendering = function( oEvent ){

		// special case: Form has desktop size but Containers have Tablet size: label sizes must be 4 instead of 2
		if (this._mainGrid) {
			var sMedia;
			if (this._mainGrid.$().hasClass("sapUiRespGridMedia-Std-Desktop")) {
				sMedia = "Desktop";
			}else if (this._mainGrid.$().hasClass("sapUiRespGridMedia-Std-Tablet")) {
				sMedia = "Tablet";
			}else if (this._mainGrid.$().hasClass("sapUiRespGridMedia-Std-Phone")) {
				sMedia = "Phone";
			}
		}

	};

	/*
	 * If onAfterRendering of a field is processed the width must be set to 100% (if no other width set)
	 */
	sap.ui.layout.form.ResponsiveGridLayout.prototype.contentOnAfterRendering = function(oFormElement, oControl){

		sap.ui.layout.form.FormLayout.prototype.contentOnAfterRendering.apply(this, arguments);

		if (oControl.getWidth && ( !oControl.getWidth() || oControl.getWidth() == "auto" ) && oControl.getMetadata().getName() != "sap.ui.commons.Image") {
			oControl.$().css("width", "100%");
		}

	};

	sap.ui.layout.form.ResponsiveGridLayout.prototype.toggleContainerExpanded = function(oContainer){

		//adapt the corresponding panel
		var bExpanded = oContainer.getExpanded();
		var sContainerId = oContainer.getId();
		if (this.mContainers[sContainerId] && this.mContainers[sContainerId][0]) {
			var oPanel = this.mContainers[sContainerId][0];
			oPanel.refreshExpanded();
		}

	};

	sap.ui.layout.form.ResponsiveGridLayout.prototype.onLayoutDataChange = function(oEvent){

		var oSource = oEvent.srcControl;

		// if layoutData changed for a Container, Element, or Field call the
		// onLayoutDataChange function of the parent ResponsiveFlowLayout

		if (oSource instanceof sap.ui.layout.form.FormContainer) {
			if (this._mainGrid) {
				this._mainRFGrid.onLayoutDataChange(oEvent);
			}
		}else if (oSource instanceof sap.ui.layout.form.FormElement) {
			// LayoutData on FormElement not supported in ResponsiveGridLayout
		}else{
			var oParent = oSource.getParent();
			if (oParent instanceof sap.ui.layout.form.FormElement) {
				var oContainer = oParent.getParent();
				var sContainerId = oContainer.getId();
				var sElementId = oParent.getId();
				if (this.mContainers[sContainerId] && this.mContainers[sContainerId][1]) {
					this.mContainers[sContainerId][1].onLayoutDataChange(oEvent);
				}
			}
		}

	};

	sap.ui.layout.form.ResponsiveGridLayout.prototype.onsapup = function(oEvent){
		this.onsapleft(oEvent);
	};

	sap.ui.layout.form.ResponsiveGridLayout.prototype.onsapdown = function(oEvent){
		this.onsapright(oEvent);
	};

	var _createPanels = function( oLayout, oForm ) {

		var aContainers = oForm.getFormContainers();
		var iLength = aContainers.length;
		var iVisibleContainers = 0;
		for ( var i = 0; i < iLength; i++) {
			var oContainer = aContainers[i];
			if (oContainer.getVisible()) {
				iVisibleContainers++;
				var sContainerId = oContainer.getId();
				var oPanel = undefined;
				var oGrid = undefined;
				var oContainerNext = aContainers[i+1];
				if (oLayout.mContainers[sContainerId] && oLayout.mContainers[sContainerId][1]) {
					// Grid already created
					oGrid = oLayout.mContainers[sContainerId][1];
				}else{
					oGrid = _createGrid(oLayout, oContainer);
				}

				var oTitle = oContainer.getTitle();
				if (oTitle || oContainer.getExpandable()) {
					// only if container has a title a panel is used
					if (oLayout.mContainers[sContainerId] && oLayout.mContainers[sContainerId][0]) {
						// Panel already created
						oPanel = oLayout.mContainers[sContainerId][0];
					}else{
						oPanel = _createPanel(oLayout, oContainer, oGrid);
						_changeGetLayoutDataOfGrid(oGrid, true);
					}
					_setLayoutDataForLinebreak(oPanel, oContainer, iVisibleContainers, oContainerNext);
				}else{
					if (oLayout.mContainers[sContainerId] && oLayout.mContainers[sContainerId][0]) {
						// panel not longer needed
						_deletePanel(oLayout.mContainers[sContainerId][0]);
					}
					_changeGetLayoutDataOfGrid(oGrid, false);
					_setLayoutDataForLinebreak(oGrid, oContainer, iVisibleContainers, oContainerNext);
				}

				oLayout.mContainers[sContainerId] = [oPanel, oGrid];
			}
		}

		var iObjectLength = _objectLength(oLayout.mContainers);
		if (iVisibleContainers < iObjectLength) {
			// delete old containers panels
			for ( var sContainerId in oLayout.mContainers) {
				var bFound = false;
				for ( var i = 0; i < iLength; i++) {
					var oContainer = aContainers[i];
					if (sContainerId == oContainer.getId() && oContainer.getVisible()) {
						bFound = true;
						break;
					}
				}
				if (!bFound) {
					_cleanContainer(oLayout, sContainerId);
				}
			}
		}

	};

	var _createPanel = function( oLayout, oContainer, oGrid ) {

		var sContainerId = oContainer.getId();
		var oPanel = new sap.ui.layout.form.ResponsiveGridLayoutPanel(sContainerId+"---Panel", {
			container: oContainer,
			layout   : oLayout,
			content : oGrid
		});

		return oPanel;

	};

	/*
	 * clear variables before delete it
	 */
	var _deletePanel = function( oPanel ) {

		oPanel.setContent("");
		oPanel.setLayout("");
		oPanel.setContainer("");
		oPanel.destroy();
		delete oPanel;

	};

	var _createGrid = function( oLayout, oContainer ) {

		var sId = oContainer.getId()+"--Grid";

		var oGrid = new sap.ui.layout.Grid(sId, {vSpacing: 0, hSpacing: 0, containerQuery: true});
		oGrid.__myParentLayout = oLayout;
		oGrid.__myParentContainerId = oContainer.getId();
		oGrid.addStyleClass("sapUiFormResGridCont");

		oGrid.getContent = function(){
			var oContainer = sap.ui.getCore().byId(this.__myParentContainerId);
			if (oContainer) {
				var aContent = new Array;
				var aElements = oContainer.getFormElements();
				var aFields;
				var oLabel;
				for ( var i = 0; i < aElements.length; i++) {
					var oElement = aElements[i];
					if (oElement.getVisible()) {
						oLabel = oElement.getLabelControl();
						if (oLabel) {
							aContent.push(oLabel);
						}
						aFields = oElement.getFields();
						for ( var j = 0; j < aFields.length; j++) {
							aContent.push(aFields[j]);
						}
					}
				}
				return aContent;
			}else{
				return false;
			}
		}

		oGrid._getLayoutDataForControl = function(oControl) {
			var oLayout = this.__myParentLayout;
			var oLD = oLayout.getLayoutDataForElement(oControl, "sap.ui.layout.GridData");

			var oElement = oControl.getParent();
			var oLabel = oElement.getLabelControl();
			if (oLD) {
				if (oLabel == oControl) {
					oLD._setStylesInternal("sapUiFormResGridLbl");
				}
				return oLD;
			}else {
				// calculate Layout Data for control
				var oContainer = sap.ui.getCore().byId(this.__myParentContainerId);
				var oContainerLD = oLayout.getLayoutDataForElement(oContainer, "sap.ui.layout.GridData");
				var oForm = oContainer.getParent();
				// for overall grid, label has default Span of 2, but in L 2 Containers are in one line, so 2 Grids are in one line
				var iLabelLSpan = oLayout.getLabelSpanL();
				var iLabelMSpan = oLayout.getLabelSpanM();
				var iLabelSSpan = oLayout.getLabelSpanS();

				if (oForm.getFormContainers().length >= 1 && oLayout.getColumnsM() > 1) {
					// More than one Container in line
					iLabelMSpan = oLayout.getLabelSpanL();
				}
				if (oContainerLD) {
					if (oContainerLD._getEffectiveSpanLarge() == 12) {
						// If Container has the Full width in large Screen, use 2 as Label Span to be in line
						iLabelLSpan = oLayout.getLabelSpanM();
						iLabelMSpan = oLayout.getLabelSpanM();
					}
				}
				if (oForm.getFormContainers().length == 1 || oLayout.getColumnsL() == 1) {
					// only one container -> it's full size
					iLabelLSpan = oLayout.getLabelSpanM();
					iLabelMSpan = oLayout.getLabelSpanM();
				}
				if (oLabel == oControl) {
					oLayout.oDummyLayoutData.setSpan("L"+ iLabelLSpan +" M"+ iLabelMSpan +" S"+ iLabelSSpan);
					oLayout.oDummyLayoutData.setLinebreak(true);
					oLayout.oDummyLayoutData._setStylesInternal("sapUiFormResGridLbl");
					return oLayout.oDummyLayoutData;
				} else {
					var iLSpan = 12 - oLayout.getEmptySpanL();
					var iMSpan = 12 - oLayout.getEmptySpanM();
					var iSSpan = 12 - oLayout.getEmptySpanS();
					var iEffectiveSpan;
					if (oLabel) {
						var oLabelLD = oLayout.getLayoutDataForElement(oLabel, "sap.ui.layout.GridData");
						if (oLabelLD) {
							iEffectiveSpan = oLabelLD._getEffectiveSpanLarge();
							if (iEffectiveSpan) {
								iLabelLSpan = iEffectiveSpan;
							}
							iEffectiveSpan = oLabelLD._getEffectiveSpanMedium();
							if (iEffectiveSpan) {
								iLabelMSpan = iEffectiveSpan;
							}
							iEffectiveSpan = oLabelLD._getEffectiveSpanSmall();
							if (iEffectiveSpan) {
								iLabelSSpan = iEffectiveSpan;
							}
						}
						if (iLabelLSpan < 12) {
							iLSpan = iLSpan - iLabelLSpan;
						}
						if (iLabelMSpan < 12) {
							iMSpan = iMSpan - iLabelMSpan;
						}
						if (iLabelSSpan < 12) {
							iSSpan = iSSpan - iLabelSSpan;
						}
					}

					var aFields = oElement.getFields();
					var iLength = aFields.length;
					var iDefaultFields = 1; // because current field has no LayoutData
					var bFirstField = false;
					for ( var i = 0; i < iLength; i++) {
						var oField = aFields[i];
						if (oField != oControl) {
							// check if other fields have layoutData
							var oFieldLD = oLayout.getLayoutDataForElement(oField, "sap.ui.layout.GridData");
							if (oFieldLD) {
								iEffectiveSpan = oFieldLD._getEffectiveSpanLarge();
								if (iEffectiveSpan) {
									iLSpan = iLSpan - iEffectiveSpan;
								}
								iEffectiveSpan = oFieldLD._getEffectiveSpanMedium();
								if (iEffectiveSpan) {
									iMSpan = iMSpan - iEffectiveSpan;
								}
								iEffectiveSpan = oFieldLD._getEffectiveSpanSmall();
								if (iEffectiveSpan) {
									iSSpan = iSSpan - iEffectiveSpan;
								}
							}else {
								iDefaultFields++;
							}
						}else{
							if (iDefaultFields == 1) {
								bFirstField = true;
							}
						}
					}
					var iMyLSpan, iMyMSpan, iMySSpan = 12;
					if (bFirstField) {
						var iRest = iLSpan - Math.floor(iLSpan / iDefaultFields) * iDefaultFields;
						iMyLSpan = Math.floor(iLSpan / iDefaultFields) + iRest;
						iRest = iMSpan - Math.floor(iMSpan / iDefaultFields) * iDefaultFields;
						iMyMSpan = Math.floor(iMSpan / iDefaultFields) + iRest;
						if (iLabelSSpan < 12) {
							// label is defined to not be full size -> make fields left of it
							iRest = iSSpan - Math.floor(iSSpan / iDefaultFields) * iDefaultFields;
							iMySSpan = Math.floor(iSSpan / iDefaultFields) + iRest;
						}
					} else {
						iMyLSpan = Math.floor(iLSpan / iDefaultFields);
						iMyMSpan = Math.floor(iMSpan / iDefaultFields);
						if (iLabelSSpan < 12) {
							// label is defined to not be full size -> make fields left of it
							iMySSpan = Math.floor(iSSpan / iDefaultFields);
						}
					}

					oLayout.oDummyLayoutData.setSpan("L"+iMyLSpan+" M"+iMyMSpan+" S"+iMySSpan);
					oLayout.oDummyLayoutData.setLinebreak(bFirstField && !oLabel);
					oLayout.oDummyLayoutData._setStylesInternal(undefined);
					return oLayout.oDummyLayoutData;
				}

				return oLD;
			}
		}

		// change resize handler so that the container Grids always get the same Media size like the main grid
		oGrid._onParentResizeOrg = oGrid._onParentResize;
		oGrid._onParentResize = function() {

			// Prove if Dom reference exist, and if not - clean up the references.
			if (!this.getDomRef()) {
				this._cleanup();
				return;
			}

			if (!jQuery(this.getDomRef()).is(":visible")) {
				return;
			}

			var oLayout = this.__myParentLayout;
			if (!oLayout._mainGrid || !oLayout._mainGrid.__bIsUsed ) {
				// no main grid used -> only 1 container
				var aContainers = oLayout.getParent().getFormContainers();
				if (!oLayout.mContainers[aContainers[0].getId()] || aContainers[0].getId() != this.__myParentContainerId) {
					// Form seems to be invalidated (container changed) but rerendering still not done
					// -> ignore resize, it will be rerendered soon
					return;
				}
				if(oLayout.mContainers[this.__myParentContainerId][0]){
					// panel used -> get size from panel
					var oDomRef = oLayout.mContainers[this.__myParentContainerId][0].getDomRef();

					var iCntWidth = oDomRef.clientWidth;
					if (iCntWidth <= oLayout.getBreakpointM()) {
						this._toggleClass("Phone");
					} else if ((iCntWidth > oLayout.getBreakpointM()) && (iCntWidth <= oLayout.getBreakpointL())) {
						this._toggleClass("Tablet");
					} else {
						this._toggleClass("Desktop");
					}
				}else {
					this._setBreakPointTablet(oLayout.getBreakpointM());
					this._setBreakPointDesktop(oLayout.getBreakpointL());
					this._onParentResizeOrg();
				}
			} else {
				var $DomRefMain = oLayout._mainGrid.$();

				if ($DomRefMain.hasClass("sapUiRespGridMedia-Std-Phone")) {
					this._toggleClass("Phone");
				} else if ($DomRefMain.hasClass("sapUiRespGridMedia-Std-Tablet")) {
					this._toggleClass("Tablet");
				} else {
					this._toggleClass("Desktop");
				}
			}
		}

		return oGrid;

	};

	/*
	 * clear variables before delete it
	 */
	var _deleteGrid = function( oGrid ) {

		if (oGrid.__myParentContainerId) {
			oGrid.__myParentContainerId = undefined;
		}
		oGrid.__myParentLayout = undefined;

		oGrid.destroy();
		delete oGrid;

	};

	var _changeGetLayoutDataOfGrid = function( oGrid, bOriginal ) {
		// only GridData are from interest

		if (bOriginal) {
			if (oGrid.__originalGetLayoutData) {
				oGrid.getLayoutData = oGrid.__originalGetLayoutData;
				delete oGrid.__originalGetLayoutData;
			}
		}else if(!oGrid.__originalGetLayoutData){
			oGrid.__originalGetLayoutData = oGrid.getLayoutData;
			oGrid.getLayoutData = function(){
				var oLayout = this.__myParentLayout;
				var oContainer = sap.ui.getCore().byId(this.__myParentContainerId);

				var oLD;
				if (oContainer) {
					oLD = oLayout.getLayoutDataForElement(oContainer, "sap.ui.layout.GridData");
				}

				if (oLD) {
					return oLD;
				}else {
					return this.getAggregation("layoutData");
				}
			};
		}

	};

	// every second container gets a Linebreak for large screens
	// oControl could be a Panel or a Grid( if no panel used)
	var _setLayoutDataForLinebreak = function( oControl, oContainer, iVisibleContainers, oContainerNext ) {

		var oLayout;
		if (oControl instanceof sap.ui.layout.form.ResponsiveGridLayoutPanel) {
			oLayout = sap.ui.getCore().byId(oControl.getLayout());
		} else {
			oLayout = oControl.__myParentLayout;
		}

		var iColumnsL = oLayout.getColumnsL();
		var iColumnsM = oLayout.getColumnsM();
		var oLD = oLayout.getLayoutDataForElement(oContainer, "sap.ui.layout.GridData");
		if (!oLD) {
			// only needed if container has no own LayoutData
			var bLinebreakL = (iVisibleContainers % iColumnsL) == 1;
			var bLastL = (iVisibleContainers % iColumnsL) == 0;
			var bLinebreakM = (iVisibleContainers % iColumnsM) == 1;
			var bLastM = (iVisibleContainers % iColumnsM) == 0;

			if (oContainerNext) {
				var oLDNext = oLayout.getLayoutDataForElement(oContainerNext, "sap.ui.layout.GridData");
				if (oLDNext && ( oLDNext.getLinebreak() || oLDNext.getLinebreakL() )) {
					bLastL = true;
				}
				if (oLDNext && ( oLDNext.getLinebreak() || oLDNext.getLinebreakM() )) {
					bLastM = true;
				}
			}

			var bStyle = "";
			if (bLastL) {
				bStyle = "sapUiFormResGridLastContL";
			}
			if (bLastM) {
				if (bStyle) {
					bStyle = bStyle + " ";
				}
				bStyle = bStyle + "sapUiFormResGridLastContM";
			}

			oLD = oControl.getLayoutData();
			if (!oLD) {
				oLD = new sap.ui.layout.GridData(oControl.getId()+"--LD", { linebreakL: bLinebreakL, linebreakM: bLinebreakM });
				oControl.setLayoutData( oLD );
			} else {
				oLD.setLinebreakL(bLinebreakL);
				oLD.setLinebreakM(bLinebreakM);
			}
			oLD._setStylesInternal(bStyle);
		}

	};

	var _cleanContainer = function( oLayout, sContainerId ) {

		var aContainerContent = oLayout.mContainers[sContainerId];

		//delete Grid
		var oGrid = aContainerContent[1];
		if (oGrid) {
			_deleteGrid(oGrid);
		}

		//delete panel
		var oPanel = aContainerContent[0];
		if (oPanel) {
			_deletePanel(oPanel);
		}

		delete oLayout.mContainers[sContainerId];

	};

	var _createMainGrid = function( oLayout, oForm ) {

		var aContainers = oForm.getFormContainers();
		var iLength = 0;
		var iContentLenght = 0;

		// count only visible containers
		for ( var i = 0; i < aContainers.length; i++) {
			var oContainer = aContainers[i];
			if (oContainer.getVisible()) {
				iLength++;
			}
		}

		// special case: only one container -> do not render an outer ResponsiveFlowLayout
		if (iLength > 1) {
			var iSpanL = Math.floor(12 / oLayout.getColumnsL());
			var iSpanM = Math.floor(12 / oLayout.getColumnsM());
			if (!oLayout._mainGrid) {
				oLayout._mainGrid = new sap.ui.layout.Grid(oForm.getId()+"--Grid",{
					defaultSpan: "L"+iSpanL+" M"+iSpanM+" S12",
					hSpacing: 0,
					vSpacing: 0,
					containerQuery: true
					}).setParent(oLayout);
				oLayout._mainGrid.addStyleClass("sapUiFormResGridMain");
			}else{
				oLayout._mainGrid.setDefaultSpan("L"+iSpanL+" M"+iSpanM+" S12");
				// update containers
				var aLayoutContent = oLayout._mainGrid.getContent();
				iContentLenght = aLayoutContent.length;
				var bExchangeContent = false;
				// check if content has changed
				for ( var i = 0; i < iContentLenght; i++) {
					var oContentElement = aLayoutContent[i];
					var oContainer = undefined;
					if (oContentElement.getContainer) {
						// it's a panel
						oContainer = sap.ui.getCore().byId(oContentElement.getContainer());
					} else {
						// it's a Grid
						oContainer = sap.ui.getCore().byId(oContentElement.__myParentContainerId);
					}
					if (oContainer && oContainer.getVisible()) {
						var aContainerContent = oLayout.mContainers[oContainer.getId()];
						if (aContainerContent[0] && aContainerContent[0] != oContentElement) {
							// container uses panel but panel not the same element in content
							bExchangeContent = true;
							break;
						}
						if (!aContainerContent[0] && aContainerContent[1] && aContainerContent[1] != oContentElement) {
							// container uses no panel but Grid not the same element in content
							bExchangeContent = true;
							break;
						}
					}else{
						// no container exits for content -> just remove this content
						oLayout._mainGrid.removeContent(oContentElement);
					}
				}
				if (bExchangeContent) {
					// remove all content and add it new.
					oLayout._mainGrid.removeAllContent();
					iContentLenght = 0;
				}
			}
			oLayout._mainGrid._setBreakPointTablet(oLayout.getBreakpointM());
			oLayout._mainGrid._setBreakPointDesktop(oLayout.getBreakpointL());
			oLayout._mainGrid.__bIsUsed = true;

			if (iContentLenght < iLength) {
				// new containers added
				for ( var i = 0; i < aContainers.length; i++) {
					var oContainer = aContainers[i];
					if (oContainer.getVisible()) {
						var sContainerId = oContainer.getId();
						if (oLayout.mContainers[sContainerId]) {
							if (oLayout.mContainers[sContainerId][0]) {
								// panel used
								oLayout._mainGrid.addContent(oLayout.mContainers[sContainerId][0]);
							} else if (oLayout.mContainers[sContainerId][1]){
								// no panel - used Grid directly
								oLayout._mainGrid.addContent(oLayout.mContainers[sContainerId][1]);
							}
						}
					}
				}
			}
		}else if( oLayout._mainGrid ) {
			oLayout._mainGrid.__bIsUsed = false;
		}

	};

	var _objectLength = function(oObject){

		var iLength = 0;

		if (!Object.keys) {
			jQuery.each(oObject, function(){iLength++});
		} else {
			iLength = Object.keys(oObject).length;
		}

		return iLength;

	}


}());
