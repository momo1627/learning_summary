//元组
//元组合并了不同类型的对象
//数组合并了相同类型的对象
// 元组起源于函数编程语言

let xcatliu: [string,number];
//赋值或访问一个已知索引的元素
xcatliu[0] = 'Xcat Liu';
xcatliu[1] = 25;

xcatliu[0].slice(1)
xcatliu[1].toFixed;

//可以只赋值其中一项
//但对元组类型变量进行初始化或赋值时，
//必须提供所有制定的项

let tuple1 : [string,number,number]
tuple1 = ['daniel',29,21]

//越界的元素
//当元组已经满足指定，再添加越界，即多出个数的元素时
//必须是元组每个类型的联合类型

let tuple2 : [string,number,string]
tuple2 = ['danile',21,'cassie']
tuple2.push(12)