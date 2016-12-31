sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {
    "use strict";
    return UIComponent.extend("testapp.Component", {
        metadata: {
            manifest: "json"
        },
        init: function() {
            sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
        },

        createContent: function() {
            //create root view
            var oView = sap.ui.view({
                id: "idViewRoot",
                viewName: "testapp.view.Root",
                type: "XML",
                viewData: {
                    component: this
                }
            });

            // done
            return oView;
        }
    });
});
