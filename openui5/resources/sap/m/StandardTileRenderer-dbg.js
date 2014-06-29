/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.StandardTileRenderer");
jQuery.sap.require("sap.m.TileRenderer");
/**
 * @class CustomTile renderer. 
 * @static
 */
sap.m.StandardTileRenderer = sap.ui.core.Renderer.extend(sap.m.TileRenderer);

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *                oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control}
 *                oControl an object representation of the control that should be rendered
 */
sap.m.StandardTileRenderer._renderContent = function(rm, oTile) {

	rm.write("<div"); // Start top row
	rm.addClass("sapMStdTileTopRow");	
	rm.writeClasses();
	rm.write(">");
	if (oTile.getIcon()) {
		rm.write("<div");
		rm.addClass("sapMStdTileIconDiv");
		
		switch(oTile.getType()) {
			case sap.m.StandardTileType.Monitor:
				rm.addClass("sapMStdIconMonitor");
				break;
			case sap.m.StandardTileType.Create:
				rm.addClass("sapMStdIconCreate");
				break;
		}
		rm.writeClasses();
		rm.write(">");
		rm.renderControl(oTile._getImage());
		rm.write("</div>");
	}
	
	
	if (oTile.getNumber()) {
		
		rm.write("<div");
		rm.addClass("sapMStdTileNumDiv");
		rm.writeClasses();
		rm.write(">");
		
		rm.write("<div");
		rm.writeAttribute("id", oTile.getId() + "-number");
		
		var numberLength = oTile.getNumber().length;
		if (numberLength < 5){
			rm.addClass("sapMStdTileNum");
		} else if (numberLength < 8){
			rm.addClass("sapMStdTileNumM");
		} else {
			rm.addClass("sapMStdTileNumS");
		}			
		
		rm.writeClasses();
		rm.write(">");
		rm.writeEscaped(oTile.getNumber());
		rm.write("</div>");
	
		if (oTile.getNumberUnit()) {
			rm.write("<div");
			rm.writeAttribute("id", oTile.getId() + "-numberUnit");
			rm.addClass("sapMStdTileNumUnit");
			rm.writeClasses();
			rm.write(">");
			rm.writeEscaped(oTile.getNumberUnit());
			rm.write("</div>");
		}	
		rm.write("</div>"); // End number div
	}
	rm.write("</div>"); // End top row div
	
	
	rm.write("<div"); // Start monitoring tile styling
	rm.addClass("sapMStdTileBottomRow");
	if(oTile.getType() === sap.m.StandardTileType.Monitor) {
		rm.addClass("sapMStdTileMonitorType");
	}
	rm.writeClasses();
	rm.write(">");
	
	rm.write("<div");  // Start title div
	rm.writeAttribute("id", oTile.getId() + "-title");
	rm.addClass("sapMStdTileTitle");
	rm.writeClasses();
	rm.write(">");
	if (oTile.getTitle()) {
		rm.writeEscaped(oTile.getTitle());
	}
	rm.write("</div>"); // End title div
	
	if(oTile.getInfo()) {
		rm.write("<div"); // Start info
		rm.writeAttribute("id", oTile.getId() + "-info");
		rm.addClass("sapMStdTileInfo");
		rm.addClass("sapMStdTileInfo" + oTile.getInfoState());
		rm.writeClasses();
		rm.write(">");
		if (oTile.getInfo()) {
			rm.writeEscaped(oTile.getInfo());
		}
		rm.write("</div>"); // End info
	}
	rm.write("</div>"); // End bottom row type tile styling
	
};
