/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.require("sap.m.FlexBoxCssPropertyMap");

if(jQuery.support.useFlexBoxPolyfill) {
	jQuery.sap.require("sap.ui.thirdparty.flexie");
}
jQuery.sap.declare("sap.m.FlexBoxStylingHelper");

/**
 * @class FlexBox styling helper
 * @static
 */
sap.m.FlexBoxStylingHelper = {};

/**
 * Goes through applicable styles and calls function to sets them on the given control.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.FlexBoxStylingHelper.setFlexBoxStyles = function(oRm, oControl) {
	var sDisplay;

	// Prepare values by converting camel-case to dash and lower-casing
	var bInline = oControl.getDisplayInline();
	var sDirection = oControl.getDirection().replace(/\W+/g, "-").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase();
	var bFitContainer = oControl.getFitContainer();
	var sJustifyContent = oControl.getJustifyContent().replace(/\W+/g, "-").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase();
	var sAlignItems = oControl.getAlignItems().replace(/\W+/g, "-").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase();

	if(bInline) {
		sDisplay = "inline-flex";
	} else {
		sDisplay = "flex";
	}

	// Set width and height for outermost FlexBox only if FitContainer is set
	if(bFitContainer && !(oControl.getParent() instanceof sap.m.FlexBox)) {
		if(oControl.getParent() instanceof sap.m.Page) {
			var $page = oControl.getParent().$();
			$page.find("sapMPageScroll").height("100%"); // Set height of scroll area to 100% because it's currently not automatically set
		}
		//jQuery.sap.log.info("FlexBox fitContainer set to true. Remember, if the FlexBox is inserted into a Page, the property 'enableScrolling' of the Page needs to be set to 'false' for the FlexBox to fit the entire viewport.");
		oRm.addStyle("width", "auto");
		oRm.addStyle("height", "100%");
	}

	// Add flex prefix to start and end values
	if(sJustifyContent === "start" || sJustifyContent === "end") {
		sJustifyContent = "flex-" + sJustifyContent;
	}

	if(sAlignItems === "start" || sAlignItems === "end") {
		sAlignItems = "flex-" + sAlignItems;
	}

	// Set values (if different from default)
	sap.m.FlexBoxStylingHelper.setStyle(oRm, oControl, "display", sDisplay);
	if(sDirection !== "row") {
		sap.m.FlexBoxStylingHelper.setStyle(oRm, oControl, "flex-direction", sDirection);
	}

	if(sJustifyContent !== "flex-start") {
		sap.m.FlexBoxStylingHelper.setStyle(oRm, oControl, "justify-content", sJustifyContent);
	}
	if(sAlignItems !== "stretch") {
		sap.m.FlexBoxStylingHelper.setStyle(oRm, oControl, "align-items", sAlignItems);
	}
//	if(jQuery.support.newFlexBoxLayout) {
//		var sWrap = oControl.getWrap().replace(/\W+/g, "-").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase();
//		var sAlignContent = oControl.getAlignContent().replace(/\W+/g, "-").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase();
//
//		if(sWrap !== "nowrap") {
//			sap.m.FlexBoxStylingHelper.setStyle(oRm, oControl, "flex-wrap", sWrap);
//		}
//		if(sAlignContent === "start" || sAlignContent === "end") {
//			sAlignContent = "flex-" + sAlignContent;
//		}
//		if(sAlignContent !== "stretch") {
//			sap.m.FlexBoxStylingHelper.setStyle(oRm, oControl, "align-content", sAlignContent);
//		}
//	}
};

/**
 * Goes through applicable item styles and sets them on the given control.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.m.FlexItemData} oLayoutData an object representation of the layout data
 */
