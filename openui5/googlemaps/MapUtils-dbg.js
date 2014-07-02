/**
 * openui5-googlemaps - OpenUI5 Google Maps library
 * @version v0.0.0
 * @link http://jasper07.github.io/openui5-googlemaps/
 * @license MIT
 *//**
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

        MapUtils.search = function(oRequest, fnCallback) {
            return new gmaps.Geocoder().geocode(oRequest, fnCallback);
        };

        MapUtils.currentPosition = function(fnCallback) {
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            var success = function(oPosition) {
                var position = {};
                position.lat = oPosition.coords.latitude;
                position.lng = oPosition.coords.longitude;
                fnCallback(position);
            };

            var error = function(err) {
                jQuery.sap.log.info('ERROR(' + err.code + '): ' + err.message);
            };

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success, error, options);
            }
        };
        return MapUtils;
    }, true);