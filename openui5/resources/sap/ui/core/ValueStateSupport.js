/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var V={};var t=null;var e=function(){if(!t){t={};var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.core");t[sap.ui.core.ValueState.Error]=r.getText("VALUE_STATE_ERROR");t[sap.ui.core.ValueState.Warning]=r.getText("VALUE_STATE_WARNING");t[sap.ui.core.ValueState.Success]=r.getText("VALUE_STATE_SUCCESS")}};V.enrichTooltip=function(E,T){if(!T&&E.getTooltip()){return undefined}if(E.getValueState){var s=E.getValueState();if(s&&(s!=sap.ui.core.ValueState.None)){e();return(T?T+" - ":"")+t[s]}}return T};V.getAdditionalText=function(E){var r=null;if(E.getValueState){var s=E.getValueState();if(s&&(s!=sap.ui.core.ValueState.None)){e();r=t[s]}}return r};return V},true);
