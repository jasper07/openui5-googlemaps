/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// A renderer for the ScrollBar control
sap.ui.define(['jquery.sap.global'],
	function(jQuery) {
	"use strict";


	/**
	 * @class Control renderer.
	 * @static
	 * @name sap.ui.core.tmpl.TemplateControlRenderer
	 */
	var TemplateControlRenderer = {};
	
	/**
	 * Renders the Template for the given control, using the provided
	 * {@link sap.ui.core.RenderManager}.
	 * 
	 * @param {sap.ui.core.RenderManager}
	 *            oRM RenderManager that can be used for writing to the
	 *            Render-Output-Buffer
	 * @param {sap.ui.core.tmpl.TemplateControl}
	 *            oControl Object representation of the template control 
	 *            that should be rendered
	 * @name sap.ui.core.tmpl.TemplateControlRenderer.render
	 * @function
	 */
	TemplateControlRenderer.render = function(oRM, oControl) {
		
		// render the control
		/*
		var rHTML = /([^<]*)<(\w+)([^>]*)>/i.exec(sHTML);
		if (rHTML) {
			// append the control data
			// TODO: addStyleClass and attributes support!
			oRM.write(rHTML[1]);
			oRM.write("<");
			oRM.write(rHTML[2]);
			oRM.writeControlData(oControl);
			oRM.write(rHTML[3]);
			oRM.write(">");
			oRM.write(sHTML.substring(rHTML[0].length));
		} else {
			// TODO: is this really valid or should we put a root tag around
			// to write the control data!
			oRM.write(sHTML);
		}
		*/
	
		// check the control being inlined
		var bInline = oControl.isInline();
		
		// we need to make sure to have a common root tag (therefore we add a DIV)
		// if we have no common root tag, the re-rendering would not clean up
		// the old markup properly.
		//   -> the approach above enhance the root tag from the template
		if (!bInline) {
			oRM.write("<div");
			oRM.writeControlData(oControl);
			oRM.writeStyles();
			oRM.writeClasses();
			oRM.write(">");
		}
		
		// in case of declaring a control the renderTemplate function is part of the
		// specific renderer implementation - in case of anonymous template controls
		// the renderer is defined at the control instance
		var fnRenderer = this.renderTemplate || oControl.getTemplateRenderer();
		if (fnRenderer) {
			fnRenderer.apply(this, arguments);
		}
		
		if (!bInline) {
			oRM.write("</div>");
		}
		
	};
	

	return TemplateControlRenderer;

}, /* bExport= */ true);
