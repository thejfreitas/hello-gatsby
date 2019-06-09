var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css:compile', function () {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass.sync({
      outputStyle: 'expanded',
    }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
      })
    )
    .pipe(gulp.dest('./src/css'));
});

// TODO: Make this work properly
gulp.task("css:minify", gulp.series('css:compile'), function () {
  return gulp.src(['./src/css/*.css', '!./src/css/*.min.css'])
    .pipe(cleanCSS())
    .pipe(rename(
      { suffix: ".min", }
    ))
    .pipe(gulp.dest("./src/css"));
});

gulp.task('css', gulp.series('css:compile', 'css:minify'));

gulp.task('default', function () {
  return gulp.watch('./src/scss/*.scss', gulp.series('css'));
});

