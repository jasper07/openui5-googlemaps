/**
 * openui5-googlemaps - OpenUI5 Google Maps library
 * @version v0.0.0
 * @link http://jasper07.github.io/openui5-googlemaps/
 * @license MIT
 */sap.ui.define(['jquery.sap.global', 'google.maps'],
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

        // MapUitls.search = function(oRequest, fCallback) {
        //     return new gmaps.Geocoder().geocode(oRequest, fCallback);
        // };

        // MapUitls.currentPosition = function() {
        //     if (navigator.geolocation) {
        //         navigator.geolocation.getCurrentPosition(function(pos) {
        //                 geocoder = new google.maps.Geocoder();
        //                 var latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

        //             }
        //         }

        return MapUtils;
    }, true);