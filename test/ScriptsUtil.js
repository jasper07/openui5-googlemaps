sap.ui.define(
    [
        "openui5/googlemaps/ScriptsUtil"
    ],
    function(ScriptsUtil) {
        "use strict";

        var oConfig = {
            url: "http://maps.google.cn/maps/api/js",
            key: "AIzaSyDY0kkJiTPVd2U7aTOAwhc9ySH6oHxOIYM",
            params: {
                v: "3.20",
                language: "zh-CN",
                libraries: "weather,geometry,visualization"
            }
        };

        var sExpectedUrl = "http://maps.google.cn/maps/api/js?v=3.20&libraries=weather%2Cgeometry%2Cvisualization&language=zh-CN&key=AIzaSyDY0kkJiTPVd2U7aTOAwhc9ySH6oHxOIYM&callback=google.maps.callBack";

        QUnit.module("ScriptsUtil - defaults test");
        QUnit.test("ScriptsUtil test load", function(assert) {
            // arrange

            ScriptsUtil.setApiKey(oConfig.key);
            ScriptsUtil.setUrl(oConfig.url);
            ScriptsUtil.setParams(oConfig.params);

            var fnGetLoggerStub = sinon.stub(jQuery.sap, "includeScript", function(sUrl) {
                // assert
                assert.strictEqual(sUrl, sExpectedUrl, "the expected ulr");
            });

            // act
            google.maps.load(ScriptsUtil);


        });
    });
