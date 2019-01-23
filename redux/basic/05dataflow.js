//Redux resovle a strict unidirectional data flow.
//data lifecyle in redux
//1.data flow 首先触发的是store.dispatch(action)
//在应用的任何地方，调用store.disptach()传入action对象，即触发redux dataflow
//2.action被传入 Store，在Store里调用 根reducer rootReducer(previousState,action);
//3.调用rootReducer，根据action，独立的state reducer会根据previousState和action.type 计算返回newState
//4.Store中，保存newState，替换previousState。
//此时invoke subscribe() 并且 更新UI

// data-> action -> reducer -> store -> app 