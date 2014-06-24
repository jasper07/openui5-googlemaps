    sap.ui.controller("testapp.view.Master", {

        handleListSelect: function(oEvent) {
            sap.ui.getCore().getEventBus().publish("listSelected", {
                context: oEvent.getParameter("listItem").getBindingContext()
            });
        }
    });