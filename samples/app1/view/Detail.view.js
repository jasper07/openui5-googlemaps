  sap.ui.jsview("testapp.view.Detail", {

      getControllerName: function() {
          return "testapp.view.Detail";
      },

      /**
       *
       * @param oController may be null
       * @returns {sap.ui.cre.Control}
       */
      createContent: function(oController) {
          var aControls = [];

          //Content structure of info Window for the Markers
          var oMarkers = new openui5.googlemaps.Marker({
              lat: '{lat}',
              lng: '{lng}',
              info: {
                  parts: [{
                      path: "brewName"
                  }, {
                      path: "brewerName"
                  }, {
                      path: "brewType"
                  }],
                  formatter: function(oV1, oV2, oV3) {
                      var str = jQuery('<div class="marker-info-win">' +
                          '<div class="marker-inner-win"><span class="info-content">' +
                          '<h1 class="marker-heading">' + oV1 + '</h1>' +
                          '' + oV2 + '<br>' + oV3 +
                          '</span></div></div>');
                      return str[0].outerHTML;
                  }
              },
              icon: 'http://www.w3schools.com/googleapi/pinkball.png',
              draggable: false
          });

          var map = new openui5.googlemaps.Map({
              height: '400px',
              center: {
                  parts: ["lat", "lng"],
                  formatter: function(oV1, oV2) {

                      if (this.getBindingContext()) {
                          var obj = this.getBindingContext().getObject();
                          return {
                              lat: obj.lat,
                              lng: obj.lng
                          }
                      }
                      return {
                          lat: oV1,
                          lng: oV2
                      };
                  },
              },
              zoom: 11,
              markers: [oMarkers]
          }).addStyleClass("google_map");


          var oText = new sap.m.Text();
          oText.bindText({
              parts: ["lat", "lng"]
          });



          var ovb = new sap.m.VBox({
              items: [map]
          });

          var oPage = new sap.m.Page({
              title: "{brewName}",
              enableScrolling: false,
              content: [ovb]
          });

          return oPage;
      }

  });