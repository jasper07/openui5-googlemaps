jQuery.sap.declare("testapp.Component");

sap.ui.core.UIComponent.extend("testapp.Component", {

    init: function() {
        // W3C googlemaps key test
        // window.GMAPS_API_KEY = 'AIzaSyDY0kkJiTPVd2U7aTOAwhc9ySH6oHxOIYM';

        //load googlemaps library
        sap.ui.getCore().loadLibrary("openui5.googlemaps", "../../openui5/googlemaps/");

        openui5.googlemaps.ScriptsUtil.setApiKey('AIzaSyDY0kkJiTPVd2U7aTOAwhc9ySH6oHxOIYM');

        //register controls library
        jQuery.sap.registerResourcePath('controls', '../controls');

        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
    },

    createContent: function() {
        // create root view
        var oView = sap.ui.view({
            id: "idViewRoot",
            viewName: "testapp.view.Root",
            type: "XML",
            viewData: {
                component: this
            }
        });

        // set data model on root view
        oView.setModel(new sap.ui.model.json.JSONModel("model/mock.json"));

        // set i18n model
        var i18nModel = new sap.ui.model.resource.ResourceModel({
            bundleUrl: "i18n/messageBundle.properties"
        });
        oView.setModel(i18nModel, "i18n");

        // done
        return oView;
    }
});