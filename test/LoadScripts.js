sap.ui.define(
    [
        "openui5/googlemaps/loadScripts", "openui5/googlemaps/MapsApi"
    ],
    function(LoadScripts, MapsApi) {
        "use strict";
        QUnit.module("LoadScripts");

        QUnit.test("fake loading", function(assert) {
            // arrange
            this.stub(google.maps, "loaded", undefined);

            var loadScriptsSpy = this.spy();

            this.stub(jQuery.sap, "includeScript", loadScriptsSpy);


            // act
            LoadScripts.loadFromMapsApi(new MapsApi());

            // assert
            assert.strictEqual(loadScriptsSpy.callCount, 1, "include script called");
        });

        QUnit.test("test cannot load twice ", function(assert) {
            // arrange
            LoadScripts.loaded = true;
            // this.stub(LoadScripts, "loaded", true);

            //warning stub
            var iWarningCount = 0,
                sMessage = "";

            this.stub(jQuery.sap.log, "warning", function(sMsg) {
                iWarningCount++;
                sMessage = sMsg;
            });

            // act
            LoadScripts.loadFromMapsApi(new MapsApi());

            // assert
            assert.strictEqual(iWarningCount, 1, "warning hit once");
            assert.strictEqual(sMessage, "Can't load the Google Api scripts twice", "correct warning");
        });

        QUnit.test("fake loading callback", function(assert) {
            // arrange

            // stub out the event name in case others controls still listening
            this.stub(LoadScripts, "notifyEvent", "test");

            var loadedEventSpy = this.spy();
            sap.ui.getCore().getEventBus().subscribe(LoadScripts.notifyEvent, loadedEventSpy, this);

            // act
            LoadScripts.callBack();

            // assert
            assert.strictEqual(loadedEventSpy.callCount, 1, "loaded event called");
        });
    });
