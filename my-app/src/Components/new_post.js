'use strict';
import React, { Component } from 'react';
import HomepageStore from '../store/store_homepage';
import $ from 'jquery'

const homepagestore = new HomepageStore()

function NewPostAuthorThumb(props) {
    return (
        <div className="author-thumb">
            <img class="img-responsive" alt="author" src={props.avatar} />
        </div>
    )
}

function NewPostInput(props) {
    return (
        <div className="form-group with-icon label-floating is-empty">
            <label className="control-label">Share what you are thinking here...</label>
            <textarea className="form-control" placeholder="" id="status_content" ></textarea>
            <span className="material-input"></span>
        </div>
    )
}

function NewPostButton(props) {
    return (
        <div className="add-options-message">
            <a className="options-message" href="#" data-original-title="ADD PHOTOS" data-toggle="tooltip" data-placement="top">
                <svg xmlns="http://www.w3.org/2000/svg" className="olymp-camera-icon" data-toggle="modal" data-target="#update-header-photo"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-camera-icon" /></svg>
            </a>
            <a className="options-message" href="#" data-original-title="TAG YOUR FRIENDS" data-toggle="tooltip" data-placement="top">
                <svg xmlns="http://www.w3.org/2000/svg" className="olymp-computer-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-computer-icon" /></svg>
            </a>
            <a className="options-message" href="#" data-original-title="ADD LOCATION" data-toggle="tooltip" data-placement="top">
                <svg xmlns="http://www.w3.org/2000/svg" className="olymp-small-pin-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-small-pin-icon" /></svg>
            </a>
            
            <button type="button" className="btn btn-primary btn-md-2" onClick={function postStatus(){homepagestore.new_status.content=$('#status_content').val(); homepagestore.new_status.anonymous=$('#status_anonymous').val(); homepagestore.postStatus()}}>Post</button>
            <div class="checkbox clicked" style={{display: "inline", padding:"5px 10px 0 0", verticalAlign: "middle", float: "right"}}>
                <label>
                    <input type="checkbox" name="optionsCheckboxes" id="status_anonymous"/>Anonymous
				</label>
            </div>
        </div>
    )
}

class NewPost extends Component {

    render() {
        return (
            <div className="ui-block">
                <div className="news-feed-form">
                    <div className="" aira-expanded="true">
                        <form>
                            <NewPostAuthorThumb {...this.props.GlobalStore.accounts.avatar} />
                            <NewPostInput {...this.props.HomepageStore} />
                            <NewPostButton {...this.props.HomepageStore} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewPost