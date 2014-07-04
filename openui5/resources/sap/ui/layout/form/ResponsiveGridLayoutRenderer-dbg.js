/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.ui.layout.form.FormLayoutRenderer");
jQuery.sap.declare("sap.ui.layout.form.ResponsiveGridLayoutRenderer");

/**
 * @class form/ResponsiveGridLayout renderer.
 * @static
 */
sap.ui.layout.form.ResponsiveGridLayoutRenderer = sap.ui.core.Renderer.extend(sap.ui.layout.form.FormLayoutRenderer);

sap.ui.layout.form.ResponsiveGridLayoutRenderer.getMainClass = function(){
	return "sapUiFormResGrid";
};

sap.ui.layout.form.ResponsiveGridLayoutRenderer.renderContainers = function(rm, oLayout, oForm){

	var aContainers = oForm.getFormContainers();
	var iLength = 0;
	for ( var i = 0; i < aContainers.length; i++) {
		var oContainer = aContainers[i];
		if (oContainer.getVisible()) {
			iLength++;
		}
	}

	if (iLength > 0) {
		// special case: only one container -> do not render an outer Grid
		if (iLength > 1) {
			//render Grid
			rm.renderControl(oLayout._mainGrid);
		}else if(oLayout.mContainers[aContainers[0].getId()][0]){
			// render panel
			rm.renderControl(oLayout.mContainers[aContainers[0].getId()][0]);
		}else{
			// render Grid of container
			rm.renderControl(oLayout.mContainers[aContainers[0].getId()][1]);
		}
	}

};