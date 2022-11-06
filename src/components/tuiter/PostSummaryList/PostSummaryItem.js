import React from 'react';

const PostSummaryItem = ({
                           post = {
                             topic: 'Web Development',
                             userName: 'ReactJS',
                             time: '2h',
                             title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
                             image: '/images/reactjs.jpg'
                           }
                         }) => {
  return (
    <div className="rounded wd-background-grey row m-0 ps-2 pe-2 pt-2 pb-2 ">
      <div className="col-8 col-sm-8 col-lg-9">
        <p className="wd-title wd-font-grey wd-font-size-15px wd-font-family-arial">
          {post.topic}</p>
        <p className="wd-title wd-font-white wd-font-bold wd-font-size-15px wd-font-family-arial">
          <span className="">{post.userName}&nbsp;<i className="fas fa-check-circle"></i></span>
          <span className="wd-font-grey">&nbsp;-&nbsp;{post.time}</span></p>
        <p className="wd-title wd-font-white wd-font-bold wd-font-size-15px wd-font-family-arial">
          {post.title}
        </p>
      </div>
      <div className="col-4 col-sm-4 col-lg-3 d-flex align-items-center justify-content-center">
        <img className="wd-rounded-corners-all-around"
             src={post.image}
             alt={post.userName}
             width="100px" height="100px"/>
      </div>
    </div>
  );
};

export default PostSummaryItem;