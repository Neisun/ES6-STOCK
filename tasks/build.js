// 将各个任务串联起来，成为构建任务
import gulp from 'gulp'
// 顾名思义，用来给task任务进行排序的，传递的顺序是从左到右依次执行，数组是并行，并且并行的顺序也是从左到右
import gulpSequence from 'gulp-sequence'

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']))