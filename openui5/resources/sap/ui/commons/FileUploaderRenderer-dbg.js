/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for control sap.ui.commons.FileUploader
jQuery.sap.declare("sap.ui.commons.FileUploaderRenderer");

/**
 * @class
 * @static
 */
sap.ui.commons.FileUploaderRenderer = function() {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.ui.core.Control} oControl An object representation of the control that should be rendered.
 */
sap.ui.commons.FileUploaderRenderer.render = function(oRenderManager, oFileUploader) {

	var rm = oRenderManager;
	var accessibility = sap.ui.getCore().getConfiguration().getAccessibility();

	// return immediately if control is invisible
	if (!oFileUploader.getVisible()) {
		return;
	}

	rm.write('<div');
	rm.writeControlData(oFileUploader);
	rm.addClass("sapUiFup");
	rm.writeClasses();
	rm.write('>');

	// form
	rm.write('<form style="display:inline-block" encType="multipart/form-data" method="post"');
	rm.writeAttribute('id', oFileUploader.getId() + '-fu_form');
	rm.writeAttributeEscaped('action', oFileUploader.getUploadUrl());
	rm.writeAttribute('target', oFileUploader.getId() + '-frame');
	rm.write('>');

	// the SAPUI5 TextField and Button
	rm.write('<div class="sapUiFupInp"');
	if (accessibility) {
		rm.writeAttribute("role", "textbox");
		rm.writeAttribute("aria-readonly", "true");
	}
	rm.write('>');

	rm.write('<div class="sapUiFupGroup" border="0" cellPadding="0" cellSpacing="0"><div><div>');
	rm.renderControl(oFileUploader.oFilePath);
	rm.write('</div><div>');  //-> per style margin
	rm.renderControl(oFileUploader.oBrowse);
	rm.write('</div></div></div>');

	// hidden pure input type file (surrounded by a div which is responsible for giving the input the correct size)
	var sName = oFileUploader.getName() || oFileUploader.getId();
	rm.write('<div class="sapUiFupInputMask">');
	rm.write('<input type="hidden" name="_charset_">');
	rm.write('<input type="hidden" id="' + oFileUploader.getId() + '-fu_data"');
	rm.writeAttributeEscaped('name', sName + '-data');
	rm.writeAttributeEscaped('value', oFileUploader.getAdditionalData() || "");
	rm.write('>');
	jQuery.each(oFileUploader.getParameters(), function(iIndex, oParam) {
		rm.write('<input type="hidden" ');
		rm.writeAttributeEscaped('name', oParam.getName() || "");
		rm.writeAttributeEscaped('value', oParam.getValue() || "");
		rm.write('>');
	});
	rm.write('</div>');


	rm.write('</div>');
	rm.write('</form>');
	rm.write('</div>');
};