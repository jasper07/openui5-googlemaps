sap.ui.define(
    [
        "openui5/googlemaps/Map",
        "openui5/googlemaps/MapUtils"
    ],
    function(Map, MapUtils) {
        "use QUnit.strict";

        var MAP_ID = 'MAP_TEST';
        var MAP_POSITION = {};
        MAP_POSITION.lat = parseFloat("-33.895");
        MAP_POSITION.lng = parseFloat("151.275");

        QUnit.module("Map - defaults test");

        QUnit.asyncTest("Object Creation and Destroy with Id", function() {
            QUnit.expect(5);

            var testID = "MAP1";
            var oMap = new Map(testID, {});

            QUnit.strictEqual(oMap.getId(), testID, "Map has ID: " + testID);
            oMap.placeAt("qunit-fixture");

            setTimeout(function() {

                // find just created object byId
                var oMap2 = sap.ui.getCore().byId(testID);
                QUnit.ok(!!oMap2, "Object created and found byId");

                QUnit.ok(oMap2.$().size() > 0, "DOM has some content");

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


        QUnit.module("Map Test Defaults");

        QUnit.test("Default config test", function() {
            var oMap = new Map();

            QUnit.strictEqual(oMap.getLat(), 1, "default latitude found ");
            QUnit.strictEqual(oMap.getLng(), 1, "default longitude found ");
            QUnit.strictEqual(oMap.getDisableDefaultUI(), true, "disable default UI found ");
        });

        QUnit.module("Map Options Test");

        QUnit.test("Default options test", function() {
            var oMap = new Map();

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

        QUnit.test("Check map options", function() {
            var oMap = new Map({
                lat: MAP_POSITION.lat,
                lng: MAP_POSITION.lng
            });
            oMap.placeAt("qunit-fixture");

            QUnit.ok(MapUtils.floatEqual(oMap.getLat(), MAP_POSITION.lat), "set latitude found ");
            QUnit.ok(MapUtils.floatEqual(oMap.getLng(), MAP_POSITION.lng), "set longitude found ");
            QUnit.strictEqual(oMap.getDisableDefaultUI(), true, "disable default UI found ");
            QUnit.strictEqual(oMap.getWidth(), "auto", "default width found");
            QUnit.strictEqual(oMap.getHeight(), "20em", "default height found");
            QUnit.strictEqual(oMap.getZoom(), 8, "default zoom found");
            QUnit.strictEqual(oMap.getMapTypeId(), 'roadmap', "default mapTypeID found");
            QUnit.strictEqual(oMap.getPanControl(), false, "default panControl found");
            QUnit.strictEqual(oMap.getMapTypeControl(), false, "default mapTypeControl found");
            QUnit.strictEqual(oMap.getStreetViewControl(), false, "default streetViewControl found");
            oMap.destroy();
        });

        QUnit.asyncTest("Check goolemap object", function() {
            QUnit.expect(10);
            var fnMapReadyHandler = function() {
                QUnit.ok(MapUtils.floatEqual(oMap.map.getCenter().lat(), MAP_POSITION.lat), "goolemap latitude found ");
                QUnit.ok(MapUtils.floatEqual(oMap.map.getCenter().lng(), MAP_POSITION.lng), "goolemap longitude found ");
                QUnit.strictEqual(oMap.map.disableDefaultUi, true, "goolemap default UI found ");
                QUnit.strictEqual(oMap.map.getDiv().style.width, "auto", "goolemap width found");
                QUnit.strictEqual(oMap.map.getDiv().style.height, "20em", "dgoolemap height found");
                QUnit.strictEqual(oMap.map.getZoom(), 8, "goolemap zoom found");
                QUnit.strictEqual(oMap.map.getMapTypeId(), 'roadmap', "goolemap mapTypeID found");
                QUnit.strictEqual(oMap.map.panControl, false, "goolemap panControl found");
                QUnit.strictEqual(oMap.map.mapTypeControl, false, "goolemap mapTypeControl found");
                QUnit.strictEqual(oMap.map.streetViewControl, false, "goolemap streetViewControl found");
                QUnit.start();
                oMap.destroy();
            };

            var oMap = new Map({
                lat: MAP_POSITION.lat,
                lng: MAP_POSITION.lng,
                ready: fnMapReadyHandler
            });
            oMap.placeAt("qunit-fixture");
        });

        QUnit.asyncTest("Check changing intial values", function() {
            var options = {};
            options.lat = MAP_POSITION.lat;
            options.lng = MAP_POSITION.lng;
            options.disableDefaultUi = true;
            options.width = "400px";
            options.height = "200px";
            options.zoom = 12;
            options.mapTypeID = 'streetview';
            options.panControl = true;
            options.mapTypeControl = true;
            options.streetViewControl = true;

            var readyCallback = function(oEvent) {
                var oMap = sap.ui.getCore().byId("MAP4");
                if (this.changed === undefined) {
                    this.changed = true;
                    // start();
                    //check event data
                    QUnit.ok(MapUtils.floatEqual(oEvent.getParameter('lat'), 1), "latitude in ready event");
                    QUnit.ok(MapUtils.floatEqual(oEvent.getParameter('lng'), 1), "longitude in ready event");
                    QUnit.ok((oEvent.getParameter('map')), "longitude in ready event");

                    QUnit.strictEqual(oMap.map.getDiv().style.width, options.width, "goolemap width found");
                    QUnit.strictEqual(oMap.map.getDiv().style.height, options.height, "goolemap height found");
                    // stop();

                    oMap.setLat(MAP_POSITION.lat);
                    oMap.setLng(MAP_POSITION.lng);
                } else {
                    start();
                    QUnit.ok(MapUtils.floatEqual(oMap.map.getCenter().lat(), MAP_POSITION.lat), "goolemap latitude found");
                    QUnit.ok(MapUtils.floatEqual(oMap.map.getCenter().lng(), MAP_POSITION.lng), "goolemap longitude found");
                    QUnit.ok((oEvent.getParameter('map')), "map returned in changed event");
                    stop();
                    oMap.destroy();
                }
            };

            var testID = "MAP4";
            var oMap = new Map(testID, {
                lat: 1,
                lng: 1,
                width: options.width,
                height: options.height,
                ready: readyCallback,
            }).placeAt("qunit-fixture");
        });

    }
);
