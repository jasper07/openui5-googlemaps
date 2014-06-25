sap.ui.define(['jquery.sap.global', 'sap/ui/core/Control', 'google.maps', './MapUtils'],
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