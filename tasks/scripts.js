// 用来处理处理js脚本的任务

// const gulp = require('gulp');
// // 用来在gulp中做判断用的
// const gulpif = require('gulp-if');
// // concat 文件拼接
// const concat = require('gulp-concat');
// // webpack
// const webpack = require('webpack');
// // webpack-stream
// const gulpWebpack = require('webpack-stream');
// // vinyl-named 貌似是保持chunk name的包
// const named = require('vinyl-named');
// // 浏览器实时刷新
// const liveReload = require('gulp-livereload')
// // 处理gulp任务错误，不会在错误的时候，退出流
// const plumber = require('gulp-plumber');
// // rename 重命名
// const rename = require('gulp-rename');
// // 压缩 uglify
// const uglify = require('gulp-uglify');
// // gulp-util
// const util = require('gulp-util');
// // args
// const args = require('./util/args');


import gulp from 'gulp';
// 用来在gulp中做判断用的
import gulpif from 'gulp-if';
// concat 文件拼接
import concat from 'gulp-concat';
// webpack
import webpack from 'webpack';
// webpack-stream
import gulpWebpack from 'webpack-stream';
// vinyl-named 貌似是保持chunk name的包
import named from 'vinyl-named';
// 浏览器实时刷新
import liveReload from 'gulp-livereload'
// 处理gulp任务错误，不会在错误的时候，退出流
import plumber from 'gulp-plumber';
// rename 重命名
import rename from 'gulp-rename';
// 压缩 uglify
import uglify from 'gulp-uglify';
// gulp-util
import util from 'gulp-util';
// args
import args from './util/args';

gulp.task('scripts', () => {
    return gulp.src('app/js/index.js')
        // 防止出错
        .pipe(plumber({
            errorHandler: function(params) {

            }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
            module: {
                rules: [{
                    test: /\.js$/,
                    use: [{
                        loader: 'babel-loader',
                    }]
                }]
            }
        }), null, (err, stats) => {
            // 
            // util.log(`Finish '${util.colors.cyan('scripts')}'`,stats.toString({
            //     chunks:false
            // }))
        })
        // 输出到该路径下
        .pipe(gulp.dest('server/public/js'))
        // 重命名，等于复制一份js文件
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        // 对复制的那份文件进行压缩
        .pipe(uglify())
        // 然后输出到哪?
        .pipe(gulp.dest('server/public/js'))
        // 然后判断命令行参数中有没有watch 有的话就添加livereload插件
        .pipe(gulpif(args.watch, liveReload()))
})