//redux是一个状态处理库，可以用于任何框架，但在UI组件状态化的库，react中表现得最好
//react-redux库，将redux与react连接起来，为react应用提供状态管理工具
//react-redux 应用中，核心是container component
//container component 是应用中与redux state发生联系的组件
//1.读取/更新data：从redux中获取state/触发actions发送给redux
//2.一般由react-redux库新建，核心是store.subscribe
//presentation component 是应用中展示内容的组件
//1.通过传入props的数据，展示不同的内容；通常传入的数据就是由container获取的redux-state
//2.通过传入props的方法，改变传入数据的需求；通常传入的方法，是用来通知container 改变给props传入的数据，也就是更新redux-state
//container 与 presentation概念，与stateless和stateful并不相同。
//此概念是将 state的展示，和state的处理分开
//state展示层会更符合state的结构构造

//react-redux应用中
//1.构建presentation结构，确定数据的使用，构建state的结构
//2.根据presentation结构，构建相应的container组件，作为同一逻辑下presenttation结构与redux的桥梁
//3.通常一个container父组件，将一组处理一个state的组件树包裹起来

//react-redux API
//1.connect() 构建container component
//1.1 mapStateToProps()：是一个函数参数是state，返回一个对象，作为传给presentation组件的props的数据
//他将redux state的数据进行一定的筛选转化，作为presentation的props数据
const mapStateToProps = state =>{
    return {
        propsData:dealWithState(state,[other])
    }
}
//1.2 mapDispatchToProps()：是一个函数参数是dispatch(action)函数，返回一个对象，作为传个presentation组件的props的数据
//他将改变redux的store.state的方法，作为props传给了presentation的props数据，让presentation调用此函数，更新state
const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        propsMethod:(ownProps)=>{dispatch(action(ownProps))}
    }
}
//1.3 connect()是高阶函数，返回一个函数，参数是目标presentaton component，返回一个container component
const ContainerCom = connect(
    mapStateToProps,
    mapDispatchToProps
)(PresentCom)
