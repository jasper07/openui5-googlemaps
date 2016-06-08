/**
 * openui5-googlemaps - OpenUI5 Google Maps library
 * @version v0.0.27
 * @link http://jasper07.github.io/openui5-googlemaps/
 * @license MIT
 */sap.ui.define(['jquery.sap.global', 'openui5/googlemaps/ScriptsUtil'],
    function(jQuery, ScriptsUtil) {
        "use strict";

        var LoadScripts = (function() {
            var Loader = {};

            Loader.defaultUrl = location.protocol.replace('file', 'https') + '//maps.google.com/maps/api/js?';
            Loader.notifyEvent = "google.maps.loaded";
            Loader.callbackName = 'google.maps.callBack';

            Loader.isLoaded = new Promise(function(fnResolve) {
                Loader.callBack = function() {
                    this.loaded = true;
                    sap.ui.getCore().getEventBus().publish(this.notifyEvent);
                    fnResolve();
                };
            });

            Loader.load = function(Util) {
                var params = {};
                var utilParams = Util.getParams();
                var sUrl = utilParams.url ? utilParams.url : this.defaultUrl;

                if (!jQuery.sap.endsWith(sUrl, "?")) {
                    sUrl += '?';
                }

                if (utilParams.v) {
                    params.v = utilParams.v;
                }

                params.sensor = utilParams.sensor || true;

                if (utilParams.libraries) {
                    params.libraries = utilParams.libraries;
                }

                if (utilParams.language) {
                    params.language = utilParams.language;
                }

                if (utilParams.key) {
                    params.key = utilParams.key;
                }

                params.callback = this.callbackName;

                var sScriptUrl = sUrl.concat(jQuery.param(params));

                //async load the scripts, provides namespace
                jQuery.sap.includeScript(sScriptUrl, "google.maps", null, null);

            };
            return Loader;
        })();

        LoadScripts.load(ScriptsUtil);
        return LoadScripts;
    }, true);
