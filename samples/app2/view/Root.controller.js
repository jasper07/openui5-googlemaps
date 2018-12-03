    sap.ui.controller("testapp.view.Root", {

        onInit: function(oEvent) {

            this.oRoot = this.getView().byId("idRoot");

            // Have child views use this controller for navigation
            var that = this;
            this.oRoot.getMasterPages().forEach(function(oPage) {
                oPage.getController().navigation = that;
            });

        }
    });