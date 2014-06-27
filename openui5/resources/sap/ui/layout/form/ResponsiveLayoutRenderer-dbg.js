/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.ui.layout.form.FormLayoutRenderer");
jQuery.sap.declare("sap.ui.layout.form.ResponsiveLayoutRenderer");

/**
 * @class ResponsiveLayout renderer.
 * @static
 */
sap.ui.layout.form.ResponsiveLayoutRenderer = sap.ui.core.Renderer.extend(sap.ui.layout.form.FormLayoutRenderer);


sap.ui.layout.form.ResponsiveLayoutRenderer.getMainClass = function(){
	return "sapUiFormResLayout";
};

sap.ui.layout.form.ResponsiveLayoutRenderer.renderContainers = function(rm, oLayout, oForm){

	var aContainers = oForm.getFormContainers();
	var iLength = 0;
	for ( var i = 0; i < aContainers.length; i++) {
		var oContainer = aContainers[i];
		if (oContainer.getVisible()) {
			iLength++;
		}
	}

	if (iLength > 0) {
		// special case: only one container -> do not render an outer ResponsiveFlowLayout
		if (iLength > 1) {
			//render ResponsiveFlowLayout
			rm.renderControl(oLayout._mainRFLayout);
		}else if(oLayout.mContainers[aContainers[0].getId()][0]){
			// render panel
			rm.renderControl(oLayout.mContainers[aContainers[0].getId()][0]);
		}else{
			// render ResponsiveFlowLayout of container
			rm.renderControl(oLayout.mContainers[aContainers[0].getId()][1]);
		}
	}

};
