// 清空任务
import gulp from 'gulp'
import del from 'del'

// 每次都需要清空文件夹，避免重复
gulp.task('clean',() => {
    return del(['server/public','server/views'])
})