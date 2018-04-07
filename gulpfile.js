var gulp        = require('gulp');
var less        = require('gulp-less');
var useref      = require('gulp-useref');
var uglify      = require('gulp-uglify');
var cleanCSS    = require('gulp-clean-css');
var gulpIf      = require('gulp-if');
var del         = require('del');
var makeDir     = require('make-dir');
var runSequence = require('run-sequence');
var coffee      = require('gulp-coffee');
var clean       = require('gulp-clean');

var packages = {
  NPM   : 'node_modules/',
  BOWER : 'bower_components/'
};

var sourceLibs = [
  packages.BOWER + 'jquery/dist/jquery.min.js',
  packages.BOWER + 'underscore/underscore-min.js',
  packages.NPM   + 'backbone/backbone-min.js',
  packages.NPM   + 'materialize-css/dist/js/materialize.min.js',
  packages.NPM   + 'hammerjs/hammer.min.js'
];

var sourceLibsCSS = [
  packages.NPM   + 'materialize-css/dist/css/materialize.min.css'
];

gulp.task('default', function(){ runSequence('build:dev'); });

/*************************************************************************************/
/* Builds */
gulp.task('build:dev', function() {
  runSequence('clean:dist', 'move:index', 'less', 'coffee', 'requirejs:move', 'requirejs:main', 'move:libs:js', 'move:libs:css', 'move:images', 'move:fonts');
});

gulp.task('build:prod', function() {
  // runSequence('clean:dist', 'less:min', 'coffee', 'merge:libs:js', 'move:libs:css', 'move:images', 'move:fonts');
});
/*************************************************************************************/

gulp.task('watch', function(){
  console.log('Hear my words and bear witness to my vow. Night gathers, and now my watch begins.');
  gulp.watch('app/less/**/*.less', ['less']);
});

gulp.task('coffee', function(){
  return gulp.src('app/coffee/**/*.coffee')
  .pipe(coffee({ bare: true }))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('less', function(){
  return gulp.src('app/less/app.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('less:min', function(){
  return gulp.src('app/less/**/*.less')
    .pipe(less())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

/*************************************************************************************/
/* Move Commands */
gulp.task('move:index', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('move:libs:js', function() {
  return gulp.src(sourceLibs)
    .pipe(gulp.dest('dist/js/lib'));
});

gulp.task('move:libs:css', function() {
  return gulp.src(sourceLibsCSS)
    .pipe(gulp.dest('dist/css'));
});

gulp.task('move:fonts', function() {
  return gulp.src('node_modules/materialize-css/dist/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('move:images', function() {
  return gulp.src('app/images/**/*.*')
    .pipe(gulp.dest('dist/images'));
});
/*************************************************************************************/

/*************************************************************************************/
/* requireJS */
gulp.task('requirejs:move', function() {
  return gulp.src(packages.NPM + 'requirejs/require.js')
    .pipe(gulp.dest('dist/'));
});

gulp.task('rjs:move', function() {
  return gulp.src(packages.NPM + 'requirejs/bin/r.js')
    .pipe(gulp.dest('dist/'));
});

gulp.task('requirejs:main', function() {
  return gulp.src('app/main.coffee')
    .pipe(coffee({ bare: true }))
    .pipe(gulp.dest('dist/'));
});

/*************************************************************************************/

gulp.task('clean:dist', function() {
  return gulp.src('dist/**/*.*', {read: false})
    .pipe(clean());
  // runSequence('task-one', ['tasks','to','run','in','parallel'], 'task-three', callback);
});



// Used to merge all JS files in index.html into a single JS
gulp.task('merge:libs:js', function() {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // .pipe(gulpIf('*.css', cleanCSS({compatibility: 'ie8'})))
    .pipe(gulp.dest('dist'))
});
