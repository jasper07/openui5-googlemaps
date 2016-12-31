sap.ui.define(
    [
        "openui5/googlemaps/Map",
        "openui5/googlemaps/MapsApi",
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
    function(Map, MapsApi, MapUtils, MapTypeId, Marker, Polyline, Polygon, Directions, MarkerCluster) {
        "use strict";

        sinon.config.useFakeTimers = false;

        var MAP_ID = 'MAP_TEST';
        var MAP_POSITION = {};
        MAP_POSITION.lat = parseFloat("-33.895");
        MAP_POSITION.lng = parseFloat("151.275");

        QUnit.module("Map - defaults test");


        QUnit.test("Object Creation and Destroy with Id", function(assert) {

            // Arrange    
            var sTestID = "MAP1";
            var oMap = new Map(sTestID, {
                lat: undefined,
                lng: undefined
            });

            assert.strictEqual(oMap.getId(), sTestID, "Map has ID: " + sTestID);
            oMap.placeAt("qunit-fixture");

            sap.ui.getCore().applyChanges();
            var oMap2 = sap.ui.getCore().byId(sTestID);

            // Act
            assert.ok(!!oMap2, "Object created and found byId");
            assert.ok(oMap2.$().size() > 0, "DOM has some content");
            assert.strictEqual(oMap.map, undefined, "no lat lng no map");


            // Assert
            // Destroy object
            oMap2.destroy();
            sap.ui.getCore().applyChanges();

            assert.ok(oMap2.$().size() === 0, "DOM content destroyed");

            // try to find destroyed object
            var oMap3 = sap.ui.getCore().byId(sTestID);
            assert.ok(!oMap3, "UI5 Object cannot be found");

            oMap.destroy();

        });

        QUnit.test("simulate latency on load", function(assert) {
            var oMap = new Map();
            var loadScriptsSpy = this.spy();
            this.stub(google.maps, "loaded", undefined);
            this.stub(jQuery.sap, "includeScript", loadScriptsSpy);

            // Act
            oMap.placeAt("qunit-fixture");
            sap.ui.getCore().applyChanges();

            //Assert
            assert.strictEqual(oMap.subscribed, true, "subscribed to GMAPS load");
            assert.strictEqual(loadScriptsSpy.callCount, 1, "include script called");
            oMap.destroy();
        });

        QUnit.module("Map Test Options");

        QUnit.test("Default config test", function(assert) {
            // Arrange
            var oMap = new Map();

            // Assert
            assert.strictEqual(oMap.getLat(), 1, "default latitude found ");
            assert.strictEqual(oMap.getLng(), 1, "default longitude found ");
            assert.strictEqual(oMap.getDisableDefaultUI(), true, "disable default UI found ");
            assert.ok(MapUtils.floatEqual(oMap.getLat(), 1), "default latitude found ");
            assert.ok(MapUtils.floatEqual(oMap.getLng(), 1), "default longitude found ");
            assert.strictEqual(oMap.getDisableDefaultUI(), true, "disable default UI found ");
            assert.strictEqual(oMap.getWidth(), "auto", "default width found");
            assert.strictEqual(oMap.getHeight(), "20em", "default height found");
            assert.strictEqual(oMap.getZoom(), 8, "default zoom found");
            assert.strictEqual(oMap.getMapTypeId(), "roadmap", "default mapTypeID found");
            assert.strictEqual(oMap.getPanControl(), false, "default panControl found");
            assert.strictEqual(oMap.getMapTypeControl(), false, "default mapTypeControl found");
            assert.strictEqual(oMap.getStreetViewControl(), false, "default streetViewControl found");
            assert.strictEqual(oMap.getFitToMarkers(), false, "default fit to markers false");
            oMap.destroy();
        });

        QUnit.test("Set goolemap options on creation", function(assert) {
            // Arrange
            var oMap = new Map({
                lat: MAP_POSITION.lat,
                lng: MAP_POSITION.lng,
                width: "20em",
                height: "10em",
                zoom: 10,
                disableDefaultUI: false,
                mapTypeId: MapTypeId.TERRAIN,
                fitToMarkers: true
            });
            oMap.placeAt("qunit-fixture");
            sap.ui.getCore().applyChanges();

            // Assert
            assert.ok(MapUtils.floatEqual(oMap.getLat(), MAP_POSITION.lat), "set latitude found ");
            assert.ok(MapUtils.floatEqual(oMap.getLng(), MAP_POSITION.lng), "set longitude found ");
            assert.strictEqual(oMap.getDisableDefaultUI(), false, "enabled default UI found ");
            assert.strictEqual(oMap.getWidth(), "20em", "set width found");
            assert.strictEqual(oMap.getHeight(), "10em", "set height found");
            assert.strictEqual(oMap.getZoom(), 10, "set zoom found");
            assert.strictEqual(oMap.getMapTypeId(), 'terrain', "set mapTypeID found");
            assert.strictEqual(oMap.getPanControl(), false, "default panControl found");
            assert.strictEqual(oMap.getMapTypeControl(), false, "default mapTypeControl found");
            assert.strictEqual(oMap.getStreetViewControl(), false, "default streetViewControl found");
            assert.strictEqual(oMap.getFitToMarkers(), true, "fit to markers set");

            oMap.destroy();
        });

        QUnit.test("Set goolemap options after creation", function(assert) {
            // Arrange
            var delay = 1000;
            var done = assert.async();
            var oMap = new Map();
            oMap.placeAt("qunit-fixture");
            sap.ui.getCore().applyChanges();

            // setTimeout(function(assert) {
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
                assert.ok(MapUtils.floatEqual(oMap.getLat(), MAP_POSITION.lat), "set latitude found ");
                assert.ok(MapUtils.floatEqual(oMap.getLng(), MAP_POSITION.lng), "set longitude found ");
                assert.strictEqual(oMap.getDisableDefaultUI(), false, "enabled default UI found ");
                assert.strictEqual(oMap.getWidth(), "20em", "set width found");
                assert.strictEqual(oMap.getHeight(), "10em", "set height found");
                assert.strictEqual(oMap.getZoom(), 10, "set zoom found");
                assert.strictEqual(oMap.getMapTypeId(), 'hybrid', "set mapTypeID found");
                assert.strictEqual(oMap.getPanControl(), true, "set panControl found");
                assert.strictEqual(oMap.getMapTypeControl(), true, "set mapTypeControl found");
                assert.strictEqual(oMap.getStreetViewControl(), true, "set streetViewControl found");
                assert.strictEqual(oMap.getZoomControl(), true, "set ZoomControl found");
                done();
                oMap.destroy();
            }, delay);
            // }, delay);


        });

        QUnit.module("Map Test Events");

        QUnit.test("zoom changed", function(assert) {
            // Arrange
            var oMap = new Map();
            oMap.placeAt("qunit-fixture");
            sap.ui.getCore().applyChanges();

            // Act
            oMap.map.setZoom(5);
            oMap.map.setMapTypeId(MapTypeId.HYBRID);
            sap.ui.getCore().applyChanges();

            // Assert
            assert.strictEqual(oMap.getZoom(), 5, "set zoom found");
            assert.strictEqual(oMap.getMapTypeId(), 'hybrid', "set mapTypeID found");
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
                assert.strictEqual(oMap._dragging, false, "has stopped dragging");

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
                assert.strictEqual(readySpy.callCount, 1, "Ready event called");
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
                assert.strictEqual(clickSpy.callCount, 1, "Click event called");
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
                assert.strictEqual(oMap.getMarkers().length, 1, "has one marker");
                assert.strictEqual(oMap.getPolylines().length, 1, "has one polyline");
                assert.strictEqual(oMap.getPolygons().length, 1, "has one polygon");
                assert.strictEqual(!!oMap.getDirections(), true, "has one direction");
                assert.strictEqual(!!oMap.getMarkerCluster(), true, "has one marker cluster");
                done();
                oMap.destroy();
            }, delay);
        });




        QUnit.module("Map - test map Api");


        QUnit.test("test loading google maps library from map control", function(assert) {
            // arrange
            var done = assert.async();
            var delay = 100;
            this.stub(google.maps, "loaded", undefined);

            var oLoadSpy = this.spy();
            this.stub(MapsApi.prototype, "load", oLoadSpy);

            // act
            var oMap = new Map({});

            oMap.placeAt("qunit-fixture");
            sap.ui.getCore().applyChanges();

            // Assert
            setTimeout(function() {
                assert.strictEqual(oLoadSpy.callCount, 1, "maps api load was called");
                done();
                oMap.destroy();
            }, delay);
        });

    });
