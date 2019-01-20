//Render Props
//1.represents组件的复用非常容易，只要改变prop的内容，或是根据父组件state内容就可以改变组件内容
//2.如果是复杂的有嵌套得到组件，组件复用就无法容易
//2.1 例如想复用SubCom很容易，但是想复用Com很难，即使不改变Com的封装的内容，也需要重写render()的内容
class Com extends React.Component{
    constructor(){
        this.state = {}
    }
    render(){
        <div>
          <SubCom props={this.state} />
          <SubCom1 props={this.state} />
        </div>
    }
}
//3.Render Props
//不改变封装层的行为代码，但是将UI层，render的子组件，作为prop传入 封装组件，从而使整个封装组件重用
//this.props.render(data), data可以是this.state或其他数据
class Com extends React.Component{
    constructor(){
        this.state = {}
    }
    render(){
        <div>
          {this.props.render(this.state)}
        </div>
    }
}
//只需要构建不同的UI层即可，复用整个组件
class Subcom extends React.Component{
    render(){const data = this.props.data 
        return(
            <div>{data}</div>
        )}
}
class Subcom1 extends React.Component{
    render(){const data = this.props.data 
        return(
            <div>{data}</div>
        )}
}
class Subcom2 extends React.Component{
    render(){const data = this.props.data 
        return(
            <div>{data}</div>
        )}
}
//复用整个COM层
//封装层COM组件的render数据，赋值一个匿名函数组件，返回一个组件，传入封装层this.props.render()位置
//匿名函数组件中，参数即为，封装层this.props.render(参数)的参数，也就是例子中this.state
//在匿名函数中，返回UI层组件，并将参数this.state，赋值给UI层的props.property
class App extends React.Component{
    render(){
        return(
            <div>
                <Com render={ data => (<Subcom data = {data} /> )} />
                <Com render={ data => (<Subcom1 data = {data} /> )} />
                <Com render={ data => (<Subcom2 data = {data} /> )} />
            </div>
        )
    }
}

//render prop就是给其内部传入另一个组件，组件本身知道render什么 
//如此封装行为的组件COM 会传入不同的UI组件，实现行为的复用
//例子中使用render属性名，是为了体现概念，实际上，属性名没有意义。可以定义任何名称
//使用children属性也可以实现


