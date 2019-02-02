//数组 数组类型有多种定义方式，比较灵活

//[类型+方括号]表示法
let fibonacci:number[] = [1,2,3,4];
//数组的项中，不允许出现其他类型
//数组的一些方法的参数也会根据数组的类型约定进行限制
fibonacci.push(8) //只能push number类型

//数组泛型array generic
let fibonacci1: Array<number> = [1,1,2,3];

//接口也可以描述数组
interface NumberArray{
    [index:number]:number
}
let fibonacci2:NumberArray = [1,2,5,6,7,0]

//any应用，any表示数组中允许出现任意类型
let fibonacci3:any[] = ['213',123,'sd']

//类数组 IArguments 用于类数组 例如arguments,nodelist,htmlcollection
function sum2(){
    let args : IArguments = arguments;
}
