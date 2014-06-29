test("a basic test example", function(assert) {
    var value = "hello";
    assert.equal(value, "hello", "We expect value to be hello");
});

// var MAP_ID = 'MAP_TEST';
// var MAP_POSITION = {};
// MAP_POSITION.lat = "-33.895";
// MAP_POSITION.lng = "151.275";

// module("Map - defaults test");

// asyncTest("Object Creation and Destroy with Id", function() {

//     var testID = "MAP1";
//     var oMap = new openui5.googlemaps.Map(testID, {});

//     strictEqual(oMap.getId(), testID, "Map has ID: " + testID);
//     oMap.placeAt("uiArea2");


//     setTimeout(function() {

//         // find just created object byId
//         var oMap2 = sap.ui.getCore().byId(testID);
//         ok( !! oMap2, "Object created and found byId");
//         ok(oMap2.$().size() > 0, "DOM has some content")

//         // Destroy object
//         oMap2.destroy();

//         ok(oMap2.$().size() == 0, "DOM content destroyed")

//         // try to find destroyed object
//         setTimeout(function() {

//             var oMap3 = sap.ui.getCore().byId(testID);
//             ok(!oMap3, "UI5 Object cannot be found");

//             start();
//         }, 0);
//     }, 0);
// });


// module("Map Test Defaults");

// asyncTest("Default config test", function() {
//     var testID = "MAP3";
//     var oMap = new openui5.googlemaps.Map(testID, {});

//     strictEqual(oMap.getLat(), undefined, "default latitude found ");
//     strictEqual(oMap.getLng(), undefined, "default longitude found ");
//     strictEqual(oMap.getDisableDefaultUI(), true, "disable default UI found ");

//     oMap.placeAt("uiArea3");
// });




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