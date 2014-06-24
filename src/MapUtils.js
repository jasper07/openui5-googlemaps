sap.ui.define(['jquery.sap.global', 'google.maps'],
    function(jQuery, gmaps) {
        "use strict";

        var MapUtils = {};
        MapUtils.objToLatLng = function(oValue) {
            return new gmaps.LatLng(oValue.lat, oValue.lng);
        };

        MapUtils.latLngToObj = function(oValue) {
            return {
                lat: oValue.lat(),
                lng: oValue.lng()
            };
        };

        MapUtils.floatEqual = function(nVal1, nVal2) {
            return (Math.abs(nVal1 - nVal2) < 0.000001);
        };

        MapUtils.latLngEqual = function(oValue1, oValue2) {
            return this.floatEqual(oValue1.lat, oValue2.lat) && this.floatEqual(oValue1.lng, oValue2.lng);
        };

        return MapUtils;
    }, true);