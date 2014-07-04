    sap.ui.controller("testapp.view.Master", {

        handleListSelect: function(oEvent) {
            this.navigation.navTo("idViewRoot--idViewDetail", oEvent.getParameter("listItem").getBindingContext());
        }


    });