sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent) {
    "use strict";
    return UIComponent.extend("testapp1.Component", {
        metadata: {
            manifest: "json"
        },
        init: function() {
            UIComponent.prototype.init.apply(this, arguments);
        },

        createContent: function() {
            //create root view
            var oView = sap.ui.view({
                id: "idViewRoot",
                viewName: "testapp1.view.Root",
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
