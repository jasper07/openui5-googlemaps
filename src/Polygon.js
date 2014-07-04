sap.ui.define(['jquery.sap.global', 'sap/ui/core/Control', 'google.maps', './MapUtils'],
    function(jQuery, Control, gmaps, utils) {
        "use strict";

        var Polygon = Control.extend('openui5.googlemaps.Polygon', {
            metadata: {
                properties: {
                    'strokeColor': {
                        type: "sap.ui.core.CSSColor",
                        group: "Appearance",
                        defaultValue: null
                    },
                    'strokeOpacity': {
                        type: 'float',
                        bindable: 'bindable',
                    },
                    'strokeWeight': {
                        type: 'float',
                        bindable: 'bindable',
                    },
                    'fillColor': {
                        type: 'string',
                        bindable: 'bindable'
                    },
                    'fillOpacity': {
                        type: 'float',
                        bindable: 'bindable',
                    },
                    'paths': {
                        type: "object"
                    },
                    'visible': {
                        type: 'boolean',
                        bindable: 'bindable',
                        defaultValue: true
                    },
                    'draggable': {
                        type: "boolean"
                    }
                },
                renderer: {}
            }
        });

        Polygon.prototype.setVisible = function(bValue) {
            this.setProperty('visible', bValue, true);
            if (this.polygon) {
                this.polygon.setVisible(this.getVisible());
            }
        };

        Polygon.prototype.parsePaths = function() {
            var aPaths = [];

            this.getPaths().forEach(function(obj) {
                aPaths.push(utils.objToLatLng(obj));
            });

            return aPaths;
        };

        Polygon.prototype.createPolygon = function() {
            if (!this.polygon) {
                this.polygon = new gmaps.Polygon(this.getOptions());
                this.polygon.setMap(this.map);
            } else {
                this.polygon.setMap(this.map);
                this.polygon.setOptions(this.getOptions());
            }
        };

        Polygon.prototype.getOptions = function() {
            var options = {};
            options.paths = this.parsePaths();
            options.strokeColor = this.getStrokeColor();
            options.strokeOpacity = this.getStrokeOpacity();
            options.strokeWeight = this.getStrokeWeight();
            options.fillOpacity = this.getFillOpacity();
            options.fillColor = this.getFillColor();
            options.visible = this.getVisible();
            options.draggable = this.getDraggable();
            return options;
        };

        Polygon.prototype.onMapRendered = function(map) {
            this.map = map;
            this.createPolygon();
        };

        Polygon.prototype.onReset = function() {
            this.reset();
        };

        Polygon.prototype.reset = function() {
            if (this.polygon) {
                this.polygon.setMap(null);
            }
        };

        Polygon.prototype.exit = function() {
            this.reset();
        };

        return Polygon;

    }, /* bExport= */ true);