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
                        callback([{ formatted_address: object.address }]);
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
        QUnit.test("latLngEqual", function(assert) {
            // Arrange    
            var oVal = {
                lat: parseFloat("-33.895"),
                lng: parseFloat("151.275")
            };

            // Assert
            assert.ok(MapUtils.latLngEqual(oVal, oVal), "lat lng equals");

        });

        QUnit.test("objToLatLng", function(assert) {
            // Arrange
            var latLngSpy = this.spy();
            this.stub(google.maps, "LatLng", latLngSpy);

            // act
            MapUtils.objToLatLng({});

            // Assert
            assert.strictEqual(latLngSpy.callCount, 1, "lalng was called");

        });

        QUnit.test("latLngToObj", function(assert) {
            // Arrange
            var latSpy = this.spy();
            var lngSpy = this.spy();

            // act
            MapUtils.latLngToObj({ lat: latSpy, lng: lngSpy });

            // Assert
            assert.strictEqual(latSpy.callCount, 1, "lat was called");
            assert.strictEqual(lngSpy.callCount, 1, "lng was called");

        });

        QUnit.module("MapUtils - geocode tests");
        QUnit.test("currentPosition success", function(assert) {
            // arrange
            var currentLocationSpy = this.spy();

            // act
            stubCurrentLocationSuccess(this);
            MapUtils.currentPosition().then(currentLocationSpy);

            // assert
            assert.strictEqual(currentLocationSpy.callCount, 1, "the current location got hit");
        });


        QUnit.test("currentPosition error", function(assert) {
            // arrange
            var currentLocationSpy = this.spy();

            // act
            stubCurrentLocationError(this);
            MapUtils.currentPosition().then(currentLocationSpy);

            // assert
            assert.strictEqual(currentLocationSpy.callCount, 0, "the current location not found");
        });

        QUnit.test("geocode Position success", function(assert) {
            // Arrange
            var geocodeSpy = this.spy();

            // act
            stubGeoCodePositionSuccess(this);
            MapUtils.geocodePosition().done(geocodeSpy);

            // Assert
            assert.strictEqual(geocodeSpy.callCount, 1, "the geocode position found");
        });


        QUnit.test("geocode Position error", function(assert) {
            // Arrange
            var geocodeSpy = this.spy();

            // act
            stubGeoCodePositionError(this);
            MapUtils.geocodePosition().done(geocodeSpy);

            // Assert
            assert.strictEqual(geocodeSpy.callCount, 0, "the geocode wasnt position found");
        });

        QUnit.test("geocode Search", function(assert) {
            // Arrange
            var sAddress = "Bondi Beach";
            stubGeoCodePositionSuccess(this);

            // Act
            return MapUtils.search({ "address": sAddress }).then(function(res) {
                // Assert
                assert.strictEqual(sAddress, res[0].formatted_address, "correct address returned");
            });
        });
    });
