"use_strict"

var MAP_ID = 'MAP_TEST';
var MAP_POSITION = {};
MAP_POSITION.lat = parseFloat("-33.895");
MAP_POSITION.lng = parseFloat("151.275");


// var MapUtils = openui5.googlemaps.MapUtils ? openui5.googlemaps.MapUtils : {};

module("Map - defaults test");

asyncTest("Object Creation and Destroy with Id", function() {

    var testID = "MAP1";
    var oMap = new openui5.googlemaps.Map(testID, {});

    strictEqual(oMap.getId(), testID, "Map has ID: " + testID);
    oMap.placeAt("uiArea2");


    setTimeout(function() {

        // find just created object byId
        var oMap2 = sap.ui.getCore().byId(testID);
        ok( !! oMap2, "Object created and found byId");
        ok(oMap2.$().size() > 0, "DOM has some content")

        // Destroy object
        oMap2.destroy();

        ok(oMap2.$().size() === 0, "DOM content destroyed")

        // try to find destroyed object
        setTimeout(function() {

            var oMap3 = sap.ui.getCore().byId(testID);
            ok(!oMap3, "UI5 Object cannot be found");

            start();
        }, 0);
    }, 0);
});

module("Map Options Test", {
    setup: function() {

    },

    teardown: function() {}
});

test("Default options test", function() {
    var testID = "MAP3";
    var oMap = new openui5.googlemaps.Map(testID, {});

    var MapUtils = openui5.googlemaps.MapUtils;
    ok(MapUtils.floatEqual(oMap.getLat(), 1), "default latitude found ");
    ok(MapUtils.floatEqual(oMap.getLng(), 1), "default longitude found ");
    strictEqual(oMap.getDisableDefaultUI(), true, "disable default UI found ");
    strictEqual(oMap.getWidth(), "auto", "default width found");
    strictEqual(oMap.getHeight(), "10rem", "default height found");
    strictEqual(oMap.getZoom(), 8, "default zoom found");
    strictEqual(oMap.getMapTypeId(), 'roadmap', "default mapTypeID found");
    strictEqual(oMap.getPanControl(), false, "default panControl found");
    strictEqual(oMap.getMapTypeControl(), false, "default mapTypeControl found");
    strictEqual(oMap.getStreetViewControl(), false, "default streetViewControl found");
});

test("Check map options", function() {
    var oMap = sap.ui.getCore().byId(MAP_ID);
    var MapUtils = openui5.googlemaps.MapUtils;
    ok(MapUtils.floatEqual(oMap.getLat(), MAP_POSITION.lat), "set latitude found ");
    ok(MapUtils.floatEqual(oMap.getLng(), MAP_POSITION.lng), "set longitude found ");
    strictEqual(oMap.getDisableDefaultUI(), true, "disable default UI found ");
    strictEqual(oMap.getWidth(), "auto", "default width found");
    strictEqual(oMap.getHeight(), "10rem", "default height found");
    strictEqual(oMap.getZoom(), 8, "default zoom found");
    strictEqual(oMap.getMapTypeId(), 'roadmap', "default mapTypeID found");
    strictEqual(oMap.getPanControl(), false, "default panControl found");
    strictEqual(oMap.getMapTypeControl(), false, "default mapTypeControl found");
    strictEqual(oMap.getStreetViewControl(), false, "default streetViewControl found");
});

test("Check goolemap object", function() {
    var oMap = sap.ui.getCore().byId(MAP_ID).map;
    var MapUtils = openui5.googlemaps.MapUtils;
    ok(MapUtils.floatEqual(oMap.getCenter().lat(), MAP_POSITION.lat), "goolemap latitude found ");
    ok(MapUtils.floatEqual(oMap.getCenter().lng(), MAP_POSITION.lng), "goolemap longitude found ");
    strictEqual(oMap.disableDefaultUi, true, "goolemap default UI found ");
    strictEqual(oMap.getDiv().style.width, "auto", "goolemap width found");
    strictEqual(oMap.getDiv().style.height, "10rem", "dgoolemap height found");
    strictEqual(oMap.getZoom(), 8, "goolemap zoom found");
    strictEqual(oMap.getMapTypeId(), 'roadmap', "goolemap mapTypeID found");
    strictEqual(oMap.panControl, false, "goolemap panControl found");
    strictEqual(oMap.mapTypeControl, false, "goolemap mapTypeControl found");
    strictEqual(oMap.streetViewControl, false, "goolemap streetViewControl found");
});


