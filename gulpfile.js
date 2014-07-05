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

//TODO - all scripts tasks with one stream
gulp.task('scripts-dbg', ['lint', 'clean'], function() {
    gulp.src(filePath.src)
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(rename({
            suffix: '-dbg'
        }))
        .pipe(gulp.dest(filePath.dest));
});

gulp.task('scripts-min', ['lint', 'clean'], function() {
    gulp.src(filePath.src)
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(filePath.dest))
        .pipe(concat('library-all.js'))
        .pipe(gulp.dest(filePath.dest));
});

gulp.task('lint', function() {
    gulp.src(filePath.src)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    gulp.watch(filePath.src, ['lint', 'build']);
});

gulp.task('test', function() {
    return gulp.src('./test/*.qunit.html')
        .pipe(qunit());
});

gulp.task('commit', ['build'], function() {
    // shell.task([
    gulp.src('')
        .pipe(shell('echo start'))
        .pipe(shell('git add ./src'))
        .pipe(shell('git add ./openui5/googlemaps'))
        .pipe(shell('git add ./samples'))
        .pipe(shell('git commit -a -m \"test gulp commit2\"'))
        .pipe(shell('git push --all'))
        .pipe(shell('echo update gh-pages'))
        .pipe(shell('git branch -f gh-pages master'))
        .pipe(shell('git push origin gh-pages'));
});

gulp.task('shell:staging2', function() {
    gulp.src('')
        .pipe(shell('your command'))
        .on('finish', function() {
            // ...
        })
})

gulp.task('default', ['watch', 'build']);
gulp.task('build', ['scripts-dbg', 'scripts-min']);
gulp.task('cleanbuild', ['clean']);