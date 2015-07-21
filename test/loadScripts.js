sap.ui.define(
    [
        "openui5/googlemaps/loadScripts"
    ],
    function(loadScripts) {
        "use strict";

        QUnit.module("loadScripts - defaults test");
        QUnit.test("a basic test example", function(assert) {
            var value = "hello";
            QUnit.assert.equal(value, "hello", "We expect value to be hello");
        });

    });