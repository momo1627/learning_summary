//Three parts of redux
//Store Actions Reducer
//Store 用一个树状结构对象保存应用的所有状态。所有state保存在一个store里，应用所有内容共享
//Action 一个用来表示应用发生事件的对象,主要目的是告诉我们应用发生了什么变化会影响state
//Reducers 一个纯函数根据action内容改变state，将state变化细分为一个个行为，互不影响。有个最高层的reducer内部执行所有细分的reducers

//Three Principles
//1.single source of truth 
//所有state保存在一个store对象里
//2.state read-only not mutated
//只有通过actions 才能改变state，应用内任何部分不能直接操作state
//3.changes are made with pure function

//reducer 纯函数内，不改变旧state值，而生产新的state
//Reducer 
//function name(state=default,action){}
//重点，一个纯函数，参数是oldstate和action，根据action type属性，根据oldstate生成一个新的state
//纯函数意味着，不改变参数，而是基于参数生成新的数据
//ES6中，使用spread ...运算符，非常方便用于array和object return {...oldState,newState}/[...oldState,newState]

//Store
//是一个基于reducer的对象 store = createStore(counter)
//Store有三个API {subscribe(),getState(),dispatch()}
//store.dispatch({action.type})根据action的type指向，当前store的reducer，即counter，更新state
//store.getState()获取当前state
//store.subscribe(func)用来更新UI，但是这个api比较原生，一般用搭建好的第三方库，比如react-redux

//Action
//{type:'',}
//是一个plain对象，只有描述性属性

//在复杂应用中，redux的Store向react component一样
//是一个有根节点的树状对象，store被分成一个个独立的小store

