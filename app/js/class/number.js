// ES6中关于数值部分新增的部分

// 判断数值是否有限
{
    console.log(Number.isFinite(1/0));
    console.log(Number.isFinite(10))
}

// 判断是否是个数 isNaN
{
    console.log(Number.isNaN(10));
    console.log(Number.isNaN(10*'a'));
}

// 判断是否是整数
{
    console.log(Number.isInteger(10));
    console.log(Number.isInteger('10'));
    console.log(Number.isInteger('10.1'));
}

// 最大、最小上限
{
    console.log(Number.MAX_SAFE_INTEGER)
    console.log(Number.MIN_SAFE_INTEGER)
}

// 判断整数是否在安全区内
{
    console.log(Number.isSafeInteger(10))
}

// 取得小数的整数部分
{
    console.log(Math.trunc(4.56));
    console.log(Math.trunc('4.123a'))
}

// 判断数是正负0
{
    console.log(Math.sign(10))
    console.log(Math.sign(-10))
    console.log(Math.sign(0))
}