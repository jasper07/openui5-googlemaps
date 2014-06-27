/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

//Provides default renderer for the sap.ui.ux3.Shell
jQuery.sap.declare("sap.ui.ux3.ShellRenderer");

jQuery.sap.require("sap.ui.core.IconPool");

/**
 * @class GoldReflectionPageLayout renderer.
 * @static
 */
sap.ui.ux3.ShellRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.ShellRenderer.render = function(oRenderManager, oControl) {
	// convenience variable
	var rm = oRenderManager;
	var bPaneOpen = oControl.isPaneOpen();
	var iPaneWidthPlus = oControl.getPaneWidth() + sap.ui.ux3.Shell.SIDE_BAR_BASE_WIDTH; // width of pane plus how far it is from the edge
	var bRtl = sap.ui.getCore().getConfiguration().getRTL();
	var sId = oControl.getId();

	if (sap.ui.ux3.Shell.FIRST_RENDERING) {
		document.body.style.margin = "0"; // does not seem to work in initial onBeforeRendering
	}

	// write the root HTML element  TODO: this should use the existing <body>! But where is the staticarea, then?
	rm.write("<div");
	rm.writeControlData(oControl);
	rm.addClass("sapUiUx3Shell");
	rm.addClass("sapUiUx3ShellHead"+oControl.getHeaderType());
	rm.addClass("sapUiUx3ShellDesign"+oControl.getDesignType());
	
	if (!oControl._hasDarkDesign()) {
		rm.addClass("sapUiUx3ShellDesignLight");
	}
	
	if (oControl.getFullHeightContent()) {
		rm.addClass("sapUiUx3ShellFullHeightContent");
	}
	if (!oControl.getApplyContentPadding()) {
		rm.addClass("sapUiUx3ShellNoContentPadding");
	}
	if(!oControl.getShowTools()){
		rm.addClass("sapUiUx3ShellNoTools");
	}
	if(!oControl.getShowPane()){
		rm.addClass("sapUiUx3ShellNoPane");
	}
	if(oControl._topSyncRefId && !oControl.getAllowOverlayHeaderAccess()){
		rm.addClass("sapUiUx3ShellBlockHeaderAccess");
	}
	rm.writeClasses();
	rm.write(">");


	// write header
	rm.write("<img id='" + sId + "-hdrImg' class='sapUiUx3ShellHeaderImg' src='");
	var sImage = sap.ui.core.theming.Parameters.get('sapUiUx3ShellHeaderImageURL');
	sImage = oControl._convertImageParameter(sImage);
	if (sImage) {
		rm.writeEscaped(sImage);
	} else {
		rm.write(sap.ui.resource('sap.ui.core', 'themes/base/img/1x1.gif'));
	}
	rm.write("' />");
	rm.write("<header id='" + sId + "-hdr' class='sapUiUx3ShellHeader' role='banner'>");
	var tabIndex = oControl._topSyncRefId ? " tabindex='0'" : "";
	rm.write("<span class='sapUiUx3ShellFocusDummy' id='" + sId + "-focusDummyHdrStart'" + tabIndex + "></span>");
	sap.ui.ux3.ShellRenderer.renderHeader(rm, oControl);
	rm.write("<span class='sapUiUx3ShellFocusDummy' id='" + sId + "-focusDummyHdrEnd'" + tabIndex + "></span>");
	rm.write("</header>   <!-- end of sapUiUx3ShellHeader -->");



	// write page background
	rm.write("<div id='", sId, "-bg' class='sapUiUx3ShellBg'></div>");
	rm.write("<img id='", sId, "-bgImg' class='sapUiUx3ShellBgImg' src='");
	sImage = sap.ui.core.theming.Parameters.get('sapUiUx3ShellBackgroundImageURL');
	sImage = oControl._convertImageParameter(sImage);
	if (sImage) {
		rm.writeEscaped(sImage);
	} else {
		rm.write(sap.ui.resource('sap.ui.core', 'themes/base/img/1x1.gif'));
	}
	rm.write("'/>");


	// write workset items
	var wsMargin = bPaneOpen ? " style='margin-" + (bRtl ? "left" : "right") + ":" + (iPaneWidthPlus + 22) + "px'" : "";
	rm.write("<div id='", sId, "-wBar'" + wsMargin + " class='sapUiUx3ShellWorksetBar'>");
	sap.ui.ux3.ShellRenderer.renderWorksetItems(rm, oControl);
	rm.write("</div>   <!--  end of worksetBar -->");



	// write tool palette area
	rm.write("<section id='" + sId + "-tp' class='sapUiUx3ShellToolPaletteArea' role='complementary'>");
	sap.ui.ux3.ShellRenderer.renderToolPalette(rm, oControl);
	rm.write("</section> <!-- end of toolPaletteArea -->");



	// write page canvas and content
	
	var paneExtraStyle = bPaneOpen ? " style='" + (bRtl ? "left" : "right") + ":" + iPaneWidthPlus + "px'" : "";
	rm.write("<div class='sapUiUx3ShellCanvas'" + paneExtraStyle + " id='" + sId + "-canvas'>");

	sap.ui.ux3.ShellRenderer.renderFacetBar(rm, oControl);

	rm.write("<article class='sapUiUx3ShellContent' id='" + sId + "-content' role='main'>");
	var aContent = oControl.getContent();
	for (var i = 0; i < aContent.length; i++) {
		rm.renderControl(aContent[i]);
	}
	rm.write("</article><div class='sapUiUx3ShellNotifySpace'></div></div>");



	// write pane bar
	var tabIndex = oControl._topSyncRefId ? " tabindex='0'" : "";
	rm.write("<span class='sapUiUx3ShellFocusDummy' id='" + sId + "-focusDummyPane'" + tabIndex + "></span>");
	rm.write("<aside id='" + sId + "-paneBar' class='sapUiUx3ShellPaneBar " + (bPaneOpen ? " sapUiUx3ShellPaneBarOpen sapUiUx3ShellPaneBarOpened" : " sapUiUx3ShellPaneBarClose") + "' role='complementary' style='width:" + iPaneWidthPlus + "px;'>");
	rm.write("<section id='" + sId + "-paneContent' style='width:" + oControl.getPaneWidth() + "px;' class='sapUiUx3ShellPaneBarContent' role='tabpanel'>");
	var aPaneContent = oControl.getPaneContent();
	for (var i = 0; i < aPaneContent.length; i++) {
		rm.renderControl(aPaneContent[i]);
	}
	rm.write("</section>");

	rm.write("<div id='"+ sId + "-paneBarRight' class='sapUiUx3ShellPaneBarRight'>");
	rm.write("<ul id='" + sId + "-paneBarEntries' class='sapUiUx3ShellPaneEntries' role='tablist'>");
	sap.ui.ux3.ShellRenderer.renderPaneBarItems(rm, oControl);
	rm.write("</ul>");

	// Render overflow button
	rm.write("<div id='" + sId + "-paneBarOverflowButton' class='sapUiUx3ShellPaneOverflowButton'");
	rm.addStyle("display", "none;"); // So it does not depend on theme being loaded
	rm.writeStyles();
	rm.write(">");
	rm.write("<div id='" + sId + "-paneBarOverflowWrapper' class='sapUiUx3ShellPaneOverflowWrapper'>");
	rm.write("<span id='" + sId + "-paneBarOverflowText' class='sapUiUx3ShellPaneOverflowText sapUiUx3ShellPaneEntry'>");
	rm.write(sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3").getText("SHELL_MORE_BUTTON"));
	rm.write("</span>"); // sapUiUx3ShellPaneOverflowText
	rm.write("</div>"); // overflow-wrapper
	rm.write("</div>"); // sapUiUx3ShellPaneOverflowButton
	
	
	rm.write("</div>");
	
	
	rm.write("</aside>   <!-- end of paneBar -->");



	// write the purely visual background
	rm.write("<div class='sapUiUx3ShellCanvasBackground " + (bPaneOpen ? "sapUiUx3ShellCanvasBackgroundOpen" : "sapUiUx3ShellCanvasBackgroundClosed") 
			+ "' id='" + sId + "-canvasBackground'" + paneExtraStyle + ">");
	rm.write("<div class='sapUiUx3ShellCanvasBackgroundRight'></div>");
	rm.write("</div>");

	rm.write("<div id='" + sId + "-notify' class='sapUiUx3ShellNotify'>");
	sap.ui.ux3.ShellRenderer.renderNotificationArea(rm, oControl);
	rm.write("</div>");

	// render closing tag for root element
	rm.write("</div>");
};



sap.ui.ux3.ShellRenderer.renderHeader = function(rm, oControl) {
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");

	var appIcon = oControl.getAppIcon();
	rm.write("<hr id='" + oControl.getId() + "-hdrLine'/><img id='" + oControl.getId() + "-logoImg' src='");
	if (appIcon) {
		rm.writeEscaped(oControl.getAppIcon());
	} else {
		var sImage = sap.ui.core.theming.Parameters.get('sapUiUx3ShellApplicationImageURL');
		sImage = oControl._convertImageParameter(sImage);
		if (sImage) {
			rm.writeEscaped(sImage);
		} else {
			rm.write(sap.ui.resource('sap.ui.core', 'themes/base/img/1x1.gif'));
		}
	}
	rm.write("'");

	var iconTooltip = oControl.getAppIconTooltip() || rb.getText("SHELL_LOGO");
	rm.writeAttributeEscaped("alt", iconTooltip);
	rm.writeAttributeEscaped("title", iconTooltip);

	rm.write("><h1");
	rm.writeAttributeEscaped("title", oControl.getAppTitle());
	rm.write(">");
	rm.writeEscaped(oControl.getAppTitle());

	rm.write("</h1><span id='" + oControl.getId() + "-hdr-items' class='sapUiUx3ShellHeaderTitleRight'>");

	// header-right-items
	var aHeaderItems = oControl.getHeaderItems();
	for (var i = 0; i < aHeaderItems.length; i++) {
		// ensure correct styling of the menu if there is a MenuButton
		if (aHeaderItems[i] instanceof sap.ui.commons.MenuButton) { // TODO: improve this
			if (aHeaderItems[i].getMenu()) {
				aHeaderItems[i].getMenu().addStyleClass("sapUiMnuTop", true); // multiple calls are ignored, so there is no check whether the class is already there
			}
		}

		// render the header item
		rm.renderControl(aHeaderItems[i]);

		if ((i < (aHeaderItems.length-1)) || (oControl.getShowLogoutButton())) {
			rm.write("<span class='sapUiUx3ShellHeaderSep'></span>");
		}
	}

	// logout button
	if (oControl.getShowLogoutButton()) {
		rm.write("<a id='" + oControl.getId() + "-logout' title='");
		rm.write(oControl.getLogoutButtonTooltip() ? jQuery.sap.escapeHTML(oControl.getLogoutButtonTooltip()) : rb.getText("SHELL_LOGOUT"));
		rm.write("' tabindex='0' role='button' class='sapUiUx3ShellHeaderButton sapUiUx3ShellHeader-logout'></a>");
	}
	rm.write("</span>");
};




/**
 * Renders the inner HTML of the left-side tool palette.
 *
 * @param oControl the Shell control
 * @private
 */
sap.ui.ux3.ShellRenderer.renderToolPalette = function(rm, oControl) {
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");
	var sId = oControl.getId();
	
	var tabIndex = oControl._topSyncRefId ? " tabindex='0'" : "";
	rm.write("<span class='sapUiUx3ShellFocusDummy' id='" + oControl.getId() + "-focusDummyTPStart'" + tabIndex + "></span>");

	// write standard tools
	var sAccDescr = rb.getText("SHELL_TOOLPANE_GENERIC"),
		bStandardToolPresent = false,
		bFirstTool = true,
		sStandardToolsHtml = "";
	if (oControl.getShowSearchTool()) {
		bStandardToolPresent = true;
		sStandardToolsHtml += "<a id='" + sId + sap.ui.ux3.Shell.TOOL_PREFIX + sId + "-searchTool' title='" + rb.getText("SHELL_SEARCH") + "' class='sapUiUx3ShellTool sapUiUx3ShellTool-search' tabindex='0' role='button' aria-pressed='false'></a>";
		if (bFirstTool) {
			bFirstTool = false;
		} else {
			sAccDescr += ",";
		}
		sAccDescr += " " + rb.getText("SHELL_SEARCH");
	}
	if (oControl.getShowFeederTool()) {
		bStandardToolPresent = true;
		sStandardToolsHtml += "<a id='" + sId + sap.ui.ux3.Shell.TOOL_PREFIX + sId + "-feederTool' title='" + rb.getText("SHELL_FEEDER") + "' class='sapUiUx3ShellTool sapUiUx3ShellTool-feeder' tabindex='0' role='button' aria-pressed='false'></a>";
		if (bFirstTool) {
			bFirstTool = false;
		} else {
			sAccDescr += ",";
		}
		sAccDescr += " " + rb.getText("SHELL_FEEDER");
	}

	if (bStandardToolPresent) {
		rm.write("<div role='toolbar'aria-describedby='" + sId + "-genericToolsDescr'>");
		rm.write("<span id='" + sId + "-genericToolsDescr' style='display:none;'>" + sAccDescr + "</span>");
		rm.write(sStandardToolsHtml + "</div>");
	}

	var aToolItems = oControl.getToolPopups();

	// write separator between standard tools and app tools, if required
	if (bStandardToolPresent && (aToolItems.length > 0)) {
		rm.write("<hr id='" + sId + "-tp-separator' class='sapUiUx3ShellToolSep'></hr>");
	}

	// write app tools
	if (aToolItems.length > 0) {
		rm.write("<div role='toolbar' aria-describedby='" + sId + "-appToolsDescr'>");
		rm.write("<span id='" + sId + "-appToolsDescr' style='display:none;'>" + rb.getText("SHELL_TOOLPANE_APP") + "</span>");
		for (var i = 0; i < aToolItems.length; i++) {
			var oToolItem = aToolItems[i];
			if (oToolItem instanceof sap.ui.core.SeparatorItem) { // TODO: not possible
				rm.write("<hr class='sapUiUx3ShellToolSep'></hr>");
			} else {
				// regular item
				rm.write("<a id='" + sId + "-tool-" + oToolItem.getId() + "' class='sapUiUx3ShellTool'");
				var sTooltip = oToolItem.getTooltip_AsString();
				if (!sTooltip) {
					sTooltip = oToolItem.getTitle();
				}
				if (sTooltip) {
					rm.write(" title='");
					rm.writeEscaped(sTooltip);
					rm.write("' ");
				}
				rm.write(" tabindex='0' role='button' aria-pressed='false'><img src='");
				rm.writeEscaped(oToolItem.getIcon());
				rm.write("' alt='' role='presentation'/></a>");
			}
		}
		rm.write("</div>");
	}
	rm.write("<span class='sapUiUx3ShellFocusDummy' id='" + oControl.getId() + "-focusDummyTPEnd'" + tabIndex + "></span>");
};

sap.ui.ux3.ShellRenderer.renderPaneBarItems = function(rm, oControl) {
	var sId = oControl.getId();
	var aPaneBarItems = oControl.getPaneBarItems();
	var iNoOfItems = aPaneBarItems.length;
	for (var i = 0; i < iNoOfItems; i++) {
		var item = aPaneBarItems[i];
		var itemId = item.getId();
		rm.write("<li");
		rm.writeElementData(item);
		rm.write(" role='tab' aria-controls='" + sId + "-paneContent' aria-setsize='" + iNoOfItems + "' aria-posinset='" + (i+1) + "' tabindex='-1' class='sapUiUx3ShellPaneEntry");
		if (oControl._sOpenPaneId === itemId) { // mark pane item if opened
			rm.write(" sapUiUx3ShellPaneEntrySelected");
		}
		rm.write("'");
		if(item.getTooltip_AsString()) {
			rm.writeAttributeEscaped("title", item.getTooltip_AsString());
		}
		rm.write(">");
		rm.writeEscaped(item.getText().toUpperCase());
		rm.write("</li>");
	}
};

sap.ui.ux3.ShellRenderer.renderNotificationArea = function(rm, oControl) {
	rm.write("<div class='sapUiUx3ShellNotifyBG'></div>");
	if(oControl.getNotificationBar()){
		rm.renderControl(oControl.getNotificationBar());
	}
};

sap.ui.ux3.ShellRenderer.renderWorksetItems = function(rm, oControl) {
	var aItems = oControl.getWorksetItems();
	oControl._oWorksetBar.setAssociatedItems(aItems);
	if (!oControl._oWorksetBar.isSelectedItemValid() && (aItems.length > 0)) {
		oControl.setAssociation("selectedWorksetItem", aItems[0], true); // set the first item as being selected if there is no item selected
		oControl._oWorksetBar.setSelectedItem(aItems[0]); // set the first item as being selected if there is no item selected
	}
	if(rm){
		rm.renderControl(oControl._oWorksetBar);
	}
};

sap.ui.ux3.ShellRenderer.renderFacetBar = function(rm, oControl) {
	var oSelectedWsi = sap.ui.getCore().byId(oControl.getSelectedWorksetItem()); // by now it is guaranteed that the association is properly initialized
	if (oSelectedWsi) {
		// if parent is also a NavigationItem, the selected one is a second-level item and we need to go up one level
		var parent = oSelectedWsi.getParent();
		if (parent && parent instanceof sap.ui.ux3.NavigationItem) {
			oSelectedWsi = parent;
		}
	
		var aSubItems = oSelectedWsi.getSubItems();
		oControl._oFacetBar.setAssociatedItems(aSubItems);
		if (!oControl._oFacetBar.isSelectedItemValid() && (aSubItems.length > 0)) {
			oControl._oFacetBar.setSelectedItem(aSubItems[0]); // set the first item as being selected if there is no item selected
		}
	}
	if(rm){
		rm.renderControl(oControl._oFacetBar);
	}
};
