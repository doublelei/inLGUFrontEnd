import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Components/homePage.js'
import Profile from './Components/profilePage.js'
import Follow from './Components/follow'
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<Homepage />, document.getElementById('root'));
ReactDOM.render(<Homepage />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
