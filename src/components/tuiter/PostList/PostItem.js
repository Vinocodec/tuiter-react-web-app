import React from 'react';
import { Link } from 'react-router-dom';
import SummaryPicture from './SummaryPicture';

const PostItem = ({
                    post = {
                      'userName': 'New York Post',
                      'handle': 'nypost',
                      'icon': '/images/new_york_post_icon.png',
                      'time': '23h',
                      'content': 'Grimes seen reading Karl Marx following split with world\'s richest man Elon Musk <a href="#">trib.al/nx2Gfaq</a>',
                      'image': '/images/new_york_post_summary.jpeg',
                      'comment_count': '965',
                      'retweet_count': '2.4k',
                      'like_count': '4k'
                    }
                  }) => {
  return (
    <>
      <div className="rounded wd-background-grey row m-0 ps-2 pe-2 pt-2 pb-2">
        <div className="col-1 justify-content-center">
          <img className="wd-circle-icon" src={post.icon} alt={post.userName}/>
        </div>

        <div className="col-11 row ms-2">
          {/*text post*/}
          <div className="col-11 mb-2">
            <p className="wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial">
            <span className="wd-font-white wd-font-bold">{post.userName}&nbsp;
              <i className="fas fa-check-circle"></i>
            </span>&nbsp;@{post.handle}&nbsp;•&nbsp;{post.time}
            </p>
            <p className="wd-title wd-font-white wd-font-size-15px wd-font-family-arial"
               dangerouslySetInnerHTML={{__html: post.content}}/>
          </div>
          <div className="col-1">
            <Link to="#" className="wd-font-white">...</Link>
          </div>

          {/*summary picture and text*/}
          <SummaryPicture post={post}/>

          {/*post icons*/}
          <div className="col-12 d-flex pt-2 pe-5 justify-content-between">
            <div>
              <Link to="#" className="wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial">
              <span className="wd-margin-right-12px">
                <i className="far fa-comment fa-flip-horizontal"></i>
              </span>{post.comment_count}
              </Link>
            </div>
            <div>
              <Link to="#" className="wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial">
              <span className="wd-margin-right-12px">
                <i className="fas fa-retweet"></i>
              </span>
                {post.retweet_count}
              </Link>
            </div>
            <div>
              <Link to="#" className="wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial">
              <span className="wd-margin-right-12px">
                <i className="fas fa-heart"></i>
              </span>
                {post.like_count}
              </Link>
            </div>
            <div>
              <Link to="#" className="wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial">
              <span className="wd-margin-right-12px">
                <i className="fas fa-external-link-alt"></i>
              </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostItem;