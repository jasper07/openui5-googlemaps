sap.ui.controller("testapp.view.Detail", {
    onInit: function(oEvent) {
        sap.ui.getCore().getEventBus().subscribe("listSelected", this.onListSelected, this);
        this.oPage = this.byId("page1");
        this.oMap = this.byId("map1");
        this.oChart = this.byId("chart1");
        this.showPolyline = false;
        this.showPolygon = false;
    },

    onMapReady: function(oEvent) {
        if (this.selectedLocation === undefined) {
            var aBeaches = this.getView().getModel().getData().beaches;

            // set flag image
            var nBeaches = aBeaches.map(function(oBeach){
                oBeach.icon = this._getImage();
                return oBeach;
            }.bind(this));

            this._styleMap();

            this.selectedLocation = aBeaches[aBeaches.length - 1]; //Cronulla
            this.getView().getModel().setData({beaches: nBeaches});
            this.setupPolylines();
            this.setupPolygons();
        }
        this.setLocation();
    },

    setLocation: function(bPublish) {
        this.markerWindowOpen(this.selectedLocation);
        this.setChartData(this.selectedLocation.columns);
        sap.ui.getCore().getEventBus().publish("placeSelected", {
            location: this.selectedLocation
        });
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
        this.selectedLocation = oEvent.getParameter('context').getObject();
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
    setupPolylines: function() {
        if (this.oMap.getPolylines().length > 0) {
            return;
        }

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
            visible: this.showPolyline,
            icons: [{
                icon: lineSymbol,
                offset: '0',
                repeat: '20px'
            }]
        }));

    },

    setupPolygons: function() {
        if (this.oMap.getPolygons().length > 0) {
            return;
        }

        var center = {
            lat: this.oMap.getLat(),
            lng: this.oMap.getLng()
        };
        this.oMap.addPolygon(new openui5.googlemaps.Polygon({
            paths: jQuery.merge([center], this.getPaths()),
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            visible: this.showPolygon
        }));
    },

    onShowPolyline: function(oEvent) {
        this.showPolyline = !this.showPolyline;
        that = this;
        if (this.oMap.getPolylines()) {
            this.oMap.getPolylines().forEach(function(oControl) {
                oControl.setVisible(that.showPolyline);
            });
        }
    },

    onShowPolygon: function(oEvent) {
        this.showPolygon = !this.showPolygon;
        that = this;
        if (this.oMap.getPolygons()) {
            this.oMap.getPolygons().forEach(function(oControl) {
                oControl.setVisible(that.showPolygon);
            });
        }
    },

    _getImage: function() {
        return {
            url: "./images/beachflag.png",
            size: new google.maps.Size(20, 32),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 32)
        };
    },

    _styleMap: function(){
        //style the map
        var styledMapType = new google.maps.StyledMapType(this._aMapStyle);
        this.oMap.map.mapTypes.set('styled_map', styledMapType);
        this.oMap.map.setMapTypeId('styled_map');
    },

    _aMapStyle:[
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]
});