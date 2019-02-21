//Type Assertion 类型断言
//可以用来手动指定一个值的类型

//语法
//<type> value 
//Tsx即react中必须用这种
// value as type

//例子，将一个联合类型变量，指定为一个更加具体的类型
//类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
function getLength(sth:string|number):number{
    if((sth as string).length ){
        return (sth as string).length 
    } else{
        return sth.toString().length
    }
}
//当我们需要在不确定类型的时候，就访问其中一个类型的属性或方法