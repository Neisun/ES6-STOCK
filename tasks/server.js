// 服务器脚本
import gulp from 'gulp'
import args from './util/args'
import liveserver from 'gulp-live-server'
gulp.task('serve',(cb) => {
    // console.log(9999999999)
    // 如果不是watch的状态就直接返回
    if(!args.watch) return cb();
    // 如果是watch的状态 创建服务器
    const server = liveserver.new(['--harmony','server/bin/www']);
    server.start();
    // 监听文件，如果文件变化，就让服务器启用变化的文件
    gulp.watch(['server/public/**/*.js','server/views/*.ejs'],function (file) {
        server.notify.apply(server, [file]);
    })
    // 监听到如果关于服务方面的文件改变，那么重启服务
    gulp.watch(['server/routes/**/*.js','server/app.js'],function (file) {
        server.start.bind(server)();
    })
})