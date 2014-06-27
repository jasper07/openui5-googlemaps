/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
// Creates Index Page within the Demokit
jQuery.sap.declare("sap.ui.demokit.IndexLayoutPage");
jQuery.sap.require("jquery.sap.encoder");
jQuery.sap.require("sap.ui.demokit.IndexLayout");
jQuery.sap.require("sap.ui.model.json.JSONModel");
jQuery.sap.require("sap.ui.core.IconPool");


sap.ui.demokit.IndexLayoutPage = function IndexPage(oData, sTarget, sBaseUrl, bCustomFont) {
	
	var oModel = new sap.ui.model.json.JSONModel(oData);
	sap.ui.getCore().setModel(oModel);
	
	var oCatIndex = new sap.ui.demokit.IndexLayoutPage.Repeat({
		categories: {
	        path: "/categories", 
	        template: new sap.ui.demokit.IndexLayoutPage.Cat({
	        	title: "{text}",
	        	layout: new sap.ui.demokit.IndexLayout({
	        		enableScaling: true,
	        		content: {
	        	        path: "links", 
	        	        template: new sap.ui.demokit.IndexLayout._Tile({
	        	    		title: "{text}",
	        	    		description: "{desc}",
	        	    		target: sTarget,
	        	    		icon: {
	        	    			path: "icon",
	        	    			formatter: function(ico){
	        	    				if(!ico){
	        	    					ico = "learning-assistant";
	        	    				}
	        	    				return "sap-icon://" + ico;
	        	    			}
	        	    		},
	        	    		href: "{ref}"
	        	    	})
	        	    }
	        	})
	        })
	    }
	});
	
	if(bCustomFont){
		sap.ui.core.IconPool.addIcon("explored", "custom", "brandico", "e001", true);
		sap.ui.core.IconPool.addIcon("cart", "custom", "brandico", "e002", true); //Obsolete?
		sap.ui.core.IconPool.addIcon("makit", "custom", "brandico", "e005", true); //Obsolete?
		sap.ui.core.IconPool.addIcon("helloworld", "custom", "brandico", "e003", true); //Obsolete?
		sap.ui.core.IconPool.addIcon("poa", "custom", "brandico", "e007", true); //Obsolete?
		sap.ui.core.IconPool.addIcon("flexbox", "custom", "brandico", "e00A", true); //Obsolete?
		sap.ui.core.IconPool.addIcon("crud", "custom", "brandico", "e009", true); //Obsolete?
		sap.ui.core.IconPool.addIcon("icon-explorer", "custom", "brandico", "e006", true); //Obsolete?
		sap.ui.core.IconPool.addIcon("splitapp", "custom", "brandico", "e00C", true);
		sap.ui.core.IconPool.addIcon("mvc", "custom", "brandico", "e00B", true); //Obsolete?
	}
	
	sap.ui.getCore().attachInit(function(){
		if(bCustomFont){
			var sFontBaseUrl = jQuery.sap.getModulePath("", "/../test-resources/sap/m/demokit/demokit-home/");
			sap.ui.demokit.IndexLayoutPage._introduceCustomFont("brandico", sFontBaseUrl, "demoAppsIconFont");
		}
		
		jQuery("body").append("<div id='root'></div>");
		oCatIndex.placeAt("root");
	});
};


sap.ui.core.Element.extend("sap.ui.demokit.IndexLayoutPage.Cat", {
	metadata : {
        properties : {
            "title" : "string"
        },
        aggregations : {
        	"layout": {type : "sap.ui.demokit.IndexLayout", multiple : false}
        }
    }
});


sap.ui.core.Control.extend("sap.ui.demokit.IndexLayoutPage.Repeat", {
	metadata : {
        aggregations : {
            "categories" : {type : "sap.ui.demokit.IndexLayoutPage.Cat", multiple : true}
        }
    },
	
	renderer: function(oRm, oControl) {
		oRm.write("<div");
		oRm.writeControlData(oControl);
		oRm.write(">");
		
		var aCats = oControl.getCategories();
		for(var i=0; i<aCats.length; i++){
			oRm.write("<div");
			oRm.writeElementData(aCats[i]);
			oRm.write(">");
			if(aCats[i].getTitle()){
				oRm.write("<h2>");
				oRm.writeEscaped(aCats[i].getTitle());
				oRm.write("</h2>");
			}
			oRm.renderControl(aCats[i].getLayout());
			oRm.write("</div>");
		}
		
		oRm.write("</div>");
	}
});


sap.ui.demokit.IndexLayoutPage._introduceCustomFont = function(sFamilyName, sFontPath, sFontFile){
	var sFontFace = "@font-face {" +
		"font-family: '"+sFamilyName+"';" +
		"src: url('"+ sFontPath + sFontFile +".eot');" +
		"src: url('"+ sFontPath + sFontFile +".eot?#iefix') format('embedded-opentype'), url('"+ sFontPath + sFontFile +".ttf') format('truetype');" +
		"font-weight: normal;" +
		"font-style: normal;" +
		"}";
	jQuery('head').append('<style type="text/css">' + sFontFace +'</style>');
};