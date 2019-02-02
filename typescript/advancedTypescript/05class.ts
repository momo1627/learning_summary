//class类 es6实现功能
//class:一类事物的抽象概念，包含属性和方法
//object：类的实例，一类事物的个体 object = new class()
//OOP：面向对象三大特点，封装，继承，多态
//Encapsulation: 将数据内部封装起来，对外只暴露接口，外界只调用接口，访问对象的内部数据或使用对象提供的方法
//外界无法改变对象内部数据
//Inheritance: 类可以被继承，子类拥有父类所有封装内容，并拥有自己封装内容
//Polymorphism：继承产生的不同的子类，由于继承了共同父类的封装内容，调用相同的方法或属性，会根据自身子类实质内容而返回不同结果

//getter/setter： 读取和改变对象的属性和方法
//Modifiers:修饰符是一些关键字，用于限定成员或类型的性值，比如private，public
//abstract class：抽象类不允许实例化，只能被继承，其方法只能在子类实现
//interface：接口,不同类之间公有属性和方法，可以抽象成接口，被类实现，一个类只能继承另一个类，但是可以实现多个接口
//implements：类获取interface接口的属性和方法，供实例使用

//TS 类的用法
//1.TS使用三种修饰符
//public,private,protected
//public:修饰属性和方法为公有，默认公有，随处可访问
//private: 修饰属性和方法为私有的，不能再声明的类外部访问
//protected：修饰属性和方法为受保护的，区别于private，在子类中可以被访问

class Animal1{
    public name;
    public constructor(name){
        this.name = name
    }
}
//public属性 可以在实例中访问
let a1 = new Animal1('jack');
console.log(a1.name);

//private属性，实例和子类都不能访问
class Animal2{
    private name;
    public constructor(name){
        this.name = name
    }
}
let a2 = new Animal2('peter')

//protected属性 子类可以访问，即可以继承于父类
class Animal3 {
    protected name;
    public constructor(name){
        this.name = name;
    }
}
class Cat1 extends Animal3{
    constructor(name){
        super(name);
        console.log(this.name)
    }
}

//抽象类 abstract
//abstract 用于定义抽象类，和其中的抽象方法
//抽象类是不允许被实例化
abstract class People{
    public name;
    public constructor(name){
        this.name = name;
    }
    public abstract sayHi();
}
//不能实例化抽象类，ts报错 let p1 = new People('jack');

//抽象类的抽象方法必须被子类实现
class Student extends People{
    //子类必须实现抽象类的抽象方法，否则会报错
    public sayHi(){
        console.log(`my name is ${this.name}`)
    }
}
let cat = new Student('tom')

//类的类型
//类的类型类似于接口
//给每个属性和方法，限定类型即可
class Student1{
    name:string;
    constructor(name:string){
        this.name = name
    }
    sayHi():string{
        return `my name is ${this.name}`
    }
}
//类本身作为一个类型，限定给实例
let s:Student1 = new Student1('jack')
console.log(s.sayHi())