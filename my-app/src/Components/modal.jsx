'use strict';
import React, { Component } from 'react';
import DropzoneComp from "./upload.jsx"
import HomepageStore from '../store/store_homepage';
import $ from 'jquery'

const homepagestore = new HomepageStore()
function PhotoUpload(props) {
    return (
        <div className="modal fade" id="update-header-photo" aria-hidden="true" style={{ display: 'none'}}>
            <div className="modal-dialog ui-block window-popup update-header-photo" style={{ display: 'none'}}>
                <a className="close icon-close" aria-label="Close" href="#" data-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="olymp-close-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-close-icon" /></svg>
                </a>
                <div className="ui-block-title">
                    <h6 className="title">Update One Photo</h6>
                </div>
                <DropzoneComp />
            </div>
        </div>
    )
}

function AddTag(props) {
    return (
        <div className="modal fade" id="add-tag" aria-hidden="true" style={{ display: 'none', top: "30%", width: "20%", left:"40%"}}>
            <div className="modal-dialog ui-block window-popup">
                <a className="close icon-close" aria-label="Close" href="#" data-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="olymp-close-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-close-icon" /></svg>
                </a>
                <div className="ui-block-title" style={{borderBottom:"0px", paddingLeft:"5%"}}>
                    <h6 className="title">Add One Tag</h6>
                </div>
                <div className="container">
                    <div className="row">
                        <div class="col-md-8">
                            <input type="text" id="modal-input" placeholder="#Tag" style={{paddingLeft:"5%", height:"60%"}}/>
                        </div>
                        <div class="col-md-4" >
                            <button type="button" class="btn btn-success" style={{paddingLeft:"5%", height:"60%"}} onClick={function addTagf(){console.log($('#modal-input').val());homepagestore.add_tag.status_id=homepagestore.modal_id; homepagestore.add_tag.tag_name=$('#modal-input').val();homepagestore.tagStatus()}}>Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

class Modals extends Component {
    render() {
        return (
            <div>
                <PhotoUpload />
                <AddTag />
            </div>
        );
    }
}

export default Modals 
