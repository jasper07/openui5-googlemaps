    sap.ui.controller("testapp1.view.Master", {

        handleListSelect: function(oEvent) {
            this.navigation.navTo("idViewRoot--idViewDetail", oEvent.getParameter("listItem").getBindingContext());
        }


    });