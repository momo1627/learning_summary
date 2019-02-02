//字符串字面量类型
//约束字符串取值某几个字符串中的一个

//也就是可以给字符串限定值
type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele:Element,event:EventNames){
    return ele + event
}
handleEvent(document.getElementById('hello'),'scroll')

