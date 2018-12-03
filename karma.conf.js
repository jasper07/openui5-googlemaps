/* eslint-env es6, eslint-disable no-var, prefer-arrow-callback */
/*eslint strict: [2, "never"]*/
module.exports = config => {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: "",

        // How long will Karma wait for a message from a browser before disconnecting from it (in ms).
        browserNoActivityTimeout: 2000000,

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ["openui5", "qunit"],

        // list of files / patterns to load in the browser
        files: [
            { pattern: "src/**", included: false, served: true, watched: false, nocache: false },
            "test/**/allTests.js",
            { pattern: "test/**/*.*", included: false, served: true }
        ],

        // In case an absolute URL is used at some point of the code, a proxy configuration is required.
        proxies: {
            "/src/": "/base/src/",
            "/test/": "/base/test/"
        },

        // test results reporter to use
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ["progress", "coverage", "coveralls"],

        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
        preprocessors: {
            "src/**/!(markerclusterer).js": ["coverage"]
        },

        // Configuration of coverage reporter
        // check coverage thresholds
        // output summary to the CLI
        // output lcov for coveralls
        coverageReporter: {
            check: {
                global: {
                    statements: 60,
                    branches: 60,
                    functions: 60,
                    lines: 60,
                    excludes: []
                }
            },
            dir: "reports/coverage",
            subdir: function() {
                return "";
            },
            reporters: [{
                type: "text-summary"
            }, {
                type: "html",
                subdir: "html"
            }, {
                type: "lcovonly",
                subdir: "lcov"
            }]
        },

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ["PhantomJS_custom"], //"Chrome"], "ChromeDebugging"],

        // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
        phantomjsLauncher: {
            exitOnResourceError: false
        },  

        // you can define custom flags
        customLaunchers: {
            "PhantomJS_custom": {
                base: "PhantomJS",
                options: {
                    viewportSize: {
                        width: 1440,
                        height: 900
                    },
                    customHeaders: {
                        DNT: "1"
                    },
                    windowName: "my-window",
                    settings: {
                        webSecurityEnabled: false,
                        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.87 Safari/537.36"
                    }
                },
                flags: ["--load-images=true", "--debug=false", "--disk-cache=false"],
                debug: true
            },
            "ChromeDebugging": {
                base: "Chrome",
                flags: ["--remote-debugging-port=9333"]
            }
        },

        openui5: {
            path: "https://openui5.hana.ondemand.com/resources/sap-ui-core.js",
            useMockServer: false
        },

        // How the client should execute the test, like run in an iframe, capture the console and so on.
        client: {
            captureConsole: true,
            clearContext: true,
            useIframe: false,
            qunit: {
                showUI: true,
                testTimeout: 15000,
                // autostart: false,
                autoload: false
            },
            openui5: {
                config: {
                    // theme: "sap_belize",
                    libs: "sap.m, openui5.googlemaps",
                    // compatVersion: "edge",
                    // frameOptions: "allow",
                    // preload: "async",
                    // animation: "false",
                    debug: "false",
                    resourceroots: {
                        "openui5.googlemaps": "/src/",
                        "test.unit": "/test/openui5/googlemaps/qunit"
                    }
                }
            }
        },

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_ERROR,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        hostname: "127.0.0.1",

        port: 9876
    });
};