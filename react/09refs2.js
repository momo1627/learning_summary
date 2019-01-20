//Ref相关应用
//1. Uncontrolled Components
//controlled Compnents是指 component的state和prop控制input的value
//uncontrolled components 是指 直接从dom节点，调用input的值，这需要用到ref
//uncontrolled components 使用defaultValue设置默认值
//当input的值不会再有其他操作时，可以考虑使用uncontrolled 减少render
//当input需要dom操作，例如input file 或者 使用其他库时，必须使用uncontrolled
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef();
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.input.current.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={this.input} defaultValue='Bob'/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

// integrating with Other Libaries
// react 可以和其他第三方库结合使用，尤其是直接操作dom的比如jquery
// 这时候必须使用ref 标记操作dom，再react里结合第三方库使用
// react 只能render 空的 <div />供第三方操作，不然会影响react其他有数据的dom元素