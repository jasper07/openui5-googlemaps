sap.ui.define(['jquery.sap.global', 'google.maps'],
    function(jQuery, gmaps) {
        "use strict";

        var MapUtils = {};

        /**
         * Get google maps LatLng object
         * @param {Object} oValue
         * @returns {google.maps.LatLng}
         */
        MapUtils.objToLatLng = function(oValue) {
            return new gmaps.LatLng(oValue.lat, oValue.lng);
        };


        /**
         * Get object with lng lat from google maps LatLng object
         * @param {google.maps.LatLng} oValue
         * @returns {object}
         */
        MapUtils.latLngToObj = function(oValue) {
            return {
                lat: oValue.lat(),
                lng: oValue.lng()
            };
        };

        /**
         * Comapre 2 floats for near equality
         * @param {Float} nVa1
         * @param {Float} nVal2
         * @returns {boolean}
         */
        MapUtils.floatEqual = function(nVal1, nVal2) {
            return (Math.abs(nVal1 - nVal2) < 0.000001);
        };

        /**
         * Comapre 2 objects for equality based on lat lng
         * @param {object} oValue1
         * @param {object} oValue2
         * @returns {boolean}
         */
        MapUtils.latLngEqual = function(oValue1, oValue2) {
            return this.floatEqual(oValue1.lat, oValue2.lat) && this.floatEqual(oValue1.lng, oValue2.lng);
        };

        /**
         * Get search results for geocode request
         * @param {Object} oRequest
         * @returns {jQuery.Promise}
         */
        MapUtils.search = function(oRequest) {
            var deferred = jQuery.Deferred();
            new gmaps.Geocoder().geocode(oRequest, deferred.resolve);
            return deferred.promise();
        };

        /**
         * Get Current Position
         * @returns {jQuery.Promise}
         */
        MapUtils.currentPosition = function() {
            var deferred = jQuery.Deferred();
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            var success = function(oPosition) {
                var position = {};
                position.lat = oPosition.coords.latitude;
                position.lng = oPosition.coords.longitude;
                deferred.resolve(position);
            };

            var error = function(err) {
                jQuery.sap.log.info('ERROR(' + err.code + '): ' + err.message);
                deferred.reject(err);
            };

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success, error, options);
            }
            return deferred.promise();
        };

        /**
         * Get Current Position
         * @param {Object} oPosition
         * @returns {jQuery.Promise}
         */
        MapUtils.geocodePosition = function(oPostion) {
            var deferred = jQuery.Deferred();

            var responses = function(results) {
                if (results && results.length > 0) {
                    deferred.resolve(results[0].formatted_address);
                } else {
                    deferred.reject('Cannot determine address at this location.');
                }
            };

            new gmaps.Geocoder().geocode({
                latLng: oPostion
            }, responses);

            return deferred.promise();
        };

        return MapUtils;
    }, true);