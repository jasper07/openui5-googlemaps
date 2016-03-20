sap.ui.define(
    [
        "openui5/googlemaps/Map",
        "openui5/googlemaps/MapUtils",
        "openui5/googlemaps/MapTypeId",
        "openui5/googlemaps/Marker",
        "openui5/googlemaps/Polyline",
        "openui5/googlemaps/Polygon",
        "openui5/googlemaps/Directions",
        "openui5/googlemaps/MarkerCluster",
        "sap/ui/thirdparty/sinon",
        "sap/ui/thirdparty/sinon-qunit"
    ],
    function(Map, MapUtils, MapTypeId, Marker, Polyline, Polygon, Directions, MarkerCluster) {
        "use strict";

        sinon.config.useFakeTimers = false;

        var MAP_ID = 'MAP_TEST';
        var MAP_POSITION = {};
        MAP_POSITION.lat = parseFloat("-33.895");
        MAP_POSITION.lng = parseFloat("151.275");

        function stubGoogleMapsLoaded(oSinonSandbox) {
            oSinonSandbox.stub(google.maps, "loaded", undefined);
        }

        QUnit.module("Map - defaults test");


        QUnit.test("Object Creation and Destroy with Id", function() {

            // Arrange    
            var sTestID = "MAP1";
            var oMap = new Map(sTestID, {
                lat: undefined,
                lng: undefined
            });

            QUnit.strictEqual(oMap.getId(), sTestID, "Map has ID: " + sTestID);
            oMap.placeAt("qunit-fixture");

            sap.ui.getCore().applyChanges();
            var oMap2 = sap.ui.getCore().byId(sTestID);

            // Act
            QUnit.ok(!!oMap2, "Object created and found byId");
            QUnit.ok(oMap2.$().size() > 0, "DOM has some content");
            QUnit.strictEqual(oMap.map, undefined, "no lat lng no map");


            // Assert
            // Destroy object
            oMap2.destroy();
            sap.ui.getCore().applyChanges();

            QUnit.ok(oMap2.$().size() === 0, "DOM content destroyed");

            // try to find destroyed object
            var oMap3 = sap.ui.getCore().byId(sTestID);
            QUnit.ok(!oMap3, "UI5 Object cannot be found");

            oMap.destroy();

        });

        QUnit.test("simulate latency on load", function(assert) {
            var oMap = new Map();

            // Act
            stubGoogleMapsLoaded(this);
            oMap.placeAt("qunit-fixture");
            sap.ui.getCore().applyChanges();

            //Assert
            QUnit.strictEqual(oMap.subscribed, true, "subscribed to GMAPS load");
        });

        QUnit.module("Map Test Options");

        QUnit.test("Default config test", function() {
            // Arrange
            var oMap = new Map();

            // Assert
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

        QUnit.test("Set goolemap options on creation", function() {
            // Arrange
            var oMap = new Map({
                lat: MAP_POSITION.lat,
                lng: MAP_POSITION.lng,
                width: "20em",
                height: "10em",
                zoom: 10,
                disableDefaultUI: false,
                mapTypeId: MapTypeId.TERRAIN,
            });
            oMap.placeAt("qunit-fixture");
            sap.ui.getCore().applyChanges();

            // Assert
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

            oMap.destroy();
        });

        QUnit.test("Set goolemap options after creation", function(assert) {
            // Arrange
            var delay = 1000;
            var done = assert.async();
            var oMap = new Map();
            oMap.placeAt("qunit-fixture");
            sap.ui.getCore().applyChanges();

            setTimeout(function() {
                // Act
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

                // Assert
                setTimeout(function() {
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
                    done();
                    oMap.destroy();
                }, delay);
            }, delay);


        });

        QUnit.module("Map Test Events");

        QUnit.test("zoom changed", function() {
            // Arrange
            var oMap = new Map();
            oMap.placeAt("qunit-fixture");
            sap.ui.getCore().applyChanges();

            // Act
            oMap.map.setZoom(5);
            oMap.map.setMapTypeId(MapTypeId.HYBRID);
            sap.ui.getCore().applyChanges();

            // Assert
            QUnit.strictEqual(oMap.getZoom(), 5, "set zoom found");
            QUnit.strictEqual(oMap.getMapTypeId(), 'hybrid', "set mapTypeID found");
            oMap.destroy();
        });

        QUnit.test("dragging", function(assert) {
            // Arrange
            var delay = 500;
            var done = assert.async();
            var oMap = new Map();
            oMap.placeAt("qunit-fixture");
            sap.ui.getCore().applyChanges();

            // Assert
            oMap.isDragging(true);
            oMap.placeAt("qunit-fixture");
            sap.ui.getCore().applyChanges();

            // Assert
            setTimeout(function() {
                QUnit.strictEqual(oMap._dragging, false, "has stopped dragging");

                done();
                oMap.destroy();
            }, delay);

        });

        QUnit.test("ready event", function(assert) {
            // Arrange
            var done = assert.async();
            var delay = 1000;
            var readySpy = this.spy();
            var oMap = new Map({
                ready: readySpy

            });
            oMap.placeAt("qunit-fixture");
            sap.ui.getCore().applyChanges();

            // Assert
            setTimeout(function() {
                QUnit.strictEqual(readySpy.callCount, 1, "Ready event called");
                done();
                oMap.destroy(); // Clean up
            }, delay);
        });

        QUnit.test("click event", function(assert) {
            // Arrange
            var done = assert.async();
            var delay = 10;
            var clickSpy = this.spy();

            var oMap = new Map({
                click: clickSpy

            });
            oMap.placeAt("qunit-fixture");
            sap.ui.getCore().applyChanges();

            // Act
            // fire a click on the map
            oMap.trigger("click", { latLng: MapUtils.objToLatLng(MAP_POSITION) });

            // Assert
            setTimeout(function() {
                QUnit.strictEqual(clickSpy.callCount, 1, "Click event called");
                done();
                oMap.destroy(); // Clean up
            }, delay);
        });

        QUnit.test("notify aggregations", function(assert) {
            // Arrange
            var done = assert.async();
            var delay = 100;
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
            });
            oMap.placeAt("qunit-fixture");
            sap.ui.getCore().applyChanges();


            // Assert
            setTimeout(function() {
                QUnit.strictEqual(oMap.getMarkers().length, 1, "has one marker");
                QUnit.strictEqual(oMap.getPolylines().length, 1, "has one polyline");
                QUnit.strictEqual(oMap.getPolygons().length, 1, "has one polygon");
                QUnit.strictEqual(!!oMap.getDirections(), true, "has one direction");
                QUnit.strictEqual(!!oMap.getMarkerCluster(), true, "has one marker cluster");
                done();
                oMap.destroy();
            }, delay);
        });
    });
