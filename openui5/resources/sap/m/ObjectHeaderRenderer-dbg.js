/*
 * @copyright
 */
jQuery.sap.declare("sap.m.ObjectHeaderRenderer");
jQuery.sap.require("sap.ui.core.IconPool");

/**
 * @class ObjectHeader renderer.
 * @static
 */
sap.m.ObjectHeaderRenderer = {};

/**
 * Check if the object exists. In case object has _isEmpty() method then this method is called. If there is no such method then object is not empty.
 * 
 * @param {sap.ui.core.Control}
 *            oObject to be checked
 * 
 * @returns true is the object is not empty, false - otherwise.
 * 
 * @private
 */
sap.m.ObjectHeaderRenderer._isEmptyObject = function(oObject) {

	if (!oObject) {
		return true;
	}

	if ((!oObject._isEmpty || !oObject._isEmpty())&&(!oObject.getVisible || oObject.getVisible())) {
		return false;
	}
	return true;
};

/**
 * Array is considered empty if it is null or undefined or has no controls or all the controls are empty.
 * 
 * @param {sap.ui.core.Control[]}
 *            aArray array of controls to be checked
 * 
 * @returns true if array is empty, false - otherwise.
 * @private
 */
sap.m.ObjectHeaderRenderer._isEmptyArray = function(aArray) {

	if (aArray) {
		for ( var i = 0; i < aArray.length; i++) {
			if (!sap.m.ObjectHeaderRenderer._isEmptyObject(aArray[i])) {
				return false;
			}
		}
	}
	return true;
};

/**
 * A row is considered empty if both input parameters are empty.
 * 
 * @param {sap.ui.core.Control}
 *            aLeft control to be checked
 * 
 * @param {sap.ui.core.Control[]}
 *            aRight array of controls to be checked
 * 
 * @returns true if array is empty, false - otherwise.
 * @private
 */
sap.m.ObjectHeaderRenderer._isEmptyRow = function(oLeft, aRight) {

	return sap.m.ObjectHeaderRenderer._isEmptyObject(oLeft) && sap.m.ObjectHeaderRenderer._isEmptyArray(aRight);
};

/**
 * Render an array of controls.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the render output buffer
 * 
 * @param {sap.ui.core.Control[]}
 *            aObjects array of controls to be rendered
 * @private
 */
sap.m.ObjectHeaderRenderer._renderObjects = function(rm, aObjects) {

	for ( var i = 0; i < aObjects.length; i++) {
		if (aObjects[i] instanceof sap.ui.core.Control) {
			rm.renderControl(aObjects[i]);
		}
	}
};

/**
 * Returns the array of icons from ObjectHeader.
 * 
 * @param {sap.m.ObjectHeader}
 *            oOH the ObjectHeader that contains icons
 * 
 * @returns array of {sap.m.Image} controls
 * 
 * @private
 */
sap.m.ObjectHeaderRenderer._getIcons = function(oOH) {

	var icons = [];

	if (oOH.getShowMarkers()) {
		oOH._oFavIcon.setVisible(oOH.getMarkFavorite());
		oOH._oFlagIcon.setVisible(oOH.getMarkFlagged());

		icons.push(oOH._oPlaceholderIcon);
		icons.push(oOH._oFavIcon);
		icons.push(oOH._oFlagIcon);
	}

	return icons;
};




/**
 * Renders the HTML for Attribute.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.m.ObjectHeader}
 *            oOH an object to be rendered
 * @param {sap.m.ObjectAttribute}
 *            oAttr an attribute to be rendered
 * @param {boolean} bFullWidth set the attribute width to 100%
 */
sap.m.ObjectHeaderRenderer.renderAttribute = function(rm, oOH, oAttr, bFullWidth) {
	rm.write("<div");
	rm.addClass("sapMOHAttr");
	rm.writeClasses();
	if (bFullWidth) {
		rm.addStyle("width", "100%");
		rm.writeStyles();
	}
	rm.write(">");
	rm.renderControl(oAttr);
	rm.write("</div>");
};

