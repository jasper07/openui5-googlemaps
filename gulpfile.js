var gulp = require('gulp');

var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var header = require('gulp-header');
var streamify = require('gulp-streamify');
var qunit = require('node-qunit-phantomjs');
var shell = require('gulp-shell');
var git = require('gulp-git');
var bump = require('gulp-bump');
var replace = require('gulp-replace');
var semver = require('semver');
var pkg = require('./package.json');
var ui5preload = require('gulp-ui5-preload');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
// var prettydata = require('gulp-pretty-data');
// var gulpif = require('gulp-if');

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
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
    gulp.watch(filePath.src, ['lint', 'build']);
});

gulp.task('test', ['lint'], function() {
    qunit('./test/unitTests.qunit.html', {
        'verbose': true,
        'timeout': 2,
        'phantomjs-options': ['--web-security=false']
    });
    // return gulp.src('./test/unitTests.qunit.html')
    //     .pipe(qunit());
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
})

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
            'git push origin gh-pages' //update branch from master
            // 'git checkout gh-pages',
            // 'git merge master',
            // 'git push',
            // 'git checkout master
        ]));

});

gulp.task('default', ['watch', 'build']);
gulp.task('build', ['lint', 'clean', 'scripts-dbg', 'scripts-min', 'ui5preload']);
gulp.task('cleanbuild', ['clean']);
