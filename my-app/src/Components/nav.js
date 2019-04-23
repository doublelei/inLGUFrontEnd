'use strict';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Title(props) {
    return (
        <div className="page-title">
            <h6>{props.title}</h6>
        </div>
    )
}

function Search(props) {
    return (
        <form className="search-bar w-search notification-list friend-requests">
            <div className="form-group with-button is-empty">
                <input className="form-control js-user-search selectized" placeholder="Search here people or pages..." type="text" tabindex="-1" value="" style={{ dispaly: "none" }} />
                <div className="selectize-control form-control js-user-search multi">
                    <div className="selectize-input items not-full has-options">
                        <input type="text" autocomplete="off" tabindex="" placeholder="Search here people or pages..." style={{ width: "229.859px" }} />
                    </div>
                    <div className="selectize-dropdown multi form-control js-user-search" style={{ display: "none", width: "500px", top: "70px", left: "0px" }}>
                        <div className="selectize-dropdown-content"></div></div></div>
                <button>
                    <svg className="olymp-magnifying-glass-icon"><use xlinkHref="icons/icons.svg#olymp-magnifying-glass-icon"></use></svg>
                </button>
                <span className="material-input"></span>
            </div>
        </form>
    )
}

function Notifications(props) {
    const notifications = props.notification.map((noticifation) => <Notification username={noticifation.username} action={noticifation.action} avatar={noticifation.avatar} time={noticifation.time} />);
    return (
        <div className="control-icon more has-items">
            <svg className="olymp-thunder-icon"><use xlinkHref="icons/icons.svg#olymp-thunder-icon"></use></svg>

            <div className="label-avatar bg-primary">{props.notification.length}</div>

            <div className="more-dropdown more-with-triangle triangle-top-center">
                <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Notifications</h6>
                    <a href="#">Mark all as read</a>
                </div>

                <div className="mCustomScrollbar ps ps--theme_default ps--active-y" data-mcs-theme="dark" data-ps-id="1b3f3c3b-dad2-3aa9-5917-4909939f28bd">
                    <ul className="notification-list">
                        {notifications}
                    </ul>
                    <div className="ps__scrollbar-x-rail" style={{ left: "0px", bottom: "0px" }}>
                        <div className="ps__scrollbar-x" tabindex="0" style={{ left: "0px", width: "0px" }}>
                        </div>
                    </div>
                    <div className="ps__scrollbar-y-rail" style={{ top: "0px", height: "300px", right: "0px" }}>
                        <div className="ps__scrollbar-y" tabindex="0" style={{ top: "0px", height: "148px" }}>
                        </div>
                    </div>
                </div>

                <a href="#" className="view-all bg-primary">View All Notifications</a>
            </div>
        </div>
    )

}

function Notification(props) {
    return (
        <li>
            <div className="author-thumb">
                <img src={props.avatar} alt="author" />
            </div>
            <div className="notification-event">
                <div><a href="#" className="h6 notification-friend">{props.username}</a> {props.action} on your<a href="#" className="notification-link">post</a>.</div>
                <span className="notification-date"><time className="entry-date updated" datetime="2004-07-24T18:18">{props.time}</time></span>
            </div>
            <span className="notification-icon">
                <svg className="olymp-comments-post-icon"><use xlinkHref="icons/icons.svg#olymp-comments-post-icon"></use></svg>
            </span>
            <div className="more">
                <svg className="olymp-little-delete"><use xlinkHref="icons/icons.svg#olymp-little-delete"></use></svg>
            </div>
        </li>
    )
}

