/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.ui.ux3.QuickViewRenderer");
jQuery.sap.require("sap.ui.commons.CalloutBaseRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class QuickView renderer. 
 * @static
 */
sap.ui.ux3.QuickViewRenderer = sap.ui.core.Renderer.extend(sap.ui.commons.CalloutBaseRenderer);


/**
 * Renders the HTML for the CalloutBase content, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.ux3.QuickViewRenderer.renderContent = function(oRenderManager, oControl){ 

	var rm = oRenderManager;

	// accessibility
	var bAcc = sap.ui.getCore().getConfiguration().getAccessibility();

	// control properties
	var sType	= oControl.getType(),
		sName	= oControl.getFirstTitle(),
		sHref	= oControl.getFirstTitleHref(),
		sIcon	= oControl.getIcon(),
		sDesc	= oControl.getSecondTitle(),
		sWidth	= oControl.getWidth(),
		sId = oControl.getId(),
		tooltip = oControl.getTooltip_AsString();

	// container for the QuickView header and content
	rm.write("<div");
	if(tooltip){
		rm.writeAttributeEscaped("title", tooltip);
	}
	if(bAcc){
		rm.writeAttribute("role", "dialog");
		rm.writeAttribute("aria-labelledby",sId + "-title");
	}
	rm.addClass("sapUiUx3QV");
	rm.writeClasses();
	if(sWidth){
		rm.addStyle("width", sWidth);
		rm.writeStyles();
	}
	rm.write(">")

	//header (Thing Type) is mandatory
	rm.write("<div");
	rm.writeAttribute("id", sId + "-title");
	rm.writeAttribute("tabindex", "-1"); // ItemNavigation can only handle focusable items
	rm.addClass("sapUiUx3QVHeader");
	rm.writeClasses();
	rm.write(">")
	rm.writeEscaped(sType);
	rm.write("</div>");

	//heading: icon, title1, title2
	if(sIcon || sName || sDesc){
		rm.write("<div");
		if(bAcc){
			rm.writeAttribute("role", "heading");
		}
		rm.addClass("sapUiUx3QVHeading");
		rm.writeClasses();
		rm.write(">")

		//icon
		if(sIcon){
			rm.write("<img alt=\"\"");
			rm.addClass("sapUiUx3QVIcon");
			rm.writeClasses();
			rm.writeAttributeEscaped("src", sIcon);
			rm.writeAttributeEscaped("title", sName);
			if(bAcc){
				// ARIA - icon is decorative
				rm.writeAttribute("role", "presentation");
			}
			rm.write(" tabindex=\"-1\"");
			rm.write("></img>"); 
		}

		//name 
		rm.write("<span");
		rm.writeAttribute("id", sId + "-name");
		if(bAcc && sDesc){
			rm.writeAttribute("aria-describedby",sId + "-descr");
		}
		rm.addClass("sapUiUx3QVTitle1");
		rm.writeClasses();
		rm.write(">");
		if(sHref){
			rm.write("<a");
			rm.writeAttribute("id", sId + "-link");
			rm.writeAttributeEscaped("href", sHref);
			rm.writeAttribute("tabindex", "-1"); // ItemNavigation can only handle focusable items
			rm.write(">");
		}
		rm.writeEscaped(sName || "");
		if(sHref){
			rm.write("</a>");
		}
		rm.write("</span>");

		//title2
		if(sDesc){
			rm.write("<br><span");
			rm.writeAttribute("id", sId + "-descr");
			rm.writeAttribute("tabindex", "-1"); // ItemNavigation can only handle focusable items
			rm.addClass("sapUiUx3QVTitle2");
			rm.writeClasses();
			rm.write(">");
			rm.writeEscaped(sDesc);
			rm.write("</span>");
		}
		rm.write("</div>"); // heading
	}

	// content
	// render Header Content
	rm.write("<div id=\"" + sId + "-content\">");
	this.renderBody(rm, oControl);
	rm.write("</div>");

	rm.write("</div>"); // container

	// render the action bar 
	if(oControl.getShowActionBar() && oControl.getActionBar()){
		rm.renderControl(oControl.getActionBar());
	}

};

/**
 * Renders the HTML for the QuickView body content (form or )
 *
 * @param {sap.ui.core.RenderManager}
 *            oRenderManager the RenderManager that can be used for writing to
 *            the Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oControl an object representation of the control that should be
 *            rendered
 */
sap.ui.ux3.QuickViewRenderer.renderBody = function(rm, oControl) {
	var aContent = oControl.getContent();
	for ( var i = 0; i < aContent.length; i++) {
		rm.write("<div class=\"sapUiUx3QVBody\">");
		if(aContent[i] instanceof sap.ui.core.Control){
			rm.renderControl(aContent[i]);
		} else if(aContent[i].getContent && typeof aContent[i].getContent == "function"){
			// ThingGroups with own content are also allowed
			var aChildContent = aContent[i].getContent();
			for(var j = 0; j < aChildContent.length; j++){
				if(aChildContent[j] instanceof sap.ui.core.Control){
					rm.renderControl(aChildContent[j]); 
				}
			}
		}
		rm.write("</div>");
	}
};

