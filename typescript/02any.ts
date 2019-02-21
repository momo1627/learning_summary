//任意值用来表示允许赋值任意的类型
//普通类型在赋值过程中不可以改变赋值类型，这就是类型的重点
//any类型，是提供可改变类型的变量
let changeNumber:any = 7;
changeNumber = 'hahah'
//声明任意值后，对他任何操作，返回的内容都是任意值，可以访问任意值的任何属性，调用任何方法

//变量声明时，没有声明类型，即会被识别为任意值，即js默认变量任意
//注意，声明时，不能直接赋值，否则会类型推断
let myAny;
myAny = 'seven'
myAny = 7