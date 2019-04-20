'use strict';
import React, { Component } from 'react';

function Section(props) {
    return (<div class="profile-section">
        <div class="row">
            <div class="col-lg-5 col-md-5 ">
                <ul class="profile-menu">
                    <li>
                        <a href="#" class="active">Homepage</a>
                    </li>
                    <li>
                        <a href="#">MyPosts</a>
                    </li>
                    <li>
                        <a href="#">Collects</a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-5 ml-auto col-md-5">
                <ul class="profile-menu">
                    <li>
                        <a href="#">Followers</a>
                    </li>
                    <li>
                        <a href="#">Follows</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>)
}

function Author(props) {
    return (<div class="top-header-author">
        <a href="#" class="author-thumb">
            <img src={props.avatar} alt="author" />
        </a>
        <div class="author-content">
            <a href="#" class="h4 author-name">{props.name}</a>
        </div>
    </div>
    )
}

class Head extends Component {
    render() {
        return (
            <div className="ui-block">
                <div className="top-header">
                    <Section />
                    <Author avatar="img/author-main1.jpg" name="James Spiegel" />
                </div>
            </div>
        );
    }
}


export default Head;