/**
 * Renders the HTML for single line of Attribute and Status.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.m.ObjectHeader}
 *            oOH an object to be rendered
 * @param {sap.m.ObjectAttribute}
 *            oLeft an attribute to be rendered
 * @param {sap.ui.core.Control[]} aRight a status or Progress Indicator Array to be rendered
 */
sap.m.ObjectHeaderRenderer.renderRow = function(rm, oOH, oLeft, aRight) {

	if (sap.m.ObjectHeaderRenderer._isEmptyRow(oLeft, aRight)) {
		return; // nothing to render
	}
    
	rm.write("<div"); // Start attribute row container
	rm.addClass("sapMOHAttrRow");
	rm.writeClasses();
	rm.write(">");

	if (!sap.m.ObjectHeaderRenderer._isEmptyObject(oLeft)) {
		this.renderAttribute(rm, oOH, oLeft, sap.m.ObjectHeaderRenderer._isEmptyArray(aRight));
	} else if (sap.m.ObjectHeaderRenderer._isEmptyObject(oLeft) && !sap.m.ObjectHeaderRenderer._isEmptyArray(aRight)) {						
		if (aRight[0] instanceof sap.m.ProgressIndicator) {				
			rm.write("<div");
			rm.addClass("sapMOHAttr");
			rm.writeClasses();
			rm.write(">");
			rm.write("</div>");
		}		
	}

	if (!sap.m.ObjectHeaderRenderer._isEmptyArray(aRight)) {
		rm.write("<div");
		if (aRight[0] instanceof sap.m.ProgressIndicator) {
			rm.addClass("sapMOHStatusFixedWidth");
		}
		else if (aRight[0] instanceof sap.ui.core.Icon) {
			rm.addClass("sapMOHStatusFixedWidth");
			rm.addClass("sapMObjStatusMarker");
		}
		else {
			rm.addClass("sapMOHStatus");
		}
		rm.writeClasses();
		rm.write(">");
		sap.m.ObjectHeaderRenderer._renderObjects(rm, aRight);
		rm.write("</div>");
	}

	rm.write("</div>"); // Start attribute row container
};

/**
 * Renders the HTML for attributes and statuses, using the provided {@link sap.ui.core.RenderManager}. Validate the statuses control list to only display ObjectStatus and
 * ProgressIndicator
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.m.ObjectHeader}
 *            oOH an object to be rendered
 */
sap.m.ObjectHeaderRenderer.renderAttributesAndStatuses = function(rm, oOH) {

	var aAttribs = oOH.getAttributes();
	var aVisibleAttribs = [];

	for( var i = 0; i < aAttribs.length; i ++){
		if( aAttribs[i].getVisible()){
			aVisibleAttribs.push(aAttribs[i]);
		}
	}

	var iAttribsLength = aVisibleAttribs.length;

	var aIconsAndStatuses = [];
	var aIcons = sap.m.ObjectHeaderRenderer._getIcons(oOH);
	if (!sap.m.ObjectHeaderRenderer._isEmptyArray(aIcons)) {
		aIconsAndStatuses.push(aIcons);
	}

	if (oOH.getFirstStatus()) {
		aIconsAndStatuses.push([ oOH.getFirstStatus() ]);
	}
	if (oOH.getSecondStatus()) {
		aIconsAndStatuses.push([ oOH.getSecondStatus() ]);
	}
	if (oOH.getStatuses()) {
		var aStatuses = oOH.getStatuses();
		for ( var i = 0; i < aStatuses.length; i++) {
			if(!aStatuses[i].getVisible || aStatuses[i].getVisible()){
				if (aStatuses[i] instanceof sap.m.ObjectStatus || aStatuses[i] instanceof sap.m.ProgressIndicator) {
					aIconsAndStatuses.push([ aStatuses[i] ]);
				} else {
					jQuery.sap.log.warning("Only sap.m.ObjectStatus or sap.m.ProgressIndicator are allowed in \"sap.m.ObjectHeader.statuses\" aggregation." + " Current object is "
							+ aStatuses[i].constructor.getMetadata().getName() + " with id \"" + aStatuses[i].getId() + "\"");
				}
			}
		}
	}

	var iIconsAndStatusesLength = aIconsAndStatuses.length;

	var iNoOfRows = iAttribsLength > iIconsAndStatusesLength ? iAttribsLength : iIconsAndStatusesLength;

	for ( var i = 0; i < iNoOfRows; i++) {
		this.renderRow(rm, oOH, aVisibleAttribs[i], aIconsAndStatuses[i]);
	}
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.m.Control}
 *            oOH an object representation of the control that should be rendered
 */
