//jsx 是javascript的语法糖，将html和js结合起来，更好的呈现UI和数据的结构；
//1.jsx语法特点,jsx语句也是js语句，可以插入任何js语句例如循环，条件
//1.1.html标签可以作为js的数据，赋值给js变量,多行内容使用()包裹
//1.1.1html标签无内容时标签使用'/'闭合
//1.1.2 html标签的内容使用{js synax}包裹js语句，变量
//1.1.3 html标签的属性的值，也使用{js synax}包裹js语句，变量
const welcome = (
   <h1 className={title1}>
     hello,{name} to {location(position)}
   </h1>
)
//1.2 jsx语句实质是 react.createElement()语法糖，他是一个对象
const element = React.createElement(
    {
        type:'标签名',
        props:'属性',
        content:'内容',
    }
)
//1.2.1所以每个jsx标签，当作一个对象看待，更好理解

//2.ReactDOM 通过render方法，将ReactDOM转化为html dom插入html节点树
//2.1 ReactDOM.render(element,node)
//2.2 React 元素UI是不变的，变化更新的是UI上的数据，即内容，属性，或者UI的增加减少
//2.3 Virtual DOM 实质是一个模拟dom的树状结构对象
//2.3.1 React 以对象形式，将ReactDOM元素 模拟html dom 称为virtual DOM 
//2.3.2 render reactdom后 得到实际的dom
//2.3.3 reactdom 每一次state更新，virtual dom也随之更新，并且与之前virtual dom比较
//2.3.4 更新了数据了，形成了新的virtual dom，再将更新的内容，与html 同步
//2.3.5 这样减少了直接html dom的操作，在virtual dom上完成大量工作的，遍历dom数，更新内容

//3. React的核心，组件化
//ReactDOM就是一个一个的对象，对象间数据流通，方法流通组成了virtual dom
//3.1 组件分为无状态组件Function，有状态组件Class，数据分为props属性，state状态
//3.1.1 Function无状态属性就像构造函数，只生成有props的组件，props来源与，构造函数的参数，本身不可改变
function Welcome(props){
    return <h1>hello,{props.name}</h1>
}
//3.1.2 props是一个参数对象，是外部给组件内部传入的数据
//3.1.3 Class组件有状态属性内部定义state属性，state属性会在组件内部更新，就像对象里的方法，改变对象内部的属性
//由于组件实质是对象，Class组件内，通过constructor构建对象的属性，包括this.state，通过render()方法输出reactdom
class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    method(){
        this.setState({})
    }
    render(){
        return <h1>hello,{props.name}</h1>
    }
}
//3.1.4 在组件内部，state在constructor()里初始化，在对象其他方法中通过this.setState()方法更新
//state对象里的数据更新，就是reactdom 数据更新的核心

//3.2 组件的特点就是，如同一个对象一样，可以被其他组件，即对象引用
const element = <Welcome property = {data} /> 
const elementt = React.createElement({
    Welcome,
    property:{property:data},
})
//3.2.1Welcome 组件如同对象一般，标签名就是对象名，property就是内部定义的props.property 由外部环境传入参数
//3.3 组件最大意义就是复用，作为其他组件的一部分，构成virtual dom
//3.3.1 一个大组件一般都是各个小组件的组合，这样数据结构比较清晰，容易更新
//3.3.2 要根据实际内容，尽可能的拆分组件
