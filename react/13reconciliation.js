//React 原理
//data->reactElement->Dom
//data->reactElement:render()
//reactElement->DOm:Mount()


//React是通过对象，模拟DOM树，将数据转化成UI，JSX是语法糖，React.createElement({type,attributes,children}) 更清楚地反映了React的原理
//React的运作主要两部分，首次创建element和更新element
//创建element，即react第一次render元素，并mount入DOM中
//更新element,即react元素中，数据变化导致了render元素的变化，产生新的element，再与之前rendered element比较，
//注意，比较新react element和上一次render element即virtual dom之间比较，而不是与dom比较
//二者间的差别，更新在DOM中的内容
//优点就在于，不比较dom，不遍历dom，只更新变化的值，不需要重新渲染整个dom

//react效率的提升，主要问题就在update的效率上
//1.react 组件如果一个父元素/组件数据更新，那么默认整个react组件树都要render，创建新的element
//解决办法是，使用shouldComponentUpdate(newProps,newState)决定子组件是否需要update
//或PureComponent进行子元素的浅比较，要注意props传给子组件数据一定是变量，而不是匿名函数或数据定义表达式

//2.react 组件树和 DOM树的 diff算法，
//diff算法 reconciliation 是从两者 type，attributes,children逐个比较，如果有不同则unmount前元素，mount新元素
//提升效率的方法，主要集中在children，
//1.使用key
//2.不要改变dom结构，比如顺序，层级，删减(条件渲染用隐藏)