/**
 * openui5-googlemaps - OpenUI5 Google Maps library
 * @version v0.0.27
 * @link http://jasper07.github.io/openui5-googlemaps/
 * @license MIT
 */sap.ui.define(["jquery.sap.global"],
    function(jQuery) {
        "use strict";
        var ScriptsUtil = {};

        ScriptsUtil.params = {};

        ScriptsUtil.setApiKey = function(sKey) {
            this.params.key = sKey;
        };

        ScriptsUtil.setUrl = function(sUrl) {
            this.params.url = sUrl;
        };

        ScriptsUtil.setParams = function(oParams) {
            jQuery.extend(this.params, oParams);
        };

        ScriptsUtil.getParams = function() {
            return this.params;
        };

        return ScriptsUtil;
    }, true);