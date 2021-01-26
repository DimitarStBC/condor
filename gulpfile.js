var gulp = require('gulp');

var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

sass.compiler = require('node-sass');



gulp.task('sass', function () {
    return gulp.src('./scss/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('css', function () {
    gulp.src('./css/*.css')
        .pipe(uglifycss({

            "uglyComments": true
        }))
        .pipe(gulp.dest('./dist/'));
});