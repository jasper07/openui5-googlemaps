sap.ui.define(['jquery.sap.global', 'sap/ui/core/Control', 'google.maps', './markerclusterer'],
    function(jQuery, Control, Gmaps, MarkerClusterer) {
        "use strict";

        MarkerClusterer = window.MarkerClusterer;

        var MarkerCluster = Control.extend('openui5.googlemaps.MarkerCluster', {
            metadata: {
                properties: {
                    'averageCenter': {
                        type: 'boolean',
                        bindable: 'bindable',
                        defaultValue: true
                    }
                },
                defaultAggregation: 'markers',
                aggregations: {
                    'markers': {
                        type: 'openui5.googlemaps.Marker',
                        multiple: true,
                        bindable: 'bindable'
                    }
                },
                events: {
                    'click': {},
                    'mouseover': {},
                    'mouseout': {}
                },
                renderer: {}
            }
        });

        MarkerCluster.prototype.init = function() {
            this.aListeners = [];
        };

        MarkerCluster.prototype.onMapRendered = function(map) {
            this.map = map;
            this.setClusterer();
        };

        MarkerCluster.prototype.onClusterClick = function(oCluster) {
            this.fireClick({
                cluster: oCluster
            });
        };

        MarkerCluster.prototype.onClusterMouseover = function(oCluster) {
            this.fireMouseover({
                cluster: oCluster
            });
        };

        MarkerCluster.prototype.onClusterMouseout = function(oCluster) {
            this.fireMouseout({
                cluster: oCluster
            });
        };

        MarkerCluster.prototype._getMarkers = function() {
            var that = this;
            var aMarkers = [];

            this.getMarkers().forEach(function(oMarker) {
                oMarker.setMarker();
                oMarker.setMap(that.map);
                aMarkers.push(oMarker.marker);
            });
            return aMarkers;
        };

        MarkerCluster.prototype.getOptions = function() {
            var options = {};
            options.averageCenter = this.getAverageCenter();
            return options;
        };

        MarkerCluster.prototype.setClusterer = function() {
            this.markerClusterer = new MarkerClusterer(this.map, this._getMarkers(), this.getOptions());
            this.addListener('click', jQuery.proxy(this.onClusterClick, this));
            this.addListener('mouseover', jQuery.proxy(this.onClusterMouseover, this));
            this.addListener('mouseout', jQuery.proxy(this.onClusterMouseout, this));
        };

        MarkerCluster.prototype.addListener = function(event, callback, object) {
            this.aListeners.push(Gmaps.event.addListener(this.markerClusterer, event, callback));
        };

        MarkerCluster.prototype.removeListeners = function() {
            this.aListeners.forEach(function(oListener) {
                oListener.remove();
            });

            this.aListeners = [];
        };

        MarkerCluster.prototype.reset = function() {
            if (this.markerClusterer) {
                this.removeListeners();
                this.markerClusterer = undefined;
            }
        };

        MarkerCluster.prototype.onReset = function() {
            this.reset();
        };

        MarkerCluster.prototype.exit = function() {
            this.reset();
        };

        return MarkerCluster;

    },
    /* bExport= */
    true);