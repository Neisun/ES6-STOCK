function log() {
    return console.log(arguments);
}
// Array.of 
// 用of后边跟着的内容来形成新的数组
// 返回新的数组
{
    let arr = Array.of([1,undefined,null,{a:10},'hello'])
    console.log('Array.of',arr);
    let empty = Array.of();
    console.log('Array.of',empty);
}

// Array.from 
// 将类数组变成数组
// 返回新的数组
{
    let arrayLike = {
        0:'neisun',
        1:'hello',
        2:'world'
    }
    // 如果一个类数组，没有length属性，我们看看会发生什么
    // 得到了一个空数组
    let arr = Array.from(arrayLike);
    console.log(arr)

    // 类数组并且key的值不是数值或者字符串数值，我们看看会发生什么
    // 得到是长度为length的undefined组成的数组
    let arrLike2 = {
        name:'neisun',
        info:'hello',
        age:27,
        length:3
    }
    let arr2 = Array.from(arrLike2);
    console.log(arr2)

    // 符合要求的类数组
    // 我们这样就可以得到一个数组
    let arrLike3 = {
        0:'neisun',
        1:'10',
        2:30,
        length:3
    }
    let arr3 = Array.from(arrLike3);
    console.log(arr3)

    // Array.from 可以接受第二个参数 类似于一个map函数
    let arrLike4 = {
        0:1,
        1:2,
        2:3,
        length:3
    }
    let arr4 = Array.from(arrLike4,(item) => {
        return item*2;
    })
    console.log(arr4)
}

// Array.fill
// 数组填充
// 返回填充之后新的数组
// 参数是一个数组，要替换的项，开始位置，结束位置（包头不包尾）
{
    // log(Array.fill([1,2,3,4,5],'hu',1,5));
    let a = Array.fill([1,2,3,4,5],'hu',1,5);
    console.log(a)
    let b = Array.fill([1,2,3,4,5],'hu',0,4);
    console.log(b)
}

// Array.find Array.findIndex
// 找对应的元素 找对应元素的下标
{
    // 第一个参数 数组 第二个回调函数相当于map函数
    // 找到第一个符合要求的元素即停止，并返回该元素的value
    console.log(Array.find([1,2,3,4],(value,index) => {
        // console.log(value,index)
        return value > 2;
    }))
    // 找到第一个符合要求的元素即停止，并返回该元素的index
    console.log(Array.findIndex(['name','info','age'],(value,index) => {
        return value == 'info';
    }))
}

// Array.includes 
// 数组中是否包含某些元素
{
    // 查找，返回boolean
    console.log([1,2,3,4].includes(3));
}

// [].keys [].values [].entries

{
    // console.log([1,2,3,4].keys())
    // for (const iterator of object) {
        
    // }
    // keys() 遍历数组的index
    for (const index of [1,2,3,4,5].keys()) {
        console.log(index);
    }
    // values() 遍历数组的value
    for (const value of [1,2,3,4,5].values()) {
        console.log(value);
    }
    for (const [ind,val] of [1,2,3,4,5].entries()) {
        console.log('index',ind,'value',val)
    }
}