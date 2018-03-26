var gulp        = require('gulp');
var less        = require('gulp-less');
var useref      = require('gulp-useref');
var uglify      = require('gulp-uglify');
var cleanCSS    = require('gulp-clean-css');
var gulpIf      = require('gulp-if');
var del         = require('del');
var makeDir     = require('make-dir');
var runSequence = require('run-sequence');

var packages = {
  NPM   : 'node_modules/',
  BOWER : 'bower_components/'
};

var sourceLibs = [
  packages.BOWER + 'jquery/dist/jquery.min.js',
  packages.BOWER + 'underscore/underscore-min.js',
  packages.NPM   + 'backbone/backbone-min.js'
];

/*************************************************************************************/
/* Builds */
gulp.task('build:dev', function() {
  runSequence('clean:dist', 'move:index', 'move:js', 'less', 'move:images');
});

gulp.task('build:prod', function() {
  runSequence('clean:dist', 'less-min', 'merge-js', 'move:images');
});
/*************************************************************************************/

gulp.task('watch', function(){
  console.log('Hear my words and bear witness to my vow. Night gathers, and now my watch begins.');
  gulp.watch('app/less/**/*.less', ['less']);
});



gulp.task('less', function(){
  return gulp.src('app/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('less-min', function(){
  return gulp.src('app/less/**/*.less')
    .pipe(less())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('move:index', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('move:js', function() {
  return gulp.src(sourceLibs)
    .pipe(gulp.dest('dist/js/lib'));
});

gulp.task('move:images', function() {
  return gulp.src('app/images/**/*.*')
    .pipe(gulp.dest('dist/images'));
});

// Used to merge all JS files in index.html into a single JS
gulp.task('merge-js', function() {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // .pipe(gulpIf('*.css', cleanCSS({compatibility: 'ie8'})))
    .pipe(gulp.dest('dist'))
});

/* Editing dist/ */
gulp.task('delete:dist', function() {
  return del.sync('dist');
});

gulp.task('create:dist', function() {
  return makeDir('dist');
});

gulp.task('clean:dist', function() {
  runSequence('delete:dist', 'create:dist');
  // runSequence('task-one', ['tasks','to','run','in','parallel'], 'task-three', callback);
});
/***/
