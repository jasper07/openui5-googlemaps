var gulp = require('gulp');

var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var header = require('gulp-header');
var streamify = require('gulp-streamify');
var qunit = require('gulp-qunit');
var pkg = require('./package.json');
var shell = require('gulp-shell');
var git = require('gulp-git');
var bump = require('gulp-bump');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
].join('\n');

var filePath = {
    src: './src/*.js',
    dest: './openui5/googlemaps'
};

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
    gulp.src(filePath.src)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
    gulp.watch(filePath.src, ['lint', 'build']);
});

gulp.task('test', function() {
    return gulp.src('./test/*.qunit.html')
        .pipe(qunit());
});

gulp.task('bump', function() {
    var type = 'patch';
    return gulp.src('./package.json')
        .pipe(bump({
            type: type
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('commit', ['build'], function() {


    // function(json) {
    //     return shell.task([
    //         'git add -u',
    //         'git commit -m "release ' + json.version + '"',
    //         'git tag ' + json.version,
    //         'npm publish',
    //         'git push',
    //         'git push --tags',
    //         'git checkout gh-pages',
    //         'git merge master',
    //         'git push',
    //         'git checkout master'
    //     ])();
    // gulp.src('./openui5/googlemaps/*')
    //     .pipe(git.add())
    //     .pipe(git.commit('test commit!!'));

    // git.push('origin', 'master')
    //     .end();
    // // shell.task([
    // gulp.src('')
    //     .pipe(shell('echo start'))
    //     .pipe(git.add()) // add to the file's git repo
    // .pipe(git.commit('bump')) // commit message is bump
    // .pipe(git.push('origin', 'master')) // push it up!ss
    // .end();
    // .pipe(shell('git add ./src'))
    //     .pipe(shell('git add ./openui5/googlemaps'))
    //     .pipe(shell('git add ./samples'))
    //     .pipe(shell('git commit -a -m \"test gulp commit2\"'))
    //     .pipe(shell('git push --all'))
    //     .pipe(shell('echo update gh-pages'))
    //     .pipe(shell('git branch -f gh-pages master'))
    //     .pipe(shell('git push origin gh-pages'));
});


gulp.task('release', function() {
    return fs.readFileAsync('./package.json')
        .bind(JSON)
        .then(JSON.parse)
        .then(function(json) {
            return shell.task([
                'git add -u',
                'git commit -m "release ' + json.version + '"',
                'git tag ' + json.version,
                'git push',
                'git push --tags',
                'git checkout gh-pages',
                'git merge master',
                'git push',
                'git checkout master'
            ])();
        });
});

gulp.task('default', ['watch', 'build']);
gulp.task('build', ['scripts-dbg', 'scripts-min']);
gulp.task('cleanbuild', ['clean']);