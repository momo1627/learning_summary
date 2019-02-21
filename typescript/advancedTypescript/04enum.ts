//枚举 Enum 
//用于取值在一定范围内的场景
//比如一周七天，颜色红绿蓝

//examples

enum Days {Sun,Mon,Tue,Wed,Thu,Fri,Sat};
//枚举成员会z自动被赋值为从0开始递增的数字，
//同时也会对枚举名反向映射

//Days['Sun'] === 0
//Days[0] === 'Sun'

//手动给枚举赋值
//覆盖自动赋值的数字
enum Days1 {Sun=4,Mon=2,Tue,Wed,Thu,Fri,Sat}
Days1['Sun'] === 4
Days1['Mon'] === 2
Days1['Tue'] === 3
Days1['Wed'] === 4
//未手动赋值枚举项，会接着上一枚举项递增

//如果手动复制和被动赋值重复，ts不会察觉，枚举值会索引最后一个赋值的覆盖
Days1[4] === 'Wed'

//常数项Constant member
//计算所得项 computed member

enum Color {Red,Green,Blue='blue'.length};
//计算项后的枚举项一定要手动赋值，否则无法自动复制

