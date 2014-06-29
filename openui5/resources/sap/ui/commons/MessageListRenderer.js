/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.MessageListRenderer");sap.ui.commons.MessageListRenderer={};
sap.ui.commons.MessageListRenderer.render=function(r,c){var a=r;a.write('<ul class="sapUiMsgList"');a.writeControlData(c);a.write(">");for(var i=c.aMessages.length-1;i>=0;i--){a.write('<li class="sapUiMsgListLi">');a.renderControl(c.aMessages[i]);a.write("</li>")}a.write("</ul>")};
