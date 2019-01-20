import react from 'react'
//Error Boundaries
//React使用 Error Boundaries Component 捕获js的错误，从而避免错误的ui render
//render 错误的页面，要不产生任何内容 更为严重

//1 error boundaries component 
//1.1 EBC 捕获子组件的所有js error，输出错误日志，render 发送错误情况的UI
//1.2 EBC 不会捕获 事件处理错误，异步错误，服务端错误，EBC自己产生的错误
//1.3 EBC 创建和使用
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        //1.设置state是否有错误，决定render的UI
        this.state = {hasError:false}
    }
        //2.在类方法里，set error的state
    static getDerivedStateFromError(error){
        //upate state
        return {hasError:true}
    }
        //3.在didCatch log error to service
    componentDidCatch(error,info){
        //
        logErrorToService(error,info);
    }
    render(){
        if(this.state.hasError){
            // render error fallback UI
            return <h1>Something went wrong</h1>
        }
        return this.props.children;
    }
}
// 4 EBC 作为其他组件的父组件，捕获所有子组件的错误

//2 如果EBC没能处理的错误，会导致整个react component tree 不mount 不渲染；

//3 使用try catch 捕获 event handler的错误


// Fragments
//React 组件render必须只有唯一的父元素，
//为了避免渲染无意义node 元素
//React使用Fragment component作为父元素 render，但是不会渲染在dom里
//用法
//<React.Fragment></React.Fragment>
//<></>未来的简写法
// Fragment 元素只能由一个 属性 就是作为 list的key