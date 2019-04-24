'use strict';
import React, { Component } from 'react';

function PostInfo(props) {
  return (
    <div className="post__author author vcard inline-items">
      <img src={props.avatar} alt="author" />
      <div className="author-date">
        <a className="h6 post__author-name fn" href="#">{props.username}</a>
        <div className="post__date">
          <time className="published" dateTime="2004-07-24T18:18">
            {props.created_at}
          </time>
        </div>
      </div>
    </div>
  )
}

function PostContent(props) {
  return (
    <div>
      <a href="#" data-target="#post-view-photo" data-toggle="modal">
        <img style={{ marginRight: "1rem" }} className="rounded float-left" src="./img/last-photo8.jpg" alt="Pic Loading Failed" />
      </a>
      <p>
        {props.content}
      </p>
    </div>
  )
}

function PostBottom(props) {
  return (
    <div className="post-additional-info inline-items">
      <a href="#" className="post-add-icon inline-items">
        <svg className="olymp-heart-icon"><use xlinkHref="icons/icons.svg#olymp-heart-icon"></use></svg>
        <span>{props.likes} Likes</span>
      </a>
      <div className="comments-shared">
        <a data-toggle="collapse" href="#Comments" className="post-add-icon inline-items" role="button" aria-expanded="false" aria-controls="Comments">
          <svg className="olymp-speech-balloon-icon"><use xlinkHref="icons/icons.svg#olymp-speech-balloon-icon"></use></svg>
          <span>{props.comments} Comments</span>
        </a>
      </div>
    </div>
  )
}

function PostSideButton(props) {
  return (
    <div className="control-block-button post-control-button">
      <a href="#" className="btn btn-control">
        <svg className="olymp-star-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"><use xlinkHref="icons/icons.svg#olymp-star-icon"></use></svg>
      </a>
      <a href="#" className="btn btn-control">
        <svg className="olymp-speech-balloon-icon"><use xlinkHref="icons/icons.svg#olymp-speech-balloon-icon"></use></svg>
      </a>
      <a href="#" className="btn btn-control">
        <svg className="olymp-little-delete" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"><use xlinkHref="icons/icons.svg#olymp-little-delete"></use></svg>
      </a>
    </div>
  )
}

function Tag(props) {
  const tags = props.tags.map((tag) =>
    <span className="badge badge-pill badge-success" style={{ margin: "0px 2px 2px 2px", fontWeight: "400", fontSize: "100%" }} ><font color="#F8F8F8">{tag}</font>
    </span>);
  return (<div style={{ margin: "2px 2px 2px 2px" }}>
    {tags}
    <button type="button" className="btn badge-pill badge-success" data-toggle="modal" data-target="#add-tag" style={{ marginBottom: "0", padding: ".15rem .4rem" }}>+</button>
  </div>)
}

function CommentWithChildren(props) {
  const children = props.chidren.map((child) => <Comment {...child}></Comment>)
  return (
    <li className="has-children">
      <div className="post__author author vcard inline-items">
        <img alt="author" src="img/author-page.jpg" />
        <div className="author-date">
          <a className="h6 post__author-name fn" href="02-ProfilePage.html">{props.account.username}</a>
          <div className="post__date">
            <time className="published" dateTime="2004-07-24T18:18">
              {props.created_at}
            </time>
          </div>
        </div>
        <a className="more" href="#"><svg xmlns="http://www.w3.org/2000/svg" className="olymp-three-dots-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-three-dots-icon" /></svg></a>
      </div>
      <p>{props.content}</p>
      <a className="post-add-icon inline-items" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="olymp-heart-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-heart-icon" /></svg>
        <span>{props.likes_count}</span>
      </a>
      <a className="reply" href="#">Reply</a>
      <ul className="children">
        {children}
      </ul>
    </li>
  )
}

function CommentWithoutChildren(props) {
  return (
    <li>
      <div className="post__author author vcard inline-items">
        <img alt="author" src="img/author-page.jpg" />
        <div className="author-date">
          <a className="h6 post__author-name fn" href="02-ProfilePage.html">{props.account.username}</a>
          <div className="post__date">
            <time className="published" dateTime="2004-07-24T18:18">
              {props.created_at}
            </time>
          </div>
        </div>
        <a className="more" href="#"><svg xmlns="http://www.w3.org/2000/svg" className="olymp-three-dots-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-three-dots-icon" /></svg></a>
      </div>
      <p>{props.content}</p>
      <a className="post-add-icon inline-items" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="olymp-heart-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-heart-icon" /></svg>
        <span>{props.likes_count}</span>
      </a>
      <a className="reply" href="#">Reply</a>
    </li>
  )
}

function Comment(props) {
  if (props.replies_count > 0) {
    return (
      <CommentWithChildren {...props}></CommentWithChildren>
    )
  } else {
    return (
      <CommentWithoutChildren {...props}></CommentWithoutChildren>
    )
  }
}

function CommentList(props) {
  const comments = props.comments.map((comment) => <Comment {...comment}></Comment>);
  return (
    <ul className="comments-list">
      {comments}
    </ul>
  )
}

function MoreComment(props) {
  return (
    <a className="more-comments" href="#">View more comments <span>+</span></a>
  )
}

function CommentForm(props) {
  return (
    <form className="comment-form inline-items">
      <div className="post__author author vcard inline-items">
        <img alt="author" src="img/author-page.jpg" />
        <div className="form-group with-icon-right is-empty">
          <textarea className="form-control" placeholder defaultValue={""} />
          <div className="add-options-message">
            <a className="options-message" href="#" data-toggle="modal" data-target="#update-header-photo">
              <svg xmlns="http://www.w3.org/2000/svg" className="olymp-camera-icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="icons/icons.svg#olymp-camera-icon" /></svg>
            </a>
          </div>
          <span className="material-input" /></div>
      </div>
    </form>
  )
}

class Post extends Component {
  render() {
    return (
      <div className="ui-block">
        <article className="hentry post has-post-thumbnail">
          <PostInfo avatar={this.props.account.avatar} username={this.props.account.username} created_at={this.props.created_at} />
          <PostContent content={this.props.content} />
          <PostBottom likes={this.props.likes_count} comments={this.props.replies_count} />
          <PostSideButton />
          <br />
          <Tag tags={this.props.tags} />
        </article>
        <div className="collapse" id="Comments">
          <CommentList {...this.props} />
          <MoreComment />
          <CommentForm />
        </div>

      </div>
    );
  }
}


export default Post;
