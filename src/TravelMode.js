sap.ui.define("openui5/googlemaps/TravelMode", ['jquery.sap.global'],
    function(jQuery) {
        "use strict";
        var TravelMode = {
            driving: 'DRIVING',
            walking: 'WALKING',
            bicycling: 'BICYCLING',
            transit: 'TRANSIT'
        };
        return TravelMode;

    }, /* bExport= */ true);