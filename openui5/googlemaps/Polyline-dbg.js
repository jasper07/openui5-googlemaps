/**
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
                        type: 'string',
                        bindable: 'bindable'
                    },
                    'strokeOpacity': {
                        type: 'float',
                        bindable: 'bindable',
                    },
                    'strokeWeight': {
                        type: 'float',
                        bindable: 'bindable',
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
                events: {
                    'click': {},
                    'dragEnd': {}
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
            this.polyline = new gmaps.Polyline(this.getOptions());
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

        Polyline.prototype.exit = function() {
            this.polyline.setMap(null);
        };

        return Polyline;

    }, /* bExport= */ true);