asyncTest("Check changing intial values", function() {
    var MapUtils = openui5.googlemaps.MapUtils;
    var options = {};
    options.lat = MAP_POSITION.lat;
    options.lng = MAP_POSITION.lng;
    options.disableDefaultUi = true;
    options.width = "100px";
    options.height = "100px";
    options.zoom = 12;
    options.mapTypeID = 'streetview';
    options.panControl = true;
    options.mapTypeControl = true;
    options.streetViewControl = true;

    var readyCallback = function(oEvent) {
        start();
        //check event data
        ok(MapUtils.floatEqual(oEvent.getParameter('lat'), 1), "latitude in ready event");
        ok(MapUtils.floatEqual(oEvent.getParameter('lng'), 1), "longitude in ready event");
        ok((oEvent.getParameter('map')), "longitude in ready event");
        // map: this.map,
        //  context: this.getBindingContext(),
        //  lat: this.getLat(),
        //  lng: this.getLng()
        var oMap = sap.ui.getCore().byId("MAP4");
        strictEqual(oMap.map.getDiv().style.width, options.width, "goolemap width found");
        strictEqual(oMap.map.getDiv().style.height, options.height, "goolemap height found");

        oMap.setLat(MAP_POSITION.lat);
        oMap.setLng(MAP_POSITION.lng);

    };

    var changedCallback = function(oEvent) {
        start();
        //check event data
        ok(MapUtils.floatEqual(oEvent.getParameter('lat'), 1), "latitude in ready event");
        ok(MapUtils.floatEqual(oEvent.getParameter('lng'), 1), "longitude in ready event");
        ok((oEvent.getParameter('map')), "longitude in ready event");
    };

    setTimeout(function() {
        var testID = "MAP4";
        var oMap = new openui5.googlemaps.Map(testID, {
            lat: 1,
            lng: 1,
            width: options.width,
            height: options.height,
            ready: readyCallback,
            changed: changedCallback
        }).placeAt("uiArea2");

    }, 10);



    // var oMap = sap.ui.getCore().byId(MAP_ID).map;
    // var MapUtils = openui5.googlemaps.MapUtils;
    // ok(MapUtils.floatEqual(oMap.getCenter().lat(), MAP_POSITION.lat), "goolemap latitude found ");
    // ok(MapUtils.floatEqual(oMap.getCenter().lng(), MAP_POSITION.lng), "goolemap longitude found ");
    // strictEqual(oMap.disableDefaultUi, true, "goolemap default UI found ");

    // strictEqual(oMap.getZoom(), 8, "goolemap zoom found");
    // strictEqual(oMap.getMapTypeId(), 'roadmap', "goolemap mapTypeID found");
    // strictEqual(oMap.panControl, false, "goolemap panControl found");
    // strictEqual(oMap.mapTypeControl, false, "goolemap mapTypeControl found");
    // strictEqual(oMap.streetViewControl, false, "goolemap streetViewControl found");
});
// // test("DatePicker - empty input by default ", function() {
// //     var oDatePicker = sap.ui.getCore().byId("DATEPICKER");
// //     equal(oDatePicker.getValue(), "", "Default value for DatePicker should be empty string");
// // });

// // asyncTest("Open Calendar", function() {
// //     expect(1);

// //     core = sap.ui.getCore();
// //     ci = core.byId("DATEPICKER__ci");

// //     // Open Calendar
// //     ci.firePress();

// //     // asserts in 300ms
// //     setTimeout(function() {
// //         ok(true, "Passed and ready to resume!");

// //         // Press on Cancel button
// //         core.byId("__button0").firePress();

// //         start();
// //     }, 300);

// // });


// // test("DatePicker - empty input by default ", function() {
// //     var oMap = sap.ui.getCore().byId("DATEPICKER");
// //     equal(oDatePicker.getValue(), "", "Default value for DatePicker should be empty string");
// // });