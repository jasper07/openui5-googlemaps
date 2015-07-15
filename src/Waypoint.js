sap.ui.define(['jquery.sap.global', 'sap/ui/core/Control', 'google.maps', './MapUtils'],
    function(jQuery, Control, gmaps, utils) {
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
                }
            }

        });

        Waypoint.prototype.getWaypoint = function() {
            var aWaypoint = [];
            var oWaypoint = {};

            oWaypoint.location = this.getLocation();
            oWaypoint.stopover = this.getStopOver();
            aWaypoint.push(oWaypoint);
            return aWaypoint;
        };

        return Waypoint;

  }, /* bExport = */ true);