sap.m.ObjectHeaderRenderer.renderNumber = function(rm, oOH) {
	if (oOH.getNumber()) {
		// Container for a number and a units qualifier.
		rm.write("<div"); // Start Number/units container
		rm.writeAttribute("id", oOH.getId() + "-numberdiv");
		rm.addClass("sapMOHNumberDiv");
		rm.writeClasses();
		rm.write(">");

		rm.write("<span");
		rm.writeAttribute("id", oOH.getId() + "-number");
		rm.addClass("sapMOHNumber");
		rm.addClass("sapMOHNumberState" + oOH.getNumberState());

		rm.writeClasses();
		rm.write(">");
		rm.writeEscaped(oOH.getNumber());

		rm.write("</span>");

		if (oOH.getNumberUnit()) {
			rm.write("<span");
			rm.writeAttribute("id", oOH.getId() + "-numberUnit");
			rm.addClass("sapMOHNumberUnit");
			rm.addClass("sapMOHNumberState" + oOH.getNumberState());
			
			rm.writeClasses();
			rm.write(">");
			rm.writeEscaped(oOH.getNumberUnit());
			rm.write("</span>");
		}

		rm.write("</div>"); // End Number/units container
	}
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.m.Control}
 *            oOH an object representation of the control that should be rendered
 */
sap.m.ObjectHeaderRenderer.renderTitle = function(rm, oOH) {
	// Start title text and title arrow container
	oOH._oTitleArrowIcon.setVisible(oOH.getShowTitleSelector());
	if(oOH.getShowTitleSelector() && oOH._oTitleArrowIcon.getVisible()){
		rm.write("<div");
		rm.addClass("sapMOHTitleAndArrow");
		rm.writeClasses();
		rm.write(">");
	}

	if (oOH.getTitle()) {
		oOH._titleText.setText(oOH.getTitle());
		rm.write("<span"); // Start Title Text container
		rm.writeAttribute("id", oOH.getId() + "-title");
		rm.addClass("sapMOHTitle");
		if (oOH.getTitleActive()) {
			rm.addClass("sapMOHTitleActive");
		}
		if(oOH.getShowTitleSelector()){
			rm.addClass("sapMOHTitleFollowArrow");
		}
		rm.writeClasses();
		rm.write(">");	
		oOH._titleText.addStyleClass("sapMOHTitle");
		
		rm.renderControl(oOH._titleText);
		rm.write("</span>"); // End Title Text container
	}	
	
	if(oOH.getShowTitleSelector()){
		rm.write("<span"); // Start title arrow container				
		rm.addClass("sapMOHTitleArrow");
		rm.writeClasses();
		rm.write(">");
		rm.renderControl(oOH._oTitleArrowIcon);
		rm.write("</span>"); // end title arrow container	
	}
	
	if(oOH.getShowTitleSelector() && oOH._oTitleArrowIcon.getVisible()){
		rm.write("</div>"); // end title text and title arrow container	
	}
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.m.Control}
 *            oOH an object representation of the control that should be rendered
 */
sap.m.ObjectHeaderRenderer.renderFullTitle = function(rm, oOH) {
	if (!oOH.getNumber()) {
		rm.addClass("sapMOHTitleDivFull");
	}
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.m.Control}
 *            oOH an object representation of the control that should be rendered
 */
