//函数的类型
//函数的声明 两种定义函数的方式，function declaration;function expression
//function declaration
function sum(x,y){
    return x + y
}
//function expression
let mySum = function(x,y){
    return x + y
}

//一个函数有输入和输出，需要把输入输出的类型都考虑到
//其中函数声明的类型的定义较简单
function sum1(x:number,y:number):number{
    return x+y
}

//输入多余或少于要求的参数，是不被允许的

//函数表达式
let mySum1 = function(x:number,y:number):number{
    return x + y
}
//如此表达式，右边被约束了，但是左边只是被赋值，是通过类型推论而推断出来的
//如果需要，还要给mySum1手动添加类型

let mySum2:(x:number,y:number) => number = function(x:number,y:number):number{
    return x + y
}
//TS中 => 用来表示函数的定义，左边括号内是输入类型，右边是输出类型

//用接口定义函数的形状,接口定义使用函数表达式
//先用接口约束类型，再赋值符合接口定义的函数
interface SearchFunc{
    (source:string,subString:string):boolean;
}
let mySearch : SearchFunc;
mySearch = function(source:string,subString:string):boolean{
    return source.search(subString) !== -1
}

//可选参数 让函数可以有多余或少参数
//可选参数和可选类型一样使用 ? 
//可选参数必须在必须参数后面，可选参数后不允许再出现必须参数
function buildName(firstName:string,lastName?:string){
    if(lastName){
        return firstName + ' ' + lastName 
    } else {
        return firstName
    }
}
let tomcat = buildName('Tom','Cat');
let tomc = buildName('Tom');

//参数默认值
//TS将添加了默认值的参数识别为可选参数
//但是此时就不受顺序的限制了
function buildName1(firstName:string,lastName:string='cat'){
    return firstName + '' + lastName
}
let tomc2 = buildName1('tom')

//剩余参数
//可以使用...rest方式获取函数中的剩余参数
//...rest是一个数组，可以用数组类型来定义他
//...rest只能是最后一个参数
function push(array:any[],...items:any[]){
    items.forEach(function(item){
        array.push(item)
    })
}
let a = [];
push(a,1,2,3)

//重载
//重载允许一个函数接受不同数量或类型的参数时，做出不同的处理
//重载定义多个函数的参数类型和返回类型
function reverse(x:number):number;
function reverse(x:string):string;
function reverse(x:number|string):number|string{
    if (typeof x === 'number'){
        return Number(x.toString().split('').reverse().join(''))
    } else if (typeof x === 'string'){
        return x.split('').reverse().join('')
    }
}
//重复定义了多次函数，前几次都是定义，最后一个是实现
//ts会优先从前面的函数定义开始匹配，所以需要优先把精确定义写在前面