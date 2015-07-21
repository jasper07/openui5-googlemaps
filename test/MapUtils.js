sap.ui.define(
    [
        "openui5/googlemaps/MapUtils"
    ],
    function(MapUtils) {
        "use strict";

        QUnit.module("MapUtils - defaults test");
        QUnit.test("a basic test example", function(assert) {
            var value = "hello";
            QUnit.assert.equal(value, "hello", "We expect value to be hello");
        });

    });