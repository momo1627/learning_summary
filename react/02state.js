//React的核心 state和lifecycle 即 virtual dom的更新
//1. React lifecycle
//1.1 init 阶段
//1.1.1 constructor 初始化对象数据，传入属性props,初始state
//1.1.2 render(){return element} 根据初始数据 第一次创建reactdom
//1.1.3 ReactDOM.render(element,node) Reactdom 插入html node树里渲染

//1.2 更新阶段 reactdom 插入节点树后组件进入更新阶段
//1.2.0 new props setState() forceUpdate 只要三者其一触发，就会发生更新
//1.2.1 当reactdom 插入node 树时，组件的周期方法 componentDidMount()会被组件调用
//基本上state数据的初次更新都在其中完成，比如从后台拿数据
//1.2.2 其他方法中调用setState() 比如点击事件

//1.3 更新后阶段 dom数据更新后
//1.3.0 会重复更新阶段 直到componnetWillUnmount
//1.3.1 第一次更新发生后，组件可以调用 componentDidUpdate(prevPros,prevState,snapshot)方法
//此方法中，可以根据之前的props和state数据，有条件的更新props和state

//2. state
//2.1.1 state属性只有在constructor()里可以直接赋值，初始化
//2.1.2 component周期或者方法里，更新state，必须使用this.setState({})方法
//2.2 state 特点
//2.2.1State的更新可能是异步的 所以使用state和prop数据 更新其他state数据时，不要使用对象赋值而使用函数赋值
//错误方法  property:this.state.property1 + this.props.property2 
//正确方法 this.setState((state,props)=>{newProperty:state.property1+props.property1})
//2.2.2 state更新是各自更新不影响的
//2.3 数据流
//2.3.1 组件的数据流是从外向内传递，不能从内向外传递
//2.3.2 外层组件的state可以作为内层的props
//2.3.3 外层组件的方法可以传递给内层组件的props，调用时由外层组件更新内部组建数据
//2.3.4 可以理解为一层层函数闭包，内层可以调用外层变量，但是内层组件的数据对外层却不可见

//2.4 当内层同级组件公用数据时，最好将数据向上升级为上层组件的state数据，作为props传入内层组件
//在上层组件中处理数据，向下传递，方便维护和更新，也让数据结构更清楚