sap.m.FlexBoxStylingHelper.setFlexItemStyles = function(oRm, oLayoutData) {
	var order = "";
	var growFactor = "";
	var alignSelf = "";

	// Set values if different from default
	order = oLayoutData.getOrder();
	if(order) {
		sap.m.FlexBoxStylingHelper.setStyle(oRm, null, "order", order);
	}

	growFactor = oLayoutData.getGrowFactor();
	if(growFactor !== undefined) {
		sap.m.FlexBoxStylingHelper.setStyle(oRm, null, "flex-grow", growFactor);
	}

	alignSelf = oLayoutData.getAlignSelf().toLowerCase();

	// Add flex prefix to start and end values to create CSS value
	if(alignSelf === "start" || alignSelf === "end") {
		alignSelf = "flex-" + alignSelf;
	}

	if(alignSelf && alignSelf !== "auto") {
		sap.m.FlexBoxStylingHelper.setStyle(oRm, null, "align-self", alignSelf);
	}

//	if(jQuery.support.newFlexBoxLayout) {
//		var shrinkFactor = "";
// 		var baseSize = "";
//
//		shrinkFactor = oLayoutData.getShrinkFactor();
//		if(shrinkFactor !== 1) {
//			sap.m.FlexBoxStylingHelper.setStyle(oRm, null, "flex-shrink", shrinkFactor);
//		}
//
//		baseSize = oLayoutData.getBaseSize().toLowerCase();
//		if(baseSize !== undefined) {
//			sap.m.FlexBoxStylingHelper.setStyle(oRm, null, "flex-basis", baseSize);
//		}
//	}
};

/**
 * Sets style (including fall-back styles) to the given control, using the provided {@link sap.ui.core.RenderManager}.
 * This method does NOT apply a polyfill in browsers that don't support flex box natively.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 * @param sProperty name of the property
 * @param sValue value of the property
 */
sap.m.FlexBoxStylingHelper.setStyle = function(oRm, oControl, sProperty, sValue) {
	if(typeof(sValue) === "string") {
		sValue = sValue.toLowerCase();
	}

	// Determine vendor prefix
	var sVendorPrefix = "";

	if(jQuery.support.flexBoxPrefixed) {
		if(sap.ui.Device.browser.webkit) {
			sVendorPrefix = "-webkit-";
		} else if(jQuery.browser.mozilla) {
			sVendorPrefix = "-moz-";
		} else if(sap.ui.Device.browser.internet_explorer) {
			sVendorPrefix = "-ms-";
		}
	}

	// Choose flex box styling method
	if(jQuery.support.newFlexBoxLayout) {
		// New spec
		sap.m.FlexBoxStylingHelper.setFinalSpecStyle(oRm, oControl, sProperty, sValue, sVendorPrefix);
	} else if(jQuery.support.flexBoxLayout || jQuery.support.ie10FlexBoxLayout) {
		// Old spec
		sap.m.FlexBoxStylingHelper.setOldSpecStyle(oRm, oControl, sProperty, sValue, sVendorPrefix);
	}
};

/**
 * Sets style for the FINAL flex box spec to the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 * @param sProperty name of the property
 * @param sValue value of the property
 * @param sVendorPrefix vendor prefix
 */
sap.m.FlexBoxStylingHelper.setFinalSpecStyle = function(oRm, oControl, sProperty, sValue, sVendorPrefix) {
	if(jQuery.support.flexBoxPrefixed) {
		// With vendor prefix
		sap.m.FlexBoxStylingHelper.writeStyle(oRm, oControl, sProperty, sValue, sVendorPrefix);
	}

	// Pure standard
	sap.m.FlexBoxStylingHelper.writeStyle(oRm, oControl, sProperty, sValue);
};

/**
 * Sets style for the OLD or the IE10 flex box spec to the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 * @param sProperty name of the property
 * @param sValue value of the property
 * @param sVendorPrefix vendor prefix
 */
