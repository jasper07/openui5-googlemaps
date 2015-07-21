sap.ui.define(
    [
        "openui5/googlemaps/Map",
        "openui5/googlemaps/MapUtils",
        "openui5/googlemaps/MapTypeId",
        "openui5/googlemaps/Marker",
        "openui5/googlemaps/Polyline",
        "openui5/googlemaps/Polygon",
        "openui5/googlemaps/Directions",
        "openui5/googlemaps/MarkerCluster"
    ],
    function(Map, MapUtils, MapTypeId, Marker, Polyline, Polygon, Directions, MarkerCluster) {
        "use QUnit.strict";

        var MAP_ID = 'MAP_TEST';
        var MAP_POSITION = {};
        MAP_POSITION.lat = parseFloat("-33.895");
        MAP_POSITION.lng = parseFloat("151.275");

        QUnit.module("Map - defaults test");

        QUnit.asyncTest("Object Creation and Destroy with Id", function() {
            QUnit.expect(6);

            var testID = "MAP1";
            var oMap = new Map(testID, {
                lat: undefined,
                lng: undefined
            });

            QUnit.strictEqual(oMap.getId(), testID, "Map has ID: " + testID);
            oMap.placeAt("qunit-fixture");

            setTimeout(function() {

                // find just created object byId
                var oMap2 = sap.ui.getCore().byId(testID);
                QUnit.ok(!!oMap2, "Object created and found byId");
                QUnit.ok(oMap2.$().size() > 0, "DOM has some content");

                // not passing lat lng
                QUnit.strictEqual(oMap.map, undefined, "no lat lng no map");

                // Destroy object
                oMap2.destroy();
                QUnit.ok(oMap2.$().size() === 0, "DOM content destroyed");

                // try to find destroyed object
                setTimeout(function() {
                    var oMap3 = sap.ui.getCore().byId(testID);
                    QUnit.ok(!oMap3, "UI5 Object cannot be found");

                    QUnit.start();
                    oMap.destroy();
                }, 0);
            }, 0);
        });

        QUnit.module("Map Test Options");

        QUnit.test("Default config test", function() {
            var oMap = new Map();
            QUnit.strictEqual(oMap.getLat(), 1, "default latitude found ");
            QUnit.strictEqual(oMap.getLng(), 1, "default longitude found ");
            QUnit.strictEqual(oMap.getDisableDefaultUI(), true, "disable default UI found ");
            QUnit.ok(MapUtils.floatEqual(oMap.getLat(), 1), "default latitude found ");
            QUnit.ok(MapUtils.floatEqual(oMap.getLng(), 1), "default longitude found ");
            QUnit.strictEqual(oMap.getDisableDefaultUI(), true, "disable default UI found ");
            QUnit.strictEqual(oMap.getWidth(), "auto", "default width found");
            QUnit.strictEqual(oMap.getHeight(), "20em", "default height found");
            QUnit.strictEqual(oMap.getZoom(), 8, "default zoom found");
            QUnit.strictEqual(oMap.getMapTypeId(), 'roadmap', "default mapTypeID found");
            QUnit.strictEqual(oMap.getPanControl(), false, "default panControl found");
            QUnit.strictEqual(oMap.getMapTypeControl(), false, "default mapTypeControl found");
            QUnit.strictEqual(oMap.getStreetViewControl(), false, "default streetViewControl found");
        });

        QUnit.asyncTest("Set goolemap options on creation", function() {
            QUnit.expect(10);
            var fnMapReadyHandler = function() {
                QUnit.ok(MapUtils.floatEqual(oMap.getLat(), MAP_POSITION.lat), "set latitude found ");
                QUnit.ok(MapUtils.floatEqual(oMap.getLng(), MAP_POSITION.lng), "set longitude found ");
                QUnit.strictEqual(oMap.getDisableDefaultUI(), false, "enabled default UI found ");
                QUnit.strictEqual(oMap.getWidth(), "20em", "set width found");
                QUnit.strictEqual(oMap.getHeight(), "10em", "set height found");
                QUnit.strictEqual(oMap.getZoom(), 10, "set zoom found");
                QUnit.strictEqual(oMap.getMapTypeId(), 'terrain', "set mapTypeID found");
                QUnit.strictEqual(oMap.getPanControl(), false, "default panControl found");
                QUnit.strictEqual(oMap.getMapTypeControl(), false, "default mapTypeControl found");
                QUnit.strictEqual(oMap.getStreetViewControl(), false, "default streetViewControl found");
                QUnit.start();
                oMap.destroy();
            };

            var oMap = new Map({
                lat: MAP_POSITION.lat,
                lng: MAP_POSITION.lng,
                width: "20em",
                height: "10em",
                zoom: 10,
                disableDefaultUI: false,
                mapTypeId: MapTypeId.TERRAIN,
                ready: fnMapReadyHandler
            });
            oMap.placeAt("qunit-fixture");
        });

        QUnit.asyncTest("Set goolemap options after creation", function() {
            var bCall = 0;
            QUnit.expect(11);

            var fnMapReadyHandler = function() {
                switch (bCall) {
                    case 0:
                        bCall = 1;
                        oMap.setLat(MAP_POSITION.lat);
                        oMap.setLng(MAP_POSITION.lng);
                        oMap.setDisableDefaultUI(false);
                        oMap.setWidth("20em");
                        oMap.setHeight("10em");
                        oMap.setZoom(10);
                        oMap.setMapTypeId(MapTypeId.HYBRID);
                        oMap.setPanControl(true);
                        oMap.setMapTypeControl(true);
                        oMap.setStreetViewControl(true);
                        oMap.setZoomControl(true);
                        break;
                    case 1:
                        bCall = undefined;
                        QUnit.ok(MapUtils.floatEqual(oMap.getLat(), MAP_POSITION.lat), "set latitude found ");
                        QUnit.ok(MapUtils.floatEqual(oMap.getLng(), MAP_POSITION.lng), "set longitude found ");
                        QUnit.strictEqual(oMap.getDisableDefaultUI(), false, "enabled default UI found ");
                        QUnit.strictEqual(oMap.getWidth(), "20em", "set width found");
                        QUnit.strictEqual(oMap.getHeight(), "10em", "set height found");
                        QUnit.strictEqual(oMap.getZoom(), 10, "set zoom found");
                        QUnit.strictEqual(oMap.getMapTypeId(), 'hybrid', "set mapTypeID found");
                        QUnit.strictEqual(oMap.getPanControl(), true, "set panControl found");
                        QUnit.strictEqual(oMap.getMapTypeControl(), true, "set mapTypeControl found");
                        QUnit.strictEqual(oMap.getStreetViewControl(), true, "set streetViewControl found");
                        QUnit.strictEqual(oMap.getZoomControl(), true, "set ZoomControl found");
                        QUnit.start();
                        oMap.destroy();
                        break;
                }
            };

            var oMap = new Map({
                ready: fnMapReadyHandler
            });
            oMap.placeAt("qunit-fixture");
        });

        QUnit.module("Map Test Events");

        QUnit.asyncTest("zoom changed", function() {
            QUnit.expect(2);

            var fnMapReadyHandler = function() {
                oMap.map.setZoom(5);
                oMap.map.setMapTypeId(MapTypeId.HYBRID);
                QUnit.strictEqual(oMap.getZoom(), 5, "set zoom found");
                QUnit.strictEqual(oMap.getMapTypeId(), 'hybrid', "set mapTypeID found");
                QUnit.start();
                oMap.destroy();
            };

            var oMap = new Map({
                ready: fnMapReadyHandler
            });
            oMap.placeAt("qunit-fixture");
        });

        QUnit.asyncTest("dragging", function() {
            QUnit.expect(1);

            var fnMapReadyHandler = function() {
                QUnit.strictEqual(oMap._dragging, false, "has stopped dragging");
                QUnit.start();
                oMap.destroy();
            };

            var oMap = new Map({
                ready: fnMapReadyHandler
            });
            oMap.isDragging(true);
            oMap.placeAt("qunit-fixture");
        });

        QUnit.asyncTest("notify aggregations", function() {
            QUnit.expect(5);

            var fnMapReadyHandler = function() {
                QUnit.strictEqual(oMap.getMarkers().length, 1, "has one marker");
                QUnit.strictEqual(oMap.getPolylines().length, 1, "has one polyline");
                QUnit.strictEqual(oMap.getPolygons().length, 1, "has one polygon");
                QUnit.strictEqual(!!oMap.getDirections(), true, "has one direction");
                QUnit.strictEqual(!!oMap.getMarkerCluster(), true, "has one marker cluster");
                QUnit.start();
                oMap.destroy();
            };
            var aPath = [{
                lat: MAP_POSITION.lat,
                lng: MAP_POSITION.lng
            }];
            var oMap = new Map({
                markers: new Marker(),
                polylines: new Polyline({
                    path: aPath
                }),
                polygons: new Polygon({
                    paths: aPath
                }),
                directions: new Directions(),
                markerCluster: new MarkerCluster(),
                ready: fnMapReadyHandler
            });
            oMap.placeAt("qunit-fixture");
        });
    });
