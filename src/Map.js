sap.ui.define(['jquery.sap.global', 'sap/ui/core/Control', 'sap/ui/core/ResizeHandler', 'google.maps', './MapUtils', './MapTypeId'],
    function(jQuery, Control, ResizeHandler, Gmaps, MapUtils, MapTypeId) {
        "use strict";
        var Map = Control.extend('openui5.googlemaps.Map', {
            metadata: {
                properties: {
                    'lat': {
                        type: 'float',
                        bindable: 'bindable',
                        defaultValue: 1
                    },
                    'lng': {
                        type: 'float',
                        bindable: 'bindable',
                        defaultValue: 1
                    },
                    'width': {
                        type: 'sap.ui.core.CSSSize',
                        group: 'Dimension',
                        defaultValue: 'auto'
                    },
                    'height': {
                        type: 'sap.ui.core.CSSSize',
                        group: 'Dimension',
                        defaultValue: '20em'
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
                oRm.renderControl(oControl._html);
                oRm.write('</div>');
            }
        });

        Map.prototype.init = function() {
            this._dragging = false;
            this.aListeners = [];
            this.mapId = this.getId() + "-map";
            this._html = new sap.ui.core.HTML({
                content: "<div style='height: " + this.getHeight() + ";width: " + this.getWidth() + ";' id='" + this.mapId + "'></div>"
            });
        };

        Map.prototype.setHeight = function(sValue) {
            this.setProperty('height', sValue, true);
            this.setSize();
        };

        Map.prototype.setWidth = function(sValue) {
            this.setProperty('width', sValue, true);
            this.setSize();
        };

        Map.prototype.setSize = function() {
            if (!jQuery.sap.domById(this.mapId)) {
                var content = jQuery(this._html.getContent());
                content.css("height", this.getHeight()).css("width", this.getWidth());
                this._html.setContent(content.outerHTML());
            } else {
                jQuery.sap.byId(this.mapId).css("height", this.getHeight()).css("width", this.getWidth());
            }
        };

        Map.prototype.setZoom = function(iValue) {
            this.setProperty('zoom', iValue, true);
            if (this.map && iValue !== this.map.getZoom()) {
                this.map.setZoom(iValue);
            }
        };

        Map.prototype.setLat = function(oValue) {
            var val = parseFloat(oValue);
            if (!MapUtils.floatEqual(val, this.getLat())) {
                this.setProperty('lat', val, true);
                this._updateCenter();
            }
        };

        Map.prototype.setLng = function(oValue) {
            var val = parseFloat(oValue);
            if (!MapUtils.floatEqual(val, this.getLng())) {
                this.setProperty('lng', val, true);
                this._updateCenter();
            }
        };

        Map.prototype._updateCenter = function() {
            if (!this.map || this.getLat() == null || this.getLng() == null) {
                return;
            }

            // delay if lat and lng updated through binding
            jQuery.sap.clearDelayedCall(this.delayedCallId);
            this.delayedCallId = jQuery.sap.delayedCall(0, this, function() {
                this.map.setCenter(new Gmaps.LatLng(this.getLat(), this.getLng()));
                this.notifyAggregations('MapRendered');
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

        Map.prototype.zoomChanged = function() {
            if (this.map.getZoom() !== this.getZoom()) {
                this.setZoom(this.map.getZoom());
            }
        };

        Map.prototype.mapTypeIdChanged = function() {
            if (this.map.getMapTypeId() !== this.getMapTypeId()) {
                this.setMapTypeId(this.map.getMapTypeId());
            }
        };

        Map.prototype.onResize = function() {
            var center = this.map.getCenter();
            this.trigger("resize");
            this.map.setCenter(center);
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

        Map.prototype.notifyAggregations = function(sEvent) {
            // notify markers, polylines and poloygons
            this._notifyMarkers(sEvent, this.map);
            this._notifyPolylines(sEvent, this.map);
            this._notifyPolygons(sEvent, this.map);
        };

        Map.prototype.onAfterRendering = function() {
            //if map not loaded yet subscribe to its event    
            if (Gmaps.loaded === undefined) {
                if (this.subscribed === undefined) {
                    sap.ui.getCore().getEventBus().subscribe(Gmaps.notifyEvent, this.createMap, this);
                    this.subscribed = true;
                }
                return false;
            }

            if (!this.initialized) {
                this.createMap();
            } else {
                this._updateCenter();
            }
        };

        Map.prototype.createMap = function() {
            if (!this.getLat() || !this.getLng()) {
                return;
            }

            //  create map
            this.map = new Gmaps.Map(jQuery.sap.domById(this.mapId), this._getMapOptions());

            this.notifyAggregations('MapRendered');

            // set up listeners
            this.addListener('drag', jQuery.proxy(this.isDragging, this));
            this.addListener('dragstart', jQuery.proxy(this.isDragging, this));
            this.addListener('zoom_changed', jQuery.proxy(this.zoomChanged, this));
            this.addListener('center_changed', jQuery.proxy(this.updateValues, this));
            this.addListener('idle', jQuery.proxy(this.mapChanged, this));
            // this.addListener('bounds_changed', jQuery.proxy(this.updateValues, this)); //TODO
            this.addListener('maptypeid_changed', jQuery.proxy(this.mapTypeIdChanged, this));

            this.resizeID = ResizeHandler.register(jQuery.sap.domById(this.mapId), jQuery.proxy(this.onResize, this));

            this.initialized = true;
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

        Map.prototype.mapChanged = function() {
            if (this._dragging) {
                this.isNotDragging();
            }

            this.updateValues();
            this.fireReady({
                map: this.map,
                context: this.getBindingContext(),
                lat: this.getLat(),
                lng: this.getLng()
            });
        };

        Map.prototype.updateValues = function(oEvent) {
            var center = MapUtils.latLngToObj(this.map.getCenter());

            if (!MapUtils.floatEqual(center.lat, this.getLat())) {
                this.setProperty('lat', center.lat, true);
            }

            if (!MapUtils.floatEqual(center.lng, this.getLng())) {
                this.setProperty('lng', center.lng, true);
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

        Map.prototype.getPolygons = function() {
            return this.getAggregation("polygons", []);
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
            ResizeHandler.deregister(this.resizeID);
        };

        return Map;

    }, /* bExport= */ true);