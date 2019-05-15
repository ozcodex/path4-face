const Routes =()=>(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='home' component={Home}/>
            <Route path='detail' component={Detail}/>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
)

