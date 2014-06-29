sap.ui.define(['jquery.sap.global', 'sap/ui/core/Control', 'google.maps', './MapUtils', './MapTypeId'],
    function(jQuery, Control, Gmaps, MapUtils, MapTypeId) {
        "use strict";
        var Map = Control.extend('openui5.googlemaps.Map', {
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
                    'width': {
                        type: 'sap.ui.core.CSSSize',
                        group: 'Dimension',
                        defaultValue: 'auto'
                    },
                    'height': {
                        type: 'sap.ui.core.CSSSize',
                        group: 'Dimension',
                        defaultValue: '10rem'
                    },
                    'zoom': {
                        type: 'int',
                        defaultValue: 8
                    },
                    'disableDefaultUI': {
                        type: 'boolean',
                        defaultValue: true
                    },
                    'mapTypeId': {
                        type: 'string',

                        defaultValue: MapTypeId.ROADMAP
                    },
                    'panControl': {
                        type: 'boolean',
                        defaultValue: false
                    },
                    'zoomControl': {
                        type: 'boolean',
                        defaultValue: false
                    },
                    'mapTypeControl': {
                        type: 'boolean',
                        defaultValue: false
                    },
                    'streetViewControl': {
                        type: 'boolean',
                        defaultValue: false
                    }
                },
                defaultAggregation: "markers",
                aggregations: {
                    'markers': {
                        type: 'openui5.googlemaps.Marker',
                        multiple: true,
                        bindable: 'bindable'
                    },
                    'polylines': {
                        type: 'openui5.googlemaps.Polyline',
                        multiple: true,
                        bindable: 'bindable'
                    },
                    'polygons': {
                        type: 'openui5.googlemaps.Polygon',
                        multiple: true,
                        bindable: 'bindable'
                    }
                },
                events: {
                    'change': {},
                    'ready': {}
                }
            },
            renderer: function(oRm, oControl) {
                oRm.write('<div ');
                oRm.writeControlData(oControl);
                oRm.addStyle("width", 'auto');
                oRm.addStyle("height", 'auto');
                oRm.writeClasses();
                oRm.writeStyles();
                oRm.write('>');

                oRm.write("<div");
                oRm.writeAttribute("id", oControl.getId() + "-map");
                oRm.addStyle("width", oControl.getWidth());
                oRm.addStyle("height", oControl.getHeight());
                oRm.writeStyles();
                oRm.write(">");
                oRm.write('</div>');
            }
        });

        Map.prototype.init = function() {
            this._dragging = false;
            this.aListeners = [];
            this.mapId = this.getId() + "-map";
        };

        Map.prototype.setZoom = function(iValue) {
            this.setProperty('zoom', iValue, true);
            if (this.map && iValue !== this.map.getZoom()) {
                this.map.setZoom(iValue);
            }
        };

        Map.prototype.setLat = function(oValue) {
            this.setProperty('lat', parseFloat(oValue), true);
            this._updateCenter();
        };

        Map.prototype.setLng = function(oValue) {
            this.setProperty('lng', parseFloat(oValue), true);
            this._updateCenter();
        };

        Map.prototype._updateCenter = function() {
            if (!this.map || this.getLat() == null || this.getLng() == null) {
                return;
            }

            // delay if lat and lng updated through binding
            jQuery.sap.clearDelayedCall(this.delayedCallId);
            this.delayedCallId = jQuery.sap.delayedCall(100, this, function() {
                this.map.panTo(new Gmaps.LatLng(this.getLat(), this.getLng()));
            });

        };

        Map.prototype.setMapTypeId = function(sValue) {
            this.setProperty('mapTypeId', sValue, true);
            if (this.map && sValue !== this.map.getMapTypeId()) {
                this.map.setMapTypeId(sValue);
            }
        };

        Map.prototype.setZoomControl = function(bValue) {
            this.setProperty('zoomControl', bValue, true);
            if (this.map && bValue !== this.map.getZoomControl()) {
                this.map.setZoomControl(bValue);
            }
        };

        Map.prototype.setDisableDefaultUi = function(bValue) {
            this.setProperty('disableDefaultUi', bValue, true);
            if (this.map) {
                this.map.setOptions({
                    disableDefaultUI: this.disableDefaultUI
                });
            }
        };

        Map.prototype._getMapOptions = function() {
            var mapOptions = {};
            mapOptions.zoom = this.getZoom();
            mapOptions.center = new Gmaps.LatLng(this.getLat(), this.getLng());
            mapOptions.disableDefaultUi = this.getDisableDefaultUI();
            mapOptions.mapTypeId = this.getMapTypeId();
            mapOptions.panControl = this.getPanControl();
            mapOptions.zoomControl = this.getZoomControl();
            mapOptions.mapTypeControl = this.getMapTypeControl();
            mapOptions.streetViewControl = this.getStreetViewControl();
            return mapOptions;
        };

        Map.prototype.onAfterRendering = function() {
            if (this.map) {
                this.resetMap();
                // this.map = undefined;

                //TODO map is attached to DOM, on render dom gets rewritten, find a way to reattach 
                // this.trigger('resize');
                // this.map.setOptions(this._getMapOptions());
                // return false;
            }

            // if (!this.map) {
            this.createMap();
            // }
        };

        Map.prototype.createMap = function() {
            //if map not loaded yet subscribe to its event    
            if (Gmaps.loaded === undefined) {
                if (this.subscribed === undefined) {
                    sap.ui.getCore().getEventBus().subscribe(Gmaps.notifyEvent, this.createMap, this);
                    this.subscribed = true;
                }
                return false;
            }

            //  create map
            this.map = new Gmaps.Map(jQuery.sap.byId(this.mapId)[0], this._getMapOptions());

            // set up listeners
            this.addListener('drag', jQuery.proxy(this.updateValues, this));
            this.addListener('zoom_changed', jQuery.proxy(this.updateValues, this));
            this.addListener('center_changed', jQuery.proxy(this.updateValues, this));
            this.addListener('bounds_changed', jQuery.proxy(this.updateValues, this));
            this.addListener('maptypeid_changed', jQuery.proxy(this.updateValues, this));
            this.addListener('resize', jQuery.proxy(this.updateValues, this));

            // notify markers, polylines and poloygons
            this._notifyMarkers('MapRendered', this.map);
            this._notifyPolylines('MapRendered', this.map);
            this._notifyPolygons('MapRendered', this.map);

            // fire map ready event
            this.fireReady({
                map: this.map,
                context: this.getBindingContext(),
                lat: this.getLat(),
                lng: this.getLng()
            });
        };

        Map.prototype.addListener = function(event, callback) {
            this.aListeners.push(Gmaps.event.addListener(this.map, event, callback));
        };

        Map.prototype.removeListeners = function() {
            this.aListeners.forEach(function(oListener) {
                oListener.remove();
            });
            this.aListeners = [];
        };

        Map.prototype.trigger = function(event) {

            Gmaps.event.trigger(this.map, event);
        };

        Map.prototype.isDragging = function() {
            this._dragging = true;
        };

        Map.prototype.isNotDragging = function() {
            this._dragging = false;
        };

        Map.prototype.updateValues = function() {
            //sync maps values with control
            var center = MapUtils.latLngToObj(this.map.getCenter());

            if (center.lat !== this.getLat()) {
                this.setProperty('lat', center.lat, true);
            }

            if (center.lng !== this.getLng()) {
                this.setProperty('lng', center.lng, true);
            }

            if (this.map.getZoom() !== this.getZoom()) {
                this.setZoom(this.map.getZoom());
            }

            if (this.map.getMapTypeId() !== this.getMapTypeId()) {
                this.setMapTypeId(this.map.getMapTypeId());
            }
        };

        Map.prototype.getMarkers = function() {
            return this.getAggregation("markers", []);
        };

        Map.prototype._notifyMarkers = function(action, param) {
            this.getMarkers().forEach(function(oMarker) {
                oMarker["on" + action](param);
            });
        };

        Map.prototype.getPolylines = function() {
            return this.getAggregation("polylines", []);
        };

        Map.prototype._notifyPolylines = function(action, param) {
            this.getPolylines().forEach(function(oPolyline) {
                oPolyline["on" + action](param);
            });
        };

        Map.prototype._notifyPolygons = function(action, param) {
            this.getPolygons().forEach(function(oPolygons) {
                oPolygons["on" + action](param);
            });
        };

        Map.prototype.resetMap = function() {
            this.removeListeners();
            if (this.map) {
                this.map.set(null);
            }
        };

        Map.prototype.exit = function() {
            this.resetMap();
            this.init();
        };

        return Map;

    }, /* bExport= */ true);