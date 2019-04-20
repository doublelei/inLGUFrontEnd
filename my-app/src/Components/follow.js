'use strict';
import React, { Component } from 'react';
import NavBar from './nav.js';
import Head from './head.js'
import Modals from './modal.js'

function Searchfriend(props) {
    return (
        <div className="ui-block responsive-flex">
            <div class="ui-block-title">
                <div class="h6 title">{props.name}’s {props.page} ({props.num})</div>
                <form class="w-search">
                    <div class="form-group with-button is-empty">
                        <input class="form-control" type="text" placeholder="Search Friends..." />
                        <button>
                            <svg class="olymp-magnifying-glass-icon"><use xlinkHref="icons/icons.svg#olymp-magnifying-glass-icon"></use></svg>
                        </button>
                        <span class="material-input"></span></div>
                </form>
                <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg></a>
            </div>
        </div>
    )
}

function Friends(props) {
    return (
        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div class="ui-block">
                <div class="friend-item">
                    <div class="friend-item-content">

                        <div class="friend-avatar">
                            <div class="author-thumb">
                                <img src={props.avatar} alt="author" />
                            </div>
                            <div class="author-content">
                                <a href="#" class="h5 author-name">{props.name}</a>
                            </div>
                        </div>
                        <div class="friend-count">
                            <a href="#" class="friend-count-item">
                                <div class="h6">{props.follows}</div>
                                <div class="title">Follows</div>
                            </a>
                            <a href="#" class="friend-count-item">
                                <div class="h6">{props.followers}</div>
                                <div class="title">Followers</div>
                            </a>
                            <a href="#" class="friend-count-item">
                                <div class="h6">{props.post}</div>
                                <div class="title">Posts</div>
                            </a>
                        </div>
                        <div class="control-block-button">
                            <a href="#" class="btn btn-control bg-blue">
                                <svg class="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg>
                            </a>
                            <a href="#" class="btn btn-control bg-purple">
                                <svg class="olymp-chat---messages-icon"><use xlinkHref="icons/icons.svg#olymp-chat---messages-icon"></use></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

class Follow extends Component {
    render() {
        return (
            <body>
                <NavBar />
                <div class="header-spacer"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Head />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <Searchfriend name="James" page="Followers" num="86" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <Friends avatar="img/avatar1.jpg" name="Nicholas Grissom" followers="240" follows="52" post="16" />
                        <Friends avatar="img/avatar1.jpg" name="Nicholas Grissom" followers="240" follows="52" post="16" />
                        <Friends avatar="img/avatar1.jpg" name="Nicholas Grissom" followers="240" follows="52" post="16" />
                        <Friends avatar="img/avatar1.jpg" name="Nicholas Grissom" followers="240" follows="52" post="16" />
                        <Friends avatar="img/avatar1.jpg" name="Nicholas Grissom" followers="240" follows="52" post="16" />
                        <Friends avatar="img/avatar1.jpg" name="Nicholas Grissom" followers="240" follows="52" post="16" />
                        <Friends avatar="img/avatar1.jpg" name="Nicholas Grissom" followers="240" follows="52" post="16" />
                        <Friends avatar="img/avatar1.jpg" name="Nicholas Grissom" followers="240" follows="52" post="16" />
                        <Friends avatar="img/avatar1.jpg" name="Nicholas Grissom" followers="240" follows="52" post="16" />
                        <Friends avatar="img/avatar1.jpg" name="Nicholas Grissom" followers="240" follows="52" post="16" />
                        <Friends avatar="img/avatar1.jpg" name="Nicholas Grissom" followers="240" follows="52" post="16" />

                    </div>
                </div>

                <Modals />
            </body>
        );
    }
}

export default Follow;