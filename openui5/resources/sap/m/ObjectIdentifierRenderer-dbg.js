/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.ObjectIdentifierRenderer");

/**
 * @class ObjectIdentifier renderer.
 * @static
 */
sap.m.ObjectIdentifierRenderer = {};

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            oRm the RenderManager that can be used for writing to the render
 *            output buffer
 * @param {sap.ui.core.Control}
 *            oOI an object representation of the control that should be
 *            rendered
 */
sap.m.ObjectIdentifierRenderer.render = function(oRm, oOI) {

	// write the HTML into the render manager
	oRm.write("<div"); // Identifier begins
	oRm.writeControlData(oOI);
	oRm.addClass("sapMObjectIdentifier");
	oRm.writeClasses();
	oRm.write(">");

	oRm.write("<div"); // Top row begins
	oRm.addClass("sapMObjectIdentifierTopRow");
	oRm.writeClasses();
	oRm.write(">");

	oRm.write("<div"); // Icons begin
	oRm.addClass("sapMObjectIdentifierIcons");
	oRm.writeClasses();
	oRm.write(">");

	if (oOI.getBadgeAttachments()) {
		oRm.write("<span"); // Icon span begins
		oRm.addClass("sapMObjectIdentifierIconSpan");
		oRm.writeClasses();
		oRm.write(">");
		oRm.renderControl(oOI._getAttachmentsIcon());
		oRm.write("</span>"); // Icon span ends
	}
	if (oOI.getBadgeNotes()) {
		oRm.write("<span"); // Icon span begins
		oRm.addClass("sapMObjectIdentifierIconSpan");
		oRm.writeClasses();
		oRm.write(">");
		oRm.renderControl(oOI._getNotesIcon());
		oRm.write("</span>"); // Icon span ends
	}
	if (oOI.getBadgePeople()) {
		oRm.write("<span"); // Icon span begins
		oRm.addClass("sapMObjectIdentifierIconSpan");
		oRm.writeClasses();
		oRm.write(">");
		oRm.renderControl(oOI._getPeopleIcon());
		oRm.write("</span>"); // Icon span ends
	}
	
	oRm.write("</div>"); // Icons end

	oRm.write("<div"); // Title begins
	oRm.addClass("sapMObjectIdentifierTitle");
	oRm.writeClasses();
	oRm.write(">");
	oRm.writeEscaped(oOI.getTitle());
	oRm.write("</div>"); // Title ends

	oRm.write("</div>"); // Top row ends

	oRm.write("<div"); // Text begins
	oRm.addClass("sapMObjectIdentifierText");
	oRm.writeClasses();
	oRm.write(">");
	oRm.writeEscaped(oOI.getText());
	oRm.write("</div>"); // Text ends

	oRm.write("</div>"); // Identifier ends
};
