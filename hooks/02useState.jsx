//1.init state
//const = [state,setState] = useState(initialValue)
//1.1 初始value可以是值，空，返回一个值的回调函数
//initialValue = value or ()=>{return value}
//1.2 first render state is = initialValue

//2.setState
//onClick={()=>setState(newState)}
//2.1 newState可以是值，空，返回一个值的回调函数，参数是prevState的函数
//setState((prev)=>{return deal(prev)})
//2.2 注意：setState() 每次返回全新的state，也就是不会自动合并上一次state
//所以：如果是对象或数组类state，要调用prev函数，使用spread，手动合并前一次state和newState
//setState(prevState=>{...prevState,...newState})
//当state比较复杂的多层对象是，推荐使用useReducer

