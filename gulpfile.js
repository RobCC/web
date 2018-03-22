var gulp        = require('gulp');
var less        = require('gulp-less');
var useref      = require('gulp-useref');
var uglify      = require('gulp-uglify');
var cleanCSS    = require('gulp-clean-css');
var gulpIf      = require('gulp-if');
var del         = require('del');
var makeDir     = require('make-dir');
var runSequence = require('run-sequence');

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

gulp.task('useref', function() {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // .pipe(gulpIf('*.css', cleanCSS({compatibility: 'ie8'})))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function(){
  console.log('Hear my words and bear witness to my vow. Night gathers, and now my watch begins.');
  gulp.watch('app/less/**/*.less', ['less']);
});


/* builds */
gulp.task('build:prod', function() {
  runSequence('clean:dist', 'less-min', 'useref');
});
});
/***/

/* Editing dist/ */
gulp.task('delete:dist', function(){
  return del.sync('dist');
});

gulp.task('create:dist', function(){
  return makeDir('dist');
});

gulp.task('clean:dist', function(){
  runSequence('delete:dist', 'create:dist');
  // runSequence('task-one', ['tasks','two','run','in','parallel'], 'task-three', callback);
});
/***/