function Author(props) {
    return (
        <div className="author-page author vcard inline-items more">
            <div className="author-thumb">
                <img alt="author" src={props.avatar} className="avatar" />
                <span className="icon-status online"></span>
                <div className="more-dropdown more-with-triangle">
                    <div className="mCustomScrollbar ps ps--theme_default" data-mcs-theme="dark" data-ps-id="159c809c-36e9-fa65-ea20-01a26d50da7d">
                        <div className="ui-block-title ui-block-title-small">
                            <h6 className="title">Your Account</h6>
                        </div>
                        <ul className="account-settings">
                            <li>
                                <a href="#">
                                    <svg className="olymp-menu-icon"><use xlinkHref="icons/icons.svg#olymp-menu-icon"></use></svg>
                                    <span><Link to="/profile">Profile Settings</Link></span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg className="olymp-logout-icon"><use xlinkHref="icons/icons.svg#olymp-logout-icon"></use></svg>

                                    <span>Log Out</span>
                                </a>
                            </li>
                        </ul>
                        <div className="ui-block-title ui-block-title-small">
                            <h6 className="title">About Olympus</h6>
                        </div>
                        <ul>
                            <li>
                                <a href="#">
                                    <span>Terms and Conditions</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>FAQs</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Careers</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                        <div className="ps__scrollbar-x-rail" style={{ left: "0px", bottom: "0px" }}>
                            <div className="ps__scrollbar-x" tabindex="0" style={{ left: "0px", width: "0px" }}>
                            </div>
                        </div>
                        <div className="ps__scrollbar-y-rail" style={{ top: "0px", right: "0px" }}>
                            <div className="ps__scrollbar-y" tabindex="0" style={{ top: "0px", height: "0px" }}>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <a href="#" className="author-name fn">
                <div className="author-title">
                    {props.username} <svg className="olymp-dropdown-arrow-icon"><use xlinkHref="icons/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
                </div>
                {/* <span className="author-subtitle">SPACE COWBOY</span> */}
            </a>
        </div>
    )
}

class NavBar extends Component {
    render() {
        return (
            <header className="header" id="site-header">
                <Title title="inLGU" />
                <div className="header-content-wrapper">
                    <Search />
                    <a href="#" className="link-find-friend">Find Friends</a>
                    <div className="control-block">
                        <Notifications {...this.props} />
                        <Author {...this.props.accounts} />

                    </div>
                </div>

            </header>
        )
    }
}









// function NavSearch(props) {
//     return (
//         <form className="search-bar w-search notification-list friend-requests">
//             <div className="form-group with-button is-empty">
//                 <input className="form-control js-user-search selectized" placeholder="Search here people or pages..." type="text" tabIndex={-1} defaultValue style={{ display: '"none"' }} /><div className="selectize-control form-control js-user-search multi"><div className="selectize-input items not-full has-options"><input type="text" autoComplete="off" tabIndex placeholder="Search here people or pages..." style={{ width: '229.863px' }} /></div><div className="selectize-dropdown multi form-control js-user-search" style={{ display: '"none"', width: 500, top: 70, left: 0 }}><div className="selectize-dropdown-content" /></div></div>
//                 <button>
//                     <svg className="olymp-magnifying-glass-icon"><use xlinkHref="#olymp-magnifying-glass-icon" /></svg>
//                 </button>
//                 <span className="material-input" />
//             </div>
//         </form>

//     )
// }

// function NavAlert(props) {
//     return (
//         <div className="control-icon more has-items">
//             <svg xmlns="http://www.w3.org/2000/svg" className="olymp-thunder-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-thunder-icon" /></svg>
//             <div className="label-avatar bg-primary">8</div>
//             <div className="more-dropdown more-with-triangle triangle-top-center">
//                 <div className="ui-block-title ui-block-title-small">
//                     <h6 className="title">Notifications</h6>
//                 </div>
//                 <div className="mCustomScrollbar ps ps--theme_default ps--active-y" data-mcs-theme="dark" data-ps-id="21736bda-4b80-dfa2-8f70-51fab97bac99">
//                     <ul className="notification-list">
//                         <li>
//                             <div className="author-thumb">
//                                 <img alt="author" src="img/avatar62-sm.jpg" />
//                             </div>
//                             <div className="notification-event">
//                                 <div><a className="h6 notification-friend" href="#">Mathilda Brinker</a> commented on your new <a className="notification-link" href="#">profile status</a>.</div>
//                                 <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">4 hours ago</time></span>
//                             </div>
//                         </li>
//                         <li className="un-read">
//                             <div className="author-thumb">
//                                 <img alt="author" src="img/avatar63-sm.jpg" />
//                             </div>
//                             <div className="notification-event">
//                                 <div>You and <a className="h6 notification-friend" href="#">Nicholas Grissom</a> just became friends. Write on <a className="notification-link" href="#">his wall</a>.</div>
//                                 <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">9 hours ago</time></span>
//                             </div>
//                         </li>
//                         <li>
//                             <div className="author-thumb">
//                                 <img alt="author" src="img/avatar65-sm.jpg" />
//                             </div>
//                             <div className="notification-event">
//                                 <div><a className="h6 notification-friend" href="#">Green Goo Rock</a> invited you to attend to his event Goo in <a className="notification-link" href="#">Gotham Bar</a>.</div>
//                                 <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 5th at 6:43pm</time></span>
//                             </div>
//                         </li>
//                         <li>
//                             <div className="author-thumb">
//                                 <img alt="author" src="img/avatar66-sm.jpg" />
//                             </div>
//                             <div className="notification-event">
//                                 <div><a className="h6 notification-friend" href="#">James Summers</a> commented on your new <a className="notification-link" href="#">profile status</a>.</div>
//                                 <span className="notification-date"><time className="entry-date updated" dateTime="2004-07-24T18:18">March 2nd at 8:29pm</time></span>
//                             </div>
//                         </li>
//                     </ul>
//                     <div className="ps__scrollbar-x-rail" style={{ left: 0, bottom: 0 }}><div tabIndex={0} className="ps__scrollbar-x" style={{ left: 0, width: 0 }} /></div><div className="ps__scrollbar-y-rail" style={{ top: 0, height: 300, right: 0 }}><div tabIndex={0} className="ps__scrollbar-y" style={{ top: 0, height: 147 }} /></div></div>
//                 <a className="view-all bg-primary" href="#">View All Notifications</a>
//             </div>
//         </div>

