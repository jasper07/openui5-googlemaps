sap.ui.define(
    [
        "openui5/googlemaps/Polygon", "openui5/googlemaps/Map", "openui5/googlemaps/MapUtils", "sap/ui/model/json/JSONModel"
    ],
    function(Polygon, Map, MapUtils, JSONModel) {
        "use strict";
        var MAP_ID = 'MAP_TEST';

        var oModel = new JSONModel(jQuery.sap.getModulePath("test.unit.data", "/Data.json"));

        sap.ui.getCore().setModel(oModel);


        QUnit.module("Polygon - defaults test");
        QUnit.test("create Polygon on Map", function(assert) {
            // Arrange
            var oPoly1 = new Polygon("POLY1", {
                paths: "{/Beaches}",
                visible: false
            });

            var oMap = new Map(MAP_ID, {
                lat: "{/Pyrmont/lat}",
                lng: "{/Pyrmont/lng}",
                polygons: [oPoly1]
            });
            oMap.setModel(oModel);
            oMap.placeAt("qunit-fixture");
            sap.ui.getCore().applyChanges();

            // Assert
            var oPoly = sap.ui.getCore().byId("POLY1");
            assert.ok(oPoly, "Polygon rendered");
            assert.ok(oPoly.map, "Map attached");
            assert.strictEqual(oPoly.getVisible(), false, "Polygon not visible");

            oPoly.setVisible(true);
            assert.strictEqual(oPoly.getVisible(), true, "Polygon is visible");

            oPoly.destroy(); //cleanup
            oMap.destroy();
        });
    });
