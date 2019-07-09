import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import Erying from './Erying'
import Qibinglian from './Qibinglian'
import Test from './Test'

ReactDOM.render(<Router>
    <Switch>
            <Route path='/' exact component={App}></Route>
            <Route path='/erying' component={Erying}></Route>
            <Route path='/qibinglian' component={Qibinglian}></Route>
            <Route path='/:location' component={Test}></Route> 
            {/* <Redirect to='/' ></Redirect> */}
    </Switch>
    <div>
        <ul>
            <li>
                <Link to='/'>一营</Link>
            </li>
            <li>
                <Link to='/erying'>二营</Link>
            </li>
            <li>
                <Link to='/qibinglian'>骑兵连</Link>
            </li>
        </ul>
    </div>
</Router>, document.getElementById('root'));


