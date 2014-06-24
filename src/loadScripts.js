(function(window, jQuery) {
    "use strict";
    window.google = window.google || {};
    google.maps = google.maps || {};

    if (!google.maps.callback) {
        google.maps.callback = function() {
            google.maps.loaded = true;
            sap.ui.getCore().getEventBus().publish("google.maps.loaded");
        };

        google.maps.Animation = {
            BOUNCE: 1,
            DROP: 2,
            k: 3,
            j: 4
        };

        google.maps.MapTypeId = {
            ROADMAP: "roadmap",
            SATELLITE: "satellite",
            HYBRID: "hybrid",
            TERRAIN: "terrain"
        };

        var sScriptUrl = 'http://maps.google.com/maps/api/js?sensor=true&callback=google.maps.callback';

        if (window.GMAPS_API_KEY) {
            sScriptUrl = sScriptUrl + '&key=' + window.GMAPS_API_KEY;
        }

        //async load the scripts
        jQuery.sap.includeScript(sScriptUrl, "google.maps", null, null);
    }

}(window, jQuery));