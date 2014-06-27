/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.unified.Shell
jQuery.sap.declare("sap.ui.unified.ShellRenderer");

/**
 * @class Shell renderer.
 * @static
 */
sap.ui.unified.ShellRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oShell an object representation of the control that should be rendered
 */
sap.ui.unified.ShellRenderer.render = function(rm, oShell){
	var id = oShell.getId();

	rm.write("<div");
	rm.writeControlData(oShell);
	rm.addClass("sapUiUfdShell");
	if(oShell._animation){
		rm.addClass("sapUiUfdShellAnim");
	}
	rm.addClass("sapUiUfdShellHead"+ (oShell._showHeader ? "Visible" : "Hidden"));
	if(oShell.getShowCurtain()){
		rm.addClass("sapUiUfdShellCurtainVisible");
	}else{
		rm.addClass("sapUiUfdShellCurtainHidden");
		rm.addClass("sapUiUfdShellCurtainClosed");
	}
	
	rm.writeClasses();
	rm.write(">");
	
	rm.write("<hr id='", id, "-brand' class='sapUiUfdShellBrand'/>");
	
	rm.write("<header id='", id, "-hdr'  class='sapUiUfdShellHead'><div>");
	rm.write("<div id='", id, "-hdrcntnt' class='sapUiUfdShellCntnt'>");
	sap.ui.unified.ShellRenderer._renderHeaderContent(rm, oShell);
	rm.write("</div>", "</div>", "</header>");

	rm.write("<section id='", id, "-curt' class='sapUiUfdShellCntnt sapUiUfdShellCurtain'>");
	rm.write("<div id='", id, "-curtcntnt' class='sapUiUfdShellCntnt'>");
	rm.renderControl(oShell._curtCont);
	rm.write("</div>");
	rm.write("<span id='", id, "-curt-focusDummyOut' tabindex='0'></span>");
	rm.write("</section>");
	
	rm.write("<div id='", id, "-cntnt' class='sapUiUfdShellCntnt sapUiUfdShellCanvas'>");
	rm.renderControl(oShell._cont);
	rm.write("</div>");
	
	rm.write("<span id='", id, "-main-focusDummyOut' tabindex='" + (oShell.getShowCurtain() ? 0 : -1) + "'></span>");
	
	rm.write("</div>");
};

sap.ui.unified.ShellRenderer._renderHeaderContent = function(rm, oShell){
	var id = oShell.getId();

	rm.write("<div id='", id, "-hdr-begin' class='sapUiUfdShellHeadBegin'>");
	sap.ui.unified.ShellRenderer.renderHeaderItems(rm, oShell, true);
	rm.write("</div>");
	
	rm.write("<div id='", id, "-hdr-center' class='sapUiUfdShellHeadCenter'>");
	sap.ui.unified.ShellRenderer.renderSearch(rm, oShell);
	rm.write("</div>");
	
	rm.write("<div id='", id, "-hdr-end' class='sapUiUfdShellHeadEnd'>");
	sap.ui.unified.ShellRenderer.renderHeaderItems(rm, oShell, false);
	rm.write("</div>");
};

sap.ui.unified.ShellRenderer.renderSearch = function(rm, oShell) {
	var oSearch = oShell.getSearch(),
		bShowSearch = oShell.getSearchVisible() && !!oSearch;
	rm.write("<div id='", oShell.getId(), "-hdr-search'");
	rm.writeAttribute("class", "sapUiUfdShellSearch" + (bShowSearch ? "" : " sapUiUfdShellHidden"));
	rm.write(">");
	if(oSearch){
		rm.renderControl(oSearch);
	}
	rm.write("</div>");
};

sap.ui.unified.ShellRenderer.renderHeaderItems = function(rm, oShell, begin) {
	rm.write("<div class='sapUiUfdShellHeadContainer'>");
	var aItems = begin ? oShell.getHeadItems() : oShell.getHeadEndItems();
	
	for(var i=0; i<aItems.length; i++){
		rm.write("<a tabindex='0' href='javascript:void(0);'");
		rm.writeElementData(aItems[i]);
		rm.addClass("sapUiUfdShellHeadItm");
		if(aItems[i].getStartsSection()){
			rm.addClass("sapUiUfdShellHeadItmDelim");
		}
		if(!aItems[i].getVisible()){
			rm.addClass("sapUiUfdShellHidden");
		}
		if(aItems[i].getSelected()){
			rm.addClass("sapUiUfdShellHeadItmSel");
		}
		if(aItems[i].getShowMarker()){
			rm.addClass("sapUiUfdShellHeadItmMark");
		}
		rm.writeClasses();
		var tooltip = aItems[i].getTooltip_AsString();
		if(tooltip){
			rm.writeAttributeEscaped("title", tooltip);
		}
		rm.write("><span></span><div class='sapUiUfdShellHeadItmMarker'><div></div></div></a>");
	}
	
	rm.write("</div>");
	if(begin){
		sap.ui.unified.ShellRenderer._renderIcon(rm, oShell);
	}
};

sap.ui.unified.ShellRenderer._renderIcon = function(rm, oShell) {
	var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.unified"),
		sLogoTooltip = rb.getText("SHELL_LOGO_TOOLTIP"),
		sIco = oShell._getIcon();
	
	rm.write("<div class='sapUiUfdShellIco'>");
	rm.write("<img id='", oShell.getId(), "-icon'");
	rm.writeAttributeEscaped("title", sLogoTooltip);
	rm.writeAttributeEscaped("alt", sLogoTooltip);
	rm.write("src='");
	rm.writeEscaped(sIco);
	rm.write("' style='", sIco ? "" : "display:none;","'></img>");
	rm.write("</div>");
};
