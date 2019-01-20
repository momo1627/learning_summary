//Typechecking With PropTypes
//使用 prop-types库的PropTypes 处理props的type和value
//1规定props各个属性的类型
ComponentName.propTypes = {
    //basic js type
    prop1:PropTypes.string/array/bool/func/number/object/symbol,
    //任何render了的元素
    prop2:PropTypes.node,
    //一个react元素
    prop3:PropTypes.element,
    //某个class的instance
    prop4:PropTypes.instanceOf(classname),
    //特定的某些值
    prop5:PropTypes.oneOf(['new','photo']),
    //某几个type
    prop6:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    //包含特点type的数组和对象
    prop7:PropTypes.arryOf(propTypes.number),
    prop8:PropTypes.objectOf(propTypes.number),
    //特定结构的对象
    prop9:PropTypes.shape({
        color:PropTypes.string,
        size:PropTypes.number
    }),
    //提示必须有一个值，在任何type后加.isRequired
    requireWarning:PropTypes.type.isRequired,
    //自定义type
    //规定children只能有一个
    children:PropTypes.element.isRequired
}

// 2. defaultProps 可以给props设置默认值 确保props有值
ComponentName.defaultProps = {
    props:value
}
//2.1 可以在class 组件里给对象设置static 类属性
// static defaultProps ={
//     propsname:value
// }


//3. 当代码量增大时，建议使用 typescript或者flow编译