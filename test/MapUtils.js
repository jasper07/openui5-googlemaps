sap.ui.define(
    [
        "openui5/googlemaps/MapUtils",
        "sap/ui/thirdparty/sinon",
        "sap/ui/thirdparty/sinon-qunit"
    ],
    function(MapUtils) {
        "use strict";

        function stubCurrentLocationSuccess(oSinonSandbox) {
            oSinonSandbox.stub(navigator.geolocation, "getCurrentPosition", function(success, error, options) {
                success({
                    "coords": {
                        "latitude": parseFloat("-33.895"),
                        "longitude": parseFloat("151.275")
                    }
                });

            });
        }

        function stubCurrentLocationError(oSinonSandbox) {
            oSinonSandbox.stub(navigator.geolocation, "getCurrentPosition", function(success, error, options) {
                error({
                    code: 123,
                    message: "failed"
                });
            });
        }


        function stubGeoCodePositionSuccess(oSinonSandbox) {
            oSinonSandbox.stub(google.maps, "Geocoder", function() {
                return {
                    geocode: function(object, callback) {
                        callback([{ formatted_address: "yadda" }]);
                    }
                };
            });
        }

        function stubGeoCodePositionError(oSinonSandbox) {
            oSinonSandbox.stub(google.maps, "Geocoder", function() {
                return {
                    geocode: function(object, callback) {
                        callback([]);
                    }
                };
            });
        }

        QUnit.module("MapUtils - Lat Long tests");
        QUnit.test("latLngEqual", function() {
            // Arrange    
            var oVal = {
                lat: parseFloat("-33.895"),
                lng: parseFloat("151.275")
            };

            // Assert
            QUnit.ok(MapUtils.latLngEqual(oVal, oVal), "lat lng equals");

        });

        QUnit.test("objToLatLng", function() {
            // Arrange
            var latLngSpy = this.spy();
            this.stub(google.maps, "LatLng", latLngSpy);

            // Action
            MapUtils.objToLatLng({});

            // Assert
            QUnit.strictEqual(latLngSpy.callCount, 1, "lalng was called");

        });

        QUnit.test("latLngToObj", function() {
            // Arrange
            var latSpy = this.spy();
            var lngSpy = this.spy();

            // Action
            MapUtils.latLngToObj({ lat: latSpy, lng: lngSpy });

            // Assert
            QUnit.strictEqual(latSpy.callCount, 1, "lat was called");
            QUnit.strictEqual(lngSpy.callCount, 1, "lng was called");

        });

        QUnit.module("MapUtils - geocode tests");
        QUnit.test("currentPosition success", function() {
            // arrange
            var currentLocationSpy = this.spy();

            // action
            stubCurrentLocationSuccess(this);
            MapUtils.currentPosition().then(currentLocationSpy);

            // assert
            QUnit.strictEqual(currentLocationSpy.callCount, 1, "the current location got hit");
        });


        QUnit.test("currentPosition error", function() {
            // arrange
            var currentLocationSpy = this.spy();

            // action
            stubCurrentLocationError(this);
            MapUtils.currentPosition().then(currentLocationSpy);

            // assert
            QUnit.strictEqual(currentLocationSpy.callCount, 0, "the current location not found");
        });

        QUnit.test("geocode Position success", function() {
            // Arrange
            var geocodeSpy = this.spy();

            // Action
            stubGeoCodePositionSuccess(this);
            MapUtils.geocodePosition().done(geocodeSpy);

            // Assert
            QUnit.strictEqual(geocodeSpy.callCount, 1, "the geocode position found");
        });


        QUnit.test("geocode Position error", function() {
            // Arrange
            var geocodeSpy = this.spy();

            // Action
            stubGeoCodePositionError(this);
            MapUtils.geocodePosition().done(geocodeSpy);

            // Assert
            QUnit.strictEqual(geocodeSpy.callCount, 0, "the geocode wasnt position found");
        });

        QUnit.test("geocode Search", function() {
            // Arrange
            var geocodeSpy = this.spy();

            // Action
            stubGeoCodePositionSuccess(this);
            MapUtils.search().done(geocodeSpy);

            // Assert
            QUnit.strictEqual(geocodeSpy.callCount, 1, "the geocode position found");
        });
    });
