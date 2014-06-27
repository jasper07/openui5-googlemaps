/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.SegmentedButtonRenderer");sap.ui.commons.SegmentedButtonRenderer={};
sap.ui.commons.SegmentedButtonRenderer.render=function(r,c){var a=r,b=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons"),t=b.getText("SEGMENTEDBUTTON_ARIA_SELECT");if(!c.getVisible()){return}a.write("<span");a.writeControlData(c);a.addClass("sapUiSegmentedButton");a.writeClasses();a.write(">");a.write('<span id="'+c.getId()+'-radiogroup"');a.writeAccessibilityState(c,{role:"radiogroup",disabled:!c.getEnabled()});a.write(">");this.renderButtons(a,c);a.write("</span>");a.write('<span id="'+c.getId()+'-label" style="visibility: hidden; display: none;">');a.writeEscaped(t);a.write('</span>');a.write("</span>")};
sap.ui.commons.SegmentedButtonRenderer.renderButtons=function(r,c){var a=r,b=c.getButtons();jQuery.each(b,function(i,B){a.renderControl(B)})};
