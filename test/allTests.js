sap.ui.define([
    "test/unit/Map",
    "test/unit/MapUtils",
    "test/unit/Marker",
    "test/unit/Polygon",
    "test/unit/Polyline",
    "test/unit/Directions",
    "test/unit/MarkerCluster",
    "test/unit/ScriptsUtil"
], function() {

    // Phantom js does not have a function.bind implementation so we are using a polyfill
    if (!Function.prototype.bind) {
        Function.prototype.bind = function(oThis) {
            return jQuery.proxy(this, oThis);
        };
    }

    // Phantom js doesnt have a geolocation function so mock it
    if (navigator.geolocation === undefined) {
        navigator.geolocation = {
            getCurrentPosition: function() {}
        };
    }


    /**
     * Delayed start of QUnit or KarmaJS might break.
     * @returns {void}
    //  */
    function checkStart() {
       'use strict';
        var aModules, i, iLength;

        if (!window['sap-ui-config'] || !window['sap-ui-config'].libs || !sap) {
            setTimeout(checkStart, 500);
            return;
        }

        // aModules = window['sap-ui-config'].libs.replace(/sap./g, '').replace(/\s/g, '').split(',');

        // for (i = 0, iLength = aModules.length; i < iLength; i++) {

        //     if ((aModules[i].indexOf('.') !== -1 && !sap[aModules[i].split('.')[0]]) || (aModules[i].indexOf('.') === -1 && !sap[aModules[i]])) {

        //         setTimeout(checkStart, 500);

        //         return;
        //     }
        // }

        google.maps.isLoaded.then(function() {
            // QUnit.load();
            QUnit.start();
        });
    }

    checkStart();
});
