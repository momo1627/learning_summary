//js中 原始类型数据有5中 bool number string null undefined 以及 es6的 symbol
//原始类型要区分基本类型和构造函数，构造函数创建的是一个对象，而不是原始类型
//类型声明variable:type 再赋值
//1.布尔 boolean
let isDone:boolean = false;
//2.数值 number
let num:number = 1
//数值类型可以赋值 整数，浮点数，十进制，八进制，16进制，Nan，Infinity
//3.字符串 string
let mynumber:string = '23'
//可以复制模板字符串
let moban:string = `23${mynumber}`
//4. 函数空值 void
//空值用于表示没有返回值的函数
//空值不用于变量，变量使用null,undefinde
function myfunction():void {console.log(mynumber)}
//5. 变量空值 undefined/null
//null和undefined类型 只能赋值null和undefined
let n:null = null
let u:undefined = undefined
// null和undefined 可以赋值给任何类型的变量,但是void不可以
let nn:number = null
let su:string = undefined