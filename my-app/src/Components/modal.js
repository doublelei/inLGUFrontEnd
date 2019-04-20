'use strict';
import React, { Component } from 'react';

function PhotoUpload(props) {
    return (
        <div className="modal fade" id="update-header-photo" aria-hidden="true" style={{ display: 'none' }}>
            <div className="modal-dialog ui-block window-popup update-header-photo">
                <a className="close icon-close" aria-label="Close" href="#" data-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="olymp-close-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-close-icon" /></svg>
                </a>
                <div className="ui-block-title">
                    <h6 className="title">Update Your Photo</h6>
                </div>
                <a className="upload-photo-item" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="olymp-computer-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-computer-icon" /></svg>
                    <h6>Upload Photo</h6>
                    <span>Browse your computer.</span>
                </a>
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
