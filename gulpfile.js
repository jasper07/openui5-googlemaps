var gulp = require('gulp');

var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var header = require('gulp-header');
var streamify = require('gulp-streamify');
var shell = require('gulp-shell');
var git = require('gulp-git');
var bump = require('gulp-bump');
var replace = require('gulp-replace');
var semver = require('semver');
var pkg = require('./package.json');
var ui5preload = require('gulp-ui5-preload');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');


var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
].join('\n');

var filePath = {
    src: './src/*.js',
    test: './test/*.js',
    dest: './openui5/googlemaps'
};

var oldVer;
var newVer;


/**
 * Start the tests using karma.
 * @param  {boolean} singleRun - True means run once and end (CI), or keep running (dev)
 * @param  {Function} done - Callback to fire when karma is done
 * @return {undefined}
 */
function startTests(singleRun, done) {
    var Server = require('karma').Server;

   function karmaCompleted(karmaResult) {
        console.log('Karma completed');

        if (karmaResult === 1) {
            done('karma: tests failed with code ' + karmaResult);
        } else {
            done();
        }
    }

    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: !!singleRun
    }, karmaCompleted).start();
}


/**
 * Create a visualizer report
 */
gulp.task('plato', function(done) {
    console.log('Analyzing source with Plato');
    console.log('Browse to /report/plato/index.html to see Plato results');

    startPlatoVisualizer(done);
});

/**
 * Start Plato inspector and visualizer
 */
function startPlatoVisualizer(done) {
    console.log('Running Plato');

    var excludeFiles = /.*markerclusterer.js/;
    var plato = require('plato');

    var options = {
        title: 'Plato Inspections Report',
        exclude: excludeFiles
    };

    plato.inspect(filePath.src, 'reports/plato', options, platoCompleted);

    function platoCompleted(report) {
        var overview = plato.getOverviewReport(report);

        console.log(overview.summary);

        if (done) { done(); }
    }
}



gulp.task('clean', function() {
    return gulp.src(filePath.dest, {
        read: false
    }).pipe(clean());
});

//TODO - all scripts tasks with one stream via lazypipes
gulp.task('scripts-dbg', ['lint', 'clean'], function() {
    return gulp.src(filePath.src)
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(rename({
            suffix: '-dbg'
        }))
        .pipe(gulp.dest(filePath.dest));
});

gulp.task('scripts-min', ['lint', 'clean'], function() {
    return gulp.src(filePath.src)
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(filePath.dest))
        .pipe(concat('library-all.js'))
        .pipe(gulp.dest(filePath.dest));
});

gulp.task('lint', function() {
    gulp.src([filePath.src, filePath.test])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'), { verbose: true })
        .pipe(jshint.reporter('fail'))
        .pipe(jscs());
});

gulp.task('watch', function() {
    gulp.watch(filePath.src, ['lint', 'build']);
});

gulp.task('bump', function() {
    var type = 'patch';
    oldVer = pkg.version;
    newVer = semver.inc(pkg.version, type);

    gulp.src('./package.json')
        .pipe(bump({
            version: newVer,
        }))
        .pipe(gulp.dest('./'));

    gulp.src(['src/library.js'])
        .pipe(replace(oldVer, newVer))
        .pipe(gulp.dest('src'));
});

gulp.task('ui5preload', function() {
    return gulp.src(filePath.src)
        .pipe(streamify(uglify()))
        .pipe(ui5preload({
            base: 'src',
            namespace: 'openui5.googlemaps',
            isLibrary: true
        }))
        .pipe(gulp.dest('openui5/googlemaps'));
});

gulp.task("theme", function() {
    gulp.src('src/themes/base/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('openui5/googlemaps/themes/base/img/'));
});

gulp.task('release', ['bump', 'build'], function() {
    return gulp.src('*.js', {
            read: false
        })
        .pipe(shell([
            'git add -u',
            'git commit -m "release ' + newVer + '"',
            'git tag ' + newVer,
            'git push',
            'git push --tags',
            'git branch -f gh-pages master',
            'git push origin gh-pages', //update branch from master
            'git checkout gh-pages',
            'git merge master',
            'git push',
            'git checkout master'
        ]));

});

/**
 * Run specs once and exit
 * To start servers and run midway specs as well:
 * @return {Stream}
 */
gulp.task('test', ['lint'], function(done) {
    startTests(true /*singleRun*/ , done);
});

/**
 * Run specs and wait.
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function(done) {
    startTests(false /*singleRun*/ , done);
});


gulp.task('default', ['watch', 'build']);
gulp.task('build', ['lint', 'test', 'clean', 'scripts-dbg', 'scripts-min', 'ui5preload', 'theme']);
gulp.task('cleanbuild', ['clean']);
