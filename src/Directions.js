sap.ui.define(['jquery.sap.global', 'sap/ui/core/Control', 'google.maps', './TravelMode'],
    function(jQuery, Control, gmaps, travelMode) {
        "use strict";

        var Directions = Control.extend('openui5.googlemaps.Directions', {
            metadata: {
                properties: {
                    'startAddress': {
                        type: "string",
                        bindable: 'bindable',
                    },
                    'endAddress': {
                        type: "string",
                        bindable: 'bindable',
                    },
                    'travelMode': {
                        type: "string",
                        defaultValue: travelMode.driving
                    }
                },
                events: {
                    'response': {}
                },
                renderer: {}
            }
        });

        //inspired by Polymer google-map-directions

        Directions.prototype.setStartAddress = function(sValue) {
            this.setProperty('startAddress', sValue, true);
            this.route();
        };

        Directions.prototype.setEndAddress = function(sValue) {
            this.setProperty('endAddress', sValue, true);
            this.route();
        };

        Directions.prototype.setTravelMode = function(sValue) {
            this.setProperty('travelMode', sValue, true);
            this.route();
        };

        Directions.prototype.onMapRendered = function(map) {
            this.map = map;
            this.mapChanged();
        };

        Directions.prototype.responseChanged = function() {
            if (this.directions && this.response) {
                this.directions.setDirections(this.response);
            }
        };

        Directions.prototype.mapChanged = function() {
            if (!this.directions) {
                this.directions = new gmaps.DirectionsRenderer();
            }
            this.directions.setMap(this.map);
            this.route();

        };

        Directions.prototype.route = function() {
            // Abort attempts to route if the API is not available yet or the required attributes are blank.
            if (!this.map || !this.getStartAddress() || !this.getEndAddress()) {
                return;
            }

            // Construct a directionsService if necessary.
            // Wait until here where the maps api has loaded and directions are actually needed.
            if (!this.directionsService) {
                this.directionsService = new gmaps.DirectionsService();
            }

            var request = {
                origin: this.getStartAddress(),
                destination: this.getEndAddress(),
                travelMode: this.getTravelMode()
            };

            jQuery.sap.clearDelayedCall(this.delayedCallId);
            this.delayedCallId = jQuery.sap.delayedCall(0, this, function() {
                this.directionsService.route(request, jQuery.proxy(this.routeResponse, this));
            });
        };

        Directions.prototype.routeResponse = function(response, status) {
            if (status === gmaps.DirectionsStatus.OK) {
                this.response = response;
                this.responseChanged();

                this.fireResponse({
                    response: response
                });
            }
        };

        Directions.prototype.reset = function() {
            if (this.directions) {
                this.directions.setMap(null);
                this.directions = null;
            }
        };

        Directions.prototype.onReset = function() {
            this.reset();
        };

        Directions.prototype.exit = function() {
            this.reset();
        };

        return Directions;

    }, /* bExport= */ true);