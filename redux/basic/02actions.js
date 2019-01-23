//1.Actions 描述当前应用发生了什么
//1.1 actions必须有一个type属性，必须是不可变字符串，说明当前action的行为类别
//1.2 当actions数量很大时，会把所有type放入 actionTypes modules 调用
//1.3 其他属性根据state自行决定，可以是描述性属性，描述action，可以是error，代表action是否错误
//1.4 尽可能少的在action加入数据
//1.5 Action Creator action生产器，为每个action type 自定义化，实际上是生产相同type的，但其他属性不同的，类似actions
//1.5.1 action creator 会作为store.dispatch参数使用

//1.6 具体使用
/*
 * action types 独立定义type
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}