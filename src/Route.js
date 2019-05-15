import React from 'react';
import {Router,Route,browserHistory} from 'react-router';
import Home from './pages/helloworld';
import Detail from './pages/team.js';
import NotFound from './pages/NotFound.js';

const history = browserHistory;
const Routes=()=>(
    <Router history={browserHistory}>
        <Route path='home' component={Home}/>
        <Route path='detail' component={Detail}/>
        <Route path='*' component={NotFound}/>
    </Router>
)
