sap.ui.define(["jquery.sap.global", "sap/ui/core/Control", "google.maps", "./MapUtils"],
    function(jQuery, Control, Gmaps, MapUtils) {
        "use strict";

        var Waypoint = Control.extend("openui5.googlemaps.Waypoint", {
            metadata: {
                properties: {
                    // either a name _or_ comma separated lat/long pair
                    "location": {
                        type: "string"
                    },
                    "stopover": {
                        type: "boolean"
                    }
                },
                renderer: {}
            }
        });

        return Waypoint;

  }, /* bExport = */ true);
