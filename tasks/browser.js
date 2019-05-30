// 监听文件的变化，文件有变化，那么就执行相应的编译任务
import gulp from 'gulp'
import args from './util/args'
gulp.task('browser',(cb) => {
    if(!args.watch) return cb();
    gulp.watch(['app/**/*.js'],['scripts'])
    gulp.watch(['app/**/*.css'],['css'])
    gulp.watch(['app/**/*.ejs'],['pages'])
})