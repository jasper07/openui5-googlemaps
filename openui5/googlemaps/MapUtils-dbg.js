/**
 * openui5-googlemaps - OpenUI5 Google Maps library
 * @version v0.0.18
 * @link http://jasper07.github.io/openui5-googlemaps/
 * @license MIT
 */sap.ui.define(['jquery.sap.global', 'google.maps'],
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

        MapUtils.getRadius = function(ui5map){
            var bounds = ui5map.map.getBounds();

            var center = bounds.getCenter();
            var ne = bounds.getNorthEast();

            // r = radius of the earth in statute miles
            var r = 3963.0;

            // Convert lat or lng from decimal degrees into radians (divide by 57.2958)
            var lat1 = center.lat() / 57.2958;
            var lon1 = center.lng() / 57.2958;
            var lat2 = ne.lat() / 57.2958;
            var lon2 = ne.lng() / 57.2958;

            // distance = circle radius from center to Northeast corner of bounds
            var dis = r * Math.acos(Math.sin(lat1) * Math.sin(lat2) +
                    Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1));
            return dis;
        };

        return MapUtils;
    }, true);