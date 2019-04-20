'use strict';
import React, { Component } from 'react';
import NavBar from './nav.js';
import Post from './post.js';
import Head from './head.js'


function LoadMore(props) {
    return (
        <a id="load-more-button" href="#" className="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid">
            <svg className="olymp-three-dots-icon">
                <use xlinkHref="#olymp-three-dots-icon" />
            </svg>
        </a>
    )
}

class Postcollections extends Component {
    render() {
        return (
            <body>
                <NavBar />
                <div className="header-spacer"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Head />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <main className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Post />
                            <Post />
                        </main>
                        <main className="col-xl-6 col-lg-12 col-md- col-sm-12 col-xs-12">
                            <Post />
                            <Post />
                        </main>

                    </div>
                </div>
            </body>
        );
    }
}

export default Postcollections;