sap.m.ObjectHeaderRenderer.renderFullOH = function(rm, oOH) {
	// Introductory text at the top of the item, like "On behalf of Julie..."
	if (oOH.getIntro()) {
		rm.write("<div");
		rm.addClass("sapMOHIntro");
		if (oOH.getIntroActive()) {
			rm.addClass("sapMOHIntroActive");
		}
		rm.writeClasses();
		rm.write(">");
		rm.write("<span");
		rm.writeAttribute("id", oOH.getId() + "-intro");
		rm.write(">");
		rm.writeEscaped(oOH.getIntro());
		rm.write("</span>");
		rm.write("</div>");
	}

	// Container for fields placed on the top half of the item, below the intro. This
	// includes title icon, title, title arrow, number, and number units.
	rm.write("<div"); // Start Top row container
	rm.addClass("sapMOHTopRow");
	rm.writeClasses();
	rm.write(">");

	// Title container displayed to the left of the number and number units container.
	rm.write("<div"); // Start Title container
	rm.writeAttribute("id", oOH.getId() + "-titlediv");
	rm.addClass("sapMOHTitleDiv");
	if (oOH._hasIcon()) {
		rm.addClass("sapMOHTitleIcon");
	}
	
	this.renderFullTitle(rm, oOH);
	rm.writeClasses();
	rm.write(">");

	// Container for icon
	if (oOH._hasIcon()) {
		rm.write("<div"); // Start icon container
		rm.addClass("sapMOHIcon");
		if (oOH.getIconActive()) {
			rm.addClass("sapMPointer");
		}
		rm.writeClasses();
		rm.write(">");
		rm.renderControl(oOH._getImageControl());
		rm.write("</div>"); // end icon container
	}
	
	this.renderTitle(rm, oOH);
	
	rm.write("</div>"); // End Title container

	this.renderNumber(rm, oOH);
	
	rm.write("<div class=\"sapMOHDivider\"/>");
	rm.write("</div>"); // End Top row container

	if (oOH._hasBottomContent()) {
		rm.write("<div"); // Start Bottom row container
		rm.addClass("sapMOHBottomRow");
		rm.writeClasses();
		rm.write(">");

		this.renderAttributesAndStatuses(rm, oOH);

		rm.write("<div class=\"sapMOHDivider\"/>");
		rm.write("</div>"); // End Bottom row container
	}
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.m.Control}
 *            oOH an object representation of the control that should be rendered
 */
sap.m.ObjectHeaderRenderer.renderCondensedOH = function(rm, oOH) {
	// Title container displayed to the left of the number and number units container.
	rm.write("<div"); // Start Title container
	rm.writeAttribute("id", oOH.getId() + "-titlediv");
	rm.addClass("sapMOHTitleDiv");
	
	this.renderFullTitle(rm, oOH);

	rm.writeClasses();
	rm.write(">");
	
	this.renderTitle(rm, oOH);
	
	rm.write("</div>"); // End Title container
	
	this.renderNumber(rm, oOH);
	
	var oFirstAttr = oOH.getAttributes()[0];
	
	if (oFirstAttr && !oFirstAttr._isEmpty()){
		this.renderAttribute(rm, oOH, oFirstAttr);
	}
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.m.Control}
 *            oOH an object representation of the control that should be rendered
 */
sap.m.ObjectHeaderRenderer.render = function(rm, oOH) {

	// return immediately if control is invisible
	if (!oOH.getVisible()) {
		return;
	}

	var bCondensed = oOH.getCondensed();
	
	rm.write("<div"); // Start Main container
	rm.writeControlData(oOH);
	rm.addClass("sapMOH");
	if (bCondensed){
		rm.addClass("sapMOHC");
		rm.addClass("sapMOHBg" + oOH.getBackgroundDesign());
	}
	
	rm.writeClasses();
	var sTooltip = oOH.getTooltip_AsString();
	if (sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}

	rm.write(">");

	if (bCondensed) {
		this.renderCondensedOH(rm, oOH);
	} else {
		this.renderFullOH(rm, oOH);
	}
	
	rm.write("<div class=\"sapMOHLastDivider\"/>");

	rm.write("</div>"); // End Main container\

};
