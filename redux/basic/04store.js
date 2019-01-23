//Store
//Store的工作
//1.保存所有state
//2.开放state供应用使用接口:getState()
//3.开发state更新接口：dispatch(action)
//4.建立state监听接口:subscribe(listener)
//5.停止监听接口:subscribe(listener)

//1.保存所有的state
//不同于action和reducer，Store只有一个，应用逻辑的分割重组由reducers负责，Store只由根reducer建立
// const store = createStore(reducer[,initialState])
import {createStore} from 'redux';
import todoApp from './03reducers';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './02actions';
const store = createStore(todoApp);
//有时，第二个参数原始state用来与后端匹配；

//2.getState() 当前state值接口

//3.dispatch(action) 更新state
// dispatch(actionCreator(args))
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));

//4.subscribe(listener)建立/停止更新接口
//listener 是一个函数，当state发生更新时，调用listener
//subscribe()返回一个unsubscribe()用于，停止监听
const unsubscribe = store.subscribe(()=>{console.log(store.getState())})
unsubscribe();