//     )
// }

// function NavUserInfo(props) {
//     return (
//         <div className="author-page author vcard inline-items more">
//             <div className="author-thumb">
//                 <img className="avatar" alt="author" src="img/author-page.jpg" />
//                 <span className="icon-status online" />
//                 <div className="more-dropdown more-with-triangle">
//                     <div className="mCustomScrollbar ps ps--theme_default ps--active-y" data-mcs-theme="dark" data-ps-id="03f65350-d6de-fb78-cec0-adbb3a3a9af5">
//                         <div className="ui-block-title ui-block-title-small">
//                             <h6 className="title">Your Account</h6>
//                         </div>
//                         <ul className="account-settings">
//                             <li>
//                                 <a href="user_profile.html">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="olymp-menu-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-menu-icon" /></svg>
//                                     <span>Profile Settings</span>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="olymp-logout-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-logout-icon" /></svg>
//                                     <span>Log Out</span>
//                                 </a>
//                             </li>
//                         </ul>
//                         <div className="ps__scrollbar-x-rail" style={{ left: 0, bottom: 0 }}><div tabIndex={0} className="ps__scrollbar-x" style={{ left: 0, width: 0 }} /></div><div className="ps__scrollbar-y-rail" style={{ top: 0, height: 702, right: 0 }}><div tabIndex={0} className="ps__scrollbar-y" style={{ top: 0, height: 701 }} /></div></div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// function BootstrapNavBar(props) {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//             <a className="navbar-brand" href="#">inLGU</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon" />
//             </button>
//             <div className="collapse navbar-collapse" id="navbarColor01">
//                 <ul className="navbar-nav mr-auto">
//                     <li className="nav-item active">
//                         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">Features</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">Pricing</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">About</a>
//                     </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="text" placeholder="Search" />
//                     <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//                 <NavUserInfo />
//             </div>
//         </nav>

//     )
// }

// class NavBar extends Component {
//     render() {
//         return (
//             <header className="header" id="site-header">
//                 <div className="page-title">
//                     <h5>inLGU</h5>
//                 </div>
//                 <div className="header-content-warpper">
//                     <NavSearch />
//                     <div className="control-block">
//                         <NavAlert />
//                         <NavUserInfo />
//                     </div>
//                 </div>
//             </header>
//         );
//     }
// }

// class r_NavBar extends Component {
//     render() {
//         return (
//             <header className="header header-responsive" id="site-header-responsive">
//                 <div className="header-content-warpper">
//                     <ul className="nav nav-tabs mobile-app-tabs" role="tablist">
//                         <li className="nav-item">
//                             <a className="nav-link" role="tab" href="#request" data-toggle="tab">
//                                 <div className="control-icon has-items">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="olymp-happy-face-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-happy-face-icon" /></svg>
//                                     <div className="label-avatar bg-blue">6</div>
//                                 </div>
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" role="tab" href="#chat" data-toggle="tab">
//                                 <div className="control-icon has-items">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="olymp-chat---messages-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-chat---messages-icon" /></svg>
//                                     <div className="label-avatar bg-purple">2</div>
//                                 </div>
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" role="tab" href="#notification" data-toggle="tab">
//                                 <div className="control-icon has-items">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="olymp-thunder-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-thunder-icon" /></svg>
//                                     <div className="label-avatar bg-primary">8</div>
//                                 </div>
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" role="tab" href="#search" data-toggle="tab">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="olymp-magnifying-glass-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-magnifying-glass-icon" /></svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="olymp-close-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-close-icon" /></svg>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </header>
//         )
//     }
// }

export default NavBar