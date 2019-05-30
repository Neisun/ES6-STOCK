// const gulp = require('gulp')
import gulp from 'gulp'
import livereload from 'gulp-livereload'
import gulpif from 'gulp-if'
import args from './util/args'
gulp.task('css',() => {
    return gulp.src('app/css/*.css')
    .pipe(gulp.dest('server/css'))
    .pipe(gulpif(args.watch,livereload()))
})