var gulp = require('gulp');
var durandal = require('gulp-durandal');

gulp.task('durandal', function () {
    durandal({
        baseDir: 'App',
        main: 'main.js',
        output: 'main-built.js',
        almond: true,
        minify: true
    })
    .pipe(gulp.dest('App'));
});