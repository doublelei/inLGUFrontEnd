import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Components/homePage.js'
import Profile from './Components/profilePage.js'
import Follow from './Components/follow.js'
import Postcollections from './Components/collection.js'
import NotFound from './Components/404.js'
import * as serviceWorker from './serviceWorker.js';
import stores from './store/stores.js'

import MobxTest from './mobxTest'
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import { IndexRoute } from 'react-router'


//ReactDOM.render(<Homepage />, document.getElementById('root'));
ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/profile" component={Profile} />
            <Route path="/follow" component={Follow} />
            <Route path="/collection" component={Postcollections} />
            <Route path="/404" component={NotFound} />
        </Switch>
    </Router>
    , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
