    sap.ui.controller("testapp.view.Master", {

        onInit: function() {
            this.list = this.byId('places');
            sap.ui.getCore().getEventBus().subscribe("placeSelected", this.onPlaceSelected, this);
        },

        handleListSelect: function(oEvent) {
            sap.ui.getCore().getEventBus().publish("listSelected", {
                context: oEvent.getParameter("listItem").getBindingContext()
            });
        },

        onPlaceSelected: function(sChannelId, sEventId, oData) {
            var that = this;
            this.list.getItems().forEach(function(item) {
                if (item.getTitle() === oData.location.name && that.list.getSelectedItem() !== item) {
                    that.list.setSelectedItem(item, true);
                }
            });
        }

    });