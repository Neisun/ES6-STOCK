// 所谓解构赋值是指 按照结构一一赋值，总体来说就是赋值
// 数组解构赋值
// 基础用法
{
    let [a,b,c] = [1,2,3]
    console.log(a,b,c)
}
// 变量交换
{
    let [a,b] = [1,2]
    [a,b] = [b,a];
}
// 加逗号的用法
{
    let [a,,,,b] = [1,2,3,4,5]
    console.log(a,b)
}
// 加扩展运算符
{
    let [a,b,...c] = [1,2,3,4,5]
    console.log(a,b,c)
    // 这样子c就变成了了数组
}
// 而且变量可以有默认值
{
    let [a,b,c=10] = [1,2]
    console.log(a,b,c)
    // 给c添加默认值是10
}

// 对象解构赋值
// 基础用法
{
    // 主要是键值对需要对得上
    // 同样也可以有默认值，这种写法真感觉像语法错误
    // 先试用声明语句进行声明
    let {a=10,b} = {a:2,b}
    // var {a=1,b} = {a:2,b:10}
    console.log(a,b)
}
// 解构赋值的精髓在于数据结构要对的上，然后key也要对得上
{
    let metaData = {
        title:'abc',
        test:[
            {
                title:123
            }
        ]
    }
    let {title:outerTitle,test:[{title:innerTitle}]} = metaData
    console.log(outerTitle,innerTitle);
}
