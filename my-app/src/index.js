import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Components/homePage.js'
import Profile from './Components/profilePage.js'
import Follow from './Components/follow.js'
import Postcollections from './Components/collection.js'
import NotFound from './Components/404.js'
import * as serviceWorker from './serviceWorker.js';
import stores from './store/stores.js'
import Login from './Components/loginPage.js'

import routerTest from './Components/routerTest'
import { BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom'
import { toast } from 'react-toastify';

//configure toast
toast.configure()

//ReactDOM.render(<Homepage />, document.getElementById('root'));
ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/profile" component={Profile} />
            <Route path="/follow/:para" component={Follow} />
            <Route path="/collection/:para" component={Postcollections} />
            <Route path="/login" component={Login} />
            <Route path="/404" component={NotFound} />
            <Redirect from='*' to='/404' />
        </Switch>
    </Router>
    , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
