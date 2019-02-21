//总结
//由于每次render，state和setState都是全新的，改变过的
//eventHandler里不能直接调用setState方法，必须是在一个函数里，
//由于setState是全新的，会无限re-render

//同样hooks必须将setState包装在一个函数内，通过props传入低层组件
//通过useReducer，可以使用dispatch取代回调函数，传入低层组件
//结合useContext，可以避免多次传递dispatch给更低层组件
//事件监听不能直接调用dispatch
//复杂state推荐使用Reducer

//reducer可以更好的处理复杂，多层的state
//根据不同action，通过disptach(action)，进行不同的reducer处理得到所需state
//虽然增加代码量，但是让state的处理更加明确逻辑，可读性更佳

//context简化了深层次传递state和setState/dispatch的代码量
//在多层嵌套中，更方便的处理state的处理逻辑

//3种方法共享state
//1.顶层定义state，将setState封装函数，通过props多层传递
//2.顶层定义reducer，将state和dispatch，通过props多层传递
//3.顶层定义reducer，将state和dispatch，通过context多层传递
//实际应用中，state简单用1，组件树简单，state复杂用2，组件树复杂，state复杂用3