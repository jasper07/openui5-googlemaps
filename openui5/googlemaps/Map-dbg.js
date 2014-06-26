/**
 * openui5-googlemaps - OpenUI5 Google Maps library
 * @version v0.0.0
 * @link http://jasper07.github.io/openui5-googlemaps/
 * @license MIT
 */sap.ui.define(['jquery.sap.global', 'sap/ui/core/Control', 'google.maps', './MapUtils', './MapTypeId'],
    function(jQuery, Control, Gmaps, MapUtils, MapTypeId) {
        "use strict";
        var Map = Control.extend('openui5.googlemaps.Map', {
            metadata: {
                properties: {
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
                    'center': {
                        type: 'object', //LatLng
                        bindable: 'bindable',
                        defaultValue: {
                            lat: 48,
                            lng: -121
                        }
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
            if (this._map && iValue !== this._map.getZoom()) {
                this._map.setZoom(iValue);
            }
        };

        Map.prototype.setCenter = function(oValue) {
            if (oValue === null || MapUtils.latLngEqual(this.getCenter(), oValue)) {
                return true;
            }

            this.setProperty('center', oValue, true);
            if (this._map && !MapUtils.latLngEqual(MapUtils.latLngToObj(this._map.getCenter()), oValue)) {
                this._map.panTo(MapUtils.objToLatLng(oValue));
            }
        };

        Map.prototype.setMapTypeId = function(sValue) {
            this.setProperty('mapTypeId', sValue, true);
            if (this._map && sValue !== this._map.getMapTypeId()) {
                this._map.setMapTypeId(sValue);
            }
        };

        Map.prototype.setZoomControl = function(bValue) {
            this.setProperty('zoomControl', bValue, true);
            if (this._map && bValue !== this._map.getZoomControl()) {
                this._map.setZoomControl(bValue);
            }
        };

        Map.prototype._getMapOptions = function() {
            var mapOptions = {};
            mapOptions.zoom = this.getZoom();
            mapOptions.center = MapUtils.objToLatLng(this.getCenter());
            mapOptions.disableDefaultUi = this.getDisableDefaultUI();
            mapOptions.mapTypeId = this.getMapTypeId();
            mapOptions.panControl = this.getPanControl();
            mapOptions.zoomControl = this.getZoomControl();
            mapOptions.mapTypeControl = this.getMapTypeControl();
            mapOptions.streetViewControl = this.getStreetViewControl();
            return mapOptions;
        };

        Map.prototype.onAfterRendering = function() {
            if (this._map) {
                this.resetMap();
                // this._map = undefined;

                //TODO map is attached to DOM, on render dom gets rewritten, find a way to reattach 
                // this.trigger('resize');
                // this._map.setOptions(this._getMapOptions());
                // return false;
            }

            // if (!this._map) {
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

            this._map = new Gmaps.Map(jQuery.sap.byId(this.mapId)[0], this._getMapOptions());

            this.addListener('drag', jQuery.proxy(this.updateValues, this));
            this.addListener('zoom_changed', jQuery.proxy(this.updateValues, this));
            this.addListener('center_changed', jQuery.proxy(this.updateValues, this));
            this.addListener('bounds_changed', jQuery.proxy(this.updateValues, this));
            this.addListener('maptypeid_changed', jQuery.proxy(this.updateValues, this));
            this.addListener('resize', jQuery.proxy(this.updateValues, this));

            this._notifyMarkers('MapRendered', this._map);
            this._notifyPolylines('MapRendered', this._map);
            this._notifyPolygons('MapRendered', this._map);

            this.fireReady({
                map: this.map,
                context: this.getBindingContext(),
                center: this.getCenter()
            });
        };

        Map.prototype.addListener = function(event, callback) {
            this.aListeners.push(Gmaps.event.addListener(this._map, event, callback));
        };

        Map.prototype.removeListeners = function() {
            this.aListeners.forEach(function(oListener) {
                oListener.remove();
            });
            this.aListeners = [];
        };

        Map.prototype.trigger = function(event) {

            Gmaps.event.trigger(this._map, event);
        };

        Map.prototype.isDragging = function() {
            this._dragging = true;
        };

        Map.prototype.isNotDragging = function() {
            this._dragging = false;
        };

        Map.prototype.updateValues = function() {
            //sync maps values with control
            if (MapUtils.latLngToObj(this._map.getCenter()) !== this.getCenter()) {
                this.setCenter(MapUtils.latLngToObj(this._map.getCenter()));
            }

            if (this._map.getZoom() !== this.getZoom()) {
                this.setZoom(this._map.getZoom());
            }

            if (this._map.getMapTypeId() !== this.getMapTypeId()) {
                this.setMapTypeId(this._map.getMapTypeId());
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
            this._map.set(null);
        };

        Map.prototype.exit = function() {
            this.resetMap();
            this.init();
        };

        return Map;

    }, /* bExport= */ true);