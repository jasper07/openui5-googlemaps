/**
 * openui5-googlemaps - OpenUI5 Google Maps library
 * @version v0.0.4
 * @link http://jasper07.github.io/openui5-googlemaps/
 * @license MIT
 */sap.ui.define(['jquery.sap.global'],
    function(jQuery) {
        "use strict";
        var ScriptsUtil = {};
        ScriptsUtil.setApiKey = function(sKey) {
            this.apiKey = sKey;
        };

        ScriptsUtil.getApiKey = function() {
            return this.apiKey;
        };

        ScriptsUtil.setUrl = function(sUrl) {
            this.baseUrl = sUrl;
        };

        ScriptsUtil.getUrl = function() {
            return this.baseUrl;
        };
        return ScriptsUtil;
    }, true);