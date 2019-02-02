//ES6的类
class Animal{
    //constructor()定义构造函数
    constructor(property){
        this.property = property;
    }
    sayHi(){
        return `my name is ${this.property}`
    }
}
//使用new生成实例，自动调用构造函数
let a = new Animal('jack')
console.log(a.sayHi())

//extends继承父类
class Cat extends Animal{
    constructor(name){
    //子类使用super()调用父类构造函数和方法
        super(name);
    }
    sayHi(){
    //super代表父类
        return `Meow, ${super.sayHi()}`
    }
    sayFather(){
        console.log(super.property)
    }
}

let c = new Cat('Tom')
console.log(c.sayHi())

//getter和setter 改变属性的赋值和读取行为
class Name{
    constructor(family){
        this.family = family
    }
    get name(){
        return 'jack'
    }
    set name(value){
        console.log(`setter:${value}`)
    }
}
let d = new Name('daniel')
console.log(d.family)
d.family = 'Tom';
console.log(d.family)

//static 静态方法
//使用static修饰符定义静态方法，不需要实例化，通过类来调用
//即类拥有一个方法，有static定义
//但实例不会拥有此方法
class Good {
    static isGood(a){
        return a instanceof Good;
    }
}
let e = new Good('jack')
Good.isGood(e)

//ES7中类
//实例的属性不用通过构造函数，直接在类中定义
class ES7 {
    name = 'new class'
    constructor(){}
}
let f = new ES7();
console.log(f.name)
//静态属性
//ES7 类用static拥有静态属性
