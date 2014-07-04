/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.FormattedTextViewRenderer");sap.ui.commons.FormattedTextViewRenderer={};
sap.ui.commons.FormattedTextViewRenderer.render=function(r,c){if(!c.getVisible()){return}var a=/<embed\s+data-index="([0-9]+)"\s*\/?>/gim;var h=c.getHtmlText();var i=c.getControls().slice();var t=i.length;var l=0;var m=[];r.write("<span");r.writeControlData(c);r.addClass("sapUiFTV");r.writeClasses();if(c.getTooltip_AsString()){r.writeAttributeEscaped("title",c.getTooltip_AsString())}r.write(">");while(m=a.exec(h)){r.write(h.slice(l,m.index));if(this._renderReplacement(r,m[1],i)){t--}else{jQuery.sap.log.warning("Could not find matching control to placeholder #"+m[1])}l=a.lastIndex}r.write(h.slice(l,h.length));if(t>0){jQuery.sap.log.warning('There are leftover controls in the aggregation that have not been used in the formatted text',c)}r.write("</span>")};
sap.ui.commons.FormattedTextViewRenderer._renderReplacement=function(r,c,C){if(C[c]){r.renderControl(C[c]);C[c]=null;return true}else return false};
