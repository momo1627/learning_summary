//Refs and the DOM
//Refs provide a way to access DOM nodes or React elements created in the render method
//在react里数据是通过props从父到子单向传递，如果想改变子元素，必须改变props重新render
//如果想立即改变子元素，需要使用refs 返回某个子元素节点
//ref主要用于 不通过改变数据props的方式，直接操作子元素
//ref可以操作react component 也可以操作dom
//1.Refs 使用场景
//1.1 控制 focus，text selection or media playback等鼠标动作
//1.2 触发动画 triggering imperative animations
//1.3 使用第三方DOM库工具 例如jquery

//2 不要滥用Refs
//2.1  如果想让dom 树发生改变，先想想如何使用state完成，即改变state，改变render内容
//2.2  能用props传递的状态，不要使用refs

//3 使用Ref
//3.1 ref是组件的属性
//3.1.1 只有class组件，和dom 元素标签可以使用ref属性
//3.1.2 this.refName.current属性即，赋值了ref的属性的元素或组件的node节点
//3.1.3 在class组件或function组件里 通过this.refName.current即可直接操作组件，使用DOM的API或其他库


//3.2 class
class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount(){
        this.myRef.current.focus();
    }
    render(){
        return (
            <div ref={this.myRef} >
                <TextInput ref={this.myRef}/>
            </div> 

        )
    }
}
//3.3 function
function TextInput(props){
    let textInput = React.createRef()
    function handleClick(){
        textInput.current.focus()
    }
    return(
        <div ref={this.myRef} onClick={handleClick}>
                <TextInput ref={this.myRef}/>
            </div> 
    )
}

//4 Forwarding Refs pass refs to child component

