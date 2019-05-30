// 获取命令行参数
// const yargs = require('yargs')
import yargs from 'yargs';
let args = yargs
    // 配置生产环境的命令 比如 webpack --production 可以获取到production参数
    .option('production',{
        // 是否为布尔值
        boolean:true,
        default:false,
        describe:'min all scripts'
    })
    // watch 是否处于监听状态
    .option('watch',{
        boolean:true,
        default:false,
        describe:'watch all files'
    })
    // verbose
    .option('verbose',{
        boolean:true,
        default:false,
        describe:'log all'
    })
    // sourcemaps
    .option('sourcemaps',{
        boolean:true,
        default:false,
        describe:'sourcemaps'
    })
    // port
    .option('port',{
        string:true,
        default:8080,
        describe:'port 8080 on listen'
    })
    .argv;
    // module.exports = args;
    export default args;
    // export args;