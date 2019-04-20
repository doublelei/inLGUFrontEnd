'use strict';
import React, { Component } from 'react';

function Activity(props) {
    return (
        <li>
            <div className="author-thumb">
                <img src={props.avatar} alt="author" />
            </div>
            <div className="notification-event">
                <a href="#" className="h6 notification-friend">{props.name}</a> {props.action} on {props.targetname}’s <a href="#" className="notification-link">post.</a>.
            <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">{props.time}</time></span>
            </div>
        </li>
    )
}

class ActivityFeed extends Component {
    render() {
        return (
            <div className="ui-block">
                <div className="ui-block-title">
                    <h6 className="title">Activity Feed</h6>
                </div>
                <ul className="widget w-activity-feed notification-list">
                    <Activity avatar="img/avatar49-sm.jpg" name="Marina Polson" action="commented" targetname="Jason Mark" />
                    <Activity avatar="img/avatar49-sm.jpg" name="Marina Polson" action="commented" targetname="Jason Mark" />
                    <Activity avatar="img/avatar49-sm.jpg" name="Marina Polson" action="commented" targetname="Jason Mark" />
                    <Activity avatar="img/avatar49-sm.jpg" name="Marina Polson" action="commented" targetname="Jason Mark" />
                    <Activity avatar="img/avatar49-sm.jpg" name="Marina Polson" action="commented" targetname="Jason Mark" />

                
                </ul>
            </div>
        );
    }
}

export default ActivityFeed;