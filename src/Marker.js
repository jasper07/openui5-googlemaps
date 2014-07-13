sap.ui.define(['jquery.sap.global', 'sap/ui/core/Control', 'google.maps', './Animation'],
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
                        type: 'any',
                        bindable: 'bindable'
                    },
                    'visible': {
                        type: 'boolean',
                        bindable: 'bindable',
                        defaultValue: true
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
            this.delayedCallId = jQuery.sap.delayedCall(0, this, function() {
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

        Marker.prototype.setVisible = function(bValue) {
            this.setProperty('visible', bValue, true);
            if (this.marker) {
                this.marker.setVisible(this.getVisible());
            }
        };

        Marker.prototype.setICon = function(oValue) {
            this.setProperty('icon', oValue, true);
            if (this.marker) {
                this.marker.setIcon(this.getIcon());
            }
        };

        Marker.prototype.getMap = function() {
            return this.map;
        };

    Marker.prototype.setMap = function(map) {
            this.map = map;
        };

        Marker.prototype.setMarker = function() {
            if (!this.marker) {
                this.marker = new Gmaps.Marker(this.getOptions());
                this.marker.setMap(this.map);
                this.addListener('click', jQuery.proxy(this.onClick, this));

                if (this.getDraggable()) {
                    this.addListener('dragend', jQuery.proxy(this.onDragEnd, this));
                }
            } else {
                this.marker.setMap(this.map);
                this.marker.setOptions(this.getOptions());
            }

            if (this.getInfo() && !this.infoWindow) {
                //http://stackoverflow.com/questions/1554893/google-maps-api-v3-infowindow-not-sizing-correctly
                this.infoWindow = new Gmaps.InfoWindow({
                    content: this.getInfo(),
                    maxWidth: this.iwMaxWidth
                });
                this.aListeners.push(Gmaps.event.addListener(this.infoWindow, 'closeclick',
                    jQuery.proxy(this.onInfoWindowClose, this)));
            } else {
                if (this.infoWindow) {
                    this.infoWindow.setContent(this.getInfo());
                }
            }
        };

        Marker.prototype.getOptions = function() {
            var options = {};
            options.position = new Gmaps.LatLng(this.getLat(), this.getLng());
            options.draggable = this.getDraggable();
            options.animation = this.getAnimation();
            options.visible = this.getVisible();
            options.icon = this.getIcon();
            return options;
        };

        Marker.prototype.onMapRendered = function(map) {
            this.setMap(map);
            this.setMarker();
        };

        Marker.prototype.addListener = function(event, callback, object) {
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

        Marker.prototype.reset = function() {
            if (this.marker) {
                this.removeListeners();
                this.marker.setMap(null);
            }
        };

        Marker.prototype.onReset = function() {
            this.reset();
        };

        Marker.prototype.exit = function() {
            this.reset();
        };

        return Marker;

    }, /* bExport= */ true);