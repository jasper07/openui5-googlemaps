/**
 * openui5-googlemaps - OpenUI5 Google Maps library
 * @version v0.0.0
 * @link http://jasper07.github.io/openui5-googlemaps/
 * @license MIT
 */sap.ui.define(['jquery.sap.global', 'openui5/googlemaps/ScriptsUtil'],
    function(jQuery, ScriptsUtil) {
        "use strict";

        var LoadScripts = (function() {
            var Loader = {};

            Loader.defaultUrl = 'http://maps.google.com/maps/api/js?sensor=true&callback=google.maps.callBack';

            // Loader.defaultUrl = 'https://maps.googleapis.com/maps/api/js?libraries=places&callback=%callback%',
            Loader.notifyEvent = "google.maps.loaded";

            Loader.callBack = function() {
                this.loaded = true;
                sap.ui.getCore().getEventBus().publish(this.notifyEvent);
            };

            Loader.load = function(Util) {
                var sScriptUrl = Util.getUrl() ? Util.getUrl() : this.defaultUrl;

                if (Util.getApiKey()) {
                    sScriptUrl = sScriptUrl + '&key=' + Util.getApiKey();
                }

                //async load the scripts, provides namespace
                jQuery.sap.includeScript(sScriptUrl, "google.maps", null, null);

            };
            return Loader;
        })();

        LoadScripts.load(ScriptsUtil);
        return LoadScripts;
    }, true);