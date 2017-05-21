/* eslint-env es6, eslint-disable no-var, prefer-arrow-callback */
/*eslint strict: [2, "never"]*/

const fs = require("fs");
const gulp = require("gulp");
const eslint = require("gulp-eslint");
const ui5preload = require("gulp-ui5-preload");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const clean = require("gulp-clean");
const rename = require("gulp-rename");
const header = require("gulp-header");
const streamify = require("gulp-streamify");
const sequence = require("run-sequence");
const shell = require("gulp-shell");
const bump = require("gulp-bump");
const replace = require("gulp-replace");
const imagemin = require("gulp-imagemin");
const semver = require("semver");
const pkg = require("./package.json");

const banner = ["/**",
    " * <%= pkg.name %> - <%= pkg.description %>",
    " * @version v<%= pkg.version %>",
    " * @link <%= pkg.homepage %>",
    " * @license <%= pkg.license %>",
    " */",
    ""
].join("\n");

const filePath = {
    src: "./src/*.js",
    test: "./test/*.js",
    dest: "./openui5/googlemaps"
};
const libNS = "openui5.googlemaps";

const getPackageJson = ()=> {
  return JSON.parse(fs.readFileSync("./package.json", "utf8"));
};


/**
 * Start the tests using karma.
 * @param  {boolean} singleRun - True means run once and end (CI), or keep running (dev)
 * @param  {Function} done - Callback to fire when karma is done
 * @return {undefined}
 */
function startTests(singleRun, done) {
    var Server = require("karma").Server;

   function karmaCompleted(karmaResult) {
        console.log("Karma completed");

        if (karmaResult === 1) {
            done("karma: tests failed with code " + karmaResult);
        } else {
            done();
        }
    }

    new Server({
        configFile: __dirname + "/karma.conf.js",
        singleRun: !!singleRun
    }, karmaCompleted).start();
}

/**
 * Create a visualizer report
 */
gulp.task("plato", function(done) {
    console.log("Analyzing source with Plato");
    console.log("Browse to /report/plato/index.html to see Plato results");

    startPlatoVisualizer(done);
});

/**
 * Start Plato inspector and visualizer
 * @param {any} done this is done
 */
function startPlatoVisualizer(done) {
    console.log("Running Plato");

    var excludeFiles = /.*markerclusterer.js/;
    var plato = require("plato");

    var options = {
        title: "Plato Inspections Report",
        exclude: excludeFiles
    };

    plato.inspect(filePath.src, "reports/plato", options, platoCompleted);

    function platoCompleted(report) {
        var overview = plato.getOverviewReport(report);

        console.log(overview.summary);
        
        if (done) { done(); }
    }
}

/**
 * clean destination folder
 */
gulp.task("clean", () => {
    return gulp.src(filePath.dest, {
        read: false
    }).pipe(clean());
});

/**
 * create script dbg files
 */
gulp.task("scripts-dbg", ["lint", "clean"], () => {
    return gulp.src(filePath.src)
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: "-dbg" }))
        .pipe(gulp.dest(filePath.dest))
        .on("error", (err) => {
            console.error("Error in scripts-dbg task", err.toString());
        });
});

/**
 * create minified scripts
 */
gulp.task("scripts-min", ["lint", "clean"], () => {
    const options = {
        preserveComments: "license"
    };
    return gulp.src(filePath.src)
        .pipe(header(banner, { pkg: pkg }))
        .pipe(streamify(uglify(options)))
        .pipe(gulp.dest(filePath.dest))
        .pipe(concat("library-all.js"))
        .pipe(gulp.dest(filePath.dest));
});

/**
 * lint code
 * @return {Stream}
 */
gulp.task("lint", () => {
    gulp.src([filePath.src, "!./src/markerclusterer.js"])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("bump", () => {
    const oldVer = getPackageJson().version;
    const newVer = semver.inc(oldVer, "patch");

    gulp.src("./package.json")
        .pipe(bump({
            version: newVer
        }))
        .pipe(gulp.dest("./"));

    gulp.src(["src/library.js"])
        .pipe(replace(oldVer, newVer))
        .pipe(gulp.dest("src"));
});

/**
 * add needed images to theme
 */
gulp.task("theme", () => {
    gulp.src("src/themes/base/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("openui5/googlemaps/themes/base/img/"));
});

/**
 * tag and release to new version to github, merging changes to gh-pages
 */
gulp.task("release", [], () => {
    const tag = getPackageJson().version;
    return gulp.src("*.js", {
            read: false
        })
        .pipe(shell([
            "git add -u",
            "git commit m 'release' " + newVer + "",
            "git tag " + tag,
            "git push",
            "git push --tags",
            "git branch -f gh-pages master",
            "git push origin gh-pages", //update branch from master
            "git checkout gh-pages",
            "git merge master",
            "git push",
            "git checkout master"
        ]));
});

/**
 * Run specs once and exit
 * To start servers and run midway specs as well:
 * @return {Stream}
 */
gulp.task("test", ["lint"], (done) => {
    startTests(true /*singleRun*/ , done);
});

/**
 * Run specs and wait.
 * Watch for file changes and re-run tests on each change
 */
gulp.task("tdd", (done) => {
    startTests(false /*singleRun*/ , done);
});


/**
 * create ui5 library preload json file
 */
gulp.task("buildlibrary", ["lint", "clean", "scripts-min", "scripts-dbg"], () => {
    return gulp.src([filePath.dest + "/**/!(*-dbg.js|*-all.js)"])
        .pipe(ui5preload({ base: "openui5/googlemaps", namespace: libNS, isLibrary: true }))
        .pipe(gulp.dest(filePath.dest));
});

/** 
 * build task
 */
gulp.task("build", (cb) => {
    sequence(["lint", "test"], "buildlibrary", "theme", cb);
});

gulp.task("cleanbuild", ["clean"]);
