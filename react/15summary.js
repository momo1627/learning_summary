//react learning summary
//1. form
//controlled component 和 uncontrollend component
//1.1 controlled component 
//1.1.1 通过form的onChange属性的方法，控制input输入 e.target.value，并保存在state里
//1.1.2 把state的相应属性的值，传给input的value属性
//1.1.3 form的sumbit属性绑定方法，处理state中保存的input的value数据
//1.1.4 如此，state中保存的value的数据，可以操作引用
//1.2 uncontrolled component
//1.2.1 通过ref={node=>refname=node} 再通过this.refname获取input node
//1.2.2 可以通过refname.value获取input输入的值
//1.2.3 只读input 如file必须使用uncontrolled
//1.2.4 不关心input的变化，只是引用input的值，可以使用uncontrolled 简化代码

//2. list
// 将一个数组的state或props，通过array.map/filter 创建一组元素/component
//2.1 每组list的每一个元素必须有一个unique key 最好是string/不要做index
//2.2 灵活使用map/filter 筛选处理所需要的state的内容

//3. Event
// 一般dom的事件都是触发state更新和UI rerender()的触发器
// event方法最好使用箭头函数，自动绑定this给Component，而不是传入方法的element
// event handler 方法中，一般都会调用setState()更新state

//4. Error bounderary
// react component中的错误处理组件，相当于try..catch 包裹在需要处理的component外层
//4.1 state中定义hasError属性用来判断是否有错误
//4.2 定义类方法 static getDerivedStateFromError(e){setState({hasError:true})}
//4.3 componentDidCatch(error,info){logErrorToService(error,info)} 将error throw给Error boundary
//4.4 render(){根据hasError，条件渲染UI}

//5 React.Fragment
// 避免渲染无意义元素，作为react中根元素，不会渲染在DOM里
// <React.Fragment></React.Fragment> = <></>

//6. Portal
//将component的内容渲染入，组件树之外的dom树中
//6.1 render(return ReactDOM.createPortal(element,node))
//6.2 虽然被渲染入node里，但还是存在于被定义的node树里，

//7. ref
//获取元素的dom节点，使组件内可以直接操作node
//7.1 this.myRef = ReactRef() 定义一个myRef属性 node
//7.2 ref={this.myRef} 将node 属性传给一个元素，该元素的node绑定在node属性里
//7.3 this.myRef.current 作为元素node节点，引用给其他方法使用
//7.4 let myRef, ref={node=>{myRef=ref}} 简便些发
//7.5 ref 一般应用在 第三方库操作，动画效果，input等

//8. Context 高级用法
//作为一个数据容器，给component组件树提供数据，组件树的每一个组件可以自行调用需要数据
//8.1 MyContext = React.createContext(defaultValue) 创建数据容器
//8.2 <MyContext.Provider value={}></MyContext.Provider> 创建数据容器组件
//8.3 MyClassComponent.contextType = MyContext 使用数据的class组件contextType绑定数据容器
//8.4 let value = this.context 组件内调用context数据
//8.5 <Mycontext.Consumer>{value=>{return createElement(value)}}</Mycontext.Consumer> 函数组件调用context，value作为参数，通过函数创建element
//8.6 在context数据里定义改变数据的方法updateContext()，将方法传给数据使用组件，
//在组件里调用此方法，改变context的数据，更新后的context数据再传入consumer里
//8.7 Context 使用在各种react相关库里

//9. render Props 高级用法

//10. High Order Component 高级用法