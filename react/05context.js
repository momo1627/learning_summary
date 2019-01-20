//React 高级用法 1.context
//除了props,state，React还有一种管理数据的方法。Context
//1.Context 意义
//Context可以看作是组件的作用域，
//1.1 props数据是从外向内，层层传递，数据由上层组件控制
//1.2 state是控制当前组件的状态数据，数据由组件内部控制，控制方法可以传递给下层组件，但上层组件绝对不可能控制下层组件的state
//1.3 Context可以看作是一个作用域，可以随时传递给任何一个组件consumer，跨组件传递，而内容由最上层的provider控制

//2.Context API与用法
//2.1 Context初始化 
//创建一个含有数据的作用域
const Mycontext = React.createContext(defaultValue)
//2.2 Context.provider
{/* <Mycontext.Provider value='' ></Mycontext.Provider> */}
//Mycontext.Provider 可以理解为承载了作用域的组件，作为consumer组件们的父元素，将作用域暴露给需要的组件
//2.3 contextType/this.context
//声明组件调用的context作用域，必须是class组件,该组件将可以调用context作用域的数据
//2.3.1 在当前class组件 声明类方法 
//static MyComponent.contextType = Mycontext
//2.3.2 在class组件外声明
//MyComponent。contextType = Mycontext;
//2.3.4 调用context数据
//在组件内调用this.context对象，将作用域的数据赋值给组件；

//2.4 Context.Consumer 在function组件调用context
//Context.Consumer组件的子元素
//Context.Consumer作为一个承载了context的父组件，作为function组件render的reactdom的父元素，将context的数据，以回调函数参数形式传入子元素
function MyComponent(){
    return(
        <MyComponent.Consumer>
            {value=>{return (
                <div>{value}</div>
            )}}
        </MyComponent.Consumer>
    )
}

//3 Context的应用
//3.1 尽可能少的使用Context，因为Context使组件产生依赖，会降低组件的可复用性
//3.2 虽然Context可以跨组件传递，但是如果只是为了，减少一层层传递，
//可以直接将最底层component打包，在父元素组件赋值，再将整体底层组件作为props传给下一层组件render
function Control(props){
    const user = (
        <NavBar user={props.user}>
            <NavButton size={props.size}></NavButton>
        </NavBar>
    )
    return(
        <HeaderLayout user={user}></HeaderLayout>
    )
}
//3.3 Context最佳应用时，层层组件中，有的需要调用，有的不需要调用，例如css的内容等等，context可以作为广播一样，需要的组件接收即可
//可以减轻props传递中的重复

//4. 组件更新context
//在context中，定义更新context数据的方法，在传入内层组件调用

//5. context.consumer 分离
//为了使render更快，每个context.consumer只提供一个数据，并且分隔为不同的父元素，这样数据更新会更快，只比对一个节点，一个节点只有一个内容
//内层组件调用时，层层回调函数依次调用不同的的context数据即可

//6. context.provider的value 可以设置为state，
//如此通过组件内部，或者组件nested的内层组件，绑定方法动态的改变state，从而改变context
//1.context里有一个方法，改变context内部的属性，
//2.在父级组件定义这个方法，传入context.provider中
//3.在内层组件调用context，将方法传给button调用
//4.parentC=>method=>state=>render(provider.value)=>provider{childrenC}=>childrenC.context.method=>childrenC.property.update