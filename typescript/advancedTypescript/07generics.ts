//Generics泛型
//在定义函数，接口或类时，不预先指定具体类型，而在使用的时候再指定类型的一种特性

function createArray(length:number,value:any):Array<any>{
    let result = [];
    for (let i=0; i<length;i++){
        result[i] = value;
    }
    return result;
}
createArray(3,'x');

function createArray1<T>(length:number,value:T):Array<T>{
    let result:T[] = [];
    for (let i=0;i<length;i++){
        result[i]=value
    }
    return result;
}
createArray1<string>(3,'x')
//<T>出现在函数名后，一个任意类型T类似一个参数
//在函数中可以给不同变量类型限定为T
//T在调用时赋值为string类型
//在函数中所有限定为T的变量，都被限定为string
//可以当作类型参数使用

//多个类型参数
//一次定义多个类型参数
function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}
swap([7,'seven'])

//泛型约束
//函数内部使用泛型变量时候，由于未确定类型，无法随意操作属性和方法
//这时进行泛型约束，只允许函数传入包含相应属性的变量

interface Lengthwise{
    length:number;
}
function loggingIdentity<T extends Lengthwise>(arg:T):T{
    console.log(arg.length)
    return arg
}
//泛型T 使用extends约束 必须符合接口Lengthwise形状
//即所有T类型变量，必须含有length属性，且类型为数字
//此时传入arg的参数必须含有length否则报错
//loggingIdentity(7)
loggingIdentity('7')
//泛型之间也可以互相约束

//泛型接口
//用接口定义一个函数需要符合的形状
//也可以使用含有泛型的接口定义函数的形状
interface CreateArrayFunc{
    <T>(length:number,value:T):Array<T>
}
let createArray2 : CreateArrayFunc;
createArray2 = function<T>(length:number,value:T):Array<T>{
    let result:T[]=[];
    for (let i=0;i<length;i++){
        result[i]=value;
    }
    return result
}
createArray2(3,'x')

//泛型类
class GenericNumber<T>{
    zeroValue:T;
    add:(x:T,y:T)=>T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0
myGenericNumber.add=function(x,y){return x+y}

//泛型参数的默认类型
// <T=string>