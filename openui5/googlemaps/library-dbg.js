/**
 * openui5-googlemaps - OpenUI5 Google Maps library
 * @version v0.0.7
 * @link http://jasper07.github.io/openui5-googlemaps/
 * @license MIT
 */sap.ui.define(['jquery.sap.global', 'sap/ui/core/Core', 'sap/ui/core/library'],
    function(jQuery) {

        "use strict";
        (function() {

            var sPath = jQuery.sap.getResourcePath("openui5/googlemaps/loadScripts");
            jQuery.sap.registerResourcePath('google.maps', sPath);
            jQuery.sap.require('openui5.googlemaps.ScriptsUtil');

            //preload types
            jQuery.sap.require('openui5.googlemaps.MapTypeId');
            jQuery.sap.require('openui5.googlemaps.Animation');
            jQuery.sap.require('openui5.googlemaps.TravelMode');


            // delegate further initialization of this library to the Core
            sap.ui.getCore().initLibrary({
                name: "openui5.googlemaps",
                dependencies: ["sap.ui.core"],
                types: [
                    "openui5.googlemaps.MapTypeId",
                    "openui5.googlemaps.Animation",
                    "openui5.googlemaps.TravelMode"
                ],
                interfaces: [],
                controls: [
                    "openui5.googlemaps.Map",
                    "openui5.googlemaps.Marker",
                    "openui5.googlemaps.Polyline",
                    "openui5.googlemaps.Polygon",
                    "openui5.googlemaps.Directions"
                ],
                elements: [],
                version: "0.0.7"

            });
        })();
        return true;
    }, true);