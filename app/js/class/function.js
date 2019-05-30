// ES6中新增的关于函数的语法

// 函数默认值
// 箭头函数
// 扩展运算符
// rest参数 

// 函数默认值
{
    function test(x,y='world') {
        console.log(x,y);
    }
    test('hello');
}

// 箭头函数
{
    let arrow = v => v*3;
    console.log(arrow(2))
    let arrow2 = (v1,v2) => {
        return v1+v2;
    }
    console.log(arrow2(1,2))
}

// 扩展运算符
{
    console.log(...[1,2,3,'shjhj']);
}

// rest参数
{
    let test = (...args) => {
        // console.log(...args)
        let [a,...b] = [...args];
        console.log(a)
        console.log(b)
    }
    test(1,2,3,4,5)
}