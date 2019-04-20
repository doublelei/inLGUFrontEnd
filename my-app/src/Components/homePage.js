'use strict';
import React, { Component } from 'react';
import NavBar from './nav.js';
import NewPost from './new_post.js'
import Post from './post.js';
import Modals from './modal.js'
import Weather from './w_weather.js'
import Calendar from './calendar.js'

function LoadMore(props){
    return(
        <a id="load-more-button" href="#" className="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid">
            <svg className="olymp-three-dots-icon">
                <use xlinkHref="#olymp-three-dots-icon" />
            </svg>
        </a>
    )
}

class Homepage extends Component {
    render() {
      return (
        <body>
            <NavBar />
            <div className="container">
            <br />
                <div className="row">
                    <main className="col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-xs-12">
                        <NewPost />
                        <div id="newsfeed-items-grid">
                            <Post />
                        </div>
                        <LoadMore />
                    </main>

                    <aside className="col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-12 col-xs-12">
                        <Weather />
                        <Calendar />
                    </aside>

                    <aside className="col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-xs-12">
                    </aside>
                </div>
            </div>
            <Modals />
        </body>
      );
    }
  }

export default Homepage;