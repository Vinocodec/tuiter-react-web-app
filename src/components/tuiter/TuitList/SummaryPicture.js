import React from 'react';

const SummaryPicture = ({post}) => {
  if (post.title === undefined) {
    return (

      <div className="col-12">
        <div className="wd-border-1px wd-rounded-corners-all-around">
          <img className="img-fluid wd-rounded-corners-all-around" src={post.image} alt={post.postedBy.username}/>
        </div>
      </div>
    );
  } else {
    return (
      <>

        <div className="col-12">
          <div className="wd-border-1px wd-rounded-corners-top">
            <img className="img-fluid wd-rounded-corners-top" src={post.image} alt={post.postedBy.username}/>
          </div>
        </div>

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