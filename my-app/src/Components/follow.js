'use strict';
import React, { Component } from 'react';
import NavBar from './nav.js';
import Head from './head.js'
import Modals from './modal.js'

function Searchfriend(props) {
    return (
        <div className="ui-block responsive-flex">
            <div className="ui-block-title">
                <div className="h6 title">{props.name}’s {props.page} ({props.num})</div>
                <form className="w-search">
                    <div className="form-group with-button is-empty">
                        <input className="form-control" type="text" placeholder="Search Friends..." />
                        <button>
                            <svg className="olymp-magnifying-glass-icon"><use xlinkHref="icons/icons.svg#olymp-magnifying-glass-icon"></use></svg>
                        </button>
                        <span className="material-input"></span></div>
                </form>
                <a href="#" className="more"><svg className="olymp-three-dots-icon"><use xlinkHref="icons/icons.svg#olymp-three-dots-icon"></use></svg></a>
            </div>
        </div>
    )
}

function Friends(props) {
    return (
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="ui-block">
                <div className="friend-item">
                    <div className="friend-item-content">

                        <div className="friend-avatar">
                            <div className="author-thumb">
                                <img src={props.avatar} alt="author" />
                            </div>
                            <div className="author-content">
                                <a href="#" className="h5 author-name">{props.name}</a>
                            </div>
                        </div>
                        <div className="friend-count">
                            <a href="#" className="friend-count-item">
                                <div className="h6">{props.follows}</div>
                                <div className="title">Follows</div>
                            </a>
                            <a href="#" className="friend-count-item">
                                <div className="h6">{props.followers}</div>
                                <div className="title">Followers</div>
                            </a>
                            <a href="#" className="friend-count-item">
                                <div className="h6">{props.post}</div>
                                <div className="title">Posts</div>
                            </a>
                        </div>
                        <div className="control-block-button">
                            <a href="#" className="btn btn-control bg-blue">
                                <svg className="olymp-happy-face-icon"><use xlinkHref="icons/icons.svg#olymp-happy-face-icon"></use></svg>
                            </a>
                            <a href="#" className="btn btn-control bg-purple">
                                <svg className="olymp-chat---messages-icon"><use xlinkHref="icons/icons.svg#olymp-chat---messages-icon"></use></svg>
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