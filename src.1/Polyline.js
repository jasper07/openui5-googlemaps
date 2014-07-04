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

        Polyline.prototype.setVisible = function(bValue) {
            this.setProperty('visible', bValue, true);
            if (this.polyline) {
                this.polyline.setVisible(this.getVisible());
            }
        };

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
                this.polyline.setMap(this.map);
            } else {
                this.polyline.setMap(this.map);
                this.polyline.setOptions(this.getOptions());
            }

        };

        Polyline.prototype.getOptions = function() {
            var options = {};
            options.path = this.parsePath();
            options.strokeColor = this.getStrokeColor();
            options.strokeOpacity = this.getStrokeOpacity();
            options.strokeWeight = this.getStrokeWeight();
            options.visible = this.getVisible();
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