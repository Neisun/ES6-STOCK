// 配置页面的任务。页面变化
// const gulp = require('gulp')
// const args = require('./util/args')
// const gulpif = require('gulp-if')
// const livereload = require('gulp-livereload');
import gulp from 'gulp';
import args from './util/args';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
gulp.task('pages',() => {
    return gulp.src('app/**/*.ejs')
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch,livereload()))
})