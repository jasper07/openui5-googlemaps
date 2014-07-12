sap.ui.define(['jquery.sap.global'],
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