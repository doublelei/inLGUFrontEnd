'use strict';
import React, { Component } from 'react';
import NavBar from './nav.js';
import NewPost from './new_post.js'
import Post from './post.js';
import Poll from './poll.js';
import Modals from './modal.js'
import Weather from './weather.js'
import Calendar from './calendar.js'
import Head from './head.js'
import Hottags from "./hottag.js"
import ActivityFeed from "./activityfeed.js"
import { observable, autorun, action, decorate } from "mobx";
import { observer, inject } from "mobx-react";
import axios from "axios"



function LoadMore(props) {
    return (
        <a id="load-more-button" href="#" className="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid">
            <svg className="olymp-three-dots-icon">
                <use xlinkHref="#olymp-three-dots-icon" />
            </svg>
        </a>
    )
}

const posts = observable([
    { author: "Leo", time: "2018-08-21", content: "wwwwwwwwwww", likes: "12", comments: "21" },
    { author: "Brando", time: "2028-08-21", content: "kkkkkkkkkkkkk", likes: "112", comments: "213" }
])

class _Homepage extends Component {
    componentWillMount(){
        this.props.HomepageStore.timelinesPublic();
        this.props.HomepageStore.getHotTags();
    }

    render() {
        return (
            <div>
                <NavBar {...this.props.GlobalStore} />
                <div className="header-spacer"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Head {...this.props.GlobalStore.accounts} />
                        </div>
                    </div>
                </div>
                <div> {this.props.GlobalStore.test} </div>
                <div className="container">
                    <div className="row">
                        <main className="col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-xs-12">
                            <NewPost {...this.props} />
                            <div id="newsfeed-items-grid">
                                {this.props.HomepageStore.status_list.map((status) => <Post {...status}/>)}
                            </div>
                            <LoadMore />
                        </main>

                        <aside className="col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-12 col-xs-12">
                            <Weather info={this.props.HomepageStore} />
                            <Calendar />
                        </aside>

                        <aside className="col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <Hottags hot_tag={this.props.HomepageStore.hot_tag} />
                            <ActivityFeed {...this.props.HomepageStore} />
                        </aside>
                    </div>
                </div>
                <Modals />
            </div>
        );
    }
}


const Homepage = inject('HomepageStore', 'GlobalStore')(observer(_Homepage))

export default Homepage;