/**
 * openui5-googlemaps - OpenUI5 Google Maps library
 * @version v0.0.10
 * @link http://jasper07.github.io/openui5-googlemaps/
 * @license MIT
 */sap.ui.define(['jquery.sap.global', 'sap/ui/core/Control', 'google.maps', './MapUtils'],
    function(jQuery, Control, Gmaps, MapUtils) {
        "use strict";

        var Waypoint = Control.extend('openui5.googlemaps.Waypoint', {
            metadata: {
                properties: {
                    // either a name _or_ comma separated lat/long pair
                    'location': {
                        type: 'string'
                    },
                    'stopover': {
                        type: 'boolean'
                    }
                },
                renderer: {}
            }
        });

        Waypoint.prototype.createWaypoint = function() {
          if (!this.waypoint) {
              this.waypoint = new Gmaps.DirectionsWaypoint();
          }
          this.waypoint.location = this.getLocation();
          this.waypoint.stopover = this.getStopover();
        };

        Waypoint.prototype.getOptions = function() {
            var options = {};
            options.location = this.getLocation();
            options.stopover = this.getStopover();
        };

        return Waypoint;

  }, /* bExport = */ true);
