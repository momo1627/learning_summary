//1. useEffect do something after render 
//render -> useEffect ->setState -> re-render

//2. Effect 常用操作一般包括 request，操作dom等不需要clear的,不需要retrun 任何东西
//useEffect(()=>{do something}) 
//还有一些例如绑定外部数据的需要clear的操作
//useEffect(
    //()=>{
        //do subscription 
        //return ()=>{clear subscription}
  //  }
//  )
//clean up 在每次render后，每次useEffect之前，清楚上次effect

//3. split unrelate effect 不同内容的effect 写成独立的effect，并和相关state一起，作为逻辑，封装成custom hooks

//4. effect clean after every render
//当effect 绑定了component 内部数据state/props时，如果state或props改变，触发render，随之effect也会更新
//不需要像class compononet中，在componentDidUpdate中设置监听改变
//即effect会和previou effect作比较，更新

//5. skip effect
//useEffect(()=>{data},[data])
//useEffect的第二个参数，可以绑定一个数组，每次render后，比较数组中数据是否相比前一次effect更新，如果不变，则这次render之后不会useEffect
//如果数组为[]空，则不再触发，但不推荐使用
