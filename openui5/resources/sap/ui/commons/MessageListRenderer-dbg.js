/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.commons.MessageList
jQuery.sap.declare("sap.ui.commons.MessageListRenderer");

/**
 * @class MessageList renderer.
 * @static
 */
sap.ui.commons.MessageListRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.commons.MessageListRenderer.render = function(oRenderManager, oControl){
	// Convenience variable
	var rm = oRenderManager;

	// Opening the outer container:
  rm.write('<ul class="sapUiMsgList"');
  rm.writeControlData(oControl);
  rm.write(">");

	  // Rendering all supplied messages:
	  // Most recent messages were pushed in last, so looping in reversed order
	  // to display those first.
		for (var i=oControl.aMessages.length-1; i>=0; i--) {
		  rm.write('<li class="sapUiMsgListLi">');
		  rm.renderControl(oControl.aMessages[i]);
		  rm.write("</li>");
		} // end for

  // Closing container:
  rm.write("</ul>");
};