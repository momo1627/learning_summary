//forms 
//reactdom的form 是controlled components
//1. controlled component
//component的数据，由本身的state控制，而state的更新，由该component定义的方法更新
//例如在 input textarea select中，reactdom的value属性由state赋值，
//而state由定义的eventhandler例如change/select方法获取用户的输入即事件的value而更新
//这些方法又是赋值给reactdom 事件属性onclick/onchcange的，所以其自身由自己控制
handleChange = (e)=>{this.setState({value:e.target.value})}
<input type='text' value={this.state.value} onChange={this.handleChange}/>

//2.forms
//2.1 input text/text area reactform中 事件使用onChange state.value赋值e.target.value
//2.2 select和其option 在select对象上 使用onChange事件 state.value赋值e.target.value
//2.3 checkbox/radio 使用onChange事件，而属性是checked={e.target.checked}
//2.4 多个input标签，根据form元素的name，在state里赋值不同的value
//event对象会响应发生事件的元素，获取独自的target.name和targe.value
//使用es6新增对象属性名表达式，在对象外定义属性名
const name = event.target.name
const value = event.target.value
this.setState({
    [name]:value
})
//2.5 如果不想用户改变form的数据，给value属性赋值null

//3.conditional rendering
//jsx可以根据条件render不同的reactdom对象，或者给reactdom对象赋值不同的值
//3.1.1 render不同的reactdom
//return( if(ture){ return <h1></h1>} return <h2></h2>)
//3.1.2 根据条件给变量赋值不同的reactdom,在render变量
// if(true){button = <h1><h1/>} else{button = <h2></h2>} render(){return {button}

//3.2 logical && Opertor 根据条件是否满足，决定是否输出某一元素
//{condition && reactdom} 如果condition满足，则返回reactdom，不符合condition则返回false

//3.3 condition ? true arguments: false arguments 根据条件true or false 返回某一结果
//<h1>{isOk ? 'hello' : 'bye'}</h1> 
//return(<div> {isOk ? <Component1 /> : <Component2 /></div>)

//3.4 return null 根据条件是否不返回reactdom 而返回 null
//注意即使返回null lifeCycle method不会受到影响
function Component1(){
    if(false){
        return null
    }
    return(
        <h1>hello</h1>
    )
}