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
                    <h6 className="title">Update Header Photo</h6>
                </div>
                <a className="upload-photo-item" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="olymp-computer-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-computer-icon" /></svg>
                    <h6>Upload Photo</h6>
                    <span>Browse your computer.</span>
                </a>
                <a className="upload-photo-item" href="#" data-toggle="modal" data-target="#choose-from-my-photo">
                    <svg xmlns="http://www.w3.org/2000/svg" className="olymp-photos-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-photos-icon" /></svg>
                    <h6>Choose from My Photos</h6>
                    <span>Choose from your uploaded photos</span>
                </a>
            </div>
        </div>
    )
}

function ChoosePhoto(props) {
    return (
        <div className="modal fade" id="choose-from-my-photo" aria-hidden="true" style={{ display: 'none' }}>
            <div className="modal-dialog ui-block window-popup choose-from-my-photo">
                <a className="close icon-close" aria-label="Close" href="#" data-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="olymp-close-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-close-icon" /></svg>
                </a>
                <div className="ui-block-title">
                    <h6 className="title">Choose from My Photos</h6>
                    {/* Nav tabs */}
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" role="tab" aria-expanded="true" href="#home" data-toggle="tab">
                                <svg xmlns="http://www.w3.org/2000/svg" className="olymp-photos-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-photos-icon" /></svg>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" role="tab" aria-expanded="false" href="#profile" data-toggle="tab">
                                <svg xmlns="http://www.w3.org/2000/svg" className="olymp-albums-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-albums-icon" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="ui-block-content">
                    {/* Tab panes */}
                    <div className="tab-content">
                        <div className="tab-pane active" id="home" role="tabpanel" aria-expanded="true">
                            <div className="choose-photo-item" style={{ height: '170.99px' }} data-mh="choose-item">
                                <div className="radio">
                                    <label className="custom-radio">
                                        <img alt="photo" src="img/choose-photo1.jpg" />
                                        <input name="optionsRadios" type="radio" /><span className="circle" /><span className="check" />
                                    </label>
                                </div>
                            </div>
                            <div className="choose-photo-item" style={{ height: '170.99px' }} data-mh="choose-item">
                                <div className="radio">
                                    <label className="custom-radio">
                                        <img alt="photo" src="img/choose-photo2.jpg" />
                                        <input name="optionsRadios" type="radio" /><span className="circle" /><span className="check" />
                                    </label>
                                </div>
                            </div>
                            <div className="choose-photo-item" style={{ height: '170.99px' }} data-mh="choose-item">
                                <div className="radio">
                                    <label className="custom-radio">
                                        <img alt="photo" src="img/choose-photo3.jpg" />
                                        <input name="optionsRadios" type="radio" /><span className="circle" /><span className="check" />
                                    </label>
                                </div>
                            </div>
                            <div className="choose-photo-item" style={{ height: '170.99px' }} data-mh="choose-item">
                                <div className="radio">
                                    <label className="custom-radio">
                                        <img alt="photo" src="img/choose-photo4.jpg" />
                                        <input name="optionsRadios" type="radio" /><span className="circle" /><span className="check" />
                                    </label>
                                </div>
                            </div>
                            <div className="choose-photo-item" style={{ height: '170.99px' }} data-mh="choose-item">
                                <div className="radio">
                                    <label className="custom-radio">
                                        <img alt="photo" src="img/choose-photo5.jpg" />
                                        <input name="optionsRadios" type="radio" /><span className="circle" /><span className="check" />
                                    </label>
                                </div>
                            </div>
                            <div className="choose-photo-item" style={{ height: '170.99px' }} data-mh="choose-item">
                                <div className="radio">
                                    <label className="custom-radio">
                                        <img alt="photo" src="img/choose-photo6.jpg" />
                                        <input name="optionsRadios" type="radio" /><span className="circle" /><span className="check" />
                                    </label>
                                </div>
                            </div>
                            <div className="choose-photo-item" style={{ height: '170.99px' }} data-mh="choose-item">
                                <div className="radio">
                                    <label className="custom-radio">
                                        <img alt="photo" src="img/choose-photo7.jpg" />
                                        <input name="optionsRadios" type="radio" /><span className="circle" /><span className="check" />
                                    </label>
                                </div>
                            </div>
                            <div className="choose-photo-item" style={{ height: '170.99px' }} data-mh="choose-item">
                                <div className="radio">
                                    <label className="custom-radio">
                                        <img alt="photo" src="img/choose-photo8.jpg" />
                                        <input name="optionsRadios" type="radio" /><span className="circle" /><span className="check" />
                                    </label>
                                </div>
                            </div>
                            <div className="choose-photo-item" style={{ height: '170.99px' }} data-mh="choose-item">
                                <div className="radio">
                                    <label className="custom-radio">
                                        <img alt="photo" src="img/choose-photo9.jpg" />
                                        <input name="optionsRadios" type="radio" /><span className="circle" /><span className="check" />
                                    </label>
                                </div>
                            </div>
                            <a className="btn btn-secondary btn-lg btn--half-width" href="#">Cancel</a>
                            <a className="btn btn-primary btn-lg btn--half-width" href="#">Confirm Photo</a>
                        </div>
                        <div className="tab-pane" id="profile" role="tabpanel" aria-expanded="false">
                            <div className="choose-photo-item" style={{ height: '244.84px' }} data-mh="choose-item">
                                <figure>
                                    <img alt="photo" src="img/choose-photo10.jpg" />
                                    <figcaption>
                                        <a href="#">South America Vacations</a>
                                        <span>Last Added: 2 hours ago</span>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="choose-photo-item" style={{ height: '244.84px' }} data-mh="choose-item">
                                <figure>
                                    <img alt="photo" src="img/choose-photo11.jpg" />
                                    <figcaption>
                                        <a href="#">Photoshoot Summer 2016</a>
                                        <span>Last Added: 5 weeks ago</span>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="choose-photo-item" style={{ height: '244.84px' }} data-mh="choose-item">
                                <figure>
                                    <img alt="photo" src="img/choose-photo12.jpg" />
                                    <figcaption>
                                        <a href="#">Amazing Street Food</a>
                                        <span>Last Added: 6 mins ago</span>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="choose-photo-item" style={{ height: '244.84px' }} data-mh="choose-item">
                                <figure>
                                    <img alt="photo" src="img/choose-photo13.jpg" />
                                    <figcaption>
                                        <a href="#">Graffity &amp; Street Art</a>
                                        <span>Last Added: 16 hours ago</span>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="choose-photo-item" style={{ height: '244.84px' }} data-mh="choose-item">
                                <figure>
                                    <img alt="photo" src="img/choose-photo14.jpg" />
                                    <figcaption>
                                        <a href="#">Amazing Landscapes</a>
                                        <span>Last Added: 13 mins ago</span>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="choose-photo-item" style={{ height: '244.84px' }} data-mh="choose-item">
                                <figure>
                                    <img alt="photo" src="img/choose-photo15.jpg" />
                                    <figcaption>
                                        <a href="#">The Majestic Canyon</a>
                                        <span>Last Added: 57 mins ago</span>
                                    </figcaption>
                                </figure>
                            </div>
                            <a className="btn btn-secondary btn-lg btn--half-width" href="#">Cancel</a>
                            <a className="btn btn-primary btn-lg disabled btn--half-width" href="#">Confirm Photo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

function ViewPhoto(props) {
    return (
    <div aria-hidden="true" aria-labelledby="myModalLabel" className="modal fade" id="post-view-photo" role="dialog" tabIndex={-1}>
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-body mb-0 p-0">
                    <img src="https://i3.ytimg.com/vi/vr0qNXmkUJ8/maxresdefault.jpg" alt style={{ width: '100%' }} />
                </div>
                <div className="modal-footer">
                    <div><a href="https://i3.ytimg.com/vi/vr0qNXmkUJ8/maxresdefault.jpg" target="_blank">Download</a></div>
                    <button className="btn btn-outline-primary btn-rounded btn-md ml-4 text-center" data-dismiss="modal" type="button">Close</button>
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
                <ChoosePhoto />
                <ViewPhoto />
            </div>
        );
    }
}

export default Modals 
