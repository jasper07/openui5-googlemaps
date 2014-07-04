/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.PasswordField");jQuery.sap.require("sap.ui.commons.library");jQuery.sap.require("sap.ui.commons.TextField");sap.ui.commons.TextField.extend("sap.ui.commons.PasswordField",{metadata:{library:"sap.ui.commons"}});
sap.ui.commons.PasswordField.prototype.onfocusin=function(e){sap.ui.commons.TextField.prototype.onfocusin.apply(this,arguments);if(!sap.ui.Device.support.input.placeholder&&this.getPlaceholder()){jQuery(this.getInputDomRef()).attr("type","password")}};
sap.ui.commons.PasswordField.prototype.onsapfocusleave=function(e){if(!sap.ui.Device.support.input.placeholder&&this.getPlaceholder()){var i=jQuery(this.getInputDomRef());if(!i.val()){i.removeAttr("type")}}sap.ui.commons.TextField.prototype.onsapfocusleave.apply(this,arguments)};
