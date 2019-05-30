// ES6关于正则新增的内容

// 第二个参数替换的问题，个人感觉这个功能极其鸡肋
{
    // 写法如下
    var reg = new RegExp('/\w/ig','i');
    console.log(reg.flags);
    // 你会发现，原来的修饰符ig被替换成了i；
}
{
    // 关于y修饰符
    // 粘连模式
    // y和g都是全局匹配，不同点在于当再次匹配的时候，剩余的内容中只要有符合要求，那么g就会匹配到，但是y修饰符必须是紧跟着完全匹配才可以。
    var s = "bbb-b-bbb-bb";
    var reg1 = /b+/g;
    var reg2 = /b+/y;
    // 第一次匹配
    console.log('one',reg1.exec(s),reg2.exec(s));
    // 第二次匹配
    console.log('two',reg1.exec(s),reg2.exec(s));
}
{
    // u修饰符
    // '\uD83D\uDC2A' 这是一个小骆驼 是用四个字节表示一个字符
    // 但是在ES5中，只能将其识别为两个字符
    console.log('no-u',/\uD83D/.test('\uD83D\uDC2A'));
    // 添加上u修饰符之后，可以正确将其匹配为一个字符，所以是false
    console.log('has-u',/\uD83D/u.test('\uD83D\uDC2A'));

    // 修饰符与{}的联用
    // \u{}+u修饰符表示可以匹配到相应的Unicode编码
    console.log(/\u{61}/.test('a'));
    console.log(/\u{61}/u.test('a'));

    // .符号，是匹配任意字符，但是有的字符比较特殊，超过两个字节
    var dot = /^.$/;
    var dot2 = /^.$/u
    // 找出一个比较特殊的字符
    console.log(`\u{20BB7}`);
    var s = '𠮷';
    // 匹配不到
    console.log('u-1',dot.test(s));
    // 匹配到了
    console.log('u-2',dot2.test(s));

    // 如果有了量词
    console.log('u-3',/𠮷{2}/.test('𠮷𠮷'));
    console.log('u-4',/𠮷{2}/u.test('𠮷𠮷'));
}