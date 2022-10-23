import React from 'react';

const SummaryPicture = ({
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
  if (post.title === undefined) {
    return (
      // summary picture
      <div className="col-12">
        <div className="wd-border-1px wd-rounded-corners-all-around">
          <img className="img-fluid wd-rounded-corners-all-around" src={post.image} alt={post.userName}/>
        </div>
      </div>
    );
  } else {
    return (
      <>
        {/*summary picture*/}
        <div className="col-12">
          <div className="wd-border-1px wd-rounded-corners-top">
            <img className="img-fluid wd-rounded-corners-top" src={post.image} alt={post.userName}/>
          </div>
        </div>
        {/*summary text*/}
        <div className="col-12">
          <div className=" wd-padding-12px wd-border-1px wd-rounded-corners-bottom">
            <p className="wd-bookmark-title wd-font-white wd-font-size-15px wd-font-family-arial">{post.title}</p>
            <p className="wd-title wd-font-grey wd-font-size-15px wd-font-family-arial">{post.summary}</p>
            <p className="wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial">
              <i className="fas fa-link fa-xs"></i>&nbsp;{post.link}
            </p>
          </div>
        </div>
      </>
    );
  }
};

export default SummaryPicture;