/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.GroupHeaderListItemRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ListItemBaseRenderer");

/**
 * @class GroupHeaderListItem renderer.
 * @static
 */
sap.m.GroupHeaderListItemRenderer = sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);

/**
 * Renders the attributes for the given list item, using the provided
 * {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager}
 *          rm the RenderManager that can be used for writing to the
 *          Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *          oLI an object representation of the list item that should be
 *          rendered
 */
sap.m.GroupHeaderListItemRenderer.renderLIAttributes = function(rm, oLI) {
	rm.addClass("sapMGHLI");
	if (oLI.getUpperCase()) {
		rm.addClass("sapMGHLIUpperCase");
	}
};


/**
 * Renders the List item content
 *
 * @param {sap.ui.core.RenderManager}
 *          rm the RenderManager that can be used for writing to the
 *          Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *          oLI an object representation of the list item that should be
 *          rendered
 * @param {sap.m.Table} [oTable]
 *          If this control is inside the table then this param can be used for col spanning
 */
sap.m.GroupHeaderListItemRenderer.renderLIContent = function(rm, oLI, oTable) {
	var sTitle = oLI.getTitle();
	oTable && rm.write("<td class='sapMGHLICell' colspan='" + (oTable.getColSpan()) + "'>");

	// List item label
	if (sTitle) {
		oTable && rm.write("<div class='sapMLIBContent sapMLIBContentMargin'>");
		rm.write("<label for='" + oLI.getId() + "-value' class='sapMGHLITitle'>");
		rm.writeEscaped(sTitle);

		var iCount = oLI.getCount();
		if (iCount !== undefined && iCount !== "") {
			rm.writeEscaped(" (" + iCount + ")");
		}

		rm.write("</label>");
		oTable && rm.write("</div>");
	}

	oTable && rm.write("</td>");
};
