/**
 * openui5-googlemaps - OpenUI5 Google Maps library
 * @version v0.0.0
 * @link http://jasper07.github.io/openui5-googlemaps/
 * @license MIT
 */sap.ui.define(['jquery.sap.global', 'openui5/googlemaps/ScriptsUtil'],
    function(jQuery, ScriptsUtil) {
        "use strict";

        var LoaderScripts = (function() {
            var Loader = {};

            Loader.DEFAULT_BASE_URL = 'http://maps.google.com/maps/api/js?sensor=true&callback=google.maps.callBack';

            Loader.callBack = function() {
                this.loaded = true;
                sap.ui.getCore().getEventBus().publish("google.maps.loaded");
            };

            Loader.load = function(Util) {
                var sScriptUrl = Util.getUrl() ? Util.getUrl() : this.DEFAULT_BASE_URL;

                if (Util.getApiKey()) {
                    sScriptUrl = sScriptUrl + '&key=' + Util.getApiKey();
                }

                //async load the scripts
                jQuery.sap.includeScript(sScriptUrl, "google.maps", null, null);

            };
            return Loader;
        })();

        LoaderScripts.load(ScriptsUtil);
        return LoaderScripts;
    }, true);