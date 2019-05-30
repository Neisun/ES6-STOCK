// 之所以用gulpfile.babel.js
// 是想在再gulpfile文件中使用ES6的语法
// 而我们task中的所有配置文件可以理解为都写在了gulfile.babel.js中 
// 同时我们需要在babelrc中做相应的配置

// 可以将一个文件夹下的脚本都引入
// 使用gulpfile.js单文件编写任务，会造成文件过大，通过使用 require-dir 插件可以将任务分离到多个文件，同时也可以实现按模块编写任务
import requireDir from 'require-dir';
requireDir('./tasks')