/**
 * openui5-googlemaps - OpenUI5 Google Maps library
 * @version v0.0.0
 * @link http://jasper07.github.io/openui5-googlemaps/
 * @license MIT
 *//**
 * openui5-googlemaps - OpenUI5 Google Maps library
 * @version v0.0.0
 * @link http://jasper07.github.io/openui5-googlemaps/
 * @license MIT
 */sap.ui.define(['jquery.sap.global', 'sap/ui/core/Control', 'google.maps', './MapUtils'],
    function(jQuery, Control, gmaps, utils) {
        "use strict";

        var Polyline = Control.extend('openui5.googlemaps.Polyline', {
            metadata: {
                properties: {
                    'strokeColor': {
                        type: "sap.ui.core.CSSColor",
                        group: "Appearance",
                        defaultValue: null
                    },
                    'strokeOpacity': {
                        type: 'float'
                    },
                    'strokeWeight': {
                        type: 'float'
                    },
                    'icons': {
                        type: 'object'
                    },
                    'path': {
                        type: "object"
                    },
                    'draggable': {
                        type: "boolean"
                    }
                },
                renderer: {}
            }
        });

        Polyline.prototype.parsePath = function() {
            var aPath = [];

            this.getPath().forEach(function(obj) {
                aPath.push(utils.objToLatLng(obj));
            });

            return aPath;
        };

        Polyline.prototype.createPolyline = function() {
            if (!this.polyline) {
                this.polyline = new gmaps.Polyline(this.getOptions());
            }
            this.polyline.setMap(this.map);
        };

        Polyline.prototype.getOptions = function() {
            var options = {};
            options.path = this.parsePath();
            options.strokeColor = this.getStrokeColor();
            options.strokeOpacity = this.getStrokeOpacity();
            options.strokeWeight = this.getStrokeWeight();
            options.draggable = this.getDraggable();

            options.icons = this.getIcons();
            return options;
        };

        Polyline.prototype.onMapRendered = function(map) {
            this.map = map;
            this.createPolyline();
        };

        Polyline.prototype.onReset = function() {
            this.reset();
        };

        Polyline.prototype.reset = function() {
            if (this.polyline) {
                this.polyline.setMap(null);
            }
        };

        Polyline.prototype.exit = function() {
            this.reset();
        };

        return Polyline;

    }, /* bExport= */ true);