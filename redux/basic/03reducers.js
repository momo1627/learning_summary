//reducers 构造state变化函数
//1.应用中所有的state都是独立的对象，可以包括一些供UI使用的数据，比如completed。实际应用中应该normalizr化，每个state对象的每一层只要是对象都有一个string ID属性
//2.reducer是纯函数根据action，以旧state为基础生成一个新state，不改变旧state
//(previousState,action) => {do something;return newState}
//2.1 在reducer函数里，不要改变参数，不要调用其他api或route变化，不要调用非纯函数例如Date.now(),Math.random()，只使用过去的state的值，进行计算
//2.2 initial state初始化state，初始化时redux会调用一个'undefined' state 传入 reducer，这时我会初始化新的state返回。
import {ADD_TODO,TOGGLE_TODO, VisibilityFilters, SET_VISIBILITY_FILTER, toggleTodo} from './02actions'
const initialState = {
    VisibilityFilters:VisibilityFilters.SHOW_ALL,
    todos:[],
}
// function todoApp(state,action){
//     if(typeof state === 'undefined'){
//         return initialState
//     }
//     return state
// }
//ES6 写法 使用默认参数
function todoApp(state = initialState,action){
    return state;
}
//2.3 初始化之后 reducer就要根据action.type生成新的state
//一般判断type使用switch case语句，注意default是原state，这样保证未发生action时，state不变，这也是不改变原state的原因
//为了不改变原state不变，一般使用Object.assign({},state,{new,state}),ES6中，spread ...运算符更好
function todoApp(state = initialState,action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            // return Object.assign({},state,{VisibilityFilters:action.filter})
            return {...state,VisibilityFilters:action.filter};
        case ADD_TODO:
            return [...state,[...state.todos,{text:action.text,completed:false}]]
        case toggleTodo:
            return {...state,todos:state.todos.map((todo,index)=>{
                if (index === action.index){
                    return {...todo,completed:!todo.completed}
                }
                return todo
            })}
        default:
            return state;
    }
}
//2.4 reducer split and compose
//根据reducer处理的state的不同，reducer可以拆分为不同的独立reducer，最后再组合在一个根reducer中
//这样会使代码更易读，在大型应用中，效果更好
//目的是让每个state有独立的reducer
//在根reducer中，给每个独立deducer传入其独自的state.property即可

function todo(state=[],action){
    switch(action.type){
        case ADD_TODO:
            return [...state,{text:action.text,completed:false}];
        case TOGGLE_TODO:
            return state.map((todo,index)=>{
                if(index === action.index){
                    return {...todo,completed:!completed};
                }
                return todo;
            })
        default:
            return state;
    }
}
const {SHOW_ALL} = VisibilityFilters;
function visibilityFilters(state = SHOW_ALL,action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}
function todoApp(state={},action){
    return {
        VisibilityFilters:visibilityFilters(state.visibilityFilters,action),
        todo:todo(state.todo,action),
    }
}

//3.combineReducers() api to manange reducers compostion
//参数即是所有state的独立reducer
import { combineReducers } from 'redux';
const todoApp = combineReducers(
    {
        visibilityFilters, // visibilityFilters:visibilityFilters(state.visibilityFilters,action),
        todos //todos:todo(state.todo,action),
    }
)

//4.和action一样，我们可以把top-level的独立reducer放入一个module里，全部export，并在需要的module里import 作为一个对象参数入createReducers
//这是es6 中 module 语法特性
import { combineReducers } from 'redux';
import * as reducers from './reducers'
const todoApp = combineReducers(reducers)