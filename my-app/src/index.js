import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Components/homePage.js'
import Profile from './Components/profilePage.js'
import Follow from './Components/follow.js'
import Postcollections from './Components/collection.js'
import * as serviceWorker from './serviceWorker';
import DropzoneComp from './Components/upload.js';

//ReactDOM.render(<Homepage />, document.getElementById('root'));
ReactDOM.render(<DropzoneComp />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
