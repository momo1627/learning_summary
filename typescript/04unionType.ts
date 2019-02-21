//联合类型取值可以是多种类型中一种
let myType : number|string
//当不确定一个联合类型变量到底是哪个类型时，只能访问多个类型的共同属性和方法，不能访问其中一个类型独有的属性和方法
function getLength(st:number|string){
    return (st as string).length
}
function getString(st:number|number):string{
    return st.toString()
}

//联合类型的变量被赋值时，会根据类型推论规则，推断出一个类型
let myUnion : string | number;
myUnion = 'seven'
let myLength:number = myUnion.length

