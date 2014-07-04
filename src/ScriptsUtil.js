sap.ui.define(['jquery.sap.global'],
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