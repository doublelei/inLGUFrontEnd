'use strict';
import React, { Component } from 'react';
import DropzoneComp from "./upload.js"

function PhotoUpload(props) {
    return (
        <div className="modal fade" id="update-header-photo" aria-hidden="true" style={{ display: 'none', position:"fixed", top: "30%"}}>
            <div className="modal-dialog ui-block window-popup update-header-photo">
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


class Modals extends Component {
    render() {
        return (
            <div>
                <PhotoUpload />
            </div>
        );
    }
}

export default Modals 
