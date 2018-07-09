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
var watch       = require('gulp-watch');
var merge       = require('merge-stream');
var multProcess = require('gulp-multi-process'); //Fix for cache issue on less files when compiling

var packages = {
  NPM   : 'node_modules/',
  BOWER : 'bower_components/'
};

var sourceLibs = [
  packages.BOWER + 'jquery/dist/jquery.min.js',
  packages.BOWER + 'underscore/underscore-min.js',
  packages.NPM   + 'backbone/backbone-min.js',
  packages.NPM   + 'materialize-css/dist/js/materialize.min.js',
  packages.NPM   + 'materialize-css/js/velocity.min.js',
  packages.NPM   + 'hammerjs/hammer.min.js',
  packages.BOWER + 'animejs/anime.min.js',
];

var sourceLibsCSS = [
  packages.NPM   + 'materialize-css/dist/css/materialize.min.css',
  packages.NPM   + '@fortawesome/fontawesome-free/css/all.css',
  packages.BOWER + 'animate.css/animate.min.css'
];

gulp.task('default', ['build:dev'], function(){});

/*************************************************************************************/
/* Builds */
gulp.task('build:dev', function() {
  runSequence('clean:dist', 'less', 'coffee', 'move:requirejs', 'move:html', 'move:libs', 'move:fonts:images');
});

gulp.task('build:prod', function() {
  // runSequence('clean:dist', 'less:min', 'coffee', 'merge:libs:js', 'move:libs:css', 'move:images', 'move:fonts');
});
/*************************************************************************************/

gulp.task('watch', function(){
  console.log('Hear my words and bear witness to my vow. Night gathers, and now my watch begins.');
  gulp.watch('app/less/*.less', function () { multProcess(['less'], function(){})});
  gulp.watch('app/coffee/**/*.coffee', ['coffee']);
  gulp.watch('app/html/**/*.html', ['move:html']);

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
gulp.task('move:html', function() {
  var moveIndex = gulp.src('app/index.html').pipe(gulp.dest('dist/'));
  var moveHTML  = gulp.src('app/html/**/*.html').pipe(gulp.dest('dist/html'));

  return merge(moveIndex, moveHTML);
});

gulp.task('move:libs', function() {
  var libsjs  = gulp.src(sourceLibs).pipe(gulp.dest('dist/js/lib'));
  var libscss = gulp.src(sourceLibsCSS).pipe(gulp.dest('dist/css'));

  return merge(libsjs, libscss);

  return gulp.src(sourceLibs)
    .pipe(gulp.dest('dist/js/lib'));
});

gulp.task('move:fonts:images', function() {
  var moveImg       = gulp.src('app/images/**/*.*').pipe(gulp.dest('dist/images'));
  var moveAppFonts  = gulp.src('app/fonts/**/*.*').pipe(gulp.dest('dist/fonts'));
  var moveMatFonts  = gulp.src('node_modules/materialize-css/dist/fonts/**/*.*').pipe(gulp.dest('dist/fonts'));
  var moveFAFonts   = gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/**/*.*').pipe(gulp.dest('dist/webfonts'));

  var moveAppFonts  = gulp.src('app/fonts/**/*.*').pipe(gulp.dest('dist/fonts'));
  return merge(moveImg, moveAppFonts, moveMatFonts, moveFAFonts);
});

/*************************************************************************************/
/* requireJS */
gulp.task('move:requirejs', function() {
  var moveRequire = gulp.src(packages.NPM + 'requirejs/require.js').pipe(gulp.dest('dist/'));
  var moveText    = gulp.src(packages.NPM + 'requirejs-text/text.js').pipe(gulp.dest('dist/'));
  var moveMain    = gulp.src('app/main.coffee').pipe(coffee({ bare: true })).pipe(gulp.dest('dist/'));

  return merge(moveRequire, moveText, moveMain);
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
