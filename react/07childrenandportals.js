// Props.children
// Children property represents one or more React Elements between the components tags
// represents Component 
//一般内容简单，只依赖prop数据的组件
//props.children是本组件，在被父级组件使用时，传入本组件的子元素
function Button(props){
    return(
        <button>
            {props.children}
        </button>
    )
}
//父组件将props.children内容直接以组件<><>标签元素形式传入
function Head(props){
    return (
        <Button><h1>Hello</h1></Button>
    )
}
//这里 <h1>Hello</h1> 将会直接传入 Button组件定义 props.children的地方

//Portal
//render children into a DOM node that outside the Dom hierachy of the parent component
//将一个组建的子元素，render入父子关系树之外的node节点里
//应用
//一般当parent component 是overflow hidden或者 z-index低时，想让子元素，显示在其他node里 而不是随父组件被隐藏起来，例如dialogs hovercards tooltips
//用法
//1.Subcom:render() return ReactDOM.createPortal(this.props.children,node)
//在portal组件，render一个Portal 参数是props.children，和指定render的dom节点
//2.Com render() return <Subcom>children</Subcom>
//在调用Portal组件的父组件，render Portal组件，组件的子元素，将会render给指定的节点

//3 portal 特点
//即使portal 组件的子元素 render到其他dom树
//但是子元素仍然会作为portal 组件树中的子元素，收到影响
//比如event bubbling
//如果portal元素的子元素，发生event，影响的是组件定义的dom树
//而不是render指定节点的dom树
//另一面说，render出去的元素发生event，事件冒泡发生在组件整体dom树，而不是render指定的dom树
