/**
 * openui5-googlemaps - OpenUI5 Google Maps library
 * @version v0.0.0
 * @link http://jasper07.github.io/openui5-googlemaps/
 * @license MIT
 */sap.ui.define(['jquery.sap.global', 'sap/ui/core/Control', 'google.maps', './Animation'],
    function(jQuery, Control, Gmaps, Animation) {
        "use strict";

        var Marker = Control.extend('openui5.googlemaps.Marker', {
            metadata: {
                properties: {
                    'lat': {
                        type: 'float',
                        bindable: 'bindable',
                    },
                    'lng': {
                        type: 'float',
                        bindable: 'bindable',
                    },
                    'draggable': {
                        type: 'boolean',
                        bindable: 'bindable',
                        defaultValue: false
                    },
                    'info': {
                        type: 'string',
                        bindable: 'bindable'
                    },
                    'icon': {
                        type: 'sap.ui.core.URI',
                        bindable: 'bindable'
                    },
                    'animation': {
                        type: 'int',
                        bindable: 'bindable',
                        defaultValue: Animation.DROP
                    }
                },
                events: {
                    'click': {},
                    'dragEnd': {},
                    'infoWindowClose': {}
                },
                renderer: {}
            }
        });

        Marker.prototype.init = function() {
            this._dragging = false;
            this.aListeners = [];
            this.iwMaxWidth = 360;
        };

        Marker.prototype.updatePosition = function() {
            if (!this.marker || this.getLat() === null || this.getLng() === null) {
                return;
            }

            jQuery.sap.clearDelayedCall(this.delayedCallId);
            this.delayedCallId = jQuery.sap.delayedCall(100, this, function() {
                this.marker.setPosition(new Gmaps.LatLng(this.getLat(), this.getLng()));
            });
        };

        Marker.prototype.setLat = function(oValue) {
            this.setProperty('lat', parseFloat(oValue), true);
            this.updatePosition();
        };

        Marker.prototype.setLng = function(oValue) {
            this.setProperty('lng', parseFloat(oValue), true);
            this.updatePosition();
        };

        Marker.prototype.setICon = function() {
            if (this.marker) {
                this.marker.setIcon(this.getIcon());
            }
        };

        Marker.prototype.mapReady = function() {
            this.marker = new Gmaps.Marker(this.getOptions());
            this.marker.setMap(this.map);

            this.addListener('click', jQuery.proxy(this.onClick, this));

            if (this.getDraggable()) {
                this.addListener('dragend', jQuery.proxy(this.onDragEnd, this));
            }

            this.infoWindow = undefined;

            if (this.getInfo()) {
                //http://stackoverflow.com/questions/1554893/google-maps-api-v3-infowindow-not-sizing-correctly
                this.infoWindow = new Gmaps.InfoWindow({
                    content: this.getInfo(),
                    maxWidth: this.iwMaxWidth
                });
                Gmaps.event.addListener(this.infoWindow, 'closeclick', jQuery.proxy(this.onInfoWindowClose, this));
            }
        };

        Marker.prototype.getOptions = function() {
            var options = {};
            options.position = new Gmaps.LatLng(this.getLat(), this.getLng());
            options.draggable = this.getDraggable();
            options.animation = this.getAnimation();
            options.icon = this.getIcon();
            return options;
        };

        Marker.prototype.onMapRendered = function(map) {
            this.map = map;
            this.mapReady();
        };

        Marker.prototype.addListener = function(event, callback) {
            this.aListeners.push(Gmaps.event.addListener(this.marker, event, callback));
        };

        Marker.prototype.removeListeners = function() {
            this.aListeners.forEach(function(oListener) {
                oListener.remove();
            });

            this.aListeners = [];
        };

        Marker.prototype.infoWindowOpen = function(bClose) {
            this.infoWindow.open(this.map, this.marker);

            if (bClose) {
                jQuery.sap.delayedCall(2000, this, function() {
                    this.infoWindowclose();
                });
            }
        };

        Marker.prototype.infoWindowClose = function() {
            this.infoWindow.close();
        };

        Marker.prototype.onClick = function() {
            if (this.infoWindow) {
                this.infoWindowOpen();
            }

            this.fireClick({
                map: this.map,
                marker: this.marker,
                context: this.getBindingContext(),
                location: {
                    lat: this.getLat(),
                    lng: this.getLng()
                }
            });
        };

        Marker.prototype.onDragEnd = function() {
            var oPosition = this.marker.getPosition();

            this.setLat(oPosition.lat());
            this.setLng(oPosition.lng());

            this.fireDragEnd({
                position: oPosition
            });
        };

        Marker.prototype.onInfoWindowClose = function() {
            this.fireInfoWindowClose({});
        };

        Marker.prototype.exit = function() {
            this.removeListeners();
            this.marker.setMap(null);
        };

        return Marker;

    }, /* bExport= */ true);