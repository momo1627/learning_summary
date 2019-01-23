//redux 基础内容react实践总结
//1.redux内容
//1.1 store 保存所有state和reducer并作为react-redux的context传给react component
//1.1.1 dispatch(actionCreater())更新state，dispatch方法，传入actionCreator，使action匹配对应的reducer，并调用reducer更新state

//1.2 reducer 定义state如果更新，根据action定义的类型，对于相应的reducer，并根据action提供的数据，定义如何更新state内容
//1.2.1 实践中reducer会将数据更新方法结构，每个state的数据都定义独立的reducer，最后汇总出根reducer
//1.2.2 reducer必须是纯函数，不改变传入state，只根据oldstate计算新的state，通常使用spread运算符增加state，filter/map筛选state

//1.3 action  定义更新state的行为类别，actionCreater作为改变state的参数，传给reducer

//2.react-redux
//2.1 react-redux库，实质是使用context的react高级用法，将store整个数据传给react顶层component，并且让react应用组件根据需要调取
//2.2 ContainerComponent=connect(state,method)(presentationComponent)
//2.2.1 ContainerComponent实质是作为state和method的容器，传给数据使用组件presentattionComponent
//2.3.2 connect参数：mapStateToProps()，参数是store.state和OwnProps(container本身的props) 返回presentationComponent所用的props对象，对象的属性完全对应props的属性名
//2.3.2 mapStateToProps实质是处理store.state数据，将数据需要，作为props传给presentationComponent，可能是state中部分属性，或是根据条件处理过的state的某些数据
//2.3.3 connect参数: mapDispatchToProps(), 参数是dispatch和OwnProps(container本身的props) 返回presentationComponent所用的方法对象，对象的方法完全对应props传入方法名
//2.3.3 mapStateToProps实质是将redux里更新state的方法，dispatch(actionCreator)，根据组件的需要，作为props传给presentationComponent
//2.3.4 未定义StateTo,即不传入数据，未定义Dispatch，Dispatch函数可作为props传入

//3.react应用的编写
//3.1 根据整体应用的结构，构建state的结构
//3.2 根据写好的react应用，区分需要使用state的组件，这些组件将作为presentationComponent接受redux传入的state和reducer，即确定props
//3.3 根据presentationComponent的props结构，定义ContainerComponent
//3.3.1 根据props，构建mapStateToProps定义传入的state或处理过的state数据
//3.3.2 mapDispatchToProps，构建更新state的方法，
//3.3.2.1 根据state的变化原因，定义合适的actionCreator
//3.3.2.2 根据state的变化的内容，定义合适的reducers

//4.总结
//redux的数据流是从action-reducer-store-react
//react-redux的编写是从react(props)-dispatch(actionCreater)+state逆推
//确认react中presentationComponent所需props，才能确定state的结构和内容
//确认react中触发state更新的方式，才能确定reducer和actionCreater的内容