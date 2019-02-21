//对象的类型，接口
//面对对象语言，接口是对行为的抽象，具体如何行动需要由类去实现
//typescript中，结构常用来描述对象的形状(shape)
interface LabelledValue{
    label:string
}
//接口一般首字母大写
//接口定义的变量，形状必须和接口形状保持一致，不多不少
let myobj1:LabelledValue = {
    label:'heh',
    //size:12, 属性数目不能多也不能少
}
//作为参数传入函数时，只要有关键属性即可
function f(label:LabelledValue){
    console.log(label.label)
}
let myobj = {label:'name',size:10}
f(myobj)

//可选属性，不需要完全匹配一个形状，但是可以少，不可以多
interface Person{
    name:string;
    age?:number
}
let tom:Person = {
    name:'tom',
    age:123
    // gender:'male' 即使有可选属性，也不能多余属性
}
// 任意属性，允许一个接口有任意属性 可多可少
interface Name{
    name:string;
    age?:number;
    [propName:string]:any;
}
let tom1:Name = {
    name:'tom',
    age:123,
    gender:'male'
}
// 一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性
interface Star{
    name:string;
    // age?:number; 其他属性必须也是string
    [propName:string]:string;
}

//只读属性 readonly 对象的属性只能在创建时被赋值，不能再改变
//只读属性必须在对象赋值时就被赋值；
interface Read{
    readonly id:number;
    name:string;
    age?:number;
    [propName:string]:any;
}
let to:Read = {
    id:123,
    name:"tom",
    gender:'male'
}