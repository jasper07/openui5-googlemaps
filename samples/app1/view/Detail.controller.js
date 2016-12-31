sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'testapp/util/Formatter'
], function(Controller, formatter) {
    "use strict";

    return Controller.extend("testapp.view.Detail", {
        formatter: formatter
    });
});
