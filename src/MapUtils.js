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

        MapUtils.search = function(oRequest, fnCallback) {
            return new gmaps.Geocoder().geocode(oRequest, fnCallback);
        };

        MapUtils.currentPosition = function(fnSuccess, fnError) {
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            var success = function(oPosition) {
                var position = {};
                position.lat = oPosition.coords.latitude;
                position.lng = oPosition.coords.longitude;
                fnSuccess(position);
            };

            var error = function(err) {
                jQuery.sap.log.info('ERROR(' + err.code + '): ' + err.message);
                if (fnError) {
                    fnError(err);
                }
            };

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success, error, options);
            }
        };

        /* get geocode of current positon, return formatted address
http://gmaps-samples-v3.googlecode.com/svn/trunk/draggable-markers/draggable-markers.html
        */
        MapUtils.geocodePosition = function(oPostion, fnCallback) {
            var responses = function(results) {
                if (results && results.length > 0) {
                    fnCallback(results[0].formatted_address);
                } else {
                    fnCallback('Cannot determine address at this location.');
                }
            };

            new gmaps.Geocoder().geocode({
                latLng: oPostion //??
            }, responses);
        };

        return MapUtils;
    }, true);