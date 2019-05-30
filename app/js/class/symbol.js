// 关于ES6中新增的symbol数据类型
// symbol定义的变量不重复不相等，独一无二

{
    let a1 = Symbol();
    let a2 = Symbol();
    // false
    console.log(a1 === a2);
    let a3 = Symbol.for('123');
    let a4 = Symbol.for('123');
    // true
    console.log(a3 === a4)
}

{
    // Symbol在对象中使用
    let a = Symbol('abc');
    let obj = {
        [a]:'123',
        a:'456',
        b:'789'
    }
    console.log(obj);
}