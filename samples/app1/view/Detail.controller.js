sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'testapp1/util/Formatter'
], function(Controller, formatter) {
    "use strict";

    return Controller.extend("testapp1.view.Detail", {
        formatter: formatter
    });
});
