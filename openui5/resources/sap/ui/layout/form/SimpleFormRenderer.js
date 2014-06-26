/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.layout.form.SimpleFormRenderer");sap.ui.layout.form.SimpleFormRenderer={};
sap.ui.layout.form.SimpleFormRenderer.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapUiSimpleForm");r.writeClasses();r.write(">");var f=c.getAggregation("form");r.renderControl(f);r.write("</div>")};
