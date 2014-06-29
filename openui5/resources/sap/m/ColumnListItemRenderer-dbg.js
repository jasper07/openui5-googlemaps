/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.ColumnListItemRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ListRenderer");
jQuery.sap.require("sap.m.ListItemBaseRenderer");

/**
 * @class ColumnListItem renderer.
 * @static
 */
sap.m.ColumnListItemRenderer = sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.m.ColumnListItemRenderer.renderLIAttributes = function(rm, oLI) {
	rm.addClass("sapMListTblRow");
	var vAlign = oLI.getVAlign();
	if (vAlign != sap.ui.core.VerticalAlign.Inherit) {
		rm.addClass("sapMListTblRow" + vAlign);
	}
};


/**
 * Overwriting hook method of ListItemBase
 *
 * @public
 *
 * @param {sap.ui.core.RenderManager} rm RenderManager
 * @param {sap.m.ListItemBase} oLI List item
 * @param {sap.m.Table} oTable Table control
 */
sap.m.ColumnListItemRenderer.renderLIContent = function(rm, oLI, oTable) {
	if (!oTable) {
		return;
	}

	var aColumns = oTable.getColumns(true),
		aCells = oLI.getCells();

	// remove cloned headers
	oLI.destroyAggregation("clonedHeaders", true);

	// remove pop-in if list is not in rendering phase
	// in rendering phase all pop-ins are already removed
	if (!oTable._bRendering) {
		oLI.removePopin();
	}

	aColumns.forEach(function(oColumn, i) {
		var cls,
			bRenderCell = true,
			oCell = aCells[oColumn.getInitialOrder()];

		if (!oCell || !oColumn.getVisible() || oColumn.isNeverVisible(true) || oColumn.isPopin()) {
			return;
		}

		rm.write("<td");
		rm.addClass("sapMListTblCell");
		rm.writeAttribute("id", oLI.getId() + "_cell" + i);

		// check column properties
		if (oColumn) {
			cls = oColumn.getStyleClass(true);
			cls && rm.addClass(cls);

			// merge duplicate cells
			if (!oTable.hasPopin() && oColumn.getMergeDuplicates()) {
				var sFuncWithParam = oColumn.getMergeFunctionName(),
					aFuncWithParam = sFuncWithParam.split("#"),
					sFuncParam = aFuncWithParam[1],
					sFuncName = aFuncWithParam[0];

				if (typeof oCell[sFuncName] != "function") {
					jQuery.sap.log.warning("mergeFunctionName property is defined on " + oColumn + " but this is not function of " + oCell);
				} else {
					var lastColumnValue = oColumn.getLastValue(),
						cellValue = oCell[sFuncName](sFuncParam);

					if (lastColumnValue === cellValue) {
						bRenderCell = false;
						rm.addClass("sapMListTblCellDup");
					} else {
						oColumn.setLastValue(cellValue);
					}
				}
			}

			oColumn.getVAlign() != "Inherit" && rm.addStyle("vertical-align", oColumn.getVAlign().toLowerCase());
			rm.addStyle("text-align", oColumn.getCssAlign());
			rm.writeStyles();
		}

		rm.writeClasses();
		rm.write(">");
		if (bRenderCell) {
			rm.renderControl(oColumn.applyAlignTo(oCell));
		}
		rm.write("</td>");
	});
};


/**
 * Renders pop-ins for Table Rows
 *
 * @private
 *
 * @param {sap.ui.core.RenderManager} rm RenderManager
 * @param {sap.m.ListItemBase} oLI List item
 * @param {sap.m.Table} oTable Table control
 */
sap.m.ColumnListItemRenderer.renderPopin = function(rm, oLI, oTable) {
	oLI._popinId = oLI.getId() + "-sub";
	rm.write("<tr class='sapMListTblSubRow'");
	rm.writeAttribute("id", oLI._popinId);
	rm.writeAttribute("tabindex", -1);
	rm.write("><td");
	rm.writeAttribute("colspan", oTable.getColCount());
	rm.write("><div class='sapMListTblSubCnt'>");

	var aCells = oLI.getCells(),
		aColumns = oTable.getColumns(true);

	aColumns.forEach(function(oColumn) {
		if (!oColumn.getVisible() || !oColumn.isPopin()) {
			return;
		}

		var oCell = aCells[oColumn.getInitialOrder()],
			oHeader = oColumn.getHeader();

		if (!oHeader && !oCell) {
			return;
		}

		var cls = oColumn.getStyleClass();

		/* row start */
		rm.write("<div");
		rm.addClass("sapMListTblSubCntRow");
		cls && rm.addClass(cls);
		rm.writeClasses();
		rm.write(">");

		/* header cell */
		if (oHeader) {
			rm.write("<div");
			rm.addClass("sapMListTblSubCntHdr");
			rm.writeClasses();
			rm.write(">");
			oHeader = oHeader.clone();
			oLI.addAggregation("clonedHeaders", oHeader, true);
			oColumn.applyAlignTo(oHeader, "Begin");
			rm.renderControl(oHeader);
			rm.write("</div>");

			/* separator cell */
			rm.write("<div class='sapMListTblSubCntSpr'>:</div>");
		}

		/* value cell */
		if (oCell) {
			rm.write("<div");
			rm.addClass("sapMListTblSubCntVal");
			rm.addClass("sapMListTblSubCntVal" + oColumn.getPopinDisplay());
			rm.writeClasses();
			rm.write(">");
			oColumn.applyAlignTo(oCell, "Begin");
			rm.renderControl(oCell);
			rm.write("</div>");
		}

		/* row end */
		rm.write("</div>");
	});

	rm.write("</div></td></tr>");
};