sap.m.FlexBoxStylingHelper.setOldSpecStyle = function(oRm, oControl, sProperty, sValue, sVendorPrefix) {
	// Choose specification
	var sSpec = "";
	if(sVendorPrefix == "-ms-") {
		sSpec = "specie10"; // IE10 specification
	} else {
		sSpec = "spec0907";	// old specification
	}

	// Nothing to do if final standard is supported or property doesn't exist in this spec or is the same as standard
	// Else map to old property
	if(sap.m.FlexBoxCssPropertyMap[sSpec][sProperty] !== null && sap.m.FlexBoxCssPropertyMap[sSpec][sProperty] !== "<idem>") {
		// Prepare mapped properties and values
		var mLegacyMap = null;
		if(typeof(sap.m.FlexBoxCssPropertyMap[sSpec][sProperty]) === "object") {
			if(sap.m.FlexBoxCssPropertyMap[sSpec][sProperty]["<number>"]) {
				mLegacyMap = sap.m.FlexBoxCssPropertyMap[sSpec][sProperty]["<number>"];
				for(var key in mLegacyMap) {
					mLegacyMap[key] = sValue;
				}
			} else {
				mLegacyMap = sap.m.FlexBoxCssPropertyMap[sSpec][sProperty][sValue];
			}
		} else {
			mLegacyMap = sap.m.FlexBoxCssPropertyMap[sSpec][sProperty][sValue];
		}

		// Nothing to do if value doesn't exist or is the same as standard
		if(mLegacyMap !== null && mLegacyMap !== "<idem>") {
			if(typeof(mLegacyMap) === "object") {
				for(var sLegacyProperty in mLegacyMap) {
					// Write property/value to control
					sap.m.FlexBoxStylingHelper.writeStyle(oRm, oControl, sLegacyProperty, mLegacyMap[sLegacyProperty], sVendorPrefix);
				}
			}
		}
	}
};

/**
 * Writes the style to the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 * @param sProperty name of the property
 * @param sValue value of the property
 * @param sVendorPrefix vendor prefix
 */
sap.m.FlexBoxStylingHelper.writeStyle = function(oRm, oControl, sProperty, sValue, sVendorPrefix) {
	var sPropertyPrefix = "";
	var sValuePrefix = "";
	sVendorPrefix = typeof sVendorPrefix !== "undefined" ? sVendorPrefix : "";	// default: empty string

	// Set prefix to value for display property
	// As display is a long-standing standard property the values are vendor-prefixed instead of the property name
	if(sProperty !== "display") {
		sPropertyPrefix = sVendorPrefix;
	} else {
		sValuePrefix = sVendorPrefix;
	}

	// Finally write property value to control using either renderer or element directly
	if(oRm) {
		oRm.addStyle(sPropertyPrefix + sProperty, sValuePrefix + sValue);
	} else {
		jQuery(oControl).css(sPropertyPrefix + sProperty, sValuePrefix + sValue);
	}
};

/**
 * Applies flex box polyfill styling to the given DOM element and its children (if polyfill is being used at all)
 *
 * @param sId DOM ID of the control that should be turned into a flex box
 * @param oSettings object holding the flex box settings
 */
sap.m.FlexBoxStylingHelper.applyFlexBoxPolyfill = function(sId, oSettings) {
	// Return if polyfill is not being used
	if(!jQuery.support.useFlexBoxPolyfill) {
		jQuery.sap.log.warning("FlexBox Polyfill is not being used");
		return;
	}
	var justifyContent = {
		Start: "start",
		Center: "center",
		End: "end",
		SpaceBetween : "justify"
	};
	var alignItems = {
		Start: "start",
		Center: "center",
		End: "end",
		Stretch : "stretch"
	};
	
	var orient = "";
	var direction = "";
	
	switch(oSettings.direction) {
		case "Column" :
			orient = "vertical";
			direction = "normal";
			break;
		case "RowReverse" : 
			orient = "horizontal";
			direction = "reverse";
			break;
		case "ColumnReverse" : 
			orient = "vertical";
			direction = "reverse";
			break;
		case "Row" :
		default:
			orient = "horizontal";
			direction = "normal";
	}

	var box = new window.Flexie.box({
		target : document.getElementById(sId),
		orient : orient,
		align : alignItems[oSettings.alignItems],
		direction : direction,
		pack : justifyContent[oSettings.justifyContent],
		flexMatrix : oSettings.flexMatrix,
		ordinalMatrix : oSettings.ordinalMatrix,
	    dynamic: true
	});
	
	return box;
};