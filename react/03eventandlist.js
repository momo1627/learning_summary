//reactdom 与dom
//1. handling Events
//1.1 reactdom的事件是以function的形式传入reactdom事件属性的
<button onclick={handleclick}>click</button>
//1.2 reactdom 不能用return false组织默认事件，必须使用preventDefault方法
function handleclick(e){e.preventDefaut()}
//1.3 因为reactdom 实质是对象而不是dom节点,所以不需要调用eventlistener，只是给对象添加event方法

//1.4 this 在reactdom里 event方法是reactdom标签属性对象的方法，他的this默认是绑定给属性的，这样不会对reactdom最顶端的对象产生作用
//标签事件属性对象，是reactdom对象的内层属性，所以必须将function的this重新绑定，指向reactdom本身
//1.4.1 第一种方法：在constructor()中，this.handlefunction = this.handlefunction.bind(this)
//this将会在reactdom对象的构造函数里，指向reactdom本身
//1.4.2 第二种方法，使用箭头函数定义方法，因为箭头函数本身没有this，他的this就是定义环境的this
//由于定义环境就是reactdom自身，所以this指向reactdom本身
//1.4.3 第三种方法，在属性赋值时，使用回调函数 这种方法不推荐
//onclick={(e)=>{this.handleclick(e)}}

//1.5 给eventHandler传参
//1.5.1 第一种方法 onClick={(e)=>this.deleteRow(id,e)}
//1.5.2 第二种方法 onClick={this.deleteRow.bind(this,id)}



//2.lists and keys 
//2.0 reactdom中，主要使用map()方法，将一个数组的数据，用来生成一系列相同标签，不同内容的reactdom
//2.1 reactdom中，reactdom可以以数组的形式(collections)传递给一个参数，成为组件的一部分
const listItems = datas.map((data)=>{<li>{data}</li>});
//2.2 reactdom 必须只能有一个父节点1，所以list必须有唯一的父元素
//2.3 list生产时，必须给每一个reactdom唯一的key值，用来之后定位每一个list中的各个元素
const listItems = datas.map((data)=>{<li key={data.toString()}>{data}</li>});
//2.4 key的值一定是唯一的，大部分时间最好是数据的id的字符串，最好别用用数据数组的index属性
//如果数据没有id字符串，最好的方法是自行添加一个
//key的意义在于，作为一个reactdom对象，一些列list在最外层是无法区分的li对象
//有了不同的id字符串属性，才能区分一组list的各个元素，以后增改删才方便操作
//2.4.1 key值一定是赋值给一组数据的不同元素的，不是见到li元素就要赋值的
//2.4.2 key值只需要兄弟元素唯一，不同组的reactdom组，key值互不干涉，因为他们是不同的对象内的

//2.5 map结果既可以赋值给一个变量，也可以直接作为js语句置入一个html标签中