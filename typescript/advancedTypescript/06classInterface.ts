//类与接口
//用接口对类的一部分抽象
//实际接口用来提取一些类的共同特性，即共同属性或方法
//implements 类实现接口，提取接口中的共有特性
//一个类可以实现多个接口
interface Alarm{
    alert()
}
interface Ligth{
    lightOn();
    lightOff();
}
class Door{

}
class SecurityDoor extends Door implements Alarm{
    alert(){
        console.log('SecurityDoor')
    }
}
class Car implements Alarm{
    alert(){
        console.log('car')
    }
    lightOn(){
        console.log('car light on')
    }
    lightOFff(){
        console.log('Car light off')
    }
}

//接口也可以继承类
class Point{
    x:number;
    y:number;
}
interface Point3d extends Point{
    z:number;
}
let point3d:Point3d = {x:1,y:2,z:3}

//混合类型
//使用接口方式来定义一个函数需要符合的形状
interface SearchFunc{
    (source:string, subString:string):boolean;
}
let mySearch:SearchFunc;
mySearch = function(source:string,subString:string){
    return source.search(subString) !== -1
}

//一个函数还可以有自己的属性和方法
interface Counter{
    (start:number):string;
    interval:number;
    reset():void;
}

function getCounter():Counter{
    let counter = <Counter>function(start:number){};
    counter.interval = 123;
    counter.reset = function(){}
    return counter
}
let c1 = getCounter();
c1(10);
c1.reset();
c1.interval = 5.0;

