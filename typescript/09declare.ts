//声明文件
//当使用第三方库时，我们需要引用它的声明文件

//声明语句
declare var jQuery:(selector:string) => any;
//给jQuery定义为函数类型，参数string 返回any
jQuery('#foo')

//声明文件
//通常我们把类型声明放到一个单独文件，就是声明文件
//jQuery.d.ts
declare var jQuery:(selector:string) => any;

//第三方声明文件
//直接用npm安装对应的声明模块即可
//npm install @types/jquery --save-dev