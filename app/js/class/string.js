// ES6中关于字符串新增的内容

// 关于编码部分新增的东西，个人感觉属于鸡肋的内容，又臭又长，没卵用

// 以下是个人觉得比较有用的部分
{
    // 验证字符串中是否包含一些内容，之前是用indexOf进行判断
    // 现在我们直接使用includes
    let str = 'hello';
    let b = str.includes('h');
    console.log(b);
    // 验证字符串是否以某些内容开头
    console.log(str.startsWith('he'))
    // 验证字符串是否以某些内容结尾
    console.log(str.endsWith('lo'));
}
// 重复字符串
{
    // ES5中，如果想重复字符串几次，需要这么写
    var str = 'abc';
    var tmp = '';
    for (var i = 0; i < 3; i++) {
        tmp += str;
    }
    console.log(tmp)
    // 在ES6中可以利用repeat
    console.log(str.repeat(3));
}
// 利用最多的就是模板字符串
{
    let user = {
        name: "neisun",
        hobby: "football"
    }
    let str = `welcome ${user.name}, his hobby is ${user.hobby}`;
    console.log(str)
}
// 空位补充
{
    // 最常见的是日期和时间的空位补充，比如日期格式是2019-05-22 空位需要补充上0
    console.log('5'.padStart(2, 0));
    console.log('5'.padEnd(2, 0));
}
// 模板函数
{
    let user = {
        name: 'neisun',
        info: 'hello world'
    }
    test `i am ${user.name},${user.info}`

    function test(s, v1, v2) {
        console.log(s, v1, v2);
    }
}
// raw没啥用，讲字符串中的\n不转化
{
    console.log(String.raw `你好\n小明`);
    console.log(`你好\n小明`);
}