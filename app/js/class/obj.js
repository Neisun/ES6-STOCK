// 关于ES6 新增的内容

// 对象的简洁表示法
// 属性表达式
// 扩展运算符
// Object新增方法

// 对象的简洁表示法
// 对于key来说，只要对得上就可以
// 对于函数写法，不需要再写那种key:fun 的形式，直接写name(){...}
{
    let a = '1';
    let b = '2';
    let es5 = {
        a:a,
        b:b
    }
    let es6 = {
        a,
        b
    }
    console.log(es5,es6)

    let es5_method = {
        hello:function (params) {
            console.log('hello')
        }
    }
    let es6_method = {
        hello() {
            console.log('hello')
        }
    }
    es5_method.hello()
    es6_method.hello()
}

// 属性表达式，这是个比较用的方式
{
    // name是一个变量
    let name = 'someone';
    let obj = {
        [name+'_name']:'neisun'
    }
    console.log(obj)
}

// 一些api，Object中有许多新增的api，但是这里貌似只有一些api
{
    // Object.is等同于 ===
    // Object.assign 一个浅复制
    // Object.keys() values() entries()
    let obj = {
        a:'123',
        b:'456',
        c:'789'
    }
    // 遍历过程中最常用的无非就是Object.entries()，既可以找到key还可以找到val
    for (let [key,val] of Object.entries(obj)) {
        console.log(key,val)
    }
    // Object.is
    console.log(Object.is({a:1},{a:1}),{a:1} === {a:1})
    console.log(Object.is('hello','hello'), 'hello' === 'hello')
}