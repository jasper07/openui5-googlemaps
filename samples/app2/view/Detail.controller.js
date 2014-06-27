sap.ui.controller("testapp.view.Detail", {
    onInit: function(oEvent) {
        sap.ui.getCore().getEventBus().subscribe("listSelected", this.onListSelected, this);
        this.oPage = this.byId("page1");
        this.oMap = this.byId("map1");
        this.oChart = this.byId("chart1");
    },

    onMapReady: function(oEvent) {
        if (this.selectedLocation === undefined) {
            var beaches = this.getView().getModel().getData().beaches;
            this.selectedLocation = beaches[beaches.length - 1]; //Cronulla
        }
        this.setLocation();
    },

    setLocation: function() {
        this.markerWindowOpen(this.selectedLocation);
        this.setChartData(this.selectedLocation.columns);
    },

    markerWindowOpen: function(oData) {
        var that = this;
        this.oMap.getMarkers().forEach(function(oMarker) {
            if (oMarker.getLat() === oData.lat && oMarker.getLng() === oData.lng) {
                that.oPage.setTitle(oMarker.getInfo());
                oMarker.infoWindowOpen();
            } else {
                oMarker.infoWindowClose();
            }
        });
    },

    setChartData: function(aData) {
        this.oChart.setVisible(true);
        this.oChart.setColumns(aData);
    },

    onListSelected: function(sChannelId, sEventId, oData) {
        this.selectedLocation = oData.context.getObject();
        this.setLocation();
    },

    onMarkerClick: function(oEvent) {
        this.selectedLocation = oEvent.getParameter('location');
        this.setLocation();
    },

    getPaths: function() {
        var aPaths = [];
        this.getView().getModel().getData().beaches.forEach(function(obj) {
            aPaths.push({
                lat: obj.lat,
                lng: obj.lng
            });
        });

        return aPaths;
    },

    onShowPolyline: function(oEvent) {
        this.showPolyline = !this.showPolyline;
        if (this.showPolyline) {
            var lineSymbol = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.5,
                scale: 4
            };

            this.oMap.addPolyline(new openui5.googlemaps.Polyline({
                path: this.getPaths(),
                strokeColor: "#0000FF",
                strokeOpacity: 0.5,
                strokeWeight: 0.2,
                icons: [{
                    icon: lineSymbol,
                    offset: '0',
                    repeat: '20px'
                }]
            }));
        } else {
            if (this.oMap.getPolylines()) {
                this.oMap.getPolylines().forEach(function(oControl) {
                    oControl.destroy();
                });
            }
        }
    },

    onShowPolygon: function(oEvent) {
        this.showPolygon = !this.showPolygon;
        if (this.showPolygon) {
            this.oMap.addPolygon(new openui5.googlemaps.Polygon({
                paths: jQuery.merge([this.oMap.getCenter()], this.getPaths()),
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35
            }));
        } else {
            if (this.oMap.getPolygons()) {
                this.oMap.getPolygons().forEach(function(oControl) {
                    oControl.destroy();
                });
            }
        }

    }
});