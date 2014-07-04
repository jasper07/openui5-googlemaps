sap.ui.define(['jquery.sap.global'],
    function(jQuery) {
        "use strict";

        var Formatter = {};

        Formatter.info = function(oV1, oV2, oV3) {
            var str = jQuery('<div class="marker-info-win">' +
                '<div class="marker-inner-win"><span class="info-content">' +
                '<h1 class="marker-heading">' + oV1 + '</h1>' +
                '' + oV2 + '<br>' + oV3 +
                '</span></div></div>');
            return str[0].outerHTML;
        };

        return Formatter;
    }, true);