//1.lifecycle api
//1.1 constructor()
//1.1.1 initial state and bind event handler
//1.1.2 super(props) at first to apply this.props
//1.1.3 avoid any side-effects and subscriptions
//1.1.4 aviod any props in this.state 

//1.2 render()
//1.2.1 return react elements
//1.2.2 don't modify state -- pure function
//1.2.3 don't interact with dom directly
//1.2.4 not invoke if shouldComponentUpadate() return false

//1.3 componentDidMount()
//1.3.1 invoked immediately after mounted(inserted into dom)
//1.3.2 good place to instantiate the network request and set up any subscription
//1.3.3 if called setState, it will rerender before browser update, in the case when setState before measure dom size or position

//1.4 componentDidUpdate(prevProps,prevState,snapshot)
//1.4.1 invoked immediately after updated(change the dom)
//1.4.2 compare current state/props to previous state/props as a condition to do other thing
//1.4.3 if setState(),must be in condition to avoid infinite render loop
//1.4.4 opportunate to operate dom, good place for network request after compare
//
//1.5 componentWillUnmount()
//1.5.1 invoked immediately after unmounted(remove from dom)
//1.5.2 cleanup method, cancel request, clean up any subscription in willMount()

//1.6 other rare used lifecycle methods
//1.6.1 componentShouldMount(nextProps,nextState)
//1.6.1.1 invoked bewteen state/props changed and rendering element
//1.6.1.2 compare this.props/state with nextProps/state, not rendering when returns false
//1.6.1.3 only for performance optimiztion and usually replaced by extend PureComponent

//1.6.2 static getDerivedStateFromProps(props,state)

