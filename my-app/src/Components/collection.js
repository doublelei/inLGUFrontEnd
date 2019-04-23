'use strict';
import React, { Component } from 'react';
import NavBar from './nav.js';
import Post from './post.js';
import Head from './head.js'
import { observable, autorun, action, decorate } from "mobx";
import { inject } from 'mobx-react';

function LoadMore(props) {
    return (
        <a id="load-more-button" href="#" className="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid">
            <svg className="olymp-three-dots-icon">
                <use xlinkHref="#olymp-three-dots-icon" />
            </svg>
        </a>
    )
}

class _MyPost extends Component {
    render() {
        return (
            <body>
                <NavBar {...this.props.GlobalStore} />
                <div className="header-spacer"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Head {...this.props.GlobalStore.accounts} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <main className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            {this.props.MyPostStore.status_left.map((status) => <Post {...status}/>)}
                        </main>
                        <main className="col-xl-6 col-lg-12 col-md- col-sm-12 col-xs-12">
                            {this.props.MyPostStore.status_right.map((status) => <Post {...status}/>)}
                        </main>

                    </div>
                </div>
            </body>
        );
    }
}

class _Collections extends Component {
    render() {
        return (
            <body>
                <NavBar {...this.props.GlobalStore} />
                <div className="header-spacer"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Head {...this.props.GlobalStore.accounts} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <main className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            {this.props.CollectionStore.status_left.map((status) => <Post {...status}/>)}
                        </main>
                        <main className="col-xl-6 col-lg-12 col-md- col-sm-12 col-xs-12">
                            {this.props.CollectionStore.status_right.map((status) => <Post {...status}/>)}
                        </main>

                    </div>
                </div>
            </body>
        );
    }
}

const MyPost = inject('MyPostStore', 'GlobalStore')(_MyPost)
const Collections = inject('CollectionStore', 'GlobalStore')(_Collections)

export { MyPost, Collections };
